import { WebGLRenderer } from 'three';

const Renderer = (width, height, antialias) => {
    const renderer = new WebGLRenderer({ antialias: antialias});
    renderer.setClearColor('#000000');
    renderer.setSize(width, height);

    return renderer;
}

export default Renderer;