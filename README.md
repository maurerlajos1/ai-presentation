# AI Documentary Presentation

Ez a projekt egy interaktív, webes alapú, "dokumentumfilm" jellegű AI prezentáció. Látványos vizuális elemekkel, háttérzenévekkel, narrációs hanganyagokkal, valamint folyamatosan frissülő képernyőkkel (B-Roll és Chapter art) kíséri végig a nézőt az AI fejlődésének legfontosabb mérföldkövein.

## 🚀 Élő Demó (Live Demo)

A projekt elérhető és azonnal megtekinthető a weben a GitHub Pages jóvoltából:
👉 **[https://maurerlajos1.github.io/ai-presentation/](https://maurerlajos1.github.io/ai-presentation/)**

## 💻 Futtatás helyben (Localhost)
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

## 🛠 Technikai Architektúra

Az alkalmazás egy teljesen egyedi építésű vanilla HTML/CSS/JS frontend, keretrendszerek nélkül, ami a maximális teljesítményre és a szinkronizált multimédia lejátszásra fókuszál.

### Audio & Szinkronizáció
- **Web Audio API:** A rendszer a `window.AudioContext`-et használja a háttérzenék és effektek procedurális generálásához (pl. szinuszgörbés akkordok, aluláteresztő szűrővel ellátott zaj alapú átvezető hangeffektek).
- **Időzített Feliratok:** Az audio lejátszás (`timeupdate` esemény) szorosan össze van kötve a DOM manipulációval. A szöveg szavanként (`span` elemek) van feldolgozva, és a beszéd hanganyagának idejével arányosan vizuálisan kiemelve (`.aw` css class).

### Vizuális Motor (Montage Engine)
- **Virtual Camera Engine:** A `TIMED_MONTAGE_MAP` objektum pontos időbélyegek alapján irányítja, hogy mikor melyik B-Roll kép jelenjen meg az adott jelenetben, másodpercre pontosan a narrációhoz igazítva.
- **Crossfade & Ken Burns:** Minden képváltásnál a rendszer két dedikált háttérréteget (`.bg-layer-1`, `.bg-layer-2`) használ a finom opacity-alapú áttűnésekhez (crossfade). A "Ken Burns" effekteket (dinamikus CSS háttérméretezés és pozicionálás) a `requestAnimationFrame` ciklus zökkenőmentesen hajtja végre.
- **Adatvizualizáció:** Az interaktív grafikonok generálását a `Chart.js` végzi (a `buildArcChart`, `buildParamChart` stb. függvényeken keresztül).

### Állapotkezelés (State Management)
- Az alkalmazás egy központi `state` objektumban tartja nyilván az aktuális fejezetet (`cur`), a zene és hang állapotát, valamint a lejátszás státuszát.
- A navigációt a `goTo(idx)` függvény irányítja, amely szinkronban kezeli a DOM tranzíciókat, elindítja az új fejezet audióját, frissíti az UI elemeket (Progress Bar, feliratok) és újragenerálja a procedurális zenét az adott fejezethez rendelt zenei akkordok (`CHAPTER_CHORDS`) alapján.- Gyökérkönyvtár képei: Speciális tematikus borítóképek a fejezetekhez.
