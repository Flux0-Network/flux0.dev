import type { Metadata } from 'next';
import Link from 'next/link';
import DocsNav from '@/components/landing/DocsNav';
import CookieNotice from '@/components/landing/CookieNotice';
import Navbar from '@/components/landing/Navbar';

export const metadata: Metadata = {
  title: 'Docs · Flux Network',
  description: 'Dokumentation für PrismLobby, LumaSpace, FlowWave und weitere Produkte von Flux Network.',
  openGraph: {
    type: 'website',
    url: 'https://flux0.dev/docs',
    title: 'Docs · Flux Network',
    description: 'Dokumentation für PrismLobby, LumaSpace, FlowWave und weitere Produkte von Flux Network.',
    siteName: 'Flux0',
  },
  alternates: { canonical: 'https://flux0.dev/docs' },
};

export default function DocsPage() {
  return (
    <div className="docs-body">
      <DocsNav />
      <Navbar />

      <div className="docs-overlay" />

      {/* Floating nav button — mobile only */}
      <button className="docs-mobile-toggle" aria-label="Navigation öffnen">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
          <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="15" y2="18" />
        </svg>
      </button>

      <div className="docs-layout">

        {/* ── SIDEBAR ── */}
        <aside className="docs-sidebar">
          <div className="docs-sidebar-inner">
            <button className="docs-sidebar-close" aria-label="Navigation schließen">← Schließen</button>

            <div className="docs-nav-group">
              <span className="docs-nav-group-label">Übersicht</span>
              <a href="#intro" className="docs-nav-link docs-nav-link--active">Einführung</a>
              <a href="#getting-started" className="docs-nav-link">Erste Schritte</a>
            </div>

            <div className="docs-nav-category">
              <span>Plugins</span>
            </div>

            <div className="docs-nav-group">
              <span className="docs-nav-group-label docs-nav-group-label--prism">◈ PrismLobby</span>
              <a href="#prismlobby-intro" className="docs-nav-link">Übersicht</a>
              <a href="#prismlobby-install" className="docs-nav-link">Installation</a>
              <a href="#prismlobby-config" className="docs-nav-link">Konfiguration</a>
              <a href="#prismlobby-commands" className="docs-nav-link">Commands</a>
              <a href="#prismlobby-placeholders" className="docs-nav-link">Platzhalter</a>
            </div>

            <div className="docs-nav-category">
              <span>Produkte</span>
            </div>

            <div className="docs-nav-group">
              <span className="docs-nav-group-label docs-nav-group-label--luma">✦ LumaSpace</span>
              <a href="#lumaspace-intro" className="docs-nav-link">Übersicht</a>
              <a href="#lumaspace-start" className="docs-nav-link">Quickstart</a>
              <a href="#lumaspace-features" className="docs-nav-link">Features</a>
              <a href="#lumaspace-api" className="docs-nav-link">API</a>
            </div>

            <div className="docs-nav-group">
              <span className="docs-nav-group-label docs-nav-group-label--flow">〜 FlowWave</span>
              <a href="#flowwave-intro" className="docs-nav-link">Übersicht</a>
              <a href="#flowwave-builder" className="docs-nav-link">Web Builder</a>
              <a href="#flowwave-commands-ui" className="docs-nav-link">Commands &amp; Events</a>
              <a href="#flowwave-container" className="docs-nav-link">Container Deployment</a>
              <a href="#flowwave-pycord" className="docs-nav-link">pycord v2 Engine</a>
            </div>

            <div className="docs-nav-group">
              <span className="docs-nav-group-label docs-nav-group-label--vex">⬡ Vex0</span>
              <a href="#vex0-intro" className="docs-nav-link">Übersicht</a>
              <a href="#vex0-start" className="docs-nav-link">Installation</a>
              <a href="#vex0-components" className="docs-nav-link">Komponenten</a>
            </div>

            <div className="docs-nav-group">
              <span className="docs-nav-group-label docs-nav-group-label--vylder">✦ Vylder</span>
              <a href="#vylder-intro" className="docs-nav-link">Übersicht</a>
              <a href="#vylder-features" className="docs-nav-link">Features</a>
            </div>
          </div>
        </aside>

        {/* ── MAIN CONTENT ── */}
        <main className="docs-main">
          <div className="docs-content">

            {/* ── INTRO ── */}
            <section className="docs-section" id="intro">
              <p className="docs-eyebrow">Flux0 Docs</p>
              <h1 className="docs-h1">Dokumentation</h1>
              <p className="docs-lead">
                Willkommen in der offiziellen Dokumentation des Flux Network. Hier findest du alles zu unseren Produkten — von der ersten Installation bis zur API-Referenz.
              </p>

              <div className="docs-cards-row">
                <a href="#prismlobby-intro" className="docs-quick-card">
                  <span className="docs-quick-icon docs-quick-icon--prism">◈</span>
                  <div>
                    <strong>PrismLobby</strong>
                    <p>Minecraft Lobby Plugin · Paper</p>
                  </div>
                </a>
                <a href="#flowwave-builder" className="docs-quick-card">
                  <span className="docs-quick-icon docs-quick-icon--logo">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/flowwave-icon.png" alt="FlowWave" className="product-logo-icon" />
                  </span>
                  <div>
                    <strong>FlowWave</strong>
                    <p>Visueller Bot Builder</p>
                  </div>
                </a>
                <a href="#lumaspace-start" className="docs-quick-card">
                  <span className="docs-quick-icon docs-quick-icon--logo">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/lumaspace-icon.png" alt="LumaSpace" className="product-logo-icon" />
                  </span>
                  <div>
                    <strong>LumaSpace</strong>
                    <p>Produktivitätsplattform</p>
                  </div>
                </a>
                <a href="#vex0-intro" className="docs-quick-card">
                  <span className="docs-quick-icon docs-quick-icon--logo">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/vex0-icon.png" alt="Vex0" className="product-logo-icon" />
                  </span>
                  <div>
                    <strong>Vex0</strong>
                    <p>Component Framework</p>
                  </div>
                </a>
              </div>
            </section>

            <section className="docs-section" id="getting-started">
              <h2 className="docs-h2">Erste Schritte</h2>
              <p>
                Wähle ein Produkt aus dem Menü links oder klicke direkt auf eine der Karten oben. Alle Produkte sind eigenständig — du kannst mit jedem beginnen, das dich interessiert.
              </p>
              <div className="docs-callout docs-callout--info">
                <strong>Hinweis:</strong> PrismLobby ist live auf Modrinth verfügbar. LumaSpace und FlowWave sind ebenfalls aktiv. Die Dokumentation wird laufend erweitert.
              </div>
            </section>

            <div className="docs-divider" />

            {/* ═══════════════════════════════════════════
                PRISMLOBBY
            ═══════════════════════════════════════════ */}
            <div className="docs-product-banner docs-product-banner--prism" id="prismlobby-intro">
              <div className="docs-product-banner-icon docs-product-banner-icon--prism">◈</div>
              <div>
                <h2 className="docs-product-banner-name">PrismLobby</h2>
                <div className="docs-product-banner-meta">
                  <span className="docs-tag docs-tag--live">Live</span>
                  <span className="docs-product-banner-sub">Paper · Minecraft 1.21.1</span>
                </div>
              </div>
            </div>

            <section className="docs-section">
              <p className="docs-lead">
                PrismLobby ist ein <strong>Lobby-Management Plugin für PaperMC-Server</strong>. Es verwaltet Spawn-Punkte, Spieler-Routing und bietet eine flexible Konfiguration für Server-Admins — kostenlos auf Modrinth verfügbar.
              </p>
              <div className="docs-feature-list">
                <div className="docs-feature-item">
                  <span className="docs-feature-icon">🏠</span>
                  <div><strong>Spawn-Verwaltung</strong> — Setze und verwalte mehrere Spawn-Punkte per Command</div>
                </div>
                <div className="docs-feature-item">
                  <span className="docs-feature-icon">⚙️</span>
                  <div><strong>Flexible Konfiguration</strong> — Alles in einer übersichtlichen <code className="inline-code">config.yml</code></div>
                </div>
                <div className="docs-feature-item">
                  <span className="docs-feature-icon">📊</span>
                  <div><strong>PlaceholderAPI</strong> — Platzhalter für Scoreboards, Tab-Liste und Chat</div>
                </div>
              </div>
            </section>

            <section className="docs-section" id="prismlobby-install">
              <h2 className="docs-h2">Installation</h2>
              <p>PrismLobby benötigt einen PaperMC-Server mit Minecraft 1.21.1.</p>
              <div className="docs-steps">
                <div className="docs-step">
                  <span className="docs-step-num">1</span>
                  <div className="docs-step-body">
                    <strong>Plugin herunterladen</strong>
                    <p>Lade die aktuelle Version von <a href="https://modrinth.com/plugin/prismlobby" target="_blank" rel="noopener noreferrer" className="docs-link">modrinth.com/plugin/prismlobby</a> herunter.</p>
                  </div>
                </div>
                <div className="docs-step">
                  <span className="docs-step-num">2</span>
                  <div className="docs-step-body">
                    <strong>In den plugins-Ordner legen</strong>
                    <p>Kopiere die <code className="inline-code">.jar</code>-Datei in den <code className="inline-code">/plugins/</code>-Ordner deines Servers.</p>
                  </div>
                </div>
                <div className="docs-step">
                  <span className="docs-step-num">3</span>
                  <div className="docs-step-body">
                    <strong>Server neu starten</strong>
                    <p>Starte den Server neu. PrismLobby erstellt automatisch eine <code className="inline-code">config.yml</code> im Ordner <code className="inline-code">/plugins/PrismLobby/</code>.</p>
                  </div>
                </div>
              </div>
              <div className="docs-callout docs-callout--info">
                <strong>Voraussetzung:</strong> PaperMC 1.21.1 oder neuer. Spigot und CraftBukkit werden nicht unterstützt.
              </div>
            </section>

            <section className="docs-section" id="prismlobby-config">
              <h2 className="docs-h2">Konfiguration</h2>
              <p>Die Konfigurationsdatei befindet sich unter <code className="inline-code">/plugins/PrismLobby/config.yml</code>. Jede Option ist in der Datei kommentiert.</p>
              <div className="code-block">
                <div className="code-header">
                  <span className="code-filename">plugins/PrismLobby/config.yml</span>
                  <span className="code-lang">yaml</span>
                </div>
                <pre><code>{`spawn:
  world: world          # Welt des Spawn-Punktes
  x: 0.5
  y: 64.0
  z: 0.5
  yaw: 0.0
  pitch: 0.0

settings:
  teleport-on-join: true       # Spieler beim Joinen zum Spawn teleportieren
  teleport-on-respawn: true    # Spieler nach dem Tod zum Spawn teleportieren
  disable-hunger: true         # Hunger im Lobby deaktivieren
  disable-pvp: true            # PvP im Lobby deaktivieren
  fly-enabled: false           # Fliegen für alle erlauben

messages:
  prefix: "&8[&5Prism&8] "
  spawn-set: "&aSpawn wurde gesetzt."
  no-permission: "&cDu hast keine Berechtigung."`}</code></pre>
              </div>
              <p>Nach Änderungen an der Konfiguration einfach <code className="inline-code">/prismlobby reload</code> ausführen — kein Serverneustart nötig.</p>
            </section>

            <section className="docs-section" id="prismlobby-commands">
              <h2 className="docs-h2">Commands</h2>
              <div className="docs-table-wrap">
                <table className="docs-table">
                  <thead>
                    <tr>
                      <th>Command</th>
                      <th>Berechtigung</th>
                      <th>Beschreibung</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code className="inline-code">/lobby</code></td>
                      <td>—</td>
                      <td>Teleportiert dich zum Spawn-Punkt</td>
                    </tr>
                    <tr>
                      <td><code className="inline-code">/setspawn</code></td>
                      <td><code className="inline-code">prismlobby.admin</code></td>
                      <td>Setzt den Spawn auf deine aktuelle Position</td>
                    </tr>
                    <tr>
                      <td><code className="inline-code">/prismlobby reload</code></td>
                      <td><code className="inline-code">prismlobby.admin</code></td>
                      <td>Lädt die Konfiguration neu</td>
                    </tr>
                    <tr>
                      <td><code className="inline-code">/prismlobby version</code></td>
                      <td>—</td>
                      <td>Zeigt die installierte Plugin-Version an</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="docs-callout docs-callout--warn">
                Die Berechtigung <code className="inline-code">prismlobby.admin</code> wird standardmäßig nur Operatoren (OP) gegeben. Nutze ein Permission-Plugin wie LuckPerms für feingranulare Kontrolle.
              </div>
            </section>

            <section className="docs-section" id="prismlobby-placeholders">
              <h2 className="docs-h2">PlaceholderAPI Platzhalter</h2>
              <p>
                PrismLobby unterstützt <strong>PlaceholderAPI</strong>. Installiere PlaceholderAPI auf deinem Server, um die folgenden Platzhalter in Scoreboards, der Tab-Liste, im Chat und in anderen Plugins nutzen zu können.
              </p>
              <div className="docs-table-wrap">
                <table className="docs-table">
                  <thead>
                    <tr>
                      <th>Platzhalter</th>
                      <th>Rückgabe</th>
                      <th>Beschreibung</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code className="inline-code">%prismlobby_world%</code></td>
                      <td>Text</td>
                      <td>Welt, in der sich der Spieler befindet</td>
                    </tr>
                    <tr>
                      <td><code className="inline-code">%prismlobby_online%</code></td>
                      <td>Zahl</td>
                      <td>Anzahl der aktuell eingeloggten Spieler</td>
                    </tr>
                    <tr>
                      <td><code className="inline-code">%prismlobby_max_players%</code></td>
                      <td>Zahl</td>
                      <td>Maximale Spieleranzahl des Servers</td>
                    </tr>
                    <tr>
                      <td><code className="inline-code">%prismlobby_tps%</code></td>
                      <td>Dezimal</td>
                      <td>Aktuelle Server-TPS (Ticks per Second)</td>
                    </tr>
                    <tr>
                      <td><code className="inline-code">%prismlobby_spawn_world%</code></td>
                      <td>Text</td>
                      <td>Welt des gesetzten Spawn-Punktes</td>
                    </tr>
                    <tr>
                      <td><code className="inline-code">%prismlobby_version%</code></td>
                      <td>Text</td>
                      <td>Installierte Plugin-Version</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h3 className="docs-h3">Beispiel — Scoreboard</h3>
              <div className="code-block">
                <div className="code-header">
                  <span className="code-filename">scoreboard config (FastBoard / CMI)</span>
                  <span className="code-lang">yaml</span>
                </div>
                <pre><code>{`lines:
  - "&7Spieler online: &f%prismlobby_online%"
  - "&7Max. Spieler:   &f%prismlobby_max_players%"
  - "&7Server-TPS:     &a%prismlobby_tps%"
  - "&7Aktuelle Welt:  &f%prismlobby_world%"`}</code></pre>
              </div>
              <div className="docs-callout docs-callout--info">
                PlaceholderAPI muss separat installiert werden. Download: <a href="https://www.spigotmc.org/resources/placeholderapi.6245/" target="_blank" rel="noopener noreferrer" className="docs-link">SpigotMC · PlaceholderAPI</a>
              </div>
            </section>

            <div className="docs-divider" />

            {/* ═══════════════════════════════════════════
                LUMASPACE
            ═══════════════════════════════════════════ */}
            <div className="docs-product-banner docs-product-banner--luma" id="lumaspace-intro">
              <div className="docs-product-banner-icon docs-product-banner-icon--logo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/lumaspace-icon.png" alt="LumaSpace" className="product-logo-icon" />
              </div>
              <div>
                <h2 className="docs-product-banner-name">LumaSpace</h2>
                <div className="docs-product-banner-meta">
                  <span className="docs-tag docs-tag--live">Live</span>
                  <span className="docs-product-banner-sub">Web-App · Produktivität</span>
                </div>
              </div>
            </div>

            <section className="docs-section">
              <p className="docs-lead">
                LumaSpace ist eine KI-gestützte Produktivitäts- und Planungsplattform für Teams und Einzelpersonen mit Fokus auf Realtime Collaboration und intelligente Task-Organisation.
              </p>
              <div className="docs-feature-list">
                <div className="docs-feature-item">
                  <span className="docs-feature-icon">⚡</span>
                  <div><strong>Realtime Collaboration</strong> — Änderungen sind sofort für alle Teammitglieder sichtbar</div>
                </div>
                <div className="docs-feature-item">
                  <span className="docs-feature-icon">🧠</span>
                  <div><strong>AI Planning</strong> — Automatische Priorisierung und Scheduling basierend auf Deadlines</div>
                </div>
                <div className="docs-feature-item">
                  <span className="docs-feature-icon">🎯</span>
                  <div><strong>Focus Mode</strong> — Deep-Work-Sessions mit automatischem Status und Do-not-disturb</div>
                </div>
              </div>
            </section>

            <section className="docs-section" id="lumaspace-start">
              <h2 className="docs-h2">Quickstart</h2>
              <p>LumaSpace ist eine Web-App — keine Installation notwendig.</p>
              <div className="docs-steps">
                <div className="docs-step">
                  <span className="docs-step-num">1</span>
                  <div className="docs-step-body">
                    <strong>Account erstellen</strong>
                    <p>Gehe zu <a href="https://lumaspace.de" target="_blank" rel="noopener noreferrer" className="docs-link">lumaspace.de</a> und registriere dich kostenlos.</p>
                  </div>
                </div>
                <div className="docs-step">
                  <span className="docs-step-num">2</span>
                  <div className="docs-step-body">
                    <strong>Workspace anlegen</strong>
                    <p>Erstelle deinen ersten Workspace — solo oder im Team. Importiere bestehende Tasks aus Notion, Trello oder Linear.</p>
                  </div>
                </div>
                <div className="docs-step">
                  <span className="docs-step-num">3</span>
                  <div className="docs-step-body">
                    <strong>Loslegen</strong>
                    <p>Füge Tasks hinzu, aktiviere den Focus Mode und lass die KI deinen Tag planen.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="docs-section" id="lumaspace-features">
              <h2 className="docs-h2">Features</h2>
              <h3 className="docs-h3">Task Orchestration</h3>
              <p>Tasks können in Projekten gruppiert, mit Abhängigkeiten verknüpft und automatisch priorisiert werden. Deadlines und Aufwandsschätzungen fließen in die KI-Planung ein.</p>
              <h3 className="docs-h3">Focus Sessions</h3>
              <p>Der Focus Mode startet eine Pomodoro-ähnliche Session, schaltet Ablenkungen aus und trackt produktive Zeit pro Task.</p>
            </section>

            <section className="docs-section" id="lumaspace-api">
              <h2 className="docs-h2">API</h2>
              <div className="docs-callout docs-callout--warn">
                Die LumaSpace API befindet sich in Vorbereitung. Trag dich im Discord ein, um als Erster Zugang zu erhalten.
              </div>
            </section>

            <div className="docs-divider" />

            {/* ═══════════════════════════════════════════
                FLOWWAVE
            ═══════════════════════════════════════════ */}
            <div className="docs-product-banner docs-product-banner--flow" id="flowwave-intro">
              <div className="docs-product-banner-icon docs-product-banner-icon--logo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/flowwave-icon.png" alt="FlowWave" className="product-logo-icon" />
              </div>
              <div>
                <h2 className="docs-product-banner-name">FlowWave</h2>
                <div className="docs-product-banner-meta">
                  <span className="docs-tag docs-tag--beta">Open Beta</span>
                  <span className="docs-product-banner-sub">Web-App · Discord Bot Builder</span>
                </div>
              </div>
            </div>

            <section className="docs-section">
              <p className="docs-lead">
                FlowWave ist ein <strong>visueller Discord-Bot-Builder im Browser</strong>. Du erstellst deinen Bot komplett per Drag-and-drop, ohne eine einzige Zeile Code. Im Hintergrund läuft alles auf <strong>pycord v2</strong> in einem isolierten Container.
              </p>
              <div className="docs-feature-list">
                <div className="docs-feature-item">
                  <span className="docs-feature-icon">🖥️</span>
                  <div><strong>Web Builder</strong> — Bot-Logik visuell im Browser konfigurieren, kein Python-Wissen nötig</div>
                </div>
                <div className="docs-feature-item">
                  <span className="docs-feature-icon">📦</span>
                  <div><strong>Container-Deployment</strong> — Jeder Bot läuft in einem eigenen, isolierten Container</div>
                </div>
                <div className="docs-feature-item">
                  <span className="docs-feature-icon">⚡</span>
                  <div><strong>pycord v2 Engine</strong> — Professionelle Discord-API-Unterstützung unter der Haube</div>
                </div>
              </div>
              <div className="docs-callout docs-callout--info">
                FlowWave befindet sich in aktiver Entwicklung. Die Web-Oberfläche und Container-Infrastruktur werden gerade aufgebaut. Trag dich im Discord ein, um Early Access zu erhalten.
              </div>
            </section>

            <section className="docs-section" id="flowwave-builder">
              <h2 className="docs-h2">Web Builder</h2>
              <p>Der FlowWave Web Builder ist die zentrale Oberfläche, in der du deinen Discord-Bot zusammenstellst — vollständig im Browser, ohne lokale Installation.</p>
              <div className="docs-steps">
                <div className="docs-step">
                  <span className="docs-step-num">1</span>
                  <div className="docs-step-body">
                    <strong>Anmelden &amp; Bot-Projekt erstellen</strong>
                    <p>Öffne den FlowWave Web Builder und lege ein neues Bot-Projekt an. Gib deinen Discord Bot Token ein — er wird verschlüsselt gespeichert und nur im Container verwendet.</p>
                  </div>
                </div>
                <div className="docs-step">
                  <span className="docs-step-num">2</span>
                  <div className="docs-step-body">
                    <strong>Commands &amp; Events visuell konfigurieren</strong>
                    <p>Wähle im Builder aus vorgefertigten Slash-Command- und Event-Blöcken. Konfiguriere Namen, Beschreibungen, Optionen und Antworten direkt im UI — kein Code nötig.</p>
                  </div>
                </div>
                <div className="docs-step">
                  <span className="docs-step-num">3</span>
                  <div className="docs-step-body">
                    <strong>Container deployen</strong>
                    <p>Klick auf &quot;Deploy&quot; — FlowWave baut automatisch einen Container mit deiner Konfiguration und startet ihn. Dein Bot ist innerhalb von Sekunden live auf Discord.</p>
                  </div>
                </div>
                <div className="docs-step">
                  <span className="docs-step-num">4</span>
                  <div className="docs-step-body">
                    <strong>Live-Monitoring</strong>
                    <p>Im Dashboard siehst du Container-Status, Logs und Uptime deines Bots in Echtzeit. Änderungen im Builder werden als neuer Container-Build ausgerollt.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="docs-section" id="flowwave-commands-ui">
              <h2 className="docs-h2">Commands &amp; Events konfigurieren</h2>
              <h3 className="docs-h3">Slash Commands</h3>
              <p>Füge einen Slash-Command-Block hinzu und konfiguriere:</p>
              <ul className="docs-list">
                <li><strong>Name</strong> — der Command-Name (z.B. <code className="inline-code">ping</code>, <code className="inline-code">info</code>)</li>
                <li><strong>Beschreibung</strong> — wird Nutzern in Discord angezeigt</li>
                <li><strong>Optionen</strong> — Parameter mit Typ-Auswahl (Text, Zahl, User, Channel …)</li>
                <li><strong>Antwort</strong> — statischer Text, Embed-Template oder dynamische Logik-Blöcke</li>
              </ul>
              <h3 className="docs-h3">Events</h3>
              <ul className="docs-list">
                <li><code className="inline-code">on_member_join</code> — Willkommensnachricht automatisch senden</li>
                <li><code className="inline-code">on_message</code> — Keyword-Filter oder Auto-Antworten konfigurieren</li>
                <li><code className="inline-code">on_reaction_add</code> — Reaction-Roles visuell zuweisen</li>
                <li><code className="inline-code">on_ready</code> — Status und Aktivität des Bots beim Start setzen</li>
              </ul>
            </section>

            <section className="docs-section" id="flowwave-container">
              <h2 className="docs-h2">Container Deployment</h2>
              <p>Jeder FlowWave-Bot läuft in einem eigenen, isolierten Container — vollständig gemanaged von FlowWave.</p>
              <div className="docs-feature-list">
                <div className="docs-feature-item">
                  <span className="docs-feature-icon">1</span>
                  <div><strong>Build</strong> — FlowWave generiert aus der Builder-Konfiguration ein pycord v2 Projekt und packt es in ein Container-Image.</div>
                </div>
                <div className="docs-feature-item">
                  <span className="docs-feature-icon">2</span>
                  <div><strong>Deploy</strong> — Das Image wird in einer isolierten Laufzeitumgebung gestartet. Der Bot-Token ist nur innerhalb des Containers sichtbar.</div>
                </div>
                <div className="docs-feature-item">
                  <span className="docs-feature-icon">3</span>
                  <div><strong>Betrieb</strong> — FlowWave überwacht den Container, startet ihn bei Absturz neu und hält Logs bereit.</div>
                </div>
              </div>
              <div className="docs-callout docs-callout--warn">
                Eigene Container-Images oder direkter SSH-Zugriff sind in der aktuellen Alpha nicht vorgesehen. Das Feature ist für spätere Versionen geplant.
              </div>
            </section>

            <section className="docs-section" id="flowwave-pycord">
              <h2 className="docs-h2">pycord v2 Engine</h2>
              <p>Unter der Haube verwendet FlowWave <strong>pycord v2</strong>, eine der leistungsfähigsten Python-Bibliotheken für die Discord-API mit vollständiger Slash-Command- und UI-Unterstützung.</p>
              <ul className="docs-list">
                <li>Vollständige Slash-Command- und Application-Command-Unterstützung</li>
                <li>Discord UI-Komponenten: Buttons, Select Menus, Modals</li>
                <li>Autocomplete für Command-Optionen</li>
                <li>Cogs für modulare Bot-Strukturen</li>
                <li>Alle Gateway Events der Discord-API</li>
              </ul>
              <div className="docs-callout docs-callout--info">
                Offizielle pycord-Dokumentation: <a href="https://docs.pycord.dev" target="_blank" rel="noopener noreferrer" className="docs-link">docs.pycord.dev</a>
              </div>
            </section>

            <div className="docs-divider" />

            {/* ═══════════════════════════════════════════
                VEX0
            ═══════════════════════════════════════════ */}
            <div className="docs-product-banner docs-product-banner--vex" id="vex0-intro">
              <div className="docs-product-banner-icon docs-product-banner-icon--logo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/vex0-icon.png" alt="Vex0" className="product-logo-icon" />
              </div>
              <div>
                <h2 className="docs-product-banner-name">Vex0</h2>
                <div className="docs-product-banner-meta">
                  <span className="docs-tag docs-tag--dev">In Entwicklung</span>
                  <span className="docs-product-banner-sub">npm · React / Next.js</span>
                </div>
              </div>
            </div>

            <section className="docs-section">
              <p className="docs-lead">
                Vex0 ist ein <strong>Open Source Component Framework</strong> für moderne Web-Apps — designed für Entwickler, die schnelle, konsistente UI-Komponenten ohne Overhead wollen.
              </p>
              <div className="docs-feature-list">
                <div className="docs-feature-item">
                  <span className="docs-feature-icon">⚡</span>
                  <div><strong>Zero Config</strong> — Komponenten direkt importieren, kein Build-Setup nötig</div>
                </div>
                <div className="docs-feature-item">
                  <span className="docs-feature-icon">🎨</span>
                  <div><strong>Theming</strong> — CSS-Variablen-basiertes Design-System, leicht anpassbar</div>
                </div>
                <div className="docs-feature-item">
                  <span className="docs-feature-icon">📦</span>
                  <div><strong>Tree-shakeable</strong> — Nur die Komponenten, die du nutzt, landen im Bundle</div>
                </div>
              </div>
              <div className="docs-callout docs-callout--info">
                Vex0 befindet sich in aktiver Entwicklung. Melde dich im Discord an, um Early Access und Updates zu erhalten.
              </div>
            </section>

            <section className="docs-section" id="vex0-start">
              <h2 className="docs-h2">Installation</h2>
              <div className="docs-callout docs-callout--warn">
                Das npm-Paket ist noch nicht öffentlich verfügbar. Die Installationsanleitung erscheint mit dem ersten Release.
              </div>
              <p>Geplant:</p>
              <div className="code-block">
                <div className="code-header">
                  <span className="code-lang">bash</span>
                </div>
                <pre><code>npm install @vex0/ui</code></pre>
              </div>
            </section>

            <section className="docs-section" id="vex0-components">
              <h2 className="docs-h2">Komponenten</h2>
              <p>Vex0 wird eine vollständige Komponentenbibliothek für React/Next.js mitbringen:</p>
              <ul className="docs-list">
                <li><code className="inline-code">Button</code> — Varianten: primary, ghost, destructive</li>
                <li><code className="inline-code">Card</code> / <code className="inline-code">CardContent</code> — Flexible Container-Komponente</li>
                <li><code className="inline-code">Input</code> / <code className="inline-code">Textarea</code> — Form-Elemente mit Validierungsstate</li>
                <li><code className="inline-code">Modal</code> — Accessible Dialog mit Backdrop</li>
                <li><code className="inline-code">Badge</code> / <code className="inline-code">Tag</code> — Status-Indikatoren</li>
              </ul>
            </section>

            <div className="docs-divider" />

            {/* ═══════════════════════════════════════════
                VYLDER
            ═══════════════════════════════════════════ */}
            <div className="docs-product-banner docs-product-banner--vylder" id="vylder-intro">
              <div className="docs-product-banner-icon docs-product-banner-icon--logo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/vylder-icon.png" alt="Vylder" className="product-logo-icon" />
              </div>
              <div>
                <h2 className="docs-product-banner-name">Vylder</h2>
                <div className="docs-product-banner-meta">
                  <span className="docs-tag docs-tag--soon">Coming Soon</span>
                  <span className="docs-product-banner-sub">Web · Visual + Code Builder</span>
                </div>
              </div>
            </div>

            <section className="docs-section">
              <p className="docs-lead">
                Vylder ist ein <strong>visueller Website-Builder mit integriertem Code-Editor</strong> — für Entwickler und Designer, die schnell professionelle Websites erstellen wollen, ohne zwischen Tool und IDE zu wechseln.
              </p>
              <div className="docs-feature-list">
                <div className="docs-feature-item">
                  <span className="docs-feature-icon">🖱️</span>
                  <div><strong>Visual Editor</strong> — Elemente per Drag-and-drop platzieren und direkt im Browser stylen</div>
                </div>
                <div className="docs-feature-item">
                  <span className="docs-feature-icon">💻</span>
                  <div><strong>Code Editor</strong> — Jederzeit in den Code wechseln und manuell anpassen</div>
                </div>
                <div className="docs-feature-item">
                  <span className="docs-feature-icon">🚀</span>
                  <div><strong>One-Click Deploy</strong> — Direkt aus Vylder auf vylder.dev oder eigene Domain deployen</div>
                </div>
              </div>
              <div className="docs-callout docs-callout--info">
                Vylder ist noch nicht öffentlich verfügbar. Auf <a href="https://vylder.dev" target="_blank" rel="noopener noreferrer" className="docs-link">vylder.dev</a> kannst du dich für Early Access eintragen.
              </div>
            </section>

            <section className="docs-section" id="vylder-features">
              <h2 className="docs-h2">Geplante Features</h2>
              <h3 className="docs-h3">Visual + Code Hybrid</h3>
              <p>Anders als reine No-Code-Tools sperrt Vylder dich nicht ein — du kannst jederzeit zwischen visueller Ansicht und echtem Code hin- und herschalten. Änderungen werden in beide Richtungen synchronisiert.</p>
              <h3 className="docs-h3">Component Library</h3>
              <p>Vylder kommt mit einer eingebauten Komponentenbibliothek (basierend auf Vex0) — fertige Sektionen, Navigation, Hero-Bereiche und mehr als Ausgangspunkt.</p>
              <h3 className="docs-h3">Export &amp; Deploy</h3>
              <p>Fertige Projekte können als statische HTML/CSS-Seite exportiert oder direkt über Vylder gehostet werden. Custom-Domain-Support ist geplant.</p>
            </section>

            {/* ── FOOTER ── */}
            <footer className="docs-footer">
              <p>Fragen? Komm in unseren <a href="https://discord.gg/yqQutP6EKV" target="_blank" rel="noopener noreferrer" className="docs-link">Discord Server</a>.</p>
              <p className="docs-footer-copy">© 2026 Flux0 · flux0.dev</p>
            </footer>

          </div>
        </main>
      </div>

      <CookieNotice />
    </div>
  );
}
