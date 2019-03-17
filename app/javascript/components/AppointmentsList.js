 import React, { Component } from 'react';
 import {Row, Col} from 'reactstrap';
 import  Appointment from './Appointment';
 export default class AppointmentsList extends Component {


   render() {

    var idx = 1;
    const ColorList =[
       
      "#ff8888",
      "#ffdda8",
      "#f9ff93",
      "#d5ffb5",
      
    ]
     let CardBgColor = "";
     idx = 0;
  let appointments = this.props.appointments.map((appointment)=>{
     
     CardBgColor=ColorList[idx%4]
     idx = idx + 1
    
    return(

      <Col md="4" key={appointment.id}  className=" item center">
       
        <Appointment
          handleChange={this.props.handleChange}
          handleEditToggle= {this.props.handleEditToggle}
          CardColor={CardBgColor}
          appointment={appointment} 
          handleDelete={this.props.handleDelete}
          handleUpdate={this.props.handleUpdate}/>
       
       
      </Col>
      )
  })
     return (
       <Row>
         {appointments}
       </Row>
     )
   }
 }
 
 
 
