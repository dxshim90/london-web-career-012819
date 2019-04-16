class Api::V1::BotsController < ApplicationController
	def toggle_sale
		bot = Bot.find(params[:id])

		bot.update(for_sale: !bot.for_sale)

		render json: bot
	end

	def index
		bots = Bot.where(for_sale: true)

		render json: bots
	end

	def purchase

		bot = Bot.find(params[:id])

		if session_user.balance >= bot.price

			bot.update(for_sale: false, owner: session_user)
			session_user.update(balance: session_user.balance - bot.price)

			render json: bot
		else 
			render json: {errors: "Whoa! Get some more money bruv!"}
		end
	end
end