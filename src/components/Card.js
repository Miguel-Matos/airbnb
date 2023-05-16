import React from "react";
import star from '../img/Red_star.png'


export default function Card(props) {
  return (
    <div className="card">
    <img src={require(`../img/${props.image}`)} className="card--image" alt="img"/>
    <div className="card--stats">
        <img src={star} className="card--star" alt="star"/>
        <span className="grey">{props.stars}</span>
        <span className="grey">({props.reviews}) • </span>
        <span className="grey">{props.country}</span>
    </div>
    <p className="font">{props.title}</p>
    <p><span className="bold">From ${props.price}</span> / person</p>
</div>
  )
}