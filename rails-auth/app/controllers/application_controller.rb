class ApplicationController < ActionController::Base
  def logged_in?
    if session[:username].empty?
      puts "YOU'RE NOT LOGGED IN"
      redirect_to login_path
    end
  end
end
