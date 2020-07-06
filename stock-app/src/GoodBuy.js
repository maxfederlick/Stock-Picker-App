import React, {useState, useEffect, Component } from 'react'

export default function GoodBuy(props) {

  let [isShown, setIsShown] = useState(false)

  
  return (
      <div className="buttons">
        <button className="button2" onClick={() => setIsShown(true)}><strong>Is this a good buy?</strong></button>
      
      {isShown && (

        <div className="good-buy">
          <p>{props.data.peRatio}</p>
          <button className="hide-button2" onClick={() =>setIsShown(false)}>Hide</button>
          </div>

      )}
      </div>
   
  )
}
