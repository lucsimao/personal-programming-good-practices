# Domínio 01 - Conceitos de Cloud

1. **O que é AWS Cloud?**
   R: AWS é um serviço de computação em nuvem que provê a entrega de serviços tecnológicos sob demanda através da internet com precificação "pay-as-you-go".
   Com AWS, é possível subir uma máquina virtual, setar o número de cpus, memória, armazenamento e outras características em questão de minutos e pagar por essa infraestrutura conforme a utilização.
2. **Quais são as seis vantagens da Cloud Computing?**
   R:

   1. Troque as despesas fixas por despesas variáveis
   2. Grande economia de escala
   3. Parar de supor capacidades
   4. Aumentar a velocidade e agilidade
   5. Para de investir em administração e manutenção de data centers
   6. Tornar global em minutos

3. **Quais os principais conceitos da AWS?**
   R:

   1. Pay as you go (pagar somente pelo que usar)
   2. Grande economia de escala
   3. Parar de supor capacidades
   4. Aumentar velocidade e agilidade
   5. Obter economia de custos (focar no negócio e não na infra)
   6. Se tornar global em minutos

4. **Qual a diferença de computação on premise e a cloud?**
   [Resposta:](https://rockcontent.com/br/blog/o-que-e-on-premise/)

   - **On-Premise:** A computação on premise refere-se à servidores locais. É um sistema de ERP (Enterprise Resource Planning), onde os dados e os processos de um negócio são armazenados e gerenciados pela própria empresa. Ou seja, servidores, armazenamento, infraestrutura, manutenção física e atualização dos data centers em si devem ser geridos pela própria empresa.
   - **Cloud:** No modelo de Cloud, os dados do negócio são processados e armazenados na nuvem, disponibilizados por um serviço, como a AWS, de forma que todos os esforços de manutenção, segurança e atualização do serviço são de responsabilidade do provedor de serviço.

5. **Quais são as vantagens do modelo on-premise?**
   [Resposta:](https://rockcontent.com/br/blog/o-que-e-on-premise/)

   - **privacidade:** informações estão sob cuidado exclusivo dos proprietários
   - **customização:** é possível customizar a infraestrutura de acordo com o projeto e o orçamento
   - **equipe interna dedicada:** o negócio possui colaboradores internos lidando com a infraestrutura

6. **Quando você usaria AWS Cloud em vez de on-premise?**

- Partindo de um negócio onde a organização não possua infraestrutura física
- Em projetos que necessitam escalabilidade e robustez com confiança
- Em projetos onde esforços economizados em manutenção de infraestrutura, dedicados ao modelo de negócio tragam grandes benefícios

1. **O que é o Well-Architected**

- [Well Architected](https://aws.amazon.com/pt/architecture/well-architected/?wa-lens-whitepapers.sort-by=item.additionalFields.sortDate&wa-lens-whitepapers.sort-order=desc&wa-guidance-whitepapers.sort-by=item.additionalFields.sortDate&wa-guidance-whitepapers.sort-order=desc) é um framework que descreve os principais conceitos, princípios de projeto e práticas recomendadas para elaborar e executar workloads na nuvem. Baseado em seis pilares que descrevem o quão a arquitetura está alinhada às boas práticas.
- **Excelência operacional**
  [Princípios de design](https://docs.aws.amazon.com/pt_br/wellarchitected/latest/operational-excellence-pillar/welcome.html)
  - Executar operações como código
  - Fazer alterações frequentes, pequenas e reversíveis
  - Refinar os procedimentos operacionais regularmente
  - Prever falhas
  - Aprender com todas as falhas operacionais
- **Segurança**
  [Princípios de design](https://docs.aws.amazon.com/pt_br/wellarchitected/latest/security-pillar/security.html)
  - Implementar uma base forte de identidade
  - Permitir rastreabilidade
  - Aplicar segurança em todas as camadas
  - Automatizar práticas de segurança
  - Proteger dados em trânsito e em repouso
  - Manter as pessoas afastadas dos dados
  - Preparar-se para eventos de segurança
- **Confiabilidade**
  [Princípios de design](https://docs.aws.amazon.com/pt_br/wellarchitected/latest/reliability-pillar/design-principles.html)
  - Recuperar automaticamente após uma falha
  - Procedimentos de recuperação de teste
  - Escalar horizontalmente para aumentar a disponibilidade agregada da carga de trabalho
  - Parar de tentar adivinhar a capacidade
  - Gerencie as alterações na automação
- **Eficiência de performance**
  [Princípios de design](https://docs.aws.amazon.com/pt_br/wellarchitected/latest/performance-efficiency-pillar/design-principles.html)
  - Democratizar tecnologias avançadas
  - Tornar-se global em minutos
  - Usar arquiteturas sem servidor
  - Experimentar com mais frequência
  - Considerar afinidade mecânica
- **Otimização de custos**
  [Princípios de design](https://docs.aws.amazon.com/pt_br/wellarchitected/latest/cost-optimization-pillar/design-principles.html)
  - Implementar o gerenciamento financeiro na nuvem
  - Adotar um modelo de consumo
  - Avaliar a eficiência geral
  - Parar de gastar dinheiro em tarefas pesadas genéricas
  - Analisar e atribuir gastos
- **Sustentabilidade**
  [Princípios de design](https://docs.aws.amazon.com/pt_br/wellarchitected/latest/sustainability-pillar/design-principles-for-sustainability-in-the-cloud.html)
  - Compreender seu impacto
  - Estabelecer metas de sustentabilidade
  - Maximizar a utilização
  - Antecipar e adotar as novas ofertas de hardware e software mais eficientes
  - Usar serviços gerenciados
  - Reduzir o impacto downstream de suas workloads em nuvem

1. **Quais os seis pilares do Well-Architected**

   - Excelência operacional
   - Segurança
   - Confiabilidade
   - Eficiência de performance
   - Otimização de custos
   - Sustentabilidade

1. **Como otimizar custos com as Rightsizing Recomendations**
   R: As recomendações de redimensionamento são geradas pelo Cost Explorer, que ajudam a identificar oportunidades de economia de custo ao diminuir a capacidade ou encerrar instâncias do Elastic Compute Cloud (EC2)
1. **Defina os níveis de abstração na nuvem: IaaS, PaaS e SaaS**
   R:

   - IaaS: Infrastructure as a Service - os recursos de hardware e rede são gerenciados pelo provedor e o cliente consome diretamente a infraestrutura
   - PaaS: Platform as a Service - os recursos de plataforma, atualização e manutenção de sistemas operacionais são gerenciados pelo provedor, assim o cliente possui máquinas com a plataforma já configurada para o uso
   - SaaS: Software as a Service - os recursos de software, como serviços de machine learning, criptografia, certificados, etc, são disponibilizados para o cliente, que cria a sua solução fazendo uso desses serviços

1. **Para que serve a AWS Pricing Calculator?**
   R: permite escolher e configurar os recursos necessário e assim estimar o preço mensal/anual da sua solução na nuvem aws

1. **Para que serve a AWS TCO Calculator?**
   R: A calculadora de custo total permite fazer uma comparação do gasto que será demandado na nuvem com os gastos on premise para uma mesma infraestrutura
