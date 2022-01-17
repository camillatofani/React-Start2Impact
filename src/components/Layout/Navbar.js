import { Link } from 'react-router-dom';
import image from '../../img/vegetaria-recipes.svg';

function Navbar() {
    return (
        <>
        <nav className='navbar navbar-dark bg-success'>
            <div className='container-fluid'>
                    <Link to={{ pathname: '/' }}>
                            <span className='navbar-brand'>Vegetarian RECIPES <img src={image} /></span>
                    </Link>
                    <span className="navbar-text">
                        Start2Impact project of React
                    </span>
            </div>
        </nav>
        </>
    )
}

export default Navbar;