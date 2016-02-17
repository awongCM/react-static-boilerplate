import React, { Component, PropTypes } from 'react';
import './Icon.scss';

class Icon extends Component{
	
	constructor(props){
		super(props);
		
		this.state = {
			icon_prefix: props.icon_prefix,
			icon_name: props.icon_name,
			icon_size: props.icon_size
		}
	}
	
	render() {
	
	    return (
		    <i className={this.state.icon_prefix + " " + this.state.icon_name + " " + this.state.icon_size} />
	    );
  	}
}

export default Icon;

Icon.propTypes = {
	icon_prefix: React.PropTypes.string,
	icon_name: React.PropTypes.string,
	icon_size: React.PropTypes.string
}

Icon.defaultProps = {
	icon_prefix: "fa",
	icon_name: "fa-caret-down",
	icon_size: "fa-3"
}