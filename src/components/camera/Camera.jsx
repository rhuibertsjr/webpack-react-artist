import { PerspectiveCamera } from 'three';

const Camera = (fov, aspr, position) => {
    let camera = new PerspectiveCamera(fov, aspr, 0.1, 1000);
    camera.position.z = position;
    return camera;
}

export default Camera;