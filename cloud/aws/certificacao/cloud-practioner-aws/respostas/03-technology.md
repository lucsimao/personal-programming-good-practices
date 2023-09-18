1.  **Fale sobre os modelos de computação em nuvem, IaaS, PaaS, SaaS.**
    R:

    - IaaS: Infrastructure as a Service
    - PaaS: Platform as a Service
    - SaaS: Software as a Service

1.  **Fale sobre os modelos de implantação de computação em nuvem (cloud, hibrid, on-premise)**
    R:

    - Cloud - modelo completamente em cloud
    - Híbrido - modelo parcialmente na nuvem
    - On-premise - modelo completamente local

1.  **Quando você utilizaria um serviço de nuvem híbrida?**
1.  **Fale 5 casos de uso para utilização da nuvem híbrida.**
1.  **Cite 3 clientes que utilizam a nuvem híbrida da AWS**
1.  ** O que uma VPC**

    - Virtual Private Cloud são redes virtuais que permitem o cliente configurar questões de segurança, conectividade e posicionamento de recursos.

1.  **Quantas regiões existem na aws?**
    27
1.  **Quantas zonas de disponibilidade existem na aws?**
    81
1.  **Explique a vantagem de AZ (zona de disponibilidade) e de multi regions**
    R: Zonas de disponibilidade é um ou mais data centers distintos com energia, rede e conectividade redundante em uma mesma região AWS.
    As AZs permitem ao cliente ao cliente trabalhar com alta disponibilidade, tolerância a falhas e escalabilidade em níveis superiores aos que um único data center oferece.
1.  **Quais são os 5 planos de suporte da AWS? Explique a diferença entre eles**
    R:

        - Basic: para todos os clientes
           - atendimento ao cliente, documentação, whitepapers, aws re post
           - AWS Trusted Advisor
           - AWS Personal Health Dashboard

        - Developer
           - Acesso ao Cloud Support pela  WEB em horário comercial.

        - Business
           - Acesso aos engenheiros de suporte da nuvem por telefone, web e chat  24/7
           - Api do AWS Suport
           - Suporte a software de terceiros

        - Enterprise on Ramp
            - Orientações de arquitetura consultivas de acordo com as aplicações
            - Grupo de gerentes de conta técnicos para oferecer orientação proativa e acesso a programas e especialistas da aws
            - Equipe de suporte do concierge

        - Enterprise
            - Acesso a laboratórios anto guiados online
            - Recomendações priorizadas do Trusted Advisor
            - Acesso a Detecção e resposta a incidentes

1.  **É possível que algum serviço da aws esteja disponível em alguma região e não em outra?**

    - Sim

1.  **fale sobre o cloudping.info (não é um serviço da aws)**

# Armazenamento

1. **O que é o Amazon Simple Storage Service - S3?**

   - Simple storage service é o serviço de armazenamento de dados da aws que oferece escalabilidade, disponibilidade de dados, segurança e performance.

1. **Explique os diferentes serviços de armazenamento do S3 (classes de armazenamento)**
   R: Por padrão, as classes de armazenamento armazenam dados em no mínimo 3 zonas de disponibilidade
   - Standard: padrão, alta resiliência, acessos, etc
   - Intelligent Tiering: serviço que altera a classe de armazenamento de forma automática baseada no histórico de uso do arquivo
   - Infrequent Access: dados usado com pouca frequência, mas que precisam de retorno rápido quando acessados.
   - One Zone Ia: semelhante ao Standard IA, mas armazena somente em uma zona de disponibilidade
   - Glacier: Dados que são usados com muito pouca frequência, na maioria das vezes, somente para fins de auditoria
     - Instant Retrieval: (1 vez por trimestre e com acesso instantâneo)
     - Flexible Retrieval: (1 ou 2 vezes por ano e recuperados de forma assíncrona)
     - Deep Archive (7 a 10 anos)
1. **O que é Elastic Block Storage - EBS?**
   R: Em resumo: são os volumes do EC2.
   É um serviço de armazenamento em blocos projetado para o EC2. É possível anexas instâncias EC2 ao EBS. Sua característica é a fácil escalabilidade e redundância por conta do armazenamento em blocos.
   É projetado para ser usado em instâncias separadas, ou seja, uma duas instâncias não podem possuir o mesmo volume EBS
1. **O que é Elastic File System - EFS**
   - É um sistema de armazenamento de arquivos, que pode ser escalável por arquivos (e cobrados por arquivo). Além disso, pode ser compartilhando entre instâncias e acessado pela internet.
1. **O que é Amazon Storage Gateway**
   - É um serviço de armazenamento na nuvem híbrida que permite acesso de serviços on premises a dados salvos no ambiente de cloud.
1. **O que é AWS Backups**

# Computacionais

1. O que é Elastic Compute Cloud EC2
1. o que é EC2 AutoScaling
1. O que é EC2 Image Builder
1. O que é Amazon Lightsail
1. AWS App Runners
1. AWS Batch
1. AWS Elastic Bean Stalks
1. AWS Fargate
1. AWS Lambda
1. AWS Serverless Application Repository
1. AWS Outposts
1. AWS WaveLenght
1. VMware Cloud on AWS

# Redes e entrega de conteúdo

1. Amazon Api Gateway
1. Amazon Cloudfront
1. Amazon Route53
1. Amazon VPC
1. AWS App Mesh
1. AWS Cloud Map
1. AWS Direct Connect
1. AWS Global Accelerator
1. AWS Private Link
1. AWS Transit Gateway
1. AWS VPN
1. Elastic Loading Balancing

# Banco de Dados

1. Amazon Aurora
1. Amazon DynamoDB
1. Amazon ElastiCache
1. Amazon Keyspaces(for Apache Cassandra)]
1. Amazon Neptune
1. Amazon Relational Database Service
1. Amazon RDS on VMware
1. Amazon Quantum Ledger Database (QLDB)
1. Amazon Timestream
1. Amazon DocumentDB (compatível com MongoDB)

# Amazon Web Services Cloud

1. Aws Manager Console
1. AWS CLI
1. Aws SDK
1. Análises
1. Integração de aplicações

# Integração de aplicações

1. Amazon Step Functions
1. Amazon AppFlow
1. Amazon EventBridge
1. Amazon Managed Workflows for Apache Airflow
1. Amazon MQ
1. Amazon SNS
1. Amazon SQS
1. Amazon Simple Workflow Service

# Realidade Virtual ou Aumentada

1. Amazon Sumerian

# Análises

1. Amazon Athena
1. Amazon CloudSearch
1. Amazon EMR
1. Amazon FinSpace
1. Amazon Kinesis
1. Amazon Kinesis Data Firehose
1. Amazon Kinesis Data Analytics
1. Amazon Kinesis Data Streams
1. Amazon Kinesis Video Streams
1. Amazon OpenSearch Service
1. Amazon Redshift
1. Amazon QuickSight
1. Amazon Data Exchange
1. AWS Data Exchange
1. AWS Data Pipeline
1. AWS Glue
1. AWS Lake Formation
1. AWS Managed Streaming for Apache Kafka

# Blockchain

1. Amazon Managed Blockchain

# Business

1. Alexa for Business
1. Amazon Chime
1. Amazon SES
1. Amazon WorkDocs
1. Amazon WorkMail

# Gerenciamento Financeiro

1. AWS Application Cost Profiler
1. AWS Cost Explorer
1. AWS Budgets
1. Relatório de Custo e Uso AWS
1. Gerar Relatório de instâncias reservadas
1. Saving plans

# Atendimento

1. Amazon Connect

# Contêineres

1. Amazon Elastic Container Registry
1. Amazon Elastic Container Service
1. Amazon Elastic Kubernetes Service
1. AWS App2Container
1. Red Hat OpenShift Service on AWS

# Ferramentas Desenvolvedor

1. Amazon Corretto
1. AWS Cloud9
1. AWS Cloudshell
1. AWS CodeArtifact
1. AWS CodeBuild
1. AWS Codecommit
1. AWS CodeDeploy
1. AWS CodePipeline
1. AWS Codestar
1. AWS Fault Injection Simulator
1. AWS X-Ray

# Computação de usuário final

1. Amazon AppStream 2.0
1. Amazon WorkSpaces
1. Amazon WorkLink

# Serviços da Web e móveis frontend

1. Amazon AppStream 2.0
1. Amazon WorkSpaces
1. Amazon WorkLink

# Tecnologia de Jogos

1. Amazon GameLift
1. Amazon Lumberyard

# Internet das Coisas

1. AWS IoT 1-Click
1. AWS IoT Analytics
1. Botão do AWS IoT
1. AWS IoT Core
1. AWS IoT Device Defender
1. AWS IoT Device Management
1. AWS IoT Events
1. AWS IoT Greengrass
1. AWS IoT SiteWise
1. AWS IoT Things Graph
1. AWS Partner Device Catalog
1. FreeRTOS

# Machine Learning

1. Amazon Augmented AI
1. Amazon CodeGuru
1. Amazon Comprehend
1. Amazon DevOps Guru
1. Amazon Elastic Inference
1. Amazon Forecast
1. Amazon Fraud Detector
1. Amazon HealthLake
1. Amazon Kendra
1. Amazon Lex
1. Amazon Lookout for Equipment
1. Amazon Lookout for Metrics
1. Amazon Lookout for Vision
1. Amazon Monitron
1. Amazon Personalize
1. Amazon Polly
1. Amazon Rekognition
1. Amazon SageMaker
1. Amazon SageMaker Ground Truth
1. Amazon Textract
1. Amazon Transcribe
1. Amazon Translate
1. Apache MXNet on AWS
1. AWS Deep Learning AMIs
1. AWS DeepComposer
1. AWS DeepLens
1. AWS DeepRacer
1. AWS Inferentia
1. TensorFlow on AWS

# Gerenciamento e governança

1. Amazon CloudWatch
1. AWS Auto Scaling
1. AWS Chatbot
1. AWS Compute Optimizer
1. AWS Control Tower
1. AWS CloudFormation
1. AWS CloudTrail
1. AWS Config
1. AWS Launch Wizard
1. AWS Organizations
1. AWS OpsWorks
1. AWS Proton
1. AWS Service Catalog
1. AWS Systems Manager
1. AWS Trusted Advisor
1. AWS Health Dashboard
1. AWS Managed Services
1. AWS Console Mobile Application
1. AWS License Manager
1. AWS Well-Architected Tool

# Media

1. Amazon Elastic Transcoder
1. Amazon Interactive Video Service
1. Amazon Nimble Studio
1. Dispositivos e software do AWS Elemental
1. AWS Elemental MediaConnect
1. AWS Elemental MediaConvert
1. AWS Elemental MediaLive
1. AWS Elemental MediaPackage
1. AWS Elemental MediaStore
1. AWS Elemental MediaTailor

# Migração e Transferência

1. AWS Application Migration Service
1. AWS Migration Hub
1. AWS Application Discovery Service
1. AWS Database Migration Service
1. AWS Server Migration Service
1. Família AWS Snow
1. AWS DataSync
1. AWS Transfer Family

# Serviços de nuvem híbrida (https://aws.amazon.com/pt/hybrid/)

**Computação**

1. AWS Outposts
1. AWS Wavelenght
1. AWS Local zones
1. AWS Snow

**Containeres**

1. AWS ECS Anywhere
1. AWS EKS Anywhere

**Armazenamento**

1. AWS Storage Gateway
1. AWS Backup
1. AWS DataSync
1. AWS Transfer Family

**Redes**

1. AWS Direct Connect
1. Amazon Route53 Resolver

**Gerenciamento**

1. AWS Directory Service
1. AWS IAM
1. AWS System Manager
1. AWS OpsWork
1. AWS CodeDeploys
1. AWS CloudWatch
1. AWS X-Ray

**VMware**

1. VMware cloud on AWS
1. Amazon Relational Database on VMware
