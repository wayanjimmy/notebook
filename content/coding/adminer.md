---
title: "Adminer"
metaTitle: "Adminer"
metaDescription: "Adminer"
---

Run adminer on top of docker

```bash
docker run -e "ADMINER_PLUGINS=dump-json" -p 8080:8080 -d adminer
```

Adding `ADMINER_PLUGINS=dump-json` will install `dump-json` adminer plugins. It will make you to be able export data to JSON formatted file.

Adminer using docker-compose with themes

```yml
adminer:
  image: adminer
  restart: always
  ports:
    - "7070:8080"
  environment:
    ADMINER_PLUGINS: "dump-json"
  volumes:
    - ./adminer.css:/var/www/html/adminer.css
```

Problem when connecting to MySQL without password
The latest version adminer force your database enabled with password, but if your current mysql is not have password yet, you can set the password using this commands.

```bash
mysql -u root
> USE mysql;
> UPDATE user SET authentication_string=PASSWORD("NEWPASSWORD") WHERE User='root';
> FLUSH PRIVILEGES;
> quit
```

## Links

- [Flat UI flavored theme](https://gist.github.com/wayanjimmy/d050424c3e2bb337972eecfe1143c1a3)
- [https://github.com/pappu687/adminer-theme](https://github.com/pappu687/adminer-theme)

#database #sql #mysql #adminer
