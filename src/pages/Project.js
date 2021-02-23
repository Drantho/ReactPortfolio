import {React, useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import data from "../data";
import Homebar from "../components/Homebar";
export default function Project() { 
    
    const {name} = useParams();

    const [project, setProject] = useState({
        name: "",
        features: [],
        technologies: [],
        image: "",
        live: "",
        github: ""
    });

    useEffect(() => {
        setProject(data.find(project => project.name === name))
    }, [])

    return (
        <div style={{margin: "100px 0"}}>
            <Homebar/>
            <h2>{project.displayName}</h2>
            <img src={project.largeImage} className="project-img"/>
            
            {project.github && <span><h3>Github: </h3><p><a href={project.github}>{project.github}</a></p></span>}
            {project.codepen && <span><h3>Codepen:</h3><p> <a href={project.codepen}>{project.codepen}</a></p></span>}
            {project.live && <span><h3>Live:</h3><p> <a href={project.live}>{project.live}</a></p></span>}
            <h3>Features</h3>
            <ul>
                {project.features.map(feature => <li key={feature}>{feature}</li>)}
            </ul>
            <h3>Technologies</h3>
            <ul>
                {project.technologies.map(technology => <li key={technology}>{technology}</li>)}
            </ul>

        </div>
    )
}
