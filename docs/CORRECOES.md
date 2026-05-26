# Correções e Melhorias do Projeto

---

# Estrutura do Projeto

## Como estava antes?
Arquivos soltos e sem padrão definido.

---

## O que mudamos?
Padronizamos as pastas:
- controllers
- routes
- services
- repositories

Também renomeamos arquivos para um padrão único.

---

## Por que mudamos?
Melhor organização, arquitetura e manutenção do projeto.

---

## O que o integrante precisa entender?
Cada pasta possui uma responsabilidade específica.

---

## O que vem depois?
Integração completa entre camadas.

---

# Banco de Dados / Prisma

## Como estava antes?
- CPF permitia duplicidade
- Prisma 7 apresentou incompatibilidade e maior complexidade

---

## O que mudamos?
- CPF virou `@unique`
- Prisma atualizado para versão 6

---

## Por que mudamos?
- Evitar hóspedes duplicados
- Utilizar uma versão mais estável e simples para o projeto

---

## O que fizemos?
```bash
npx prisma migrate dev --name update_schema
npx prisma generate
```

---

## O que o integrante precisa entender?
O `schema.prisma` controla:
- tabelas
- campos
- relacionamentos

Se o schema mudar:
o restante do sistema também precisa acompanhar.

---

## O que vem depois?
Conectar corretamente Prisma aos repositories.

---

# Prisma Client

## Como estava antes?
Cada arquivo poderia criar sua própria conexão com Prisma.

---

## O que mudamos?
Criamos:
```text
prisma/client.js
```

---

## Por que mudamos?
Centralizar a conexão com o banco.

---

## O que o integrante precisa entender?
Todos os repositories devem reutilizar o mesmo Prisma Client.

---

## O que vem depois?
Repositories serão conectados usando o client centralizado.

---

# Repository - Hospede

## Como estava antes?
- CRUD incompleto
- IDs sem conversão
- Estrutura parcialmente organizada

---

## O que mudamos?
Implementamos CRUD completo:
- create
- read
- update
- delete

Também adicionamos:
```javascript
Number(id)
```

---

## Por que mudamos?
O Prisma espera IDs numéricos, mas a URL envia texto.

---

## O que o integrante precisa entender?
O repository:
- acessa banco
- usa Prisma
- executa CRUD

Mas NÃO:
- usa req/res
- cria rotas
- valida regras de negócio

---

## O que vem depois?
Atualizar services para separar corretamente regras de negócio do acesso ao banco.

---