# [6 dicas de performance em Node.js](https://www.youtube.com/watch?v=917e1QnJ5Vg)

## Use cache

- Regra do 1 segundo recorrente: se eu tenho um método ou uma requisição que demora mais de 1 segundo, devo buscar cacheá-la

## Usar índices nos bancos de dados

- Mongo

## Arquitetura Assíncrona

- Regra do 1 segundo recorrente: processar de forma assíncrona requisições que demoram mais de 1 segundo, pode ser jogada para uma fila com RabbitMQ ou Kafka

## Evitar erros na aplicação

- Erros na aplicação degradam a performance. Tentar estar ciente dos bugs que ocorrem em produção.

## Considerar o uso de Clusters

- Considerar utilizar clusters em sua aplicação ou na infra para ter performance escalável em relação ao uso.

[12-FactorApp](https://12factor.net/pt_br/)

## Protocolos modernos

- Buscar utilizar protocolos modernos e otimizados, como http2 e grpc

# Referências

[Callbacks, Promises e Async-Await no Node.js](https://www.youtube.com/watch?v=CevNqJwjIik)

[O que é MongoDB? E para que serve?](https://www.youtube.com/watch?v=Ln6XJZj3wYI)

[Devo usar NOSQL? | "ENDGAME" para Iniciantes em Programação | Série "Começando aos 40"](https://www.youtube.com/watch?v=EdOkYEE1J_Y)
