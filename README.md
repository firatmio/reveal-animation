<div align="center">
  <img src="./public/logo-trans.svg" alt="Reveal Animation" width="120" height="120" />
  <h1>Reveal Animation</h1>
  <p>✨ Smooth scroll reveal animations for React components</p>
  
  [![npm version](https://img.shields.io/npm/v/@firat/reveal-animation?style=flat-square&color=3B82F6)](https://www.npmjs.com/package/@firat/reveal-animation)
  [![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](LICENSE)
  [![React](https://img.shields.io/badge/React-%5E16.8%20%7C%7C%20%5E19-61dafb?style=flat-square&logo=react)](https://react.dev)
  [![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
  [![Bundle Size](https://img.shields.io/bundlephobia/minzip/@firat/reveal-animation?style=flat-square&color=06B6D4)](https://bundlephobia.com/package/@firat/reveal-animation)
</div>

---

## 🎯 Overview

A **lightweight**, **high-performance** React component that triggers beautiful CSS animations when elements scroll into view. Perfect for creating engaging landing pages, portfolios, and interactive user experiences.

Built with **TypeScript**, **zero external dependencies** (except React), and optimized for production use.

---

## ✨ Features

| Feature | Benefit |
|---------|---------|
| 🚀 **High Performance** | CSS-based animations that never block the main thread |
| 🎨 **Easy to Use** | Wrap any content to add reveal effects instantly |
| ⚙️ **Highly Customizable** | Control width, delay, and animation styles |
| 📘 **TypeScript Support** | Fully typed with excellent IDE support |
| 📦 **Lightweight** | ~8.7 KB (gzipped: ~3.2 KB) with no heavy dependencies |
| ♿ **Accessible** | Uses modern Intersection Observer API |
| 🔄 **Framework Agnostic CSS** | Customize animations with standard CSS |
| 🌍 **Universal Browser Support** | Works on all modern browsers |


---

## 📦 Installation

Choose your favorite package manager:

```bash
# npm
npm install @firat/reveal-animation

# yarn
yarn add @firat/reveal-animation

# pnpm
pnpm add @firat/reveal-animation

# bun
bun add @firat/reveal-animation
```

---

## 🚀 Quick Start

### Basic Usage

```tsx
import { Reveal } from '@firat/reveal-animation';

function App() {
  return (
    <Reveal>
      <h1>This content will be revealed with a smooth animation!</h1>
    </Reveal>
  );
}
```

### With Custom Props

```tsx
import { Reveal } from '@firat/reveal-animation';

function App() {
  return (
    <div>
      <Reveal width="100%">
        <section className="hero">
          <h2>Full Width Animation</h2>
        </section>
      </Reveal>

      <Reveal delay={200}>
        <p>This animates with a 200ms delay</p>
      </Reveal>

      <Reveal width="fit-content" delay={400}>
        <button>Click Me!</button>
      </Reveal>
    </div>
  );
}
```

---

## 📋 Props API

| Prop | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| `children` | `ReactNode` | Required | Content to be revealed with animation |
| `width` | `"fit-content" \| "100%"` | `"fit-content"` | Width of the wrapper element |
| `delay` | `number` | `0` | Animation delay in milliseconds |

### Example with All Props

```tsx
<Reveal width="100%" delay={300}>
  <div>Custom styled content</div>
</Reveal>
```

---

## 🎨 Animation Customization

### Default Animation

The component comes with a smooth fade-in and slide-up animation:

```css
.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease-out;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

### Custom Animations

Override the default styles in your CSS:

```css
/* Fade in from left */
.reveal {
  opacity: 0;
  transform: translateX(-40px);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.reveal.visible {
  opacity: 1;
  transform: translateX(0);
}

/* Zoom in animation */
.reveal {
  opacity: 0;
  transform: scale(0.8);
  transition: all 0.5s ease-out;
}

.reveal.visible {
  opacity: 1;
  transform: scale(1);
}

/* Rotate and fade */
.reveal {
  opacity: 0;
  transform: rotateY(90deg);
  transition: all 0.7s ease-out;
}

.reveal.visible {
  opacity: 1;
  transform: rotateY(0deg);
}
```

---

## 🌐 Browser Support

- ✅ Chrome 51+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 16+
- ✅ Mobile browsers (iOS Safari 12.2+, Chrome Mobile)

Requires:
- React 16.8+ (Hooks support)
- ES2015+ support
- Intersection Observer API support

---

## 📚 Advanced Examples

### Multiple Staggered Animations

```tsx
function StaggeredList() {
  return (
    <ul>
      {['Item 1', 'Item 2', 'Item 3', 'Item 4'].map((item, index) => (
        <li key={item}>
          <Reveal delay={index * 100}>
            {item}
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
```

### Responsive Layout

```tsx
function ResponsiveSection() {
  const isMobile = window.innerWidth < 768;
  
  return (
    <Reveal width={isMobile ? "100%" : "fit-content"}>
      <div className="responsive-content">
        <h2>Responsive Content</h2>
      </div>
    </Reveal>
  );
}
```

---

## 🛠️ Development

Clone and set up the project:

```bash
git clone https://github.com/yourusername/reveal-animation.git
cd reveal-animation
bun install
bun run dev
```

### Available Scripts

```bash
# Development server with HMR
bun run dev

# Build for production
bun run build

# Run linting
bun run lint

# Preview production build
bun run preview
```

---

## 📄 License

MIT © 2026 - [See LICENSE file](LICENSE)

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a [Pull Request](https://github.com/yourusername/reveal-animation/pulls).

### How to Contribute

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📞 Support

- 📖 [Documentation](https://github.com/yourusername/reveal-animation#readme)
- 🐛 [Report Issues](https://github.com/yourusername/reveal-animation/issues)
- 💬 [Discussions](https://github.com/yourusername/reveal-animation/discussions)

---

<div align="center">
  <p>Made with ❤️ by <a href="https://github.com/yourusername">Firat</a></p>
  <p><a href="https://github.com/yourusername/reveal-animation">⭐ Star us on GitHub</a></p>
</div>
