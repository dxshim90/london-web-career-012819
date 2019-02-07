require 'sqlite3'
require 'pry'

DB = SQLite3::Database.new('artists.db')
DB.results_as_hash = true

class Track
  attr_reader :name, :artist_id

  def initialize(id: nil, name:, artist_id:)
    @id = id
    @name = name
    @artist_id = artist_id
  end

  def self.create_table
    sql = <<-SQL
      CREATE TABLE tracks
      (id INTEGER PRIMARY KEY NOT NULL, name CHAR(60), artist_id INTEGER FOREIGN_KEY);
    SQL
    DB.execute(sql)
  end

  def self.all
    sql = <<-SQL
      SELECT * FROM tracks
    SQL
    track_hashes = DB.execute(sql)
    track_hashes.map { |track_hash| Track.parse_track(track_hash)}
  end

  def save
    sql = <<-SQL
      INSERT INTO tracks (name, artist_id) VALUES (?, ?);
    SQL
    DB.execute(sql, @name, @artist_id)
    find_latest_entry
  end

  def self.create(name:, artist_id:)
    track = Track.new(name: name, artist_id: artist_id)
    track.save
  end

  def destroy
    sql = <<-SQL
      DELETE FROM tracks WHERE id=?;
    SQL
    DB.execute(sql, @id)
  end

  def self.find(id)
    sql = <<-SQL
      SELECT * FROM tracks WHERE id=?;
    SQL
    DB.execute(sql, id)[0]
  end

  def find_latest_entry
    Track.parse_track(Track.find(Track.highest_id))
  end

  def self.parse_track(track_hash)
    if track_hash
      Track.new(id: track_hash['id'], name: track_hash['name'], artist_id: track_hash['artist_id'])
    else
      nil
    end
  end

  def self.parse_tracks(track_hashes)
    track_hashes.map { |track_hash| parse_track(track_hash)}
  end

  def self.highest_id
    sql = <<-SQL
      SELECT id FROM tracks ORDER BY id desc LIMIT 1;
    SQL
    DB.execute(sql)[0]['id']
  end

  def name=(new_name)
    if !@id
      puts "This track has not been saved yet."
    else
      sql = <<-SQL
        UPDATE tracks SET name=? WHERE id=?;
      SQL
      DB.execute(sql, new_name, @id)
    end
  end

  def artist_id=(new_artist_id)
    if !@id
      puts "This track has not been saved yet."
    else
      sql = <<-SQL
        UPDATE tracks SET artist_id=? WHERE id=?;
      SQL
      DB.execute(sql, new_artist_id, @id)
    end
  end

end
