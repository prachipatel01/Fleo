import React from 'react'
import '../CSS/Moon.css';
function Moon({left,top, url, maskShadow, planetShadow}) {
    const backgroundStyle={
        background:`url(${url}) repeat-x`,
    };
    const planet={
        left:left,
        top:top,
        'box-shadow' :planetShadow,
    };
    const mask={
        'box-shadow' :maskShadow,
    }
    return (
        <div className="planet" style={planet}> 
            <div className="wrap">
                <div className="background" style={backgroundStyle}></div>
                <div className="clouds"></div>   
            </div>
            <div className="mask" style={mask}></div>
        </div>
    )
}

export default Moon;
