# Ynot Advisory

This is a static React application built with Vite.

## Development

```bash
npm install
npm run dev
```

## Building for Production

```bash
npm run build
```

This will create a `docs` folder with your static site ready for deployment.

## Deployment

### Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. The `_redirects` file will handle client-side routing

### Vercel

1. Build the project: `npm run build`
2. Deploy to Vercel
3. The `vercel.json` file will handle client-side routing

### GitHub Pages

1. Push to main branch - GitHub Actions will automatically build and deploy
2. The site will be available at `https://[username].github.io/ynot-advisory/`
3. No manual build/deploy needed - it's fully automated

### Any Static Hosting

1. Build the project: `npm run build`
2. Upload the contents of the `docs` folder to your hosting provider
3. Ensure your hosting provider supports client-side routing (SPA fallback to index.html)

## Preview Build

To preview your production build locally:

```bash
npm run build
npm run preview
```

## Features

- React 18 with TypeScript
- Vite for fast builds
- Tailwind CSS for styling
- Radix UI components
- Client-side routing with Wouter
- Responsive design
- Dark/light theme support
