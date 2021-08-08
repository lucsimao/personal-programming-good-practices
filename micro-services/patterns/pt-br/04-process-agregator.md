# Padrões de Micro Serviços

## Process Aggregator Pattern

O Process Aggregator dispõe a interface de serviços de negócio que agregam serviços de domínio. Os aggregators agregam os serviços de negócio e realizam um processamento, removendo, adicionando ou tratando valores para retornar como resposta.

A principal diferença para um Proxy ou ApiGateway é o fato do Process Aggregator processar o retorno das apis, não somente redirecioná-los.

### Aplicação

Este padrão é delicado e não deve ser aplicado a menos que sua vantagem seja maior que o risco, como por exemplo:

- Reduz a carga de comunicação entre o cliente e os serviços, especialmente em clientes mobile que possuem banda e recursos de conexão limitado
- Sendo fácil de entender e implementar, permite engenheiros desenvolver soluções mais rápido
- Realizar processamento de apis de terceiros

Em contra partida, o Process Aggregator possui as seguintes desvantagens:

- Reduz a disponibilidade da aplicação, como resultado de uma falha multiplicativa
- Aumenta a latência das resposta
- Aumenta a complexidade de correção e reimplantação de funcionalidades

# Referências

[Microserviços: Padrões de Projeto](https://cursos.alura.com.br/course/microsservicos-padroes-projeto)

[MICROSERVICE AGGREGATOR PATTERN](https://akfpartners.com/growth-blog/microservice-aggregator-pattern)
