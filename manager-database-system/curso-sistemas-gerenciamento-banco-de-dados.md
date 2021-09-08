# Indexação de Dados

- Motivação: "Se você não encontrar no índice, examine cuidadosamente o catálogo inteiro" Sears et al 1897
- Um índice é uma estrutura de dados que organiza os registros, armazenados em disco, para otimizar determinados tipos de operações de recuperação.
- Um índice nos permite recuperar de forma eficiente todos oe registros que satisfaçam uma condição de pesquisa, com o objetivo de acelerar/otimizar as operações de recuperação de dados

## Condição de Pesquisa

- É a condição utilizada para selecionar os registros que devem ser recuperados

## Chave de Pesquisa

- Atributos utilizados na condição de pesquisa(busca)
  - Um ou mais atributos(chave composta)

## Arquivo de índice

- É uma estrutura de dados que, muito provavelmente também será armazenada em disco, seguindo a abstração de arquivo.
- Entrada de dados: são os registros armazenados em um arquivo de índice
  - Uma entrada de dados com valor de chave de pesquisa k contém informações suficientes para localizar um ou mais registros de dados com valor de chave de pesquisa k

## [Paginação de Dados](https://www.devmedia.com.br/paginacao-com-grande-quantidade-de-dados-no-sql-server-sql-magazine-78/17722)

É uma técnica que consiste em pegar uma amostra X de dados e calcular outras quantidades de amostrar possíveis para o usuário. Essas amostras são chamadas de páginas e podem ter um tamanho definido tanto pelo sistema quanto pelo usuário. Cada página necessita de um acesso ao disco para leitura, assim, a indexação permite reduzir a quantidade de acessos ao disco visitando o menor número de páginas possíveis.

## Classificação de índices

- **Índices ordenado**
  - **Índices primários**(Clustering Indices)
    - **Denso:** quando o índice tem uma entrada para cada valor diferente do arquivo de dados
    - **Esparso:** quando o arquivo de índice tem um tamanho de entrada menor que o arquivo de dados (um para cada página de dados, por exemplo)
  - **Índices secundários**
    - Pode possuir nível extra de indireção para permitir como estratégia.
- **Índices hash**

## Índice Hash

Índice hash é uma estrutura de índice organizada como uma tabela de hash.

### Hashing Estático

- **Bucket**: uma unidade de armazenamento de um conjunto de entradas de índice. Pares <chave de busca, ponteiro de dados>
- **Função de Hash** é uma função h, que leva um valor de um conjunto K em um elemento de um conjunto B, onde K representa o conjunto de todas as chaves de busca e B é o conjunto de endereço de todos os buckets
  \[h: K \rightarrow B\]
- **Colisão:** Bucket Overflow - quando um bucket possui mais valor que seu tamanho, é criado um bucket overflow, com um ponteiro para ele, servindo de lista encadeada.

**Obs:** Um hash estático, no pior caso, se comporta como uma lista encadeada.

- **Colisões**: caso a função de hash não seja [injetiva](https://www.matematica.pt/faq/funcao-injetiva.php), podem ocorrer colisão.
  - Para tratar colisões é possível usar as seguintes técnicas
    - [Encadeamento Exterior](https://www.youtube.com/watch?v=I1IXHgpHAZs)
    - [Encadeamento Interior](https://www.youtube.com/watch?v=YV2fxiS5Lk0)
    - [Endereçamento Aberto](https://www.youtube.com/watch?v=BDYiADxBqXA)

[**Função de espalhamento perfeito:**](http://www.facom.ufu.br/~abdala/DAS5102/TEO_TabelaDeEspalhamento.pdf) uma função que é capaz de evitar qualquer colisão.

#### Características desejáveis em uma função hash

- Produz poucas colisões
  - depende de conhecer a distribuição das chaves
- É fácil de computar
  - conter poucas operações aritméticas, sendo fácil de calculá-la
- Ser uniforme

  - O número máximo de chaves mapeadas, quando N = número de chaves e M = número de buckets, deve ser
    \[|N|/|M|\]

- B ideal
  - Se B for muito grande, vai ocorrer desperdício de espaço em disco.
  - Se B for muito pequeno, pode ocasionar overflow de buckets e comprometimento de desempenho

#### [Funções de Hashing comuns](https://www2.unifap.br/furtado/files/2016/11/Aula7.pdf)

- Método da Divisão
- Método da Multiplicação
- Método da Dobra
- Método da Análise dos dígitos

#### Fatores geradores de overflow nos buckets

- Número insuficiente de buckets
- Desequilíbrio nos buckets

#### Considerações

O **Hashing Estático** é eficiente para consultas do tipo exact match, principalmente em atributos sem repetição.

- É interessante buscar prever espaços insuficientes nos hashs e atualizar a função do hash. Isso é uma operação custosa.
  - O ideal é ter uma função de hash que permita ser alterada dinamicamente conforme a estrutura cresça, por meio da própria função de hashs ou de número de buckets.

# Referências

- [AntenaDev - Curso Sistemas de Gerenciamento de Bancos de dados](https://www.youtube.com/watch?v=VWtj-zz3wrE&list=PLuVyaX1aLC-HNNwV8a6_A0bGDBL18nK-s)

- [Paginação - Dev Media](https://www.devmedia.com.br/paginacao-com-grande-quantidade-de-dados-no-sql-server-sql-magazine-78/17722)

- [Marcos André Silveira Kutova](https://www.youtube.com/user/kutova)

- [Programação Descomplicada Linguagem C](https://www.youtube.com/channel/UCUc6UwvpQfOLDE7e52-OCMw)

- [Thomas Cormen - Algoritmos](https://www.amazon.com.br/Algoritmos-Teoria-Pr%C3%A1tica-Thomas-Cormen/dp/8535236996/ref=asc_df_8535236996/?tag=googleshopp00-20&linkCode=df0&hvadid=379707181411&hvpos=&hvnetw=g&hvrand=615228770668078570&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001538&hvtargid=pla-1002925180312&psc=1)
