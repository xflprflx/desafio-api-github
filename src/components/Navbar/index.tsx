import { NavLink } from 'react-router-dom';
import './styles.css';

function Navbar(){
    return(
        <header className="bg-primary">
            <div className="container d-flex align-items-center header-logo">
                <NavLink to="/">
                    <h4>Github API</h4>
                </NavLink>
            </div>
        </header>
    );
}

export default Navbar;