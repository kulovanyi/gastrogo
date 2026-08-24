// ================= GASTROGO UNIFIED REALTIME CLOUD DATABASE (FIREBASE FIRESTORE 100%) =================
window.GastroGoDB = (() => {
    const prefix = "gastrogo:";

    function getFirestore() {
        if (window.firestoreDb) return window.firestoreDb;
        if (typeof firebase !== "undefined" && firebase.apps && firebase.apps.length > 0) {
            window.firestoreDb = firebase.firestore();
            return window.firestoreDb;
        }
        return null;
    }

    function read(key, fallback) {
        try {
            const storageKey = prefix + key;
            const value = localStorage.getItem(storageKey);
            return value === null ? fallback : JSON.parse(value);
        } catch (error) {
            console.warn(`A(z) ${key} adat nem olvasható.`, error);
            return fallback;
        }
    }

    function write(key, value) {
        // 1. Helyi gyorsítótár azonnali UI frissítéshez
        try {
            localStorage.setItem(prefix + key, JSON.stringify(value));
            window.dispatchEvent(new CustomEvent("gastrogo:local_update", { detail: { key, value } }));
        } catch (e) {}

        // 2. 100% Valós idejű Firebase Firestore felhő szinkronizáció
        const db = getFirestore();
        if (db) {
            try {
                if (key === "orders") {
                    if (Array.isArray(value)) {
                        value.forEach(order => {
                            if (order && order.id) {
                                const cleanOrder = JSON.parse(JSON.stringify(order));
                                db.collection("orders").doc(order.id).set(cleanOrder, { merge: true })
                                    .catch(err => console.error("Firestore order write error:", err));
                            }
                        });
                    }
                } else if (key === "restaurants") {
                    if (Array.isArray(value)) {
                        value.forEach(res => {
                            if (res && res.id) {
                                const cleanRes = JSON.parse(JSON.stringify(res));
                                db.collection("restaurants").doc(res.id).set(cleanRes, { merge: true })
                                    .catch(err => console.error("Firestore restaurant write error:", err));
                            }
                        });
                    }
                } else if (key === "reviews") {
                    if (Array.isArray(value)) {
                        value.forEach(rev => {
                            if (rev && rev.id) {
                                const cleanRev = JSON.parse(JSON.stringify(rev));
                                db.collection("reviews").doc(rev.id).set(cleanRev, { merge: true })
                                    .catch(err => console.error("Firestore review write error:", err));
                            }
                        });
                    }
                } else if (key === "commissionRate" || key === "convenienceFee") {
                    const updateObj = {};
                    updateObj[key] = value;
                    db.collection("system").doc("settings").set(updateObj, { merge: true })
                        .catch(err => console.error("Firestore settings write error:", err));
                }
            } catch (cloudErr) {
                console.error("Felhő szinkronizációs hiba:", cloudErr);
            }
        }
    }

    function subscribe(key, handler) {
        // Helyi változások figyelése
        window.addEventListener("storage", event => {
            if (event.key !== prefix + key || !event.newValue) return;
            try {
                handler(JSON.parse(event.newValue));
            } catch (error) {
                console.warn(`A(z) ${key} frissítés nem olvasható.`, error);
            }
        });

        window.addEventListener("gastrogo:local_update", event => {
            if (event.detail && event.detail.key === key) {
                handler(event.detail.value);
            }
        });

        // Firebase Firestore Realtime Listeners (Élő felhő figyelők)
        const db = getFirestore();
        if (db) {
            try {
                if (key === "orders") {
                    db.collection("orders").onSnapshot(snapshot => {
                        const cloudOrders = [];
                        snapshot.forEach(doc => cloudOrders.push(doc.data()));
                        localStorage.setItem(prefix + "orders", JSON.stringify(cloudOrders));
                        handler(cloudOrders);
                    }, err => console.warn("Firestore orders subscription error:", err));
                } else if (key === "restaurants") {
                    db.collection("restaurants").onSnapshot(snapshot => {
                        const cloudRestaurants = [];
                        snapshot.forEach(doc => cloudRestaurants.push(doc.data()));
                        if (cloudRestaurants.length > 0) {
                            localStorage.setItem(prefix + "restaurants", JSON.stringify(cloudRestaurants));
                            handler(cloudRestaurants);
                        }
                    }, err => console.warn("Firestore restaurants subscription error:", err));
                } else if (key === "reviews") {
                    db.collection("reviews").onSnapshot(snapshot => {
                        const cloudReviews = [];
                        snapshot.forEach(doc => cloudReviews.push(doc.data()));
                        localStorage.setItem(prefix + "reviews", JSON.stringify(cloudReviews));
                        handler(cloudReviews);
                    }, err => console.warn("Firestore reviews subscription error:", err));
                } else if (key === "commissionRate" || key === "convenienceFee") {
                    db.collection("system").doc("settings").onSnapshot(doc => {
                        if (doc.exists) {
                            const data = doc.data();
                            if (data[key] !== undefined) {
                                localStorage.setItem(prefix + key, JSON.stringify(data[key]));
                                handler(data[key]);
                            }
                        }
                    }, err => console.warn("Firestore settings subscription error:", err));
                }
            } catch (subErr) {
                console.error("Firebase feliratkozási hiba:", subErr);
            }
        }
    }

    // Inicializáló: ha a felhőben még nincs étterem adat, egyszer feltölti a kezdeti 4 éttermet a Firestore-ba
    function initCloudSeed(initialRestaurants, initialReviews) {
        const db = getFirestore();
        if (!db) return;

        db.collection("restaurants").get().then(snapshot => {
            if (snapshot.empty && Array.isArray(initialRestaurants) && initialRestaurants.length > 0) {
                console.log("☁️ Firestore üres, kezdeti éttermek feltöltése a felhőbe...");
                initialRestaurants.forEach(res => {
                    db.collection("restaurants").doc(res.id).set(JSON.parse(JSON.stringify(res))).catch(() => {});
                });
            }
        }).catch(() => {});

        db.collection("reviews").get().then(snapshot => {
            if (snapshot.empty && Array.isArray(initialReviews) && initialReviews.length > 0) {
                console.log("☁️ Firestore üres, kezdeti értékelések feltöltése a felhőbe...");
                initialReviews.forEach(rev => {
                    db.collection("reviews").doc(rev.id).set(JSON.parse(JSON.stringify(rev))).catch(() => {});
                });
            }
        }).catch(() => {});

        db.collection("system").doc("settings").get().then(doc => {
            if (!doc.exists) {
                db.collection("system").doc("settings").set({ commissionRate: 7, convenienceFee: 99 }).catch(() => {});
            }
        }).catch(() => {});
    }

    return { read, write, subscribe, initCloudSeed };
})();
