# Walkthrough: Enhanced AI Recommendation Logic (The Matrix)

We have upgraded the POS AI from simple logic to a sophisticated **Pairing Matrix**. This allows the AI to "know" hundreds of culinary combinations instantly.

## The "Matrix" Architecture
Instead of writing hundreds of `if/else` statements, we now define intelligence in a clean data structure `pairingRules`.

### Example Logic
```javascript
{
    triggers: ['biefstuk', 'ribeye', 'herten'],
    exclude: ['rode wijn', 'malbec'], 
    recommendation: { name: "Malbec", price: 6.00, type: "drink" },
    reason: "Een volle Malbec past perfect bij rood vlees."
}
```

## Capabilities
The AI now automatically handles:
1. **Ingredients**: Truffel -> Cabernet Sauvignon.
2. **Cuisines**:
    - **Aziatisch/Rijst** -> Yakitori / Chicken Wings / Speciaalbier.
    - **Italiaans/Pasta** -> Rode Wijn / Olijven.
3. **Dining Phases**:
    - **Lunch**: Broodje -> Tomatensoep.
    - **Borrel**: Bier/Cocktail -> Bittergarnituur/Nachos.
    - **Dessert**: Koffie -> Cheesecake / Choco -> Espresso Martini.

## Verification
- **Verified Code**: Replaced legacy logic with the new loop-based scanner in `script.js`.
- **Verified Logic**: Check priority (Specific combos > Generic fallbacks).
