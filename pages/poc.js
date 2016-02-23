import React, { Component } from 'react';
import MultiTab from './../components/MultiTab/MultiTab';
import Dropdown from './../components/Dropdown/Dropdown';
import Button from './../components/Button/Button';
import ButtonGroup from './../components/ButtonGroup/ButtonGroup';

export default class extends Component {

  constructor(){
  	super();
  }

  render() {
    return (
      <div>
        <h1>Proof of Concepts </h1>
        <h2>Multi Tabs</h2>
        <MultiTab/>
        <h2>Dropdowns</h2>
        <div className="table">
          <div className="table-row">
            <div className="table-cell">
              <Dropdown icon_prefix="fa" icon_name="fa-caret-down" icon_size="fa-1" />
            </div>
            <div className="table-cell">
              <Dropdown icon_prefix="fa" icon_name="fa-caret-up" icon_size="fa-1" />
            </div>
            <div className="table-cell">
              <Dropdown icon_prefix="fa" icon_name="fa-caret-left" icon_size="fa-1" />
            </div>
            <div className="table-cell">
              <Dropdown icon_prefix="fa" icon_name="fa-caret-right" icon_size="fa-1" />
            </div>
          </div>
        </div>
        <h2>Buttons</h2>
        <Button />
        <h2>Button Groups</h2>
        <ButtonGroup no_of_buttons={6} />
      </div>
    );
  }

}
