import React from 'react';
import './Header.css';

function Header() {
    return (
        <ul className='Header'>
            <li className='Logo'>Logo</li>
            <li className='Title'>Titulo</li>
            <li className='About'>About</li>
        </ul>
    )
}

export { Header };