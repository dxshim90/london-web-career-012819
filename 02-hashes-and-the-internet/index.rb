require 'rest-client'
require 'pry'
require 'json'

# str = 'hello'
# str2 = '{"key": "value"}'
#
# parsed_string = JSON.parse(str2)
#
# response = RestClient.get('www.reddit.com/.json')
# data = JSON.parse(response.body)
#
# puts data["data"]["children"][1]["data"]["title"]

def welcome
  puts 'Welcome to Gooks!'
end

def get_user_input
  puts 'Enter your search term below:'
  gets.chomp
end

def get_book_data
  search_term = get_user_input
  response = RestClient.get("https://www.googleapis.com/books/v1/volumes?q=#{search_term}")
  JSON.parse(response.body)["items"]
end

def get_book_title(book)
  book['volumeInfo']['title']
end

def get_book_snippet(book)
  if book['searchInfo']
    book['searchInfo']['textSnippet']
  else
    'Info not available.'
  end
end

def show_book_info(book)
  puts '*' * 20
  puts ''
  puts 'Title: ' + get_book_title(book)
  puts 'Info: ' + get_book_snippet(book)
  puts ''
end

def main
  welcome
  books = get_book_data
  top_five = books[0..4]
  top_five.each { |book| show_book_info(book) }
end

main

# binding.pry
