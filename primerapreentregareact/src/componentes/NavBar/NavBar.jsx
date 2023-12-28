import React from 'react'
import './NavBar.css'
import CardWidget from '../CardWidget/CardWidget'

const NavBar = () => {
  return (
    <header>
        <h1>Clickiosco</h1>
        <nav>
            <ul>
                <li>Golosinas</li>
                <li>Bebidas</li>
                <li>Combos</li>
            </ul>
        </nav>
        <CardWidget/>
    </header>
    
  )
}

export default NavBar