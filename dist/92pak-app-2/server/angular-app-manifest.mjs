
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
    'index.csr.html': {size: 10405, hash: 'f70a6c38a59c63b994f332c26583e6ad0ebf3bce5249dc33977af5b1a014ed23', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2385, hash: 'be49d45bb77be855c4da45b2c2ce57814465dcf6121afad1aab25d734b61a9d2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about-us/index.html': {size: 38228, hash: '420d3bf3ee687269be3398d13c1f08979b9fc004d80326cf32d2ef85b22d5c94', text: () => import('./assets-chunks/about-us_index_html.mjs').then(m => m.default)},
    'terms-and-conditions/index.html': {size: 39482, hash: 'cdda7ce0342bacbb45a2502b32d684ed21ca52fa24c1f54d3083603c5293b89c', text: () => import('./assets-chunks/terms-and-conditions_index_html.mjs').then(m => m.default)},
    'disclaimer/index.html': {size: 38831, hash: 'ecff89b9b34321422ebc55db4372995abf2f50f46a6f709a62721c4aae374d39', text: () => import('./assets-chunks/disclaimer_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 38656, hash: 'f33d4739f95ae9ff1cb548eb50c42a8465219d09d4e6bd7ddf673b77f818b0d3', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'contact-us/index.html': {size: 42683, hash: '3489f3f037f00826e717f27da392ba4163fa3b48bc9ebefc4ecd05b192a9640e', text: () => import('./assets-chunks/contact-us_index_html.mjs').then(m => m.default)},
    'index.html': {size: 101460, hash: '1685852e0a1369c630cf935aeca0a0251de05c1083569b4cc5ce0d0d8c51c71d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-Y7B7QBQK.css': {size: 45291, hash: 'kRg4zA43Hqo', text: () => import('./assets-chunks/styles-Y7B7QBQK_css.mjs').then(m => m.default)}
  },
};
