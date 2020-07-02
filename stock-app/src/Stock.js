import React, { useState, useEffect, Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom'
import axios from 'axios'
import PreviousStats from './PreviousStats';
import GoodBuy from "./GoodBuy"


function Stock(props) {

  let [stockMetrics, changeStockMetrics] = useState([])
  let [stockNews, changeStockNews] = useState([])
  let [stockNews2, changeStockNews2] = useState([])
  let [prevStockMetrics, changePrevStockMetrics] = useState({})


  useEffect(() => {

    const apiCall = async () => {
      const data = await axios(`https://cloud.iexapis.com/stable/stock/amzn/batch?types=quote,news,chart&range=1m&last=10&token=pk_bd42dc5ddd804573b2e313f99b21a0a4`)
      console.log(data.data)

      changeStockMetrics(data.data.quote)

      const mappedObjectNews = (data.data.news[0])
      const mappedObjectNews2 = (data.data.news[1])
      console.log(mappedObjectNews2)


      changeStockNews(mappedObjectNews)
      changeStockNews2(mappedObjectNews2)

      const prevDay = (data.data.chart[21])
      changePrevStockMetrics(prevDay)
      console.log(prevDay)
    }
    apiCall()

  }, [])



  return (
    <>
      <body>
      <h2>{stockMetrics.companyName}</h2>
      <div className="metrics-container">
        <div className="metrics-container1">
          <p>Real Time Price ({stockMetrics.latestTime}): ${stockMetrics.iexRealtimePrice}</p>
          <p>Previous Close: ${stockMetrics.previousClose}</p>
          <p>Change: ${stockMetrics.change} ({stockMetrics.changePercent}%)</p>
          <p>52 Week High: ${stockMetrics.week52High}</p>
        </div>

        <div className="metrics-container2">
          <p>52 Week Low: ${stockMetrics.week52Low}</p>
          <p>YTD Change: {stockMetrics.ytdChange}</p>
          <p>Average Daily Volume: {stockMetrics.avgTotalVolume}</p>
          <p>Previous Volume: {stockMetrics.previousVolume}</p>
        </div>
      </div>

      <h2>Breaking News</h2>
      <div className="news-container">
    
        
        <div className="news-container1">
          <div className="headline-container">
            <h4><strong>{stockNews.headline}</strong></h4>
          </div>
          <div className ="content">
          <p>{stockNews.summary}</p>
            <img src={stockNews.image} />
            </div>
        </div>

        
        <div className="news-container2">
          <div className="headline-container">
            <h4><strong>{stockNews2.headline}</strong></h4>
          </div>
          <div className ="content">
          <p>{stockNews2.summary}</p>
            <img src={stockNews2.image} />
            </div>
        </div>
      </div>

      <div>
          <PreviousStats data={prevStockMetrics} />
          <GoodBuy data={stockMetrics} />
      </div>
      </body>
    </>
  )

}


export default Stock