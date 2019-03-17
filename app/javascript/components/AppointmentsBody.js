import React from "react";
import AppointmentsList from './AppointmentsList';
import ApptForm from './ApptForm';

class AppointmentsBody extends React.Component {

  constructor(props) {
    super(props)

    this.state = {

      appointments: [],
      appointment: {},
      title: '',
      appttime: '',


    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.addNewAppointment = this.addNewAppointment.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.updateAppointment = this.updateAppointment.bind(this);
    this.removeAppointment = this.removeAppointment.bind(this);

  }

  handleChange(event) {

    this.setState({

      [event.target.name]: event.target.value
    })

  }

  componentDidMount() {
    fetch('/api/v1/appointments.json')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.setState({
          appointments: data
        })
      })

  }

  handleSubmit(event) {
    let data = {
      title: this.state.title,
      appttime: this.state.appttime
    }

    fetch(`/api/v1/appointments.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)

      })
      .then((response) => {
        return response.json()
      })
      .then((appointment) => {
        this.addNewAppointment(appointment)

      })
  }


  addNewAppointment(appointment) {
    this.setState({
      appointments: this.state.appointments.concat(appointment)
    })
  }


  handleUpdate(appointment) {
    

    var id = appointment.id
    fetch(`api/v1/appointments/${id}.json`, {
        body: JSON.stringify(appointment),
        method: 'PUT',
        headers: {
          'X-CSRF-Token': '<%= form_authenticity_token.to_s %>',
          'content-type': 'application/json'
        }
      })
      .then((response) => {
        this.updateAppointment(appointment)
      })

  }
  updateAppointment(appointment) {
    let newAppointments = this.state.appointments.filter((f) => {
      return (f.id !== appointment.id)
    })
   newAppointments = newAppointments.concat(appointment)
   
    this.setState({
      appointments: newAppointments
    })

  }
  handleDelete(id) {
    fetch(`/api/v1/appointments/${id}.json`, {
        method: 'DELETE'

      })
      .then((response) => {
        this.removeAppointment(id)
      })

  }

  removeAppointment(id) {
    const newAppointments = this.state.appointments.filter((appointment) => {
      return (appointment.id !== id)
    })

    this.setState({
      appointments: newAppointments
    })
  }

  render() {
    return ( 
      <div>
      
      <ApptForm handleSubmit = {
        this.handleSubmit
      }
      handleChange = {
        this.handleChange
      }
      className = "container"/>
      
      <AppointmentsList handleChange = {
        this.handleChange
      }
      handleUpdate = {
        this.handleUpdate
      }
      appointments = {
        this.state.appointments
      }
      handleDelete = {
        this.handleDelete
      }
      handleEditToggle = {
        this.handleEditToggle
      }
      className = "container" />
      
      </div>
    )
  }
}

export default AppointmentsBody