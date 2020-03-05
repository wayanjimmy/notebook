---
title: "Laravel"
metaTitle: "Laravel"
metaDescription: "Laravel, framework PHP modern yang jadi pilihan utama saya"
---

## Docker

Penyebab error permission denied saat menjalankan laravel app yang di dockerize adalah user yg execute proses composer install adalah root user.
Usahakan setup non root user yaitu www-data di container php-fpm. Berikut contoh dockerfilenya.

```Dockerfile
FROM php:7.3-fpm

COPY composer.lock composer.json /usr/web/

WORKDIR /usr/web

RUN set -xe \
	&& DEP_BUILD="\
	git \
	build-essential \
	automake \
	bison \
	flex \
	libtool \
	unzip \
	re2c" \
	&& apt update && apt update \
	&& apt install -y $DEP_BUILD --no-install-recommends --no-install-suggests \
	&& mkdir -p /tmp/sdk \
	&& mkdir -p /opt/sqlanywhere16 \
	&& cd /tmp \
	&& curl -fSL https://s3.amazonaws.com/sqlanywhere/drivers/php/sasql_php.zip -o ./sdk/sasql_php.zip \
	&& git clone --depth 1 https://github.com/cbsan/sdk-sqlanywhere-php.git dep_sdk \
	&& cp -r ./dep_sdk/dep_lib/* /opt/sqlanywhere16 \
	&& cd ./sdk \
	&& unzip sasql_php.zip \
	&& phpize \
	&& ./configure --with-sqlanywhere \
	&& make \
	&& make install \
	&& docker-php-ext-enable sqlanywhere \
	&& ln -sF /usr/local/etc/php/php.ini-development /usr/local/etc/php/php.ini \
	&& sed -i "s/;date.timezone =.*/date.timezone = America\/Sao_Paulo/" /usr/local/etc/php/php.ini \
	&& rm -rf /tmp/* \
	&& echo "/opt/sqlanywhere16/lib64" >> /etc/ld.so.conf.d/sqlanywhere16.conf \
	&& ldconfig \
	&& cd / && ln -sF /opt/sqlanywhere16/dblgen16.res dblgen16.res

#Get Composer
RUN curl -o /tmp/composer-setup.php https://getcomposer.org/installer \
&& curl -o /tmp/composer-setup.sig https://composer.github.io/installer.sig \
# Make sure we're installing what we think we're installing!
&& php -r "if (hash('SHA384', file_get_contents('/tmp/composer-setup.php')) !== trim(file_get_contents('/tmp/composer-setup.sig'))) { unlink('/tmp/composer-setup.php'); echo 'Invalid installer' . PHP_EOL; exit(1); }" \
&& php /tmp/composer-setup.php --no-ansi --install-dir=/usr/local/bin --filename=composer --snapshot \
&& rm -f /tmp/composer-setup.*

RUN usermod -u 1000 www-data

COPY --chown=www-data:www-data . /usr/web

USER www-data
```

## Favorite composer packages

- [https://github.com/spatie/laravel-activitylog](https://github.com/spatie/laravel-activitylog)
- [https://github.com/spatie/laravel-medialibrary](https://github.com/spatie/laravel-medialibrary)
- [https://github.com/spatie/laravel-model-status](https://github.com/spatie/laravel-model-status)
- [https://github.com/BenSampo/laravel-enum](https://github.com/BenSampo/laravel-enum)
- [https://github.com/owen-it/laravel-auditing](https://github.com/owen-it/laravel-auditing)
- [https://github.com/rebing/graphql-laravel](https://github.com/rebing/graphql-laravel)

## Links

- [Real world Laravel](/programming/real-world-laravel.md)
- [Laravel best practices](https://github.com/alexeymezenin/laravel-best-practices)

#php #laravel #docker #framework #backend
