import React, { useState } from 'react';
import HeroScreen from './Hero.screen';

const HeroComponent = () => {
    const [loading, setLoading] = useState<boolean>(false);

    return (
        <>
            <HeroScreen loading={loading} />
        </>
    )
}

export default HeroComponent;