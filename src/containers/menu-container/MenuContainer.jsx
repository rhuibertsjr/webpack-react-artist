
import React, { Component } from 'react';
import { Menu } from '../../components/menu/Menu';
import EpisodeContainer from '../episode-container/EpisodeContainer';

export default class MenuContainer
extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            isToggleOn: false
        };

        this.onClickEventHandler = this.onClickEventHandler.bind(this);
    }

    onClickEventHandler() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        let isActive = this.state.isToggleOn;
        let menu;


        if (isActive) {
            menu = <EpisodeContainer className="app-episodes"></EpisodeContainer>
        }

        return (
            <div className="app-navigation">
                <Menu onClick={ this.onClickEventHandler } />
                { menu }
            </div>
        )
    }

}