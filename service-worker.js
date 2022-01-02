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
    "revision": "821f67b5866885661f896380305b629e"
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
    "revision": "706184a8fdcb6e9dfbeb34943394fc20"
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
    "url": "assets/js/11.cf980ca5.js",
    "revision": "1ff6613082a0cbc25a5b0bbb4cd9278c"
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
    "url": "assets/js/14.a8f28058.js",
    "revision": "dee6f85e257a423fe1f34cb9226fe12a"
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
    "url": "assets/js/20.d4055522.js",
    "revision": "db1733b97e17b9caec19b395bcdcf99c"
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
    "url": "assets/js/6.f387d22e.js",
    "revision": "b6c5b6c054fda228888ee0d98a60315e"
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
    "url": "assets/js/app.b2e071b8.js",
    "revision": "8918ba0d5ee307ac7d73017096a615d8"
  },
  {
    "url": "assets/js/vendors~docsearch.fdd8a010.js",
    "revision": "581a5b4c541e9463dc178f120623529d"
  },
  {
    "url": "bungeecord.html",
    "revision": "24c1e38dfc4cff9cdfcfb6f5d16704a3"
  },
  {
    "url": "commands/admin.html",
    "revision": "1bfca277f1a6db5f139c1e6ede333217"
  },
  {
    "url": "commands/banking.html",
    "revision": "4598ae853089118dd535672df2837301"
  },
  {
    "url": "commands/player.html",
    "revision": "dae97ecd9b87b2879fb577b16ce4cbee"
  },
  {
    "url": "en/api.html",
    "revision": "122d59c5b75250991c9c2d3c13be9f0d"
  },
  {
    "url": "en/bungeecord.html",
    "revision": "e773197774ac8dccabe317a201776eca"
  },
  {
    "url": "en/commands/admin.html",
    "revision": "7f4fe71728a951352ba648484186e239"
  },
  {
    "url": "en/commands/banking.html",
    "revision": "2909a68ba1f755b2fb239a8f39b7aa64"
  },
  {
    "url": "en/commands/player.html",
    "revision": "ea3879cb72d98f3b8a9986bce8f7ce18"
  },
  {
    "url": "en/faq.html",
    "revision": "c213f326783db351f5a546a41cb7036b"
  },
  {
    "url": "en/index.html",
    "revision": "5c8ee655c31c69c95a495cb31338ff1b"
  },
  {
    "url": "en/permissions.html",
    "revision": "edcd224fce6467104bb3ddfb3ddab028"
  },
  {
    "url": "en/placeholders/integrated.html",
    "revision": "1c13d655cd9296fc35289430f51cca7b"
  },
  {
    "url": "en/placeholders/placeholderapi.html",
    "revision": "ff6de8b2632578d38e27cd8d45731189"
  },
  {
    "url": "en/setup.html",
    "revision": "913f39d1f8979b4e108efee1ab31f7c8"
  },
  {
    "url": "en/tutorials/detectiongate.html",
    "revision": "df1e721e20125f17045110ac19dab2d2"
  },
  {
    "url": "en/tutorials/levelchecknpc.html",
    "revision": "7fe21f73021516df60001b1916100f47"
  },
  {
    "url": "en/tutorials/teleporters.html",
    "revision": "36d76881199f9d96d9ee411bbd11152a"
  },
  {
    "url": "en/tutorials/vendingmachine.html",
    "revision": "27a46356348232f591ad2d19598cd3bb"
  },
  {
    "url": "faq.html",
    "revision": "d1a54b0a55b1204db2055b2edb32d78a"
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
    "revision": "c1bb082256e0ffc08a62255cd0f345f9"
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
    "revision": "16da750fae10eb893dfa2fb28385621d"
  },
  {
    "url": "placeholders/integrated.html",
    "revision": "afb264f8da00b0495af48c74f334773d"
  },
  {
    "url": "placeholders/placeholderapi.html",
    "revision": "da4666d9fad118fa2601a1ad9520af6c"
  },
  {
    "url": "setup.html",
    "revision": "11b2248773be25a6aeab52270210a87a"
  },
  {
    "url": "tutorials/detectiongate.html",
    "revision": "cca48f67e04c2cf5a52d9b3001bc5110"
  },
  {
    "url": "tutorials/levelchecknpc.html",
    "revision": "bde09d35c6c803a814bd0b31c6e0ed65"
  },
  {
    "url": "tutorials/teleporters.html",
    "revision": "7562872a5cbef7e130c75cc7c14e517c"
  },
  {
    "url": "tutorials/vendingmachine.html",
    "revision": "1cac427b042b7b0fcd5ba8b60c33189d"
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
