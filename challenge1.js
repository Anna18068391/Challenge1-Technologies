//Algemene gegevens in header
var week=8;
var dag='maandag';
var tijd='9:00';
algemeen.innerHTML='Week '+week+' - '+dag+' - '+tijd;

//Algemene instellingen Chart.js
Chart.defaults.global.defaultFontFamily = "'Saira Semi Condensed','sans-serif'";
Chart.defaults.global.defaultFontSize = 16;
Chart.defaults.global.defaultFontColor = 'black';

//Grafiek 1 Chart.js
  var ctx = document.getElementById('grafiek').getContext('2d');
  var voedselTijd = new Chart(ctx, {
    //Soort
    type: 'line',
    //Voedsel lijn zwart
    data: {
      //X as weken
    	labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      //De twee lijnen
      datasets: [{
        //Geen opvulling onder de lijn
        fill: false,
        //Kleur lijn
        backgroundColor: 'black',
        borderColor:'black',
        //Strakke lijn
        lineTension:0,
        beginAtZero:true,
        //Y as waardes
        data: [5000, 3212, 6424, 9636, 6060, 4272, 2484, 5696]
        //Elke dag eten-1788 bestellen+5000
        //1begin 2alarm dus bestellen 3kerstinkopen aankomst bestelling 4aankomst kerstinkopen kerst 5-	6-	7alarm dus bestellen 8aankomst bestelling 9toekomst	10toekomst
      },
      //Grens lijn blauw
      {
        fill: false,
        backgroundColor: '#1592E6',
        borderColor:'#1592E6',
        lineTension:0,
      	beginAtZero:true,
        //Geen punten
      	pointRadius:0,
        //Stippellijn
        borderDash:[10],
        data: [3576, 3576, 3576, 3576, 3576, 3576, 3576, 3576, 3576, 3576]
      }]
    },
    //Instellingen grafiek
    options: {
      //Geen legenda
    	legend:{
    		display:false,
    	},
      //Weken naam
    	scales:{
    		xAxes:[{
    			scaleLabel:{
    				display:true,
    				labelString:'Weken'
  		  	}
    	  }]
    	}
  	}
  });
//Grafiek 2 Chart.js
  var ctx = document.getElementById('grafiek2').getContext('2d');
  var samenstellingAtmosfeer = new Chart(ctx, {
    //Staafgrafiek
    type: 'bar',
    data: {
      //De drie blokken
      datasets: [{
          //Naam
        	label:'Stikstof',
          //Kleur blok
          backgroundColor: 'black',
          data: [75.90]
        },
        {
        	label:'Zuurstof',
          backgroundColor: 'gray',
          data: [22.64]
        },
        {
        	label:'Koolstofdioxide',
          backgroundColor:'#1592E6',
          data: [1.45]
      }]
    },
    options: {
      //Legenda staat rechts van de grafiek
  		legend:{
  			position:'right',
  		},
      //Geen titel bij hover
		  tooltips: {
		  	callbacks: {
		  		title: function() {}
		  	}
      },
      scales: {
        xAxes: [{
          //Stapel de grafiek
          stacked: true
        }],
        yAxes: [{
          stacked: true,
         //Naam procenten
          scaleLabel:{
  		  		display:true,
  				  labelString:'Procenten'
  		  	}
        }]
      }
  	}
  });
//Grafiek 3
  //Afstand ruimteschip vanaf aarde
  var data=44.606405;
  //Tekst onder de grafiek
  afstandTekst.innerHTML=data;
  //Bereken grafiek horizontaal of verticaal en afstand van schip
  function berekenGrafiek3() {
    //Grootte box
    //Verticaal
    if (screen.width>=1440) 
      {var maxData=72}
    //Horizontaal
    else
      {var maxData=80};
    //Positie in de grafiek (in procenten)
    var positieRuimteschip= (data*maxData)/55.758006;
    //Plek van margin horizontaal of verticaal
    if (screen.width>=1440) 
      {document.getElementById('schip').style.marginBottom= positieRuimteschip+'%';
      document.getElementById('schip').style.marginLeft= 0;}
    else
      {document.getElementById('schip').style.marginLeft= positieRuimteschip+'%';
      document.getElementById('schip').style.marginBottom= 10+'px';};
  }
  //Functie uitvoeren bij start en scherm veranderen
  window.onload = berekenGrafiek3;
  window.onresize = berekenGrafiek3;