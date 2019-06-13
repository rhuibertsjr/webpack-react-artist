import { GLTFLoader, Mesh } from 'three/examples/jsm/loaders/GLTFLoader.js';
import gltfPath from '../../assets/models/easel.gltf';

export function LoadModel(scene) {

    var loader = new GLTFLoader();

    loader.load(gltfPath, function (gltf) {

        scene.add(gltf.scene);

    }, undefined, function (error) {

        console.error(error);

    });

    this.update = () => {

    }
}