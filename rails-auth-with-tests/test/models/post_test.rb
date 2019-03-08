require 'test_helper'

class PostTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
  #
  test "post titles are automatically title capitalized" do
    post = Post.new
    post.title = "this is great"
    assert_equal("This Is Great", post.title)
  end

  test "post titles are automatically title capitalized even when they already titleized" do
    post = Post.new
    post.title = "My New Title"
    assert_equal("My New Title", post.title)
  end

  test "post titles downcase non major characters" do
    post = Post.new
    post.title = "THIS IS GREAT"
    assert_equal("This Is Great", post.title)
  end

  test "post titles don't upcase insignificant characters" do
    post = Post.new
    post.title = "I am a Tiger"
    assert_equal("I am a Tiger", post.title)
  end

  test "Post Title should cap insignificant character at beginning" do
    post = Post.new
    post.title = "a Tiger in the forest"
    assert_equal("A Tiger in the Forest", post.title)
  end

  test "post titles should handle empty title" do
    post = Post.new
    post.title = ""
    assert_equal("", post.title)
  end
end
