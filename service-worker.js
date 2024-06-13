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
    "revision": "4376b365228d18c3411bd3e2ad062321"
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
    "revision": "61d773a766443c52cda651b3e228cbb4"
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
    "url": "assets/js/23.7be58a9f.js",
    "revision": "21e3957de2e3362141d09b8d9d5821c3"
  },
  {
    "url": "assets/js/24.3a296db6.js",
    "revision": "207fd7072e865e119871d45071bd4e60"
  },
  {
    "url": "assets/js/25.b6be7249.js",
    "revision": "49febb16bb972255dd910505173bae03"
  },
  {
    "url": "assets/js/26.bf245380.js",
    "revision": "8e5c67167941935749bcea6d4bb37f58"
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
    "url": "assets/js/31.371d79ef.js",
    "revision": "5d99025231853e9d05a37f64cbcf4a0d"
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
    "url": "assets/js/37.2be109e7.js",
    "revision": "1e2f48624090a24489096cdb70493e09"
  },
  {
    "url": "assets/js/38.a5aa0864.js",
    "revision": "bb6bb50e5b0f04112657e38781d4b454"
  },
  {
    "url": "assets/js/39.98355741.js",
    "revision": "68f498bbe7b2b0cc8f6c005a8c6cb59b"
  },
  {
    "url": "assets/js/4.6502034f.js",
    "revision": "76f565548cd443a403ead9c95859f3b6"
  },
  {
    "url": "assets/js/40.7d3f073d.js",
    "revision": "002bf5266f92c7fdd946a5eae3a70bf9"
  },
  {
    "url": "assets/js/41.328ab7ef.js",
    "revision": "609512ced6f5c94228786498d4f60a9a"
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
    "url": "assets/js/44.1f3ae2d0.js",
    "revision": "d58060bc84a5d83d58baa900d65dc698"
  },
  {
    "url": "assets/js/45.9395d933.js",
    "revision": "4d96fabbb610a3d87c4b6dd57f138e62"
  },
  {
    "url": "assets/js/46.1518deee.js",
    "revision": "9dc830c272ff1d819e6b4f30abf1832f"
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
    "url": "assets/js/49.1e1142ea.js",
    "revision": "3d131b8b659bed101574499a3b81620e"
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
    "url": "assets/js/51.cfe49ca7.js",
    "revision": "94c7e80cadd19dda8dcb7e7500d84eea"
  },
  {
    "url": "assets/js/52.ac3ed5ff.js",
    "revision": "18fa21b584ecc42eef2eeae3d679189d"
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
    "url": "assets/js/app.4e80c748.js",
    "revision": "8b02e76efcdd84788a65037c06639e97"
  },
  {
    "url": "assets/js/vendors~docsearch.d6ebca66.js",
    "revision": "cbd519dec869d9622154086422b6ef6d"
  },
  {
    "url": "bungeecord.html",
    "revision": "9913053a67824161d51db1750bf1ece9"
  },
  {
    "url": "commands/admin.html",
    "revision": "cbe38c5199467efccdd36106f905384a"
  },
  {
    "url": "commands/banking.html",
    "revision": "a227c644e96b8d7d3e11a9bd0a4dfa8f"
  },
  {
    "url": "commands/player.html",
    "revision": "4a968461ba59c98803a692584d13f12b"
  },
  {
    "url": "en/api.html",
    "revision": "9e871644c475aec8f42034fb6ad988bd"
  },
  {
    "url": "en/bungeecord.html",
    "revision": "b1f1ca8b486cf89581d8d1da5cc530c5"
  },
  {
    "url": "en/commands/admin.html",
    "revision": "5ed13f85afbd644c87db717ac59af968"
  },
  {
    "url": "en/commands/banking.html",
    "revision": "ac82d4786a1ed46836721c7a702d2aa6"
  },
  {
    "url": "en/commands/player.html",
    "revision": "05bf6bced31dc222e76856669720eaa8"
  },
  {
    "url": "en/faq.html",
    "revision": "a20def267c42215ef1738efb99dd0d51"
  },
  {
    "url": "en/index.html",
    "revision": "94cb98e6234f0584f81fdb19bf331fe0"
  },
  {
    "url": "en/permissions.html",
    "revision": "72955af9b4b11d8f49cfdabc735b2a60"
  },
  {
    "url": "en/placeholders/integrated.html",
    "revision": "ca7800d00b7977592bd2c25b067be824"
  },
  {
    "url": "en/placeholders/placeholderapi.html",
    "revision": "c8606ace8082501c81aa3cfed0d89264"
  },
  {
    "url": "en/setup.html",
    "revision": "7ebbc3ac7095c64f1b7aec589f4f8bf6"
  },
  {
    "url": "en/tutorials/detectiongate.html",
    "revision": "84f27ea7af1d5f6086bc59d1410fac60"
  },
  {
    "url": "en/tutorials/levelchecknpc.html",
    "revision": "7bae2cebe879a8ac23992a18c76c537f"
  },
  {
    "url": "en/tutorials/teleporters.html",
    "revision": "755a008d0a3b7a0e5920d2ddbd7cca65"
  },
  {
    "url": "en/tutorials/vendingmachine.html",
    "revision": "bc31438a97bcfe587630229c48765527"
  },
  {
    "url": "faq.html",
    "revision": "1affe655a67839b46291b1bd85b1ed8f"
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
    "revision": "b6868918d40c246a7c4ef8c8650477ec"
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
    "revision": "09060a5ffeae78083837e8388b202c71"
  },
  {
    "url": "placeholders/integrated.html",
    "revision": "31f74b88ad93b9bcdea27cffb8cb3db3"
  },
  {
    "url": "placeholders/placeholderapi.html",
    "revision": "addd72987810c412b2c2a9842ec4ad8d"
  },
  {
    "url": "setup.html",
    "revision": "977b832b9e4287d3af5936d84a60a2da"
  },
  {
    "url": "tutorials/detectiongate.html",
    "revision": "815a0c0acc44cfa745ff0357413c343a"
  },
  {
    "url": "tutorials/levelchecknpc.html",
    "revision": "73785dfd05e9a02317853c652611a918"
  },
  {
    "url": "tutorials/teleporters.html",
    "revision": "279186e10670f98fba1da0a740925707"
  },
  {
    "url": "tutorials/vendingmachine.html",
    "revision": "5129549f978d9f76302534241be37a4b"
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
