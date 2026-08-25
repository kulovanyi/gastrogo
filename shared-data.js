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
                } else if (key === "serviceOrders") {
                    if (Array.isArray(value)) {
                        value.forEach(srv => {
                            if (srv && srv.id) {
                                const cleanSrv = JSON.parse(JSON.stringify(srv));
                                db.collection("serviceOrders").doc(srv.id).set(cleanSrv, { merge: true })
                                    .catch(err => console.error("Firestore serviceOrders write error:", err));
                            }
                        });
                    }
                } else if (key === "userProfiles") {
                    if (typeof value === "object" && value !== null) {
                        Object.keys(value).forEach(uName => {
                            const profileData = JSON.parse(JSON.stringify(value[uName]));
                            db.collection("userProfiles").doc(uName).set(profileData, { merge: true })
                                .catch(err => console.error("Firestore userProfiles write error:", err));
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
                } else if (key === "serviceOrders") {
                    db.collection("serviceOrders").onSnapshot(snapshot => {
                        const cloudServices = [];
                        snapshot.forEach(doc => cloudServices.push(doc.data()));
                        localStorage.setItem(prefix + "serviceOrders", JSON.stringify(cloudServices));
                        handler(cloudServices);
                    }, err => console.warn("Firestore serviceOrders subscription error:", err));
                } else if (key === "userProfiles") {
                    db.collection("userProfiles").onSnapshot(snapshot => {
                        const profilesMap = {};
                        snapshot.forEach(doc => { profilesMap[doc.id] = doc.data(); });
                        localStorage.setItem(prefix + "userProfiles", JSON.stringify(profilesMap));
                        handler(profilesMap);
                    }, err => console.warn("Firestore userProfiles subscription error:", err));
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

    // ================= AUTOMATIC END-OF-DAY ORDER CLEANUP & ARCHIVING =================
    function cleanupPastDayOrders() {
        const allOrders = read("orders", []);
        if (!Array.isArray(allOrders) || allOrders.length === 0) return;

        const now = new Date();
        const todayStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;

        const ordersToKeep = [];
        const ordersToRemove = [];

        allOrders.forEach(order => {
            if (!order) return;
            const st = (order.status || "").toLowerCase();
            const isCompleted = (st === "dispatched" || st === "delivered" || st === "completed");
            
            // Check createdTimestamp
            const createdTs = order.createdTimestamp ? Number(order.createdTimestamp) : 0;
            let isPastDay = false;
            
            if (createdTs > 0) {
                const ordDate = new Date(createdTs);
                const ordDateStr = `${ordDate.getFullYear()}-${String(ordDate.getMonth() + 1).padStart(2, '0')}-${String(ordDate.getDate()).padStart(2, '0')}`;
                
                // If created on a calendar day before today OR older than 12 hours
                if (ordDateStr < todayStr || (now.getTime() - createdTs > 12 * 60 * 60 * 1000)) {
                    isPastDay = true;
                }
            } else {
                // If no timestamp and completed, consider expired past order
                isPastDay = true;
            }

            if (isCompleted && isPastDay) {
                ordersToRemove.push(order);
            } else {
                ordersToKeep.push(order);
            }
        });

        if (ordersToRemove.length > 0) {
            console.log(`🧹 [GastroGoDB] ${ordersToRemove.length} db korábbi napról származó teljesített rendelés törlése és archiválása...`);
            archiveAndPurgeOrders(ordersToRemove, ordersToKeep);
        }
    }

    function manualArchiveDispatchedOrders(restaurantId = null) {
        const allOrders = read("orders", []);
        if (!Array.isArray(allOrders) || allOrders.length === 0) return 0;

        const ordersToKeep = [];
        const ordersToRemove = [];

        allOrders.forEach(order => {
            if (!order) return;
            const matchesRes = !restaurantId || order.restaurantId === restaurantId;
            const st = (order.status || "").toLowerCase();
            const isCompleted = (st === "dispatched" || st === "delivered" || st === "completed");

            if (matchesRes && isCompleted) {
                ordersToRemove.push(order);
            } else {
                ordersToKeep.push(order);
            }
        });

        if (ordersToRemove.length > 0) {
            console.log(`🧹 [GastroGoDB] Manuális nap végi takarítás: ${ordersToRemove.length} db rendelés archiválva.`);
            archiveAndPurgeOrders(ordersToRemove, ordersToKeep);
        }
        return ordersToRemove.length;
    }

    function archiveAndPurgeOrders(ordersToRemove, ordersToKeep) {
        // 1. Save to archivedOrders in localStorage
        const existingArchived = read("archivedOrders", []);
        const mergedArchived = [...existingArchived];
        ordersToRemove.forEach(rem => {
            if (!mergedArchived.find(a => a.id === rem.id)) {
                mergedArchived.push(rem);
            }
        });
        localStorage.setItem(prefix + "archivedOrders", JSON.stringify(mergedArchived));

        // 2. Write kept orders to local database
        localStorage.setItem(prefix + "orders", JSON.stringify(ordersToKeep));
        window.dispatchEvent(new CustomEvent("gastrogo:local_update", { detail: { key: "orders", value: ordersToKeep } }));

        // 3. Delete removed orders from Firebase Firestore directly & save to archivedOrders collection
        const db = getFirestore();
        if (db) {
            ordersToRemove.forEach(rem => {
                if (rem && rem.id) {
                    // Save to archivedOrders
                    db.collection("archivedOrders").doc(rem.id).set(JSON.parse(JSON.stringify(rem)), { merge: true }).catch(() => {});
                    // Delete from active orders
                    db.collection("orders").doc(rem.id).delete()
                        .then(() => console.log(`🗑️ Firestore aktív rendelés törölve: ${rem.id}`))
                        .catch(err => console.error("Firestore rendelés törlési hiba:", err));
                }
            });
        }
    }

    // Auto-run cleanup on initialization & every 5 minutes
    setTimeout(cleanupPastDayOrders, 2000);
    setInterval(cleanupPastDayOrders, 5 * 60 * 1000);

    return { 
        read, 
        write, 
        subscribe, 
        initCloudSeed, 
        cleanupPastDayOrders, 
        manualArchiveDispatchedOrders 
    };
})();

// ================= OFFICIAL 1-14 EU/HUNGARIAN ALLERGENS =================
window.OFFICIAL_ALLERGENS = [
    { id: 1, name: "Glutén", icon: "🌾", desc: "Glutént tartalmazó gabonafélék (búza, rozs, árpa, zab stb.)" },
    { id: 2, name: "Rákfélék", icon: "🦐", desc: "Rákfélék és belőlük készült termékek" },
    { id: 3, name: "Tojás", icon: "🥚", desc: "Tojás és belőle készült termékek" },
    { id: 4, name: "Halak", icon: "🐟", desc: "Hal és abból készült termékek" },
    { id: 5, name: "Földimogyoró", icon: "🥜", desc: "Földimogyoró és belőle készült termékek" },
    { id: 6, name: "Szójabab", icon: "🌱", desc: "Szójabab és belőle készült termékek" },
    { id: 7, name: "Tej / Laktóz", icon: "🥛", desc: "Tej és tejtermékek (beleértve a laktózt)" },
    { id: 8, name: "Diófélék", icon: "🌰", desc: "Diófélék (mandula, dió, mogyoró, kesudió stb.)" },
    { id: 9, name: "Zeller", icon: "🌿", desc: "Zeller és belőle készült termékek" },
    { id: 10, name: "Mustár", icon: "🟡", desc: "Mustár és belőle készült termékek" },
    { id: 11, name: "Szezámmag", icon: "⚪", desc: "Szezámmag és belőle készült termékek" },
    { id: 12, name: "Kén-dioxid / Szulfitok", icon: "🍷", desc: "Kén-dioxid és szulfitok (>10mg/kg vagy >10mg/l)" },
    { id: 13, name: "Csillagfürt", icon: "🌸", desc: "Csillagfürt és belőle készült termékek" },
    { id: 14, name: "Puhatestűek", icon: "🦪", desc: "Kagylók, polipok, csigák és tintahal" }
];
