module ApplicationHelper
  def links
  	content_tag(:div, link_to("Findus MC", '/veranstaltung.html'), :class => "normal small")
  end
end
