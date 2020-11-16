import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './views/Home';
import Content from './views/Content';
import NotFound from './views/NotFound'

ReactDOM.render(
  <React.Fragment>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/content" component={Content}/>
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById('root')
);