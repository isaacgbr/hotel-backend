# Banco de Dados / Prisma

## O que mudamos?
- CPF virou `@unique`
- Prisma atualizado para versão 6

---

## Por que mudamos?
- Evitar hóspedes duplicados
- Prisma 7 estava incompatível e mais complexo para o projeto atual

---

## O que fizemos?
```bash
npx prisma migrate dev --name update_schema
npx prisma generate
```

---

## O que esses comandos fazem?

### migrate
Atualiza o banco de dados com as mudanças do `schema.prisma`.

### generate
Atualiza o Prisma Client para o código reconhecer as mudanças.

---

## O que o responsável pelo banco precisa entender?
O `schema.prisma` controla:
- tabelas
- campos
- relacionamentos

Se algo mudar nele:
o sistema inteiro precisa acompanhar.

---

## Aprendizado
- Prisma é a conexão entre Node.js e banco
- Toda alteração no schema exige migration
- Após mudanças, o Prisma Client precisa ser atualizado