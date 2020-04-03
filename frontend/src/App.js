import React from 'react';
import './App.css';


function App() {

  function handleFormSubmit( event ) {
    event.preventDefault();
    console.log(this.state);
  }
  
  function handleChange(event) {
    this.setState({value: event.target.value});
  }

  return (
    <div className="App">
        <form action="/predict" method="post">
          <h1>Boston House Predictor</h1>
          <p>Enter values to predict value of owner occupied homes</p>
          <label>CRIM - per capita crime rate by town
          <input type="text" name="crim" placeholder="CRIM" autoFocus value="0" onChange={e => handleChange(e)} />
          </label>
          <input type="text" name="zn" placeholder="ZN" value="0" />
          <input type="text" name="indus" placeholder="INDUS" value="0"/>
          <input type="text" name="chas" placeholder="CHAS" value="0"/>
          <input type="text" name="nox" placeholder="NOX" value="0"/>
          <input type="text" name="rm" placeholder="RM" value="0"/>
          <input type="text" name="age" placeholder="AGE" value="0"/>
          <input type="text" name="dis" placeholder="DIS" value="0"/>
          <input type="text" name="rad" placeholder="RAD" value="0"/>
          <input type="text" name="tax" placeholder="TAX" value="0"/>
          <input type="text" name="ptratio" placeholder="PT RATIO" value="0"/>
          <input type="text" name="b" placeholder="B" value="0"/>
          <input type="text" name="lstat" placeholder="L STAT" value="0"/>
          <input type="submit" onClick={e => handleFormSubmit(e)} value="Predict" />
        </form>
    </div>
  );
}

export default App;
