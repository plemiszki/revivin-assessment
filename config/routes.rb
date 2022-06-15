Rails.application.routes.draw do

  root "public#start"
  get "/schedule" => "public#schedule"
  get "/track" => "public#track"

  namespace :api do
    resources :pickups, only: [:show, :create]
  end

end
