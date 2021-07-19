import React, { Component } from 'react';
import Top_Header from './Top_Header'
import Home from './Home'
import{
   BrowserRouter as Router,
   Route,
   Link
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
          <header>
          <Top_Header/>
          </header>
           <Route exact path="/reactwebsite/" component={Home} />
           {/* <Route path="/about" component={About} /> */}

           {/* <Footer /> */}

          
          </Router>
    );
  }
}

export default App;