💻 Pré-requisitos
Antes de começar, verifique se você atendeu aos seguintes requisitos:

Você tem uma máquina Windows
Você possui instalado node js na sua maquina.
Necessário possuir MySQL Server

☕ Setup comum:

Clone o repositório e instale as dependencias.

git clone https://github.com/JoaoBoemer/projects_manager
cd projects_manager

npm install

Para configurar o banco:

Dentro da pasta app/models/db.js
Altere o Sequelize para conectar com o DataBase desejado.

Para criar as tabelas:

Entre em app/models/

Rode o comando node create.js

Retorne a pasta principal e rode o comando

npm run start

Utilizando Docker:

docker pull jgcbitj/project-manager-docker:project-manager-docker