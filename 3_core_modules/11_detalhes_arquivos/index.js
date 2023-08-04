const fs = require("fs")

fs.stat("nova-pasta", (err, stat) => {
    if (err) {
        console.log(`Error - ${err}`)
        return
    }
    console.log(stat.isFile())
    console.log(stat.isDirectory())
    console.log(stat.isSymbolicLink())
    console.log(stat.ctime)
    console.log(stat.size)
})