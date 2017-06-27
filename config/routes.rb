Rails.application.routes.draw do
  get 'pages/Q1'

  get 'pages/Q2'

  get 'pages/Q3'

  get 'pages/Q4'

  get 'welcome/index'
  root 'welcome#index'
 # match ':controller(/:action(/:id))', :via => :get

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
