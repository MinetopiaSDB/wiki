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
    "revision": "bba18ccba407461555d0744cbdf57b80"
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
    "revision": "6396535774f08741dcb99f4a32cdbd34"
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
    "url": "assets/js/18.b8228b8c.js",
    "revision": "55ac7c6a33c341907b4504c4a06ece09"
  },
  {
    "url": "assets/js/19.e8cf8f3a.js",
    "revision": "3c66b16c85ec6d79567fba1dee6eaecc"
  },
  {
    "url": "assets/js/20.5246c66d.js",
    "revision": "ff14cf3fec8c6f3752dde3802cdcc9b4"
  },
  {
    "url": "assets/js/21.1da1eb6b.js",
    "revision": "0ac597e800233562eac6e79aa49e0f03"
  },
  {
    "url": "assets/js/22.4db62dac.js",
    "revision": "4f17359a36c37ca747e00dd29085f73d"
  },
  {
    "url": "assets/js/23.065e3541.js",
    "revision": "ec28dc9096f26e34e4fb7b6a9590ba4c"
  },
  {
    "url": "assets/js/24.765dbd80.js",
    "revision": "8e296ef3298dcf9349ec6dde6086efe0"
  },
  {
    "url": "assets/js/25.41184650.js",
    "revision": "d4a7bf20a313fd87b720f755580e968f"
  },
  {
    "url": "assets/js/26.b8a7dbc6.js",
    "revision": "9bfdc1e86f3462204df1fbf5aba0ac65"
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
    "url": "assets/js/29.2502a0c8.js",
    "revision": "6226d7f23229ef3d0fe91290343e8ed8"
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
    "url": "assets/js/34.445a6335.js",
    "revision": "b70711fafb59af593fc014c5a71a3a97"
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
    "url": "assets/js/app.05aa8f32.js",
    "revision": "acedab3817981185ae2b0076d198ee43"
  },
  {
    "url": "assets/js/vendors~docsearch.fdd8a010.js",
    "revision": "581a5b4c541e9463dc178f120623529d"
  },
  {
    "url": "bungeecord.html",
    "revision": "a259a9705e89214242dc4a50e5eb49b2"
  },
  {
    "url": "commands/admin.html",
    "revision": "e89eb85e7557ee8f9f05bdf3f81f12dd"
  },
  {
    "url": "commands/banking.html",
    "revision": "6845f49134bc7db7b02ebb2e2165c50f"
  },
  {
    "url": "commands/player.html",
    "revision": "0ba5c5fc190167f9f2d71ac03052034a"
  },
  {
    "url": "en/api.html",
    "revision": "39bfe89ecd591e73ba4939f6a4846415"
  },
  {
    "url": "en/bungeecord.html",
    "revision": "28775e37169628991f3156b6e925e501"
  },
  {
    "url": "en/commands/admin.html",
    "revision": "e7c17e4cfb2a937538fb3150c60fc217"
  },
  {
    "url": "en/commands/banking.html",
    "revision": "7dda2162812eec50850bfd1bc5a32eab"
  },
  {
    "url": "en/commands/player.html",
    "revision": "714db2f3dd9b4fcd47db989ec84f7217"
  },
  {
    "url": "en/faq.html",
    "revision": "7c12db667d0d4c76669675aa278ecfba"
  },
  {
    "url": "en/index.html",
    "revision": "e31c21feaeacf0e4ca0bd0ff710ef86c"
  },
  {
    "url": "en/permissions.html",
    "revision": "69fcfdfe79ad555cd355203d8ff40098"
  },
  {
    "url": "en/placeholders/integrated.html",
    "revision": "48d815bb2ff9bb35652994b9d366223d"
  },
  {
    "url": "en/placeholders/placeholderapi.html",
    "revision": "780cb770e82dc6b94ab1581f6e978c35"
  },
  {
    "url": "en/setup.html",
    "revision": "04a99484b31749755574bdc7eb44d1cb"
  },
  {
    "url": "en/tutorials/detectiongate.html",
    "revision": "85adbddcfa3a3a03f73ddf7c8ba7a621"
  },
  {
    "url": "en/tutorials/levelchecknpc.html",
    "revision": "766fdf015e8cded2e45ada50cf1dfc55"
  },
  {
    "url": "en/tutorials/teleporters.html",
    "revision": "908c2c934d444f96315cb3a9eab76ab7"
  },
  {
    "url": "en/tutorials/vendingmachine.html",
    "revision": "b02e8bec957d2071f04de0bb302c795a"
  },
  {
    "url": "faq.html",
    "revision": "11e79f096dcb0c3d4337b2c02e27794f"
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
    "revision": "efa68b8551c49fc2b0a4d0e4c6fb9948"
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
    "revision": "9ff22f936f2c07cfa82a6be741b23466"
  },
  {
    "url": "placeholders/integrated.html",
    "revision": "1c470d79e037314569130af5a63c3a24"
  },
  {
    "url": "placeholders/placeholderapi.html",
    "revision": "2e15904e3518c36937b1583d570b1fec"
  },
  {
    "url": "setup.html",
    "revision": "c908d524da1487ec62921016dc3b664b"
  },
  {
    "url": "tutorials/detectiongate.html",
    "revision": "26a841a64c2e1535a60ea9a06c42fcc8"
  },
  {
    "url": "tutorials/levelchecknpc.html",
    "revision": "7d6a11ccb667f50fdad6317464ba10b4"
  },
  {
    "url": "tutorials/teleporters.html",
    "revision": "0b014552f25643abcf9f5a466f2f6867"
  },
  {
    "url": "tutorials/vendingmachine.html",
    "revision": "d68414f16bb7b1ca6e7e848c0a8aced8"
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
