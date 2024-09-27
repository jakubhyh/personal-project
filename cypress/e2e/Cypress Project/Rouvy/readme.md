# 🚴‍♂️ Cypress Project - Rouvy 🚴‍♂️

## 🛤️ Test 1: [search-ar-route.cy.js]

### 📜 Popis
Tento Cypress test automatizuje proces vyhľadávania konkrétnej Augmented Reality (AR) trasy na platforme Rouvy, overuje jej detaily a kontroluje prítomnosť určitých kľúčových slov, aby sa zabezpečilo, že bola načítaná správna trasa.

### 🔍 Kroky
1. **Prihlásenie na platformu Rouvy**:
   - Test začína návštevou prihlasovacej stránky Rouvy.
   - Email a heslo sú načítané z environmentálnych premenných (`cypress.env.json`) a sú použité na prihlásenie.

2. **Navigácia do sekcie Trasy**:
   - Po úspešnom prihlásení test prejde do sekcie "Trasy" v hlavnom menu.
   - Test overí, či je načítaná správna URL adresa **(/routes)**.

3. **Vyhľadanie konkrétnej AR trasy**:
   - Test klikne na tlačidlo „Vyhľadať trasy“, čím sa otvorí stránka vyhľadávania.
   - Overí, či je zobrazená správna URL adresa pre vyhľadávanie **(/routes/search)**.
   - Potom do vyhľadávacieho poľa zadá názov trasy **"Obergesteln"**.

4. **Overenie správnej trasy**:
   - Po nájdení trasy **"Obergesteln"** na ňu test klikne.
   - Test overí, či je načítaná správna URL adresa trasy **(/new-route/77190)**.

5. **Kontrola kľúčových detailov trasy**:
   - Test kontroluje, či sú na stránke viditeľné určité texty súvisiace s trasou, ako napríklad „Švýcarsko“ (Švajčiarsko) a „AR, 2K“, aby sa potvrdilo, že bola zobrazená správna AR trasa.

### 🚨 Riešenie výnimiek
Test taktiež sleduje akékoľvek neošetrené výnimky spôsobené problémami (konkrétne **Minified React error #345**, **Minified React error #418**, **Minified React error #423**). Tieto chyby nie sú viditeľné v konzole pri manuálnom teste stránky, ale Cypress ich registruje. Pridal som tam ignor, aby test prebiehal bez zlyhania kvôli týmto chybám.

### 📦 Závislosti
Tento test používa dve triedy Page Object, obe sú uložené v zložke **support**:
- **LoginPage.js**: Zodpovedá za funkčnosť prihlásenia. 🔑
- **RouteSearchPage.js**: Spravuje operácie súvisiace s trasami, ako je navigácia a vyhľadávanie. 🗺️

---

## 🧑‍💻 Test 2: [user-login.cy.js]

### 📜 Popis
Tento Cypress test automatizuje proces prihlásenia na platformu Rouvy, vyhľadávanie sekcie s trasami a otvorenie stránky na vyhľadávanie konkrétnych AR trás.

### 🔍 Kroky
1. **Prihlásenie na platformu Rouvy**:
   - Test začína návštevou prihlasovacej stránky Rouvy.
   - Použije sa email a heslo, ktoré sú načítané z environmentálnych premenných (`cypress.env.json`), na prihlásenie sa do systému.

2. **Navigácia do sekcie Trasy**:
   - Po úspešnom prihlásení sa test presunie do sekcie "Trasy" v hlavnom menu.
   - Test overí, či je načítaná správna URL adresa stránky s trasami **(/routes)**.

3. **Vyhľadávanie trás**:
   - Po otvorení sekcie trás test klikne na tlačidlo „Vyhľadať trasy“.
   - Test následne overí, či sa URL adresa zmenila na stránku na vyhľadávanie trás **(/routes/search)**.

### 🚨 Riešenie výnimiek
Test taktiež sleduje akékoľvek neošetrené výnimky spôsobené problémami (konkrétne **Minified React error #345**, **Minified React error #418**, **Minified React error #423**). Tieto chyby nie sú viditeľné v konzole pri manuálnom teste stránky, ale Cypress ich registruje. Pridal som tam ignor, aby test prebiehal bez zlyhania kvôli týmto chybám.

### 📦 Závislosti
Tento test využíva dve triedy Page Object:
- **LoginPage.js**: Obsahuje metódy pre návštevu prihlasovacej stránky, zadanie prihlasovacích údajov a odoslanie prihlasovacieho formulára. 🔑
- **RouteSearchPage.js**: Obsahuje metódy pre navigáciu do sekcie trás, kliknutie na vyhľadávanie trás a overenie URL adries. 🗺️
