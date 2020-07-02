import React from 'react'

let [stockName, searchStockName] = useState([]),




    handleChange = (e) => {
      searchStockName(e.target.value)
    }

    
export default function Homepage() {
  return (
    <div>
      <form>
              <input type="text" placeholder="Enter a stock ticker" value={stockName} onChange={handleChange} />
              <Link to={`/stockchoice/${stockName}`}>
                <input type="submit" value="submit" />
              </Link>
            </form>
      
    </div>
  )
}
