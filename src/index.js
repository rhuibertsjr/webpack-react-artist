import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';

import SceneContainer from './containers/scene-container/SceneContainer';

const Index = () => {
    return (
        <div className="app-container">
            <SceneContainer></SceneContainer>
        </div>
    )
}

ReactDOM.render(<Index />, document.getElementById('app'));
if (module.hot) { module.hot.accept() }