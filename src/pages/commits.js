import React from 'react'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

import Commit from '../components/commit'
import Meta from '../components/meta'
import Toolbar from '../components/toolbar'
import Spinner from '../components/spinner'

function Wrapper({ children, login, name }) {
  return (
    <>
      <Toolbar />
      {login && name ? children : <h1>Commits not found</h1>}
    </>
  )
}

function Commits({ location }) {
  const { login, name } = location.state

  return (
    <Wrapper login={login} name={name}>
      <Query
        query={gql`
          query GetCommits($login: String!, $repoName: String!) {
            commits(login: $login, repoName: $repoName) {
              sha
              html_url
              commit_msg
              author_name
              author_avatar_url
              author_created_at
            }
          }
        `}
        variables={{ login: login, repoName: name }}
        children={({ loading, data }) => {
          const commits = data && data.commits ? data.commits : null
          return (
            <>
              {loading && (
                <p css={{ margin: 20 }}>
                  <Spinner />
                  Fetching commits&hellip;
                </p>
              )}
              {commits && (
                <>
                  <Meta title={name} />
                  {commits.map(commit => (
                    <Commit key={commit.sha} {...commit} />
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

export default Commits
