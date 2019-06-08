import { Mesh, BoxGeometry, PlaneBufferGeometry, MeshPhongMaterial } from 'three';

export function Terrain(scene) {

    const material = new MeshPhongMaterial( { color: '#282828'} );
    material.reflectivity = 0;
    material.shininess = 0.2;

    const mesh = new Mesh(
        new PlaneBufferGeometry(  20, 20 ),
        material
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
    mesh.position.set( 0, .5, 0 )
    mesh.receiveShadow = true;
    mesh.castShadow = true;

    scene.add( mesh );
    this.update = () => {
        
    }
}
