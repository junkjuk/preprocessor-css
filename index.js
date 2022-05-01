import myconfig from './myconfig.js'
import readMycss from './readMycss.js';
import writeToCss from './writeToCss.js';

async function main(){
    let data = await readMycss(myconfig.contentFiles);
    writeToCss(myconfig.outputFile[0] ,data[0]);
}
main();