# Bridge

## Intenção

Desacoplar uma abstração da sua implementação, de modo que as duas possam variar independentemente.

## Outros Nomes

- Handle
- Body

## Aplicabilidade

- Evitar um vínculo permanente entre uma abstração e sua implementação. Principalmente quando uma implementação deve ser selecionada ou alterada em tempo de execução.
- Quando tanto as abstrações como suas implementações tiverem de ser extensíveis por meio do subclasses.
- Mudanças na implementação de uma abstração que não puderem ter impacto sobre os clientes, ou seja, quando o código não puder ser recompilado.
- Quando você precisa ocultar completamente a implementação de uma abstração do cliente.
- Tiver uma proliferação de classes.
- Compartilhar uma implementação entre múltiplos objetos

## Participantes

- Abstraction
- RefinedAbstraction
- Implementos
- ConcreteImplementor

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

- [Refactoring Guru](https://refactoring.guru/pt-br/design-patterns/bridge)
