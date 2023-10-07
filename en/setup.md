# Setup

[[toc]]

## Dependencies
::: warning
As of MinetopiaSDB v2.6, only Minecraft 1.12.2 and above are supported.
:::

| Server version  | WorldEdit                                                                    | WorldGuard                                                                    | Essentials                                                                              | Vault                                                                    | Citizens (optioneel!)                                      |
| :-------------- | :--------------------------------------------------------------------------- | :---------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------- | :----------------------------------------------------------------------- | :--------------------------------------------------------- |
| 1.12.2          | [Download](https://dev.bukkit.org/projects/worldedit/files/2597538/download) | [Download](https://dev.bukkit.org/projects/worldguard/files/2610618/download) | [Download](https://essentialsx.net/downloads.html?branch=stable) | [Download](https://dev.bukkit.org/projects/vault/files/894359/download) | [Download](https://ci.citizensnpcs.co/job/citizens2/3124/) |
| 1.13.2          | [Download](https://dev.bukkit.org/projects/worldedit/files/4162203/download) | [Download](https://dev.bukkit.org/projects/worldguard/files/2723606/download) | [Download](https://essentialsx.net/downloads.html?branch=stable) | [Download](https://www.spigotmc.org/resources/vault.34315/download?version=344916) | [Download](https://ci.citizensnpcs.co/job/citizens2/lastSuccessfulBuild/) |
| 1.14.4          | [Download](https://dev.bukkit.org/projects/worldedit/files/4162203/download) | [Download](https://dev.bukkit.org/projects/worldguard/files/2989116/download) | [Download](https://essentialsx.net/downloads.html?branch=stable) | [Download](https://www.spigotmc.org/resources/vault.34315/download?version=344916) | [Download](https://ci.citizensnpcs.co/job/citizens2/lastSuccessfulBuild/) |
| 1.15.2          | [Download](https://dev.bukkit.org/projects/worldedit/files/4162203/download) | [Download](https://dev.bukkit.org/projects/worldguard/files/2989116/download) | [Download](https://essentialsx.net/downloads.html?branch=stable) | [Download](https://www.spigotmc.org/resources/vault.34315/download?version=344916) | [Download](https://ci.citizensnpcs.co/job/citizens2/lastSuccessfulBuild/) |
| 1.16.5          | [Download](https://dev.bukkit.org/projects/worldedit/files/4586220/download) | [Download](https://dev.bukkit.org/projects/worldguard/files/3342964/download) | [Download](https://essentialsx.net/downloads.html?branch=stable) | [Download](https://www.spigotmc.org/resources/vault.34315/download?version=344916) | [Download](https://ci.citizensnpcs.co/job/citizens2/lastSuccessfulBuild/) |
| 1.17.1          | [Download](https://dev.bukkit.org/projects/worldedit/files/4586220/download) | [Download](https://dev.bukkit.org/projects/worldguard/files/3677516/download) | [Download](https://essentialsx.net/downloads.html?branch=stable) | [Download](https://www.spigotmc.org/resources/vault.34315/download?version=344916) | [Download](https://ci.citizensnpcs.co/job/citizens2/lastSuccessfulBuild/) |
| 1.18.2          | [Download](https://dev.bukkit.org/projects/worldedit/files/4586220/download) | [Download](https://dev.bukkit.org/projects/worldguard/files/3677516/download) | [Download](https://essentialsx.net/downloads.html?branch=stable) | [Download](https://www.spigotmc.org/resources/vault.34315/download?version=344916) | [Download](https://ci.citizensnpcs.co/job/citizens2/lastSuccessfulBuild/) |
| 1.19.4          | [Download](https://dev.bukkit.org/projects/worldedit/files/4586220/download) | [Download](https://dev.bukkit.org/projects/worldguard/files/4554903/download) | [Download](https://essentialsx.net/downloads.html?branch=stable) | [Download](https://www.spigotmc.org/resources/vault.34315/download?version=344916) | [Download](https://ci.citizensnpcs.co/job/citizens2/lastSuccessfulBuild/) |
| 1.20.1          | [Download](https://dev.bukkit.org/projects/worldedit/files/4586220/download) | [Download](https://dev.bukkit.org/projects/worldguard/files/4675318/download) | [Download](https://essentialsx.net/downloads.html?branch=stable) | [Download](https://www.spigotmc.org/resources/vault.34315/download?version=344916) | [Download](https://ci.citizensnpcs.co/job/citizens2/lastSuccessfulBuild/) |


## How to start

It's really simple, you download all the dependencies (and MinetopiaSDB itself ofcourse) and put them in your `plugins` folder. You can now start your server. If everything seems to work fine you can add your world using `/mtworld add <WorldName>` and get started with your Minetopia server!

## Database setup

::: tip
Do you want to use MinetopiaSDB over multiple servers with Bungeecord? Check [this](./bungeecord.md) page.
:::


One of the best new features of MinetopiaSDB v2 is MySQL database support. It is now possible to store data in a database and synchronise your data across multiple servers.

It is not required to set up a database, if you do not set anything you will automatically use a local SQLite database. The default MySQL settings look like this:
```yml
MySQL:
  Enabled: false
  Username: root
  Password: password
  Database: Minetopia
  IP: localhost
  Port: 3306
```
To use MySQL, you must change `` Enabled: `` to true, after which you can enter your MySQL login data in the other config fields.

## Data migration

Saving data has become a lot more efficient in the v2 update of MinetopiaSDB. Unfortunately, this also means that the old v1 data cannot be transferred easily. The data needs be converted for it to be usable in the v2 update of MinetopiaSDB. To solve this problem we have launched a paid data migration service. With this service it is possible to have your data converted to the v2 data for a small fee so that you retain all player data.

### But why are you suddenly asking for money, I thought MinetopiaSDB was free?
MinetopiaSDB is and remains free. After all, migrating data is voluntary. You can continue to use your server without converting data, although this will mean that your players will have to start from 0 again.

### I want to migrate my data to the new data, how can I do this?
There are two ways to convert data. The easiest way is to execute the command ``sdb!dataconversion`` in the #bot-commands channel in the [MinetopiaSDB discord](https://minetopiasdb.nl/discord). The other way is to send an email to [datamigration@minetopiasdb.nl](mailto:datamigration@minetopiasdb.nl).

| Unique Players  | Price |
| --------------- | ----- |
| < 100           | Free* |
| < 2.000         | € 2   |
| < 6.000         | € 4   |
| > 6.000         | € 6   |

\* = only when your server clearly isn't commercial and doesn't have a store.
