class Api::V1::AuthController < ApplicationController

  def login
    @user = User.find_by(username: params[:username])

    if @user && @user.authenticate(params[:password])
      render json: @user
    else
      render json: {errors: "You dun goofed!"}
    end
  end

  def get_current_user
    user = User.find_by(id: request.headers["Authorization"])

    if user
      render json: user
    else
      render json: {errors: "Whoa! Hold your horses!"}
    end
  end

end