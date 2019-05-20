import React, { Component } from 'react';
import { WebGLRenderer, PerspectiveCamera, Scene } from 'three';
import { Terrain } from '../../components/scene-subjects/Terrain';

export default class SceneManager
extends Component {

    constructor(props) {
        super(props);
        this.state = {
            aspect: this.props.width / this.props.height
        }

        this.componentStartRender = this.componentStartRender.bind(this)
        this.componentAddSubjects = this.componentAddSubjects.bind(this)
    }

    componentDidMount() {
        this.scene = new Scene();
        this.camera  = new PerspectiveCamera( 75, this.state.aspect, 1, 1000);
        this.renderer = new WebGLRenderer();

        this.componentAddSubjects();

        this.mount.appendChild(this.renderer.domElement);
    }

    componentAddSubjects() {
        this.sceneSubjects = [
            new Terrain(this.scene)
        ];

        return this.sceneSubjects;
    }

    componentLoadSubjects() {
        this.sceneSubjects = componentAddSubjects();
        for ( let i = 0; i < this.sceneSubjects.length; i++ ) {
            this.sceneSubjects[i].update();
        }

        this.renderer.render(this.scene, this.camera);
    }

    componentStartRender() {
        this.renderer.render( this.scene, this.camera );
        requestAnimationFrame( this.componentStartRender );
    }

    render() {
        return <div style={{ width: '400px', height: '400px' }} ref={ (mount) => { this.mount = mount } }></div>
    }

}