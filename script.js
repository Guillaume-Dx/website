// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Language switcher (English / French)
(function () {
  const translations = {
    en: {
      "meta.title": "Lab to Forge",
      "meta.description":
        "Lab to Forge - turning experiments into production-ready tools.",
      "hero.title":
        "From the lab to the forge, where ideas become reality.",
      "hero.text":
        'Lab to Forge is a space for building and testing ideas in a kind of lab, deliberately aiming for a sustained pace, then making the ones that work robust, reliable, and able to scale in the forge. Every project moves from raw prototyping to a concrete application.',
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
      "project.placeholder1": "These projects run on very different platforms, languages and built for different audiences, a public website, a home-automation dashboard, invoicing software, browser extensions, onboarding tooling, a personal knowledge base, and more.",
      "project.placeholder2": "What they share is how they came to be: a human sets the direction, and a small team of Timon agents designs, codes, reviews and documents the result together - moving fast enough to keep up with an idea, careful enough to leave solid, tested, documented work behind.",
      "project.placeholder3": "Pick a project on the left to see its purpose, stack, current status, build timeline, and how Timon's agents helped make it happen.",
      "project.filter.language": "Language",
      "project.filter.platform": "Platform",
      "project.filter.status": "Status",
      "project.filter.all": "All",
      "project.filter.status.active": "Active",
      "project.filter.status.stable": "Stable",
      "project.filter.status.dormant": "Dormant",
      "project.filter.toggle": "Filters",
      "project.filter.scope": "Scope",
      "project.filter.scope.personal": "Personal",
      "project.filter.scope.professional": "Professional",
      "project.filter.scope.community": "Community",
      "project.meta.status": "Status",
      "project.meta.agents": "Timon agents involved",
      "project.meta.timeline": "Timeline",
      "project.meta.timonrole": "How Timon helped",
      "project.labtoforge.stack": "HTML · CSS · JavaScript",
      "project.labtoforge.name": "Lab to Forge - Web Site",
      "project.labtoforge.desc":
        "This very showcase site - a static, multi-page site styled around the forge theme, with a lightweight i18n layer for English and French.",
      "project.labtoforge.status": "Active development",
      "project.labtoforge.agents": "5 agents - orchestrator, coder, reviewer, merger, writer",
      "project.labtoforge.timeline1": "Site scaffolded - pages, theme, EN/FR language switcher.",
      "project.labtoforge.timeline2": "Home, Team and Sharing pages written and styled.",
      "project.labtoforge.timeline3": "Projects page added, with lateral navigation and per-project detail views (today).",
      "project.labtoforge.timonrole":
        "Hand-coded page by page in collaboration with Timon, from the initial scaffold to the interactive Projects page you're reading right now.",
      "project.homebase.stack": "Node.js · Web dashboard",
      "project.homebase.name": "Home Base",
      "project.homebase.desc":
        "A smart-home dashboard that brings Somfy and Fibaro devices together through their own TaHoma and Home Center 3 Lite gateways, alongside an Ondilo ICO pool sensor, a Marantz network streamer, live weather forecasts, upcoming events from the family agenda, and alerts raised by Timon's own agents - all in one live, WebSocket-driven view.",
      "project.homebase.status": "Mature, actively maintained",
      "project.homebase.agents": "7 agents - two orchestrators, coder, reviewer, merger, writer, researcher",
      "project.homebase.timeline1": "Project kicked off - first dashboard scaffold and hub connections.",
      "project.homebase.timeline2": "TaHoma and Fibaro integrations wired into a unified live view.",
      "project.homebase.timeline3": "Ongoing refinement through review and merge cycles (today).",
      "project.homebase.timonrole":
        "Built by a dedicated Timon agent team split across backend, frontend, and review Kanban tasks, with continuous iteration since kickoff.",
      "project.comptaca.stack": "Power Platform · Dataverse",
      "project.comptaca.name": "Invoicing App",
      "project.comptaca.desc":
        "A model-driven app on Microsoft Dataverse built for a psycho-educator supporting children, teens and young adults with ASD/ADHD. Each client session is logged, and a PDF invoice is generated automatically based on session type and length, then routed to the professional for review before it's sent to the customer.",
      "project.comptaca.status": "Stable, in maintenance mode",
      "project.comptaca.agents": "4 agents - orchestrator, coder, reviewer, writer",
      "project.comptaca.timeline1": "Dataverse solution scaffolded.",
      "project.comptaca.timeline2": "Export/import pipeline wired via the pac CLI.",
      "project.comptaca.timeline3": "Feature-complete and stabilized - no changes since.",
      "project.comptaca.timonrole":
        "Shaped by a Timon agent team driving Power Platform solution exports and imports via the pac CLI.",
      "project.pluginstimon.stack": "Node.js · TypeScript",
      "project.pluginstimon.name": "Plugins Timon",
      "project.pluginstimon.desc":
        "A monorepo of plugins extending Timon itself - including a Kanban roadmap view and a per-agent token usage monitor.",
      "project.pluginstimon.status": "Stable",
      "project.pluginstimon.agents": "6 agents - orchestrator, coder, reviewer, merger, writer, ops",
      "project.pluginstimon.timeline1": "Monorepo set up, first plugin scaffolds.",
      "project.pluginstimon.timeline2": "Kanban roadmap view and token usage monitor built and reviewed.",
      "project.pluginstimon.timeline3": "Merged and documented - stable since.",
      "project.pluginstimon.timonrole":
        "Produced entirely through Timon's own code → review → merge → doc pipeline.",
      "project.onboarding.stack": "Node.js · TypeScript (Timon plugin)",
      "project.onboarding.name": "Project Onboarding",
      "project.onboarding.desc":
        "A Timon plugin that guides a brand-new project through a staged wizard - capturing its objectives, drafting a roadmap with milestones, assembling the right agent team, and seeding a ready-to-work Kanban board - complete with its own dedicated page in the Timon navigation.",
      "project.onboarding.status": "Active development",
      "project.onboarding.agents": "5 agents - orchestrator, coder, reviewer, merger, writer",
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
      "project.secondbrain.agents": "5 agents - orchestrator, coder, reviewer, merger, writer",
      "project.secondbrain.timeline1": "MCP server and search engine scaffolded.",
      "project.secondbrain.timeline2": "Hybrid search (full-text + embeddings) implemented.",
      "project.secondbrain.timeline3": "Mindmap generation and multi-vault support added - last touched.",
      "project.secondbrain.timonrole":
        "Coded and documented by a dedicated Timon agent team.",
      "project.timonbuddy.stack": "Electron · ESP32-S3 firmware",
      "project.timonbuddy.name": "Timon Buddy",
      "project.timonbuddy.desc":
        "A character-companion that brings Timon agents to life - an expressive avatar reacting to missions, notifications and daemon activity in real time, running as both a local Electron desktop app and on dedicated ESP32-S3 touch-AMOLED hardware, entirely offline with no cloud dependency.",
      "project.timonbuddy.status": "Active development",
      "project.timonbuddy.agents": "6 agents - orchestrator, coder, reviewer, merger, writer, researcher",
      "project.timonbuddy.timeline1": "Research phase and hardware/software scaffold.",
      "project.timonbuddy.timeline2": "Desktop app and ESP32-S3 firmware built in parallel.",
      "project.timonbuddy.timeline3": "Pipeline polish and review cycles (today).",
      "project.timonbuddy.timonrole":
        "Delivered through a full research → code → review → merge pipeline across a dedicated agent team.",
      "project.timontour.stack": "Documentation",
      "project.timontour.name": "Timon Tour",
      "project.timontour.desc":
        "A guided, three-track onboarding tour of Timon - beginner, developer, expert - covering agents, missions, Kanban, and the daemon itself.",
      "project.timontour.status": "Stable - single-sprint delivery",
      "project.timontour.agents": "Dedicated coder missions dispatched per track, merged through Kanban review",
      "project.timontour.timeline1": "All three tracks - beginner, developer, expert - written and merged in a single day (last touched).",
      "project.timontour.timonrole":
        "Written page by page by dedicated coder missions per track, merged through Kanban review.",
      "project.wallstreet.stack": "Markdown · CSV reports",
      "project.wallstreet.name": "Wallstreet",
      "project.wallstreet.desc":
        "A standing agent that watches a stock watchlist and turns it into dated reports, summaries, and valuation projections.",
      "project.wallstreet.status": "Dormant since stand-up",
      "project.wallstreet.agents": "6 agents - orchestrator, analyst, coder, reviewer, merger, writer",
      "project.wallstreet.timeline1": "Full pipeline stood up and first watchlist reports generated (last touched).",
      "project.wallstreet.timonrole":
        "Run by a full Timon agent team - orchestrator, analyst, coder, reviewer, merger and writer.",
      "labnotes.title": "Lab notes",
      "labnotes.intro":
        "Field notes from real engagements, what actually changes when Timon leads the work.",
      "labnotes.readMore": "Read the full note →",
      "labnotes.backToList": "← Back to Lab notes",
      "labnote1.date": "Oct 18, 2025",
      "labnote1.tags": "Multi-agent review · Full codebase access · Risk assessment · Roadmap",
      "labnote1.title":
        "Auditing my own project with Timon: a doc-versus-code gap caught in minutes, real risks found, a roadmap I could trust",
      "labnote1.excerpt":
        "A professional project built to strengthen our up-skilling capabilities, submitted to our technical assessment cycles ahead of a pilot. A single prompt was enough for Timon to assemble the right team of agents, parallelize the review, catch a significant gap between the docs and the code, and hand back a risk list and a trustworthy roadmap.",
      "labnote1.stagePurpose": "Purpose",
      "labnote1.stageHow": "How",
      "labnote1.stageResult": "Result",
      "labnote1.p1":
        "This project is a professional project, built to improve our up-skilling capabilities and iterated for a few weeks with the regular help of GitHub Copilot in Visual Studio. It's a modern web platform (Blazor), backed by a data layer (Azure Data Explorer) and cloud processing (Function Apps), running a multi-step approval workflow. Before submitting it to our technical assessment cycles (security, privacy, accessibility) ahead of a pilot, I needed a clear-eyed status: where are the risks, what gaps still need fixing, and what should the roadmap to a finished product look like?",
      "labnote1.p2":
        "I handed this task to Timon both to evaluate this harness and in the hope of moving faster than with my current development context. A single prompt describing the brief was enough for Timon to work out which roles were needed, a researcher, a writer, a reviewer, which skills to attach to each one, and which MCP connections to wire in, then spin up the whole crew and start the assessment within minutes. No configuration, no team to assemble by hand.",
      "labnote1.p3":
        "The agents split the work in parallel, one combing through the existing documentation and project history, the other exploring the code module by module, and the gap showed up immediately. The architecture docs described a scaffold reduced to a simple health check, while the code already shipped a working MVP with real endpoints, authorization rules, data ingestion pipelines and background jobs. They then rebuilt the documentation in layers, business logic, architecture, sequence diagrams, and a roadmap document rating every item as done, partial or not started, with supporting evidence.",
      "labnote1.p4":
        "The risk assessment is where the code review really paid off. The agents confirmed the authorization model, database queries and data ingestion were sound, but still found two concrete issues to fix before any pilot: an endpoint reachable by non-admin roles that exposed a fraction of a table's records, and request models missing length validation. Both came with a precise, complete remediation plan, not a vague category.",
      "labnote1.p5":
        "Midway through, I introduced a real scope change touching the domain model, the schema, the API, the background job and the UI all at once. Timon produced a proposal and executed six dependent workstreams, each tracked with explicit dependencies so development progressed consistently.",
      "labnote1.p6":
        "The other side of autonomy also showed up: an irreversible task, wiping the data store for the new schema, was correctly blocked pending my approval. It only resumed once I had logged an explicit decision. That's the behaviour I expect from a system I'll trust with development, UAT or pre-production data: fast and parallel on review work, slow and blocking on anything that can't be undone.",
      "labnote1.p7":
        "The real win isn't that the agents were clever, it's that I got up-to-date, reliable documentation, a defensible risk assessment and a roadmap I could hand straight to the reviewer, in a fraction of the time a review would have taken me, even with AI assistance in an IDE, all starting from a single prompt. That's the shift Timon brings: a small team that assembles itself for the task, goes and checks before it speaks, and knows when to stop and ask.",
      "about.lead": "I build things.",
      "about.line1": "Sometimes useful things.",
      "about.line2": "Sometimes experimental things.",
      "about.line3":
        "Sometimes things that start with \"I wonder if this would work…\" and become much bigger than expected.",
      "about.p1":
        "My world sits somewhere between technology, engineering, AI, cloud, code, and creativity.",
      "about.p2":
        "I've spent much of my professional life solving complex technical problems, but what I enjoy most is exploring ideas and turning them into something tangible: a prototype, an application, an agent, a tool, a website, or simply a better way of doing something.",
      "about.p3": "This website is where I keep those experiments.",
      "about.p4":
        "It's not meant to show that I have all the answers. Quite the opposite. It's about curiosity, experimentation, learning and making.",
      "about.p5":
        "Because the best way I know to understand technology is simple:",
      "about.closing": "Build something with it."
    },
    fr: {
      "meta.title": "Lab to Forge",
      "meta.description":
        "Lab to Forge - transformer les expérimentations en outils prêts pour la production.",
      "hero.title":
        "Du laboratoire à la forge, là où les idées deviennent réalité.",
      "hero.text":
        "Lab to Forge est un espace pour construire et tester des idées dans le « labo », ciblant volontairement une cadence soutenue, puis rendre celles qui fonctionnent robustes, fiables et pouvant être adaptées à grande échelle dans la forge. Chaque projet passe du prototypage brut à une application concrète.",
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
      "project.placeholder1": "Ces projets tournent sur des plateformes et des langages très différents, et sont conçus pour des publics différents, un site web public, un tableau de bord domotique, un logiciel de facturation, des extensions de navigateur, des outils d'onboarding, un second cerveau personnel, et plus encore.",
      "project.placeholder2": "Ce qu'ils ont en commun, c'est leur façon de naître : un humain donne le cap, et une petite équipe d'agents Timon conçoit, code, relit et documente le résultat ensemble - assez vite pour suivre une idée, assez soigneusement pour laisser un travail solide, testé et documenté.",
      "project.placeholder3": "Choisissez un projet à gauche pour voir son objectif, sa stack, son état actuel, sa frise de développement, et comment les agents Timon ont aidé à le construire.",
      "project.filter.language": "Langage",
      "project.filter.platform": "Plateforme",
      "project.filter.status": "Statut",
      "project.filter.all": "Tous",
      "project.filter.status.active": "Actif",
      "project.filter.status.stable": "Stable",
      "project.filter.status.dormant": "Dormant",
      "project.filter.toggle": "Filtres",
      "project.filter.scope": "Portée",
      "project.filter.scope.personal": "Personnel",
      "project.filter.scope.professional": "Professionnel",
      "project.filter.scope.community": "Communautaire",
      "project.meta.status": "Statut",
      "project.meta.agents": "Agents Timon impliqués",
      "project.meta.timeline": "Chronologie",
      "project.meta.timonrole": "Comment Timon a aidé",
      "project.labtoforge.stack": "HTML · CSS · JavaScript",
      "project.labtoforge.name": "Lab to Forge - Site Web",
      "project.labtoforge.desc":
        "Ce site vitrine lui-même - un site statique multi-pages à l'habillage forge, avec une couche i18n légère en anglais et en français.",
      "project.labtoforge.status": "Développement actif",
      "project.labtoforge.agents": "5 agents - orchestrateur, codeur, relecteur, fusionneur, rédacteur",
      "project.labtoforge.timeline1": "Ossature du site - pages, thème, sélecteur de langue EN/FR.",
      "project.labtoforge.timeline2": "Pages Accueil, Équipe et Partage rédigées et stylées.",
      "project.labtoforge.timeline3": "Page Projets ajoutée, avec navigation latérale et vues de détail par projet (aujourd'hui).",
      "project.labtoforge.timonrole":
        "Codé page par page en collaboration avec Timon, depuis l'ossature initiale jusqu'à la page Projets interactive que vous lisez en ce moment.",
      "project.homebase.stack": "Node.js · Tableau de bord web",
      "project.homebase.name": "Home Base",
      "project.homebase.desc":
        "Un tableau de bord domotique qui réunit les appareils Somfy et Fibaro via leurs propres passerelles TaHoma et Home Center 3 Lite, aux côtés d'une sonde de piscine Ondilo ICO, d'un lecteur réseau Marantz, des prévisions météo en direct, des prochains événements de l'agenda familial, et des alertes remontées par les agents Timon - le tout dans une vue unique en direct, pilotée par WebSocket.",
      "project.homebase.status": "Mature, maintenu activement",
      "project.homebase.agents": "7 agents - deux orchestrateurs, codeur, relecteur, fusionneur, rédacteur, chercheur",
      "project.homebase.timeline1": "Lancement du projet - premier tableau de bord et connexions aux box.",
      "project.homebase.timeline2": "Intégrations TaHoma et Fibaro réunies dans une vue unifiée en direct.",
      "project.homebase.timeline3": "Affinage continu par cycles de revue et de fusion (aujourd'hui).",
      "project.homebase.timonrole":
        "Construit par une équipe d'agents Timon dédiée, répartie entre backend, frontend et revue en tâches Kanban, avec itération continue depuis le lancement.",
      "project.comptaca.stack": "Power Platform · Dataverse",
      "project.comptaca.name": "Application de facturation",
      "project.comptaca.desc":
        "Une application model-driven sur Microsoft Dataverse conçue pour une psychoéducatrice accompagnant des enfants, adolescents et jeunes adultes avec TSA/TDAH. Chaque séance client est enregistrée, et une facture PDF est générée automatiquement selon le type et la durée de la séance, puis transmise à la professionnelle pour relecture avant envoi au client.",
      "project.comptaca.status": "Stable, en maintenance",
      "project.comptaca.agents": "4 agents - orchestrateur, codeur, relecteur, rédacteur",
      "project.comptaca.timeline1": "Ossature de la solution Dataverse.",
      "project.comptaca.timeline2": "Pipeline d'export/import construit via le CLI pac.",
      "project.comptaca.timeline3": "Fonctionnellement complète et stabilisée - aucun changement depuis.",
      "project.comptaca.timonrole":
        "Façonnée par une équipe d'agents Timon pilotant les exports et imports de solutions Power Platform via le CLI pac.",
      "project.pluginstimon.stack": "Node.js · TypeScript",
      "project.pluginstimon.name": "Plugins Timon",
      "project.pluginstimon.desc":
        "Un monorepo de plugins qui étendent Timon lui-même - dont une vue de roadmap Kanban et un moniteur d'usage de tokens par agent.",
      "project.pluginstimon.status": "Stable",
      "project.pluginstimon.agents": "6 agents - orchestrateur, codeur, relecteur, fusionneur, rédacteur, ops",
      "project.pluginstimon.timeline1": "Monorepo mis en place, premières ossatures de plugins.",
      "project.pluginstimon.timeline2": "Vue de roadmap Kanban et moniteur d'usage de tokens construits et relus.",
      "project.pluginstimon.timeline3": "Fusionné et documenté - stable depuis.",
      "project.pluginstimon.timonrole":
        "Produit intégralement via le propre pipeline code → revue → merge → doc de Timon.",
      "project.onboarding.stack": "Node.js · TypeScript (plugin Timon)",
      "project.onboarding.name": "Project Onboarding",
      "project.onboarding.desc":
        "Un plugin Timon qui guide un tout nouveau projet à travers un assistant par étapes - capturant ses objectifs, ébauchant une roadmap avec ses jalons, assemblant l'équipe d'agents adéquate, et amorçant un tableau Kanban prêt à l'emploi - avec sa propre page dédiée dans la navigation de Timon.",
      "project.onboarding.status": "Développement actif",
      "project.onboarding.agents": "5 agents - orchestrateur, codeur, relecteur, fusionneur, rédacteur",
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
      "project.secondbrain.agents": "5 agents - orchestrateur, codeur, relecteur, fusionneur, rédacteur",
      "project.secondbrain.timeline1": "Ossature du serveur MCP et du moteur de recherche.",
      "project.secondbrain.timeline2": "Recherche hybride (plein texte + embeddings) implémentée.",
      "project.secondbrain.timeline3": "Génération de mindmaps et support multi-vaults ajoutés - dernière activité.",
      "project.secondbrain.timonrole":
        "Codé et documenté par une équipe Timon dédiée.",
      "project.timonbuddy.stack": "Electron · Firmware ESP32-S3",
      "project.timonbuddy.name": "Timon Buddy",
      "project.timonbuddy.desc":
        "Un compagnon-personnage qui donne vie aux agents Timon - un avatar expressif réagissant en temps réel aux missions, notifications et à l'activité du daemon, tournant à la fois en application de bureau Electron locale et sur du matériel dédié ESP32-S3 à écran tactile AMOLED, entièrement hors-ligne et sans dépendance au cloud.",
      "project.timonbuddy.status": "Développement actif",
      "project.timonbuddy.agents": "6 agents - orchestrateur, codeur, relecteur, fusionneur, rédacteur, chercheur",
      "project.timonbuddy.timeline1": "Phase de recherche et ossature matériel/logiciel.",
      "project.timonbuddy.timeline2": "Application de bureau et firmware ESP32-S3 construits en parallèle.",
      "project.timonbuddy.timeline3": "Peaufinage du pipeline et cycles de revue (aujourd'hui).",
      "project.timonbuddy.timonrole":
        "Livré via un pipeline complet recherche → code → revue → merge par une équipe d'agents dédiée.",
      "project.timontour.stack": "Documentation",
      "project.timontour.name": "Timon Tour",
      "project.timontour.desc":
        "Une visite guidée de Timon en trois parcours - débutant, développeur, expert - couvrant les agents, les missions, le Kanban et le daemon lui-même.",
      "project.timontour.status": "Stable - livré en un seul sprint",
      "project.timontour.agents": "Missions de codage dédiées, dispatchées par parcours, fusionnées via revue Kanban",
      "project.timontour.timeline1": "Les trois parcours - débutant, développeur, expert - rédigés et fusionnés en une seule journée (dernière activité).",
      "project.timontour.timonrole":
        "Écrite page par page par des missions de rédaction dédiées à chaque parcours, fusionnées via revue Kanban.",
      "project.wallstreet.stack": "Markdown · Rapports CSV",
      "project.wallstreet.name": "Wallstreet",
      "project.wallstreet.desc":
        "Un agent permanent qui surveille une watchlist boursière et la transforme en rapports datés, synthèses et projections de valorisation.",
      "project.wallstreet.status": "Dormant depuis sa mise en service",
      "project.wallstreet.agents": "6 agents - orchestrateur, analyste, codeur, relecteur, fusionneur, rédacteur",
      "project.wallstreet.timeline1": "Pipeline complet mis en service et premiers rapports de watchlist générés (dernière activité).",
      "project.wallstreet.timonrole":
        "Animé par une équipe Timon complète - orchestrateur, analyste, codeur, relecteur, fusionneur et rédacteur.",
      "labnotes.title": "Notes de labo",
      "labnotes.intro":
        "Des notes de terrain tirées de vraies missions, ce qui change réellement quand Timon prend les commandes.",
      "labnotes.readMore": "Lire la note complète →",
      "labnotes.backToList": "← Retour aux notes de labo",
      "labnote1.date": "18 oct. 2025",
      "labnote1.tags": "Revue multi-agents · Accès complet au code · Analyse de risques · Feuille de route",
      "labnote1.title":
        "Auditer l'un de mes projets avec Timon : un écart doc/code repéré en quelques minutes, de vrais risques trouvés, une feuille de route fiable",
      "labnote1.excerpt":
        "Un projet professionnel développé pour renforcer nos capacités d'up-skilling, soumis à nos cycles d'évaluation technique avant un pilote. Un seul prompt a suffi à Timon pour assembler la bonne équipe d'agents, paralléliser la revue, repérer un écart important entre la doc et le code, et renvoyer une liste de risques et une feuille de route fiable.",
      "labnote1.stagePurpose": "Objectif",
      "labnote1.stageHow": "Démarche",
      "labnote1.stageResult": "Résultat",
      "labnote1.p1":
        "Ce projet est un projet professionnel, développé pour améliorer nos capacités d'up-skilling et itéré depuis quelques semaines avec l'aide régulière de GitHub Copilot dans Visual Studio. C'est une plateforme web moderne (Blazor), adossée à une couche de données (Azure Data Explorer) et de traitement dans le cloud (Function Apps), qui pilote un parcours d'approbation en plusieurs étapes. Avant de le soumettre à nos cycles d'évaluations techniques (sécurité, confidentialité, accessibilité) en vue d'un pilote, j'avais besoin d'un état des lieux clair : où sont les risques, quelles lacunes reste-t-il à combler, et à quoi devrait ressembler la feuille de route pour obtenir un produit abouti ?",
      "labnote1.p2":
        "J'ai confié cette tâche à Timon à la fois pour évaluer ce harnais et dans l'espoir d'aller plus vite qu'avec mon contexte de développement actuel. Il ne m'a fallu qu'un seul prompt décrivant la mission pour que Timon détermine quels rôles étaient nécessaires, un chercheur, un rédacteur, un relecteur, quelles compétences attacher à chacun, et quelles connexions MCP câbler, puis démarrer toute l'équipe et lancer l'évaluation en quelques minutes. Aucune configuration, aucune équipe à assembler à la main.",
      "labnote1.p3":
        "Les agents ont réparti le travail en parallèle, l'un parcourant la documentation existante et l'historique du projet, l'autre explorant le code module par module, et l'écart est apparu immédiatement. La documentation d'architecture décrivait un squelette réduit à un simple contrôle de santé, alors que le code livrait déjà un MVP fonctionnel avec de vrais points d'entrée, des règles d'autorisation, des pipelines d'ingestion de données et des jobs en arrière-plan. Ils ont ensuite reconstruit la documentation par couches, logique métier, architecture, diagrammes de séquence, et un plan de route répertoriant chaque élément comme terminé, partiel ou non commencé, avec preuves à l'appui.",
      "labnote1.p4":
        "C'est dans l'analyse de risques que la revue du code a vraiment payé. Les agents ont confirmé que le modèle d'autorisation, les requêtes de base de données et l'ingestion de données étaient solides, mais ont néanmoins trouvé deux problèmes concrets à corriger avant tout pilote : un point d'entrée accessible à des rôles non administrateurs qui exposait une fraction du référentiel d'une table, et des modèles de requête sans validation de longueur. Les deux venaient avec un plan de remédiation précis et complet, pas une catégorie vague.",
      "labnote1.p5":
        "À mi-parcours, j'ai introduit un vrai changement de périmètre touchant à la fois le modèle de domaine, le schéma, l'API, le job en arrière-plan et l'interface. Timon a produit une proposition et exécuté six chantiers dépendants, chacun suivi avec des dépendances explicites pour que le développement progresse de façon cohérente.",
      "labnote1.p6":
        "Autre face de l'autonomie mise en évidence : une tâche irréversible, effacer le stockage de données pour le nouveau schéma, a été correctement bloquée en attente de mon approbation. Elle n'a repris qu'une fois que j'ai consigné une décision explicite. C'est le comportement que j'attends d'un système auquel je confierai des données de développement, UAT ou PPE : rapide et parallèle sur le travail de revue, lent et bloquant sur tout ce qui ne peut pas être annulé.",
      "labnote1.p7":
        "Le vrai gain n'est pas que les agents aient été malins, c'est que j'ai obtenu une documentation à jour et fiable, une analyse de risques défendable et une feuille de route à transmettre directement au relecteur, en une fraction du temps qu'une revue m'aurait demandé, même avec l'aide de l'IA dans un IDE, le tout parti d'un seul prompt. C'est ça, le changement que Timon apporte : une petite équipe qui s'assemble elle-même pour la tâche, va vérifier avant de parler, et sait s'arrêter pour demander.",
      "about.lead": "Je construis des choses.",
      "about.line1": "Parfois des choses utiles.",
      "about.line2": "Parfois des choses expérimentales.",
      "about.line3":
        "Parfois des choses qui commencent par « je me demande si ça marcherait… » et qui deviennent bien plus grandes que prévu.",
      "about.p1":
        "Mon univers se situe quelque part entre la technologie, l'ingénierie, l'IA, le cloud, le code et la créativité.",
      "about.p2":
        "J'ai passé une grande partie de ma vie professionnelle à résoudre des problèmes techniques complexes, mais ce que j'aime le plus, c'est explorer des idées et les transformer en quelque chose de concret : un prototype, une application, un agent, un outil, un site web, ou simplement une meilleure façon de faire les choses.",
      "about.p3": "Ce site est l'endroit où je conserve ces expérimentations.",
      "about.p4":
        "Il n'est pas censé montrer que j'ai toutes les réponses. Bien au contraire. Il s'agit de curiosité, d'expérimentation, d'apprentissage et de fabrication.",
      "about.p5":
        "Parce que la meilleure façon que je connaisse de comprendre une technologie est simple :",
      "about.closing": "Construire quelque chose avec."
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
    // not available space for its children - subtract it so we compare
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
  let activeKey = null;

  function showProject(key) {
    activeKey = key;
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

  function clearSelection() {
    activeKey = null;
    items.forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-current", "false");
    });
    panels.forEach((panel) => {
      panel.hidden = true;
    });
    if (placeholder) placeholder.hidden = false;
  }

  items.forEach((item) => {
    item.addEventListener("click", () => showProject(item.dataset.project));
  });

  // Filter boxes: narrow the project list by language, platform and status
  const filterSelects = Array.from(
    document.querySelectorAll("[data-filter]")
  );
  if (filterSelects.length) {
    const splitValues = (value) =>
      (value || "")
        .split(",")
        .map((part) => part.trim())
        .filter(Boolean);

    function populateOptions(filterName, attr) {
      const select = filterSelects.find(
        (el) => el.dataset.filter === filterName
      );
      if (!select) return;
      const values = new Set();
      items.forEach((item) => {
        splitValues(item.dataset[attr]).forEach((value) => values.add(value));
      });
      Array.from(values)
        .sort((a, b) => a.localeCompare(b))
        .forEach((value) => {
          const option = document.createElement("option");
          option.value = value;
          option.textContent = value;
          select.appendChild(option);
        });
    }

    populateOptions("language", "language");
    populateOptions("platform", "platform");

    function applyFilters() {
      const activeFilters = {};
      filterSelects.forEach((select) => {
        activeFilters[select.dataset.filter] = select.value;
      });

      let activeStillVisible = false;
      items.forEach((item) => {
        const matchesLanguage =
          !activeFilters.language ||
          splitValues(item.dataset.language).includes(activeFilters.language);
        const matchesPlatform =
          !activeFilters.platform ||
          splitValues(item.dataset.platform).includes(activeFilters.platform);
        const matchesStatus =
          !activeFilters.status || item.dataset.status === activeFilters.status;
        const matchesScope =
          !activeFilters.scope || item.dataset.scope === activeFilters.scope;
        const visible =
          matchesLanguage && matchesPlatform && matchesStatus && matchesScope;
        item.hidden = !visible;
        if (visible && item.dataset.project === activeKey) {
          activeStillVisible = true;
        }
      });

      if (activeKey && !activeStillVisible) {
        clearSelection();
      }
    }

    filterSelects.forEach((select) => {
      select.addEventListener("change", applyFilters);
    });
  }
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
      // mostly warm forge embers, occasional cool "lab" spark,
      // rare "molten circuitry" teal spark for the futuristic accent
      color: (() => {
        const roll = Math.random();
        if (roll < 0.1) return "53, 224, 201";
        if (roll < 0.28) return "110, 168, 254";
        return "224, 122, 44";
      })()
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
