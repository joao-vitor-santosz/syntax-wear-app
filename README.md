# SyntaxWear App

**SyntaxWear App** é um projeto de front-end em React e TypeScript que implementa uma loja virtual de calçados com interface moderna e navegação por rotas. O aplicativo usa dados mockados para exibir produtos, categorias, páginas de produto, carrinho e telas de login/cadastro.

## O que é o projeto

- SPA de e-commerce focada em produtos de calçados e vestuário.
- Desenvolvido com React 19, Vite, TypeScript e Tailwind CSS.
- Roteamento gerenciado por `@tanstack/react-router`.
- Suporta listagem de produtos, filtro por categoria, página de detalhes de produto e carrinho de compras.
- Inclui formulários de login e cadastro, além de cálculo de frete por CEP.
- Utiliza dados mockados em `src/mocks` em vez de backend real.

## Funcionalidades principais

- Página inicial com banner, categorias e galeria de produtos.
- Navegação por rotas para produtos, categorias, produto único, loja e sobre.
- Página de lista de produtos com cards de produto.
- Página de detalhes de produto com cálculo de preço e botão para adicionar ao carrinho.
- Drawer de carrinho com quantidade, incremento, decremento e remoção de itens.
- Formulário de CEP para simulação de prazo de entrega.
- Telas de login e cadastro com botões de integração visual para Google.

## Tecnologias usadas

- React 19
- TypeScript
- Vite
- Tailwind CSS
- @tanstack/react-router
- react-hook-form
- zod
- react-icons
- ESLint

## Estrutura do projeto

- `src/App.tsx` - provedor de rotas e contexto do carrinho.
- `src/main.tsx` - ponto de entrada da aplicação.
- `src/router-tree-gen.ts` - árvore de rotas gerada pelo React Router.
- `src/contexts` - contexto de carrinho (`CartContext`, `CartProvider`).
- `src/components` - componentes reutilizáveis como `Header`, `Footer`, `ProductCard`, `CartDrawer`, `Hero`, `Categories`, `ProductList`, `LoginForm`, `RegisterForm`.
- `src/pages` - rotas da aplicação, incluindo página raiz, autenticação e páginas de produtos.
- `src/mocks` - dados de produtos e categorias para exibição.
- `src/styles/globals.css` - estilos globais e configuração de Tailwind.

## Como rodar

1. Instale as dependências:

```bash
npm install
```

2. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

3. Abra o projeto no navegador usando o endereço exibido no terminal, geralmente:

```bash
http://localhost:5173
```

## Build de produção

Para gerar os arquivos de produção:

```bash
npm run build
```

Para visualizar o build gerado:

```bash
npm run preview
```

## Observações

- O projeto usa dados mockados, então não há persistência real de carrinho ou autenticação.
- O formulário de CEP é usado apenas para simular o fluxo de cálculo de entrega.
- A navegação de categorias utiliza rotas dinâmicas de `@tanstack/react-router`.

## Scripts disponíveis

- `npm run dev` - inicia o servidor de desenvolvimento.
- `npm run build` - compila a aplicação para produção.
- `npm run preview` - pré-visualiza o build de produção.
- `npm run lint` - executa o ESLint em todo o projeto.

---

Projeto criado como parte do curso DevQuest e destinado a demonstrar um front-end moderno de loja virtual em React.
