class Kontakt
  include ActiveModel::Validations
  include ActiveModel::Conversion
  extend ActiveModel::Naming
  
  attr_accessor :name, :email, :telefon, :nachricht
  
  validates_presence_of :email
  validates_format_of :email, :with => /\A[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\z/
  
  def sendmail
  	if self.valid?
  	  begin
		Pony.mail(:from => self.email, :to => 'lcstwllr@gmail.com', :subject => 'Kontakt', :body => 'Name: ' + self.name + '\n Telefon: ' + self.telefon + '\n Nachricht: ' + self.nachricht, :via => :smtp, :via_options => {
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
  
  def persisted?
    false
  end
end
