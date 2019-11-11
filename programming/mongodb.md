MongoDB
=======

Install mongodb cli on the system

-	[Install Mongodb on MacOS](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x)

Restore dumped mongodb database into your local mongo instance. Replace backup with the database folder name.

```bash
mongorestore backup/ --host localhost:9001
```

To restore from a compressed archive file, run `mongorestore` with both the `--gzip` command and the `--archive` options.

```bash
mongorestore --gzip --archive=1572541233.gz --host localhost:9001
```
