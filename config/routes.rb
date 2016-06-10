Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create, :update]
    resources :users, only: [:index]
    resource :session, only: [:create, :destroy, :show]
    resources :requests
    resources :categories, only: [:create, :index, :destroy, :update, :show]
    resources :offers, only: [:create, :index, :update, :destroy]
    resources :bookings, only: [:create, :show, :index]
  end
  root "static_pages#root"

  get '/auth/:provider/callback', to: 'sessions#create'
end
