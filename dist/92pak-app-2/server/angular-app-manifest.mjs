
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/about-us"
  },
  {
    "renderMode": 2,
    "route": "/privacy-policy"
  },
  {
    "renderMode": 2,
    "route": "/terms-and-conditions"
  },
  {
    "renderMode": 2,
    "route": "/disclaimer"
  },
  {
    "renderMode": 2,
    "route": "/contact-us"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 9385, hash: '4270487e5ef5d99153522f74cf32762e20f14e24b9a2233ac6f5cf31ba31501a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2389, hash: 'c4f1508286164355a5ce759999cdb09072d764b89df8f88833beec1e08cfe472', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'disclaimer/index.html': {size: 38063, hash: '78269bf6827c46e9be5ac561b26ff45c258ce0f4c9253aad2974521a66b8c2aa', text: () => import('./assets-chunks/disclaimer_index_html.mjs').then(m => m.default)},
    'about-us/index.html': {size: 37651, hash: 'd8659317e93cc3222e93b8a16429a96e44f894c971735633c1f964e20cd73f7a', text: () => import('./assets-chunks/about-us_index_html.mjs').then(m => m.default)},
    'index.html': {size: 100506, hash: 'ed74c7c74836f3896cf591862bc97ca55f207a3c5902d91928fbdaffd674035c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 37841, hash: '9574f53abdfd3a7048f887f052dabe09f7fe7e6f3b11ce8174269efee221a764', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'terms-and-conditions/index.html': {size: 38679, hash: '17ac7c284e53c776001b01e692eaac781c5a45e51328d0faaf5c379ff96dbc59', text: () => import('./assets-chunks/terms-and-conditions_index_html.mjs').then(m => m.default)},
    'contact-us/index.html': {size: 41855, hash: '9897f2d869b2a80b1b45dca738da0be734afc6e651c0d8178cfcf0fdc72343e5', text: () => import('./assets-chunks/contact-us_index_html.mjs').then(m => m.default)},
    'styles-HMCR3YCH.css': {size: 43201, hash: 'PyiPOE/CNWU', text: () => import('./assets-chunks/styles-HMCR3YCH_css.mjs').then(m => m.default)}
  },
};
