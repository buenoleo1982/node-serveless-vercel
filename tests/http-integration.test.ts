import { describe, it, expect } from 'vitest'
import * as dotenv from 'dotenv'
import { resolve } from 'node:path'

// Carregar variáveis de ambiente do arquivo .env.test
dotenv.config({ path: resolve(process.cwd(), '.env.test') })

// URL para o servidor GraphQL a partir da variável de ambiente
const GRAPHQL_URL = process.env.GRAPHQL_URL || 'http://localhost:3000/api/graphql'

// Função para importar node-fetch dinamicamente
const fetchData = async (url: string, options: {
  method?: string;
  headers?: Record<string, string>;
  body?: string;
}) => {
  const { default: fetch } = await import('node-fetch')
  return fetch(url, options)
}

// Teste de integração HTTP - assume que o servidor já está em execução
// Executar este teste apenas se a variável de ambiente HTTP_TESTS estiver definida como 'true'
describe.runIf(process.env.HTTP_TESTS === 'true')('GraphQL HTTP API Integration', () => {
  it('should return pong when querying ping via HTTP API', async () => {
    const response = await fetchData(GRAPHQL_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query {
            ping
          }
        `,
      }),
    })

    const data = await response.json() as { data: { ping: string } }

    // Verificar a resposta HTTP
    expect(response.status).toBe(200)

    // Verificar o resultado da query
    expect(data).toEqual({
      data: {
        ping: 'pong'
      }
    })
  })
})
