 $("./body") {
  insert("footer", class: "mw-footer") {
      # Move stuff here
    	move_here("..//div[@id='Footer']", "top")
   }
}

	$$("#Footer") {
		remove("./a")
	  remove("./p")
		insert("p", "All prices are in USD", class: "line1") 
		insert("p", "Copyright 2015 iGadgetCommerce.", class: "line2") 
		insert("p", "powered by:", class: "line3")
		insert("div", class: "mw-footer-logo sprites-moovweb")
}







