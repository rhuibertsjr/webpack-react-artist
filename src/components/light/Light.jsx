import { HemisphereLight } from 'three';

const Light = () => {
    let light = new HemisphereLight( 0x443333, 0x111122 );

    return light;
}

export default Light;