import { BoxGeometry, MeshBasicMaterial, Mesh, PlaneBufferGeometry, MeshPhongMaterial} from 'three';

export const Model = () => {
    let geometry = new BoxGeometry( 1, 1, 1 );
    let material = new MeshBasicMaterial( { color: 0x999999 } );
    let cube = new Mesh( geometry, material );

    return cube;
}

export const Plane = () => {
    let plane = new Mesh(
        new PlaneBufferGeometry( 40, 40 ),
        new MeshPhongMaterial( { color: 0x999999, specular: 0x101010 } )
    );

    return plane;
}