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
    "revision": "f5b32fc11f7c9bfecd7e8ecd920a9b0f"
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
    "revision": "35f36ba810e15a6fec7e9f59614cd53d"
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
    "url": "assets/js/33.102b457c.js",
    "revision": "b687d620e37a3cb2f40ad25ee9259abe"
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
    "url": "assets/js/38.22bba37c.js",
    "revision": "60e04802e13f7dd6b340d4a37209c35c"
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
    "url": "assets/js/app.df1120bc.js",
    "revision": "142fbe5f3d9f7ca4ac1118875e0bb931"
  },
  {
    "url": "assets/js/vendors~docsearch.30c42ed6.js",
    "revision": "64ab88d0bb4bab4702e59c2605038d4a"
  },
  {
    "url": "bungeecord.html",
    "revision": "849861451aa194331a971539c48113fa"
  },
  {
    "url": "commands/admin.html",
    "revision": "50ad760d100f9c9124ef3464438b68e6"
  },
  {
    "url": "commands/banking.html",
    "revision": "a3c11ea6dedfc9feb85894948730e17b"
  },
  {
    "url": "commands/player.html",
    "revision": "6fa9d557145dee86df85225607b2bb68"
  },
  {
    "url": "en/api.html",
    "revision": "c4b86a3f89415061c92534559bb8d416"
  },
  {
    "url": "en/bungeecord.html",
    "revision": "2baed10ec0d471c18f0711372075defa"
  },
  {
    "url": "en/commands/admin.html",
    "revision": "6de7c40244ca4441caaf603256108311"
  },
  {
    "url": "en/commands/banking.html",
    "revision": "fd9d1a6f424b1f3e8542637b46ced29e"
  },
  {
    "url": "en/commands/player.html",
    "revision": "099b79632ec360e384093c05b385ac48"
  },
  {
    "url": "en/faq.html",
    "revision": "48db4db7334abf3ba70d9c2e69d0f038"
  },
  {
    "url": "en/index.html",
    "revision": "4f165d102b17e5d1b3c9848e9415e19f"
  },
  {
    "url": "en/permissions.html",
    "revision": "895e25c650a7823a28b265fbf367a49a"
  },
  {
    "url": "en/placeholders/integrated.html",
    "revision": "a58c3b74faebc7345c67aeb3173ff99f"
  },
  {
    "url": "en/placeholders/placeholderapi.html",
    "revision": "ed3f836bab8af88b7b947c8b7f01f3ca"
  },
  {
    "url": "en/setup.html",
    "revision": "25b5817bda6627c20fa8695896793080"
  },
  {
    "url": "en/tutorials/detectiongate.html",
    "revision": "964990892ecfd1bca5945c9c2e290da9"
  },
  {
    "url": "en/tutorials/levelchecknpc.html",
    "revision": "80bf1e851096ac6050a2064bf9886376"
  },
  {
    "url": "en/tutorials/teleporters.html",
    "revision": "fc7c7e85e7b13099537227ab5d6a4821"
  },
  {
    "url": "en/tutorials/vendingmachine.html",
    "revision": "6f3734ddb712e49669354ce213fa9194"
  },
  {
    "url": "faq.html",
    "revision": "4d6449f59e5aa738233ba940e32c49d8"
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
    "revision": "cc9269d5c354b91be0cc2f62f6f05e9b"
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
    "revision": "70ff5e8a699206a7fc24925de4f97d85"
  },
  {
    "url": "placeholders/integrated.html",
    "revision": "554d54aa97623338d6d6af652412d242"
  },
  {
    "url": "placeholders/placeholderapi.html",
    "revision": "548253d0a93a457c3426d53b3d51c420"
  },
  {
    "url": "setup.html",
    "revision": "df5192d274895445ad5542523d6f4188"
  },
  {
    "url": "tutorials/detectiongate.html",
    "revision": "9b85d8815a451735a668b77da79b0b41"
  },
  {
    "url": "tutorials/levelchecknpc.html",
    "revision": "d96fc09338e03e386971228f03397912"
  },
  {
    "url": "tutorials/teleporters.html",
    "revision": "de963e3613fd6d0a71c4e8ced0b8117f"
  },
  {
    "url": "tutorials/vendingmachine.html",
    "revision": "f7fe11e44894493f282e6356f6c541b0"
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
