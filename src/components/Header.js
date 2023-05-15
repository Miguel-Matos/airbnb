import React from "react";
import Logo from '../img/airbnb.png';

export default function Header() {
  return (
    <header className="App-header">
      <nav className="navbar">
        <img src={Logo} alt="airbnb logo" width={120}></img>
      </nav>
    </header>
  )
}