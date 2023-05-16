import React from "react";
import img1 from '../img/img1.png';
import star from '../img/Red_star.png'



export default function Card() {
  return (
    <div className="card">
    <img src={img1} className="card--image" alt="img1"/>
    <div className="card--stats">
        <img src={star} className="card--star" alt="star"/>
        <span className="grey">5.0</span>
        <span className="grey">(6) • </span>
        <span className="grey">USA</span>
    </div>
    <p className="font">Life Lessons with Katie Zaferes</p>
    <p><span className="bold">From $136</span> / person</p>
</div>
  )
}