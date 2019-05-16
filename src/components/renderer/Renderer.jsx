import { WebGLRenderer } from 'three';
import PropTypes from 'prop-types';


const Renderer = (width, height, antialias) => {
    const renderer = new WebGLRenderer({ antialias: antialias});
    renderer.setClearColor('#000000');
    renderer.setSize(width, height);

    return renderer;
}

Renderer.propTypes = {
    antialias: PropTypes.bool,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired
}

export default Renderer;