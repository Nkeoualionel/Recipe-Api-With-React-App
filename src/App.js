import React, {useEffect, useState} from 'react';
import './App.css';

const App = () => {


  const APP_ID = "8484f0aa";
  const APP_KEY = "ae99d1a2e275002fadd18758b4416f2c";


  const [counter, setCounter] = useState(0);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipe();
  }, []);

  const getRecipe = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data);
  }

  return (
    <div className="App">
      <form className="search-form">
        <input type="text" className="search-bar"/>
        <button type="submit"
                className="search-button">Search</button>
      </form>

  <h1 onClick={() => setCounter(counter + 1)}>{counter}</h1>
    </div>
  );
}

export default App;
