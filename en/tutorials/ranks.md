#Ranks

Because the /setrank command isn't present in MinetopiaSDB v2 anymore, you'll have to do it a different way.
## LuckPerms:
- Install the plugin [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/)
- /papi ecloud download LuckPerms
- /papi reload
- Use the placeholder ``%luckperms_prefix%`` where you want it (for example in the chatformat or the tabformat)
- Change prefixes with this command: ``/lp user <user> meta setprefix <prefix>`` of ``/lp group <group> meta setprefix <prefix>``

## PermissionsEx:
- Install the plugin [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/)
- /papi ecloud download Vault 1.6.0
- /papi reload
- Use the placeholder ``%vault_prefix%`` where you want it (for example in the chatformat or the tabformat)
- Change prefixes with this command: ``/pex user <user> prefix <prefix>`` of ``/pex group <group> prefix <prefix>``
