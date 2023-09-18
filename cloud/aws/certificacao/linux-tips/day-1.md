,# Por que computação em nuvem

# Criando uma conta

# Definindo um Budget e notificações

# Protegendo a conta com MFA

# Adicionar um usuário administrador

- Sempre usar o usuário adm e nunca o root

# Publicando um site no S3

- Liberar o ip público
- adicionar o html e os resources e abrir o ip publico
- Em properties ativa o static website hosting, que deve abrir uma url diferente do ip do bucket

# EC2

- Criar uma instância EC2, escolher a imagem (ex: amazon linux)
- abrir no ec2 connect instance para abrir diretamente o console da máquina

- instâncias da família T, tem um sistema de aceleração, quando o consumo está abaixo de um patamar, ele acumula como crédito e permite acelerar a cpu
- EBS-optimized instance: separa a interface de rede do ebs
- User Data: onde é possível adicionar script que vai ser executa na primeira vez que a instância for executada

script:
#!/bin/bash
yum -y install httpd php
service httpd start
echo '<?php phpinfo(); ?>' > /var/www/html/index.php

script para simular uso de cpu

dd if=/dev/zero of=/dev/null &

# Formas de precificação do EC2

- On-demand
- Spot Instance
- Savings Plans (Ou usar reserved instances)
  - upfront (pagar adiantado)
  - instancia reservada é por instância, o savings plans é por custo.
- Dedicated Hosts

# VPC

- Security group: proteção da instância
- ACL (access control list) - proteção da rede, se aplica a todas as instâncias daquela rede

# lightsail

- Os mesmos recursos e qualidade do Ec2, mas com uma experiência mais simples

# Route53

- Registro de domínio
- Permite configurar health check

# Elastic Ip

- Ip fixo associado a uma instância

# CloudShell

- Interpretador de comandos

# Serviços para criar websites

- Jekyll (permite criação de sites estáticos)
  - cria e compila sites no s3
- Wordpress

# aws-actions configure-aws-credentials

- AWS NUKE

# Amazon Machine Image

# html5up

# Load balance

- Launch Template
- Auto Scaling Group
- Target group
  - Algoritmo round robin ou least outstanding requests
  - Stickiness: utiliza cookies para que as requisições da mesma origem sejam encaminhadas para o mesmo destino

# crontab guru

#!/bin/bash
yum -y install httpd
echo "Hello from $(curl -s http://instance-data/latest/meta-data/instance-id)" >> /var/www/html/index.html
systemctl enable httpd.service
systemctl start httpd.service

# Create dynamic scaling policy

# USE Method https://www.brendangregg.com/usemethod.html

# Instance Storage vs EBS

- Instance Storage

  - local
  - Efêmero
  - fixa
  - custo incluso na instância

- EBS

  - remoto
  - durável
  - variável
  - custo independente

Obs: Instâncias que permitem EBS optimized = tem uma interface de rede para a aplicação e outra para o ebs (garantindo que não tenha concorrência de tráfego da aplicação com o tráfego de persistência)

- Tipos EBS:

  - SSD
    - IOPS
  - HD

- Snapshot

- Amazon FSd

# FIO

# EFS

- Sistema de arquivos distribuídos

# Read replicas - clusters multi az

- replica lag

# Containers

- ECS
- EKS
- Fargate

- AWS Copilot
- AWS App Runner
- ECR - Elastic Container Registry
- App mesh
- Cloudmap
- Lambda

- Lightsail
- AWSApp2Container
- AWS Proton
- Red HAt Openshift Server on AWS
- Amazon EKS Distro
- AWS App2Container

# Fargate

- criar uma task definition
- criar um cluster para executar a task
- Tipos de containeres:
  - tasks: executam e finalizam
  - services: container sobe e recebe requisições, etc

# Serverless

- AWS AppSync (graphql)
- Lambda
- Api Gateway

# Api Gateway

- Rest
- HTTP API

# SAM - Serverless Application Model

- Cloud formation

# Dynamo db

- teorema cap
  - Capacity, Availability, Partition
- Partition Key
- Sort key
- Acessível via api ou via query
- Query vs Scan
- DAX - Amazon DynamoDB Accelerator (DAX
  - Cache em memória específico pro dynamodb
  - uma aplicação que já usa o dynamo pode utilizar o dax de forma transparente

# Amazon ElastiCache

- Redis
  - oferece varias estruturas
    - hash
    - string
    - map
    - etc
  - MemoryDb
    - Engine compatível com redis, mas desenvolvido pela amazon
  - replicas vs shards (replica duplica shard divide)
- MemCached

# SQS

    - Sistema de fila de mensagens
    - DLQ
    - Modo padrão e modo fifo
      - modo padrão a ordem não é garantida ou pode ser duplicada

# SNS

    - Sistema de tópico

# Amazon MQ (brokers messageria tradicionais)

    - Apache ActiveMQ
    - RabbitMQ

# Kinesis Services

- Produto de streaming
- stream de dados e os clientes podem ler em vários pontos no broker de mensagens

# Route53

- Politicas de resolução do route53 (dns)

# Cloud Front

- Edge locations
- Configurar um dns, com origens
- redirecionar caminhos de requests para origens diferentes (s3 para imagens e assets, instância para o resto)
- Access points: como se fosse outro endpoint do cloudfront, mas com outra política

- Aceleração de transferência (configuração)

# AWS Global Accelerator

- EDNS
- Unicast
- Anycast
- Diferença de latência pelo uso do any cast para entrega de conteúdo mais próximo do cliente

# Multi Regions

- Quando não fazer arquitetura múltiplas regiões
  - Complexidade
  - Deployment
  - Preço (comparado ao single region)
  - Dados (replicação entre regiões diferentes)
    - somente fazer replicações assíncronas
- Quando fazer uma arch multi region
  - Disaster recovery
  - Melhor desempenho para global
    - região mais próxima do usuário final
  - Políticas corporativas (compliance) entre diferentes regiões

# Multi accounts

- Desvantagens

  - complexidade
  - custo
  - dados sincronizar

- Vantagens

  - segurança
  - charge back (departamento cobra o outro pela utilização, difícil de separar, o ideal é criar uma conta para cada um e separar as cobranças)
  - policies
  - merge (fusões de empresas, unir as contas da aws)

- root account
  - logs
  - audit
  - dns
- business units e organization unit

  - pode ter várias contas vinculadas
  - ambientes para outros setores

- cada conta está sujeita a policitas de SCP (Service Control Policy)
- Através do organizations é possível mexer contas via api

# AWS Organizations

# VPC

- NAT gateway
- Route Table internet gateway

# Private subnet

- Nat

# Modos de conexão ec2

- ec2 instance connect (conectada já com um usuário ec2-user)
- ssh padrão
- session manager
- ec2 serial console
  - conectado com teclado e mouse, como se fosse fisicamente

# VPC

- Conectar redes privadas redes vpc via peering
  - Peering connection
    - outra conta
    - outra região
  - Peering não é transitivo

# Direct Connect

# Transit Gateway

- Ajuda a configurar o roteamento de maneira centralizada em casos de muitas vpcs

# Replicação síncrona e assíncronas

- S3
- RDS
  - Single instance
  - multi az instance
  - multi az cluster
    - ssd como instance storage
    - read replicas
  - Aurora
    - Infra da amazon
    - Compatível com postgres e mysql
    - Nível de storage do aurora é sempre multi a-z

# Disaster Recovery

- RPO
  - Recovery Point
- RTO

  - Recovery Time

- DR Strategy

  - Backup and Restore
  - Pilot Light - replicação assíncrona na camada de dados,
  - Warm Standby - um auto scaling group para que caso ocorra um desastre, redirecione para outro lado, sempre rodando, mas com capacidade menor
  - multi site active/active - os mesmo serviços replicados em mais de uma região

- Serviços importantes para DR
  - Image Builder EC2
  - AWS Backup
    - backups, snapshots, etc
    - não só online, mas offline também
  - AWS Data sync
    - backup online
  - AWS Snow Family
    - mover dados offline
    - mandar pelo correio, etc
    - são dispositivos que recebemos e contém uma grande quantidade de storage
  - Database Migration Services (DMS) AWS (https://aws.amazon.com/free/migration/)
    - copia os dados de maneira assíncrona para a origem, mantendo o origiam e permite virar uma chave quando precisar
  - AWS Elastic Disaster Recovery

# Dia 4

- Princípio do menor privilégio

  - O IAM nega tudo a menos que seja explicitamente permitido

- Politicas
  - Efeito
  - Ação
  - Recurso
  - Condições
- Iam Policy
- Iam Analyzer
  - roles mais precisos
  - cloud trail

https://docs.aws.amazon.com/pt_br/IAM/latest/UserGuide/images/PolicyEvaluationHorizontal111621.png

# AWS Certificate Manager

- dados em trânsito
- usar certificado em 2 serviços geralmente
  - cloud front
  - load balancer

# AWS KMS

- Chaves de criptografia
- Dados em repouso
- HSM
- Symetric and Assymetric
  - Simétrica: mesma chave para criptografar e descriptografar
  - Assimétrica: chaves diferentes para criptografar e descriptografar
    - Chave pública e chave privada

# AWS Shell

# AWS CLI

# CloudFormation

# Elastic Beanstalk
