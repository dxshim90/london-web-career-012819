class Restaurant
  attr_accessor :name

  @@all = []
  def initialize(name)
    @name = name
    @@all << self
  end

  def self.all
    @@all
  end

  # given a string of restaurant name, returns the first restaurant that matches
  def self.find_by_name(restaurant_name)
    @@all.find {|restaurant| restaurant.name == restaurant_name }
  end

  # Returns a **unique** list of all customers who have reviewed a particular restaurant
  def customers
    reviews
      .map{|review| review.customer }
      .uniq
  end

  # returns an array of all reviews for that restaurant
  def reviews
    Review.all.select {|review| review.restaurant == self }
  end

  # returns the average star rating for a restaurant based on its reviews
  def average_star_rating
    total = reviews.inject(0) {|total, review| total + review.rating }
    total.to_f / reviews.length
  end

  # returns the longest review content for a given restaurant
  def longest_review
    reviews.max_by {|review| review.content.length }
  end

end
