# konti

Konti aims to be a platform for tracking contributions for various causes/initiatives.

## Tech Stack

Konti is built using the following tools

- Laravel Framework
- Laravel Sail
- TailwindCSS
- ReactJS
- SQLite for the database

So you will need to have the following installed

- PHP 8+
- Docker (for Laravel Sail to work)
- NodeJS 20+ 
- NPM 7+

## Setting up for development

In order to build and run the code, you will first need to have the code on your machine.

Use git to clone, and then cd into the cloned directory:

```sh
$ git clone https://github.com/geekquest/konti.git

$ cd konti
```


If you are part of the GeekQuest organization, you can clone using the
SSH URL when cloning, like so:

```sh
$ git clone git@github.com:geekquest/konti.git
```

Since we are using Laravel Sail for development, you will have to run the
following docker command to initialize the project. This will download the
composer dependencies required for the project to run

```sh
$ docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v "$(pwd):/var/www/html" \
    -w /var/www/html \
    laravelsail/php82-composer:latest \
    composer install --ignore-platform-reqs
```

## Running the code

After you have completed setup process, you can now run the platform at any time using
the following command which will start some docker containers, in particular it will
run the webserver and bind to port 80 - 

### Server Side

```sh
$ ./vendor/bin/sail up
```

When this runs successfully you can visit `http://localhost:80/`


### Front-end

Some components of the front-end will be built with React. In order to run and build the
React bits you will need to run the following in another terminal


For the development server:

```sh
$ ./vendor/bin/sail npm run dev
```

To build the front-end assets for production:

```sh
$ ./vendor/bin/sail npm run build
```

As you can see, sail takes care of all that for us.


## Are you stuck?

Not using sail? You should be able to get around with composer and your regular Laravel commands...


# LICENSE

MIT License.