# 🏨 Sistema de Hotel — Backend

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge\&logo=nodedotjs\&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge\&logo=express\&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge\&logo=prisma\&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-003B57?style=for-the-badge\&logo=sqlite\&logoColor=white)

API REST desenvolvida para gerenciamento de hotéis utilizando Node.js, Express, Prisma ORM e SQLite.

---

## 🎯 Funcionalidades

* Gestão de Hóspedes
* Gestão de Quartos
* Gestão de Reservas
* Gestão de Pagamentos

---

## 🏗️ Arquitetura

```text
Routes
↓
Controllers
↓
Services
↓
Repositories
↓
Prisma
↓
Banco de Dados
```

---

## 🚀 Tecnologias

* Node.js
* Express.js
* Prisma ORM
* SQLite
* GitHub

---

## ✅ Status

* CRUD de Hóspedes concluído
* CRUD de Quartos concluído
* CRUD de Reservas concluído
* CRUD de Pagamentos concluído
* Testes funcionais concluídos
* Projeto apto para apresentação acadêmica

---

## 📁 Estrutura

```text
hotel-backend/
├── docs/
├── prisma/
├── src/
├── package.json
└── README.md
```

---

## ▶️ Execução

Instalar dependências:

```bash
npm install
```

Executar migrations:

```bash
npx prisma migrate dev
```

Iniciar servidor:

```bash
node src/app.js
```

API disponível em:

```text
http://localhost:3000
```

---

## 📚 Documentação

| Documento                | Descrição                            |
| ------------------------ | ------------------------------------ |
| docs/DIAGRAMA_BANCO.md   | Estrutura e relacionamentos do banco |
| docs/README_AUDITORIA.md | Auditoria técnica do projeto         |
| docs/TESTES.md           | Relatório de testes executados       |

---

## 👥 Equipe

| Integrante    | Responsabilidade                                                                                        |
| ------------- | ------------------------------------------------------------------------------------------------------- |
| Isaac         | Desenvolvimento do módulo Quarto, integração dos módulos, documentação, testes e organização do projeto |
| João Henrique | Desenvolvimento do módulo Hospede                                                                       |
| Leonardo      | Desenvolvimento do módulo Reserva                                                                       |
| Vitório       | Banco de dados, Prisma ORM e modelagem                                                                  |
| Josiel        | Desenvolvimento do módulo Pagamento                                                                     |

---

## 🎓 Projeto Acadêmico

Projeto desenvolvido com foco em:

* API REST
* Arquitetura em Camadas
* Prisma ORM
* Banco de Dados Relacional
* Boas Práticas de Desenvolvimento Backend
* Separação de Responsabilidades
