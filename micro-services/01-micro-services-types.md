# Micro services

## Data Service

É um tipo de serviço que fornece acesso direto a uma fonte de dados.

## Business Service

Um "aglomerado" de data services, mas que possuem lógica de negócio dentro deles para tratamento de dados.

## Translation Service

Para apis externas, o translation serve como um adaptador entre a aplicação utilizada e serviços de terceiros.

## Edge Service

Permite expor um serviço ou tipo de serviço específico para cada cliente.

## Stateless Services

Stateless services são bons candidatos para construção de blocos de um sistema distribuído. Como o nome sugere, esses serviços não mantém o estado da sessão entre as requisições. Por exemplo, se qualquer instância de serviço for removida, ela não afeta o processamento da lógica do serviço. Sistemas distribuídos devem buscar sempre serviços stateless

## Stateful Services

Stateful services salvam a informação da sessão em código. Quando dois ou mais microserviços estão se comunicando, eles mantém o estado da requisição.s

# Referências

[Alura - Tipos de Microservices](https://cursos.alura.com.br/tipos-de-microservices-c698)
