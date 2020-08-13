import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe'

const App = () => {


  const APP_ID = "8484f0aa";
  const APP_KEY = "ae99d1a2e275002fadd18758b4416f2c";


  const [counter, setCounter] = useState(0);
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipe();
  }, [query]);

  const getRecipe = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }


  const updateSearch = event => {
      setSearch(event.target.value)
  }

  const getSearchQuery = event => {
    event.preventDefault();
    setQuery(search)
}

  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearchQuery}>
        <input type="text" className="search-bar" value={search} onChange={updateSearch}/>
        <button type="submit"
                className="search-button">Search movie</button>
      </form>

        <div className="recipes">
      {recipes.map(recipe => (

          <Recipe
                key={recipe.recipe.label}
                title={recipe.recipe.label}
                calories={recipe.recipe.calories}
                image={recipe.recipe.image}
                source={recipe.recipe.source}
                ingredients={recipe.recipe.ingredients}/>

      ))}
        </div>
    </div>
  );
}

export default App;
