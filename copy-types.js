import fs from 'fs';
import path from 'path';

// Source files
const sourceDir = path.join(process.cwd(), 'src');
const distDir = path.join(process.cwd(), 'dist');

// Copy type definition files
const filesToCopy = ['index.d.ts', 'Reveal.d.ts'];

filesToCopy.forEach(file => {
  const src = path.join(sourceDir, file);
  const dest = path.join(distDir, file);
  
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`✓ Copied ${file}`);
  }
});

// Remove unnecessary files
const filesToRemove = ['vite.svg', 'logo.svg'];

filesToRemove.forEach(file => {
  const dest = path.join(distDir, file);
  if (fs.existsSync(dest)) {
    fs.unlinkSync(dest);
    console.log(`✓ Removed ${file}`);
  }
});

console.log('✓ Type definitions copied successfully');
