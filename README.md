# Next.js 15 Auth.js Prisma Template

Este projeto foi criado por Matheus Felipe Vieira Santiago ([GitHub](https://github.com/matheus55391)) para servir como referência e ponto de partida para quem deseja configurar rapidamente um ambiente completo com Next.js, autenticação social via Auth.js, banco de dados com Prisma e UI moderna com Shadcn. Ele também é uma forma de divulgar meu trabalho ajudando a comunidade a não se perder na configuração de tantas bibliotecas.

## Tecnologias Utilizadas

- **Next.js 15**: Framework React para aplicações web modernas, com suporte a rotas, SSR, API routes e muito mais.
- **React 19**: Última versão do React para interfaces rápidas e modernas.
- **Auth.js (antigo NextAuth.js)**: Autenticação pronta para produção, com suporte a login social (Google, GitHub, etc).
- **Prisma ORM**: Mapeamento objeto-relacional para integração fácil e tipada com bancos de dados SQL.
- **Shadcn UI**: Componentes de UI modernos e personalizáveis, baseados em Radix UI.
- **Tailwind CSS**: Utilitário CSS para estilização rápida e responsiva.
- **Zod**: Validação de schemas TypeScript.
- **ESLint & Prettier**: Padronização e qualidade de código.

## Funcionalidades

- Autenticação com provedores sociais (ex: Google, GitHub)
- Integração com banco de dados via Prisma
- Estrutura de pastas organizada para escalar o projeto
- Componentes de UI prontos para uso e customização
- Exemplo de dashboard, login, posts e perfis de usuário

## Como usar

### 1. Clone o repositório

```bash
git clone https://github.com/matheus55391/nextjs15-authjs-prisma-template.git
cd nextjs15-authjs-prisma-template
```

### 2. Instale as dependências

```bash
npm install
# ou
yarn
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com as variáveis necessárias para o Auth.js e o banco de dados. Exemplo:

```
DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome_do_banco"
NEXTAUTH_URL="http://localhost:3000"
GOOGLE_CLIENT_ID="..."
GOOGLE_CLIENT_SECRET="..."
GITHUB_CLIENT_ID="..."
GITHUB_CLIENT_SECRET="..."
```

### 4. Configure o banco de dados

- Com Docker:
  ```bash
  docker-compose -f docker/database/docker-compose.yml up -d
  ```
- Rode as migrations:
  ```bash
  npx prisma migrate dev
  ```

### 5. Rode o projeto

```bash
npm run dev
# ou
yarn dev
```

Acesse [http://localhost:3000](http://localhost:3000)

## Estrutura do Projeto

- `src/app`: Rotas, páginas e APIs do Next.js
- `src/components`: Componentes reutilizáveis de UI
- `src/services`: Serviços para buscar dados (ex: posts, dashboard)
- `src/lib`: Utilitários, configuração do Prisma e Auth.js
- `prisma/`: Schema e migrations do banco de dados
- `docker/`: Configuração para ambiente de desenvolvimento e banco de dados

## Personalização

- Adicione ou remova provedores de login em `src/app/api/auth/[...nextauth]/route.ts`
- Edite o schema do banco em `prisma/schema.prisma` e rode `npx prisma migrate dev`
- Crie novos componentes em `src/components` usando Shadcn UI

## Contribuição

Este projeto é **livre para forks e contribuições**! Sinta-se à vontade para fazer um fork ou contribuir da forma que preferir. Para contribuir, basta abrir uma pull request que irei validar com prazer.

## Créditos

Template criado por Matheus Felipe Vieira Santiago ([GitHub](https://github.com/matheus55391)) para ajudar a comunidade React/Next.js a iniciar projetos de forma rápida, segura e escalável.

---

Este é um projeto [Next.js](https://nextjs.org) inicializado com [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Começando

Primeiro, execute o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

Você pode começar a editar a página modificando `app/page.tsx`. A página é atualizada automaticamente conforme você edita o arquivo.

Este projeto usa [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) para otimizar e carregar automaticamente a [Geist](https://vercel.com/font), uma nova família de fontes para Vercel.

## Aprenda Mais

Para saber mais sobre o Next.js, dê uma olhada nos seguintes recursos:

- [Documentação do Next.js](https://nextjs.org/docs) - aprenda sobre os recursos e a API do Next.js.
- [Aprenda Next.js](https://nextjs.org/learn) - um tutorial interativo de Next.js.

Você pode conferir [o repositório do Next.js no GitHub](https://github.com/vercel/next.js) - seu feedback e contribuições são bem-vindos!

## Implantar no Vercel

A maneira mais fácil de implantar seu aplicativo Next.js é usar a [Plataforma Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) dos criadores do Next.js.

Confira nossa [documentação de implantação do Next.js](https://nextjs.org/docs/app/building-your-application/deploying) para mais detalhes.
