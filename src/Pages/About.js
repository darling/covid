import React, { Component } from 'react'
import Hero from '../Components/Elements/Text/Hero'
import Section from '../Components/Elements/Text/Section'

class About extends Component {
  render () {
    return (
      <>
        <div>
          <Hero color='light' size='small'>
            <h1 className='title is-1'>About</h1>
          </Hero>
        </div>
        <Section>
          <div className='columns is-centered'>
            <div className='column is-two-thirds'>
              <div className='header has-text-centered'>
                <br></br>
                <br></br>
                <br></br>
                <h2 className='title is-2'>The goal</h2>
                <p>
                  When we first came up with the idea for this website, we
                  wanted to make it simple, useful, and insightful; so that
                  anyone could go through the website and find useful
                  information about covid-19.
                </p>
              </div>
            </div>
          </div>
        </Section>
        <br></br>
        <br></br>
        <br></br>
      </>
    )
  }
}

export default About
