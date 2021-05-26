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
    "revision": "7f1763098993a80a564b85dcd0fc9117"
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
    "revision": "be95471e9c0a4cab940b93e027399b55"
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
    "url": "assets/js/20.08f49284.js",
    "revision": "6f6a22204f6099cf7707970ecc5c6b20"
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
    "url": "assets/js/25.6da3a46f.js",
    "revision": "742ce0f25fd7c9ba783193c11803704c"
  },
  {
    "url": "assets/js/26.7df3d89d.js",
    "revision": "b49bda1d28acec669069790cfba70240"
  },
  {
    "url": "assets/js/27.d6397150.js",
    "revision": "a9cd2038433891fe6ccf93a20e2af67e"
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
    "url": "assets/js/31.0706a571.js",
    "revision": "afab9a3b5a3b6da99d38e0f0e140c2fb"
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
    "url": "assets/js/36.2384ef2c.js",
    "revision": "897e0f3f8cd971174371b56a69ae6daf"
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
    "url": "assets/js/app.15fe7139.js",
    "revision": "49be638f43de1ef0512e05e8676fcc9e"
  },
  {
    "url": "assets/js/vendors~docsearch.fdd8a010.js",
    "revision": "581a5b4c541e9463dc178f120623529d"
  },
  {
    "url": "bungeecord.html",
    "revision": "f14abb52f4e45642088b255147b55b6e"
  },
  {
    "url": "commands/admin.html",
    "revision": "6cb21683c0cf664b9de64277ca2cd958"
  },
  {
    "url": "commands/banking.html",
    "revision": "7c6a401edb4cecade87016066b589918"
  },
  {
    "url": "commands/player.html",
    "revision": "8424b599046ee12e675d9ec65ddab351"
  },
  {
    "url": "en/api.html",
    "revision": "c8d04dcc5421cbd246e2e119549da6e9"
  },
  {
    "url": "en/bungeecord.html",
    "revision": "041f669876ea05cd14a566d6bbcdaa9c"
  },
  {
    "url": "en/commands/admin.html",
    "revision": "fc120a3bcb3e49a487499d672525786d"
  },
  {
    "url": "en/commands/banking.html",
    "revision": "b646b69c6b6f9686e86dd03372b0e3a3"
  },
  {
    "url": "en/commands/player.html",
    "revision": "e763e9e455fe6bab7ae7d4be3159b8d1"
  },
  {
    "url": "en/faq.html",
    "revision": "e555ac73dadf5c9990e7f007cc43780a"
  },
  {
    "url": "en/index.html",
    "revision": "cc5c0726e1b3aa90f87af7dff2363129"
  },
  {
    "url": "en/permissions.html",
    "revision": "f873df5cbf287af30816c2d7794a7e25"
  },
  {
    "url": "en/placeholders/integrated.html",
    "revision": "e4d1f1c2dfcbae391b0bc438b3bb4848"
  },
  {
    "url": "en/placeholders/placeholderapi.html",
    "revision": "a538260eeb682f8d8dd1a0de50e7e3b7"
  },
  {
    "url": "en/setup.html",
    "revision": "2d58fc97e9d64a2d90bd69b642b95157"
  },
  {
    "url": "en/tutorials/detectiongate.html",
    "revision": "79fe0a8e2747a8942318731d504a178a"
  },
  {
    "url": "en/tutorials/levelchecknpc.html",
    "revision": "97144ec0023a91ac9012386fa1a9379e"
  },
  {
    "url": "en/tutorials/teleporters.html",
    "revision": "84f8fb4c762f58988d21094e7048c5d2"
  },
  {
    "url": "en/tutorials/vendingmachine.html",
    "revision": "730c7abb2ac9c3ece42f5ec2d1e40596"
  },
  {
    "url": "faq.html",
    "revision": "acc593949da23ace5f07e9775f8eebe4"
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
    "revision": "39e3aa0e62cd0995700b6139bc84547c"
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
    "revision": "04714cfada856b9c7c9602ff79a379e3"
  },
  {
    "url": "placeholders/integrated.html",
    "revision": "e3ae2bd0a22726b391970f5a0ba20a5a"
  },
  {
    "url": "placeholders/placeholderapi.html",
    "revision": "05d25e7dfb88ea4c126e34edc2c3e490"
  },
  {
    "url": "setup.html",
    "revision": "5624e7eb19f2452c16229b71e051912d"
  },
  {
    "url": "tutorials/detectiongate.html",
    "revision": "9324e382fcfa8958d91ed38f50f893ce"
  },
  {
    "url": "tutorials/levelchecknpc.html",
    "revision": "ee820618254b395923edbf6dd89a01d9"
  },
  {
    "url": "tutorials/teleporters.html",
    "revision": "9089c0a6d29ffbb3770f0dc28c473994"
  },
  {
    "url": "tutorials/vendingmachine.html",
    "revision": "566d7fa930edd9a5a8c1d1554d585bab"
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
