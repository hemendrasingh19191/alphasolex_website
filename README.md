# Alpha Solex LLP — Static Website

Clean Energy • Smart Engineering. A fast, responsive, single-page marketing website for
**Alpha Solex LLP** — Rooftop Solar, Ground Mount Solar and End-to-End EPC in Raipur (C.G.).

All content, logo and company details are taken directly from the official brochure.

## Tech stack

- Static **HTML + CSS + JavaScript** (no build step)
- **Tailwind CSS** via CDN for layout and utilities
- Custom `styles.css` for components and `script.js` for interactions
- Company logo and photos extracted from the source brochure (in `assets/`)

## Project structure

```
alpha-solex-website/
├── index.html        # All page content
├── styles.css        # Component styles on top of Tailwind
├── script.js         # Nav, scroll reveal, form validation
├── assets/
│   ├── logo.png          # Alpha Solex logo
│   ├── rooftop.png       # Rooftop solar image
│   ├── groundmount.png   # Ground mount solar image
│   └── install.png       # Installation illustration
├── .gitignore
└── README.md
```

## Run locally

The site is fully static, so you can simply open `index.html` in a browser.
For best results (correct asset paths), serve it over a local HTTP server:

### Option A — Python (already installed)
```powershell
cd alpha-solex-website
python -m http.server 5173
```
Then open http://localhost:5173

### Option B — Node.js
```powershell
cd alpha-solex-website
npx serve .
```

### Option C — VS Code
Install the **Live Server** extension, right-click `index.html` → **Open with Live Server**.

## Deploy from git

This is a plain static site — it deploys anywhere.

### GitHub Pages
1. Push this folder to a GitHub repository.
2. Repo **Settings → Pages → Build and deployment**.
3. Source: **Deploy from a branch**, Branch: `main`, Folder: `/ (root)`.
4. Your site goes live at `https://<username>.github.io/<repo>/`.

### Netlify / Vercel
- **Netlify:** drag-and-drop the folder, or connect the repo (no build command, publish directory `.`).
- **Vercel:** import the repo, framework preset **Other**, output directory `.`.

## Notes

- The enquiry form is client-side only (no backend). It validates input and shows a
  confirmation message. To collect submissions, connect it to a form service
  (Formspree, Netlify Forms, etc.) or your own API.
- Government scheme figures are **indicative** and reproduced from the brochure;
  eligibility and sanctions are subject to the applicable portal / CREDA / DISCOM rules.

---
© Alpha Solex LLP. GST: 22ACOFA0287H1ZH. Raipur, Chhattisgarh.
