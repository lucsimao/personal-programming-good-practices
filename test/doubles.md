# Test Double

O termo criado por [Gerrard Meszaros](https://www.linkedin.com/in/gerardmeszaros/?originalSubdomain=ca) Test Doubles são objetos que fingem ser um objeto real para fim de testes, simulando um elemento externo ou não do sistema.

“Geralmente, as bibliotecas de teste costumam misturar e confundir os conceitos de mock e stub. Tanto Jest (para JavaScript/React) quando o Mockito (para Java), não possuem o conceito de stub. O Jest se utiliza do método jest.fn() para criar tanto mocks quanto stubs, já o Mockito usa a classe Mock para criar mocks e stubs. Isso fica claro na própria documentação do Jest (abaixo).” Pablo

## Stubs

Simulam uma interação de chegada de uma dependência externa à AUT. Eles representam objetos com respostas prontas para serem usados no teste. Eles **não sabem** quantas vezes o método da dependência externa foi chamada ou quais os parâmetros utilizados, somente retornam a resposta já pronta.

Os stubs devem ser usados para:

- Para testar retornos de uma dependência externa;
- Testar o comportamento do nosso SUT frente aos diferentes retornos da API. Por exemplo, retornos de sucesso, falhas ou exceções.

“Não é aconselhável utilizar Mocks ou Stubs para testes de integração, já que estes devem ser o mais próximo possível do ambiente de produção.”

## Mocks

Simula as interações de saída com dependências externas ao nosso teste. Permite controlar e inspecionar as chamadas para a falsa dependência.

- Verifica se um ou mais métodos foram chamados ou não
- Verifica a ordem de chamada dos métodos
- Verifica se os métodos foram chamados com os argumentos certos
- Verifica quantas vezes o método foi chamado

Os mocks são úteis para testar:

- se um ou mais métodos de uma dependência externa foi chamado corretamente;
- quantas vezes esses métodos foram chamados;
- se esses métodos foram chamados com os parâmetros corretos.

Os mocks **não** são tão úteis para:

- valores retornados por uma função
- comportamentos de uma função.

## Spy

Spies é como uma combinação de mock e stub, que também permite gravar as chamadas para o método dublê. A diferença do mock/stub é que o spy não precisa de um stub para o teste passar, já que o método real vai ser inspecionado

Quando queremos gravar o comportamento de um método dentro de um objeto e/ou controlar o que esse método retorna.

## Fake

Podemos retornar um fake a partir de um servidor local, criado especificamente para o teste, onde simulamos o retorno de uma query a um banco de dados ou até mesmo um banco de dados real para o teste. Fakes são na verdade objetos reais, muito próximos da sua versão em produção, mas que trazem velocidade aos nossos teste.

“Fakes são úteis em testes funcionais ou testes de integração, mas não são recomendados para testes unitários onde podemos suprir nossas necessidades com stubs.”

Para simular grandes quantidades de dados em memória vindos de uma chamada assíncrona de um banco de dados ou de uma API externa.

# Dummies

Um objeto "nulo", que não fazem nada, mas que possui um tipo. São importantes para representações padrão de um objeto.

# Referências

[Pablo Rodrigo Darde](https://medium.com/rd-shipit/test-doubles-mocks-stubs-fakes-spies-e-dummies-a5cdafcd0daf)
[Jest](https://jestjs.io/docs/manual-mocks)
https://medium.com/trainingcenter/testes-unit%C3%A1rios-mocks-stubs-spies-e-todas-essas-palavras-dif%C3%ADceis-f2765ac87cc8
