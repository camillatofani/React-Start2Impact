import React, {Component} from 'react';

class LeftRecipe extends Component {
    render() {
        return(
            <div className='col-12 col-lg-4'>
                <img className='imgRecipe' src={this.props.recipes.image} alt={this.props.recipes.title} />
                <hr/>
                <h4>Important things to know:</h4>
                <p>{ this.props.recipes.vegan == true ? 'VEGAN' : false }</p>
                <p>{ this.props.recipes.glutenFree == true ? <div className='glutenRecipe'>GLUTEN FREE</div> : false }</p>
                <p>{ this.props.recipes.dairyFree == true ? 'DAIRY FREE' : false }</p>
                <p>{ this.props.recipes.veryHealthy == true ? 'VERY HEALTY' : false }</p>
                <p>{ this.props.recipes.cheap == true ? 'CHEAP' : false }</p>
                <p>{ this.props.recipes.veryPopular == true ? 'VERY POPULAR' : false }</p>
                <p>{ this.props.recipes.sustainable == true ? 'SUSTAINABLE' : false }</p>
                <p><a href={this.props.recipes.sourceUrl} target='_blank'><button className='btn btn-outline-success'>Source of recipe</button></a></p>
            </div>
        );
    }
}

export default LeftRecipe;