(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{400:function(e,t,a){"use strict";a.r(t);var o=a(46),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"faq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[e._v("#")]),e._v(" FAQ")]),e._v(" "),a("h2",{attrs:{id:"what-do-i-need-to-do-to-update-from-v1-to-v2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-do-i-need-to-do-to-update-from-v1-to-v2"}},[e._v("#")]),e._v(" What do I need to do to update from v1 to v2?")]),e._v(" "),a("p",[e._v("Because the data in MinetopiaSDB v1 was not stored in the most efficient way, we have chosen to fully switch to SQL in v2, you can choose between MySQL and SQLite.")]),e._v(" "),a("p",[e._v("This means that data from MinetopiaSDB v1 does not work on MinetopiaSDB v2 servers. You can have your v1 data converted to v2 data for a small fee. More information can be found "),a("a",{attrs:{href:"https://wiki.minetopiasdb.nl/en/setup.html#data-migration",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(". Keep in mind that only player data is transferred, and that you'll have to transfer files like configs and Message files yourself if you want to.")]),e._v(" "),a("p",[e._v("After you have converted your data to the v2 data you will get a "),a("code",[e._v("Data.db")]),e._v(" file, which you must throw in the MinetopiaSDB folder. The exact steps how to do it are explained when the data conversion is complete.")]),e._v(" "),a("p",[e._v("Of course, you can also choose not to have your data transferred, which means that players lose their MinetopiaSDB data (such as prefixes, levels, online time, company accounts, etc.). Because plots, inventories and private accounts are stored by the server itself (or other plugins), you will not lose this data if you go from v1 to v2 without data conversion.")]),e._v(" "),a("h2",{attrs:{id:"what-are-the-difference-between-minetopiasdb-v1-and-v2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-are-the-difference-between-minetopiasdb-v1-and-v2"}},[e._v("#")]),e._v(" What are the difference between MinetopiaSDB v1 and v2?")]),e._v(" "),a("p",[e._v("There are a lot! Most of the changes are behind the scenes, but a couple of cool features have been added:")]),e._v(" "),a("ul",[a("li",[e._v("/prefix")]),e._v(" "),a("li",[e._v("/prefixcolor")]),e._v(" "),a("li",[e._v("/levelcolor")]),e._v(" "),a("li",[e._v("Goldshards and grayshards have been added, these both have their own booster.")]),e._v(" "),a("li",[e._v("You can now buy epic and legendary goodybags in vending machines.")]),e._v(" "),a("li",[e._v("Data is now being stored in MySQL or SQLite.")]),e._v(" "),a("li",[e._v("You can combine multiple MinetopiaSDB servers via Bungeecord, to spread players over multiple servers.")])]),e._v(" "),a("h2",{attrs:{id:"how-can-i-get-my-rank-in-the-chat-or-tablist"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-can-i-get-my-rank-in-the-chat-or-tablist"}},[e._v("#")]),e._v(" How can I get my rank in the chat or tablist?")]),e._v(" "),a("p",[e._v("Because the /setrank command isn't present in MinetopiaSDB v2 anymore, you'll have to do it a different way.")]),e._v(" "),a("h3",{attrs:{id:"luckperms"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#luckperms"}},[e._v("#")]),e._v(" LuckPerms:")]),e._v(" "),a("ul",[a("li",[e._v("Install the plugin "),a("a",{attrs:{href:"https://www.spigotmc.org/resources/placeholderapi.6245/",target:"_blank",rel:"noopener noreferrer"}},[e._v("PlaceholderAPI"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("/papi ecloud download LuckPerms")]),e._v(" "),a("li",[e._v("/papi reload")]),e._v(" "),a("li",[e._v("Use the placeholder "),a("code",[e._v("%luckperms_prefix%")]),e._v(" where you want it (for example in the chatformat or the tabformat)")]),e._v(" "),a("li",[e._v("Change prefixes with this command: "),a("code",[e._v("/lp user <user> meta setprefix <prefix>")]),e._v(" of "),a("code",[e._v("/lp group <group> meta setprefix <prefix>")])])]),e._v(" "),a("h3",{attrs:{id:"permissionsex"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#permissionsex"}},[e._v("#")]),e._v(" PermissionsEx:")]),e._v(" "),a("ul",[a("li",[e._v("Install the plugin "),a("a",{attrs:{href:"https://www.spigotmc.org/resources/placeholderapi.6245/",target:"_blank",rel:"noopener noreferrer"}},[e._v("PlaceholderAPI"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("/papi ecloud download Vault 1.6.0")]),e._v(" "),a("li",[e._v("/papi reload")]),e._v(" "),a("li",[e._v("Use the placeholder "),a("code",[e._v("%vault_prefix%")]),e._v(" where you want it (for example in the chatformat or the tabformat)")]),e._v(" "),a("li",[e._v("Change prefixes with this command: "),a("code",[e._v("/pex user <user> prefix <prefix>")]),e._v(" of "),a("code",[e._v("/pex group <group> prefix <prefix>")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);