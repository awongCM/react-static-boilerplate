import React, { Component, PropTypes } from 'react';
import Button from './../../components/Button/Button';
import './ButtonGroup.scss';

class ButtonGroup extends Component{
	
	constructor(props){
		super(props);
		this.state = {
			button_base: props.button_base,
			button_theme: props.button_theme,
			no_of_buttons: this.props.no_of_buttons		
		}	
	}

	componentDidMount(){

	}
	
	render() {
	    let buttons = [];
	    for(let i = 0; i< this.state.no_of_buttons; i++){
			buttons.push(<Button />);
		}
	    return (
		    <div className="btn-group" role="group">
			  {buttons}
			</div>
	    );
  	}
}

export default ButtonGroup;

ButtonGroup.propTypes = {
	button_base: React.PropTypes.string,
	button_theme: React.PropTypes.string
}

ButtonGroup.defaultProps = {
	button_base: "btn",
	button_theme: "btn-default",
}