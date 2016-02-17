import React, { Component, PropTypes } from 'react';
import Icon from '../Icon';
import './Dropdown.scss';

class Dropdown extends Component{
	
	constructor(props){
		super(props);
		this.state = {
			isClicked: false
		}
		this.onDropdownPress = this.onDropdownPress.bind(this);
	}
	
	onDropdownPress(){
		if(this.state.isClicked){
			this.setState({isClicked: false});
		}
		else{
			this.setState({isClicked: true});
		}
	}

	render() {
	    let hideShowDropdown = (this.state.isClicked) ? 'active' : '';
	    return (
		    <div className="dropdown">
			  <button className="btn btn-default dropdown-toggle" onClick={this.onDropdownPress}>
			    <span>Dropdown </span>
			    <Icon icon_prefix={this.props.icon_prefix} icon_name={this.props.icon_name} icon_size={this.props.icon_size} />
			  </button>
			  <ul className={"dropdown-menu" + " " + hideShowDropdown}>
			    <li className="dropdown-header">Header</li>
			    <li><a href="#">Action</a></li>
			    <li><a href="#">Another action</a></li>
			    <li><a href="#">Something else here</a></li>
			    <li role="separator" className="divider"></li>
			    <li><a href="#">Separated link</a></li>
			    <li className="disabled"><a href="#">Disabled link</a></li>
			  </ul>
			</div>
	    );
  	}
}

export default Dropdown;