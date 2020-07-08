import React from 'react';
import { Switch, Route } from "react-router-dom";
import '../scss/global.scss';
import Header from '../components/header';
import Footer from '../components/footer';

const App = () => {
  return (
    <div className="container">
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <h1>Home</h1>
          </Route>
          <Route path="/enroll">
            <h1>Enroll</h1>
          </Route>
          <Route path="/search">
            <h1>Search</h1>
          </Route>
          <Route path="/statistics">
            <h1>Statistics</h1>
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
};

export default App;