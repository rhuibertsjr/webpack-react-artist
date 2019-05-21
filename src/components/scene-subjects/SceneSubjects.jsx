import { Mesh, MeshBasicMaterial, BoxGeometry, PlaneBufferGeometry, Fog} from 'three';

export function Terrain(scene) {
    const mesh = new Mesh(
        new PlaneBufferGeometry(  10, 10 ),
        new MeshBasicMaterial( { color: '#242424'} )
    ); 

    mesh.rotateX( - Math.PI / 2); // !
    scene.add( mesh );

    this.update = () => {
        
    }
}

export function FogRender(scene) {
    const fog = new Fog('#242424', 0.0025, 20)
    scene.fog = fog ;

    this.update = () => {

    }
}

export function Cube(scene) {
    const mesh = new Mesh(
        new BoxGeometry( 1, 1, 1 ),
        new MeshBasicMaterial( { color: 0x999999 } )
    ); 

    scene.add( mesh );

    this.update = () => {
        mesh.position.set( 0, 1, 0 )
    }
}
