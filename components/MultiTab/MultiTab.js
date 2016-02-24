import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import React, { Component, PropTypes } from 'react';
import './MultiTab.scss';

class MultiTab extends Component {

  constructor(){
    super();
    this.handleTabClick = this.handleTabClick.bind(this);
  }

  handleTabClick(item, index) {

    let tabs = this.props.tabs.map(function (tab, i) {
       tab.active = i === index ? true : false;
       return tab; 
    }) 

    this.setState({tabs: tabs});
  }

  render() {
    return (
      <div className="multitab-section">
        <div className="tab-widgets">
        {
          //still puzzles me why with the extra bind inside and outside map iteration
          this.props.tabs.map(function (item, index) {
            let isTabActive = item.active ? 'active' : '';
            return (
              <Tab handleTabClick={this.handleTabClick.bind(this, item, index)} isTabActive={(isTabActive)} itemProperties={item} key={index} itemIndex={index}/>
              );
            }.bind(this))
        }
        </div>
        <TabContent selectedTabContent={this.props.tabs}/>
      </div>
    );
  }
}

class Tab extends Component{
  
  constructor(){
    super();

    this.handleTabClick = this.handleTabClick.bind(this);
  }

  handleTabClick(){
    this.props.handleTabClick();
  }

  render(){
    return(
      <div id={"tab-" + this.props.itemIndex} className={"tab-widget " + this.props.isTabActive }>
        <h2><a onClick={this.handleTabClick}>{this.props.itemProperties.title}</a></h2>
      </div>
    );
  }
}

class TabContent extends Component{
  render(){
    
    let tabData = this.props.selectedTabContent.filter( item => {
      return item.active === true;
    });

    let tabDataSet = tabData[0].data;//we're only interested in one dataset
    
    return(
      <div className="tab-content">
        {
          tabDataSet.map(function(item){
            return(
              <p id={item.meta_data}>{item.description}</p>
              )
          })
        }
      </div>
      );
  }
}

export default MultiTab;

MultiTab.defaultProps = {
  tabs : [
      {
          title: 'Tab Page 1',
          active: true,
          data: [
            {
              meta_data: 'tab_meta_f1',
              description: 'This is my fun tabbed text 1'
            },
            {
              meta_data: 'tab_meta_f2',
              description: 'This is my fun tabbed text 2'
            },
            {
              meta_data: 'tab_meta_f3',
              description: 'This is my fun tabbed text 3'
            }
          ]
      },
      {
          title: 'Tab Page 2',
          active: false,
          data: [
            {
              meta_data: 'tab_meta_b1',
              description: 'So is this fun tabbed text 1' 
            },
            {
              meta_data: 'tab_meta_b2',
              description: 'So is this fun tabbed text 2'
            },
            {
              meta_data: 'tab_meta_b3',
              description: 'So is this fun tabbed text 3'
            }
          ]

      },
      {
          title: 'Tab Page 3',
          active: false,
          data: [
            {
              meta_data: 'tab_meta_fb1',
              description: 'Same goes for this one 1'
            },
            {
              meta_data: 'tab_meta_fb2',
              description: 'Same goes for this one 2'
            },
            {
              meta_data: 'tab_meta_fb3',
              description: 'Same goes for this one 3'
            }
          ]
      }
    ]
};