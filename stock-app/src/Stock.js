import React, { useState, useEffect, Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom'
import axios from 'axios'
 
  
function Stock(props) {

  let [stockDisplay, changeStockDisplay] = useState({})

  useEffect(() => {

    const apiCall = async () => {
      const data = await axios(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${props.name}&apikey=TTY3VLM113GIDNC8`,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        })
      console.log(data.data["Global Quote"])
      changeStockDisplay(data.data["Global Quote"])
      }
      apiCall()
  
    }, [])

  
    return (
      <>
        <div>
       {Object.keys(stockDisplay).map((symbol, i) => (
    <h2 key={i}>Ticker : {stockDisplay[symbol]}</h2>
  ))}
        </div>
      </>
    )

  }


export default Stock