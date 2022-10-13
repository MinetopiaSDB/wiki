# Setup

[[toc]]

::: warning
Deze setup guide is alleen geldig voor MinetopiaSDB v2.0 of hoger!
:::

## Dependencies

| Serverversie    | WorldEdit                                                                    | WorldGuard                                                                    | Essentials                                                                              | Vault                                                                    | Citizens (optioneel!)                                      |
| :-------------- | :--------------------------------------------------------------------------- | :---------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------- | :----------------------------------------------------------------------- | :--------------------------------------------------------- |
| 1.9.4           | [Download](https://dev.bukkit.org/projects/worldedit/files/2597538/download) | [Download](https://dev.bukkit.org/projects/worldguard/files/956770/download)  | [Download](https://modrinth.com/plugin/essentialsx/versions) | [Download](https://dev.bukkit.org/projects/vault/files/894359/download)  | [Download](https://ci.citizensnpcs.co/job/citizens2/1371/)                |
| 1.10.2          | [Download](https://dev.bukkit.org/projects/worldedit/files/2597538/download) | [Download](https://dev.bukkit.org/projects/worldguard/files/956770/download)  | [Download](https://modrinth.com/plugin/essentialsx/versions) | [Download](https://dev.bukkit.org/projects/vault/files/894359/download)  | [Download](https://ci.citizensnpcs.co/job/citizens2/lastSuccessfulBuild/) |
| 1.11.2          | [Download](https://dev.bukkit.org/projects/worldedit/files/2597538/download) | [Download](https://dev.bukkit.org/projects/worldguard/files/956770/download)  | [Download](https://modrinth.com/plugin/essentialsx/versions) | [Download](https://dev.bukkit.org/projects/vault/files/894359/download)  | [Download](https://ci.citizensnpcs.co/job/citizens2/lastSuccessfulBuild/) |
| 1.12.2          | [Download](https://dev.bukkit.org/projects/worldedit/files/2597538/download) | [Download](https://dev.bukkit.org/projects/worldguard/files/2610618/download) | [Download](https://modrinth.com/plugin/essentialsx/versions) | [Download](https://dev.bukkit.org/projects/vault/files/894359/download)  | [Download](https://ci.citizensnpcs.co/job/citizens2/lastSuccessfulBuild/) |
| 1.13.2          | [Download](https://dev.bukkit.org/projects/worldedit/files/3922624/download) | [Download](https://dev.bukkit.org/projects/worldguard/files/2723606/download) | [Download](https://modrinth.com/plugin/essentialsx/versions) | [Download](https://dev.bukkit.org/projects/vault/files/3007470/download) | [Download](https://ci.citizensnpcs.co/job/citizens2/lastSuccessfulBuild/) |
| 1.14.4          | [Download](https://dev.bukkit.org/projects/worldedit/files/3922624/download) | [Download](https://dev.bukkit.org/projects/worldguard/files/2989116/download) | [Download](https://modrinth.com/plugin/essentialsx/versions) | [Download](https://dev.bukkit.org/projects/vault/files/3007470/download) | [Download](https://ci.citizensnpcs.co/job/citizens2/lastSuccessfulBuild/) |
| 1.15.2          | [Download](https://dev.bukkit.org/projects/worldedit/files/3922624/download) | [Download](https://dev.bukkit.org/projects/worldguard/files/2989116/download) | [Download](https://modrinth.com/plugin/essentialsx/versions) | [Download](https://dev.bukkit.org/projects/vault/files/3007470/download) | [Download](https://ci.citizensnpcs.co/job/citizens2/lastSuccessfulBuild/) |
| 1.16.5          | [Download](https://dev.bukkit.org/projects/worldedit/files/3922624/download) | [Download](https://dev.bukkit.org/projects/worldguard/files/3342964/download) | [Download](https://modrinth.com/plugin/essentialsx/versions) | [Download](https://dev.bukkit.org/projects/vault/files/3007470/download) | [Download](https://ci.citizensnpcs.co/job/citizens2/lastSuccessfulBuild/) |
| 1.17.1          | [Download](https://dev.bukkit.org/projects/worldedit/files/3922624/download) | [Download](https://dev.bukkit.org/projects/worldguard/files/3677516/download) | [Download](https://modrinth.com/plugin/essentialsx/versions) | [Download](https://www.spigotmc.org/resources/vault.34315/download?version=344916) | [Download](https://ci.citizensnpcs.co/job/citizens2/2349/) |
| 1.18.2          | [Download](https://dev.bukkit.org/projects/worldedit/files/3922624/download) | [Download](https://dev.bukkit.org/projects/worldguard/files/3677516/download) | [Download](https://modrinth.com/plugin/essentialsx/versions) | [Download](https://www.spigotmc.org/resources/vault.34315/download?version=344916) | [Download](https://ci.citizensnpcs.co/job/citizens2/lastSuccessfulBuild/) |
| 1.19.2          | [Download](https://dev.bukkit.org/projects/worldedit/files/3922624/download) | [Download](https://dev.bukkit.org/projects/worldguard/files/3903109/download) | [Download](https://modrinth.com/plugin/essentialsx/versions) | [Download](https://www.spigotmc.org/resources/vault.34315/download?version=344916) | [Download](https://ci.citizensnpcs.co/job/citizens2/lastSuccessfulBuild/) |



## Hoe moet ik beginnen?

Heel makkelijk, je downloadt de goede versie van alle dependencies (en natuurlijk MinetopiaSDB zelf) en zet deze in jouw ``plugins`` mapje. Als je dit hebt gedaan, kun je jouw server opstarten. Als alles lijkt te werken kun je een wereld toevoegen met /mtworld add \<Wereld\> en kun je echt van start met jouw Minetopia server!

## Database setup

::: tip
Wil je MinetopiaSDB met meerdere servers via BungeeCord gebruiken? Kijk dan even op [deze](./bungeecord.md) pagina.
:::


Een van de leukste nieuwe features aan MinetopiaSDB v2 is de ondersteuning voor MySQL databases. Het is nu mogelijk om data op te slaan in een database en op die manier jouw data in meerdere servers te gebruiken (en op die manier jouw spelers ook over verschillende servers te verspreiden.) 

Het is niet verplicht om een database in te stellen, als je niets instelt maak je automatisch gebruik van een lokale SQLite database. De standaard MySQL instellingen zien er zo uit:
```yml
MySQL:
  Enabled: false
  Username: root
  Password: password
  Database: Minetopia
  IP: localhost
  Port: 3306
```
Om gebruik te maken van MySQL moet je ``Enabled:`` op true zetten waarna je jouw MySQL inloggegevens in kan voeren bij de andere velden.



## Data migratie

Het opslaan van data is in de v2 update van MinetopiaSDB een stuk efficiënter geworden. Dit betekent helaas ook dat de oude v1 data niet zomaar overgezet kan worden. Hiervoor moet de data omgezet worden. Om dit probleem op te lossen hebben we een datamigratie dienst gelanceerd. Met deze dienst is het mogelijk om tegen een kleine betaling jouw data te laten converteren naar de v2 data waardoor je alle spelerdata behoudt.


### Waarom kost dit geld? Ik dacht dat MinetopiaSDB gratis was?

MinetopiaSDB is en blijft gratis. Het migreren van data is immers vrijwillig. Je kunt prima door gaan met jouw server zonder data om te zetten, alhoewel dit zal betekenen dat jouw spelers weer vanaf 0 moeten beginnen.


### Ik wil mijn data laten migreren naar v2 data, hoe moet dat?

Dat kan op twee manieren. De makkelijkste manier is om in de [MinetopiaSDB Discord](https://minetopiasdb.nl/discord) het commando ``sdb!dataconversion`` uit te voeren in #bot-commands. De andere manier is door een emailtje te sturen naar [datamigratie@minetopiasdb.nl](mailto:datamigratie@minetopiasdb.nl).

| Unieke spelers  | Prijs   |
| --------------- | ------- |
| < 100           | Gratis* |
| < 2.000         | € 2     |
| < 6.000         | € 4     |
| > 6.000         | € 6     |

\* = alleen wanneer jouw server niet commercieel is en geen webshop heeft.
