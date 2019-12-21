Url standard package
---

```javascript
require('url').parse('/status?name=jimmy')
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: '?name=jimmy',
  query: 'name=jimmy',
  pathname: '/status',
  path: '/status?name=jimmy',
  href: '/status?name=jimmy' }
```

Notice that the `query` key from the Url object is a string.

If you pass `true` to the second argument of `url.parse()` method, It means to extract the query parameters from the query string.

```javascript
require('url').parse('/status?name=jimmy', true)
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: '?name=jimmy',
  query: [Object: null prototype] { name: 'jimmy' },
  pathname: '/status',
  path: '/status?name=jimmy',
  href: '/status?name=jimmy' }
```
