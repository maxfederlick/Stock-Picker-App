import React, {useState, useEffect, Component } from 'react'

export default function GoodBuy(props) {

  let [isShown, setIsShown] = useState(false)

  
  return (
    <div>
      <div className="buttons">
      <button className="button2" onClick={() => setIsShown(true)}><strong>Is this a good buy?</strong></button>
      </div>
      
      {isShown && (
        <>
        
          <div className='pe-class'>
            <div className="recommendation">Recommendation:</div>
            <div className="text-class">{props.data.peRatio > 30 ? `This stock has a current P/E of ${props.data.peRatio}. This is relatively high which points to the stock being overbought. Error on the side of caution` :
              `This stock has a current P/E ratio of ${props.data.peRatio}. This signals that the stock is underbought and is a good buy.`}</div>
    
          <button className="hide-button2" onClick={() => setIsShown(false)}>Hide</button>
          </div>
    </>
      )}
      </div>
  )
}
