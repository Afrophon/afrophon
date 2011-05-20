class ApplicationController < ActionController::Base    
  protect_from_forgery
  before_filter :set_cache
  def set_cache
    response.headers["Cache-Control"] = "public, max-age=3153600"
    response.headers["Vary"] = "Accept-Encoding"
    response.headers["Last-Modified"] = "Fri, 20 Nov 2011 16:00:00 GMT"
  end
end
