Rails.application.routes.draw do
  get 'sessions/create'
  get 'sessions/destroy'
  get 'sessions/new'
  resources :users
  resources :posts
  post "/login", to: "sessions#create"
  get "/login", to: "sessions#new"
  get "/logout", to: "sessions#destroy"
  get "/signup", to: "users#new"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
