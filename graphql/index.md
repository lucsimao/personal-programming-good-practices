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

# Referências

https://cursos.alura.com.br/course/graphql-construindo-api-apollo-server
