# Challenge1-Technologies
_Website van Anna 
CMD jaar 2
IxD & Technology 2
2030_

> Elon Musk heeft een responsive interface nodig om de eerste Mars kolonisten te helpen tijdens hun reis naar Mars

Op deze website is het dashboard van SpaceX's Starship te zien. Hierin word een overzicht van data van het ship getoond. Op dit moment is het schip 8 weken onderweg.

Het dashboard is door mij gemaakt met HTML5, CSS en JavaScript. De site is responsive en maakt gebruik van media-queries en Flexbox. Ten slotte is de website klaar om met externe bronnen gekoppeld te worden via JavaScript.

In de volgende hoofstukjes zal ik een toelichting geven bij elke grafiek op het dashboard.

## Voedselvooraad
Deze grafiek is gemaakt met behulp van [Chart.js](https://www.chartjs.org/). Het is een lijn-grafiek die laat zien hoeveel eten er nog is aan boord van het schip. 

Elke week eten alle 103 mensen bij elkaar 1788 kilo aan voedsel. Als er minder dan 3576 kilo (de bauwe stippellijn) over is moet er nieuw voedsel besteld worden. Dit kan door op de 'Bestel voedsel' knop te drukken. 5000 kilo voedsel word dan met een snel mini-ruimteschip een week later bezorgd.

In week 4 was het kerst. Iedreen heeft toen twee keer zoveel gegeten bij het kerstdiner. In week drie is daarvoor kerstinkopen gedaan, toen werd er twee keer zoveel eten bezogrd.

## Samenstelling van de atmosfeer in het ruimteschip
Deze gestapelde staafgrafiek is ook gemaakt met behulp van [Chart.js](https://www.chartjs.org/). In de grafiek is te zien uit welke stoffen de lucht in het ruimteschip bestaat.

De stoffen tellen samen op tot 100%.


## Afgelegde afstand
In deze grafiek is te zien hoeveel afstand al afgelegd is door het ruimteschip naar mars.

De afbeedingen in de grafiek (de aarde, het Starship en mars) heb ik zelf getekend met een stylus op mijn laptop.

De plek van het schip is gekoppeld aan een JavaScript variabele: 'var data' zodat er makkelijk een andere bron aan gekoppeld kan worden.


Het koste best wat moeite om deze webite te maken, onder andere om te leren omgaan met chart.js, hoe javascript ook al weer werkte en om alles responsive te krijgen. Ik ben dan ook erg blij met het eindresultaat, de reis naar mars kan beginnen.