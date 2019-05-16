import { PerspectiveCamera } from 'three';
import PropTypes from 'prop-types';


const Camera = (fov, aspr) => {
    let camera = new PerspectiveCamera(fov, aspr, 0.1, 1000);
    return camera;
}

Camera.propTypes = {
    fov: PropTypes.number.isRequired,
    aspr: PropTypes.number.isRequired,
}

export default Camera;