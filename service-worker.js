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
    "revision": "f610ec07d3f08451086e3007abf785fc"
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
    "revision": "7370f87f60c0a3c16763529c6ebb1b71"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "5d47fcf7009db7bcbd06ae7bff46863a"
  },
  {
    "url": "assets/css/0.styles.d60dba89.css",
    "revision": "40d062026db49b0e3d0ed3193b044e64"
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
    "url": "assets/js/17.99fe28cc.js",
    "revision": "87f14771881b82807740ee815b7259ff"
  },
  {
    "url": "assets/js/18.720fc4e8.js",
    "revision": "ab46297529a2c2a6ddb0c5b518172899"
  },
  {
    "url": "assets/js/19.e8cf8f3a.js",
    "revision": "3c66b16c85ec6d79567fba1dee6eaecc"
  },
  {
    "url": "assets/js/20.4f8d85a8.js",
    "revision": "d2ea86fce39594d6c83bb004937bb884"
  },
  {
    "url": "assets/js/21.ea16b747.js",
    "revision": "5db8025f6d708ce02b4d309c23330003"
  },
  {
    "url": "assets/js/22.15724109.js",
    "revision": "42ce55051a550796b32dcd55b867d77b"
  },
  {
    "url": "assets/js/23.210b6868.js",
    "revision": "6d28f5607572045f25de4466ab8ecaf9"
  },
  {
    "url": "assets/js/24.765dbd80.js",
    "revision": "8e296ef3298dcf9349ec6dde6086efe0"
  },
  {
    "url": "assets/js/25.ab360e15.js",
    "revision": "c17f3a0ec450f566385b447c6f1edc00"
  },
  {
    "url": "assets/js/26.f5c2e048.js",
    "revision": "77a579ffcbecb3e17ce6c9298fbec038"
  },
  {
    "url": "assets/js/27.d6397150.js",
    "revision": "a9cd2038433891fe6ccf93a20e2af67e"
  },
  {
    "url": "assets/js/28.1d64f3c0.js",
    "revision": "c7d8265b81eb983e5e94a2e6139ff7b1"
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
    "url": "assets/js/30.c1beaa86.js",
    "revision": "22dd8fa5096b7e523d8f59d21f773bfc"
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
    "url": "assets/js/33.6f1d073f.js",
    "revision": "cbd64694c1530586ac801031831c6479"
  },
  {
    "url": "assets/js/34.2374c216.js",
    "revision": "1add8833416cd9164abea51ad131c3f3"
  },
  {
    "url": "assets/js/35.8cce0755.js",
    "revision": "fb447b15921e165bc2b6718aea3c1038"
  },
  {
    "url": "assets/js/36.4a98372c.js",
    "revision": "3098e4f685d869d2e6b92a7f7dc30b0a"
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
    "url": "assets/js/6.569de7bc.js",
    "revision": "347ad52b1da9b73a8a92000e3a58f589"
  },
  {
    "url": "assets/js/7.f5b3dd74.js",
    "revision": "83473b0ed23e2e4714173ca7bc5b5508"
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
    "url": "assets/js/app.da07edbb.js",
    "revision": "08cf286d22e9aaabfe82f9d595864d84"
  },
  {
    "url": "assets/js/vendors~docsearch.fdd8a010.js",
    "revision": "581a5b4c541e9463dc178f120623529d"
  },
  {
    "url": "bungeecord.html",
    "revision": "5f026e6bbb2d397f1206ccefef97fda4"
  },
  {
    "url": "commands/admin.html",
    "revision": "b7c3239adf08e1400ac2e689300b7385"
  },
  {
    "url": "commands/banking.html",
    "revision": "2f163a8e39470cbf6c495e68986be840"
  },
  {
    "url": "commands/player.html",
    "revision": "c7ac10b1a8648ef50241ef2029b96605"
  },
  {
    "url": "en/api.html",
    "revision": "ef78d4aa981556f48091f74c72f3287e"
  },
  {
    "url": "en/bungeecord.html",
    "revision": "4415ff20a9f0be58987453537a4de1bc"
  },
  {
    "url": "en/commands/admin.html",
    "revision": "c5b8e82966f02d14462eace7d43db7bf"
  },
  {
    "url": "en/commands/banking.html",
    "revision": "872822b97b3795915e881a01ed960f5e"
  },
  {
    "url": "en/commands/player.html",
    "revision": "08a1d245928c5f9aa6f8e1a910dbfa02"
  },
  {
    "url": "en/faq.html",
    "revision": "3ebe26c8452ef0a367f7ba1c6169f8ec"
  },
  {
    "url": "en/index.html",
    "revision": "115ddba78e306f919967b5d0da63fa82"
  },
  {
    "url": "en/permissions.html",
    "revision": "00032c30dc7ca5382911170e4f1bea80"
  },
  {
    "url": "en/placeholders/integrated.html",
    "revision": "10b10637f2858fe7059c8b0f57c5856c"
  },
  {
    "url": "en/placeholders/placeholderapi.html",
    "revision": "73aca7e0f3b0cdd3967513a1123cba6e"
  },
  {
    "url": "en/setup.html",
    "revision": "4e3fc5d0af77c56eac21d89a821a0bb1"
  },
  {
    "url": "en/tutorials/detectiongate.html",
    "revision": "4c14c99766c43ed607f07c22e6f75c93"
  },
  {
    "url": "en/tutorials/levelchecknpc.html",
    "revision": "e90a384c32b8ad949b815b79042537be"
  },
  {
    "url": "en/tutorials/teleporters.html",
    "revision": "4358cffed378a86a68144ca7ba43519d"
  },
  {
    "url": "en/tutorials/vendingmachine.html",
    "revision": "83d5aca7d7ba248924c3aad7d43afa18"
  },
  {
    "url": "faq.html",
    "revision": "8f065dd2554760ce5af50c9e20699e3e"
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
    "revision": "58c1fc3a6e9a4de339c4a7cc96fa6f87"
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
    "revision": "b0d980181918ff060c661de84e4a7cf7"
  },
  {
    "url": "placeholders/integrated.html",
    "revision": "082b482c6259a150a6299e4dd12b570f"
  },
  {
    "url": "placeholders/placeholderapi.html",
    "revision": "0da9ae5a72be74e0d896124b44d7945a"
  },
  {
    "url": "setup.html",
    "revision": "144a030e3bf15f51ea33119ce9bde06e"
  },
  {
    "url": "tutorials/detectiongate.html",
    "revision": "593861e0db02cfeca178ee0d7159b5c8"
  },
  {
    "url": "tutorials/levelchecknpc.html",
    "revision": "488971c7cd92a66f345e0e7e722a4563"
  },
  {
    "url": "tutorials/teleporters.html",
    "revision": "4a85206cc511a7f71d9a21823839a8f3"
  },
  {
    "url": "tutorials/vendingmachine.html",
    "revision": "0f7f1fece597077686fc2a47d3c56de9"
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
