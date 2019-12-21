---
title: "Adminer"
metaTitle: "Adminer"
metaDescription: "Adminer"
---

Run adminer on top of docker

```
docker run -e "ADMINER_PLUGINS=dump-json" -p 8080:8080 -d adminer
```

Adding `ADMINER_PLUGINS=dump-json` , will install `dump-json` adminer plugins. It will make you able to export data to JSON file.

Problem when connecting to Mysql without password
---

The latest version adminer force your database enabled with password, but if your current mysql is not have password yet, you can set the password using this commands.

```bash
mysql -u root
> USE mysql;
> UPDATE user SET authentication_string=PASSWORD("NEWPASSWORD") WHERE User='root';
> FLUSH PRIVILEGES;
> quit
```
