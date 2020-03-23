import React, { Component } from 'react'

import Hero from '../Components/Elements/Text/Hero'

import coughvector from './../Assets/cough-vector.png'
import mask from './../Assets/patient.png'
import { Link } from 'react-router-dom'

// https://www.cdc.gov/coronavirus/2019-ncov/prepare/prevention.html

class Prevention extends Component {
  render () {
    return (
      <div>
        <Hero color='dark' size='medium'>
          <h1 className='title is-1'>Prevention</h1>
          <h3 className='subtitle is-3'>
            The number one thing you can do to help this pandemic is help
            yourself.
          </h3>
        </Hero>
        <Hero color='light' size='large'>
          <div className='columns is-vcentered'>
            <div className='column'>
              <h2 className='subtitle is-2'>How COVID-19 Spreads</h2>
              <div className='content'>
                <ul>
                  <li>
                    There is currently no vaccine to prevent coronavirus disease
                    2019 (COVID-19).{' '}
                  </li>
                  <li>
                    The virus is thought to spread mainly from person-to-person.
                    <ul>
                      <li>
                        Between people who are in close contact with one another
                        (within about 6 feet).
                      </li>
                      <li>
                        Through respiratory, droplets are produced when an
                        infected person coughs or sneezes.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Sneeze or cough droplets can land in the mouths or noses of
                    people who are nearby or possibly be inhaled into the lungs.
                  </li>
                </ul>
              </div>
            </div>
            <div className='column is-4'>
              <figure className='image'>
                <img src={coughvector} alt='Coughing Vector' />
              </figure>
            </div>
          </div>
        </Hero>
        <Hero color='info' size='large'>
          <div className='columns is-vcentered'>
            <div className='column is-4'>
              <figure className='image'>
                <img src={mask} alt='Coughing Vector' />
              </figure>
            </div>
            <div className='column'>
              <h2 className='subtitle is-2'>Stop Exposure</h2>
              <div className='content is-large'>
                <ul>
                  <li>Wash your hands</li>
                  <ul>
                    <li>
                      Make sure to do it{' '}
                      <a
                        className='has-text-warning'
                        href='https://www.youtube.com/watch?v=CIFLzWb5Hws'
                      >
                        properly
                      </a>
                    </li>
                  </ul>
                  <li>Self Quarantine</li>
                  <p>
                    Limiting contact stops the virus from spreading to you,
                    others, as well as letting the infected focus on getting
                    better.
                  </p>
                  <li>Clean and disinfect used surfaces</li>
                </ul>
              </div>
            </div>
          </div>
        </Hero>
        <Hero color='primary is-bold' size='medium'>
          <div className='has-text-center'>
            <h1 className='title'>Why is preventing COVID-19 important?</h1>
            <h2 className='subtitle'>
              Doing your part to prevent COVID-19 can save lives
            </h2>
            <Link to='/stats' className='button is-info is-light'>
              Learn More
            </Link>
          </div>
        </Hero>
      </div>
    )
  }
}
// https://www.cdc.gov/coronavirus/2019-ncov/prepare/prevention.html
export default Prevention
