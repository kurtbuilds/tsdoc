resource "namecheap_domain_records" "tsdoc" {
  domain = "tsdoc.io"
  mode = "MERGE"

  record {
    hostname = "www"
    type = "CNAME"
    address = "tsdoc-static.onrender.com"
  }

  record {
    hostname = "@"
    type = "URL301"
    address = "https://www.tsdoc.io"
    ttl = 300
  }

  record {
    hostname = "supporting-thirtyeight"
    type = "CNAME"
    address = "good-blue.b-cdn.net"
    ttl = 300
  }
}
