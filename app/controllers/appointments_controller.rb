class AppointmentsController < ApplicationController
  def index
    respond_to do |format|
      format.html do
        @appointments = Appointment.order('appt_time ASC')
        @appointment = Appointment.new
        format.js
      end
      format.js{  }
    end

  end

    def create
      @appointment = Appointment.create(appointment_params)
      @appointments = Appointment.order('appt_time ASC')
      if @appointment.save
        respond_to do |format|
         format.js
        end
        @appointment = Appointment.new
        
      else
        flash[:error] = "Something went wrong"
        render 'new'
      end
    end
    
  private 

  def appointment_params
    params.require(:appointment).permit(:title, :appt_time)
  end

end
