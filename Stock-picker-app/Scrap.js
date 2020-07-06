<button onClick={() => changeStockDisplay({ stockDisplay })}>Submit</button>

onChange = {(e) => changeSearchResults(e.target.value)}

TTY3VLM113GIDNC8

{Object.keys(stockDisplay).map((symbol, i) => (
  <h2 key={i}>Ticker :{stockDisplay[symbol]}</h2>
))
}

pk_bd42dc5ddd804573b2e313f99b21a0a4 

https://sandbox.iexapis.com/stable/stock/aapl/batch?types=quote,news,chart&range=1m&last=10&token=pk_bd42dc5ddd804573b2e313f99b21a0a4 

https://cloud.iexapis.com/stable/stock/msft/batch?types=quote,news,chart&range=1m&last=10&token=Tpk_6a168ccd06b041f0864e52f9cb868fa9