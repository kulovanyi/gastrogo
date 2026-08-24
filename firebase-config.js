// ================= GASTROGO FIREBASE CONFIGURATION & CLOUD ADAPTER =================
// Cseréld ki az alábbi mezőket a saját Firebase projekted adataira a Firebase Console-ból!
// (Project settings -> General -> Your apps -> Web app -> Config)

window.firebaseConfig = {
    apiKey: "AIzaSyA_S8gKUDCMZW9IICBLtjd2QHNypBrAYnY",
    authDomain: "gastrogo-live.firebaseapp.com",
    projectId: "gastrogo-live",
    storageBucket: "gastrogo-live.firebasestorage.app",
    messagingSenderId: "567015274447",
    appId: "1:567015274447:web:57db1050f5ad1b10c604ba",
    measurementId: "G-5C32WJEQD5"
};

// ================= FIREBASE INITIALIZATION & FALLBACK LOGIC =================
window.isFirebaseReady = false;
let firestoreDb = null;

try {
    if (typeof firebase !== "undefined" && window.firebaseConfig && window.firebaseConfig.projectId !== "YOUR_PROJECT_ID") {
        if (!firebase.apps.length) {
            firebase.initializeApp(window.firebaseConfig);
        }
        firestoreDb = firebase.firestore();
        window.firestoreDb = firestoreDb;
        window.isFirebaseReady = true;
        console.log("🔥 GastroGo: Firebase Firestore sikeresen inicializálva!");
    } else {
        console.info("ℹ️ GastroGo: Firebase még nincs konfigurálva, helyi hibrid DB aktív.");
    }
} catch (err) {
    console.warn("⚠️ Firebase inicializálási hiba (helyi mód aktív):", err);
}

// ================= ENHANCED GASTROGO DB DRIVER =================
window.GastroGoDB = (() => {
    const prefix = "gastrogo:";
    const subscribers = {};

    function read(key, fallback) {
        try {
            const raw = localStorage.getItem(prefix + key);
            return raw === null ? fallback : JSON.parse(raw);
        } catch (e) {
            return fallback;
        }
    }

    function write(key, value) {
        // 1. Mentés helyi tárolóba azonnali UI reakcióért
        try {
            localStorage.setItem(prefix + key, JSON.stringify(value));
            window.dispatchEvent(new CustomEvent("gastrogo:local_update", { detail: { key, value } }));
        } catch (e) {}

        // 2. Szinkronizálás a felhőbe (Firebase Firestore) ha elérhető
        if (window.isFirebaseReady && firestoreDb) {
            try {
                if (key === "orders") {
                    if (Array.isArray(value)) {
                        value.forEach(order => {
                            if (order && order.id) {
                                firestoreDb.collection("orders").doc(order.id).set(order, { merge: true }).catch(err => console.error("Firestore order write error:", err));
                            }
                        });
                    }
                } else if (key === "restaurants") {
                    if (Array.isArray(value)) {
                        value.forEach(res => {
                            if (res && res.id) {
                                firestoreDb.collection("restaurants").doc(res.id).set(res, { merge: true }).catch(err => console.error("Firestore restaurant write error:", err));
                            }
                        });
                    }
                } else if (key === "restaurantSettings") {
                    firestoreDb.collection("system").doc("restaurantSettings").set(value, { merge: true }).catch(err => console.error("Firestore settings write error:", err));
                }
            } catch (cloudErr) {
                console.error("Felhő szinkronizációs hiba:", cloudErr);
            }
        }
    }

    function subscribe(key, handler) {
        if (!subscribers[key]) subscribers[key] = [];
        subscribers[key].push(handler);

        // Helyi változások figyelése
        window.addEventListener("storage", event => {
            if (event.key === prefix + key && event.newValue) {
                try { handler(JSON.parse(event.newValue)); } catch (e) {}
            }
        });

        window.addEventListener("gastrogo:local_update", event => {
            if (event.detail && event.detail.key === key) {
                handler(event.detail.value);
            }
        });

        // Valós idejű Firebase Firestore figyelő (Realtime listener)
        if (window.isFirebaseReady && firestoreDb) {
            try {
                if (key === "orders") {
                    firestoreDb.collection("orders").onSnapshot(snapshot => {
                        const cloudOrders = [];
                        snapshot.forEach(doc => cloudOrders.push(doc.data()));
                        localStorage.setItem(prefix + "orders", JSON.stringify(cloudOrders));
                        handler(cloudOrders);
                    }, err => console.warn("Firestore orders subscription error:", err));
                } else if (key === "restaurants") {
                    firestoreDb.collection("restaurants").onSnapshot(snapshot => {
                        const cloudRestaurants = [];
                        snapshot.forEach(doc => cloudRestaurants.push(doc.data()));
                        if (cloudRestaurants.length > 0) {
                            localStorage.setItem(prefix + "restaurants", JSON.stringify(cloudRestaurants));
                            handler(cloudRestaurants);
                        }
                    }, err => console.warn("Firestore restaurants subscription error:", err));
                } else if (key === "restaurantSettings") {
                    firestoreDb.collection("system").doc("restaurantSettings").onSnapshot(doc => {
                        if (doc.exists) {
                            const cloudSettings = doc.data();
                            localStorage.setItem(prefix + "restaurantSettings", JSON.stringify(cloudSettings));
                            handler(cloudSettings);
                        }
                    }, err => console.warn("Firestore settings subscription error:", err));
                }
            } catch (subErr) {
                console.error("Firebase feliratkozási hiba:", subErr);
            }
        }
    }

    return { read, write, subscribe };
})();
