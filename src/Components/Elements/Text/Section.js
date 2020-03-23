import React, { Component } from 'react'

class Section extends Component {
  render () {
    return (
      <section className='section is-small'>
        <div className='container'>{this.props.children}</div>
      </section>
    )
  }
}

export default Section
