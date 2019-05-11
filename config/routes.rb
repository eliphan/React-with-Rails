Rails.application.routes.draw do
  devise_for :users
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  scope '/api' do
    resources :games, only: [:index]
    get '/rpg', to: 'games#rpg'
    get '/covers', to: 'games#cover'
  end  
end
