---
title: "Docker"
metaTitle: "Docker"
metaDescription: "Docker"
---

Docker for Rails Developer
--------------------------

Menjalankan script ruby dengan docker

```shell
docker run ruby:2.6 ruby -e "puts 'hello'"
```

Melihat daftar container yang berjalan

```shell
docker ps

# memperlihatkan semua termasuk yang sudah diberhentikan
docker ps -a
```

Membuat rails app dengan docker

```shell
mkdir <project_name> && cd <project_name>
docker run -i -t --rm -v (PWD):/usr/src/app ruby:2.6 bash

# setelah didalam container
gem install rails
cd /usr/src/app
rails new . --skip-test --skip-bundle
```

Menjalankan rails app dengan Dockerfile

```dockerfile
FROM ruby:2.6

RUN apt-get update -yqq
RUN apt-get install -yqq --no-install-recommends nodejs

COPY . /usr/src/app/

WORKDIR /usr/src/app
RUN bundle install
```

Kemudian build custom image dari dockerfile diatas dengan perintah berikut.

```shell
docker build .
```

Melihat daftar docker images yang tersedia

```shell
docker images
```

Menjalankan rails app

```
docker run -p 3000:3000 434ec07e1f20 bin/rails s -b 0.0.0.0
```

Memberikan tag pada docker image agar lebih mudah diingat

```shell
docker tag 434ec07e1f20 railsapp
```

Memberikan docker tag berupa **version number**

```shell
docker tag railsapp railsapp:1.0
```

Build custom image menggunakan docker tag

```shell
docker build -t railsapp -t railsapp:1.0 .
```

Menambahkan default command ke Dockerfile untuk menghindari start rails server secara manual setiap menjalankan container

```dockerfile
FROM ruby:2.6

RUN apt-get update -yqq
RUN apt-get install -yqq --no-install-recommends nodejs

COPY . /usr/src/app/

WORKDIR /usr/src/app
RUN bundle install

CMD ["bin/rails", "s", "-b", "0.0.0.0"]
```

Docker for Mac
--------------

Docker for Mac Desktop Native memiliki masalah pada storage yang agak lambat

Solusi: Gunakan docker toolbox yang menggunakan virtualbox, bukan hyperkit

-	[Docker toolbox](https://docs.docker.com/docker-for-mac/docker-toolbox)
