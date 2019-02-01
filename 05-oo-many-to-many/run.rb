# Ruby OO - Many to Many

# Doctor - Patient relationship

require 'pry'
require_relative './Doctor.rb'
require_relative './Patient.rb'
require_relative './Appointment.rb'

sofia = Doctor.new('Sofia')
sal = Doctor.new('Sal')

ebi = Patient.new('Ebi')
kian = Patient.new('Kian')

a1 = Appointment.new(sofia, ebi, '01/02/2019')
a2 = Appointment.new(sofia, kian, '01/02/2019')
a3 = Appointment.new(sofia, kian, '03/02/2019')
a4 = Appointment.new(sal, ebi, '02/02/2019')
a5 = Appointment.new(sal, ebi, '09/02/2019')

binding.pry
