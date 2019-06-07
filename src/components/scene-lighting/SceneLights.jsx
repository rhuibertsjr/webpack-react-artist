import { SpotLight, AmbientLight } from 'three';

export function Light(scene) {
    const spotLight = new SpotLight( 0xffffff, .8, 0, Math.PI / 2 );

    // Init
    spotLight.position.set( 1, 5, 0 );
    spotLight.target.position.set( 0, 1, 0 );
    spotLight.castShadow = true;
    spotLight.angle = 2;

    spotLight.shadow.mapSize.width = 1024;
	spotLight.shadow.mapSize.height = 1024;

    scene.add( spotLight );
    this.update = () => {

    }
}

export function Ambient(scene) {
    const ambientlight = new AmbientLight( 0x404040, 2 );

    // Init

    scene.add( ambientlight );
    this.update = () => {

    }
}