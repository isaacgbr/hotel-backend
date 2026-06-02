# 🏨 Sistema de Hotel — Backend

> API REST para gerenciamento de hotel desenvolvida como projeto acadêmico utilizando Node.js, Express, Prisma ORM e SQLite.

---

# 🎯 Objetivo

O sistema foi desenvolvido para gerenciar as principais operações de um hotel através de uma API REST, permitindo o controle de:

- Hóspedes
- Quartos
- Reservas
- Pagamentos

---

# 🚀 Tecnologias Utilizadas

- Node.js
- Express.js
- Prisma ORM
- SQLite
- GitHub

---

# 🏗️ Arquitetura

O projeto segue arquitetura em camadas para garantir organização, manutenção e separação de responsabilidades.

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

## Responsabilidades

| Camada | Função |
|----------|----------|
| Routes | Define os endpoints da API |
| Controllers | Recebe requisições e retorna respostas HTTP |
| Services | Contém as regras de negócio |
| Repositories | Realiza acesso aos dados |
| Prisma | ORM responsável pela comunicação com o banco |
| Banco | Persistência dos dados |

---

# 🗄️ Banco de Dados

O banco utiliza SQLite com Prisma ORM.

Principais entidades:

- Hospede
- Quarto
- Reserva
- Pagamento

Relacionamentos:

```text
Hospede 1:N Reserva
Quarto 1:N Reserva
Reserva 1:N Pagamento
```

Para visualizar a modelagem completa consulte:

```text
DOCS/DIAGRAMA_BANCO.md
```

---

# ⚙️ Funcionalidades

## Hóspedes

- Cadastro
- Listagem
- Busca por ID
- Atualização
- Exclusão

## Quartos

- Cadastro
- Listagem
- Busca por ID
- Atualização
- Exclusão

## Reservas

- Cadastro
- Listagem
- Busca por ID
- Atualização
- Exclusão
- Verificação de conflito de datas

## Pagamentos

- Cadastro
- Listagem
- Busca por ID
- Atualização
- Exclusão

---

# 📁 Estrutura do Projeto

```text
hotel-backend/
├── DOCS/
│   ├── DIAGRAMA_BANCO.md
│   └── README_AUDITORIA.md
│
├── prisma/
│   ├── migrations/
│   ├── dev.db
│   └── schema.prisma
│
├── src/
│   ├── controllers/
│   ├── repositories/
│   ├── routes/
│   ├── services/
│   └── app.js
│
├── .env
├── .gitignore
├── package.json
└── README.md
```

---

# ▶️ Como Executar o Projeto

## 1. Clonar o repositório

```bash
git clone https://github.com/isaacgbr/hotel-backend.git
cd hotel-backend
```

## 2. Instalar dependências

```bash
npm install
```

## 3. Configurar o ambiente

Criar um arquivo `.env` na raiz:

```env
DATABASE_URL="file:./dev.db"
```

## 4. Executar as migrations

```bash
npx prisma migrate dev
```

## 5. Iniciar o servidor

```bash
node src/app.js
```

Servidor disponível em:

```text
http://localhost:3000
```

---

# 📡 Endpoints

## Hóspedes

| Método | Endpoint |
|----------|----------|
| POST | /hospedes |
| GET | /hospedes |
| GET | /hospedes/:id |
| PUT | /hospedes/:id |
| DELETE | /hospedes/:id |

## Quartos

| Método | Endpoint |
|----------|----------|
| POST | /quartos |
| GET | /quartos |
| GET | /quartos/:id |
| PUT | /quartos/:id |
| DELETE | /quartos/:id |

## Reservas

| Método | Endpoint |
|----------|----------|
| POST | /reservas |
| GET | /reservas |
| GET | /reservas/:id |
| PUT | /reservas/:id |
| DELETE | /reservas/:id |

## Pagamentos

| Método | Endpoint |
|----------|----------|
| POST | /pagamentos |
| GET | /pagamentos |
| GET | /pagamentos/:id |
| PUT | /pagamentos/:id |
| DELETE | /pagamentos/:id |

---

# 📋 Regras de Negócio

- CPF do hóspede deve ser único.
- Número do quarto deve ser único.
- Reservas não podem possuir conflito de datas para o mesmo quarto.
- O status inicial do quarto é definido como `disponivel`.
- Pagamentos são vinculados a reservas existentes.

---

# 📚 Documentação

Documentos complementares disponíveis na pasta:

```text
DOCS/
```

| Documento | Descrição |
|------------|------------|
| DIAGRAMA_BANCO.md | Estrutura e relacionamentos do banco |
| README_AUDITORIA.md | Auditoria técnica e revisão do projeto |

---

# 👥 Equipe

| Integrante | Responsabilidade |
|------------|------------------|
| Isaac | Dev. módulo Quarto | Integração dos módulos, documentação e organização do projeto |
| João Henrique | Desenvolvimento do módulo Hospede |
| Leonardo | Desenvolvimento do módulo Reserva |
| Vitório | Banco de dados, Prisma ORM e modelagem |
| Josiel | Desenvolvimento do módulo Pagamento |

---

# 🎓 Projeto Acadêmico

Projeto desenvolvido para fins educacionais com foco em:

- API REST
- Arquitetura em Camadas
- Banco de Dados Relacional
- Prisma ORM
- Boas Práticas de Desenvolvimento Backend
- Organização e Separação de Responsabilidades