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
    "revision": "a21a883124b57a95b369cbe3f55dba88"
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
    "revision": "267e3ce633450539df108621ab1bb307"
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
    "url": "assets/js/17.c5b31d3c.js",
    "revision": "2d616265ab33e0c439789e94d8adf0e1"
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
    "url": "assets/js/app.3cd4178a.js",
    "revision": "9516cd04fff8c9e1af664d87eb3aad60"
  },
  {
    "url": "assets/js/vendors~docsearch.70f6d22b.js",
    "revision": "581a5b4c541e9463dc178f120623529d"
  },
  {
    "url": "bungeecord.html",
    "revision": "230e4c84b1eae52cbdc46f4744e9bc05"
  },
  {
    "url": "commands/admin.html",
    "revision": "ccabef61aa8de2beeef2945c707836d5"
  },
  {
    "url": "commands/banking.html",
    "revision": "1d3c25231c02c98b828d03d1ba0e551e"
  },
  {
    "url": "commands/player.html",
    "revision": "14b44b7b6c1137e6170b04a636a129eb"
  },
  {
    "url": "en/api.html",
    "revision": "4e5c78923e2a713c06c448b4e72c9c91"
  },
  {
    "url": "en/bungeecord.html",
    "revision": "ce7755fa8436a013bd8014771bc755a2"
  },
  {
    "url": "en/commands/admin.html",
    "revision": "d49bd382668eefca5d9081292baa2ef1"
  },
  {
    "url": "en/commands/banking.html",
    "revision": "9891f36075ddef76f1c7bce4bf9d49cf"
  },
  {
    "url": "en/commands/player.html",
    "revision": "8531ebd72812b5307bbf1dcbb3115760"
  },
  {
    "url": "en/faq.html",
    "revision": "127048921f6f52328df42d922b0a8328"
  },
  {
    "url": "en/index.html",
    "revision": "70d249aa1582a805db21050fffa9a8fc"
  },
  {
    "url": "en/permissions.html",
    "revision": "ba3fe3cc0c5972324013c8ae8ecf89c2"
  },
  {
    "url": "en/placeholders/integrated.html",
    "revision": "c58226753f9868a028d259b3a82fd11f"
  },
  {
    "url": "en/placeholders/placeholderapi.html",
    "revision": "2bf827ee115e4bed6ab3fa80ccf13788"
  },
  {
    "url": "en/setup.html",
    "revision": "becd8cfc67b4d99509436a19a8381cd3"
  },
  {
    "url": "en/tutorials/detectiongate.html",
    "revision": "c67623e11b1846d26618b31bc48ae9ca"
  },
  {
    "url": "en/tutorials/levelchecknpc.html",
    "revision": "a819c7f6db2d6270c84f0a829b9de935"
  },
  {
    "url": "en/tutorials/teleporters.html",
    "revision": "def94d51601f23945b9ddab77803ede1"
  },
  {
    "url": "en/tutorials/vendingmachine.html",
    "revision": "892333e3219a901f35177b722ee842d5"
  },
  {
    "url": "faq.html",
    "revision": "8fe16146fc15237ab4e2fc52f19a3f2b"
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
    "revision": "a85570dec351458795eb4565fb7253e6"
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
    "revision": "53a60df5efe20ad5b98a0f4550b5938c"
  },
  {
    "url": "placeholders/integrated.html",
    "revision": "21224000c705f2906af6e6eaf203a5a4"
  },
  {
    "url": "placeholders/placeholderapi.html",
    "revision": "2a2eb658d5839927cf00fc281ce8a6bc"
  },
  {
    "url": "setup.html",
    "revision": "037bfef5a64b9242b78cba08050116bf"
  },
  {
    "url": "tutorials/detectiongate.html",
    "revision": "b924894d32593f1904d006f0e347207d"
  },
  {
    "url": "tutorials/levelchecknpc.html",
    "revision": "90ffdfc25d2cd0a0bad5beba2796e2de"
  },
  {
    "url": "tutorials/teleporters.html",
    "revision": "581450b4896e24c6a3d6c3710add4f9f"
  },
  {
    "url": "tutorials/vendingmachine.html",
    "revision": "5bd87279233404eafb94094ccb9ac40f"
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
