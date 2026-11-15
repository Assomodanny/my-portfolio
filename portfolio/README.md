# Abdus somod / frontend developer portfolio

A responsive personal portfolio website that showcases my skills, projects, and services. Built as a hands-on project while learning frontend development.

**Live site:** TODO: paste your Vercel link here

## Features

- Responsive layout for mobile, tablet, and desktop
- Dark and light mode, saved in the browser
- Smooth scrolling and scroll animations
- Mobile navigation menu
- Project cards driven by a data file
- Contact form and social links
- Back-to-top button
- Accessibility basics: skip link, keyboard focus styles, labelled form fields, reduced-motion support
- SEO page title and metadata

## Built With

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide React](https://lucide.dev/)
- [Vite](https://vite.dev/)

## Getting Started

Make sure you have Node.js 20 or newer installed.

```bash
# Clone the repository
git clone https://github.com/your-username/portfolio.git

# Go into the project folder
cd portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

To create a production build:

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── layout/    Navbar, Footer, BackToTop
│   ├── sections/  Hero, About, Skills, Projects, Services, Contact
│   └── ui/        Button, Reveal, SectionHeading, ProjectCard, SocialLinks, icons
├── data/          Content files (profile, about, skills, projects, services, socials)
├── hooks/         useTheme
└── types/         Shared TypeScript types
```

## Customizing the Content

All text and links live in the `src/data` folder, so components don't need to be edited:

- `profile.ts`: name, title, email, WhatsApp number
- `about.ts`: About Me text
- `projects.ts`: project cards
- `socials.ts`: social links

## Deployment

The site is deployed on [Vercel](https://vercel.com/). Every push to the `main` branch triggers an automatic redeploy.

## Contact

- Email: TODO: your email
- LinkedIn: TODO: your LinkedIn link
- GitHub: TODO: your GitHub link