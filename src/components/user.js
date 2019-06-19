import React from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'
import PropTypes from 'prop-types'

const Item = styled(Link)(
  {
    margin: `5px`,
    display: `flex`,
    textDecoration: `none`,
    article: {
      width: `200px`,
      height: `258px`,
      fontSize: `12px`,
      display: `flex`,
      flexDirection: `column`,
      alignItems: `center`,
      borderRadius: `3px`,
      img: {
        width: '200px',
        height: '200px',
        margin: 0,
      },
    },
  },
  ({ theme }) => ({
    color: theme.color,
    border: `1px solid ${theme.inverted.link}`,
  })
)

function User({ id, login, avatar_url }) {
  return (
    <Item to={`/repos/${login}`} state={{ login }}>
      <article>
        <img src={avatar_url} alt={login} />
        <h1>{login}</h1>
      </article>
    </Item>
  )
}

User.propTypes = {
  id: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
  avatar_url: PropTypes.string.isRequired,
}

export default User
