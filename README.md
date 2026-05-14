# 🏨 Sistema de Hotel — Backend

> Projeto acadêmico de API para gerenciamento de hotel.

---

## 🚀 Tecnologias

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)

---

# 🎯 Objetivo

Criar uma API backend para controlar:

- Hóspedes
- Quartos
- Reservas
- Pagamentos

---

# ✅ Status Atual

### 11/05/2026
✔ Estrutura inicial criada  
✔ Banco configurado  
✔ Prisma configurado  
✔ Models criados  
✔ Branches criadas  

### 13/05/2026
✔ Estrutura src criada  
✔ Adicionado diagrama draw.io  
✔ app.js criado  
✔ Github organizado   

## Próximos passos

- Criar CRUD de Hospede
- Criar CRUD de Quarto
- Criar CRUD de Reserva
- Criar CRUD de Pagamento
- Testar no Postman
- Integrar tudo
- Preparar apresentação

---

# 📌 Funcionalidades

✅ CRUD de hóspedes  

✅ CRUD de quartos  

✅ CRUD de reservas  

✅ CRUD de pagamentos  

✅ Verificação de disponibilidade de quartos  

✅ Testes via Postman  

---

# 🧱 Estrutura do Projeto

```bash
hotel-backend/

├── docs/
│   └── diagrama-hotel.drawio.png
│
├── prisma/
│   ├── migrations/
│   ├── dev.db
│   └── schema.prisma
│
├── src/
│   ├── container/
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

# 👥 Divisão da Equipe

### Vitorio → Banco
- revisar schema.prisma

### João Henrique → Hóspede + Quarto
- CRUD completo

### Leonardo → Reserva
- CRUD completo
- regra de disponibilidade

### Josiel → Pagamento
- CRUD completo

### Isaac → Integração
- testes
- integração
- apresentação

---

# ▶ Como começar

### 1 Clonar projeto
```bash
git clone LINK_REPOSITORIO
```

### 2 Entrar na pasta
```bash
cd hotel-backend
```

### 3 Instalar dependências
```bash
npm install
```

### 4 Entrar na sua branch

Banco:
```bash
git checkout feature/database
```

Hóspede/Quarto:
```bash
git checkout feature/hospede-quarto
```

Reserva:
```bash
git checkout feature/reserva
```

Pagamento:
```bash
git checkout feature/pagamento
```

---

### 5 Desenvolver sua parte

---

### 6 Enviar alterações
```bash
git add .
git commit -m "minha parte finalizada"
git push
```

---

# 🤖 Prompt para usar em IA

Copie e altere apenas sua função:

```text
Estou em um projeto backend de hotel usando Node.js, Express, Prisma e SQLite.

Minha função é: [COLOQUE SUA FUNÇÃO]

Preciso que você me ensine passo a passo como fazer minha parte dentro da estrutura:

routes
controllers
services
repositories

Explique de forma simples para iniciante e me mostre quais arquivos criar.
```