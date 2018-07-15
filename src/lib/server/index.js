const serverCore = require('apollo-server-core')

export default (options, request) => {
  if (!options) {
    throw new Error('Server options not specified')
  } else {
    if (!options.schema) {
      throw new Error('No GraphQL Schema specified')
    }
  }

  const queryRequest = {
    method: request.method,
    options,
    query: request.method === 'POST' ? request.body : request.query
  }

  if (queryRequest.query && typeof queryRequest.query === 'string') {
    queryRequest.query = JSON.parse(queryRequest.query)
  }

  return serverCore.runHttpQuery([request], queryRequest)
}
