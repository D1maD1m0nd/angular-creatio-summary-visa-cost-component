const fs = require('fs-extra');
const concat = require('concat');
const componentPath =  './dist/summary-visa-cost-component/summary-visa-cost-component.js';

(async function build() {
  const files = [
    './dist/summary-visa-cost-component/runtime.js',
    './dist/summary-visa-cost-component/polyfills.js',
    './dist/summary-visa-cost-component/main.js',
  ].filter((x) => fs.pathExistsSync(x));
  await fs.ensureFile(componentPath);
  await concat(files, componentPath);
})();
