import { useState } from 'react'
import './App.css'
import { currencyConverter } from './api/PostApi'

function App() {
  const[amount,setAmount] = useState(1)
  const[fromCurrency,setFromCurrency] = useState("USD")
  const[toCurrency,setToCurrency] = useState("INR")
  const[convertedAmount,setConvertedAmount] = useState(null)
  const[loading,setLoading] = useState(false)
  const[error,setError] = useState(null)

  const handleConvertCurrency = async()=> {
    try {
    const res = await currencyConverter(fromCurrency, toCurrency, amount)
    // const data = await res.json()
    console.log(res.data);
    const {conversion_result} = res.data
    setLoading(false)
    setConvertedAmount(conversion_result)
    } catch (error) {
      setError("Error fetching conversion rate")
      console.log(error);
    }
  }

  return (
    <section className='currency-converter'>
      <div className="currency-div">
        <h1>Currency converter</h1>
        <div>
          <label htmlFor="currency_amount">Amount :
          <input type="number" id='currency_amount' value={amount} onChange={(e)=>setAmount(e.target.value)} />
          </label>
        </div>
        <div className="currency-selector">
          <div>
            <label htmlFor="">From :
            <select value={fromCurrency} onChange={(e)=>setFromCurrency(e.target.value)}>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="INR">INR</option>
              <option value="GBP">GBP</option>
              <option value="AUD">AUD</option>
            </select>
            </label>
          </div>
          <div>
            <label htmlFor="">To :
            <select value={toCurrency} onChange={(e)=>setToCurrency(e.target.value)}>
              <option value="AUD">AUD</option>
              <option value="GBP">GBP</option>
              <option value="INR">INR</option>
              <option value="EUR">EUR</option>
              <option value="USD">USD</option>
            </select>
            </label>
          </div>
        </div>

        <button disabled={loading || amount <= 0} onClick={handleConvertCurrency} >
          {loading?"Converting":"convert"}
        </button>
        <hr />
        {
        convertedAmount && (
          <div>
            <h2>
              {amount} {fromCurrency} = {convertedAmount.toFixed(2)}
              {toCurrency}
            </h2>
          </div>
        )
      }
      {error && <p>{error}</p> }
      </div>
      <hr />
      
    </section>
  )
}

export default App