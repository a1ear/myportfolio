# Anton Magbanua - Portfolio Website

A modern, responsive personal portfolio website built with React.js showcasing skills, projects, and services.

## Features

- 🎨 Modern, clean UI with blue and white tech-inspired theme
- 📱 Fully responsive design for mobile and desktop
- ✨ Smooth animations (fade-in, slide-in effects)
- 🚀 Fast and optimized performance
- 📄 Resume download functionality
- 📧 Contact form
- 🎯 All sections: Home, About, Skills, Projects, Services, Contact

## Tech Stack

- React 18
- Vite
- React Router DOM
- React Icons
- CSS3 with animations

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` folder.

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Services.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── App.jsx
├── App.css
├── main.jsx
└── index.css
```

## Customization

### Update Personal Information

Edit the following files to update your information:
- `src/components/Home.jsx` - Hero section
- `src/components/About.jsx` - About section
- `src/components/Contact.jsx` - Contact information
- `src/components/Projects.jsx` - Project listings
- `src/components/Skills.jsx` - Skills and expertise

### Add Resume

Place your resume PDF file in the `public` folder and name it `resume.pdf`. The download button will automatically link to it.

### Update Colors

Modify the CSS variables in `src/index.css`:
```css
:root {
  --primary-blue: #2563eb;
  --dark-blue: #1e40af;
  --light-blue: #3b82f6;
  /* ... */
}
```

## License

This project is open source and available for personal use.

## Contact

Anton Magbanua
- Email: anton.magbanua@example.com
- Location: Philippines

