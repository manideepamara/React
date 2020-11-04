import React, { Component } from 'react'
import { hashHistory,Router, Route, Link, IndexRoute} from 'react-router'

class App12 extends Component {
    render() {
      return (
        <Router history={hashHistory} >
          <Route path='/' component={Home} />
          <Route path='/address' component={Address} />
          <Route path="*" component={notfound} />
        </Router>
      )
    }
  }
  const Home = () => <h1>Hello from Home!</h1>
  const Address = () => <h1>We are located at 555 Jackson St.</h1>
  const notfound = () => <h1>404 not foyund</h1>

export default App12