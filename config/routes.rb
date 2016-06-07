Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create, :update]
    resource :session, only: [:create, :destroy, :show]
    resources :requests
    resources :categories, only: [:create, :index, :destroy, :update, :show]
    resources :offers, only: [:create, :index]
  end
  root "static_pages#root"
end
