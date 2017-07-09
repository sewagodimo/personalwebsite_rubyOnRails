Rails.application.routes.draw do
  get 'my_pages/home'

  get 'my_pages/projects'

  get 'my_pages/family'

  get 'my_pages/story'

  get 'my_pages/poetry'

  get 'my_pages/contact'
  get 'posts/index'
  get 'welcome/index'
  root 'welcome#index'
 # match ':controller(/:action(/:id))', :via => :get
  mount Ckeditor::Engine => '/ckeditor'
  resources :posts
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
