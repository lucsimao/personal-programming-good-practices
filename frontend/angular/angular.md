## Angular

# Módulos

# Scss

# Typescript

# Data Binding

Two Way Data Bind [()] = transmite o valor tanto do componente pro template quanto do template para o componente

Property Bind [] = transmite somente o valor do componente para o template. Se há alteração no template, ele não é refletido no componente.

Event Binding () = Permite que uma função seja atribuida a um evento do dom

# Providers

# Interpolação {{}}

# Output e Input

# Injectable

# Date Pipe

| dentro de um html

# \_\_ Metodologia BEM — Block Element Modifier

# NgFor iterar no html

# Ng template

# HttpClientModule para conexão com backend

# Observable

- Um Observer usado no angular, é possível usar value.post.subscribe

# SPA - Single Page Application

# Router

routerLink
routerLinkActive
router.navigateByUrl

router-outlet

# Module

- Feature module - routing

# Lazy load

- Sob demanda

- Carrega um módulo em um bundle separado, somente quando for necessário.
  Economizando banda e performance

# Formulários

- template driven forms
- reactive forms

# RxJS (Reactive Extensions for JavaScript)

- Permite manipular o fluxo de maneira declarativa

# Pipe async

- Pega informação da variável e faz um subscribe

# JWT - Elemento do Tipo Subject

# ActivatedRoute

- Para pegar parametros da url

# Interceptor

- A ordem dos interceptors não é garantida

# MapTo CatchError

# Resolvers

# ngClass

# FormData

# FormControlName

# Empacotamento do projeto para produção

- ng build

# Http Server

# Debouncing

# FakeAsync

## Tick

# TestBed

# nativeElement

## querySelector

## DebugElement

# HostListener and Custom Directives

# Fixture DetectChanges

- dispara o ng on init

# Observable

- Quando queremos um valor de forma imperativa: função
- Quando queremos iterar sobre uma coleção de valores: iterator
- Quando precisamos um valor e esperar uma requisição de forma reativa: Promise
- Quando precisamos iterar sobre uma coleção de forma reativa: Observable

# [RxJs](https://rxjs-dev.firebaseapp.com/guide/overview)

- Pipe - recebe uma stream funções que manipulam o fluxo de informações
  - map
  - tap
  - pluck - pluck('nome_atributo') retorna um array com a propriedade nome_atributo extraída. Equivalente a: map((a) => a.nome_atributo)
  - debounceTime - espera um certo tempo antes de passar a próxima operação
  - filter
  - distinctUntilChanged - só passa para o próximo operador caso o valor seja diferente do anterior
  - [switchMap](https://www.learnrxjs.io/learn-rxjs/operators/transformation/switchmap) - troca para um novo observable
- PipeAsync: O Observable tem sua inicialização lazy, de forma que a requisição somente é feita quando o componente se inicializou e o subscribe foi realizado

# [Diagramas de Marble (Bolinhas de gude)](https://rxmarbles.com/)

- A primeira seta representa o fluxo de dados, stream, cada bolinha é um elemento
- A segunda seta é o resultado da ação que o operador realiza (map, filter, reduce, pluck, etc)

# Busca Type Ahead
