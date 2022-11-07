# O que é cloud computing

A computação em nuvem entrega **on demand** serviços de computação, armazenamento, applicações e outros serviços de ti com acesso via internet, com precificação **pay-as-you-go**

Uma plataforma de serviços em nuvem provê **rapid access**, **flexible** and **low costs**

Com cloud computing, você não precisa fazer **upfront investiments** (grandes investimentos) em hardware e **spend a lot of time** em gerenciamento de hardware

Em vez disso, você pode **provision exactly** (prover exatamente) o tipo e o tamanho certo dos serviços que você precisa.

Você pode acessar quantos serviços precisar, a qualquer momento e apenas pagar pelo que você usar

## Serviços

### Domínio 1

#### 6 Vantagens do Cloud Computing

- Trade capital expense for variable expense
- Benefit from massive economies of scale
- Stop guessing capacity
- Increase speed and agility
- Stop spending money running and maintaining data centers
- Go global in minutes

#### Tipo de computação em nuvem

- Infrastructure as a Service (IaaS)
  - networking features, computers (virtual or dedicated hardware) and data storage space
- Platform as a Service (PaaS)
  - Patch, operational system, etc.
- Software as a Service (SaaS)
  - Software as completed product run and managed by the service provider

#### Modelos de computação em nuvem

- Public
  - full deploy
- Hybrid
  - intermediate
- Private (On-premises)
  - local

### Domínio 2

#### Shared Responsibility Model

- Customer
  - Customer Data
  - Platform, application, identity, access management
  - operating system, network and firewall configuration
  - encrypting and auth
  - network traffic protection
- Aws
  - software
    - compute
    - storage
    - database
    - networking
  - hardware and global infrastructure
    - regions
    - availability zones
    - edge locations

#### Security IN CLOUD and Security OF CLOUD

- In Cloud (customers)
- Of the Cloud (aws)

#### Compliance

## Services

### Security, Identity and Compliance

- AWS Artifact
- IAM
- AWF (Firewall)
  - Camada 7 do osi
- Shield (DDoS Protection)
- Inspector
  - Faz uma varredura na máquina buscando vulnerabilidades de segurança
  - Somente para o EC2
- Trusted Advisor
  - Uma ferramenta online que dá uma visão geral, online, de todos os seus serviços da aws
  - custo, performance, segurança, tolerância a falhas, etc
- CloudTrail
  - Verificar questões de governança, compliance, auditoria, etc.
  - Armazena logs e histórico, como um syslog
- Cloudwatch
  - Coleta dados operacionais, logs, métricas, eventos, etc.
- AWS Config
  - access, audit and evaluate configurations
- Athena
  - Analisa dados no s3
  - Com SQL
  - Serverless
- Macie
  - Usa machine learning para reconhecer PIIs (Personally identifiable information)
  - Disponível apenas no s3 no momento

## Domínio 3

- Elastic Beanstalk
  - deploy, escalar aplicações e serviços fazendo upload do código e o serviço projeta toda a infra estrutura
  - Cria o load balance, ec2, ips, etc.
- CloudFormation
  - Criação de infra baseada em templates
- OpsWork
  - Integrado ao Chef e ao Puppet
  - Permite configurar, deployar e gerenciar instâncias ec2
- Code Commit
  - Serviço de controle de código (github da amazon)
- Code deploy
  - Serviço que configura a infra para um deploy (ECS, Fargate)
- Code pipeline
  - Serviço de entrega contínua
  - Equivalente Azure Devops, Github Actions, Gitlab CI/CD
- EC2 Container Services
  - Gerenciador de Containeres dentro da AWS
  - Fargate (gerencia a infra completa)
