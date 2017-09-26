import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import App from './App';
import Champion from './Champion';
import {Container,Row,Column} from 'rebass'
import Live from '../containers/Drawer';
import overlay from '../containers/Overlay'
import Task from './task'
const Home = () => (
  <Router>
    <div>
      <Live/>
      <overlay/>
      <Container>
        <Row w={10}>
          <Column><Link to="/">Champion</Link></Column>
          <Column><Link to="/app">App</Link></Column>
          <overlay/>
        </Row>
          <hr/>
        <Task/>
        <Route exact path="/" component={Champion}/>
        <Route path="/app" component={App}/>
      </Container>
    </div>
  </Router>
)

export default Home;
