import React from 'react';
import Card from './Card';

const Recipes = (props) => (
    <div className='container'>
        <div className='row'>
            { props.recipes.map((recipe) => { 
                    return (
                        <Card
                        key={recipe.id}
                        recipe={recipe}
                        />
                    );
            }) }
        </div>
    </div>
)

export default Recipes;