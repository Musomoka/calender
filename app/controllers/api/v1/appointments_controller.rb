class Api::V1::AppointmentsController < ApplicationController
  def index
    render json: Appointment.all.order("appttime ASC")
   
  end

  def create
    appointment = Appointment.create(appointment_params)
    render json: appointment
  end

  def update
    appointment = Appointment.find(params[:id])
    appointment.update_attributes(appointment_params)
    render json: appointment
    
  end
  
  def destroy 
    appointment = Appointment.find(params[:id])
    appointment.destroy
    head 204
    
  end
    
  private 

  def appointment_params
    params.permit(:title, :appttime)
  end

end
