import React from 'react'
import { useLocation } from "react-router-dom";

const About = () => {
    const location = useLocation();

    return (
        <div>
             <h1>Hello {location.pathname.replace("/", '')} page</h1>
            {
                location.pathname === '/about/sunny' ? 
                    <p>Hii, Sunny Good to see you again</p> : 
                    <p>Login to see your files</p>
            }
        </div>
    )
}

export default About