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
    "revision": "93e7b381581d6535d513ab471ca46724"
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
    "revision": "b4b646374b692a769020aa3173d6cf81"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "5d47fcf7009db7bcbd06ae7bff46863a"
  },
  {
    "url": "assets/css/0.styles.0be3f4ce.css",
    "revision": "180bb27e0c77eec683993a15bac93dd5"
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
    "url": "assets/js/app.7c9bcb5b.js",
    "revision": "cd52ad963f164de79951440b2fb00bcb"
  },
  {
    "url": "assets/js/vendors~docsearch.98c70358.js",
    "revision": "cd25127eb5fea04e134ce4bbb38c8b00"
  },
  {
    "url": "bungeecord.html",
    "revision": "9a1c8302670569d55c0d363770b43782"
  },
  {
    "url": "commands/admin.html",
    "revision": "6d0233aef274af5e8f78872c5b569f45"
  },
  {
    "url": "commands/banking.html",
    "revision": "4a601f005058d982c63219ac0829d5da"
  },
  {
    "url": "commands/player.html",
    "revision": "eb14c7a27524b92390cbbcd71db44d0d"
  },
  {
    "url": "en/api.html",
    "revision": "aca7e0bb41dd71078b8b75b8deae6420"
  },
  {
    "url": "en/bungeecord.html",
    "revision": "1c592e36e1138dd579fb21bdc75aaa82"
  },
  {
    "url": "en/commands/admin.html",
    "revision": "ce29ef08db23fd62ea6c6407ef86e5da"
  },
  {
    "url": "en/commands/banking.html",
    "revision": "2b36e3fdc61ee1712ec3b39e763b7257"
  },
  {
    "url": "en/commands/player.html",
    "revision": "8b03c43b26ff2eb2682eceeeb9e2d3b3"
  },
  {
    "url": "en/faq.html",
    "revision": "33c371666cbbeac8a40cf055abc8710a"
  },
  {
    "url": "en/index.html",
    "revision": "1d01cf95a2cc2b4f925743035543683c"
  },
  {
    "url": "en/permissions.html",
    "revision": "91ba74d2ce922c831ac3cf63c4564abe"
  },
  {
    "url": "en/placeholders/integrated.html",
    "revision": "767278aaea5771b17619e6ed1fda2f43"
  },
  {
    "url": "en/placeholders/placeholderapi.html",
    "revision": "082e7ddfc7851d5f1affa9a79d88459c"
  },
  {
    "url": "en/setup.html",
    "revision": "5e2bf03cb9a0d6a34fb601f4a7b63ddd"
  },
  {
    "url": "en/tutorials/detectiongate.html",
    "revision": "069f0685d4d5b117ba98106cc873c35a"
  },
  {
    "url": "en/tutorials/levelchecknpc.html",
    "revision": "bf78728f2fa71e170e8f47dd04e2d772"
  },
  {
    "url": "en/tutorials/teleporters.html",
    "revision": "e1cfe3f22e93c48a5053646e1e1f1afa"
  },
  {
    "url": "en/tutorials/vendingmachine.html",
    "revision": "a43d28574022d41d02b782f5908ea906"
  },
  {
    "url": "faq.html",
    "revision": "40afd995918ec8f3b8deca7bf0bc9074"
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
    "revision": "a2a60c77dd143baa8c1a1e38323723a5"
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
    "revision": "11c6af8dfb112aafdd677abc75f3aadf"
  },
  {
    "url": "placeholders/integrated.html",
    "revision": "13870e554253ff3451c66b3c0141820f"
  },
  {
    "url": "placeholders/placeholderapi.html",
    "revision": "04a4fd14f8906b5103ba813a55a18704"
  },
  {
    "url": "setup.html",
    "revision": "64fff909bd50ce4ab740f7fde43c1df6"
  },
  {
    "url": "tutorials/detectiongate.html",
    "revision": "6f1d4ce817fb163f05fea08fbdd11607"
  },
  {
    "url": "tutorials/levelchecknpc.html",
    "revision": "7d719df23dbd2cb8c31a5b23feacffc2"
  },
  {
    "url": "tutorials/teleporters.html",
    "revision": "eaf1a45c2b41e8edb6aa4b4654392be7"
  },
  {
    "url": "tutorials/vendingmachine.html",
    "revision": "5a9dc47152975db226102d5be4c48862"
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
