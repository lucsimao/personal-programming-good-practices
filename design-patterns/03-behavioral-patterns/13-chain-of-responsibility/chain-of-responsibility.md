# Strategy

## Intenção

Permitir encadear os objetos receptores, passando a solicitação ao longo da cadeia até que um objeto a trate.

## Aplicabilidade

- Quando mais de um objeto pode tratar uma solicitação e o objeto que a tratará não é conhecimento a priori.
- Quando você quer emitir uma solicitação para um comando dentro de vários objetos, sem especificar o receptor
- Quando o conjunto de objetos que pode tratar uma solicitação deveria ser especificado dinamicamente.

## Participantes

- Handler
- ConcreteHandler
- Cliente

## Vantagens

- **Single Responsibility Principle** - Acoplamento reduzido
- **Open Closed Principle** - Você pode introduzir novos handlers na aplicação sem quebrar o código existente
- Flexibilidade na atribuição de responsabilidades ao objetos. Você pode controlar a ordem das responsabilidades.

## Desvantagens

- A recepção não é garantida

# Referências

- [Padrões de Projetos: Soluções Reutilizáveis de Software Orientados a Objetos](https://www.amazon.com.br/Padr%C3%B5es-Projetos-Solu%C3%A7%C3%B5es-Reutiliz%C3%A1veis-Orientados/dp/8573076100)

- [Refactoring Guru](https://refactoring.guru/pt-br/design-patterns/chain-of-responsibility)
