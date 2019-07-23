# Mysql

## Mysql Tunnel

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

#### Import database from host into a mysql docker container

```bash
docker exec -i {container_name} mysql -u{username} -p{password} {db_name} < {filename}.sql
```
