# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

appointments = [{title: "Go School", appttime: "20/17/2019"},
{title: "Get a new Job", appttime: "19/09/2019"},
{title: "Have breakfast with tiffanny", appttime: "06/07/2019"},
{title: "Visit Pretoria in winter", appttime: "21/05/2019"},
{title: "Basketball Tournemenant", appttime: "03/05/2019"},
{title: "Watch the new Marvel movie", appttime: "12/04/2019"},

]


    
    appointments.each do |a|
        Appointment.create(a)
    end
    