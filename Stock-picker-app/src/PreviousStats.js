import React, { useState, useEffect, Component } from 'react'


export default function PreviousStats(props) {
  let [prevStockMetrics, changePrevStockMetrics] = useState({})
  let [isShown, setIsShown] = useState(false)

  const percentChange = props.data.changePercent
  console.log(percentChange)

  return (
    <div>
      <div className="buttons">
        <button className="button1" onClick={() => setIsShown(true)}
          onMouseClick={() => setIsShown(false)}><strong>Show Me Yesterday's Data</strong>
        </button>
      </div>

      {isShown && (

        <div className="hidden-data">
          <div className="hidden-data1">
            <p>Date: {props.data.date}</p>
            <p className={percentChange > 0 ? "green" : "red"}>Change: ${props.data.change} ({props.data.changePercent}%)</p>
            <p className={percentChange > 0 ? "green" : "red"}>Change over time: {props.data.changeOverTime}</p>
            <p>High: {props.data.high}</p>
          </div>
          <div className="hidden-data2">
            <p>Low: {props.data.low}</p>
            <p>Close: {props.data.uClose}</p>
            <p>Open: {props.data.uOpen}</p>
            <p>Volume: {props.data.uVolume}</p>
          </div>
          <button className="hide-button1" onClick={() => setIsShown(false)}>Hide</button>
        </div>


      )}
    </div>
  )
}
