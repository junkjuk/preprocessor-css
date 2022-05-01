import { promises as fs } from 'fs';

export default async function (mycssFilesPath) {
    let mycssTextArray = [];
    for (const file of mycssFilesPath) {
        let fileData = await fs.readFile(file, 'utf8');
        mycssTextArray.push(fileData.toString());
    }
    return mycssTextArray;
}