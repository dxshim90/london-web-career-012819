class Artist
  attr_reader :id, :name

  def initialize(id: nil, name:)
    @id = id
    @name = name
  end

  def self.all
    artist_hashes = DB.execute 'SELECT * FROM artists'
    parse_artists(artist_hashes)
  end

  def self.parse_artist(artist_hash)
    Artist.new(id: artist_hash['id'], name: artist_hash['name'])
  end

  def self.parse_artists(artist_hashes)
    artist_hashes.map { |artist_hash| parse_artist(artist_hash) }
  end

  def save
    sql = <<-SQL
      INSERT INTO artists (name)
      VALUES (?);
    SQL
    DB.execute(sql, @name)
  end

  def self.create(name:)
    new_artist = Artist.new(name: name)
    new_artist.save
  end

  def name=(new_name)
    @name = new_name
    sql = <<-SQL
      UPDATE artists SET name=?
      WHERE id=?
    SQL
    DB.execute(sql, @name, @id)
  end

  def self.find(id)
    sql = <<-SQL
      SELECT * FROM artists
      WHERE id=?
      LIMIT 1
    SQL
    artist_hash = DB.execute(sql, id).first
    parse_artist(artist_hash)
  end

  def self.find_by_name(name)
    sql = <<-SQL
      SELECT * FROM artists
      WHERE name LIKE ?
    SQL
    DB.execute(sql, name)
    # parse_artist(artist_hash)
  end

  def destroy
    sql = <<-SQL
      DELETE FROM artists
      WHERE id=?
    SQL
    DB.execute(sql, @id)
  end

  def tracks
    sql = <<-SQL
      SELECT * FROM tracks
      WHERE artist_id=?
    SQL
    track_hashes = DB.execute(sql, @id)
    Track.parse_tracks(track_hashes)
  end

end
