import React, { useState, Params } from 'react';
import { Route, Link } from 'react-router-dom'


export default function Homepage() {


  let [stockName, searchStockName] = useState([]),

    handleChange = (e) => {
      searchStockName(e.target.value)
    }

  return (
    <div className="homePage">
      <p className="about-text"><strong>
        Please enter a stock ticker below to obtain real time data and insights into the company of your choosing. Our goal is to provide you an analysis of your query that offers enough insight to make an informed buy or sell. Once you have your base information, be sure to check out our "Good Buy?" button.</strong>
      </p>
      <form>
        <input type="text" placeholder="Enter a stock ticker" value={stockName} onChange={handleChange} />
        <Link to={`/stockchoice/${stockName}`}>
          <input type="submit" value="Submit" />
        </Link>
      </form>

    </div>
  )
}
