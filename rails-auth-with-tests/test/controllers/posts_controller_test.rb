require 'test_helper'

class PostsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @post = posts(:one)
  end

  test "should get index" do
    get posts_url
    assert_response :success
  end

  test "should display the string Title" do
    get post_url(@post)
    assert_match "Title", @response.body
  end

  test "should display the post's actual title" do
    get post_url(@post)
    assert_match @post.title, @response.body
  end

end
