# The Twelve-Factor App

Consiste em 12 boas práticas para criação de software em nuvem

### I. [Base de Código](https://12factor.net/pt_br/codebase)

Uma base de código com rastreamento utilizando controle de revisão, muitos deploys

Deve existir somente uma base de código por aplicação, mas vários deploys de uma mesma (ex: development, homologation, production)

### II. [Dependências](https://12factor.net/pt_br/dependencies)

Declare e isole explicitamente as dependências.

Uma aplicação doze-fatores nunca deve confiar na existência implícita e uma dependência, dessa forma, o ideal é declarar todas as dependências por meio de um manifesto de dependências (Ex: pom.xml, Gemfile, package.json)

### III. [Configurações](https://12factor.net/pt_br/config)

Armazene as configurações no ambiente

A configuração de uma aplicação é tudo o que pode variar entre diferentes deploys, (homologação, produção, ambientes de desenvolvimento, etc), isso inclui credenciais, valores, recursos de bases de dados, etc.

Uma aplicação doze-fatores nunca deve armazenar configurações diretamente no código. Deve existir uma estrita separação entre configuração e código.

Deve ser possível permitir mudar as configurações em diferentes deploys sem precisar realizar alteração no código.

### IV. [Serviços de Apoio](https://12factor.net/pt_br/backing-services)

Trate os serviços de apoio, como recursos ligados

Um serviço de apoio, ou backing services é qualquer serviço que sua aplicação consome via rede como parte de sua operação. Por exemplo, banco de dados, messageria, serviços SMTP, caches, etc.

Um código de um app de doze-fatores não faz distinção entre serviços locais e de terceiros, dessa forma, deve ser possível trocar um banco de dados local por um de terceiros sem realizar alterações no código, por exemplo.

### V. [Construa, lance, execute](https://12factor.net/pt_br/build-release-run)

Separe estritamente os builds e execute em estágios

O **estágio de construção** é uma transformação que converte um repositório de código em um pacote executável conhecido como construção. Usando uma versão do código de um commit especificado pelo processo de desenvolvimento, o estágio de construção obtém e fornece dependências e compila binários e ativos.
O **estágio de lançamento** pega a construção produzida pelo estágio de construção e a combina com a atual configuração do deploy. O lançamento resultante contém tanto a construção quanto a configuração e está pronta para execução imediata no ambiente de execução.
O **estágio de execução** roda o app no ambiente de execução, através do início de alguns dos processos do app com um determinado lançamento.

### [VI. Processos](https://12factor.net/pt_br/processes)

Execute a aplicação como um ou mais processos que não armazenam estado

Todos os processos doze-fatores devem ser stateless e share-nothing, não devem armazenar estado. Qualquer dado que precise persistir deve ser armazenado em um serviço de apoio stateful, como um banco de dados

É possível utilizar a memória de um processo como uma cache de transação única, como um download de um arquivo grande, mas uma doze-fatores nunca deve assumir que qualquer informação cacheada estará disponível numa segunda solicitação.

### VII. [Vínculo de porta](https://12factor.net/pt_br/port-binding)

Exporte serviços por ligação de porta

Um aplicativo doze-fatores deve ser totalmente auto-contido, de forma que não dependa de injeções em tempo de execução de um servidor para criar um serviço. Ou seja, o app deve exportar o HTTP como um serviço através da vinculação a uma porta e escutar as requições.

### VIII. [Concorrência](https://12factor.net/pt_br/concurrency)

Dimensione por um modelo de processo

Processos de uma app doze-fatores nunca devem daemonizar ou escrever arquivos PID. A criação de processos deve ser confiada ao sistema operacional para tratar sua complexidade de forma transparente ao código.

### IX. [Descartabilidade](https://12factor.net/pt_br/disposability)

Maximizar a robustez com inicialização e desligamento rápido

Os processos de um app doze-fatores devem ser descartáveis, ou seja, podem ser reiniciados ou parados a qualquer momento. Para isso, os processos devem possuir curto período de iniciação e desligar graciosamente (graceful shutdown), aguardando os processos em fila ou em execução terminarem antes do desligamento.

### X. [Dev/prod semelhantes](https://12factor.net/pt_br/dev-prod-parity)

Mantenha o desenvolvimento, teste, produção o mais semelhante possível

### XI. [Logs](https://12factor.net/pt_br/logs)

Trate logs como fluxo de eventos.

Um app doze-fatores nunca se preocupa com o roteamento ou armazenagem do seu fluxo de saída. Cada processo deve escrever seu próprio fluxo de evento.

Os logs devem ser capturados de forma desacoplada dependendo do deploy.

### XII. [Processos de Admin](https://12factor.net/pt_br/admin-processes)

Executar tarefas de administração/gerenciamento como processos pontuais

Deve existir um comando para a execução de tarefas administrativas, como migrações, scripts, etc

# References

[12Factor.net](https://12factor.net/pt_br/)

[Alura] (https://cursos.alura.com.br/course/entrega-continua-confiabilidade-qualidade )
