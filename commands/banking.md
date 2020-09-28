# Rekening commands 

Een van de verschillen tussen MinetopiaSDB v1 en v2 zit ook in de spaarrekeningen. In de v1 versie van MinetopiaSDB kon een speler maar een spaarrekening bezitten terwijl v2 de spaarrekening ziet als een soort bedrijfsrekening. Het is dus ook mogelijk om een speler meerdere spaarrekeningen te geven en meerdere spelers toe te voegen aan een spaarrekening.

## Hoe maak ik een rekening aan?
Gebruik het commando ``/rekening maak <Spaar/Bedrijf/Overheid>`` om een rekening aan te maken. Je kunt spelers aan deze rekening toevoegen met ``/rekening adduser <ID> <Speler>``.

## Hoe gebruik ik pinconsoles?
Om een betaalverzoek te versturen typ je het commando ``/pin set <Speler> <Bedrag>`` waarna je op een pinconsole, de 'purpur stairs' moet klikken om het betaalverzoek daadwerkelijk te sturen.
![Pinconsole create payment request](./pinconsole_setup_nl.png)

Als de speler het door jouw verstuurde betaalverzoek wilt betalen, kan hij dit doen door met een pinpas, die je uit /ddgitems kan krijgen, te klikken op deze pinconsole. Als de speler op de pinconsole heeft gedrukt met zijn pinpas is de transactie afgerond en is het geld van de rekening van de speler overgeschreven naar de bedrijfsrekening. 

Indien de persoon die het betaalverzoek maar één bedrijfsrekening heeft wordt deze automatisch geselecteerd, indien de speler er meerdere heeft moet deze speler het ID van de bankrekening in het ``/pin set`` commando gebruiken.
![Pinconsole bankaccount select](./pinconsole_multiple_bankaccounts_nl.png)
