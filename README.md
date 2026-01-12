# 🏦 MFE Graphics

Aplicação remote de visualização de saldo em gráfico construída em React com framework Vite, Typescript e Chart JS para compor o microfrontend de uma aplicação bancária. Este repositório se trata da aplicação remote e a maioria das funcionalidades, como login, adicionar e editar transações se encontram na aplicação host abaixo

> **📊 Repositório da aplicação host**: [Bytebank](https://github.com/juvio/bank)

> **📊 Repositório do design system**: [Pacote NPM](https://github.com/carollyb/bank-design-system/pkgs/npm/bank-design-system)

> **📚 Projeto Acadêmico**: Este projeto foi desenvolvido como trabalho de pós-graduação.

## 👨‍💻 Autoras

**[Juliana Vieira de Oliveira]**  
**[Nayara Carolly Soares Barbosa]**

## ✨ Funcionalidades

- 💳 **Visualização de Saldo em gráfico**: Veja a evolução do saldo da conta

## 🛠️ Tecnologias

- **Framework**: [Vite](https://vite.dev/)
- **ChartJS**: [ChartJS](https://www.chartjs.org/)
- **Linguagem**: [TypeScript](https://www.typescriptlang.org/)
- **Linting**: [ESLint](https://eslint.org/)

### Decisões projetuais

1. Microfrontend: Optou-se por utilizar a injeção da aplicação microfrontend via script, devido às limitações das bibliotecas para suporte a aplicações Next com app router. Foram realizadas duas provas de conceito, uma com aplicação remote Next com app router (incompatível com Module Federation e Single SPA), que foi descartada, e com uma aplicação remote Next com pages router utilizando o Plugin Module Federation, mas que também se provou limitada devido ao host estar em app router. Uma opção também seria migrar a aplicação atual para pages router, mas foi descartada já que o Next pretende seguir com o app router para o futuro. A prova de conceito que se mostrou eficiente como microfrontend mantendo as principais vantagens (código apartado e passar props da aplicação host para remota, evitando chamadas desnecessárias ao backend) foi com uma aplicação remote React com framework Vite, utilizando a injeção no DOM via script.
2. Design System em pacote NPM: Para compartilhar o estilo entre as duas aplicações, o design system criado durante o módulo 1, com as principais definições de paleta de cores e tipografia, foi migrado para um repositório à parte e transformado em módulo NPM, de forma que pode ser instalado por qualquer remote da aplicação, tornando as propriedades e temas acessíveis facilmente.

## 🚀 Como executar

### Pré-requisitos

- Node.js 18+
- npm, yarn, pnpm ou bun

#### 1. Obter autorização para o pacote bank-design-system:

##### 1.1 Gerar token GitHub (PAT):

- Acesse https://github.com/settings/tokens
- Clique em Generate new Token > Generate new token (classic)
- Selecione o scope read:packages
- Copie o token gerado

##### 1.2 Configurar acesso ao registry:

- Defina a variável de ambiente (PowerShell sessão) no terminal na pasta raiz do projeto:

```bash
$env:GITHUB_TOKEN="SEU_TOKEN_AQUI"
```

#### 2. Instalar dependências e executar:

```bash
npm install
npm run dev
```

#### 4. Executar o host

##### 4.1 Clone o repositório

- [Superbank](https://github.com/juvio/bank)

##### 4.2 Siga as instruções do README da aplicação host
