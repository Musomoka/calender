import React, { Component } from 'react';
import AppointmentsBody from './AppointmentsBody';
import  { Provider } from 'react-redux';
import store from '../store/store';

export default class Main extends Component {
  render() {
    return (
       <Provider store={store}>
            <div className="container">
              <AppointmentsBody className="container"/>
             
            </div>
        </Provider> 
       
       
      
    )
  }
}
