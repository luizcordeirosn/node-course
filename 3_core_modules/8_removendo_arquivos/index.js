const fs = require("fs")

fs.unlink("arquivo.txt", (err)=>{

    if(err){
        console.log(`Erro - ${err}`)
        return
    }else{
        console.log("Arquivo removido com sucesso!!!")
    }
})