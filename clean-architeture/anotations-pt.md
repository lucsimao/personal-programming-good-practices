# Robert C. Martin: Arquitetura Limpa

## [Matriz de Eisenhower](https://www.eisenhower.me/eisenhower-matrix/)

- Matriz de Eisenhower ou Matriz de Urgência-Importância é uma ferramenta de gerenciamento de tempo que permite priorizar tarefas por urgência e importância.
  Estratégias:

1. Foque nas tarefas importantes e urgentes para serem feitas no mesmo dia.
2. As tarefas importantes, mas não tão urgentes, devem ser agendadas.
3. Tarefas urgentes, mas não importantes, devem ser delegadas para outros.
4. Tarefas nem urgentes, nem importantes, não devem ser feitas.

### Dicas de Gerenciamento de Tempo:

1. Coloque coisas em uma to-do list e decida qual deve ser feita primeiro.
2. Tente se limitar a não mais do que oito tarefas por quadrante. Antes de adicionar novas tarefas, complete as mais importantes primeiro.
3. Mantenha apenas uma lista para tarefas de negócios e tarefas privadas.
4. Não se distraia, nem se deixe distrair. Não deixe os outros definir sua prioridade. Planeje de manhã e então trabalhe em suas coisas.
5. Não procrastine muito. Use técnicas de gestão de descanso/produção, como a de [Pomodoro](https://francescocirillo.com/products/the-pomodoro-technique)

## Paradigmas de Programação

### Programação Estruturada

_A programação estruturada impõe disciplina sobre a transferência direta do controle_

Sequência -> decisão -> iteração

### Programação Orientada a Objetos

_A programação orientada a objetos impõe disciplina sobre a transferência indireta do controle_

### Programação Funcional

_A programação funcional impõe disciplina sobre a atribuição_

- Imutabilidade: variáveis em linguagens funcionais não variam

- Porque se preocupar com as variáveis mutáveis?
  - Todas as condições de corrida, condições de impasse e deadlocks são decorrentes de variáveis mutáveis.

Provocação: **A imutabilidade é praticável?**
Resposta: Sim, se tiver acesso a um armazenamento infinito e velocidade de processamento infinita. Logo, para sistemas reais, são necessárias certas concessões para a prática da imutabilidade.

#### Segregação de mutabilidade

Os componentes imutáveis realizam suas tarefas de maneira puramente funcional, sem nenhuma variável mutável. Os componentes mutáveis se comunicam com um ou mais componentes imutáveis puramente funcionais e permite que os estados das variáveis sejam alterados.

Como mudar o estado expõe os componentes aos problemas de concorrência, é uma prática usar uma memória transacional para proteger as variáveis mutáveis de alteração. A memória transacional trata as variáveis em memória da mesma forma que um banco de dados trata os dados no disco. Ela protege essas variáveis com um esquema de transação ou repetição

#### Event Sourcing

- Event sourcing é uma estratégia de armazenamento de transações, mas não do estado. Quando o estado for solicitado, simplesmente aplicamos todas as transações desde o início.
  Ex: transações bancárias

- Importante: nada nunca é atualizado nem deletado desse modelo. Em vez de CRUD, temos um CR.

Se tivermos processamento e armazenamento suficientes, conseguimos atingir a imutabilidade.

## SOLID

### SRP: Princípio da Responsabilidade Única

### OCP: Princípio do Aberto Fechado

### LSP: Princípio da Substituição de Liskov

### ISP: Princípio da Segregação de Interface

### DIP: Princípio da Inversão de Dependência

## Componentes

### Coesão

#### Princípio da Equivalência do Reuso/Release

#### Princípio do Fechamento Comum

#### Princípio do Reúso Comum

#### Diagrama de Tensão para Coesão entre Componentes

### Acoplamento

#### Princípio das Dependências Acíclicas

#### Design Top-Down

#### Princípio das Dependências Estáveis

- Estabilidade

#### Princípio de Abstrações Estáveis

- Abstração

##### Sequencias estáveis

- Zona de Exclusão
  - Zona da Dor
  - Zona da Inutilidade

## Arquitetura

### Implantação, Operação, Manutenção, Opções Abertas, Independência de Dispositivos, Propaganda por Correspondência, Endereçamento Físico

### Casos de Uso:

### Fronteiras

#### Arquitetura Plugin

#### Monólito, Threads, Processos Locais, Serviços

## Política e Nível

## Regras de Negócio

## Arquitetura Gritante

## Arquitetura Limpa

- Independência de Frameworks
- Testabilidade
- Independência da UI
- Independência do Banco de Dados
- Independência de Qualquer Agente Externo

## Objetos Humble

- Permitem separar os comportamentos difícis de testar dos comportamentos fáceis de testar.

## Limites Parciais

## Camadas e Limites
