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
    "revision": "cce2a15a17a0ecac40502bbde5034200"
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
    "revision": "7ad83fdb58cb422e7df980c975a23b56"
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
    "url": "assets/js/22.c95da179.js",
    "revision": "543a217628505df3d4a935f4e706a108"
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
    "url": "assets/js/25.2ad64e4c.js",
    "revision": "98001bb9af4293b56523ccc79fb4e99c"
  },
  {
    "url": "assets/js/26.358f3769.js",
    "revision": "b9d5f5e08df621dbffb78d04dd52243f"
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
    "url": "assets/js/29.1b78e463.js",
    "revision": "f8d1274efa1aaea0719a702aa303267b"
  },
  {
    "url": "assets/js/3.018ff0e2.js",
    "revision": "618aa9a9d21af42286d4575ec9e12f4a"
  },
  {
    "url": "assets/js/30.7a7239c8.js",
    "revision": "039e2cb5d9bb6b7a23987e96b994dc3a"
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
    "url": "assets/js/35.25a40dd3.js",
    "revision": "bbd21e3ea98711eeed3f7834ce552431"
  },
  {
    "url": "assets/js/36.d389b26c.js",
    "revision": "d655adcdf5dc9a5f0638908c35ce25d7"
  },
  {
    "url": "assets/js/37.75668f87.js",
    "revision": "f4f0b80257a9bc6f2ffc7b612605ea50"
  },
  {
    "url": "assets/js/38.29c51411.js",
    "revision": "50b81acda6042580d591c64b2ae9484a"
  },
  {
    "url": "assets/js/39.62a461a4.js",
    "revision": "03ea220f5f7f4488745275b7b4af1bb6"
  },
  {
    "url": "assets/js/4.6502034f.js",
    "revision": "76f565548cd443a403ead9c95859f3b6"
  },
  {
    "url": "assets/js/40.8c09c519.js",
    "revision": "7f4390cd99bad3808fa697d0d6688831"
  },
  {
    "url": "assets/js/41.9dc58e1e.js",
    "revision": "662ec790b3ae76aab2c68d9077b61580"
  },
  {
    "url": "assets/js/42.64ded26b.js",
    "revision": "66345f49316024ab5d16cd0b725c454d"
  },
  {
    "url": "assets/js/43.6a318a56.js",
    "revision": "4766322654a3471930418c4ab85e77a4"
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
    "url": "assets/js/47.dbf39e6b.js",
    "revision": "2e42aa9bec07cd162e454fac46ad70d9"
  },
  {
    "url": "assets/js/48.00ef75e8.js",
    "revision": "114091a97a190c0d6e5f9c0bd2843a8a"
  },
  {
    "url": "assets/js/49.580647d4.js",
    "revision": "09867d930e66fa23c3eaf2c9389b84af"
  },
  {
    "url": "assets/js/5.5051310a.js",
    "revision": "4d0e8cb61fb9575c533d010c0f734961"
  },
  {
    "url": "assets/js/50.829f2962.js",
    "revision": "569f20eedc4ee40e612590fbc98bf542"
  },
  {
    "url": "assets/js/51.31e6d2ab.js",
    "revision": "80b9475e824fee77933c6ef7b0838805"
  },
  {
    "url": "assets/js/52.60a82a02.js",
    "revision": "8b54997b57b4a7e9820762b7ecdaf21f"
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
    "url": "assets/js/app.7c82e6fe.js",
    "revision": "a189261f51c08ec52743c18713000d2e"
  },
  {
    "url": "assets/js/vendors~docsearch.d6ebca66.js",
    "revision": "cbd519dec869d9622154086422b6ef6d"
  },
  {
    "url": "bungeecord.html",
    "revision": "d1bf79237615ddf6b4d4722dfb52fe13"
  },
  {
    "url": "commands/admin.html",
    "revision": "911a0cfd45df60a8c5368d17011d699c"
  },
  {
    "url": "commands/banking.html",
    "revision": "bc494579de15f6bab7156e7fad766a94"
  },
  {
    "url": "commands/player.html",
    "revision": "1e6d3511bb123c70f9d5f3da1b2e2daa"
  },
  {
    "url": "en/api.html",
    "revision": "8c04fe00f6a06e92f62b853295fde14d"
  },
  {
    "url": "en/bungeecord.html",
    "revision": "05cce4ae86277899dd97533e5c26c0d7"
  },
  {
    "url": "en/commands/admin.html",
    "revision": "8f77a85e5e0c03e09b2223e67de7b0de"
  },
  {
    "url": "en/commands/banking.html",
    "revision": "278ee98098e1a22eb2d3f0bda2bfe003"
  },
  {
    "url": "en/commands/player.html",
    "revision": "52ad07c802bffbb0ad62aeb798202088"
  },
  {
    "url": "en/faq.html",
    "revision": "e0b5bee7170b847d6eb96c6218a098d3"
  },
  {
    "url": "en/index.html",
    "revision": "027efaf3e6318467fa8d95cbb41f4a45"
  },
  {
    "url": "en/permissions.html",
    "revision": "5c4b55a11a48ee3b18a234853d48aa1b"
  },
  {
    "url": "en/placeholders/integrated.html",
    "revision": "d3d0071838f32b9971ab55bb9eaaca8b"
  },
  {
    "url": "en/placeholders/placeholderapi.html",
    "revision": "38ced7126ed7e067e368f754444f56d1"
  },
  {
    "url": "en/setup.html",
    "revision": "9f92a7ce731941108afb00a858e782a6"
  },
  {
    "url": "en/tutorials/detectiongate.html",
    "revision": "249f8b347eb7277af0bef06fd22fb36c"
  },
  {
    "url": "en/tutorials/levelchecknpc.html",
    "revision": "86952c85ce20feaf2f90ba022f212c7f"
  },
  {
    "url": "en/tutorials/teleporters.html",
    "revision": "d5e4758f9ec33d5fcdb747b8f75450df"
  },
  {
    "url": "en/tutorials/vendingmachine.html",
    "revision": "171a0cf0ed54996ee5791d6a21581e66"
  },
  {
    "url": "faq.html",
    "revision": "260c58c2143c89ac3fa5acd01aa680d1"
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
    "revision": "9c90902150f2f80975a6104906005a50"
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
    "revision": "eeebddbea71c92846812c7f8d745058c"
  },
  {
    "url": "placeholders/integrated.html",
    "revision": "4dfd4dad6934b0e3d82cb1c0ebf74558"
  },
  {
    "url": "placeholders/placeholderapi.html",
    "revision": "297ecddec10c0888ae043de90b64a839"
  },
  {
    "url": "setup.html",
    "revision": "e16d00323209c8cbdf988aff6bd0223c"
  },
  {
    "url": "tutorials/detectiongate.html",
    "revision": "40abe8d48cf26f4a5bf02295cca86712"
  },
  {
    "url": "tutorials/levelchecknpc.html",
    "revision": "260f2284f391c71b3640de783128cf95"
  },
  {
    "url": "tutorials/teleporters.html",
    "revision": "81e9b84aa65716602d9ae113ad2fc7b4"
  },
  {
    "url": "tutorials/vendingmachine.html",
    "revision": "05955979a920399c0ef0cf56a2ca0cdb"
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
