import React, { Component } from 'react'
import Hero from './../Components/Elements/Text/Hero'
import Section from '../Components/Elements/Text/Section'
import { Link } from 'react-router-dom'

import coughvector from './../Assets/cough-vector.png'
import fevervector from './../Assets/fever.png'
import breathvector from './../Assets/bad-breath.png'

class GetHelp extends Component {
  render () {
    return (
      <>
        <Hero color='dark' size='medium'>
          <h1 className='title is-1'>Getting Help</h1>
          <h3 className='subtitle is-3'>
            Do you think you have COVID-19? It's okay, there's a plan.
          </h3>
        </Hero>
        <Section>
          <div className='columns is-centered'>
            <div className='column is-two-thirds'>
              <div className='header has-text-centered'>
                <h2 className='title is-2'>Having Coronavirus</h2>
                <p>
                  The thought of having COVID-19 is scary, the chance of dying
                  or suffering without heathcare support availible to you is not
                  something anyone should think about. Fortunately, a good
                  number of cases are non-fatal, and most people recover (see
                  China's graph on the Stats page). In many places around the
                  world, COVID has barely reached their population. However, if
                  you are in the EU or the US, you have a larger potential to
                  catch the virus. It's important to know what to do when you
                  get the virus to protect yourself.
                </p>
              </div>
            </div>
          </div>
        </Section>
        <Section>
          <div className='columns'>
            <div className='column is-8'>
              <div className='columns'>
                <div className='column'>
                  <div className='content is-medium'>
                    <h3 className='title is-3'>Find and report symptoms</h3>
                    <p>
                      The disease causes respiratory illness (like the flu) with
                      symptoms such as a cough, fever, and in more severe cases,
                      difficulty breathing. The virus will attack your lungs, if
                      you feel effected in that area, you most likely have
                      COVID-19.
                    </p>
                    <div className='columns has-text-centered'>
                      <div className='column'>
                        <div className='box'>
                          <figure className='image'>
                            <img src={coughvector} alt='Coughing Vector' />
                          </figure>
                          <h6 className='is-4'>Cough</h6>
                        </div>
                      </div>
                      <div className='column'>
                        <div className='box'>
                          <figure className='image'>
                            <img src={fevervector} alt='Coughing Vector' />
                          </figure>
                          <h6 className='is-4'>Fever</h6>
                        </div>
                      </div>
                      <div className='column'>
                        <div className='box'>
                          <figure className='image'>
                            <img src={breathvector} alt='Coughing Vector' />
                          </figure>
                          <h6 className='is-4'>Short Breath</h6>
                        </div>
                      </div>
                    </div>
                    <p>
                      Self diagnosing is not safe or a good idea, the instant
                      you suspect you have COVID-19 make sure to seek{' '}
                      <a
                        className='is-warning is-small has-margin-top-10'
                        target='_blank'
                        rel='noreferrer noopener'
                        href='http://www.google.com/search?q=Medical+attention'
                      >
                        Medical attention
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
              <div className='content is-medium'>
                <h3 className='title is-3'>Protect Others</h3>
                <p>
                  Play your part. In order to defeat the virus (as a society)
                  everyone needs to play thier part in preventing spreading of
                  the virus. By utilizing the Self Quarintine method, we can
                  prevent contact of people who are sick to people who are not.
                  <br />
                  <br />
                  To play your part:
                </p>
                <ul>
                  <li>Stay at home</li>
                  <ul>
                    <li>
                      Have someone else or a loved one get groceries or care for
                      you
                    </li>
                    <li>If you can, dedicate a room to yourself</li>
                    <li>Only go out to go to the doctors</li>
                  </ul>
                  <li>Limit contact with others</li>
                  <ul>
                    <li>
                      This includes pets, Coronaviruses are usually in animals
                    </li>
                    <li>Isolation in a dedicated room is best</li>
                  </ul>
                  <li>Wear a mask, if you can</li>
                  <ul>
                    <li>
                      If you're isolated in a room alone you probably don't{' '}
                      <i>need</i> a mask.
                    </li>
                  </ul>
                  <li>Clean hands, surfaces, objects</li>
                </ul>
              </div>
            </div>
            <div className='column'>
              <article className='message is-danger'>
                <div className='message-header'>
                  <p>Emergency Symptoms</p>
                </div>
                <div className='message-body'>
                  <p>
                    If you are developing emergency symptoms that include the
                    following
                  </p>
                  <dl className='has-margin-left-30'>
                    <li>Trouble breathing</li>
                    <li>Pain/Pressure on chest</li>
                    <li>Confusion</li>
                    <li>Blue face (lips or cheeks)</li>
                  </dl>
                  <p>
                    <b>Get medical attention immediately</b> or call emergency
                    services. Coronavirus can have fatal effects for a small
                    amount of the population and these symptoms can expose if
                    you or someone else is vulurable.
                  </p>
                </div>
              </article>
              <article className='message is-light'>
                <div className='message-header'>
                  <p>Check local Government first</p>
                </div>
                <div className='message-body'>
                  <p>
                    Make sure to check with your local Government's procedures
                    and rules. Many countries will have different rules when it
                    comes to reporting your sickness, getting healthcare, taking
                    care of yourself, and preventing spread of the virus. This
                    website gives information at a glance, but everything on
                    here is a reccomendation ontop of local procedures and
                    instructions given out by governing bodies.
                  </p>
                  <a
                    className='button is-link is-light is-small has-margin-top-10'
                    target='_blank'
                    rel='noreferrer noopener'
                    href='http://www.google.com/search?q=My+governments+website'
                  >
                    Find my local govt website
                  </a>
                </div>
              </article>
            </div>
          </div>
        </Section>
        <Hero color='info' size='medium'>
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
      </>
    )
  }
}

export default GetHelp
