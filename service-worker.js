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
    "revision": "7d830e23909a34e5241666fb34645509"
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
    "revision": "cbdbfee09f8b5e525540a2d10b366973"
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
    "url": "assets/js/36.9e47d0f9.js",
    "revision": "8660caa10b4f779500507e0dc488e92c"
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
    "url": "assets/js/app.4a4bbdb1.js",
    "revision": "021aa05dac2a84fb7f7c46a106df1349"
  },
  {
    "url": "assets/js/vendors~docsearch.fdd8a010.js",
    "revision": "581a5b4c541e9463dc178f120623529d"
  },
  {
    "url": "bungeecord.html",
    "revision": "f01acc4161e27b24ac490a0270b30a48"
  },
  {
    "url": "commands/admin.html",
    "revision": "b4cb27d4d355e6c594da25dda59a550f"
  },
  {
    "url": "commands/banking.html",
    "revision": "5ef0682f3494bcf1ca911556f5d8fa31"
  },
  {
    "url": "commands/player.html",
    "revision": "3814381357872d5db744f1fcbbe1b9b9"
  },
  {
    "url": "en/api.html",
    "revision": "62f4c2e5c4a80aabf56a226a069ff8e9"
  },
  {
    "url": "en/bungeecord.html",
    "revision": "9537229135f7dd7353213bb9676f1950"
  },
  {
    "url": "en/commands/admin.html",
    "revision": "96dd255157dc49fb508dc29bfb611e19"
  },
  {
    "url": "en/commands/banking.html",
    "revision": "7865d14b00244f8fa60073ac531b9fe1"
  },
  {
    "url": "en/commands/player.html",
    "revision": "5d51ab3767d454fa7ebf0b24169ade50"
  },
  {
    "url": "en/faq.html",
    "revision": "8115f433702dc0743a278008bf6f0ea4"
  },
  {
    "url": "en/index.html",
    "revision": "99baa01d4e5356a7058838251de5c9c8"
  },
  {
    "url": "en/permissions.html",
    "revision": "e92e21547552fee0d67223fec1df16c5"
  },
  {
    "url": "en/placeholders/integrated.html",
    "revision": "702dcdb417921042df21218e50445468"
  },
  {
    "url": "en/placeholders/placeholderapi.html",
    "revision": "dfc2bb93bb1e8dfd1af11e529a5575a3"
  },
  {
    "url": "en/setup.html",
    "revision": "057582496e2f5d5b7076677da6b6bd76"
  },
  {
    "url": "en/tutorials/detectiongate.html",
    "revision": "94214dc08dd99bde1d1ec132fa1623d9"
  },
  {
    "url": "en/tutorials/levelchecknpc.html",
    "revision": "b8a91ea46cea929569dd700edcaaf540"
  },
  {
    "url": "en/tutorials/teleporters.html",
    "revision": "9d0cdc1189f1d8b83fceb1b5d76c7c37"
  },
  {
    "url": "en/tutorials/vendingmachine.html",
    "revision": "0f943cc0b4514d1d1d4f89f92de53c61"
  },
  {
    "url": "faq.html",
    "revision": "1858bbe4e54996b6426d7e003dcc764f"
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
    "revision": "66eead46ab953306ed14caefdb3529ee"
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
    "revision": "372c0c90deaf7ba3c9881f294d4578b7"
  },
  {
    "url": "placeholders/integrated.html",
    "revision": "8d71836ff14e5033dbece7b75008b564"
  },
  {
    "url": "placeholders/placeholderapi.html",
    "revision": "472ddc2ae0769ed02b224267ec4a0503"
  },
  {
    "url": "setup.html",
    "revision": "88e2fb004f756f410d52e370fd8a0e87"
  },
  {
    "url": "tutorials/detectiongate.html",
    "revision": "f077047a0eeef25fc45af1d9e4862c9c"
  },
  {
    "url": "tutorials/levelchecknpc.html",
    "revision": "82738d750a2fda115ae761f3eb38f5b7"
  },
  {
    "url": "tutorials/teleporters.html",
    "revision": "4be13447ce0f99a3c76e7d8b9a04e888"
  },
  {
    "url": "tutorials/vendingmachine.html",
    "revision": "f8d583b41905e4e452b32c04e1603f4f"
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
