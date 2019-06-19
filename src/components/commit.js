import React from 'react'
import styled from 'react-emotion'
import PropTypes from 'prop-types'
import { distanceInWords } from 'date-fns'

const Item = styled.a(
  {
    marginBottom: `10px`,
    display: `flex`,
    textDecoration: `none`,
    width: `100%`,
    maxWidth: `724px`,
    minHeight: `95px`,
    article: {
      width: `100%`,
      display: `flex`,
      flexDirection: `column`,
      borderRadius: `3px`,
      padding: `15px`,
      h1: {
        fontSize: '20px',
        marginTop: 0,
      },
      h2: {
        fontSize: '18px',
      },
      div: {
        display: 'flex',
        alignItems: 'center',
        'img, h2, p': {
          margin: 0,
          marginRight: '10px',
        },
        img: {
          width: '30px',
          height: '30px',
          borderRadius: '30px',
        },
      },
    },
  },
  ({ theme }) => ({
    color: theme.color,
    border: `1px solid ${theme.inverted.link}`,
  })
)

function Commit({
  sha,
  html_url,
  commit_msg,
  author_name,
  author_avatar_url,
  author_created_at,
}) {
  return (
    <Item key={sha} href={html_url} target="_blank">
      <article>
        <h1>{commit_msg}</h1>
        <div>
          {author_avatar_url ? (
            <img src={author_avatar_url} alt={author_name} />
          ) : (
            ''
          )}
          <h2>{author_name}</h2>
          <p>
            {distanceInWords(new Date(), new Date(author_created_at), {
              addSuffix: true,
            })}
          </p>
        </div>
      </article>
    </Item>
  )
}

Commit.propTypes = {
  sha: PropTypes.string.isRequired,
  html_url: PropTypes.string.isRequired,
  commit_msg: PropTypes.string.isRequired,
  author_name: PropTypes.string.isRequired,
  author_avatar_url: PropTypes.string.isRequired,
  author_created_at: PropTypes.string.isRequired,
}

export default Commit
