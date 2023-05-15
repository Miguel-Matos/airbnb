import React from "react";
import image from '../img/hero.png'

export default function Hero() {
  return (
    <>
    <div className="heroBox">
      <img className="hero" src={image} alt="hero" />
    </div>
    <div>
      <h1 id="online">Online Experiences</h1>
      <p id="description">Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
    </div>
    </>
  )
}