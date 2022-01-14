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
    "revision": "c90ee4d7e4707c59ab8e8a78941586e4"
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
    "revision": "d5dfe12f1f91de49252f310c0c58ebfb"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "5d47fcf7009db7bcbd06ae7bff46863a"
  },
  {
    "url": "assets/css/0.styles.bf99dde1.css",
    "revision": "8ac5b004aae2e14acaee1184967083bc"
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
    "url": "assets/js/10.febcf86d.js",
    "revision": "879ca278cd9d9469ba4dd89ed986eb23"
  },
  {
    "url": "assets/js/11.24337ec0.js",
    "revision": "44a84c2b011c43d7d7f8cea66ecb2d2d"
  },
  {
    "url": "assets/js/12.00193509.js",
    "revision": "4308ee6e2780d1ec6eff68bbb49bb9d7"
  },
  {
    "url": "assets/js/13.11956c59.js",
    "revision": "ba7020360347866848f7b97ca2d49c33"
  },
  {
    "url": "assets/js/14.51ae5114.js",
    "revision": "812f343135a4b1cbc191d4b2ece37fc5"
  },
  {
    "url": "assets/js/15.b0b819cc.js",
    "revision": "6a2c5eee2243540fd0ff5e49d240c4d5"
  },
  {
    "url": "assets/js/16.5abdbb4f.js",
    "revision": "fd01581d696491e39b6e911e5915733a"
  },
  {
    "url": "assets/js/17.bb04176c.js",
    "revision": "2d616265ab33e0c439789e94d8adf0e1"
  },
  {
    "url": "assets/js/18.43a7ab8d.js",
    "revision": "a602c82ae908a6284c2a1bba23ad167f"
  },
  {
    "url": "assets/js/19.e8cf8f3a.js",
    "revision": "3c66b16c85ec6d79567fba1dee6eaecc"
  },
  {
    "url": "assets/js/20.53d2ffa8.js",
    "revision": "3ae75759c718cc417336a40e7ac5e526"
  },
  {
    "url": "assets/js/21.0fd230a0.js",
    "revision": "e2867dbeae58cb61209b865fb618c2a4"
  },
  {
    "url": "assets/js/22.4db62dac.js",
    "revision": "4f17359a36c37ca747e00dd29085f73d"
  },
  {
    "url": "assets/js/23.2769dbe4.js",
    "revision": "d6dd595bb4b741ea0b997f522192a464"
  },
  {
    "url": "assets/js/24.765dbd80.js",
    "revision": "8e296ef3298dcf9349ec6dde6086efe0"
  },
  {
    "url": "assets/js/25.a2c18eeb.js",
    "revision": "efb01ac42823a4c82ef1e3ee56815c39"
  },
  {
    "url": "assets/js/26.7df3d89d.js",
    "revision": "b49bda1d28acec669069790cfba70240"
  },
  {
    "url": "assets/js/27.48dd969e.js",
    "revision": "194fdf9bf6c188f03058b6762e1a2855"
  },
  {
    "url": "assets/js/28.c8ef180a.js",
    "revision": "840ace54e7b64f1efe1743236da534d1"
  },
  {
    "url": "assets/js/29.204ab785.js",
    "revision": "8bde11af42ce70775a44ee42366e614d"
  },
  {
    "url": "assets/js/3.49a60edb.js",
    "revision": "a9a175b56a5479c7d176f2b96bb9cb66"
  },
  {
    "url": "assets/js/30.e8f4d985.js",
    "revision": "2b218290539bf22444b6b987e6467c4c"
  },
  {
    "url": "assets/js/31.8c9d7178.js",
    "revision": "c9334b73c4c6c265423bcfdc8d7eda17"
  },
  {
    "url": "assets/js/32.262db6f5.js",
    "revision": "a04b1dc78e941d4c1cef933144d01091"
  },
  {
    "url": "assets/js/33.d9da2e99.js",
    "revision": "a33370651a57ed57ee713cb5544695a3"
  },
  {
    "url": "assets/js/34.2374c216.js",
    "revision": "1add8833416cd9164abea51ad131c3f3"
  },
  {
    "url": "assets/js/35.88b06be1.js",
    "revision": "bfbc4ddda60830e565bbebbfa34f2744"
  },
  {
    "url": "assets/js/36.00fad801.js",
    "revision": "d139e3d3d86fea4e1bcadc14208574cb"
  },
  {
    "url": "assets/js/37.f4a0da7a.js",
    "revision": "1390eb3f7f0aeff392453dbc3ecfc26c"
  },
  {
    "url": "assets/js/4.d956e6a7.js",
    "revision": "5419b6c6db372f3a08dd1e3ccde6655b"
  },
  {
    "url": "assets/js/5.cdff4df3.js",
    "revision": "88e646116ca9cfe4c97d64f9c2a18db6"
  },
  {
    "url": "assets/js/6.77c8221f.js",
    "revision": "e1d90a2258dc114922c990d24217bebb"
  },
  {
    "url": "assets/js/7.83ca0d9c.js",
    "revision": "0361569220a08c4d8b440ffaaf1d719f"
  },
  {
    "url": "assets/js/8.5e494ae7.js",
    "revision": "97356340e3f5d791bae3807f98e75282"
  },
  {
    "url": "assets/js/9.34f10e95.js",
    "revision": "485f5aee6a7efb7f3547ef76c12865e8"
  },
  {
    "url": "assets/js/app.63b1c7de.js",
    "revision": "f1e9c6becca693ab3ae605c39d64e5d0"
  },
  {
    "url": "assets/js/vendors~docsearch.fdd8a010.js",
    "revision": "581a5b4c541e9463dc178f120623529d"
  },
  {
    "url": "bungeecord.html",
    "revision": "fa73763049f56aa1e61ad8436e9327bf"
  },
  {
    "url": "commands/admin.html",
    "revision": "c877eaedddc864d32ff7f943ea56f80d"
  },
  {
    "url": "commands/banking.html",
    "revision": "ef6ffefe92c9cc997efed26635a233d4"
  },
  {
    "url": "commands/player.html",
    "revision": "0cf4acc73a8d871c55b731cb3f818a9a"
  },
  {
    "url": "en/api.html",
    "revision": "97ef7ed845e0309dcf6e8fcb7b9fe6bd"
  },
  {
    "url": "en/bungeecord.html",
    "revision": "2fb272f0de53c9ce66b7af93a6e91dfe"
  },
  {
    "url": "en/commands/admin.html",
    "revision": "6499e6d90b8d70c6afa5b2a1cd2ad8d6"
  },
  {
    "url": "en/commands/banking.html",
    "revision": "6d8f12360bd078f939018a4d96495044"
  },
  {
    "url": "en/commands/player.html",
    "revision": "d01916ab055fe7e267419d682800dedd"
  },
  {
    "url": "en/faq.html",
    "revision": "859abb33fc13ea9c3176e8bb9d4d95b3"
  },
  {
    "url": "en/index.html",
    "revision": "8e771612ea3d3b94f9afe52ae130b203"
  },
  {
    "url": "en/permissions.html",
    "revision": "9f34ae995dab5504cfbdf259da8f3e1a"
  },
  {
    "url": "en/placeholders/integrated.html",
    "revision": "eff96e71b20b4665c5195b7908e6f0d6"
  },
  {
    "url": "en/placeholders/placeholderapi.html",
    "revision": "8a838d5b71491d3b614e088724f061f8"
  },
  {
    "url": "en/setup.html",
    "revision": "23dc36a040e51a6be612bc0c813c540f"
  },
  {
    "url": "en/tutorials/detectiongate.html",
    "revision": "b6e38b3e3ea27b3a28bf4e8ffb55c987"
  },
  {
    "url": "en/tutorials/levelchecknpc.html",
    "revision": "0586aece3679b7c10931a0140185fd69"
  },
  {
    "url": "en/tutorials/teleporters.html",
    "revision": "622cfee0bc8ec22a0b29e0a6f2667bd9"
  },
  {
    "url": "en/tutorials/vendingmachine.html",
    "revision": "735beb443d835abfb1be3c021169a03c"
  },
  {
    "url": "faq.html",
    "revision": "ea956be9d03d96885c794fe7036822be"
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
    "revision": "9e6440c2fb27f0e5c2c2232d456c51fc"
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
    "revision": "33260f74af67d0c4df7834b67e43141e"
  },
  {
    "url": "placeholders/integrated.html",
    "revision": "8dbe3a3f2bc08395a2d12c0228e32e20"
  },
  {
    "url": "placeholders/placeholderapi.html",
    "revision": "72dd047fa462f035bd54baf768422a80"
  },
  {
    "url": "setup.html",
    "revision": "99a6a099df31a4d869ce3662faa80fa5"
  },
  {
    "url": "tutorials/detectiongate.html",
    "revision": "f35b0f172fbf2f7fc73da17099d2b093"
  },
  {
    "url": "tutorials/levelchecknpc.html",
    "revision": "8d0f2b0ff3ed6655c9372349046df466"
  },
  {
    "url": "tutorials/teleporters.html",
    "revision": "d55587b295ffa57bf5d25327e4ff28f0"
  },
  {
    "url": "tutorials/vendingmachine.html",
    "revision": "0f15402510ba029c2678349f1d01584a"
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
