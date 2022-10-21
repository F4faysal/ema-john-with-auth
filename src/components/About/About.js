import React, { useContext } from 'react';
import { AuthContext } from '../contex/UseContaxe';

const About = () => {
    const {user } = useContext(AuthContext)
    return (
        <div>
            <p>{user?.email}</p>
        </div>
    );
};

export default About;