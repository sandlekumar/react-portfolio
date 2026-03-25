# Sandle Kumar — MERN Stack Portfolio


---

##  Start

```bash
# 1. Install dependencies
npm install

# 2. Run locally
npm run dev

# 3. Open in browser
# http://localhost:3000
```

---

## 📁 Folder Structure

```
portfolio/
├── public/
│   └── images/              
│       ├── car-booking.png
│       ├── tea-shop.png
│       ├── instagram.png
│       ├── fitness.png
│       └── portfolio.png
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx + .css
│   │   ├── Hero.jsx + .css      ← Typewriter + profile photo
│   │   ├── About.jsx + .css
│   │   ├── Skills.jsx + .css    ← Auto-scroll slider
│   │   ├── Projects.jsx + .css  ← Cards with your images
│   │   └── Contact.jsx + .css
│   │
│   ├── data/
│   │   └── portfolioData.js     
│   │
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── index.html
├── vite.config.js
└── package.json
```

---

## ✏️ Customize Your Info

Edit **`src/data/portfolioData.js`** to update:
- Your name, email, GitHub, LinkedIn, Fiverr links
- Your projects (title, description, tech, GitHub link, live link)
- Your skills list

---


## 🌐 Deploy to Netlify (Free)

```bash
# Build
npm run build

# Then drag the 'dist' folder to netlify.com/drop
```

Or connect your GitHub repo for auto-deploy on every push!

---

## 🛠 Tech Stack

- React 18 + Vite
- Pure CSS (no Tailwind, no Bootstrap)
- Custom animations (CSS keyframes + IntersectionObserver)
- Google Fonts (Syne + Space Mono + DM Sans)
