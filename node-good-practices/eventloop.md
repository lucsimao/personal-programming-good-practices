# Node Event Loop

Single thread - uma thread cuida das requisições que são tratadas como evento.

V8 - single
libuv - multi thread

- Heap

  - Memória disponível no processo do node

- CallStack
  - Blocking stack
- Event Loop (agendador de tarefas)

  - Faz uma iteração para ver se temos eventos a serem executados na thread

- Event Queue

  - Fila de Eventos

- Task Queue

  - Fila de execução das tarefas assíncronas

- Thread Pool
  - Threads assíncronas (começa com 4 e aumenta)
    - arquivos
    - rede
    - processos
    - outros

Promise -> Proxy para um valor que eventualmente vai estar disponível (https://nodejs.dev/learn/understanding-javascript-promises)

- fulfilled
- rejected
- pending
- settled

callback hell = .then.then.then
