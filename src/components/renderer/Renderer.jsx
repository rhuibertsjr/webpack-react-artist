import { WebGLRenderer } from 'three';

const Renderer = antialias => {
    const renderer = new WebGLRenderer({ antialias: antialias});
    return renderer;
} 

export default Renderer;