import React from 'react'

export default function Panel(props) {
    return (
        <div name={props.name} className={`panel${props.classNames.map(name => " " + name)}`} id={props.id}>            
            {props.children}
        </div>
    )
}
