import { objectType, queryType } from 'nexus'

export const Query = queryType({
  definition(t) {
    t.field('ping', {
      type: 'String',
      resolve: () => 'pong',
    })
  },
})
