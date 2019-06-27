import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { AnimationMixer } from 'three';

export function LoadModel(scene, gltfPath, pos = { x: 0, y: 0, z: 0, r: 0}) {

    var loader = new GLTFLoader();

    loader.load(gltfPath, function (gltf) {

        gltf.scene.receiveShadow = true;
        gltf.scene.castShadow = true;

        gltf.scene.position.set( pos.x, pos.y, pos.z );
        gltf.scene.rotation.y = pos.r;

        // if( gltf.scene.animations[ 0 ] ) {

        //     gltf.scene.mixer = new AnimationMixer( gltf.scene );
        //     gltf.scene.push(gltf.sceneobject.mixer );
        
        // }

        scene.add(gltf.scene);

    },
    
    function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

    },
    
	function ( error ) {

		console.log( 'An error happened', error );

	}
    );

    this.update = () => {

    }
}
