import React from 'react'
import Panel from '../components/Panel'
import ProjectThumb from '../components/ProjectThumb';
import Spacer from '../components/Spacer'
import data from "../data";
import Navbar from "../components/Navbar"
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

export default function Home() {

    const handleDragStart = (e) => e.preventDefault();

    const items = data.map(element => <img key={element.name} 
        src={element.largeImage} 
        onDragStart={handleDragStart} 
        // style={{width: "100%"}}
        />)
    
    // [
    //     <img src="path-to-img" onDragStart={handleDragStart} />,
    //     <img src="path-to-img" onDragStart={handleDragStart} />,
    //     <img src="path-to-img" onDragStart={handleDragStart} />,
    // ];

    return (
        <div>
            <Navbar />
            <Spacer id="intro" />
            <Panel name="intro" classNames={["intro"]}>
                <img src="https://res.cloudinary.com/drantho/image/upload/c_fill,w_300/v1614077809/me_fvjfec.jpg" className="portrait" />

                <div className="intro-text">
                    <p>
                        My name is Anthony and I build websites that
                            <span className="verb">
                            <span id="move">move</span>
                            <span id="create">create</span>
                            <span id="calculate">calculate</span>
                            <span id="work">work</span>
                            <span id="elipses">...</span>
                        </span>
                    </p>
                </div>

            </Panel>

            <AliceCarousel mouseTracking items={items} />

            <Spacer id="portfolio" />
            <Panel classNames={["portfolio"]}>

                <h2>Portfolio</h2>

                <div className="portfolio-wrapper">

                    {data.map(item => <ProjectThumb key={item.name} name={item.name} displayName={item.displayName} image={item.image} />)}

                </div>
            </Panel>
            <Spacer id="about" />
            <Panel classNames={[]}>
                <h2>About</h2>
                <div className="about-wrapper">

                    <p>
                        My name is Anthony Mitchell and I am a full-stack web developer. I create functional and stylish web apps from the ground up using the C#/.NET stack and the MERN stack. I am currently available to take on projects. See my portfolio for examples of my work. Please contact me with your questions.
                    </p>
                    <div>
                        <h3>Technologies</h3>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>SASS</li>
                            <li>Javascript</li>
                            <li>JQuery</li>
                            <li>D3</li>
                            <li>Bootstrap</li>
                            <li>Materialize</li>
                            <li>C#</li>
                            <li>Blazor</li>
                            <li>SQL</li>
                            <li>Mongo</li>
                            <li>Express</li>
                            <li>React</li>
                            <li>Node</li>
                            <li>Handlebars</li>
                        </ul>
                    </div>
                </div>
            </Panel>
            <Spacer id="contact" />
            <Panel classNames={[]}>
                <h2>Contact</h2>
                <ul id="contact-ul">
                    <li>
                        <a href="mailto:mitchellanthonyd@gmail.com">
                            <i className="fas fa-envelope-square fa-8x"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Drantho">
                            <i className="fab fa-github-square fa-8x"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/drantho">
                            <i className="fab fa-linkedin fa-8x"></i>
                        </a>
                    </li>
                </ul>
            </Panel>

        </div>
    )
}
