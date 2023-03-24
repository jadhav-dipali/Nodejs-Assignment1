const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	fs.writeFile(fileName,fileContent)
}

const myFileReader = async (fileName) => {
	fs.readFile(fileName);
}


const myFileUpdater = async (fileName, fileContent) => {
	fs.appendFile(fileName,fileContent);
}

const myFileDeleter = async (fileName) => {
	fs.unlink(fileName);
}



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }