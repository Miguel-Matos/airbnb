import React from "react";
import Logo from '../img/airbnb.png';

export default function Header() {
  return (
    <header className="App-header">
      <nav>
        <img src={Logo} alt="airbnb logo" width={150}></img>
      </nav>
    </header>
  )
}