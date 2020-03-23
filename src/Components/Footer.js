import React, { Component } from 'react'

class Footer extends Component {
  render () {
    return (
      <footer className='footer'>
        <div className='content has-text-centered'>
          <p>
            <strong>COVID-19</strong> by{' '}
            <a href='https://huh.sh'>Carter Black</a> &{' '}
            <a href='https://huh.sh'>Matt Shams</a>. The source code is licensed
            <a href='http://opensource.org/licenses/mit-license.php'> MIT</a>.
            The website content is licensed{' '}
            <a href='http://creativecommons.org/licenses/by-nc-sa/4.0/'>
              CC BY NC SA 4.0
            </a>
            .
          </p>
        </div>
      </footer>
    )
  }
}

export default Footer
