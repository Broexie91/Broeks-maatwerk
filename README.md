# Broeks Maatwerk Website

Professionele website voor **Broeks Maatwerk** — vakkundige timmerman actief in Oost-Nederland.

## 📁 Projectstructuur

```
src/
├── layouts/
│   └── main.html          # Hoofd HTML-layout (nav + footer + {{ content }})
├── pages/
│   ├── index.md           # Homepage (Hero, Diensten, Over Mij preview, CTA)
│   ├── over-mij.md        # Over pagina (Tijdlijn, Waarden, Kernwaarden)
│   ├── portfolio.md       # Portfolio (Grid, Werkwijze stappen, CTA)
│   └── contact.md         # Contact (Formulier, Info, FAQ)
└── assets/
    ├── css/
    │   └── style.css      # Volledige huisstijl (design tokens, componenten)
    ├── js/
    │   └── main.js        # Interactiviteit (nav, scroll-reveal, animaties, form)
    └── img/
        ├── hero-background.png
        ├── project1.jpg   # Maatwerk Interieur & Kastenwanden
        ├── project2.jpg   # Moderne Keukens & Badkamermeubels
        ├── project3.jpg   # Renovatie & Overkappingen
        └── project4.jpg   # Houten Trappen
```

## 🎨 Huisstijl

| Token | Kleur | Gebruik |
|-------|-------|---------|
| `--color-wood-dark` | `#3D2B1F` | Navigatie, footer achtergrond |
| `--color-wood-mid` | `#6B4226` | CTA-banners, gradients |
| `--color-wood-accent` | `#C8860A` | Accenten, knoppen, labels |
| `--color-wood-pale` | `#F5ECD7` | Tekst op donkere achtergrond |
| `--color-wood-cream` | `#FAF6EE` | Achtergrond wisselende secties |

**Fonts:**
- Koppen: *Playfair Display* (serif, klassiek)
- Broodtekst: *Inter* (sans-serif, modern leesbaar)

## 🔧 Gebruik

Deze bestanden zijn ontworpen voor een **Static Site Generator** (bijv. Eleventy, Hugo, Jekyll) die:
1. De `{{ content }}` placeholder in `main.html` vervangt met de HTML-inhoud van elke `.md`-pagina.
2. De frontmatter (`layout`, `title`, `description`) verwerkt voor meta-tags.

### Lokaal testen (zonder SSG)

U kunt de HTML van de layout direct bekijken door de `{{ content }}` tijdelijk te vervangen met de inhoud van een pagina, en de bestanden te openen via een lokale server (bijv. Live Server in VS Code).

## ✨ Features

- 📱 **Volledig responsive** — mobiel hamburger menu, aanpassende grid layouts
- 🎬 **Scroll-reveal animaties** — elementen fade in bij scrollen
- 🔢 **Geanimeerde tellers** — statistieken tellen op bij binnenkomst
- 🖱️ **Hover effecten** — premium kaartinteracties
- ♿ **Toegankelijk** — ARIA-labels, semantische HTML5, focus states
- 🔍 **SEO-geoptimaliseerd** — meta tags, Open Graph, beschrijvende alt-teksten
- 📧 **Contactformulier** — met validatie en submit-feedback

## 📝 Aanpassen

Vervang de volgende placeholders met echte gegevens:
- `+31 6 00 00 00 00` → Echt telefoonnummer
- `info@broeksmaatwerk.nl` → Echt e-mailadres
- Foto's in `/assets/img/` → Echte projectfoto's
- Formulier `action="#"` → Echte backend of service (bijv. Formspree, Netlify Forms)
