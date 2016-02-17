import React, { Component, PropTypes } from 'react';
import './Button.scss';

class Button extends Component{
	
	constructor(props){
		super(props);
		this.state = {
			button_base: props.button_base,
			button_theme: props.button_theme		
		}	
	}
	
	render() {
	    return (
		    <button className={this.state.button_base + " " +this.state.button_theme} >Button</button>
	    );
  	}
}

export default Button;

Button.propTypes = {
	button_base: React.PropTypes.string,
	button_theme: React.PropTypes.string
}

Button.defaultProps = {
	button_base: "btn",
	button_theme: "btn-default",
	
}