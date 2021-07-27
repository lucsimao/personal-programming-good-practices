# Factory Method

## Intenção

Definir uma interface para a criação de um objeto, mas permitir que as subclasses decidirem qual classe instanciar. Foco: adiar a instanciação do objeto para a subclasse.

## Outros nomes

- Visual Constructor

## Aplicabilidade

- Uma classe que não pode antecipar a classe objeto que deve criar
- Uma classe que suas subclasses especificam os objetos que criam
- Classes que delegam responsabilidades para uma dentre várias subclasses auxiliares.
- Fornecer aos usuários da biblioteca ou framework uma maneira de estender os componentes internos
- Economizar recursos do sistema para reutilizar objetos existentes em vez de recriá-los

## Participantes

- Product
- ConcreteProduct
- Creator
- ConcreteCreator

## Vantagens

- Fornece ganchos para as subclasses
- Conecta hierarquias de classes paralelas
- Evita acoplamento entre criado e produtos
- SRP - Single Responsibility Principle - a manutenção de um tipo de produto se torna fácil
- OCP - Open Closed Principle - é possível inserir novos produtos sem quebrar o código

## Desvantagens

- O código pode se tornar mais complicado, pois você precisa introduzir muitas subclasses novas para implementar o padrão.

# Referências

- [Padrões de Projetos: Soluções Reutilizáveis de Software Orientados a Objetos](https://www.amazon.com.br/Padr%C3%B5es-Projetos-Solu%C3%A7%C3%B5es-Reutiliz%C3%A1veis-Orientados/dp/8573076100)

- [Alura - Design Patterns em PHP: Padrões criacionais ](https://cursos.alura.com.br/course/php-design-pattern-criacional)

- [Refactoring Guru](https://refactoring.guru/pt-br/design-patterns/factory-method)
