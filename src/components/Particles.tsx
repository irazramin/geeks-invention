'use client'
import React from 'react';
import ParticleImage, {forces, ParticleForce, ParticleOptions, Vector} from "react-particle-image";

const particleOptions: ParticleOptions = {
    filter: ({ x, y, image }): any => {
        // Get pixel
        const pixel = image.get(x, y);
        // Make a particle for this pixel if blue > 50 (range 0-255)
        return pixel.b > 50;
    },
    color: ({ x, y, image }): any => "#61dafb"
};

const motionForce = (x: number, y: number): ParticleForce => {
    return forces.disturbance(x, y, 5);
};
const Particles = () => {
    return (
        <div>
            <ParticleImage
                src={"/y-1b2a02600dd0fc5002a8c1ee5d642597.png"}
                scale={0.75}
                entropy={20}
                maxParticles={4200}
                particleOptions={particleOptions}
            />
        </div>
    );
};

export default Particles;