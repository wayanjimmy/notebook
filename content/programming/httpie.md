Create a simple request :

```bash
$ http httpie.org
```

Custom headers and JSON data :

```bash
$ http PUT example.org X-API-Token:123 name=John
```

Submit form :

```bash
$ http -f POST example.org hello=World
```

Combine with fx
---

[GitHub - antonmedv/fx: Command-line tool and terminal JSON viewer 🔥](https://github.com/antonmedv/fx)

```bash
http POST /api/auth email=admin@root.com password=secret | fx 'json => json.meta.token' | pbcopy
```

in order to use the token on the next endpoint we can store the token in a shell variable, because I’m using fish shell so create a variable would be like this

```bash
set -l auth_token (pbpaste)
echo $auth_token
```
