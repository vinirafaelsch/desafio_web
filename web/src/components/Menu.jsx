import './Menu.css';
import React from 'react';

import { Link } from 'react-router-dom';

const Menu = props => (
    <div className="Menu">
        <nav>
            <ul>
                <li>
                    <Link to='/'>Início</Link>
                </li>
                <li>
                    <Link to='/login'>Login</Link>
                </li>
                <li>
                    <Link to='/compra-plano'>Compra de plano</Link>
                </li>
            </ul>
        </nav>
    </div>
);

export default Menu