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
    "revision": "40b65e025bf3419af6f97c00c0583350"
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
    "revision": "0611d9721048c1b17e8245a91e6f0379"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "5d47fcf7009db7bcbd06ae7bff46863a"
  },
  {
    "url": "assets/css/0.styles.fbb4f5da.css",
    "revision": "2c576441df35d05d7cc51d62c51f2c79"
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
    "url": "assets/js/1.429931f8.js",
    "revision": "d1292a682f7af7b5b01b0ac08a5cbebd"
  },
  {
    "url": "assets/js/10.48b0122e.js",
    "revision": "0f8ed383cbe700aa3eab1e6ff965ce7e"
  },
  {
    "url": "assets/js/11.5c6c0905.js",
    "revision": "75124c49c69409a17d2ab83f3d838a82"
  },
  {
    "url": "assets/js/12.abe91cb0.js",
    "revision": "70c1caf7d913d4742dff05c1f103cb5f"
  },
  {
    "url": "assets/js/13.4fe7f39d.js",
    "revision": "adf19a0e58d73173636e0561c724debe"
  },
  {
    "url": "assets/js/14.a8987f4b.js",
    "revision": "d8392ef1e01c308a9418b6a164336414"
  },
  {
    "url": "assets/js/15.acfc0b97.js",
    "revision": "4e58d40478013278f9c85aae989ac65f"
  },
  {
    "url": "assets/js/16.d3928c20.js",
    "revision": "4ca84cf05ed7073c686f58985acacfb0"
  },
  {
    "url": "assets/js/17.fe64446f.js",
    "revision": "035322904fb473131070cd8f49052000"
  },
  {
    "url": "assets/js/18.6835bd74.js",
    "revision": "1fb9b90c39cabdef672a39ed18ce4963"
  },
  {
    "url": "assets/js/19.a4bdf58b.js",
    "revision": "e23eb1580ad5b6c857ae956ea0a4d4fe"
  },
  {
    "url": "assets/js/2.1b182ec2.js",
    "revision": "b1f4021cf9dacea8d31cc75a9dda22eb"
  },
  {
    "url": "assets/js/20.1738fba5.js",
    "revision": "fd5300cf1d7e09306e369e80e934e40b"
  },
  {
    "url": "assets/js/21.c6a71c86.js",
    "revision": "10184d593c6a4729e91beb77cf3b693b"
  },
  {
    "url": "assets/js/22.9e90c202.js",
    "revision": "b173ad67d55118b440053139fd8fc81b"
  },
  {
    "url": "assets/js/23.33f82daf.js",
    "revision": "084e0b1507816832520e789d56974fd1"
  },
  {
    "url": "assets/js/24.5f27db65.js",
    "revision": "3b2465d915a0a9c7faf9c18ee83e2547"
  },
  {
    "url": "assets/js/25.b6be7249.js",
    "revision": "49febb16bb972255dd910505173bae03"
  },
  {
    "url": "assets/js/26.92878f79.js",
    "revision": "2eb4188142d776f51a0ce1200b18e630"
  },
  {
    "url": "assets/js/27.b1ea1919.js",
    "revision": "4ca1b37fc5967eb67ec1ed79bf396039"
  },
  {
    "url": "assets/js/28.a3a43bc8.js",
    "revision": "ddbe2157626cafcca2ef761aafae5212"
  },
  {
    "url": "assets/js/29.ebb83dc9.js",
    "revision": "beccd39d0690d535df9be3935a00da32"
  },
  {
    "url": "assets/js/3.018ff0e2.js",
    "revision": "618aa9a9d21af42286d4575ec9e12f4a"
  },
  {
    "url": "assets/js/30.b3ef8c64.js",
    "revision": "08d5ba88436f1cf643ac1606b921cbd5"
  },
  {
    "url": "assets/js/31.852599af.js",
    "revision": "08216d5d4bd6bdf70f5cb1f79865710d"
  },
  {
    "url": "assets/js/32.b62deefb.js",
    "revision": "98e541d51b236c125288f9522c105231"
  },
  {
    "url": "assets/js/33.c2466c9c.js",
    "revision": "6d5ca6de8d2225426da1f44c12148425"
  },
  {
    "url": "assets/js/34.ea539a24.js",
    "revision": "21690bee9b1ca30176550ab70f3e2e05"
  },
  {
    "url": "assets/js/35.4f1a2a66.js",
    "revision": "cbb7b15645ac04831d4c9cce2562f8e3"
  },
  {
    "url": "assets/js/36.27a29e54.js",
    "revision": "5ac05da613057fad9beb5043f12e727d"
  },
  {
    "url": "assets/js/37.35ea7d63.js",
    "revision": "fa371abb40867e6dd370045734c80f8c"
  },
  {
    "url": "assets/js/38.a5aa0864.js",
    "revision": "bb6bb50e5b0f04112657e38781d4b454"
  },
  {
    "url": "assets/js/39.523d09e0.js",
    "revision": "5e92034795a3f070cec48056f33b07d1"
  },
  {
    "url": "assets/js/4.6502034f.js",
    "revision": "76f565548cd443a403ead9c95859f3b6"
  },
  {
    "url": "assets/js/40.315ba5c4.js",
    "revision": "902cac25bce0b710dce959b4583d6ebb"
  },
  {
    "url": "assets/js/41.9dc58e1e.js",
    "revision": "662ec790b3ae76aab2c68d9077b61580"
  },
  {
    "url": "assets/js/42.f4a630bd.js",
    "revision": "967ca92625dede35457efd4e83759660"
  },
  {
    "url": "assets/js/43.8bc79bd8.js",
    "revision": "252b528f6a08125ac988668dda1c5868"
  },
  {
    "url": "assets/js/44.e8b585dc.js",
    "revision": "66b224ded19ef1fe1db2080b7db55690"
  },
  {
    "url": "assets/js/45.02d23144.js",
    "revision": "7796dff31d24f59381db11cf97ab15fd"
  },
  {
    "url": "assets/js/46.842508cd.js",
    "revision": "f11ff4f9b13801be20a16c81d866e2b0"
  },
  {
    "url": "assets/js/47.4b22a40b.js",
    "revision": "037a44a80472b6a22be2518fe0a5af43"
  },
  {
    "url": "assets/js/48.00ef75e8.js",
    "revision": "114091a97a190c0d6e5f9c0bd2843a8a"
  },
  {
    "url": "assets/js/49.d156a38d.js",
    "revision": "453d4854722b0003259b4d701db2e16f"
  },
  {
    "url": "assets/js/5.5051310a.js",
    "revision": "4d0e8cb61fb9575c533d010c0f734961"
  },
  {
    "url": "assets/js/50.7c489730.js",
    "revision": "9289b80c4ee6b21cc7ce5bf33c721ee1"
  },
  {
    "url": "assets/js/51.891c891f.js",
    "revision": "2754de77adeea628ee52d160efa47010"
  },
  {
    "url": "assets/js/52.af00b9b8.js",
    "revision": "c6d245bae680d5c02955c8e6698ccdd4"
  },
  {
    "url": "assets/js/53.47b5d301.js",
    "revision": "3255880ff60cee38f3bc805b4318bbd9"
  },
  {
    "url": "assets/js/6.f9b7df2f.js",
    "revision": "3a915aedb861c95750fef319c6224217"
  },
  {
    "url": "assets/js/7.73d4eba4.js",
    "revision": "66d4d96dfdcf8e1934de9a8d1ed008c9"
  },
  {
    "url": "assets/js/app.aca688c3.js",
    "revision": "fcc6c415567a8fb33a4b42aff940c524"
  },
  {
    "url": "assets/js/vendors~docsearch.d6ebca66.js",
    "revision": "cbd519dec869d9622154086422b6ef6d"
  },
  {
    "url": "bungeecord.html",
    "revision": "920be5a9788df4bf327086e50a759b8a"
  },
  {
    "url": "commands/admin.html",
    "revision": "ff9e38fc95e583c83597b7a525d1c5f9"
  },
  {
    "url": "commands/banking.html",
    "revision": "b8b389b28f9160c527fe940e8836eadd"
  },
  {
    "url": "commands/player.html",
    "revision": "d1e28d43942f4004a901a3e041b9903f"
  },
  {
    "url": "en/api.html",
    "revision": "22f7c0fd23b4a16aa4a4599b98c9700b"
  },
  {
    "url": "en/bungeecord.html",
    "revision": "f8a5bde33df2b808c657e74a6604286d"
  },
  {
    "url": "en/commands/admin.html",
    "revision": "ac3429668e9b339efb687d14617c6cd9"
  },
  {
    "url": "en/commands/banking.html",
    "revision": "4594ddfda9fcd9d07b8ed835cc6b0b73"
  },
  {
    "url": "en/commands/player.html",
    "revision": "964dcd31f2cade626a0686fb07eee0e1"
  },
  {
    "url": "en/faq.html",
    "revision": "faa5765f207f3e61fe7cd3f20de7d8bb"
  },
  {
    "url": "en/index.html",
    "revision": "d20872c520fdeb0e82f3c9f4c76c93a7"
  },
  {
    "url": "en/permissions.html",
    "revision": "2182c3d3327b76aae5d0fc311fdae906"
  },
  {
    "url": "en/placeholders/integrated.html",
    "revision": "b16f4ff4cb78e0601e8bb239626034e8"
  },
  {
    "url": "en/placeholders/placeholderapi.html",
    "revision": "e4b53c8cea3db256b0f2dd7766d766d1"
  },
  {
    "url": "en/setup.html",
    "revision": "ddd55e12077a31b8eacb7b307f18b3b3"
  },
  {
    "url": "en/tutorials/detectiongate.html",
    "revision": "cb7ab3031782db7918464bf8d5cc0314"
  },
  {
    "url": "en/tutorials/levelchecknpc.html",
    "revision": "f38e4013a9440ba4635996ca9587a8c7"
  },
  {
    "url": "en/tutorials/teleporters.html",
    "revision": "b7ed82cecb43366924e372c86d273d39"
  },
  {
    "url": "en/tutorials/vendingmachine.html",
    "revision": "b4e06a92d799ac74f227495c6c1a5765"
  },
  {
    "url": "faq.html",
    "revision": "6fb5e349005cc0d5055ecf0b1e41f71e"
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
    "revision": "dbcce2b92d49bb8c481094af1c9d7957"
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
    "revision": "d60808fed07d23db1057f0695d79de51"
  },
  {
    "url": "placeholders/integrated.html",
    "revision": "1feb7a1a498d18c69f4df52539458253"
  },
  {
    "url": "placeholders/placeholderapi.html",
    "revision": "259f4dd14e9200c6f2996df2c8169fc0"
  },
  {
    "url": "setup.html",
    "revision": "d9eef466222adee71046725b2c380cd2"
  },
  {
    "url": "tutorials/detectiongate.html",
    "revision": "576804b7a27f0f1555cba4ff42c86ada"
  },
  {
    "url": "tutorials/levelchecknpc.html",
    "revision": "c493a709c5018e7bf5cbf885923d04c1"
  },
  {
    "url": "tutorials/teleporters.html",
    "revision": "cd0f931a391edfe30cf93ec40537240c"
  },
  {
    "url": "tutorials/vendingmachine.html",
    "revision": "b31435ae2d82c760ef2a3f418b05e0da"
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
