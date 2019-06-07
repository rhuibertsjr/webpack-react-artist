import React, { Component } from 'react';
import { WebGLRenderer, PerspectiveCamera, Scene, Fog, PCFSoftShadowMap } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// import SceneLoader from '../../components/scene-loader/SceneLoader';
import SceneRenderer from '../../components/scene-renderer/SceneRenderer';

import { Terrain, Cube } from '../../components/scene-subjects/SceneSubjects';
import { Light, Ambient } from '../../components/scene-lighting/SceneLights';

export default class SceneManager
extends Component {

    constructor(props) {
        super(props);
        this.state = {
            aspect: this.props.width / this.props.height,
            height: this.props.height,
            width: this.props.width
        };

        this.componentStartRender = this.componentStartRender.bind(this);
        this.componentAddSubjects = this.componentAddSubjects.bind(this);
        this.componentLoadSubjects = this.componentLoadSubjects.bind(this);
        this.componentOnResize = this.componentOnResize.bind(this);
    }

    componentDidMount() {
        // Initialize Scene
        this.scene = new Scene();
        this.scene.fog = new Fog( '#ffffff', 5, 10 );

        // Initialize Camera
        this.camera = new PerspectiveCamera( 75, this.state.aspect, 1, 1000);
        this.camera.position.set(1,3.5,2.5); 
        this.camera.lookAt(this.scene.position);
        this.scene.add(this.camera);

        // Initialize Renderer
        this.renderer = new WebGLRenderer({ antialias: true });
        this.renderer.setClearColor('#000000');
        this.renderer.setPixelRatio( window.devicePixelRatio );
        this.renderer.setSize(this.state.width, this.state.height);
        this.renderer.gammaInput = true;
		this.renderer.gammaOutput = true;
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = PCFSoftShadowMap;
        
        // Initialize Controls
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);

        console.log(this.controls)

        // Start Renderer
        this.componentLoadSubjects();
        this.mount.appendChild(this.renderer.domElement);
        this.controls.update();
        this.componentStartRender();

        // Event Listeners
        window.addEventListener('resize', this.componentOnResize, false);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.componentOnResize, true);
    }

    componentAddSubjects() {
        const sceneSubjects = [
            new Light(this.scene),
            new Ambient(this.scene),
            new Terrain(this.scene),
            new Cube(this.scene)
        ];

        return sceneSubjects;   
    }

    componentLoadSubjects() {
        this.sceneSubjects = this.componentAddSubjects();
        for ( let i = 0; i < this.sceneSubjects.length; i++ ) {
            this.sceneSubjects[i].update(this.scene);
        }

        // Start Rendering
        this.renderer.render(this.scene, this.camera);
    }

    componentStartRender() {
        this.controls.update();
        requestAnimationFrame( this.componentStartRender );
        this.renderer.render(this.scene, this.camera);

    }

    componentOnResize() {
        this.renderer.setSize(window.innerWidth, window.innerHeight, true);
        this.camera.updateProjectionMatrix();
        this.camera.aspect = window.innerWidth / window.innerHeight;
    }

    render() {
        return <SceneRenderer render={ (mount) => { this.mount = mount } }></SceneRenderer>
    }

}