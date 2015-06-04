base isomorphic react example
=============================

This is base repo for an isomorphic react application with a flux store.

It utilizes the following:

 -  [express](https://github.com/strongloop/express)
 -  [react-router](https://github.com/rackt/react-router)
 -  [fluxible](https://github.com/yahoo/fluxible)
 -  [react-hot-loader](https://github.com/gaearon/react-hot-loader)

See the `package.json` for more details.

```
├── app
│   ├── actions
│   ├── assets
│   ├── components
│   │   └── contact
│   └── stores
├── config
├── server
├── services
└── webpack
```

Express
-------

`/server/server.js`


Isomorphic React
----------------

`/server/isomorphicReact.js`


Webpack / React Hot Loader
--------------------------

`/webpack/*`


React Application
-----------------

`/app`


Shared Services
---------------

`/services`

[ TODO ]

 -  Services/isomorphic - with just axios instead of fetchr?
 -  investigate client-sessions vs csurf