const fs = require('fs');
const path = require('path');

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (file.endsWith('.html') || file.endsWith('.js') || file === 'build-manifest.json') {
      let content = fs.readFileSync(fullPath, 'utf8');
      const modified = content.replace(/\/_next\//g, '/portfolio/_next/');
      if (modified !== content) {
        fs.writeFileSync(fullPath, modified);
        console.log('Fixed:', fullPath);
      }
    }
  }
}

walk('out');
console.log('Done fixing paths!');
