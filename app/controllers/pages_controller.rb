class PagesController < ApplicationController
def ajax
  begin
	render params[:path], :layout => nil
  rescue ActionView::MissingTemplate
	render :file => "#{Rails.root}/public/404.html", :status => 404, :layout => false
  end
end
def ajaxindex
	render 'index.html.erb', :layout => nil
end
def kontakt
	Kontakt.new(:name => params[:name], :email=>params[:email], :nachricht => params[:nachricht])
end
end