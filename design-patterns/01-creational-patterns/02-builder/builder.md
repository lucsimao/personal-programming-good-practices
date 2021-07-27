# Builder

## Intenção

Separa a construção de um objeto complexo da sua representação, de movo que o mesmo processo de construção pode criar diferentes representações

## Outros nomes

- N/A

## Aplicabilidade

- Um algoritmo que necessita criar um objeto complexo independente das partes que compõe o objeto e como elas são montadas
- Um processo de construção que deve permitir diferentes representações do mesmo objeto

## Participantes

- Builder
- ConcreteBuilder
- Director
- Product

## Vantagens

- Permite variar a representação interna de um produto
- Isola o código de construção do de representação
- Oferece um controle mais fino sobre o processo de construção

## Desvantagens

- A complexidade geral do código aumenta uma vez que o padrão exige criar múltiplas classes novas.

# Referências

- [Padrões de Projetos: Soluções Reutilizáveis de Software Orientados a Objetos](https://www.amazon.com.br/Padr%C3%B5es-Projetos-Solu%C3%A7%C3%B5es-Reutiliz%C3%A1veis-Orientados/dp/8573076100)

- [Alura - Design Patterns C# ](https://cursos.alura.com.br/course/design-patterns-dotnet)

- [Refactoring Guru](https://refactoring.guru/pt-br/design-patterns/builder)
