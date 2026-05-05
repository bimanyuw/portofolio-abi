# Lando Norris — Inspired Fan Site
### A high-fidelity recreation of landonorris.com built with React + Vite + Tailwind + Framer Motion

---

## 🚀 Run Locally in 3 Steps

### Prerequisites
- **Node.js 18+** — download at https://nodejs.org

### Setup

```bash
# 1. Extract the archive and enter the folder
tar -xzf lando-norris-site.tar.gz
cd lando-site-clean

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Then open **http://localhost:5173** in your browser. Hot-reload is enabled — any file saves update instantly.

---

## 📦 Build for Production

```bash
npm run build       # outputs to /dist
npm run preview     # preview the production build locally
```

To deploy, upload the `/dist` folder to:
- **Vercel** — `vercel --prod`
- **Netlify** — drag & drop the `/dist` folder
- **GitHub Pages** — use the `gh-pages` package

---

## 🛠 Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| React | 18 | UI framework |
| Vite | 8 | Dev server & bundler |
| Tailwind CSS | 3 | Utility styling |
| Framer Motion | latest | Animations & scroll effects |
| Lucide React | latest | Icons |
| Google Fonts | — | Bebas Neue + DM Sans |

---

## 📁 Project Structure

```
src/
├── App.jsx        ← All components (Header, Hero, Helmets, etc.)
├── index.css      ← Global styles, grain texture, animations
└── main.jsx       ← React entry point

index.html         ← Google Fonts loaded here
tailwind.config.js ← Color tokens & font config
vite.config.js     ← Vite settings
```

---

## 🎨 What's Included

- ✅ **Custom cursor** — spring-animated lime ring (desktop only)
- ✅ **Sticky scroll header** — blurs on scroll, transparent on top
- ✅ **Mobile menu** — full-screen overlay with staggered link animations + image previews
- ✅ **Hero section** — Display font, lime glow text shadow, "next race" CTA, animated signature
- ✅ **Bio section** — Editorial quote layout with Framer Motion entrance animations
- ✅ **Horizontal photo strip** — Scroll-linked with GSAP-like motion via Framer `useScroll + useTransform`
- ✅ **On Track / Off Track cards** — Animated hover states on background image + arrow button
- ✅ **Helmets Hall of Fame** — Custom SVG helmets with hover float effect, horizontal scroll
- ✅ **Store promo** — Lime background section with grayscale → color product images
- ✅ **Partners marquee** — Auto-scrolling infinite loop, pause on hover
- ✅ **Social grid** — Masonry-style layout with span cells
- ✅ **Footer** — Ambient glow blobs, signature animation, email signup, partner list
- ✅ **Grain texture overlay** — Subtle CSS noise via SVG filter on `body::before`
- ✅ **Google Fonts** — Bebas Neue (display) + DM Sans (body)

---

## 🔧 Customization Tips

**Change the athlete name:**
Search and replace `Lando Norris` / `LN` in `App.jsx`

**Swap placeholder images:**
Images use `https://picsum.photos/seed/{seed}/{w}/{h}` — replace with real URLs

**Change accent color:**
Update `--lime: #d8ff1f` in `index.css` and `lime: { 300: "#d8ff1f" }` in `tailwind.config.js`

**Add real social links:**
Find `href="#socials"` and replace with actual URLs
