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
	Pony.mail(:from => "lcstwllr@gmail.com", :to => 'lcstwllr@gmail.com', :subject => 'Kontakt', :via => :smtp, :via_options => {
   			:address        => "smtp.sendgrid.net",
  			:port           => "25",
  			:authentication => :plain,
  			:user_name      => ENV['SENDGRID_USERNAME'],
  			:password       => ENV['SENDGRID_PASSWORD'],
  			:domain         => ENV['SENDGRID_DOMAIN']
  		})
	@nachricht = ""
	if params[:authenticity_token] == form_authenticity_token
		@kontakt = Kontakt.new
		@kontakt.email = params[:email]
		@kontakt.name = params[:name]
		@kontakt.telefon = params[:telefon]
		@kontakt.nachricht = params[:nachricht]
		@kontakt.sendmail
		@nachricht = "Wir haben deine Nachricht bekommen und werden uns in Kürze bei dir melden. Vielen Dank!"
		@kontakt.errors.full_messages.each do |error|
    		if (error == "Email can't be blank")
    	    	@nachricht = "Gib bitte eine E-Mail Adresse an!"
    	    	break
    		elsif (error == "Email is invalid")
     		   	@nachricht = "Die eingegebene E-Mail Adresse existiert nicht!"
     		   	break
    		end
    	end
  	end
  	render 'kontakt.html.erb', :locals => {:nachricht => @nachricht}
end
end