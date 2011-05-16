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
  begin
	Pony.mail(:from => params[:email], :to => 'lcstwllr@gmail.com', :via => :smtp, :via_options => {
   		:address        => "smtp.sendgrid.net",
  		:port           => "25",
  		:authentication => :plain,
  		:user_name      => ENV['SENDGRID_USERNAME'],
  		:password       => ENV['SENDGRID_PASSWORD'],
  		:domain         => ENV['SENDGRID_DOMAIN']
  	})
  rescue
  end
end
end