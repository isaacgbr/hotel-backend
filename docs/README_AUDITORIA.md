# Auditoria Técnica — Projeto Hotel Backend

## Objetivo

Este documento resume a auditoria realizada no projeto Hotel Backend com foco em arquitetura, organização, funcionamento e preparação para apresentação acadêmica.

---

# Arquitetura do Projeto

Arquitetura adotada:

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

Tecnologias utilizadas:

* Node.js
* Express
* Prisma ORM
* SQLite

Módulos do sistema:

* Hospede
* Quarto
* Reserva
* Pagamento

---

# Pontos Fortes

* Boa separação de responsabilidades.
* Uso correto de arquitetura em camadas.
* Prisma isolado na camada Repository.
* Services responsáveis pelas regras de negócio.
* Controllers focados em requisições HTTP.
* Relacionamentos implementados no banco.
* CRUD completo nos módulos principais.
* Estrutura adequada para apresentação acadêmica.

---

# Estrutura do Banco

Relacionamentos identificados:

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

Boas práticas encontradas:

* IDs auto incrementais.
* CPF único para hóspedes.
* Número único para quartos.
* Relacionamentos utilizando chaves estrangeiras.

---

# Principais Melhorias Identificadas

## Reserva

Adicionar validações antes de criar reserva:

* Verificar se o hóspede existe.
* Verificar se o quarto existe.

Atualmente a validação depende do Prisma e do banco.

---

## Quarto

Adicionar validações:

* Preço deve ser maior que zero.
* Validar status permitidos.

Exemplo:

```text
disponivel
ocupado
manutencao
```

---

## Pagamento

Adicionar validações:

* Valor maior que zero.
* Status de pagamento válido.

---

## Tratamento de Erros

Padronizar respostas HTTP entre os módulos.

Exemplos:

```text
400 -> erro de validação
404 -> recurso não encontrado
500 -> erro interno
```

---

# Avaliação dos Módulos

## Hospede

Situação: Pronto para apresentação.

Estudar:

* CRUD completo.
* CPF único.
* Fluxo da arquitetura.

---

## Quarto

Situação: Pronto para apresentação.

Estudar:

* Disponibilidade de quartos.
* Número único.
* CRUD completo.

---

## Reserva

Situação: Módulo mais importante do sistema.

Estudar:

* Conflito de datas.
* Relacionamentos.
* Regras de negócio.
* Includes do Prisma.

---

## Pagamento

Situação: Pronto para apresentação.

Estudar:

* Relação entre Pagamento e Reserva.
* Fluxo de criação do pagamento.
* Validações existentes.

---

# Perguntas Prováveis do Professor

## Por que utilizar Service?

Centralizar regras de negócio e manter Controllers limpos.

---

## Por que utilizar Repository?

Desacoplar o acesso ao banco da lógica de negócio.

---

## Qual a função do Prisma?

Atuar como ORM responsável pela comunicação com o banco de dados.

---

## Como evitar reservas duplicadas?

A camada Service verifica conflitos de datas antes da criação.

---

## Onde ficam as regras de negócio?

Na camada Service.

---

## Onde ficam as consultas ao banco?

Na camada Repository.

---

# Testes Obrigatórios

## Hospede

* Criar
* Listar
* Buscar por ID
* Atualizar
* Excluir
* CPF duplicado

## Quarto

* Criar
* Atualizar
* Excluir
* Número duplicado

## Reserva

* Criar reserva válida
* Conflito de datas
* Datas inválidas
* Atualização
* Exclusão

## Pagamento

* Criar pagamento
* Reserva inexistente
* Atualização
* Exclusão

---

# Checklist Final

## Obrigatório

* Validar existência de Hospede na Reserva.
* Validar existência de Quarto na Reserva.
* Validar valor positivo em Pagamento.
* Validar preço positivo em Quarto.
* Testar todos os endpoints no Postman.
* Revisar README principal.

## Opcional

* Swagger/OpenAPI.
* Separação de app.js e server.js.
* Testes automatizados.

---

# Avaliação Geral

| Critério            | Nota |
| ------------------- | ---- |
| Arquitetura         | 9.0  |
| Banco de Dados      | 8.5  |
| Organização         | 9.0  |
| Prisma              | 9.0  |
| Tratamento de Erros | 7.0  |
| Validações          | 7.5  |

## Nota Final

**8.7 / 10**

O projeto encontra-se apto para entrega e apresentação acadêmica, exigindo apenas pequenos ajustes de validação e revisão final dos testes.
