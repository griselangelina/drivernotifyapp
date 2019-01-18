import React from 'react';
import './atom.css';

 export const Button = (props) => {
        return (
            <button className="view-btn" onClick={props.click}>
                {props.children}
            </button>
        );
}