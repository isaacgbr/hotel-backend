# Auditoria Técnica — Projeto Hotel Backend

## Objetivo

Resumo da auditoria técnica realizada no projeto, avaliando arquitetura, organização, banco de dados, regras de negócio, testes e preparação para apresentação acadêmica.

---

# Arquitetura

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

Tecnologias:

* Node.js
* Express
* Prisma ORM
* SQLite

Módulos:

* Hospede
* Quarto
* Reserva
* Pagamento

---

# Pontos Fortes

* Arquitetura em camadas bem definida.
* Separação adequada de responsabilidades.
* Prisma isolado na camada Repository.
* CRUD completo implementado.
* Relacionamentos corretamente modelados.
* Código organizado para manutenção e evolução.

---

# Banco de Dados

Relacionamentos:

```text
Hospede
   ↓
 Reserva
   ↓
Pagamento

Quarto
   ↓
Reserva
```

Boas práticas identificadas:

* CPF único para hóspedes.
* Número único para quartos.
* Chaves estrangeiras configuradas.
* Integridade relacional preservada pelo Prisma.

---

# Testes Executados

Validados manualmente utilizando Thunder Client:

* CRUD de Hospede
* CRUD de Quarto
* CRUD de Reserva
* CRUD de Pagamento
* CPF duplicado
* Número de quarto duplicado
* Conflito de datas
* Reserva inexistente
* Operações com IDs inexistentes

Resultado:

✅ Todos os testes aprovados

---

# Ajustes Realizados

Durante os testes foi identificada uma inconsistência no módulo Quarto.

Correção aplicada:

* Atualização de quarto inexistente passou a retornar HTTP 404 em vez de HTTP 400.

---

# Melhorias Futuras

* Validar existência de hóspede antes da criação da reserva.
* Validar existência de quarto antes da criação da reserva.
* Validar preço positivo para quartos.
* Validar valor positivo para pagamentos.
* Restringir valores válidos para status.
* Implementar testes automatizados.
* Adicionar documentação Swagger.

---

# Perguntas Frequentes da Apresentação

### Por que utilizar Service?

Centralizar regras de negócio.

### Por que utilizar Repository?

Isolar o acesso ao banco de dados.

### Qual a função do Prisma?

Realizar a comunicação entre aplicação e banco.

### Como evitar reservas conflitantes?

A camada Service verifica sobreposição de datas.

### Onde ficam as regras de negócio?

Na camada Service.

### Onde ficam as consultas ao banco?

Na camada Repository.

---

# Avaliação Geral

O projeto encontra-se funcional, documentado, testado e apto para apresentação acadêmica.
