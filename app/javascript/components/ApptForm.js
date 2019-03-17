import React, {Component} from "react"
import { Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
 const ApptForm =(props) => {
  
    return (
      <Row>
      <Col md={4}>
        <h2>Apointment Form</h2>
        <form onSubmit={(e)=>{props.handleSubmit(props.title, props.appttime) 
        } 
        }>
        
        <FormGroup>
          <Label for="title">Title</Label>
          <Input  className="cardForm" 
            onChange={ props.handleChange }
            value = {props.title}  type="text" 
            name="title" id="title"
            placeholder="Enter what you will be doing..."/>  
        </FormGroup>
        <FormGroup>
          <Label for="appttime">Date</Label>
          <Input
          className="cardFormDate"
          onChange ={ props.handleChange }
          value = {props.appttime}
          type="date"
            name="appttime" 
            id="appttime"
            placeholder="date placeholder"
            />  
        </FormGroup>
        <FormGroup>
          <Button color="success" >Submit</Button>
        </FormGroup>
      </form>
      <hr/>
      </Col>
      </Row>
    
    );
    }  
  


export default ApptForm








