<img src="logo.png" alt="Let's Cook logo" align="left">

# Let's Cook

**Let's Cook** is your chef companion. Plan your weekly meals and know what to buy and how to cook the meals you want.



## Development

### Installation

```sh
$ git clone https://github.com/wyeworks/lets-cook.git
$ cd lets-cook
$ npm install
$ bower install
$ ember server
```

Then visit http://localhost:4200

### Tests

```sh
$ ember test --server
```

### Deploying

We're using pagefronthq.com to host the application. You can access the application here https://lets-cook.pagefrontapp.com/

#### First time configuration

If it's the first time you're deploying the application, you'll need to create a configuration file `.env.deploy.production` with your pagefront key.

```
PAGEFRONT_KEY=0123456789
```

#### Deploy to production

```
$ ember deploy production
```

and then visit https://lets-cook.pagefrontapp.com/

#### Deploy to staging

```
$ ember deploy staging
```

and then visit https://lets-cook.staging.pagefrontapp.com/

#### Deploy to development

```
$ ember deploy development
```

and then visit https://lets-cook.development.pagefrontapp.com/

## Credits

- App icon is a modification of [chef](https://thenounproject.com/Madebyelvis/collection/chef-food/?i=73620) by [Madebyelvis](https://thenounproject.com/Madebyelvis/) from the [Noun Project](https://thenounproject.com/), used under [cc by-3.0 us](https://creativecommons.org/licenses/by/3.0/us/)

## License

Let's Cook is licensed under the MIT license.

See [LICENSE](./LICENSE.md) for the full license text.
