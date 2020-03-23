import React, { Component } from 'react'
import Hero from '../Components/Elements/Text/Hero'
import Section from '../Components/Elements/Text/Section'

class CodeJam extends Component {
  render () {
    return (
      <>
        <div>
          <Hero color='primary is-bold' size='medium'>
            <h1 className='title is-1'>Code Jam</h1>
            <h3 className='subtitle is-3'>
              Thank you Repl.it for hosting this Code Jam!
            </h3>
          </Hero>
          <Section>
            <div className='columns'>
              <div className='column'>
                <div className='box'>
                  <h1>Carter</h1>
                  <p>
                    I learned a lot about creating a website with React, Bulma,
                    Javascript, and such. I've never used React before so this
                    was a learning experience for me. I wanted to create a
                    resource for people to get information about Coronavirus in
                    an easy and readable format that is available and fast.
                    Teaching Matt HTML, React, and Javascript was a great
                    experience for both of us because we both learned a lot
                    along the way. Without this CodeJam I don't think I would
                    have strived to the level I gained just now. Thanks for
                    hosting it.
                  </p>
                </div>
              </div>
              <div className='column'>
                <div className='box'>
                  <h1>Matt</h1>
                  <p>
                    I learned a lot about everything we did including combining
                    HTML and JavaScript, plus some react. This was my first time
                    coding a wesite and using everything we did; so it was a fun
                    experience doing it all.{' '}
                  </p>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </>
    )
  }
}

export default CodeJam
