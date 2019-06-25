import React from 'react';

export const Episode = props => {
    return (
        <div className="episode">
            <h1 className="episode-title"> { props.title } </h1>
            <p className="episode-desc"> { props.desc } </p>
        </div>
    )
}