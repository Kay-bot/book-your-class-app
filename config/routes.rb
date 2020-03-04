Rails.application.routes.draw do
  # resources :schedules
  resources :lesson_payments
  resources :lessons
  # resources :users
  resources :bookings
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html


 #schedules
 get 'schedules', to: 'schedules#get'
 get ' /schedules/:id', to: 'schedules#show'
 post '/schedules', to: 'schedules#create'

 #users
 post 'login', to: 'users#login'
 get '/users', to: 'users#index'
 post  '/users', to: 'users#create'
 get '/users/:id', to: 'users#show'
 put  '/users/:id', to: 'users#update'
 delete '/users/:id', to: 'users#delete'


  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
  !request.xhr? && request.format.html?
  end
end
