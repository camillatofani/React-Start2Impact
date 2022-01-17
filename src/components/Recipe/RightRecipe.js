import React, {Component} from 'react';

class RightRecipe extends Component {
    render() {
        return(
            <div className='col-12 col-lg-8'>
                <div className='alert alert-warning' role='alert'>Ready in {this.props.recipes.readyInMinutes} minuts</div>
                <hr />
                <div className='alert alert-secondary' role='alert' dangerouslySetInnerHTML={{ __html: this.props.recipes.summary }} />
                <hr/>
                <h4>Instruction:</h4>
                <div dangerouslySetInnerHTML={{ __html: this.props.recipes.instructions }} />
                <hr/>
                <div className='alert alert-success' role='alert'>
                    <h4>Spooncular Score: {this.props.recipes.spoonacularScore}%</h4>
                    <em><p>The <b>spoonacular score compares your recipe with all the other recipes on the site</b>. Score 100% and you\'ve achieved total recipe domination. Score 0% and you\'ve managed to upload one of the worst recipes on the site (we still love you).</p>
                    <p>Our <b>top-secret formula</b> takes into consideration price (the cheaper the better!), difficulty (the easier the better!), popularity (# of Facebook likes, Pinterest pins, spoonacular saves...), and the health score.</p>
                    <p>If you want to <b>improve your score</b>, use affordable ingredients, avoid long and exotic ingredient lists, get your friends to like/share/save your recipes, and pump up the vitamins while cutting down on sodium. See? Easy as pie.</p></em>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-valuenow={this.props.recipes.spoonacularScore} aria-valuemin="0" aria-valuemax="100" style={{ width: `${this.props.recipes.spoonacularScore}%` }}></div>
                    </div>
                </div>
            </div>
            );
        }
    }
    
    export default RightRecipe;