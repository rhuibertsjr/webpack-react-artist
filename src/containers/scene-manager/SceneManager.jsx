import React, { Component } from 'react';
import { WebGLRenderer, PerspectiveCamera, Scene } from 'three';

import SceneRenderer from '../../components/scene-renderer/Scene';
import { Terrain } from '../../components/scene-subjects/Terrain';

export default class SceneManager
extends Component {

    constructor(props) {
        super(props);
        this.state = {
            aspect: this.props.width / this.props.height,
            height: this.props.height,
            width: this.props.width
        };

        this.componentAddSubjects = this.componentAddSubjects.bind(this);
        this.componentLoadSubjects = this.componentLoadSubjects.bind(this);
        this.componentOnResize = this.componentOnResize.bind(this);
    }

    componentDidMount() {
        // Initialize Scene + Camera
        this.scene = new Scene();
        this.camera  = new PerspectiveCamera( 75, this.state.aspect, 1, 1000);

        // Initialize Renderer
        this.renderer = new WebGLRenderer({ antialias: true });
        this.renderer.setClearColor('#000000');
        this.renderer.setSize(this.state.width, this.state.height);

        // Start Renderer
        this.componentLoadSubjects();
        this.mount.appendChild(this.renderer.domElement);

        // Event Listeners
        window.addEventListener('resize', this.componentOnResize, true);
    }

    componentAddSubjects() {
        const sceneSubjects = [
            new Terrain(this.scene)
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
        requestAnimationFrame( this.componentLoadSubjects );
    }

    componentOnResize() {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    render() {
        return <SceneRenderer render={ (mount) => { this.mount = mount } }></SceneRenderer>
    }

}