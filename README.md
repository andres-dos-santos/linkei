# Linkei

Um simples e eficiente encurtador de URLs. Insira um link longo e receba uma URL curta e fácil de compartilhar.

## Funcionalidades

- Encurta URLs longas com um único clique
- Redirecionamento seguro

## Tecnologias Utilizadas

- [TypeScript](https://www.typescriptlang.org/)
- [Next.js](https://nextjs.org/)

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/andres-dos-santos/linkei.git
cd linkei
```

2. Instale as dependências

```bash
npm install
```

3. Configure as suas variáveis de ambiente, sua tabela do Supabase precisa ter `{ url_id e original_url }`

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=
```

4. Rode o projeto

```bash
npm run dev
```

## Novas ideias

- Criar uma extensão que faz a mesma coisa que o site
- ~~Adicionar a quantidade de URLs curtas~~
- Tentar usar o AWS com o Lambda e o API Gateway para remover o `/api` do link
