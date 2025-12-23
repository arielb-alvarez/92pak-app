
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
    'index.csr.html': {size: 9385, hash: '97181ab4471f23a2afa4824c9495d99151f41ebdab2ed2719ce99c19d26f7b35', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2389, hash: 'c82b6731062209e2529656d039fa22d93fb7d6b50737560092fb00f18cb14bcf', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'disclaimer/index.html': {size: 38115, hash: '7225b9d6d06daa429f23cab75fbfba71550bf71e2c08974f1296c3cb029a32d7', text: () => import('./assets-chunks/disclaimer_index_html.mjs').then(m => m.default)},
    'about-us/index.html': {size: 37703, hash: 'fa67a8021ec85ac94157968ca27f3a809263097b2b34d547f1a2e3a9eaa6eb41', text: () => import('./assets-chunks/about-us_index_html.mjs').then(m => m.default)},
    'terms-and-conditions/index.html': {size: 38731, hash: 'cca7d17bef710191d202c25fe620a71a791ad439668d16cdd0dcab7cabdd66e1', text: () => import('./assets-chunks/terms-and-conditions_index_html.mjs').then(m => m.default)},
    'index.html': {size: 100558, hash: 'c56358aa81311f54018218aac12eada870ff4fd7bd9b889ae57505a85622efc5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact-us/index.html': {size: 41906, hash: '1217c71676e90a73f94edae9e7f68e2c2a0d6c5d436f8fdd37788d19e8eb9b75', text: () => import('./assets-chunks/contact-us_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 37893, hash: '0b49bfc3e82c57cae1ca3506d084e5bc745d7f5cce5a6140c725d4bb53bc23f8', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'styles-HMCR3YCH.css': {size: 43201, hash: 'PyiPOE/CNWU', text: () => import('./assets-chunks/styles-HMCR3YCH_css.mjs').then(m => m.default)}
  },
};
