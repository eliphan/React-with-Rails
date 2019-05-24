Rails.application.routes.draw do
  devise_for :users
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  scope '/api' do
    resources :games, only: [:index, :create, :show]
    get '/rpg', to: 'games#rpg'
    resources :likes, only: [:index, :create, :show]
  end  
end
