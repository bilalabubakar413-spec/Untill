import json
from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import google.generativeai as genai

# =========================================================
# CONFIGURATIE
# =========================================================
app = Flask(__name__)
CORS(app)  # Sta verzoeken toe van de frontend (browser)

# De Gemini API Key (Hardcoded zoals gevraagd)
# LET OP: Deel deze code niet openbaar met deze key erin.
GOOGLE_API_KEY = "AIzaSyDl_ZoTKT5IUW-0j869qEmsfO4PSUP_pSQ"
genai.configure(api_key=GOOGLE_API_KEY)

# =========================================================
# ROUTES (ENDPOINTS)
# =========================================================

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/reservation')
def reservation():
    return render_template('reservation.html')

@app.route('/api/recommend', methods=['POST'])
def recommend():
    """
    Deze functie ontvangt de winkelwagen data, stuurt dit naar Gemini,
    en stuurt een slimme aanbeveling (JSON) terug naar de kassa.
    """
    try:
        # 1. Data ophalen uit het verzoek
        data = request.json
        cart = data.get('cart', [])
        weather = data.get('weather', {})
        guest_count = data.get('guest_count', 1)

        # 2. Prompt (opdracht) samenstellen voor de AI
        # Hier instrueren we Gemini om patronen te zoeken.
        prompt = f"""
        Je bent een intelligente horeca-expert die een kassabon analyseert.
        
        CONTEXT:
        - Weer: {weather.get('label', 'Unknown')}
        - Aantal gasten: {guest_count}
        - Huidige Bestelling: {json.dumps(cart, indent=2)}
        
        OPDRACHT:
        Analyseer de bestelling kritisch. Zoek naar de *allerbeste* aanvulling op basis van culinaire logica, smaakprofielen en eet-fasen.
        
        REGELS VOOR ADVIES:
        1. **Kwaliteit boven Kwantiteit**: Het is beter om NIETS te suggereren dan een irrelevante suggestie.
        2. **Zoek hiaten**: 
           - Is er eten maar geen drinken?
           - Is er een hoofdgerecht maar (nog) geen bijgerecht of dessert?
        3. **Smaak Combinaties (Pairing)**:
           - Rood vlees? -> Suggesteer een stevige Rode Wijn (Merlot/Cabernet).
           - Vis/Salade? -> Suggesteer een frisse Witte Wijn (Pinot Grigio/Sauvignon).
           - Chocolade dessert? -> Espresso Martini of Koffie.
           - Aardbei/Fruit? -> Prosecco of Dessertwijn.
           - Borrelhapjes (bitterballen, nachos)? -> Speciaalbier.
           - **LUNCH COMBO**: Broodje besteld? -> Suggesteer een Soepje (Tomatensoep/Uiensoep) als voorafje.
           - **DINER COMBO**: Rijstgerecht? -> Suggesteer Chicken Wings of Cassave Kroepoek (indien beschikbaar).
        4. **Context**:
           - Koud weer? Suggesteer warme dranken of comfort food (Soepen, Warme Choco).
           - Warm weer? Suggesteer koude dranken of ijs.
        5. **Wees Selectief**:
           - Als de bestelling compleet lijkt (bijv. elk persoon heeft al een drankje en een gerecht), geef dan GEEN suggestie.
           - Als je twijfelt, geef dan GEEN suggestie.

        Output formaat (JSON alleen):
        Als je een GOEDE suggestie hebt:
        {{
            "product": {{ "name": "Exacte Product Naam uit Database", "price": 0.00, "type": "food"|"drink" }},
            "reason": "Korte, logische onderbouwing (max 1 zin).",
            "title": "Korte, pakkende titel"
        }}

        Als er GEEN sterke suggestie is:
        {{
            "product": null,
            "reason": null,
            "title": null
        }}
        """

        # 3. AI Aanroepen
        # We gebruiken 'gemini-2.5-flash' omdat deze beschikbaar en snel is.
        model = genai.GenerativeModel('gemini-2.5-flash')
        response = model.generate_content(prompt)

        # 4. Antwoord verwerken
        content = response.text
        # Verwijder markdown code blokken (```json ... ```) indien aanwezig
        if content.startswith("```json"):
            content = content[7:]
        if content.endswith("```"):
            content = content[:-3]

        try:
            # Probeer de tekst om te zetten naar een Python Dictionary (JSON)
            recommendation = json.loads(content)
            return jsonify(recommendation)
        except json.JSONDecodeError:
             print("Fout: AI antwoord was geen geldig JSON:", content)
             return jsonify({"error": "AI antwoord was geen geldig JSON", "raw": content}), 500

    except Exception as e:
        print("Algemene Fout:", e)
        return jsonify({"error": str(e)}), 500

# =========================================================
# SERVER STARTEN
# =========================================================
if __name__ == '__main__':
    # Start de server op poort 5000
    app.run(host='0.0.0.0', port=5000, debug=True)
