const path = require('path');
const url = require('url');
const fs = require('fs');
const fsPromises = require('fs').promises;
const rootFolder = process.cwd();
//joining path of directory 
const directoryPath = path.join(rootFolder, '.next','static');

async function getFiles(filePath) {
    //passsing directoryPath and callback function
    const files = await fsPromises.readdir(filePath);

    const subfolderPathList = files.filter((file) => fs.lstatSync(path.join(filePath, file)).isDirectory())

    await Promise.all(
		subfolderPathList.map(
			async (subfolderPath) => { 
                const subFiles = await getFiles(path.join(filePath, subfolderPath));
                subFiles.forEach((file) => {
                    files.push(file)
                })
            }
		),
	);

    return files.filter(f => !subfolderPathList.includes(f)).map( (f) => {
        return path.join(filePath, f).replace(rootFolder, "")
    });

}

async function getAllAssetFiles() {
    const jsFiles = await getFiles(path.join(directoryPath, 'chunks'));
    const cssFiles = await getFiles(path.join(directoryPath, 'css'));

    return { cssFiles, jsFiles }
}

export default async function handler(req, res) {
    const {cssFiles=[], jsFiles=[]} = await getAllAssetFiles();

    res.status(200).json(
        {
          "code": 200,
          "response": {
            "assets": {
                "css": cssFiles,
                "js": jsFiles
            }
          }
        }
    );
}