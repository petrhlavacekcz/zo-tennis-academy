# ZO Tennis Academy – Content & Wireframes

Tento dokument popisuje obsah, záměr (context), základní wireframe a komponenty (včetně přesného textu, rozměrů a účelu) pro každou stránku.

---

## Globální konvence
- Kontejner: `div.container.mx-auto.px-4` – horizontální padding 1rem, centrování, max šířku řídí Tailwind container.
- Sekční svislé odsazení: většina sekcí používá `py-20` (80px top/bottom; v Tailwindu v rem).
- Mřížky: dle šířky breakpointů (Tailwind)
  - 1/2/3/4/5 sloupců: `grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5`
- Barvy: primární oranžová `#FF6B00` (hover `#E55D00`), proměnná `text-primary`, `bg-primary`.
- Téma: světle/tmavě, pozadí sekcí: `bg-background`, karty `bg-white dark:bg-[#1E1E1E]`.
- Tlačítka: komponenta Button, často velikost `size="lg"`, kulaté rohy a efekty `tennis-hover`, `hover-glow-orange`, `hover-scale`.
- Obrázky pro GitHub Pages: prefixují se `base` pouze tam, kde je potřeba (např. statický header obrázek a obrázky trenérů).

---

## Hlavička (Header) & Navigace
Soubor: `components/header/header.svelte` + `components/header/mobile-menu.svelte`

### Context
Stálá horní lišta (sticky) s logem, hlavní navigací, CTA „REZERVOVAT“ a přepínačem tématu. Na mobilu se rozbaluje plnohodnotné menu.

### Wireframe
- Vlevo logo „ZO TENNIS“ (klik na DOMŮ)
- Uprostřed (desktop) menu: DOMŮ · TRENÉŘI · PROGRAMY · KONTAKT
- Vpravo (desktop) CTA „REZERVOVAT“ + přepínač tématu
- Mobil: hamburger → rozbalené svislé menu + položka „Téma“ + CTA „REZERVOVAT“

### Komponenty a přesný obsah
- Logo: „ZO“ (v `text-primary`) + „TENNIS“
- Menu položky (desktop i mobil):
  - DOMŮ (id: `home`)
  - TRENÉŘI (id: `coaches`)
  - PROGRAMY (id: `programs`)
  - KONTAKT (id: `contact`)
- CTA tlačítko: „REZERVOVAT“ → `navigateTo("contact")`
- Mobilní menu: nadpis položky pro přepínač tématu „Téma“
- Přepínač tématu (ThemeSwitcher): položky „Light“, „Dark“, „System“
- Interní (v datech navItems): `labelEn` hodnoty: HOME, COACHES, PROGRAMS, CONTACT

---


## Domů (Home)
Soubor: `src/lib/components/zo-tennis-academy/components/pages/home-page.svelte`

### Context
Přistávací stránka s hlavním hero, rychlým představením akademie, náhledem trenérů, referencemi, přehledem programů, Instagram feedem a závěrečnou výzvou k akci.

### Wireframe (High-level)
- Hero (celá výška viewportu)
- Academy Intro (2 sloupce: text + obrázek)
- Coaches Preview (2 karty, centrované)
- Testimonials (2 reference)
- Programs Overview (mřížka 1–5 sloupců podle breakpoints)
- Instagram (mřížka 2–5)
- Final CTA (celoplošný barevný pruh)

### Komponenty

#### Hero Section
Soubor: `sections/hero-section.svelte`
- Účel: Okamžitá identifikace značky a hlavní CTA.
- Rozměry/layout: `section.relative.min-h-screen.flex.items-center.justify-center.overflow-hidden`
  - Pozadí: `<img src="${base}/zo-tennis-academy.jpg" class="w-full h-full object-cover">` + gradient overlay.
  - Dekor: jemná tenisová mřížka (CSS linear-gradient) s `opacity-10`.
- Obsah:
  - Nadpis: „ZO TENNIS ACADEMY“ (řádkované), velikosti `text-5xl md:text-6xl`, podtitul `text-3xl md:text-5xl`.
  - Tagline: „Zlepšete svou hru s profesionálním koučováním pod vedením bývalé hráčky WTA Zuzany Ondráškové“.
  - CTA tlačítka:
    - Primární: „Začněte dnes“ → `navigateTo("contact")`, `size="lg"`, `px-8 py-4`, okrouhlé (`rounded-full`).
    - Sekundární: „Naše programy“ → `navigateTo("programs")`, variant `outline`.

#### Academy Intro
Soubor: `sections/academy-intro.svelte`
- Účel: Krátké vysvětlení přístupu akademie + bullet features.
- Layout: `section.py-20.bg-card` → uvnitř mřížka `lg:grid-cols-2.gap-12.items-center`.
- Obsah:
  - Nadpis: „Personalizovaný přístup k tenisu“ (slovo „tenisu“ v `text-primary`).
  - Text: „V ZO Tennis Academy věříme, že každý hráč je jedinečný...“ (delší odstavec).
  - Features: mřížka `grid-cols-1 sm:grid-cols-2`, položky mají tečku (`w-2 h-2 bg-primary rounded-full`).
  - Obrázek: placeholder `h-96` v kartě; plovoucí badge „74th / WTA Ranking“ (viz pravý dolní roh sekce).

#### Coaches Preview
Soubor: `sections/coaches-preview.svelte`
- Účel: Rychlé představení dvou trenérů s hlavními úspěchy.
- Layout: `section.py-20.bg-background`.
  - Grid karet: `grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mb-12 max-w-4xl mx-auto` (centrované, max šířka 4xl).
- Obsah karet:
  - Obrázek: `aspect-square`, `object-cover`, jemný zoom na hover.
  - Překryv dole: jméno a role (bílé písmo na tmavém gradientu).
  - Detaily: „Klíčové úspěchy“ + 3 odrážky (texty viz soubor).
- Sekční CTA: Button „Poznejte naše trenéry“ → `navigateTo("coaches")`.

#### Testimonials Section
Soubor: `sections/testimonials-section.svelte`
- Účel: Důvěryhodnost skrze výpovědi studentů.
- Layout: `section.py-20.bg-card`, grid `md:grid-cols-2.gap-8`.
- Obsah každé karty:
  - Ikona citace, rating 1–5 hvězd (zde 5), text v uvozovkách, avatar, jméno, role.
  - Příklad textů: Anna Svobodová (rekreační hráčka), Tomáš Novák (junior hráč).

#### Programs Overview (homepage blok)
Soubor: `sections/programs-overview.svelte`
- Účel: Přehled hlavních programů ve formě karet.
- Layout mřížky: `grid-cols-1 sm:2 md:3 lg:4 xl:5` s `gap-8`.
- Obsah karty:
  - Ikona (v barevném tokenu), název (např. „Juniorský rozvoj“), podtitul, popis.
  - Features (3 tečkové odrážky).
- Sekční CTA: „Zobrazit všechny programy“ → `navigateTo("programs")`.

#### Instagram Section
Soubor: `sections/instagram-section.svelte`
- Účel: Sociální proof a aktuality (aktuálně placeholdery, 6 ks).
- Layout mřížky: `grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4`.
- Obrázek: `aspect-square`, mírný zoom na hover, overlay s ikonou Instagram.
- CTA: button „Sledovat @zo_tennis_academy“ → odkaz na https://www.instagram.com/zo_tennis_academy/ (otevře se v novém okně).

#### Final CTA
Soubor: `sections/final-cta.svelte`
- Účel: Závěrečná výzva k akci.
- Layout: `section.py-20.bg-primary.text-primary-foreground`, centrovaný text, 2 CTA tlačítka.
- Obsah:
  - Nadpis: „Připraveni zlepšit svou hru?“
  - Text: „Začněte svou tenisovou cestu… bezplatná zkušební lekce…“
  - CTA:
    - „Rezervovat zkušební lekci“ → `navigateTo("contact")`
    - „Prohlédnout programy“ → `navigateTo("programs")`
  - Kontaktní link: „Máte otázky? Zavolejte nám na +420 603 441 399“

---

## Programy (Programs)
Soubor: `components/pages/programs-page.svelte`

### Context
Kompletní přehled programů s detaily (délka, velikost skupiny, cena, výčet benefitů) a CTA k rezervaci.

### Wireframe
- Page header (nadpis + popis)
- Grid 2 sloupce karet programů (na desktopu)
- Spodní CTA karta přes celou šířku

### Komponenty a obsah
- Header
  - Nadpis: „NAŠE PROGRAMY“ (část v `text-primary`).
  - Popis: „Vyberte si program, který nejlépe odpovídá…“
- Mřížka programů: `div.grid.md:grid-cols-2.gap-8`
  - Každá karta:
    - Ikona 32px v `w-16 h-16` boxu
    - Title (např. „Juniorský rozvoj“), Subtitle
    - Popis (1 odstavec)
    - „Program details“: 3 sloupce (délka, velikost skupiny, cena) v `grid grid-cols-3 gap-4` (piktogram + text, cena zvýrazněna `text-primary`).
    - Features: seznam s `CheckIcon`, linkované benefity dle dat (viz soubor).
    - CTA: „Rezervovat“ → `navigateTo("contact")` (žádné „Více informací“; žádný ceník sekce na stránce).
- Spodní CTA karta: oranžové pozadí, text „Nevíte, který program je pro vás ten pravý?“ + tlačítko „Kontaktovat nás“.

---

## Trenéři (Coaches)
Soubor: `components/pages/coaches-page.svelte`

### Context
Detailní profily trenérů s biografií, certifikacemi a úspěchy.

### Wireframe
- Page header (nadpis + podtitulek)
- Seznam karet trenérů (stack vertikálně)

### Komponenty a obsah
- Header
  - Nadpis: „NAŠI TRENÉŘI“ (část v `text-primary`).
  - Podtitulek: „Poznejte náš profesionální tým…“
- Karta trenéra
  - Grid `lg:grid-cols-5` (obrázek 2/5, text 3/5):
    - Obrázek: `img src="${base}${coach.image}"`, `object-cover`, výška `h-96` na mob., auto na desk.
    - Jméno (3–4xl), Role (text-primary), Bio (delší odstavec).
    - Certifikace: seznam odrážek.
    - Úspěchy: seznam odrážek s `AwardIcon` v titulku.
    - CTA: „Rezervovat lekci“ s `PhoneIcon`.
    - Pozn.: Sekce „Specializace“ a tlačítko „Kontaktovat“ jsou v kódu zakomentované (nejsou kompilovány ani renderovány).

---

## Kontakt (Contact)
Soubor: `components/pages/contact-page.svelte`

### Context
Kontakt přes formulář, přímé kontaktní údaje, mapa, FAQ.

### Wireframe
- Page header (nadpis + podtitulek)
- 2 sloupce: vlevo formulář, vpravo kontaktní boxy + mapa + FAQ.

### Komponenty a obsah
- Formulář „Napište nám“
  - Pole: Jméno (required), Telefon (placeholder `+420 603 441 399`), Email (required), Zpráva (required).
  - Submit: „Odeslat zprávu“.
- Kontaktní údaje
  - Telefon: `+420 603 441 399` (+ poznámka o časech)
  - Email: `tenis@zotennisacademy.cz`
  - Adresa: `Ivana Kubince`, `747 91 Štítina`
  - Otevírací doba: Po–Pá 8–20, So–Ne 9–18
- Mapa
  - Vložený iframe Google Maps (embed poskytnutý klientem); kontejner `h-80`, `width="100%" height="100%"`.
- FAQ
  - Akordeon s tlačítky; 4 otázky/odpovědi (viz soubor, např. délka lekce, vybavení, výběr trenéra, zkušební lekce).

---

## Patička (Footer)
Soubor: `components/footer/footer.svelte`


---

## Kompletní texty – Header
- Logo: "ZO TENNIS"
- Menu položky: "DOMŮ", "TRENÉŘI", "PROGRAMY", "KONTAKT"
- CTA: "REZERVOVAT"
- ThemeSwitcher položky: "Light", "Dark", "System"

## Kompletní texty – Home

### Hero
- Hlavní nadpis: "ZO TENNIS" + "ACADEMY"
- Tagline: "Zlepšete svou hru s profesionálním koučováním pod vedením bývalé hráčky WTA Zuzany Ondraskové"
- Tlačítka: "Začněte dnes", "Naše programy"

### Academy Intro
- Nadpis: "Personalizovaný přístup k tenisu"
- Odstavec: "V ZO Tennis Academy věříme, že každý hráč je jedinečný. Naše programy jsou navrženy tak, aby maximalizovaly váš potenciál prostřednictvím individuálního přístupu a profesionálního vedení."
- Features:
  - "Zkušení trenéři" – "Profesionální koučování od bývalých hráčů WTA"
  - "Příjemné zázemí" – "Moderní kurty a špičkové vybavení"
  - "Všechny úrovně" – "Od začátečníků po pokročilé hráče"
  - "Flexibilní rozvrh" – "Přizpůsobíme se vašemu času"
- Badge: "74th" + "WTA Ranking"

### Coaches Preview
- Sekční nadpis: "Naši trenéři"
- Sekční popis: "Učte se od nejlepších. Naši trenéři kombinují profesionální zkušenosti s vášní pro tenis."
- Trenéři:
  - Zuzana Ondrášková — role: "Hlavní trenérka & Zakladatelka"
    - Klíčové úspěchy:
      - "Bývalá hráčka WTA"
      - "74. místo světového žebříčku"
      - "Účast na Grand Slam turnajích"
    - (spec) "Technická dokonalost, mentální příprava"
  - Michał Kowalski — role: "Technický specialista"
    - Klíčové úspěchy:
      - "Sparingpartner TOP 100 WTA"
      - "Vítěz národních turnajů"
      - "Mezinárodní zkušenosti"
    - (spec) "Taktická příprava, perfekcionistický přístup"
- Sekční CTA: "Poznejte naše trenéry"

### Programs Overview (na homepage)
- Sekční nadpis: "Naše programy"
- Sekční popis: "Vyberte si program, který nejlépe odpovídá vašim potřebám a tenisovým ambicím."
- Programy:
  - "Juniorský rozvoj" – "Pro děti a mládež 4–18 let"
    - Popis: "Komplexní program zaměřený na technický a taktický rozvoj mladých hráčů s důrazem na správné základy."
    - Features: "Skupinové tréninky", "Individuální přístup", "Turnajová příprava"
  - "Lekce pro dospělé" – "Pro začátečníky a pokročilé"
    - Popis: "Flexibilní program pro dospělé hráče všech úrovní s možností individuálního nebo skupinového tréninku."
    - Features: "Všechny úrovně", "Flexibilní časy", "Moderní metody"
  - "Soukromé lekce" – "Individuální přístup"
    - Popis: "Individuální lekce zaměřené na specifické potřeby každého hráče s maximální pozorností trenéra."
    - Features: "1:1 trénink", "Rychlý pokrok", "Flexibilní rozvrh"
  - "Profesionál" – "Program šitý na míru"
    - Popis: "Program zaměřený na tenis na závodní úrovni, který je shodný s tréninkovým procesem špičkových hráčů."
    - Features: "Závodní úroveň", "Individuální plán", "Profesionální přístup"
  - "Letní kempy" – "Intenzivní týdenní programy"
    - Popis: "Týdenní kempy kombinující technický trénink, zápasy a zábavné aktivity pro děti všech věkových kategorií."
    - Features: "Celotýdenní program", "Všestranný rozvoj", "Zábavné aktivity"
- Sekční CTA: "Zobrazit všechny programy"

### Testimonials
- Nadpis: "Co říkají naši studenti"
- Popis: "Přečtěte si zkušenosti našich studentů a zjistěte, jak jsme jim pomohli dosáhnout jejich tenisových cílů."
- Reference:
  - "Anna Svobodová" – role: "Rekreační hráčka"
    - Text: "Díky ZO Tennis Academy jsem se zlepšila více, než jsem si kdy myslela, že je možné. Zuzanin přístup je nejen profesionální, ale také velmi motivující."
  - "Tomáš Novák" – role: "Junior hráč"
    - Text: "Trénink s Michałem mi pomohl vyhrát můj první turnaj. Jeho technické rady a taktické přípravy jsou neocenitelné."

### Instagram
- Nadpis: "Sledujte nás na Instagramu"
- Popis: "Zůstaňte v kontaktu s naší akademií a sledujte pokroky našich studentů."
- CTA: "Sledovat @zo_tennis_academy"

### Final CTA
- Nadpis: "Připraveni zlepšit svou hru?"
- Text: "Začněte svou tenisovou cestu s námi ještě dnes. Nabízíme bezplatnou zkušební lekci pro všechny nové studenty."
- Tlačítka: "Rezervovat zkušební lekci", "Prohlédnout programy"
- Kontaktní link: "Máte otázky? Zavolejte nám na +420 603 441 399"

## Kompletní texty – Footer
- Popis: "Profesionální tenisová akademie pod vedením bývalé hráčky WTA Zuzany Ondraskové. Pomáháme hráčům všech úrovní dosáhnout jejich tenisových cílů."
- Sloupec 2 (nadpis): "Adresa"
  - "Ivana Kubince"; "747 91 Štítina"
- Sloupec 3 (nadpis): "Kontakt"
  - "tenis@zotennisacademy.cz"; "+420 603 441 399"
- Copyright: "© 2025 ZO Tennis Academy. Všechna práva vyhrazena."

### Context
Koncový blok s identitou, adresou a kontakty.

### Wireframe
- 3 sloupce (md):
  1) Logo + stručný popis (ZO TENNIS)
  2) Adresa
  3) Kontakt
- Spodní pruh s copyrightem.

### Komponenty a obsah
- Logo: textové „ZO TENNIS“ s `text-primary` pro „ZO“.
- Adresa: `Ivana Kubince`, `747 91 Štítina`.
- Kontakt: `tenis@zotennisacademy.cz`, `+420 603 441 399`.
- Copyright: `© 2025 ZO Tennis Academy. Všechna práva vyhrazena.`
- Pozn.: Sociální ikony a „rychlé odkazy“ odstraněny dle zadání.

---

## Poznámky k rozměrům a chování komponent
- Karty: `rounded-2xl`, jemný hover stín `hover:shadow-md`, dekorativní efekty `hover-glow-orange`, `hover-scale`.
- Obrázky v kartách: `aspect-square` (náhledy), nebo `h-96` (Hero/Intro), vždy `object-cover`.
- Ikony: velikosti 20–32 px dle kontextu.
- CTA rozměry: většinou `size="lg"` s `px-8 py-4` pro výraznou akci.
- Mřížky se responsivně lámou na definovaných breakpointech (`sm`, `md`, `lg`, `xl`).



---

## Kompletní texty – Programs (page)
- Header nadpis: "NAŠE PROGRAMY"
- Header popis: "Vyberte si program, který nejlépe odpovídá vašim potřebám a tenisovým ambicím"

### Programy
- id: "junior"
  - Title: "Juniorský rozvoj"
  - Subtitle: "Pro děti a mládež 4–18 let"
  - Description: "Komplexní program zaměřený na technický a taktický rozvoj mladých hráčů s důrazem na správné základy."
  - Duration: "60–90 minut"
  - Group size: "3–5 hráčů"
  - Price: "od 250 Kč / lekce"
  - Features:
    - "Skupinové tréninky podle věku a úrovně."
    - "Rozvoj základních tenisových dovedností."
    - "Budování správných pohybových návyků."
    - "Zlepšování fyzické kondice a obratnosti."
    - "Podpora týmové spolupráce a fair play."
- id: "adult"
  - Title: "Lekce pro dospělé"
  - Subtitle: "Pro začátečníky a pokročilé"
  - Description: "Flexibilní program pro dospělé hráče všech úrovní s možností individuálního nebo skupinového tréninku."
  - Duration: "60–90 minut"
  - Group size: "1–4 hráči"
  - Price: "od 300 Kč / lekce"
  - Features:
    - "Důraz na správnou techniku úderů."
    - "Pravidelné lekce pro trvalý pokrok."
    - "Osvojení základních technických prvků."
    - "Rozvoj taktiky pro lepší hru."
    - "Flexibilní tréninky podle možností hráčů."
    - "Přátelské a motivující prostředí."
- id: "private"
  - Title: "Soukromé lekce"
  - Subtitle: "Individuální přístup"
  - Description: "Individuální lekce zaměřené na specifické potřeby každého hráče s maximální pozorností trenéra."
  - Duration: "60–90 minut"
  - Group size: "1 hráč"
  - Price: "600 Kč / lekce"
  - Features:
    - "100% pozornost trenéra."
    - "Přizpůsobený tréninkový program."
    - "Rychlý a efektivní pokrok."
    - "Flexibilní termíny."
    - "Video analýza techniky."
    - "Nejlepší cesta k rychlému zlepšení."
- id: "pro"
  - Title: "Profesionál"
  - Subtitle: "Program šitý na míru"
  - Description: "Program zaměřený na tenis na závodní úrovni, který je shodný s tréninkovým procesem špičkových hráčů."
  - Duration: "Denní / Týdenní / Měsíční – program šitý na míru"
  - Group size: "Individuální"
  - Price: "Cena na vyžádání"
  - Features:
    - "Na míru vytvořený každodenní tréninkový proces."
    - "Program zaměřený na tenis na závodní úrovni."
    - "Denní, týdenní i měsíční plán přizpůsobený hráči."
    - "Tréninky, sparingy, kondiční příprava, fyzioterapie a masáže."
    - "Program shodný s přípravou špičkových hráčů."
    - "Možnost zajištění ubytování."
- id: "camps"
  - Title: "Letní kempy"
  - Subtitle: "Intenzivní týdenní programy"
  - Description: "Týdenní kempy kombinující technický trénink, zápasy a zábavné aktivity pro děti všech věkových kategorií."
  - Duration: "5 dní"
  - Group size: "12–16 dětí"
  - Price: "Půldenní kemp / 2 800 Kč · Celodenní / 4 500 Kč"
  - Features:
    - "Bohatý program pro nezapomenutelné letní zážitky."
    - "Celodenní tréninky pod vedením zkušených trenérů."
    - "Různorodé hry a soutěže pro rozvoj dovedností."
    - "Vyvážená kombinace obratnosti, vytrvalosti a koordinace."
    - "Získání cenných zápasových zkušeností."
    - "Obědy a svačiny zajištěny."
    - "Každý účastník obdrží speciální tričko"

### Spodní CTA (Programs page)
- Nadpis: "Nevíte, který program je pro vás ten pravý?"
- Text: "Kontaktujte nás a my vám pomůžeme vybrat ideální program podle vašich potřeb a cílů."
- Tlačítko: "Kontaktovat nás"

---

## Kompletní texty – Coaches (page)
- Header nadpis: "NAŠI TRENÉŘI"
- Header popis: "Poznejte náš profesionální tým trenérů s bohatými zkušenostmi z mezinárodního tenisu"

### Trenéři
- Zuzana Ondrášková — "Hlavní trenérka & Zakladatelka"
  - Bio: "Zuzana je bývalá profesionální tenistka, která dosáhla 74. místa na WTA žebříčku. Během své kariéry (1997-2013) získala 20 ITF titulů a účastnila se všech Grand Slam turnajů. Po ukončení aktivní kariéry se věnuje koučování a předávání svých zkušeností mladé generaci."
  - Specializace (nerenderováno): "Technická dokonalost", "Mentální příprava", "Turnajová strategie", "Profesionální koučování"
  - Certifikace: "ITF Level 3 Coach", "WTA Coaching Certification", "Sports Psychology Certificate", "First Aid Certified"
  - Úspěchy: "74. místo WTA žebříčku (2005)", "20 ITF titulů", "Účast na všech Grand Slam turnajích", "Vítězství nad hráčkami TOP 50", "Reprezentace České republiky", "12+ let koučovacích zkušeností"
  - CTA: "Rezervovat lekci"
- Michał Kowalski — "Technický specialista"
  - Bio: "Michał je technický specialista s bohatými zkušenostmi z mezinárodního tenisu. Pracoval jako sparingpartner pro hráčky TOP 100 WTA a má za sebou úspěšnou trenérskou kariéru. Jeho perfekcionistický přístup a důraz na detaily pomáhají hráčům dosáhnout jejich maximálního potenciálu."
  - Specializace (nerenderováno): "Taktická příprava", "Technická analýza", "Kondičního tréninku", "Juniorský rozvoj"
  - Certifikace: "ITF Level 2 Coach", "Tennis Europe Coach", "Strength & Conditioning Specialist", "Video Analysis Expert"
  - Úspěchy: "Sparingpartner TOP 100 WTA hráčky", "Vítěz národních turnajů", "10+ let mezinárodních zkušeností", "Trenér juniorských reprezentantů", "Specialista na technickou analýzu", "Certifikovaný kondičního trenér"
  - CTA: "Rezervovat lekci"

---

## Kompletní texty – Contact (page)
- Header nadpis: "KONTAKT"
- Header popis: "Máte otázky nebo chcete rezervovat lekci? Jsme tu pro vás!"

### Formulář
- Pole: "Jméno *", "Telefon", "Email *", "Zpráva *"
- Odesílací tlačítko: "Odeslat zprávu"

### Kontaktní údaje
- Sekční nadpis: "Kontaktní údaje"
- Telefon blok: nadpis "Telefon", hodnota "+420 603 441 399", pozn.: "Po-Pá: 8:00-20:00, So-Ne: 9:00-18:00"
- Email blok: nadpis "Email", hodnota "tenis@zotennisacademy.cz", pozn.: "Odpovídáme do 24 hodin"
- Adresa blok: nadpis "Adresa", hodnoty: "Ivana Kubince" + "747 91 Štítina"
- Otevírací doba blok: nadpis "Otevírací doba", řádky: "Pondělí - Pátek: 8:00 - 20:00", "Sobota - Neděle: 9:00 - 18:00"

### Mapa
- Sekční nadpis: "Kde nás najdete"

### FAQ
- Sekční nadpis: "Často kladené otázky"
- Q/A:
  1) Q: "Jak dlouho trvá jedna lekce?"
     A: "Standardní lekce trvá 60 minut. Pro juniory nabízíme také kratší 45minutové lekce a pro pokročilé hráče delší 90minutové tréninky."
  2) Q: "Potřebuji vlastní vybavení?"
     A: "Pro první lekce můžeme zapůjčit raketu. Doporučujeme však co nejdříve pořídit vlastní vybavení přizpůsobené vaší úrovni a stylu hry."
  3) Q: "Můžu si vybrat trenéra?"
     A: "Ano, můžete si vybrat konkrétního trenéra podle vašich preferencí. Rádi vám také doporučíme trenéra na základě vašich cílů a úrovně."
  4) Q: "Nabízíte zkušební lekci?"
     A: "Ano, pro všechny nové studenty nabízíme bezplatnou zkušební lekci, kde si můžete vyzkoušet náš přístup a poznat trenéra."


---

## Prolinkování (Link map)

### Header
- Logo → navigateTo("home")
- DOMŮ → navigateTo("home")
- TRENÉŘI → navigateTo("coaches")
- PROGRAMY → navigateTo("programs")
- KONTAKT → navigateTo("contact")
- CTA „REZERVOVAT“ (desktop) → navigateTo("contact")
- CTA „REZERVOVAT“ (mobile menu) → navigateTo("contact")

### Home
- Hero: „Začněte dnes“ → navigateTo("contact")
- Hero: „Naše programy“ → navigateTo("programs")
- Coaches Preview: „Poznejte naše trenéry“ → navigateTo("coaches")
- Programs Overview: „Zobrazit všechny programy“ → navigateTo("programs")
- Final CTA: „Rezervovat zkušební lekci“ → navigateTo("contact")
- Final CTA: „Prohlédnout programy“ → navigateTo("programs")
- Final CTA: telefon → tel:+420603441399

### Programs (page)
- Každá karta programu: „Rezervovat“ → navigateTo("contact")
- Spodní CTA karta: „Kontaktovat nás“ → navigateTo("contact")

### Contact (page)
- Formulář odesílá data (aktuálně console.log), bez navigačního odkazu
- Kontaktní bloky jsou informativní (žádné odkazy mimo tel/mail v UI)
- Mapa je vložený iframe (externí embed)

### Instagram Section
- Tlačítko „Sledovat @zo_tennis_academy“ → https://www.instagram.com/zo_tennis_academy/ (target="_blank", rel="noopener noreferrer")

### Footer
- Logo+text, Adresa, Kontakt: pouze texty, bez odkazů
