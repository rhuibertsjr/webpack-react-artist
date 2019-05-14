import React, { Component } from 'react';
import * as THREE from 'three';

import Renderer from '../../components/renderer/Renderer';
import Scene from '../../components/scene/Scene';

export default class SceneContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            height: this.props.height,
            width: this.props.width
        }
    }

    render() {
        return (
            <Renderer height={this.state.height} width={this.state.width}>
                <Scene></Scene>
            </Renderer>
        )
    }
}