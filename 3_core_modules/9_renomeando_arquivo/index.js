const fs = require("fs")

const arqAntigo = "arquivo.txt"
const arqNovo = "novo-arquivo.txt"

fs.rename(arqAntigo, arqNovo, (err)=>{
    if(err){
        console.log(`Erro - ${err}`)
        return
    }else{
        console.log(`O arquivo ${arqAntigo} foi renomeado com sucesso para ${arqNovo}!!!`)
    }
})