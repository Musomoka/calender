class CreateAppointments < ActiveRecord::Migration[5.2]
  def change
    create_table :appointments do |t|
      t.string :title
      t.datetime :appttime
      t.timestamps
    end
  end
end
