# Quick Setup Guide

## Installation Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   - The app will automatically open at `http://localhost:3000`
   - Or manually navigate to the URL shown in the terminal

## Before Going Live

1. **Add Your Resume**
   - Place your resume PDF file in the `public` folder
   - Name it `resume.pdf`
   - The download button will automatically work

2. **Update Contact Information**
   - Edit `src/components/Contact.jsx`
   - Update email, phone, and social media links

3. **Update Project Links**
   - Edit `src/components/Projects.jsx`
   - Add actual GitHub and demo links for each project

4. **Customize Content**
   - Review all sections and update with your actual information
   - Update skills percentages in `src/components/Skills.jsx`
   - Add real project descriptions and images

## Build for Production

```bash
npm run build
```

The optimized files will be in the `dist` folder, ready to deploy to any static hosting service (Netlify, Vercel, GitHub Pages, etc.).

