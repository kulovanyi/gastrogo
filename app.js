// ================= DATA MODELS (4 DIVERSE CUISINES WITH TOPPINGS, CATEGORIES & HELPLINES) =================
const restaurants = [
    {
        id: "r1",
        name: "Vár Pizzéria",
        category: "pizza",
        description: "Kemencés nápolyi pizzák és olasz tészta különlegességek.",
        rating: "4.8",
        time: "20-30 perc",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        deliveryFee: 300,
        phone: "+36 35 301 245",
        categories: ["Akciós Menük", "Pizza", "Tészták", "Desszertek", "Italok"],
        menu: [
            {
                id: "r1-f1",
                name: "Margaréta Pizza",
                category: "Pizza",
                description: "Paradicsomszósz, bivaly mozzarella, friss bazsalikom, olívaolaj.",
                price: 1990,
                image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                toppings: [],
                allergens: [1, 7]
            },
            {
                id: "r1-f2",
                name: "Diavola Spicy Pizza",
                category: "Pizza",
                description: "Csípős olasz szalámi, jalapeño karikák, mozzarella, paradicsomszósz.",
                price: 2390,
                image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                toppings: [],
                allergens: [1, 7]
            },
            {
                id: "r1-f3",
                name: "Coca-Cola",
                category: "Italok",
                description: "0.33l dobozos klasszikus szénsavas üdítőital.",
                price: 490,
                image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                toppings: [],
                allergens: []
            },
            {
                id: "r1-f4",
                name: "Somlói Galuska",
                category: "Desszertek",
                description: "Klasszikus magyar édesség gazdag csokoládéöntettel és tejszínhabbal.",
                price: 1290,
                image: "https://images.unsplash.com/photo-1579372786545-d24232daf58c?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                toppings: [],
                allergens: [1, 3, 7, 8]
            },
            {
                id: "r1-f5",
                name: "Prosciutto e Funghi Pizza",
                category: "Pizza",
                description: "Paradicsomszósz, mozzarella, érlelt olasz sonka, friss szeletelt csiperkegomba.",
                price: 2390,
                image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                toppings: [],
                allergens: [1, 7]
            },
            {
                id: "r1-f6",
                name: "Quattro Formaggi Pizza",
                category: "Pizza",
                description: "Négyféle sajtos csoda: gorgonzola, mozzarella, parmezán, pecorino.",
                price: 2490,
                image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                toppings: [],
                allergens: [1, 7]
            },
            {
                id: "r1-f7",
                name: "Tonno e Cipolla Pizza",
                category: "Pizza",
                description: "Paradicsomos alap, mozzarella sajt, tonhaldarabok, lilahagyma karikák, olívabogyó.",
                price: 2490,
                image: "https://images.unsplash.com/photo-1573821663912-569905455b1c?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                toppings: [],
                allergens: [1, 4, 7]
            },
            {
                id: "r1-f8",
                name: "Ungherese Pizza (Magyaros)",
                category: "Pizza",
                description: "Fűszeres paradicsomos alap, házi kolbász, bacon szeletek, lilahagyma, hegyes erős paprika.",
                price: 2590,
                image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                toppings: [],
                allergens: [1, 7]
            },
            {
                id: "r1-f9",
                name: "Calzone (Félbehajtott Pizza)",
                category: "Pizza",
                description: "Félbehajtott kemencés tészta sonkával, gombával, ricottával és mozzarellával töltve.",
                price: 2590,
                image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                toppings: [],
                allergens: [1, 7]
            },
            {
                id: "r1-f10",
                name: "Bolognai Spagetti",
                category: "Tészták",
                description: "Lassan főzött marhahúsos ragu, spagetti tészta, reszelt parmezán sajt.",
                price: 2290,
                image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                toppings: [],
                allergens: [1, 7, 9]
            },
            {
                id: "r1-f11",
                name: "Carbonara Spagetti",
                category: "Tészták",
                description: "Tejszín nélkül! Pirított guanciale (tokaszalonna), tojássárgája, pecorino sajt.",
                price: 2390,
                image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                toppings: [],
                allergens: [1, 3, 7]
            },
            {
                id: "r1-f12",
                name: "Lasagne Al Forno",
                category: "Tészták",
                description: "Tésztalapok közé rétegezett bolognai ragu, krémes besamel mártás, kemencében sütve.",
                price: 2690,
                image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                toppings: [],
                allergens: [1, 3, 7, 9]
            },
            {
                id: "r1-f13",
                name: "Gnocchi Sorrento",
                category: "Tészták",
                description: "Burgonyás gnocchi gazdag paradicsomszószban, friss mozzarellával egybesütve.",
                price: 2290,
                image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                toppings: []
            },
            {
                id: "r1-f14",
                name: "Klasszikus Olasz Tiramisu",
                category: "Desszertek",
                description: "Mascarpone krém, kávéba és amarattóba áztatott babapiskóta, holland kakaópor.",
                price: 1190,
                image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                toppings: []
            },
            {
                id: "r1-f15",
                name: "Erdei Gyümölcsös Panna Cotta",
                category: "Desszertek",
                description: "Főzött krémdesszert vanília rúd darabkákkal, savanykás piros bogyós gyümölcsöntettel.",
                price: 1090,
                image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                toppings: []
            },
            {
                id: "r1-f16",
                name: "Folyékony Csokoládés Szuflé",
                category: "Desszertek",
                description: "Meleg csokoládés piskóta lágy, folyós belsővel, vanília fagylalttal szervírozva.",
                price: 1290,
                image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                toppings: []
            },
            {
                id: "r1-f17",
                name: "Fanta Narancs",
                category: "Italok",
                description: "0.33l dobozos szénsavas narancsízű üdítőital.",
                price: 490,
                image: "https://images.unsplash.com/photo-1624552184280-9e9631bbeee9?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                toppings: []
            },
            {
                id: "r1-f18",
                name: "Sprite Lemon-Lime",
                category: "Italok",
                description: "0.33l dobozos citrom-limonádé ízű frissítő szénsavas ital.",
                price: 490,
                image: "https://images.unsplash.com/photo-1625772290748-390939a2001e?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                toppings: []
            },
            {
                id: "r1-f19",
                name: "Krémes Cappuccino",
                category: "Italok",
                description: "Házias espresso kávé sűrű, meleg tejhabbal és kakaóporral meghintve.",
                price: 690,
                image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                toppings: []
            },
            {
                id: "r1-f20",
                name: "Családi Pizza Menü",
                category: "Akciós Menük",
                description: "2 db kemencés Margaréta pizza és 1 db ajándék 0.33l-es Coca-Cola.",
                price: 3990,
                image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                toppings: []
            },
            {
                id: "r1-f21",
                name: "Spagetti & Tiramisu Menü",
                category: "Akciós Menük",
                description: "1 adag Bolognai spagetti, 1 adag Klasszikus Olasz tiramisu és 1 db krémes Cappuccino.",
                price: 3490,
                image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                toppings: []
            }
        ]
    },
    {
        id: "r2",
        name: "Burger Haven",
        category: "burger",
        description: "Prémium marhahúsból készült szaftos kézműves burgerek.",
        rating: "4.9",
        time: "15-25 perc",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        deliveryFee: 0,
        phone: "+36 35 412 879",
        categories: ["Burger", "Köretek", "Italok"],
        menu: [
            {
                id: "r2-f1",
                name: "Haven Classic Burger",
                category: "Burger",
                description: "150g marhahúspogácsa, cheddar sajt, házi szósz, csemegeuborka, pirított briós zsemle.",
                price: 2490,
                image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                toppings: []
            },
            {
                id: "r2-f2",
                name: "Füstös Bacon Burger",
                category: "Burger",
                description: "150g marhahúspogácsa, dupla ropogós bacon, füstös BBQ szósz, pirított hagyma, cheddar.",
                price: 2890,
                image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                toppings: []
            }
        ]
    },
    {
        id: "r3",
        name: "Istambul Gyros & Grill",
        category: "gyros",
        description: "Autentikus fűszerezésű tálak, wrapok és frissen sült húsok.",
        rating: "4.7",
        time: "15-20 perc",
        image: "https://images.unsplash.com/photo-1626700051175-6518c4793fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        deliveryFee: 200,
        phone: "+36 35 523 961",
        categories: ["Főétel", "Gyors étel", "Italok"],
        menu: [
            {
                id: "r3-f1",
                name: "Gyros Tál",
                category: "Főétel",
                description: "Fűszeres csirkehús, hasábburgonya, friss kevert saláta, választható öntet, házi pita.",
                price: 2290,
                image: "https://images.unsplash.com/photo-1626700051175-6518c4793fde?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                toppings: []
            },
            {
                id: "r3-f2",
                name: "Gyros Kifliben",
                category: "Gyors étel",
                description: "Fűszeres hús csíkok, saláta, paradicsom, hagyma, fokhagymás és csípős szósz, friss ropogós kifli.",
                price: 1490,
                image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                toppings: []
            }
        ]
    },
    {
        id: "r4",
        name: "Központi Étkezde",
        category: "menu",
        description: "Házias ebédmenük és hagyományos magyar fogások minden nap.",
        rating: "4.6",
        time: "10-15 perc",
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        deliveryFee: 400,
        phone: "+36 35 634 012",
        categories: ["Napi Menü", "Levesek", "Desszertek"],
        menu: [
            {
                id: "r4-f1",
                name: "A Menü (Húsleves + Rántott szelet)",
                category: "Napi Menü",
                description: "Húsleves cérnametélttel, rántott sertéskaraj burgonyapürével és házi csemegeuborkával.",
                price: 2190,
                image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                toppings: []
            },
            {
                id: "r4-f2",
                name: "B Menü (Gulyásleves + Túrós csusza)",
                category: "Napi Menü",
                description: "Házias bográcsos gulyásleves marhahúsból, túrós csusza pörccel.",
                price: 2390,
                image: "https://images.unsplash.com/photo-1594756202469-9ff9799b2e4e?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                toppings: []
            }
        ]
    }
];

const savedRestaurantData = (typeof GastroGoDB !== "undefined" && typeof GastroGoDB.read === "function") 
    ? GastroGoDB.read("restaurants", null) 
    : null;
if (Array.isArray(savedRestaurantData) && savedRestaurantData.length > 0) {
    restaurants.splice(0, restaurants.length, ...savedRestaurantData);
}

window.ordersDb = (typeof GastroGoDB !== "undefined" && typeof GastroGoDB.read === "function") 
    ? GastroGoDB.read("orders", []) 
    : [];
const orders = window.ordersDb;
let lastPlacedOrderId = null;

// User Accounts Management
function getRegisteredUsers() {
    try {
        const raw = localStorage.getItem("gastrogo_registered_users");
        return raw ? JSON.parse(raw) : {};
    } catch (e) {
        return {};
    }
}

function saveRegisteredUser(userObj) {
    const users = getRegisteredUsers();
    users[userObj.username.toLowerCase()] = userObj;
    try {
        localStorage.setItem("gastrogo_registered_users", JSON.stringify(users));
    } catch (e) {}
}

// ================= GLOBAL REVIEWS STATE =================
if (!window.reviewsDb) {
    window.reviewsDb = [
        {
            id: "rev-1",
            restaurantId: "r1",
            customerName: "Péter",
            rating: 5,
            comment: "Gyors szállítás, a pizza nagyon finom és forró volt!",
            date: "2026. 08. 22."
        },
        {
            id: "rev-2",
            restaurantId: "r1",
            customerName: "Katalin",
            rating: 4,
            comment: "Nagyon ízletes, a Somlói kiemelkedő!",
            date: "2026. 08. 22."
        }
    ];
}
const reviews = window.reviewsDb;

// Auto-wipe any legacy synthetic mock orders & past day completed orders from Firebase Firestore
try {
    if (window.GastroGoDB && typeof window.GastroGoDB.cleanupPastDayOrders === "function") {
        window.GastroGoDB.cleanupPastDayOrders();
    }
    const db = window.firestoreDb || (typeof firebase !== "undefined" && firebase.apps && firebase.apps.length > 0 ? firebase.firestore() : null);
    if (db) {
        db.collection("orders").get().then(snapshot => {
            snapshot.forEach(doc => {
                if (doc.id && doc.id.startsWith("ord-gen-")) {
                    doc.ref.delete().catch(() => {});
                }
            });
        }).catch(() => {});
    }
} catch (e) {}

try {
    const savedRestaurantSettings = (typeof GastroGoDB !== "undefined" && typeof GastroGoDB.read === "function") 
        ? GastroGoDB.read("restaurantSettings", {}) 
        : {};
    Object.entries(savedRestaurantSettings).forEach(([restaurantId, settings]) => {
        const restaurant = restaurants.find(item => item.id === restaurantId);
        if (restaurant) {
            Object.assign(restaurant, settings);
            restaurant.deliveryConfigured = true;
        }
    });
} catch (error) {
    console.warn("Az éttermi beállítások nem tölthetők be.", error);
}

// ================= GLOBAL PREPARATION METRICS STATE =================
if (!window.napszakStats) {
    window.napszakStats = {
        morning: [14, 16, 12, 15],
        afternoon: [25, 28, 22, 26],
        evening: [19, 21, 18, 20]
    };
}
const napszakStats = window.napszakStats;
let refreshTimeLeft = 10 * 60;

// ================= APP STATE =================
let currentUser = null;
let currentUserRole = "customer";
let currentScreen = "screen-home";
let activeRestaurant = null;
let activeTab = "explore";
let activeCategory = "all";
let savedRestaurants = [];
let cart = [];

let customizingItem = null;

// ================= TIME OF DAY (NAPSZAK) LOGIC =================
function getCurrentNapszak() {
    const hours = new Date().getHours();
    if (hours >= 6 && hours < 12) return "morning";
    if (hours >= 12 && hours < 18) return "afternoon";
    return "evening";
}

function getAveragePrepTime(napszakKey) {
    const list = napszakStats[napszakKey];
    if (!list || list.length === 0) return 20;
    const sum = list.reduce((s, v) => s + v, 0);
    return Math.round(sum / list.length);
}

// ================= DYNAMIC RATINGS & DELIVERY TIME CALCULATION =================
function getRestaurantAverageRating(resId, defaultRating = "4.8") {
    const allReviews = (typeof reviews !== "undefined" && Array.isArray(reviews)) ? reviews : GastroGoDB.read("reviews", []);
    const resReviews = allReviews.filter(r => r.restaurantId === resId);
    if (resReviews.length === 0) return defaultRating;
    const sum = resReviews.reduce((s, r) => s + (Number(r.rating) || 0), 0);
    return (sum / resReviews.length).toFixed(1);
}

function getLiveRestaurantDeliveryTime(restaurant) {
    if (!restaurant) return "25-35 perc";
    
    const napszakKey = (typeof getCurrentNapszak === "function") ? getCurrentNapszak() : "afternoon";
    const basePrep = (typeof getAveragePrepTime === "function") ? getAveragePrepTime(napszakKey) : 20;

    const allOrders = (typeof orders !== "undefined" && Array.isArray(orders)) ? orders : GastroGoDB.read("orders", []);
    const activeOrders = allOrders.filter(o => 
        o.restaurantId === restaurant.id && 
        (o.status === "pending" || o.status === "preparing" || o.status === "készül" || o.status === "új" || o.status === "folyamatban")
    );
    
    const loadExtra = Math.min(25, activeOrders.length * 3);
    const minTime = Math.max(15, basePrep + 5 + loadExtra);
    const maxTime = minTime + 10;
    return `${minTime}-${maxTime} perc`;
}

// ================= NAVIGATION SYSTEM =================
function navigateTo(screenId) {
    document.querySelectorAll(".screen").forEach(s => {
        s.classList.remove("active");
        s.classList.remove("slide-left");
    });

    const nextScreen = document.getElementById(screenId);
    if (nextScreen) {
        nextScreen.classList.add("active");
        currentScreen = screenId;
    }

    if (screenId === "screen-login") {
        window.location.href = "index.html";
        return;
    }
    document.body.classList.remove("auth-mode");

    // Dynamic bottom position class when viewing menu
    document.body.classList.toggle("on-screen-menu", screenId === "screen-menu");

    // Floating cart button visibility on mobile (strictly on restaurant menu screens)
    const floatingCart = document.getElementById("mobile-floating-cart-btn");
    if (floatingCart) {
        const isRestaurantMenuScreen = (screenId === "screen-menu" || screenId === "screen-restaurant");
        floatingCart.style.display = isRestaurantMenuScreen ? "flex" : "none";
    }

    // Global static bottom nav visibility for customer tabs
    const globalNav = document.getElementById("global-customer-bottom-nav");
    if (globalNav) {
        const isCustomerTab = ["screen-home", "screen-orders", "screen-achievements"].includes(screenId);
        globalNav.style.display = isCustomerTab ? "flex" : "none";
    }

    // Desktop navbar button active states
    document.querySelectorAll(".desktop-nav-btn").forEach(btn => btn.classList.remove("active"));
    if (screenId === "screen-home" || screenId === "screen-restaurant" || screenId === "screen-menu") {
        document.getElementById("desk-nav-home")?.classList.add("active");
    } else if (screenId === "screen-orders") {
        document.getElementById("desk-nav-orders")?.classList.add("active");
    } else if (screenId === "screen-achievements") {
        document.getElementById("desk-nav-achievements")?.classList.add("active");
    } else if (screenId === "screen-settings") {
        document.getElementById("desk-nav-settings")?.classList.add("active");
    }

    if (screenId === "screen-home") {
        try { renderRestaurants(); } catch(e){}
    }
    if (screenId === "screen-settings") {
        try { renderSettingsAddresses(); } catch(e){}
    }
    if (screenId === "screen-success") {
        try { updateTrackingTimeline(); } catch(e){}
    }
    if (screenId === "screen-orders") {
        try { renderCustomerOrders(); } catch(e){}
    }
    if (screenId === "screen-achievements") {
        try { renderAchievements(); } catch(e){}
    }
    if (screenId === "screen-checkout") {
        try { renderCheckoutScreen(); } catch(e){}
    }
}
window.navigateTo = navigateTo;
window.toggleSettings = function(show) { navigateTo("screen-settings"); };

// ================= USER AVATAR & PROFILE IMAGE LOGIC (WITH LEVEL FRAMES) =================
function updateUserAvatarUI() {
    const avatarData = localStorage.getItem("gastrogo_user_avatar");
    const previewEl = document.getElementById("settings-avatar-preview");
    const allAvatars = document.querySelectorAll(".avatar");
    const initial = currentUser ? currentUser.charAt(0).toUpperCase() : "G";

    // Determine current level frame
    let frameClass = "avatar-frame-lvl1";
    if (currentUser) {
        try {
            const gData = calculateUserGamification();
            if (gData && gData.levelInfo && gData.levelInfo.frameClass) {
                frameClass = gData.levelInfo.frameClass;
            }
        } catch (e) {}
    }

    allAvatars.forEach(av => {
        // Remove existing level frame classes
        av.classList.remove("avatar-frame-lvl1", "avatar-frame-lvl2", "avatar-frame-lvl3", "avatar-frame-lvl4", "avatar-frame-lvl5", "avatar-frame-lvl6");
        av.classList.add(frameClass);

        if (avatarData) {
            av.innerHTML = `<img src="${avatarData}" alt="Avatar">`;
        } else {
            av.textContent = initial;
        }
    });

    if (previewEl) {
        previewEl.classList.remove("avatar-frame-lvl1", "avatar-frame-lvl2", "avatar-frame-lvl3", "avatar-frame-lvl4", "avatar-frame-lvl5", "avatar-frame-lvl6");
        previewEl.classList.add(frameClass);
        if (avatarData) {
            previewEl.innerHTML = `<img src="${avatarData}" alt="Avatar">`;
        } else {
            previewEl.textContent = initial;
        }
    }
}

function setupAvatarHandlers() {
    const fileInput = document.getElementById("avatar-file-input");
    if (fileInput) {
        fileInput.addEventListener("change", function(e) {
            const file = e.target.files && e.target.files[0];
            if (!file) return;
            if (!file.type.startsWith("image/")) {
                alert("Kérlek érvényes képformátumot válassz (JPG, PNG, WEBP)!");
                return;
            }
            const reader = new FileReader();
            reader.onload = function(evt) {
                const base64 = evt.target.result;
                try {
                    localStorage.setItem("gastrogo_user_avatar", base64);
                    updateUserAvatarUI();
                } catch (err) {
                    alert("A kiválasztott kép túl nagy, kérlek válassz kisebb felbontású képet!");
                }
            };
            reader.readAsDataURL(file);
        });
    }

    const btnRemove = document.getElementById("btn-remove-avatar");
    if (btnRemove) {
        btnRemove.addEventListener("click", () => {
            localStorage.removeItem("gastrogo_user_avatar");
            updateUserAvatarUI();
        });
    }
}

// ================= LOGIN ROLE TABS SWITCHER =================
const tabCustomer = document.getElementById("tab-login-customer");
const tabRestaurant = document.getElementById("tab-login-restaurant");
const formCustomer = document.getElementById("form-customer");
const formRestaurant = document.getElementById("form-restaurant");

if (tabCustomer && tabRestaurant && formCustomer && formRestaurant) tabCustomer.addEventListener("click", () => {
    tabCustomer.classList.add("active");
    tabRestaurant.classList.remove("active");
    formCustomer.style.display = "flex";
    formRestaurant.style.display = "none";
    currentUserRole = "customer";
});

if (tabRestaurant && tabCustomer && formCustomer && formRestaurant) tabRestaurant.addEventListener("click", () => {
    tabRestaurant.classList.add("active");
    tabCustomer.classList.remove("active");
    formCustomer.style.display = "none";
    formRestaurant.style.display = "flex";
    currentUserRole = "restaurant";
});

// ================= AUTHENTICATION TABS & REGISTRATION =================
function switchAuthTab(tab) {
    const tabLogin = document.getElementById("tab-auth-login");
    const tabRegister = document.getElementById("tab-auth-register");
    const formLogin = document.getElementById("form-customer-login");
    const formRegister = document.getElementById("form-customer-register");

    if (tab === "login") {
        if (tabLogin) {
            tabLogin.style.background = "var(--bg-card)";
            tabLogin.style.color = "var(--text-dark)";
            tabLogin.style.fontWeight = "700";
            tabLogin.style.boxShadow = "0 2px 6px rgba(0,0,0,0.08)";
        }
        if (tabRegister) {
            tabRegister.style.background = "transparent";
            tabRegister.style.color = "var(--text-muted)";
            tabRegister.style.fontWeight = "600";
            tabRegister.style.boxShadow = "none";
        }
        if (formLogin) formLogin.style.display = "flex";
        if (formRegister) formRegister.style.display = "none";
    } else {
        if (tabRegister) {
            tabRegister.style.background = "var(--bg-card)";
            tabRegister.style.color = "var(--text-dark)";
            tabRegister.style.fontWeight = "700";
            tabRegister.style.boxShadow = "0 2px 6px rgba(0,0,0,0.08)";
        }
        if (tabLogin) {
            tabLogin.style.background = "transparent";
            tabLogin.style.color = "var(--text-muted)";
            tabLogin.style.fontWeight = "600";
            tabLogin.style.boxShadow = "none";
        }
        if (formLogin) formLogin.style.display = "none";
        if (formRegister) formRegister.style.display = "flex";
    }
}
window.switchAuthTab = switchAuthTab;

function handleRegisterCustomer() {
    const name = document.getElementById("reg-name")?.value.trim();
    const username = document.getElementById("reg-username")?.value.trim().toLowerCase();
    const password = document.getElementById("reg-password")?.value.trim();
    const phone = document.getElementById("reg-phone")?.value.trim();
    const address = document.getElementById("reg-address")?.value.trim();

    if (!name || !username || !password || !phone || !address) {
        alert("Kérlek töltsd ki az összes kötelező mezőt a regisztrációhoz!");
        return;
    }

    const users = getRegisteredUsers();
    if (users[username]) {
        alert("Ez a felhasználónév már foglalt! Kérlek válassz másikat.");
        return;
    }

    const newUser = {
        name,
        username,
        password,
        phone,
        address,
        createdAt: Date.now()
    };

    saveRegisteredUser(newUser);
    currentUser = username;

    // Save initial address to user's address book explicitly
    const defaultAddr = [{
        id: `addr-${username}-1`,
        label: "Otthon",
        name: name,
        address: address,
        phone: phone
    }];
    saveSavedAddresses(defaultAddr, username);

    // If Firebase is ready, sync to cloud
    if (window.isFirebaseReady && typeof firestoreDb !== "undefined" && firestoreDb) {
        firestoreDb.collection("users").doc(username).set(newUser).catch(err => console.error("Firebase user register error:", err));
    }

    alert(`Sikeres regisztráció, üdvözlünk ${name}!`);
    handleLoginCustomer(username, name);
}
window.handleRegisterCustomer = handleRegisterCustomer;

function handleLoginCustomer(usernameVal, displayName = null) {
    if (!usernameVal || !usernameVal.trim()) {
        alert("Kérlek adj meg egy felhasználónevet!");
        return;
    }
    const cleanUser = usernameVal.trim().toLowerCase();
    currentUser = cleanUser;
    currentUserRole = "customer";
    localStorage.setItem("gastrogo_current_user", cleanUser);

    const users = getRegisteredUsers();
    const account = users[cleanUser] || {};
    const nameToShow = displayName || account.name || (cleanUser.charAt(0).toUpperCase() + cleanUser.slice(1));
    
    document.querySelectorAll(".username-display").forEach(el => {
        el.textContent = nameToShow;
    });

    const userLabel = document.getElementById("settings-username-label");
    if (userLabel) {
        userLabel.textContent = `${nameToShow} (${currentUser})`;
    }
    
    updateUserAvatarUI();
    renderSettingsAddresses();

    activeTab = "explore";
    activeCategory = "all";
    
    document.querySelectorAll("#category-tabs-container .category-item").forEach(item => {
        if (item.getAttribute("data-category") === "all") {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });

    updateCustomerNavActiveTab("explore");
    const homeTitle = document.getElementById("home-section-title");
    if (homeTitle) homeTitle.textContent = "Felfedezés a környéken";

    document.body.classList.add("user-authenticated");
    renderRestaurants();
    navigateTo("screen-home");
}
window.handleLoginCustomer = handleLoginCustomer;

function handleLogout() {
    currentUser = null;
    currentUserRole = "customer";
    document.body.classList.remove("user-authenticated");
    localStorage.removeItem("gastrogo_current_user");
    localStorage.removeItem("gastrogo_cart");
    cart = [];
    updateCartBadges();
    toggleCart(false);
    
    // Clear inputs
    const usernameInput = document.getElementById("username");
    if (usernameInput) usernameInput.value = "";
    const passwordInput = document.getElementById("password");
    if (passwordInput) passwordInput.value = "";

    window.location.href = "index.html";
}
window.handleLogout = handleLogout;

function handleLoginRestaurant() {
    const resSelect = document.getElementById("restaurant-select");
    if (!resSelect) return;
    const selectedResId = resSelect.value;
    const res = restaurants.find(r => r.id === selectedResId);
    if (!res) return;

    activeRestaurant = res;
    currentUserRole = "restaurant";

    const dashResName = document.getElementById("dash-restaurant-name");
    if (dashResName) dashResName.textContent = res.name;
    
    switchDashboardTab("menu");
    clearEditorForm();
    renderDashboardMenu();
    renderCategoryDropdown();
    renderCategoryManagerList();
    updateDashboardOrdersBadge();
    renderDashboardStats();
    navigateTo("screen-dashboard");
}
window.handleLoginRestaurant = handleLoginRestaurant;

document.getElementById("btn-login")?.addEventListener("click", () => {
    const user = document.getElementById("username")?.value;
    handleLoginCustomer(user || "kovacs.peter");
});

document.getElementById("btn-guest")?.addEventListener("click", () => {
    handleLoginCustomer("guest", "Vendég");
});

// ================= CUSTOMER NAVIGATION TABS =================
function updateCustomerNavActiveTab(activeKey) {
    const navBtnIds = {
        explore: "nav-btn-explore",
        saved: "nav-btn-saved",
        orders: "nav-btn-orders",
        achievements: "nav-btn-achievements"
    };
    Object.keys(navBtnIds).forEach(key => {
        const btn = document.getElementById(navBtnIds[key]);
        if (btn) {
            if (key === activeKey) btn.classList.add("active");
            else btn.classList.remove("active");
        }
    });
}

function openExploreTab() {
    activeTab = "explore";
    navigateTo("screen-home");
    updateCustomerNavActiveTab("explore");
    const title = document.getElementById("home-section-title");
    if (title) title.textContent = "Felfedezés a környéken";
    try { renderRestaurants(); } catch (err) { console.error("renderRestaurants error:", err); }
}

function openSavedTab() {
    activeTab = "saved";
    navigateTo("screen-home");
    updateCustomerNavActiveTab("saved");
    const title = document.getElementById("home-section-title");
    if (title) title.textContent = "Elmentett éttermeim";
    try { renderRestaurants(); } catch (err) { console.error("renderRestaurants error:", err); }
}

function openOrdersTab() {
    navigateTo("screen-orders");
    updateCustomerNavActiveTab("orders");
    try { renderCustomerOrders(); } catch (err) { console.error("renderCustomerOrders error:", err); }
}

function openSettingsTab() {
    navigateTo("screen-settings");
    updateUserAvatarUI();
    renderSettingsAddresses();
    const userLabel = document.getElementById("settings-username-label");
    if (userLabel) {
        userLabel.textContent = currentUser ? `${currentUser.charAt(0).toUpperCase() + currentUser.slice(1)} felhasználó` : "Vendég felhasználó";
    }
}
window.openExploreTab = openExploreTab;
window.openSavedTab = openSavedTab;
window.openOrdersTab = openOrdersTab;
window.openSettingsTab = openSettingsTab;

// ================= ACHIEVEMENTS (SIKEREK) LOGIC =================
function getCustomerOrders() {
    if (!orders || !Array.isArray(orders) || orders.length === 0) return [];
    const userKey = (currentUser || "guest").toLowerCase();
    return orders.filter(o => {
        const oUser = (o.username || "").toLowerCase();
        return oUser === userKey;
    });
}
window.getCustomerOrders = getCustomerOrders;

function getCustomerTotalOrdersCount() {
    return getCustomerOrders().length;
}

// ================= COMPREHENSIVE GAMIFICATION ENGINE (XP, LEVELS, BADGES & QUESTS) =================
const GAMIFICATION_LEVELS = [
    { level: 1, title: "Kezdő Felfedező", minXp: 0, maxXp: 100, frameClass: "avatar-frame-lvl1", badgeText: "⭐ Szint 1" },
    { level: 2, title: "Lelkes Ínyenc", minXp: 100, maxXp: 350, frameClass: "avatar-frame-lvl2", badgeText: "🥉 Szint 2 (Bronz)" },
    { level: 3, title: "Konyhamester", minXp: 350, maxXp: 1000, frameClass: "avatar-frame-lvl3", badgeText: "🥈 Szint 3 (Ezüst)" },
    { level: 4, title: "Gasztro Báró", minXp: 1000, maxXp: 2500, frameClass: "avatar-frame-lvl4", badgeText: "🥇 Szint 4 (Arany)" },
    { level: 5, title: "Gyémánt Lovag", minXp: 2500, maxXp: 6000, frameClass: "avatar-frame-lvl5", badgeText: "💎 Szint 5 (Gyémánt)" },
    { level: 6, title: "VIP GastroGo Legenda", minXp: 6000, maxXp: Infinity, frameClass: "avatar-frame-lvl6", badgeText: "👑 Szint 6 (VIP Legenda)" }
];

const OFFICIAL_BADGES = [
    {
        id: "badge_first_order",
        icon: "🥇",
        name: "Első Lépés",
        desc: "Add le a legelső rendelésed a GastroGo-n!",
        xp: 10,
        check: (ctx) => ctx.totalOrders >= 1
    },
    {
        id: "badge_pizza_lover",
        icon: "🍕",
        name: "Pizzalovag",
        desc: "Rendelj legalább 5 pizzát kedvenc helyeidről!",
        xp: 15,
        check: (ctx) => (ctx.categoryCounts["pizza"] || 0) >= 5 || (ctx.itemKeywordCounts["pizza"] || 0) >= 5
    },
    {
        id: "badge_burger_master",
        icon: "🍔",
        name: "Burger Bajnok",
        desc: "Kóstolj meg legalább 5 kézműves burgert!",
        xp: 15,
        check: (ctx) => (ctx.categoryCounts["burger"] || 0) >= 5 || (ctx.itemKeywordCounts["burger"] || 0) >= 5
    },
    {
        id: "badge_gyros_king",
        icon: "🌯",
        name: "Gyros Király",
        desc: "Rendelj legalább 4 gyrost vagy tálat!",
        xp: 15,
        check: (ctx) => (ctx.categoryCounts["gyros"] || 0) >= 4 || (ctx.itemKeywordCounts["gyros"] || 0) >= 4
    },
    {
        id: "badge_globe_trotter",
        icon: "🌍",
        name: "Gasztro Világutazó",
        desc: "Rendelj legalább 4 különböző partnerétteremből!",
        xp: 25,
        check: (ctx) => ctx.distinctRestaurantsCount >= 4
    },
    {
        id: "badge_night_owl",
        icon: "🌙",
        name: "Éjszakai Ragadozó",
        desc: "Adj le egy rendelést este 20:00 óra után!",
        xp: 10,
        check: (ctx) => ctx.hasNightOrder
    },
    {
        id: "badge_lunch_hero",
        icon: "☀️",
        name: "Déli Ínyenc",
        desc: "Rendelj ebédidőben (11:30 és 13:00 között)!",
        xp: 10,
        check: (ctx) => ctx.hasLunchOrder
    },
    {
        id: "badge_weekend_warrior",
        icon: "🔥",
        name: "Hétvégi Gurmand",
        desc: "Rendelj pénteken vagy szombaton!",
        xp: 10,
        check: (ctx) => ctx.hasWeekendOrder
    },
    {
        id: "badge_critic",
        icon: "✍️",
        name: "Kritikus Szem",
        desc: "Írj és küldj be legalább 3 éttermi értékelést!",
        xp: 15,
        check: (ctx) => ctx.reviewsCount >= 3
    },
    {
        id: "badge_extra_bites",
        icon: "🍟",
        name: "Extra Falatok",
        desc: "Rendelj ételt hozzáadott extra feltétekkel legalább 2 alkalommal!",
        xp: 10,
        check: (ctx) => ctx.hasCustomToppingsOrder && ctx.totalOrders >= 2
    },
    {
        id: "badge_feast",
        icon: "👑",
        name: "Nagyétkű Lakoma",
        desc: "Egy rendelésed végösszege haladja meg a 10 000 Ft-ot!",
        xp: 20,
        check: (ctx) => ctx.hasBigOrder
    },
    {
        id: "badge_regular",
        icon: "🎖️",
        name: "Törzsvendég",
        desc: "Érd el a 10 leadott sikeres rendelést!",
        xp: 25,
        check: (ctx) => ctx.totalOrders >= 10
    },
    {
        id: "badge_veteran",
        icon: "🏅",
        name: "Gastro Veterán",
        desc: "Érd el a 30 leadott sikeres rendelést!",
        xp: 50,
        check: (ctx) => ctx.totalOrders >= 30
    },
    {
        id: "badge_legend_50",
        icon: "🏆",
        name: "50-es Mérföldkő",
        desc: "Érd el az 50 leadott rendelést (VIP Legenda)!",
        xp: 100,
        check: (ctx) => ctx.totalOrders >= 50
    }
];

function getWeeklyQuests() {
    const orders = getCustomerOrders();
    const now = new Date();
    
    // Check orders from the last 7 days (this week)
    const sevenDaysAgo = now.getTime() - (7 * 24 * 60 * 60 * 1000);
    const thisWeekOrders = orders.filter(o => {
        const t = o.createdAt ? new Date(o.createdAt).getTime() : 
                 (o.time ? new Date(o.time).getTime() : 0);
        return t >= sevenDaysAgo;
    });

    const weekendOrders = thisWeekOrders.filter(o => {
        const d = o.createdAt ? new Date(o.createdAt) : new Date();
        const day = d.getDay();
        return day === 0 || day === 5 || day === 6; // Friday, Saturday, Sunday
    });

    const distinctResThisWeek = new Set(thisWeekOrders.map(o => o.restaurantId)).size;

    return [
        {
            id: "quest_weekly_order",
            name: "Heti Rendelés",
            desc: "Rendelj ezen a héten legalább 1 alkalommal!",
            rewardXp: 5,
            current: Math.min(thisWeekOrders.length, 1),
            target: 1,
            completed: thisWeekOrders.length >= 1
        },
        {
            id: "quest_weekend_order",
            name: "Hétvégi Ízek",
            desc: "Rendelj péntek és vasárnap között!",
            rewardXp: 8,
            current: Math.min(weekendOrders.length, 1),
            target: 1,
            completed: weekendOrders.length >= 1
        },
        {
            id: "quest_explore_res",
            name: "Új Élmények",
            desc: "Rendelj legalább 2 különböző étteremből a héten!",
            rewardXp: 10,
            current: Math.min(distinctResThisWeek, 2),
            target: 2,
            completed: distinctResThisWeek >= 2
        }
    ];
}

function calculateUserGamification() {
    const username = currentUser || "guest";
    const orders = getCustomerOrders();
    const totalOrders = orders.length;

    // Calculate total spent
    const totalSpent = orders.reduce((sum, o) => {
        const orderTotal = o.total !== undefined ? Number(o.total) : 
            ((o.items || []).reduce((iSum, it) => iSum + ((it.price || 0) * (it.quantity || 1)), 0) + (o.deliveryFee || 0));
        return sum + orderTotal;
    }, 0);

    // Analyze orders context
    const categoryCounts = {};
    const itemKeywordCounts = {};
    const distinctRestaurants = new Set();
    let hasNightOrder = false;
    let hasLunchOrder = false;
    let hasWeekendOrder = false;
    let hasCustomToppingsOrder = false;
    let hasBigOrder = false;

    orders.forEach(o => {
        if (o.restaurantId) distinctRestaurants.add(o.restaurantId);
        
        const orderTotal = Number(o.total) || 0;
        if (orderTotal >= 8000) hasBigOrder = true;

        // Time checks
        let orderDate = null;
        if (o.createdAt) orderDate = new Date(o.createdAt);
        else if (o.time) {
            const parsed = new Date(o.time);
            if (!isNaN(parsed)) orderDate = parsed;
        }

        if (orderDate && !isNaN(orderDate)) {
            const hour = orderDate.getHours();
            const minutes = orderDate.getMinutes();
            const timeInHours = hour + (minutes / 60);
            const day = orderDate.getDay();

            if (timeInHours >= 19) hasNightOrder = true;
            if (timeInHours >= 11 && timeInHours <= 13.5) hasLunchOrder = true;
            if (day === 5 || day === 6) hasWeekendOrder = true;
        } else {
            // Fallback for demo orders
            if (totalOrders >= 1) hasNightOrder = true;
            if (totalOrders >= 2) hasLunchOrder = true;
            if (totalOrders >= 3) hasWeekendOrder = true;
        }

        // Items & Toppings checks
        (o.items || []).forEach(it => {
            const cat = (it.category || "").toLowerCase();
            const name = (it.name || "").toLowerCase();
            const qty = it.quantity || 1;

            if (cat) categoryCounts[cat] = (categoryCounts[cat] || 0) + qty;
            
            if (name.includes("pizza") || cat.includes("pizza")) itemKeywordCounts["pizza"] = (itemKeywordCounts["pizza"] || 0) + qty;
            if (name.includes("burger") || cat.includes("burger")) itemKeywordCounts["burger"] = (itemKeywordCounts["burger"] || 0) + qty;
            if (name.includes("gyros") || cat.includes("gyros")) itemKeywordCounts["gyros"] = (itemKeywordCounts["gyros"] || 0) + qty;

            if (it.selectedToppings && it.selectedToppings.length > 0) {
                hasCustomToppingsOrder = true;
            }
        });
    });

    // Reviews count
    const allReviews = GastroGoDB.read("reviews", []);
    const userReviews = allReviews.filter(r => (r.customerName || "").toLowerCase() === username.toLowerCase());
    const reviewsCount = userReviews.length;

    const ctx = {
        totalOrders,
        totalSpent,
        categoryCounts,
        itemKeywordCounts,
        distinctRestaurantsCount: distinctRestaurants.size,
        hasNightOrder,
        hasLunchOrder,
        hasWeekendOrder,
        hasCustomToppingsOrder,
        hasBigOrder,
        reviewsCount
    };

    // 1. Order XP: 3 XP base per order + 1 XP per 1000 Ft spent (slow, challenging progression)
    let orderXp = (totalOrders * 3) + Math.floor(totalSpent / 1000);

    // 2. Badge XP & Unlocked Badges
    const unlockedBadges = [];
    let badgeXp = 0;

    OFFICIAL_BADGES.forEach(badge => {
        const isUnlocked = badge.check(ctx);
        if (isUnlocked) {
            unlockedBadges.push(badge.id);
            badgeXp += badge.xp;
        }
    });

    // 3. Weekly Quests XP
    const quests = getWeeklyQuests();
    let questXp = 0;
    quests.forEach(q => {
        if (q.completed) questXp += q.rewardXp;
    });

    // Grand Total XP
    const totalXp = orderXp + badgeXp + questXp;

    // Determine current level
    let currentLevelObj = GAMIFICATION_LEVELS[0];
    for (let i = GAMIFICATION_LEVELS.length - 1; i >= 0; i--) {
        if (totalXp >= GAMIFICATION_LEVELS[i].minXp) {
            currentLevelObj = GAMIFICATION_LEVELS[i];
            break;
        }
    }

    // Next Level Progress calculation
    const nextLevelObj = GAMIFICATION_LEVELS.find(lvl => lvl.level === currentLevelObj.level + 1);
    let progressPercent = 100;
    let xpNeededForNext = 0;
    let currentLevelRangeStr = `${totalXp} XP (MAX)`;

    if (nextLevelObj) {
        const currentTierXp = totalXp - currentLevelObj.minXp;
        const tierSpan = nextLevelObj.minXp - currentLevelObj.minXp;
        progressPercent = Math.min(100, Math.max(0, Math.round((currentTierXp / tierSpan) * 100)));
        xpNeededForNext = Math.max(0, nextLevelObj.minXp - totalXp);
        currentLevelRangeStr = `${currentTierXp} / ${tierSpan} XP`;
    }

    const gamificationResult = {
        username,
        totalXp,
        levelInfo: currentLevelObj,
        nextLevelInfo: nextLevelObj,
        progressPercent,
        xpNeededForNext,
        currentLevelRangeStr,
        unlockedBadges,
        quests,
        stats: {
            totalOrders,
            totalSpent,
            reviewsCount,
            distinctRestaurantsCount: distinctRestaurants.size
        }
    };

    return gamificationResult;
}

function syncUserGamificationToCloud() {
    if (!currentUser || currentUser === "guest") return;
    try {
        const gData = calculateUserGamification();
        const allProfiles = GastroGoDB.read("userProfiles", {});
        allProfiles[currentUser] = {
            xp: gData.totalXp,
            level: gData.levelInfo.level,
            unlockedBadges: gData.unlockedBadges,
            updatedAt: Date.now()
        };
        // Save silently without triggering local loop
        localStorage.setItem("gastrogo:userProfiles", JSON.stringify(allProfiles));
        const db = window.firestoreDb || (typeof firebase !== "undefined" && firebase.apps && firebase.apps.length > 0 ? firebase.firestore() : null);
        if (db) {
            db.collection("userProfiles").doc(currentUser).set(allProfiles[currentUser], { merge: true })
                .catch(err => console.error("Firestore userProfiles sync error:", err));
        }
    } catch(e) {}
}

function showGamificationToast(icon, title, msg) {
    const toast = document.getElementById("gamification-toast");
    const iconEl = document.getElementById("gamification-toast-icon");
    const titleEl = document.getElementById("gamification-toast-title");
    const msgEl = document.getElementById("gamification-toast-msg");

    if (toast && iconEl && titleEl && msgEl) {
        iconEl.textContent = icon || "🏆";
        titleEl.textContent = title || "Szintlépés!";
        msgEl.textContent = msg || "Gratulálunk!";
        toast.classList.add("show");
        setTimeout(() => { toast.classList.remove("show"); }, 4000);
    }
}

function renderAchievements() {
    const gData = calculateUserGamification();

    // 1. Update Top XP Hero Card
    const rankBadgeEl = document.getElementById("achieve-rank-level");
    const rankTitleEl = document.getElementById("achievement-rank-title");
    const statsEl = document.getElementById("achievement-order-stats");
    const totalXpEl = document.getElementById("achievement-total-xp");
    const xpFillEl = document.getElementById("achievement-xp-fill");
    const xpRangeEl = document.getElementById("achievement-xp-current-range");
    const xpNextLabelEl = document.getElementById("achievement-xp-next-label");

    if (rankBadgeEl) rankBadgeEl.textContent = gData.levelInfo.badgeText;
    if (rankTitleEl) rankTitleEl.textContent = gData.levelInfo.title;
    if (statsEl) statsEl.textContent = `${gData.stats.totalOrders} sikeres rendelés · ${gData.stats.distinctRestaurantsCount} felfedezett étterem`;
    if (totalXpEl) totalXpEl.textContent = `${gData.totalXp} XP`;
    if (xpFillEl) xpFillEl.style.width = `${gData.progressPercent}%`;
    if (xpRangeEl) xpRangeEl.textContent = gData.currentLevelRangeStr;

    if (xpNextLabelEl) {
        if (gData.nextLevelInfo) {
            xpNextLabelEl.textContent = `Még ${gData.xpNeededForNext} XP a(z) ${gData.nextLevelInfo.title} szinthez`;
        } else {
            xpNextLabelEl.textContent = "🏆 Maximális VIP Legenda Szint!";
        }
    }

    // 2. Render Weekly Quests
    const questsContainer = document.getElementById("weekly-quests-container");
    if (questsContainer) {
        questsContainer.innerHTML = gData.quests.map(q => `
            <div class="quest-card ${q.completed ? 'completed' : ''}">
                <div class="quest-info">
                    <div class="quest-title-row">
                        <span class="quest-name">${q.name}</span>
                        <span class="quest-reward-badge">+${q.rewardXp} XP</span>
                    </div>
                    <div class="quest-desc">${q.desc}</div>
                </div>
                <div class="quest-status-col">
                    <span class="quest-progress-text">${q.completed ? '✓ Kész' : `${q.current} / ${q.target}`}</span>
                </div>
            </div>
        `).join("");
    }

    // 3. Render 14 Badges Grid
    const badgesContainer = document.getElementById("badges-grid-container");
    const badgesRatioEl = document.getElementById("badges-unlocked-ratio");
    if (badgesRatioEl) {
        badgesRatioEl.textContent = `${gData.unlockedBadges.length} / ${OFFICIAL_BADGES.length} feloldva`;
    }

    if (badgesContainer) {
        badgesContainer.innerHTML = OFFICIAL_BADGES.map(badge => {
            const isUnlocked = gData.unlockedBadges.includes(badge.id);
            return `
                <div class="badge-card ${isUnlocked ? 'unlocked' : 'locked'}">
                    <div class="badge-icon-wrapper">${badge.icon}</div>
                    <div class="badge-name">${badge.name}</div>
                    <div class="badge-desc">${badge.desc}</div>
                    <span class="badge-xp-tag">${isUnlocked ? `✅ +${badge.xp} XP` : `🔒 +${badge.xp} XP`}</span>
                </div>
            `;
        }).join("");
    }

    // Update avatar level frame in header & profile using calculated frameClass
    const frameClass = gData.levelInfo.frameClass || "avatar-frame-lvl1";
    document.querySelectorAll(".avatar").forEach(av => {
        av.classList.remove("avatar-frame-lvl1", "avatar-frame-lvl2", "avatar-frame-lvl3", "avatar-frame-lvl4", "avatar-frame-lvl5", "avatar-frame-lvl6");
        av.classList.add(frameClass);
    });
}

function openAchievementsTab() {
    navigateTo("screen-achievements");
    updateCustomerNavActiveTab("achievements");
    try { renderAchievements(); } catch (err) { console.error("renderAchievements error:", err); }
}
window.openAchievementsTab = openAchievementsTab;

// Global delegated click handler for all customer bottom navigation tabs
document.addEventListener("click", (e) => {
    const navBtn = e.target.closest(".nav-tab");
    if (navBtn) {
        const id = navBtn.id;
        if (id === "nav-btn-explore") {
            e.preventDefault();
            openExploreTab();
        } else if (id === "nav-btn-saved") {
            e.preventDefault();
            openSavedTab();
        } else if (id === "nav-btn-orders") {
            e.preventDefault();
            openOrdersTab();
        } else if (id === "nav-btn-achievements") {
            e.preventDefault();
            openAchievementsTab();
        }
    }
});

// Click handlers for top-left header profile/avatar to open settings
["user-profile-trigger", "user-profile-trigger-orders", "user-profile-trigger-achievements"].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
        el.addEventListener("click", (e) => {
            e.stopPropagation();
            openSettingsTab();
        });
    }
});

const btnBackSettings = document.getElementById("btn-back-from-settings");
if (btnBackSettings) {
    btnBackSettings.addEventListener("click", () => {
        openExploreTab();
    });
}

const btnSettingsLogout = document.getElementById("btn-settings-logout");
if (btnSettingsLogout) {
    btnSettingsLogout.addEventListener("click", handleLogout);
}

// ================= DARK MODE TOGGLE =================
function applyDarkMode(isDark) {
    if (isDark) {
        document.documentElement.classList.add("dark-mode");
        document.body.classList.add("dark-mode");
        document.querySelectorAll(".app-container").forEach(el => el.classList.add("dark-mode"));
    } else {
        document.documentElement.classList.remove("dark-mode");
        document.body.classList.remove("dark-mode");
        document.querySelectorAll(".app-container").forEach(el => el.classList.remove("dark-mode"));
    }
    const toggle = document.getElementById("dark-mode-toggle");
    if (toggle) toggle.checked = Boolean(isDark);
}

window.toggleDarkModeDirect = function(enabled) {
    applyDarkMode(enabled);
    localStorage.setItem("gastrogo_dark_mode", enabled ? "true" : "false");
};

function setupDarkMode() {
    const isDark = localStorage.getItem("gastrogo_dark_mode") === "true";
    applyDarkMode(isDark);

    const toggle = document.getElementById("dark-mode-toggle");
    if (toggle) {
        toggle.checked = isDark;
        toggle.onchange = function() {
            window.toggleDarkModeDirect(this.checked);
        };
    }
}

// ================= CATEGORY FILTER BINDING =================
const categoryTabsContainer = document.getElementById("category-tabs-container");
if (categoryTabsContainer) {
    categoryTabsContainer.addEventListener("click", (e) => {
        e.stopPropagation();
    });
}

document.querySelectorAll("#category-tabs-container .category-item").forEach(item => {
    item.addEventListener("click", (e) => {
        e.stopPropagation(); // Bubbling Guard: stops event from opening cart sheet
        document.querySelectorAll("#category-tabs-container .category-item").forEach(i => i.classList.remove("active"));
        item.classList.add("active");
        activeCategory = item.getAttribute("data-category");
        renderRestaurants();
    });
});

// ================= CUSTOMER: RENDER RESTAURANTS =================
function renderRestaurants() {
    const container = document.getElementById("restaurants-list-container");
    if (!container) return;
    const promoBanner = document.querySelector("#screen-home .promo-banner");
    const searchContainer = document.querySelector("#screen-home .search-container");
    const categoriesSection = document.querySelector("#screen-home .categories-section");
    const isSavedView = activeTab === "saved";
    if (promoBanner) promoBanner.style.display = isSavedView ? "none" : "flex";
    if (searchContainer) searchContainer.style.display = isSavedView ? "none" : "block";
    if (categoriesSection) categoriesSection.style.display = isSavedView ? "none" : "block";
    container.innerHTML = "";

    const searchInput = document.getElementById("restaurant-search");
    const searchQuery = searchInput ? searchInput.value.toLowerCase() : "";
    
    let filteredList = [...restaurants];

    if (activeTab === "saved") {
        filteredList = filteredList.filter(res => savedRestaurants.includes(res.id));
    }

    if (activeCategory !== "all") {
        filteredList = filteredList.filter(res => res.category === activeCategory);
    }

    if (searchQuery) {
        filteredList = filteredList.filter(res => 
            res.name.toLowerCase().includes(searchQuery) || 
            res.menu.some(item => item.name.toLowerCase().includes(searchQuery))
        );
    }

    // Smart Sort: 1. OPEN (🟢), 2. PREORDER (⏱️), 3. CLOSED (🔴)
    filteredList.sort((a, b) => {
        const statusA = (typeof window.getRestaurantOpenStatus === "function") ? window.getRestaurantOpenStatus(a).status : "OPEN";
        const statusB = (typeof window.getRestaurantOpenStatus === "function") ? window.getRestaurantOpenStatus(b).status : "OPEN";

        const scoreMap = { "OPEN": 3, "PREORDER": 2, "CLOSED": 1 };
        const scoreA = scoreMap[statusA] || 2;
        const scoreB = scoreMap[statusB] || 2;

        if (scoreA !== scoreB) return scoreB - scoreA;
        return (Number(b.rating) || 0) - (Number(a.rating) || 0);
    });

    if (filteredList.length === 0) {
        container.innerHTML = `
            <div class="empty-cart-message">
                <span class="empty-cart-icon">📍</span>
                <p>Nem található étterem</p>
            </div>
        `;
        return;
    }

    filteredList.forEach(res => {
        const card = document.createElement("div");
        card.className = "restaurant-card";
        
        const isSaved = savedRestaurants.includes(res.id);
        const liveRating = getRestaurantAverageRating(res.id, res.rating);
        const liveTime = getLiveRestaurantDeliveryTime(res);
        const baseFee = getRestaurantDeliveryFee(res, 0);
        const threshold = Number(res.freeDeliveryThreshold) || 0;

        const openStatus = (typeof window.getRestaurantOpenStatus === "function") 
            ? window.getRestaurantOpenStatus(res) 
            : { status: "OPEN", badgeText: "🟢 Nyitva", isOrderable: true, isPreOrder: false };

        let deliveryBadgeText = "";
        if (baseFee === 0) {
            deliveryBadgeText = "Ingyenes szállítás";
        } else if (threshold > 0) {
            deliveryBadgeText = `Szállítás: ${baseFee} Ft (${threshold.toLocaleString('hu-HU')} Ft-tól ingyenes)`;
        } else {
            deliveryBadgeText = `Szállítás: ${baseFee} Ft`;
        }

        let statusBadgeBg = "#10B981";
        let statusBadgeColor = "#FFFFFF";
        if (openStatus.status === "PREORDER") {
            statusBadgeBg = "#F59E0B";
            statusBadgeColor = "#FFFFFF";
        } else if (openStatus.status === "CLOSED") {
            statusBadgeBg = "#E11D48";
            statusBadgeColor = "#FFFFFF";
            card.style.opacity = "0.85";
        }

        let timeFooterText = `⏱ ${liveTime}`;
        if (openStatus.status === "PREORDER") {
            timeFooterText = `<span style="color:#D97706; font-weight:700;">⏱️ Előrendelhető nyitásra</span>`;
        } else if (openStatus.status === "CLOSED") {
            timeFooterText = `<span style="color:#E11D48; font-weight:700;">🔴 Zárva</span>`;
        }

        card.innerHTML = `
            <button class="fav-btn ${isSaved ? 'saved' : ''}" data-id="${res.id}">
                ${isSaved ? '♥' : '♡'}
            </button>
            <div class="restaurant-img" style="background-image: url('${res.image}')">
                <span class="restaurant-badge" style="background:${statusBadgeBg}; color:${statusBadgeColor}; font-weight:800;">
                    ${openStatus.badgeText}
                </span>
                <span class="restaurant-badge badge-delivery">${deliveryBadgeText}</span>
            </div>
            <div class="restaurant-info">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <h4 style="margin:0;">${res.name}</h4>
                    <span style="font-size:12px; font-weight:800; color:#D97706;">★ ${liveRating}</span>
                </div>
                <p class="restaurant-desc">${res.description}</p>
                <div class="restaurant-footer">
                    <span>🍽️ Kínálat (${res.menu.length} étel)</span>
                    <span>${timeFooterText}</span>
                </div>
            </div>
        `;

        card.querySelector(".fav-btn").addEventListener("click", (e) => {
            e.stopPropagation();
            toggleFavorite(res.id);
        });

        card.addEventListener("click", () => {
            openRestaurantMenu(res);
        });

        container.appendChild(card);
    });
}

document.getElementById("restaurant-search")?.addEventListener("input", renderRestaurants);

function toggleFavorite(resId) {
    if (savedRestaurants.includes(resId)) {
        savedRestaurants = savedRestaurants.filter(id => id !== resId);
    } else {
        savedRestaurants.push(resId);
    }
    renderRestaurants();
}

// ================= CUSTOMER: RENDER RESTAURANT DETAIL =================
function openRestaurantMenu(restaurant) {
    if (!restaurant) return;
    activeRestaurant = restaurant;
    
    // Switch to menu screen immediately
    navigateTo("screen-menu");
    
    try {
        const liveRating = getRestaurantAverageRating(restaurant.id, restaurant.rating);
        const liveTime = getLiveRestaurantDeliveryTime(restaurant);
        const napszakKey = (typeof getCurrentNapszak === "function") ? getCurrentNapszak() : "afternoon";
        const avgPrep = (typeof getAveragePrepTime === "function") ? getAveragePrepTime(napszakKey) : 20;

        const menuTitle = document.getElementById("menu-title");
        if (menuTitle) menuTitle.textContent = restaurant.name;
        const resName = document.getElementById("menu-restaurant-name");
        if (resName) resName.textContent = restaurant.name;
        const resDesc = document.getElementById("menu-restaurant-desc");
        if (resDesc) resDesc.textContent = restaurant.description || "";
        const ratingVal = document.getElementById("res-rating-val");
        if (ratingVal) ratingVal.textContent = liveRating;
        const timeVal = document.getElementById("res-time-val");
        if (timeVal) timeVal.textContent = liveTime;
        const prepStatsVal = document.getElementById("res-prep-stats-val");
        if (prepStatsVal) prepStatsVal.textContent = `⏱ Élő becsült idő · Napszaki átlag: ~${avgPrep}p`;
        const bannerBg = document.getElementById("restaurant-banner-bg");
        if (bannerBg && restaurant.image) bannerBg.style.backgroundImage = `url('${restaurant.image}')`;

        // Configure Clean Helpline Phone Button
        const phoneEl = document.getElementById("menu-helpline-phone");
        if (phoneEl) {
            phoneEl.textContent = `📞 ${restaurant.phone || "+36 35 123 456"}`;
            phoneEl.onclick = () => alert(`Hívás indítása az étteremnek: ${restaurant.phone || "+36 35 123 456"}`);
        }

        // Live Delivery Fee & Free Delivery Threshold Banner
        const allSettings = (typeof GastroGoDB !== "undefined") ? GastroGoDB.read("restaurantSettings", {}) : {};
        const resSettings = (restaurant.id && allSettings[restaurant.id]) ? allSettings[restaurant.id] : {};
        const baseFee = getRestaurantDeliveryFee(restaurant, 0);
        const threshold = (resSettings.freeDeliveryThreshold !== undefined && resSettings.freeDeliveryThreshold !== null && resSettings.freeDeliveryThreshold !== "")
            ? Number(resSettings.freeDeliveryThreshold)
            : (restaurant.freeDeliveryThreshold ? Number(restaurant.freeDeliveryThreshold) : 0);

        const deliveryInfoEl = document.getElementById("menu-delivery-info-banner");
        if (deliveryInfoEl) {
            if (baseFee === 0) {
                deliveryInfoEl.innerHTML = `<span>🎉</span> Ingyenes szállítás minden rendelésre!`;
                deliveryInfoEl.style.background = "#ECFDF5";
                deliveryInfoEl.style.borderColor = "#A7F3D0";
                deliveryInfoEl.style.color = "#065F46";
                deliveryInfoEl.style.display = "inline-flex";
            } else if (threshold > 0) {
                deliveryInfoEl.innerHTML = `<span>🚚</span> Szállítás: ${baseFee} Ft (${threshold.toLocaleString('hu-HU')} Ft-tól INGYENES)`;
                deliveryInfoEl.style.background = "#FFFBEB";
                deliveryInfoEl.style.borderColor = "#FDE68A";
                deliveryInfoEl.style.color = "#92400E";
                deliveryInfoEl.style.display = "inline-flex";
            } else {
                deliveryInfoEl.innerHTML = `<span>🚚</span> Szállítási díj: ${baseFee} Ft`;
                deliveryInfoEl.style.background = "#F1F5F9";
                deliveryInfoEl.style.borderColor = "#CBD5E1";
                deliveryInfoEl.style.color = "#334155";
                deliveryInfoEl.style.display = "inline-flex";
            }
        }

        // Live Opening Hours & Pre-order Status Banner in Menu
        const openStatus = (typeof window.getRestaurantOpenStatus === "function") 
            ? window.getRestaurantOpenStatus(restaurant) 
            : { status: "OPEN", badgeText: "🟢 Nyitva", isOrderable: true, isPreOrder: false };

        const statusBannerEl = document.getElementById("menu-open-status-banner");
        if (statusBannerEl) {
            if (openStatus.status === "OPEN") {
                statusBannerEl.innerHTML = `<span>🟢</span> <div><strong>Nyitva vagyunk!</strong> Azonnali rendelésfelvétel (${openStatus.closeTime ? openStatus.closeTime + '-ig' : ''}).</div>`;
                statusBannerEl.style.background = "#ECFDF5";
                statusBannerEl.style.borderColor = "#A7F3D0";
                statusBannerEl.style.color = "#065F46";
                statusBannerEl.style.display = "flex";
            } else if (openStatus.status === "PREORDER") {
                statusBannerEl.innerHTML = `<span>⏱️</span> <div><strong>Előrendelési időszak!</strong> Nyitás: <strong>${openStatus.openTime}</strong>. A leadott rendelésedet a konyha nyitáskor azonnal elkezdi készíteni.</div>`;
                statusBannerEl.style.background = "#FFFBEB";
                statusBannerEl.style.borderColor = "#FDE68A";
                statusBannerEl.style.color = "#92400E";
                statusBannerEl.style.display = "flex";
            } else {
                statusBannerEl.innerHTML = `<span>🔴</span> <div><strong>Az étterem jelenleg zárva tart.</strong> ${openStatus.message || 'Következő nyitás: ' + openStatus.nextOpenText}. Rendelésfelvétel most szünetel.</div>`;
                statusBannerEl.style.background = "#FFE4E6";
                statusBannerEl.style.borderColor = "#FECDD3";
                statusBannerEl.style.color = "#9F1239";
                statusBannerEl.style.display = "flex";
            }
        }

        const container = document.getElementById("menu-items-container");
        if (container) {
            container.innerHTML = "";

            if (!restaurant.menu || restaurant.menu.length === 0) {
                container.innerHTML = `<div class="empty-cart-message"><p>Ez az étterem jelenleg nem kínál ételeket.</p></div>`;
                const catTabs = document.getElementById("menu-category-tabs");
                if (catTabs) catTabs.style.display = "none";
            } else {
                const categories = [...new Set(restaurant.menu.map(item => item.category || "Egyéb"))];
                const tabsContainer = document.getElementById("menu-category-tabs");
                if (tabsContainer) {
                    tabsContainer.style.display = "flex";
                    tabsContainer.innerHTML = "";
                    tabsContainer.addEventListener("click", (e) => e.stopPropagation());

                    categories.forEach((cat, idx) => {
                        const tab = document.createElement("div");
                        tab.className = `menu-category-tab ${idx === 0 ? 'active' : ''}`;
                        tab.textContent = cat;
                        tab.addEventListener("click", (e) => {
                            e.stopPropagation();
                            e.preventDefault();
                            tabsContainer.querySelectorAll(".menu-category-tab").forEach(t => t.classList.remove("active"));
                            tab.classList.add("active");
                            
                            container.querySelectorAll("[data-menu-category]").forEach(element => {
                                element.style.display = element.getAttribute("data-menu-category") === cat ? "" : "none";
                            });
                        });
                        tabsContainer.appendChild(tab);
                    });
                }

                const categorized = {};
                restaurant.menu.forEach(item => {
                    const cat = item.category || "Egyéb";
                    if (!categorized[cat]) categorized[cat] = [];
                    categorized[cat].push(item);
                });

                for (const [catName, items] of Object.entries(categorized)) {
                    const divHead = document.createElement("div");
                    divHead.className = "menu-category-divider";
                    divHead.setAttribute("data-menu-category", catName);
                    divHead.textContent = catName;
                    container.appendChild(divHead);

                    items.forEach(item => {
                        const itemCard = document.createElement("div");
                        itemCard.className = "menu-card";
                        itemCard.setAttribute("data-menu-category", catName);
                        
                        const imgUrl = item.image || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3";

                        let allergensHtml = "";
                        if (item.allergens && item.allergens.length > 0) {
                            const allergenLabels = item.allergens.map(id => {
                                const a = (window.OFFICIAL_ALLERGENS || []).find(x => x.id === id);
                                return a ? `${a.id}. ${a.name}` : id;
                            }).join(", ");
                            allergensHtml = `
                                <div class="menu-item-allergens" style="margin-top: 4px;" title="Allergének: ${allergenLabels}">
                                    <span style="font-size: 10px; font-weight: 700; color: #B45309; background: #FEF3C7; border: 1px solid #FCD34D; padding: 2px 6px; border-radius: 4px; display: inline-flex; align-items: center; gap: 3px;">
                                        ⚠️ Allergének: ${item.allergens.join(", ")}
                                    </span>
                                </div>
                            `;
                        }

                        itemCard.innerHTML = `
                            <div class="menu-card-img" style="background-image: url('${imgUrl}')"></div>
                            <div class="menu-card-details">
                                <div>
                                    <h4>${item.name}</h4>
                                    <p>${item.description || ""}</p>
                                    ${allergensHtml}
                                </div>
                                <div class="menu-card-footer">
                                    <span class="menu-card-price">
                                        ${item.variants && item.variants.length > 0 
                                            ? `${Math.min(...item.variants.map(v => v.price)).toLocaleString('hu-HU')} Ft-tól` 
                                            : `${(item.price || 0).toLocaleString('hu-HU')} Ft`}
                                    </span>
                                    <button class="btn-add-cart" data-id="${item.id}" title="Kosárba helyezés">+</button>
                                </div>
                            </div>
                        `;

                        itemCard.querySelector(".btn-add-cart").addEventListener("click", (e) => {
                            e.stopPropagation();
                            handleAddToCartClick(item);
                        });

                        itemCard.addEventListener("click", () => {
                            handleAddToCartClick(item);
                        });

                        container.appendChild(itemCard);
                    });
                }
            }
        }

        try { resetCustomerReviewForm(); } catch(e){}
        try { renderCustomerReviews(restaurant.id); } catch(e){}
    } catch(err) {
        console.error("Error opening restaurant menu:", err);
    }
}

document.getElementById("btn-back-to-home")?.addEventListener("click", () => {
    navigateTo("screen-home");
});

document.getElementById("btn-generate-menu")?.addEventListener("click", () => {
    if (!activeRestaurant) return;
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;
    const groupedItems = {};
    activeRestaurant.menu.forEach(item => {
        const category = item.category || "Egyéb";
        if (!groupedItems[category]) groupedItems[category] = [];
        groupedItems[category].push(item);
    });
    printWindow.document.write(`<!doctype html><html lang="hu"><head><meta charset="UTF-8"><title>${activeRestaurant.name} - Étlap</title><style>body{margin:0;padding:42px;background:#f6f3ed;color:#23313a;font:15px Georgia,serif}main{max-width:760px;margin:auto;background:#fff;padding:42px;box-shadow:0 12px 35px #0002}h1{margin:0;color:#d86f21;font:700 40px Georgia,serif}h2{margin:30px 0 10px;padding-bottom:6px;border-bottom:2px solid #e9b872;color:#285c56}p{color:#64747d}article{display:flex;justify-content:space-between;gap:20px;padding:13px 0;border-bottom:1px solid #edf0ee}article strong{font-size:17px}article span{white-space:nowrap;color:#d86f21;font-weight:bold}.info{margin:18px 0;padding:12px 14px;background:#f2f8f5;border-left:4px solid #2ec4b6}@media print{body{padding:0;background:#fff}main{box-shadow:none}}</style></head><body><main><h1>${activeRestaurant.name}</h1><p>${activeRestaurant.description || ""}</p>${activeRestaurant.deliveryConfigured ? `<div class="info">Kiszállítás: ${activeRestaurant.deliveryFee === 0 ? "ingyenes" : activeRestaurant.deliveryFee + " Ft"}${activeRestaurant.deliveryLocations && activeRestaurant.deliveryLocations.length ? ` · ${activeRestaurant.deliveryLocations.join(", ")}` : ""}</div>` : ""}${Object.entries(groupedItems).map(([category, items]) => `<section><h2>${category}</h2>${items.map(item => `<article><div><strong>${item.name}</strong><p>${item.description || ""}</p></div><span>${item.price} Ft</span></article>`).join("")}</section>`).join("")}</main></body></html>`);
    printWindow.document.close();
    printWindow.focus();
});

// ================= CUSTOMER REVIEW FORM & LIST BINDINGS =================
const starsSelector = document.querySelectorAll("#review-stars-select .star-select-btn");
starsSelector.forEach(star => {
    star.addEventListener("click", () => {
        const val = parseInt(star.getAttribute("data-value"));
        document.getElementById("review-rating-value").value = val;
        
        starsSelector.forEach(s => {
            const sVal = parseInt(s.getAttribute("data-value"));
            if (sVal <= val) {
                s.classList.add("active");
            } else {
                s.classList.remove("active");
            }
        });
    });
});

function resetCustomerReviewForm() {
    document.getElementById("review-comment-input").value = "";
    document.getElementById("review-rating-value").value = "5";
    starsSelector.forEach(s => s.classList.add("active"));
}

document.getElementById("btn-submit-review")?.addEventListener("click", () => {
    if (!activeRestaurant) return;

    const ratingVal = parseInt(document.getElementById("review-rating-value").value);
    const commentText = document.getElementById("review-comment-input").value.trim();

    if (!commentText) {
        alert("Kérlek írj valamilyen szöveges véleményt is!");
        return;
    }

    const newReview = {
        id: `rev-${Date.now()}`,
        restaurantId: activeRestaurant.id,
        customerName: currentUser ? (currentUser.charAt(0).toUpperCase() + currentUser.slice(1)) : "Vendég",
        rating: ratingVal,
        comment: commentText,
        date: new Date().toLocaleDateString('hu-HU') + "."
    };

    reviews.push(newReview);
    GastroGoDB.write("reviews", reviews);
    
    const newRating = getRestaurantAverageRating(activeRestaurant.id, activeRestaurant.rating);
    const ratingEl = document.getElementById("res-rating-val");
    if (ratingEl) ratingEl.textContent = newRating;

    resetCustomerReviewForm();
    renderCustomerReviews(activeRestaurant.id);
    renderRestaurants();

    try {
        const gData = calculateUserGamification();
        updateUserAvatarUI();
        showGamificationToast("✍️", "Értékelés Rögzítve!", "Köszönjük a véleményed! +XP jóváírva a profilodban.");
    } catch(e) {}
});

function renderCustomerReviews(resId) {
    const container = document.getElementById("reviews-list-container");
    if (!container) return;
    container.innerHTML = "";

    const resReviews = reviews.filter(r => r.restaurantId === resId);

    if (resReviews.length === 0) {
        container.innerHTML = `<div style="font-size:12px; color:var(--text-muted); text-align:center; padding:10px 0;">Még nincs értékelés ehhez a helyhez. Légy te az első!</div>`;
        return;
    }

    resReviews.slice().reverse().forEach(rev => {
        const starsStr = "★".repeat(rev.rating) + "☆".repeat(5 - rev.rating);
        
        const el = document.createElement("div");
        el.className = "review-card";
        el.innerHTML = `
            <div class="review-card-header">
                <span class="review-author">${rev.customerName}</span>
                <span class="review-stars-gold">${starsStr}</span>
            </div>
            <div class="review-comment-text">${rev.comment}</div>
            <div style="font-size: 9px; color: var(--text-muted); text-align: right; margin-top: 4px;">${rev.date}</div>
        `;
        container.appendChild(el);
    });
}

// ================= CATEGORY TOPPINGS RESOLVER =================
function getCategoryToppings(category, item) {
    const cat = (category || (item && item.category) || "").trim().toLowerCase();
    
    // 1. Ha az étteremnek van mentett kategória feltét-sablonja a Firebase-ben
    if (activeRestaurant && activeRestaurant.categoryToppings) {
        for (const [key, list] of Object.entries(activeRestaurant.categoryToppings)) {
            if (key.toLowerCase() === cat && Array.isArray(list) && list.length > 0) {
                return list;
            }
        }
    }

    // 2. Ha az ételnek van saját egyedi feltétje
    if (item && item.toppings && Array.isArray(item.toppings) && item.toppings.length > 0) {
        return item.toppings;
    }

    // 3. Kategória-specifikus gazdag feltétválaszték
    if (cat.includes("pizza")) {
        return [
            { name: "Extra Mozzarella sajt", price: 390 },
            { name: "Szeletelt Olasz Sonka", price: 350 },
            { name: "Pirított Bacon", price: 350 },
            { name: "Csípős Szalámi", price: 350 },
            { name: "Friss Csiperkegomba", price: 250 },
            { name: "Csemege Kukorica", price: 200 },
            { name: "Csípős Jalapeño karikák", price: 200 },
            { name: "Fokhagymás Tejfölös szósz", price: 250 },
            { name: "Pikáns Chili olaj", price: 150 }
        ];
    }
    if (cat.includes("burger")) {
        return [
            { name: "Extra Olvasztott Cheddar", price: 350 },
            { name: "Dupla Marhahúspogácsa", price: 890 },
            { name: "Ropogós Bacon szeletek", price: 390 },
            { name: "Sült Tükörtojás", price: 300 },
            { name: "Karamellizált Lilahagyma", price: 200 },
            { name: "Füstös BBQ szósz", price: 250 },
            { name: "Csípős Jalapeño paprika", price: 200 }
        ];
    }
    if (cat.includes("gyros")) {
        return [
            { name: "Extra Gyros hús", price: 690 },
            { name: "Görög Feta sajt kockák", price: 350 },
            { name: "Csípős Harissza szósz", price: 200 },
            { name: "Krémes Tzatziki szósz", price: 250 },
            { name: "Pirított Extra Pita", price: 250 },
            { name: "Kalamata Olívabogyó", price: 200 }
        ];
    }
    if (cat.includes("tészta") || cat.includes("pasta")) {
        return [
            { name: "Extra Reszelt Parmezán", price: 390 },
            { name: "Extra Mozzarella", price: 350 },
            { name: "Pirított Bacon kockák", price: 350 },
            { name: "Csípős Chili pehely", price: 150 }
        ];
    }
    if (cat.includes("desszert")) {
        return [
            { name: "Extra Tejszínhab", price: 200 },
            { name: "Belga Csokoládéöntet", price: 250 },
            { name: "Erdei Gyümölcsöntet", price: 250 },
            { name: "Vanília fagylalt gombóc", price: 350 }
        ];
    }
    if (cat.includes("ital")) {
        return [
            { name: "Jégkockával", price: 0 },
            { name: "Friss Citromkarikával", price: 50 }
        ];
    }

    return [];
}
window.getCategoryToppings = getCategoryToppings;

const toppingModal = document.getElementById("topping-modal");
let currentAvailableToppings = [];
let currentAvailableVariants = [];
let selectedVariantIndex = 0;

function handleAddToCartClick(item) {
    if (!item) return;
    const toppings = (typeof getCategoryToppings === "function") ? getCategoryToppings(item.category, item) : (item.toppings || []);
    const variants = (Array.isArray(item.variants) && item.variants.length > 0) ? item.variants : [];

    const modal = document.getElementById("topping-modal");

    // Ha sem variáció, sem feltét nincs, vagy nincs modal -> közvetlenül tegye a kosárba
    if ((!variants || variants.length === 0) && (!toppings || toppings.length === 0) || !modal) {
        addToCart(item, []);
        return;
    }

    customizingItem = item;
    currentAvailableToppings = toppings || [];
    currentAvailableVariants = variants || [];
    selectedVariantIndex = 0; // Alapértelmezett az első méret

    const titleEl = document.getElementById("topping-modal-title");
    if (titleEl) titleEl.textContent = `${item.name} testreszabása`;
    const descEl = document.getElementById("topping-modal-desc");
    if (descEl) {
        if (variants.length > 0 && toppings.length > 0) {
            descEl.textContent = `Válassz méretet / kiszerelést és plusz feltéteket:`;
        } else if (variants.length > 0) {
            descEl.textContent = `Válassz méretet / kiszerelést a termékhez:`;
        } else {
            descEl.textContent = `Válassz extra feltéteket a(z) ${item.category || 'étel'} kategóriához:`;
        }
    }

    const container = document.getElementById("topping-options-container");
    if (container) {
        container.innerHTML = "";

        // 1. SECTION: SIZE / QUANTITY VARIANTS (if any)
        if (variants.length > 0) {
            const varSection = document.createElement("div");
            varSection.className = "variant-selection-group";
            varSection.style.cssText = "margin-bottom: 16px; padding-bottom: 12px; border-bottom: 1px dashed #CBD5E1;";
            varSection.innerHTML = `
                <div style="font-size: 11px; font-weight: 800; color: #0F172A; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px; display: flex; align-items: center; gap: 6px;">
                    <span>📐 1. Válassz méretet / kiszerelést:</span>
                </div>
                <div id="variant-radios-list" style="display: flex; flex-direction: column; gap: 8px;">
                    ${variants.map((v, idx) => `
                        <label class="variant-option-row topping-row ${idx === 0 ? 'selected' : ''}" style="cursor: pointer; display: flex; justify-content: space-between; align-items: center; padding: 10px 12px; background: #F8FAFC; border: 1px solid #CBD5E1; border-radius: 10px;">
                            <div class="topping-label-wrapper" style="display: flex; align-items: center; gap: 8px;">
                                <input type="radio" name="item-variant-radio" class="variant-radio" value="${idx}" ${idx === 0 ? 'checked' : ''}>
                                <span style="font-weight: 700; color: #1E293B;">${v.name}</span>
                            </div>
                            <span class="topping-price" style="font-weight: 800; color: var(--primary); font-size: 13px;">${(v.price || 0).toLocaleString('hu-HU')} Ft</span>
                        </label>
                    `).join("")}
                </div>
            `;

            varSection.querySelectorAll(".variant-radio").forEach(radio => {
                radio.addEventListener("change", (e) => {
                    selectedVariantIndex = parseInt(e.target.value, 10);
                    varSection.querySelectorAll(".variant-option-row").forEach(r => {
                        r.classList.remove("selected");
                        r.style.borderColor = "#CBD5E1";
                        r.style.backgroundColor = "#F8FAFC";
                    });
                    const parentRow = radio.closest(".variant-option-row");
                    if (parentRow) {
                        parentRow.classList.add("selected");
                        parentRow.style.borderColor = "var(--primary)";
                        parentRow.style.backgroundColor = "rgba(255, 159, 28, 0.08)";
                    }
                    updateToppingPriceSum();
                });
            });

            container.appendChild(varSection);
        }

        // 2. SECTION: TOPPINGS (if any)
        if (toppings.length > 0) {
            const topSection = document.createElement("div");
            topSection.className = "toppings-selection-group";
            topSection.innerHTML = `
                <div style="font-size: 11px; font-weight: 800; color: #0F172A; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px; display: flex; align-items: center; gap: 6px;">
                    <span>🧀 ${variants.length > 0 ? '2. Választható plusz feltétek:' : 'Választható plusz feltétek:'}</span>
                </div>
                <div id="toppings-checkboxes-list" style="display: flex; flex-direction: column; gap: 8px;"></div>
            `;

            const topListContainer = topSection.querySelector("#toppings-checkboxes-list");
            toppings.forEach((topping, index) => {
                const option = document.createElement("label");
                option.className = "topping-row";
                option.style.cursor = "pointer";
                option.innerHTML = `
                    <div class="topping-label-wrapper">
                        <input type="checkbox" class="topping-checkbox" data-index="${index}" data-price="${topping.price}">
                        <span>${topping.name}</span>
                    </div>
                    <span class="topping-price">${topping.price > 0 ? `+${topping.price} Ft` : 'Ingyenes'}</span>
                `;
                option.querySelector("input").addEventListener("change", updateToppingPriceSum);
                topListContainer.appendChild(option);
            });

            container.appendChild(topSection);
        }
    }

    updateToppingPriceSum();
    modal.classList.add("active");
}

function updateToppingPriceSum() {
    if (!customizingItem) return;
    
    // Base price is either selected variant price or item.price
    let basePrice = customizingItem.price || 0;
    if (currentAvailableVariants.length > 0 && currentAvailableVariants[selectedVariantIndex]) {
        basePrice = currentAvailableVariants[selectedVariantIndex].price || 0;
    }

    let toppingsSum = 0;
    document.querySelectorAll(".topping-checkbox:checked").forEach(checkbox => {
        toppingsSum += parseInt(checkbox.getAttribute("data-price"), 10) || 0;
    });

    const total = basePrice + toppingsSum;
    const confirmBtn = document.getElementById("btn-confirm-toppings");
    if (confirmBtn) confirmBtn.textContent = `Kosárba helyezés: ${total.toLocaleString('hu-HU')} Ft`;
}

document.getElementById("btn-confirm-toppings")?.addEventListener("click", () => {
    if (!customizingItem) return;

    // Check selected variant
    let selectedVariant = null;
    let finalItemName = customizingItem.name;
    let finalItemPrice = customizingItem.price || 0;
    let finalItemId = customizingItem.id;

    if (currentAvailableVariants.length > 0 && currentAvailableVariants[selectedVariantIndex]) {
        selectedVariant = currentAvailableVariants[selectedVariantIndex];
        finalItemName = `${customizingItem.name} (${selectedVariant.name})`;
        finalItemPrice = selectedVariant.price || 0;
        finalItemId = `${customizingItem.id}-${selectedVariant.name.replace(/\s+/g, '_')}`;
    }

    const selectedToppings = [...document.querySelectorAll(".topping-checkbox:checked")].map(checkbox => {
        const idx = parseInt(checkbox.getAttribute("data-index"), 10);
        return currentAvailableToppings[idx];
    }).filter(Boolean);

    const customizedItem = {
        ...customizingItem,
        id: finalItemId,
        name: finalItemName,
        price: finalItemPrice,
        selectedVariant: selectedVariant
    };

    addToCart(customizedItem, selectedToppings);
    
    const modal = document.getElementById("topping-modal");
    if (modal) modal.classList.remove("active");
    customizingItem = null;
    currentAvailableToppings = [];
    currentAvailableVariants = [];
    selectedVariantIndex = 0;
});

document.getElementById("btn-close-topping")?.addEventListener("click", () => {
    const modal = document.getElementById("topping-modal");
    if (modal) modal.classList.remove("active");
    customizingItem = null;
    currentAvailableToppings = [];
    currentAvailableVariants = [];
    selectedVariantIndex = 0;
});

document.getElementById("topping-backdrop")?.addEventListener("click", () => {
    const modal = document.getElementById("topping-modal");
    if (modal) modal.classList.remove("active");
    customizingItem = null;
    currentAvailableToppings = [];
    currentAvailableVariants = [];
    selectedVariantIndex = 0;
});

// ================= CUSTOMER: LIVE TRACKING TIMELINE SYNC =================
function updateTrackingTimeline() {
    const stepReceived = document.getElementById("track-step-received");
    const stepPreparing = document.getElementById("track-step-preparing");
    const stepDispatched = document.getElementById("track-step-dispatched");

    stepReceived.classList.remove("active");
    stepPreparing.classList.remove("active");
    stepDispatched.classList.remove("active");

    if (!lastPlacedOrderId) {
        stepReceived.classList.add("active");
        stepPreparing.classList.add("active");
        return;
    }

    const order = orders.find(o => o.id === lastPlacedOrderId);
    if (!order) return;

    const res = restaurants.find(r => r.id === order.restaurantId);
    if (res) {
        const successPhoneEl = document.getElementById("success-helpline-phone");
        successPhoneEl.textContent = `📞 ${res.phone}`;
        successPhoneEl.onclick = () => alert(`Hívás indítása az étteremnek: ${res.phone}`);
    }

    if (order.status === "received") {
        stepReceived.classList.add("active");
    } else if (order.status === "preparing") {
        stepReceived.classList.add("active");
        stepPreparing.classList.add("active");
    } else if (order.status === "dispatched") {
        stepReceived.classList.add("active");
        stepPreparing.classList.add("active");
        stepDispatched.classList.add("active");
    }
}

// ================= RESTAURANT BOTTOM NAVIGATION ROUTING =================
const dashSections = {
    menu: document.getElementById("dash-section-menu"),
    add: document.getElementById("dash-section-add"),
    orders: document.getElementById("dash-section-orders"),
    analytics: document.getElementById("dash-section-analytics"),
    toppings: document.getElementById("dash-section-toppings")
};

const dashNavBtns = {
    menu: document.getElementById("nav-btn-dash-menu"),
    add: document.getElementById("nav-btn-dash-add"),
    orders: document.getElementById("nav-btn-dash-orders"),
    analytics: document.getElementById("nav-btn-dash-analytics"),
    toppings: document.getElementById("nav-btn-dash-toppings")
};

function switchDashboardTab(tabId) {
    Object.values(dashSections).forEach(sec => { if (sec) sec.classList.remove("active"); });
    Object.values(dashNavBtns).forEach(btn => { if (btn) btn.classList.remove("active"); });

    if (dashSections[tabId]) dashSections[tabId].classList.add("active");
    if (dashNavBtns[tabId]) dashNavBtns[tabId].classList.add("active");

    if (tabId === "menu") {
        renderDashboardMenu();
        renderDashboardReviews();
    } else if (tabId === "orders") {
        renderDashboardOrders();
    } else if (tabId === "analytics") {
        renderMobAnalytics();
    } else if (tabId === "toppings") {
        renderMobToppingsEditor();
    }
}

if (dashNavBtns.menu) dashNavBtns.menu.addEventListener("click", () => switchDashboardTab("menu"));
if (dashNavBtns.add) dashNavBtns.add.addEventListener("click", () => switchDashboardTab("add"));
if (dashNavBtns.orders) dashNavBtns.orders.addEventListener("click", () => switchDashboardTab("orders"));
if (dashNavBtns.analytics) dashNavBtns.analytics.addEventListener("click", () => switchDashboardTab("analytics"));
if (dashNavBtns.toppings) dashNavBtns.toppings.addEventListener("click", () => switchDashboardTab("toppings"));
document.getElementById("nav-btn-dash-logout")?.addEventListener("click", handleLogout);

// ── Mobile Analytics Renderer ────────────────────────────────────────────────
function renderMobAnalytics() {
    if (!activeRestaurant) return;
    const resOrders = orders.filter(o => o.restaurantId === activeRestaurant.id);
    const resReviews = reviews.filter(r => r.restaurantId === activeRestaurant.id);

    // KPIs
    const totalRevenue = resOrders.reduce((s, o) => s + (o.total || 0), 0);
    const avgCart = resOrders.length ? Math.round(totalRevenue / resOrders.length) : 0;
    const avgRating = resReviews.length
        ? (resReviews.reduce((s, r) => s + r.rating, 0) / resReviews.length).toFixed(1)
        : "–";

    document.getElementById("dash-kpi-revenue").textContent = totalRevenue.toLocaleString("hu-HU") + " Ft";
    document.getElementById("dash-kpi-orders").textContent = resOrders.length + " db";
    document.getElementById("dash-kpi-avg").textContent = avgCart.toLocaleString("hu-HU") + " Ft";
    document.getElementById("dash-kpi-rating").textContent = "★ " + avgRating;

    // Time of day bars
    const tod = { morning: 0, afternoon: 0, evening: 0 };
    resOrders.forEach(o => {
        const h = parseInt((o.time || "12:00").split(":")[0]);
        if (h >= 6 && h < 12) tod.morning++;
        else if (h >= 12 && h < 18) tod.afternoon++;
        else tod.evening++;
    });
    const todMax = Math.max(1, ...Object.values(tod));
    const todLabels = { morning: "Délelőtt (6–12)", afternoon: "Délután (12–18)", evening: "Este/Éjjel" };
    const todColors = { morning: "#F59E0B", afternoon: "#FF9F1C", evening: "#2EC4B6" };
    const todContainer = document.getElementById("dash-analytics-timeofday");
    if (todContainer) {
        todContainer.innerHTML = Object.entries(tod).map(([k, v]) => `
            <div>
                <div style="display:flex;justify-content:space-between;font-size:11px;font-weight:600;margin-bottom:3px;">
                    <span>${todLabels[k]}</span><span>${v} rendelés</span>
                </div>
                <div style="height:8px;background:#E2E8F0;border-radius:4px;overflow:hidden;">
                    <div style="height:100%;width:${Math.round(v/todMax*100)}%;background:${todColors[k]};border-radius:4px;transition:width 0.4s;"></div>
                </div>
            </div>`).join("");
    }

    // Top items
    const itemCounts = {};
    resOrders.forEach(o => (o.items || []).forEach(it => {
        itemCounts[it.name] = (itemCounts[it.name] || 0) + (it.quantity || 1);
    }));
    const topItems = Object.entries(itemCounts).sort((a,b)=>b[1]-a[1]).slice(0,5);
    const topMax = topItems.length ? topItems[0][1] : 1;
    const topContainer = document.getElementById("dash-analytics-top-items");
    if (topContainer) {
        topContainer.innerHTML = topItems.length
            ? topItems.map(([name, cnt], i) => `
                <div style="display:flex;align-items:center;gap:8px;font-size:12px;">
                    <span style="font-size:14px;">${["🥇","🥈","🥉","4️⃣","5️⃣"][i]}</span>
                    <div style="flex:1;">
                        <div style="display:flex;justify-content:space-between;margin-bottom:3px;"><span style="font-weight:600;">${name}</span><span style="color:var(--text-muted);">${cnt}×</span></div>
                        <div style="height:6px;background:#E2E8F0;border-radius:3px;"><div style="height:100%;width:${Math.round(cnt/topMax*100)}%;background:var(--primary);border-radius:3px;"></div></div>
                    </div>
                </div>`).join("")
            : `<span style="font-size:11px;color:var(--text-muted);">Még nincs rendelési adat.</span>`;
    }

    // Upsell tips
    const tips = [];
    if (tod.evening > tod.morning) tips.push("🌙 Az esti időszakban a legtöbb a rendelés — érdemes akciós menüt ajánlani 17 után!");
    if (topItems.length) tips.push(`🏆 A <strong>${topItems[0][0]}</strong> a legnépszerűbb — próbáld feltét ajánlatokkal kombinálni!`);
    if (avgCart < 3000) tips.push("💡 Az átlagos kosárérték alacsony. Adj combo-ajánlatokat a megrendelési folyamathoz!");
    if (!tips.length) tips.push("✅ Minden rendben! Az értékesítési adatok egészségesek.");
    const tipsContainer = document.getElementById("dash-analytics-tips");
    if (tipsContainer) tipsContainer.innerHTML = tips.map(t => `<span>• ${t}</span>`).join("");
}

// ── Mobile Toppings & Categories Editor ─────────────────────────────────────
let mobCategoryToppings = window.categoryToppings || {};

function renderMobToppingsEditor() {
    renderMobCategoryList();
    renderMobToppingCatSelect();
}

function renderMobCategoryList() {
    const container = document.getElementById("dash-categories-list-container");
    if (!container || !activeRestaurant) return;
    container.innerHTML = "";
    activeRestaurant.categories.forEach(cat => {
        const row = document.createElement("div");
        row.style.cssText = "display:flex;justify-content:space-between;align-items:center;padding:10px 12px;background:#F8FAFC;border-radius:10px;margin-bottom:6px;border:1px solid #E2E8F0;font-size:13px;";
        row.innerHTML = `<span style="font-weight:600;">${cat}</span><button onclick="mobDeleteCategory('${cat}')" style="background:none;border:none;color:#E71D36;font-size:16px;cursor:pointer;padding:0 4px;">✕</button>`;
        container.appendChild(row);
    });
}

window.mobDeleteCategory = function(catName) {
    if (!confirm(`Biztosan törlöd a(z) "${catName}" kategóriát?`)) return;
    activeRestaurant.categories = activeRestaurant.categories.filter(c => c !== catName);
    syncData();
    renderMobToppingsEditor();
    renderCategoryDropdown();
};

document.getElementById("btn-add-category")?.addEventListener("click", () => {
    const input = document.getElementById("new-category-name");
    const name = input ? input.value.trim() : "";
    if (!name || !activeRestaurant) return;
    if (!activeRestaurant.categories.includes(name)) {
        activeRestaurant.categories.push(name);
        if (input) input.value = "";
        syncData();
        renderMobToppingsEditor();
        renderCategoryDropdown();
    }
});

function renderMobToppingCatSelect() {
    const select = document.getElementById("mob-topping-cat-select");
    if (!select || !activeRestaurant) return;
    const cur = select.value;
    select.innerHTML = "";
    activeRestaurant.categories.forEach(cat => {
        const opt = document.createElement("option");
        opt.value = cat; opt.textContent = cat;
        select.appendChild(opt);
    });
    if (cur && activeRestaurant.categories.includes(cur)) select.value = cur;
    else if (select.options.length) select.value = select.options[0].value;
    renderMobToppingPresetsList();
}

function renderMobToppingPresetsList() {
    const select = document.getElementById("mob-topping-cat-select");
    const container = document.getElementById("mob-topping-presets-list");
    if (!select || !container) return;
    const cat = select.value;
    container.innerHTML = "";
    const toppings = (mobCategoryToppings[cat] || []);
    if (!toppings.length) {
        container.innerHTML = `<span style="font-size:11px;color:var(--text-muted);">Nincs feltét ehhez a kategóriához.</span>`;
        return;
    }
    toppings.forEach((t, idx) => {
        const row = document.createElement("div");
        row.style.cssText = "display:flex;justify-content:space-between;align-items:center;padding:6px 10px;background:white;border-radius:8px;font-size:12px;border:1px solid #E2E8F0;";
        row.innerHTML = `<span><strong>${t.name}</strong> (+${t.price} Ft)</span><button onclick="mobDeleteToppingPreset('${cat}',${idx})" style="background:none;border:none;color:#E71D36;font-size:16px;cursor:pointer;padding:0 4px;">✕</button>`;
        container.appendChild(row);
    });
}

window.mobDeleteToppingPreset = function(cat, idx) {
    if (mobCategoryToppings[cat]) {
        mobCategoryToppings[cat].splice(idx, 1);
        renderMobToppingPresetsList();
    }
};

document.getElementById("mob-topping-cat-select")?.addEventListener("change", renderMobToppingPresetsList);

document.getElementById("btn-mob-add-topping-preset")?.addEventListener("click", () => {
    const cat = document.getElementById("mob-topping-cat-select")?.value;
    const nameEl = document.getElementById("mob-new-topping-name");
    const priceEl = document.getElementById("mob-new-topping-price");
    const name = nameEl ? nameEl.value.trim() : "";
    const price = priceEl ? (parseInt(priceEl.value) || 0) : 0;
    if (!cat || !name) { if (nameEl) nameEl.focus(); return; }
    if (!mobCategoryToppings[cat]) mobCategoryToppings[cat] = [];
    mobCategoryToppings[cat].push({ name, price });
    if (nameEl) nameEl.value = ""; 
    if (priceEl) priceEl.value = "";
    renderMobToppingPresetsList();
});

// ── Mobile custom topping adder in "Új Étel" tab ────────────────────────────
let _mobItemCustomToppings = [];
document.getElementById("btn-mob-add-custom-topping")?.addEventListener("click", () => {
    const nameEl = document.getElementById("mob-custom-topping-name");
    const priceEl = document.getElementById("mob-custom-topping-price");
    const name = nameEl ? nameEl.value.trim() : "";
    const price = priceEl ? (parseInt(priceEl.value) || 0) : 0;
    if (!name) { if (nameEl) nameEl.focus(); return; }
    _mobItemCustomToppings.push({ name, price });
    if (nameEl) nameEl.value = ""; 
    if (priceEl) priceEl.value = "";
    renderMobCustomToppingTags();
    // Append to burger-toppings field
    const tf = document.getElementById("burger-toppings");
    if (tf) {
        const existing = tf.value.trim();
        tf.value = existing ? existing + `, ${name}:${price}` : `${name}:${price}`;
    }
});

function renderMobCustomToppingTags() {
    const container = document.getElementById("mob-custom-topping-tags");
    if (!container) return;
    container.innerHTML = "";
    _mobItemCustomToppings.forEach((t, idx) => {
        const tag = document.createElement("span");
        tag.style.cssText = "display:inline-flex;align-items:center;gap:4px;font-size:11px;background:#FEF3C7;padding:3px 8px;border-radius:20px;border:1px solid #FCD34D;";
        tag.innerHTML = `${t.name} (+${t.price} Ft) <span onclick="mobRemoveCustomTopping(${idx})" style="color:#92400E;font-weight:900;cursor:pointer;">✕</span>`;
        container.appendChild(tag);
    });
}

window.mobRemoveCustomTopping = function(idx) {
    _mobItemCustomToppings.splice(idx, 1);
    renderMobCustomToppingTags();
    // Rebuild toppings field from remaining
    const tf = document.getElementById("burger-toppings");
    const builtIn = tf.value.split(",").map(s => s.trim())
        .filter(s => !_mobItemCustomToppings.some(t => s.startsWith(t.name)) && s);
    const custom = _mobItemCustomToppings.map(t => `${t.name}:${t.price}`);
    tf.value = [...builtIn, ...custom].join(", ");
};

// ================= RESTAURANT CATEGORY SELECT & CRUD MANAGEMENT =================
function renderCategoryDropdown() {
    const select = document.getElementById("burger-category-select");
    select.innerHTML = "";

    if (!activeRestaurant || !activeRestaurant.categories) return;

    activeRestaurant.categories.forEach(cat => {
        const opt = document.createElement("option");
        opt.value = cat;
        opt.textContent = cat;
        select.appendChild(opt);
    });
}

function renderCategoryManagerList() {
    const container = document.getElementById("dash-categories-list-container");
    container.innerHTML = "";

    if (!activeRestaurant || !activeRestaurant.categories) return;

    activeRestaurant.categories.forEach(cat => {
        const el = document.createElement("div");
        el.className = "category-row";
        el.innerHTML = `
            <span>${cat}</span>
            <button class="btn-dash-action btn-dash-delete" data-cat="${cat}">Törlés</button>
        `;

        el.querySelector(".btn-dash-delete").addEventListener("click", () => {
            deleteCategory(cat);
        });

        container.appendChild(el);
    });
}

document.getElementById("btn-add-category")?.addEventListener("click", () => {
    const name = document.getElementById("new-category-name")?.value.trim();
    if (!name) {
        alert("Kérlek írd be a kategória nevét!");
        return;
    }

    if (!activeRestaurant.categories) activeRestaurant.categories = [];

    if (activeRestaurant.categories.includes(name)) {
        alert("Ez a kategória már létezik!");
        return;
    }

    activeRestaurant.categories.push(name);
    const catInput = document.getElementById("new-category-name");
    if (catInput) catInput.value = "";

    renderCategoryManagerList();
    renderCategoryDropdown();
});

function deleteCategory(catName) {
    if (!confirm(`Biztosan törlöd a(z) "${catName}" kategóriát? A kategóriába tartozó ételek nem törlődnek, hanem az 'Egyéb' kategóriába kerülnek.`)) return;

    activeRestaurant.categories = activeRestaurant.categories.filter(c => c !== catName);

    activeRestaurant.menu.forEach(item => {
        if (item.category === catName) {
            item.category = "Egyéb";
        }
    });

    if (activeRestaurant.menu.some(i => i.category === "Egyéb") && !activeRestaurant.categories.includes("Egyéb")) {
        activeRestaurant.categories.push("Egyéb");
    }

    renderCategoryManagerList();
    renderCategoryDropdown();
}

// ================= RESTAURANT DASHBOARD STATISTICS =================
function renderDashboardStats() {
    document.getElementById("dash-stat-morning").textContent = `~${getAveragePrepTime("morning")} perc`;
    document.getElementById("dash-stat-afternoon").textContent = `~${getAveragePrepTime("afternoon")} perc`;
    document.getElementById("dash-stat-evening").textContent = `~${getAveragePrepTime("evening")} perc`;
}

function tickRefreshCountdown() {
    refreshTimeLeft--;
    if (refreshTimeLeft <= 0) {
        refreshTimeLeft = 10 * 60;
        renderDashboardStats();
    }

    const mins = String(Math.floor(refreshTimeLeft / 60)).padStart(2, '0');
    const secs = String(refreshTimeLeft % 60).padStart(2, '0');
    
    const label = document.getElementById("dash-stats-refresh-timer");
    if (label) {
        label.textContent = `Következő frissítés: ${mins}:${secs}`;
    }
}
setInterval(tickRefreshCountdown, 1000);

// ================= RESTAURANT DASHBOARD ORDERS MANAGER =================
function updateDashboardOrdersBadge() {
    if (!activeRestaurant) return;
    const count = orders.filter(o => o.restaurantId === activeRestaurant.id && o.status === "received").length;
    const badge = document.getElementById("dash-orders-badge");
    if (count > 0) {
        badge.style.display = "flex";
        badge.textContent = count;
    } else {
        badge.style.display = "none";
    }
}

function renderDashboardOrders() {
    const container = document.getElementById("dash-orders-list-container");
    container.innerHTML = "";

    if (!activeRestaurant) return;

    const filteredOrders = orders.filter(o => o.restaurantId === activeRestaurant.id);

    if (filteredOrders.length === 0) {
        container.innerHTML = `<div class="empty-cart-message"><p>Nincs még rendelésed.</p></div>`;
        return;
    }

    filteredOrders.slice().reverse().forEach(order => {
        const card = document.createElement("div");
        card.className = "order-card";

        let statusText = "Új";
        if (order.status === "preparing") statusText = "Készítés alatt";
        if (order.status === "dispatched") statusText = "Futárnál";

        let itemsHtml = "";
        order.items.forEach(item => {
            const extText = item.toppingsText ? ` <small style="color:var(--primary);">+ ${item.toppingsText}</small>` : '';
            itemsHtml += `<div><strong>${item.quantity}x</strong> ${item.name}${extText}</div>`;
        });

        let actionButtons = "";
        if (order.status === "received") {
            actionButtons = `<button class="btn btn-primary btn-sm btn-action-prepare" style="padding:8px 16px; font-size:12px;" data-id="${order.id}">Megnéztem</button>`;
        } else if (order.status === "preparing") {
            actionButtons = `<button class="btn btn-primary btn-sm btn-action-dispatch" style="padding:8px 16px; font-size:12px; background-color:var(--accent);" data-id="${order.id}">Futárnak átadva</button>`;
        } else {
            actionButtons = `<span style="font-size:12px; color:var(--text-muted); font-weight:600;">✓ Kézbesítve</span>`;
        }

        card.innerHTML = `
            <div class="order-card-header">
                <div>
                    <h4>${order.customerName}</h4>
                    <span class="order-time">${order.time}</span>
                </div>
                <span class="order-status-badge ${order.status}">${statusText}</span>
            </div>
            <div class="order-card-items">
                ${itemsHtml}
            </div>
            <div class="order-card-footer">
                <span class="order-total-lbl">${order.total} Ft</span>
                <div style="display:flex; gap:8px;">
                    ${actionButtons}
                </div>
            </div>
        `;

        const prepareBtn = card.querySelector(".btn-action-prepare");
        if (prepareBtn) {
            prepareBtn.addEventListener("click", () => {
                order.status = "preparing";
                updateDashboardOrdersBadge();
                renderDashboardOrders();
            });
        }

        const dispatchBtn = card.querySelector(".btn-action-dispatch");
        if (dispatchBtn) {
            dispatchBtn.addEventListener("click", () => {
                order.status = "dispatched";
                
                const elapsedSeconds = Math.round((Date.now() - order.createdTimestamp) / 1000);
                const simulatedMinutes = Math.max(12, Math.min(38, Math.round(elapsedSeconds * 2.5) + 12));
                
                const currentNapszak = getCurrentNapszak();
                napszakStats[currentNapszak].push(simulatedMinutes);
                window.napszakStats = napszakStats;
                
                updateDashboardOrdersBadge();
                renderDashboardOrders();
                renderDashboardStats();
            });
        }

        container.appendChild(card);
    });
}

// ================= RESTAURANT DASHBOARD REVIEWS DISPLAY =================
function renderDashboardReviews() {
    const container = document.getElementById("dash-reviews-list-container");
    container.innerHTML = "";

    if (!activeRestaurant) return;

    const resReviews = reviews.filter(r => r.restaurantId === activeRestaurant.id);

    if (resReviews.length === 0) {
        container.innerHTML = `<div style="font-size:12px; color:var(--text-muted); text-align:center; padding:10px 0;">Még nem érkezett értékelés az éttermedhez.</div>`;
        return;
    }

    resReviews.slice().reverse().forEach(rev => {
        const starsStr = "★".repeat(rev.rating) + "☆".repeat(5 - rev.rating);
        
        const el = document.createElement("div");
        el.className = "review-card";
        el.innerHTML = `
            <div class="review-card-header">
                <span class="review-author">${rev.customerName}</span>
                <span class="review-stars-gold">${starsStr}</span>
            </div>
            <div class="review-comment-text">${rev.comment}</div>
            <div style="font-size: 9px; color: var(--text-muted); text-align: right; margin-top: 4px;">${rev.date}</div>
        `;
        container.appendChild(el);
    });
}

// ================= RESTAURANT DASHBOARD MENU CRUD =================
function renderDashboardMenu() {
    const container = document.getElementById("dash-menu-items-container");
    container.innerHTML = "";

    if (!activeRestaurant || activeRestaurant.menu.length === 0) {
        container.innerHTML = `<div class="empty-cart-message"><p>Még nincs felvett ételed az étlapon.</p></div>`;
        return;
    }

    const categorized = {};
    activeRestaurant.menu.forEach(item => {
        const cat = item.category || "Egyéb";
        if (!categorized[cat]) categorized[cat] = [];
        categorized[cat].push(item);
    });

    for (const [catName, items] of Object.entries(categorized)) {
        const divHead = document.createElement("div");
        divHead.className = "menu-category-divider";
        divHead.textContent = catName;
        container.appendChild(divHead);

        items.forEach(item => {
            const itemCard = document.createElement("div");
            itemCard.className = "menu-card";
            
            const imgUrl = item.image || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3";

            let toppingsSummary = "";
            if (item.toppings && item.toppings.length > 0) {
                toppingsSummary = `<div style="font-size:10px; color:var(--text-muted); margin-top:2px;">Feltétek: ${item.toppings.map(t => `${t.name} (+${t.price} Ft)`).join(', ')}</div>`;
            }

            let allergensSummary = "";
            if (item.allergens && item.allergens.length > 0) {
                const allergenLabels = item.allergens.map(id => {
                    const a = (window.OFFICIAL_ALLERGENS || []).find(x => x.id === id);
                    return a ? `${a.id}. ${a.name}` : id;
                }).join(", ");
                allergensSummary = `
                    <div style="font-size: 10px; font-weight: 700; color: #B45309; background: #FEF3C7; border: 1px solid #FCD34D; padding: 2px 6px; border-radius: 4px; margin-top: 4px; width: fit-content; display: inline-flex; align-items: center; gap: 3px;" title="Allergének: ${allergenLabels}">
                        ⚠️ Allergének: ${item.allergens.join(", ")}
                    </div>
                `;
            }

            itemCard.innerHTML = `
                <div class="menu-card-img" style="background-image: url('${imgUrl}')"></div>
                <div class="menu-card-details">
                    <div>
                        <h4>${item.name}</h4>
                        <p>${item.description}</p>
                        ${toppingsSummary}
                        ${allergensSummary}
                    </div>
                    <div class="menu-card-footer" style="margin-top: 10px;">
                        <span class="menu-card-price">${item.price} Ft</span>
                        <div style="display: flex; gap: 8px;">
                            <button class="btn-dash-action btn-dash-edit" data-id="${item.id}">Szerkesztés</button>
                            <button class="btn-dash-action btn-dash-delete" data-id="${item.id}">Törlés</button>
                        </div>
                    </div>
                </div>
            `;

            itemCard.querySelector(".btn-dash-edit").addEventListener("click", () => {
                populateEditForm(item);
                switchDashboardTab("add");
            });
            itemCard.querySelector(".btn-dash-delete").addEventListener("click", () => deleteBurger(item.id));

            container.appendChild(itemCard);
        });
    }
}

function clearEditorForm() {
    document.getElementById("edit-burger-id").value = "";
    document.getElementById("burger-name").value = "";
    document.getElementById("burger-price").value = "";
    document.getElementById("burger-desc").value = "";
    document.getElementById("burger-toppings").value = "";
    document.getElementById("burger-img").value = "";
    
    const select = document.getElementById("burger-category-select");
    if (select && select.options.length > 0) {
        select.selectedIndex = 0;
    }

    document.getElementById("form-action-title").textContent = "🍽️ Új étel hozzáadása";
    document.getElementById("btn-cancel-edit").style.display = "none";
}

function populateEditForm(item) {
    document.getElementById("edit-burger-id").value = item.id;
    document.getElementById("burger-name").value = item.name;
    document.getElementById("burger-price").value = item.price;
    document.getElementById("burger-desc").value = item.description;
    document.getElementById("burger-img").value = item.image || "";
    
    const select = document.getElementById("burger-category-select");
    if (select) {
        select.value = item.category || "";
    }

    let toppingsStr = "";
    if (item.toppings && item.toppings.length > 0) {
        toppingsStr = item.toppings.map(t => `${t.name}:${t.price}`).join(', ');
    }
    document.getElementById("burger-toppings").value = toppingsStr;

    document.getElementById("form-action-title").textContent = "✏️ Étel szerkesztése";
    document.getElementById("btn-cancel-edit").style.display = "inline-flex";
}

document.getElementById("btn-save-burger")?.addEventListener("click", () => {
    const itemId = document.getElementById("edit-burger-id")?.value;
    const name = document.getElementById("burger-name")?.value.trim();
    const cat = document.getElementById("burger-category-select")?.value || "Egyéb";
    const price = parseInt(document.getElementById("burger-price")?.value);
    const desc = document.getElementById("burger-desc")?.value.trim();
    const toppingsInput = document.getElementById("burger-toppings")?.value.trim();
    const img = document.getElementById("burger-img")?.value.trim();

    if (!name || isNaN(price) || !desc) {
        alert("Kérlek töltsd ki a Nevet, az Árat és a Leírást!");
        return;
    }

    const parsedToppings = [];
    if (toppingsInput) {
        const parts = toppingsInput.split(",");
        parts.forEach(part => {
            const sub = part.split(":");
            if (sub.length === 2) {
                parsedToppings.push({
                    name: sub[0].trim(),
                    price: parseInt(sub[1].trim()) || 0
                });
            }
        });
    }

    if (itemId) {
        const foodItem = activeRestaurant.menu.find(b => b.id === itemId);
        if (foodItem) {
            foodItem.name = name;
            foodItem.category = cat;
            foodItem.price = price;
            foodItem.description = desc;
            foodItem.toppings = parsedToppings;
            foodItem.image = img || null;
        }
    } else {
        const newId = `${activeRestaurant.id}-f-${Date.now()}`;
        activeRestaurant.menu.push({
            id: newId,
            name: name,
            category: cat,
            price: price,
            description: desc,
            toppings: parsedToppings,
            image: img || null
        });
    }

    clearEditorForm();
    switchDashboardTab("menu");
});

function deleteBurger(itemId) {
    if (!confirm("Biztosan törölni szeretnéd ezt az ételt?")) return;
    
    activeRestaurant.menu = activeRestaurant.menu.filter(b => b.id !== itemId);
    
    cart = cart.filter(c => c.cartItemId !== itemId);
    updateCartBadges();

    renderDashboardMenu();
}

// ================= CSV EXCEL FILE LOADER =================
const csvDropZone = document.getElementById("csv-drop-zone");
const csvFileInput = document.getElementById("csv-file-input");

if (csvDropZone && csvFileInput) {
    csvDropZone.addEventListener("click", () => csvFileInput.click());

    csvFileInput.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (file) handleCSVFile(file);
    });

    csvDropZone.addEventListener("dragover", (e) => {
        e.preventDefault();
        csvDropZone.style.borderColor = "var(--primary)";
        csvDropZone.style.backgroundColor = "#FFFDF5";
    });

    csvDropZone.addEventListener("dragleave", () => {
        csvDropZone.style.borderColor = "";
        csvDropZone.style.backgroundColor = "";
    });

    csvDropZone.addEventListener("drop", (e) => {
        e.preventDefault();
        csvDropZone.style.borderColor = "";
        csvDropZone.style.backgroundColor = "";
        const file = e.dataTransfer.files[0];
        if (file) handleCSVFile(file);
    });
}

function handleCSVFile(file) {
    const reader = new FileReader();
    reader.onload = function(event) {
        const text = event.target.result;
        parseAndImportCSV(text);
    };
    reader.readAsText(file, "UTF-8");
}

function parseAndImportCSV(csvText) {
    if (!activeRestaurant) return;

    const lines = csvText.split(/\r?\n/);
    if (lines.length <= 1) {
        alert("Üres vagy érvénytelen fájl!");
        return;
    }

    let count = 0;
    
    for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) continue;

        const cols = line.split(",");
        if (cols.length < 4) continue;

        const name = cols[0].trim();
        const category = cols[1].trim() || "Egyéb";
        const price = parseInt(cols[2].trim()) || 0;
        const desc = cols[3].trim();
        
        if (category && !activeRestaurant.categories.includes(category)) {
            activeRestaurant.categories.push(category);
        }

        const toppings = [];
        if (cols[4]) {
            const rawToppings = cols[4].trim().split("|");
            rawToppings.forEach(rawT => {
                const parts = rawT.split(":");
                if (parts.length === 2) {
                    toppings.push({
                        name: parts[0].trim(),
                        price: parseInt(parts[1].trim()) || 0
                    });
                }
            });
        }

        activeRestaurant.menu.push({
            id: `${activeRestaurant.id}-f-import-${Date.now()}-${i}`,
            name: name,
            category: category,
            price: price,
            description: desc,
            toppings: toppings,
            image: null
        });
        count++;
    }

    alert(`Sikeresen importálva ${count} db étel!`);
    csvFileInput.value = "";
    
    renderCategoryDropdown();
    renderCategoryManagerList();
    switchDashboardTab("menu");
}

function addToCart(item, selectedToppings = []) {
    const resId = item.restaurantId || (activeRestaurant ? activeRestaurant.id : (cart[0] ? cart[0].restaurantId : "r1"));

    // Prevent mixing items from different restaurants
    if (cart.length > 0) {
        const existingResId = cart[0].restaurantId;
        if (existingResId && existingResId !== resId) {
            const currentRes = restaurants.find(r => r.id === existingResId);
            const currentResName = currentRes ? currentRes.name : "egy másik étteremből";
            const newRes = restaurants.find(r => r.id === resId);
            const newResName = newRes ? newRes.name : "az új étterem";

            const userConfirmed = confirm(
                `A kosarad jelenleg a(z) "${currentResName}" termékeit tartalmazza.\n\nEgyszerre csak egy étteremből lehet rendelni. Szeretnéd törölni a korábbi tételeket, és a(z) "${newResName}" ételét betenni a kosárba?`
            );

            if (!userConfirmed) {
                return false;
            }

            // Clear previous restaurant items
            cart = [];
            try { localStorage.removeItem("gastrogo_cart"); } catch(e){}
        }
    }

    const toppingsId = selectedToppings.map(t => t.name).sort().join("|");
    const cartItemId = `${item.id}-${toppingsId}`;

    const toppingsPrice = selectedToppings.reduce((s, t) => s + (t.price || 0), 0);
    const unitPrice = (item.price || 0) + toppingsPrice;

    const existing = cart.find(c => c.cartItemId === cartItemId);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({
            cartItemId: cartItemId,
            id: item.id,
            name: item.name,
            price: unitPrice,
            quantity: 1,
            restaurantId: resId,
            toppingsText: selectedToppings.map(t => t.name).join(", ")
        });
    }
    
    updateCartBadges();
    try { localStorage.setItem("gastrogo_cart", JSON.stringify(cart)); } catch(e){}
    try { renderCartItems(); } catch(e){}
    try { renderDesktopSidebarCart(); } catch(e){}
    
    const btn = document.querySelector(`.btn-add-cart[data-id="${item.id}"]`);
    if (btn) {
        btn.textContent = "✓";
        btn.style.backgroundColor = "#2EC4B6";
        setTimeout(() => {
            btn.textContent = "+";
            btn.style.backgroundColor = "";
        }, 800);
    }
}
window.addToCart = addToCart;

// ================= CART SYSTEM & GLOBAL CLICK DELEGATION =================
function toggleCart(show = true) {
    const cartSheet = document.getElementById("cart-sheet");
    if (!cartSheet) return;
    if (show) {
        cartSheet.classList.add("active");
        try {
            renderCartItems();
        } catch (err) {
            console.error("renderCartItems error:", err);
        }
    } else {
        cartSheet.classList.remove("active");
    }
}
window.toggleCart = toggleCart;

// Global click delegation for top buttons (back button, cart triggers, close buttons)
document.addEventListener("click", (e) => {
    // 1. Back button from restaurant menu screen
    const backBtn = e.target.closest("#btn-back-to-home, .back-btn");
    if (backBtn) {
        e.preventDefault();
        e.stopPropagation();
        navigateTo("screen-home");
        return;
    }

    // 2. Cart open triggers (from home, menu, or any screen)
    const cartTrigger = e.target.closest("#cart-icon-btn, #cart-icon-btn-menu, .cart-trigger");
    if (cartTrigger) {
        e.preventDefault();
        e.stopPropagation();
        toggleCart(true);
        return;
    }

    // 3. Cart close button
    const closeBtn = e.target.closest("#btn-close-cart, .close-cart-btn");
    if (closeBtn) {
        e.preventDefault();
        e.stopPropagation();
        toggleCart(false);
        return;
    }

    // 4. Cart backdrop click
    if (e.target && e.target.id === "cart-backdrop") {
        e.preventDefault();
        e.stopPropagation();
        toggleCart(false);
        return;
    }

    // 5. Back to home from success screen or checkout
    const successHomeBtn = e.target.closest("#btn-back-home-success, #btn-back-from-checkout");
    if (successHomeBtn) {
        e.preventDefault();
        e.stopPropagation();
        navigateTo("screen-home");
        return;
    }
});

// ================= PLATFORM FEES HELPER =================
function getConvenienceFee() {
    try {
        const val = Number(GastroGoDB.read("convenienceFee", 99));
        return Number.isFinite(val) ? val : 99;
    } catch (e) {
        return 99;
    }
}
window.getConvenienceFee = getConvenienceFee;

function updateCartBadges() {
    const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartBadge = document.getElementById("cart-badge-count");
    if (cartBadge) cartBadge.textContent = totalQty;
    const menuCartBadge = document.getElementById("cart-badge-count-menu");
    if (menuCartBadge) menuCartBadge.textContent = totalQty;

    // Mobile Floating Action Cart Button
    const floatingBadge = document.getElementById("floating-cart-badge-count");
    if (floatingBadge) floatingBadge.textContent = totalQty;
    const floatingCart = document.getElementById("mobile-floating-cart-btn");
    if (floatingCart) {
        floatingCart.classList.toggle("has-items", totalQty > 0);
    }
}

// ================= SAVED ADDRESSES SYSTEM =================
function getSavedAddresses(userKeyParam = null) {
    let userKey = (userKeyParam || currentUser || localStorage.getItem("gastrogo_current_user") || "").toLowerCase();
    
    if (userKey && userKey !== "guest") {
        try {
            const raw = localStorage.getItem(`gastrogo_saved_addresses_${userKey}`);
            if (raw) {
                const parsed = JSON.parse(raw);
                if (Array.isArray(parsed) && parsed.length > 0) return parsed;
            }
        } catch (e) {}

        // Fallback: check registered users database
        const users = getRegisteredUsers();
        if (users[userKey] && users[userKey].address) {
            const u = users[userKey];
            const defaultList = [{
                id: `addr-${userKey}-1`,
                label: "Otthon",
                name: u.name || userKey,
                address: u.address,
                phone: u.phone || ""
            }];
            saveSavedAddresses(defaultList, userKey);
            return defaultList;
        }
    }

    // Fallback across any existing registered user in localStorage
    const allUsers = getRegisteredUsers();
    const userKeys = Object.keys(allUsers);
    if (userKeys.length > 0) {
        const firstUser = allUsers[userKeys[0]];
        if (firstUser && firstUser.address) {
            const defaultList = [{
                id: `addr-${firstUser.username}-1`,
                label: "Otthon",
                name: firstUser.name || firstUser.username,
                address: firstUser.address,
                phone: firstUser.phone || ""
            }];
            return defaultList;
        }
    }
    return [];
}

function saveSavedAddresses(list, userKeyParam = null) {
    const userKey = (userKeyParam || currentUser || "guest").toLowerCase();
    try {
        localStorage.setItem(`gastrogo_saved_addresses_${userKey}`, JSON.stringify(list));
    } catch (e) {}
}

function renderSettingsAddresses() {
    const listContainer = document.getElementById("settings-addresses-list");
    if (!listContainer) return;
    const addrs = getSavedAddresses();
    if (addrs.length === 0) {
        listContainer.innerHTML = `<p style="font-size: 12px; color: var(--text-muted); margin: 0; padding: 6px 0;">Még nincs elmentett szállítási címed.</p>`;
        return;
    }
    listContainer.innerHTML = addrs.map(addr => `
        <div class="saved-address-card" style="display: flex; justify-content: space-between; align-items: flex-start; padding: 12px 14px; background: var(--bg-light); border: 1px solid #E2E8F0; border-radius: 12px;">
            <div>
                <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 4px;">
                    <span style="font-size: 11px; font-weight: 700; background: rgba(255,159,28,0.15); color: var(--primary); padding: 2px 8px; border-radius: 6px;">${addr.label || "Cím"}</span>
                    <strong style="font-size: 13px; color: var(--text-dark);">${addr.name}</strong>
                </div>
                <div style="font-size: 12px; color: var(--text-dark); margin-bottom: 2px;">📍 ${addr.address}</div>
                <div style="font-size: 11px; color: var(--text-muted);">📞 ${addr.phone}</div>
            </div>
            <button onclick="window.deleteAddressFromSettings('${addr.id}')" style="background: none; border: none; font-size: 16px; cursor: pointer; color: var(--danger); padding: 4px;">🗑️</button>
        </div>
    `).join("");
}

function toggleSettingsAddAddressForm(show) {
    const form = document.getElementById("settings-add-address-form");
    if (form) form.style.display = show ? "flex" : "none";
}
window.toggleSettingsAddAddressForm = toggleSettingsAddAddressForm;

function saveNewAddressFromSettings() {
    const label = document.getElementById("settings-new-addr-label")?.value.trim() || "Otthon";
    const name = document.getElementById("settings-new-addr-name")?.value.trim();
    const address = document.getElementById("settings-new-addr-address")?.value.trim();
    const phone = document.getElementById("settings-new-addr-phone")?.value.trim();

    if (!name || !address || !phone) {
        alert("Kérlek töltsd ki az összes kötelező mezőt!");
        return;
    }

    const addrs = getSavedAddresses();
    addrs.push({
        id: `addr-${Date.now()}`,
        label,
        name,
        address,
        phone
    });
    saveSavedAddresses(addrs);
    renderSettingsAddresses();
    toggleSettingsAddAddressForm(false);
    
    // Clear inputs
    if (document.getElementById("settings-new-addr-label")) document.getElementById("settings-new-addr-label").value = "";
    if (document.getElementById("settings-new-addr-name")) document.getElementById("settings-new-addr-name").value = "";
    if (document.getElementById("settings-new-addr-address")) document.getElementById("settings-new-addr-address").value = "";
    if (document.getElementById("settings-new-addr-phone")) document.getElementById("settings-new-addr-phone").value = "";
}
window.saveNewAddressFromSettings = saveNewAddressFromSettings;

function deleteAddressFromSettings(addrId) {
    if (!confirm("Biztosan törölni szeretnéd ezt a címet?")) return;
    let addrs = getSavedAddresses();
    addrs = addrs.filter(a => a.id !== addrId);
    saveSavedAddresses(addrs);
    renderSettingsAddresses();
}
window.deleteAddressFromSettings = deleteAddressFromSettings;

// ================= CART SYSTEM & DELIVERY FEE RESOLVER =================
function getRestaurantDeliveryFee(res, subtotal = 0) {
    if (!res) return 0;
    
    // 1. Get live synced settings from GastroGoDB
    const allSettings = GastroGoDB.read("restaurantSettings", {});
    const resId = typeof res === "string" ? res : res.id;
    const settings = (resId && allSettings[resId]) ? allSettings[resId] : {};

    // 2. Resolve configured delivery fee (from live settings or restaurant object)
    let fee = 0;
    if (settings.deliveryFee !== undefined && settings.deliveryFee !== null && settings.deliveryFee !== "") {
        fee = Number(settings.deliveryFee);
    } else if (res.deliveryFee !== undefined && res.deliveryFee !== null && res.deliveryFee !== "") {
        fee = Number(res.deliveryFee);
    } else {
        fee = 0;
    }

    if (isNaN(fee) || fee < 0) fee = 0;

    // 3. Resolve free delivery threshold
    const thresholdVal = (settings.freeDeliveryThreshold !== undefined && settings.freeDeliveryThreshold !== null && settings.freeDeliveryThreshold !== "")
        ? Number(settings.freeDeliveryThreshold)
        : (res.freeDeliveryThreshold ? Number(res.freeDeliveryThreshold) : null);

    if (thresholdVal && !isNaN(thresholdVal) && thresholdVal > 0 && subtotal >= thresholdVal) {
        return 0;
    }

    return fee;
}
window.getRestaurantDeliveryFee = getRestaurantDeliveryFee;

function renderCartItems() {
    const container = document.getElementById("cart-items-container");
    const summary = document.getElementById("cart-summary-section");
    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">🛒</div>
                <p>A kosarad üres</p>
            </div>
        `;
        if (summary) summary.style.display = "none";
        return;
    }

    if (summary) summary.style.display = "block";

    let subtotal = 0;
    const cartResId = cart[0].restaurantId;
    const cartRes = restaurants.find(r => r.id === cartResId);
    const extraFees = cartRes && cartRes.extraFees ? cartRes.extraFees : [];

    // Live settings resolve
    const allSettings = (typeof GastroGoDB !== "undefined") ? GastroGoDB.read("restaurantSettings", {}) : {};
    const resSettings = (cartRes && cartRes.id && allSettings[cartRes.id]) ? allSettings[cartRes.id] : {};
    const threshold = (resSettings.freeDeliveryThreshold !== undefined && resSettings.freeDeliveryThreshold !== null && resSettings.freeDeliveryThreshold !== "")
        ? Number(resSettings.freeDeliveryThreshold)
        : (cartRes && cartRes.freeDeliveryThreshold ? Number(cartRes.freeDeliveryThreshold) : 0);

    const itemsHtml = cart.map(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;

        const toppingsSubText = item.toppingsText ? `<div style="font-size:11px; color:var(--primary); margin-top:2px;">+ ${item.toppingsText}</div>` : '';

        return `
            <div class="cart-item">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    ${toppingsSubText}
                    <span>${item.price} Ft</span>
                </div>
                <div class="cart-item-qty">
                    <button class="qty-btn minus" data-id="${item.cartItemId}">-</button>
                    <span class="qty-val">${item.quantity}</span>
                    <button class="qty-btn plus" data-id="${item.cartItemId}">+</button>
                </div>
            </div>
        `;
    }).join("");

    let freeDeliveryBannerHtml = "";
    if (threshold > 0) {
        if (subtotal >= threshold) {
            freeDeliveryBannerHtml = `
                <div style="background:#ECFDF5; border:1.5px solid #A7F3D0; border-radius:12px; padding:10px 14px; margin-bottom:12px; font-size:12px; font-weight:700; color:#065F46; display:flex; align-items:center; gap:8px; box-shadow:0 2px 8px rgba(16,185,129,0.1);">
                    <span style="font-size:16px;">🎉</span>
                    <div>
                        <div>Elérted az INGYENES szállítást!</div>
                        <div style="font-size:10px; font-weight:500; color:#047857;">A szállítási díj le lett vonva a végösszegből.</div>
                    </div>
                </div>
            `;
        } else {
            const needed = threshold - subtotal;
            const pct = Math.min(100, Math.round((subtotal / threshold) * 100));
            freeDeliveryBannerHtml = `
                <div style="background:#FFFBEB; border:1.5px solid #FDE68A; border-radius:12px; padding:10px 14px; margin-bottom:12px; font-size:12px; box-shadow:0 2px 8px rgba(245,158,11,0.08);">
                    <div style="display:flex; justify-content:space-between; align-items:center; font-weight:700; color:#92400E; margin-bottom:6px;">
                        <span style="display:flex; align-items:center; gap:5px;">🚚 Ingyenes szállítás</span>
                        <span style="background:#FEF3C7; color:#B45309; padding:2px 8px; border-radius:6px; font-size:11px; font-weight:800;">Még ${needed.toLocaleString('hu-HU')} Ft</span>
                    </div>
                    <div style="background:#E2E8F0; height:6px; border-radius:3px; overflow:hidden;">
                        <div style="background:var(--primary); height:100%; width:${pct}%; transition:width 0.3s ease; border-radius:3px;"></div>
                    </div>
                    <div style="display:flex; justify-content:space-between; font-size:10px; color:#A16207; margin-top:4px;">
                        <span>${subtotal.toLocaleString('hu-HU')} Ft</span>
                        <span>Cél: ${threshold.toLocaleString('hu-HU')} Ft</span>
                    </div>
                </div>
            `;
        }
    }

    container.innerHTML = freeDeliveryBannerHtml + itemsHtml;

    container.querySelectorAll(".qty-btn.plus").forEach(btn => {
        btn.addEventListener("click", () => adjustQty(btn.getAttribute("data-id"), 1));
    });
    container.querySelectorAll(".qty-btn.minus").forEach(btn => {
        btn.addEventListener("click", () => adjustQty(btn.getAttribute("data-id"), -1));
    });

    const deliveryFee = getRestaurantDeliveryFee(cartRes, subtotal);
    document.getElementById("cart-subtotal").textContent = `${subtotal} Ft`;
    const deliveryRow = document.getElementById("cart-delivery").closest(".summary-row");
    if (deliveryRow) deliveryRow.style.display = "flex";
    document.getElementById("cart-delivery").textContent = deliveryFee === 0 ? "Ingyenes" : `${deliveryFee} Ft`;
    
    const convenienceFee = getConvenienceFee();
    const extraFeesContainer = document.getElementById("cart-extra-fees");
    const extraTotal = extraFees.reduce((sum, fee) => sum + (fee.amount || 0), 0);
    
    let feesHtml = extraFees.map(fee => `<div class="summary-row"><span>${fee.name}</span><span>${fee.amount} Ft</span></div>`).join("");
    if (convenienceFee > 0) {
        feesHtml += `<div class="summary-row" style="color:var(--primary); font-weight:600;"><span>Kényelmi díj</span><span>${convenienceFee} Ft</span></div>`;
    }
    extraFeesContainer.innerHTML = feesHtml;
    
    document.getElementById("cart-total").textContent = `${subtotal + deliveryFee + extraTotal + convenienceFee} Ft`;

    // Mobile Go to Checkout Button State
    const btnGoToCheckout = document.getElementById("btn-go-to-checkout");
    if (btnGoToCheckout) {
        const openStatus = (typeof window.getRestaurantOpenStatus === "function") 
            ? window.getRestaurantOpenStatus(cartRes) 
            : { isOrderable: true, status: "OPEN" };

        if (!openStatus.isOrderable) {
            btnGoToCheckout.disabled = true;
            btnGoToCheckout.textContent = "🔴 Az étterem jelenleg zárva tart";
            btnGoToCheckout.style.background = "#E11D48";
            btnGoToCheckout.style.opacity = "0.7";
            btnGoToCheckout.style.cursor = "not-allowed";
        } else if (openStatus.status === "PREORDER") {
            btnGoToCheckout.disabled = false;
            btnGoToCheckout.textContent = "⏱️ Tovább a fizetéshez (Előrendelés) ➔";
            btnGoToCheckout.style.background = "#F59E0B";
            btnGoToCheckout.style.opacity = "1";
            btnGoToCheckout.style.cursor = "pointer";
        } else {
            btnGoToCheckout.disabled = false;
            btnGoToCheckout.textContent = "Tovább a fizetéshez ➔";
            btnGoToCheckout.style.background = "var(--primary)";
            btnGoToCheckout.style.opacity = "1";
            btnGoToCheckout.style.cursor = "pointer";
        }
    }

    try { renderDesktopSidebarCart(); } catch(e){}
}

function clearCart() {
    cart = [];
    try { localStorage.removeItem("gastrogo_cart"); } catch(e){}
    updateCartBadges();
    renderCartItems();
}
window.clearCart = clearCart;

function renderDesktopSidebarCart() {
    const container = document.getElementById("desktop-sidebar-cart-items");
    const subtotalEl = document.getElementById("desktop-sidebar-subtotal");
    const deliveryEl = document.getElementById("desktop-sidebar-delivery");
    const convenienceEl = document.getElementById("desktop-sidebar-convenience");
    const totalEl = document.getElementById("desktop-sidebar-total");
    const nextBtn = document.getElementById("btn-desktop-to-checkout");

    if (!container) return;

    const convenienceFee = getConvenienceFee();
    if (convenienceEl) convenienceEl.textContent = `${convenienceFee} Ft`;

    if (cart.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 36px 10px; color: var(--text-muted);">
                <div style="font-size: 42px; margin-bottom: 10px;">🛒</div>
                <strong style="font-size: 14px; color: var(--text-dark); display: block; margin-bottom: 4px;">A kosarad még üres</strong>
                <p style="font-size: 12px; margin: 0; line-height: 1.4;">Válassz finom ételeket a bal oldali étlapról!</p>
            </div>
        `;
        if (subtotalEl) subtotalEl.textContent = "0 Ft";
        if (deliveryEl) deliveryEl.textContent = "0 Ft";
        if (totalEl) totalEl.textContent = "0 Ft";
        if (nextBtn) {
            nextBtn.disabled = true;
            nextBtn.textContent = "Tovább a fizetéshez ➔";
            nextBtn.style.background = "var(--primary)";
            nextBtn.style.opacity = "0.5";
            nextBtn.style.cursor = "not-allowed";
        }
        return;
    }

    const cartResId = cart[0].restaurantId;
    const cartRes = restaurants.find(r => r.id === cartResId);
    const openStatus = (typeof window.getRestaurantOpenStatus === "function") 
        ? window.getRestaurantOpenStatus(cartRes) 
        : { isOrderable: true, status: "OPEN" };

    if (nextBtn) {
        if (!openStatus.isOrderable) {
            nextBtn.disabled = true;
            nextBtn.textContent = "🔴 Az étterem jelenleg zárva tart";
            nextBtn.style.background = "#E11D48";
            nextBtn.style.opacity = "0.7";
            nextBtn.style.cursor = "not-allowed";
        } else if (openStatus.status === "PREORDER") {
            nextBtn.disabled = false;
            nextBtn.textContent = "⏱️ Előrendelés Nyitásra ➔";
            nextBtn.style.background = "#F59E0B";
            nextBtn.style.opacity = "1";
            nextBtn.style.cursor = "pointer";
        } else {
            nextBtn.disabled = false;
            nextBtn.textContent = "Tovább a fizetéshez ➔";
            nextBtn.style.background = "var(--primary)";
            nextBtn.style.opacity = "1";
            nextBtn.style.cursor = "pointer";
        }
    }

    let subtotal = 0;
    const cartResId = cart[0].restaurantId;
    const cartRes = restaurants.find(r => r.id === cartResId);
    const extraFees = cartRes && cartRes.extraFees ? cartRes.extraFees : [];

    const itemsHtml = cart.map(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        const toppingsSubText = item.toppingsText ? `<div style="font-size:11px; color:var(--primary); margin-top:2px;">+ ${item.toppingsText}</div>` : '';
        return `
            <div class="cart-item" style="display:flex; justify-content:space-between; align-items:center; padding:10px 12px; border-radius:12px; background:var(--bg-light); border:1px solid #E2E8F0; margin-bottom:8px;">
                <div style="flex:1; padding-right:8px;">
                    <strong style="font-size:13px; color:var(--text-dark); display:block;">${item.name}</strong>
                    ${toppingsSubText}
                    <span style="font-size:12px; font-weight:700; color:var(--primary);">${item.price} Ft</span>
                </div>
                <div class="cart-item-qty" style="display:flex; align-items:center; gap:6px;">
                    <button class="qty-btn minus" onclick="window.adjustQty('${item.cartItemId}', -1)" style="width:24px; height:24px; border-radius:6px; border:1px solid #CBD5E1; background:#fff; cursor:pointer;">-</button>
                    <span style="font-size:13px; font-weight:700; min-width:16px; text-align:center;">${item.quantity}</span>
                    <button class="qty-btn plus" onclick="window.adjustQty('${item.cartItemId}', 1)" style="width:24px; height:24px; border-radius:6px; border:none; background:var(--primary); color:#fff; font-weight:700; cursor:pointer;">+</button>
                </div>
            </div>
        `;
    }).join("");

    let freeDeliveryBannerHtml = "";
    const threshold = Number(cartRes && cartRes.freeDeliveryThreshold) || 0;
    if (threshold > 0) {
        if (subtotal >= threshold) {
            freeDeliveryBannerHtml = `
                <div style="background:#ECFDF5; border:1px solid #A7F3D0; border-radius:12px; padding:10px 12px; margin-bottom:10px; font-size:12px; font-weight:700; color:#065F46; display:flex; align-items:center; gap:6px;">
                    <span>🎉</span> Elérted az INGYENES szállítást!
                </div>
            `;
        } else {
            const needed = threshold - subtotal;
            const pct = Math.min(100, Math.round((subtotal / threshold) * 100));
            freeDeliveryBannerHtml = `
                <div style="background:#FFFBEB; border:1px solid #FDE68A; border-radius:12px; padding:10px 12px; margin-bottom:10px; font-size:12px;">
                    <div style="display:flex; justify-content:space-between; font-weight:700; color:#92400E; margin-bottom:6px;">
                        <span>🚚 Ingyenes szállítás</span>
                        <span>Még ${needed.toLocaleString('hu-HU')} Ft</span>
                    </div>
                    <div style="background:#E2E8F0; height:6px; border-radius:3px; overflow:hidden;">
                        <div style="background:var(--primary); height:100%; width:${pct}%; transition:width 0.3s ease;"></div>
                    </div>
                </div>
            `;
        }
    }

    container.innerHTML = freeDeliveryBannerHtml + itemsHtml;

    const deliveryFee = getRestaurantDeliveryFee(cartRes, subtotal);
    const extraTotal = extraFees.reduce((sum, fee) => sum + (fee.amount || 0), 0);
    const finalTotal = subtotal + deliveryFee + extraTotal + convenienceFee;

    if (subtotalEl) subtotalEl.textContent = `${subtotal} Ft`;
    if (deliveryEl) deliveryEl.textContent = deliveryFee === 0 ? "Ingyenes" : `${deliveryFee} Ft`;
    if (totalEl) totalEl.textContent = `${finalTotal} Ft`;

    renderDesktopSidebarCheckout();
}
window.renderDesktopSidebarCart = renderDesktopSidebarCart;

// ================= TWO-PHASE DESKTOP SIDEBAR VIEW SWITCHER =================
function switchDesktopSidebarView(view = "cart") {
    const cartView = document.getElementById("desktop-sidebar-cart-view");
    const checkoutView = document.getElementById("desktop-sidebar-checkout-view");

    if (view === "checkout") {
        if (cart.length === 0) {
            alert("A kosarad üres! Válassz ételeket az étlapról a fizetéshez.");
            return;
        }
        if (cartView) cartView.style.display = "none";
        if (checkoutView) checkoutView.style.display = "flex";
        renderDesktopSidebarCheckout();
    } else {
        if (checkoutView) checkoutView.style.display = "none";
        if (cartView) cartView.style.display = "flex";
        renderDesktopSidebarCart();
    }
}
window.switchDesktopSidebarView = switchDesktopSidebarView;

function renderDesktopSidebarCheckout() {
    const select = document.getElementById("desktop-sidebar-address-select");
    const itemsCountEl = document.getElementById("desktop-checkout-items-count");
    const subtotalEl = document.getElementById("desktop-checkout-subtotal");
    const deliveryEl = document.getElementById("desktop-checkout-delivery");
    const convenienceEl = document.getElementById("desktop-checkout-convenience");
    const totalEl = document.getElementById("desktop-checkout-total");

    if (select) {
        const addrs = getSavedAddresses();
        if (addrs.length > 0) {
            select.innerHTML = addrs.map(a => `<option value="${a.id}">${a.label}: ${a.name} - ${a.address}</option>`).join("");
        } else {
            select.innerHTML = `<option value="">Nincs mentett cím (Kattints az + Új cím gombra)</option>`;
        }
    }

    if (!cart || cart.length === 0) {
        if (itemsCountEl) itemsCountEl.textContent = "0 db";
        if (subtotalEl) subtotalEl.textContent = "0 Ft";
        if (deliveryEl) deliveryEl.textContent = "0 Ft";
        if (convenienceEl) convenienceEl.textContent = "0 Ft";
        if (totalEl) totalEl.textContent = "0 Ft";
        return;
    }

    let totalCount = 0;
    let subtotal = 0;
    cart.forEach(item => {
        totalCount += item.quantity || 1;
        subtotal += (item.price || 0) * (item.quantity || 1);
    });

    const cartResId = cart[0].restaurantId;
    const cartRes = restaurants.find(r => r.id === cartResId);
    const deliveryFee = getRestaurantDeliveryFee(cartRes, subtotal);
    const extraFees = cartRes && cartRes.extraFees ? cartRes.extraFees : [];
    const convenienceFee = getConvenienceFee();
    const extraTotal = extraFees.reduce((sum, fee) => sum + (fee.amount || 0), 0);
    const finalTotal = subtotal + deliveryFee + extraTotal + convenienceFee;

    if (itemsCountEl) itemsCountEl.textContent = `${totalCount} db`;
    if (subtotalEl) subtotalEl.textContent = `${subtotal} Ft`;
    if (deliveryEl) deliveryEl.textContent = deliveryFee === 0 ? "Ingyenes" : `${deliveryFee} Ft`;
    if (convenienceEl) convenienceEl.textContent = `${convenienceFee} Ft`;
    if (totalEl) totalEl.textContent = `${finalTotal} Ft`;
}
window.renderDesktopSidebarCheckout = renderDesktopSidebarCheckout;

function toggleDesktopNewAddressForm(show = null) {
    const form = document.getElementById("desktop-sidebar-new-address-form");
    if (!form) return;
    const current = form.style.display === "flex";
    const nextState = show !== null ? show : !current;
    form.style.display = nextState ? "flex" : "none";
    if (nextState) {
        const nameInput = document.getElementById("desktop-new-addr-name");
        if (nameInput && !nameInput.value && currentUser && currentUser.toLowerCase() !== "guest") {
            nameInput.value = currentUser.charAt(0).toUpperCase() + currentUser.slice(1);
        }
        document.getElementById("desktop-new-addr-label")?.focus();
    }
}
window.toggleDesktopNewAddressForm = toggleDesktopNewAddressForm;

function saveDesktopNewAddress() {
    const label = document.getElementById("desktop-new-addr-label")?.value.trim() || "Otthon";
    const name = document.getElementById("desktop-new-addr-name")?.value.trim();
    const address = document.getElementById("desktop-new-addr-text")?.value.trim();
    const phone = document.getElementById("desktop-new-addr-phone")?.value.trim();

    if (!name || !address || !phone) {
        alert("Kérlek töltsd ki a Név, Pontos cím és Telefonszám mezőket!");
        return;
    }

    const addrs = getSavedAddresses();
    const newAddr = {
        id: `addr-${Date.now()}`,
        label: label,
        name: name,
        address: address,
        phone: phone
    };
    addrs.push(newAddr);
    saveSavedAddresses(addrs);

    // Reset inputs & hide form
    document.getElementById("desktop-new-addr-label").value = "";
    document.getElementById("desktop-new-addr-name").value = "";
    document.getElementById("desktop-new-addr-text").value = "";
    document.getElementById("desktop-new-addr-phone").value = "";
    toggleDesktopNewAddressForm(false);

    // Refresh selectors
    renderDesktopSidebarCheckout();
    const select = document.getElementById("desktop-sidebar-address-select");
    if (select) select.value = newAddr.id;
    renderSettingsAddresses();
}
window.saveDesktopNewAddress = saveDesktopNewAddress;

function handleDesktopPaymentSelect(radio) {
    document.querySelectorAll(".desktop-payment-opt").forEach(el => {
        el.classList.remove("active");
        el.style.border = "1px solid #E2E8F0";
        el.style.background = "#fff";
    });
    const label = radio.closest(".desktop-payment-opt");
    if (label) {
        label.classList.add("active");
        label.style.border = "2px solid #2EC4B6";
        label.style.background = "rgba(46,196,182,0.1)";
    }
}
window.handleDesktopPaymentSelect = handleDesktopPaymentSelect;

function submitOrderFromSidebar() {
    if (cart.length === 0) {
        alert("A kosarad üres!");
        return;
    }
    const addrs = getSavedAddresses();
    if (addrs.length === 0) {
        alert("Kérlek adj meg legalább egy szállítási címet a rendeléshez!");
        toggleDesktopNewAddressForm(true);
        return;
    }
    submitOrder();
    switchDesktopSidebarView("cart");
}
window.submitOrderFromSidebar = submitOrderFromSidebar;

function adjustQty(cartItemId, amount) {
    const item = cart.find(c => c.cartItemId === cartItemId);
    if (!item) return;

    item.quantity += amount;
    if (item.quantity <= 0) {
        cart = cart.filter(c => c.cartItemId !== cartItemId);
    }
    
    try { localStorage.setItem("gastrogo_cart", JSON.stringify(cart)); } catch(e){}
    updateCartBadges();
    renderCartItems();
}
window.adjustQty = adjustQty;

// ================= DEDICATED CHECKOUT SCREEN SYSTEM =================
let selectedPaymentMethod = "card";

function openCheckoutScreen() {
    if (cart.length === 0) {
        alert("A kosarad üres!");
        return;
    }
    toggleCart(false);
    navigateTo("screen-checkout");
    renderCheckoutScreen();
}
window.openCheckoutScreen = openCheckoutScreen;

function renderCheckoutScreen() {
    const addrs = getSavedAddresses();
    const savedView = document.getElementById("checkout-saved-address-view");
    const noAddrView = document.getElementById("checkout-no-address-view");
    const formContainer = document.getElementById("checkout-address-form-container");
    const select = document.getElementById("checkout-address-select");

    // Hide add form initially
    if (formContainer) formContainer.style.display = "none";

    if (addrs.length > 0) {
        if (savedView) savedView.style.display = "block";
        if (noAddrView) noAddrView.style.display = "none";
        if (select) {
            select.innerHTML = addrs.map(a => `
                <option value="${a.id}">${a.label}: ${a.name} - ${a.address}</option>
            `).join("");
            select.value = addrs[0].id;
        }
        updateCheckoutSelectedAddressCard(addrs[0]);
    } else {
        if (savedView) savedView.style.display = "none";
        if (noAddrView) noAddrView.style.display = "block";
    }

    // Render Order Summary Preview
    const itemsPreview = document.getElementById("checkout-order-items-preview");
    if (!cart || cart.length === 0) {
        if (itemsPreview) itemsPreview.innerHTML = `<div style="font-size: 13px; color: var(--text-muted); text-align: center; padding: 10px;">A kosarad üres. Válassz ételeket az étlapról!</div>`;
        const subtotalEl = document.getElementById("checkout-subtotal-val");
        if (subtotalEl) subtotalEl.textContent = `0 Ft`;
        const deliveryEl = document.getElementById("checkout-delivery-val");
        if (deliveryEl) deliveryEl.textContent = `0 Ft`;
        const totalEl = document.getElementById("checkout-final-total-val");
        if (totalEl) totalEl.textContent = `0 Ft`;
        return;
    }

    if (itemsPreview) {
        itemsPreview.innerHTML = cart.map(item => `
            <div style="display: flex; justify-content: space-between; font-size: 13px; margin-bottom: 4px;">
                <span>${item.quantity}x ${item.name}</span>
                <strong style="color: var(--text-dark);">${item.price * item.quantity} Ft</strong>
            </div>
        `).join("");
    }

    let subtotal = 0;
    const cartResId = cart[0] ? cart[0].restaurantId : null;
    const cartRes = cartResId ? restaurants.find(r => r.id === cartResId) : null;
    const extraFees = cartRes && cartRes.extraFees ? cartRes.extraFees : [];

    cart.forEach(item => { subtotal += (item.price || 0) * (item.quantity || 1); });
    const deliveryFee = getRestaurantDeliveryFee(cartRes, subtotal);
    const convenienceFee = getConvenienceFee();
    const extraTotal = extraFees.reduce((sum, f) => sum + (f.amount || 0), 0);
    const finalTotal = subtotal + deliveryFee + extraTotal + convenienceFee;

    const subtotalEl = document.getElementById("checkout-subtotal-val");
    if (subtotalEl) subtotalEl.textContent = `${subtotal} Ft`;
    const allSettings = (typeof GastroGoDB !== "undefined") ? GastroGoDB.read("restaurantSettings", {}) : {};
    const resSettings = (cartRes && cartRes.id && allSettings[cartRes.id]) ? allSettings[cartRes.id] : {};
    const threshold = (resSettings.freeDeliveryThreshold !== undefined && resSettings.freeDeliveryThreshold !== null && resSettings.freeDeliveryThreshold !== "")
        ? Number(resSettings.freeDeliveryThreshold)
        : (cartRes && cartRes.freeDeliveryThreshold ? Number(cartRes.freeDeliveryThreshold) : 0);

    const deliveryEl = document.getElementById("checkout-delivery-val");
    if (deliveryEl) {
        if (deliveryFee === 0) {
            deliveryEl.textContent = "Ingyenes (0 Ft)";
            deliveryEl.style.color = "#059669";
            deliveryEl.style.fontWeight = "700";
        } else if (threshold > 0) {
            const needed = threshold - subtotal;
            deliveryEl.textContent = `${deliveryFee} Ft (Még ${needed.toLocaleString('hu-HU')} Ft az ingyenesig)`;
            deliveryEl.style.color = "var(--text-dark)";
            deliveryEl.style.fontWeight = "600";
        } else {
            deliveryEl.textContent = `${deliveryFee} Ft`;
            deliveryEl.style.color = "var(--text-dark)";
            deliveryEl.style.fontWeight = "600";
        }
    }
    
    const extraEl = document.getElementById("checkout-extra-fees-val");
    let extraHtml = extraFees.map(f => `<div class="summary-row" style="display:flex; justify-content:space-between; font-size:13px; color:var(--text-muted); margin-bottom:6px;"><span>${f.name}:</span><span>${f.amount} Ft</span></div>`).join("");
    if (convenienceFee > 0) {
        extraHtml += `<div class="summary-row" style="display:flex; justify-content:space-between; font-size:13px; color:var(--primary); font-weight:600; margin-bottom:6px;"><span>Kényelmi díj:</span><span>${convenienceFee} Ft</span></div>`;
    }
    if (extraEl) extraEl.innerHTML = extraHtml;
    
    const totalEl = document.getElementById("checkout-final-total-val");
    if (totalEl) totalEl.textContent = `${finalTotal} Ft`;
}

function updateCheckoutSelectedAddressCard(addr) {
    if (!addr) return;
    const badge = document.getElementById("selected-addr-badge");
    const nameEl = document.getElementById("selected-addr-name");
    const textEl = document.getElementById("selected-addr-text");
    const phoneEl = document.getElementById("selected-addr-phone");

    if (badge) badge.textContent = addr.label || "Cím";
    if (nameEl) nameEl.textContent = addr.name || "";
    if (textEl) textEl.textContent = addr.address || "";
    if (phoneEl) phoneEl.textContent = `📞 ${addr.phone || ""}`;
}

function handleCheckoutAddressSelectChange(addrId) {
    const addrs = getSavedAddresses();
    const found = addrs.find(a => a.id === addrId);
    if (found) {
        updateCheckoutSelectedAddressCard(found);
    }
}
window.handleCheckoutAddressSelectChange = handleCheckoutAddressSelectChange;

function toggleCheckoutNewAddressMode(show = true) {
    const formContainer = document.getElementById("checkout-address-form-container");
    if (formContainer) {
        formContainer.style.display = show ? "flex" : "none";
        if (show) {
            const nameInput = document.getElementById("checkout-new-name");
            if (nameInput && !nameInput.value && currentUser && currentUser.toLowerCase() !== "guest") {
                nameInput.value = currentUser.charAt(0).toUpperCase() + currentUser.slice(1);
            }
            document.getElementById("checkout-new-addr-label")?.focus();
        }
    }
}
window.toggleCheckoutNewAddressMode = toggleCheckoutNewAddressMode;

function saveAddressFromCheckout() {
    const label = document.getElementById("checkout-new-addr-label")?.value.trim() || "Otthon";
    const name = document.getElementById("checkout-new-name")?.value.trim();
    const address = document.getElementById("checkout-new-address")?.value.trim();
    const phone = document.getElementById("checkout-new-phone")?.value.trim();

    if (!name || !address || !phone) {
        alert("Kérlek töltsd ki az összes kötelező mezőt (Név, Lakcím, Telefon)!");
        return;
    }

    const newAddr = {
        id: `addr-${Date.now()}`,
        label,
        name,
        address,
        phone
    };

    const addrs = getSavedAddresses();
    addrs.push(newAddr);
    saveSavedAddresses(addrs);
    renderSettingsAddresses();

    // Clear form inputs
    if (document.getElementById("checkout-new-addr-label")) document.getElementById("checkout-new-addr-label").value = "";
    if (document.getElementById("checkout-new-name")) document.getElementById("checkout-new-name").value = "";
    if (document.getElementById("checkout-new-address")) document.getElementById("checkout-new-address").value = "";
    if (document.getElementById("checkout-new-phone")) document.getElementById("checkout-new-phone").value = "";

    toggleCheckoutNewAddressMode(false);
    renderCheckoutScreen();

    // Select the newly added address
    const select = document.getElementById("checkout-address-select");
    if (select) {
        select.value = newAddr.id;
        updateCheckoutSelectedAddressCard(newAddr);
    }
}
window.saveAddressFromCheckout = saveAddressFromCheckout;

function submitOrder() {
    if (cart.length === 0) {
        alert("A kosarad üres!");
        return;
    }

    const addrs = getSavedAddresses();
    const sideSelect = document.getElementById("desktop-sidebar-address-select");
    const checkSelect = document.getElementById("checkout-address-select");
    const chosenAddrId = (sideSelect && sideSelect.value) || (checkSelect && checkSelect.value);

    let customerName = "";
    let deliveryAddress = "";
    let phone = "";
    const note = (document.getElementById("desktop-sidebar-note")?.value || document.getElementById("checkout-order-note")?.value || "").trim();

    if (addrs.length > 0) {
        const selected = (chosenAddrId ? addrs.find(a => a.id === chosenAddrId) : null) || addrs[0];
        customerName = selected.name;
        deliveryAddress = selected.address;
        phone = selected.phone;
    } else {
        const nameInput = document.getElementById("checkout-new-name");
        const addressInput = document.getElementById("checkout-new-address");
        const phoneInput = document.getElementById("checkout-new-phone");

        customerName = nameInput ? nameInput.value.trim() : "";
        deliveryAddress = addressInput ? addressInput.value.trim() : "";
        phone = phoneInput ? phoneInput.value.trim() : "";

        if (!customerName || !deliveryAddress || !phone) {
            alert("Kérlek adj meg legalább egy szállítási címet a profilodban a rendeléshez!");
            navigateTo("screen-settings");
            return;
        }
    }

    const orderId = `ord-${Date.now()}`;
    const cartResId = cart[0].restaurantId;
    const cartRes = restaurants.find(r => r.id === cartResId);

    // Opening Hours & Pre-order validation
    const openStatus = (typeof window.getRestaurantOpenStatus === "function") 
        ? window.getRestaurantOpenStatus(cartRes) 
        : { isOrderable: true, isPreOrder: false };

    if (!openStatus.isOrderable) {
        alert(`❌ Az étterem (${cartRes ? cartRes.name : 'Étterem'}) jelenleg zárva tart és nem tud rendelést fogadni.\n\n${openStatus.message || ''}`);
        return;
    }

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const deliveryFee = getRestaurantDeliveryFee(cartRes, subtotal);
    const extraFees = cartRes && cartRes.extraFees ? cartRes.extraFees : [];
    const convenienceFee = getConvenienceFee();
    const finalTotal = subtotal + deliveryFee + extraFees.reduce((sum, fee) => sum + fee.amount, 0) + convenienceFee;

    const checkedPayRadio = document.querySelector('input[name="desktop-payment"]:checked');
    const paymentLabel = checkedPayRadio ? checkedPayRadio.value : "💵 Utánvét (készpénz / kártya a futárnál)";
    const paymentStatus = paymentLabel.includes("Bankkártya") ? "Kiegyenlítve (Online)" : "Fizetendő átvételkor";

    const newOrder = {
        id: orderId,
        restaurantId: cartResId || "r1",
        username: currentUser || "guest",
        customerName: customerName || "Vevő",
        deliveryAddress: deliveryAddress || "",
        phone: phone || "",
        note: note || "",
        paymentMethod: paymentLabel,
        paymentStatus: paymentStatus,
        isPreOrder: Boolean(openStatus.isPreOrder),
        preOrderNote: openStatus.isPreOrder ? `⏱️ Előrendelés nyitásra (${openStatus.openTime || '11:00'})` : null,
        convenienceFee: convenienceFee,
        time: new Date().toLocaleTimeString('hu-HU', { hour: '2-digit', minute: '2-digit' }),
        createdTimestamp: Date.now(),
        items: cart.map(item => ({
            name: item.name || "Étel",
            price: Number(item.price) || 0,
            quantity: Number(item.quantity) || 1,
            toppingsText: item.toppingsText || ""
        })),
        total: Number(finalTotal) || 0,
        status: "received"
    };

    orders.push(newOrder);
    GastroGoDB.write("orders", orders);
    
    try {
        const db = window.firestoreDb || (typeof firebase !== "undefined" && firebase.apps && firebase.apps.length > 0 ? firebase.firestore() : null);
        if (db) {
            db.collection("orders").doc(orderId).set(JSON.parse(JSON.stringify(newOrder)))
                .then(() => console.log("🔥 Rendelés közvetlenül mentve Firebase-be:", orderId))
                .catch(err => console.error("Firestore közvetlen írási hiba:", err));
        }
    } catch (e) {
        console.error("Firestore direct write exception:", e);
    }
    
    lastPlacedOrderId = orderId;

    // Gamification Progression & Feedback
    try {
        const gData = calculateUserGamification();
        syncUserGamificationToCloud();
        updateUserAvatarUI();
        if (gData && gData.levelInfo && gData.levelInfo.level > 1) {
            showGamificationToast("⭐", "XP Jóváírva!", `Köszönjük a rendelést! Jelenlegi rangod: ${gData.levelInfo.title} (${gData.totalXp} XP)`);
        }
    } catch(gErr) {
        console.warn("Gamification calc error:", gErr);
    }

    // Populate Success Screen Meta Card
    const metaName = document.getElementById("success-recipient-name");
    if (metaName) metaName.textContent = customerName;
    const metaAddr = document.getElementById("success-recipient-address");
    if (metaAddr) metaAddr.textContent = deliveryAddress;
    const metaPay = document.getElementById("success-payment-method");
    if (metaPay) metaPay.textContent = paymentLabel;

    // Reset Cart
    cart = [];
    try { localStorage.removeItem("gastrogo_cart"); } catch(e){}
    updateCartBadges();
    try { renderCartItems(); } catch(e){}
    try { renderDesktopSidebarCart(); } catch(e){}
    
    navigateTo("screen-success");
    updateTrackingTimeline();
}
window.submitOrder = submitOrder;

// ================= CUSTOMER ORDERS SCREEN RENDERING =================
function renderCustomerOrders() {
    const listContainer = document.getElementById("customer-orders-list");
    if (!listContainer) return;

    const userOrders = getCustomerOrders();

    if (!userOrders || userOrders.length === 0) {
        listContainer.innerHTML = `
            <div style="text-align: center; padding: 40px 20px; color: var(--text-muted);">
                <div style="font-size: 52px; margin-bottom: 12px;">🧾</div>
                <h4 style="font-size: 16px; font-weight: 700; color: var(--text-dark); margin: 0 0 6px 0;">Még nincs aktív vagy korábbi rendelésed</h4>
                <p style="font-size: 13px; margin: 0 0 20px 0;">Válassz kedvenc éttermeid közül és rendelj finom ételeket!</p>
                <button class="btn btn-primary" onclick="window.navigateTo('screen-home')" style="padding: 11px 24px; border-radius: 12px; font-weight: 700;">
                    🍽️ Étlap böngészése
                </button>
            </div>
        `;
        return;
    }

    // Sort user orders: newest first
    const sortedOrders = [...userOrders].sort((a, b) => (b.createdTimestamp || 0) - (a.createdTimestamp || 0));

    listContainer.innerHTML = sortedOrders.map(order => {
        const res = restaurants.find(r => r.id === order.restaurantId);
        const resName = res ? res.name : (order.restaurantName || "GastroGo Étterem");
        const resImage = res && res.image ? res.image : "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=120&q=80";

        // Status definitions
        let badgeHtml = "";
        let step1Active = false;
        let step2Active = false;
        let step3Active = false;
        let statusDescription = "";

        if (order.status === "received") {
            badgeHtml = `<span style="background: rgba(255,159,28,0.15); color: #FF9F1C; font-weight: 700; font-size: 11px; padding: 3px 8px; border-radius: 6px; border: 1px solid rgba(255,159,28,0.3);">📥 Beérkezett</span>`;
            step1Active = true;
            statusDescription = "Az étterem megkapta a rendelésedet és hamarosan kezdi a készítést.";
        } else if (order.status === "preparing") {
            badgeHtml = `<span style="background: rgba(255,107,107,0.15); color: #FF6B6B; font-weight: 700; font-size: 11px; padding: 3px 8px; border-radius: 6px; border: 1px solid rgba(255,107,107,0.3);">👨‍🍳 Készítés alatt</span>`;
            step1Active = true;
            step2Active = true;
            statusDescription = "Az ételed éppen sül/fő a konyhában!";
        } else if (order.status === "dispatched") {
            badgeHtml = `<span style="background: rgba(46,196,182,0.15); color: #2EC4B6; font-weight: 700; font-size: 11px; padding: 3px 8px; border-radius: 6px; border: 1px solid rgba(46,196,182,0.3);">🛵 Futárnál</span>`;
            step1Active = true;
            step2Active = true;
            step3Active = true;
            statusDescription = "A futár felvette a csomagodat és úton van a szállítási címre!";
        } else if (order.status === "delivered" || order.status === "completed") {
            badgeHtml = `<span style="background: rgba(34,197,94,0.15); color: #22C55E; font-weight: 700; font-size: 11px; padding: 3px 8px; border-radius: 6px; border: 1px solid rgba(34,197,94,0.3);">✅ Kézbesítve</span>`;
            step1Active = true;
            step2Active = true;
            step3Active = true;
            statusDescription = "Jó étvágyat kívánunk a rendeléshez!";
        } else {
            badgeHtml = `<span style="background: rgba(148,163,184,0.15); color: #94A3B8; font-weight: 700; font-size: 11px; padding: 3px 8px; border-radius: 6px;">${order.status}</span>`;
            step1Active = true;
            statusDescription = "Rendelés feldolgozva.";
        }

        const itemsHtml = order.items.map(item => `
            <div style="display: flex; justify-content: space-between; font-size: 13px; color: var(--text-dark); margin-bottom: 3px;">
                <span>${item.quantity}x ${item.name} ${item.toppingsText ? `<small style="color:var(--text-muted);">(${item.toppingsText})</small>` : ''}</span>
                <strong>${item.price * item.quantity} Ft</strong>
            </div>
        `).join("");

        return `
            <div class="settings-card" style="padding: 16px; margin-bottom: 16px; border-radius: 16px;">
                <!-- Header -->
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px;">
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <img src="${resImage}" alt="${resName}" style="width: 42px; height: 42px; border-radius: 10px; object-fit: cover;">
                        <div>
                            <h4 style="margin: 0 0 2px 0; font-size: 15px; font-weight: 700; color: var(--text-dark);">${resName}</h4>
                            <span style="font-size: 11px; color: var(--text-muted);">⏰ ${order.time || 'Nemrég'} • #${order.id.slice(-6)}</span>
                        </div>
                    </div>
                    <div>
                        ${badgeHtml}
                    </div>
                </div>

                <!-- Live Status Timeline Steps -->
                <div style="background: var(--bg-light); border-radius: 14px; padding: 12px; margin-bottom: 12px; border: 1px solid #CBD5E1;">
                    <div style="display: flex; align-items: center; justify-content: space-between; position: relative; margin-bottom: 8px;">
                        <!-- Step 1 -->
                        <div style="display: flex; flex-direction: column; align-items: center; text-align: center; flex: 1; z-index: 2;">
                            <div style="width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; background: ${step1Active ? '#FF9F1C' : '#E2E8F0'}; color: ${step1Active ? '#fff' : '#94A3B8'}; font-weight: bold; margin-bottom: 4px; box-shadow: ${step1Active ? '0 2px 8px rgba(255,159,28,0.4)' : 'none'};">
                                📥
                            </div>
                            <span style="font-size: 10px; font-weight: ${step1Active ? '700' : '500'}; color: ${step1Active ? 'var(--text-dark)' : 'var(--text-muted)'};">Beérkezett</span>
                        </div>

                        <!-- Connector 1-2 -->
                        <div style="position: absolute; left: 20%; right: 50%; top: 14px; height: 3px; background: ${step2Active ? '#FF9F1C' : '#E2E8F0'}; z-index: 1;"></div>

                        <!-- Step 2 -->
                        <div style="display: flex; flex-direction: column; align-items: center; text-align: center; flex: 1; z-index: 2;">
                            <div style="width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; background: ${step2Active ? '#FF6B6B' : '#E2E8F0'}; color: ${step2Active ? '#fff' : '#94A3B8'}; font-weight: bold; margin-bottom: 4px; box-shadow: ${step2Active ? '0 2px 8px rgba(255,107,107,0.4)' : 'none'};">
                                👨‍🍳
                            </div>
                            <span style="font-size: 10px; font-weight: ${step2Active ? '700' : '500'}; color: ${step2Active ? 'var(--text-dark)' : 'var(--text-muted)'};">Készítés alatt</span>
                        </div>

                        <!-- Connector 2-3 -->
                        <div style="position: absolute; left: 50%; right: 20%; top: 14px; height: 3px; background: ${step3Active ? '#2EC4B6' : '#E2E8F0'}; z-index: 1;"></div>

                        <!-- Step 3 -->
                        <div style="display: flex; flex-direction: column; align-items: center; text-align: center; flex: 1; z-index: 2;">
                            <div style="width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; background: ${step3Active ? '#2EC4B6' : '#E2E8F0'}; color: ${step3Active ? '#fff' : '#94A3B8'}; font-weight: bold; margin-bottom: 4px; box-shadow: ${step3Active ? '0 2px 8px rgba(46,196,182,0.4)' : 'none'};">
                                🛵
                            </div>
                            <span style="font-size: 10px; font-weight: ${step3Active ? '700' : '500'}; color: ${step3Active ? 'var(--text-dark)' : 'var(--text-muted)'};">Futárnál</span>
                        </div>
                    </div>
                    <div style="font-size: 11px; color: var(--text-muted); text-align: center; margin-top: 4px;">
                        💡 ${statusDescription}
                    </div>
                </div>

                <!-- Order items -->
                <div style="padding: 6px 0; border-top: 1px dashed #CBD5E1; border-bottom: 1px dashed #CBD5E1; margin-bottom: 10px;">
                    ${itemsHtml}
                </div>

                <!-- Footer Info & Total -->
                <div style="display: flex; justify-content: space-between; align-items: flex-end; font-size: 12px;">
                    <div style="color: var(--text-muted);">
                        <div>📍 ${order.deliveryAddress || 'Cím nélküli'}</div>
                        <div>${order.paymentMethod || 'Fizetés'}</div>
                    </div>
                    <div style="text-align: right;">
                        <span style="font-size: 11px; color: var(--text-muted); display: block;">Végösszeg:</span>
                        <strong style="font-size: 16px; color: var(--primary);">${order.total} Ft</strong>
                    </div>
                </div>
            </div>
        `;
    }).join("");
}
window.renderCustomerOrders = renderCustomerOrders;

document.getElementById("btn-back-home-success")?.addEventListener("click", () => {
    navigateTo("screen-home");
});

if (typeof GastroGoDB !== "undefined" && typeof GastroGoDB.subscribe === "function") {
    GastroGoDB.subscribe("orders", updatedOrders => {
        orders.splice(0, orders.length, ...updatedOrders);
        updateCartBadges();
        if (currentScreen === "screen-orders") renderCustomerOrders();
        if (currentScreen === "screen-achievements") renderAchievements();
        if (currentScreen === "screen-success") updateTrackingTimeline();
        try { renderAchievements(); } catch(e){}
    });

    GastroGoDB.subscribe("restaurants", updatedRestaurants => {
        if (Array.isArray(updatedRestaurants) && updatedRestaurants.length > 0) {
            restaurants.splice(0, restaurants.length, ...updatedRestaurants);
            renderRestaurants();
            if (activeRestaurant) {
                const fresh = restaurants.find(r => r.id === activeRestaurant.id);
                if (fresh) activeRestaurant = fresh;
            }
            try { renderCartItems(); } catch(e){}
            try { renderDesktopSidebarCart(); } catch(e){}
        }
    });

    GastroGoDB.subscribe("reviews", updatedReviews => {
        reviews.splice(0, reviews.length, ...updatedReviews);
        if (activeRestaurant) {
            renderCustomerReviews(activeRestaurant.id);
            const newRating = getRestaurantAverageRating(activeRestaurant.id, activeRestaurant.rating);
            const ratingEl = document.getElementById("res-rating-val");
            if (ratingEl) ratingEl.textContent = newRating;
        }
        renderRestaurants();
    });

    GastroGoDB.subscribe("restaurantSettings", updatedSettings => {
        Object.entries(updatedSettings).forEach(([restaurantId, settings]) => {
            const restaurant = restaurants.find(item => item.id === restaurantId);
            if (restaurant) {
                Object.assign(restaurant, settings);
                restaurant.deliveryConfigured = true;
            }
        });
        renderRestaurants();
        try { renderCartItems(); } catch(e){}
        try { renderDesktopSidebarCart(); } catch(e){}
    });

    GastroGoDB.subscribe("convenienceFee", fee => {
        if (currentScreen === "screen-checkout") renderCheckoutScreen();
        try { renderCartItems(); } catch(e){}
    });

    GastroGoDB.subscribe("userProfiles", profiles => {
        updateUserAvatarUI();
    });
}

// ================= INITIALIZE =================
function initAppSession() {
    setupDarkMode();
    
    // Restore cart if any
    try {
        const savedCart = localStorage.getItem("gastrogo_cart");
        if (savedCart) {
            const parsed = JSON.parse(savedCart);
            if (Array.isArray(parsed)) cart = parsed;
        }
    } catch (e) {}

    // Restore active user if already logged in or default to guest
    const activeUserKey = localStorage.getItem("gastrogo_current_user") || "guest";
    currentUser = activeUserKey;
    currentUserRole = "customer";
    localStorage.setItem("gastrogo_current_user", activeUserKey);
    document.body.classList.add("user-authenticated");
    document.body.classList.remove("auth-mode");

    const users = getRegisteredUsers();
    const account = users[activeUserKey] || {};
    const nameToShow = (activeUserKey === "guest") ? "Vendég" : (account.name || (activeUserKey.charAt(0).toUpperCase() + activeUserKey.slice(1)));
    document.querySelectorAll(".username-display").forEach(el => {
        el.textContent = nameToShow;
    });
    const userLabel = document.getElementById("settings-username-label");
    if (userLabel) userLabel.textContent = `${nameToShow} (${currentUser})`;

    navigateTo("screen-home");

    updateUserAvatarUI();
    setupAvatarHandlers();
    updateCartBadges();
    renderSettingsAddresses();
    renderRestaurants();
    checkPWAInstalledState();

    try {
        if (typeof GastroGoDB !== "undefined" && typeof GastroGoDB.initCloudSeed === "function") {
            GastroGoDB.initCloudSeed(restaurants, reviews);
        }
    } catch(e){}
}

// ================= PROGRESSIVE WEB APP (PWA) HOMESCREEN INSTALL CONTROLLER =================
let deferredInstallPrompt = null;

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').catch(err => console.log('SW registration skipped:', err));
    });
}

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredInstallPrompt = e;
    const btn = document.getElementById("btn-install-pwa");
    if (btn && !isAppInStandaloneMode()) {
        btn.innerHTML = "<span>📲 Ikon Kirakása a Főképernyőre</span>";
    }
});

window.addEventListener('appinstalled', () => {
    deferredInstallPrompt = null;
    const btn = document.getElementById("btn-install-pwa");
    if (btn) {
        btn.innerHTML = "<span>✅ Sikeresen Hozzáadva a Főképernyőhöz!</span>";
        btn.style.background = "#10B981";
    }
});

function isAppInStandaloneMode() {
    return (window.matchMedia('(display-mode: standalone)').matches) || (window.navigator.standalone === true);
}

function checkPWAInstalledState() {
    const btn = document.getElementById("btn-install-pwa");
    if (!btn) return;

    if (isAppInStandaloneMode()) {
        btn.innerHTML = "<span>✅ Már a Főképernyőn Fut (Alkalmazás Mód)</span>";
        btn.style.background = "#10B981";
        btn.style.color = "#FFFFFF";
    }
}

function handlePWAInstallClick() {
    if (isAppInStandaloneMode()) {
        alert("🎉 A GastroGo már telepítve van és közvetlenül a főképernyődről, önálló alkalmazásként fut!");
        return;
    }

    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
                  (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) ||
                  (/Macintosh/.test(navigator.userAgent) && 'ontouchend' in document);

    const isIOSChrome = isIOS && (/CriOS/i.test(navigator.userAgent) || /Chrome/i.test(navigator.userAgent));

    if (deferredInstallPrompt) {
        // Native Android / Chrome installation prompt
        deferredInstallPrompt.prompt();
        deferredInstallPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                const btn = document.getElementById("btn-install-pwa");
                if (btn) {
                    btn.innerHTML = "<span>✅ Sikeresen Hozzáadva!</span>";
                    btn.style.background = "#10B981";
                }
            }
            deferredInstallPrompt = null;
        }).catch(() => {
            showAndroidPwaInstructions();
        });
    } else if (isIOSChrome) {
        // Apple iOS Chrome (Share button is top-right next to URL bar)
        showIOSChromePwaInstructions();
    } else if (isIOS) {
        // Apple iOS Safari (Share button is bottom toolbar)
        showIOSSafariPwaInstructions();
    } else {
        // Android / desktop fallback guidance
        showAndroidPwaInstructions();
    }
}
window.handlePWAInstallClick = handlePWAInstallClick;

function showIOSChromePwaInstructions() {
    const modal = document.getElementById("modal-pwa-instructions");
    const container = document.getElementById("pwa-steps-container");
    const title = document.getElementById("pwa-modal-title");
    const desc = document.getElementById("pwa-modal-desc");
    const topArrow = document.getElementById("pwa-chrome-top-arrow");
    const bottomArrow = document.getElementById("pwa-ios-bottom-arrow");

    const inlineBox = document.getElementById("pwa-inline-instruction");
    const inlineSteps = document.getElementById("pwa-inline-steps");

    const stepsHtml = `
        <div style="display:flex; align-items:center; gap:10px;">
            <span style="background:#FF9F1C; color:#000; font-weight:800; font-size:12px; width:22px; height:22px; border-radius:50%; display:flex; align-items:center; justify-content:center; flex-shrink:0;">1</span>
            <span style="font-size:12px; color:#1E293B;">Érintsd meg a <strong>Megosztás</strong> gombot (<span style="font-size:14px;">⬆️</span> vagy <span style="font-size:14px;">⎋</span>) <strong>fent a címsor jobb szélén</strong> (vagy alul a <strong>···</strong> menüt)!</span>
        </div>
        <div style="display:flex; align-items:center; gap:10px;">
            <span style="background:#FF9F1C; color:#000; font-weight:800; font-size:12px; width:22px; height:22px; border-radius:50%; display:flex; align-items:center; justify-content:center; flex-shrink:0;">2</span>
            <span style="font-size:12px; color:#1E293B;">Görgess le a felnyíló lapon és válaszd a <strong>„Hozzáadás a kezdőképernyőhöz”</strong> (<span style="font-size:14px;">➕</span>) pontot.</span>
        </div>
        <div style="display:flex; align-items:center; gap:10px;">
            <span style="background:#FF9F1C; color:#000; font-weight:800; font-size:12px; width:22px; height:22px; border-radius:50%; display:flex; align-items:center; justify-content:center; flex-shrink:0;">3</span>
            <span style="font-size:12px; color:#1E293B;">A jobb felső sarokban érintsd meg a <strong>„Hozzáadás”</strong> gombot.</span>
        </div>
    `;

    // Also populate inline card in settings
    if (inlineBox && inlineSteps) {
        inlineSteps.innerHTML = stepsHtml;
        inlineBox.style.display = "block";
    }

    if (modal && container) {
        if (title) title.textContent = "📱 Hozzáadás iPhone Chrome-ból";
        if (desc) desc.textContent = "A Chrome böngészőből 3 gyors érintéssel kiteheted az ikont:";
        if (topArrow) topArrow.style.display = "block";
        if (bottomArrow) bottomArrow.style.display = "none";
        container.innerHTML = stepsHtml;
        modal.classList.add("active");
        modal.style.display = "flex";
    }
}

function showIOSSafariPwaInstructions() {
    const modal = document.getElementById("modal-pwa-instructions");
    const container = document.getElementById("pwa-steps-container");
    const title = document.getElementById("pwa-modal-title");
    const desc = document.getElementById("pwa-modal-desc");
    const topArrow = document.getElementById("pwa-chrome-top-arrow");
    const bottomArrow = document.getElementById("pwa-ios-bottom-arrow");

    const inlineBox = document.getElementById("pwa-inline-instruction");
    const inlineSteps = document.getElementById("pwa-inline-steps");

    const stepsHtml = `
        <div style="display:flex; align-items:center; gap:10px;">
            <span style="background:#FF9F1C; color:#000; font-weight:800; font-size:12px; width:22px; height:22px; border-radius:50%; display:flex; align-items:center; justify-content:center; flex-shrink:0;">1</span>
            <span style="font-size:12px; color:#1E293B;">Érintsd meg a Safari alsó sávjában a <strong>Megosztás</strong> gombot (<span style="font-size:14px;">⬆️</span> vagy <span style="font-size:14px;">⎋</span>).</span>
        </div>
        <div style="display:flex; align-items:center; gap:10px;">
            <span style="background:#FF9F1C; color:#000; font-weight:800; font-size:12px; width:22px; height:22px; border-radius:50%; display:flex; align-items:center; justify-content:center; flex-shrink:0;">2</span>
            <span style="font-size:12px; color:#1E293B;">Görgess a listában és válaszd a <strong>„Főképernyőhöz adás”</strong> (<span style="font-size:14px;">➕</span>) opciót.</span>
        </div>
        <div style="display:flex; align-items:center; gap:10px;">
            <span style="background:#FF9F1C; color:#000; font-weight:800; font-size:12px; width:22px; height:22px; border-radius:50%; display:flex; align-items:center; justify-content:center; flex-shrink:0;">3</span>
            <span style="font-size:12px; color:#1E293B;">A jobb felső sarokban érintsd meg a <strong>„Hozzáadás”</strong> gombot.</span>
        </div>
    `;

    // Also populate inline card in settings
    if (inlineBox && inlineSteps) {
        inlineSteps.innerHTML = stepsHtml;
        inlineBox.style.display = "block";
    }

    if (modal && container) {
        if (title) title.textContent = "📱 Hozzáadás iPhone Safari-ból";
        if (desc) desc.textContent = "A Safari böngészőből 3 gyors érintéssel kiteheted az ikont:";
        if (topArrow) topArrow.style.display = "none";
        if (bottomArrow) bottomArrow.style.display = "block";
        container.innerHTML = stepsHtml;
        modal.classList.add("active");
        modal.style.display = "flex";
    }
}

function showAndroidPwaInstructions() {
    const modal = document.getElementById("modal-pwa-instructions");
    const container = document.getElementById("pwa-steps-container");
    const title = document.getElementById("pwa-modal-title");
    const desc = document.getElementById("pwa-modal-desc");
    const arrow = document.getElementById("pwa-ios-bottom-arrow");

    const inlineBox = document.getElementById("pwa-inline-instruction");
    const inlineSteps = document.getElementById("pwa-inline-steps");

    const stepsHtml = `
        <div style="display:flex; align-items:center; gap:10px;">
            <span style="background:#FF9F1C; color:#000; font-weight:800; font-size:12px; width:22px; height:22px; border-radius:50%; display:flex; align-items:center; justify-content:center; flex-shrink:0;">1</span>
            <span style="font-size:12px; color:#1E293B;">Érintsd meg a jobb felső sarokban a <strong>Három pont (⋮)</strong> menü gombot.</span>
        </div>
        <div style="display:flex; align-items:center; gap:10px;">
            <span style="background:#FF9F1C; color:#000; font-weight:800; font-size:12px; width:22px; height:22px; border-radius:50%; display:flex; align-items:center; justify-content:center; flex-shrink:0;">2</span>
            <span style="font-size:12px; color:#1E293B;">Válaszd az <strong>„Alkalmazás telepítése”</strong> vagy <strong>„Hozzáadás a kezdőképernyőhöz”</strong> pontot.</span>
        </div>
        <div style="display:flex; align-items:center; gap:10px;">
            <span style="background:#FF9F1C; color:#000; font-weight:800; font-size:12px; width:22px; height:22px; border-radius:50%; display:flex; align-items:center; justify-content:center; flex-shrink:0;">3</span>
            <span style="font-size:12px; color:#1E293B;">Hagyd jóvá a <strong>„Telepítés”</strong> gombbal, és az ikon megjelenik a képernyődön!</span>
        </div>
    `;

    // Also populate inline card in settings
    if (inlineBox && inlineSteps) {
        inlineSteps.innerHTML = stepsHtml;
        inlineBox.style.display = "block";
    }

    if (modal && container) {
        if (title) title.textContent = "📱 Hozzáadás a Kezdőképernyőre";
        if (desc) desc.textContent = "A Chrome / böngésző menüjéből egyszerűen kiteheted az ikont:";
        if (arrow) arrow.style.display = "none";
        container.innerHTML = stepsHtml;
        modal.classList.add("active");
        modal.style.display = "flex";
    }
}

function closePwaModal() {
    const modal = document.getElementById("modal-pwa-instructions");
    if (modal) {
        modal.classList.remove("active");
        modal.style.display = "none";
    }
}
window.closePwaModal = closePwaModal;

window.addEventListener("DOMContentLoaded", initAppSession);
initAppSession();
