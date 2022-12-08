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
    "revision": "ef50a446c4726e9cc53e9d7bf7eea655"
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
    "revision": "2d705e0cf895131e6aa0293c315191b6"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "5d47fcf7009db7bcbd06ae7bff46863a"
  },
  {
    "url": "assets/css/0.styles.6cec5327.css",
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
    "url": "assets/js/10.0a157e66.js",
    "revision": "879ca278cd9d9469ba4dd89ed986eb23"
  },
  {
    "url": "assets/js/11.dde62c54.js",
    "revision": "44a84c2b011c43d7d7f8cea66ecb2d2d"
  },
  {
    "url": "assets/js/12.6eb1721d.js",
    "revision": "4308ee6e2780d1ec6eff68bbb49bb9d7"
  },
  {
    "url": "assets/js/13.38f1c290.js",
    "revision": "ba7020360347866848f7b97ca2d49c33"
  },
  {
    "url": "assets/js/14.df11506c.js",
    "revision": "812f343135a4b1cbc191d4b2ece37fc5"
  },
  {
    "url": "assets/js/15.797cb300.js",
    "revision": "6a2c5eee2243540fd0ff5e49d240c4d5"
  },
  {
    "url": "assets/js/16.244ec073.js",
    "revision": "fd01581d696491e39b6e911e5915733a"
  },
  {
    "url": "assets/js/17.c6b5f409.js",
    "revision": "b2600b07ab747648ca774859854383ba"
  },
  {
    "url": "assets/js/18.35e849ba.js",
    "revision": "a602c82ae908a6284c2a1bba23ad167f"
  },
  {
    "url": "assets/js/19.aad35bf0.js",
    "revision": "3c66b16c85ec6d79567fba1dee6eaecc"
  },
  {
    "url": "assets/js/20.74bc20a3.js",
    "revision": "05945b6ee9104aff93f1fd01c22574c5"
  },
  {
    "url": "assets/js/21.2879da48.js",
    "revision": "e2867dbeae58cb61209b865fb618c2a4"
  },
  {
    "url": "assets/js/22.21489962.js",
    "revision": "4f17359a36c37ca747e00dd29085f73d"
  },
  {
    "url": "assets/js/23.63b9c134.js",
    "revision": "d6dd595bb4b741ea0b997f522192a464"
  },
  {
    "url": "assets/js/24.89a58cdd.js",
    "revision": "8e296ef3298dcf9349ec6dde6086efe0"
  },
  {
    "url": "assets/js/25.917dc9b6.js",
    "revision": "b3f8e377a074e505fdeb5056d5efc314"
  },
  {
    "url": "assets/js/26.fc5b9469.js",
    "revision": "b49bda1d28acec669069790cfba70240"
  },
  {
    "url": "assets/js/27.cf60b9f2.js",
    "revision": "194fdf9bf6c188f03058b6762e1a2855"
  },
  {
    "url": "assets/js/28.dceb4698.js",
    "revision": "3c51dd2a0f067d87c1c34231cc86c7c4"
  },
  {
    "url": "assets/js/29.4aeb955f.js",
    "revision": "8bde11af42ce70775a44ee42366e614d"
  },
  {
    "url": "assets/js/3.8b43c58f.js",
    "revision": "a9a175b56a5479c7d176f2b96bb9cb66"
  },
  {
    "url": "assets/js/30.166bf1c3.js",
    "revision": "32730f287b37e33a201894460b9f89ae"
  },
  {
    "url": "assets/js/31.e5e7f5d9.js",
    "revision": "d738fe9ec854e3ff32b68b6fe473aaf6"
  },
  {
    "url": "assets/js/32.c20dcc8f.js",
    "revision": "a04b1dc78e941d4c1cef933144d01091"
  },
  {
    "url": "assets/js/33.4e517116.js",
    "revision": "d7815eb0243da4ca56ed8f3c060cef31"
  },
  {
    "url": "assets/js/34.849f9a2d.js",
    "revision": "1add8833416cd9164abea51ad131c3f3"
  },
  {
    "url": "assets/js/35.8875e5c3.js",
    "revision": "036b83d3c609fe995f833662120798a0"
  },
  {
    "url": "assets/js/36.80bece2f.js",
    "revision": "2b9a6c5250eb297901a25f3825509761"
  },
  {
    "url": "assets/js/37.163881b5.js",
    "revision": "1390eb3f7f0aeff392453dbc3ecfc26c"
  },
  {
    "url": "assets/js/4.431e3267.js",
    "revision": "5419b6c6db372f3a08dd1e3ccde6655b"
  },
  {
    "url": "assets/js/5.73e0b670.js",
    "revision": "88e646116ca9cfe4c97d64f9c2a18db6"
  },
  {
    "url": "assets/js/6.ba658aa3.js",
    "revision": "e1d90a2258dc114922c990d24217bebb"
  },
  {
    "url": "assets/js/7.8e403a73.js",
    "revision": "0361569220a08c4d8b440ffaaf1d719f"
  },
  {
    "url": "assets/js/8.de1794c2.js",
    "revision": "97356340e3f5d791bae3807f98e75282"
  },
  {
    "url": "assets/js/9.205421e5.js",
    "revision": "485f5aee6a7efb7f3547ef76c12865e8"
  },
  {
    "url": "assets/js/app.0f385538.js",
    "revision": "4dae512c5b0c4c9d79d2268247749370"
  },
  {
    "url": "assets/js/vendors~docsearch.70f6d22b.js",
    "revision": "581a5b4c541e9463dc178f120623529d"
  },
  {
    "url": "bungeecord.html",
    "revision": "a3ba894718663bcc6b94aa636e4860fa"
  },
  {
    "url": "commands/admin.html",
    "revision": "724fe74ea2de6bc6c104ef8f8bbfba94"
  },
  {
    "url": "commands/banking.html",
    "revision": "7b4dc825c2b6e3c2893f4425bd9613e2"
  },
  {
    "url": "commands/player.html",
    "revision": "5f04c4c146b2947a570b86e87ffa8051"
  },
  {
    "url": "en/api.html",
    "revision": "0b110de46a23d45f2ddf2bfbdaa61a6d"
  },
  {
    "url": "en/bungeecord.html",
    "revision": "f24ee3ec8d44ff3ada3e81bac073997b"
  },
  {
    "url": "en/commands/admin.html",
    "revision": "fb9859f6ead401f663b0ac955f109dd2"
  },
  {
    "url": "en/commands/banking.html",
    "revision": "fb35be2b1acabd83e5798887b9d40942"
  },
  {
    "url": "en/commands/player.html",
    "revision": "f4bce5aafcedaa0f17b878985a03b5ac"
  },
  {
    "url": "en/faq.html",
    "revision": "4ee4152ef544a8a16dc93b7968a5812c"
  },
  {
    "url": "en/index.html",
    "revision": "4324e8b2cd5b49440b43004ea01f3f00"
  },
  {
    "url": "en/permissions.html",
    "revision": "4fe5b9f978d73f5822e529885bcf264e"
  },
  {
    "url": "en/placeholders/integrated.html",
    "revision": "d3c61c2bfeea3e6c3165b37fd4969cdb"
  },
  {
    "url": "en/placeholders/placeholderapi.html",
    "revision": "18d7c7e223e9cd9ed54e5827730a3ebc"
  },
  {
    "url": "en/setup.html",
    "revision": "ce2453ffee4c3629e97bbcdd845f7746"
  },
  {
    "url": "en/tutorials/detectiongate.html",
    "revision": "4ddbd7babcbed0481db87ea9dd03ef2c"
  },
  {
    "url": "en/tutorials/levelchecknpc.html",
    "revision": "1245da453f07bbe5b5c7fd637f67e1f8"
  },
  {
    "url": "en/tutorials/teleporters.html",
    "revision": "0b09cfacbe39b2f88994db83b5e78803"
  },
  {
    "url": "en/tutorials/vendingmachine.html",
    "revision": "ba6d4fc95a32944501cd5f5acd5431e8"
  },
  {
    "url": "faq.html",
    "revision": "5e699eb4f2b2c8dfa20f668cab7fe452"
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
    "revision": "3fd9fe0616375e4241654d8ef3ceef24"
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
    "revision": "d97cdb7add7b14326a6e3d6a556d1f28"
  },
  {
    "url": "placeholders/integrated.html",
    "revision": "3c22625af589cb805dc94fd4aed1c045"
  },
  {
    "url": "placeholders/placeholderapi.html",
    "revision": "750469d34c877a4732d7fe32f91ee8a6"
  },
  {
    "url": "setup.html",
    "revision": "aa063c549e7febf862445e55e9bc1fde"
  },
  {
    "url": "tutorials/detectiongate.html",
    "revision": "b0acd05c1422c211b641b1ef2853cb45"
  },
  {
    "url": "tutorials/levelchecknpc.html",
    "revision": "29c46f3a39d5cc8a3dd773ef19b87868"
  },
  {
    "url": "tutorials/teleporters.html",
    "revision": "ad81f3bf0f55b6658df2fc206dbfbc6a"
  },
  {
    "url": "tutorials/vendingmachine.html",
    "revision": "592deff611eb47a491611ecfbec07956"
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
