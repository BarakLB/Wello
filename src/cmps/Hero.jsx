// import home from 

import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section className="main-layout hero-container flex">
            <div className="hero-txt flex col justify-center">
                <h1>Welcome Guest</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda similique est officiis commodi, quas, repellendus, incidunt nemo fugit sint veritatis quam eaque. Sed voluptatem explicabo iusto, est exercitationem dolor non!</p>
               
                <Link className="clean-link hero-btn" to="/app">Hop in</Link>
            </div>

            <div className="hero-img">
                <img src="/home.svg" alt="" />
            </div>

        </section>
       
    );
};

export default Hero;