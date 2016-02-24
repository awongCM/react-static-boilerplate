import React, { Component, PropTypes } from 'react';
import Button from './../../components/Button/Button';
import './ButtonGroup.scss';

class ButtonGroup extends Component{
	
	constructor(props){
		super(props);
		this.state = {
			button_base: props.button_base,
			button_theme: props.button_theme,
			buttons: []		
		}	
	}

	//http://stackoverflow.com/questions/30042978/what-is-the-purpose-of-having-functions-like-componentwillmount-in-react-js
	//https://github.com/facebook/react/issues/4844
	componentDidMount(){
		
	}

	componentWillMount(){
		let no_of_buttons = 11;
		for(let i = 0; i< no_of_buttons; i++){
			this.state.buttons.push(i);
		}
	}
	
	render() {
		let firstIndex = this.state.buttons[0];
		let lastIndex = this.state.buttons[this.state.buttons.length-1];
	    return (
		    <div className="btn-group" role="group">
			  {
			  	this.state.buttons.map(function(item) {
			  		if(item > firstIndex && item < lastIndex){
			  			return <Button key={item} firstlastelement={false}/>	
			  		}
			  		else {
			  			if(item === firstIndex){
			  				return <Button key={item} firstlastelement={true} firstIndex={true}/>	
			  			}
			  			else {
			  				return <Button key={item} firstlastelement={true} lastIndex={true} />	
			  			}
			  		}
			  		
			  	})
			  }

			</div>
	    );
  	}
}

export default ButtonGroup;

ButtonGroup.propTypes = {
	button_base: React.PropTypes.string,
	button_theme: React.PropTypes.string,
	vertical: React.PropTypes.bool,
	text_align: React.PropTypes.string
}

ButtonGroup.defaultProps = {
	button_base: "btn",
	button_theme: "btn-default",
	vertical: false,
	text_align: "middle"
}