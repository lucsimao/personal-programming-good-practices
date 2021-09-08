# Jenkins Course

## [Expressões Cron](https://receitasdecodigo.com.br/java/o-basico-sobre-cron-expression)

O formato do **Cron Expression** se resume em: `<segundo> <minuto> <hora> <dia-do-mes> <mes> <ano>`.

| Caracter | Representa    | Descrição                                                                                                                                    |
| -------- | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| \*       | Todos         | para especificar que o evento deve acontecer para cada unidade de tempo                                                                      |
| ?        | Qualquer      | utilizado nos campos e para indicar o valor arbitrário - negligencia o valor do campo                                                        |
| -        | Intervalo     | para determinar o intervalo de valores                                                                                                       |
| ,        | Valores       | para especificar vários valores                                                                                                              |
| /        | Incrementos   | para especificar os valores incrementais                                                                                                     |
| L        | Último        | tem significados diferentes quando usado em vários campos. Por exemplo, se for aplicado no campo <dia-do-mês>, significa o último dia do mês |
| W        | Dia da semana | para especificar o dia da semana (de segunda a sexta) mais próximo de um determinado dia do mês                                              |

## Executar um shell script e não fechar

Adicionar BUILD_ID = "qualquer coisa"

Para não travar o terminar, usar & ao final do script

## Process Tree Killer

https://wiki.jenkins.io/display/JENKINS/ProcessTreeKiller

## Plugins

- Matrix Authorization Strategy: gerenciador de credenciais e permissões
