# Orange Black Personal Portfolio

A redesigned personal portfolio based on the uploaded Lando-inspired website structure.

## Tech Stack

- React + Vite
- Tailwind CSS
- Framer Motion
- Lucide React

## Main Changes

- Changed the theme from lime/black racing style to orange/black portfolio branding.
- Replaced the original driver content with a personal portfolio structure.
- Added sections for Home, About, Selected Work, Projects, Experience, Skills, and Contact.
- Added project cards for NUSALOKA, Katalis Village Tourism, TikTakTuk D14, and Skill Gap Portfolio UX.
- Updated page title and meta description.

## How to Run

```bash
npm install
npm run dev
```

## How to Build

```bash
npm run build
```

The production build will be generated in the `dist` folder.

## Personalization Notes

Edit `src/App.jsx` to replace placeholder contact links and email:

```js
const profile = {
  email: "hello@yourdomain.com",
};
```

You can also replace the `projects`, `experiences`, and `skills` arrays in the same file.
