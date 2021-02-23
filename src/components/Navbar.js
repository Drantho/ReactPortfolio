import React from 'react'
import {useLocation, Link} from "react-router-dom";

export default function Navbar() {
    
    const location = useLocation();

    return (
        <nav>
            <ul>
                <li>
                    <a href="#intro">
                        Intro
                    </a>
                </li>
                <li>
                    <a href="#portfolio">
                        Portfolio
                    </a>
                </li>
                <li>
                    <a href="#about">
                        About
            </a>
                </li>
                <li>
                    <a href="#contact">
                        Contact
          </a>
                </li>
            </ul>
        </nav>

    )
}
