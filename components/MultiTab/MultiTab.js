
import React, { Component, PropTypes } from 'react';
import './MultiTab.scss';

class MultiTab extends Component {

  constructor(){
    super();
  }

  handleTabClick(item, index) {

    let tabs = this.props.tabs.map(function (tab, i) {
       tab.active = i === index ? true : false;
       return tab; 
    }) 

    this.props.swapTabContent(tabs);

  }

  render() {
    return (
      <div className="multitab-section">
        <div className="tab-widgets">
        {
          this.props.tabs.map(function (item, i) {
            let isTabActive = item.active ? ' active' : '';
            return (
              <Tab handleTabClick={this.handleTabClick.bind(this, item, i)} isTabActive={(isTabActive)} itemProperties={item} itemIndex={i}/>
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
  render(){
    return(
      
      <div id={"tab-" + this.props.itemIndex} className={"tab-widget " + this.props.itemProperties.title + this.props.isTabActive }>
        <h2><a onClick={this.props.handleTabClick}>{this.props.itemProperties.title}</a></h2>
      </div>
    );
  }
}

class TabContent extends Component{
  render(){
    
    let tabData = this.props.selectedTabContent.filter(function (item) {
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
