const fs = require('fs')

console.log("Início")

fs.writeFile('arquivo.txt', 'Olá!!!', function(err){
    setTimeout(function (){
        console.log("Arquivo criado!")
    }, 1000)
})

console.log("Fim")