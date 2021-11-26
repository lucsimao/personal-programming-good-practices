# Diferenças entre arrow Function e functions normais

## Escopo do this

A linguagem JavaScript possui o que chamamos de escopo de variáveis. Podemos dizer que esse conceito é, em poucas palavras, a maneira que as variáveis são identificadas ou “enxergadas” em nosso código. As variáveis que são criadas na “raiz” de nosso código estão no escopo global.

quando criamos uma função, um novo escopo é criado

Arrow function não criam um novo escopo, não possuem um próprio this, então é possível usar o escopo local. Escopo léxico

Ela tem um ponto que é o escopo léxico, ela herda o contexto "this" local de onde foi declarado
Tipo, se você tentar acessar um this.atributo do contexto local, você não consegue pela função normal (a menos que ela esteja dentro do objeto que tem esse this), já com arrow function consegue
Outro ponto é que a gente pode usar function como construtor, inclusive dar new Function

Aí tem também o fato de que funções normais possuem nome próprio
E arrowFunctions podem não possuir nome (por isso são chamadas às vezes de anonymous function), mas se você quiser dar um nome para ela, tem que salvar em uma variável
Aí tem uma parada de que ela não tem acesso ao atributo "arguments", que retorna os argumentos das funções
tipo, você não pdoe ter dois argumentos duplicados em arrow function tipo, (arg, arg)

https://blog.matheuscastiglioni.com.br/definindo-funcoes-em-javascript/
https://hcode.com.br/blog/entendendo-arrow-functions-de-uma-vez-por-todas
