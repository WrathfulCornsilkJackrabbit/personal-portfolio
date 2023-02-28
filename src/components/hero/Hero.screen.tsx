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
                <Chip color="primary" label="Mobile" />
                <Chip color="secondary" label="Frontend" />
                <Chip color="warning" label="Backend" />
                <Chip color="error" label="DevOps" />
            </span>
            <span><Button variant="outlined">Portfolio</Button> <Button variant="outlined">Hire Me</Button></span>
        </div>
    )
}

export default HeroScreen;