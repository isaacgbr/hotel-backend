# 🏨 Sistema de Hotel — Backend

> Projeto acadêmico de API REST para gerenciamento de hotel.
> Node.js + Express + Prisma + SQLite

---

## 🚀 Tecnologias

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)

---

## 🎯 Objetivo

API backend para controlar:
- Hóspedes
- Quartos
- Reservas
- Pagamentos

---

## ✅ Status do Projeto

| Módulo | Status |
|---|---|
| CRUD de Hóspedes | ✅ Concluído |
| CRUD de Quartos | ✅ Concluído |
| CRUD de Reservas | ✅ Concluído |
| CRUD de Pagamentos | ⏳ Em andamento |
| Testes gerais | ⏳ Em andamento |
| Apresentação | ⏳ Pendente |

---

## 📅 Histórico

| Data | Evento |
|---|---|
| 11/05/2026 | Estrutura inicial, banco e Prisma configurados |
| 13/05/2026 | Estrutura src criada, app.js, diagrama adicionado |
| 27/05/2026 | CRUD de Hóspede, Quarto e Reserva concluídos e testados |

---

## 🧱 Estrutura do Projeto

```bash
hotel-backend/
├── docs/
│   └── diagrama-hotel.drawio.png
├── prisma/
│   ├── migrations/
│   ├── dev.db
│   └── schema.prisma
├── src/
│   ├── controllers/
│   ├── repositories/
│   ├── routes/
│   ├── services/
│   └── app.js
├── .env
├── .gitignore
├── package.json
└── README.md
```

---

## ▶️ Como rodar o projeto

### 1. Clonar o repositório
```bash
git clone https://github.com/isaacgbr/hotel-backend.git
cd hotel-backend
```

### 2. Instalar dependências
```bash
npm install
```

### 3. Configurar o ambiente
Crie um arquivo `.env` na raiz com:
```env
DATABASE_URL="file:./dev.db"
```

### 4. Rodar as migrations
```bash
npx prisma migrate dev
```

### 5. Iniciar o servidor
```bash
node src/app.js
```

O servidor sobe em `http://localhost:3000`

---

## 📡 Endpoints

### Hóspedes `/hospedes`
| Método | Rota | Descrição |
|---|---|---|
| POST | `/hospedes` | Cadastrar hóspede |
| GET | `/hospedes` | Listar todos |
| GET | `/hospedes/:id` | Buscar por ID |
| PUT | `/hospedes/:id` | Atualizar |
| DELETE | `/hospedes/:id` | Deletar |

### Quartos `/quartos`
| Método | Rota | Descrição |
|---|---|---|
| POST | `/quartos` | Cadastrar quarto |
| GET | `/quartos` | Listar todos |
| GET | `/quartos/:id` | Buscar por ID |
| PUT | `/quartos/:id` | Atualizar |
| DELETE | `/quartos/:id` | Deletar |

### Reservas `/reservas`
| Método | Rota | Descrição |
|---|---|---|
| POST | `/reservas` | Criar reserva |
| GET | `/reservas` | Listar todas |
| GET | `/reservas/:id` | Buscar por ID |
| PUT | `/reservas/:id` | Atualizar |
| DELETE | `/reservas/:id` | Deletar |

---

## 👥 Equipe

| Integrante | Responsabilidade | Status |
|---|---|---|
| Isaac | Integração, testes, organização | ✅ |
| João Henrique | CRUD de Quarto | ✅ |
| Leonardo | CRUD de Reserva | ✅ |
| Vitório | Banco de dados / Schema | ✅ |
| Josiel | CRUD de Pagamento | ⏳ |

---

## 📌 Regras de negócio

- CPF de hóspede é único — não permite duplicatas
- Número de quarto é único — não permite duplicatas
- Reserva valida conflito de datas — o mesmo quarto não pode ter duas reservas no mesmo período
- Status do quarto inicia como `disponivel` por padrão