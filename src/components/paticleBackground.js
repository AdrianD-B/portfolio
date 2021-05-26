import React from 'react';
import Particles from 'react-particles-js';
import ParticleConfig from '../config/particle-config';

const ParticleBackground = () => {
    return(
        <Particles className="background" params={ParticleConfig}></Particles>
    )
}

export default ParticleBackground;