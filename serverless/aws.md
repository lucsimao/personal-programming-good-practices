# AWS - Lambda Servless

# [Lambda](https://aws.amazon.com/pt/lambda/)

# [S3 Bucket](https://docs.aws.amazon.com/pt_br/AmazonS3/latest/userguide/Welcome.html)

# [DynamoDB](https://aws.amazon.com/pt/dynamodb/)

- sls deploy
- sls offline
- sls deploy function

- aws dynamodb batch-write-item --request-items file://pacientes.json

# [Serverless Framework](https://www.serverless.com/framework/docs/getting-started)

# Roles

```
  iamRoleStatements:
  - Effect: Allow
    Action:
      - 'dynamodb:Query'
      - 'dynamodb:Scan'
      - 'dynamodb:PutItem'
      - 'dynamodb:DeleteItem'
      - 'dynamodb:Query'
    Resource: arn:aws:dynamodb:us-east-1:663046390782:table/PACIENTES
```

# [Serverless offline](https://www.serverless.com/plugins/serverless-offline)

- Permite executas as lambdas localmente

# [Serverless dynamodb offline](https://www.serverless.com/plugins/serverless-dynamodb-local)

# Paginação

# [sls deploy --stage qa](https://www.serverless.com/framework/docs/providers/aws/cli-reference/deploy)

# Rekognition - Análise de imagens

aws.amazon.com/pt/rekognition

# AWS SDK for Python Boto
