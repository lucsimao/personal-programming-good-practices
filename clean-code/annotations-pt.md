# Robert C. Martin: Código Limpo

- **Bjarne Stoustrop:** _Um código limpo faz bem apenas uma coisa._
- **Michael Feathers:** _Um programador deve se importar com o código._
- **Regra do Escoteiro:** _Deixe a área do acampamento mais limpa do que você a encontrou._

## Nomes Significativos

- Use nomes que revelem seu propósito
- Evite nomes com informações erradas
- Faça distinções significativas
- Use nomes pronunciáveis
- Use nomes passíveis de busca
- Evite códigos nas nomeações
- Use nomes do domínio do problema

## Funções

- Devem ser pequenas
- Blocos dentro de instruções _if, else, while_ devem ter somente uma linha e um nível de indentação
- Faça apenas uma coisa
- Um nível de abstração por função
- Parâmetros de Funções: funções devem ter poucos parâmetros, se necessitar mais parâmetros, transforme-os em objetos
  - Sem parâmetros
  - Mônades
  - Díades
  - Tríades
  - Políades
- Verbos e palavras-chave como nome
- Evite Efeitos Colaterais: mentiras
- Separação comando-consulta
  - As funções devem fazer ou responder algo, nunca ambos
- Use exceções em vez de códigos de erro
- Extraia blocos try-catch
- Evite repetição

## Comentários

Comentários mentem. Criar comentários é falhar em se expressar com o código

Explique-se diretamente no código via nome de classes, variáveis ou funções

Bons Comentários

- Comentários autorais ou legais
- Comentários informativos
- Comentários de intenção
- Comentários de esclarecimento
- Comentários TODO
- Javadoc

Maus Comentários

- Murmúrio
- Redundâncias
- Comentários mentirosos
- Comentários imperativos
- Comentários redação
- Comentários ruidosos
- Marcadores de posição
- Comentários ao lado de chaves de fechamento
- Comentários de autoria (da criação)
- Código em comentários
- Comentários em html
- Comentários com informações não locais

## Formatação

- Formatação Vertical
  - Funções e classes pequenas
  - Espaçamento vertical entre conceitos
  - Continuidade vertial em estruturas intimamente relacionadas
  - Variáveis locais devem ficar no topo de funções
  - Variáveis de instância no topo da classe
  - Funções dependentes devem ficar próximas verticalmente (a que chama deve ficar acima)
- Formatação Horizontal
  - Linhas pequenas
  - Operadores entre espaço em branço
  - Parentes de abertura sem espaço ao nome da função
  - Parâmetros da função separados por espaço
  - Indentação
  - Escopos minúsculos
- Regra de Equipe
  - Seguir um padrão só

## Objetos e Estruturas de Dados

- Assimetria data-objeto
- Lei de Demeter

  - Uma classe não deve enxergar o interior dos objetos que ela manipula. _Não fale com estranhos_.

- Train Wrecks
- Híbridos ou Feature Envy
- Estruturas Ocultas
- DTO - Objetos de Transferência de Dados
- Active Record

## Tratamento de Erros

- Use exceções em vez de retornar códigos
- Crie primeiro sua estrutura try-catch-finally
- Use exceções não verificadas (runtime exceptions)
- Forneça exceções com contexto
- Defina as classes de exceção de acordo com a necessidade do chamador
- Defina o fluxo normal
- Não retorne null
- Não passe null como parâmetro
