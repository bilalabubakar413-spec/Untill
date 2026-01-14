// ==========================================================================
// CONFIGURATIE & DATA
// Dit gedeelte bevat alle statische gegevens zoals producten, prijzen en grafiekdata.
// ==========================================================================

// Lijst van producten per categorie
const productsData = {
    'Hardlopers': [
        { name: 'Biefstuk', price: 24.50, type: 'food' }, { name: 'Kabeljauw', price: 21.00, type: 'food' },
        { name: 'Saté', price: 18.50, type: 'food' }, { name: 'Koffie', price: 3.00, type: 'drink' },
        { name: 'Cola Zero', price: 3.50, type: 'drink' }, { name: 'Fanta', price: 3.50, type: 'drink' },
        { name: 'Heineken', price: 3.80, type: 'drink' }, { name: 'Appeltaart', price: 5.00, type: 'food' },
        { name: 'Chaudfontaine', price: 3.20, type: 'drink' }, { name: 'Ice Tea', price: 3.60, type: 'drink' },
        { name: 'Duvel', price: 5.50, type: 'drink' }, { name: 'Muntthee', price: 3.50, type: 'drink' }
    ],
    'Warme Dranken': [
        { name: 'Koffie', price: 3.00, type: 'drink' }, { name: 'Cappuccino', price: 3.30, type: 'drink' },
        { name: 'Espresso', price: 2.80, type: 'drink' }, { name: 'Latte Macchiato', price: 3.80, type: 'drink' },
        { name: 'Koffie Verkeerd', price: 3.20, type: 'drink' }, { name: 'Warme Choco', price: 3.50, type: 'drink' },
        { name: 'Irish Coffee', price: 7.50, type: 'drink' }, { name: 'Muntthee', price: 3.50, type: 'drink' }
    ],
    'Bieren': [
        { name: 'Heineken Fluitje', price: 3.50, type: 'drink' }, { name: 'Heineken Vaasje', price: 3.80, type: 'drink' },
        { name: 'Affligem Blond', price: 5.00, type: 'drink' }, { name: 'Affligem Dubbel', price: 5.00, type: 'drink' },
        { name: 'Affligem Tripel', price: 5.50, type: 'drink' }, { name: 'Duvel', price: 5.50, type: 'drink' }
    ],
    'Lunch': [
        { name: 'Tosti Ham/Kaas', price: 6.00, type: 'food' }, { name: 'Uitsmijter Ham', price: 9.50, type: 'food' },
        { name: '12-Uurtje', price: 12.50, type: 'food' }, { name: 'Broodje Gezond', price: 8.50, type: 'food' },
        { name: 'Soep v/d Dag', price: 6.50, type: 'food' }, { name: 'Caesar Salade', price: 14.50, type: 'food' }
    ],
    'Diner': [
        { name: 'Biefstuk', price: 24.50, type: 'food' }, { name: 'Kabeljauw', price: 21.00, type: 'food' },
        { name: 'Saté v/d Haas', price: 18.50, type: 'food' }, { name: 'Spareribs', price: 22.50, type: 'food' }
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
    RAIN: {
        label: "Regenachtig / Guur (9°C)",
        icon: "fa-cloud-showers-heavy",
        colorClass: "text-blue-400",
        recFilter: "warm" // Bij regen raden we 'warm' aan
    },
    SUN: {
        label: "Zonnig / Terrasweer (24°C)",
        icon: "fa-sun",
        colorClass: "text-yellow-400",
        recFilter: "cold" // Bij zon raden we 'cold' aan
    }
};

// Kies willekeurig het weer (50% kans op Zon of Regen) voor de demo
let currentWeather = Math.random() > 0.5 ? weatherStates.SUN : weatherStates.RAIN;

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

    // Pas het weer toe en filter de aanbevelingen
    applyWeatherContext();

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
function getSmartUpsellAdvice(cart, context) {
    const items = Object.values(cart);
    const hasDrinks = items.some(i => i.type === 'drink');
    const hasFood = items.some(i => i.type === 'food');
    const hasSnacks = items.some(i => ['Bitterballen', 'Bittergarnituur', 'Nachos'].some(s => i.name.includes(s)));
    const hasCheese = items.some(i => i.name.includes('Kaas'));
    const isLunch = activeDept === 'Lunch';

    // Check lunch items count
    let lunchCount = 0;
    items.forEach(i => {
        if (productsData['Lunch'].find(p => p.name === i.name)) {
            lunchCount += i.count;
        }
    });

    // We nemen aan dat 'Terras' in de context string zit of als flag wordt meegegeven.
    const isTerrace = true;

    // --- LUNCH LOGICA (NIEUW) ---
    // Als we in lunch modus zitten of lunch items hebben
    if (isLunch || lunchCount > 0) {
        // Situatie A: Minder lunchgerechten dan personen
        if (lunchCount > 0 && lunchCount < guestCount) {
            const diff = guestCount - lunchCount;
            return {
                title: "Lunch compleet maken?",
                reason: `U bent met ${guestCount} personen, maar heeft ${lunchCount} gerechten.`,
                product: { name: "Soep v/d Dag", price: 6.50, type: "food" }
                // In een echte AI zou dit dynamischer zijn, nu suggereren we soep of broodje
            };
        }

        // Situatie B: Iedereen heeft eten, maar nog geen drinken voor iedereen?
        // Tel aantal drankjes
        let drinkCount = 0;
        items.forEach(i => { if (i.type === 'drink') drinkCount += i.count; });

        if (lunchCount >= guestCount && drinkCount < guestCount) {
            const diff = guestCount - drinkCount;
            return {
                title: "Drinken erbij?",
                reason: `Voor iedereen (${guestCount} pers) een verse Jus d'Orange?`,
                product: { name: "Vers Sinaasappelsap", price: 4.50, type: "drink" }
            };
        }
    }

    // --- BESTAANDE LOGICA ---

    // Logica 1: Alleen drinken + Terras -> Suggestie: Borrelhapjes
    if (hasDrinks && !hasFood && isTerrace) {
        if (!contains(cart, 'Bitterballen') && !contains(cart, 'Bittergarnituur')) {
            return {
                title: "Lekker bij de borrel",
                reason: "Gezellig op het terras? Daar horen hapjes bij!",
                product: { name: "Bittergarnituur", price: 14.50, type: "food" }
            };
        }
    }

    // Logica 2: Kaas of Bitterballen -> Suggestie: Bijpassend drankje
    if (hasSnacks || hasCheese) {
        if (!contains(cart, 'Affligem') && !contains(cart, 'Duvel')) {
            return {
                title: "Tip van de sommelier",
                reason: "Een Affligem Blond past perfect bij deze hapjes.",
                product: { name: "Affligem Blond", price: 5.00, type: "drink" }
            };
        }
        if (!contains(cart, 'Wijn')) {
            return {
                title: "Past goed bij de bittergarnituur",
                reason: "Rode Wijn vult de smaak van de hapjes goed aan.",
                product: { name: "Rode Wijn", price: 5.50, type: "drink" }
            };
        }
    }

    return null;
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
        // AANROEP NAAR INTERNE FUNCTIE (GEEN EXTERNE SERVICE MEER)
        const advice = getSmartUpsellAdvice(cart, { weather: currentWeather });
        renderAISuggestion(advice);
    }, 1000);
}

// Toon de AI suggestie in het vakje rechtsonder
function renderAISuggestion(advice) {
    const box = document.getElementById('ai-suggestion-box');
    const waiterBox = document.getElementById('ai-waiter-line'); // Verberg de zin als de suggestie verandert
    if (waiterBox) waiterBox.classList.add('hidden');

    if (!box) return;

    // Als er geen suggestie is, toon standaard tekst
    if (!advice) {
        box.innerHTML = `<span class="text-muted">Geen slimme suggesties op dit moment.</span>`;
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
            
            <button class="btn-ai-upsell-add" onclick="handleUpsellClick('${advice.product.name}', ${advice.product.price}, '${advice.product.type}')">
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

function getEventStrategy(events) {
    // Simpele logica (hardcoded voor demo doeleinden zoals gevraagd)
    // In een echt systeem zou dit via Gemini gaan

    const katy = events.find(e => e.name.includes("Katy Perry"));

    if (katy) {
        return {
            title: "Roze Gin Tonic",
            insight: "Concertbezoekers van Katy Perry willen snel een themadrankje voor de show om alvast in de sfeer te komen.",
            action: "ZORG VOOR VOLDOENDE INGREDIËNTEN (ROZE GIN, TONIC, GARNERING) EN BEREID ALVAST COCKTAILGLAZEN VOOR."
        };
    }

    return {
        title: "Bier & Burgers",
        insight: "Voetbalsupporters willen snel en makkelijk eten.",
        action: "Zet extra fusten koud."
    };
}

function renderManagerEvents() {
    // We vervangen de 'Live Bezetting' kaart. 
    // In HTML geven we die kaart een uniek ID: 'manager-events-card'
    const container = document.getElementById('manager-events-card');
    if (!container) return; // Fail safe als HTML nog niet matched

    // Loading State handled in openManagerModal, here we just render content
    const strategy = getEventStrategy(localEvents);

    // 1. Render Events List
    const eventsHtml = localEvents.map(evt => {
        const icon = evt.type === 'CONCERT' ? 'fa-music' : 'fa-futbol';
        const colorClass = evt.type === 'CONCERT' ? 'text-pink-400' : 'text-orange-400';
        const typeClass = evt.type === 'CONCERT' ? 'type-concert' : 'type-sports';
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
    }).join('');

    // 2. Render Strategy Box (Premium)
    const strategyHtml = `
        <div class="ai-strategy-box">
             <div class="ai-strategy-badge">AI KANSEN</div>
             <div class="ai-strategy-title">${strategy.title}</div>
             <div class="ai-strategy-text">"${strategy.insight}"</div>
             
             <div class="ai-strategy-action">
                 <i class="fas fa-list-ul mr-2 text-orange-400"></i> ${strategy.action}
             </div>
        </div>
    `;

    // 3. Combine
    container.innerHTML = `
        <div class="manager-card-header">
            <span class="text-orange-500 font-bold uppercase text-xs tracking-wider">LOKALE EVENEMENTEN AI</span>
            <i class="fas fa-map-marker-alt text-orange-800"></i>
        </div>
        <div class="events-list">
            ${eventsHtml}
        </div>
        ${strategyHtml}
    `;
}

// ==========================================================================
// MANAGER AI LOGIC (PORTED FROM REACT)
// ==========================================================================

function loadManagerData() {
    // 1. SET LOADING STATES
    const crowdText = document.getElementById('ai-crowd-text');
    const weatherBox = document.getElementById('ai-weather-content');
    const eventsBox = document.getElementById('manager-events-card');
    const chartBox = document.getElementById('manager-chart');

    if (crowdText) crowdText.innerHTML = '<span class="animate-pulse">Data analyseren...</span>';

    if (weatherBox) {
        weatherBox.innerHTML = `
             <div class="h-full flex flex-col items-center justify-center text-gray-500 animate-pulse">
                <i class="fas fa-satellite-dish fa-spin text-2xl mb-3"></i>
                <span class="text-xs font-bold uppercase tracking-wider">Verbinden met KNMI...</span>
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

    if (chartBox) chartBox.innerHTML = ''; // Clear chart

    // 2. SIMULATE NETWORK DELAY (800ms)
    setTimeout(() => {
        // --- CROWD UPDATE ---
        if (crowdText) crowdText.textContent = "Verwachte piek om 19:00 door uitstroom Ziggo Dome. Advies: Start 'Pre-Concert' playlist.";

        // --- WEATHER UPDATE (Premium Style) ---
        if (weatherBox) {
            weatherBox.innerHTML = `
                  <div class="weather-main">
                    <div class="weather-icon-lg">
                      <i class="fas fa-mug-hot"></i>
                    </div>
                    <div>
                      <div class="weather-stat-val">120</div>
                      <div class="weather-sub">Warme Dranken</div>
                    </div>
                  </div>

                  <div class="weather-quote">
                    "Door het regenachtige en gure weer (11°C) zullen gasten sneller kiezen voor warme, troostende dranken zoals Choco & Koffie."
                  </div>

                  <div class="weather-footer">
                    <div class="text-xs text-gray-400 font-bold uppercase">Melkvoorraad: <span class="text-green-400">OK</span></div>
                    <span class="stock-tag" style="animation:none; border-color: #ef4444; color: #fca5a5;">
                      <i class="fas fa-exclamation-triangle mr-1"></i> CONTROLEER CACAO
                    </span>
                  </div>
            `;
        }

        // --- EVENTS UPDATE ---
        renderManagerEvents();

        // --- CHART UPDATE ---
        renderManagerChart();

    }, 800);
}


function renderManagerEvents() {
    const container = document.getElementById('manager-events-card');
    if (!container) return;

    // Premium Mock Data Strategy
    const strategy = {
        focusItem: "Roze Gin Tonic",
        strategyReason: "Concertbezoekers van Katy Perry willen snel een themadrankje voor de show.",
        prepAction: "ZORG VOOR VOLDOENDE GIN & TONIC"
    };

    const eventsHtml = localEvents.map(evt => {
        const icon = evt.type === 'CONCERT' ? 'fa-music' : 'fa-futbol';
        return `
           <div class="event-box">
             <div class="event-icon">
               <i class="fas ${icon}"></i>
             </div>
             <div class="event-info">
               <h4>${evt.name}</h4>
               <p>${evt.location} • ${evt.time}</p>
             </div>
           </div>
        `;
    }).join('');

    container.innerHTML = `
       <div class="events-list-container">
         ${eventsHtml}
       </div>

       <div class="events-strategy-box">
         <div class="flex justify-between items-center mb-1">
            <span class="text-white font-bold text-sm uppercase text-orange-400">AI KANS: ${strategy.focusItem}</span>
         </div>
         <p class="text-orange-200 text-xs italic mb-2 leading-tight">"${strategy.strategyReason}"</p>
         <div class="flex items-center gap-2 text-[10px] text-gray-400 font-bold uppercase border-t border-orange-500/20 pt-2">
           <i class="fas fa-tasks text-orange-500"></i> ${strategy.prepAction}
         </div>
       </div>
    `;
}

// Modify openManagerModal to trigger load
function openManagerModal() {
    managerModal.classList.remove('hidden');
    loadManagerData();
}


// Start alles op!
// Start alles op!
function init() {
    renderDepts();
    renderArticles();
    renderCart();

    // Manager
    renderManagerChart();

    // Event Listeners voor Header Knoppen
    const btnManager = document.getElementById('btn-manager');
    if (btnManager) btnManager.onclick = openManagerModal;

    const btnGuest = document.getElementById('btn-guest');
    if (btnGuest) btnGuest.onclick = openGuestModal;
}

init();
