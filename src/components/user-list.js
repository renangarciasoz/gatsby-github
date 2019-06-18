import React from 'react'
import styled from 'react-emotion'
import PropTypes from 'prop-types'

import User from './user'

const Container = styled.div({
  display: 'flex',
  flexDirection: 'row',
  margin: 0,
  flexWrap: 'wrap',
  justifyContent: 'center',
  padding: '20px'
})

function UserList({ className, users }) {
  return (
    <Container className={className}>
      {users.map(user => <User key={user.id} {...user}/>)}
    </Container>
  )
}

UserList.propTypes = {
  className: PropTypes.string,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      login: PropTypes.string.isRequired,
      avatar_url: PropTypes.string.isRequired
    })
  ),
}

export default UserList
