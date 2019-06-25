import React, { Component } from 'react';
import { Menu } from '../../components/menu/Menu';

export default class MenuContainer
extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            isToggleOn: true
        };

        this.onClickEventHandler = this.onClickEventHandler.bind(this);
    }

    onClickEventHandler() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        return (
            <div className="app-navigation">
                <Menu onClick={ this.onClickEventHandler } />
            </div>
        )
    }

}