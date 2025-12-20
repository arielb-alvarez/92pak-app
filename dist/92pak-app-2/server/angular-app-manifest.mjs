
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
    'index.csr.html': {size: 9381, hash: 'd8b95f3a40b612dd2e28485932d7064a2aa202c4114406fd6a91f74039bcfc79', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2385, hash: '63f9bbe18de90ff1b9fff9a4ae7cc02d48e9abcfb612d7496feaff762df4f001', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'disclaimer/index.html': {size: 37753, hash: 'b629ddcbf3f634561d1caea9ed611e0e13a7f729cd83c07bbd2b9de13437d04e', text: () => import('./assets-chunks/disclaimer_index_html.mjs').then(m => m.default)},
    'about-us/index.html': {size: 37150, hash: '4347746b0b1174088ccfb9963561a30104f9000cfe225c75a2e6f9788d967ff7', text: () => import('./assets-chunks/about-us_index_html.mjs').then(m => m.default)},
    'terms-and-conditions/index.html': {size: 38404, hash: '15befa168fd53a0dc4910947c9324b9a415192c1cc7fbc8e78e4a2dba8c5911c', text: () => import('./assets-chunks/terms-and-conditions_index_html.mjs').then(m => m.default)},
    'privacy-policy/index.html': {size: 37578, hash: '15799518c305afc06db4749a454c35623d3b5dfbf5ba02709a10c52e20d796c3', text: () => import('./assets-chunks/privacy-policy_index_html.mjs').then(m => m.default)},
    'index.html': {size: 100382, hash: 'e0e21334da17aa9b3be2c8a759cf33957cf493853344988cea3a23e6aa338604', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact-us/index.html': {size: 41605, hash: '4eb04ac62eaf8a871a17e5479485e91a6b09c18cdaaf699fe5157cd6e43ea169', text: () => import('./assets-chunks/contact-us_index_html.mjs').then(m => m.default)},
    'styles-HMCR3YCH.css': {size: 43201, hash: 'PyiPOE/CNWU', text: () => import('./assets-chunks/styles-HMCR3YCH_css.mjs').then(m => m.default)}
  },
};
