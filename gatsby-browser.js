import React from 'react'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
  uri: `https://github-graphql-api.herokuapp.com/`
})

export const wrapRootElement = ({ element }) => {
  return (
    <ApolloProvider client={client}>
      {element}
    </ApolloProvider>
  )
}
