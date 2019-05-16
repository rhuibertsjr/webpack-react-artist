import React from 'react'
import WEBGL from '../../utils/available';

const Scene = props => {

    if ( WEBGL.isWebGLAvailable() ) {
        return <div className="app-renderer" ref={ props.render }/>
    } else {
        var warning = WEBGL.getWebGLErrorMessage();
        console.log(warning);
    }
    
}

export default Scene;