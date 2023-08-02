import logo from '.././logo.png';
import { useState } from 'react';
import '.././App.css';

function CameraIm() {
    return(
        <div> 
            <img src={logo} className="Camera-image" alt="IM"/>
        </div>
        
    );
}

export default CameraIm;