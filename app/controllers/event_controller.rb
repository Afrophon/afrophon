class EventController < ApplicationController
def ajax
  begin
	render params[:path], :layout => "ajax", :content_type => Mime::XML
  rescue ActionView::MissingTemplate
	render :file => "#{Rails.root}/public/404.html", :status => 404, :layout => false
  end
end
def ajaxnil
  begin
	render params[:path], :layout => nil
  rescue ActionView::MissingTemplate
	render :file => "#{Rails.root}/public/404.html", :status => 404, :layout => false
  end
end
end
