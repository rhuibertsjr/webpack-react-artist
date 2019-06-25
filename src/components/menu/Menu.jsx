import React from 'react';
import soundIcon from '../../assets/images/sound.svg'

export const Menu = props => {
    return (
        <div className="app-menu">
            <div className="btn-round" onClick={props.onClick}>
                <span className="burger"></span>
            </div>
            <div className="btn-round">
                <img className="sound-icon" src={ soundIcon } />
            </div>
        </div>
    )
}