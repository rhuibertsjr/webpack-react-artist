import { Mesh, BoxGeometry, PlaneBufferGeometry, MeshPhongMaterial } from 'three';

export function Terrain(scene) {
    const mesh = new Mesh(
        new PlaneBufferGeometry(  100, 100 ),
        new MeshPhongMaterial( { color: '#242424'} )
    ); 

    // Init
    mesh.receiveShadow = true;
    mesh.rotateX( - Math.PI / 2); // !

    scene.add( mesh );
    this.update = () => {
        
    }
}

export function Cube(scene) {
    const mesh = new Mesh(
        new BoxGeometry( 1, 1, 1 ),
        new MeshPhongMaterial( { color: 0x999999 } )
    ); 

    // Init
    mesh.position.set( 0, 1, 0 )
    mesh.receiveShadow = true;
    mesh.castShadow = true;

    scene.add( mesh );
    this.update = () => {
        
    }
}
