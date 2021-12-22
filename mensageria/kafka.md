# Kafka

Messageria

- Tópicos

- Producer
  - send.get
- Consumer

  - subscribe
  - poll

- Partições dentro de um tópico: quantidade do paralelismo do processamento da fila
- Grupos, as mensagem são enviadas para um grupo específico, caso exista mais de um serviço no mesmo grupo, só um receberá a mensagem.
  - Quando um novo serviço é adicionado ao grupo, ele redistribui as partições entre os serviços
  - O kafka escolhe em qual partição enviar a mensagem baseado na chave enviada na mensagem
