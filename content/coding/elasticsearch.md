---
title: "Elastic Search"
metaTitle: "Elastic Search"
metaDescription: "Elastic Search"
---

> You Know, for Search

Elastic v6.5.1
default username & password

```
elastic:changeme
```

docker compose example

```
es01:
    image: docker.elastic.co/elasticsearch/elasticsearch:6.5.1
    container_name: es01
    environment:
      - cluster.name=es-docker-cluster
      - bootstrap.memory_lock=true
      - "ES_JAVA_OPTS=-Xms512m -Xmx512m"
      - ELASTIC_PASSWORD=changeme
      - http.cors.enabled=true
      - http.cors.allow-origin=http://localhost:1358,http://127.0.0.1:1358
      - http.cors.allow-headers=X-Requested-With,X-Auth-Token,Content-Type,Content-Length,Authorization
      - http.cors.allow-credentials=true

    ulimits:
      memlock:
        soft: -1
        hard: -1
    volumes:
      - es01data:/usr/share/elasticsearch/data
    ports:
      - "9200:9200"
```

On troubleshooting

vm.max_map_count [65530] is too low in Docker
solusinya adalah eksekusi command ini

```
sudo sysctl -w vm.max_map_count=262144
```

## Links

- [Building search tools in Go](/content/podcasts/building-search-tools-in-go.md)
- [https://github.com/elastic/elasticsearch-docker/issues/92](https://github.com/elastic/elasticsearch-docker/issues/92)

#fulltext-search #search-engine #tools
