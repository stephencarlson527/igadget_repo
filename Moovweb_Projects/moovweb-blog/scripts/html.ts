# HTML Transformations go here

$("/html") {

  add_assets()


  @import "sections/header.ts"
  @import "sections/footer.ts"

  @import "mappings.ts"

  $("./body") {
    highlight_development()
  }
}
