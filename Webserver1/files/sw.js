importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "hometown_cab",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.1c4d9d504dd0238adddb.js",
    "revision": "b2735316873faf09d655ca271630c622"
  },
  {
    "url": "/_nuxt/app.bc35257661150fa55f19fa5726fe83ae.css",
    "revision": "bc35257661150fa55f19fa5726fe83ae"
  },
  {
    "url": "/_nuxt/layouts/default.de4a44ed5c1c0d99faec.js",
    "revision": "e84e72dcc8a93e39b987be19db2ea4e2"
  },
  {
    "url": "/_nuxt/manifest.5ea9fb2b8f46cb39f36c.js",
    "revision": "217e49c5c9db8e9d4566850a898e84a8"
  },
  {
    "url": "/_nuxt/pages/index.a5c062099bc1b4eebde2.js",
    "revision": "34eeed5e484ee83ea4eea0f1df8adafb"
  },
  {
    "url": "/_nuxt/vendor.1b4c35a4de7d283fdad0.js",
    "revision": "46f785a39a39b186a6a7c5f6b68881da"
  },
  {
    "url": "/_nuxt/vendor.90f8ab196048ffda1d316f834197da47.css",
    "revision": "90f8ab196048ffda1d316f834197da47"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp(''), workboxSW.strategies.cacheFirst({}), 'GET')

