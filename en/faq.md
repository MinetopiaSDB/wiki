# FAQ

## What do I need to do to update from v1 to v2?
Because the data in MinetopiaSDB v1 was not stored in the most efficient way, we have chosen to fully switch to SQL in v2, you can choose between MySQL and SQLite.

This means that data from MinetopiaSDB v1 does not work on MinetopiaSDB v2 servers. You can have your v1 data converted to v2 data for a small fee. More information can be found [here](https://wiki.minetopiasdb.nl/en/setup.html#data-migration). Keep in mind that only player data is transferred, and that you'll have to transfer files like configs and Message files yourself if you want to.

After you have converted your data to the v2 data you will get a ``Data.db`` file, which you must throw in the MinetopiaSDB folder. The exact steps how to do it are explained when the data conversion is complete.

Of course, you can also choose not to have your data transferred, which means that players lose their MinetopiaSDB data (such as prefixes, levels, online time, company accounts, etc.). Because plots, inventories and private accounts are stored by the server itself (or other plugins), you will not lose this data if you go from v1 to v2 without data conversion.

## What are the difference between MinetopiaSDB v1 and v2?
There are a lot! Most of the changes are behind the scenes, but a couple of cool features have been added:
- /prefix
- /prefixcolor 
- /levelcolor
- Goldshards and grayshards have been added, these both have their own booster. 
- You can now buy epic and legendary goodybags in vending machines. 
- Data is now being stored in MySQL or SQLite.
- You can combine multiple MinetopiaSDB servers via Bungeecord, to spread players over multiple servers.


## How can I get my rank in the chat or tablist?
Because the /setrank command isn't present in MinetopiaSDB v2 anymore, you'll have to do it a different way.
### LuckPerms:
- Install the plugin [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/)
- /papi ecloud download LuckPerms
- /papi reload
- Use the placeholder ``%luckperms_prefix%`` where you want it (for example in the chatformat or the tabformat)
- Change prefixes with this command: ``/lp user <user> meta setprefix <prefix>`` of ``/lp group <group> meta setprefix <prefix>``

### PermissionsEx:
- Install the plugin [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/)
- /papi ecloud download Vault 1.6.0
- /papi reload
- Use the placeholder ``%vault_prefix%`` where you want it (for example in the chatformat or the tabformat)
- Change prefixes with this command: ``/pex user <user> prefix <prefix>`` of ``/pex group <group> prefix <prefix>``
