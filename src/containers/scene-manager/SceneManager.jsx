import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { WebGLRenderer, PerspectiveCamera, Scene } from 'three';
import Terrain from '../../components/scene-objects/Terrain';

/* 
    Responsible for:
        - Creating Renderer, Scene and Camera
        - Initialize SceneSubjects ( Meshes, Models, Lighting )
        - Updating everything each frame

    This container shouldn't know about the DOM.
*/

export default class SceneManager
extends Component {

    constructor(props) {
        super(props);
        this.state = {
            aspect: this.props.width / this.props.height
        };

        this.updateSceneHandler = this.updateSceneHandler.bind(this);
        this.renderSceneHandler = this.renderSceneHandler.bind(this);
    }

    componentWillMount() {
        this.scene = new Scene();
        this.camera  = new PerspectiveCamera( 75, this.state.aspect, 1, 1000);
        this.renderer = new WebGLRenderer();
        this.objects = createSceneObject(this.scene);
    }

    updateSceneHandler() {
        for ( let i = 0; i < this.sceneObject.length; i++) {
            sceneObject[i].update();
        }

        this.renderer.render( this.scene, this.camera);
    }

    renderSceneHandler() {
        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(this.renderSceneHandler);
    }

    createSceneObject(scene) {
        const sceneObject = [
            new Terrain(scene)
        ];

        return sceneObject;
    }

    render() {
        requestAnimationFrame(this.render);
        updateSceneHandler();
        return <div ref={ (mount) => { this.mount = mount } }></div>
    }

}

SceneManager.propTypes = {
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired
}