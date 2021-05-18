import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
    <React.Fragment>
        <nav>
            <ul>
                <li>
                    <Link className="active" to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/articles">Articles</Link>
                </li>
            </ul>
        </nav>
    </React.Fragment>
)
export default NavBar;