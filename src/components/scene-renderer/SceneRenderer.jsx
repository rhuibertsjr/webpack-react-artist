import React from 'react';
import WEBGL from '../../utils/available';

const SceneRenderer = props => {

    if ( WEBGL.isWebGLAvailable() ) {
        return <div className="app-renderer" ref={ props.render } ></div>
    } else {
        let warning = WEBGL.getWebGLErrorMessage();
    }
    
}

export default SceneRenderer;