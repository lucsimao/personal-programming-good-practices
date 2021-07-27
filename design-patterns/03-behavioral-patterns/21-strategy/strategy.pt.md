# Strategy

## Intenção

Definir uma família de algoritmos, encapsular cada uma delas e permitir adicionar ou remover algoritmos do projeto de forma independente dos clientes que os utilizam.

## Aplicabilidade

- Muitas classes relacionadas que diferem somente no seu comportamento
- Variantes de um mesmo algoritmo
- Um algoritmo usa dados dos quais os clientes não devem ter conhecimento
- Uma classe define muitos comportamentos que precisam ser chamados com múltiplos _ifs_

## Participantes

- Strategy
- Concrete Strategy
- Context

## Vantagens

- Define famílias de algoritmos relacionados
- Alternativa ao uso de subclasses
- Remoção de comandos condicionais _if e elses_
- Permite diferentes implementações para um mesmo comportamento

## Desvantagens

- Clientes devem conhecer diferentes _Strategies_
- Custo de comunicação entre _Strategy e Context_
- Aumento do número de objetos

# Referências

- [Padrões de Projetos: Soluções Reutilizáveis de Software Orientados a Objetos](https://www.amazon.com.br/Padr%C3%B5es-Projetos-Solu%C3%A7%C3%B5es-Reutiliz%C3%A1veis-Orientados/dp/8573076100)

- [Alura - Design Patterns C# ](https://cursos.alura.com.br/course/design-patterns-dotnet)

- [Refactoring Guru](https://refactoring.guru/pt-br/design-patterns/factory-method)
