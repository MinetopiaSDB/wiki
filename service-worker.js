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
    "revision": "86b7b62a2f87eb003d09f3963070463f"
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
    "revision": "a3b59968a087d9f4395e5e692747b48e"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "5d47fcf7009db7bcbd06ae7bff46863a"
  },
  {
    "url": "assets/css/0.styles.85ce0dc0.css",
    "revision": "a2054df694a5ca826a19c9619756e916"
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
    "url": "assets/js/10.5fb7ed8a.js",
    "revision": "ea4ac8ef7135234e381ff4c0843f3e58"
  },
  {
    "url": "assets/js/11.76c7c7ab.js",
    "revision": "16959c32a7cb0e41bc72ef25a3ba5e73"
  },
  {
    "url": "assets/js/12.b1ec1aa4.js",
    "revision": "830c205d65c986c1d7aeddb48b3a726c"
  },
  {
    "url": "assets/js/13.e52edb0a.js",
    "revision": "79e9e399b6d6b3d1f4145dd1a03c8072"
  },
  {
    "url": "assets/js/14.2d2c26f4.js",
    "revision": "0f076934307dabcc64206be981fa8b5a"
  },
  {
    "url": "assets/js/15.7bef7e8f.js",
    "revision": "567a7d7ac4a6bc985b8594b135b10c2e"
  },
  {
    "url": "assets/js/16.868fd65e.js",
    "revision": "1b2d595d36b32903479e2a65f6b50822"
  },
  {
    "url": "assets/js/17.d46675c5.js",
    "revision": "9fa74a1dc0f360d712269af3d1b4dcf2"
  },
  {
    "url": "assets/js/18.982d725f.js",
    "revision": "baa86994afc6adb4b5259f897e801ccd"
  },
  {
    "url": "assets/js/19.9a1de169.js",
    "revision": "5edf3c0da632c841d2f7054cc3d90aa0"
  },
  {
    "url": "assets/js/2.446c9011.js",
    "revision": "22e6605bbffc055d3792fc31c54ad87a"
  },
  {
    "url": "assets/js/20.a260a9fa.js",
    "revision": "b9dc391381f03e4d940cc6942197c74c"
  },
  {
    "url": "assets/js/21.1f8e8e03.js",
    "revision": "743146bec25ea94b20932e84d7ccd690"
  },
  {
    "url": "assets/js/22.1e0a274d.js",
    "revision": "509d5182fcdb61737c3edd347aa53c37"
  },
  {
    "url": "assets/js/23.8a8efe44.js",
    "revision": "c845754a87c14e912d165b242b5f1724"
  },
  {
    "url": "assets/js/24.a75e48b8.js",
    "revision": "fee3a2c5c28fa15962f103b97b4d0713"
  },
  {
    "url": "assets/js/25.7e34d192.js",
    "revision": "6084d01226d31810bf9eb1e5bd2f67be"
  },
  {
    "url": "assets/js/26.a92f8e00.js",
    "revision": "f58ee64e4b29246730cd32ab4b0a70c4"
  },
  {
    "url": "assets/js/27.f46e6472.js",
    "revision": "a9f70ddf8d07f08d0a2ba79d2a4d00d7"
  },
  {
    "url": "assets/js/28.23210516.js",
    "revision": "7ef2a5dcc8b2bf091e646676da5f1d51"
  },
  {
    "url": "assets/js/29.53bbe522.js",
    "revision": "fa3df53cb1a42b7e4a2a109347fd2996"
  },
  {
    "url": "assets/js/3.202c6226.js",
    "revision": "0d24b62a36566d9a418baa3b7ff104dd"
  },
  {
    "url": "assets/js/30.6301705c.js",
    "revision": "57edbfb94333743c6f8491319cbaf50e"
  },
  {
    "url": "assets/js/31.d0d1d3bb.js",
    "revision": "6623448b841a50a668d65bdfac43759a"
  },
  {
    "url": "assets/js/32.3e853c91.js",
    "revision": "40793ffbfaf1764ffca3aa83cfdd4840"
  },
  {
    "url": "assets/js/33.9fb39dc8.js",
    "revision": "472a5ee36f4b7f0e8b7a42cb9645dcb9"
  },
  {
    "url": "assets/js/34.e6cea82b.js",
    "revision": "c746ee69dc82b8bbc2518a8d948b26f3"
  },
  {
    "url": "assets/js/35.1295a082.js",
    "revision": "49e5ef7fdd35443574ea0720b23b01f3"
  },
  {
    "url": "assets/js/36.c3c18db3.js",
    "revision": "51c6e85ee98ec37df541c3bb5326b61d"
  },
  {
    "url": "assets/js/4.90b98835.js",
    "revision": "32b762753969ce5ee7b385082685cbbe"
  },
  {
    "url": "assets/js/5.35468b4d.js",
    "revision": "4c1599d792919269cb5a133be274873f"
  },
  {
    "url": "assets/js/6.13a57ca2.js",
    "revision": "48d9cca980c78b18e5ed8acaa397b00b"
  },
  {
    "url": "assets/js/7.129da5b5.js",
    "revision": "d7bba448567ed66d67b6d706a01d7bca"
  },
  {
    "url": "assets/js/8.d5fae6c6.js",
    "revision": "ce67846026e380430917982b011405f1"
  },
  {
    "url": "assets/js/9.baa54f7a.js",
    "revision": "9e9a5427c9c24249e37eb7504d8908e3"
  },
  {
    "url": "assets/js/app.c5575e2b.js",
    "revision": "92ebd1ca82f803452b380d4a41b38974"
  },
  {
    "url": "bungeecord.html",
    "revision": "6d73e9e6cb2e48be17f652209b34a64f"
  },
  {
    "url": "commands/admin.html",
    "revision": "4f7d49bce76761d1b8d36a61566b4f25"
  },
  {
    "url": "commands/banking.html",
    "revision": "444a2f6c45aad23d58a3afcaf3ecdc1c"
  },
  {
    "url": "commands/player.html",
    "revision": "b84eefa0ffcceb0e0bc29d4444f188d8"
  },
  {
    "url": "en/api.html",
    "revision": "8edc8f49066677384de92cf91d132258"
  },
  {
    "url": "en/bungeecord.html",
    "revision": "9bfad6cfbf2eb073f969fbfc5eb72528"
  },
  {
    "url": "en/commands/admin.html",
    "revision": "1bb92bc25a1abc26be2c74a4294160f6"
  },
  {
    "url": "en/commands/banking.html",
    "revision": "b9f247e555ff33409af8ecf2c22a87fa"
  },
  {
    "url": "en/commands/player.html",
    "revision": "f295b97e77c46f79bae24bbe435a1d56"
  },
  {
    "url": "en/faq.html",
    "revision": "b639061b4417f4f1bd14a4d7cbb6cd95"
  },
  {
    "url": "en/index.html",
    "revision": "4ab7a93c89bea7de22672a7ae025ea4f"
  },
  {
    "url": "en/permissions.html",
    "revision": "b282006c4cd44e6b9075f3747f219d89"
  },
  {
    "url": "en/placeholders/integrated.html",
    "revision": "fd8b478f9a7ccf794c70edee76cdcf9f"
  },
  {
    "url": "en/placeholders/placeholderapi.html",
    "revision": "69fd8d926e0eb7a2dabadf92e790cd10"
  },
  {
    "url": "en/setup.html",
    "revision": "f90550026ac7b447d32aace537b0af0a"
  },
  {
    "url": "en/tutorials/detectiongate.html",
    "revision": "e44f0126044c7efa24c2ac7987712f31"
  },
  {
    "url": "en/tutorials/levelchecknpc.html",
    "revision": "c7b3e6d2707c16ecfdfbfe052dbf1bd3"
  },
  {
    "url": "en/tutorials/teleporters.html",
    "revision": "b03e46b63581689340e965ed9c000006"
  },
  {
    "url": "en/tutorials/vendingmachine.html",
    "revision": "9e527c14863100f2c8d21c041ad7f788"
  },
  {
    "url": "faq.html",
    "revision": "2b8b080792d1b0d663a06ffd542fa904"
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
    "revision": "a3b25dc6b39b935b5ac3aa14432ae081"
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
    "revision": "b7ee72ff41a13be309ddb032eff1b992"
  },
  {
    "url": "placeholders/integrated.html",
    "revision": "c48f6b991647ad277637ea1b7791f424"
  },
  {
    "url": "placeholders/placeholderapi.html",
    "revision": "653fb35ae2c60d16d2accd8fab47417e"
  },
  {
    "url": "setup.html",
    "revision": "b598d10e0e5bea6b576da4b4be27079a"
  },
  {
    "url": "tutorials/detectiongate.html",
    "revision": "967720db654fba05d5fc5afd69b40186"
  },
  {
    "url": "tutorials/levelchecknpc.html",
    "revision": "95aebdd9d193cb813a3d22bcfe4818c3"
  },
  {
    "url": "tutorials/teleporters.html",
    "revision": "959a6c2196fe69a55ba95ff128576dea"
  },
  {
    "url": "tutorials/vendingmachine.html",
    "revision": "b2fa9cb2398f61c4d993c0d403c10fd0"
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
