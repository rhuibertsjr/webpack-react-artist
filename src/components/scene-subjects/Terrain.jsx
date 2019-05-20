import { Mesh, PlaneBufferGeometry, MeshPhongMaterial} from 'three';

export function Terrain(scene) {
    const mesh = new Mesh(
        new PlaneBufferGeometry( 40, 40 ),
        new MeshPhongMaterial( { color: 0x999999, specular: 0x101010 } )
    ); 

    scene.add( mesh );

    this.update = () => {
        return false;
    }
}