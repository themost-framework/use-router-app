const aliases = require('module-alias');
const fs = require('fs');
const path = require('path');

const configPath = path.resolve(process.cwd(), 'jsconfig.json');

if (fs.statSync(configPath).isFile()) {
   const jsconfig = require(configPath);
   if (jsconfig && jsconfig.compilerOptions && jsconfig.compilerOptions.paths) {
    let baseUrl = process.cwd();
    if (jsconfig && jsconfig.compilerOptions && jsconfig.compilerOptions.baseUrl) {
        baseUrl = path.resolve(process.cwd(), jsconfig.compilerOptions.baseUrl);
    }
    const moduleAliases = Object.keys(jsconfig.compilerOptions.paths).reduce((previousValue, currentValue) => {
        const path0 = jsconfig.compilerOptions.paths[currentValue][0];
        previousValue[currentValue] = path.resolve(baseUrl, path0);
        return previousValue;
    }, {});

    aliases.addAliases(moduleAliases);
    
   }
}