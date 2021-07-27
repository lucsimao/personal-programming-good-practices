# Composite

## Intenção

Compor objetos em estruturas de árvore menores para representarem hierarquia nas partes-todo. O padrão permite aos clientes tratarem de maneira transparente os objetos individuais e composição de objetos.

## Aplicabilidade

- Representar hierarquias parte-todo de objetos
- quiser que os clientes sejam capazes de ignorar as diferenças entre composições de objetos e objetos individuais. Os clientes tratam de forma transparente

## Participantes

- Componente
- Leaf
- Composite
- Client

## Vantagens

- Desacopla a interface da implementação
- Extensibilidade melhorada
- Ocultação de detalhes de implementação dos clientes
- OCP - Open Closed Principle - Você pode introduzir novas abstrações e implementações independentemente uma das outras
- SRP - Single Responsibility Principle - Você pode focar na lógica de alto nível na abstração e em detalhes de plataforma na implementação

## Desvantagens

- Você pode tornar o código mais complicado ao aplicar o padrão em uma classe altamente coesa.

# Referências

- [Padrões de Projetos: Soluções Reutilizáveis de Software Orientados a Objetos](https://www.amazon.com.br/Padr%C3%B5es-Projetos-Solu%C3%A7%C3%B5es-Reutiliz%C3%A1veis-Orientados/dp/8573076100)

- [Alura - Design Patterns C# ](https://cursos.alura.com.br/course/design-patterns-2-dot-net)

- [Refactoring Guru](https://refactoring.guru/pt-br/design-patterns/composite)
