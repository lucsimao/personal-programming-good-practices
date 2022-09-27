# Cloud watch

- Concentrador de eventos de log

## Alarme

- Criar alarme

  - metricas de preço

- Incluir o alarme no dashboard
- envio por email

- Status:
  - vermelho, alerme
  - dados insuficientes
  - OK

EX: criar uma instância do ec2 (Elastic Compute Cloud)

- sempre colocar uma tag na máquina

- métricas de cpu utilization
  - periodo 5 em 5 minutos
  - média, instantâneo, etc
- métricas de volume de dados

- alarme condicional (quando cpu > x, dispara o alarme)
- threat missing data -> o que fazer quando perder algum dado (considerar bom ou ruim, ignorar) - sugestão bad

- alarme via SMS

  - ações subscrever o tópico, enviar sms

- a ação default do alarme é enviar uma notificação

- CloudWatch Events
  - Tipos de serviço
    - estado de máquina ec2
  - target
    - sns topic
  - programar para uma lambda rodar periodicamente

### Logs

- jogar os logs para o cloud watch
  - permitir que uma conta grave os logs no cloud watch
  - adicionar policy para um user que possa adicionar esses logs
    - logs: createloggroup etc
  - configurar o agente para enviar logs para o cloud watch
    - configurar os logs
- Métricas personalizadas

  - Define log metric filter no cloud watch para criar filtros

- Criar uma lambda para realizar um heath check na aplicação

  - a lambda pode enviar a notificação
  - adicionar a policy de sns access para a lambda

- Notificação via slack
