# Padrões de Micro Serviços

## Command Query Responsibility Segregation

CQS: Um método pode ser um comando um uma consulta, numa as duas coisas ao mesmo tempo, Bertolt Meyer.

- Um comando sempre que você altera um estado do objeto ou do sistema
- Uma consulta quando retorna um valor

- Command – Operações que modificam o estado dos dados na aplicação.
- Query – Operações que recuperam informações dos dados na aplicação.

CQRS é um padrão arquitetural que visa separar a responsabilidade de escrita e leitura dos dados visando diminuir a carga e atraso nos bancos de dados de sua aplicação.
Além de separadas, as consultas devem ser feitas de forma síncrona, sem mensageria e em uma base desnormalizada separada, como uma cache e as gravações devem ser feitas de forma assíncrona em um banco normalizado.

### QueryStack

QueryStack é uma camada síncrona que recupera os dados de um banco de leitura desnormalizado.
O conceito de desnormalizado pode ser aplicado com “one table per view” ou seja uma consulta “flat” que retorna todos os dados necessários para ser exibido em uma view (tela) específica.

### CommandStack

O CommandStack é uma camada orientada a comportamento onde toda intenção de negócios é disparada pela UI como um caso de uso. Assim, eles são declarados de forma imperativa e disparados de forma assíncrona como eventos, que são interpretados pela mensageria e retornam um evento de sucesso ou falha.

### Vantagens do CQRS

- Todos os comandos são assíncronos, processador em fila, assim, o tempo de espera e a sobrecarga são menores
- Os processos que envolvem regras de negócio existem apenas no sentido de inclusão ou alteração das informações
- As consultas na QueryStack são feitas de forma separada e independente, de forma que não dependem do processamento da CommandStack
- É possível escalar separadamente os processos da CommandStack e da QueryStack

# Referências

[Microserviços: Padrões de Projeto](https://cursos.alura.com.br/course/microsservicos-padroes-projeto)

[Eduardo Pires - CQRS – O que é? Onde aplicar?](https://www.eduardopires.net.br/2016/07/cqrs-o-que-e-onde-aplicar/)

[Descomplicando CQRS](https://www.youtube.com/watch?v=yd6V4w19iJU)
