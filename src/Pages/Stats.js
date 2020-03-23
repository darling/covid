import React, { Component } from 'react'
import Hero from '../Components/Elements/Text/Hero'
import CountryGraph from '../Components/Elements/Country-Graph'
import CountUp from 'react-countup'
import moment from 'moment'
import Axios from 'axios'
import Section from '../Components/Elements/Text/Section'

class Stats extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: {
        deaths: 0,
        recovered: 0,
        cases: 0,
        updated: Date.now()
      },
      countryList: [
        <option key=''>Pick any Country</option>,
        <option key=' '>---</option>
      ],
      countryValue: 'Everyone'
    }

    this.handleSelect = this.handleSelect.bind(this)
  }

  handleSelect (event) {
    console.log('New State: ', event.target.value)
    let eventVal = event.target.value
    if (
      event.target.value === 'Pick and Country' ||
      event.target.value === '---'
    ) {
      eventVal = 'Everyone'
    }
    this.setState({ countryValue: eventVal })
  }

  componentDidMount () {
    // Fetching a stream of data

    Axios.get('https://corona.lmao.ninja/all')
      .then(res => {
        return res.data
      })
      .then(data => {
        this.setState({ data: data })
      })

    Axios.get('https://pomber.github.io/covid19/timeseries.json')
      .then(res => {
        return res.data
      })
      .then(data => {
        const countries = Object.keys(data).map((entry, i) => {
          return <option key={i}>{entry}</option>
        })
        this.setState({
          countryList: this.state.countryList.concat(
            countries.sort((a, b) => a - b)
          )
        })
      })
  }

  render () {
    return (
      <>
        <Hero color='dark' size='medium'>
          <h1 className='title is-1'>Statistics</h1>
          <h3 className='subtitle is-3'>
            It's important to be informed about the real facts. People are
            getting infected from the virus at an exponential rate.
          </h3>
        </Hero>
        <div className='section is-medium'>
          <div className='container'>
            <div className='section has-text-centered'>
              <h1 className='title is-1 is-large'>Here's the numbers</h1>
            </div>
            <div className='columns is-vcentered'>
              <div className='column has-text-centered'>
                <div className='box'>
                  <h2 className='title is-3'>There's</h2>
                  <div className='title is-1'>
                    <CountUp
                      className=''
                      separator=','
                      duration={3}
                      start={0}
                      end={this.state.data.deaths}
                    />
                  </div>
                  <h2 className='title is-3'>deaths</h2>
                </div>
              </div>
              <div className='column has-text-centered'>
                <div className='box'>
                  <h2 className='title is-3'>About</h2>
                  <div className='title is-1'>
                    <CountUp
                      className=''
                      separator=','
                      duration={3}
                      start={0}
                      end={this.state.data.recovered}
                    />
                  </div>
                  <h2 className='title is-3'>recoveries</h2>
                </div>
              </div>
              <div className='column has-text-centered'>
                <div className='box'>
                  <h2 className='title is-3'>And</h2>
                  <div className='title is-1'>
                    <CountUp
                      className=''
                      separator=','
                      duration={3}
                      start={0}
                      end={this.state.data.cases}
                    />
                  </div>
                  <h2 className='title is-3'>cases</h2>
                </div>
              </div>
            </div>
            <div className='has-text-centered has-text-grey-lighter'>
              <span>
                Updated{' '}
                {moment(new Date(this.state.data.updated)).format('L LT')}
              </span>
            </div>
          </div>
        </div>
        <div className='hero'>
          <div className='hero-body container'>
            <div className='columns'>
              <div className='column is-half'>
                <h3 className='title is-3'>Graphs</h3>
                <p>
                  Graphs help visualize data in ways that we can easily digest,
                  and understand. These graphs show how the virus grows
                  exponentially during its spreading phase. Some things to note
                  is how China already beat the curve. Since china had the virus
                  first, the bulk of people infected spread rapidly, then slowly
                  tapers off because of quarintine practices. We (other
                  countries) can achieve similar results by self quarintine
                  practices.
                </p>
              </div>
              <div className='column is-half has-text-right'>
                <h3 className='title is-3 has-text-left'>Also,</h3>
                <p>
                  Try clicking the titles to change the range of the graphs!
                  Super cool! Other things you can do include: hovering, looking
                  up your own country. It's not that much but these graphs show
                  a lot of data that really puts things into perspective, at
                  least, for me it does. Also, unlike the counters above, these
                  graphs do <b>not</b> update by the minute. These update twice
                  a day or so, they come from different data sources.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='section is-small'>
          <div className='container'>
            <div className='columns'>
              <div className='column'>
                <CountryGraph cc='ALL' country='Everyone' />
              </div>
              <div className='column'>
                <CountryGraph cc='IT' country='Italy' />
              </div>
            </div>
          </div>
        </div>
        <div className='hero is-warning is-medium is-bold'>
          <div className='hero-body'>
            <div className='container'>
              <div className='columns is-vcentered'>
                <div className='column'>
                  <div className='notification'>
                    <div className='container'>
                      <div className='section'>
                        <h3 className='title'>Other Countries</h3>
                        <p>
                          Individual countries can be selected to be viewed
                          here. After selecting a country, the graph should
                          update and show the new information.
                        </p>
                      </div>
                      <div className='section'>
                        <div className='select is-warning'>
                          <select
                            value={this.state.countryValue}
                            onChange={this.handleSelect}
                          >
                            {this.state.countryList}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='column'>
                  <CountryGraph cc='ALL' country={this.state.countryValue} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Hero color='light is-bold' size='medium'>
          <div className='columns is-centered'>
            <div className='column is-two-thirds'>
              <div className='content is-medium has-text-centered'>
                <h2 className='title is-2'>China</h2>
                <p className='is-inline'>
                  China makes a great case study because it shows a country that
                  has already "beat the curve". The reason we want to beat the
                  curve in short is because we want to save lives. If healthcare
                  can only support X amount of people at a time, we want to
                  reduce the number of people sick at any given time to X. To
                  see that amount the{' '}
                </p>
                <p className='is-inline has-text-warning'>Existing</p>
                <p className='is-inline'>
                  {' '}
                  curve shows the amount of people who are infected at the
                  respective times. The "flatter" the curve at any given time,
                  the more lives could be saved.
                </p>
                <a
                  className='has-margin-top-10 is-light button is-info'
                  href='https://www.vox.com/2020/3/10/21171481/coronavirus-us-cases-quarantine-cancellation'
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
          <div className='has-text-warning'>
            <CountryGraph cc='ALL' country='China' />
          </div>
        </Hero>
        <Hero color='warning is-bold' size='medium'>
          <div className='columns is-centered'>
            <div className='column is-two-thirds'>
              <div className='content is-medium has-text-centered'>
                <h2 className='title is-2'>United States</h2>
                <p className='is-inline'>
                  We can see the US graph and apply the concepts from China
                  here, is the US, the EU, and the rest of the World ready to
                  take on COVID-19?
                </p>
              </div>
            </div>
          </div>
          <div className='has-text-warning'>
            <CountryGraph cc='ALL' country='US' />
          </div>
        </Hero>
      </>
    )
  }
}

export default Stats
