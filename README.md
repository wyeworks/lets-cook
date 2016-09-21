# Lets-cook

Let's cook is your chef companion. Plan your weekly meals and know what to buy and how to cook the meals you want.

## Development

### Installation

```sh
$ git clone https://github.com/san650/lets-cook.git
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

## License

lets-cook is licensed under the MIT license.

See [LICENSE](./LICENSE.md) for the full license text.
