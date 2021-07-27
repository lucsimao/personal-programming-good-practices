# Adapter

## Intenção

Converter a interface de uma classe em outra interface, esperada pelos clientes. O adapter permite que as classes com interfaces incompatíveis trabalhem em conjunto de forma desacoplada

## Outro Nome

- Wrapper

## Aplicabilidade

- Você quer usar uma classe existente, mas sua interface não for compatível com o resto do seu código
- Utilize o padrão quando você quer reutilizar diversas subclasses existentes que não possuam alguma funcionalidade comum que não pode ser adicionada a superclasse
- Quando você precisar usar várias subclasses existentes, mas não for possível adaptá-las uma a uma

## Participantes

- Target
- Client
- Adaptee
- Adapter

## Vantagens

- SRP - Single Responsibility Principle - Você pode separar a conversão de interface ou de dados da lógica de negócio do sistema
- OCP - Open Closed Principle - Você pode adicionar novos adapters no programa sem quebrar o código existente

## Desvantagens

- A complexidade geral do código aumenta porque você precisa introduzir um conjunto de novas interfaces e classes. Algumas vezes é mais simples mudar a classe serviço para que ela se adeque com o resto do seu código.

# Referências

- [Padrões de Projetos: Soluções Reutilizáveis de Software Orientados a Objetos](https://www.amazon.com.br/Padr%C3%B5es-Projetos-Solu%C3%A7%C3%B5es-Reutiliz%C3%A1veis-Orientados/dp/8573076100)

- [Alura - Design Patterns C# ](https://cursos.alura.com.br/course/design-patterns-2-dot-net)

- [Refactoring Guru](https://refactoring.guru/pt-br/design-patterns/adapter)
