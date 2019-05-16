import React, { Component } from 'react';

import Display from '../../components/display/Display';
import Camera from '../../components/camera/Camera';
import Renderer from '../../components/renderer/Renderer';
import Scene from '../../components/scene/Scene';
import Model from '../../components/model/Model';

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
        this.scene = new Display();
        this.camera = new Camera( 75, this.state.width / this.state.height, 0.1, 1000, 4 );
        this.renderer = Renderer( this.state.width, this.state.height, false);
        this.mesh = new Model();

        if (this.mesh) this.scene.add(this.mesh);
        this.camera.position.z = 4;
 
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