import { createYoga } from 'graphql-yoga'
import type { VercelRequest, VercelResponse } from '@vercel/node'
import { schema } from '../graphql/schema'
import { createContext } from '../graphql/context'

const yoga = createYoga<{
  req: VercelRequest
  res: VercelResponse
}>({
  schema,
  context: createContext,
  graphqlEndpoint: '/api/graphql',
  landingPage: false,
})

export default yoga
