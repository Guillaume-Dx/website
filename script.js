// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Language switcher (English / French)
(function () {
  const translations = {
    en: {
      "meta.title": "Lab to Forge",
      "meta.description":
        "Lab to Forge — turning experiments into production-ready tools.",
      "hero.title":
        "From the lab to the forge, where ideas become reality.",
      "hero.text":
        'Lab to Forge is a space for building, testing ideas in the "lab" at a fast pace, shaping the ones that work into solid, dependable tools in the forge. Every project here moves from rough prototype to something real.',
      "footer.rights": "Lab to Forge. All rights reserved.",
      "footer.poweredBy": "Powered by",
      "footer.agentic": "Agentic Workstation",
      "nav.team": "Team",
      "nav.home": "Home",
      "nav2.projects": "Projects",
      "nav2.labnotes": "Lab notes",
      "nav2.team": "The Team",
      "nav2.about": "About",
      "placeholder.forging": "It's forging, the metal is heating up, come back soon.",
      "labnotes.title": "The Lab Notes",
      "labnotes.intro":
        "A journal of experiments, demos, and tricks pulled straight from the workbench — the messy middle between an idea and a finished tool.",
      "labnotes.empty.title": "Nothing forged yet",
      "labnotes.empty.body":
        "The first entries are still cooling in the forge. Check back soon for write-ups on what’s been tried, what broke, and what worked.",
      "team.title": "The Team",
      "team.intro": "A pantheon of agents, each bringing a different grace to the forge.",
      "team.zeus.name": "Zeus",
      "team.zeus.role":
        "Sovereign of the pantheon, commands the gods and keeps the grand design on its course.",
      "team.athena.name": "Athena",
      "team.athena.role":
        "Goddess of craft and strategy, forges ideas into working code with a steady, deliberate hand.",
      "team.aphrodite.name": "Aphrodite",
      "team.aphrodite.role":
        "Keeper of the sacred archive, gathers and arranges the pantheon's knowledge with grace.",
      "team.hermes.name": "Hermes",
      "team.hermes.role":
        "Swift messenger of the gods, roams far and wide to gather intelligence and bring it back to the forge.",
      "team.ares.name": "Ares",
      "team.ares.role":
        "God of war, stands guard over the archive and defends its order with unyielding discipline.",
      "team.artemis.name": "Artemis",
      "team.artemis.role":
        "Huntress of the wild, tracks every flaw with an unerring eye before a work is loosed into the world.",
      "team.demeter.name": "Demeter",
      "team.demeter.role":
        "Goddess of the harvest, tends each work until it ripens and judges it worthy before it is reaped.",
      "team.hephaistos.name": "Hephaistos",
      "team.hephaistos.role":
        "God of the forge, delves deep into the depths to mine knowledge as he once mined ore for his craft.",
      "team.timon.name": "Timon",
      "project.title": "The Projects",
      "project.intro":
        "A forge humming with many works at once, from quiet experiments to tools already carrying real weight.",
      "project.placeholder1": "These projects run on very different platforms, languages and audiences — a public website, a home-automation dashboard, invoicing software, browser extensions, onboarding tooling, a personal knowledge base, and more.",
      "project.placeholder2": "What they share is how they came to be: a human sets the direction, and a small team of Timon agents designs, codes, reviews and documents the result together — moving fast enough to keep up with an idea, careful enough to leave solid, tested, documented work behind.",
      "project.placeholder3": "Pick a project on the left to see its purpose, stack, current status, build timeline, and how Timon's agents helped make it happen.",
      "project.meta.status": "Status",
      "project.meta.agents": "Timon agents involved",
      "project.meta.timeline": "Timeline",
      "project.meta.timonrole": "How Timon helped",
      "project.labtoforge.stack": "HTML · CSS · JavaScript",
      "project.labtoforge.name": "Lab to Forge — Web Site",
      "project.labtoforge.desc":
        "This very showcase site — a static, multi-page site styled around the forge theme, with a lightweight i18n layer for English and French.",
      "project.labtoforge.status": "Active development",
      "project.labtoforge.agents": "5 agents — orchestrator, coder, reviewer, merger, writer",
      "project.labtoforge.timeline1": "Site scaffolded — pages, theme, EN/FR language switcher.",
      "project.labtoforge.timeline2": "Home, Team and Sharing pages written and styled.",
      "project.labtoforge.timeline3": "Projects page added, with lateral navigation and per-project detail views (today).",
      "project.labtoforge.timonrole":
        "Hand-coded page by page in collaboration with Timon, from the initial scaffold to the interactive Projects page you're reading right now.",
      "project.homebase.stack": "Node.js · Web dashboard",
      "project.homebase.name": "Home Base",
      "project.homebase.desc":
        "A smart-home dashboard unifying TaHoma and Fibaro HC3 hubs behind one live, WebSocket-driven view.",
      "project.homebase.status": "Mature, actively maintained",
      "project.homebase.agents": "7 agents — two orchestrators, coder, reviewer, merger, writer, researcher",
      "project.homebase.timeline1": "Project kicked off — first dashboard scaffold and hub connections.",
      "project.homebase.timeline2": "TaHoma and Fibaro integrations wired into a unified live view.",
      "project.homebase.timeline3": "Ongoing refinement through review and merge cycles (today).",
      "project.homebase.timonrole":
        "Built by a dedicated Timon agent team split across backend, frontend, and review Kanban tasks, with continuous iteration since kickoff.",
      "project.comptaca.stack": "Power Platform · Dataverse",
      "project.comptaca.name": "Invoicing App",
      "project.comptaca.desc":
        "A model-driven app on Microsoft Dataverse that generates invoices for a small business's clients.",
      "project.comptaca.status": "Stable, in maintenance mode",
      "project.comptaca.agents": "4 agents — orchestrator, coder, reviewer, writer",
      "project.comptaca.timeline1": "Dataverse solution scaffolded.",
      "project.comptaca.timeline2": "Export/import pipeline wired via the pac CLI.",
      "project.comptaca.timeline3": "Feature-complete and stabilized — no changes since.",
      "project.comptaca.timonrole":
        "Shaped by a Timon agent team driving Power Platform solution exports and imports via the pac CLI.",
      "project.pluginstimon.stack": "Node.js · TypeScript",
      "project.pluginstimon.name": "Plugins Timon",
      "project.pluginstimon.desc":
        "A monorepo of plugins extending Timon itself — including a Kanban roadmap view and a per-agent token usage monitor.",
      "project.pluginstimon.status": "Stable",
      "project.pluginstimon.agents": "6 agents — orchestrator, coder, reviewer, merger, writer, ops",
      "project.pluginstimon.timeline1": "Monorepo set up, first plugin scaffolds.",
      "project.pluginstimon.timeline2": "Kanban roadmap view and token usage monitor built and reviewed.",
      "project.pluginstimon.timeline3": "Merged and documented — stable since.",
      "project.pluginstimon.timonrole":
        "Produced entirely through Timon's own code → review → merge → doc pipeline.",
      "project.onboarding.stack": "Node.js · TypeScript (Timon plugin)",
      "project.onboarding.name": "Project Onboarding",
      "project.onboarding.desc":
        "A wizard plugin that walks a new Timon project from objectives to roadmap, agent team, and a seeded Kanban board.",
      "project.onboarding.status": "Active development",
      "project.onboarding.agents": "5 agents — orchestrator, coder, reviewer, merger, writer",
      "project.onboarding.timeline1": "Scaffold and objective-capture flow.",
      "project.onboarding.timeline2": "Roadmap, agent-team and Kanban-seeding steps implemented.",
      "project.onboarding.timeline3": "Refinement of the staged wizard flow (today).",
      "project.onboarding.timonrole":
        "Built through staged scaffold, feature, and documentation Kanban tasks.",
      "project.secondbrain.stack": "Python · MCP server",
      "project.secondbrain.name": "Second Brain",
      "project.secondbrain.desc":
        "A local hybrid search engine (full-text + embeddings) and MCP server over Obsidian vaults, with mindmap generation and multi-vault support.",
      "project.secondbrain.status": "Dormant, feature-complete",
      "project.secondbrain.agents": "5 agents — orchestrator, coder, reviewer, merger, writer",
      "project.secondbrain.timeline1": "MCP server and search engine scaffolded.",
      "project.secondbrain.timeline2": "Hybrid search (full-text + embeddings) implemented.",
      "project.secondbrain.timeline3": "Mindmap generation and multi-vault support added — last touched.",
      "project.secondbrain.timonrole":
        "Coded and documented by a dedicated Timon agent team.",
      "project.timonbuddy.stack": "Electron · ESP32-S3 firmware",
      "project.timonbuddy.name": "Timon Buddy",
      "project.timonbuddy.desc":
        "A character companion for Timon agents, running as a local desktop app and on dedicated ESP32-S3 touch-AMOLED hardware, fully offline.",
      "project.timonbuddy.status": "Active development",
      "project.timonbuddy.agents": "6 agents — orchestrator, coder, reviewer, merger, writer, researcher",
      "project.timonbuddy.timeline1": "Research phase and hardware/software scaffold.",
      "project.timonbuddy.timeline2": "Desktop app and ESP32-S3 firmware built in parallel.",
      "project.timonbuddy.timeline3": "Pipeline polish and review cycles (today).",
      "project.timonbuddy.timonrole":
        "Delivered through a full research → code → review → merge pipeline across a dedicated agent team.",
      "project.timontour.stack": "Documentation",
      "project.timontour.name": "Timon Tour",
      "project.timontour.desc":
        "A guided, three-track onboarding tour of Timon — beginner, developer, expert — covering agents, missions, Kanban, and the daemon itself.",
      "project.timontour.status": "Stable — single-sprint delivery",
      "project.timontour.agents": "Dedicated coder missions dispatched per track, merged through Kanban review",
      "project.timontour.timeline1": "All three tracks — beginner, developer, expert — written and merged in a single day (last touched).",
      "project.timontour.timonrole":
        "Written page by page by dedicated coder missions per track, merged through Kanban review.",
      "project.wallstreet.stack": "Markdown · CSV reports",
      "project.wallstreet.name": "Wallstreet",
      "project.wallstreet.desc":
        "A standing agent that watches a stock watchlist and turns it into dated reports, summaries, and valuation projections.",
      "project.wallstreet.status": "Dormant since stand-up",
      "project.wallstreet.agents": "6 agents — orchestrator, analyst, coder, reviewer, merger, writer",
      "project.wallstreet.timeline1": "Full pipeline stood up and first watchlist reports generated (last touched).",
      "project.wallstreet.timonrole":
        "Run by a full Timon agent team — orchestrator, analyst, coder, reviewer, merger and writer."
    },
    fr: {
      "meta.title": "Lab to Forge",
      "meta.description":
        "Lab to Forge — transformer les expérimentations en outils prêts pour la production.",
      "hero.title":
        "Du laboratoire à la forge, là où les idées deviennent réalité.",
      "hero.text":
        "Lab to Forge est un espace pour construire et tester des idées dans le « labo » à un rythme soutenu, puis façonner celles qui fonctionnent en outils solides et fiables dans la forge. Chaque projet y passe du prototype brut à quelque chose de concret.",
      "footer.rights": "Lab to Forge. Tous droits réservés.",
      "footer.poweredBy": "Propulsé par",
      "footer.agentic": "Station de travail agentique",
      "nav.team": "Équipe",
      "nav.home": "Accueil",
      "nav2.projects": "Projets",
      "nav2.labnotes": "Notes de labo",
      "nav2.team": "L'équipe",
      "nav2.about": "À propos",
      "placeholder.forging": "Ça forge et le métal chauffe, revenez bientôt.",
      "labnotes.title": "Les Notes de Labo",
      "labnotes.intro":
        "Un journal d’expériences, de démos et d’astuces tout droit sorties de l’atelier — l’entre-deux, souvent désordonné, entre une idée et un outil terminé.",
      "labnotes.empty.title": "Rien n’a encore été forgé",
      "labnotes.empty.body":
        "Les premières notes refroidissent encore dans la forge. Revenez bientôt pour des récits sur ce qui a été testé, ce qui a cassé, et ce qui a marché.",
      "team.title": "L'équipe",
      "team.intro": "Un panthéon d'agents, chacun apportant sa grâce particulière à la forge.",
      "team.zeus.name": "Zeus",
      "team.zeus.role":
        "Souverain du panthéon, il commande aux dieux et maintient le grand dessein sur sa trajectoire.",
      "team.athena.name": "Athéna",
      "team.athena.role":
        "Déesse de l'artisanat et de la stratégie, elle forge les idées en code fonctionnel d'une main sûre et méthodique.",
      "team.aphrodite.name": "Aphrodite",
      "team.aphrodite.role":
        "Gardienne des archives sacrées, elle rassemble et ordonne le savoir du panthéon avec grâce.",
      "team.hermes.name": "Hermès",
      "team.hermes.role":
        "Messager véloce des dieux, il parcourt le monde pour recueillir des renseignements et les rapporter à la forge.",
      "team.ares.name": "Arès",
      "team.ares.role":
        "Dieu de la guerre, il monte la garde devant les archives et en défend l'ordre avec une discipline inflexible.",
      "team.artemis.name": "Artémis",
      "team.artemis.role":
        "Chasseresse des contrées sauvages, elle traque la moindre faille d'un œil infaillible avant qu'une œuvre ne soit livrée au monde.",
      "team.demeter.name": "Déméter",
      "team.demeter.role":
        "Déesse des moissons, elle veille sur chaque œuvre jusqu'à maturité et la juge digne avant la récolte.",
      "team.hephaistos.name": "Héphaïstos",
      "team.hephaistos.role":
        "Dieu de la forge, il plonge au plus profond pour extraire le savoir comme il extrayait jadis le minerai pour son art.",
      "team.timon.name": "Timon",
      "project.title": "Les Projets",
      "project.intro":
        "Une forge qui bourdonne de plusieurs chantiers à la fois, des expérimentations discrètes aux outils qui portent déjà du poids.",
      "project.placeholder1": "Ces projets tournent sur des plateformes, des langages et des publics très différents — un site web public, un tableau de bord domotique, un logiciel de facturation, des extensions de navigateur, des outils d'onboarding, un second cerveau personnel, et plus encore.",
      "project.placeholder2": "Ce qu'ils ont en commun, c'est leur façon de naître : un humain donne le cap, et une petite équipe d'agents Timon conçoit, code, relit et documente le résultat ensemble — assez vite pour suivre une idée, assez soigneusement pour laisser un travail solide, testé et documenté.",
      "project.placeholder3": "Choisissez un projet à gauche pour voir son objectif, sa stack, son état actuel, sa frise de développement, et comment les agents Timon ont aidé à le construire.",
      "project.meta.status": "Statut",
      "project.meta.agents": "Agents Timon impliqués",
      "project.meta.timeline": "Chronologie",
      "project.meta.timonrole": "Comment Timon a aidé",
      "project.labtoforge.stack": "HTML · CSS · JavaScript",
      "project.labtoforge.name": "Lab to Forge — Site Web",
      "project.labtoforge.desc":
        "Ce site vitrine lui-même — un site statique multi-pages à l'habillage forge, avec une couche i18n légère en anglais et en français.",
      "project.labtoforge.status": "Développement actif",
      "project.labtoforge.agents": "5 agents — orchestrateur, codeur, relecteur, fusionneur, rédacteur",
      "project.labtoforge.timeline1": "Ossature du site — pages, thème, sélecteur de langue EN/FR.",
      "project.labtoforge.timeline2": "Pages Accueil, Équipe et Partage rédigées et stylées.",
      "project.labtoforge.timeline3": "Page Projets ajoutée, avec navigation latérale et vues de détail par projet (aujourd'hui).",
      "project.labtoforge.timonrole":
        "Codé page par page en collaboration avec Timon, depuis l'ossature initiale jusqu'à la page Projets interactive que vous lisez en ce moment.",
      "project.homebase.stack": "Node.js · Tableau de bord web",
      "project.homebase.name": "Home Base",
      "project.homebase.desc":
        "Un tableau de bord domotique unifiant les box TaHoma et Fibaro HC3 dans une vue en direct pilotée par WebSocket.",
      "project.homebase.status": "Mature, maintenu activement",
      "project.homebase.agents": "7 agents — deux orchestrateurs, codeur, relecteur, fusionneur, rédacteur, chercheur",
      "project.homebase.timeline1": "Lancement du projet — premier tableau de bord et connexions aux box.",
      "project.homebase.timeline2": "Intégrations TaHoma et Fibaro réunies dans une vue unifiée en direct.",
      "project.homebase.timeline3": "Affinage continu par cycles de revue et de fusion (aujourd'hui).",
      "project.homebase.timonrole":
        "Construit par une équipe d'agents Timon dédiée, répartie entre backend, frontend et revue en tâches Kanban, avec itération continue depuis le lancement.",
      "project.comptaca.stack": "Power Platform · Dataverse",
      "project.comptaca.name": "Application de facturation",
      "project.comptaca.desc":
        "Une application model-driven sur Microsoft Dataverse qui génère les factures des clients d'une petite entreprise.",
      "project.comptaca.status": "Stable, en maintenance",
      "project.comptaca.agents": "4 agents — orchestrateur, codeur, relecteur, rédacteur",
      "project.comptaca.timeline1": "Ossature de la solution Dataverse.",
      "project.comptaca.timeline2": "Pipeline d'export/import construit via le CLI pac.",
      "project.comptaca.timeline3": "Fonctionnellement complète et stabilisée — aucun changement depuis.",
      "project.comptaca.timonrole":
        "Façonnée par une équipe d'agents Timon pilotant les exports et imports de solutions Power Platform via le CLI pac.",
      "project.pluginstimon.stack": "Node.js · TypeScript",
      "project.pluginstimon.name": "Plugins Timon",
      "project.pluginstimon.desc":
        "Un monorepo de plugins qui étendent Timon lui-même — dont une vue de roadmap Kanban et un moniteur d'usage de tokens par agent.",
      "project.pluginstimon.status": "Stable",
      "project.pluginstimon.agents": "6 agents — orchestrateur, codeur, relecteur, fusionneur, rédacteur, ops",
      "project.pluginstimon.timeline1": "Monorepo mis en place, premières ossatures de plugins.",
      "project.pluginstimon.timeline2": "Vue de roadmap Kanban et moniteur d'usage de tokens construits et relus.",
      "project.pluginstimon.timeline3": "Fusionné et documenté — stable depuis.",
      "project.pluginstimon.timonrole":
        "Produit intégralement via le propre pipeline code → revue → merge → doc de Timon.",
      "project.onboarding.stack": "Node.js · TypeScript (plugin Timon)",
      "project.onboarding.name": "Project Onboarding",
      "project.onboarding.desc":
        "Un plugin assistant qui accompagne un nouveau projet Timon depuis ses objectifs jusqu'à sa roadmap, son équipe d'agents et un Kanban amorcé.",
      "project.onboarding.status": "Développement actif",
      "project.onboarding.agents": "5 agents — orchestrateur, codeur, relecteur, fusionneur, rédacteur",
      "project.onboarding.timeline1": "Ossature et flux de capture des objectifs.",
      "project.onboarding.timeline2": "Étapes de roadmap, équipe d'agents et amorçage Kanban implémentées.",
      "project.onboarding.timeline3": "Affinage du flux d'assistant par étapes (aujourd'hui).",
      "project.onboarding.timonrole":
        "Construit via des tâches Kanban successives d'ossature, de fonctionnalités et de documentation.",
      "project.secondbrain.stack": "Python · Serveur MCP",
      "project.secondbrain.name": "Second Brain",
      "project.secondbrain.desc":
        "Un moteur de recherche hybride local (plein texte + embeddings) et un serveur MCP pour des vaults Obsidian, avec génération de mindmaps et support multi-vaults.",
      "project.secondbrain.status": "Dormant, fonctionnellement complet",
      "project.secondbrain.agents": "5 agents — orchestrateur, codeur, relecteur, fusionneur, rédacteur",
      "project.secondbrain.timeline1": "Ossature du serveur MCP et du moteur de recherche.",
      "project.secondbrain.timeline2": "Recherche hybride (plein texte + embeddings) implémentée.",
      "project.secondbrain.timeline3": "Génération de mindmaps et support multi-vaults ajoutés — dernière activité.",
      "project.secondbrain.timonrole":
        "Codé et documenté par une équipe Timon dédiée.",
      "project.timonbuddy.stack": "Electron · Firmware ESP32-S3",
      "project.timonbuddy.name": "Timon Buddy",
      "project.timonbuddy.desc":
        "Un compagnon-personnage pour les agents Timon, tournant en application de bureau locale et sur du matériel dédié ESP32-S3 à écran tactile AMOLED, entièrement hors-ligne.",
      "project.timonbuddy.status": "Développement actif",
      "project.timonbuddy.agents": "6 agents — orchestrateur, codeur, relecteur, fusionneur, rédacteur, chercheur",
      "project.timonbuddy.timeline1": "Phase de recherche et ossature matériel/logiciel.",
      "project.timonbuddy.timeline2": "Application de bureau et firmware ESP32-S3 construits en parallèle.",
      "project.timonbuddy.timeline3": "Peaufinage du pipeline et cycles de revue (aujourd'hui).",
      "project.timonbuddy.timonrole":
        "Livré via un pipeline complet recherche → code → revue → merge par une équipe d'agents dédiée.",
      "project.timontour.stack": "Documentation",
      "project.timontour.name": "Timon Tour",
      "project.timontour.desc":
        "Une visite guidée de Timon en trois parcours — débutant, développeur, expert — couvrant les agents, les missions, le Kanban et le daemon lui-même.",
      "project.timontour.status": "Stable — livré en un seul sprint",
      "project.timontour.agents": "Missions de codage dédiées, dispatchées par parcours, fusionnées via revue Kanban",
      "project.timontour.timeline1": "Les trois parcours — débutant, développeur, expert — rédigés et fusionnés en une seule journée (dernière activité).",
      "project.timontour.timonrole":
        "Écrite page par page par des missions de rédaction dédiées à chaque parcours, fusionnées via revue Kanban.",
      "project.wallstreet.stack": "Markdown · Rapports CSV",
      "project.wallstreet.name": "Wallstreet",
      "project.wallstreet.desc":
        "Un agent permanent qui surveille une watchlist boursière et la transforme en rapports datés, synthèses et projections de valorisation.",
      "project.wallstreet.status": "Dormant depuis sa mise en service",
      "project.wallstreet.agents": "6 agents — orchestrateur, analyste, codeur, relecteur, fusionneur, rédacteur",
      "project.wallstreet.timeline1": "Pipeline complet mis en service et premiers rapports de watchlist générés (dernière activité).",
      "project.wallstreet.timonrole":
        "Animé par une équipe Timon complète — orchestrateur, analyste, codeur, relecteur, fusionneur et rédacteur."
    }
  };

  function applyLanguage(lang) {
    const dict = translations[lang] ? lang : "en";
    const strings = translations[dict];

    document.documentElement.lang = dict;
    document.title = strings["meta.title"];

    const metaDescription = document.querySelector(
      'meta[name="description"]'
    );
    if (metaDescription) {
      metaDescription.setAttribute("content", strings["meta.description"]);
    }

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (strings[key] !== undefined) {
        el.textContent = strings[key];
      }
    });

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === dict);
    });

    try {
      localStorage.setItem("lf-lang", dict);
    } catch (e) {
      /* localStorage unavailable, ignore */
    }

    fitHeroTitle();
  }

  // Shrink the hero title's font-size, if needed, so it always fits on a
  // single line regardless of language, viewport width or zoom level.
  function fitHeroTitle() {
    const title = document.querySelector(".hero h1");
    if (!title) return;

    const container = title.parentElement || title;
    title.style.fontSize = "";

    const maxSize = parseFloat(window.getComputedStyle(title).fontSize);
    const minSize = 10; // px floor so the title never becomes unreadable
    let size = maxSize;

    // clientWidth includes the container's own padding, but that padding is
    // not available space for its children — subtract it so we compare
    // against the title's true available width.
    const containerStyle = window.getComputedStyle(container);
    const horizontalPadding =
      parseFloat(containerStyle.paddingLeft || "0") +
      parseFloat(containerStyle.paddingRight || "0");
    const availableWidth = container.clientWidth - horizontalPadding;

    // Step down until the text fits within its container's available width.
    while (title.scrollWidth > availableWidth && size > minSize) {
      size -= 1;
      title.style.fontSize = size + "px";
    }
  }

  window.addEventListener("resize", () => {
    window.requestAnimationFrame(fitHeroTitle);
  });

  const savedLang = (() => {
    try {
      return localStorage.getItem("lf-lang");
    } catch (e) {
      return null;
    }
  })();

  const browserLang = (navigator.language || "en").slice(0, 2);
  const initialLang = savedLang || (browserLang === "fr" ? "fr" : "en");
  applyLanguage(initialLang);

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
  });
})();

// Projects page: lateral menu switches the visible project detail panel
(function () {
  const menu = document.querySelector(".project-menu");
  if (!menu) return;

  const items = Array.from(menu.querySelectorAll(".project-menu-item"));
  const panels = Array.from(
    document.querySelectorAll(".project-detail [data-project-panel]")
  );
  const placeholder = document.querySelector("[data-project-placeholder]");

  function showProject(key) {
    items.forEach((item) => {
      const active = item.dataset.project === key;
      item.classList.toggle("active", active);
      item.setAttribute("aria-current", active ? "true" : "false");
    });
    panels.forEach((panel) => {
      panel.hidden = panel.dataset.projectPanel !== key;
    });
    if (placeholder) placeholder.hidden = true;
  }

  items.forEach((item) => {
    item.addEventListener("click", () => showProject(item.dataset.project));
  });
})();

// Interactive background: drifting embers and sparks
(function () {
  const canvas = document.getElementById("bg-field");
  if (!canvas || !canvas.getContext) return;

  const ctx = canvas.getContext("2d");
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  let width = 0;
  let height = 0;
  let particles = [];
  let pointerX = null;
  let pointerY = null;

  function randomParticle(spawnAtBottom) {
    return {
      x: Math.random() * width,
      y: spawnAtBottom ? height + Math.random() * 40 : Math.random() * height,
      radius: Math.random() * 2.4 + 0.8,
      speed: Math.random() * 0.5 + 0.18,
      drift: (Math.random() - 0.5) * 0.35,
      flicker: Math.random() * Math.PI * 2,
      // mostly warm forge embers, occasional cool "lab" spark
      color: Math.random() < 0.18 ? "110, 168, 254" : "224, 122, 44"
    };
  }

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    const count = Math.min(140, Math.max(50, Math.floor((width * height) / 9000)));
    particles = Array.from({ length: count }, () => randomParticle(false));
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach((p) => {
      p.y -= p.speed;
      p.x += p.drift;
      p.flicker += 0.04;

      if (pointerX !== null) {
        const dx = p.x - pointerX;
        const dy = p.y - pointerY;
        const dist = Math.hypot(dx, dy);
        if (dist < 120 && dist > 0) {
          const force = (120 - dist) / 120;
          p.x += (dx / dist) * force * 0.6;
          p.y += (dy / dist) * force * 0.6;
        }
      }

      if (p.y < -10) {
        Object.assign(p, randomParticle(true));
      }

      const alpha = 0.5 + Math.sin(p.flicker) * 0.35;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.color}, ${Math.max(alpha, 0.18)})`;
      ctx.shadowColor = `rgba(${p.color}, 0.9)`;
      ctx.shadowBlur = p.radius * 3;
      ctx.fill();
      ctx.shadowBlur = 0;
    });
  }

  function loop() {
    draw();
    requestAnimationFrame(loop);
  }

  window.addEventListener("resize", resize);
  window.addEventListener("pointermove", (event) => {
    pointerX = event.clientX;
    pointerY = event.clientY;
  });
  window.addEventListener("pointerleave", () => {
    pointerX = null;
    pointerY = null;
  });

  resize();

  if (prefersReducedMotion) {
    draw();
  } else {
    loop();
  }
})();
