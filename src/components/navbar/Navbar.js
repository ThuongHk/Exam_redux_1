import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='container-fluid navbar'>
            <ul className="nav justify-content-start bg-info text-white" >
                <li className="nav-item">
                    <Link className="nav-link text-white" to="staff">Nhan vien</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white" to="department">Phong ban</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white" to="salary">Bang luong</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;