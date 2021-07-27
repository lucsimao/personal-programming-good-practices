# Singleton

## Intenção

Garantir que uma classe tenha somente uma instância e fornecer um ponto global para acesso da mesma

## Aplicabilidade

- Quando é preciso somente uma instância de uma classe e essa instância tiver que dar acesso aos clientes através de um ponto conhecido
- Quando uma única instância tiver de ser extensível através de subclasses, possibilitando aos clientes usar uma instância estendida sem alterar o código
- Quando você precisa de um controle mais estrito sobre as variáveis globais

## Participantes

- Singleton

## Vantagens

- Acesso controlado a uma instância única
- Espaço de nomes reduzidos
- Permite um refinamento de operações e da representação
- Permite um número variável de instâncias
- Mais flexível do que operações em uma clase
- O objeto é inicializado somente uma vez

## Desvantagens

- Viola o princípio de responsabilidade única. O padrão resolve dois problemas de uma só vez
- O padrão Singleton pode mascarar um design ruim, por exemplo, quando os componentes do programa sabem muito sobre cada um
- O padrão requer tratamento especial em um ambiente multithread para que múltiplas threads não possam criar um objeto singleton várias vezes
- Pode ser difícil realizar testes unitários do código cliente do Singleton porque muitos frameworks de teste dependem de herança quando produzem objetos simulados

# Referências

- [Padrões de Projetos: Soluções Reutilizáveis de Software Orientados a Objetos](https://www.amazon.com.br/Padr%C3%B5es-Projetos-Solu%C3%A7%C3%B5es-Reutiliz%C3%A1veis-Orientados/dp/8573076100)

- [Alura - Design Patterns em PHP: Padrões criacionais ](https://cursos.alura.com.br/course/php-design-pattern-criacional)

- [Refactoring Guru](https://refactoring.guru/pt-br/design-patterns/singleton)
