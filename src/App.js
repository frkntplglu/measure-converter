import React,{useState, useEffect} from 'react';

import './App.css';

function App() {
  const [amount, setAmount] = useState(0)
  const [unitOne, setUnitOne] = useState("km")
  const [unitTwo, setUnitTwo] = useState("km")
  const [result, setResult] = useState(0);

  useEffect(() => {
    handleConverter(amount);
  },[unitOne,unitTwo])

  const handleConverter = (value) => {
    console.log(value)
    
    if(unitOne === 'km'){
      if(unitTwo === 'km')
        setResult(value)
        
      else if(unitTwo === 'm')
        setResult(value * 1000)
      else if(unitTwo === 'cm')
        setResult(value * 100000)
      else if(unitTwo === 'mm')
        setResult(value * 1000000)
    }
    else if(unitOne === 'm'){
      if(unitTwo === 'm')
        setResult(value)
      else if(unitTwo === 'km')
        setResult(value / 1000)
      else if(unitTwo === 'cm')
        setResult(value * 100)
      else if(unitTwo === 'mm')
        setResult(value * 1000)
    }
    else if(unitOne === 'cm'){
      if(unitTwo === 'm')
        setResult(value / 100)
      else if(unitTwo === 'km')
        setResult(value / 100000)
      else if(unitTwo === 'cm')
        setResult(value)
      else if(unitTwo === 'mm')
        setResult(value * 10)
    }
    else if(unitOne === 'mm'){
      if(unitTwo === 'm')
        setResult(value / 1000)
      else if(unitTwo === 'km')
        setResult(value / 1000000)
      else if(unitTwo === 'cm')
        setResult(value / 10)
      else if(unitTwo === 'mm')
        setResult(value)
    }
  }

  return (
    <div className="App">
      <form>
        <div className="form-group">
          <p>Amount : </p>
          <input type="number" onChange={(e) => {
            setAmount(e.target.value);
            handleConverter(e.target.value);
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
