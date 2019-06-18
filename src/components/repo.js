import React from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'
import PropTypes from 'prop-types'
import { distanceInWords } from 'date-fns'

const Item = styled(Link)(
  {
    marginBottom: `10px`,
    display: `flex`,
    textDecoration: `none`,
    width: `100%`,
    maxWidth: `724px`,

    article: {
      width: `100%`,
      display: `flex`,
      flexDirection: `column`,
      borderRadius: `3px`,
      padding: `15px`,
      h1: {
        fontSize: '20px',
        textDecoration: 'underline',
        marginTop: 0,
      },
      h2: {
        fontSize: '18px',
      },
    },
  },
  ({ theme }) => ({
    color: theme.color,
    border: `1px solid ${theme.inverted.link}`
  })
)

function Repo({
  id,
  name,
  login,
  language,
  description,
  created_at,
  updated_at,
  forks_count,
  watchers_count,
  stargazers_count,
  open_issues_count,
}) {
  return (
    <Item key={id} to={`/commits/${login}/${name}`} state={{ login, name }}>
      <article>
        <h1>{name}</h1>
        <h2>{language}</h2>
        {description ? <p>{description}</p> : ''}
        <div>
          <p>
            Created{' '}
            {distanceInWords(new Date(), new Date(created_at), {
              addSuffix: true,
            })}
          </p>
          <p>
            Updated{' '}
            {distanceInWords(new Date(), new Date(updated_at), {
              addSuffix: true,
            })}
          </p>
        </div>
        <div>
          <span>Forks: {forks_count} </span>
          <span>Stars: {stargazers_count} </span>
          <span>Watchers: {watchers_count} </span>
          <span>Issues: {open_issues_count} </span>
        </div>
      </article>
    </Item>
  )
}

Repo.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  full_name: PropTypes.string.isRequired,
  description: PropTypes.string,
  created_at: PropTypes.string.isRequired,
  updated_at: PropTypes.string.isRequired,
  forks_count: PropTypes.number.isRequired,
  watchers_count: PropTypes.number.isRequired,
  stargazers_count: PropTypes.number.isRequired,
  open_issues_count: PropTypes.number.isRequired,
}

export default Repo
