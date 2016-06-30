Rails.application.routes.draw do
  root to: 'chat#dashboard'
  resource :messages, only: :create
end
