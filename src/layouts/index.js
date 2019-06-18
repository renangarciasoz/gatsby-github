import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'react-emotion'

import Interface from '../components/interface'
import Welcome from '../components/welcome'
import Content from '../components/content'
import Header from '../components/header'
import Footer from '../components/footer'
import Meta from '../components/meta'
import Theme from '../components/theme'

import '../style/global'
import 'normalize.css'

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  height: `100%`,
})

class Layout extends Component {
  render() {
    const { children, location, meta, title } = this.props

    return (
      <StaticQuery
        query={graphql`
          query LayoutQuery {
            site {
              siteMetadata {
                title
                unauthenticatedRoutes
              }
            }
          }
        `}
        render={data => (
          <Theme.Provider>
            <Interface.Provider>
              <Meta meta={meta} title={title} />
              <Container>
                <Header siteTitle={data.site.siteMetadata.title} />
                <Interface.Consumer>
                  {({ welcome }) => (
                    <Content>
                      {welcome === true ? children : <Welcome />}
                    </Content>
                  )}
                </Interface.Consumer>
                <Footer stripes={location.pathname === `/`} />
              </Container>
            </Interface.Provider>
          </Theme.Provider>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  meta: PropTypes.array,
  theme: PropTypes.oneOf(['light', 'dark']),
  title: PropTypes.string,
}

Layout.defaultProps = {
  meta: [],
  theme: 'light',
}

export default Layout
