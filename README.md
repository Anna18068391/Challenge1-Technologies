# Challenge1-Technologies
_Website van Anna  
CMD jaar 2  
IxD & Technology 2  
2030_

> Elon Musk heeft een responsive interface nodig om de eerste Marskolonisten te helpen tijdens hun reis naar Mars.

Op deze website is het dashboard van SpaceX's Starship te zien. Hierin wordt een overzicht van data van het schip getoond. Op dit moment is het schip acht weken onderweg.

Het dashboard is door mij gemaakt met HTML5, CSS en JavaScript. De site is responsive en maakt gebruik van media-queries en CSS grid. Hiermee is de lay-out geoptimaliseerd voor verschillende formaten schermen. Ten slotte is de website klaar om met externe bronnen gekoppeld te worden via JavaScript.

In de volgende hoofstukken zal ik een toelichting geven bij elke grafiek op het dashboard.

## Voedselvooraad
Deze grafiek is gemaakt met behulp van [Chart.js](https://www.chartjs.org/). Het is een lijngrafiek die laat zien hoeveel eten er nog is aan boord van het schip. 

Elke week eten alle 103 mensen bij elkaar 1788 kilo aan voedsel. Als er minder dan 3576 kilo (de blauwe stippellijn) over is moet er nieuw voedsel besteld worden. Dit kan door op de 'Bestel voedsel' knop te drukken. Een week later wordt er dan 5000 kilo voedsel bezorgd met een snel mini-ruimteschip.

In week 4 was het kerst. Iedereen heeft toen twee keer zoveel gegeten bij het kerstdiner. In week 3 is daarvoor kerstinkopen gedaan, toen werd er twee keer zoveel eten besteld.

## Samenstelling van de atmosfeer in het ruimteschip
Deze gestapelde staafgrafiek is ook gemaakt met behulp van [Chart.js](https://www.chartjs.org/). In de grafiek is te zien uit welke stoffen de lucht in het ruimteschip bestaat.

De stoffen tellen samen op tot 100%.


## Afgelegde afstand
In deze grafiek is te zien hoeveel afstand al afgelegd is door het ruimteschip naar Mars.

De afbeedingen in de grafiek (de aarde, het Starship en Mars) heb ik zelf getekend met mijn laptop en stylus.

De plek van het schip is gekoppeld aan een JavaScript variabele: `var data` zodat er makkelijk een andere bron aan gekoppeld kan worden. Deze grafiek word verticaal bij een groot scherm formaat.

## Schetsen
Voordat ik begon met het coderen ben ik eerst gaan brainstormen en schetsen. Schetsen van de brainstorm zijn hier te vinden: [brainstorm](brainstorm.png). De designs voor de vier schermformaten zijn hier te vinden: [schets mobile](schetsmobile.png), [schets tablet](schetstablet.png), [schets laptop](schetslaptop.png) en [schets groot scherm](schetsgrootscherm.png).

---

Het kostte best wat moeite om deze website te maken, onder andere om te leren omgaan met chart.js, hoe JavaScript ook al weer werkte en om alles responsive te krijgen. Ik ben dan ook erg blij met het eindresultaat, de reis naar Mars kan beginnen!