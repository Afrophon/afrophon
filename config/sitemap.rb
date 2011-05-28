# Set the host name for URL creation
SitemapGenerator::Sitemap.default_host = "http://afrophon.de"
SitemapGenerator::Sitemap.yahoo_app_id = nil

SitemapGenerator::Sitemap.add_links do |sitemap|

  sitemap.add "/ueber-uns.html", :priority => 1.0
  sitemap.add "/events.html", :priority => 1.0
  sitemap.add "/kontakt.html", :priority => 1.0
  sitemap.add "/bands.html", :priority => 1.0
  sitemap.add "/unterstuetzer.html", :priority => 1.0
  sitemap.add "/sponsoren.html", :priority => 1.0
  sitemap.add "/bands.html", :priority => 1.0
  sitemap.add "/anteilseigner.html", :priority => 1.0
  sitemap.add "/investorrelations.html", :priority => 1.0
  sitemap.add "/newsletter.html", :priority => 1.0
  sitemap.add "/impressum.html", :priority => 1.0
  sitemap.add "/datenschutz.html", :priority => 1.0
  sitemap.add "/presse.html", :priority => 1.0
  sitemap.add "/entstehung.html", :priority => 1.0
  
  sitemap.add "/findusmc.html", :priority => 1.0
  sitemap.add "/indierocknight.html", :priority => 1.0
  sitemap.add "/libellaswing.html" , :priority => 1.0
  sitemap.add "/meissentanzt.html", :priority => 1.0
  sitemap.add "/safranindross.html", :priority => 1.0
  sitemap.add "/fragezeichen.html", :priority => 1.0
  sitemap.add "/kinderdisco.html", :priority => 1.0
  sitemap.add "/poetryslam.html", :priority => 1.0
  
  # Put links creation logic here.
  #
  # The root path '/' and sitemap index file are added automatically.
  # Links are added to the Sitemap in the order they are specified.
  #
  # Usage: sitemap.add(path, options={})
  #        (default options are used if you don't specify)
  #
  # Defaults: :priority => 0.5, :changefreq => 'weekly',
  #           :lastmod => Time.now, :host => default_host
  # 
  # 
  # Examples:
  # 
  # Add '/articles'
  #   
  #   sitemap.add articles_path, :priority => 0.7, :changefreq => 'daily'
  #
  # Add individual articles:
  #
  #   Article.find_each do |article|
  #     sitemap.add article_path(article), :lastmod => article.updated_at
  #   end
end