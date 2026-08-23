window.GastroGoDB = (() => {
    const prefix = "gastrogo:";
    const legacyKeys = {
        orders: "gastrogoOrders",
        restaurantSettings: "gastrogoRestaurantSettings",
        commissionRate: "gastrogoCommissionRate",
        restaurants: "gastrogoRestaurants"
    };

    function read(key, fallback) {
        try {
            const storageKey = prefix + key;
            const legacyKey = legacyKeys[key];
            const value = localStorage.getItem(storageKey) ?? (legacyKey ? localStorage.getItem(legacyKey) : null);
            return value === null ? fallback : JSON.parse(value);
        } catch (error) {
            console.warn(`A(z) ${key} adat nem olvasható.`, error);
            return fallback;
        }
    }

    function write(key, value) {
        localStorage.setItem(prefix + key, JSON.stringify(value));
        if (legacyKeys[key]) localStorage.setItem(legacyKeys[key], JSON.stringify(value));
    }

    function subscribe(key, handler) {
        window.addEventListener("storage", event => {
            if (event.key !== prefix + key && event.key !== legacyKeys[key] || !event.newValue) return;
            try {
                handler(JSON.parse(event.newValue));
            } catch (error) {
                console.warn(`A(z) ${key} frissítés nem olvasható.`, error);
            }
        });
    }

    return { read, write, subscribe };
})();
