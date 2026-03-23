const fs = require('fs');
const https = require('https');
const path = require('path');

const assetsDir = 'c:/Users/stewa/portfolio_hums/assets';

const icons = {
  'html.svg': 'html5',
  'css.svg': 'css3',
  'react.svg': 'react',
  'javascript.svg': 'javascript',
  'java.svg': 'java',
  'c++.svg': 'cplusplus',
  'git.svg': 'git',
  'figma.svg': 'figma',
  'wordpress.svg': 'wordpress',
  'elementor.svg': 'elementor',
  'webflow.svg': 'webflow'
};

const placeholders = {
  'divi.svg': 'Divi',
  'impreza.svg': 'Impreza',
  'ghl.svg': 'GHL'
};

Object.keys(icons).forEach(filename => {
  const icon = icons[filename];
  const url = `https://raw.githubusercontent.com/simpleicons/simpleicons/develop/icons/${icon}.svg`;
  const filePath = path.join(assetsDir, filename);
  
  https.get(url, (res) => {
    if (res.statusCode === 200) {
      const file = fs.createWriteStream(filePath);
      res.pipe(file);
    } else {
      console.log('Failed to download', icon, res.statusCode);
    }
  }).on('error', (e) => {
    console.error(e);
  });
});

Object.keys(placeholders).forEach(filename => {
  const name = placeholders[filename];
  const filePath = path.join(assetsDir, filename);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="15" fill="#2a2a35" />
  <text x="50" y="55" font-family="sans-serif" font-size="16" fill="#fff" text-anchor="middle" font-weight="bold">${name}</text>
</svg>`;
  fs.writeFileSync(filePath, svg);
});

console.log('Finished initiating SVG creations.');
