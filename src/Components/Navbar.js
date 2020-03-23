import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CountUp from 'react-countup'
import Axios from 'axios'

class Navbar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: {
        deaths: 0,
        recovered: 0,
        cases: 0,
        updated: Date.now()
      }
    }
  }

  componentDidMount () {
    Axios.get('https://corona.lmao.ninja/all')
      .then(res => {
        return res.data
      })
      .then(data => {
        this.setState({ data: data })
      })
  }

  render () {
    return (
      <div className='navbar is-spaced is-transparent container'>
        <div className='navbar-brand'>
          <Link className='navbar-item' to='/'>
            <img
              src='https://img.icons8.com/dusk/64/000000/handshake-heart.png'
              alt='handshake logo'
            />
          </Link>
          <div className='navbar-item'>
            <span className='tag is-info is-light is-medium'>COVID-19</span>
          </div>
        </div>
        <div className='navbar-menu'>
          <div className='navbar-start '>
            <Link className='navbar-item' to='/'>
              Home
            </Link>

            <Link className='navbar-item' to='/stats'>
              Stats
            </Link>

            <Link className='navbar-item' to='/prevention'>
              Prevention
            </Link>

            <Link className='navbar-item' to='/gethelp'>
              Get Help
            </Link>

            <div className='navbar-item has-dropdown is-hoverable'>
              <a className='navbar-item'>More</a>

              <div className='navbar-dropdown'>
                <Link className='navbar-item' to='/about'>
                  About
                </Link>

                <Link className='navbar-item' to='/codejam'>
                  Code Jam
                </Link>
              </div>
            </div>
          </div>

          <div className='navbar-end'>
            <div>
              <Link className='navbar-item' to='/#'>
                <span className='tag is-danger is-light is-large'>
                  {'  '}
                  <CountUp
                    className=''
                    prefix='Right now there are '
                    suffix=' confirmed cases!'
                    separator=','
                    duration={3}
                    start={0}
                    end={this.state.data.cases}
                  />
                  {'  '}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar

// Home Stats Supplies Prevention "Get help" More > About; How this site works; Code jam
//                                            ^ is-boxedxed
//
