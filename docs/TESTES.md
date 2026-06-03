# Testes Realizados

## Informações Gerais

- Projeto: Sistema de Hotel — Backend
- Data dos testes: 02/06/2026
- Ferramenta utilizada: Thunder Client (VS Code)
- Ambiente: Localhost
- Banco de Dados: SQLite
- ORM: Prisma

---

## Módulo Hospede

| Teste | Resultado |
|---------|---------|
| POST /hospedes | ✅ Aprovado |
| GET /hospedes | ✅ Aprovado |
| GET /hospedes/:id | ✅ Aprovado |
| PUT /hospedes/:id | ✅ Aprovado |
| DELETE /hospedes/:id | ✅ Aprovado |
| CPF duplicado | ✅ Bloqueado (400) |
| ID inexistente | ✅ Retorna 404 |
| Atualização de ID inexistente | ✅ Retorna 404 |
| Exclusão de ID inexistente | ✅ Retorna 404 |

---

## Módulo Quarto

| Teste | Resultado |
|---------|---------|
| POST /quartos | ✅ Aprovado |
| GET /quartos | ✅ Aprovado |
| GET /quartos/:id | ✅ Aprovado |
| PUT /quartos/:id | ✅ Aprovado |
| DELETE /quartos/:id | ✅ Aprovado |
| Número duplicado | ✅ Bloqueado (400) |
| ID inexistente | ✅ Retorna 404 |
| Atualização de ID inexistente | ✅ Retorna 404 |
| Exclusão de ID inexistente | ✅ Retorna 404 |

### Ajuste realizado

Durante os testes foi identificada uma inconsistência no endpoint de atualização de quarto inexistente, que retornava HTTP 400.

A correção foi aplicada no controller para retornar HTTP 404, mantendo consistência com os demais módulos.

---

## Módulo Reserva

| Teste | Resultado |
|---------|---------|
| POST /reservas | ✅ Aprovado |
| GET /reservas | ✅ Aprovado |
| GET /reservas/:id | ✅ Aprovado |
| PUT /reservas/:id | ✅ Aprovado |
| DELETE /reservas/:id | ✅ Aprovado |
| Conflito de datas | ✅ Bloqueado (400) |
| ID inexistente | ✅ Retorna 404 |
| Atualização de ID inexistente | ✅ Retorna 404 |
| Exclusão de ID inexistente | ✅ Retorna 404 |

---

## Módulo Pagamento

| Teste | Resultado |
|---------|---------|
| POST /pagamentos | ✅ Aprovado |
| GET /pagamentos | ✅ Aprovado |
| GET /pagamentos/:id | ✅ Aprovado |
| PUT /pagamentos/:id | ✅ Aprovado |
| DELETE /pagamentos/:id | ✅ Aprovado |
| Reserva inexistente | ✅ Bloqueado (400) |
| ID inexistente | ✅ Retorna 404 |
| Atualização de ID inexistente | ✅ Retorna 404 |
| Exclusão de ID inexistente | ✅ Retorna 404 |

---

## Conclusão

Todos os módulos foram testados manualmente utilizando Thunder Client.

Foram validados:

- Operações CRUD completas
- Validações de regras de negócio
- Tratamento de erros
- Relacionamentos entre entidades
- Consistência dos retornos HTTP

### Resultado Final

✅ Hospede aprovado

✅ Quarto aprovado

✅ Reserva aprovada

✅ Pagamento aprovado

✅ Banco de dados funcionando corretamente

✅ Relacionamentos funcionando corretamente

✅ Regras de negócio funcionando corretamente

O sistema encontra-se funcional para apresentação e entrega acadêmica.