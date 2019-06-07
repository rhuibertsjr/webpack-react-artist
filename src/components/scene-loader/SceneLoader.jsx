import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export function LoadModel( scene ) {

    let loader = GLTFLoader();

    loader.load('../../assets/models/**MODELHERE**', function( gltf ) {
            scene.add( gltf.scene );
        },

        // Error while Loading
        function ( xhr ) {
            console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        },

        // Error while Rendering
        function ( error ) {
            console.log( 'An error happened' );
        }
    );

    scene.add( bus.frame );
    this.update = () => {
        
    }
}