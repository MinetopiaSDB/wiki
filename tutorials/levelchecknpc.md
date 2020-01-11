# LevelcheckNPC setup

Citizens is een plugin uitgebracht om NPC’s (Non-Player Characters) in Minecraft te gebruiken, je kan er heel veel mee zoals commands aan toevoegen zodat spelers ze kunnen gebruiken. Op deze pagina kan je lezen wat je er mee kan in combinatie met MinetopiaSDB.

::: warning
Om deze functionaliteit te gebruiken moet je Citizens geïnstalleerd hebben. Kijk voor de juiste Citizens versie op de [setup](../setup.md#dependencies) pagina.
:::

## Commands

Om een levelcheck npc in te spawnen gebruik je het command ``/levelcheck``. Let op! Hiervoor heb je wel de permission ``minetopiasdb.levelcheck`` nodig. Naast een levelcheck npc kan je ook een verkiezingnpc instellen, hiervoor gebruik je het command ``/verkiezing``, om dat command te gebruiken heb je de permission ``minetopiasdb.verkiezing`` nodig.

## Aanpassingen

Nu je een verkiezing- of levelcheck npc hebt kan je deze ook aanpassen. Je kan verschillende instellingen aanpassen van je npc. Allereerst kan je een andere skin kiezen dit doe je door naar de npc te kijken en dan eerst ``/npc sel`` of ``/npc select``, hierdoor heb je de npc waar je naar keek gekozen om aan te passen. Nu kan je het command ``/npc skin <playername>`` doen, vervang de variabele ``<playername>`` door de gewenste spelernaam van wie de skin zichtbaar moet worden. Nu heb je de skin veranderd.
Nu kan je ook aanpassen of je wilt dat de NPC rond kijkt als een speler om hem heen loopt. Hiervoor doe je weer ``/npc sel`` of ``/npc select`` (niet nodig als je nog met dezelfde npc bezig was). Daarna voer je het command ``/npc look`` of ``/npc lookclose`` in. Nu heb je ervoor gezorgd dat de npc draait wanneer je er omheen loopt.

## Veel voorkomende problemen

Soms komt het voor dat de naam van de NPCs niet goed inladen, dit kan je verhelpen door je Minecraft te restarten. Mocht het dan alsnog aanhouden dan kan je ook je server restarten, maar meestal is het opgelost als je je Minecraft restart.