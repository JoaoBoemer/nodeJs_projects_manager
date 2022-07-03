## Gerenciador de projetos

💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:


- Você tem uma máquina Windows
- Você possui instalado node js na sua maquina.
- Necessário possuir Servidor de Banco de dados MySQL

## ☕ Setup comum:

Clone o repositório e instale as dependencias.

```bash
git clone https://github.com/JoaoBoemer/projects_manager
cd projects_manager
```

```bash
npm install
```

## Para configurar o banco:

Dentro da pasta app/models/db.js
Altere o Sequelize para conectar com o DataBase desejado.

const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

## Para criar as tabelas:

Caso já tenha conectado o banco de dados e deseje criar as tabelas você pode utilizar os comandos

'''bash
cd app/models
create.js
'''

## Executar o código

'''bash
npm run start
'''

Utilizando Docker:

docker pull jgcbitj/project-manager-docker:project-manager-docker