# Zannatun Nayeem — Personal Portfolio

> Personal portfolio site for Zannatun Nayeem, Senior DevOps Engineer at Robi Axiata PLC.

**Live:** [zanayeem.github.io](https://zanayeem.github.io)

---

## Tech Stack

| Layer | Choice |
|---|---|
| Hosting | GitHub Pages (static) |
| Markup | Semantic HTML5 |
| Styles | Vanilla CSS3 with custom properties |
| Scripts | Vanilla ES6 — zero dependencies |
| Icons | Font Awesome 5 (local webfonts) |
| Font | Inter via Google Fonts |

No build tools, no frameworks, no npm. Deploys on every `git push`.

---

## Features

- Dark mode design system (`#0f0f13` background, `#6c63ff` accent)
- Sticky navbar with scroll-triggered backdrop blur and active-link highlight
- Hero typing animation cycling through professional roles
- Vertical experience timeline with hover glow
- Projects section — 8 platforms built/operated at RedDot Digital & Robi Axiata
- Skills grid and certifications cards
- Scroll-triggered fade-in animations via `IntersectionObserver`
- Responsive down to 375 px with hamburger mobile menu
- SVG favicon with initials

---

## Sections

| Section | Content |
|---|---|
| Hero | Name, typing animation, CTA buttons, social links |
| About | Bio, profile photo, quote |
| Experience | Work history timeline (2021 – present) |
| Skills | DevOps tooling grouped by category |
| Projects | Binge, eCRM, HR4U, bdtickets, RAFM, Unisend, FSD, SecureBoard |
| Certifications | CKA (Linux Foundation), Python Specialization (Coursera) |
| Contact | Email + social icons |

---

## Local Development

No build step required — open `index.html` directly in a browser, or serve with any static file server:

```bash
# Python
python -m http.server 8000

# Node (npx)
npx serve .
```

---

## Project Structure

```
zanayeem.github.io/
├── index.html
├── favicon.svg
├── favicon.png
├── assets/
│   ├── css/
│   │   ├── main.css              # All styles
│   │   └── fontawesome-all.min.css
│   ├── js/
│   │   └── main.js               # Vanilla ES6
│   └── webfonts/                 # Font Awesome font files
└── images/
    └── nayeem.jpg                # Profile photo
```

---

## License

Site design and content © 2025 Zannatun Nayeem. All rights reserved.  
Font Awesome icons licensed under [SIL OFL 1.1](https://scripts.sil.org/OFL).
