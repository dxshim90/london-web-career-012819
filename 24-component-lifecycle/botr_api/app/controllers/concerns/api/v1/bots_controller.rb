class Api::V1::BotsController < ApplicationController

  def index
    @bots = Bot.all.sample(2)

    render json: @bots
  end
end