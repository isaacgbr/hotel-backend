# 🏨 Sistema de Gestão Hoteleira — Backend

API REST desenvolvida para simular a gestão de um sistema hoteleiro, com controle de hóspedes, quartos, reservas e pagamentos.

Projeto acadêmico desenvolvido em equipe, com foco em arquitetura backend, organização em camadas, regras de negócio, persistência de dados e documentação técnica.

---

## 📌 Sobre o projeto

O **Sistema de Gestão Hoteleira** permite realizar operações essenciais de um ambiente hoteleiro, como cadastro de hóspedes, controle de quartos, criação de reservas e registro de pagamentos.

A proposta do projeto é demonstrar a construção de uma API backend estruturada, aplicando separação de responsabilidades entre rotas, controllers, services, repositories e camada de persistência com Prisma ORM.

---

## 🚀 Funcionalidades

* Cadastro, listagem, atualização e remoção de hóspedes.
* Cadastro, listagem, atualização e remoção de quartos.
* Criação e gerenciamento de reservas.
* Validação de datas de entrada e saída.
* Verificação de conflitos de reserva para o mesmo quarto.
* Registro de pagamentos vinculados a reservas.
* Organização do código em camadas.

---

## 🧱 Arquitetura

O projeto segue uma arquitetura em camadas para melhorar a organização, manutenção e evolução do código.

```text
Routes
↓
Controllers
↓
Services
↓
Repositories
↓
Prisma ORM
↓
Banco de Dados
```

### Responsabilidades das camadas

| Camada       | Responsabilidade                              |
| ------------ | --------------------------------------------- |
| Routes       | Definem os endpoints da API                   |
| Controllers  | Recebem requisições HTTP e retornam respostas |
| Services     | Aplicam regras de negócio e validações        |
| Repositories | Realizam a comunicação com o banco de dados   |
| Prisma ORM   | Gerencia operações e relacionamentos do banco |

---

## 🛠️ Tecnologias utilizadas

<div align="center">

![Node.js](https://img.shields.io/badge/Node.js-111827?style=for-the-badge\&logo=nodedotjs)
![Express.js](https://img.shields.io/badge/Express.js-111827?style=for-the-badge\&logo=express)
![JavaScript](https://img.shields.io/badge/JavaScript-111827?style=for-the-badge\&logo=javascript)
![Prisma ORM](https://img.shields.io/badge/Prisma%20ORM-111827?style=for-the-badge\&logo=prisma)
![SQLite](https://img.shields.io/badge/SQLite-111827?style=for-the-badge\&logo=sqlite)
![Git](https://img.shields.io/badge/Git-111827?style=for-the-badge\&logo=git)
![GitHub](https://img.shields.io/badge/GitHub-111827?style=for-the-badge\&logo=github)

</div>


---

## 📁 Estrutura do projeto

```text
hotel-backend/
├── docs/
├── prisma/
│   ├── migrations/
│   ├── schema.prisma
│   └── client.js
├── src/
│   ├── controllers/
│   ├── repositories/
│   ├── routes/
│   ├── services/
│   └── app.js
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

---

## ▶️ Como rodar localmente

### 1. Clone o repositório

```bash
git clone https://github.com/isaacgbr/hotel-backend.git
```

### 2. Acesse a pasta do projeto

```bash
cd hotel-backend
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Configure as variáveis de ambiente

Crie um arquivo `.env` com base no arquivo `.env.example`.

No Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

No Git Bash, Linux ou Mac:

```bash
cp .env.example .env
```

Exemplo de configuração:

```env
DATABASE_URL="file:./dev.db"
```

### 5. Execute as migrations do Prisma

```bash
npx prisma migrate dev
```

### 6. Inicie o servidor

```bash
npm run dev
```

A API ficará disponível em:

```text
http://localhost:3000
```

---

## ✅ Teste rápido

### Health check

```http
GET /
```

Resposta esperada:

```json
{
  "status": "API online"
}
```

---

## 📌 Endpoints principais

| Recurso          | Métodos          | Rota              |
| ---------------- | ---------------- | ----------------- |
| Hóspedes         | GET, POST        | `/hospedes`       |
| Hóspede por ID   | GET, PUT, DELETE | `/hospedes/:id`   |
| Quartos          | GET, POST        | `/quartos`        |
| Quarto por ID    | GET, PUT, DELETE | `/quartos/:id`    |
| Reservas         | GET, POST        | `/reservas`       |
| Reserva por ID   | GET, PUT, DELETE | `/reservas/:id`   |
| Pagamentos       | GET, POST        | `/pagamentos`     |
| Pagamento por ID | GET, PUT, DELETE | `/pagamentos/:id` |

---

## 🧪 Exemplos de requisição

### Criar hóspede

```json
{
  "nome": "Isaac Gabriel",
  "cpf": "12345678900",
  "telefone": "(86) 99999-9999",
  "email": "isaac@email.com"
}
```

### Criar quarto

```json
{
  "numero": "101",
  "tipo": "Casal",
  "status": "disponivel",
  "precoPorDiaria": 150
}
```

### Criar reserva

```json
{
  "dataEntrada": "2026-07-10T14:00:00.000Z",
  "dataSaida": "2026-07-12T12:00:00.000Z",
  "hospedeId": 1,
  "quartoId": 1
}
```

### Criar pagamento

```json
{
  "valor": 300,
  "statusPagamento": "pago",
  "reservaId": 1
}
```

---

## 🧭 Fluxo recomendado para teste

Para testar a API corretamente, siga esta ordem:

1. Criar um hóspede.
2. Criar um quarto.
3. Criar uma reserva vinculando o hóspede e o quarto.
4. Criar um pagamento vinculado à reserva.
5. Listar os registros criados.
6. Testar atualização e remoção dos dados.

A API pode ser testada com ferramentas como:

* Postman
* Insomnia
* Thunder Client
* Prisma Studio

Para abrir o Prisma Studio:

```bash
npx prisma studio
```

---

## 👥 Projeto em equipe

Este projeto foi desenvolvido em grupo como atividade acadêmica, com divisão de responsabilidades por módulos.

### Minha participação

Atuei no desenvolvimento do módulo de quartos, integração dos módulos, organização do projeto, documentação, testes e apoio na padronização da arquitetura backend.

| Integrante    | Responsabilidade                                                  |
| ------------- | ----------------------------------------------------------------- |
| Isaac         | Módulo de quartos, integração, documentação, testes e organização |
| João Henrique | Módulo de hóspedes                                                |
| Leonardo      | Módulo de reservas                                                |
| Vitório       | Banco de dados, Prisma ORM e modelagem                            |
| Josiel        | Módulo de pagamentos                                              |

---

## 📚 Documentação complementar

| Documento                  | Descrição                            |
| -------------------------- | ------------------------------------ |
| `docs/DIAGRAMA_BANCO.md`   | Estrutura e relacionamentos do banco |
| `docs/README_AUDITORIA.md` | Auditoria técnica do projeto         |
| `docs/TESTES.md`           | Relatório de testes executados       |

---

## 🎯 Aprendizados

Durante o desenvolvimento deste projeto, foram praticados conceitos importantes de backend:

* Construção de APIs REST.
* Organização de código em camadas.
* Separação de responsabilidades.
* Modelagem de banco de dados relacional.
* Uso do Prisma ORM.
* Validação de regras de negócio.
* Integração entre módulos.
* Documentação técnica.
* Trabalho em equipe com Git/GitHub.

---

## 🚧 Melhorias futuras

* Adicionar autenticação de usuários.
* Criar documentação Swagger/OpenAPI.
* Adicionar testes automatizados.
* Criar seed com dados fictícios.
* Padronizar respostas de erro.
* Desenvolver um frontend para consumo da API.
* Preparar uma versão de demonstração online.
