# DotGang Community Website

A modern Vue.js 3 community website for the DotGang developer group, built with the Composition API, Vue Router, Pinia, and Tailwind CSS.

## Overview

DotGang is a developer-driven community focused on .NET development. This website represents our team, vision, and contact points with a sleek, responsive design.

## Features

- **Modern Vue 3 Architecture** - Using Composition API and `<script setup>` syntax
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Dark/Light Mode** - Theme toggle with system preference detection and localStorage persistence
- **Animated UI Elements** - Subtle animations and transitions for a premium feel
- **Five Main Pages**:
  - Home - Featuring animated banner, mission statement, and key features
  - About Us - Sharing the DotGang story, vision and values
  - Team - Showcasing team members with social media links
  - Events - Listing upcoming and past meetups/workshops with filtering
  - Contact - Including contact form and social media links

## Tech Stack

- Vue.js 3 (Composition API)
- Vue Router
- Pinia for state management
- Tailwind CSS for styling
- Vite for build tooling

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/dotgang.git
   cd dotgang
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

```
dotgang/
├── public/             # Static assets
├── src/
│   ├── assets/         # CSS, images, etc.
│   ├── components/     # Reusable Vue components
│   ├── router/         # Vue Router configuration
│   ├── stores/         # Pinia stores
│   ├── views/          # Page components
│   ├── App.vue         # Root component
│   └── main.js         # Application entry point
├── index.html          # HTML template
└── package.json        # Project metadata
```

## Customization

1. **Theme Colors**: Edit the Tailwind configuration in `tailwind.config.js`
2. **Team Members**: Update the data in `src/stores/team.js`
3. **Content**: Modify the content in Vue components as needed

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built with Vue.js 3
- Styled with Tailwind CSS
- Icons from Heroicons
