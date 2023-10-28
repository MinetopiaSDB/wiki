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
    "revision": "5faca11665042cfc916e7fda45089b66"
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
    "revision": "9abf9d78e3582285db77c7f24a509ba1"
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
    "url": "assets/js/25.b6be7249.js",
    "revision": "49febb16bb972255dd910505173bae03"
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
    "url": "assets/js/35.25a40dd3.js",
    "revision": "bbd21e3ea98711eeed3f7834ce552431"
  },
  {
    "url": "assets/js/36.d389b26c.js",
    "revision": "d655adcdf5dc9a5f0638908c35ce25d7"
  },
  {
    "url": "assets/js/37.2be109e7.js",
    "revision": "1e2f48624090a24489096cdb70493e09"
  },
  {
    "url": "assets/js/38.61493d9b.js",
    "revision": "02b6214ce704d6e690c6d095271865cf"
  },
  {
    "url": "assets/js/39.176d9a71.js",
    "revision": "9ce713cf6143d727fa127faf9291a675"
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
    "url": "assets/js/app.b1d8726e.js",
    "revision": "687524294a8f71f98b05f42bdce79dae"
  },
  {
    "url": "assets/js/vendors~docsearch.d6ebca66.js",
    "revision": "cbd519dec869d9622154086422b6ef6d"
  },
  {
    "url": "bungeecord.html",
    "revision": "ebddcf6761d7ee403959c493e21aa1a9"
  },
  {
    "url": "commands/admin.html",
    "revision": "27e10181d8aea2e764038ec0b464dfea"
  },
  {
    "url": "commands/banking.html",
    "revision": "e52796f915a6f0b4f216b441d02373d3"
  },
  {
    "url": "commands/player.html",
    "revision": "4c5ae72f610ebc0b049a89d3f93ad18c"
  },
  {
    "url": "en/api.html",
    "revision": "d352e956c2a6a5dc90400e1360eefb90"
  },
  {
    "url": "en/bungeecord.html",
    "revision": "f7c789e1195c985b9736ee06297da76a"
  },
  {
    "url": "en/commands/admin.html",
    "revision": "7c8f0181dcc4b53086c9522685faefab"
  },
  {
    "url": "en/commands/banking.html",
    "revision": "ea71ade59387cb2760518df6d991e06c"
  },
  {
    "url": "en/commands/player.html",
    "revision": "555a232ddd513f98d866eb02294ecddb"
  },
  {
    "url": "en/faq.html",
    "revision": "020389e78e62634d4075cbce2892753f"
  },
  {
    "url": "en/index.html",
    "revision": "aedaa8e3b7818fd899d40a0b600a009d"
  },
  {
    "url": "en/permissions.html",
    "revision": "cd19739fd87c79a44e8b49dc6afa6de7"
  },
  {
    "url": "en/placeholders/integrated.html",
    "revision": "0fe2d5cd117eabd645dd3fbdf5141595"
  },
  {
    "url": "en/placeholders/placeholderapi.html",
    "revision": "08955b37dbc6398f38a467c08d706299"
  },
  {
    "url": "en/setup.html",
    "revision": "7ca45a6e60e91fd2615719927d8a7e03"
  },
  {
    "url": "en/tutorials/detectiongate.html",
    "revision": "e0d691aa1587c6aa7ec2d02670feb814"
  },
  {
    "url": "en/tutorials/levelchecknpc.html",
    "revision": "22cd028322acfaeebac12cc99180a005"
  },
  {
    "url": "en/tutorials/teleporters.html",
    "revision": "25b712fadb5459eafdd3cdab7ac0f92c"
  },
  {
    "url": "en/tutorials/vendingmachine.html",
    "revision": "2adbd69419c00d573afb5cb8ce5e8a2e"
  },
  {
    "url": "faq.html",
    "revision": "d576e62becd7fe6a081de5ab5a7dd518"
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
    "revision": "6b1ab0a789d2f380f88e5194c05b625b"
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
    "revision": "ed24ba00ad4bc96415f6f98fe709d525"
  },
  {
    "url": "placeholders/integrated.html",
    "revision": "a25c515fabb2edb68d907e76241156cd"
  },
  {
    "url": "placeholders/placeholderapi.html",
    "revision": "b1cb5f2e7a0631d800d919f81121c09c"
  },
  {
    "url": "setup.html",
    "revision": "edbc245efb973a6a9c3e940313d7bef7"
  },
  {
    "url": "tutorials/detectiongate.html",
    "revision": "0907ee9794a8c13b3d24d4ad8a54658a"
  },
  {
    "url": "tutorials/levelchecknpc.html",
    "revision": "f5059330b6fe951bc0f539e9d55ea8c6"
  },
  {
    "url": "tutorials/teleporters.html",
    "revision": "fd11c2a7f3a4bffdd389f4341a7263e8"
  },
  {
    "url": "tutorials/vendingmachine.html",
    "revision": "d5a694e266d1b61d0afd8aec34da8a3f"
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
