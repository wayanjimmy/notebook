---
title: "Mysql"
metaTitle: "Mysql"
metaDescription: "Mysql"
---

### Mysql Tunnel

#### Create tunnel connection

Create a mysql tunnel connection

```bash
ssh -f -N -L 3307:localhost:3306 pzstaging
```

`pzstaging` is a ssh connection which have mysql running on port `3306` and will be tunnelled into your localhost port `3307`

#### Kill tunnel connection

Grab the pid using this command

```bash
ps aux | grep ssh
```

and then kill the process using `kill` command

```bash
kill <pid>
```

### Docker

Import database from host into a mysql docker container

```bash
docker exec -i {container_name} mysql -u{username} -p{password} {db_name} < {filename}.sql
```

Set `my.cnf` parameter from `docker-compose.yml` file

```yaml
db:
  image: mysql:5.7
  volumes:
    - dbdata:/var/lib/mysql
  ports:
    - "3306:3306"
  environment:
    MYSQL_ROOT_PASSWORD: secret
    MYSQL_DATABASE: doctorassist
  command:
    - --wait_timeout=28800
    - --innodb_log_file_size=128M
```

## Links

- [https://hub.docker.com/\_/mysql](https://hub.docker.com/_/mysql)
- [mycli](https://github.com/dbcli/mycli)

#database #rdbms #mysql #docker
