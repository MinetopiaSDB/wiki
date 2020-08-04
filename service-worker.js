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
    "revision": "107f71c5c89e5149302f186cad5a2486"
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
    "revision": "03a623611c30be62466f468635f2ce12"
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
    "url": "assets/js/19.77c9426a.js",
    "revision": "7b712ddba12404c1cdee78b1b1fb8593"
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
    "url": "assets/js/24.d59ba575.js",
    "revision": "52b08447fa138718b7e9ad1645d3b156"
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
    "url": "assets/js/app.d8fe1730.js",
    "revision": "b6a5452098d0b039d470f5dbfdbadcca"
  },
  {
    "url": "bungeecord.html",
    "revision": "74fde2684da5edf89e1692aa38f5069f"
  },
  {
    "url": "commands/admin.html",
    "revision": "6c2867e18d940f38fb17de588c180734"
  },
  {
    "url": "commands/banking.html",
    "revision": "98fa3e7b0e6caf87860725a8abc3f59b"
  },
  {
    "url": "commands/player.html",
    "revision": "5a192bc1525c4ccb2cb93a1186589af1"
  },
  {
    "url": "en/api.html",
    "revision": "37427e923c9fe5c65b5da1e0cc65e966"
  },
  {
    "url": "en/bungeecord.html",
    "revision": "8be2eeab1dfbf54c1c6a921a98d6cadd"
  },
  {
    "url": "en/commands/admin.html",
    "revision": "8e463df94a8db5abc400944e7b9bf36b"
  },
  {
    "url": "en/commands/banking.html",
    "revision": "44edb0df82b248c95d3a37598d0eceec"
  },
  {
    "url": "en/commands/player.html",
    "revision": "21282eb9b5a35401608f19cd85e4fe26"
  },
  {
    "url": "en/faq.html",
    "revision": "0cde66e82074b94e68e9cdf855907227"
  },
  {
    "url": "en/index.html",
    "revision": "d906566fa558f3e0433c87c81132fbbf"
  },
  {
    "url": "en/permissions.html",
    "revision": "bbdc09cc6f5df3f797e3a561ee4fc9e8"
  },
  {
    "url": "en/placeholders/integrated.html",
    "revision": "10ac63562d9bb8c147d564525c4780e0"
  },
  {
    "url": "en/placeholders/placeholderapi.html",
    "revision": "38ffadea3122871e7680ff3570fa5642"
  },
  {
    "url": "en/setup.html",
    "revision": "f9e83a4e3fd241687a4457112efd9cfc"
  },
  {
    "url": "en/tutorials/detectiongate.html",
    "revision": "44275bc3f67c7e03e1b18e1182463410"
  },
  {
    "url": "en/tutorials/levelchecknpc.html",
    "revision": "ded3f2f81363d12bcf8da89cad85048a"
  },
  {
    "url": "en/tutorials/teleporters.html",
    "revision": "0871205974c7e261ebb73cc1d1f877bc"
  },
  {
    "url": "en/tutorials/vendingmachine.html",
    "revision": "6968b394c428690acf88c4e0572f53ff"
  },
  {
    "url": "faq.html",
    "revision": "c5508f9809591393d2eedcb80e9e65f3"
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
    "revision": "ef86c506577d8139beff08394d2cc384"
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
    "revision": "d49bf77beda5455d1a54d307eeeb9513"
  },
  {
    "url": "placeholders/integrated.html",
    "revision": "80d37aa3c1dd8a5cfa25b65c7be2130a"
  },
  {
    "url": "placeholders/placeholderapi.html",
    "revision": "b111f66aeb04968ee002fa97b99d1639"
  },
  {
    "url": "setup.html",
    "revision": "5d1007e2f99150c9c1c677bc8e71782b"
  },
  {
    "url": "tutorials/detectiongate.html",
    "revision": "231b349c1c53eba037d45834437d1bc7"
  },
  {
    "url": "tutorials/levelchecknpc.html",
    "revision": "79202511294a19d138c6c6b8da9e376a"
  },
  {
    "url": "tutorials/teleporters.html",
    "revision": "ca1d9f34f2f67948c50de01b15927d9f"
  },
  {
    "url": "tutorials/vendingmachine.html",
    "revision": "f4d510f3fba663fa9f56ff6271934863"
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
