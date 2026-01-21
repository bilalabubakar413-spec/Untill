// ==========================================================================
// CONFIGURATIE & DATA
// Dit gedeelte bevat alle statische gegevens zoals producten, prijzen en grafiekdata.
// ==========================================================================

// Lijst van producten per categorie
const productsData = {
    'Hardlopers': [
        { name: 'Biefstuk', price: 24.50, type: 'food' },
        { name: 'Kabeljauw', price: 21.00, type: 'food' },
        { name: 'Saté v/d Haas', price: 18.50, type: 'food' },
        { name: 'Koffie', price: 3.00, type: 'drink' },
        { name: 'Cappuccino', price: 3.30, type: 'drink' },
        { name: 'Cola Zero', price: 3.50, type: 'drink' },
        { name: 'Fanta Orange', price: 3.50, type: 'drink' },
        { name: 'Heineken Vaasje', price: 3.80, type: 'drink' },
        { name: 'Appeltaart', price: 5.00, type: 'food' },
        { name: 'Pornstar Martini', price: 9.50, type: 'drink' },
        { name: 'Carpaccio', price: 13.50, type: 'food' },
        { name: 'Broodmandje', price: 5.50, type: 'food' }
    ],
    'Warme Dranken': [
        { name: 'Koffie', price: 3.00, type: 'drink' },
        { name: 'Cappuccino', price: 3.30, type: 'drink' },
        { name: 'Espresso', price: 2.80, type: 'drink' },
        { name: 'Dubbele Espresso', price: 4.50, type: 'drink' },
        { name: 'Latte Macchiato', price: 3.80, type: 'drink' },
        { name: 'Koffie Verkeerd', price: 3.20, type: 'drink' },
        { name: 'Flat White', price: 4.00, type: 'drink' },
        { name: 'Warme Choco', price: 3.50, type: 'drink' },
        { name: 'Warme Choco + Slagroom', price: 4.25, type: 'drink' },
        { name: 'Chai Latte', price: 4.00, type: 'drink' },
        { name: 'Dirty Chai', price: 5.00, type: 'drink' },
        { name: 'Irish Coffee', price: 8.50, type: 'drink' },
        { name: 'Spanish Coffee', price: 8.50, type: 'drink' },
        { name: 'Italian Coffee', price: 8.50, type: 'drink' },
        { name: 'Thee (Diverse Smaken)', price: 3.00, type: 'drink' },
        { name: 'Verse Muntthee', price: 3.75, type: 'drink' },
        { name: 'Gemberthee', price: 3.75, type: 'drink' },
        { name: 'Thee + Honing', price: 3.50, type: 'drink' }
    ],
    'Fris & Sappen': [
        { name: 'Cola', price: 3.50, type: 'drink' },
        { name: 'Cola Zero', price: 3.50, type: 'drink' },
        { name: 'Fanta Orange', price: 3.50, type: 'drink' },
        { name: 'Fanta Cassis', price: 3.50, type: 'drink' },
        { name: 'Sprite', price: 3.50, type: 'drink' },
        { name: 'Ice Tea Sparkling', price: 3.60, type: 'drink' },
        { name: 'Ice Tea Green', price: 3.60, type: 'drink' },
        { name: 'Chaudfontaine Rood', price: 3.20, type: 'drink' },
        { name: 'Chaudfontaine Blauw', price: 3.20, type: 'drink' },
        { name: 'Tonic', price: 3.60, type: 'drink' },
        { name: 'Bitter Lemon', price: 3.60, type: 'drink' },
        { name: 'Ginger Ale', price: 3.60, type: 'drink' },
        { name: 'Ginger Beer', price: 4.50, type: 'drink' },
        { name: 'Rivella', price: 3.60, type: 'drink' },
        { name: 'Appelsap', price: 3.50, type: 'drink' },
        { name: 'Jus d\'Orange (Vers)', price: 4.50, type: 'drink' },
        { name: 'Tomatensap', price: 3.50, type: 'drink' },
        { name: 'Chocomel', price: 3.50, type: 'drink' },
        { name: 'Fristi', price: 3.50, type: 'drink' }
    ],
    'Bieren (Tap)': [
        { name: 'Heineken Fluitje', price: 3.50, type: 'drink' },
        { name: 'Heineken Vaasje', price: 3.80, type: 'drink' },
        { name: 'Heineken 0.5L', price: 6.50, type: 'drink' },
        { name: 'Affligem Blond', price: 5.20, type: 'drink' },
        { name: 'Affligem Dubbel', price: 5.20, type: 'drink' },
        { name: 'Affligem Tripel', price: 5.80, type: 'drink' },
        { name: 'Texels Skuumkoppe', price: 5.50, type: 'drink' },
        { name: 'Brand Weizen', price: 5.50, type: 'drink' },
        { name: 'Lagunitas IPA', price: 6.00, type: 'drink' },
        { name: 'Seizoensbier', price: 5.50, type: 'drink' }
    ],
    'Bieren (Fles)': [
        { name: 'Duvel', price: 5.50, type: 'drink' },
        { name: 'La Chouffe', price: 5.50, type: 'drink' },
        { name: 'Vedett White', price: 5.00, type: 'drink' },
        { name: 'Liefmans', price: 4.50, type: 'drink' },
        { name: 'Corona', price: 5.50, type: 'drink' },
        { name: 'Desperados', price: 5.50, type: 'drink' },
        { name: 'Brouwerij \'t IJ IPA', price: 6.00, type: 'drink' },
        { name: 'Karmeliet Tripel', price: 6.00, type: 'drink' },
        { name: 'Heineken 0.0', price: 3.50, type: 'drink' },
        { name: 'Amstel Radler', price: 3.80, type: 'drink' }
    ],
    'Wijnen': [
        { name: 'Sauvignon Blanc', price: 4.80, type: 'drink' },
        { name: 'Chardonnay', price: 5.50, type: 'drink' },
        { name: 'Pinot Grigio', price: 5.00, type: 'drink' },
        { name: 'Verdejo', price: 5.20, type: 'drink' },
        { name: 'Zoete Witte Wijn', price: 4.50, type: 'drink' },
        { name: 'Merlot', price: 4.80, type: 'drink' },
        { name: 'Cabernet Sauvignon', price: 5.50, type: 'drink' },
        { name: 'Malbec', price: 6.00, type: 'drink' },
        { name: 'Pinot Noir', price: 6.50, type: 'drink' },
        { name: 'Rosé (Huis)', price: 4.80, type: 'drink' },
        { name: 'Rosé Provence', price: 6.50, type: 'drink' },
        { name: 'Prosecco', price: 6.50, type: 'drink' },
        { name: 'Cava', price: 5.80, type: 'drink' },
        { name: 'Champagne (Glas)', price: 12.50, type: 'drink' }
    ],
    'Cocktails & Gin': [
        { name: 'Gin Tonic (Hendricks)', price: 10.50, type: 'drink' },
        { name: 'Gin Tonic (Bombay)', price: 9.50, type: 'drink' },
        { name: 'Gin Tonic (Pink)', price: 10.00, type: 'drink' },
        { name: 'Mojito', price: 9.50, type: 'drink' },
        { name: 'Pornstar Martini', price: 11.50, type: 'drink' },
        { name: 'Espresso Martini', price: 10.50, type: 'drink' },
        { name: 'Moscow Mule', price: 10.00, type: 'drink' },
        { name: 'Aperol Spritz', price: 8.50, type: 'drink' },
        { name: 'Limoncello Spritz', price: 9.00, type: 'drink' },
        { name: 'Old Fashioned', price: 11.00, type: 'drink' },
        { name: 'Negroni', price: 10.50, type: 'drink' },
        { name: 'Virgin Mojito (0.0)', price: 7.50, type: 'drink' }
    ],
    'Lunch': [
        { name: 'Soep v/d Dag', price: 6.50, type: 'food' },
        { name: 'Tomatensoep', price: 6.50, type: 'food' },
        { name: 'Uiensoep', price: 7.00, type: 'food' },
        { name: 'Tosti Ham/Kaas', price: 6.00, type: 'food' },
        { name: 'Tosti Caprese', price: 7.00, type: 'food' },
        { name: 'Uitsmijter Ham/Kaas', price: 9.50, type: 'food' },
        { name: 'Uitsmijter Spek', price: 10.50, type: 'food' },
        { name: '12-Uurtje Vlees', price: 13.50, type: 'food' },
        { name: '12-Uurtje Vis', price: 14.50, type: 'food' },
        { name: 'Broodje Carpaccio', price: 12.50, type: 'food' },
        { name: 'Broodje Gezond', price: 9.50, type: 'food' },
        { name: 'Broodje Zalm', price: 12.50, type: 'food' },
        { name: 'Broodje Hete Kip', price: 11.50, type: 'food' },
        { name: 'Club Sandwich Kip', price: 13.50, type: 'food' },
        { name: 'Club Sandwich Zalm', price: 14.50, type: 'food' },
        { name: 'Caesar Salade', price: 15.50, type: 'food' },
        { name: 'Salade Geitenkaas', price: 16.50, type: 'food' },
        { name: 'Kroketten (2st) op brood', price: 10.50, type: 'food' },
        { name: 'Vega Kroketten op brood', price: 10.50, type: 'food' }
    ],
    'Voorgerechten': [
        { name: 'Broodmandje', price: 6.50, type: 'food' },
        { name: 'Carpaccio', price: 14.50, type: 'food' },
        { name: 'Steak Tartaar', price: 15.50, type: 'food' },
        { name: 'Gamba\'s in Knoflook', price: 13.50, type: 'food' },
        { name: 'Burrata', price: 14.50, type: 'food' },
        { name: 'Vitello Tonnato', price: 15.00, type: 'food' },
        { name: 'Zalm Tartaar', price: 14.50, type: 'food' },
        { name: 'Uiensoep', price: 7.50, type: 'food' },
        { name: 'Soep v/d Dag', price: 7.00, type: 'food' },
        { name: 'Scampi Piri Piri', price: 14.00, type: 'food' }
    ],
    'Hoofdgerechten': [
        { name: 'Biefstuk', price: 25.50, type: 'food' },
        { name: 'Tournedos', price: 32.50, type: 'food' },
        { name: 'Ribeye Steak', price: 29.50, type: 'food' },
        { name: 'Saté v/d Haas', price: 19.50, type: 'food' },
        { name: 'Schnitzel', price: 18.50, type: 'food' },
        { name: 'Spareribs', price: 23.50, type: 'food' },
        { name: 'Hamburger Deluxe', price: 18.50, type: 'food' },
        { name: 'Lamsrack', price: 28.50, type: 'food' },
        { name: 'Lamskoteletten', price: 26.50, type: 'food' },
        { name: 'Eendenborst', price: 27.50, type: 'food' },
        { name: 'Hertenbiefstuk', price: 28.50, type: 'food' },
        { name: 'Kabeljauw', price: 24.50, type: 'food' },
        { name: 'Zalmfilet', price: 23.50, type: 'food' },
        { name: 'Zeebaars', price: 24.50, type: 'food' },
        { name: 'Tonijnsteak', price: 26.50, type: 'food' },
        { name: 'Sliptong', price: 22.50, type: 'food' },
        { name: 'Mosselen (Seizoen)', price: 21.50, type: 'food' },
        { name: 'Kreeft (Heel)', price: 45.00, type: 'food' },
        { name: 'Ravioli Truffel (Vega)', price: 19.50, type: 'food' },
        { name: 'Melanzane (Vega)', price: 18.50, type: 'food' },
        { name: 'Curry (Vegan)', price: 19.50, type: 'food' }
    ],
    'Pasta & Rijst': [
        { name: 'Spaghetti Bolognese', price: 16.50, type: 'food' },
        { name: 'Spaghetti Carbonara', price: 17.50, type: 'food' },
        { name: 'Lasagne huisgemaakt', price: 18.50, type: 'food' },
        { name: 'Tagliatelle Zalm/Room', price: 21.50, type: 'food' },
        { name: 'Penne Arrabbiata (Spicy)', price: 15.50, type: 'food' },
        { name: 'Truffel Pasta', price: 19.50, type: 'food' },
        { name: 'Nasi Goreng met Saté', price: 18.50, type: 'food' },
        { name: 'Kippenragout met Rijst', price: 17.50, type: 'food' },
        { name: 'Beef Teriyaki met Rijst', price: 22.50, type: 'food' },
        { name: 'Curry Madras (Kip)', price: 19.50, type: 'food' },
        { name: 'Risotto Paddenstoelen', price: 18.50, type: 'food' }
    ],
    'Desserts': [
        { name: 'Dame Blanche', price: 7.50, type: 'food' },
        { name: 'Cheesecake New York', price: 6.50, type: 'food' },
        { name: 'Crème Brûlée', price: 8.00, type: 'food' },
        { name: 'Tiramisu', price: 7.50, type: 'food' },
        { name: 'Chocolade Moelleux', price: 8.50, type: 'food' },
        { name: 'Chocolade Lava Cake', price: 9.00, type: 'food' },
        { name: 'Chocolademousse', price: 7.00, type: 'food' },
        { name: 'Brownie met IJs', price: 7.50, type: 'food' },
        { name: 'Eton Mess', price: 8.00, type: 'food' },
        { name: 'Aardbeien Romanoff', price: 8.50, type: 'food' },
        { name: 'Sorbet Aardbei', price: 7.50, type: 'food' },
        { name: 'Scroppino', price: 7.50, type: 'drink' },
        { name: 'Kaasplankje', price: 13.50, type: 'food' },
        { name: 'Koffie Compleet', price: 9.50, type: 'food' }
    ],
    'Snacks & Borrel': [
        { name: 'Bitterballen (8st)', price: 7.50, type: 'food' },
        { name: 'Bitterballen (12st)', price: 10.50, type: 'food' },
        { name: 'Bittergarnituur (12st)', price: 11.50, type: 'food' },
        { name: 'Bittergarnituur XL', price: 19.50, type: 'food' },
        { name: 'Kaasstengels (8st)', price: 8.00, type: 'food' },
        { name: 'Vlammetjes (8st)', price: 8.00, type: 'food' },
        { name: 'Gehaktballetjes (8st)', price: 8.50, type: 'food' },
        { name: 'Chicken Wings (6st)', price: 9.50, type: 'food' },
        { name: 'Onion Rings', price: 7.00, type: 'food' },
        { name: 'Mini Loempia\'s (8st)', price: 7.50, type: 'food' },
        { name: 'Kipnuggets (8st)', price: 7.00, type: 'food' },
        { name: 'Nachos Cheese', price: 9.50, type: 'food' },
        { name: 'Nachos Deluxe (Guac/Salsa)', price: 12.50, type: 'food' },
        { name: 'Broodplankje', price: 6.50, type: 'food' },
        { name: 'Olijven', price: 5.00, type: 'food' },
        { name: 'Portie Oude Kaas', price: 7.50, type: 'food' },
        { name: 'Portie Salami', price: 7.50, type: 'food' },
        { name: 'Yakitori Spiesjes', price: 8.50, type: 'food' },
        { name: 'Calamaris', price: 7.50, type: 'food' }
    ]
};

// Data voor de Manager Grafiek (tijdstippen en drukte-waardes)
const chartData = [
    { time: '12:00', val: 30 }, { time: '13:00', val: 50 }, { time: '14:00', val: 40 },
    { time: '15:00', val: 60 }, { time: '16:00', val: 55 }, { time: '17:00', val: 45 },
    { time: '18:00', val: 85, h: true }, { time: '19:00', val: 95, h: true }, { time: '20:00', val: 80, h: true },
    { time: '21:00', val: 40 }
];

// ==========================================================================
// WEER & CONTEXT LOGICA
// Hier definiëren we de weersomstandigheden en welk type producten daarbij horen.
// ==========================================================================
const weatherStates = {
    RAIN: { label: "Regenachtig & koud", icon: "fa-cloud-rain", colorClass: "text-blue-300", recFilter: "warm" },
    SUN: { label: "Droog & helder", icon: "fa-sun", colorClass: "text-yellow-300", recFilter: "cold" }
};

let currentWeather = weatherStates.SUN;

// Laatste snapshot om slimme logica te kunnen doen
let latestWeatherSnapshot = {
    temp: null,
    wind: null,
    rainy: null,
    labelShort: "WEER"
};


// ==========================================================================
// LIVE WEER (Amsterdam) - Open-Meteo (geen API key)
// ==========================================================================
const AMSTERDAM_LAT = 52.3676;
const AMSTERDAM_LON = 4.9041;

async function fetchAmsterdamWeather() {
    const url =
        `https://api.open-meteo.com/v1/forecast` +
        `?latitude=${AMSTERDAM_LAT}` +
        `&longitude=${AMSTERDAM_LON}` +
        `&current=temperature_2m,precipitation,weather_code,wind_speed_10m` +
        `&timezone=Europe/Amsterdam`;

    const res = await fetch(url);
    if (!res.ok) throw new Error(`Open-Meteo error: ${res.status}`);
    const data = await res.json();
    return data.current;
}

function isRainyOpenMeteo(code, precipitation) {
    const rainyCodes = new Set([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82, 95, 96, 99]);
    return (precipitation ?? 0) > 0.2 || rainyCodes.has(code);
}

function decideWeatherRecFilter(current) {
    const temp = Math.round(current.temperature_2m ?? 0);
    const precipitation = current.precipitation ?? 0;
    const wind = current.wind_speed_10m ?? 0;
    const code = current.weather_code ?? 0;

    const rainy = isRainyOpenMeteo(code, precipitation);
    const windy = wind >= 8; // m/s
    const recommendWarm = temp <= 12 || rainy || windy;

    return recommendWarm ? "warm" : "cold";
}

// Dit is het label dat je op de bon toont i.p.v. "ZONNIG"
function makeReceiptWeatherLabel({ temp, wind, rainy }) {
    if (rainy) return "REGEN";
    if (wind >= 10 && temp <= 12) return "WINDERIG";
    if (temp <= 8) return "KOUD";
    if (temp >= 18) return "WARM";
    return "WISSELEND";
}

function updateReceiptWeatherUI(labelShort) {
    const el = document.getElementById("receipt-weather-label");
    if (el) el.textContent = labelShort;
}

async function updateWeatherFromApi() {
    try {
        const w = await fetchAmsterdamWeather();

        const t = Math.round(w.temperature_2m ?? 0);
        const wind = Math.round(w.wind_speed_10m ?? 0);
        const rainy = isRainyOpenMeteo(w.weather_code ?? 0, w.precipitation ?? 0);

        latestWeatherSnapshot = {
            temp: t,
            wind,
            rainy,
            labelShort: makeReceiptWeatherLabel({ temp: t, wind, rainy })
        };

        // ✅ FIX screenshot 2: bon label niet hardcoded
        updateReceiptWeatherUI(latestWeatherSnapshot.labelShort);

        const rec = decideWeatherRecFilter(w);
        currentWeather = (rec === "warm") ? weatherStates.RAIN : weatherStates.SUN;
        currentWeather = { ...currentWeather, label: `${currentWeather.label} (${t}°C)`, recFilter: rec };

        applyWeatherContext();
        triggerThinkingAI(); // AI tip opnieuw berekenen bij nieuw weer

    } catch (e) {
        console.error("Weer ophalen mislukt:", e);
        updateReceiptWeatherUI("WEER");
        applyWeatherContext();
    }
}

// Lijst met aanbevelingen voor in de Gast Popup (Carousel)
const recItems = [
    {
        title: "Warme Choco + Slagroom",
        desc: "Verwarmt met 78% succesratio bij regenachtig weer",
        price: 3.50,
        tags: ["warm"], // Alleen tonen bij koud weer
        icon: "fa-mug-hot"
    },
    {
        title: "Irish Coffee",
        desc: "Perfecte afsluiter voor Gold Members",
        price: 7.50,
        tags: ["warm", "cold"], // Altijd goed
        icon: "fa-coffee"
    },
    {
        title: "Huisgemaakte Ice Tea",
        desc: "Verfrissend op het terras",
        price: 4.50,
        tags: ["cold"], // Alleen bij warm weer
        icon: "fa-leaf"
    },
    {
        title: "Speciaalbier v/d Tap",
        desc: "Hardloper bij zonnig weer",
        price: 5.50,
        tags: ["cold"],
        icon: "fa-beer"
    },
    {
        title: "Portie Bitterballen",
        desc: "Populaire snack rond dit tijdstip",
        price: 6.50,
        tags: ["warm", "cold"],
        icon: "fa-utensils"
    }
];

// Variabelen om de status van de carrousel bij te houden
let filteredRecs = []; // De lijst met gefilterde aanbevelingen (op basis van weer)
let currentRecIndex = 0; // Welke slide we nu zien

// ==========================================================================
// STATUS VAN DE KASSA
// ==========================================================================
let activeDept = 'Hardlopers'; // Welke categorie is geselecteerd
let cart = {}; // Het winkelmandje (object)

// Koppelingen naar HTML elementen (zodat we ze kunnen aanpassen)
const deptListEl = document.getElementById('dept-list');
const articleListEl = document.getElementById('article-list');
const receiptListEl = document.getElementById('receipt-list');
const currentDeptNameEl = document.getElementById('current-dept-name');
const itemCountEl = document.getElementById('item-count');
const totalPriceEl = document.getElementById('total-price');
const clockEl = document.getElementById('clock');

// ==========================================================================
// INITIALISATIE (START VAN DE APP)
// Dit wordt uitgevoerd zodra de pagina laadt.
// ==========================================================================
function init() {
    renderDepts();      // Teken de categorie-knoppen
    renderArticles();   // Teken de product-knoppen
    startClock();       // Start de klok

    // Koppel klik-acties aan de knoppen bovenin
    document.getElementById('btn-manager').onclick = openManagerModal;
    document.getElementById('btn-guest').onclick = openGuestModal;
    document.getElementById('btn-backspace').onclick = clearLastItem;

    // Koppel de groene vink knop (rechtsonder) aan de bevestigingspopup
    const btnCheckout = document.getElementById('btn-checkout');
    if (btnCheckout) btnCheckout.onclick = openConfirmModal;

    // Live weer init + elke 10 min refresh
    updateWeatherFromApi();
    setInterval(updateWeatherFromApi, 10 * 60 * 1000);

    // Teken de manager grafiek
    renderManagerChart();

    // AUTO OPEN GAST POPUP: Na 0.5 seconde opent de Gast AI vanzelf
    setTimeout(() => {
        openGuestModal();
    }, 500);

    // AUTO SLIDE: Elke 5 seconden naar de volgende aanbeveling
    setInterval(nextRec, 5000);
}

// Functie om de context (weer) in de UI te zetten
function applyWeatherContext() {
    // 1. Zoek de elementen in de popup
    const contextTitle = document.getElementById('weather-context-title');
    const contextIcon = document.getElementById('weather-context-icon');

    // 2. Pas tekst en kleur aan
    if (contextTitle && contextIcon) {
        contextTitle.innerText = `Context: ${currentWeather.label}`;
        contextTitle.className = `font-bold text-sm ${currentWeather.colorClass}`;
        contextIcon.className = `fas ${currentWeather.icon} ${currentWeather.colorClass}`;
    }

    // 3. Filter de lyst met aanbevelingen (alleen items die matchen met 'warm' of 'cold')
    filteredRecs = recItems.filter(item => item.tags.includes(currentWeather.recFilter));

    // Begin bij de eerste
    currentRecIndex = 0;
    updateRecCard();
}

// ==========================================================================
// KASSA LOGICA (CORE POS)
// Hier regelen we het toevoegen/verwijderen van producten en de klok.
// ==========================================================================

// Start de klok rechtsboven
function startClock() {
    setInterval(() => {
        // Zet de tijd in het element
        clockEl.textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        // Laat de bolletjes knipperen voor een levendig effect
        clockEl.classList.toggle('opacity-90');
    }, 1000);
}

// Verander van categorie (bijv. van Hardlopers naar Dranken)
function setActiveDept(dept) {
    activeDept = dept;
    currentDeptNameEl.textContent = dept; // Update de titel
    renderDepts();   // Ververs de linkerlijst (voor de 'active' kleur)
    renderArticles(); // Ververs de productenlijst
}

// Voeg een product toe aan het mandje
function addToCart(product) {
    // Check of product al in mandje zit
    if (cart[product.name]) {
        cart[product.name].count++; // Zo ja, verhoog aantal
    } else {
        // Zo nee, maak nieuw item aan (kopieer product info + set count op 1)
        cart[product.name] = { ...product, count: 1 };
    }
    // Ververs het bon overzicht en de AI suggesties
    renderCart();
    triggerThinkingAI();
}

// Verwijder een product uit het mandje (of verlaag aantal)
function removeFromCart(name) {
    if (!cart[name]) return; // Als niet bestaat, doe niks

    if (cart[name].count > 1) {
        cart[name].count--; // Verlaag aantal als > 1
    } else {
        delete cart[name]; // Verwijder volledig als het de laatste is
    }
    renderCart(); // Ververs bon
    triggerThinkingAI(); // Ververs AI
}

// Functie voor de Backspace knop (verwijder laatst toegevoegde item type)
function clearLastItem() {
    const keys = Object.keys(cart);
    if (keys.length > 0) {
        removeFromCart(keys[keys.length - 1]);
    }
}

// Functie voor de "Snel Toevoegen" knoppen in de Gast Popup (Favorieten)
function quickAdd(itemName) {
    let price = 3.50; // Standaard prijs backup

    // Zoek de echte prijs in de productsData
    for (const cat in productsData) {
        const found = productsData[cat].find(p => p.name === itemName);
        if (found) { price = found.price; break; }
    }

    // Voeg toe aan mandje
    addToCart({ name: itemName, price: price, type: 'food' });
}

// ==========================================================================
// AI HULP HELPERS (SLIMME LOGICA)
// Functies die het mandje analyseren en suggesties doen.
// ==========================================================================

// ==========================================================================
// AI HULP HELPERS (LIVE GEMINI SERVICE INTEGRATED)
// ==========================================================================

let aiDebounceTimer = null;
let guestCount = 5; // Default guest count

// Helper om te checken of item in cart zit
function contains(cart, namePart) {
    return Object.keys(cart).some(k => k.toLowerCase().includes(namePart.toLowerCase()));
}

// Helper om te checken of product (deels) in naam zit
function orderContains(namePart) {
    return contains(cart, namePart);
}

// SETTER voor aantal personen (aangeroepen vanuit UI)
function setGuestCount(n) {
    if (n < 1) n = 1;
    guestCount = n;

    // Update de UI
    const guestCountEl = document.getElementById('guest-count-display');
    if (guestCountEl) guestCountEl.textContent = `${guestCount} Pers`;

    // Trigger AI opnieuw omdat context veranderd is
    triggerThinkingAI();
}

/**
 * Genereert slimme upsell adviezen op basis van de bon, gasten en context.
 */

// ==========================================================================
// CENTRALIZED PAIRING MATRIX (DE SLIMME HERSENEN)
// ==========================================================================
const pairingRules = [
    // --- LUNCH COMBOS ---
    {
        triggers: ['broodje', 'tosti', 'sandwich', 'uitsmijter'],
        exclude: ['soep'],
        recommendation: { name: "Tomatensoep", price: 6.50, type: "food" },
        title: "Lunch Tip",
        reason: "Lekker met een kopje soep erbij?"
    },
    {
        triggers: ['soep'],
        exclude: ['broodje', 'tosti', 'sandwich', 'brood'],
        recommendation: { name: "Broodmandje", price: 6.50, type: "food" },
        title: "Lekker Soppen",
        reason: "Een vers broodmandje maakt uw soep compleet."
    },

    // --- DINER: VLEES (ROOD) -> WIJN ---
    {
        triggers: ['biefstuk', 'tournedos', 'ribeye', 'steak', 'lams', 'herten'],
        exclude: ['rode wijn', 'malbec', 'cabernet'],
        recommendation: { name: "Malbec", price: 6.00, type: "drink" },
        title: "Wijn Suggestie",
        reason: "Een volle Malbec past perfect bij rood vlees."
    },
    {
        triggers: ['stoof', 'wild', 'eend'],
        exclude: ['rode wijn', 'pinot noir'],
        recommendation: { name: "Pinot Noir", price: 6.50, type: "drink" },
        title: "Wijn Suggestie",
        reason: "Een elegante Pinot Noir gaat prachtig samen met wild."
    },

    // --- DINER: VIS -> WITTE WIJN ---
    {
        triggers: ['kabeljauw', 'zalm', 'vis', 'mossel', 'gamba', 'scampi'],
        exclude: ['witte wijn', 'chardonnay', 'pinot grigio'],
        recommendation: { name: "Chardonnay", price: 5.50, type: "drink" },
        title: "Witte Wijn Tip",
        reason: "Een romige Chardonnay haalt de smaak van vis naar boven."
    },
    {
        triggers: ['oesters', 'sliptong'],
        exclude: ['cava', 'champagne', 'prosecco'],
        recommendation: { name: "Cava", price: 5.80, type: "drink" },
        title: "Luxe Combinatie",
        reason: "Bubbels en zeevruchten zijn een klassieke match."
    },

    // --- AZIATISCH / RIJST ---
    {
        triggers: ['nasi', 'bami', 'rijst', 'curry', 'teriyaki'],
        exclude: ['yakitori'],
        recommendation: { name: "Yakitori Spiesjes", price: 8.50, type: "food" },
        title: "Aziatische Touch",
        reason: "Yakitori spiesjes passen perfect bij dit gerecht."
    },
    {
        triggers: ['nasi', 'bami', 'rijst', 'curry', 'yakitori'],
        exclude: ['chicken wings'],
        recommendation: { name: "Chicken Wings (6st)", price: 9.50, type: "food" },
        title: "Lekker Erbij",
        reason: "Chicken Wings maken de rijsttafel compleet."
    },
    {
        triggers: ['curry', 'pittig', 'arrabbiata'],
        exclude: ['bier', 'pils'],
        recommendation: { name: "Texels Skuumkoppe", price: 5.50, type: "drink" },
        title: "Blus de Hitte",
        reason: "Een speciaalbier past goed bij pittig eten."
    },

    // --- ITALIAANS / PASTA ---
    {
        triggers: ['pasta', 'spaghetti', 'lasagne', 'risotto', 'truffel'],
        exclude: ['rode wijn', 'chianti', 'primitivo', 'cabernet'],
        recommendation: { name: "Cabernet Sauvignon", price: 5.50, type: "drink" },
        title: "Italiaanse Avond",
        reason: "Een stevige rode wijn maakt pasta nog lekkerder."
    },
    {
        triggers: ['pasta', 'pizza', 'italiaans'],
        exclude: ['olijven', 'brood'],
        recommendation: { name: "Olijven", price: 5.00, type: "food" },
        title: "Antipasti",
        reason: "Beginnen met gemarineerde olijven?"
    },

    // --- SNACKS & BORREL ---
    {
        triggers: ['bier', 'pils', 'speciaalbier', 'la chouffe', 'duvel', 'heineken'],
        exclude: ['bitter', 'kaas', 'nacho', 'vlammetjes'],
        recommendation: { name: "Bittergarnituur", price: 12.50, type: "food" },
        title: "Borreltijd",
        reason: "Bier drinkt lekkerder met een bittergarnituur erbij!"
    },
    {
        triggers: ['wijn', 'chardonnay', 'sauvignon', 'merlot'],
        exclude: ['kaas', 'brood', 'olijf'],
        recommendation: { name: "Kaasplankje", price: 13.50, type: "food" },
        title: "Wijn & Spijs",
        reason: "Een kaasplankje smaakt heerlijk bij uw glas wijn."
    },
    {
        triggers: ['cocktail', 'gin', 'mojito', 'spritz'],
        exclude: ['nachos'],
        recommendation: { name: "Nachos Deluxe", price: 12.50, type: "food" },
        title: "Cocktail Snack",
        reason: "Nachos zijn de ultieme snack bij cocktails."
    },

    // --- DESSERT PAIRINGS ---
    {
        triggers: ['chocolade', 'brownie', 'moelleux', 'lava'],
        exclude: ['espresso martini', 'koffie'],
        recommendation: { name: "Espresso Martini", price: 10.50, type: "drink" },
        title: "Perfect Match",
        reason: "Espresso Martini en chocolade zijn gemaakt voor elkaar."
    },
    {
        triggers: ['aardbei', 'fruit', 'romanoff', 'sorbet'],
        exclude: ['prosecco', 'scroppino'],
        recommendation: { name: "Scroppino", price: 7.50, type: "drink" },
        title: "Frisse Afsluiter",
        reason: "Een Scroppino past perfect bij fruitige desserts."
    },
    {
        triggers: ['koffie', 'cappuccino', 'latte', 'thee'],
        exclude: ['gebak', 'taart', 'cheesecake', 'zoet'],
        recommendation: { name: "Cheesecake New York", price: 6.50, type: "food" },
        title: "Iets Lekkers?",
        reason: "Koffie is niet compleet zonder cheesecake."
    },

    // --- ALGEMENE REGELS (FALLBACKS) ---
    {
        triggers: ['burger', 'friet', 'hamburger'],
        exclude: ['fris', 'cola', 'bier'],
        recommendation: { name: "Cola Zero", price: 3.50, type: "drink" },
        title: "Klassieker",
        reason: "Een ijskoude Cola smaakt het best bij een burger."
    }
];
function getSmartUpsellAdvice(cart, context) {
    const items = Object.values(cart);

    // 1. Loop door alle regels (Matrix)
    for (const rule of pairingRules) {
        // A. Check Triggers: Bevat de cart een van de trigger-woorden?
        const matchTrigger = rule.triggers.some(trigger =>
            items.some(item => item.name.toLowerCase().includes(trigger))
        );

        if (matchTrigger) {
            // B. Check Excludes: Hebben we het aanbevolen item (of soortgelijks) al?
            // De exclude lijst zijn 'keywords' waar we op zoeken in de cart
            const alreadyHasRecommendation = rule.exclude.some(excludeKeyword =>
                contains(cart, excludeKeyword)
            );

            // C. Check of het specifieke aanbevolen product zelf er al in zit (dubbel check)
            const exactItemInCart = contains(cart, rule.recommendation.name);

            if (!alreadyHasRecommendation && !exactItemInCart) {
                // Bingo! We hebben een match.
                return {
                    title: rule.title,
                    reason: rule.reason,
                    product: rule.recommendation
                };
            }
        }
    }

    // 2. Geen specifieke regel? Check op 'Kale' bestellingen
    const hasDrinks = items.some(i => i.type === 'drink');
    const hasFood = items.some(i => i.type === 'food');

    // Alleen drinken -> Snack
    if (hasDrinks && !hasFood) {
        return {
            title: "Lekkere trek?",
            reason: "Misschien iets lekkers voor erbij?",
            product: { name: "Bitterballen (8st)", price: 7.50, type: "food" }
        };
    }

    // Alleen eten -> Drinken (Algemeen)
    if (hasFood && !hasDrinks) {
        return {
            title: "Dorst?",
            reason: "Vergeet u niet iets te drinken te bestellen?",
            product: { name: "Cola Zero", price: 3.50, type: "drink" }
        };
    }

    return null; // Geen advies
}


// Trigger de AI check met 1 seconde vertraging (debounce)
function triggerThinkingAI() {
    const box = document.getElementById('ai-suggestion-box');
    if (!box) return;

    // Reset timer als er getypt/geklikt wordt
    if (aiDebounceTimer) clearTimeout(aiDebounceTimer);

    // Toon "Thinking..." staat
    box.innerHTML = `
        <div class="flex items-center gap-2 p-2">
            <i class="fas fa-circle-notch fa-spin text-purple"></i>
            <span class="text-xs text-muted italic">AI analyseert bestelling...</span>
        </div>
    `;

    // Wacht 1 seconde
    aiDebounceTimer = setTimeout(() => {
        // AANROEP NAAR PYTHON BACKEND
        // We proberen de lokale server te bereiken.
        const payload = {
            cart: Object.values(cart),
            weather: currentWeather,
            guest_count: guestCount
        };

        fetch('http://localhost:5000/api/recommend', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        })
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    console.warn('AI Backend Error:', data.error);
                    // Fallback naar lokale logica
                    const advice = getSmartUpsellAdvice(cart, { weather: currentWeather });
                    renderAISuggestion(advice);
                } else {
                    renderAISuggestion(data);
                }
            })
            .catch(err => {
                console.warn('AI Backend offline, switching to local logic:', err);
                // Fallback naar lokale logica als server uit staat
                const advice = getSmartUpsellAdvice(cart, { weather: currentWeather });
                renderAISuggestion(advice);
            });
    }, 1000);
}

// Toon de AI suggestie in het vakje rechtsonder
function renderAISuggestion(advice) {
    const box = document.getElementById('ai-suggestion-box');
    const waiterBox = document.getElementById('ai-waiter-line'); // Verberg de zin als de suggestie verandert
    if (waiterBox) waiterBox.classList.add('hidden');

    if (!box) return;

    // Als er geen suggestie is, toon een subtiele 'Alles OK' melding of niets
    if (!advice || !advice.product) {
        box.innerHTML = `
            <div class="flex items-center gap-2 p-2 opacity-50">
                <i class="fas fa-check-circle text-green-400"></i>
                <span class="text-xs text-muted">Bestelling ziet er compleet uit!</span>
            </div>
        `;
        return;
    }

    // Als er wel een suggestie is, bouw de HTML (Prominent Paars Blok)
    box.innerHTML = `
        <div class="ai-upsell-block">
            <div class="ai-upsell-header">
                <span class="ai-tag-badge"><i class="fas fa-sparkles"></i> AI TIP</span>
                <span class="text-xs font-bold">+ € ${advice.product.price.toFixed(2).replace('.', ',')}</span>
            </div>
            <div class="ai-upsell-title">${advice.product.name}</div>
            <div class="ai-upsell-reason">${advice.reason}</div>
            
            <button class="btn-ai-upsell-add" onclick="handleUpsellClick('${advice.product.name.replace(/'/g, "\\'")}', ${advice.product.price}, '${advice.product.type}')">
                <i class="fas fa-plus"></i> Voeg toe aan bon
            </button>
        </div>
    `;
}

function handleUpsellClick(name, price, type) {
    addToCart({ name, price, type });
}


// Genereer de "Zin voor bediening" als de knop wordt geklikt
function generateWaiterLine() {
    const out = document.getElementById('ai-waiter-line');
    if (!out) return;

    const s = computeUpsellSuggestion();
    // Standaard zin als er geen specifieke match is
    let line = "Kan ik nog iets anders voor u betekenen of wenst u al af te rekenen?";

    // Specifieke zinnen per situatie
    if (s?.title === "Weer-tip: Fris/Regen") {
        line = "Het is behoorlijk fris buiten; zal ik misschien een warme choco voor u maken?";
    } else if (s?.title === "Bijpassende wijn") {
        line = "We hebben een uitstekende Merlot die perfect past bij de biefstuk. Zal ik een glas inschenken?";
    } else if (s?.title === "Snack erbij") {
        line = "Zullen we er misschien een portie bitterballen bij doen voor de lekkere trek?";
    } else if (s?.title === "Afsluiter") {
        line = "Heeft het gesmaakt? Als afsluiter kan ik onze verse appeltaart aanbevelen.";
    }

    // Toon het vakje en zet de tekst erin
    out.classList.remove('hidden');
    out.innerHTML = `<i class="fas fa-quote-left mr-2 text-blue-300"></i> ${line}`;
}

// ==========================================================================
// RENDERING (HET TEKENEN VAN DE HTML)
// Functies die de HTML bouwen op basis van de data.
// ==========================================================================

// Teken de departement knoppen (links)
function renderDepts() {
    deptListEl.innerHTML = '';
    Object.keys(productsData).forEach(dept => {
        const btn = document.createElement('button');
        // Voeg 'active' class toe als dit het geselecteerde departement is
        btn.className = `dept-btn ${dept === activeDept ? 'active' : ''}`;
        btn.textContent = dept;
        btn.onclick = () => setActiveDept(dept); // Wissel departement bij klik
        deptListEl.appendChild(btn);
    });
}

// Teken de product knoppen (midden)
function renderArticles() {
    articleListEl.innerHTML = '';
    const products = productsData[activeDept] || [];
    products.forEach(prod => {
        const btn = document.createElement('button');
        btn.className = 'article-btn';
        btn.textContent = prod.name;
        btn.onclick = () => addToCart(prod); // Voeg direct toe bij klik
        articleListEl.appendChild(btn);
    });
}

// Teken de bon (rechts)
function renderCart() {
    receiptListEl.innerHTML = '';
    let total = 0;
    let count = 0;

    // Loop door alle items in het mandje
    Object.values(cart).forEach(item => {
        const itemTotal = item.price * item.count;
        total += itemTotal;
        count += item.count;

        const row = document.createElement('div');
        row.className = 'receipt-item';
        // Klik op regel = verwijder item
        row.onclick = () => removeFromCart(item.name);

        row.innerHTML = `
            <span class="w-8 font-bold text-green-400 pl-2">${item.count}x</span>
            <span class="flex-1 text-white">${item.name}</span>
            <span class="font-mono pr-2 text-white">€ ${itemTotal.toFixed(2).replace('.', ',')}</span>
        `;
        receiptListEl.appendChild(row);
    });

    // Update totaalbedragen onderaan
    itemCountEl.textContent = count;
    totalPriceEl.textContent = '€ ' + total.toFixed(2).replace('.', ',');
}

// ==========================================================================
// POPUP BEHEER (Modals)
// Functies om popups te openen en sluiten.
// ==========================================================================
const guestModal = document.getElementById('guest-modal');
const managerModal = document.getElementById('manager-modal');
const confirmModal = document.getElementById('confirm-modal');

function openGuestModal() {
    guestModal.classList.remove('hidden');
}

function closeGuestModal() {
    guestModal.classList.add('hidden');
}

function openManagerModal() {
    managerModal.classList.remove('hidden');
    loadManagerData();
}

function closeManagerModal() {
    managerModal.classList.add('hidden');
}

// Bevestigingsscherm openen
function openConfirmModal() {
    // Pak huidige tijd voor 'Bevestigd om...'
    const ts = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const tsEl = document.getElementById('confirm-timestamp');
    if (tsEl) tsEl.textContent = `Bevestigd om ${ts}`;

    confirmModal.classList.remove('hidden');
}

function closeConfirmModal() {
    confirmModal.classList.add('hidden');
}

// Sluit popups als je ergens anders klikt (optioneel)
window.onclick = function (event) {
    if (event.target == guestModal) closeGuestModal();
    if (event.target == managerModal) closeManagerModal();
    if (event.target == confirmModal) closeConfirmModal();
}

// ==========================================================================
// GAST AI CAROUSEL LOGICA
// Het "slidende" aanbevelingen balkje in het Gast Profiel.
// ==========================================================================

// Update de inhoud van de huidige kaart
function updateRecCard() {
    if (filteredRecs.length === 0) return;
    const item = filteredRecs[currentRecIndex];

    document.getElementById('rec-title').textContent = item.title;
    document.getElementById('rec-desc').textContent = item.desc;

    // Pas de header aan (boven de kaart)
    const recHeader = document.getElementById('rec-header-text');
    if (recHeader) {
        recHeader.innerHTML = `<i class="fas ${item.icon} mr-1"></i> AANBEVOLEN: ${currentWeather.recFilter.toUpperCase()}`;
    }
}

// Ga naar volgende kaart (met animatie)
function nextRec() {
    if (filteredRecs.length === 0) return;

    const container = document.querySelector('.rec-text');
    if (!container) return;

    // 1. Start animatie naar links (verdwijnen)
    container.classList.add('slide-out-left');

    setTimeout(() => {
        // 2. Na 0.5s: Update de data naar de volgende
        currentRecIndex = (currentRecIndex + 1) % filteredRecs.length;
        updateRecCard();

        // 3. Reset classes & start animatie van rechts (verschijnen)
        container.classList.remove('slide-out-left');
        container.classList.add('slide-in-right');

        // 4. Verwijder de animatie class na afloop zodat het klaar is voor volgende keer
        setTimeout(() => {
            container.classList.remove('slide-in-right');
        }, 500);

    }, 500); // Wacht 500ms tot slide-out klaar is
}

function prevRec() {
    if (filteredRecs.length === 0) return;
    // Terugrekenen met modulo truc voor negatieve getallen
    currentRecIndex = (currentRecIndex - 1 + filteredRecs.length) % filteredRecs.length;
    updateRecCard();
}

// Voeg de getoonde aanbeveling toe aan het mandje
function addRecToCart() {
    if (filteredRecs.length === 0) return;
    const item = filteredRecs[currentRecIndex];
    addToCart({ name: item.title, price: item.price, type: 'special' });
    closeGuestModal(); // Sluit popup na toevoegen
}

// ==========================================================================
// MANAGER AI: CHART & DATA VISUALIZATION
// ==========================================================================

const forecastData = [
    { time: '12:00', value: 30, isPeak: false },
    { time: '13:00', value: 45, isPeak: false },
    { time: '14:00', value: 40, isPeak: false },
    { time: '15:00', value: 55, isPeak: false },
    { time: '16:00', value: 50, isPeak: false },
    { time: '17:00', value: 35, isPeak: false },
    { time: '18:00', value: 85, isPeak: true },
    { time: '19:00', value: 90, isPeak: true },
    { time: '20:00', value: 80, isPeak: true },
    { time: '21:00', value: 45, isPeak: false },
];

function renderManagerChart() {
    const chartEl = document.getElementById('manager-chart');
    if (!chartEl) return;
    chartEl.innerHTML = '';

    const max = 100;

    forecastData.forEach(d => {
        const col = document.createElement('div');
        col.className = 'chart-col group';

        const barHeight = (d.value / max) * 100;
        // Use 'highlight' class for the gradient purple look defined in style.css
        const barClass = d.isPeak ? 'highlight' : 'default';

        col.innerHTML = `
            <div class="chart-bar ${barClass}" style="height: ${barHeight}%">
                <div class="tooltip">${d.value}% Drukte</div>
            </div>
            <span class="chart-label group-hover:text-white transition-colors">${d.time}</span>
        `;
        chartEl.appendChild(col);
    });
}

// ==========================================================================
// MANAGER AI: LOCAL EVENTS MODULE
// ==========================================================================

const localEvents = [
    {
        name: "Katy Perry - Lifetimes Tour",
        location: "ZIGGO DOME",
        time: "20:00",
        type: "CONCERT", // Icon: music
        id: "evt1"
    },
    {
        name: "Ajax - Feyenoord",
        location: "JOHAN CRUIJFF ARENA",
        time: "14:30",
        type: "SPORTS", // Icon: futbol
        id: "evt2"
    }
];

// ==========================================================================
// MANAGER AI: COMMERCIËLE KANSEN (DAGELIJKSE KANS)
// ==========================================================================

// 1. Kalender met speciale dagen
const specialDays = {
    "01-21": "Knuffeldag", // Ochtend na Blue Monday
    "02-14": "Valentijnsdag",
    "03-01": "Complimentendag",
    "04-27": "Koningsdag",
    "12-25": "Eerste Kerstdag",
    "12-26": "Tweede Kerstdag",
    "12-31": "Oudejaarsdag"
};

// 2. Database met Kansen
const commercialOpportunities = [
    // --- KALENDER EVENTS ---
    {
        id: "knuffeldag",
        trigger: "special_day",
        eventName: "Knuffeldag",
        title: "KNUFFEL MET KOFFIE",
        suggestion: "Warme Choco + Slagroom",
        reason: "Op Knuffeldag zoeken gasten warmte en gezelligheid.",
        checklist: "Zet extra slagroom klaar en instrueer bediening."
    },
    {
        id: "complimentendag",
        trigger: "special_day",
        eventName: "Complimentendag",
        title: "COMPLIMENTEN & KLASSIEKERS",
        suggestion: "Complimenten-Borrelplank",
        reason: "Vanwege Complimentendag geven we een positieve boost.",
        checklist: "Zorg voor voldoende borrelhapjes en instrueer team."
    },
    {
        id: "valentijn",
        trigger: "special_day",
        eventName: "Valentijnsdag",
        title: "LOVE IS IN THE AIR",
        suggestion: "Love Cocktail (Gin & Tonic Pink)",
        reason: "Verliefde stellen geven makkelijker geld uit aan specials.",
        checklist: "Zet rozen op tafel en promoot de cocktailkaart."
    },

    // --- WEER EVENTS ---
    {
        id: "rainy_day",
        trigger: "weather",
        condition: "rain",
        title: "BINNEN SCHUILEN",
        suggestion: "Speciale Herfstlatte",
        reason: "Door de regen en lage temperatuur zoeken gasten warmte.",
        checklist: "Stel de koffiemachine bij en plaats actiebord binnen."
    },
    {
        id: "sunny_terrace",
        trigger: "weather",
        condition: "sun",
        title: "TERRAS TOPPERS",
        suggestion: "Huisgemaakte Ice Tea",
        reason: "De zon schijnt! Iedereen wil verfrissing op het terras.",
        checklist: "Check ijsblokjes machine en muntvoorraad."
    },

    // --- FALLBACK ---
    {
        id: "general_sales",
        trigger: "always",
        title: "HARDLOPERS OMHOOG",
        suggestion: "Chef's Burger Special",
        reason: "Geen bijzonderheden vandaag? Focus op de favoriet.",
        checklist: "Geen speciale actie, focus op upsell bij tafel."
    }
];

// 3. Logic: Kies de beste kans
function rankOpportunities(context) {
    // A. Check Speciale Dag
    // Voor demo doeleinden: Gebruik VANDAAG (echte datum)
    const now = new Date();
    // Forceer even '01-21' (Knuffeldag) of '03-01' (Complimentendag) voor demo als de datum niet klopt?
    // Nee, we doen het netjes.
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const dateKey = `${month}-${day}`;

    // OF: Als de user expliciet vroeg om "Knuffeldag" simulatie, kunnen we dat hier 'mocken' als toggle.
    // Voor nu: Echte datum, tenzij...

    // Voor DEMO effect: Als het vandaag géén special day is, en het regent ook niet...
    // Laten we kijken of er een match is.
    const specialEventName = specialDays[dateKey]; // bv "Knuffeldag" of undefined

    if (specialEventName) {
        // Zoek de opportunity die hierbij hoort
        const match = commercialOpportunities.find(o => o.trigger === 'special_day' && o.eventName === specialEventName);
        if (match) return match;
    }

    // B. Check Weer (Rain/Sun)
    // context.weatherCode komt van OpenMeteo (bv. > 50 is vaak regen/bewolkt)
    // We gebruiken de property 'rainy' die we in loadManagerData berekenen.
    if (context.isRainy) {
        return commercialOpportunities.find(o => o.id === 'rainy_day');
    }
    if (context.temp > 18) { // Simpele check voor zon/warm
        return commercialOpportunities.find(o => o.id === 'sunny_terrace');
    }

    // C. Fallback
    return commercialOpportunities.find(o => o.id === 'general_sales');
}


// 4. Render Functie
function renderCommercialCard(weatherData) {
    const container = document.querySelector('.commercial-card');
    if (!container) return;

    // Bepaal context voor logic
    const isRainy = weatherData ? isRainyOpenMeteo(weatherData.weather_code, weatherData.precipitation) : false;
    const temp = weatherData ? weatherData.temperature_2m : 10;

    // KIES DE KANS
    // Voor DEMO: We kunnen hier 'fake' context meegeven om Knuffeldag te forceren als we willen
    // Maar laten we eerlijk zijn: de user wil dat AI het "herkent".
    // Als we vandaag NIET op 21 jan zitten, ziet hij het niet.
    // TRUCJE: We simuleren dat het vandaag 21 januari is als de user dat wil?
    // Nee, we gebruiken de ECHTE datum.
    // ECHTER: Om de feature te tonen aan de user (die net "Knuffeldag" noemde),
    // zal ik een override inbouwen als de 'echte' datum niks oplevert,
    // OF we voegen 'vandaag' (21 januari in mijn virtuele tijd/of echte tijd) toe aan de kalender.
    // Mijn system time is 2026-01-21. Dus "01-21" is VANDAAG! (Knuffeldag in mijn lijstje).
    // Dus het zou automagisch moeten werken! :D

    const opportunity = rankOpportunities({ isRainy, temp });

    if (!opportunity) return; // Should not happen due to fallback

    // HTML Bouwen

    // Header Label
    const headerLabel = document.createElement('div');
    headerLabel.className = "comm-header-label";
    headerLabel.innerText = "Commerciële Kans";

    // Main Title (Italic, Big)
    const titleEl = document.createElement('h2');
    titleEl.className = "comm-main-title";
    titleEl.innerText = opportunity.title;

    // Suggestie Box
    const boxEl = document.createElement('div');
    boxEl.className = "action-product-box";
    boxEl.innerHTML = `
        <div class="action-label">Actie Product:</div>
        <div class="action-product-name">${opportunity.suggestion}</div>
        <div class="action-quote">"${opportunity.reason}"</div>
    `;

    // Footer Checklist
    const footerEl = document.createElement('div');
    footerEl.className = "checklist-footer";
    footerEl.innerHTML = `
        <i class="fas fa-list-ul checklist-icon"></i>
        <div class="checklist-text">
            ${opportunity.checklist}
        </div>
    `;

    // Injecteren (verwijder loading state)
    const contentContainer = document.getElementById('comm-content-container');
    if (contentContainer) {
        contentContainer.innerHTML = '';
        contentContainer.appendChild(headerLabel);
        contentContainer.appendChild(titleEl);
        contentContainer.appendChild(boxEl);
        contentContainer.appendChild(footerEl);
    }
}

// ==========================================================================
// MANAGER: EVENTS (fix "lelijk icoon links bij ACTIE")
// ==========================================================================
// const localEvents defined above (lines 823-838), keeping it.

function getEventStrategy(events) {
    const hasConcert = events.some(e => e.type === "CONCERT");
    const hasSports = events.some(e => e.type === "SPORTS");

    if (hasConcert && hasSports) {
        return {
            title: "Dubbele piek (concert + voetbal)",
            insight: "Pre-concert snelle drankjes + tijdens/na wedstrijd veel bier & snacks.",
            action: "ACTIE: ZET EXTRA BIER KOUD + BEREID GIN/TONIC VOOR. ZET BARFLOW KLAAR VOOR 2 PIEKMOMENTEN."
        };
    }
    if (hasConcert) {
        return {
            title: "Concertmoment",
            insight: "Concertbezoekers willen snel een drankje vóór de show.",
            action: "ACTIE: ZORG VOOR SNELLE UITGIFTE: TONIC, GARNERING, GLASWERK VOOR."
        };
    }
    if (hasSports) {
        return {
            title: "Wedstrijdmoment",
            insight: "Supporters gaan voor bier + makkelijke snacks.",
            action: "ACTIE: ZET EXTRA FUSTEN KOUD + PREP BITTERBALLEN/NACHO’S."
        };
    }
    return { title: "Geen grote events", insight: "Geen bijzondere pieken verwacht.", action: "ACTIE: Volg standaard planning." };
}

function renderManagerEvents() {
    const container = document.getElementById("manager-events-card");
    if (!container) return;

    const strategy = getEventStrategy(localEvents);

    const eventsHtml = localEvents.map(evt => {
        const icon = evt.type === "CONCERT" ? "fa-music" : "fa-futbol";
        const colorClass = evt.type === "CONCERT" ? "text-pink-400" : "text-orange-400";
        const typeClass = evt.type === "CONCERT" ? "type-concert" : "type-sports";

        return `
        <div class="event-item ${typeClass}">
          <div class="event-icon-box">
            <i class="fas ${icon} ${colorClass}"></i>
          </div>
          <div class="event-info">
            <div class="event-name">${evt.name}</div>
            <div class="event-meta">${evt.location} • ${evt.time}</div>
          </div>
        </div>
      `;
    }).join("");

    // ✅ FIX screenshot 1: geen icoon/bullets links bij actie
    const strategyHtml = `
      <div class="ai-strategy-box">
        <div class="ai-strategy-badge">AI KANSEN</div>
        <div class="ai-strategy-title">${strategy.title}</div>
        <div class="ai-strategy-text">"${strategy.insight}"</div>
        <div class="ai-strategy-action">${strategy.action}</div>
      </div>
    `;

    container.innerHTML = `
      <div class="events-list">${eventsHtml}</div>
      ${strategyHtml}
    `;
}

// ==========================================================================
// MANAGER: LOAD DATA
// ==========================================================================
async function loadManagerData() {
    const crowdText = document.getElementById("ai-crowd-text");
    const weatherBox = document.getElementById("ai-weather-content");
    const eventsBox = document.getElementById("manager-events-card");

    if (crowdText) crowdText.innerHTML = '<span class="animate-pulse">Data analyseren...</span>';

    if (weatherBox) {
        weatherBox.innerHTML = `
        <div class="h-full flex flex-col items-center justify-center text-gray-500 animate-pulse">
          <i class="fas fa-satellite-dish fa-spin text-2xl mb-3"></i>
          <span class="text-xs font-bold uppercase tracking-wider">Weer ophalen (Amsterdam)...</span>
        </div>
      `;
    }

    if (eventsBox) {
        eventsBox.innerHTML = `
        <div class="h-full flex flex-col items-center justify-center text-gray-500 animate-pulse">
          <span class="text-xs font-bold uppercase tracking-wider">Evenementen scannen...</span>
        </div>
      `;
    }

    setTimeout(async () => {
        if (crowdText) {
            crowdText.textContent = "Verwachte piek om 19:00 door uitstroom Ziggo Dome. Advies: Start 'Pre-Concert' playlist.";
        }

        if (weatherBox) {
            try {
                const w = await fetchAmsterdamWeather();
                const temp = Math.round(w.temperature_2m ?? 0);
                const wind = Math.round(w.wind_speed_10m ?? 0);
                const rainy = isRainyOpenMeteo(w.weather_code ?? 0, w.precipitation ?? 0);

                const warmNeed = decideWeatherRecFilter(w) === "warm";
                const contextParts = [`${temp}°C`];
                if (rainy) contextParts.push("regen");
                if (wind >= 8) contextParts.push(`wind ${wind} m/s`);
                const context = contextParts.join(" • ");

                if (warmNeed) {
                    weatherBox.innerHTML = `
              <div class="weather-main">
                <div class="weather-icon-lg"><i class="fas fa-mug-hot"></i></div>
                <div>
                  <div class="weather-stat-val">${temp}°C</div>
                  <div class="weather-sub">THEE ADVIES</div>
                </div>
              </div>
  
              <div class="weather-quote">
                "Met dit weer (${context}) kiezen gasten sneller voor thee. Zet muntthee en gemberthee extra in het zicht."
              </div>
  
              <div class="weather-footer">
                <div class="text-xs text-gray-400 font-bold uppercase">
                  LOCATIE: <span class="text-green-400">AMSTERDAM</span>
                </div>
                <span class="stock-tag" style="animation:none; border-color:#f59e0b; color:#fde68a;">
                  <i class="fas fa-leaf mr-1"></i> CONTROLEER THEE & HONING
                </span>
              </div>
            `;
                } else {
                    weatherBox.innerHTML = `
              <div class="weather-main">
                <div class="weather-icon-lg"><i class="fas fa-sun"></i></div>
                <div>
                  <div class="weather-stat-val">${temp}°C</div>
                  <div class="weather-sub">TERRAS ADVIES</div>
                </div>
              </div>
  
              <div class="weather-quote">
                "Terrasweer (${context}). Extra vraag naar jus, ice tea, bier en snacks. Overweeg extra ijs."
              </div>
  
              <div class="weather-footer">
                <div class="text-xs text-gray-400 font-bold uppercase">
                  LOCATIE: <span class="text-green-400">AMSTERDAM</span>
                </div>
                <span class="stock-tag" style="animation:none; border-color:rgba(34,197,94,.35); color:#86efac;">
                  <i class="fas fa-check mr-1"></i> IJSVOORRAAD: OK
                </span>
              </div>
            `;
                }

            } catch (e) {
                console.error("Weer ophalen (Manager) mislukt:", e);
                weatherBox.innerHTML = `<div class="text-xs text-red-400 font-bold">Weer ophalen mislukt. Tip: open via Live Server.</div>`;
            }
        }

        renderManagerEvents();
        renderManagerChart();
        // Render Commercial Opportunities (passes weather info)
        if (weatherBox) {
            try {
                const w = await fetchAmsterdamWeather();
                renderCommercialCard(w);
            } catch (e) {
                renderCommercialCard(null); // Fallback
            }
        } else {
            renderCommercialCard(null);
        }
    }, 700);
}






init();
