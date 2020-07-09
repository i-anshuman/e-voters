import React from 'react';
import { Switch, Route } from "react-router-dom";
import '../scss/global.scss';
import Header from '../components/header';
import Footer from '../components/footer';
import Enroll from '../sections/enroll';
import Search from '../sections/search';
import Statistics from '../sections/statistics';

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
            <Enroll />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/statistics">
            <Statistics />
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
};

export default App;