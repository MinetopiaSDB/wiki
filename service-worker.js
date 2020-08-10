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
    "revision": "2c07f0060ec9d903e9bf25b295966d62"
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
    "revision": "9517bdcff4d70d2035e1181b5fc64dac"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "5d47fcf7009db7bcbd06ae7bff46863a"
  },
  {
    "url": "assets/css/0.styles.e3bfea33.css",
    "revision": "f89f3223779a158f3ca75da00676cedf"
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
    "url": "assets/js/10.18dee8c9.js",
    "revision": "1cd254e9b168e0d04c65aa7dd57a1546"
  },
  {
    "url": "assets/js/11.fe94e63e.js",
    "revision": "a00d967bff6c8fba2459cfa2449b87f5"
  },
  {
    "url": "assets/js/12.db1363ee.js",
    "revision": "d7cd1235a64616c7abf42a94d325df41"
  },
  {
    "url": "assets/js/13.7092d942.js",
    "revision": "4e4096ad85c47e7f4f13178e7574d7dd"
  },
  {
    "url": "assets/js/14.cfe347f1.js",
    "revision": "1ac2c68db2dc774e109ef66dc0386195"
  },
  {
    "url": "assets/js/15.6910e093.js",
    "revision": "6610363327f621cd3aafc0475aebb275"
  },
  {
    "url": "assets/js/16.f41788b2.js",
    "revision": "769db67c85cab221b7460e817f4bd1b0"
  },
  {
    "url": "assets/js/17.83649964.js",
    "revision": "8153469044a9bb35cf530d421a25478f"
  },
  {
    "url": "assets/js/18.3514ee78.js",
    "revision": "03de58b378dd442064b41723ce4b271e"
  },
  {
    "url": "assets/js/19.3ae4a31b.js",
    "revision": "96e9c69f665020387357013a636c4d2f"
  },
  {
    "url": "assets/js/20.647f47b6.js",
    "revision": "f0cdd27d1f5ca56f474a86526be728f1"
  },
  {
    "url": "assets/js/21.30bc80e3.js",
    "revision": "66aaaad593450b6da5007b53759837e0"
  },
  {
    "url": "assets/js/22.24d85393.js",
    "revision": "f607ea03f00f3a57015bff2ccd74388d"
  },
  {
    "url": "assets/js/23.f1c40adf.js",
    "revision": "5b2b79712e0dbdf6adb7fe30cd37a431"
  },
  {
    "url": "assets/js/24.ddb00153.js",
    "revision": "77929a4d3b9d2789c868cf10d968996e"
  },
  {
    "url": "assets/js/25.3da93f6d.js",
    "revision": "2aec62a58ca6a4cbae22dcfd6084a764"
  },
  {
    "url": "assets/js/26.acec7adc.js",
    "revision": "c644e14b0393553371f42233cc6fedd4"
  },
  {
    "url": "assets/js/27.9392ac62.js",
    "revision": "e2e8bfc5890656dda6107767a744f7eb"
  },
  {
    "url": "assets/js/28.386c3667.js",
    "revision": "5266bb3084f50207ed22285f17449f52"
  },
  {
    "url": "assets/js/29.ff44b0e8.js",
    "revision": "4bd8ca554f347de3a64df8e7f6f71f9a"
  },
  {
    "url": "assets/js/3.618cf31c.js",
    "revision": "0c700754e67bbe85d080d43421760a69"
  },
  {
    "url": "assets/js/30.d7bdf2ff.js",
    "revision": "6fa997dc03eab958cab0097d7686d140"
  },
  {
    "url": "assets/js/31.849d3ece.js",
    "revision": "6f089a42a2f2802db14ed892509ed06b"
  },
  {
    "url": "assets/js/32.ae6ac97b.js",
    "revision": "29fcfdf5b424ef0faaa83f67d81d7b69"
  },
  {
    "url": "assets/js/33.e2510eb8.js",
    "revision": "c89436d17aa34d642f38b7ff9d2f1eca"
  },
  {
    "url": "assets/js/34.49f98ff8.js",
    "revision": "2bc0e7754fb37a3e64be6f1f9f454b3f"
  },
  {
    "url": "assets/js/35.952c7c1c.js",
    "revision": "7d3cd118886670656b187cdb63bc850c"
  },
  {
    "url": "assets/js/36.05d6d1b8.js",
    "revision": "c2bc9953e079d63dac560c483301e7c5"
  },
  {
    "url": "assets/js/37.c3f5a665.js",
    "revision": "274730a4676ae4f82686d4c40d76e3ce"
  },
  {
    "url": "assets/js/4.ed07cea1.js",
    "revision": "f54167ca891d2cbbe077949b8576bb57"
  },
  {
    "url": "assets/js/5.ea7a4e33.js",
    "revision": "4e98f2a8326436933b581ec21f47c0bb"
  },
  {
    "url": "assets/js/6.a8db294f.js",
    "revision": "cceee9547e02ce138c3b6d8912c534db"
  },
  {
    "url": "assets/js/7.20954a11.js",
    "revision": "baf9dbb15a9d1e4d1257cff00352a7ee"
  },
  {
    "url": "assets/js/8.876026ab.js",
    "revision": "b9a41f8f9772ebed25b7a076b5080b28"
  },
  {
    "url": "assets/js/9.c9ed5232.js",
    "revision": "1121d67cd1d953f7bccf36f000d5ff9d"
  },
  {
    "url": "assets/js/app.eeb8dfa0.js",
    "revision": "d2c77990d2e3b5df68bf1f4d4e71c172"
  },
  {
    "url": "assets/js/vendors~docsearch.98c70358.js",
    "revision": "cd25127eb5fea04e134ce4bbb38c8b00"
  },
  {
    "url": "bungeecord.html",
    "revision": "0d5b6e6553c6e5405078c90e8493dcac"
  },
  {
    "url": "commands/admin.html",
    "revision": "4993a5dcd34925eb98976e08d93922d1"
  },
  {
    "url": "commands/banking.html",
    "revision": "4d31242558523450131f0a329e194f6b"
  },
  {
    "url": "commands/player.html",
    "revision": "4548be62d5710a9fd52e2fbd43fb552f"
  },
  {
    "url": "en/api.html",
    "revision": "22b0745ef8e2c00a02b706fc8c9b07c8"
  },
  {
    "url": "en/bungeecord.html",
    "revision": "0236a222a6d204a38ef52e5423da8e32"
  },
  {
    "url": "en/commands/admin.html",
    "revision": "69ab6616a5130389029153ad88bd381d"
  },
  {
    "url": "en/commands/banking.html",
    "revision": "89e9867798f46fc963e6d6fc3c59e687"
  },
  {
    "url": "en/commands/player.html",
    "revision": "cfa9a998af0bcef9d7483c38e543c263"
  },
  {
    "url": "en/faq.html",
    "revision": "93f13ffd8a2ca19cd648a0175f9b86b7"
  },
  {
    "url": "en/index.html",
    "revision": "c4e7703e6d5b87f641a7233fea2afa99"
  },
  {
    "url": "en/permissions.html",
    "revision": "51db25adc066adf60fbcb201b90b7d90"
  },
  {
    "url": "en/placeholders/integrated.html",
    "revision": "9428809d6a2970f06314c5190e615c81"
  },
  {
    "url": "en/placeholders/placeholderapi.html",
    "revision": "1df78c5bf8175af131d675d6160b40f4"
  },
  {
    "url": "en/setup.html",
    "revision": "6b50e2e5392ef88626ef023926d0c95a"
  },
  {
    "url": "en/tutorials/detectiongate.html",
    "revision": "ce8cb8efc7db26c97ababcf083b49d52"
  },
  {
    "url": "en/tutorials/levelchecknpc.html",
    "revision": "f04f384923293c2e31f9a72500520007"
  },
  {
    "url": "en/tutorials/teleporters.html",
    "revision": "ea4d783671e287ef7ba5365fa693dc33"
  },
  {
    "url": "en/tutorials/vendingmachine.html",
    "revision": "7d6225e5357652eb32006dc77a2990e3"
  },
  {
    "url": "faq.html",
    "revision": "5aef9ab148597856afe9d2640c49b1c0"
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
    "revision": "58529780b30775dd1c5a2d2a73f31ece"
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
    "revision": "e69b8ee89136ad9897d82d64b07d4ea4"
  },
  {
    "url": "placeholders/integrated.html",
    "revision": "24d44ba6a24473620f00f39ccf1e195d"
  },
  {
    "url": "placeholders/placeholderapi.html",
    "revision": "f7f3f267459ed60ddff0ba53b708ddbd"
  },
  {
    "url": "setup.html",
    "revision": "093952abf0565077c9f973a47eac7a7e"
  },
  {
    "url": "tutorials/detectiongate.html",
    "revision": "692421271b185da8252e2c6c229c405a"
  },
  {
    "url": "tutorials/levelchecknpc.html",
    "revision": "a5bc9941cf833859bde1ecf3cc77027a"
  },
  {
    "url": "tutorials/teleporters.html",
    "revision": "cdf7e16d8869d192f56ea9c5c07916d6"
  },
  {
    "url": "tutorials/vendingmachine.html",
    "revision": "8d8047d335a4e8c96bd778cdf5f21710"
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
