import React,{useState, useEffect} from 'react';

import './App.css';

function App() {
  const [amount, setAmount] = useState(0)
  const [unitOne, setUnitOne] = useState("km")
  const [unitTwo, setUnitTwo] = useState("km")
  const [result, setResult] = useState(0);

  useEffect(() => {
    handleConverter();
  })

  const handleConverter = (value) => {
    console.log(value)
    
    if(unitOne === 'km'){
      if(unitTwo === 'km')
        setResult(amount)
        
      else if(unitTwo === 'm')
        setResult(amount * 1000)
      else if(unitTwo === 'cm')
        setResult(amount * 100000)
      else if(unitTwo === 'mm')
        setResult(amount * 1000000)
    }
    else if(unitOne === 'm'){
      if(unitTwo === 'm')
        setResult(amount)
      else if(unitTwo === 'km')
        setResult(amount / 1000)
      else if(unitTwo === 'cm')
        setResult(amount * 100)
      else if(unitTwo === 'mm')
        setResult(amount * 1000)
    }
    else if(unitOne === 'cm'){
      if(unitTwo === 'm')
        setResult(amount / 100)
      else if(unitTwo === 'km')
        setResult(amount / 100000)
      else if(unitTwo === 'cm')
        setResult(amount)
      else if(unitTwo === 'mm')
        setResult(amount * 10)
    }
    else if(unitOne === 'mm'){
      if(unitTwo === 'm')
        setResult(amount / 1000)
      else if(unitTwo === 'km')
        setResult(amount / 1000000)
      else if(unitTwo === 'cm')
        setResult(amount / 10)
      else if(unitTwo === 'mm')
        setResult(amount)
    }
  }

  return (
    <div className="App">
      <form>
        <div className="form-group">
          <p>Amount : </p>
          <input type="number" onChange={(e) => {
            setAmount(e.target.value);
          }} value={amount} />
        </div>
        <div className="form-group">
          <span>From </span>
          <select onChange={(e) => setUnitOne(e.target.value)}>
            <option value="km">Kilometer</option>
            <option value="m">Meter</option>
            
            <option value="cm">Centimeter</option>
            <option value="mm">Milimeter</option>
          </select>
          <span>To </span>
          <select onChange={(e) => setUnitTwo(e.target.value)}>
          <option value="km">Kilometer</option>
            <option value="m">Meter</option>
            
            <option value="cm">Centimeter</option>
            <option value="mm">Milimeter</option>
          </select>

        </div>
      </form>
      <div id="result">Result : {result}</div>
    </div>
  );
}

export default App;
