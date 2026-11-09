import type { Metadata } from 'next';
import Navbar from '@/components/landing/Navbar';
import SiteFooter from '@/components/landing/SiteFooter';
import CookieNotice from '@/components/landing/CookieNotice';

export const metadata: Metadata = {
  title: 'Store · Flux Network',
  description: 'Plugins, Mods und Tools von Flux Network. Kostenlos auf Modrinth verfügbar.',
  openGraph: {
    type: 'website',
    url: 'https://flux0.dev/store',
    title: 'Store · Flux Network',
    description: 'Plugins, Mods und Tools von Flux Network. Kostenlos auf Modrinth verfügbar.',
    siteName: 'Flux0',
  },
};

type Platform = 'modrinth';
type Category = 'Plugin' | 'Mod' | 'Datapack';

interface StoreItem {
  slug: string;
  name: string;
  category: Category;
  platform: Platform;
  platformUrl: string;
  mcVersion: string;
  loader: string;
  server?: string;
  desc: string;
  version: string;
  tags: string[];
}

const ITEMS: StoreItem[] = [
  {
    slug: 'prismspawn',
    name: 'PrismSpawn',
    category: 'Plugin',
    platform: 'modrinth',
    platformUrl: 'https://modrinth.com/plugin/prismspawn',
    mcVersion: '1.21.1',
    loader: 'Fabric',
    server: 'Lyxora',
    desc: 'Spawn-Management Plugin für Fabric-Server. Setzt und verwaltet Spawn-Punkte, Rückkehr-Mechaniken und bietet flexible Konfiguration für Admins.',
    version: 'v1.0',
    tags: ['Spawn', 'Utility', 'Admin'],
  },
];

const MODRINTH_ICON = (
  <svg width="14" height="14" viewBox="0 0 512 514" fill="currentColor" aria-hidden="true">
    <path d="M503.16 323.56a248.5 248.5 0 0 1-44.67 83.17 251.26 251.26 0 0 1-72.57 60.46 254.63 254.63 0 0 1-93.6 27.14v-71.47a181.3 181.3 0 0 0 65.72-19.7 179.65 179.65 0 0 0 51.74-43.1 177.19 177.19 0 0 0 31.84-59.13 173.45 173.45 0 0 0 5.46-67.42 177.86 177.86 0 0 0-19.5-66.06 179.6 179.6 0 0 0-42.62-53.49A181.26 181.26 0 0 0 326.3 80.09a183.44 183.44 0 0 0-70.3-7.62V.78a255.88 255.88 0 0 1 95.18 23.52 258.49 258.49 0 0 1 77.3 57.62 262.52 262.52 0 0 1 50.59 85.44 266.62 266.62 0 0 1 14.29 99.08 265.51 265.51 0 0 1-9.08 55.12z"/>
    <path d="M256 480.11a224.34 224.34 0 0 1-87.45-17.44 227.69 227.69 0 0 1-72.69-49.23A230.9 230.9 0 0 1 48 340.56a233.53 233.53 0 0 1-9.4-78.56 234.34 234.34 0 0 1 24.63-91.7A232.06 232.06 0 0 1 120 103.4a228.33 228.33 0 0 1 75.28-39.49A225.78 225.78 0 0 1 256 56.68v71.19a155.32 155.32 0 0 0-57.73 9.65 157 157 0 0 0-50.8 29.24 158 158 0 0 0-37.08 48.23 160.1 160.1 0 0 0-14.74 62.37 162.11 162.11 0 0 0 7.47 54.73 160.14 160.14 0 0 0 31.37 51.18 157.6 157.6 0 0 0 50.37 36.19 155.56 155.56 0 0 0 65.07 15.17v71.48a2.21 2.21 0 0 1-1 .01z"/>
  </svg>
);

const CATEGORY_COLORS: Record<Category, { bg: string; border: string; text: string }> = {
  Plugin:   { bg: 'rgba(139,92,246,0.1)',  border: 'rgba(139,92,246,0.3)',  text: '#a78bfa' },
  Mod:      { bg: 'rgba(59,130,246,0.1)',  border: 'rgba(59,130,246,0.3)',  text: '#60a5fa' },
  Datapack: { bg: 'rgba(245,158,11,0.1)', border: 'rgba(245,158,11,0.3)', text: '#fbbf24' },
};

function PluginIcon({ name }: { name: string }) {
  return (
    <div className="store-item-icon">
      <span>{name.slice(0, 2)}</span>
    </div>
  );
}

export default function StorePage() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <div className="store-hero">
        <div className="container">
          <div className="section-label-row" style={{ justifyContent: 'center', marginBottom: '16px' }}>
            <span className="dot dot--grün" />
            STORE
          </div>
          <h1>
            Plugins &amp; Mods<br />
            <span style={{ color: 'var(--accent)' }}>von Flux Network.</span>
          </h1>
          <p>Kostenlose Plugins und Mods für Minecraft, verfügbar auf Modrinth.</p>
        </div>
      </div>

      {/* ITEMS */}
      <section className="store-section">
        <div className="container">

          <div className="store-section-label">
            <span className="dot" style={{ background: '#1bd96a' }} />
            PLUGINS
          </div>
          <h2 className="store-section-title">Verfügbare Plugins</h2>
          <p className="store-section-sub">
            Alle Plugins werden aktiv gepflegt und sind kostenlos auf Modrinth verfügbar.
          </p>

          <div className="store-grid">
            {ITEMS.filter(i => i.category === 'Plugin').map(item => {
              const cat = CATEGORY_COLORS[item.category];
              return (
                <div key={item.slug} className="store-card">
                  <div className="store-card-top">
                    <div className="store-card-badges">
                      <span
                        className="store-badge"
                        style={{ background: cat.bg, borderColor: cat.border, color: cat.text }}
                      >
                        {item.category}
                      </span>
                      <span className="store-badge store-badge--modrinth">
                        {MODRINTH_ICON}
                        Modrinth
                      </span>
                    </div>
                  </div>

                  <div className="store-card-body">
                    <PluginIcon name={item.name} />
                    <div>
                      <div className="store-card-name">{item.name}</div>
                      <div className="store-card-version">{item.version}</div>
                    </div>
                  </div>

                  <p className="store-card-desc">{item.desc}</p>

                  <div className="store-card-meta">
                    {[
                      { label: 'MC', val: item.mcVersion },
                      { label: 'Loader', val: item.loader },
                      ...(item.server ? [{ label: 'Server', val: item.server }] : []),
                    ].map(m => (
                      <div key={m.label} className="store-meta-item">
                        <span className="store-meta-label">{m.label}</span>
                        <span className="store-meta-val">{m.val}</span>
                      </div>
                    ))}
                  </div>

                  <div className="store-card-tags">
                    {item.tags.map(tag => (
                      <span key={tag} className="mc-tag">
                        <span className="mc-tag-dot" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={item.platformUrl}
                    className="store-card-cta"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Auf Modrinth ansehen</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M7 17L17 7M17 7H7M17 7v10"/>
                    </svg>
                  </a>
                </div>
              );
            })}

            {/* Placeholder — coming soon */}
            <div className="store-card store-card--soon">
              <div className="store-card-soon-inner">
                <div className="store-card-soon-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                  </svg>
                </div>
                <span className="store-card-soon-text">Mehr kommt bald</span>
                <span className="store-card-soon-sub">Weitere Plugins &amp; Mods in Entwicklung.</span>
              </div>
            </div>
          </div>
        </div>
      </section>


<SiteFooter />
      <CookieNotice />
    </>
  );
}
