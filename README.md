# Reveal Animation

A lightweight React component that triggers smooth reveal animations when elements scroll into view. Perfect for creating engaging landing pages and interactive experiences.

## Features

✨ **Smooth Animations** - CSS-based animations for excellent performance  
🎯 **Easy to Use** - Wrap any content to add reveal effects  
⚙️ **Customizable** - Control width, delay, and animation style  
🎨 **TypeScript Support** - Fully typed component  
📦 **Lightweight** - No heavy dependencies  
♿ **Accessible** - Uses Intersection Observer API

## Installation

```bash
npm install @firat/reveal-animation
# or
yarn add @firat/reveal-animation
# or
bun add @firat/reveal-animation
```

## Usage

### Basic Example

```tsx
import { Reveal } from '@firat/reveal-animation';

function App() {
  return (
    <Reveal>
      <h1>This text will be revealed with animation!</h1>
    </Reveal>
  );
}
```

### With Props

```tsx
<Reveal width="100%" delay={200}>
  <p>Custom width and animation delay</p>
</Reveal>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | Required | Content to be revealed |
| `width` | `"fit-content" \| "100%"` | `"fit-content"` | Width of the wrapper element |
| `delay` | `number` | `0` | Animation delay in milliseconds |

## Animation Customization

The component uses CSS animations from `Reveal.module.css`. You can customize the animation by modifying the CSS variables or overriding the `reveal` and `visible` classes:

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

## Browser Support

Works on all modern browsers that support:
- ES2015
- React 16.8+
- Intersection Observer API

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
