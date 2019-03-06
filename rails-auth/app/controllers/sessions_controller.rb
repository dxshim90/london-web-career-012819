class SessionsController < ApplicationController
  def new
    render :new
  end

  def create

    @user = User.find_by_username(params[:username])

    if !@user.nil?
      if @user.password == params["password"]
        session[:username] = params["username"]
        redirect_to posts_path
      else
        flash[:error] = "Incorrect Password"
        render :new
      end

    else
        flash[:error] = "Incorrect username"
      render :new
    end



  end

  def destroy
    session[:username]=""
    redirect_to login_path
  end
end
