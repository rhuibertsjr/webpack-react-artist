import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Light from '../../components/light/Light';
import Display from '../../components/display/Display';
import Camera from '../../components/camera/Camera';
import Renderer from '../../components/renderer/Renderer';
import Scene from '../../components/scene/Scene';
import { Model, Plane } from '../../components/model/Model';

export default class SceneContainer
extends Component {

    constructor(props) {
        super(props);
        this.state = {
            height: this.props.height,
            width: this.props.width
        };

        this.startRenderer = this.startRenderer.bind(this);
        this.cancelRenderer = this.cancelRenderer.bind(this);
        this.animateScene = this.animateScene.bind(this);
        this.onResizeEventHandler = this.onResizeEventHandler.bind(this);
    }

    componentDidMount() {
        this.scene = new Display('#242424');
        this.camera = new Camera( 75, this.state.width / this.state.height );
        this.renderer = Renderer( this.state.width, this.state.height, false);
        this.mesh = new Model();
        this.plane = new Plane();
        this.light = new Light();

        
        if (this.light) this.scene.add(this.light);

        // this.plane.rotation.x = - Math.PI / 2;
		// this.plane.position.y = - 0.5;
		if (this.plane) this.scene.add(this.plane);

        if (this.mesh) this.scene.add(this.mesh);
        this.camera.position.x = 1.5;
        this.camera.position.y = 1.25;
        this.camera.position.z = 0;
        this.camera.lookAt(0, 0, 0);

        this.renderer.shadowMap.enabled = true;
 
        this.mount.appendChild(this.renderer.domElement);
        this.startRenderer();

        window.addEventListener('resize', this.onResizeEventHandler);
    }

    componentWillUnmount() {
        this.cancelRenderer()
        this.mount.removeChild(this.renderer.domElement)
    }

    startRenderer() {
        if (!this.frameId) this.frameId = requestAnimationFrame(this.animateScene);
    }

    cancelRenderer() {
        cancelAnimationFrame(this.frameId)
    }

    animateScene() {
        this.renderer.render(this.scene, this.camera);
        this.frameId = window.requestAnimationFrame(this.animateScene);
    }

    onResizeEventHandler() {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }


    render() {
        return ( 
            <Scene render={ (mount) => { this.mount = mount }}/>
        )
    }
}

SceneContainer.propTypes = {
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired
}