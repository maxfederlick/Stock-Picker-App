import React, { useState } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom'
import Stock from "./Stock"
import Header from "./Header"
import Footer from "./Footer"

function App() {

  let [stockName, searchStockName] = useState([]),




    handleChange = (e) => {
      searchStockName(e.target.value)
    }




  return (
    <>

      <main>
        <Route path="/">
          <Header />
          <Route path="/" exact>

            <form>
              <input type="text" placeholder="Enter a stock ticker" value={stockName} onChange={handleChange} />
              <Link to={`/stockchoice/${stockName}`}>
                <input type="submit" value="submit" />
              </Link>
            </form>
          </Route>

          <Route path="/stockchoice/:stock" >
            <Stock name={stockName} />
          </Route>

          <Footer />
        </Route>
      </main>
      


    </>
  );
}


export default App;
