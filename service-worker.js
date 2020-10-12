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
    "revision": "117f77fd488270dbe442eb77ab6320c2"
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
    "revision": "063ed953881cf11e6206e34256bead97"
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
    "url": "assets/js/21.03b0a210.js",
    "revision": "debf6aa7e43f01b7334192f343cab154"
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
    "url": "assets/js/26.6321a49e.js",
    "revision": "32551ffcd44397af160b06636478acca"
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
    "url": "assets/js/33.d9da2e99.js",
    "revision": "a33370651a57ed57ee713cb5544695a3"
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
    "url": "assets/js/app.2dc9a5df.js",
    "revision": "803249509631bd375bfb47bad4ff2542"
  },
  {
    "url": "assets/js/vendors~docsearch.fdd8a010.js",
    "revision": "581a5b4c541e9463dc178f120623529d"
  },
  {
    "url": "bungeecord.html",
    "revision": "9aefc58126644f1dd32a5c99c5828ea0"
  },
  {
    "url": "commands/admin.html",
    "revision": "241e98de6380526e6c273f6b1930ea59"
  },
  {
    "url": "commands/banking.html",
    "revision": "c6526f801fba24226239e9cdc083c246"
  },
  {
    "url": "commands/player.html",
    "revision": "e437f99d7a027d67a1c40e9e8aed28b2"
  },
  {
    "url": "en/api.html",
    "revision": "d20b741c880f48b21b40e03f55cc76ea"
  },
  {
    "url": "en/bungeecord.html",
    "revision": "d2a4880cb40702213cb94aa0ee36eb2b"
  },
  {
    "url": "en/commands/admin.html",
    "revision": "cca5308f680b4be7a627758990c3fd65"
  },
  {
    "url": "en/commands/banking.html",
    "revision": "42086cde33af4a77860d3c9afe53c956"
  },
  {
    "url": "en/commands/player.html",
    "revision": "29fd967b41758ff49ded4813ea5430ca"
  },
  {
    "url": "en/faq.html",
    "revision": "9a9a308accde17ae6ca04fd048512dbf"
  },
  {
    "url": "en/index.html",
    "revision": "8bdacc0e4faf02a6d12d8c95a63e86ae"
  },
  {
    "url": "en/permissions.html",
    "revision": "cf668b4748e9b3bd63edd5011e7aac5c"
  },
  {
    "url": "en/placeholders/integrated.html",
    "revision": "22733770b9a66d278e74971caba16a24"
  },
  {
    "url": "en/placeholders/placeholderapi.html",
    "revision": "adbe2dc47b4d3dcad4288be209b6d031"
  },
  {
    "url": "en/setup.html",
    "revision": "ce7ba60c509b97063ae88400ae0c9541"
  },
  {
    "url": "en/tutorials/detectiongate.html",
    "revision": "d5cb8879655e19b9393f7384c288dcb9"
  },
  {
    "url": "en/tutorials/levelchecknpc.html",
    "revision": "f16a3928e628402c4a025b00d74aa65e"
  },
  {
    "url": "en/tutorials/teleporters.html",
    "revision": "7ec24536ee781a71d63ba945ba1b0d7e"
  },
  {
    "url": "en/tutorials/vendingmachine.html",
    "revision": "7247a090cf5a31aaf7db5eea3509c26a"
  },
  {
    "url": "faq.html",
    "revision": "eb4575d24196183596f72983459c99bb"
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
    "revision": "7135b88de45f5b5a2470763275695243"
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
    "revision": "6955a719f5071f1389b8be0eaec85fec"
  },
  {
    "url": "placeholders/integrated.html",
    "revision": "d818753c6b2c71f66c9a1fa979e0149e"
  },
  {
    "url": "placeholders/placeholderapi.html",
    "revision": "4c04439d0ab00badcc6fcaf65cac3ac0"
  },
  {
    "url": "setup.html",
    "revision": "ae27234ece04a033708c2316d43fa40c"
  },
  {
    "url": "tutorials/detectiongate.html",
    "revision": "0884b0bb72c67b04e058ad0ac40c28e5"
  },
  {
    "url": "tutorials/levelchecknpc.html",
    "revision": "c2f408d25b324bde4e4779313eddc35f"
  },
  {
    "url": "tutorials/teleporters.html",
    "revision": "97f9821ae5150b9e01602c2ff3d2d887"
  },
  {
    "url": "tutorials/vendingmachine.html",
    "revision": "7b938d35d768f4dba1272160911351fe"
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
