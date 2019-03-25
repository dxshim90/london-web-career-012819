class ImagesController < ApplicationController
  def index
    @images = Image.all
    render json: @images
  end

  def show
    @image = Image.find_by(id: params[:id])
    if @image
      render json: @image
    else
      render json: {error: "Image not found."}, status: 404
    end
  end

  def increase_likes
    @image = Image.find_by(id: params[:image_id])
    if @image
      @image.like_count += 1
      @image.save
      render json: @image
    else
      render json: {error: "Image not found."}, status: 404
    end
  end

  def add_comment
    @comment = Comment.new(content: params[:content], image_id: params[:image_id])
    if @comment.save
      render json: @comment
    else
      render json: {error: "Unable to create comment."}, status: 400
    end
  end
end
