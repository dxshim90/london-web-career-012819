class Post < ApplicationRecord

  def title=(new_title)
    if new_title.empty? 
      super(new_title)
      return
    end
    words_not_to_capitalize = ["in","a","an","the","and","but","for","at","by","from","am"]

    words = new_title.split(" ")
    output_words = [words[0].capitalize]
    words[1..-1].each do |word|
      if !words_not_to_capitalize.include?(word)
        output_words<<word.capitalize
      else
        output_words << word
      end
    end
    super(output_words.join(" "))
  end
end
