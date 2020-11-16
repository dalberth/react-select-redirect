import React, {Component} from 'react'
import Select from 'react-select'
import {content} from '../data/content'
import {Redirect} from 'react-router-dom'

export default class Home extends Component {

  constructor() {
    super();
    this.state = {
      redirect: false,
      selectedContent: ''
    };
    this.contentOptions = content.map(option => {
      return {
        value: option.title.name,
        label: option.title.name
      }
    });
  }

  render() {
    let {redirect, selectedContent} = this.state;
    if(redirect) {
      return (<Redirect to={{
                pathname:'/content',
                state:{selectedContent: selectedContent}
              }} />);
    }
    return (
      <div>
        <h4>Home Info</h4>
        <Select 
          placeholder='Content Type'
          options={this.contentOptions}
          onChange={(optionSelected) => this.setState({ redirect: true, selectedContent: optionSelected.value })}
        />
      </div>
    )    
  }
}
