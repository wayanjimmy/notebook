---
title: "Testing in Go"
metaTitle: "Testing in Go"
metaDescription: "Testing in Go"
---

- Running test but with loading variables from `.env` file
  ```
  godotenv -f .env go test ./path/to/the/modules -v
  ```
  - `-v` stands for verbose

## Links

- [Godotenv Command Mode](https://github.com/joho/godotenv#command-mode)
- [Can't use godotenv when running tests](https://github.com/joho/godotenv/issues/43)
- [Use Flag for Input in Integration Test](https://mobile.twitter.com/joncalhoun/status/1286335730223058945)

#testing #go
