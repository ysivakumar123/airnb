import React from 'react'
import '../App.css'

export default function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    
    return (
        <div className = "card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src = {`../images/${props.coverImg}`} className = 'card-image' alt = ""></img>
            <div className = "card-stats">
                <img src = '../images/Star.png' className = "star" alt=""></img>
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className='card-title'> {props.title} </p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}