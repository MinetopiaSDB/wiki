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
    "revision": "b8068a1f4fac62f50d3ff7785ef9e015"
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
    "url": "assets/css/0.styles.11e3be62.css",
    "revision": "6b82d547a7aba8c15455a14910e3d059"
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
    "url": "assets/js/10.d3f33425.js",
    "revision": "ff3353d889238fac24ed00cd32b33aef"
  },
  {
    "url": "assets/js/11.438f8d0f.js",
    "revision": "00406978820f3339be05311febc1e5cb"
  },
  {
    "url": "assets/js/12.ab55e955.js",
    "revision": "cd814d078941ef8ccdb04c04afd54077"
  },
  {
    "url": "assets/js/13.b8b93724.js",
    "revision": "edd13822289c27fc482099f2638e7af1"
  },
  {
    "url": "assets/js/14.02c0c18f.js",
    "revision": "b697833038550d6f2ea58b909598bbf6"
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
    "url": "assets/js/17.3ece3368.js",
    "revision": "9ede23adad37a1a54f0b08f3777110cd"
  },
  {
    "url": "assets/js/18.36cfd711.js",
    "revision": "e71407ee4e497712a9be9a186ed0a4ae"
  },
  {
    "url": "assets/js/19.cd85cb46.js",
    "revision": "3260f46d57331051078ed39765cec53c"
  },
  {
    "url": "assets/js/2.446c9011.js",
    "revision": "22e6605bbffc055d3792fc31c54ad87a"
  },
  {
    "url": "assets/js/20.21897b40.js",
    "revision": "8eb237159976913402204b5488097299"
  },
  {
    "url": "assets/js/21.c521a323.js",
    "revision": "72bb035fe6c2c28f6e64c94435cf3b79"
  },
  {
    "url": "assets/js/22.ecb6a608.js",
    "revision": "49fe0ff2e57506d7af234fd826b4209c"
  },
  {
    "url": "assets/js/23.f51c7cdb.js",
    "revision": "3c58225976fb3982d97a676f4bc772cf"
  },
  {
    "url": "assets/js/24.de60b1ed.js",
    "revision": "6aba78f5e1253da7a4a585ea8cc543c3"
  },
  {
    "url": "assets/js/25.d4625d66.js",
    "revision": "9cb26b7ab80267d007b88e9c742bff2c"
  },
  {
    "url": "assets/js/26.ea4d8258.js",
    "revision": "a15784171355ac6ec8fb95aa16ecf14b"
  },
  {
    "url": "assets/js/27.aca0af7a.js",
    "revision": "17e0f261e24c996be8356eb6f4278fb2"
  },
  {
    "url": "assets/js/28.b3c5511c.js",
    "revision": "1ad25b1d829edbfc79bfa48ad89a9349"
  },
  {
    "url": "assets/js/29.0b3c530f.js",
    "revision": "4a8c435e495923e26d84b6bf52016700"
  },
  {
    "url": "assets/js/3.202c6226.js",
    "revision": "0d24b62a36566d9a418baa3b7ff104dd"
  },
  {
    "url": "assets/js/30.44e3cc3c.js",
    "revision": "b3c604a69d36dd07c466a0d395af71ab"
  },
  {
    "url": "assets/js/31.90087e51.js",
    "revision": "359ef01604935fd8c6454b888cecf1d2"
  },
  {
    "url": "assets/js/32.2b13efa7.js",
    "revision": "32b383fa43db431baf20562c990dacfd"
  },
  {
    "url": "assets/js/33.c591a5c4.js",
    "revision": "4f2477e83cb1d90717e52d00a20ad576"
  },
  {
    "url": "assets/js/34.5a1fada2.js",
    "revision": "c6515d1064b8c6adb07a8c1fc1c20c78"
  },
  {
    "url": "assets/js/4.38734452.js",
    "revision": "4728fc759fb70317bdbc80c56ae9e461"
  },
  {
    "url": "assets/js/5.f4239aee.js",
    "revision": "b2522952e6e475e48e8c3888e681f331"
  },
  {
    "url": "assets/js/6.2bbffdac.js",
    "revision": "8c38c26dab54b0b6895b2c5bb7c14bf1"
  },
  {
    "url": "assets/js/7.1848b333.js",
    "revision": "fe6f9eb23e0bed5086f2fa38cbcf1e3c"
  },
  {
    "url": "assets/js/8.1c9551a2.js",
    "revision": "015afcbba3aee04189fbf4334b4f2e84"
  },
  {
    "url": "assets/js/9.e502d87e.js",
    "revision": "071f6552a4f7d1b7010656419986f624"
  },
  {
    "url": "assets/js/app.e7eddf07.js",
    "revision": "1e85574ad397d39efd3ed305ac00af41"
  },
  {
    "url": "bungeecord.html",
    "revision": "a98eb9e7fbbf93dc2dacd52402c0fc9a"
  },
  {
    "url": "commands/admin.html",
    "revision": "74a460c4dd88b3249ec9ae7f5c1a8753"
  },
  {
    "url": "commands/banking.html",
    "revision": "c51c539d9b82c5c711d32cb37f476c77"
  },
  {
    "url": "commands/player.html",
    "revision": "8b642145b87bd501630b7ab1079d2b19"
  },
  {
    "url": "en/bungeecord.html",
    "revision": "3d1db2c0448504a0592b17edc459bf7a"
  },
  {
    "url": "en/commands/admin.html",
    "revision": "bbac1d2baf3d3e9f720cadf0bfd2ec0a"
  },
  {
    "url": "en/commands/banking.html",
    "revision": "fbccdad1dbe2d52dac7e06862a59e41e"
  },
  {
    "url": "en/commands/player.html",
    "revision": "1640445108259e6faabde86a49f69303"
  },
  {
    "url": "en/faq.html",
    "revision": "ac2f659e3da7a34de4a228053de62962"
  },
  {
    "url": "en/index.html",
    "revision": "5d221407b7597da73d6074fba38b410e"
  },
  {
    "url": "en/permissions.html",
    "revision": "867a07ac42c655e38e4bcccda5833f60"
  },
  {
    "url": "en/placeholders/integrated.html",
    "revision": "096f432b58647b3ba52bd00af97230bd"
  },
  {
    "url": "en/placeholders/placeholderapi.html",
    "revision": "8211c296e043afd0551fe85960a269a4"
  },
  {
    "url": "en/setup.html",
    "revision": "0474e5dedab8706846c92b3ba9b4f5e8"
  },
  {
    "url": "en/tutorials/detectiongate.html",
    "revision": "4187965219189c80af6a3e5da4f3a864"
  },
  {
    "url": "en/tutorials/levelchecknpc.html",
    "revision": "6a6cc20bcd13062d5e2c99596be70add"
  },
  {
    "url": "en/tutorials/teleporters.html",
    "revision": "5605dec94b797487c8ec439188dadd19"
  },
  {
    "url": "en/tutorials/vendingmachine.html",
    "revision": "1cb283deae0907e9f5c016544bb87d65"
  },
  {
    "url": "faq.html",
    "revision": "cd72bd88478cc95d8584d0efaf05fa79"
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
    "revision": "aea39823a1d5a2fce0d815c2b0a1b3ee"
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
    "revision": "20fe763300731ad6bd5a98b3ba2c2900"
  },
  {
    "url": "placeholders/integrated.html",
    "revision": "b7414b3e9ebe81a5fe0f2bab8c725f74"
  },
  {
    "url": "placeholders/placeholderapi.html",
    "revision": "0020ff3631e913ecd7ab1a4329067a85"
  },
  {
    "url": "setup.html",
    "revision": "d4a5ca4602d53cd4b902280ed8b31088"
  },
  {
    "url": "tutorials/detectiongate.html",
    "revision": "01994930fefef1c77718e911afee53e6"
  },
  {
    "url": "tutorials/levelchecknpc.html",
    "revision": "5f34ef32027435c12eca789c1df5a86e"
  },
  {
    "url": "tutorials/teleporters.html",
    "revision": "76c1a30a89724eaf9c28bad19b16c61b"
  },
  {
    "url": "tutorials/vendingmachine.html",
    "revision": "f00122aaf83a5c83f10f46748826aa92"
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
