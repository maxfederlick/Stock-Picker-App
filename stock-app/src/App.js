import React, { useState, useEffect, Component } from 'react';
import './App.css';
import axios from 'axios'
import { Route, Link } from 'react-router-dom'
import Stock from "./Stock"


function App() {
   
  let [stockName, searchStockName] = useState([]),



 
  handleChange =  (e) => {
    searchStockName(e.target.value)
  }
  
  // handleSubmit =  () => {
  //   searchStockName()
  // }

  

      return (
        <>
          <nav>
            <Link to="/">New Search</Link>
          </nav>
          <main>
        
            <Route path="/" exact>

              <form>
                <input type="text" placeholder="Enter a stock ticker" value={stockName} onChange={handleChange} />
                <Link to={`/stockchoice/${stockName}`}>
                  <input type="submit" value="submit" />
                </Link>
              </form>

            </Route>

          </main>

  
          <Route path="/stockchoice/:stock" >
            <Stock name={stockName} />
          </Route>

    
        </>
      );
    }
  

export default App;
