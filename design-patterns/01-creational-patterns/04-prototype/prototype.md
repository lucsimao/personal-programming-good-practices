# Prototype

## Intenção

Especificar os tipos de objetos a serem criados usando uma instância-protótipo e criar novos objetos a partir de cópias desse protótipo

## Aplicabilidade

- Classes a instanciar devem ser especificadas em tempo de execução
- Evitar construção de hierarquia de classes de fábricas paralelas à hierarquia do produto
- Instancias de uma classe que podem ter uma dentre poucas combinações diferentes de um estado
- Subclasses que somente diferem na forma que inicializam seus respectivos objetos

## Participantes

- Prototype
- ConcretePrototype
- Client

## Vantagens

- Acrescenta e remove produtos em tempo de execução
- Especifica novos objetos pela variação de valores
- Especifica novos objetos pela variação da estrutura
- Reduz o número de subclasses
- Configura dinamicamente uma aplicação com classes
- Permite clonar objetos sem acoplá-los às classes concretas
- VOcê pode se livrar de códigos de inicialização repetidos em troca de clonar protótipos pré-construidos
- Você pode produzir objetos complexos mais convenientemente
- Você tem uma alternativa para herança quando lida com configurações pré-determinadas para objetos complexos

## Desvantagens

- Clonar objetos complexos que têm referências circulares pode ser bem complicado

# Referências

- [Padrões de Projetos: Soluções Reutilizáveis de Software Orientados a Objetos](https://www.amazon.com.br/Padr%C3%B5es-Projetos-Solu%C3%A7%C3%B5es-Reutiliz%C3%A1veis-Orientados/dp/8573076100)

- [Alura - Design Patterns em PHP: Padrões criacionais ](https://cursos.alura.com.br/course/php-design-pattern-criacional)

- [Refactoring Guru](https://refactoring.guru/pt-br/design-patterns/prototype)
