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
    "revision": "4d1f8b8f1665c6080eb9fc836e869bf1"
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
    "revision": "7bf38270de70d9a275329eea6c0f0d80"
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
    "url": "assets/js/20.9e2616b6.js",
    "revision": "05945b6ee9104aff93f1fd01c22574c5"
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
    "url": "assets/js/25.25524326.js",
    "revision": "b3f8e377a074e505fdeb5056d5efc314"
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
    "url": "assets/js/28.71a04073.js",
    "revision": "3c51dd2a0f067d87c1c34231cc86c7c4"
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
    "url": "assets/js/30.cbba3351.js",
    "revision": "32730f287b37e33a201894460b9f89ae"
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
    "url": "assets/js/33.ce22850b.js",
    "revision": "d7815eb0243da4ca56ed8f3c060cef31"
  },
  {
    "url": "assets/js/34.2374c216.js",
    "revision": "1add8833416cd9164abea51ad131c3f3"
  },
  {
    "url": "assets/js/35.68ca5290.js",
    "revision": "036b83d3c609fe995f833662120798a0"
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
    "url": "assets/js/app.f3d55317.js",
    "revision": "5f31c131d62f96fa442d35b4e94b94d4"
  },
  {
    "url": "assets/js/vendors~docsearch.fdd8a010.js",
    "revision": "581a5b4c541e9463dc178f120623529d"
  },
  {
    "url": "bungeecord.html",
    "revision": "758a9b809770dd64cc040704cb1c045f"
  },
  {
    "url": "commands/admin.html",
    "revision": "2390ecc63162fc5455f19904b1707c67"
  },
  {
    "url": "commands/banking.html",
    "revision": "e1f406eaf7b492717d60bd947fea3720"
  },
  {
    "url": "commands/player.html",
    "revision": "4fdb037b646abd52271a6a0e545364cf"
  },
  {
    "url": "en/api.html",
    "revision": "1d396e57d0adb430b16f31555f4cb6b7"
  },
  {
    "url": "en/bungeecord.html",
    "revision": "c7770e5052997e9a1d82c2370722bbb8"
  },
  {
    "url": "en/commands/admin.html",
    "revision": "bc0599bceae107bbe5fd99cd25b30817"
  },
  {
    "url": "en/commands/banking.html",
    "revision": "2e27f3bf905ca011710ccdc163c465f5"
  },
  {
    "url": "en/commands/player.html",
    "revision": "250977788de4469492c439c66c5f7870"
  },
  {
    "url": "en/faq.html",
    "revision": "06a6b7ba98791546eef4bd81b44c1ea8"
  },
  {
    "url": "en/index.html",
    "revision": "e60a4165105fb0a3c01a854c518bc229"
  },
  {
    "url": "en/permissions.html",
    "revision": "fae20b9551f1ab4d4be0f8b4d92c3853"
  },
  {
    "url": "en/placeholders/integrated.html",
    "revision": "8936de1fcadc11f215f58b3ee7ea5e5e"
  },
  {
    "url": "en/placeholders/placeholderapi.html",
    "revision": "9d096d5536d2b1954bdc46736d8b5435"
  },
  {
    "url": "en/setup.html",
    "revision": "f31a129ed2f8f62c7f738894ffc344ff"
  },
  {
    "url": "en/tutorials/detectiongate.html",
    "revision": "1376e2c25db84fcfa6bba3a57f6aa82c"
  },
  {
    "url": "en/tutorials/levelchecknpc.html",
    "revision": "eb2dd169a18e4e6127692252653f5c10"
  },
  {
    "url": "en/tutorials/teleporters.html",
    "revision": "b6534a7d489a1ad1a9b6e5abf330308f"
  },
  {
    "url": "en/tutorials/vendingmachine.html",
    "revision": "6a9b70f5a678f3218f7f0ba713047ac3"
  },
  {
    "url": "faq.html",
    "revision": "5bde84f4f1ab8b1104b02eec4867c89b"
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
    "revision": "b4a3b7d3bad3b2efe9027232d2c6d788"
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
    "revision": "6ca25acb97bf559979f7955e10dd8aee"
  },
  {
    "url": "placeholders/integrated.html",
    "revision": "fc28db2a8914e125072c625f13bdad67"
  },
  {
    "url": "placeholders/placeholderapi.html",
    "revision": "f18649da836a6867e4cb0693c345ec80"
  },
  {
    "url": "setup.html",
    "revision": "f7a631472ad5d1775eaf668f09366f53"
  },
  {
    "url": "tutorials/detectiongate.html",
    "revision": "a3621050e6c119ab761ceab4840c582d"
  },
  {
    "url": "tutorials/levelchecknpc.html",
    "revision": "343be5a8a29d634b9228850dfc0c4250"
  },
  {
    "url": "tutorials/teleporters.html",
    "revision": "8cbd23848c4e544938e2efa6738003ab"
  },
  {
    "url": "tutorials/vendingmachine.html",
    "revision": "4b066136cb3bfff61bc8138a4690d722"
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
