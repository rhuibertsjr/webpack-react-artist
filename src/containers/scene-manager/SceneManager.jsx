import React, { Component } from 'react';
import { WebGLRenderer, PerspectiveCamera, Scene } from 'three';

import SceneRenderer from '../../components/scene-renderer/Scene';
import { Terrain } from '../../components/scene-subjects/Terrain';
import { Cube } from '../../components/scene-subjects/Cube';


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

        // Initialize Camera
        this.camera  = new PerspectiveCamera( 75, this.state.aspect, 1, 1000);
        this.camera.position.set(0,100,0); 
        this.camera.lookAt(this.scene.position);

        // Initialize Renderer
        this.renderer = new WebGLRenderer({ antialias: true });
        this.renderer.setClearColor('#000000');
        this.renderer.setSize(this.state.width, this.state.height);

        // Start Renderer
        this.componentLoadSubjects();
        this.mount.appendChild(this.renderer.domElement);

        // Event Listeners
        window.addEventListener('resize', this.componentOnResize, false);
    }

    componentAddSubjects() {
        const sceneSubjects = [
            new Terrain(this.scene)
        ];

        return sceneSubjects;
    }

    componentLoadSubjects() {
        this.sceneSubjects = this.componentAddSubjects();
        console.log(this.scene)
        for ( let i = 0; i < this.sceneSubjects.length; i++ ) {
            this.sceneSubjects[i].update(this.scene);
        }

        // Start Rendering
        this.renderer.render(this.scene, this.camera);
    }

    componentStartRender() {
        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame( this.componentStartRender );
    }

    componentOnResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();

        this.renderer.setSize(window.innerWidth, window.innerHeight, true);
    }

    render() {
        return <SceneRenderer render={ (mount) => { this.mount = mount } }></SceneRenderer>
    }

}