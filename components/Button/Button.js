import React, { Component, PropTypes } from 'react';
import './Button.scss';

class Button extends Component{
	
	constructor(props){
		super(props);
		
		this.state = {
			button_base: props.button_base,
			button_theme: props.button_theme,
			button_group_theme: props.button_group_theme,
			button_firstlast: props.firstlastelement, 
		}	
	}
	
	render() {
	    var buttonClassProp = this.state.button_base + " " +this.state.button_theme ;
	    if (!this.state.button_firstlast){
	    	buttonClassProp = buttonClassProp + " " + this.state.button_group_theme;
	    }

	    if(this.props.firstIndex){
	    	buttonClassProp = buttonClassProp + " " + this.props.button_group_first;	
	    }

	    if(this.props.lastIndex){
	    	buttonClassProp = buttonClassProp + " " + this.props.button_group_last;
	    }
	    
	    return (
		    <button className={buttonClassProp}>Button</button>
	    );
  	}
}

export default Button;

Button.propTypes = {
	button_base: React.PropTypes.string,
	button_theme: React.PropTypes.string,
	button_group_theme: React.PropTypes.string,
	button_group_first: React.PropTypes.string,
	button_group_last: React.PropTypes.string
}

Button.defaultProps = {
	button_base: "btn",
	button_theme: "btn-default",
	button_group_theme: "btn-middle",
	button_group_first: "btn-first",
	button_group_last:  "btn-last"
}