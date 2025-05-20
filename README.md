# GraphQL Implementation with Yoga and Nexus

This project implements a basic GraphQL server using GraphQL Yoga and Nexus on Vercel's serverless functions.

## Features

- GraphQL API endpoint at `/api/graphql`
- Basic `ping` query that returns `pong`
- Type-safe schema generation with Nexus
- Serverless deployment with Vercel

## Project Structure

```
├── api/
│   ├── graphql.ts       # GraphQL Yoga server setup for Vercel
│   └── hello.ts         # Original hello world API route
├── graphql/
│   ├── context.ts       # GraphQL context definition
│   ├── schema.ts        # Nexus schema configuration
│   └── types/
│       └── index.ts     # GraphQL type definitions (queries, mutations, etc.)
├── generated/           # Auto-generated GraphQL schema files
├── public/
│   └── index.html       # Simple HTML page to test the GraphQL API
├── tests/
│   ├── schema.test.ts         # Testes diretos do schema GraphQL
│   └── http-integration.test.ts # Testes de integração HTTP com o ambiente Vercel
├── vitest.config.ts     # Configuração do Vitest
└── package.json         # Project dependencies
```

## Getting Started

1. Install dependencies:
   ```
   pnpm install
   ```

2. Configure environment variables:
   ```
   cp .env.example .env.test
   ```
   Edite o arquivo `.env.test` conforme necessário.

3. Run the development server:
   ```
   pnpm dev
   ```

   Ou, alternativamente:
   ```
   pnpm start
   ```

4. Open your browser to http://localhost:3000 to test the GraphQL API using the HTML interface.

5. You can also access the GraphQL API directly at http://localhost:3000/api/graphql.

## Example Query

```graphql
query {
  ping
}
```

Response:
```json
{
  "data": {
    "ping": "pong"
  }
}
```

## Extending the API

To add more queries and mutations:

1. Edit `graphql/types/index.ts` to define new types, queries, and mutations.
2. The schema will be automatically regenerated when you restart the server.

## Testes

Este projeto inclui testes automatizados usando Vitest.

### Configuração de Ambiente para Testes

Os testes utilizam variáveis de ambiente definidas no arquivo `.env.test`. Certifique-se de que este arquivo existe e contém as variáveis necessárias:

```
# URL do servidor GraphQL para testes de integração
GRAPHQL_URL=http://localhost:3001/api/graphql
```

### Executando os Testes

Para executar todos os testes:

```bash
pnpm test
```

Para executar os testes em modo de observação (watch mode):

```bash
pnpm test:watch
```

Para executar os testes com a interface gráfica:

```bash
pnpm test:ui
```

Para executar os testes de integração HTTP (requer que o servidor esteja em execução):

```bash
HTTP_TESTS=true pnpm test
```

Por padrão, apenas os testes do schema são executados, pois não dependem de um servidor em execução.

### Tipos de Testes

- **Testes do Schema**: Testam diretamente o schema GraphQL, sem depender de um servidor HTTP.
- **Testes de Integração HTTP**: Testam a API GraphQL em um ambiente próximo ao de produção (Vercel serverless).

Para mais detalhes sobre os testes, consulte o arquivo `tests/README.md`.

## Deployment

Deploy to Vercel:

```
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.
