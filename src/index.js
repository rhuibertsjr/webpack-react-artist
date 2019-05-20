import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';

import SceneManager from './containers/scene-manager/SceneManager';

const Index = () => {
    return (
        <div className="app-container">
            <SceneManager height={window.innerHeight} width={window.innerWidth}></SceneManager>
        </div>
    )
}

ReactDOM.render(<Index />, document.getElementById('app'));
if (module.hot) { module.hot.accept() }