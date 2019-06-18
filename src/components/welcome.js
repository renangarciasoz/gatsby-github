import React from 'react'
import styled from 'react-emotion'
import { FaArrowRight, FaExclamationTriangle } from 'react-icons/fa'

import Interface from './interface'
import Button from './button'
import WelcomeLinks from './welcome-links'

const Container = styled.div(
  {
    display: `flex`,
    justifyContent: 'center',
    flex: 1,
    minHeight: '100%',
    flexDirection: 'column',
    padding: '1rem',
  },
  ({ theme }) => ({
    color: theme.color,
  })
)

const Title = styled.h1({
  fontSize: 28,
  fontWeight: 400,
  textAlign: 'left',
})

const Subtitle = styled.span(
  {
    display: 'block',
    fontSize: 40,
    fontWeight: 700,
  },
  ({ theme }) => ({
    color: theme.name === 'dark' ? '#3FA9F5' : theme.accent,
  })
)

const Message = styled.h4(
  {
    fontSize: 14,
    margin: '0.5rem 0',
  },
  ({ theme }) => ({
    color: theme.alert,
  })
)

function Welcome() {
  return (
    <Container>
      <Interface.Consumer>
        {({ welcome, isWelcome }) => {
          if (welcome) {
            return null
          }
          return (
            <>
              <Title>
                Welcome to
                <Subtitle>Gatsby Github</Subtitle>
              </Title>
              <Button css={{ margin: '1rem 0' }} onClick={() => isWelcome()}>
                View Application{' '}
                <FaArrowRight css={{ position: 'relative', top: 4 }} />
              </Button>
              <Message>
                <FaExclamationTriangle
                  css={{ position: 'relative', top: 2, marginRight: '0.25rem' }}
                />{' '}
                Don't use this for anything <em>real!</em>
              </Message>
            </>
          )
        }}
      </Interface.Consumer>
      <WelcomeLinks />
    </Container>
  )
}

export default Welcome
