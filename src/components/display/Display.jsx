import { Scene, Color, Fog } from 'three';
import PropTypes from 'prop-types';

const Display = (backgroundColor) => {
    let scene = new Scene();
    scene.background = new Color( backgroundColor );
    scene.fog = new Fog( 0x443333, 1, 4 );

    return scene;
} 

Display.propTypes = {
    backgroundColor: PropTypes.string.isRequired
}

export default Display;