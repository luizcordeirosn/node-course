const path = require("path")

// Path absoluto
console.log(path.resolve("teste.txt"))

// Formar path
const midFolder = "relatorios"
const fileName = "luiz.txt"

const finalPath = path.join("/", "arquivos", midFolder, fileName)

console.log(finalPath)