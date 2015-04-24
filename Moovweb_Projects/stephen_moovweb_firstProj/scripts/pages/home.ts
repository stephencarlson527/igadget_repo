$$("body") {
	# Adding a class for page-specific styling
	add_class("_home")

	$("./div[@id='Container']/div[@id='Outer']") {
    $("./div[@id='Wrapper']") {
      $("./div[@class='Left']") {
        remove()
      }
      $("./div[@class='Content']") {
        $("./div[@id='HomeFeaturedProducts']") {      
        }  
      }
    }
  }
}
# Removes all RSS image spans
$("//span[contains (@class, 'FeedLink')]") {
  remove()
}