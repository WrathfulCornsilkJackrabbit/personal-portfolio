import Button from '@mui/material/Button';
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
            <span><Button variant="outlined">Portfolio</Button> <Button variant="outlined">Hire Me</Button></span>
        </div>
    )
}

export default HeroScreen;