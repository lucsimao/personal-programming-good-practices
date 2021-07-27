# Template Method

## Intenção

Permite definir o esqueleto de um algoritmo em uma operação e que suas subclasses redefinam alguns passos de um algoritmo sem mudar a estrutura geral do mesmo.

## Aplicabilidade

- Implementar partes invariantes de um mesmo algoritmo de uma só vez
- Comportamento comum entre subclasses que devem ser fatorado para evitar duplicação de código
- Controlar extensões de subclasses

## Participantes

- Abstract Class
- Concrete Class

## Vantagens

- Permite polimorfismo somente em certas partes de um algoritmo, desacoplando as mudanças que ocorrem em outras partes do mesmo.
- Pode elevar código duplicado para a superclasse

## Desvantagens

- Alguns clientes podem ser limitados ao fornecer o esqueleto do algoritmo
- Você pode violar o S - Princípio da Substituição de Liskov ao suprimir uma etapa padrão através da subclasse
- Implementações com muitas etapas são mais difíceis de manter

# Referências

- [Padrões de Projetos: Soluções Reutilizáveis de Software Orientados a Objetos](https://www.amazon.com.br/Padr%C3%B5es-Projetos-Solu%C3%A7%C3%B5es-Reutiliz%C3%A1veis-Orientados/dp/8573076100)

- [Alura - Design Patterns C# ](https://cursos.alura.com.br/course/design-patterns-dotnet)

- [Refactoring Guru](https://refactoring.guru/pt-br/design-patterns/template-method)
