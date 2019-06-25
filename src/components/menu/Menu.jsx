import React from 'react';

export const Menu = props => {
    return (
        <div className="app-menu">
            <div className="btn-round" onClick={props.onClick}>
                <span className="burger"></span>
            </div>
            <div className="btn-round">
                <span className="burger"></span>
            </div>
        </div>
    )
}