require 'sqlite3'
require 'pry'
require_relative './Artist.rb'
require_relative './Track.rb'

DB = SQLite3::Database.new('artists.db')
DB.results_as_hash = true

binding.pry

puts 'mischief managed!'
