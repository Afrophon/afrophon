Afrophon::Application.routes.draw do

  root :to => "pages#index"
  
  match "/ueber-uns.html" => "pages#ueber-uns"
  match "/events.html" => "pages#events"
  match "/kontakt.html" => "pages#kontakt"
  match "/bands.html" => "pages#bands"
  match "/unterstuetzer.html" => "pages#unterstuetzer"
  match "/sponsoren.html" => "pages#sponsoren"
  match "/bands.html" => "pages#bands"
  match "/anteilseigner.html" => "pages#anteilseigner"
  match "/investorrelations.html" => "pages#investorrelations"
  match "/newsletter.html" => "pages#newsletter"
  match "/impressum.html" => "pages#impressum"
  match "/datenschutz.html" => "pages#datenschutz"
  match "/presse.html" => "pages#presse"
  match "/entstehung.html" => "pages#entstehung"
  
  match "/findusmc.html" => "pages#findusmc"
  match "/indierocknight.html" => "pages#indierocknight"
  match "/libellaswing.html" => "pages#libellaswing"
  match "/meissentanzt.html" => "pages#meissentanzt"
  match "/safranindross.html" => "pages#safranindross"
  match "/fragezeichen.html" => "pages#fragezeichen"
  match "/kinderdisco.html" => "pages#kinderdisco"
  match "/poetryslam.html" => "pages#poetryslam"
  
  match "/ajax/:path" => "pages#ajax"
  match "/ajax" => "pages#ajaxindex"
  
  # The priority is based upon order of creation:
  # first created -> highest priority.

  # Sample of regular route:
  #   match 'products/:id' => 'catalog#view'
  # Keep in mind you can assign values other than :controller and :action

  # Sample of named route:
  #   match 'products/:id/purchase' => 'catalog#purchase', :as => :purchase
  # This route can be invoked with purchase_url(:id => product.id)

  # Sample resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Sample resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Sample resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Sample resource route with more complex sub-resources
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', :on => :collection
  #     end
  #   end

  # Sample resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end

  # You can have the root of your site routed with "root"
  # just remember to delete public/index.html.
  # root :to => "welcome#index"

  # See how all your routes lay out with "rake routes"

  # This is a legacy wild controller route that's not recommended for RESTful applications.
  # Note: This route will make all actions in every controller accessible via GET requests.
  # match ':controller(/:action(/:id(.:format)))'
end
