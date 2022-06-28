# Admin commands

**/sdb**\
Description: Use /sdb for the help page.\
Permission: minetopiasdb.sdb

**/calculate**\
Description: With /calculate you can see the buildingsprice of a selected area.\
Permission: minetopiasdb.calculate\
Aliases: /bereken

**/staffchat**\
Description: Use /staffchat \[message\] to send a message in the staffchat or use /staffchat to join the staffchat.\
Permission: minetopiasdb.staffchat\
Aliases: /sc, /staffc

**/plotwand**\
Description: You need a plotwand to create plots or use /calculate.\
Permission: minetopiasdb.plotwand

**/admintool**\
Description: Get (or open) the admintool.\
Permission: minetopiasdb.admintool

**/levelcheck**\
Description: Use /levelcheck to spawn a levelcheck NPC or to execute a levelcheck.\
Permission: minetopiasdb.levelcheck

**/mod**\
Description: Change playerdata (such as level and fitness) of a player.\
Permission: minetopiasdb.mod\
Permissions per subcommand:
| Permissie                          | Descrpiption |
| :--------------------------------- | :----------- |
| minetopiasdb.mod.setlevel          | Change the level of a player                                              |
| minetopiasdb.mod.setcolor          | Change the namecolor of a player                                          |
| minetopiasdb.mod.setfitness        | Change the fitness of a player (using /mod addfitness or /mod setfitness) |
| minetopiasdb.chatspy               | Toggle chatspy                                                            |
| minetopiasdb.commandspy            | Toggle commandspy                                                         |

**/openbank**\
Description: With /openbank you can look at the bankaccount(s) of a player.\
Permission: minetopiasdb.openbank

**/mtworld**\
Description: With /mtworld you can enable MinetopiaSDB in a world and change the scoreboardcolor, title or temperature.\
Permission: minetopiasdb.mtworld\
Aliases: /mtwereld, /wereld

**/mtcity**\
Description: With /mtcity you can enable MinetopiaSDB in a worldguard region and change the scoreboardcolor, title or temperature.\
Permission: minetopiasdb.mtcity\
Aliases: /mtstad, /stad

**/key**\
Description: With keys you can open all the chests en doors on plots.\
Permission: minetopiasdb.key\
Aliases: /sleutel

**/book**\
Description: Create books for things such as fines, drivingslicenses or passports.\
Permission: minetopiasdb.book\
Aliases: /boek
Permissions:
| Permission                          | Description |
| :---------------------------------- | :----------- |
| minetopiasdb.book.fine              | Write out fines |
| minetopiasdb.book.receipt           | Create receipts |
| minetopiasdb.book.identification    | Create ID cards|
| minetopiasdb.book.kvk               | Create a business registration book |
| minetopiasdb.book.plotregistration  | Create a plotregistration book|
| minetopiasdb.book.driverslicense    | Write out driverslicenses |
| minetopiasdb.book.permit            | Create permits |
| minetopiasdb.book.vog               | Create a certificate of conduct |
| minetopiasdb.book.diploma           | Create certificates |
| minetopiasdb.book.prescription      | Create drug prescriptions |
| minetopiasdb.book.cheque            | Create cheques |

**/deathban**\
Description: With /deathban you can toggle deathban or unban players who are deathbanned.\
Permission: minetopiasdb.deathban

**/ddgitems**\
Description: Open a menu with (nearly) all the items from the DDG resourcepack.\
Permission: minetopiasdb.ddgitems\
Aliases: /fitheiditems, /rugzak, /backpack, /fitnessitems, /wapens, /weapons

**/sdbitems**\
Description: Give items a glow or unbreakable effect, or create armor.\
Aliases: /glow, /unbreakable, /boots, /kleding, /prullenbak, /trashcan
Permissions:
| Permission                            | Subcommand      |Description |
| :------------------------------------ | :-------------- | :----------- |
| minetopiasdb.sdbitems                 | \*              | Execute all /sdbitems commands |
| minetopiasdb.sdbitems.glow            | glow            | Give items a glow effect |
| minetopiasdb.sdbitems.unbreakable     | unbreakable     | Make an item unbreakable |
| minetopiasdb.sdbitems.boots           | boots           | Get special boots |
| minetopiasdb.sdbitems.clothes         | clothes         | Get colored clothes |
| minetopiasdb.sdbitems.trashcan        | prullenbak      | Open a trashcan |
| minetopiasdb.sdbitems.chargetaser     | chargetaser     | Charge your taser |
| minetopiasdb.sdbitems.fillpepperspray | fillpepperspray | Fill your pepperspray |

**/bankaccount**\
Description: With /bankaccount you can modify savings, company or government bankaccounts.\
Permission: minetopiasdb.bankaccount\
Aliases: /rekening, /ohrekening, /spaarrekening

**/teleporter**\
Description: Use /teleporter to create or delete teleporters.\
Permission: minetopiasdb.teleporter

**/criminalrecord**\
Description: Use /criminalrecord to manage criminal records.\
Permission: minetopiasdb.criminalrecord\
Aliases: /strafblad, /crimrecord

**/phone**\
Description: Use /phone to get phones and manage calling credit.\
Permission: minetopiasdb.phone\
Aliases: /telefoon, /beltegoed

**/prefix**\
Description: Use /prefix to open your prefixmenu.\
Permission: minetopiasdb.prefix\
Aliases: /telefoon, /beltegoed

**/realmoney**\
Description: Spawn in real money and toggle the existence of fake money.\
Permission: minetopiasdb.realmoney\
Aliases: /echtgeld, /nepgeld, /fakemoney

**/lootcrate**\
Description: Modify the content of lootcrates or get random items from lootcrates.\
Permission: minetopiasdb.lootcrate\
Aliases: /lc

**/bodysearch**\
Description: Use /bodysearch to bodysearch other players.\
Permission: minetopiasdb.bodysearch\
Aliases: /fouilleer

**/stattop**\
Description: Get a list of players with the longest onlinetime, highest bank balance or highest level\
Permission: minetopiasdb.stattop

**/loan**\
Description: Manage and give out loans\
Permission: minetopiasdb.loan to create loans and manage them\
Aliases: /lening, /loans

**/handcuff**\
Description: Handcuff a player\
Permission: minetopiasdb.handcuff\
Aliases: /handboei