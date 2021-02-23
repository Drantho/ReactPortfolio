import React from 'react'
import { Link } from 'react-router-dom'

export default function ProjectThumb(props) {
    return (
        <div className="portfolio-item">
            <Link to={`/project/${props.name}`}>
                <img src={props.image} className="portfolio-item-img" alt={`${props.displayName}  loading="lazy" screen shot`} title={props.displayName}/>
            </Link>            
        </div>
    )
}
