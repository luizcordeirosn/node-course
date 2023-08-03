const inquirer = require("inquirer");
const chalk = require("chalk");

inquirer
  .prompt([
    {
      name: "nome",
      message: "Digite seu nome: ",
    },
    {
      name: "idade",
      message: "Digite sua idade: ",
    },
  ])
  .then((answers) => {
    console.log(
      chalk.bgYellow.black(
        `O nome do usuário é ${answers["nome"]} e tem ${answers["idade"]}`
      )
    );
  })
  .catch((err) => console.log("Erro: " + err));
