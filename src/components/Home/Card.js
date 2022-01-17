import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Card extends Component {
    render() {
        return(
            <div className='col-md-4' style={{ marginBottom: '20px', }} key={ this.props.recipe.id }>
                <div className='card'>
                    <img
                        src={ this.props.recipe.image }
                        className='card-img-top'
                        alt={ this.props.recipe.title } />
                    <div className='card-body'>
                        <h5 className='card-title'>
                            { this.props.recipe.title }
                        </h5>
                        <Link to={{
                            pathname: `/recipe/${ this.props.recipe.id }`
                        }}>
                             <button className='btn btn-outline-success'>
                                Go to the recipe
                            </button>
                        </Link>
                        <p>{ this.props.recipe.glutenFree == true ? <div className='gluten'>GLUTEN FREE</div> : false }</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;