import React from 'react';
import './App.css';

function App() {
  function handleFormSubmit( event ) {
    event.preventDefault();
    console.log(this.state);
  }

  return (
    <div className="App">
        <form action="/predict" method="post">
          <h1>Boston House Predictor</h1>
          <p>Enter values to predict value of owner occupied homes</p>
          <label>CRIM - per capita crime rate by town</label>
          <input type="text" name="crim" placeholder="CRIM" autoFocus required />
          <input type="text" name="zn" placeholder="ZN" required />
          <input type="text" name="indus" placeholder="INDUS" required/>
          <input type="text" name="chas" placeholder="CHAS" required/>
          <input type="text" name="nox" placeholder="NOX" required/>
          <input type="text" name="rm" placeholder="RM" required/>
          <input type="text" name="age" placeholder="AGE" required/>
          <input type="text" name="dis" placeholder="DIS" required/>
          <input type="text" name="rad" placeholder="RAD" required/>
          <input type="text" name="tax" placeholder="TAX" required/>
          <input type="text" name="ptratio" placeholder="PT RATIO" required/>
          <input type="text" name="b" placeholder="B" required/>
          <input type="text" name="lstat" placeholder="L STAT" required/>
          <input type="submit" onClick={e => this.handleFormSubmit(e)} value="Predict" />
        </form>
    </div>
  );
}

export default App;
