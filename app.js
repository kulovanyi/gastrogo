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
                toppings: [
                    { name: "Extra sajt", price: 300 },
                    { name: "Kukorica", price: 200 },
                    { name: "Gomba", price: 200 },
                    { name: "Sonka", price: 400 }
                ]
            },
            {
                id: "r1-f2",
                name: "Diavola Spicy Pizza",
                category: "Pizza",
                description: "Csípős olasz szalámi, jalapeño karikák, mozzarella, paradicsomszósz.",
                price: 2390,
                image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                toppings: [
                    { name: "Extra sajt", price: 300 },
                    { name: "Erős paprika", price: 150 },
                    { name: "Sonka", price: 400 }
                ]
            },
            {
                id: "r1-f3",
                name: "Coca-Cola",
                category: "Italok",
                description: "0.33l dobozos klasszikus szénsavas üdítőital.",
                price: 490,
                image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                toppings: []
            },
            {
                id: "r1-f4",
                name: "Somlói Galuska",
                category: "Desszertek",
                description: "Klasszikus magyar édesség gazdag csokoládéöntettel és tejszínhabbal.",
                price: 1290,
                image: "https://images.unsplash.com/photo-1579372786545-d24232daf58c?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                toppings: [
                    { name: "Extra tejszínhab", price: 150 },
                    { name: "Reszelt dió", price: 200 }
                ]
            },
            {
                id: "r1-f5",
                name: "Prosciutto e Funghi Pizza",
                category: "Pizza",
                description: "Paradicsomszósz, mozzarella, érlelt olasz sonka, friss szeletelt csiperkegomba.",
                price: 2390,
                image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                toppings: [
                    { name: "Extra sajt", price: 300 },
                    { name: "Fokhagymás olaj", price: 100 },
                    { name: "Gomba", price: 200 }
                ]
            },
            {
                id: "r1-f6",
                name: "Quattro Formaggi Pizza",
                category: "Pizza",
                description: "Négyféle sajtos csoda: gorgonzola, mozzarella, parmezán, pecorino.",
                price: 2490,
                image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                toppings: [
                    { name: "Rukola", price: 200 },
                    { name: "Dió", price: 250 }
                ]
            },
            {
                id: "r1-f7",
                name: "Tonno e Cipolla Pizza",
                category: "Pizza",
                description: "Paradicsomos alap, mozzarella sajt, tonhaldarabok, lilahagyma karikák, olívabogyó.",
                price: 2490,
                image: "https://images.unsplash.com/photo-1573821663912-569905455b1c?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                toppings: [
                    { name: "Citrom karika", price: 100 },
                    { name: "Kapribogyó", price: 200 }
                ]
            },
            {
                id: "r1-f8",
                name: "Ungherese Pizza (Magyaros)",
                category: "Pizza",
                description: "Fűszeres paradicsomos alap, házi kolbász, bacon szeletek, lilahagyma, hegyes erős paprika.",
                price: 2590,
                image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                toppings: [
                    { name: "Extra kolbász", price: 350 },
                    { name: "Tükörtojás", price: 200 }
                ]
            },
            {
                id: "r1-f9",
                name: "Calzone (Félbehajtott Pizza)",
                category: "Pizza",
                description: "Félbehajtott kemencés tészta sonkával, gombával, ricottával és mozzarellával töltve.",
                price: 2590,
                image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                toppings: [
                    { name: "Paradicsomszósz a tetejére", price: 150 }
                ]
            },
            {
                id: "r1-f10",
                name: "Bolognai Spagetti",
                category: "Tészták",
                description: "Lassan főzött marhahúsos ragu, spagetti tészta, reszelt parmezán sajt.",
                price: 2290,
                image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                toppings: [
                    { name: "Extra parmezán", price: 250 }
                ]
            },
            {
                id: "r1-f11",
                name: "Carbonara Spagetti",
                category: "Tészták",
                description: "Tejszín nélkül! Pirított guanciale (tokaszalonna), tojássárgája, pecorino sajt.",
                price: 2390,
                image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                toppings: [
                    { name: "Extra bacon", price: 300 }
                ]
            },
            {
                id: "r1-f12",
                name: "Lasagne Al Forno",
                category: "Tészták",
                description: "Tésztalapok közé rétegezett bolognai ragu, krémes besamel mártás, kemencében sütve.",
                price: 2690,
                image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                toppings: [
                    { name: "Dupla sajt a tetejére", price: 300 }
                ]
            },
            {
                id: "r1-f13",
                name: "Gnocchi Sorrento",
                category: "Tészták",
                description: "Burgonyás gnocchi gazdag paradicsomszószban, friss mozzarellával egybesütve.",
                price: 2290,
                image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                toppings: [
                    { name: "Friss bazsalikom", price: 100 }
                ]
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
                toppings: [
                    { name: "Extra fagylalt", price: 200 }
                ]
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
                toppings: [
                    { name: "Laktózmentes tejjel", price: 100 },
                    { name: "Kókusztejjel", price: 150 }
                ]
            },
            {
                id: "r1-f20",
                name: "Családi Pizza Menü",
                category: "Akciós Menük",
                description: "2 db kemencés Margaréta pizza és 1 db ajándék 0.33l-es Coca-Cola.",
                price: 3990,
                image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                toppings: [
                    { name: "Plusz üdítő", price: 400 },
                    { name: "Extra sajt mindkettőre", price: 500 }
                ]
            },
            {
                id: "r1-f21",
                name: "Spagetti & Tiramisu Menü",
                category: "Akciós Menük",
                description: "1 adag Bolognai spagetti, 1 adag Klasszikus Olasz tiramisu és 1 db krémes Cappuccino.",
                price: 3490,
                image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                toppings: [
                    { name: "Extra tészta", price: 400 }
                ]
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
                toppings: [
                    { name: "Plusz Bacon", price: 300 },
                    { name: "Dupla sajt", price: 250 },
                    { name: "Tükörtojás", price: 200 }
                ]
            },
            {
                id: "r2-f2",
                name: "Füstös Bacon Burger",
                category: "Burger",
                description: "150g marhahúspogácsa, dupla ropogós bacon, füstös BBQ szósz, pirított hagyma, cheddar.",
                price: 2890,
                image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                toppings: [
                    { name: "Plusz Bacon", price: 300 },
                    { name: "Dupla sajt", price: 250 },
                    { name: "Hagyma karikák", price: 200 }
                ]
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
                toppings: [
                    { name: "Plusz sajt", price: 250 },
                    { name: "Feta sajt", price: 300 },
                    { name: "Extra hús", price: 600 }
                ]
            },
            {
                id: "r3-f2",
                name: "Gyros Kifliben",
                category: "Gyors étel",
                description: "Fűszeres hús csíkok, saláta, paradicsom, hagyma, fokhagymás és csípős szósz, friss ropogós kifli.",
                price: 1490,
                image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                toppings: [
                    { name: "Csípős szósz", price: 100 },
                    { name: "Olívabogyó", price: 200 }
                ]
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
                toppings: [
                    { name: "Extra uborka", price: 150 },
                    { name: "Plusz burgonyapüré", price: 300 }
                ]
            },
            {
                id: "r4-f2",
                name: "B Menü (Gulyásleves + Túrós csusza)",
                category: "Napi Menü",
                description: "Házias bográcsos gulyásleves marhahúsból, túrós csusza pörccel.",
                price: 2390,
                image: "https://images.unsplash.com/photo-1594756202469-9ff9799b2e4e?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                toppings: [
                    { name: "Dupla tepertő", price: 200 }
                ]
            }
        ]
    }
];

// ================= GLOBAL ORDERS STATE =================
if (!window.ordersDb) {
    window.ordersDb = [
        {
            id: "ord-mock-1",
            restaurantId: "r1",
            customerName: "Kovács Péter",
            time: "15:30",
            createdTimestamp: Date.now() - 25 * 60 * 1000,
            items: [
                { name: "Margaréta Pizza", price: 2290, quantity: 1, toppingsText: "Extra sajt" }
            ],
            total: 2590,
            status: "received"
        },
        {
            id: "ord-mock-2",
            restaurantId: "r2",
            customerName: "Szabó Anna",
            time: "16:15",
            createdTimestamp: Date.now() - 40 * 60 * 1000,
            items: [
                { name: "Haven Classic Burger", price: 2790, quantity: 2, toppingsText: "Plusz Bacon" }
            ],
            total: 5580,
            status: "preparing"
        }
    ];
}
const orders = window.ordersDb;
let lastPlacedOrderId = null;

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

// ================= DYNAMIC DATA GENERATOR FOR ANALYTICS =================
const mockNames = ["Nagy Gábor", "Kiss Eszter", "Kovács Péter", "Szabó Anna", "Tóth Bence", "Horváth Réka", "Varga Zoltán", "Molnár Dóra", "Farkas Balázs", "Németh Luca", "Papp Dániel", "Balogh Zsófia"];
const mockTimes = ["08:15", "09:40", "11:20", "12:10", "13:30", "14:50", "16:15", "17:40", "19:00", "20:30", "21:15", "22:00"];
const mockComments = [
    { rating: 5, comment: "Abszolút fantasztikus! Az ételek forróak és szuperek voltak!" },
    { rating: 5, comment: "Kedvenc helyem lett, nagyon gyors a kiszállítás." },
    { rating: 4, comment: "Nagyon finom volt, talán egy picit több szószt elbírt volna." },
    { rating: 5, comment: "Korrekt adagok, finom ízek, csak ajánlani tudom!" },
    { rating: 4, comment: "Gyorsan kiért, meleg volt és ízlett az egész családnak." },
    { rating: 3, comment: "Finom volt, de a futár egy kicsit késett." },
    { rating: 5, comment: "Minden tökéletes volt, a csomagolás is nagyon tiszta." },
    { rating: 4, comment: "Jó minőségű alapanyagok, ízletes fűszerezés." }
];

restaurants.forEach(res => {
    // Generate orders if there are less than 10
    const existingOrdersCount = orders.filter(o => o.restaurantId === res.id).length;
    if (existingOrdersCount < 10) {
        const toGenerate = 10 - existingOrdersCount;
        for (let i = 0; i < toGenerate; i++) {
            const name = mockNames[(i + res.id.charCodeAt(1)) % mockNames.length];
            const time = mockTimes[(i * 3 + res.id.charCodeAt(1)) % mockTimes.length];
            
            // Pick a random menu item from restaurant
            const menuItem = res.menu[i % res.menu.length] || { name: "Finomság", price: 1500 };
            const quantity = (i % 2) + 1;
            const itemPrice = menuItem.price;
            const total = itemPrice * quantity + res.deliveryFee;
            
            orders.push({
                id: `ord-gen-${res.id}-${i}`,
                restaurantId: res.id,
                customerName: name,
                time: time,
                createdTimestamp: Date.now() - (i * 2 + 1) * 3600 * 1000,
                items: [
                    { name: menuItem.name, price: itemPrice, quantity: quantity }
                ],
                total: total,
                status: i % 3 === 0 ? "preparing" : (i % 3 === 1 ? "dispatched" : "received")
            });
        }
    }

    // Generate reviews if there are less than 8
    const existingReviewsCount = reviews.filter(r => r.restaurantId === res.id).length;
    if (existingReviewsCount < 8) {
        const toGenerate = 8 - existingReviewsCount;
        for (let i = 0; i < toGenerate; i++) {
            const name = mockNames[(i + 5 + res.id.charCodeAt(1)) % mockNames.length];
            const comm = mockComments[(i + res.id.charCodeAt(1)) % mockComments.length];
            
            reviews.push({
                id: `rev-gen-${res.id}-${i}`,
                restaurantId: res.id,
                customerName: name,
                rating: comm.rating,
                comment: comm.comment,
                date: "2026. 08. 22."
            });
        }
    }
});

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
let currentScreen = "screen-login";
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

// ================= DYNAMIC RATINGS CALCULATION =================
function getRestaurantAverageRating(resId, defaultRating) {
    const resReviews = reviews.filter(r => r.restaurantId === resId);
    if (resReviews.length === 0) return defaultRating;
    const sum = resReviews.reduce((s, r) => s + r.rating, 0);
    return (sum / resReviews.length).toFixed(1);
}

// ================= NAVIGATION SYSTEM =================
function navigateTo(screenId) {
    const prevScreen = document.getElementById(currentScreen);
    if (prevScreen) {
        prevScreen.classList.remove("active");
        prevScreen.classList.remove("slide-left");
    }

    const nextScreen = document.getElementById(screenId);
    if (nextScreen) {
        nextScreen.classList.add("active");
        currentScreen = screenId;
    }

    if (screenId === "screen-success") {
        updateTrackingTimeline();
    }
}

// ================= LOGIN ROLE TABS SWITCHER =================
const tabCustomer = document.getElementById("tab-login-customer");
const tabRestaurant = document.getElementById("tab-login-restaurant");
const formCustomer = document.getElementById("form-customer");
const formRestaurant = document.getElementById("form-restaurant");

tabCustomer.addEventListener("click", () => {
    tabCustomer.classList.add("active");
    tabRestaurant.classList.remove("active");
    formCustomer.style.display = "flex";
    formRestaurant.style.display = "none";
    currentUserRole = "customer";
});

tabRestaurant.addEventListener("click", () => {
    tabRestaurant.classList.add("active");
    tabCustomer.classList.remove("active");
    formCustomer.style.display = "none";
    formRestaurant.style.display = "flex";
    currentUserRole = "restaurant";
});

// ================= AUTHENTICATION =================
function handleLoginCustomer(usernameVal) {
    if (!usernameVal.trim()) {
        alert("Kérlek adj meg egy felhasználónevet!");
        return;
    }
    currentUser = usernameVal;
    currentUserRole = "customer";
    
    document.querySelectorAll(".username-display").forEach(el => {
        el.textContent = currentUser.charAt(0).toUpperCase() + currentUser.slice(1);
    });
    
    document.querySelectorAll(".avatar").forEach(el => {
        el.textContent = currentUser.charAt(0).toUpperCase();
    });

    activeTab = "explore";
    activeCategory = "all";
    
    document.querySelectorAll("#category-tabs-container .category-item").forEach(item => {
        if (item.getAttribute("data-category") === "all") {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });

    document.getElementById("nav-btn-explore").classList.add("active");
    document.getElementById("nav-btn-saved").classList.remove("active");
    document.getElementById("home-section-title").textContent = "Felfedezés a környéken";

    renderRestaurants();
    navigateTo("screen-home");
}

function handleLoginRestaurant() {
    const selectedResId = document.getElementById("restaurant-select").value;
    const res = restaurants.find(r => r.id === selectedResId);
    if (!res) return;

    activeRestaurant = res;
    currentUserRole = "restaurant";

    document.getElementById("dash-restaurant-name").textContent = res.name;
    
    switchDashboardTab("menu");
    clearEditorForm();
    renderDashboardMenu();
    renderCategoryDropdown();
    renderCategoryManagerList();
    updateDashboardOrdersBadge();
    renderDashboardStats();
    navigateTo("screen-dashboard");
}

document.getElementById("btn-login").addEventListener("click", () => {
    const user = document.getElementById("username").value;
    handleLoginCustomer(user || "guest");
});

document.getElementById("btn-guest").addEventListener("click", () => {
    handleLoginCustomer("guest");
});

document.getElementById("btn-login-res").addEventListener("click", () => {
    handleLoginRestaurant();
});

// ================= CUSTOMER NAVIGATION TABS =================
document.getElementById("nav-btn-explore").addEventListener("click", () => {
    activeTab = "explore";
    document.getElementById("nav-btn-explore").classList.add("active");
    document.getElementById("nav-btn-saved").classList.remove("active");
    document.getElementById("home-section-title").textContent = "Felfedezés a környéken";
    renderRestaurants();
});

document.getElementById("nav-btn-saved").addEventListener("click", () => {
    activeTab = "saved";
    document.getElementById("nav-btn-saved").classList.add("active");
    document.getElementById("nav-btn-explore").classList.remove("active");
    document.getElementById("home-section-title").textContent = "Elmentett éttermeim";
    renderRestaurants();
});

function handleLogout() {
    currentUser = null;
    activeRestaurant = null;
    cart = [];
    updateCartBadges();
    navigateTo("screen-login");
}

document.getElementById("nav-btn-logout").addEventListener("click", handleLogout);

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
    container.innerHTML = "";

    const searchQuery = document.getElementById("restaurant-search").value.toLowerCase();
    
    let filteredList = restaurants;

    if (activeTab === "saved") {
        filteredList = restaurants.filter(res => savedRestaurants.includes(res.id));
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

        card.innerHTML = `
            <button class="fav-btn ${isSaved ? 'saved' : ''}" data-id="${res.id}">
                ${isSaved ? '♥' : '♡'}
            </button>
            <div class="restaurant-img" style="background-image: url('${res.image}')">
                <span class="restaurant-badge">★ ${liveRating}</span>
                <span class="restaurant-badge badge-delivery">${res.deliveryFee === 0 ? 'Ingyenes szállítás' : `Szállítás: ${res.deliveryFee} Ft`}</span>
            </div>
            <div class="restaurant-info">
                <h4>${res.name}</h4>
                <p class="restaurant-desc">${res.description}</p>
                <div class="restaurant-footer">
                    <span>🍽️ Kínálat (${res.menu.length} étel)</span>
                    <span>⏱ ${res.time}</span>
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

document.getElementById("restaurant-search").addEventListener("input", renderRestaurants);

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
    activeRestaurant = restaurant;
    
    const liveRating = getRestaurantAverageRating(restaurant.id, restaurant.rating);
    const napszakKey = getCurrentNapszak();
    const avgPrep = getAveragePrepTime(napszakKey);

    document.getElementById("menu-title").textContent = restaurant.name;
    document.getElementById("menu-restaurant-name").textContent = restaurant.name;
    document.getElementById("menu-restaurant-desc").textContent = restaurant.description;
    document.getElementById("res-rating-val").textContent = liveRating;
    document.getElementById("res-time-val").textContent = restaurant.time;
    document.getElementById("res-prep-stats-val").textContent = `⏱ Napszaki átlag: ~${avgPrep}p`;
    document.getElementById("restaurant-banner-bg").style.backgroundImage = `url('${restaurant.image}')`;

    // Configure Clean Helpline Phone Button
    const phoneEl = document.getElementById("menu-helpline-phone");
    phoneEl.textContent = `📞 ${restaurant.phone}`;
    phoneEl.onclick = () => alert(`Hívás indítása az étteremnek: ${restaurant.phone}`);

    const container = document.getElementById("menu-items-container");
    container.innerHTML = "";

    if (restaurant.menu.length === 0) {
        container.innerHTML = `<div class="empty-cart-message"><p>Ez az étterem jelenleg nem kínál ételeket.</p></div>`;
        document.getElementById("menu-category-tabs").style.display = "none";
    } else {
        const categories = [...new Set(restaurant.menu.map(item => item.category || "Egyéb"))];
        const tabsContainer = document.getElementById("menu-category-tabs");
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
                
                // Disable pointer events temporarily to prevent ghost clicks during smooth scrolling
                const scrollable = document.querySelector("#screen-menu .screen-scrollable");
                if (scrollable) {
                    scrollable.style.pointerEvents = "none";
                }
                
                const dividers = container.querySelectorAll(".menu-category-divider");
                for (let div of dividers) {
                    if (div.textContent === cat) {
                        div.scrollIntoView({ behavior: "smooth", block: "start" });
                        break;
                    }
                }
                
                setTimeout(() => {
                    if (scrollable) {
                        scrollable.style.pointerEvents = "auto";
                    }
                }, 500);
            });
            tabsContainer.appendChild(tab);
        });

        const categorized = {};
        restaurant.menu.forEach(item => {
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

                itemCard.innerHTML = `
                    <div class="menu-card-img" style="background-image: url('${imgUrl}')"></div>
                    <div class="menu-card-details">
                        <div>
                            <h4>${item.name}</h4>
                            <p>${item.description}</p>
                        </div>
                        <div class="menu-card-footer">
                            <span class="menu-card-price">${item.price} Ft</span>
                            <button class="btn-add-cart" data-id="${item.id}">+</button>
                        </div>
                    </div>
                `;

                itemCard.querySelector(".btn-add-cart").addEventListener("click", (e) => {
                    e.stopPropagation();
                    handleAddToCartClick(item);
                });

                container.appendChild(itemCard);
            });
        }
    }

    resetCustomerReviewForm();
    renderCustomerReviews(restaurant.id);
    navigateTo("screen-menu");
}

document.getElementById("btn-back-to-home").addEventListener("click", () => {
    navigateTo("screen-home");
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

document.getElementById("btn-submit-review").addEventListener("click", () => {
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
    
    const newRating = getRestaurantAverageRating(activeRestaurant.id, activeRestaurant.rating);
    document.getElementById("res-rating-val").textContent = newRating;

    resetCustomerReviewForm();
    renderCustomerReviews(activeRestaurant.id);
    renderRestaurants();
});

function renderCustomerReviews(resId) {
    const container = document.getElementById("reviews-list-container");
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

// ================= CUSTOMER TOPPING SELECTION MODAL =================
const toppingModal = document.getElementById("topping-modal");

function handleAddToCartClick(item) {
    if (!item.toppings || item.toppings.length === 0) {
        addToCart(item, []);
    } else {
        customizingItem = item;
        
        document.getElementById("topping-modal-title").textContent = item.name;
        
        const container = document.getElementById("topping-options-container");
        container.innerHTML = "";

        item.toppings.forEach((topping, index) => {
            const el = document.createElement("label");
            el.className = "topping-row";
            el.innerHTML = `
                <div class="topping-label-wrapper">
                    <input type="checkbox" class="topping-checkbox" data-index="${index}" data-price="${topping.price}">
                    <span>${topping.name}</span>
                </div>
                <span class="topping-price">+${topping.price} Ft</span>
            `;
            
            el.querySelector("input").addEventListener("change", updateToppingPriceSum);
            container.appendChild(el);
        });

        updateToppingPriceSum();
        toppingModal.classList.add("active");
    }
}

function updateToppingPriceSum() {
    if (!customizingItem) return;
    
    let sum = customizingItem.price;
    document.querySelectorAll(".topping-checkbox:checked").forEach(checkbox => {
        sum += parseInt(checkbox.getAttribute("data-price"));
    });

    document.getElementById("btn-confirm-toppings").textContent = `Kosárba helyezés: ${sum} Ft`;
}

document.getElementById("btn-confirm-toppings").addEventListener("click", () => {
    if (!customizingItem) return;

    const selectedToppings = [];
    document.querySelectorAll(".topping-checkbox:checked").forEach(checkbox => {
        const index = parseInt(checkbox.getAttribute("data-index"));
        selectedToppings.push(customizingItem.toppings[index]);
    });

    addToCart(customizingItem, selectedToppings);
    
    toppingModal.classList.remove("active");
    customizingItem = null;
});

document.getElementById("btn-close-topping").addEventListener("click", () => {
    toppingModal.classList.remove("active");
    customizingItem = null;
});
document.getElementById("topping-backdrop").addEventListener("click", () => {
    toppingModal.classList.remove("active");
    customizingItem = null;
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

dashNavBtns.menu.addEventListener("click", () => switchDashboardTab("menu"));
dashNavBtns.add.addEventListener("click", () => switchDashboardTab("add"));
dashNavBtns.orders.addEventListener("click", () => switchDashboardTab("orders"));
dashNavBtns.analytics.addEventListener("click", () => switchDashboardTab("analytics"));
dashNavBtns.toppings.addEventListener("click", () => switchDashboardTab("toppings"));
document.getElementById("nav-btn-dash-logout").addEventListener("click", handleLogout);

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
let mobCategoryToppings = categoryToppings || {};

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

document.getElementById("btn-add-category").addEventListener("click", () => {
    const input = document.getElementById("new-category-name");
    const name = input.value.trim();
    if (!name || !activeRestaurant) return;
    if (!activeRestaurant.categories.includes(name)) {
        activeRestaurant.categories.push(name);
        input.value = "";
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

document.getElementById("mob-topping-cat-select").addEventListener("change", renderMobToppingPresetsList);

document.getElementById("btn-mob-add-topping-preset").addEventListener("click", () => {
    const cat = document.getElementById("mob-topping-cat-select").value;
    const nameEl = document.getElementById("mob-new-topping-name");
    const priceEl = document.getElementById("mob-new-topping-price");
    const name = nameEl.value.trim();
    const price = parseInt(priceEl.value) || 0;
    if (!cat || !name) { nameEl.focus(); return; }
    if (!mobCategoryToppings[cat]) mobCategoryToppings[cat] = [];
    mobCategoryToppings[cat].push({ name, price });
    nameEl.value = ""; priceEl.value = "";
    renderMobToppingPresetsList();
});

// ── Mobile custom topping adder in "Új Étel" tab ────────────────────────────
let _mobItemCustomToppings = [];
document.getElementById("btn-mob-add-custom-topping").addEventListener("click", () => {
    const nameEl = document.getElementById("mob-custom-topping-name");
    const priceEl = document.getElementById("mob-custom-topping-price");
    const name = nameEl.value.trim();
    const price = parseInt(priceEl.value) || 0;
    if (!name) { nameEl.focus(); return; }
    _mobItemCustomToppings.push({ name, price });
    nameEl.value = ""; priceEl.value = "";
    renderMobCustomToppingTags();
    // Append to burger-toppings field
    const tf = document.getElementById("burger-toppings");
    const existing = tf.value.trim();
    tf.value = existing ? existing + `, ${name}:${price}` : `${name}:${price}`;
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

document.getElementById("btn-add-category").addEventListener("click", () => {
    const name = document.getElementById("new-category-name").value.trim();
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
    document.getElementById("new-category-name").value = "";

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

            itemCard.innerHTML = `
                <div class="menu-card-img" style="background-image: url('${imgUrl}')"></div>
                <div class="menu-card-details">
                    <div>
                        <h4>${item.name}</h4>
                        <p>${item.description}</p>
                        ${toppingsSummary}
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

document.getElementById("btn-save-burger").addEventListener("click", () => {
    const itemId = document.getElementById("edit-burger-id").value;
    const name = document.getElementById("burger-name").value.trim();
    const cat = document.getElementById("burger-category-select").value || "Egyéb";
    const price = parseInt(document.getElementById("burger-price").value);
    const desc = document.getElementById("burger-desc").value.trim();
    const toppingsInput = document.getElementById("burger-toppings").value.trim();
    const img = document.getElementById("burger-img").value.trim();

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

// ================= CART SYSTEM =================
const cartSheet = document.getElementById("cart-sheet");

function toggleCart(show = true) {
    if (show) {
        renderCartItems();
        cartSheet.classList.add("active");
    } else {
        cartSheet.classList.remove("active");
    }
}

document.getElementById("cart-icon-btn").addEventListener("click", () => toggleCart(true));
document.getElementById("cart-icon-btn-menu").addEventListener("click", () => toggleCart(true));
document.getElementById("btn-close-cart").addEventListener("click", () => toggleCart(false));
document.getElementById("cart-backdrop").addEventListener("click", (e) => {
    if (e.target === e.currentTarget) toggleCart(false);
});

function addToCart(item, selectedToppings = []) {
    const toppingsId = selectedToppings.map(t => t.name).sort().join("|");
    const cartItemId = `${item.id}-${toppingsId}`;

    const toppingsPrice = selectedToppings.reduce((s, t) => s + t.price, 0);
    const unitPrice = item.price + toppingsPrice;

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
            restaurantId: activeRestaurant.id,
            toppingsText: selectedToppings.map(t => t.name).join(", ")
        });
    }
    updateCartBadges();
    
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

function updateCartBadges() {
    const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById("cart-badge-count").textContent = totalQty;
    document.getElementById("cart-badge-count-menu").textContent = totalQty;
}

function renderCartItems() {
    const container = document.getElementById("cart-items-container");
    const summary = document.getElementById("cart-summary-section");
    
    if (cart.length === 0) {
        container.innerHTML = `
            <div class="empty-cart-message">
                <span class="empty-cart-icon">🛒</span>
                <p>A kosarad még üres</p>
            </div>
        `;
        summary.style.display = "none";
        return;
    }

    container.innerHTML = "";
    summary.style.display = "block";

    let subtotal = 0;
    const cartResId = cart[0].restaurantId;
    const cartRes = restaurants.find(r => r.id === cartResId);
    const deliveryFee = cartRes ? cartRes.deliveryFee : 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;

        const toppingsSubText = item.toppingsText ? `<div style="font-size:11px; color:var(--primary); margin-top:2px;">+ ${item.toppingsText}</div>` : '';

        const el = document.createElement("div");
        el.className = "cart-item";
        el.innerHTML = `
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
        `;

        el.querySelector(".qty-btn.plus").addEventListener("click", () => adjustQty(item.cartItemId, 1));
        el.querySelector(".qty-btn.minus").addEventListener("click", () => adjustQty(item.cartItemId, -1));

        container.appendChild(el);
    });

    document.getElementById("cart-subtotal").textContent = `${subtotal} Ft`;
    document.getElementById("cart-delivery").textContent = deliveryFee === 0 ? "Ingyenes" : `${deliveryFee} Ft`;
    document.getElementById("cart-total").textContent = `${subtotal + deliveryFee} Ft`;
}

function adjustQty(cartItemId, amount) {
    const item = cart.find(c => c.cartItemId === cartItemId);
    if (!item) return;

    item.quantity += amount;
    if (item.quantity <= 0) {
        cart = cart.filter(c => c.cartItemId !== cartItemId);
    }
    
    updateCartBadges();
    renderCartItems();
}

// ================= CHECKOUT =================
document.getElementById("btn-checkout").addEventListener("click", () => {
    if (cart.length === 0) return;

    const orderId = `ord-${Date.now()}`;
    const cartResId = cart[0].restaurantId;
    const cartRes = restaurants.find(r => r.id === cartResId);
    const deliveryFee = cartRes ? cartRes.deliveryFee : 0;
    
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const finalTotal = subtotal + deliveryFee;

    const newOrder = {
        id: orderId,
        restaurantId: cartResId,
        customerName: currentUser ? (currentUser.charAt(0).toUpperCase() + currentUser.slice(1)) : "Vendég",
        time: new Date().toLocaleTimeString('hu-HU', { hour: '2-digit', minute: '2-digit' }),
        createdTimestamp: Date.now(),
        items: cart.map(item => ({
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            toppingsText: item.toppingsText
        })),
        total: finalTotal,
        status: "received"
    };

    orders.push(newOrder);
    lastPlacedOrderId = orderId;

    toggleCart(false);
    cart = [];
    updateCartBadges();
    
    navigateTo("screen-success");
});

document.getElementById("btn-back-home-success").addEventListener("click", () => {
    navigateTo("screen-home");
});

// ================= INITIALIZE =================
window.addEventListener("DOMContentLoaded", () => {
    renderRestaurants();
});
