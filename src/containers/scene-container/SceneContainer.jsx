import React, { Component } from 'react';

import Display from '../../components/display/Display';
import Camera from '../../components/camera/Camera';
import Renderer from '../../components/renderer/Renderer';

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
    }

    componentDidMount() {
        this.scene = new Display();
        this.camera = new Camera( 75, this.state.width / this.state.height, 0.1, 1000, 4 );
        this.renderer = new Renderer( this.state.width, this.state.height,true );

        this.mount.appendChild(this.renderer.domElement);
        this.startRenderer();
    }

    componentWillUnmount() {
        this.stop()
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

    render() {
        return ( 
            <div className="template" ref = { (mount) => { this.mount = mount } }/>
        )
    }
}