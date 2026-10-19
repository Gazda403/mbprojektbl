/**
 * MB PROJEKT BANJA LUKA — GLAVNA JAVASCRIPT LOGIKA
 * Namještaj po mjeri, enterijeri, 3D vizuelizacija i opremanje objekata
 * Bulevar vojvode Stepe Stepanovića 124, Banja Luka
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* ==========================================================================
     1. BAZA PODATAKA PROJEKATA (REALIZACIJE MB PROJEKT)
     ========================================================================== */
  const projectsData = [
    {
      id: 'kuhinja-nova-varos',
      title: 'Luksuzna Kuhinja od Lakiranog Medijapana',
      category: 'kuhinje',
      categoryLabel: 'Kuhinja Po Mjeri',
      location: 'Banja Luka — Nova Varoš',
      year: '2026',
      dimensions: '4.80m x 2.60m',
      materials: 'Lakirani MDF (mat kašmir), radna ploča Compact 12mm, Blanco podgradni sudoper',
      hardware: 'Blum Legrabox fioke, Aventos HF podizni mehanizmi sa električnim otvaranjem (SERVO-DRIVE)',
      lighting: 'Skrivene ugradne LED trake 3000K sa integrisanim senzorom na dodir',
      image: 'images/kuhinja.jpg',
      description: 'Kompletno projektovana i realizovana moderna kuhinja u novogradnji u Novoj Varoši. Fokus je bio na čistim linijama bez vidljivih ručkica (Gola profil), vrhunskoj ergonomiji i ugrađenim premium aparatima. Ostrvo sa produženim pultom za doručak pruža savršen balans funkcionalnosti i estetike.',
      heroIndex: '01'
    },
    {
      id: 'dnevni-centar',
      title: 'Moderni Dnevni Boravak',
      category: 'dnevni-boravak',
      categoryLabel: 'Dnevni Boravak & TV Zid',
      location: 'Banja Luka — Centar',
      year: '2025',
      dimensions: '36 m² površina prostorije',
      materials: 'Prirodni hrastov furnir, crni mat medijapan, akustični filc, tonirano sivo staklo',
      hardware: 'Skriveni nosači za viseće elemente visoke nosivosti, Blum TIP-ON push-to-open mehanizmi',
      lighting: 'Vertikalna ambijentalna LED rasvjeta iza akustičnih panela sa dimmerom',
      image: 'images/dnevnasobakomoda.jpg',
      description: 'Rješenje za centralni dnevni boravak u porodičnom stanu u centru Banje Luke. Zidna obloga od furniranih hrastovih letvica krije sve instalacije i pruža akustičnu udobnost, dok lebdeća TV komoda sa integrisanim električnim kaminom unosi posebnu toplinu.',
      heroIndex: '02'
    },
    {
      id: 'garderober-borik',
      title: 'Walk-In Garderober',
      category: 'plakari',
      categoryLabel: 'Plakari & Garderoberi',
      location: 'Banja Luka — Borik',
      year: '2026',
      dimensions: '3.40m x 2.20m, visina 2.80m (pod-do-plafon)',
      materials: 'Egger PerfectSense tamni orah, aluminijumski profili u boji bronze, kaljeno stopsol staklo',
      hardware: 'Hettich SlideLine M klizni sistemi sa mekim zatvaranjem, izvlačne police za obuću i pantalone',
      lighting: 'Senzorska LED rasvjeta u svakoj vertikali koja se automatski aktivira pri otvaranju',
      image: 'images/plakar (1).jpg',
      description: 'Garderobni prostor rađen po strogim dimenzijama prostorije od poda do plafona. Unutrašnjost nudi optimalnu organizaciju sa namjenskim pregradama za aksesoare, satove i osvijetljene vješalice, stvarajući osjećaj luksuznog butika u vlastitom domu.',
      heroIndex: '03'
    },
    {
      id: 'kupatilo-mejdan',
      title: 'Viseći Kupatilski Elementi Otporni na Vlagu',
      category: 'kupatila',
      categoryLabel: 'Kupatilski Namještaj',
      location: 'Banja Luka — Mejdan',
      year: '2025',
      dimensions: '1.80m širina sa dvostrukim umivaonikom',
      materials: 'Vlagootporni lakirani medijapan u maslinasto zelenom tonu, gornja ploča od kvarca',
      hardware: 'Specijalni nehrđajući okovi sa mekanim usporivačima za vlažne prostore',
      lighting: 'Kružno LED ogledalo sa integrisanim grijačem protiv magljenja',
      image: 'images/wc.jpg',
      description: 'Moderno kupatilsko rješenje koje prkosi vlazi zahvaljujući poliuretanskom višeslojnom lakiranju i besprijekornoj kant obradi PUR ljepilom. Čiste linije i prirodni tonovi pretvaraju kupatilo u privatnu spa oazu.',
      heroIndex: '04'
    },
    {
      id: 'poslovni-aleja',
      title: 'Očaravajući Namještaj',
      category: 'poslovni',
      categoryLabel: 'Poslovni Objekti & Enterijeri',
      location: 'Banja Luka — Aleja Svetog Save',
      year: '2026',
      dimensions: '180 m² kancelarijski enterijer',
      materials: 'Mineralne kompozitne ploče (Kerrock), masivni jasen, akustične pregrade',
      hardware: 'Heavy-duty sistemi za intenzivnu svakodnevnu upotrebu sa skrivenim elektro-kanalima',
      lighting: 'Arhitektonska linijska rasvjeta prilagođena radnom komforu zaposlenih',
      image: 'images/sto.jpg',
      description: 'Kompletno opremanje poslovnog sjedišta domaće IT kompanije. Od unikatnog prijemnog pulta zakrivljene geometrije do modularnih radnih stanica i akustičnih kabina za video sastanke.',
      heroIndex: '05'
    },
    {
      id: 'kuhinja-mat-crna',
      title: 'Mat Crna Kuhinja sa Trpezarijskim Pultom',
      category: 'kuhinje',
      categoryLabel: 'Kuhinja Po Mjeri',
      location: 'Banja Luka — Starčevica',
      year: '2026',
      dimensions: '4.20m x 2.80m + pult 1.80m',
      materials: 'Crni mat lakirani MDF sa nano-zaštitom protiv otisaka, prirodni hrastov dekor, čelična plastificirana konstrukcija',
      hardware: 'Blum Tandembox fioke, Aventos podizni sistemi, skrivene elektro utičnice',
      lighting: 'Ugradni LED profili 3000K ispod gornjih ormara i ambijentalno osvjetljenje niše',
      image: 'images/kuia2đ.jpg',
      description: 'Moderan spoj industrijskog i toplog stila. Duboki mat crni frontovi u kontrastu sa drvenim elementima i integrisanim trpezarijskim stolom stvaraju funkcionalan i vizuelno upečatljiv centar doma.',
      heroIndex: null
    },
    {
      id: 'kuhinja-calacatta-ostrvo',
      title: 'Luksuzna Kuhinja sa Calacatta Ostrvom',
      category: 'kuhinje',
      categoryLabel: 'Kuhinja Po Mjeri',
      location: 'Banja Luka — Petrićevac',
      year: '2026',
      dimensions: '5.40m front + ostrvo 2.60m x 1.20m',
      materials: 'Lakirani medijapan kašmir mat, Calacatta kvarcna radna ploča sa slap (waterfall) prelazom, furnirani hrast',
      hardware: 'Blum Legrabox, integrisano električno otvaranje, izvlačne kolone sa korpama visoke nosivosti',
      lighting: 'Linijska visilica iznad ostrva, indirektna LED traka u zoni radne ploče',
      image: 'images/kuhinjcica.jpg',
      description: 'Monumentalno kuhinjsko rješenje otvorenog koncepta. Masivno ostrvo sa slap radnom pločom od kvarca služi za pripremu hrane i barsko sjedenje, dok visoki frontovi pružaju maksimalan skladišni prostor.',
      heroIndex: null
    },
    {
      id: 'kuhinja-u-oblik-sjaj',
      title: 'U-Kuhinja Visokog Sjaja sa Poluostrvom',
      category: 'kuhinje',
      categoryLabel: 'Kuhinja Po Mjeri',
      location: 'Banja Luka — Kočićev Vijenac',
      year: '2025',
      dimensions: '3.60m x 2.40m x 2.10m',
      materials: 'Poliuretansko lakiranje visoki sjaj, kvarcna ploča, sivi mermerni zidni panel',
      hardware: 'Gola horizontalni i vertikalni profili, Blum usporivači',
      lighting: 'Ugradni stropni reflektori i neprekidna linijska LED rasvjeta radne površine',
      image: 'images/kuina.jpg',
      description: 'Maksimalno iskorišten prostor u praktičnoj U-formi. Poluostrvo dijeli radni dio od trpezarije, pružajući obilje prostora za kulinarske majstorije i brze obroke.',
      heroIndex: null
    },
    {
      id: 'kuhinja-ugaona-toplo-drvo',
      title: 'Minimalistička Ugaona Kuhinja sa Drvenim Akcentom',
      category: 'kuhinje',
      categoryLabel: 'Kuhinja Po Mjeri',
      location: 'Banja Luka — Rosulje',
      year: '2026',
      dimensions: '3.80m x 2.60m',
      materials: 'Lakirani mat medijapan slonova kost, radna ploča i zidna obloga u dekoru prirodnog hrasta',
      hardware: 'Crni Gola profili, ugradna rerna i mikrotalasna u visokom ormaru, Blum sistemi mekog zatvaranja',
      lighting: 'Topla LED traka ugrađena u dno visećih elemenata',
      image: 'images/640824898_18363065035162254_2204323397754267601_n.jpg',
      description: 'Izbalansiran savremeni dizajn. Čiste svijetle linije u kombinaciji sa prirodnom teksturom drveta stvaraju prijatan i svijetao prostor za pripremu hrane.',
      heroIndex: null
    },
    {
      id: 'dnevni-biblioteka-tv',
      title: 'Zidna Biblioteka i TV Sekcija sa Pozadinskim Svjetlom',
      category: 'dnevni-boravak',
      categoryLabel: 'Dnevni Boravak & TV Zid',
      location: 'Banja Luka — Nova Varoš',
      year: '2026',
      dimensions: '4.60m širina, visina 2.75m',
      materials: 'Prirodni hrast svijetli furnir, lakirani MDF ram, staklene police',
      hardware: 'Push-to-open donje komode visoke nosivosti, skriveni nosači polica',
      lighting: 'Vertikalne i horizontalne LED trake iza svake police sa regulatorom intenziteta',
      image: 'images/dnevnasob.jpg',
      description: 'Impresivna zidna kompozicija koja objedinjuje kućnu biblioteku, izložbene police i TV centar. Rasvjeta u policama daje prostoru izuzetnu dubinu i toplinu u večernjim satima.',
      heroIndex: null
    },
    {
      id: 'dnevni-lounge-letvice',
      title: 'Zidna Obloga sa Akustičnim Letvicama i Zlatnim Policama',
      category: 'dnevni-boravak',
      categoryLabel: 'Dnevni Boravak & TV Zid',
      location: 'Banja Luka — Centar',
      year: '2025',
      dimensions: 'Zid 4.20m dužine',
      materials: 'Furnirani hrast masivnih letvica, mesingani/zlatni profili, mat lakirana baza',
      hardware: 'Integrisani skriveni ormarići za audio/video opremu',
      lighting: 'Skrivena topla LED rasvjeta iza akustičnih panela',
      image: 'images/dnevnsoba.jpg',
      description: 'Raskošno enterijersko rješenje za centralni salon. Vertikalne drvene letvice vizuelno podižu prostor i poboljšavaju akustiku, dok osvijetljene zlatne niše stvaraju luksuzan ambijent.',
      heroIndex: null
    },
    {
      id: 'dnevni-letvice-tv-zid',
      title: 'Lebdeća TV Komoda sa Sjajnim Zidnim Panelima',
      category: 'dnevni-boravak',
      categoryLabel: 'Dnevni Boravak & TV Zid',
      location: 'Banja Luka — Obilićevo',
      year: '2025',
      dimensions: '3.60m x 2.65m',
      materials: 'Visoki sjaj lakirani paneli, orah furnir, vertikalna staklena vitrina',
      hardware: 'Heavy-duty nosači za lebdeću komodu, Blum TIP-ON push mehanizmi',
      lighting: 'Amber LED rasvjeta unutar otvorene staklene vitrine',
      image: 'images/tv.jpg',
      description: 'Elegantan zidni sistem koji u potpunosti skriva sve kablove i instalacije televizora. Lebdeća donja komoda olakšava čišćenje i pruža moderan izgled bez vizuelnog zagušenja prostora.',
      heroIndex: null
    },
    {
      id: 'dnevni-kamin-ljetna-kuhinja',
      title: 'Enterijer sa Zidanim Kaminom i Garniturom Ormara',
      category: 'dnevni-boravak',
      categoryLabel: 'Dnevni Boravak & Enterijeri',
      location: 'Banja Luka — Vrbanja',
      year: '2025',
      dimensions: '5.10m dužina fronta',
      materials: 'Profilisani mat lakirani medijapan, granitna radna ploča, staklene vitrine sa LED rasvjetom',
      hardware: 'Kovani i mat metalni okovi otporni na toplotu i habanje',
      lighting: 'Usmjerena stropna rasvjeta i unutrašnje LED trake u vitrinama',
      image: 'images/kamin.jpg',
      description: 'Savršen spoj tradicionalnog zidanog kamina i moderno profilisanog namještaja po mjeri. Izvedeni elementi prate masivnu granitnu ploču i stvaraju toplu prostoriju za druženje i odmor.',
      heroIndex: null
    },
    {
      id: 'spavaca-tapison-uzglavlje',
      title: 'Master Spavaća Soba sa Tapaciranim Zidnim Uzglavljem',
      category: 'dnevni-boravak',
      categoryLabel: 'Spavaće Sobe',
      location: 'Banja Luka — Paprikovac',
      year: '2026',
      dimensions: 'Krevet 200x180cm, uzglavlje 2.80m širina',
      materials: 'Luksuzni plišani štof, furnirani orah paneli, mat crni noćni ormarići',
      hardware: 'Blum skriveni klizači sa integrisanim usporivačima, ojačana konstrukcija kreveta',
      lighting: 'Integrisano indirektno osvjetljenje uzglavlja',
      image: 'images/spavacasoba.jpg',
      description: 'Privatna oaza mira. Tapacirano uzglavlje do samog plafona pruža vrhunsku zvučnu i toplotnu izolaciju, dok lebdeće noćne konzole upotpunjuju savremeni izgled.',
      heroIndex: null
    },
    {
      id: 'spavaca-djecija-most',
      title: 'Modularna Soba sa Most-Ormarom i Lučnim Panelima',
      category: 'dnevni-boravak',
      categoryLabel: 'Spavaće Sobe',
      location: 'Banja Luka — Lazarevo',
      year: '2026',
      dimensions: '3.50m širina zida',
      materials: 'Lakirani MDF kašmir ton, prirodni hrast dekor, plišani lučni paneli',
      hardware: 'Meki usporivači vrata, integrisane ladice u bazi ležaja',
      lighting: 'LED rasvjeta ugrađena u most iznad ležaja i otvorene police',
      image: 'images/kompletspavaca.jpg',
      description: 'Genijalno iskorištenje vertikalnog prostora. Most ormar nudi ogroman kapacitet za skladištenje garderobe i posteljine, a lučno tapacirani paneli unose mekoću i udobnost.',
      heroIndex: null
    },
    {
      id: 'plakar-bronza-stopsol',
      title: 'Vitrina i Garderober sa Stopsol Staklom i Rasvjetom',
      category: 'plakari',
      categoryLabel: 'Plakari & Garderoberi',
      location: 'Banja Luka — Borik',
      year: '2026',
      dimensions: '3.60m x 2.70m',
      materials: 'Bronzani eloksirani aluminijumski profili, kaljeno tonirano stopsol staklo, tamni orah laminat',
      hardware: 'Skrivene šarke sa integrisanim usporivačima, namjenski pregradni elementi za vinske flaše i aksesoare',
      lighting: 'Vertikalne LED trake 3000K cijelom visinom staklenih korpusa',
      image: 'images/plakar.jpg',
      description: 'Vrhunac savremene elegancije. Kada je rasvjeta ugašena, stopsol staklo djeluje kao ogledalo; kada se upali, otkriva se prefinjena unutrašnjost sa drvenim policama i vinskim pretincima.',
      heroIndex: null
    },
    {
      id: 'plakar-hodnik-ogledalo-fluted',
      title: 'Ugradni Plakar sa Rebrastim Panelima i Ogledalom',
      category: 'plakari',
      categoryLabel: 'Plakari & Predsoblja',
      location: 'Banja Luka — Bulevar Stepe Stepanovića',
      year: '2026',
      dimensions: '2.60m x 2.80m (od poda do plafona)',
      materials: 'Rebrasti (fluted) lakirani medijapan, tonirana ogledala sa bronzanim ramom, unutrašnjost u tekstilnom dekoru',
      hardware: 'Hettich klizni sistemi vrhunske nosivosti, izvlačne vješalice',
      lighting: 'Senzorsko automatsko osvjetljenje unutrašnjosti pri otvaranju',
      image: 'images/hodnik.jpg',
      description: 'Predsoblje koje ostavlja snažan prvi utisak. Rebrasti reljefni paneli daju dinamičnu teksturu, a velika ogledala vizuelno udvostručuju hodnik i unose svjetlost.',
      heroIndex: null
    },
    {
      id: 'plakar-master-suite-prolaz',
      title: 'Zidna Obloga sa Ogledalom i Prolazom u Garderober',
      category: 'plakari',
      categoryLabel: 'Plakari & Garderoberi',
      location: 'Banja Luka — Centar',
      year: '2025',
      dimensions: 'Cjelokupan hodnik i garderobna soba',
      materials: 'Antracit rebrasti paneli, visoko reflektujuće ogledalo od poda do plafona, stakleni garderoberi',
      hardware: 'Skriveni mehanizmi za integrisana sobna vrata u ravni sa zidom',
      lighting: 'Linearna stropna magnetna rasvjeta i skrivena LED svjetla iza lamela',
      image: 'images/plakar (2).jpg',
      description: 'Arhitektonski osmišljen ulaz u master zonu. Crne lamele uokviruju centralno ogledalo i vode pogled ka prostranom garderoberu sa staklenim frontovima.',
      heroIndex: null
    },
    {
      id: 'hodnik-vinski-bar-police',
      title: 'Vinski Bar i Osvijetljene Otvorene Police',
      category: 'plakari',
      categoryLabel: 'Enterijeri & Predsoblja',
      location: 'Banja Luka — Nova Varoš',
      year: '2026',
      dimensions: '2.20m x 2.60m',
      materials: 'Prirodni furnir hrasta, lakirani bijeli MDF, ugradna rashladna vinska vitrina',
      hardware: 'Integrisani vinski stalci i nosači za čaše, meko zatvaranje',
      lighting: 'Kaskadna LED rasvjeta svake police koja stvara topao ambijent',
      image: 'images/hodniik.jpg',
      description: 'Višenamjenski element koji spaja predsoblje, kuhinju i dnevni boravak. Služi kao vinski kutak sa rashladnom vitrinom i dekorativna biblioteka sa toplim svjetlom.',
      heroIndex: null
    },
    {
      id: 'kupatilo-orah-kvarc',
      title: 'Kupatilski Blok sa Kvarcom i Osvijetljenim Ogledalom',
      category: 'kupatila',
      categoryLabel: 'Kupatilski Namještaj',
      location: 'Banja Luka — Centar',
      year: '2026',
      dimensions: '1.40m širina',
      materials: 'Vlagootporni medijapan obložen hrastovim furnirom, Calacatta kvarc ploča, stopsol ogledalo',
      hardware: 'Blum Legrabox sa usporivačima za vlažne prostore, crni Gola profil',
      lighting: 'Vertikalne integrisane LED trake u ormariću sa ogledalom i osvijetljene niše',
      image: 'images/kušatilo.jpg',
      description: 'Kupatilo koje odiše hotelskim luksuzom. Otpornost na vlagu osigurana je najkvalitetnijim lakovima i kvarcom, dok ugradni ormarić sa ogledalom pruža obilan prostor za kozmetiku.',
      heroIndex: null
    },
    {
      id: 'kupatilo-toaletni-sto-ogledalo',
      title: 'Lebdeći Toaletni Sto sa Polukružnim LED Ogledalom',
      category: 'kupatila',
      categoryLabel: 'Kupatilski Namještaj',
      location: 'Banja Luka — Mejdan',
      year: '2025',
      dimensions: '1.60m širina konzole',
      materials: 'Lakirani medijapan visoki sjaj, polukružno ogledalo po mjeri, otvoreni regal sa staklom',
      hardware: 'Skriveni nosači za viseće elemente visoke nosivosti, push-to-open fioke',
      lighting: 'Zadnja halo LED rasvjeta oko luka ogledala i police',
      image: 'images/ogledalo.jpg',
      description: 'Prefinjen kutak za uljepšavanje. Lebdeća konzola sa plitkim fiokama i dramatično polukružno ogledalo sa pozadinskim svjetlom stvaraju spektakularan vizuelni efekat.',
      heroIndex: null
    },
    {
      id: 'enterijer-stepeniste-hrast',
      title: 'Obloga Stepeništa Masivom Hrastovine i Pregradne Letvice',
      category: 'poslovni',
      categoryLabel: 'Enterijeri & Masiv',
      location: 'Banja Luka — Trapisti',
      year: '2025',
      dimensions: '18 gazišta sa podestom i skrivenim ormarima',
      materials: 'Masivna hrastovina prve klase sa mat lakom, podstepenišni ormari od lakiranog MDF-a',
      hardware: 'Integrisana skrivena vrata ispod stepeništa sa push otvaranjem',
      lighting: 'Prirodno svjetlo sa krovnog prozora uz mogućnost ugradnje LED rasvjete u gazišta',
      image: 'images/stepke.jpg',
      description: 'Majstorsko oblaganje betonskog stepeništa sušenom hrastovinom. Prostor ispod stepeništa u potpunosti je pretvoren u ugradne garderobne ormare, a vertikalne letvice služe kao sigurna i atraktivna ograda.',
      heroIndex: null
    },
    {
      id: 'trpezarija-vitrina-okrugli-sto',
      title: 'Okrugli Trpezarijski Sto i Zidni Sistem sa Vitrinama',
      category: 'poslovni',
      categoryLabel: 'Trpezarije & Enterijeri',
      location: 'Banja Luka — Nova Varoš',
      year: '2026',
      dimensions: 'Sto prečnik 130cm, vitrina 3.20m x 2.60m',
      materials: 'Masivni hrast (ploča stola), lakirani MDF, staklene police sa tankim crnim ramovima',
      hardware: 'Blum meko zatvaranje, staklene šarke sa usporivačima',
      lighting: 'Vertikalno toplo svjetlo unutar staklenih vitrina i centralna visilica',
      image: 'images/trpezarija.jpg',
      description: 'Topao ambijent za porodična okupljanja. Unikatan okrugli sto od punog drveta upotpunjen je prostranim zidnim elementima koji nude zatvoreno skladištenje i otvorene izložbene staklene vitrine.',
      heroIndex: null
    }
  ];

  /* ==========================================================================
     IMAGE RESILIENCE & FALLBACK GENERATOR
     ========================================================================== */
  function getFallbackSvg(title, categoryLabel) {
    return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800"><rect width="1200" height="800" fill="%231a1b20"/><defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="%23ffffff" stroke-width="0.5" stroke-opacity="0.08"/></pattern></defs><rect width="1200" height="800" fill="url(%23grid)"/><line x1="100" y1="700" x2="1100" y2="700" stroke="%23e22128" stroke-width="4"/><text x="100" y="380" fill="%23e22128" font-family="monospace" font-size="20" letter-spacing="4">MB PROJEKT // ${encodeURIComponent(categoryLabel || 'NAMJEŠTAJ PO MJERI')}</text><text x="100" y="440" fill="%23ffffff" font-family="sans-serif" font-size="38" font-weight="bold">${encodeURIComponent(title || 'Banja Luka Realizacija')}</text><text x="100" y="480" fill="%239a9ea9" font-family="monospace" font-size="18">Bulevar vojvode Stepe Stepanovića 124, Banja Luka</text></svg>`;
  }

  /* ==========================================================================
     2. CREATIVE HERO MULTI-PROJECT SHOWCASE (WOW FACTOR)
     ========================================================================== */
  const heroProjects = projectsData.filter(p => p.heroIndex !== null);
  let currentHeroIdx = 0;
  let heroAutoPlayInterval = null;

  const heroViewportBg = document.getElementById('heroViewportBg');
  const heroCategoryEl = document.getElementById('heroCategory');
  const heroTitleEl = document.getElementById('heroTitle');
  const heroLocationEl = document.getElementById('heroLocation');
  const heroDimensionsEl = document.getElementById('heroDimensions');
  const heroMaterialsEl = document.getElementById('heroMaterials');
  const heroCounterEl = document.getElementById('heroCounter');
  const heroDeckContainer = document.getElementById('heroDeckContainer');
  const heroPrevBtn = document.getElementById('heroPrevBtn');
  const heroNextBtn = document.getElementById('heroNextBtn');
  const heroDetailBtn = document.getElementById('heroDetailBtn');

  // Render the side deck of project cards in the hero
  function renderHeroDeck() {
    if (!heroDeckContainer) return;
    heroDeckContainer.innerHTML = '';

    heroProjects.forEach((proj, idx) => {
      const card = document.createElement('div');
      card.className = `deck-item ${idx === currentHeroIdx ? 'active' : ''}`;
      card.setAttribute('data-index', idx);
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.setAttribute('aria-label', `Odaberi projekat: ${proj.title}`);

      card.innerHTML = `
        <div class="deck-thumb">
          <img src="${proj.image}" alt="${proj.title}" loading="lazy" onerror="this.onerror=null;this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'100\\' height=\\'100\\' viewBox=\\'0 0 100 100\\'><rect width=\\'100\\' height=\\'100\\' fill=\\'%231a1b20\\'/><text x=\\'50%\\' y=\\'55%\\' fill=\\'%23e22128\\' font-family=\\'monospace\\' font-size=\\'12\\' text-anchor=\\'middle\\'>MB PROJEKT</text></svg>'">
        </div>
        <div class="deck-meta">
          <span class="deck-num">${proj.heroIndex} / 05 — ${proj.categoryLabel}</span>
          <h3 class="deck-title">${proj.title}</h3>
          <span class="deck-sub">${proj.location}</span>
        </div>
        <div class="deck-arrow" aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </div>
      `;

      card.addEventListener('click', () => {
        setHeroProject(idx);
        restartHeroAutoPlay();
      });

      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setHeroProject(idx);
          restartHeroAutoPlay();
        }
      });

      heroDeckContainer.appendChild(card);
    });
  }

  // Switch hero active project
  function setHeroProject(index) {
    if (index < 0) index = heroProjects.length - 1;
    if (index >= heroProjects.length) index = 0;
    currentHeroIdx = index;

    const proj = heroProjects[currentHeroIdx];

    // Smooth image transition without blank flash
    if (heroViewportBg) {
      heroViewportBg.style.opacity = '0.35';
      heroViewportBg.onerror = function() {
        this.onerror = null;
        this.src = getFallbackSvg(proj.title, proj.categoryLabel);
      };
      setTimeout(() => {
        heroViewportBg.src = proj.image;
        heroViewportBg.alt = proj.title;
        heroViewportBg.style.opacity = '1';
      }, 120);
    }

    if (heroCategoryEl) heroCategoryEl.textContent = `${proj.heroIndex} // ${proj.categoryLabel}`;
    if (heroTitleEl) heroTitleEl.textContent = proj.title;
    if (heroLocationEl) heroLocationEl.textContent = proj.location;
    if (heroDimensionsEl) heroDimensionsEl.textContent = proj.dimensions;
    if (heroMaterialsEl) heroMaterialsEl.textContent = proj.materials;
    if (heroCounterEl) heroCounterEl.textContent = `${proj.heroIndex} / 05`;

    // Update active class in desktop side deck
    const deckItems = heroDeckContainer?.querySelectorAll('.deck-item');
    deckItems?.forEach((item, idx) => {
      item.classList.toggle('active', idx === currentHeroIdx);
    });

    // Update active class on mobile pagination pills
    const pillBtns = document.querySelectorAll('.hero-pill-btn');
    pillBtns.forEach((btn, idx) => {
      btn.classList.toggle('active', idx === currentHeroIdx);
    });
  }

  function nextHeroProject() {
    setHeroProject(currentHeroIdx + 1);
  }

  function prevHeroProject() {
    setHeroProject(currentHeroIdx - 1);
  }

  function startHeroAutoPlay() {
    stopHeroAutoPlay();
    heroAutoPlayInterval = setInterval(nextHeroProject, 6500);
  }

  function stopHeroAutoPlay() {
    if (heroAutoPlayInterval) {
      clearInterval(heroAutoPlayInterval);
      heroAutoPlayInterval = null;
    }
  }

  function restartHeroAutoPlay() {
    stopHeroAutoPlay();
    startHeroAutoPlay();
  }

  // Hero Controls Event Listeners
  if (heroNextBtn) {
    heroNextBtn.addEventListener('click', () => {
      nextHeroProject();
      restartHeroAutoPlay();
    });
  }

  if (heroPrevBtn) {
    heroPrevBtn.addEventListener('click', () => {
      prevHeroProject();
      restartHeroAutoPlay();
    });
  }

  if (heroDetailBtn) {
    heroDetailBtn.addEventListener('click', () => {
      const activeProj = heroProjects[currentHeroIdx];
      openProjectModal(activeProj.id);
    });
  }

  // Pagination pill indicators click handlers
  const heroPillBtns = document.querySelectorAll('.hero-pill-btn');
  heroPillBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-index'), 10);
      if (!isNaN(idx)) {
        setHeroProject(idx);
        restartHeroAutoPlay();
      }
    });
  });

  // Preload all 5 hero images in cache for instant transitions
  heroProjects.forEach(proj => {
    const preload = new Image();
    preload.src = proj.image;
  });

  // Mobile Touch Swipe Handling on Hero Card
  const heroViewportCard = document.getElementById('heroViewportCard');
  let touchStartX = 0;
  let touchStartY = 0;

  if (heroViewportCard) {
    heroViewportCard.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].clientX;
      touchStartY = e.changedTouches[0].clientY;
      stopHeroAutoPlay();
    }, { passive: true });

    heroViewportCard.addEventListener('touchend', (e) => {
      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;
      const diffX = touchEndX - touchStartX;
      const diffY = touchEndY - touchStartY;

      // Check if horizontal swipe is significant and dominant
      if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX < 0) {
          nextHeroProject(); // Swiped left -> next project
        } else {
          prevHeroProject(); // Swiped right -> prev project
        }
      }
      startHeroAutoPlay();
    }, { passive: true });
  }

  // Pause on hover over hero stage
  const heroStage = document.getElementById('heroStage');
  if (heroStage) {
    heroStage.addEventListener('mouseenter', stopHeroAutoPlay);
    heroStage.addEventListener('mouseleave', startHeroAutoPlay);

    // Smart Autoplay: Only run autoplay when the hero is actually in view!
    // Never hijack scroll or animate when the user has scrolled down.
    if ('IntersectionObserver' in window) {
      const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            startHeroAutoPlay();
          } else {
            stopHeroAutoPlay();
          }
        });
      }, { threshold: 0.15 });
      heroObserver.observe(heroStage);
    }
  }

  // Keyboard navigation for hero
  window.addEventListener('keydown', (e) => {
    // Only if not in an input
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName)) return;
    if (e.key === 'ArrowRight') {
      nextHeroProject();
      restartHeroAutoPlay();
    } else if (e.key === 'ArrowLeft') {
      prevHeroProject();
      restartHeroAutoPlay();
    }
  });

  // Init Hero
  renderHeroDeck();
  setHeroProject(0);
  startHeroAutoPlay();

  /* ==========================================================================
     3. PORTFOLIO GRID & CATEGORY FILTERING ("NAŠI RADOVI")
     ========================================================================== */
  const portfolioGrid = document.getElementById('portfolioGrid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioActions = document.getElementById('portfolioActions');
  const portfolioToggleBtn = document.getElementById('portfolioToggleBtn');
  const portfolioToggleText = document.getElementById('portfolioToggleText');
  const portfolioToggleIcon = document.getElementById('portfolioToggleIcon');

  let currentCategory = 'all';
  let isAllExpanded = false;
  const PORTFOLIO_INITIAL_LIMIT = 6;

  function renderPortfolio(category = 'all') {
    if (!portfolioGrid) return;
    portfolioGrid.innerHTML = '';
    currentCategory = category;

    const filtered = category === 'all' 
      ? projectsData 
      : projectsData.filter(p => p.category === category);

    // If 'all', limit to initial 6 cards unless expanded
    const shouldLimit = category === 'all' && !isAllExpanded && filtered.length > PORTFOLIO_INITIAL_LIMIT;
    const itemsToRender = shouldLimit ? filtered.slice(0, PORTFOLIO_INITIAL_LIMIT) : filtered;

    itemsToRender.forEach(proj => {
      const card = document.createElement('article');
      card.className = 'project-card';
      card.setAttribute('data-id', proj.id);
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', `Pregledaj detalje projekta: ${proj.title}`);

      card.innerHTML = `
        <div class="project-card-media">
          <img src="${proj.image}" alt="${proj.title}" loading="lazy" onerror="this.onerror=null;this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'600\\' height=\\'400\\' viewBox=\\'0 0 600 400\\'><rect width=\\'600\\' height=\\'400\\' fill=\\'%231a1b20\\'/><text x=\\'50%\\' y=\\'50%\\' fill=\\'%23e22128\\' font-family=\\'monospace\\' font-size=\\'18\\' font-weight=\\'bold\\' text-anchor=\\'middle\\'>MB PROJEKT</text><text x=\\'50%\\' y=\\'60%\\' fill=\\'%239a9ea9\\' font-family=\\'sans-serif\\' font-size=\\'14\\' text-anchor=\\'middle\\'>Banja Luka</text></svg>'">
          <span class="project-badge-type">${proj.categoryLabel}</span>
        </div>
        <div class="project-card-body">
          <div class="project-meta-top">
            <span>${proj.location}</span>
            <span>${proj.year}</span>
          </div>
          <h3 class="project-card-title">${proj.title}</h3>
          <p class="project-materials-snippet">${proj.materials}</p>
          <div class="project-card-footer">
            <span>Detalji & Specifikacije <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></span>
            <small class="font-mono text-muted">${proj.dimensions}</small>
          </div>
        </div>
      `;

      card.addEventListener('click', () => openProjectModal(proj.id));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openProjectModal(proj.id);
        }
      });

      portfolioGrid.appendChild(card);
    });

    // Update toggle button state & visibility
    if (portfolioActions) {
      if (category === 'all' && filtered.length > PORTFOLIO_INITIAL_LIMIT) {
        portfolioActions.style.display = 'flex';
        if (portfolioToggleText) {
          portfolioToggleText.textContent = isAllExpanded 
            ? 'Prikaži Manje Realizacija' 
            : `Pogledajte Sve Realizacije (${filtered.length})`;
        }
        if (portfolioToggleIcon) {
          portfolioToggleIcon.style.transform = isAllExpanded ? 'rotate(180deg)' : 'rotate(0deg)';
        }
      } else {
        portfolioActions.style.display = 'none';
      }
    }
  }

  if (portfolioToggleBtn) {
    portfolioToggleBtn.addEventListener('click', () => {
      isAllExpanded = !isAllExpanded;
      renderPortfolio(currentCategory);
      if (!isAllExpanded) {
        const radoviSection = document.getElementById('radovi');
        if (radoviSection) radoviSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter') || 'all';
      isAllExpanded = false;
      renderPortfolio(cat);
    });
  });

  // Initial render of portfolio
  renderPortfolio('all');

  /* ==========================================================================
     4. INTERACTIVE PROJECT DETAILS MODAL
     ========================================================================== */
  const modalBackdrop = document.getElementById('projectModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalImage = document.getElementById('modalImage');
  const modalCategory = document.getElementById('modalCategory');
  const modalTitle = document.getElementById('modalTitle');
  const modalLocation = document.getElementById('modalLocation');
  const modalYear = document.getElementById('modalYear');
  const modalDimensions = document.getElementById('modalDimensions');
  const modalDesc = document.getElementById('modalDesc');
  const modalMaterials = document.getElementById('modalMaterials');
  const modalHardware = document.getElementById('modalHardware');
  const modalLighting = document.getElementById('modalLighting');
  const modalInquiryBtn = document.getElementById('modalInquiryBtn');

  function openProjectModal(projectId) {
    const proj = projectsData.find(p => p.id === projectId);
    if (!proj || !modalBackdrop) return;

    if (modalImage) {
      modalImage.src = proj.image;
      modalImage.alt = proj.title;
    }
    if (modalCategory) modalCategory.textContent = proj.categoryLabel;
    if (modalTitle) modalTitle.textContent = proj.title;
    if (modalLocation) modalLocation.textContent = proj.location;
    if (modalYear) modalYear.textContent = proj.year;
    if (modalDimensions) modalDimensions.textContent = proj.dimensions;
    if (modalDesc) modalDesc.textContent = proj.description;
    if (modalMaterials) modalMaterials.textContent = proj.materials;
    if (modalHardware) modalHardware.textContent = proj.hardware;
    if (modalLighting) modalLighting.textContent = proj.lighting;

    // Action button that scrolls down and preselects project type
    if (modalInquiryBtn) {
      modalInquiryBtn.onclick = () => {
        closeProjectModal();
        const contactSection = document.getElementById('kontakt');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
          const typeSelect = document.getElementById('contactServiceSelect');
          if (typeSelect) {
            typeSelect.value = proj.category;
          }
          const messageBox = document.getElementById('contactMessage');
          if (messageBox) {
            messageBox.value = `Zainteresovan/a sam za izradu namještaja u stilu projekta "${proj.title}" (${proj.location}). Molim vas za okvirne informacije i termin konsultacija u vašem salonu u Banja Luci.`;
          }
        }
      };
    }

    modalBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModal() {
    if (!modalBackdrop) return;
    modalBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProjectModal);
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeProjectModal();
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop?.classList.contains('open')) {
      closeProjectModal();
    }
  });

  /* ==========================================================================
     5. MOVING ROAD TESTIMONIALS CAROUSEL ("PUT POVJERENJA")
     ========================================================================== */
  const testimonialsData = [
    {
      id: 1,
      name: 'Sanja Milićević',
      location: 'Banja Luka — Nova Varoš',
      initials: 'SM',
      project: 'Kuhinja po mjeri (MDF)',
      rating: 5,
      verified: true,
      quote: 'Kuhinja od mat lakiranog medijapana sa Blum Aventos sistemima je premašila sva naša očekivanja. Majstori su stigli u minut tačno, zaštitili parket i za dan i po besprijekorno završili montažu. Svaka preporuka za MB Projekt tim!'
    },
    {
      id: 2,
      name: 'Dragan Kovačević',
      location: 'Banja Luka — Centar',
      initials: 'DK',
      project: 'Kompletan stan & TV zid',
      rating: 5,
      verified: true,
      quote: 'Opremanje stana od 85m² prošlo je bez ijednog stresa. 3D vizuelizacija u njihovom salonu u Stepe Stepanovića nam je riješila sve dileme oko dekora. Kvalitet izrade i drvnih spojeva je na nivou italijanskih luksuznih brendova.'
    },
    {
      id: 3,
      name: 'Jelena Babić',
      location: 'Banja Luka — Borik',
      initials: 'JB',
      project: 'Walk-in garderober',
      rating: 5,
      verified: true,
      quote: 'Walk-in garderober sa zatamnjenim stopsol staklom i ugrađenom senzorskom LED rasvjetom izgleda nestvarno dobro u našem prostoru. Sve police i pregrade su prilagođene našim stvarima. Hvala na strpljenju i savjetima!'
    },
    {
      id: 4,
      name: 'Stefan i Milica Tešanović',
      location: 'Banja Luka — Starčevica',
      initials: 'ST',
      project: 'Kuhinja & Dnevni boravak',
      rating: 5,
      verified: true,
      quote: 'Nakon obilaska više salona u Banjoj Luci, odabrali smo MB Projekt zbog profesionalnog pristupa i jasnih rokova. Kuhinja sa skrivenom ostavom uklopljena je u milimetar, bez ijedne pukotine ili greške. Vrhunski majstori!'
    },
    {
      id: 5,
      name: 'Nemanja Vasić',
      location: 'Banja Luka — Aleja Svetog Save',
      initials: 'NV',
      project: 'Poslovni prostor & Recepcija',
      rating: 5,
      verified: true,
      quote: 'Prijemni pult zakrivljene geometrije i modularne radne stanice u našoj firmi izazivaju divljenje svih posjetilaca. Rokovi isporuke su ispoštovani do zadnjeg dana, što je danas u građevinarstvu prava rijetkost.'
    },
    {
      id: 6,
      name: 'Maja Trivić',
      location: 'Banja Luka — Rosulje',
      initials: 'MT',
      project: 'Spavaća soba & Paneli',
      rating: 5,
      verified: true,
      quote: 'Tapacirani zidni panel sa lebdećim noćnim ormarićima u furniru hrasta pretvorio je spavaću sobu u hotelski apartman sa 5 zvjezdica. Izuzetna preciznost u detaljima i završnoj obradi.'
    },
    {
      id: 7,
      name: 'Bojan Lukić',
      location: 'Banja Luka — Mejdan',
      initials: 'BL',
      project: 'Kupatilo & Plakari',
      rating: 5,
      verified: true,
      quote: 'Vlagootporni medijapan u maslinastom tonu za kupatilo i ugradni plakar od poda do plafona u hodniku. Poliuretanski PUR kant spojevi su nevidljivi i potpuno zaptiveni. Vrijedi svakog ugovorenog feninga.'
    },
    {
      id: 8,
      name: 'Igor Radanović',
      location: 'Banja Luka — Bulevar Stepe Stepanovića',
      initials: 'IR',
      project: 'Kuhinja sa ostrvom',
      rating: 5,
      verified: true,
      quote: 'Komšije smo na Bulevaru i drago mi je što sam posao povjerio timu koji posjeduje sopstveni proizvodni CNC pogon. Kompakt radna ploča i ugradni aparati legli su kao nacrtani. Čista desetka za MB Projekt!'
    }
  ];

  function initRoadTestimonials() {
    const roadTrack = document.getElementById('roadTrack');
    const roadMarquee = document.getElementById('roadMarquee');
    if (!roadTrack) return;

    roadTrack.innerHTML = '';

    // Duplicate testimonials for continuous, seamless infinite scrolling (as in cooltestemonials)
    const loopItems = [...testimonialsData, ...testimonialsData];

    loopItems.forEach((item, index) => {
      const card = document.createElement('div');
      card.className = 'road-card';
      card.setAttribute('data-id', item.id);
      card.setAttribute('data-loop-index', index);

      card.innerHTML = `
        <div class="road-card-top">
          <div class="road-stars" aria-label="Ocjena: 5 zvjezdica">★★★★★</div>
          <span class="road-verified-badge">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            Provjerena montaža
          </span>
        </div>
        <p class="road-quote">“${item.quote}”</p>
        <div class="road-client-row">
          <div class="road-client-left">
            <div class="road-avatar">${item.initials}</div>
            <div class="road-client-info">
              <h5>${item.name}</h5>
              <span>${item.location}</span>
            </div>
          </div>
          <span class="road-tag-pill">${item.project}</span>
        </div>
      `;

      roadTrack.appendChild(card);
    });

    // Interactive Dragging and Touch scrubbing / Pausing on the Imaginary Road
    if (roadMarquee) {
      let isPointerDown = false;
      let startX = 0;
      let scrollLeft = 0;

      // Mouse drag controls
      roadMarquee.addEventListener('mousedown', (e) => {
        isPointerDown = true;
        roadMarquee.classList.add('paused');
        startX = e.pageX - roadMarquee.offsetLeft;
        scrollLeft = roadMarquee.scrollLeft;
      });

      window.addEventListener('mouseup', () => {
        if (isPointerDown) {
          isPointerDown = false;
          roadMarquee.classList.remove('paused');
        }
      });

      roadMarquee.addEventListener('mousemove', (e) => {
        if (!isPointerDown) return;
        e.preventDefault();
        const x = e.pageX - roadMarquee.offsetLeft;
        const walk = (x - startX) * 1.5;
        roadMarquee.scrollLeft = scrollLeft - walk;
      });

      // Mobile Touch events
      roadMarquee.addEventListener('touchstart', () => {
        roadMarquee.classList.add('paused');
      }, { passive: true });

      roadMarquee.addEventListener('touchend', () => {
        roadMarquee.classList.remove('paused');
      }, { passive: true });
    }
  }

  // Initialize the road testimonials
  initRoadTestimonials();

  /* ==========================================================================
     6. FAQ ACCORDION
     ========================================================================== */
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (!questionBtn) return;
    questionBtn.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');
      faqItems.forEach(other => other.classList.remove('active'));
      if (!isOpen) {
        item.classList.add('active');
      }
    });
  });

  /* ==========================================================================
     7. MOBILE NAVIGATION & DRAWER
     ========================================================================== */
  const mobileToggle = document.getElementById('mobileNavToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileToggle && mobileDrawer) {
    const lockScroll = (lock) => {
      document.body.style.overflow = lock ? 'hidden' : '';
      document.documentElement.style.overflow = lock ? 'hidden' : '';
    };

    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('open');
      mobileToggle.classList.toggle('active', isOpen);
      lockScroll(isOpen);
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileToggle.classList.remove('active');
        lockScroll(false);
      });
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 900 && mobileDrawer.classList.contains('open')) {
        mobileDrawer.classList.remove('open');
        mobileToggle.classList.remove('active');
        lockScroll(false);
      }
    });
  }

  /* ==========================================================================
     8. STICKY HEADER ON SCROLL
     ========================================================================== */
  const mainHeader = document.getElementById('mainHeader');
  window.addEventListener('scroll', () => {
    if (!mainHeader) return;
    if (window.scrollY > 40) {
      mainHeader.classList.add('scrolled');
    } else {
      mainHeader.classList.remove('scrolled');
    }
  });

  /* ==========================================================================
     9. CONTACT FORM VALIDATION & FEEDBACK TOAST
     ========================================================================== */
  const contactForm = document.getElementById('contactForm');
  const toastNotice = document.getElementById('toastNotice');
  const toastMessage = document.getElementById('toastMessage');

  function showToast(msg) {
    if (!toastNotice) return;
    if (toastMessage) toastMessage.textContent = msg;
    toastNotice.classList.add('show');
    setTimeout(() => {
      toastNotice.classList.remove('show');
    }, 4500);
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('contactName');
      const phoneInput = document.getElementById('contactPhone');
      const emailInput = document.getElementById('contactEmail');

      if (!nameInput?.value.trim()) {
        showToast('Molimo vas unesite vaše ime i prezime.');
        nameInput?.focus();
        return;
      }

      if (!phoneInput?.value.trim()) {
        showToast('Molimo vas unesite kontakt telefon.');
        phoneInput?.focus();
        return;
      }

      // Simulate successful sending
      showToast('Hvala vam na ukazanom povjerenju! MB Projekt Banja Luka tim će vas kontaktirati u roku od 24h.');
      contactForm.reset();
    });
  }
});
