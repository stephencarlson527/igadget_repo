match($host, /moov-origin/) {
  parse_headers() {
    match(name(), /^Location$/i) {
      value("blog.moovdemos.com")
    }
  }
}

