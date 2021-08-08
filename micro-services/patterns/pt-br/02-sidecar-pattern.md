# Padrões de Micro Serviços

## Sidecar Pattern

Consiste em criar um container, serviço ou pacote que pode ser compartilhado com vários serviços. O Sidecar pattern é utilizado definindo um processo comum a vários serviços, criar um módulo compartilhado para eles e realizar a chamada nos serviços que dependem dele.

No contexto de _containerização_, Sidecar pattern é um Single Node Pattern composto por dois containers.

### Aplicação

Uma das principais funções do Sidecar é funcionar como um proxy reverso, nesse cenário ele recebe todas as requisições externas e as encaminha para o container principal.

Outra função é o monitoramento. Deployando um sidecar como monitor, é possível extrair métricas de um container principal, do próprio sidecar e do daemon onde eles executam.

O Sidecar também pode servir como um Abassador, um proxy para todas as requisições que saem da aplicação principal e acessam serviços externos.

Outros usos para esse padrão podem ser levantados como:

- Configuração Dinâmica
- Adicionar https para um serviço legado
- Log Aggregator

# Referências

[Microserviços: Padrões de Projeto](https://cursos.alura.com.br/course/microsservicos-padroes-projeto)

[Douglas Picolotto - Sidecar Pattern](https://douglaspicolotto.com/2019/03/17/sidecar-pattern/)

[Microsoft - Padrão sidecar](https://docs.microsoft.com/pt-br/azure/architecture/patterns/sidecar)

[Shashir - Microservice Architecture: Sidecar Pattern](https://medium.com/nerd-for-tech/microservice-design-pattern-sidecar-sidekick-pattern-dbcea9bed783)
