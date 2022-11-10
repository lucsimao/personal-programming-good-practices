# Conceitos de Computação em Nuvem

## Principais conceitos

- **Pague conforme o uso** (_Pay as you go_)
- **Obtenha economia de custo**(_Realize cost savings_)

## Seis vantagens da computação em nuvem

1. **Troque as despesas de capital por despesas variáveis** (_Trade fixed expense for variable expense_)
1. **Beneficie-se de grandes economias de escala** (_Benefit from massive economies of scale_)
1. **Pare de fazer suposições sobre capacidade**(_Stop guessing capacity_)
1. **Aumente a velocidade e a agilidade**(_Increase speed and agility_)
1. **Pare de investir dinheiro em administração e manutenção de datacenters**(_Stop spending money running and maintaining datacenters_)
1. **Torne-se global em minutos**(_Go global in minutes_)

## Tipos de Computação em Nuvem

### Modelos de computação em nuvem

- IaaS (Infrastructure As A Service)
- PaaS (Platform As A Service)
- Saas (Software As A Service)

### Modelos de implantação de computação em nuvem

- Nuvem
- Híbrido
- On-premise

## Well-Architected Infrastructure

- Operational Excelence
- Security
- Reliability
- Performance Efficiency
- Cost Optimization
- Sustainability

## Valor comercial aws

## AWS Pricing/TCO (Total Cost Ownership) Calculation

## Rightsizing Recommendations (redimensionamento)

## AWS Artifact

## IAM

## Cloud Trail

## CloudWatch

## ACL rede

## Security Group

## Pratica de segurança VPC https://docs.aws.amazon.com/pt_br/vpc/latest/userguide/vpc-security-best-practices.html

# Serviços e suas palavras chave:

## Four Service Categories

### Compute

- Diferentes tipos de instâncias e familias
  - Limitações
- EC2, Beanstalk, ECS
- EKS, Fargate

### Storage

- Amazon Elastic Block Store EBS
- Amazon Simple Storage Service S3
- Amazon S3 Glacier
- Amazon Elastic File System
- Em que tipo de arquitetura usar

### Network

- VPC
- Conectar vpcs na internet
- Amazon Direct Connection ou VPC
- Amazon Route53

### Database

- RDS
  - Neptune
- OpenSearch
- DynamoDb
- Redshift

## Preços

- Calculadora de preços aws
- AWS Price List API
- Consolidated billing for AWS Organizations
- AWS Cost and Usage Reports
- AWS Cost Explorer
- AWS Budgets
- Alarmes de cobrança cloud watch
- Opções de preço do EC2
- Tags de Alocação de custo

**Cognito**:

- Sincronismo vários dispositivos
- Mobile

**Read Replicas**

- Gargalo de leitura/escrita

**Root IAM**

- Usuário raiz
- Primeiro acesso
- Não recomendado no dia a dia
- Acesso a todos os recursos da conta

**Cost Explorer**

- Apresentar gastos com infraestrutura

**Multi Regions**

- DR - Recuperação de Desastres

**CloudSearch**

- Pesquisa em todas as páginas e arquivos

**Fargate**

- Microsserviços
- Abordagem sem se preocupar com configuração de infra
- Abordagem sem servidor

**EC2 - Formas de Pagamento**

- On-demand
- Reserved
- Spot

**EBS**

- Manter arquivos de programa e de sistema em recursos separados
- Storage em blocos em EC2

**Lifecycle S3**

- Deleção após 30 dias

**X-Ray**

- Depurar

**Neptune**

- Banco de Dados em grafo
- Gerenciado pela AWS
- Redes sociais, etc

**CloudTrail**

- Auditoria
- Identificar ações de recursos

**Api Gateway**

- Manter várias versões da mesma api
- Simplificar acesso à endpoints

**Certificate Manager**

- Criptografia de mensagens trocadas
- Certificados

**Athena**

- SQL
- Serverless
- Análise de dados s3

**OpenSearch/ElasticSearch**

- Correlacionar de logs

**Security Groups**

- Controle de tráfego entrada e saída

**Shield**

- Proteçao DDOS

**WAF**

- Firewalls

**Well Architected**

- Excelência operacional
- Segurança
- Confiabilidade
- Sustentabilidade
- Otimização de custo
- Performance eficiente

**Site Estático**

- S3

**Elastic Load Balancer**

- Distribuir tráfego entre instâncias

**AWS Glue**

- Transformar e carregar arquivos no sistema
- Layout de arquivo diferente do que o sistema espera

**IAM Roles**

- Acesso de recursos restritos dentro da AWS

**Auto Scalling**

- Provisionar ambiente automaticamente em períodos de pico

**Glacier**

- Arquivos raramente acessados
- Arquivos somente fim de auditoria

**Inspector**

- Vulnerabilidades de segurança
- Risco de exposição

**Elastic IP**

- Mesmo endereço ip

**DynamoDb**

- Serverless
- Dados não estruturados
- Gerenciado pela amazon
- NoSQL

**QuickSight**

- BI
- Business

**CloudWatch**

- Monitorar recursos em funcionamento
- Alarmes de custo

**S3**

- Armazenamento virtual ilimitado

**Amazon Workspaces**

- Provisionar Desktops
- Windows ou Linux

**VPC**

- Rede virtual isolada
- Rede virtual privada

**EventBridge**

- Barramento
- Escalar eventos

**Direct Connect**

- Conexão dedicada entre infra estrutura on-premise e a aws

**Trusted Advisor**

- Melhores práticas
- Performance
- Otimização de Custos
- Segurança

**Step Functions**

- Orquestrar parte das peças controlando workflows

**CloudFormation**

- Provisionar automaticamente recursos
- Provisionar usando ci/cd

**Aws Batch**

- Rodar em paralelo tarefas em sequencia

**Route53**

- Nome de domínio público

**Aurora**

- Relacional
- 5x mais rápido que o mysql
- Gerenciado pela amazon

**Storage Gateway**

- Nuvem híbrida

**Pricing Calculator**

- Custo de implementação

**EFS**

- Sistemas de arquivos

**Planos de Suporte**

- Basic: documentation
- Developer: horário comercial
- Business: 24h mas sem engenheiros seniores
- Enterprise On-Ramp: 30 min, grupo de gerentes técnicos, suporte concierge
- Enterprise: 24 horas, engenheiros seniores, email, chat e telefone, Trusted Advisor priority, 15 min, detecção e resposta de incidentes, gerente técnico, acesso aos laboratórios autoguiados, suporte concierge

**AWS Global Accelerator**

**AWS Snowmobile**

- Exabytes

**AWS Snowball**

- Petabytes

**CloudFront**

- Sites rapidos
- Transmissão de video

**Amazon MQ**

**Amazon Lightsail**

- VPS

**Kinesis**

- Analisar dados de stream

**Cloud Billing**

**Amazon DMS**

- Migração de banco de dados

**Saving Plans**

- Preços mais baixos em troca de compromisso de uso em horas (por um ou três anos)

**Budgets**

- Orçamentos personalizados

**Organization**

- Define multiple subaccounts with one bill

**RDS**

- 100 snapshots por região

**Service Catalog**

- Governança

**VPN**

**Total Cost of Ownership**

- Número de servidores

**Certificações**

- PCI-DSS, HIPAA/HITECH, FedRAMP, GDPR, FIPS 140-2 e NIST 800-171

**A-Z -Zonas de disponibilidade**

- Alta disponibilidade numa mesma região

**Tags**

**Simple Monthly Calculator**

**Cost Explorer**

**Cost Report**

**QuickSight**

**Aws Pricing API**

**Billing and Management Console**

**Global Acelerator**

**Redshift**

**Amazon Elastic MapReduce**

**Macie**

- dados sensíveis

**License Manager**

**Simple Email Services**
