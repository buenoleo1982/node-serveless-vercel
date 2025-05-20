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
└── package.json         # Project dependencies
```

## Getting Started

1. Install dependencies:
   ```
   pnpm install
   ```

2. Run the development server:
   ```
   vercel dev
   ```

3. Open your browser to http://localhost:3000 to test the GraphQL API using the HTML interface.

4. You can also access the GraphQL API directly at http://localhost:3000/api/graphql.

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

## Deployment

Deploy to Vercel:

```
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.
