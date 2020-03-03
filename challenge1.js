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
      //de twee lijnen
      datasets: [{
        //geen opvulling onder de lijn
        fill: false,
        //kleur lijn
        backgroundColor: 'black',
        borderColor:'black',
        //strakke lijn
        lineTension:0,
        beginAtZero:true,
        //Y as waardes
        data: [5000, 3212, 6424, 9636, 6060, 4272, 2484, 5696]
        //elke dag eten-1788 bestellen+5000
        //1begin 2alarm dus bestellen 3kerstinkopen aankomst bestelling 4aankomst kerstinkopen kerst 5-	6-	7alarm dus bestellen 8aankomst bestelling 9toekomst	10toekomst
      },
      //Grens lijn blauw
      {
        fill: false,
        backgroundColor: '#1592E6',
        borderColor:'#1592E6',
        lineTension:0,
      	beginAtZero:true,
        //geen punten
      	pointRadius:0,
        //stippellijn
        borderDash:[10],
        data: [3576, 3576, 3576, 3576, 3576, 3576, 3576, 3576, 3576, 3576]
      }]
    },
    //Instellingen grafiek
    options: {
      //geen legenda
    	legend:{
    		display:false,
    	},
      //weken naam
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
    type: 'bar', //staafgrafiek
    data: {
      //de drie blokken
      datasets: [{
          //naam
        	label:'Stikstof',
          //kleur blok
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
      //legenda staat rechts van de grafiek
  		legend:{
  			position:'right',
  		},
      //geen titel bij hover
		  tooltips: {
		  	callbacks: {
		  		title: function() {}
		  	}
      },
      scales: {
        xAxes: [{
          //stapel de grafiek
          stacked: true
        }],
        yAxes: [{
          stacked: true,
         //naam procenten
          scaleLabel:{
  		  		display:true,
  				  labelString:'Procenten'
  		  	}
        }]
      }
  	}
  });
//Grafiek 3
  function berekenGrafiek3() {
    //afstand ruimteschip vanaf aarde
    var data=44.606405;
    //grote box horizontaal of verticaal
    if (screen.width>=1440) 
      {var maxData=72}
    else
      {var maxData=80};
    //positie in de grafiek (in procenten)
    var positieRuimteschip= (data*maxData)/55.758006;
    //plek van margin horizontaal of verticaal
    if (screen.width>=1440) 
      {document.getElementById('schip').style.marginBottom= positieRuimteschip+'%';
      document.getElementById('schip').style.marginLeft= 0;}
    else
      {document.getElementById('schip').style.marginLeft= positieRuimteschip+'%';
      document.getElementById('schip').style.marginBottom= 0;};
    //tekst onder de grafiek
    afstandTekst.innerHTML=data;
  }
  //actie bij scherm veranderen
  window.onresize = berekenGrafiek3;