import React from 'react'
import { useLocation } from "react-router-dom";

const Index = () => {
    const location = useLocation();
    console.log(location);
    
    return (
        <div>
             <h1>Hello {location.pathname.replace("/", '')} page</h1>
        </div>
    )
}

export default Index