class ApplicationController < ActionController::Base    
  protect_from_forgery
  before_filter :set_cache
  def set_cache
    response.headers["Cache-Control"] = "public, max-age=43200"
    response.headers["Vary"] = "Accept-Encoding"
    response.headers["Last-Modified"] = "Sat, 02 June 2011 17:31:00 GMT"
  end
end
