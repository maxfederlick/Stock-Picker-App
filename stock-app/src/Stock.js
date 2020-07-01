import React, { useState, useEffect, Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom'
import axios from 'axios'
 
  
function Stock(props) {

  let [stockMetrics, changeStockMetrics] = useState([])
  let [stockNews, changeStockNews] = useState([])
  let [stockNews2, changeStockNews2] = useState([])

  useEffect(() => {

    const apiCall = async () => {
      const data = await axios(`https://cloud.iexapis.com/stable/stock/aapl/batch?types=quote,news,chart&range=1m&last=10&token=pk_bd42dc5ddd804573b2e313f99b21a0a4 `)
      console.log(data.data)
      changeStockMetrics(data.data.quote)
      const mappedObjectNews = (data.data.news[0])
      const mappedObjectNews2 = (data.data.news[1])
      console.log(mappedObjectNews)
      changeStockNews(mappedObjectNews)
      changeStockNews2(mappedObjectNews2)
      }
      apiCall()
  
    }, [])

 
  
    return (
      <>
        
        <h2>{stockMetrics.companyName}</h2>
        <h3>Real Time Price ({stockMetrics.latestTime}): ${stockMetrics.iexRealtimePrice}</h3>
        <h3>Change: ${stockMetrics.change} ({stockMetrics.changePercent}%)</h3>
        <h3>Previous Close: ${stockMetrics.previousClose}</h3>
        <h3>52 Week High: {stockMetrics.week52High}</h3>
        <h3>52 Week High: {stockMetrics.week52Low}</h3>
        
        <h4>{(stockNews.headline)}</h4>
        <h5>{(stockNews.summary)}</h5>
        <img src={stockNews.image} />
        <h4>{(stockNews2.headline)}</h4>
        <h5>{(stockNews2.summary)}</h5>
        <img src={stockNews2.image} />
      
      </>
    )

  }


export default Stock