Rails.application.routes.draw do
  get 'home/index'
  resources :simples
  root 'home#index'
  namespace :api do 
    namespace :v1 do 
      resources :appointments, only: [:index, :create, :destroy, :update, :show]
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
