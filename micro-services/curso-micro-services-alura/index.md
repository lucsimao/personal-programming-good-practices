# Microsserviços na prática: entendendo a tomada de decisões

Este documento é um artefato com anotações pessoais do curso [Microsserviços na prática: entendendo a tomada de decisões](https://cursos.alura.com.br/course/Microsservicos-pratica-tomada-decisoes) da Alura.

## Mono repos

- https://www.youtube.com/watch?v=BbNIuUy_F0w
- [git submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules)

### Desvantagens do multi repo

- Necessita de um padrão para os microsserviços
- É importante ter um script para gerar um novo microsserviço
- Ter um repositório separado para realizar os clones e buildar
- Controle das dependências entre os projetos

## Escalar serviços

- É interessante utilizar um orquestrador de container (Docker Swarn ou Kubernetes) para escalar serviços

## Twelve Factor App

- Separar cada microsserviço usando os padrões do 12 Factor e cada equipe trabalhar de forma dependente

## Build e deploy

- Builds separados
- CI/CD
  - status check
- Jenkins, Travis CI

## Bounded Context

## Filas e Mensageria

- Tarefas assíncronas
- Tarefas de plano de fundo

## Optimistic Ui Updater

## Pessimistic Ui Updater

## Micro front ends
