const categories = ["Tout", "À la une", "Asset Management", "Banque", "Family Office", "Private Markets", "Assurance", "Digital Assets", "Immobilier", "Leaders", "Tech"];

const feed = [
  ["Tech", "Ariane Darmon (HSBC) : demain, notre valeur se mesurera davantage à ce que nous faisons qu’à ce que nous possédons", "L’innovation transforme en profondeur la relation entre finance et société."],
  ["Family Office", "William Pidoux lance GP Family Office, un nouvel acteur de la gestion de fortune", "Une maison indépendante pensée pour accompagner les patrimoines exigeants."],
  ["Leaders", "CNP Luxembourg renforce son dispositif et affirme une stratégie de Place", "Une nouvelle étape pour le développement international du groupe."],
  ["Asset Management", "Charles Rozenstrock : Cimes Asset Management met la performance au cœur de sa nouvelle gamme", "Des solutions responsables au service d’objectifs de long terme."],
  ["Banque", "Indosuez Wealth Management structure son développement EMEA", "La banque privée accélère et investit dans une expertise augmentée."],
  ["Assurance", "Léon Pichon : cinq raisons d’investir dans les infrastructures durables", "Le non-coté s’impose comme une classe d’actifs essentielle."],
];

const mostRead = [
  "En matière d’ETF, stabilité et allocation : retrouver le sens de la durée",
  "Placer cette année dans le non-coté : les thèmes à surveiller",
  "25 heures avec STFG : un rendez-vous attendu de l’écosystème",
  "Indosuez Wealth Management structure son développement EMEA",
  "Family Buy-Out : quand la transmission familiale s’inspire des LBO",
];

const events = [
  ["12 septembre", "Paris", "Asset & Wealth Management Lunch #36"],
  ["24 septembre", "Genève", "Geneva Wealth Day 2026"],
  ["08 octobre", "Luxembourg", "Asset & Wealth Management Lunch Luxembourg"],
  ["17 octobre", "Paris", "Asset & Wealth Management Lunch Green"],
];

function Mark() { return <span className="mark" aria-hidden="true" />; }

function Visual({ variant = 0, large = false }: { variant?: number; large?: boolean }) {
  return <div className={`visual v${variant % 6} ${large ? "visual-large" : ""}`} aria-hidden="true"><span /></div>;
}

function Meta({ light = false }: { light?: boolean }) {
  return <div className={`meta ${light ? "meta-light" : ""}`}><span className="author-dot">HF</span> HubFinance <span>·</span> 3 min</div>;
}

function Header() {
  return <>
    <header className="topbar">
      <div className="nav-shell">
        <a className="logo" href="#top"><Mark /> hub<span>finance</span></a>
        <nav className="main-links" aria-label="Navigation principale">
          <a href="#news">Actualités</a><a href="#analyses">Analyses</a><a href="#events">Événements</a><a href="#community">Communauté</a>
        </nav>
        <a className="cta-small" href="#newsletter">Devenir membre <span>→</span></a>
        <details className="mobile-menu"><summary aria-label="Ouvrir le menu"><i /><i /><i /></summary><div>{["Actualités", "Analyses", "Événements", "Communauté"].map(x => <a key={x} href="#news">{x}</a>)}</div></details>
      </div>
      <div className="ticker"><span>• EN DIRECT</span> Weekly Pulse avec IG France : volatilité, allocation et nouvelles tendances <time>12:26</time></div>
    </header>
    <nav className="category-nav" aria-label="Catégories"><div>{categories.map((x, i) => <a className={i === 0 ? "active" : ""} href="#news" key={x}>{x}</a>)}</div></nav>
  </>;
}

function SmallFeature({ item, variant }: { item: string[]; variant: number }) {
  return <article className="small-feature card"><Visual variant={variant} /><div className="card-body"><span className="tag">{item[0]}</span><h3>{item[1]}</h3><Meta /></div></article>;
}

function Hero() {
  return <section className="container hero" id="top">
    <div className="hero-stack">
      <SmallFeature variant={2} item={["Asset Management", "Exane AM s’élance sur les ETF actifs : une nouvelle manière d’incarner la gestion active en Europe"]} />
      <SmallFeature variant={4} item={["Digital Assets", "Pourquoi le cycle des cryptomonnaies semble fondamentalement différent"]} />
    </div>
    <article className="lead-story"><Visual variant={1} large /><div className="lead-content"><span className="tag tag-teal">Family Office</span><h1>Structuration patrimoniale franco-belge : l’assurance-vie luxembourgeoise comme pont stratégique</h1><p>Comment les experts accompagnent la mobilité croissante des investisseurs et composent avec les nouvelles contraintes réglementaires.</p><Meta light /></div></article>
    <aside className="most-read"><p className="aside-title">Les plus lus <span>↗</span></p>{mostRead.map((x, i) => <article key={x}><b>{String(i + 1).padStart(2, "0")}</b><div><h4>{x}</h4><small>Analyse · 4 min</small></div></article>)}</aside>
  </section>;
}

function Heading({ children, link = "Voir tout" }: { children: React.ReactNode; link?: string }) {
  return <div className="section-heading"><h2><Mark />{children}</h2><a href="#news">{link} <span>→</span></a></div>;
}

function ArticleCard({ data, index }: { data: string[]; index: number }) {
  return <article className="article-card card"><Visual variant={index} /><div className="card-body"><span className="tag">{data[0]}</span><h3>{data[1]}</h3><p>{data[2]}</p><Meta /></div></article>;
}

function NewsGrid() { return <section className="container section" id="news"><Heading link="Toutes les actualités">Le fil</Heading><div className="article-grid">{feed.map((x, i) => <ArticleCard key={x[1]} data={x} index={i} />)}</div></section>; }

function Events() { return <section className="dark-band" id="events"><div className="container"><Heading>Événements</Heading><div className="event-row">{events.map((e, i) => <article className="event-card" key={e[2]}><span className="event-type">{e[1]}</span><time>{e[0]}</time><h3>{e[2]}</h3><p>Une rencontre exclusive entre décideurs et experts de l’investissement.</p><a href="#community">Découvrir l’événement →</a></article>)}</div></div></section>; }

function Insights() {
  const insights = ["Europe : avec cet accord, la gestion privée reprend les initiatives", "Au-delà du patrimoine : ESG ou une vision élargie du risque", "Private Markets : le GPIF redéfinit les allocations", "Concevoir une offre durable sans sacrifier la performance"];
  return <section className="container insights" id="analyses"><div className="insights-head"><h2><span className="round-mark"><Mark /></span> Regards de la rédaction</h2><a href="#news">Dossier du mois →</a></div><div className="insight-grid">{insights.map((x, i) => <article key={x}><Visual variant={i + 1} /><span className="tag">Analyse</span><h3>{x}</h3><small>Par la rédaction · 5 min</small></article>)}</div></section>;
}

function AssetManagement() {
  const related = ["Pioneer FIM : la santé et les actifs alternatifs au cœur de l’immobilier européen de demain", "Rothschild & Co structure sa stratégie responsable par conviction", "Structuration patrimoniale franco-belge : l’assurance-vie comme pont stratégique", "Indosuez Wealth Management se positionne sur les ETF actifs"];
  return <section className="container section asset"><Heading link="Voir la rubrique">Asset Management</Heading><div className="asset-grid"><article className="asset-lead"><Visual variant={5} large /><span className="tag">Analyse</span><h2>Exane AM s’élance sur les ETF actifs : une nouvelle manière d’incarner la gestion active en Europe</h2><p>La maison mise sur la transparence et une lecture renouvelée du risque pour conjuguer innovation, discipline et performance.</p><Meta /></article><div className="related">{related.map((x, i) => <article key={x}><span>{["Immobilier", "Partenariat", "Stratégie", "Opinion"][i]}</span><h3>{x}</h3><small>4 min</small></article>)}</div></div></section>;
}

function Community() { return <section className="dark-band community" id="community"><div className="container"><div className="community-box"><div><span className="eyebrow">HubFinance Intelligence · Données propriétaires</span><h2>La donnée qui fait autorité sur la Place</h2><p>Nos benchmarks exclusifs, nos analyses et nos rencontres donnent aux décideurs les repères nécessaires pour comprendre les marchés et agir.</p><div className="actions"><a className="button primary" href="#newsletter">Explorer les benchmarks</a><a className="button ghost" href="#newsletter">Voir la méthodologie</a></div></div><div className="stats"><div><strong>142</strong><span>Articles & analyses</span></div><div><strong>+18 pts</strong><span>Croissance annuelle</span></div><div><strong>7</strong><span>Événements à venir</span></div><div><strong>12:26</strong><span>Temps moyen</span></div></div></div></div></section>; }

function InfoCards() { return <section className="container info-grid" id="newsletter"><article><span className="info-icon">✦</span><h3>Notre média</h3><p>Une rédaction exigeante au service des professionnels de la gestion et du patrimoine.</p><a href="#top">Découvrir le manifeste →</a></article><article><span className="info-icon">↗</span><h3>Événements</h3><p>Accédez à nos grands rendez-vous et échangez avec celles et ceux qui font le marché.</p><a href="#events">Voir l’agenda →</a></article><article><span className="info-icon">@</span><h3>Newsletter</h3><p>Recevez nos sélections, analyses et décryptages directement dans votre boîte mail.</p><form><label className="sr-only" htmlFor="email">Votre adresse email</label><input id="email" type="email" placeholder="votre@email.com" required /><button aria-label="S'inscrire">OK</button></form><small>Un envoi par semaine. Aucun spam.</small></article></section>; }

function Footer() { return <footer><div className="container footer-grid"><div><a className="logo" href="#top"><Mark /> hub<span>finance</span></a><p>L’actualité stratégique de la gestion, du patrimoine et des marchés pour les décideurs européens.</p></div><div><h4>Explorer</h4><a href="#news">Actualités</a><a href="#analyses">Analyses</a><a href="#events">Événements</a></div><div><h4>Nos univers</h4><a href="#news">Family Office</a><a href="#news">Banque</a><a href="#news">Asset Management</a></div><div><h4>Écosystème</h4><a href="#community">Devenir membre</a><a href="#newsletter">À propos</a><a href="#newsletter">Nous contacter</a></div></div><div className="container legal"><span>© 2026 HubFinance. Tous droits réservés.</span><span>Mentions légales · Confidentialité</span></div></footer>; }

export default function Home() { return <><Header /><main><Hero /><NewsGrid /><Events /><Insights /><AssetManagement /><Community /><InfoCards /></main><Footer /></>; }
