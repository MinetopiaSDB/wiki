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
    "revision": "6dca0c531d5a84560988b598a9162841"
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
    "revision": "aaffc23baa0b5f35b85d560c6e0a5ead"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "5d47fcf7009db7bcbd06ae7bff46863a"
  },
  {
    "url": "assets/css/0.styles.b6b83191.css",
    "revision": "59d058fd7e32b62c479e5aa6d349f5b1"
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
    "url": "assets/js/10.310766cf.js",
    "revision": "ea7b650a60094ff267fbdc2b19094a3c"
  },
  {
    "url": "assets/js/11.88a16083.js",
    "revision": "3c6a36ad210e400f7f00cd7793c36f3b"
  },
  {
    "url": "assets/js/12.6da02107.js",
    "revision": "fa835bb7fa04cdcbf320067f8e8fddd8"
  },
  {
    "url": "assets/js/13.1d7b5b0a.js",
    "revision": "188fb9121fccc71c66d4dc9e8aecc902"
  },
  {
    "url": "assets/js/14.41ebeec6.js",
    "revision": "41b16d8290974c7ace505753310b8cd7"
  },
  {
    "url": "assets/js/15.70b13909.js",
    "revision": "ffb50fa5c2a56726b3f74a63ba87c4ba"
  },
  {
    "url": "assets/js/16.3855907f.js",
    "revision": "a1a390f232228fca116e2231cb4a5a3b"
  },
  {
    "url": "assets/js/17.9346e3c2.js",
    "revision": "3de146b01dcd952b60d557e9496999ce"
  },
  {
    "url": "assets/js/18.47048b15.js",
    "revision": "d53ec5560392bc389f2b5c51a125cea2"
  },
  {
    "url": "assets/js/19.1d4f747b.js",
    "revision": "c1015fcc5748614bd689fe525e859716"
  },
  {
    "url": "assets/js/20.d1f43c5d.js",
    "revision": "f1ead2e33ba9b6f07b8432e92bf14cb7"
  },
  {
    "url": "assets/js/21.c624a918.js",
    "revision": "36041a749a2646ff279e849949dd5008"
  },
  {
    "url": "assets/js/22.5ada3e36.js",
    "revision": "03d3853141b1bced8b78fff768e20b8e"
  },
  {
    "url": "assets/js/23.3c256c0f.js",
    "revision": "4704ab3ff6e8ec282d465b8e502e7b6d"
  },
  {
    "url": "assets/js/24.f3ce0d71.js",
    "revision": "ca0ac757694f952209bfe209839bb452"
  },
  {
    "url": "assets/js/25.e8f82fba.js",
    "revision": "1585509d1e900fa758ed26363ed9d229"
  },
  {
    "url": "assets/js/26.8bac9766.js",
    "revision": "1054ec3cbf9e4d6f0a53719fc2da0aff"
  },
  {
    "url": "assets/js/27.7fe09443.js",
    "revision": "a1e64571b4d0925ce86cd54ba688c0bd"
  },
  {
    "url": "assets/js/28.b1ca2702.js",
    "revision": "a389609d0666cf71ea34fea1c22478b5"
  },
  {
    "url": "assets/js/29.16d2b636.js",
    "revision": "b6d3b1a9a77c04b32ff16e46abe587bd"
  },
  {
    "url": "assets/js/3.0206639b.js",
    "revision": "7cad5ec91de04137eeeb876fa00044d3"
  },
  {
    "url": "assets/js/30.4bd44fcf.js",
    "revision": "0972c9ca6509cae3f96e52af1e654178"
  },
  {
    "url": "assets/js/31.c328f362.js",
    "revision": "d4895ffb97fae8916e57faac39d3702c"
  },
  {
    "url": "assets/js/32.36589647.js",
    "revision": "c862b8f53df798d5e996720308dd7559"
  },
  {
    "url": "assets/js/33.07269649.js",
    "revision": "346a724c9df93d993ede99f8c57071d0"
  },
  {
    "url": "assets/js/34.3860aa07.js",
    "revision": "f531bc750638dc63eeca8e48b3fb300c"
  },
  {
    "url": "assets/js/35.84f31725.js",
    "revision": "9acef54d2c1a8200f5ff79dacd4b61a9"
  },
  {
    "url": "assets/js/36.a1379129.js",
    "revision": "034bae5ddb42f5c07f933c72f0c2cd1a"
  },
  {
    "url": "assets/js/37.ce80eca8.js",
    "revision": "f06f286f8b7053c2f121efb391595e65"
  },
  {
    "url": "assets/js/38.bd952e8d.js",
    "revision": "589e527e617a9a687328c08be496594e"
  },
  {
    "url": "assets/js/39.e77d2707.js",
    "revision": "627e41f3f6d0aede92595475908a1736"
  },
  {
    "url": "assets/js/4.97e18fa6.js",
    "revision": "72ca9da6f8098c970fe1742b24a25b26"
  },
  {
    "url": "assets/js/5.9f6e08db.js",
    "revision": "1d83bee1c9ced98b7d30eed4a8b36d22"
  },
  {
    "url": "assets/js/6.cd10cba4.js",
    "revision": "252b852ec3895d26c8c71a37aed2728d"
  },
  {
    "url": "assets/js/7.422e15a9.js",
    "revision": "853eb04480b2b4626e8dc12b993e081d"
  },
  {
    "url": "assets/js/8.095f7f9c.js",
    "revision": "b48c483e94cfb660e056239fbd27a4a8"
  },
  {
    "url": "assets/js/9.3ee8272c.js",
    "revision": "c8d54f4c3ac53ed433596acbc2266c10"
  },
  {
    "url": "assets/js/app.60e2ecd7.js",
    "revision": "5dd19455b6a8cf11553c99ab67b0c663"
  },
  {
    "url": "assets/js/vendors~docsearch.30c42ed6.js",
    "revision": "64ab88d0bb4bab4702e59c2605038d4a"
  },
  {
    "url": "bungeecord.html",
    "revision": "3c6df4e8e8e48210469e04794810e768"
  },
  {
    "url": "commands/admin.html",
    "revision": "c81ed61b40d92db5c884235a9653aeba"
  },
  {
    "url": "commands/banking.html",
    "revision": "fae9010c22398cfb8e39d42a706e9f2e"
  },
  {
    "url": "commands/player.html",
    "revision": "6bf06c083b13bf1542d6f54e73dfbc35"
  },
  {
    "url": "en/api.html",
    "revision": "3bff07164cb24ec33aafa10263076444"
  },
  {
    "url": "en/bungeecord.html",
    "revision": "1692a56ec4b6aaed14f6e80118fae665"
  },
  {
    "url": "en/commands/admin.html",
    "revision": "a9f1f0779aa9d8b42cc245f5f415978f"
  },
  {
    "url": "en/commands/banking.html",
    "revision": "30957bf0a188bcb329b2248e6bf261ba"
  },
  {
    "url": "en/commands/player.html",
    "revision": "341e64ba14d6d2d31d8cd21341b06cb7"
  },
  {
    "url": "en/faq.html",
    "revision": "3db12c78a80a0006bfabc1fc7eab44d6"
  },
  {
    "url": "en/index.html",
    "revision": "e9adf46f68b22d141ef6af7f10106a67"
  },
  {
    "url": "en/permissions.html",
    "revision": "f93764fa75497d5cfbfa4a218f6bf626"
  },
  {
    "url": "en/placeholders/integrated.html",
    "revision": "453631d5eabfe6bf03a27ebf891b1d58"
  },
  {
    "url": "en/placeholders/placeholderapi.html",
    "revision": "077d69510d6e04f3c74516bfe5aa37a7"
  },
  {
    "url": "en/setup.html",
    "revision": "aab75d286f5b5d335ada25f38b510005"
  },
  {
    "url": "en/tutorials/detectiongate.html",
    "revision": "ecfa100994b970ffc4122fe81c2945ae"
  },
  {
    "url": "en/tutorials/levelchecknpc.html",
    "revision": "fb841955596d1112d5ca5e7b240d6c42"
  },
  {
    "url": "en/tutorials/teleporters.html",
    "revision": "3e83c4e345015f1e9c565b99586e00b3"
  },
  {
    "url": "en/tutorials/vendingmachine.html",
    "revision": "1697ec9ba68e42f5ff78a58b40ce5506"
  },
  {
    "url": "faq.html",
    "revision": "e976b867469ef21720a13f3061a68c4a"
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
    "revision": "6cea5394ee6cfcf495a738ac2281259c"
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
    "revision": "d5a84dd6689c539223fa8436b9cef57f"
  },
  {
    "url": "placeholders/integrated.html",
    "revision": "6a8d2fc97685b21b9a1ffd23c382c9e6"
  },
  {
    "url": "placeholders/placeholderapi.html",
    "revision": "0209ecda61767a8c9325bd439d4fbb99"
  },
  {
    "url": "setup.html",
    "revision": "1d89980c2c227fce9bcbb2af58a2a3e5"
  },
  {
    "url": "tutorials/detectiongate.html",
    "revision": "5b421468646e420bdb3e070db4a796ba"
  },
  {
    "url": "tutorials/levelchecknpc.html",
    "revision": "382c4183d70e1434a5c0433cd8e3928d"
  },
  {
    "url": "tutorials/teleporters.html",
    "revision": "d7f78028f8f3004fa89c4e2beb822bb1"
  },
  {
    "url": "tutorials/vendingmachine.html",
    "revision": "50f9a39053dd2d1e99398ac0f73766bd"
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
