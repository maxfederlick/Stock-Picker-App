import React, {useState, useEffect, Component } from 'react'


export default function PreviousStats(props) {
  let [prevStockMetrics, changePrevStockMetrics] = useState({})
  let [isShown, setIsShown] = useState(false)

  return (
    <div>
      <p className="buttons1" onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}><strong>Show Me Yesterday's Data</strong>
      </p>

      {isShown && (

        <div className="hidden-data">
          <p>Date: {props.data.date}</p>
          <p>Change:${props.data.change} ({props.data.changePercent}%)</p>
          <p>Change over time: {props.data.changeOverTime}</p>
          <p>High: {props.data.high}</p>
          <p>Low: {props.data.low}</p>
          <p>Close: {props.data.uClose}</p>
          <p>Open: {props.data.uOpen}</p>
          <p>Volume: {props.data.uVolume}</p>
        </div>

      )}
    </div>
  )
}
