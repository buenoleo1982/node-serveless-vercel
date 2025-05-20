import { describe, it, expect } from 'vitest'
import { createYoga } from 'graphql-yoga'
import { schema } from '../graphql/schema'
import { createContext } from '../graphql/context'

describe('GraphQL Schema', () => {

  // Teste usando o yoga.fetch (que é uma abstração sobre o execute)
  it('should return pong when executing ping query with yoga.fetch', async () => {
    // Criar uma instância do yoga apenas para testar o schema
    const yoga = createYoga({
      schema,
      context: createContext,
    })

    // A URL aqui é apenas simbólica - não é uma requisição HTTP real
    const response = await yoga.fetch('http://yoga/graphql', {
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

    const result = await response.json() as { data: { ping: string } }

    // Verificar o resultado
    expect(response.status).toBe(200)
    expect(result).toEqual({
      data: {
        ping: 'pong'
      }
    })
  })
})
