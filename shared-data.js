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

// ================= GLOBAL RESTAURANT OPENING HOURS & PRE-ORDER STATUS CALCULATOR =================
window.getRestaurantOpenStatus = function(restaurant, now = new Date()) {
    if (!restaurant) return { status: "CLOSED", badgeText: "Zárva", badgeClass: "status-closed", isOrderable: false, message: "Az étterem jelenleg nem elérhető." };

    // 1. Check manual override
    if (restaurant.manualOverrideStatus === "forced_open") {
        return { 
            status: "OPEN", 
            badgeText: "🟢 Nyitva", 
            badgeClass: "status-open", 
            isOrderable: true, 
            isPreOrder: false,
            message: "Nyitva tart, azonnali rendelésfelvétel." 
        };
    }
    if (restaurant.manualOverrideStatus === "forced_closed") {
        return { 
            status: "CLOSED", 
            badgeText: "🔴 Rendkívüli szünet", 
            badgeClass: "status-closed", 
            isOrderable: false, 
            isPreOrder: false,
            message: "Az étterem átmenetileg szünetelteti a rendelésfelvételt." 
        };
    }

    // Default fallback schedule if none exists
    const schedule = restaurant.openingHours || {
        mon: { open: "11:00", close: "22:00", closed: false },
        tue: { open: "11:00", close: "22:00", closed: false },
        wed: { open: "11:00", close: "22:00", closed: false },
        thu: { open: "11:00", close: "22:00", closed: false },
        fri: { open: "11:00", close: "23:00", closed: false },
        sat: { open: "11:00", close: "23:00", closed: false },
        sun: { open: "11:00", close: "21:00", closed: false }
    };

    const dayKeys = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    const dayNames = { mon: "Hétfő", tue: "Kedd", wed: "Szerda", thu: "Csütörtök", fri: "Péntek", sat: "Szombat", sun: "Vasárnap" };
    const currentDayIndex = now.getDay();
    const currentDayKey = dayKeys[currentDayIndex];
    const todaySched = schedule[currentDayKey] || { open: "11:00", close: "22:00", closed: false };

    const currentMinutes = now.getHours() * 60 + now.getMinutes();

    function parseTimeToMinutes(timeStr) {
        if (!timeStr) return 0;
        const parts = timeStr.split(":").map(Number);
        return (parts[0] || 0) * 60 + (parts[1] || 0);
    }

    const preOrderMinutes = restaurant.preOrderLeadTimeMinutes !== undefined ? Number(restaurant.preOrderLeadTimeMinutes) : 60;

    if (!todaySched.closed && todaySched.open && todaySched.close) {
        const openMinutes = parseTimeToMinutes(todaySched.open);
        const closeMinutes = parseTimeToMinutes(todaySched.close);
        const preOrderStartMinutes = Math.max(0, openMinutes - preOrderMinutes);

        // A. OPEN NOW (Inside business hours)
        if (currentMinutes >= openMinutes && currentMinutes < closeMinutes) {
            return {
                status: "OPEN",
                badgeText: `🟢 Nyitva (${todaySched.close}-ig)`,
                badgeClass: "status-open",
                isOrderable: true,
                isPreOrder: false,
                openTime: todaySched.open,
                closeTime: todaySched.close,
                message: `Nyitva tart: ${todaySched.open} - ${todaySched.close}`
            };
        }

        // B. PRE-ORDER TIME WINDOW (Before opening within preOrderMinutes buffer)
        if (preOrderMinutes > 0 && currentMinutes >= preOrderStartMinutes && currentMinutes < openMinutes) {
            return {
                status: "PREORDER",
                badgeText: `⏱️ Előrendelés (Nyitás: ${todaySched.open})`,
                badgeClass: "status-preorder",
                isOrderable: true,
                isPreOrder: true,
                openTime: todaySched.open,
                closeTime: todaySched.close,
                message: `Előrendelési időszak! Nyitás: ${todaySched.open}. A rendeléseket a nyitáskor azonnal készítik.`
            };
        }
    }

    // C. CLOSED (Find next opening time)
    // Check if opening later today
    if (!todaySched.closed && todaySched.open) {
        const openMin = parseTimeToMinutes(todaySched.open);
        if (currentMinutes < openMin) {
            const preOrderStart = Math.max(0, openMin - preOrderMinutes);
            const preOrderHour = String(Math.floor(preOrderStart / 60)).padStart(2, '0');
            const preOrderMin = String(preOrderStart % 60).padStart(2, '0');
            return {
                status: "CLOSED",
                badgeText: `🔴 Zárva (Nyitás: ${todaySched.open})`,
                badgeClass: "status-closed",
                isOrderable: false,
                isPreOrder: false,
                nextOpenText: `Ma ${todaySched.open}`,
                message: `Az étterem jelenleg zárva tart. Nyitás: Ma ${todaySched.open} (Előrendelés ${preOrderMinutes > 0 ? preOrderHour + ":" + preOrderMin + "-tól" : todaySched.open + "-tól"}).`
            };
        }
    }

    // Find next open day in the upcoming week
    for (let i = 1; i <= 7; i++) {
        const nextDayIndex = (currentDayIndex + i) % 7;
        const nextKey = dayKeys[nextDayIndex];
        const nextSched = schedule[nextKey];
        if (nextSched && !nextSched.closed && nextSched.open) {
            const dayLabel = i === 1 ? "Holnap" : dayNames[nextKey];
            return {
                status: "CLOSED",
                badgeText: `🔴 Zárva (Nyitás: ${dayLabel} ${nextSched.open})`,
                badgeClass: "status-closed",
                isOrderable: false,
                isPreOrder: false,
                nextOpenText: `${dayLabel} ${nextSched.open}`,
                message: `Az étterem jelenleg zárva tart. Következő nyitás: ${dayLabel} ${nextSched.open}.`
            };
        }
    }

    return {
        status: "CLOSED",
        badgeText: "🔴 Zárva",
        badgeClass: "status-closed",
        isOrderable: false,
        isPreOrder: false,
        nextOpenText: "Hamarosan",
        message: "Az étterem jelenleg zárva tart."
    };
};

// ================= LIVE INTERNET GEOCODING & SETTLEMENTS SEARCH API =================
window.searchHungarianSettlementsOnline = async function(query) {
    if (!query || query.trim().length === 0) return [];
    const q = query.trim();
    const isNationwideQuery = q.toLowerCase().includes("ország") || q.toLowerCase().includes("minden");

    let results = [];
    if (isNationwideQuery) {
        results.push({ name: "Országos (Mindenhova)", county: "Egész Magyarország", isNationwide: true });
    }

    try {
        // Direct Open-Meteo Geocoding API with strict Hungary (HU) country validation
        const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(q)}&language=hu&count=20`;
        const res = await fetch(url);
        if (res.ok) {
            const data = await res.json();
            if (data && Array.isArray(data.results)) {
                data.results.forEach(item => {
                    // Strict Hungary Only Guard
                    const isHU = (item.country_code && item.country_code.toUpperCase() === "HU") ||
                                 (item.country && (item.country === "Magyarország" || item.country === "Hungary")) ||
                                 (item.country_id === 719819);

                    if (isHU && item.name && !results.some(r => r.name.toLowerCase() === item.name.toLowerCase())) {
                        results.push({
                            name: item.name,
                            county: item.admin1 ? (item.admin1.includes("megye") || item.admin1.includes("Budapest") ? item.admin1 : `${item.admin1} megye`) : "Magyarország",
                            lat: item.latitude,
                            lng: item.longitude
                        });
                    }
                });
            }
        }
    } catch (err) {
        console.warn("Online geocoding network notice:", err);
    }

    return results;
};

// ================= LIVE GPS REVERSE GEOCODING (ONLINE NOMINATIM / BIGDATACLOUD) =================
window.getSettlementFromCoordinatesOnline = async function(lat, lng) {
    if (typeof lat !== "number" || typeof lng !== "number") return "Budapest";

    try {
        // OpenStreetMap Nominatim reverse geocode for real settlement name (village, town, suburb)
        const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=14&addressdetails=1&accept-language=hu`;
        const res = await fetch(url);
        if (res.ok) {
            const data = await res.json();
            if (data && data.address) {
                const addr = data.address;
                const settlement = addr.city || addr.town || addr.village || addr.municipality || addr.hamlet || addr.suburb || addr.county || "Magyarország";
                return settlement;
            }
        }
    } catch (e) {
        console.warn("Reverse geocode network fallback:", e);
    }

    return "Magyarország";
};

// ================= LOCATION NORMALIZER & DELIVERY AVAILABILITY CHECKER =================
window.normalizeLocationString = function(str) {
    if (!str) return "";
    return str.toString()
        .toLowerCase()
        .replace(/[,.-]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
};

window.isDeliveryAvailableForLocation = function(restaurant, targetLocation) {
    if (!restaurant) return { available: false, message: "Étterem nem található" };
    if (!targetLocation) return { available: true, message: "Nincs megadva szűrés" };

    const locs = Array.isArray(restaurant.deliveryLocations) && restaurant.deliveryLocations.length > 0
        ? restaurant.deliveryLocations
        : ["Budapest", "Országos"]; // Default coverage if unconfigured

    const normTarget = window.normalizeLocationString(targetLocation);

    // If restaurant delivers nationwide ("Országos" or "Mindenhova")
    const isNationwide = locs.some(loc => {
        const n = window.normalizeLocationString(loc);
        return n.includes("országos") || n.includes("mindenhova") || n === "all" || n === "*";
    });
    if (isNationwide) {
        return { available: true, isNationwide: true, matchedZone: "Országos kiszállítás" };
    }

    // Match by exact or partial substring
    const matched = locs.find(loc => {
        const normLoc = window.normalizeLocationString(loc);
        if (!normLoc) return false;
        
        // Budapest special: if target is Budapest or any district and restaurant delivers to Budapest
        if ((normTarget.includes("budapest") || normTarget.includes("kerület")) && (normLoc.includes("budapest") || normLoc.includes("bp"))) {
            return true;
        }
        
        return normTarget.includes(normLoc) || normLoc.includes(normTarget);
    });

    if (matched) {
        return { available: true, isNationwide: false, matchedZone: matched };
    }

    return {
        available: false,
        isNationwide: false,
        allowedZones: locs,
        message: `Erre a területre (${targetLocation}) ez az étterem nem vállal kiszállítást. Elérhető zónák: ${locs.join(", ")}`
    };
};



