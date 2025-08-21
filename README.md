# Node.js do Zero a Maestria com diversos Projetos

Repositório com os códigos e projetos desenvolvidos durante o curso "Node.js do Zero a Maestria".

## Sobre o Projeto

Este repositório contém a implementação dos códigos e exemplos práticos abordados no curso. O objetivo é solidificar o aprendizado na criação de aplicações back-end robustas e eficientes com Node.js, cobrindo todo o ecossistema essencial para um desenvolvedor moderno.

## Estrutura do Repositório

O repositório está organizado em pastas numeradas que correspondem às seções do curso, facilitando a navegação e a consulta do conteúdo.

| Pasta                 | Descrição                                                                                             |
| --------------------- | ----------------------------------------------------------------------------------------------------- |
| **1_intro** | Códigos iniciais, apresentando o primeiro programa em Node.js e a utilização de módulos.                |
| **2_fundamentos** | Conceitos fundamentais do Node.js, como módulos internos/externos, leitura de argumentos e event loop.  |
| **3_core_modules** | Uso aprofundado dos módulos nativos do Node.js, como `http`, `fs` para manipulação de arquivos e `path`. |
| **4_npm_fundamental** | Guia completo sobre o `NPM`, incluindo criação de projetos, instalação e remoção de pacotes.           |
| **5_accounts** | Projeto prático de uma CLI interativa para simular um sistema de contas bancárias.                     |
| **6_express** | Introdução ao Express.js, o framework mais popular para Node.js. Inclui setup, rotas e middlewares.    |
| **7_template_engine** | Renderização de HTML dinâmico no back-end utilizando o template engine Handlebars.                      |
| **sqlnode** | Projeto focado na integração do Node.js com bancos de dados SQL, utilizando o ORM Sequelize.           |
| **typescript/backend**| Aplicação prática de TypeScript no desenvolvimento back-end com Node.js.                               |

## Tecnologias e Conceitos Abordados

-   **Node.js Core**: Módulos `fs`, `http`, `path`, `os`, `url`, `events`.
-   **NPM**: Gerenciamento de dependências, scripts e pacotes globais.
-   **Frameworks**: Express.js para criação de servidores e APIs.
-   **Template Engines**: Handlebars para renderização de views no servidor.
-   **Bancos de Dados**: Integração com SQL utilizando o ORM Sequelize.
-   **Linguagens**: JavaScript e TypeScript aplicados ao back-end.
-   **Ferramentas**: `nodemon` para desenvolvimento ágil.
-   **Conceitos**: Assincronismo, Event Loop, Middlewares, Roteamento, MVC.

## Pré-requisitos

Para executar os projetos, você precisará ter o [Node.js](https://nodejs.org/en/) (que inclui o NPM) instalado em sua máquina.

## Como Utilizar

Siga os passos abaixo para rodar qualquer um dos projetos contidos nas pastas:

1.  **Clone este repositório:**
    ```bash
    git clone [https://github.com/luizcordeirosn/node-course.git](https://github.com/luizcordeirosn/node-course.git)
    ```

2.  **Navegue até a pasta do projeto desejado:**
    *Cada pasta principal (como `5_accounts`, `6_express`, `sqlnode`, etc.) é um projeto Node.js independente.*
    ```bash
    cd node-course/5_accounts
    ```

3.  **Instale as dependências locais:**
    *Verifique se a pasta contém um arquivo `package.json` antes de rodar este comando.*
    ```bash
    npm install
    ```

4.  **Execute o projeto:**
    *Consulte o arquivo `package.json` para ver os scripts disponíveis (geralmente `npm start`).*
    ```bash
    npm start
    ```
    Ou, para arquivos individuais que não são parte de um projeto complexo:
    ```bash
    node index.js
    ```
