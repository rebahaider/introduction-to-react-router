import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <h1>Welcome To My Website</h1><br />
            <nav className='.user nav.a'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact Us</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/posts">Posts</NavLink>
            </nav>
        </div>
    );
};

export default Header;