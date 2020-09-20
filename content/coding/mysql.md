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

Jika saat proses import terjadi error dengan message seperti ini

```
ERROR 2006 (HY000) : MySQL server has gone away
read unix @->/var/run/docker.sock: read: connection reset by peer
```

kemungkinan error diatas disebabkan oleh file database yang terlalu besar. coba solve dengan execute sql berikut di mysql console.

```sql
MariaDB [(none)]> SET GLOBAL max_allowed_packet=1073741824;
Query OK, 0 rows affected (0.004 sec)
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

- [mycli](https://github.com/dbcli/mycli)
- [adminer](/coding/adminer)
- [JSON Data Fields](https://www.sitepoint.com/use-json-data-fields-mysql-databases/)
- [MySQL Docker Image](https://hub.docker.com/_/mysql)

#database #rdbms #mysql #docker
