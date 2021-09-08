# Técnicas de Refatoração

### Extrair Função

- Transformar uma porção de código em uma função

### Internalizar Função

- Adicionar o corpo de uma função à outra

### Extrair Variável

- Separar uma linha com muitas operações em vários conjuntos diferentes de variáveis

### Internalizar Variável

- Contrário do Extrair Variável, adicionar uma variável desnecessária para dentro de uma operação

### Mudar Declaração de Função

- Alterar o nome, retorno e parâmetros de uma função

### Encapsular Variável

- Encapsular uma variável como privada, adicionando funções públicas para acessá-las, se necessário.
  Somente expor as variáveis realmente necessárias.

### Renomear Variável

- Alterar o nome de uma variável para um mais coeso

### Introduzir Objeto de Parâmetros

- Em funções com muitos parâmetros, é possível transformar os parâmetros em um objeto, reduzindo assim, a quantidade de parâmetros da função.
  (Ler Clean Code, Bob Martin, falando sobre nulo, mônade, díade, tríade e políades)

### Combinar Funções em Classe

- Extrair funções para uma classe separada

### Combinar Funções em Transformação

- Criar uma função de ponto de encontro, como uma função "enrich", que aceite os dados originais de entrada e calcule todos os dados derivados no dado de saída.
  Matemáticamente, seria como, assumindo f(x) e g(y), criar uma função h(x, y), tal que h(x,y) dependa de f(x) e g(y).

### Separar em Fases

- Em códigos ou funções que realizam mais de um objetivo, separar cada objetivo, ou fase, em funções separadas.

## Encapsulamento

### Encapsular Registro

- Dado um registro em formato de objeto de dados, encapsulá-lo como uma classe de dados.

### Encapsular Coleção

- Dado uma array em sua classe, transforme-a em uma classe de dados, com suas funções

### Substituir Primitivo por Objeto

- Dado um atributo primitivo que pode ser tratado com operações intrínsecas ao seu domínio, transforme-o em uma classe e exponha métodos com essas operações.
  Exemplo: atributo cep poderia ser uma string, mas transforme-o em um objeto e exponha um método validarCPF, por exemplo.
  Um atributo de endereço pode conter vários subcampos, Rua, número, bairro, cep e também pode expor uma função validarCEP

### Substituir Variável Temporária por Consulta

- Dado uma variável primitiva dentro do escopo de um código, transforme-a em uma função.
  Exemplo: precoTotal = numItems \* valorPorItem, você pode transformar em um método getPrecoTotal();

Essa refatoração é muito importante na refatoraão de uma função grande, pois você não vai precisar passar essas variáveis como parâmetro para as funções extraídas.

### Extrair Classe

- Quando você possui uma classe com muitos métodos e atributos, você pode separar um grupo de atributos e métodos em outra classe, reduzindo assim, a complexidade de cada ponto. Está diretamente relacionado ao _Encapsular Registro_ e _Encapsular Coleção_

### Internalizar Classe

- Inverso de extrair classe. Quando a decomposição de classes for desnecessária ou tiver deixando a lógica mais complexa do que deve ser, você pode internalizar uma classe como atributo de outra. É muito comum após uma refatoração que remove muitas coisas da classe, deixando pouca ou nenhuma coisa nela.

### Ocultar Delegação

- Quando existir um cliente que chame um método diretamente de um objeto do servidor por meio de um encadeamento via objeto delegado, o cliente deverá conhecer esse objeto. Uma refatoração para isso será criar no servidor um método simples de deleção que oculte o objeto delegado
  Exemplo: `manager = aPerson.department.manager`

```
  manager = aPerson.manager
  class Person {
    ...
    get manager() {
      return this.department.manager;
    }

```
