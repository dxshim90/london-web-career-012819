# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

def generate_name
  alphabet = ('A'..'z').to_a
  digits = ('0'..'9').to_a

  bot_name = ""

  [1,2,3].sample.times do 
    bot_name = bot_name + alphabet.sample
  end

  bot_name = bot_name + '-' + digits.sample + digits.sample
  bot_name
end

100.times do 
  name = generate_name
  Bot.create({
    name: name,
    image_url: "https://robohash.org/#{name}.png?set=set1&size=400x400",
    power: rand(30..200),
    defense: rand(30..200)
    })
end