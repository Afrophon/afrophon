#coding: utf-8
class PagesController < ApplicationController
def ajax
  begin
	render params[:path], :layout => "ajax", :content_type => Mime::XML
  rescue ActionView::MissingTemplate
	render :file => "#{Rails.root}/public/404.html", :status => 404, :layout => false
  end
end
def ajaxindex
	render 'index.html.erb', :layout => "ajax", :content_type => Mime::XML
end
def kontakt
	@nachricht = ""
	if params[:authenticity_token] == form_authenticity_token
		@kontakt = Kontakt.new
		@kontakt.email = params[:email]
		@kontakt.name = params[:name]
		@kontakt.telefon = params[:telefon]
		@kontakt.nachricht = params[:nachricht]
		@kontakt.sendmail
		@nachricht = "Wir haben deine Nachricht bekommen <br /> und werden uns in Kürze bei dir melden. Vielen Dank!"
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
  	render 'kontakt.html.erb', :locals => {:nachricht => @nachricht, :email => params[:email], :name => params[:name], :telefon => params[:telefon], :text => params[:nachricht]}
end
def newsletter
	@nachricht = ""
	if params[:authenticity_token] == form_authenticity_token
		@newsletter = Newsletter.new
		@newsletter.email = params[:email]
		@newsletter.name = params[:name]
		@newsletter.sendmail
		@nachricht = "Vielen Dank für dein Interesse! Wir melden uns demnächst!"
		@newsletter.errors.full_messages.each do |error|
    		if (error == "Email can't be blank")
    	    	@nachricht = "Gib bitte eine E-Mail Adresse an!"
    	    	break
    		elsif (error == "Email is invalid")
     		   	@nachricht = "Die eingegebene E-Mail Adresse existiert nicht!"
     		   	break
    		end
    	end
  	end
  	render 'newsletter.html.erb', :locals => {:nachricht => @nachricht, :email => params[:email], :name => params[:name]}
end
end
