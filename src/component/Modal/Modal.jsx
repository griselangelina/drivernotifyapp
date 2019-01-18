import React, { Component } from 'react';

import  './Modal.css';
import {TextArea} from '../Atom/Textarea';
import {Button} from '../Atom/Button';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

    constructor(props){
        super(props);
        this.state={
            message:""
        }
    }
    shouldComponentUpdate ( nextProps, nextState ) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    componentWillUpdate () {
        console.log('[Modal] WillUpdate');
    }

    changeHandler = event => {
      
         this.setState({
              message: event.target.value
             });
    }

    
    render () {
        return (
            <div>
                 <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                 <div className="Modal" 
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    <TextArea change={this.changeHandler}/>
                    <Button click={()=>this.props.modalClosed()}>Cancel</Button>
                    <Button click={()=>this.props.send(this.state.message)}>Send</Button>
                </div>
            </div>
              
        )
    }
}

export default Modal;