import { BoxGeometry, MeshBasicMaterial, Mesh } from 'three';

const Model = () => {
    var geometry = new BoxGeometry( 1, 1, 1 );
    var material = new MeshBasicMaterial( { color: 0x00ff00 } );
    var cube = new Mesh( geometry, material );

    return cube;
}

export default Model;