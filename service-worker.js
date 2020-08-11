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
    "revision": "41b494525122b24b376c04c474719069"
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
    "revision": "1b67de93afd79744fb9a18737dc51b18"
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
    "url": "assets/js/app.192db549.js",
    "revision": "7913f139610f2bb29a897ffc40a45c71"
  },
  {
    "url": "assets/js/vendors~docsearch.98c70358.js",
    "revision": "cd25127eb5fea04e134ce4bbb38c8b00"
  },
  {
    "url": "bungeecord.html",
    "revision": "c9fa88856e7a398463b6640adee7f2dd"
  },
  {
    "url": "commands/admin.html",
    "revision": "edb676b8f6fb206b5cd924964ae2d830"
  },
  {
    "url": "commands/banking.html",
    "revision": "a9c255dfae1cb9cc1bd3cd71a1d743e4"
  },
  {
    "url": "commands/player.html",
    "revision": "5175f087331a0b76d747554c14dd9350"
  },
  {
    "url": "en/api.html",
    "revision": "3c2d6accdb416424ee09b26b90134548"
  },
  {
    "url": "en/bungeecord.html",
    "revision": "53e3f8e48cb7c2f518310ca2433c2d78"
  },
  {
    "url": "en/commands/admin.html",
    "revision": "fc900a78fb059ada9acaab36cf702158"
  },
  {
    "url": "en/commands/banking.html",
    "revision": "0eb65903af0982255d5830f7179f85e9"
  },
  {
    "url": "en/commands/player.html",
    "revision": "8e766fee1be6f9084a43494062c351b5"
  },
  {
    "url": "en/faq.html",
    "revision": "aac77627ebd284018e4f79a77a38b13c"
  },
  {
    "url": "en/index.html",
    "revision": "f95edf478644636377fbb60dc9a7003d"
  },
  {
    "url": "en/permissions.html",
    "revision": "677927137792c4c4c462b89cae0f18ff"
  },
  {
    "url": "en/placeholders/integrated.html",
    "revision": "51ea34d331a3a49db8288b6a4c3718fc"
  },
  {
    "url": "en/placeholders/placeholderapi.html",
    "revision": "f70057584d92ea0fe32961fa39e096d7"
  },
  {
    "url": "en/setup.html",
    "revision": "19fdae9ca40a19b91eef613885edb5fe"
  },
  {
    "url": "en/tutorials/detectiongate.html",
    "revision": "c1a38aabe13d21bf7b895f20de0e8d10"
  },
  {
    "url": "en/tutorials/levelchecknpc.html",
    "revision": "a1d2be1cd3b065d751d2b4ead852cb4e"
  },
  {
    "url": "en/tutorials/teleporters.html",
    "revision": "894cb5ee6c67873d38e19cacf2bea9d6"
  },
  {
    "url": "en/tutorials/vendingmachine.html",
    "revision": "6db55e14e52c8585a0eda523e3e7139c"
  },
  {
    "url": "faq.html",
    "revision": "717fccd3d47e85a722492fbbb2911a71"
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
    "revision": "6b5e8dbddbf3fc2d037507ed155b38f5"
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
    "revision": "572d5fdbf69658c8453b2beb9973af63"
  },
  {
    "url": "placeholders/integrated.html",
    "revision": "b4e5249a5eb18b37e8a00a95c1f9fc38"
  },
  {
    "url": "placeholders/placeholderapi.html",
    "revision": "73e8ef8c95b8acc89d4ec2ad80585330"
  },
  {
    "url": "setup.html",
    "revision": "a9f45b2fb213db0d2e92f369a592dc37"
  },
  {
    "url": "tutorials/detectiongate.html",
    "revision": "12f646f8d01664b0e66adf16f71bf04d"
  },
  {
    "url": "tutorials/levelchecknpc.html",
    "revision": "db90fb06a99d285b1e5fd70fc82dd48c"
  },
  {
    "url": "tutorials/teleporters.html",
    "revision": "9b3d40c59a12b21df9f30d7ae4e3c018"
  },
  {
    "url": "tutorials/vendingmachine.html",
    "revision": "acf5948d90532eb9f6d6a2129d4bc0d4"
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
