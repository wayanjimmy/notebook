---
title: "HTTP Client"
metaTitle: "HTTP Client"
metaDescription: "HTTP Client"
---

- Adding proxy to go http client
  ```go
  proxyUrl, err := url.Parse("http://proxyIp:proxyPort")
  myClient := &http.Client{Transport: &http.Transport{Proxy: http.ProxyURL(proxyUrl)}}
  ```

## Links

- [Setting up proxy for HTTP client](https://stackoverflow.com/questions/14661511/setting-up-proxy-for-http-client)
