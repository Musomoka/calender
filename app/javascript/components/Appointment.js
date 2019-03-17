import React from "react";
import {
  CardHeader,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
  ButtonGroup,
  Form,
  Label,
  Input
} from 'reactstrap';
import {
  FiEdit,
  FiXSquare,
  FiSave
} from "react-icons/fi";
import {
  TiTimes
} from "react-icons/ti";



class Appointment extends React.Component {
constructor(props) {
  super(props)

  this.state = {
     editable: false
  }
  this.handleEditToggle = this.handleEditToggle.bind(this);
  
}



  handleEditToggle(){
    if (this.state.editable){
    let title = this.title.value
    let appttime = this.appttime.value
    let id = this.props.appointment.id
    this.setState({
      editable: !this.state.editable
    })
    let appointment = {id: id, title: title, appttime: appttime}
    console.log(appointment)
    this.props.handleUpdate(appointment)
    }
    else{
      this.setState({
        editable: !this.state.editable
      })
    }

  }

  handleChange(){
  }

  render() {
  
  let titleForm =
    <Input
        innerRef = {input=>this.title = input }
        type = "text"
        defaultValue = {this.props.appointment.title}
        className = "form-control"
    />
   
     

    let appttimeForm = 
      <Input
        innerRef = { input => this.appttime = input}
        type = "text"
        
        className = "form-control"
        defaultValue = {
          this.props.appointment.appttime
        }
        className = "cardForm"
      />   
      
   
    
       


  let appointmentDisplay = 
    this.state.editable ?
    
        <Row>
          <Form>
            {titleForm}
            {appttimeForm}
          </Form>
        </Row>

        :
       
        <div>
          <Row>
        <CardText className="float-right"> 
         
          {
            this.props.appointment.title
          } 
         </CardText>
         </Row>
         <Row>
          <CardText className="float-right">
              {
                this.props.appointment.appttime
              } 
          
          </CardText>
        </Row>
        </div>
  


    return (
      
      
      <Card body style = {
        {
            backgroundColor: this.props.CardColor
          }
        } >
        <Row>
          <div className="float-left">
            {
              this.props.editable ?

              <ButtonGroup className = "flot-right" > 
                <Button color = "link"
                  onClick = {
                  this.handleEditToggle
                  } >
                 <FiSave />
                </Button> 
              </ButtonGroup > :
                
              <ButtonGroup className = "float-right" >

                <Button color = "link"
                onClick = {
                  this.handleEditToggle
                } >
                <FiEdit />
              </Button> 
                <Button
                  onClick = {
                    () => this.props.handleDelete(this.props.appointment.id)
                  }
                  color = "link"
                  className = "btn-delete" >
                  <TiTimes />
                </Button> 
              </ ButtonGroup >

            } 
          </div>
        </Row> 
          <div>
            {appointmentDisplay}
          </div>
      </Card> 
      

     
    );
  }
}

export default  Appointment