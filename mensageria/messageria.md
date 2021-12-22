# Quando usar mensageria?

- Quando temos uma comunicação assíncrona

  - Uma comunicação assíncrona se dá quando um cliente executa uma chamada a um serviço e não espera a resposta do serviço.

- Desacoplamento
- Escalabilidade
- Resiliência
- Processamento em background
- Aplicações distribuídas

- AMQP - Advanced Message Queueing Protocol

Publish Subscriber

-Label e payload

- Exchange - quem direciona a mensagem para a fila correta
- Binding - ligação entre a exchange e fila
- Binding key
- Routing key - chave da mensagem (decidir a fila)

O produtor envia a mensagem para o exchange e junto com a mensagem ele envia o routing key (optional0)
A exchange envia a mensagem pra fila ou filas de destino
4 Tipos de Exchange

- Direct Exchange, que procura por um binding key que seja igual ao routing key na mensagem, caso não consiga, ela será descartada
- Topic Exchange - similar ao direct, mas o binding key funciona como uma regex
- Fanout Exchange - encaminha para todas as filas que contenham o binding key desconsiderando o routing key
- Headers Exchange - Utiliza os valores do header da mensagem ignorando o routing key

1. Gerar pdfs a partir de um conteúdo

- É enviado ao produtor uma notificação, que encaminha para o broker, que recebe a requisição e envia para fila correta.
- A fila organiza as solicitações e despacha para o consumidor

Tolerância à falha

Dead Letters - Fila de mensagens que não tem filas ou que estão numa fila cheia
