import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export function LoadModel(scene, gltfPath, pos = { x: 0, y: 0, z: 0, r: 0}) {

    var loader = new GLTFLoader();

    loader.load(gltfPath, function (gltf) {

        gltf.scene.receiveShadow = true;
        gltf.scene.castShadow = true;

        gltf.scene.position.set( pos.x, pos.y, pos.z );
        gltf.scene.rotation.y = pos.r;


        scene.add(gltf.scene);

    }, undefined, function (error) {

        console.error(error);

    });

    this.update = () => {

    }
}