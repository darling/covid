import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Components
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

// Pages
import HomePage from './Pages/HomePage'
import Stats from './Pages/Stats'
import Prevention from './Pages/Prevention'
import GetHelp from './Pages/GetHelp'

// Styles
import 'bulma'
import './../node_modules/bulma-spacing/css/bulma-spacing.min.css'
import ScrollToTop from './Components/ScrollToTop'
import About from './Pages/About'
import CodeJam from './Pages/CodeJam'

class App extends Component {
  render () {
    return (
      <Router>
        <ScrollToTop />
        <div className='app'>
          <div className='has-background-white'>
            <Navbar />
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route path='/stats' component={Stats} />
              <Route path='/prevention' component={Prevention} />
              <Route path='/gethelp' component={GetHelp} />
              <Route path='/about' component={About} />
              <Route path='/codejam' component={CodeJam} />
            </Switch>
            <Footer />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
