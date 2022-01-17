import React, { Component } from 'react';
import Form from './components/Search/Form';
import Recipes from './components/Home/Recipes';

class App extends Component {
  state = {
    recipes: []
  }
  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const apiCall = await fetch(`https://api.spoonacular.com/recipes/complexSearch?diet=vegetarian&query=${recipeName}&addRecipeInformation=true&number=21&apiKey=${process.env.REACT_APP_APY_KEY}`);
    const data = await apiCall.json();
    this.setState({ recipes: data.results });
  }
  render() {
    return (
      <>
        <div className='container'>
          <div className='row'>
            <div className='text-center'>
              <h3>Dinner scheduled?</h3>
              <p>Search in the form your preferit ingredient!</p>
              <Form getRecipe={this.getRecipe} />
              <Recipes recipes={this.state.recipes} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;