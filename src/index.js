import gqlServerCore from './lib/server'
import tools from 'graphql-tools'

export default class graphqlfaas {
  constructor (typeDefs, resolvers, endpointURL) {
    const schema = tools.makeExecutableSchema({ typeDefs, resolvers })
    this.options = {
      endpointURL,
      schema
    }
  }

  server (req) {
    return gqlServerCore(this.options, req)
  }
}
