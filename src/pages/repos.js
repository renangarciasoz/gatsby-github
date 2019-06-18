import React from 'react'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

import Repo from '../components/repo'
import Meta from '../components/meta'
import Toolbar from '../components/toolbar'
import Spinner from '../components/spinner'

function Wrapper({ children, login }) {
  return (
    <>
      <Toolbar />
      {login ? children : <h1>Repositories not found</h1>}
    </>
  )
}

function Repos({ location }) {
  const { login } = location.state

  return (
    <Wrapper login={login}>
      <Query
        query={gql`
          query GetRepos($login: String!) {
            repos(login: $login) {
              id
              name
              language
              full_name
              description
              created_at
              updated_at
              forks_count
              watchers_count
              stargazers_count
              open_issues_count
            }
          }
        `}
        variables={{ login: login }}
        children={({ loading, data }) => {
          const repos =
            data && data.repos ? data.repos : null
          return (
            <>
              {loading && (
                <p css={{ margin: 20 }}>
                  <Spinner />
                  Fetching repositories&hellip;
                </p>
              )}
              {repos && (
                <>
                  <Meta title={login} />
                  {repos.map(repo => (
                    <Repo key={repo.id} {...repo} login={login} />
                  ))}
                </>
              )}
            </>
          )
        }}
      />
    </Wrapper>
  )
}

export default Repos
