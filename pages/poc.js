import React, { Component } from 'react';
import MultiTab from './../components/MultiTab/MultiTab';

export default class extends Component {

  constructor(){
  	super();

  	this.state = {
            tabs : [
              {
                  title: 'POC Tab 1',
                  active: true,
                  data: [
                    {
                      meta_data: 'tab_meta_f1',
                      description: 'This is my fun tabbed text'
                    },
                    {
                      meta_data: 'tab_meta_f2',
                      description: 'This is my fun tabbed text'
                    },
                    {
                      meta_data: 'tab_meta_f3',
                      description: 'This is my fun tabbed text'
                    }
                  ]
              },
              {
                  title: 'POC Tab 2',
                  active: false,
                  data: [
                    {
                      meta_data: 'tab_meta_b1',
                      description: 'So is this fun tabbed text'
                    },
                    {
                      meta_data: 'tab_meta_b2',
                      description: 'So is this fun tabbed text'
                    },
                    {
                      meta_data: 'tab_meta_b3',
                      description: 'So is this fun tabbed text'
                    }
                  ]

              },
              {
                  title: 'POC Tab 3',
                  active: false,
                  data: [
                    {
                      meta_data: 'tab_meta_fb1',
                      description: 'Same goes for this one'
                    },
                    {
                      meta_data: 'tab_meta_fb2',
                      description: 'Same goes for this one'
                    },
                    {
                      meta_data: 'tab_meta_fb3',
                      description: 'Same goes for this one'
                    }
                  ]
              }
            ]

    };

    this.swapTabContent = this.swapTabContent.bind(this);
  }

  swapTabContent(tabs){
  	this.setState({tabs: tabs});
  }

  render() {
    return (
      <div>
        <h1>Proof of Concepts </h1>
        <MultiTab tabs={this.state.tabs} swapTabContent={this.swapTabContent}/>
      </div>
    );
  }

}
