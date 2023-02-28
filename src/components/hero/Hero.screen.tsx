import React from 'react';
import { Chip, Button } from '@mui/material';
import './Hero.css';

interface Props {
    loading: boolean;
}

const HeroScreen = (props: Props) => {
    return (
        <div className="container">
            <h2>Alexio Rodrigues</h2>
            <span>
                <Chip color="primary" label="Mobile" /> <span></span>
                <Chip color="secondary" label="Frontend" /> <span></span>
                <Chip color="warning" label="Backend" /> <span></span>
                <Chip color="error" label="DevOps" /> <span></span>
            </span>
            <span>
                <Button variant="outlined">Hire Me</Button> <span></span>
                <Button variant="outlined">Portfolio</Button> <span></span>
                <Button variant="outlined">Talks and Publications</Button>
            </span>
        </div>
    )
}

export default HeroScreen;