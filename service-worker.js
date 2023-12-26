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
    "revision": "9f3722839020e1141d1ee25bfe914107"
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
    "revision": "7868cec669e33805fa9b16aeea66895a"
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
    "url": "assets/js/23.7ac10b91.js",
    "revision": "ffdc6a74e63a116a5aa48130b56a170f"
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
    "url": "assets/js/26.358f3769.js",
    "revision": "b9d5f5e08df621dbffb78d04dd52243f"
  },
  {
    "url": "assets/js/27.842c59c1.js",
    "revision": "05cf3802baee611fe129489ac35d7538"
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
    "url": "assets/js/31.2a4b8c87.js",
    "revision": "1d4e8a20312bdb56aea020a11ac0df67"
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
    "url": "assets/js/37.c0b2dd6d.js",
    "revision": "2d60dc3e65fde46d28db683366487fa2"
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
    "url": "assets/js/42.fc73f3a0.js",
    "revision": "f6ca579817a5fd2c0992208ed591fcde"
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
    "url": "assets/js/47.dbf39e6b.js",
    "revision": "2e42aa9bec07cd162e454fac46ad70d9"
  },
  {
    "url": "assets/js/48.bfa03eee.js",
    "revision": "462f7e1c3a386eb92558d8e8c77a5abd"
  },
  {
    "url": "assets/js/49.6981f449.js",
    "revision": "dc539fc6e4e744c34f5523953cee721c"
  },
  {
    "url": "assets/js/5.5051310a.js",
    "revision": "4d0e8cb61fb9575c533d010c0f734961"
  },
  {
    "url": "assets/js/50.b9e3c1ab.js",
    "revision": "961cd60f54b5a6ea670ccafb14abd9e9"
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
    "url": "assets/js/app.bd84c55c.js",
    "revision": "b4e370eb8cb32e73c9c14f8a88298827"
  },
  {
    "url": "assets/js/vendors~docsearch.d6ebca66.js",
    "revision": "cbd519dec869d9622154086422b6ef6d"
  },
  {
    "url": "bungeecord.html",
    "revision": "8cdf9dba624eaee5c24d3094636d29bd"
  },
  {
    "url": "commands/admin.html",
    "revision": "158b7411e60da0ea4fb069edc38e8e72"
  },
  {
    "url": "commands/banking.html",
    "revision": "bca89d4cff109d1bf32aff0208818739"
  },
  {
    "url": "commands/player.html",
    "revision": "9bbc30912b03213f7c970d07b1755870"
  },
  {
    "url": "en/api.html",
    "revision": "b114f7621dddcd570434b18f98a0916c"
  },
  {
    "url": "en/bungeecord.html",
    "revision": "fe2fc8efa25a5423b3231cc5aac2ae2c"
  },
  {
    "url": "en/commands/admin.html",
    "revision": "5ab1240e1e14e7fa7529771a9922c128"
  },
  {
    "url": "en/commands/banking.html",
    "revision": "e0b66b8e8744a0cd59c3d417aa206c39"
  },
  {
    "url": "en/commands/player.html",
    "revision": "6b10364b163d6361028cd1451292cfe7"
  },
  {
    "url": "en/faq.html",
    "revision": "561012f4ecb8830a683e29702dae89b0"
  },
  {
    "url": "en/index.html",
    "revision": "72230666bf1d069b4f7f7730fc69644c"
  },
  {
    "url": "en/permissions.html",
    "revision": "29e62732646df1d8383f5ca607d9851e"
  },
  {
    "url": "en/placeholders/integrated.html",
    "revision": "884d5495670588391f28f8dcd358ce1b"
  },
  {
    "url": "en/placeholders/placeholderapi.html",
    "revision": "f68277d3813c54e89c70e24a77512e80"
  },
  {
    "url": "en/setup.html",
    "revision": "d46f5e7119dc8263ac0ead9291303a1a"
  },
  {
    "url": "en/tutorials/detectiongate.html",
    "revision": "b1fd3d228b087207595fcd9b959e25ac"
  },
  {
    "url": "en/tutorials/levelchecknpc.html",
    "revision": "8d883375c98ae5afb254a9e5f933aa18"
  },
  {
    "url": "en/tutorials/teleporters.html",
    "revision": "33f8639caa24dd909329980be911a9c8"
  },
  {
    "url": "en/tutorials/vendingmachine.html",
    "revision": "0ba175ef02621710ad9f5d0181fcac7a"
  },
  {
    "url": "faq.html",
    "revision": "149a01af49746b5d9ed792dd84167096"
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
    "revision": "1cd516b51d52bdb0d0fd4f51fe4d1b0b"
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
    "revision": "7438849b77d208d34e40ac65d6f202a7"
  },
  {
    "url": "placeholders/integrated.html",
    "revision": "4672b2c2a8558d5202387aa899b9d55c"
  },
  {
    "url": "placeholders/placeholderapi.html",
    "revision": "b4fb9a2c9e21f3d501f757ecaa8486a3"
  },
  {
    "url": "setup.html",
    "revision": "cbe010f81bd640a0f45ca264105b7116"
  },
  {
    "url": "tutorials/detectiongate.html",
    "revision": "31f7c46d0e2b9edec4efd6f9d5327d66"
  },
  {
    "url": "tutorials/levelchecknpc.html",
    "revision": "e3b653286b3be3b2057327b60002bbeb"
  },
  {
    "url": "tutorials/teleporters.html",
    "revision": "94aa8c0555a6e68a9684bd602433dbf9"
  },
  {
    "url": "tutorials/vendingmachine.html",
    "revision": "e04aebab5de48095cf54ee6edabfb82f"
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
