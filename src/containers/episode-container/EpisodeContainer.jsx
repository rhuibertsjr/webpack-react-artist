
import React, { Component } from 'react';
import { Episode } from '../../components/episode/Episode';

export default class EpisodeContainer
extends Component {

    constructor(props) {
        super(props);
        this.state = {
            x: 0,
        }

        this.onMouseMoveEventHandler = this.onMouseMoveEventHandler.bind(this)
    }

    componentDidMount() {
        window.addEventListener('mousemove', this.onMouseMoveEventHandler);
    }

    componentWillUnmount() {
        window.removeEventListener('mousemove', this.onMouseMoveEventHandler);
    }

    onMouseMoveEventHandler(e) {
        this.setState({ x: e.pageX });
        let width = window.innerWidth;
        let move = ((width - this.state.x) / 20);

        document.getElementById(this.props.className).style.transform = "translateX(" + move + "px)";
    }

    render() {
        return (
            <div className="app-episodes" id={this.props.className} onMouseMove={this.onMouseMoveEventHandler.bind(this)}>
                <Episode title="episode 1" desc="lalalalalalalalala"></Episode>
                <Episode title="episode 2" desc="lalalalalalalalala"></Episode>
                <Episode title="episode 3" desc="lalalalalalalalala"></Episode>
                <Episode title="episode 4" desc="lalalalalalalalala"></Episode>
                <Episode title="episode 5" desc="lalalalalalalalala"></Episode>
                <Episode title="episode 6" desc="lalalalalalalalala"></Episode>
            </div>
        )
    }

}