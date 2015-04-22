match($host, /moov-origin/) {
  parse_headers() {
    match(name(), /^Host$/i) {
      log("$host: "+ $host)
      log("new host: "+ "blog.moovdemos.com")
      value("blog.moovdemos.com")
    }
  }
}

