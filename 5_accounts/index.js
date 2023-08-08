// Módulos externos
const inquirer = require("inquirer");
const chalk = require("chalk");

// Módulos internos
const fs = require("fs");

operation();

function operation() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "O que você deseja fazer?",
        choices: [
          "Criar conta",
          "Consultar saldo",
          "Depositar",
          "Sacar",
          "Sair",
        ],
      },
    ])
    .then((answer) => {
      const action = answer["action"];

      if (action == "Criar conta") {
        createAccount();
      } else if (action == "Consultar saldo") {
        getAccountBalance()
      } else if (action == "Depositar") {
        deposit();
      } else if (action == "Sacar") {
        withdraw()
      } else if (action == "Sair") {
        console.log(chalk.bgBlue.black("Obrigado por usar o Accounts!!!"));
        process.exit();
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

// Create account
function createAccount() {
  console.log(chalk.bgGreen.black("Parabéns por escolher o nosso banco!!!"));
  console.log(chalk.green("Defina as opções da sua conta a seguir"));

  buildAccount();
}

function buildAccount() {
  inquirer
    .prompt([
      {
        name: "accountName",
        message: "Digite um nome para sua conta: ",
      },
    ])
    .then((answer) => {
      const accountName = answer["accountName"];

      console.log(accountName);

      if (!fs.existsSync("accounts")) {
        fs.mkdirSync("accounts");
      }
      if (fs.existsSync(`accounts/${accountName}.json`)) {
        console.log(
          chalk.bgRed.black("Está conta já existe, escolha outro nome!!!")
        );
        buildAccount();
      } else {
        fs.writeFileSync(
          `accounts/${accountName}.json`,
          `{"balance":0}`,
          (err) => {
            console.log(err);
          }
        );

        console.log("Parabéns, a sua conta foi criada!!!");

        operation();
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

// Add an amount to user account
function deposit() {
  inquirer
    .prompt([
      {
        name: "accountName",
        message: "Qual o nome da sua conta? ",
      },
    ])
    .then((answer) => {
      const accountName = answer["accountName"];

      // Verify if account exists
      if (checkAccount(accountName)) {
        inquirer
          .prompt([
            {
              name: "amount",
              message: "Quanto você deseja depositar? ",
            },
          ])
          .then((answer) => {
            const amount = answer["amount"];

            // Add an amount
            addAmount(accountName, amount);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        return deposit();
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

function checkAccount(accountName) {
  if (fs.existsSync(`accounts/${accountName}.json`)) {
    return true;
  } else {
    console.log(chalk.bgRed.black("Esta conta não existe, tente novamente!!!"));
    return false;
  }
}

function addAmount(accountName, amount) {
  const account = getAccount(accountName);

  if (!amount) {
    console.log(
      chalk.bgRed.black("Ocorreu um erro, tente novamente mais tarde")
    );
    deposit();
    return;
  } else {
    account.balance = parseFloat(amount) + parseFloat(account.balance);
    fs.writeFileSync(
      `accounts/${accountName}.json`,
      JSON.stringify(account),
      (err) => {
        console.log(err);
      }
    );
    console.log(
      chalk.green(`Foi depositado o valor de R$${amount} na sua conta!!!`)
    );

    operation();
  }
}

function getAccount(accountName) {
  const accountJson = fs.readFileSync(`accounts/${accountName}.json`, {
    encoding: "utf8",
    flag: "r",
  });

  return JSON.parse(accountJson);
}

// Show account balance
function getAccountBalance() {
  inquirer.prompt({
    name: 'accountName',
    message: 'Qual o nome da sua conta? '
  }).then((answer) => {
    const accountName = answer['accountName']

    // Verify if account exists
    if (checkAccount(accountName)) {
      const account = getAccount(accountName)

      console.log(chalk.bgBlue.black(`O saldo da sua conta é de R$${account.balance}`))

      operation()
    } else {
      return getAccountBalance()
    }
  }).catch((err) => {
    console.log(err)
  })
}

// Withdraw an amount from user account
function withdraw() {
  inquirer.prompt({
    name: 'accountName',
    message: 'Qual o nome da sua conta? '
  }).then((answer) => {
    const accountName = answer['accountName']

    if (checkAccount(accountName)) {
      inquirer
        .prompt([
          {
            name: "amount",
            message: "Quanto você deseja sacar? ",
          },
        ])
        .then((answer) => {
          const amount = answer["amount"];

          // Withdraw an amount
          removeAmount(accountName, amount);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return withdraw()
    }
  }).catch((err) => {
    console.log(err)
  })
}

function removeAmount(accountName, amount) {
  const account = getAccount(accountName);

  if (!amount) {
    console.log(
      chalk.bgRed.black("Ocorreu um erro, tente novamente mais tarde")
    );
    withdraw();
    return;
  } else {
    account.balance = parseFloat(account.balance) - parseFloat(amount);

    if (account.balance < 0) {
      console.log(chalk.bgRed.black("Valor indisponível!!!"))
      return withdraw()
    } else {
      fs.writeFileSync(
        `accounts/${accountName}.json`,
        JSON.stringify(account),
        (err) => {
          console.log(err);
        }
      );
      console.log(
        chalk.green(`Foi realizado um saque de R$${amount} da sua conta!!!`)
      );

      operation();
    }
  }
}
