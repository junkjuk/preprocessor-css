import fs from 'fs';

export default async function (cssFilePath, content) {
    fs.writeFile(cssFilePath, content, err => {
        if (err) {
            return err;
        }
      });
}