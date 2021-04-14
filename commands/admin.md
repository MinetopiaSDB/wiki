# Admin commands

**/sdb**\
Omschrijving: Gebruik /sdb voor de hulppagina.\
Permissie: minetopiasdb.sdb

**/calculate**\
Omschrijving: Met /bereken kan je de gebouwsprijs van een door jouw geselecteerd gebied bekijken.\
Permissie: minetopiasdb.calculate\
Aliases: /bereken

**/staffchat**\
Omschrijving: Gebruik /staffchat \[bericht\] om een bericht in de staffchat te sturen of /staffchat om de staffchat te joinen.\
Permissie: minetopiasdb.staffchat\
Aliases: /sc, /staffc

**/plotwand**\
Omschrijving: Je hebt een plotwand nodig om plots te maken en /bereken uit te voeren.\
Permissie: minetopiasdb.plotwand

**/admintool**\
Omschrijving: Krijg (of open) de admintool.\
Permissie: minetopiasdb.admintool

**/levelcheck**\
Omschrijving: Gebruik /levelcheck om een levelcheck NPC te spawnen of een levelcheck uit te voeren.\
Permissie: minetopiasdb.levelcheck

**/mod**\
Omschrijving: Verander spelersdata (zoals level, fitheid) van een speler.\
Permissie: minetopiasdb.mod\
Permissies per subcommando:
| Permissie                          | Beschrijving |
| :--------------------------------- | :----------- |
| minetopiasdb.mod.\*                | Alle onderstaande permissies                                                |
| minetopiasdb.mod.setlevel          | Verander het level van een speler                                           |
| minetopiasdb.mod.setcolor          | Verander de naamkleur van een speler                                        |
| minetopiasdb.mod.setfitness        | Verander de fitheid van een speler (via /mod addfitheid of /mod setfitheid) |
| minetopiasdb.chatspy               | Zet chatspy aan of uit                                                      |
| minetopiasdb.commandspy            | Zet commandspy aan of uit                                                   |

**/openbank**\
Omschrijving: Met /openbank kan je de rekeningen van een speler bekijken.\
Permissie: minetopiasdb.openbank

**/mtworld**\
Omschrijving: Met /mtwereld kan je MinetopiaSDB aanzetten in een wereld en de scoreboardkleur, titel en temperatuur veranderen.\
Permissie: minetopiasdb.mtworld\
Aliases: /mtwereld, /wereld

**/mtcity**\
Omschrijving: Met /mtcity kan je MinetopiaSDB aanzetten in een worldguard region en de scoreboardkleur, titel en temperatuur veranderen.\
Permissie: minetopiasdb.mtcity\
Aliases: /mtstad, /stad

**/key**\
Omschrijving: Met sleutels kan je alle kisten en deuren op plots openen.\
Permissie: minetopiasdb.key\
Aliases: /sleutel

**/book**\
Omschrijving: Maak boekjes voor (o.a.) boetes, rijbewijzen, ID-bewijzen.\
Permissie: minetopiasdb.book\
Aliases: /boek\
Permissies per boek:
| Permissie                          | Beschrijving |
| :--------------------------------- | :----------- |
| minetopiasdb.book.fine             | Schrijf boetes uit |
| minetopiasdb.book.receipt          | Maak gemakkelijk betaalbewijzen |
| minetopiasdb.book.identification   | Maak snel ID bewijzen aan |
| minetopiasdb.book.kvk              | Maak boekjes om de KvK inschrijvingen op te slaan |
| minetopiasdb.book.plotregistration | Maak gemakkelijk plotbewijzen |
| minetopiasdb.book.driverslicense   | Schrijf rijbewijzen uit |
| minetopiasdb.book.permit           | Maak gemakkelijk vergunningen |
| minetopiasdb.book.vog              | Maak een VOG (verklaring omtrent gedrag) |
| minetopiasdb.book.diploma          | Maak gemakkelijk een diploma |
| minetopiasdb.book.prescription     | Maak gemakkelijk recepten voor medicijnen |
| minetopiasdb.book.cheque           | Schrijf cheques uit |

**/deathban**\
Omschrijving: Met /deathban kan je de deathban in- of uitschakelen en spelers met een deathban unbannen.\
Permissie: minetopiasdb.deathban

**/ddgitems**\
Omschrijving: Krijg een menu met (bijna) alle items uit de DDG resourcepack.\
Permissie: minetopiasdb.ddgitems\
Aliases: /fitheiditems, /rugzak, /backpack, /fitnessitems, /wapens, /weapons

**/sdbitems**\
Omschrijving: Geef items een glow of unbreakable effect, of maak armor.\
Aliases: /glow, /unbreakable, /boots, /kleding, /prullenbak, /trashcan
Permissies:
| Permissie                             | Subcommand      |Beschrijving |
| :------------------------------------ | :-------------- | :----------- |
| minetopiasdb.sdbitems                 | \*              | Voer alle /sdbitems commands uit |
| minetopiasdb.sdbitems.glow            | glow            | Geef een glow effect aan items |
| minetopiasdb.sdbitems.unbreakable     | unbreakable     | Maak een item unbreakable |
| minetopiasdb.sdbitems.boots           | boots           | Krijg speciale boots |
| minetopiasdb.sdbitems.clothes         | kleding         | Krijg gekleurde kleding |
| minetopiasdb.sdbitems.trashcan        | prullenbak      | Open een prullenbak |
| minetopiasdb.sdbitems.chargetaser     | chargetaser     | Laad een taser op |
| minetopiasdb.sdbitems.fillpepperspray | fillpepperspray | Vul jouw pepperspray |

[**/bankaccount**](./banking.md#hoe-maak-ik-een-rekening-aan)\
Omschrijving: Met /rekening kan je spaar-, bedrijf-, of overheidsrekeningen aanpassen.\
Permissie: minetopiasdb.bankaccount\
Aliases: /rekening, /ohrekening, /spaarrekening

**/teleporter**\
Omschrijving: Gebruik /teleporter om teleporters aan te maken of te verwijderen.\
Permissie: minetopiasdb.teleporter

**/criminalrecord**\
Omschrijving: Gebruik /strafblad om strafbladen van spelers te beheren.\
Permissie: minetopiasdb.criminalrecord\
Aliases: /strafblad, /crimrecord

**/phone**\
Omschrijving: Gebruik /telefoon om telefoons te krijgen en beltegoed te beheren.\
Permissie: minetopiasdb.phone\
Aliases: /telefoon, /beltegoed

**/realmoney**\
Omschrijving: Spawn echt geld in en toggle het bestaan van nepgeld.\
Permissie: minetopiasdb.realmoney\
Aliases: /echtgeld, /nepgeld, /fakemoney

**/lootcrate**\
Omschrijving: Pas de inhoud van lootcrates aan of krijg willekeurige items uit lootcrates.\
Permissie: minetopiasdb.lootcrate\
Aliases: /lc

**/bodysearch**\
Omschrijving: Gebruik /fouilleer om andere spelers te fouilleren.\
Permissie: minetopiasdb.bodysearch\
Aliases: /fouilleer

**/stattop**\
Omschrijving: Krijg een lijst van spelers met de langste onlinetijd, het meeste geld of het hoogste level\
Permissie: minetopiasdb.stattop

**/loan**\
Omschrijving: Beheer en verstrek leningen\
Permissie: minetopiasdb.loan om leningen aan te maken en te beheren\
Aliases: /lening, /loans

**/election**\
Omschrijving: Beheer en bekijk de status van de verkiezing\
Permissie: minetopiasdb.election\
Aliases: /verkiezing