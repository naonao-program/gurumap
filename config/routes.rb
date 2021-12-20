Rails.application.routes.draw do
  root to: 'homes#search'
  resources :homes, only:[:show]
end
