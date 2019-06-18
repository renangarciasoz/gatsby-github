import React from 'react'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import styled from 'react-emotion'
// import { MdAdd } from 'react-icons/md'
// import { Link as GatsbyLink } from 'gatsby'

// import FloatingButton from '../components/floating-button'
import UserList from '../components/user-list'
import Spinner from '../components/spinner'

import getZIndex from '../style/z-index'

const Container = styled.div({
  zIndex: getZIndex('button')
})

// const BottomRight = styled.div({
//   position: 'fixed',
//   bottom: 24,
//   right: 16,
// })

const IndexPage = () => (
  <Query
    pollInterval={1000}
    query={gql`
      query GetUsers {
        users {
          id
          login
          avatar_url
        }
      }
    `}
    children={({ loading, data }) => (
      <Container>
        {loading && (
          <p css={{ margin: 20 }}>
            <Spinner /> Loading users&hellip;
          </p>
        )}
        {data.users && (
          <UserList
            css={{ paddingBottom: 24 }}
            users={data.users}
          />
        )}
      </Container>
    )}
  />
)

export default IndexPage
