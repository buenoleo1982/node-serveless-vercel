import { makeSchema } from 'nexus'
import { join } from 'node:path'
import * as types from './types'

export const schema = makeSchema({
  types,
  outputs: {
    typegen: join(process.cwd(), 'generated', 'nexus-typegen.ts'),
    schema: join(process.cwd(), 'generated', 'schema.graphql'),
  },
  contextType: {
    module: join(process.cwd(), 'graphql', 'context.ts'),
    export: 'Context',
  },
})
