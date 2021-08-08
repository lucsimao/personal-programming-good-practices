# Padrões de Micro Serviços

## Strangler Pattern

Strangler Pattern é uma forma de migrar um sistema legado incrementalmente substituindo funcionalidades existentes por serviços fase por fase. Após a migração cada funcionalidade, a nova aplicação eventualmente substitui as features do sistema legado.

### Aplicação

Migrar um sistema monólito para micro-serviços de uma só vez é extremamente arriscado. Quanto maior o projeto a ser migrado, maior o risco.
O Stranger Pattern permite uma migração gradual das features, reduzindo o risco de uma falha total da aplicação e facilitando o testes e as métricas do impacto da mudança.
Em contrapartida, o maior desafio desse padrão é que, a cada micro-serviço migrado rodando junto ao sistema legado, o cliente deve ser atualizado para apontar para o novo serviço. Mas esse problema pode ser contornado utilizando um Routing Facade ou um Api Gateway, tornando essa alteração transparente.

Outro grande desafio do padrão é que em projetos muito complexos, principalmente onde os programadores iniciais não fazem mais parte da equipe, é difícil descobrir onde "cortar" o sistema legado. Dessa forma, [N Natesan](https://www.castsoftware.com/blog/how-to-use-strangler-pattern-for-microservices-modernization) nesse post sugere a seguinte abordagem para dividir uma aplicação em componentes refinados, leves, independentes, escaláveis e portáveis:

- Analisar a aplicação legada para dividí-la baseado em funcionalidades do domínio do problema baseado na complexidade do código.
- Visualizar os componentes legados e a nova aplicação em uma única View para definir o escopo de ambas as bases de código.
- Identificar o Strangler Facade e descobrir se existem pontos únicos de falha.
- Realizar uma análise para determinar ameaças de segurança em sua nova arquitetura.

# Referências

[Microserviços: Padrões de Projeto](https://cursos.alura.com.br/course/microsservicos-padroes-projeto)

[How to use strangler pattern for microservices modernization](https://www.castsoftware.com/blog/how-to-use-strangler-pattern-for-microservices-modernization)

[Strangle Design Pattern — O Padrão Estrangulamento](https://medium.com/codigorefinado/strangle-design-pattern-o-padr%C3%A3o-estrangulamento-f93c05e9061d)

[Martin Fowler - Strangler Fig Application](https://martinfowler.com/bliki/StranglerFigApplication.html)
