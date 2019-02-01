class Doctor

  attr_reader :name

  @@all = []

  def initialize(name)
    @name = name
    @@all << self
  end

  def self.all
    @@all
  end

  def appointments
    Appointment.all.select { |appointment| appointment.doctor == self }
  end

  def get_appointments_by_date(date)
    appointments.select { |appointment| appointment.date == date }
  end

  def patients
    appointments.map { |appointment| appointment.patient }.uniq
  end

end
