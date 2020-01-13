import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import About from './pages/About';
import Chatbot from './chatbot/Chatbot';
import Header from './Header';
import Landing from './pages/Landing';
import Shop from './shop/Shop';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="container">
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/about" component={About} />
          <Route exact path="/shop" component={Shop} />
          <Chatbot />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;