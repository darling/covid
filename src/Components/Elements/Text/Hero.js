import React, { Component } from 'react'

class Hero extends Component {
  render () {
    return (
      <div className={'hero is-' + this.props.color + ' is-' + this.props.size}>
        <div className='hero-body'>
          <div className='container'>{this.props.children}</div>
        </div>
      </div>
    )
  }
}

export default Hero
