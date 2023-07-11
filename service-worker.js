/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "0a37ca576c489ce9e52e3c1078e299a9"
  },
  {
    "url": "android-chrome-192x192.png",
    "revision": "44cf46e8d7fcf99599a3d0ceb8cfd754"
  },
  {
    "url": "android-chrome-512x512.png",
    "revision": "2f5534f0c11a94318898d8e8e67a7ea9"
  },
  {
    "url": "api.html",
    "revision": "180cd25c1886ecdc0cb3969f1793b351"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "5d47fcf7009db7bcbd06ae7bff46863a"
  },
  {
    "url": "assets/css/0.styles.0a483fa8.css",
    "revision": "03dbc13f4535fbfae557d6e64f99e437"
  },
  {
    "url": "assets/img/detectiongate_setup_1.25bd04bc.png",
    "revision": "25bd04bc742bd3a274b911e27ccbc11d"
  },
  {
    "url": "assets/img/detectiongate_setup_2.ff0bc795.png",
    "revision": "ff0bc7952c0736ce49f89dfcd1afdada"
  },
  {
    "url": "assets/img/levelchecknpc_setup.372c0584.png",
    "revision": "372c0584f661e93786e291d7c481f12e"
  },
  {
    "url": "assets/img/pinconsole_multiple_bankaccounts_en.f6f6dc72.png",
    "revision": "f6f6dc72c4367f42dedc18e6ae0bdf00"
  },
  {
    "url": "assets/img/pinconsole_multiple_bankaccounts_nl.4b88bbec.png",
    "revision": "4b88bbec2fd5ba1942a5a2ab61ccb920"
  },
  {
    "url": "assets/img/pinconsole_setup_en.499d9d4c.png",
    "revision": "499d9d4c9288068bad9e11fca195981b"
  },
  {
    "url": "assets/img/pinconsole_setup_nl.539ed98e.png",
    "revision": "539ed98e626f653025f9c5d3ec64e147"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/teleporter_example.63a4bb1e.png",
    "revision": "63a4bb1eb36299bc9a6bd67b71f5e478"
  },
  {
    "url": "assets/img/teleportercmd_help.e314c659.png",
    "revision": "e314c6591270cd7bb2ded9c18a8b2e27"
  },
  {
    "url": "assets/img/teleportercmd_help.f5d0f6c5.png",
    "revision": "f5d0f6c513b401ee9a12261ec42480c7"
  },
  {
    "url": "assets/js/10.d88c485b.js",
    "revision": "ea7b650a60094ff267fbdc2b19094a3c"
  },
  {
    "url": "assets/js/11.65f4e5d1.js",
    "revision": "3c6a36ad210e400f7f00cd7793c36f3b"
  },
  {
    "url": "assets/js/12.c7be8b58.js",
    "revision": "fa835bb7fa04cdcbf320067f8e8fddd8"
  },
  {
    "url": "assets/js/13.910f6c27.js",
    "revision": "188fb9121fccc71c66d4dc9e8aecc902"
  },
  {
    "url": "assets/js/14.b57a6baf.js",
    "revision": "41b16d8290974c7ace505753310b8cd7"
  },
  {
    "url": "assets/js/15.228c758e.js",
    "revision": "ffb50fa5c2a56726b3f74a63ba87c4ba"
  },
  {
    "url": "assets/js/16.6597d454.js",
    "revision": "a1a390f232228fca116e2231cb4a5a3b"
  },
  {
    "url": "assets/js/17.db187bdf.js",
    "revision": "3de146b01dcd952b60d557e9496999ce"
  },
  {
    "url": "assets/js/18.ec29f1dc.js",
    "revision": "d53ec5560392bc389f2b5c51a125cea2"
  },
  {
    "url": "assets/js/19.cb797257.js",
    "revision": "c1015fcc5748614bd689fe525e859716"
  },
  {
    "url": "assets/js/20.dd2b08ff.js",
    "revision": "f1ead2e33ba9b6f07b8432e92bf14cb7"
  },
  {
    "url": "assets/js/21.13484ba9.js",
    "revision": "36041a749a2646ff279e849949dd5008"
  },
  {
    "url": "assets/js/22.f886b47a.js",
    "revision": "03d3853141b1bced8b78fff768e20b8e"
  },
  {
    "url": "assets/js/23.5712d80d.js",
    "revision": "4704ab3ff6e8ec282d465b8e502e7b6d"
  },
  {
    "url": "assets/js/24.e7b349a4.js",
    "revision": "ca0ac757694f952209bfe209839bb452"
  },
  {
    "url": "assets/js/25.f2a2eaaa.js",
    "revision": "1585509d1e900fa758ed26363ed9d229"
  },
  {
    "url": "assets/js/26.11bc86f3.js",
    "revision": "1054ec3cbf9e4d6f0a53719fc2da0aff"
  },
  {
    "url": "assets/js/27.0cca92af.js",
    "revision": "a1e64571b4d0925ce86cd54ba688c0bd"
  },
  {
    "url": "assets/js/28.b1e2f835.js",
    "revision": "a389609d0666cf71ea34fea1c22478b5"
  },
  {
    "url": "assets/js/29.795a4cde.js",
    "revision": "b6d3b1a9a77c04b32ff16e46abe587bd"
  },
  {
    "url": "assets/js/3.05f25cdb.js",
    "revision": "7cad5ec91de04137eeeb876fa00044d3"
  },
  {
    "url": "assets/js/30.4e9f83db.js",
    "revision": "0972c9ca6509cae3f96e52af1e654178"
  },
  {
    "url": "assets/js/31.3114de82.js",
    "revision": "d4895ffb97fae8916e57faac39d3702c"
  },
  {
    "url": "assets/js/32.8caa42a6.js",
    "revision": "c862b8f53df798d5e996720308dd7559"
  },
  {
    "url": "assets/js/33.242e80a0.js",
    "revision": "05ce1b19f3ae4132dd7cf7f293d8df45"
  },
  {
    "url": "assets/js/34.66922882.js",
    "revision": "f531bc750638dc63eeca8e48b3fb300c"
  },
  {
    "url": "assets/js/35.cd442656.js",
    "revision": "9acef54d2c1a8200f5ff79dacd4b61a9"
  },
  {
    "url": "assets/js/36.9da5605e.js",
    "revision": "034bae5ddb42f5c07f933c72f0c2cd1a"
  },
  {
    "url": "assets/js/37.1d9b6d72.js",
    "revision": "f06f286f8b7053c2f121efb391595e65"
  },
  {
    "url": "assets/js/38.e6403420.js",
    "revision": "f28af7170402aa1ac3d9be1fba4de473"
  },
  {
    "url": "assets/js/39.e77d2707.js",
    "revision": "627e41f3f6d0aede92595475908a1736"
  },
  {
    "url": "assets/js/4.c484f41f.js",
    "revision": "72ca9da6f8098c970fe1742b24a25b26"
  },
  {
    "url": "assets/js/5.9f6e08db.js",
    "revision": "1d83bee1c9ced98b7d30eed4a8b36d22"
  },
  {
    "url": "assets/js/6.512efe0b.js",
    "revision": "252b852ec3895d26c8c71a37aed2728d"
  },
  {
    "url": "assets/js/7.ff34d44d.js",
    "revision": "853eb04480b2b4626e8dc12b993e081d"
  },
  {
    "url": "assets/js/8.feca346d.js",
    "revision": "b48c483e94cfb660e056239fbd27a4a8"
  },
  {
    "url": "assets/js/9.030e9389.js",
    "revision": "c8d54f4c3ac53ed433596acbc2266c10"
  },
  {
    "url": "assets/js/app.5adf62a4.js",
    "revision": "f1287273df5b0a8ab75d391e29e1623d"
  },
  {
    "url": "assets/js/vendors~docsearch.30c42ed6.js",
    "revision": "64ab88d0bb4bab4702e59c2605038d4a"
  },
  {
    "url": "bungeecord.html",
    "revision": "3294240da1af5ef8d031bb42414da4bc"
  },
  {
    "url": "commands/admin.html",
    "revision": "9d249ffa446671c8210cb5877d531eda"
  },
  {
    "url": "commands/banking.html",
    "revision": "3b0c55eeef9ac688f300e81b671d2319"
  },
  {
    "url": "commands/player.html",
    "revision": "1c7ff16a2b6008fc4ee2a09e6c711651"
  },
  {
    "url": "en/api.html",
    "revision": "c9925114b32f12b90b49d162cd09293f"
  },
  {
    "url": "en/bungeecord.html",
    "revision": "a032b21b4932d27b81725d618d6895ed"
  },
  {
    "url": "en/commands/admin.html",
    "revision": "e040715d830d28c69104b30049ede508"
  },
  {
    "url": "en/commands/banking.html",
    "revision": "d09c2f39f5346f5f5c71284ac945b270"
  },
  {
    "url": "en/commands/player.html",
    "revision": "9b697db6dc646e1f24f0710f0e79ac40"
  },
  {
    "url": "en/faq.html",
    "revision": "f7dc52dbf6ba16b724c001e3235b5250"
  },
  {
    "url": "en/index.html",
    "revision": "5b4b11f1b4cf901ca90541126258a2d9"
  },
  {
    "url": "en/permissions.html",
    "revision": "5eee686d8e963267cbeece09a38de6d1"
  },
  {
    "url": "en/placeholders/integrated.html",
    "revision": "d891feccd818e787f8f389be17f6f971"
  },
  {
    "url": "en/placeholders/placeholderapi.html",
    "revision": "386ffd8b8c939f8cfee042cc6c8e63d9"
  },
  {
    "url": "en/setup.html",
    "revision": "05cd9ea86f7eea09b3756a965fcfbc72"
  },
  {
    "url": "en/tutorials/detectiongate.html",
    "revision": "a1415f07413864ce8bd31cafee30ee23"
  },
  {
    "url": "en/tutorials/levelchecknpc.html",
    "revision": "d86bf005f40c5c88b53a3c99ccb02b44"
  },
  {
    "url": "en/tutorials/teleporters.html",
    "revision": "c659d0b1658485ea639e1a733ab7dc1d"
  },
  {
    "url": "en/tutorials/vendingmachine.html",
    "revision": "f0092fcbeea2172fc73404ec369aef0f"
  },
  {
    "url": "faq.html",
    "revision": "02324208ed8391f31da598cb72ec41f1"
  },
  {
    "url": "favicon-16x16.png",
    "revision": "00ecb916a548e8be44ec3467e1b66d6b"
  },
  {
    "url": "favicon-194x194.png",
    "revision": "e13db8e5c6827bd04a268948549ca396"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "4e9663215a5f70a874e25ebe5e0ca6c7"
  },
  {
    "url": "index.html",
    "revision": "edd06a87e127e600df6e2ad4703439fc"
  },
  {
    "url": "mstile-150x150.png",
    "revision": "a4837080efeeaf06ae40e214e744763f"
  },
  {
    "url": "mstile-310x310.png",
    "revision": "07c1b3f42278810020c6bda24ec48e25"
  },
  {
    "url": "permissions.html",
    "revision": "6defe47fc49bae651b116152e78e5504"
  },
  {
    "url": "placeholders/integrated.html",
    "revision": "9c738292c01f5e63762ee34562361608"
  },
  {
    "url": "placeholders/placeholderapi.html",
    "revision": "735a891a33951fa29f488e9c83c82e45"
  },
  {
    "url": "setup.html",
    "revision": "23f4d9e609c028f3ba51fc3d7c99dbbf"
  },
  {
    "url": "tutorials/detectiongate.html",
    "revision": "4af1ea800aba4eb4ee94e94ab7184a77"
  },
  {
    "url": "tutorials/levelchecknpc.html",
    "revision": "0a4407d3b8aab20b7240cd6cf564b911"
  },
  {
    "url": "tutorials/teleporters.html",
    "revision": "5c27369fc3fdd0065e0efcc3a328851b"
  },
  {
    "url": "tutorials/vendingmachine.html",
    "revision": "11961442d220cc0d08fa16c779b631fd"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
