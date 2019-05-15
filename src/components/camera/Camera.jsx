import { PerspectiveCamera } from 'three';

const Camera = (fov, aspr) => {
    let camera = new PerspectiveCamera(fov, aspr, 0.1, 1000);
    return camera;
}

export default Camera;