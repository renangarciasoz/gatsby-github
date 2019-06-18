import React, { Component } from 'react'

const { Consumer, Provider } = React.createContext(`interface`)

class Interface extends Component {
  state = {}
  welcome = false

  isWelcome = () =>
    this.setState({
      welcome: !this.welcome,
    })

  render() {
    return (
      <Provider
        value={{
          ...this.state,
          isWelcome: this.isWelcome
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

Interface.Consumer = Consumer
Interface.Provider = Interface

export default Interface
