import React from 'react';
import './atom.css';

 export const TextArea = (props) => {
        return (
            <textarea className="textArea" onChange={props.change}>
              
            </textarea>
        );
}