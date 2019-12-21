---
title: "Ruby"
metaTitle: "Ruby"
metaDescription: "Ruby"
---

```
x = "100".to_i
```

The dot means that message `to_i` is being sent to the string `"100"`. The string `"100"` is called the *receiver* of the message. We can also say that the method `to_i` being *called* on the string `"100"`. The result of method call - the integer 100 - serves as the right-hand side of the assignment to the variable `x`.

In Ruby, a method will return the result of the last evaluated statement. Explicitly using the `return` keyword is therefore unnecessary, except when returning early in a method.

For example, this will print `16` as the multiply method returns the result of `a * b`, its final expression.

```ruby
def multiple(a, b)
  a * b
end

print multiple(2, 8)
```

Links
---

-	[Ruby’s Exceptional Creatures](https://www.exceptionalcreatures.com)
-	[Write fast code ruby on rails](https://engineering.shopify.com/blogs/engineering/write-fast-code-ruby-rails)
-	[Ruby on Rails development guide](https://ideamotive.co/ruby-on-rails-development-guide/?in-2019)
-	[Dockerizing Ruby and Rails development](https://evilmartians.com/chronicles/ruby-on-whales-docker-for-ruby-rails-development)
-	[Rails on Docker](https://thoughtbot.com/blog/rails-on-docker)
