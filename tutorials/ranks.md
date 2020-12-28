# Ranks

Omdat het /setrank commando niet meer in MinetopiaSDB v2 te vinden is, moet je dit op een andere manier regelen.

## LuckPerms:
- Installeer de plugin [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/)
- /papi ecloud download LuckPerms
- /papi reload
- Gebruik het variabele ``%luckperms_prefix%`` waar jij wilt (bijvoorbeeld in de ChatFormat of in de tab format)
- Stel prefixes in met het volgende commando: ``/lp user <user> meta setprefix <prefix>`` of ``/lp group <group> meta setprefix <prefix>``

## PermissionsEx:
- Installeer de plugin [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/)
- /papi ecloud download Vault 1.6.0
- /papi reload
- Gebruik het variabele ``%vault_prefix%`` waar jij wilt (bijvoorbeeld in de ChatFormat of in de tab format)
- Stel prefixes in met het volgende commando: ``/pex user <user> prefix <prefix>`` of ``/pex group <group> prefix <prefix>``
