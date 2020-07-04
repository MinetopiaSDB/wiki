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
    "revision": "2741b7d1455c34ccef017230057ae7b8"
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
    "revision": "bed43843371717bdf262092df1de20e4"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "5d47fcf7009db7bcbd06ae7bff46863a"
  },
  {
    "url": "assets/css/0.styles.85ce0dc0.css",
    "revision": "a2054df694a5ca826a19c9619756e916"
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
    "url": "assets/js/10.5fb7ed8a.js",
    "revision": "ea4ac8ef7135234e381ff4c0843f3e58"
  },
  {
    "url": "assets/js/11.01279486.js",
    "revision": "ba985b170b0391bf709107820b8dbfe3"
  },
  {
    "url": "assets/js/12.24a7d18f.js",
    "revision": "a21cc5a68a5b8cab25f09b666311ca02"
  },
  {
    "url": "assets/js/13.e52edb0a.js",
    "revision": "79e9e399b6d6b3d1f4145dd1a03c8072"
  },
  {
    "url": "assets/js/14.2d2c26f4.js",
    "revision": "0f076934307dabcc64206be981fa8b5a"
  },
  {
    "url": "assets/js/15.7bef7e8f.js",
    "revision": "567a7d7ac4a6bc985b8594b135b10c2e"
  },
  {
    "url": "assets/js/16.868fd65e.js",
    "revision": "1b2d595d36b32903479e2a65f6b50822"
  },
  {
    "url": "assets/js/17.d46675c5.js",
    "revision": "9fa74a1dc0f360d712269af3d1b4dcf2"
  },
  {
    "url": "assets/js/18.982d725f.js",
    "revision": "baa86994afc6adb4b5259f897e801ccd"
  },
  {
    "url": "assets/js/19.293140f7.js",
    "revision": "ecd7955f8e22a8d76f152f02437baf7b"
  },
  {
    "url": "assets/js/2.446c9011.js",
    "revision": "22e6605bbffc055d3792fc31c54ad87a"
  },
  {
    "url": "assets/js/20.a260a9fa.js",
    "revision": "b9dc391381f03e4d940cc6942197c74c"
  },
  {
    "url": "assets/js/21.1f8e8e03.js",
    "revision": "743146bec25ea94b20932e84d7ccd690"
  },
  {
    "url": "assets/js/22.1e0a274d.js",
    "revision": "509d5182fcdb61737c3edd347aa53c37"
  },
  {
    "url": "assets/js/23.8a8efe44.js",
    "revision": "c845754a87c14e912d165b242b5f1724"
  },
  {
    "url": "assets/js/24.485d060c.js",
    "revision": "8673b8aacbcae0ed0a6dbb66322be93c"
  },
  {
    "url": "assets/js/25.51aaa296.js",
    "revision": "b80918f0aeb006f4fccc317129ebc28d"
  },
  {
    "url": "assets/js/26.a92f8e00.js",
    "revision": "f58ee64e4b29246730cd32ab4b0a70c4"
  },
  {
    "url": "assets/js/27.f46e6472.js",
    "revision": "a9f70ddf8d07f08d0a2ba79d2a4d00d7"
  },
  {
    "url": "assets/js/28.23210516.js",
    "revision": "7ef2a5dcc8b2bf091e646676da5f1d51"
  },
  {
    "url": "assets/js/29.53bbe522.js",
    "revision": "fa3df53cb1a42b7e4a2a109347fd2996"
  },
  {
    "url": "assets/js/3.202c6226.js",
    "revision": "0d24b62a36566d9a418baa3b7ff104dd"
  },
  {
    "url": "assets/js/30.032f23d9.js",
    "revision": "054448b4d56c1ffb6abdecab50dd6479"
  },
  {
    "url": "assets/js/31.856a15d1.js",
    "revision": "339a9dc86b483f9b506c97813870a548"
  },
  {
    "url": "assets/js/32.3e853c91.js",
    "revision": "40793ffbfaf1764ffca3aa83cfdd4840"
  },
  {
    "url": "assets/js/33.9fb39dc8.js",
    "revision": "472a5ee36f4b7f0e8b7a42cb9645dcb9"
  },
  {
    "url": "assets/js/34.e6cea82b.js",
    "revision": "c746ee69dc82b8bbc2518a8d948b26f3"
  },
  {
    "url": "assets/js/35.1295a082.js",
    "revision": "49e5ef7fdd35443574ea0720b23b01f3"
  },
  {
    "url": "assets/js/36.c3c18db3.js",
    "revision": "51c6e85ee98ec37df541c3bb5326b61d"
  },
  {
    "url": "assets/js/4.90b98835.js",
    "revision": "32b762753969ce5ee7b385082685cbbe"
  },
  {
    "url": "assets/js/5.35468b4d.js",
    "revision": "4c1599d792919269cb5a133be274873f"
  },
  {
    "url": "assets/js/6.13a57ca2.js",
    "revision": "48d9cca980c78b18e5ed8acaa397b00b"
  },
  {
    "url": "assets/js/7.db14eac6.js",
    "revision": "1cbf3992f1ed5cb26523bca03057cd8b"
  },
  {
    "url": "assets/js/8.1dc4ccdb.js",
    "revision": "3dc3a2cfb810a22d86b22d3dc4519226"
  },
  {
    "url": "assets/js/9.baa54f7a.js",
    "revision": "9e9a5427c9c24249e37eb7504d8908e3"
  },
  {
    "url": "assets/js/app.f099cdae.js",
    "revision": "cfc00b0c80b6871ef24db010dbed9f10"
  },
  {
    "url": "bungeecord.html",
    "revision": "13b5a8d06836d80bb43bc3f8631111fd"
  },
  {
    "url": "commands/admin.html",
    "revision": "d963b983f54d4d1197d90259936a372a"
  },
  {
    "url": "commands/banking.html",
    "revision": "c0e443d8ad2fd5127511df4332256ff7"
  },
  {
    "url": "commands/player.html",
    "revision": "4b7370edfdcb592c4dec0a1a00a4e8b6"
  },
  {
    "url": "en/api.html",
    "revision": "c97a34c38693170fb0e4520ffbb30209"
  },
  {
    "url": "en/bungeecord.html",
    "revision": "f3c119325481f8d9986fc1a12c77d106"
  },
  {
    "url": "en/commands/admin.html",
    "revision": "921d4836bff38ad2988c3204c5009148"
  },
  {
    "url": "en/commands/banking.html",
    "revision": "2b12c4f3661ab19304774ebe54dba6fa"
  },
  {
    "url": "en/commands/player.html",
    "revision": "71bc15f25061c18adc827daee9395bd4"
  },
  {
    "url": "en/faq.html",
    "revision": "c02ce1176e25615f0997e7a2042c6c98"
  },
  {
    "url": "en/index.html",
    "revision": "4e91575b6c9c4a71927ea1a832c155fa"
  },
  {
    "url": "en/permissions.html",
    "revision": "cd7da0770281bdf32377db6c2b62dac1"
  },
  {
    "url": "en/placeholders/integrated.html",
    "revision": "5619ff36c6fe059397ff2248743ae4a3"
  },
  {
    "url": "en/placeholders/placeholderapi.html",
    "revision": "faf15b668dea27701b38b513d37f2ef5"
  },
  {
    "url": "en/setup.html",
    "revision": "42240594ee9e212edeed1df89ade4cd1"
  },
  {
    "url": "en/tutorials/detectiongate.html",
    "revision": "c036c9fefb7d9fac7f02d4db8c4e58e9"
  },
  {
    "url": "en/tutorials/levelchecknpc.html",
    "revision": "c5efe3185ad764405b48e0bf72ddc726"
  },
  {
    "url": "en/tutorials/teleporters.html",
    "revision": "e055d2d4d44d34dcada45a2941d148d8"
  },
  {
    "url": "en/tutorials/vendingmachine.html",
    "revision": "398b07da52fde8964983785c80d2f6ef"
  },
  {
    "url": "faq.html",
    "revision": "de4003a959a4a6c19f45276effe9c31f"
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
    "revision": "179e3cdd774257b8a521c3e4f39b3329"
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
    "revision": "3cd71b3badabdd17a1b4fe2e23cb553a"
  },
  {
    "url": "placeholders/integrated.html",
    "revision": "7f7d7b9a86208f9287e25d9f5dbf4e0e"
  },
  {
    "url": "placeholders/placeholderapi.html",
    "revision": "c9162c3adb4b17d44623a3395d4fca7f"
  },
  {
    "url": "setup.html",
    "revision": "9a40214f0886977b24c4d85dc020e7a3"
  },
  {
    "url": "tutorials/detectiongate.html",
    "revision": "fd10f6bcd371c505ea1bf62eabcba2b1"
  },
  {
    "url": "tutorials/levelchecknpc.html",
    "revision": "460fb8c92aa6b15da654478f8f367949"
  },
  {
    "url": "tutorials/teleporters.html",
    "revision": "90de0c08317899946ab681318b2c8bae"
  },
  {
    "url": "tutorials/vendingmachine.html",
    "revision": "99fe6e7c6c2603ce81f71b0c91d7a73d"
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
