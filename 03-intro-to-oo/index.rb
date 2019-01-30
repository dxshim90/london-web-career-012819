require 'pry'
# Intro to Object Oriented Thinking

# Represent things with Code
# name1 = "Nicolas"
# age1 = 31
#
# name2 = "Bob"
# age2 = 100
#
# person1 = ["Nicolas", 31]
# person2 = ["Bob", 100]

# person1 = {
#   name: "Nicolas",
#   age: 31
# }
#
# person2 = {
#   name: "Bob",
#   age: 90
# }
#
# def greet(person)
#   puts "Hi, my name is #{person[:name]} and I am #{person[:age]} years old."
# end

class Person

  # this macro makes our life easier
  # by creating *getter* (def name) and *setter* (def name=) methods for us
  attr_accessor :name, :age

  # @@ attributes are *Class* attributes.
  # These belong to the Person class.
  @@all = []
  @@blood_color = 'red'

  def initialize(name, age)
    # @ attributes are INSTANCE attributes.
    # They belong to each individual instance.
    @name = name
    @age = age
    # self here refers to each individual person
    @@all << self
    greet
  end

  def blood_color
    @@blood_color
  end

  def blood_color=(new_color)
    @@blood_color = new_color
  end

  # self here refers to Person
  def self.all
    @@all
  end

  def greet
    puts "Hi, my name is #{@name} and I am #{@age} years old. My blood color is: #{@@blood_color}"
  end

end

# We create multiple people using our Person class
# Each person is an *instance* of Person
p1 = Person.new("A", 100)
p2 = Person.new("B", 101)
p3 = Person.new("C", 102)
p4 = Person.new("D", 103)
p5 = Person.new("E", 104)
p6 = Person.new("F", 105)
p7 = Person.new("G", 106)

Person # << class
p1 # << instance

binding.pry
