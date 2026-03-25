# Sandle Kumar — MERN Stack Portfolio

A modern, animated React portfolio built for freelance client attraction.

---

## 🚀 Quick Start

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
│   └── images/              ← 📸 ADD YOUR PROJECT SCREENSHOTS HERE
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
│   │   └── portfolioData.js     ← ✏️ EDIT YOUR INFO HERE
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

## 📸 Add Your Project Images

1. Take screenshots of your projects
2. Save them as PNG files
3. Place in `public/images/` folder with these exact names:
   - `car-booking.png`
   - `tea-shop.png`
   - `instagram.png`
   - `fitness.png`
   - `portfolio.png`

> If images are missing, a styled emoji placeholder shows automatically.

---

## 👤 Add Your Profile Photo

In `src/components/Hero.jsx`, find this line:
```jsx
src="https://api.dicebear.com/7.x/avataaars/svg?seed=SandleKumar..."
```

Replace with your photo path:
```jsx
src="/images/profile.jpg"
```

Then add your photo to `public/images/profile.jpg`

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
