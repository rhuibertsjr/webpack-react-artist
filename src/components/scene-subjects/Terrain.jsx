import { Mesh, MeshBasicMaterial, PlaneBufferGeometry } from 'three';
import * as THREE from 'three';

export function Terrain(scene) {
    const mesh = new Mesh(
        new THREE.PlaneBufferGeometry( 1, 1, 1 ),
        new MeshBasicMaterial( { color: 0xffff00 } )
    ); 

    scene.add( mesh );

    this.update = () => {

    }
}