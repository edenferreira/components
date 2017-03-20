import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { reduce } from 'lodash';

class App extends Component {
  
  constructor() {
    super();
    
    this.state = {
      component: <span>No Component</span>,
      props: {
        children: <span>Children</span>,
      },
    };
  }
  
  componentDidMount() {
    if (window.location.hash) {
      this.handleComponentChange(window.location.hash.substr(1));
    }
  }
  
  handleComponentChange(name) {
    if (this.props.components.hasOwnProperty(name)) {
      const component = this.props.components[name];
      
      window.history.pushState(null, null, `#${name}`);
      
      const props = reduce(component._props, (acc, type, prop) => {
        switch (type) {
        case 'function': return {
          ...acc, 
          [prop]: (...args) => console.log(prop, args),
        };
        case 'children': return {
          ...acc,
          [prop]: <span>Children</span>,
        };
        default: throw new Error('non exhaustive patter of props');
        }
      }, {});
      
      this.setState({
        component: {
          type: component,
        },
        props,
      });
    }
  }
  
  render() {
    const DynamicComponent = this.state.component.type;
    
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <div>
            <input onChange={({target}) => this.handleComponentChange(target.value)} />
          </div>
          <div>
            <DynamicComponent {...this.state.props}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
