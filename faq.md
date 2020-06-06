# FAQ

## Wat moet ik doen om te updaten van v1 naar v2?
Omdat de data in MinetopiaSDB v1 niet op de meest efficiënte manier opgeslagen werd, hebben we er voor gekozen om in v2 volledig over te gaan op SQL, je kunt kiezen tussen MySQL en SQLite.

Dat betekent dat data van MinetopiaSDB v1 niet werkt op MinetopiaSDB v2 servers. Je kunt jouw v1 data tegen een kleine betaling om laten zetten naar v2 data. Meer informatie hierover kun je [hier](https://wiki.minetopiasdb.nl/setup.html#data-migratie) vinden. Houd er rekening mee dat alleen spelersdata overgezet wordt, en dat je bestanden als configs en Message files zelf over moet zetten als je dit wilt.

Nadat je jouw data omgezet hebt naar de v2 data krijg je een ``Data.db`` bestand, die je in de MinetopiaSDB map moet gooien. Hoe je het precies moet doen wordt uitgelegd wanneer de data conversion voltooid is. 

Je kunt er natuurlijk ook voor kiezen om je data niet over te laten zetten, dat betekent dat spelers hun MinetopiaSDB data (zoals prefixes, levels, online tijd, bedrijfsrekeningen, etc.) kwijt raken. Omdat plots, inventories en privérekeningen opgeslagen worden door de server zelf (of andere plugins) raak je deze data niet kwijt als je van v1 naar v2 gaat zonder dataconversie.


## Wat is het verschil tussen MinetopiaSDB v1 en v2?
Een hele boel! De meeste veranderingen zijn achter de schermen, maar er zijn ook een aantal nieuwe functies toegevoegd:
- /prefix
- /prefixkleur 
- /levelkleur
- Er zijn nu ook goldshards en grayshards toegevoegd die beide een eigen booster hebben
- Je kunt in vendingmachines nu ook epic en legendary goodybags kopen
- Data wordt nu opgeslagen in MySQL of SQLite
- Je kunt meerdere MinetopiaSDB servers via bungeecord met elkaar combineren, zodat je spelers kunt verspreiden over meerdere servers


## Hoe krijg ik mijn rank in de tablist of in de chat?
Omdat het /setrank commando niet meer in MinetopiaSDB v2 te vinden is, moet je dit op een andere manier regelen. 
### LuckPerms:
- Installeer de plugin [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/)
- /papi ecloud download LuckPerms
- /papi reload
- Gebruik het variabele ``%luckperms_prefix%`` waar jij wilt (bijvoorbeeld in de ChatFormat of in de tab format)
- Stel prefixes in met het volgende commando: ``/lp user <user> meta setprefix <prefix>`` of ``/lp group <group> meta setprefix <prefix>``

### PermissionsEx:
- Installeer de plugin [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/)
- /papi ecloud download Vault 1.6.0
- /papi reload
- Gebruik het variabele ``%vault_prefix%`` waar jij wilt (bijvoorbeeld in de ChatFormat of in de tab format)
- Stel prefixes in met het volgende commando: ``/pex user <user> prefix <prefix>`` of ``/pex group <group> prefix <prefix>``
