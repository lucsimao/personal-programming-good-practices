# S3

https://docs.aws.amazon.com/cli/latest/index.html

- Regiões diferentes tem custos diferentes

### Urls pré assinadas - presigned

- assinar por um tempo de expiração

### Diretórios

### Permissões

- Por padrão o acesso aos buckets é restrito
  (para qualquer um acessar, é necessário tornar o bucket público)

#### Policies

São as políticas de permissão de objetos da aws

- Policies (https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies.html)
- opção (block all public access)
  Objeto:
- principal - (qualquer origem)
- actions (get object, get object version)

#### ARN

- Amazon resource name, são os nomes de recursos da amazon (como se fosse uma uri da aws)
  É possível coloca restrições via regex /_ , /videos, /_.png etc

#### Usuários

Pelo iam, criar um grupo de usuarios

- adicionar, por exemplo um usuário read only access
- acesso via console, cli, etc

### AWS cli

https://docs.aws.amazon.com/cli/latest/reference/s3/

- aws s3 mb s3://nome-bucket

- aws s3 sync

- aws s3 ls

### Versionamento

https://docs.aws.amazon.com/pt_br/AmazonS3/latest/userguide/versioning-workflows.html

- s3 api https://docs.aws.amazon.com/cli/latest/reference/s3api/index.html

## Classe de armazenamento

Tipos de armazenamento, mantendo versões, etc, retenção, qtd de acessos
ex: interfrequent access, deep files

- Life cycle configuration

  - é possível mudar de classe de armazenamento após x dias. (ex: inicia como interfrequent, depois de 30 dias mover para standart, excluir depois de x dias )
  - tamanho do objeto influencia

## Site estático via s3

#### CloudFront

- Para resolver em relação de regiões e cacheamento https://docs.aws.amazon.com/pt_br/AmazonS3/latest/userguide/images/cf-example-image-global.png
- aponta direto para um bucket
- OAI - origin access identity - bucket restringe o acesso somente ao cloudFront (é possível atualizar a bucket policy automaticamente)

##### CDN

- Content Delivery Network ou Rede de Distribuição de Conteúdo
  Um exemplo de teia de dispositivos que trabalham em conjunto para regionalizar armazenamento de dados, por meio de cache
