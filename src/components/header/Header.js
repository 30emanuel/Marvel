import React, {useContext} from 'react';
import "./Headercss.css"
import { CartContext } from '../../cartContext';
import { Link } from "react-router-dom";


function Header() {
  const { items } = useContext(CartContext)
  return (
    <header>
      <Link to='/'>
        <img src="imgs/logo.png"  alt="Logo" />
      </Link>
      <Link to='/cart'>
        <button>Carrinho ({items.length})</button>
      </Link>
    </header>
  )
}

export default Header