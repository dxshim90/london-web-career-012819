class Review
    
    @@all = []

    attr_reader :customer, :restaurant 
    attr_accessor :content, :rating 

    def initialize(customer, restaurant, content, rating)
        @customer = customer
        @restaurant = restaurant
        @content = content
        @rating = rating
        @@all << self
    end

    def self.all
        @@all
    end
end

