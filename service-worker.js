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
    "revision": "63728b0cbf0529145625933496190c10"
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
    "url": "apple-touch-icon.png",
    "revision": "5d47fcf7009db7bcbd06ae7bff46863a"
  },
  {
    "url": "assets/css/0.styles.11e3be62.css",
    "revision": "6b82d547a7aba8c15455a14910e3d059"
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
    "url": "assets/js/10.d3f33425.js",
    "revision": "ff3353d889238fac24ed00cd32b33aef"
  },
  {
    "url": "assets/js/11.438f8d0f.js",
    "revision": "00406978820f3339be05311febc1e5cb"
  },
  {
    "url": "assets/js/12.ab55e955.js",
    "revision": "cd814d078941ef8ccdb04c04afd54077"
  },
  {
    "url": "assets/js/13.b8b93724.js",
    "revision": "edd13822289c27fc482099f2638e7af1"
  },
  {
    "url": "assets/js/14.02c0c18f.js",
    "revision": "b697833038550d6f2ea58b909598bbf6"
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
    "url": "assets/js/17.3ece3368.js",
    "revision": "9ede23adad37a1a54f0b08f3777110cd"
  },
  {
    "url": "assets/js/18.cf058851.js",
    "revision": "bff1196bd32167230913a432a3c21a3f"
  },
  {
    "url": "assets/js/19.cd85cb46.js",
    "revision": "3260f46d57331051078ed39765cec53c"
  },
  {
    "url": "assets/js/2.446c9011.js",
    "revision": "22e6605bbffc055d3792fc31c54ad87a"
  },
  {
    "url": "assets/js/20.21897b40.js",
    "revision": "8eb237159976913402204b5488097299"
  },
  {
    "url": "assets/js/21.c521a323.js",
    "revision": "72bb035fe6c2c28f6e64c94435cf3b79"
  },
  {
    "url": "assets/js/22.ecb6a608.js",
    "revision": "49fe0ff2e57506d7af234fd826b4209c"
  },
  {
    "url": "assets/js/23.f51c7cdb.js",
    "revision": "3c58225976fb3982d97a676f4bc772cf"
  },
  {
    "url": "assets/js/24.de60b1ed.js",
    "revision": "6aba78f5e1253da7a4a585ea8cc543c3"
  },
  {
    "url": "assets/js/25.d4625d66.js",
    "revision": "9cb26b7ab80267d007b88e9c742bff2c"
  },
  {
    "url": "assets/js/26.4b654a86.js",
    "revision": "54e3fa9a30e68940061ebb543cd51806"
  },
  {
    "url": "assets/js/27.75a97257.js",
    "revision": "4e88453b3bfec8dbf404ee7a0269f2c0"
  },
  {
    "url": "assets/js/28.b3c5511c.js",
    "revision": "1ad25b1d829edbfc79bfa48ad89a9349"
  },
  {
    "url": "assets/js/29.91efdcd9.js",
    "revision": "4d3af2dd36a420c894500d46d25588c7"
  },
  {
    "url": "assets/js/3.202c6226.js",
    "revision": "0d24b62a36566d9a418baa3b7ff104dd"
  },
  {
    "url": "assets/js/30.44e3cc3c.js",
    "revision": "b3c604a69d36dd07c466a0d395af71ab"
  },
  {
    "url": "assets/js/31.8e63d294.js",
    "revision": "93a9919f9abf054f247bef3427286ccc"
  },
  {
    "url": "assets/js/32.28009821.js",
    "revision": "ea0513c2681f6773d340bf9066e97b41"
  },
  {
    "url": "assets/js/33.5a3c52bc.js",
    "revision": "de82888e033a97cf5feb25a1afb3956b"
  },
  {
    "url": "assets/js/34.5a1fada2.js",
    "revision": "c6515d1064b8c6adb07a8c1fc1c20c78"
  },
  {
    "url": "assets/js/4.38734452.js",
    "revision": "4728fc759fb70317bdbc80c56ae9e461"
  },
  {
    "url": "assets/js/5.f4239aee.js",
    "revision": "b2522952e6e475e48e8c3888e681f331"
  },
  {
    "url": "assets/js/6.2bbffdac.js",
    "revision": "8c38c26dab54b0b6895b2c5bb7c14bf1"
  },
  {
    "url": "assets/js/7.1848b333.js",
    "revision": "fe6f9eb23e0bed5086f2fa38cbcf1e3c"
  },
  {
    "url": "assets/js/8.1c9551a2.js",
    "revision": "015afcbba3aee04189fbf4334b4f2e84"
  },
  {
    "url": "assets/js/9.e502d87e.js",
    "revision": "071f6552a4f7d1b7010656419986f624"
  },
  {
    "url": "assets/js/app.e20249f7.js",
    "revision": "dce5f4616bf7bf061a99780e7e991c6d"
  },
  {
    "url": "bungeecord.html",
    "revision": "34c474dff5e9c064039e39e8ca424135"
  },
  {
    "url": "commands/admin.html",
    "revision": "ff769e747540666747e75ef574173747"
  },
  {
    "url": "commands/banking.html",
    "revision": "da6f007983cd7aa29323dae6dbc0c73d"
  },
  {
    "url": "commands/player.html",
    "revision": "fb8c591bbbf41d134efe41fd63965600"
  },
  {
    "url": "en/bungeecord.html",
    "revision": "544392de8e7398a3a4119241d2529e35"
  },
  {
    "url": "en/commands/admin.html",
    "revision": "d530ac280824ade347e64a90df0bd213"
  },
  {
    "url": "en/commands/banking.html",
    "revision": "e8df4f0300450fb02b47221ab984e8cf"
  },
  {
    "url": "en/commands/player.html",
    "revision": "986aaab992e0a19a7dbb9091108d1e2e"
  },
  {
    "url": "en/faq.html",
    "revision": "f4f32443046249a83af65e925c8115bb"
  },
  {
    "url": "en/index.html",
    "revision": "ea65a46412bab66429d36375e9eca494"
  },
  {
    "url": "en/permissions.html",
    "revision": "d04f0a0604567ff511b31476b11364c7"
  },
  {
    "url": "en/placeholders/integrated.html",
    "revision": "479cca9daffac6fbd65c11966a21c124"
  },
  {
    "url": "en/placeholders/placeholderapi.html",
    "revision": "21413e7eb0f77004c4e10bdbf93cddbd"
  },
  {
    "url": "en/setup.html",
    "revision": "d086768ea19d30b5944829ed43607362"
  },
  {
    "url": "en/tutorials/detectiongate.html",
    "revision": "eaf9c16bbd41da56b7daf82f3f9d6b3f"
  },
  {
    "url": "en/tutorials/levelchecknpc.html",
    "revision": "b7d50367bb70c1859d8e1d6d8a240e42"
  },
  {
    "url": "en/tutorials/teleporters.html",
    "revision": "dd9ea0c6986d0d58a60ea863e0bced2b"
  },
  {
    "url": "en/tutorials/vendingmachine.html",
    "revision": "fe9d6b3cfaf87deffab98cb74418d936"
  },
  {
    "url": "faq.html",
    "revision": "f39a9264fc2af687d06b5022fee857ac"
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
    "revision": "fd6569ac392cec0d83b9cdd14d728410"
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
    "revision": "294e9a1568744da50da5241cc1095ae1"
  },
  {
    "url": "placeholders/integrated.html",
    "revision": "40582625f464fc1050c5c4f4b3f8b2bd"
  },
  {
    "url": "placeholders/placeholderapi.html",
    "revision": "c0240065829b0e45672b9db946b36e5c"
  },
  {
    "url": "setup.html",
    "revision": "74dd69da732684b850de11a2096f14fe"
  },
  {
    "url": "tutorials/detectiongate.html",
    "revision": "d7827d052717a3af8d40ee8a86af41e1"
  },
  {
    "url": "tutorials/levelchecknpc.html",
    "revision": "d498239c837dbdafd59d67d9ae37e95f"
  },
  {
    "url": "tutorials/teleporters.html",
    "revision": "ecb248c873bcf20f7be13a5176b8ab78"
  },
  {
    "url": "tutorials/vendingmachine.html",
    "revision": "87b02dc330f7eb84930f4e5d6f932c65"
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
