# GraphQL

#### TypeDef

#### Resolvers

#### Scalar Types

Tipos de dados que refletem dados primitivos, Int, float, string, boolean e id

#### Object Type

Tipo de dados relacionado a um objeto

#### Query Type

Definem os pontos de entrada, entry points da API, indicam quais os dados o cliente pode receber e como recebê-los. São como queries Get do RESt, mas o cliente pode montar a própria query customizada e receber somente od dados que precisa.

Para o GraphQL e para o cliente, não importa a origem dos dados, podem vir de qualquer fonte, rest, SQL, NoSQL, outro servidor GraphQL, etc

#### Mutation Type

Mutations são tipos GraphQL usados para adicionar, deletar ou alterar dados (análogos ao POST, PUT e DELETE em Rest). Os Query Types são obrigatórios em qualquer serviço GraphQL, mas Mutations Queries são opcionais.

#### Outros tipos

Enum,
Input,
Interface,
Union.

#### Considerações:

GraphQL é uma especificação pensada na forma como clientes utilizarão os dados, não de que forma estão gravados nem de onde vêm.

#### Dados do GraphQL

https://cursos.alura.com.br/course/graphql-construindo-api-apollo-server/task/82850

- [Rest DataSource](https://github.com/apollographql/apollo-server)
- [SQL DataSource](https://github.com/cvburgess/SQLDataSource)
- [Mongo DataSource](https://github.com/GraphQLGuide/apollo-datasource-mongodb/)
- [GraphQL DataSource](https://github.com/poetic/apollo-datasource-graphql)

#### Apollo Blog

https://www.apollographql.com/blog/backend/data-sources/a-deep-dive-on-apollo-data-sources/

##### Queries

As queries do graphQL apollo aceitam 4 parâmetros:

- root ou parent (chamada do nível anterior)
- args
- context (ex: {dataSource})
- info (representação em árvore da query, tudo o que o users precisa saber para funcionar)
- [info](https://cursos.alura.com.br/course/graphql-construindo-api-apollo-server/task/82852) (representação em árvore da query, tudo o que o users precisa saber para funcionar)

#### Campos nulos

https://cursos.alura.com.br/course/graphql-construindo-api-apollo-server/task/82854

###### Info

https://www.prisma.io/blog/graphql-server-basics-demystifying-the-info-argument-in-graphql-resolvers-6f26249f613a

##### Práticas de patterns

https://cursos.alura.com.br/course/graphql-construindo-api-apollo-server/task/82863

- GraphQL é sobre otimizar requisições e queries, diminuindo a quantidade de requisições e evitando os problemas do over-fetching ou under-fetching que são comuns em REST,

- GraphQL é sobre otimizar requisições e queries, diminuindo a quantidade de requisições e evitando os problemas do over-fetching ou under-fetching que são comuns em REST,

- GraphQL torna o desenvolvimento mais ágil evitando ajustes na API por parte do back-end para cada nova funcionalidade que vai ser implementada; por exemplo, diminui a necessidade da criação de endpoints específicos para uma determinada feature

- O schema torna o monitoramento de recursos mais fácil e a partir dele a documentação é gerada automaticamente, o que torna o trabalho em times mais fácil

- O schema reduz bastante a complexidade de adicionar novos tipos e campos da API

1. Cada tipo deve representar um objeto com dados que clientes possam consumir.
2. IDs são “anti-patterns” em GraphQL; deve-se sempre trabalhar com o objeto de referência.
3. Em campos com valores específicos — por exemplo, no projeto deste curso onde role pode ser somente “estudante”, “docente” ou “coordenação’, a melhor prática é utilizar um tipo ENUM
4. É aconselhável que Mutations tenha um tratamento de erros que passe informações claras ao cliente.

Boas práticas

1. HTTP: O GraphQL normalmente utiliza o protocolo HTTP para expor todos os recursos da API através de um único endpoint e todas as requisições utilizam POST - inclusive as de consulta. Ao contrário do REST, que é composto de uma série de endpoints, cada um deles expondo um único recurso da API. É possível utilizar o GraphQL para expor recursos em mais de um endpoint, porém essa não é uma prática comum, além de dificultar o uso de ferramentas como o playground — que apesar do nome é muito importante para acessar a documentação da API.

2. JSON: Com GraphQL, os dados normalmente são retornados no formato JSON, embora isso não seja obrigatório segundo a especificação do GraphQL. JSON é uma notação bastante familiar em desenvolvimento web, tanto para quem desenvolve APIs quanto para clientes, e é de fácil leitura. Para questões de performance, é recomendado o uso da compressão com GZIP e o envio das requisições com o header accept-encoding: gzip. Para saber mais sobre HTTP, header e GZIP, caso você precise, o curso de fundamentos do HTTP da Alura vai te dar a base.

3. Versionamento: Embora nada impeça o versionamento de uma API GraphQL, de forma similar ao versionamento das APIs REST, essa não é uma prática recomendada. Ao invés disso, encoraja-se uma evolução contínua do schema.

4. [Tipo NULL](https://graphql.org/learn/schema/#lists-and-non-null): Por padrão, em GraphQL todos os campos de um tipo podem ser nulos, a não ser quando explicitamente indicado. Isso porque em um serviço como uma API GraphQL há várias pontas que podem falhar: a conexão com o banco, uma ação assíncrona que falhou, entre outros fatores.

[DOCUMENTACAO](https://graphql.org/learn/best-practices/)
[ARTIGO SOBRE BOAS PRATICAS](https://www.moesif.com/blog/api-guide/graphql-best-practices-resources-and-design-patterns/)

#### Novos tipos

##### Tipos construtores

https://graphql.org/graphql-js/constructing-types/

### Inputs

boa prática para mapear parametros de chamadas da query

### Interface

É possível utilizar interface para tipar campos de retorno de mensagens, por exemplo e padronizar os retornos de cada operação

### Union

O último dos tipos do GraphQL, Union, é útil em casos em que existem campos similares em mais de um tipo.

https://www.apollographql.com/docs/apollo-server/schema/unions-interfaces/
union Resultado = Livro | Autoria

##### Resolver

Resolver serve para definir tudo o que a gente pode implementar em código tudo o que tiver no schema.

## Conclusão

Foi criado um exemplo simples de graphql

- Schema
- resolvers - implementação do schema
- camada de implementação do resolvers

# Referências

https://cursos.alura.com.br/course/graphql-construindo-api-apollo-server
