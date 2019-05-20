import { Mesh, MeshBasicMaterial, BoxGeometry} from 'three';

export function Cube(scene) {
    const mesh = new Mesh(
        new BoxGeometry( 1, 1, 1 ),
        new MeshBasicMaterial( { color: 0x999999 } )
    ); 

    scene.add( mesh );

    this.update = () => {

    }
}