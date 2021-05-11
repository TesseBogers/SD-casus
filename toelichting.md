

Urenverantwoording:
    -   functionele gedeelte +- 16 uur.
    -   Styling: +- 8 uur.

Ik ben begonnen met het analyseren van het ontwerp, om te ontdekken wat ik 
nodig had voor het functionele gedeelte.

4 uur
De casus heb ik als React-project gemaakt.
Ik ben begonnen met het aanmaken van een useEffect-functie.
Daarbinnen heb ik met een asychrone-functie en Axios de externe data opgehaald uit de URL.
Als eerste heb ik uitgezocht hoe ik binnen het object de juiste data kon bereiken.
Met deze data heb ik een herbruikbaar socialDeal-component gemaakt.

6 uur
Daarna heb ik de componenten voor de navigatiebalk gemaakt. 
Een voor Tablet & Mobile, en de andere voor Desktop.
Ik maak gebruik van een OnClick-handler, zodat deze later de state kan aanpassen. 
Deze roep ik aan in de Navigatie.js
In eerste instantie had ik in de Navigatie.js ook een useEffect-functie aangemaakt,
en ging ik in dit component ook de data mappen. Deze heb ik er later uitgehaald.
Ik wou gebruik maken van een import van de Material-Icons, dat heb ik op verschillende
manieren geprobeerd. Dat is niet gelukt. De iconen heb ik als <img> toegevoegd.

In het completeCategory.js roep ik Navigatie.js aan, hier gebruik ik state 
zodat deze aan te passen is per categorie bij de OnClick-funtie.
Op het moment dat deze data aangepast is kunnen we mappen/ en of filteren-mappen.

3 uur
Bij het mappen van de data heeft het me even geduurd tot ik een oplossing vond voor de 
'populair'-categorie. Ik had de filter() gebruikt, en hierbij kon ik alle andere mooi mappen, m
maar niet de 'populair'. Deze had ik als default '1' meegegeven. Uiteindelijk kwam ik op
de ternary operator.

1 uur
Bij het mappen kreeg ik steeds de foutmelding dat de unieke Key verkeerd stond, deze had ik
als prop meegegeven in het SocialDeal-component, geen goed idee! Na lang puzzelen kwam 
deze juist te staan. 


2 uur 
Als laatste heb ik het DecimalsComma.js gemaakt. Zodat bij de informatie over de 
prijzen het punt in een komma wordt aangepast en er indien nodig, een 0 wordt toegevoegd.

Binnen deze tijd zit ook het testen en verschillende dingen uitproberen.

STYLING:

De styling heb ik met CSS gedaan. 
Graag had ik de CSS per component gemaakt, maar het was de eerste maal ik met de 
media-queries aan de slag ging en in combinatie met deze wist ik niet hoe dat precies ging 
gaan. Dit zoek ik nog uit. 
Ik heb getracht alle details te implementeren die te vinden waren in het AdobeXD-bestand.
Ik ben met CSS Grid en flexbox aan de slag gegaan, CSS grid gebruikte ik om bij de 
verschillende media-queries de socialDeals netjes op zijn plaats te houden. Het lukte me 
echter niet om deze bij de Tablet en Desktop mooi op een rij te krijgen. Ik vermoed dit met
mijn HTML-indeling te maken heeft, maar ik heb het niet gevonden. 

Graag had ik de volgende dingen nog netjes afgewerkt:

-   Het scrollen met de fixed naviagtiebalk en onzichtbare scrollbalk, zonder webkit-scrollbar.

-   De logo's (New today, Sold out) op de juiste positie geplaatst.

-   Het 50%-logo.

-   De socialDeal grijs te laten worden indien Sold-out.

-   De achtergrond foto bij Desktop en alle tekst mooi uitgelijnd en op zijn plaats. 

-   De opmaak van de scrollbar bij Desktop.

