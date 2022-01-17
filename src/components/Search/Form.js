import React from 'react';

const Form = (props) => (
    <form onSubmit={props.getRecipe} className='row justify-content-md-center'>
        <div className='col-2'></div>
        <div className='col-6'>
                <input type='text' className='form-control' name='recipeName'/>
        </div>
        <div className='col-2'>
                <div className="d-grid">
                        <button className='btn btn-success'>Search</button>
                </div>
        </div>
        <div className='col-2'></div>
    </form>
);

export default Form;