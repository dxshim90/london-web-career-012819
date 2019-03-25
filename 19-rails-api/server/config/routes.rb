Rails.application.routes.draw do
  resources :images, only: [:index, :show]
  post '/likes', to: 'images#increase_likes'
  post '/comments', to: 'images#add_comment'
end
