# AI Documentary Presentation

Ez a projekt egy interaktív, webes alapú, "dokumentumfilm" jellegű AI prezentáció. Látványos vizuális elemekkel, háttérzenévekkel, narrációs hanganyagokkal, valamint folyamatosan frissülő képernyőkkel (B-Roll és Chapter art) kíséri végig a nézőt az AI fejlődésének legfontosabb mérföldkövein.

## 🚀 Futtatás helyben (Localhost)

Mivel a projekt külső médiafájlokat és scripteket használ (CORS miatt), a futtatáshoz szükség van egy lokális webszerverre.

A legegyszerűbb módszer, ha van feltelepítve Python:

1. Nyisd meg a terminált/parancssort a projekt mappájában.
2. Futtasd a következő parancsot:
   ```bash
   python -m http.server 8000
   ```
3. Nyisd meg a böngészőben: [http://localhost:8000](http://localhost:8000)

(Ha hálózaton (LAN) belül egy másik eszközről szeretnéd elérni, használd a számítógéped helyi IP-címét, pl. `http://192.168.0.20:8000/`)

## 💡 Funkciók és Felépítés

- **Moziszerű Élménymód:** Az oldal egyetlen gombnyomással ("Start Documentary") elindítja az összes vizuális elemet és hangot, szinkronizálva.
- **Fejezetek (Chapters):** A prezentáció fejezetekre (pl. Intro, DeepSeek, GPT-5, Reasoning, Model Wars, AI Agents) van bontva.
- **Dinamikus UI:** Progress bar a fejezetek hosszához, testre szabható betűtípusok (Oswald és Roboto), és modern, reszponzív, sötét tónusú design.
- **B-Roll és Képek:** A `broll` és `audio` mappákban található médiafájlok adják az aláfestő mozgóképeket és a narrációt.

## 📂 Fájlszerkezet

- `index.html`: A prezentáció fő váza, tartalom és felépítés.
- `styles.css`: Felel a moziszerű, sötét megjelenésért, animációkért és reszponzivitásért.
- `main.js`: Irányítja az audio lejátszást, az időzítéseket, a UI progress bart és a fejezetek közötti váltást.
- `/audio/`: A fejezetekhez tartozó hangfájlok (`slide_X.mp3`, `cutscene_X.mp3`).
- `/broll/`: Az aláfestő képek és vágóképek.
- Gyökérkönyvtár képei: Speciális tematikus borítóképek a fejezetekhez.
