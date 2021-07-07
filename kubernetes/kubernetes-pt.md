# Kubernetes

## [O que é Kubernetes](https://kubernetes.io/pt-br/docs/concepts/overview/)

Kubernetes é um plataforma de código aberto, portável e extensiva para o gerenciamento de cargas de trabalho e serviços distribuídos em contêineres, que facilita tanto a configuração declarativa quanto a automação.

## [Cluster Architecture](https://kubernetes.io/docs/concepts/architecture/)

### [Nodes](https://kubernetes.io/docs/concepts/architecture/nodes/)

Um Node deve é uma máquina (física ou virtual), gerenciada pelo Control Plane e contém os serviços necessários para rodar os pods.

### [Control Plane x Node Comunication](https://kubernetes.io/pt-br/docs/concepts/architecture/control-plane-node-communication/)

Kubernetes usa o padrão de API [Hub and Spoke Api](https://support.logmeininc.com/pt/central/help/sobre-redes-hub-and-spoke-central-c-hamachi-networktypes-hubspoke)

Os pods que desejam se conectar ao apiserver podem fazê-lo com segurança, aproveitando conta de serviço de forma que o Kubernetes injetará automaticamente o public root certificate e um bearer token válido no pod quando ele é instanciado.

#### [Comunicação](https://kubernetes.io/pt-br/docs/concepts/architecture/control-plane-node-communication/#control-plane-para-o-n%C3%B3)

- **Apiserver para o kubelet:**
  Essas conexões terminam no endpoint HTTPS do kubelet. Por padrão, o apiserver não verifica o certificado de serviço do kubelet, o que torna a conexão sujeita a ataques man-in-the-middle, o que o torna inseguro para passar por redes não confiáveis e / ou públicas.
- **Apiserver para nós, pods e serviços:**
  As conexões a partir do apiserver para um nó, pod ou serviço padrão para simples conexões HTTP não são autenticadas nem criptografadas. Eles podem ser executados em uma conexão HTTPS segura prefixando https: no nó, pod, ou nome do serviço no URL da API, mas eles não validarão o certificado fornecido pelo ponto de extremidade HTTPS, nem fornece credenciais de cliente, enquanto a conexão será criptografada, não fornecerá nenhuma garantia de integridade. Estas conexões não são atualmente seguras para serem usados por redes não confiáveis e/ou públicas.
- **Túneis SSH**
  O Kubernetes suporta túneis SSH para proteger os caminhos de comunicação do control plane para os nós. Nesta configuração, o apiserver inicia um túnel SSH para cada nó no cluster (conectando ao servidor ssh escutando na porta 22) e passa todo o tráfego destinado a um kubelet, nó, pod ou serviço através do túnel. Este túnel garante que o tráfego não seja exposto fora da rede aos quais os nós estão sendo executados.

### [Controller](https://kubernetes.io/docs/concepts/architecture/controller/)

Assim como num sistema de controle de robótica e automação, um controlador rastreia pelo menos um tipo de recurso Kubernetes. O(s) controlador(es) para aquele recurso são responsáveis por trazer o _estado atual_ mais perto do _estado desejado_.

### [Cloud Controller Manager](https://kubernetes.io/pt-br/docs/concepts/architecture/cloud-controller/)

Permite que o código específico de provedor de nuvem e o núcleo do Kubernetes evoluíssem independentemente um do outro.
Controla toda a lógica que depende da nuvem para criar um único ponto de integração. Funciona como um tipo de adapter.

## [Workloads](https://kubernetes.io/docs/concepts/workloads/)

Workloads são aplicações rodando no Kubernetes, seu workload pode estar rodando dentro de diversos pods.

### [Pods](https://kubernetes.io/docs/concepts/workloads/pods/)

- Como num bando de baleias ou numa vagem de ervilha (pod of whales, pea pod) é um grupo de um ou mais contêineres, com armazenamento e rede compartilhada.
- Pods são efêmeros, não possuem persistência de seus dados após desligados.

## [Services](https://kubernetes.io/docs/concepts/services-networking/service/)

### [Cluster IP](https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types)

- Expõe o service num ip interno ao cluster. Cria um serviço acessível somente dentro de se cluster de origem.

### [Node Port](https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types)

- Expõe o serviço em cada NodeIp como uma porta estática e cria automaticamente os ClusterIp que o NodePort irá redirecionar. Dessa forma, é possível acessar o ClusterIp a partir da porta exposta pelo NodePort.

### [Load Balancer](https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types)

- Expõe o serviço ao exterior usando um Load Balancer de alguma cloud. Cria automaticamente os NodePort e os ClusterIp que o LoadBalancer irá rotear.

## [Config Map](https://kubernetes.io/docs/concepts/configuration/configmap/)

- Permite configurar variáveis de ambiente, argumentos de linha de comando ou arquivos de configuração em um volume.

## [Replica Set](https://kubernetes.io/docs/concepts/workloads/controllers/replicaset/)

- Cria um conjunto de replicas de um pod rodando ao mesmo tempo e garante disponibilidade por replicação

## [Deployments](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/)

- Auxilia com controle de versionamento e criam um replica set.

## Persistência de Dados

### [Volumes](https://kubernetes.io/pt-br/docs/concepts/storage/volumes/)

- Volumes possuem ciclos de vida independentes dos contêineres, mas são dependentes dos pods
- Arquivos persistem no host

### [PersistentVolumes](https://kubernetes.io/pt-br/docs/concepts/storage/persistent-volumes/)

- PersistenceVolumes possuem ciclo de vida independente de qualquer pod individual que use o pv,

### [PersistentVolumesClaim](https://kubernetes.io/pt-br/docs/concepts/storage/persistent-volumes/#persistentvolumeclaims)

- São chamadas para volumes, semelhantes aos pods, que fazem chamadas de recursos de processamento (cpu e ram), os PVC fazem chamadas de recursos de armazenamentos (ReadWriteOnce, ReadOnlyMany ou ReadWriteMany)

  - **ReadWriteOnce** -- o volume pode ser montado como leitura-escrita por um nó único

  - **ReadOnlyMany** -- o volume pode ser montado como somente-leitura por vários nós

  - **ReadWriteMany** -- o volume pode ser montado como leitura-escrita por vários nós

### [Storage Class](https://kubernetes.io//docs/concepts/storage/storage-classes/)

- É como se você criasse camadas no seu storage, onde é possível criar armazenamento a partir dele. (Como se fosse uma "imagem" de storage)
- Gerencia os discos dinamicamente.
  O Cluster possui um storage class padrão, se for criado um PVC sem definir qual voluma vai ser utilizado, ele vai criar automaticamente o persistentVolume.

## [StatefulSet](https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/)

É um serviço semelhante aos deployments, mas permite guardar o estado do pod, mesmo que ele falhe durante a execução.

Eles usam PersistentVolumes e PersistentVolumeClaims para a persistência de dados.

São interessantes para aplicações que necessitam de:

- Identificadores de rede únicos

- Armazenamento persistente

- Graceful deploy ou scaling.

- Atualizações contínuas automatizadas.

## [Probes](https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/)

### [Liveness Probe](https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#define-a-liveness-command)

Prova de vida se a aplicação está saudável e/ou se deve ser reiniciada. Por exemplo, identifica deadlocks, livelocks, etc.

Ele pode ser definido dentro do próprio arquivo do container.

LivenessProbes podem fazer a verificação em diferentes intervalos de tempo via HTTP.

### [Readiness Probe](https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#define-readiness-probes)

Prova para saber se a aplicação já está pronta para receber requisições depois de iniciar, para saber se o container pode receber os redirects.

Status: READY

ReadinessProbes podem fazer a verificação em diferentes intervalos de tempo via HTTP

## [Horizontal Pods Autoscaling](https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/)

Permite definir um número máximo e mínimo de pods, além de uma taxa de utilização média que irá alocar pods enquanto a taxa de utilização for maior que a escolhida e desalocar pods caso a utilização esteja menor. Essencial para otimização de alocação de recursos.

- Servidor de métricas: para utilizar o HPA é necessário ter um servidor de métricas.

  - Para o Windows: baixar o arquivo yaml, com a definição do [metrics server](https://github.com/kubernetes-sigs/metrics-server). É necessário configurar os argumentos passados para o pod do metric server conforme a documentação.

  - Para Linux: é possível adicionar como addon

  Pode ser utilizado um script para simular o stress de um pod

## [Vertical Pod Autoscaler](https://cloud.google.com/kubernetes-engine/docs/concepts/verticalpodautoscaler)

O VerticalPodAutoscaler remove a necessidade de definir limites e pedidos por recursos do sistema, como cpu e memória.

Quando definido, ele define os consumos de maneira automática baseada na utilização em cada um dos nós, além disso, quanto tem disponível ainda de recurso.

# Cloud Providers

[Google Cloud Platform](https://cloud.google.com/)

[AWS](https://cloud.google.com/)

[Azure](https://azure.microsoft.com/pt-br/)

## Alguns Comandos Úteis

- Apply
- Delete
- Get (Pods, Services, Nodes, etc)
- Describe
- Rollout history deployment (ou undo) to revision
- Annotate change cause and record

## Referências

[Alura - Kubernetes: Pods, Services, Configmap](https://cursos.alura.com.br/course/kubernetes-pods-services-configmap)

[Kubernetes Docs](https://kubernetes.io/docs/setup/)

[LINUXtips](https://www.youtube.com/watch?v=_WxMQRFmXd4)
