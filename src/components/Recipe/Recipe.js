import React, {Component} from 'react';
import LeftRecipe from './LeftRecipe';
import RightRecipe from './RightRecipe';

class Recipe extends Component {
    state = {
        recipes: []
    }
    async componentDidMount() {
        var currentLocation = window.location.pathname.slice(8);
        const recipeCall = await fetch(`https://api.spoonacular.com/recipes/${currentLocation}/information?includeNutrition=true&apiKey=${process.env.REACT_APP_APY_KEY}`);
        const recipeData = await recipeCall.json();
        this.setState({ recipes: recipeData });
        console.log(this.state.recipes);
    }
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <h2>{this.state.recipes.title}</h2>
                        <LeftRecipe recipes={this.state.recipes}/>
                        <RightRecipe recipes={this.state.recipes} />
                    </div>
                </div>
            </div>
        );
    }
};

export default Recipe;