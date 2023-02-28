import React from 'react';
import './Hero.css';

interface Props {
    loading: boolean;
}

const HeroScreen = (props: Props) => {
    return (
        <div className="container">
            <h2>Alexio Rodrigues</h2>
            <h4>Mobile, Frontend, Backend</h4>
            <span><button>Portfolio</button> <button>Hire Me</button></span>
        </div>
    )
}

export default HeroScreen;