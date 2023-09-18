1. **O que é o modelo de responsabilidade compartilhada da aws?**
   R: O modelo de [responsabilidade compartilhada](https://aws.amazon.com/pt/compliance/shared-responsibility-model/#:~:text=Responsabilidade%20da%20AWS%3A%20%E2%80%9Cseguran%C3%A7a%20da,os%20Servi%C3%A7os%20de%20nuvem%20AWS.) que separada as responsabilidades de segurança do cliente e da aws, de forma que a AWS é responsável pela segurança dos serviços oferecidos e o cliente dos dados inseridos e soluções realizadas dentro dos serviços.
1. **Explique a diferença em Security in Cloud and Security of Cloud**
   R: Security In Cloud se refere às responsabilidades do cliente na AWS e é definida de acordo com o serviço utilizado, variando de dados de usuário, plataformas, aplicação, identidade, gerenciamento de acesso, sistemas operacionais, rede, firewalls, criptografia do lado do cliente e do servidor, além da criptografia dos dados em trânsito.

- Security of Cloud se refere às responsabilidades da AWS, se tratando de proteger a infraestrutura, serviços de computação, armazenamento, banco de dados, redes, regiões, zona de disponibilidade e pontos de presença

1. **O que é o aws artifact?**
   São recursos para informações relacionadas ao compliance dos serviços em nuvem. O Artifact oferece acesso sob demanda aos relatórios de segurança e conformidade da aws.
   Eles possuem relatórios como Service Organization Control (SOC) e Payment Card Industry (PCI), além de certificações como ISO, FedRamp, HIPAA, GDRP, etc
1. **Cite alguns programas de conformidade da aws**
   PCI-DSS, HIPAA/HITECH, FedRAMP, GDPR, FIPS 140-2 e NIST 800-171, ISO
1. **O que é o aws IAM**
   Identity and Acess Management é um serviço que permite gerenciar a criação e limitação de acessos a grupos e usuários da AWS, disponibilizando as permissões adequadas para cada conta.
1. **O que é o princípio de menor privilégio?**
   R: É um conceito que diz que um usuário deve ter acesso apenas ao que é absolutamente necessário para desempenhar suas responsabilidades e nada mais que isso.
1. **O que é o usuário raiz da aws?**
   R: É o usuário referente ao criar uma conta aws pela primeira vez, que possui acesso a todos os produtos e recursos da conta aws. É um usuário que deve ser utilizado somente para operações de privilégio máximo da conta. Não é recomendado ser utilizado durante o dia a dia, nem mesmo para tarefas administrativas.
1. **O que é a autenticação multi fator?**
   R: Consiste em um sistema de segurança que adiciona camadas adicionais de autenticação ao login de usuário, como confirmação via sms, email, autenticadores, etc.
1. **Cite 3 ações que só podem ser feitas com o [usuário raiz](https://docs.aws.amazon.com/accounts/latest/reference/root-user-tasks.html)**
   R:

   - mudar configurações da conta
   - restaurar permissões do IAM de um usuário.
   - ativar o acesso de IAM para o Billing and Cost Management Console
   - encerrar a conta aws
   - registrar como um vendedor no marketplace
   - configurar um bucket s3 para ativar MFA
   - editar o deletar uma policy do S3 que inclua uma VPC inválida
   - logar na govCloud

1. **Fale sobre práticas recomendadas de segurança na vpc**
1. **Security Groups**

# Serviços de Segurança

Explique o que são esses serviços:

**Gerenciamento de identidade e acesso**

1. AWS IAM

   - Serviço de gerenciamento de credenciais.

1. Amazon Cognito

   - Recursos de inscrição e login de usuários para controlar o acesso web e mobile.

1. AWS Directory Service
1. AWS Resource Access Manager
1. AWS Organizations

   - Permite criar novas contas aws, agrupá-las, aplicar policies e gerenciá-las sob uma conta principal, sem custo adicional.
     **Detecções**

1. AWS Security Hub
1. AWS Guard Duty
1. AWS Inspector
1. AWS Config
1. AWS CloudWatch
1. AWS CloudTrail
1. AWS IOT Device Defender

**Rede**

1. AWS Network Firewall
1. AWS Shield
   - Proteção contra DDoS
1. Firewall de DNS do Amazon Route 53 Resolver
1. WAF (Web applications firewall)
   - Firewall de aplicação

**Proteção de dados**

1. Amazon Macie
   - Serviço que usa machine learning para identificar e proteger dados sigilosos
1. AWS Keys Management KMS
1. AWS CloudHSM (Hardware Security Modules)
1. AWS Certificate Manager
   - Permite gerenciar, provisionar e implantar certificados SSL e TLS da web
1. AWS Private Certificate Authority
   - Permite configurar uma CA de forma rápida e fácil para validar os certificados privados
1. AWS Secrets Manager
   - Permite gerenciar, recuperar e alterar credenciais de serviços como banco de dados, por exemplo

**Respostas a Incidentes**

1. Amazon Detective
1. Aws Elastic Disaster Recovery

**Conformidade**

1. AWS Artifact
   - Acesso a serviços de conformidade e certificados de compliance
1. AWS Audit Management
