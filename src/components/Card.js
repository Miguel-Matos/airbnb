import React from "react";
import star from '../img/Red_star.png'


export default function Card(props) {
  return (
    <div className="card">
      {props.info.openSpots === 0 && <div className="card--badge">SOLD OUT</div>}  
      <img src={require(`../img/${props.info.coverImg}`)} className="card--image" alt="img"/>
    <div className="card--stats">
        <img src={star} className="card--star" alt="star"/>
        <span className="grey">{props.info.stats.rating}</span>
        <span className="grey">({props.info.stats.reviewCount}) • </span>
        <span className="grey">{props.info.location}</span>
    </div>
    <p className="font">{props.info.title}</p>
    <p><span className="bold">From ${props.info.price}</span> / person</p>
</div>
  )
}