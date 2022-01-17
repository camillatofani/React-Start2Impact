import { Link } from 'react-router-dom';

function Footer() {
    return(
        <div className='container'>
          <footer className='d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top'>
            <p className='col-md-4 mb-0 text-muted'>© {new Date().getFullYear()} Camilla Tofani</p>
            <ul className='nav col-md-4 justify-content-end'>
              <li className='nav-item'>
                <Link to={{ pathname: '/' }}>
                  <span className='nav-link px-2 text-muted'>Home</span>
                </Link>
              </li>
            </ul>
          </footer>
        </div>
    );
}

export default Footer;