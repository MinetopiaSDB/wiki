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
    "revision": "69b7a6001aeea73db8169e6df2d3f328"
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
    "revision": "6f435e729f745b8cb35a101deefcf47d"
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
    "url": "assets/js/31.f6f5ca47.js",
    "revision": "5f48911ed95f99d8aa57f5527b5c04d6"
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
    "url": "assets/js/36.e68bc101.js",
    "revision": "76257231529b34f1d0ff524567091960"
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
    "url": "assets/js/app.0adfd7f6.js",
    "revision": "0cf02d95ba7156951ed03fe7d76059e9"
  },
  {
    "url": "assets/js/vendors~docsearch.fdd8a010.js",
    "revision": "581a5b4c541e9463dc178f120623529d"
  },
  {
    "url": "bungeecord.html",
    "revision": "dd45b7e04aac172e4c7f62b242ac4f14"
  },
  {
    "url": "commands/admin.html",
    "revision": "f3020fe94ec62aadd8b5fb1213c791a7"
  },
  {
    "url": "commands/banking.html",
    "revision": "95575d4d611f527aa6940bdc52114de8"
  },
  {
    "url": "commands/player.html",
    "revision": "9f00193724b0c78fafc5cca5caafa188"
  },
  {
    "url": "en/api.html",
    "revision": "e45bba216fe03c8980e2393fcb3c84de"
  },
  {
    "url": "en/bungeecord.html",
    "revision": "5f7872f414664b4e31de58d47665f446"
  },
  {
    "url": "en/commands/admin.html",
    "revision": "9cae0dc8117cc6ada61b916c30322cc0"
  },
  {
    "url": "en/commands/banking.html",
    "revision": "6035fa348d62ebe5fccd3a0e3fa04819"
  },
  {
    "url": "en/commands/player.html",
    "revision": "f79bfb964f15c135925f147d0ee56e99"
  },
  {
    "url": "en/faq.html",
    "revision": "04abe4aa6a57bf3e70f5db6d57951612"
  },
  {
    "url": "en/index.html",
    "revision": "2d226d5cd80e2afa48b6ea3596b2230d"
  },
  {
    "url": "en/permissions.html",
    "revision": "ef0d7c55690e8b28d07667c0c7ad26a7"
  },
  {
    "url": "en/placeholders/integrated.html",
    "revision": "959ba488da143fe75b5283c8e58db0c6"
  },
  {
    "url": "en/placeholders/placeholderapi.html",
    "revision": "6e7990871e73024204c4a716c888ab8c"
  },
  {
    "url": "en/setup.html",
    "revision": "0e02e95f346732b6b7eeaf0e7fa1324f"
  },
  {
    "url": "en/tutorials/detectiongate.html",
    "revision": "4dc1673449bdcdf3664fb06f528ccee0"
  },
  {
    "url": "en/tutorials/levelchecknpc.html",
    "revision": "6468e36710e52bda91fd458028defdb5"
  },
  {
    "url": "en/tutorials/teleporters.html",
    "revision": "887b37aad28050f2075c99a6d667c4b8"
  },
  {
    "url": "en/tutorials/vendingmachine.html",
    "revision": "f61da0c19c62b0cdea83e350d5257939"
  },
  {
    "url": "faq.html",
    "revision": "10cbdbd51ffaeba21b049fb3badec1ea"
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
    "revision": "8ed7fe61f285eee2ee666786d5e089d0"
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
    "revision": "cce85d663370d56ecf457256925e1d6e"
  },
  {
    "url": "placeholders/integrated.html",
    "revision": "3506566939d71ad1a4d4c1ed8b857db3"
  },
  {
    "url": "placeholders/placeholderapi.html",
    "revision": "79b247605e3445fe32d8a6326a21b8d0"
  },
  {
    "url": "setup.html",
    "revision": "ace6da9122e289c577aa20d52abbd5ca"
  },
  {
    "url": "tutorials/detectiongate.html",
    "revision": "834b0fa6e7d7866d634eed6e31e9392f"
  },
  {
    "url": "tutorials/levelchecknpc.html",
    "revision": "bfe33ae2e4c94539b4765f46ae3ea3cd"
  },
  {
    "url": "tutorials/teleporters.html",
    "revision": "6cc9bc9ee54bf9062b32846bd8ff48cc"
  },
  {
    "url": "tutorials/vendingmachine.html",
    "revision": "5550e5b8cc8bfa7e70d64b250586bdfb"
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
