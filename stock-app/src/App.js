import React, { useState } from 'react';
import './App.css';
import { Route, withRouter, Link } from 'react-router-dom'
import Stock from "./Stock"
import Header from "./Header"
import Footer from "./Footer"
import Homepage from "./Homepage"


function App(props) {

  return (
    <>

      <main>
        <Route path="/">
          <Header />
      </Route>
          <Route path="/" exact>
            <Homepage />
        </Route>

        <Route path="/stockchoice/:stock" >
          <Stock data={props.match.params.stock}/>
          </Route>
          <Footer />
      </main>
  
  </>
  );
}


export default withRouter(App);
