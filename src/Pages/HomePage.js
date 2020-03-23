import React, { Component } from 'react'
import CountUp from 'react-countup'

import graphiccovid19 from './../Assets/graphic-covid19.png'
import graphiccovid193 from './../Assets/Coronavirus.png'
import { Link } from 'react-router-dom'
import Axios from 'axios'

class HomePage extends Component {
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
      <div>
        <section className='hero is-primary is-bold is-fullheight-with-navbar'>
          <div className='hero-body'>
            <div className='container'>
              <h1 className='title is-1'>COVID-19 is a scary virus.</h1>
              <h2 className='subtitle'>
                Seriously, there are at least{' '}
                <CountUp
                  duration={0.5}
                  start={0}
                  end={
                    this.state.data.cases -
                    (this.state.data.deaths + this.state.data.recovered)
                  }
                />{' '}
                people sick.<b> Right now.</b>
              </h2>
            </div>
          </div>
        </section>
        <section className='section is-medium'>
          <div className='container'>
            <div className='columns is-vcentered'>
              <div className='column'>
                <figure className='image'>
                  <img src={graphiccovid19} alt='Graphic of Covid-19' />
                </figure>
              </div>
              <div className='column'>
                <h2 className='title is-2'>What is Coronavirus?</h2>
                <p>
                  Coronaviruses are a large group of viruses that can cause
                  illness in animals and humans. Some coronaviruses commonly
                  circulate in the United States and usually cause upper
                  respiratory symptoms such as cough or runny nose, although
                  some can cause more serious illness. The 2019 novel (new)
                  coronavirus causes the illness coronavirus disease 2019
                  (COVID-19).
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className='hero is-warning'>
          <div className='hero-body container'>
            <div className='columns is-vcentered'>
              <div className='column is-content'>
                <h2 className='title is-2'>What can I do to protect myself?</h2>
                <p>
                  I'm glad you asked. To start off, this website is a aggregate
                  of information for things related to the virus itself.
                  Everything on this site is sourced from Official sources and
                  Information repositories. The number one thing you should do
                  is look for information relating to the area that you're from
                  (i.e. cdc.gov for US Residents). However, since this website
                  exists, you should check it out as well and learn something
                  that can potentially help you and others.
                </p>
                <div className='has-margin-top-30'>
                  <Link
                    to='/prevention'
                    className='button is-warning is-light has-margin-right-10'
                  >
                    Learn more
                  </Link>{' '}
                  <Link to='/gethelp' className='button is-warning is-light'>
                    Get help
                  </Link>
                </div>
              </div>
              <div className='column'>
                <figure className='image'>
                  <img src={graphiccovid193} alt='Graphic of Covid-19' />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage
