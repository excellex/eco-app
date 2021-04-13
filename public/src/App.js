import React from 'react';
import { Route, Switch } from 'react-router-dom';
import IndexPage from './pages/IndexPage/IndexPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import Dashboard from './pages/Dashboard/Dashboard';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import SignInPage from './pages/SignInPage/SignInPage';
import './App.css';
import { Container } from 'react-bootstrap';


function App() {
  console.log(process.env.REACT_APP_TEST);
  return (
      <div style={{position: 'relative'}} >
        <Header />
        <Switch>
          <Route exact path='/' component={IndexPage} />
          <Route exact path='/signin' component={SignInPage} />
          <Route exact path='/signup' component={SignUpPage} />
          <Route exact path='/dashboard' component={Dashboard} />
        </Switch>
        {/* <Footer /> */}
      </div>
  );
}

export default App;
