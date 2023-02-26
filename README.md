# konti

Konti is an experiment to create a simple application in Laravel that uses the [Greypot Studio API](https://greypot-studio.fly.dev)

```sh
$ git clone https://github.com/zikani03/konti.git

$ cd konti
```

## First time setup with Docker

```sh
$ docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v "$(pwd):/var/www/html" \
    -w /var/www/html \
    laravelsail/php82-composer:latest \
    composer install --ignore-platform-reqs
```

Then with sail

```sh
$ ./vendor/bin/sail up
```

Not using sail? You should be able to get around with composer and your regular Laravel commands...
