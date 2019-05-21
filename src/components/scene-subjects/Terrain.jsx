import { Mesh, PlaneBufferGeometry, MeshBasicMaterial} from 'three';

export function Terrain(scene) {
    const mesh = new Mesh(
        new PlaneBufferGeometry(  10, 10, 10, 10 ),
        new MeshBasicMaterial( { color: '#B22222'} )
    ); 

    // Needed for Terrain to work
    mesh.rotateX( - Math.PI / 2);
    // ====

    scene.add( mesh );

    this.update = () => {

    }
}