<button onClick={() => changeStockDisplay({ stockDisplay })}>Submit</button>

onChange = {(e) => changeSearchResults(e.target.value)}

TTY3VLM113GIDNC8

{Object.keys(stockDisplay).map((symbol, i) => (
  <h2 key={i}>Ticker :{stockDisplay[symbol]}</h2>
))
}

pk_bd42dc5ddd804573b2e313f99b21a0a4 