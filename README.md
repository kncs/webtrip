# Webtrip

This is just a website to share with people one of my trip.

## Structure

Project structure is based on [react-redux-starter-kit](https://github.com/davezuko/react-redux-starter-kit)

```
.
├── bin                      # Build/Start scripts
├── build                    # All build-related configuration
│   └── webpack              # Environment-specific configuration files for webpack
├── config                   # Project configuration settings
├── server                   # Koa application (uses webpack middleware)
│   └── main.js              # Server application entry point
│
└── src                      # Application source code
    ├── components           # Generic React Components (generally Dumb components)
    ├── containers           # Components that provide context (e.g. Redux Provider)
    ├── layouts              # Components that dictate major page structure
    ├── redux                # Redux-specific pieces
    │   ├── modules          # Collections of reducers/constants/actions
    │   └── utils            # Redux-specific helpers
    ├── routes               # Application route definitions
    ├── static               # Static assets (not imported anywhere in source code)
    ├── styles               # Application-wide styles (generally settings)
    ├── views                # Components that live at a route
    └── main.js              # Application bootstrap and rendering
```

## Instructions

Here are basic instructions supported :

|Script|Description|
|---|---|
|`npm start`|Spins up Koa server to serve your app at `localhost:3000`. HMR will be enabled in development.|
|`npm run compile`|Compiles the application to disk (`~/dist` by default).|
|`npm run dev`|Same as `npm start`, but enables nodemon to automatically restart the server when server-related code is changed.|
|`npm run dev:nw`|Same as `npm run dev`, but opens the redux devtools in a new window.|
|`npm run dev:no-debug`|Same as `npm run dev` but disables redux devtools.|
|`npm run deploy`|Runs linter, tests, and then, on success, compiles your application to disk.|
|`npm run lint`|Lint all `.js` files.|
|`npm run lint:fix`|Lint and fix all `.js` files. [Read more on this](http://eslint.org/docs/user-guide/command-line-interface.html#fix).|
