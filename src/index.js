/* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.scss';
import '../public/favicon.ico';

import MenuContainer from './containers/menu-container/MenuContainer';
import SceneManager from './containers/scene-manager/SceneManager';

const Index = () => {
    return (
        <div className="app-container">
            <SceneManager height={window.innerHeight} width={window.innerWidth}></SceneManager>
            <MenuContainer />
        </div>
    )
}

ReactDOM.render(<Index />, document.getElementById('app'));
if (module.hot) { module.hot.accept() }