const express = require('express')
const path = require('path')

const router = express.Router()

const basePath = path.join(__dirname, "../templates");

router.get("/", (req, res)=>{
    res.sendFile(`${basePath}/projects.html`)
})

router.get("/:id", (req, res)=>{

    const id = req.params.id

    console.log(`Você acessou o projeto de ID = ${id}`)

    res.sendFile(`${basePath}/project.html`)
})

module.exports = router