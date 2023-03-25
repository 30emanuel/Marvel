import React from 'react';
import "./Headercss.css"


function Header() {
  return (
    <header>
      <a href="/"><img src="imgs/logo.png"  alt="Logo" /></a>
      <button>Carrinho</button>
    </header>
  )
}

export default Header