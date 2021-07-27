# Abstract Factory

## Intenção

Fornecer uma interface para a criação de famílias de objetos relacionados ou dependentes sem especificar suas classes concretas.

## Outros nomes

- Kit

## Aplicabilidade

- Um sistema que deve ser desacoplado de como seus produtos são criados, compostos ou representados
- Um sistema que deve ser configurado como um produto de uma **família** de múltiplos produtos
- Uma família de objetos-produto que é projetada para ser usada em conjunto e você deve garantir essa restrição [_Exemplo das mobílias_](https://refactoring.guru/pt-br/design-patterns/abstract-factory)
- Você precisa fornecer uma biblioteca de classes de produtos e quer revelar somente as interfaces e não suas implementações

## Participantes

- AbstractFactory
- ConcreteFactory
- AbstractProduct
- ConcreteProduct
- Client

## Vantagens

- Isola as classes concretas e reduz o acoplamento
- Torna fácil a troca entre famílias de produtos
- Ela promove harmonia entre os produtos
- Os produtos de uma fábrica se tornam compatíveis entre si
- SRP - Single Responsibility Principle - a manutenção de um tipo de produto se torna fácil
- OCP - Open Closed Principle - é possível inserir novos produtos sem quebrar o código cliente existente

## Desvantagens

- É difícil suportar novos tipos de produto
- Aumento no número de classes

# Referências

- [Padrões de Projetos: Soluções Reutilizáveis de Software Orientados a Objetos](https://www.amazon.com.br/Padr%C3%B5es-Projetos-Solu%C3%A7%C3%B5es-Reutiliz%C3%A1veis-Orientados/dp/8573076100)

- [Alura - Design Patterns em PHP: Padrões criacionais ](https://www.alura.com.br/curso-online-php-design-pattern-criacional)

- [Refactoring Guru](https://refactoring.guru/pt-br/design-patterns/abstract-factory)
