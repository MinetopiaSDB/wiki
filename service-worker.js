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
    "revision": "dd01c0869cfa921fcadc749706f1ca79"
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
    "url": "apple-touch-icon.png",
    "revision": "5d47fcf7009db7bcbd06ae7bff46863a"
  },
  {
    "url": "assets/css/0.styles.946e56e7.css",
    "revision": "062f6938c1656c75944b05137c08d847"
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
    "url": "assets/js/10.5bfac960.js",
    "revision": "a87a597005f9478ba7d1588fd0883034"
  },
  {
    "url": "assets/js/11.11150522.js",
    "revision": "ca844b51344daa5b43657af5effc9ee3"
  },
  {
    "url": "assets/js/12.367a4711.js",
    "revision": "62578afd62bc28c3b470a1c203655798"
  },
  {
    "url": "assets/js/13.7e9bdd5c.js",
    "revision": "ba11e41d3c876fe6a5e8ca2e87979a5b"
  },
  {
    "url": "assets/js/14.545a6632.js",
    "revision": "724f2cb5fc0b50b041fbe62c7efde31d"
  },
  {
    "url": "assets/js/15.e8615707.js",
    "revision": "107f5d1b6bbc954a65f8f61641a70d19"
  },
  {
    "url": "assets/js/16.0ded26de.js",
    "revision": "65318d57842618d74f404c20e27d2fef"
  },
  {
    "url": "assets/js/17.4076c83f.js",
    "revision": "95b0d75da782c935b048c905dda8be06"
  },
  {
    "url": "assets/js/18.b474a3a7.js",
    "revision": "a7dacae94a9516970a6440212a254422"
  },
  {
    "url": "assets/js/19.2ffac2ea.js",
    "revision": "a6cd5d890fa37b04c3e205d6d415052d"
  },
  {
    "url": "assets/js/2.68dffde5.js",
    "revision": "199074b043830de92c0a603f71af1dd8"
  },
  {
    "url": "assets/js/20.69b7d073.js",
    "revision": "56171d5d8550213c2fee5f6d09cd2b83"
  },
  {
    "url": "assets/js/21.2f53c848.js",
    "revision": "4de8bf8c13a0b8a095f4f6437ff78200"
  },
  {
    "url": "assets/js/22.6d13f21a.js",
    "revision": "011c613af349d797e5454d43f403d84c"
  },
  {
    "url": "assets/js/23.38f34c90.js",
    "revision": "6d1e3257a4a6860953df092de16b0191"
  },
  {
    "url": "assets/js/24.248c92f5.js",
    "revision": "b8fe87de627893fa06bd307cd1424b9f"
  },
  {
    "url": "assets/js/25.b38e3b6a.js",
    "revision": "52050234f494cb3dec48f1ca708fea1c"
  },
  {
    "url": "assets/js/26.5d64eeca.js",
    "revision": "94808873b0dbd17c7ad8badeb4db95b6"
  },
  {
    "url": "assets/js/27.691f33c2.js",
    "revision": "aa274e8ade3c44e7d6396936c871b113"
  },
  {
    "url": "assets/js/28.d923f062.js",
    "revision": "c5557e23d6e5a9f8d7502bc82a65e44c"
  },
  {
    "url": "assets/js/29.bdf618d0.js",
    "revision": "b0cffbe3c39c01cbfeb594b79db5641d"
  },
  {
    "url": "assets/js/3.d085a529.js",
    "revision": "91a8cbe25a35c80c1f63f844bb99e97c"
  },
  {
    "url": "assets/js/4.d0739e27.js",
    "revision": "9e46079212ce4e6e0cb75a31a2ec4bc2"
  },
  {
    "url": "assets/js/5.86368e16.js",
    "revision": "6b27d1ee601e122398c5655b41a63835"
  },
  {
    "url": "assets/js/6.330e0495.js",
    "revision": "1660b7c61f9af4294068eb945e1c2ef8"
  },
  {
    "url": "assets/js/7.fab5ac3e.js",
    "revision": "bc6d6cfa1a4cf5d2a7503fc8d52d39fd"
  },
  {
    "url": "assets/js/8.c3072d71.js",
    "revision": "1d9ec1a9dcde4bad6b465bbc7a25d24b"
  },
  {
    "url": "assets/js/9.b76844dd.js",
    "revision": "905a0efc2b50d080c2245e0393b268dc"
  },
  {
    "url": "assets/js/app.e1de9bf9.js",
    "revision": "6c62606b933d50211ee572f67b23e937"
  },
  {
    "url": "bungeecord.html",
    "revision": "d0bc46f417ddb2e0675a3cc2755f9973"
  },
  {
    "url": "commands/admin.html",
    "revision": "1fe2c52fe055210b6ac2211d63f611ee"
  },
  {
    "url": "commands/banking.html",
    "revision": "8ff64f29473cb58cb3b6f871f776bc6b"
  },
  {
    "url": "commands/player.html",
    "revision": "1caf9be223cc7403a3b485d9816a7bab"
  },
  {
    "url": "en/bungeecord.html",
    "revision": "b00ab22c4d8885fa3c80193da1017316"
  },
  {
    "url": "en/commands/admin.html",
    "revision": "59578ffafde568cbda30a4be3408b0f6"
  },
  {
    "url": "en/commands/banking.html",
    "revision": "80a439d8c3517306711623f6d93757a1"
  },
  {
    "url": "en/commands/player.html",
    "revision": "529bbfad0d60179c5816deb2cc680367"
  },
  {
    "url": "en/faq.html",
    "revision": "ec20023889513092c0a26871137ea064"
  },
  {
    "url": "en/index.html",
    "revision": "45ae4eb0c41e913ef53a5d5a9fa0a7d6"
  },
  {
    "url": "en/permissions.html",
    "revision": "875148059466521efdd1d439da190db0"
  },
  {
    "url": "en/placeholders/integrated.html",
    "revision": "788e004d1387c1d6c4734023500a4091"
  },
  {
    "url": "en/placeholders/placeholderapi.html",
    "revision": "c0bacfc9732faaeee55407995529e257"
  },
  {
    "url": "en/setup.html",
    "revision": "53893952d3bfa08945704e71a42b705c"
  },
  {
    "url": "en/tutorials/detectiongate.html",
    "revision": "42a95a71b1e9d29ccd5506b7c53bd90d"
  },
  {
    "url": "en/tutorials/levelchecknpc.html",
    "revision": "09abfa4fe10d52800b9b641694a5a172"
  },
  {
    "url": "faq.html",
    "revision": "c7dc4bed80d4b6b61814625ac1043b58"
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
    "revision": "c92eaf0b5e6093890a199093015e0452"
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
    "revision": "f45283ff02e9dc3428eba33f91df6290"
  },
  {
    "url": "placeholders/integrated.html",
    "revision": "ed149a857111fc4a95fa82e915e0aebd"
  },
  {
    "url": "placeholders/placeholderapi.html",
    "revision": "b5ed76e37dbb8a5c8dd6605fc70b3474"
  },
  {
    "url": "setup.html",
    "revision": "6705e480ff3a54de1b00d8fa280fdb97"
  },
  {
    "url": "tutorials/detectiongate.html",
    "revision": "09346e05d5c8976ddc10f2e5b020ee88"
  },
  {
    "url": "tutorials/levelchecknpc.html",
    "revision": "c093050ca358575e49734c7fb0735489"
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
