import React, { Component } from 'react';
import * as THREE from 'three';

import Display from '../../components/display/Display';
import Camera from '../../components/camera/Camera';
import Renderer from '../../components/renderer/Renderer';

class SceneContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            height: this.props.height,
            width: this.props.width
        }

        this.start = this.start.bind(this)
        this.animate = this.animate.bind(this)
    }

    componentDidMount() {
        this.scene = new Display()
        this.camera = new Camera( 75, this.state.width / this.state.height, 0.1, 1000 )
        this.renderer = new Renderer();
        this.geometry = new THREE.BoxGeometry(1, 1, 1)
        this.material = new THREE.MeshBasicMaterial({ color: '#433F81' })
        this.cube = new THREE.Mesh(this.geometry, this.material)

        this.camera.position.z = 4
        this.scene.add(this.cube)
        this.renderer.setClearColor('#000000')
        this.renderer.setSize(this.state.width, this.state.height)
        this.mount.appendChild(this.renderer.domElement)
        this.start()
    }

    start() {
        if (!this.frameId) {
            this.frameId = requestAnimationFrame(this.animate)
        }
    }

    animate() {
        this.cube.rotation.x += 0.01
        this.cube.rotation.y += 0.01

        this.renderScene()
        this.frameId = window.requestAnimationFrame(this.animate)
    }

    renderScene() {
        this.renderer.render(this.scene, this.camera)
    }

    render() {
        return ( 
        <div className="template" ref = { (mount) => { this.mount = mount } }/>
        )
    }
}

export default SceneContainer;