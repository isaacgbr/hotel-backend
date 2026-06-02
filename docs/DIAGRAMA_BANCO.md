# Diagrama do Banco de Dados

Este documento representa a estrutura atual do banco de dados do Sistema de Hotel conforme definido no arquivo `schema.prisma`.

## Relacionamentos

* Um hóspede pode possuir várias reservas.
* Um quarto pode participar de várias reservas.
* Uma reserva pertence a um único hóspede.
* Uma reserva pertence a um único quarto.
* Uma reserva pode possuir vários pagamentos.

---

## Diagrama ER (Mermaid)

```mermaid
erDiagram

    HOSPEDE ||--o{ RESERVA : possui
    QUARTO ||--o{ RESERVA : reservado_em
    RESERVA ||--o{ PAGAMENTO : gera

    HOSPEDE {
        Int id PK
        String nome
        String cpf UK
        String telefone
        String email
    }

    QUARTO {
        Int id PK
        String numero UK
        String tipo
        String status
        Float precoPorDiaria
    }

    RESERVA {
        Int id PK
        DateTime dataEntrada
        DateTime dataSaida
        Int hospedeId FK
        Int quartoId FK
    }

    PAGAMENTO {
        Int id PK
        Float valor
        String statusPagamento
        Int reservaId FK
    }
```

---

## Observações

### Campos Únicos (Unique)

* `Hospede.cpf`
* `Quarto.numero`

### Chaves Estrangeiras (Foreign Keys)

* `Reserva.hospedeId → Hospede.id`
* `Reserva.quartoId → Quarto.id`
* `Pagamento.reservaId → Reserva.id`

### Campos Opcionais

* `Hospede.email`

### Valores Padrão

* `Quarto.status = "disponivel"`
