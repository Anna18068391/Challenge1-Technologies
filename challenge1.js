var ctx = document.getElementById('grafiek').getContext('2d');

Chart.defaults.global.defaultFontFamily = "'Saira Semi Condensed','sans-serif'";
Chart.defaults.global.defaultFontSize = 16;
Chart.defaults.global.defaultFontColor = 'black';

Chart.defaults.global.title.fontSize = 24;

var voedselTijd = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
    	labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        datasets: [{
            legend: false,
            fill: false,
            backgroundColor: 'black',
            borderColor:'black',
            lineTension:0,
        	beginAtZero:true,
            data: [5000, 3212, 6424, 9636, 6060, 4272, 2484, 5696]
            //elke dag eten-1788 bestellen+5000
            //1begin 2alarm dus bestellen 3kerstinkopen aankomst bestelling 4aankomst kerstinkopen kerst 5-	6-	7alarm dus bestellen 8aankomst bestelling 9toekomst	10toekomst //percentage zelfde bij paren child? //java apart? //tabel text in pixel?
        },
        {
            legend: false,
            fill: false,
            backgroundColor: '#1592E6',
            borderColor:'#1592E6',
            lineTension:0,
        	beginAtZero:true,
        	pointRadius:0,
        	borderDash:[10],
            data: [3576, 3576, 3576, 3576, 3576, 3576, 3576, 3576, 3576, 3576]
        }]
    },

    // Configuration options go here
    options: {
  		legend:{
  			display:false,
  		},
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

var ctx = document.getElementById('grafiek2').getContext('2d');
var samenstellingAtmosfeer = new Chart(ctx, {
    type: 'bar',
    data: {
        datasets: [
        {
        	label:'Stikstof',
            backgroundColor: 'black',
            data: [75.90]
        },
        {
        	label:'Zuurstof',
            backgroundColor: 'gray',
        	beginAtZero:true,
            data: [22.64]
        },
        {
        	label:'Koolstofdioxide',
            backgroundColor:'#1592E6',
            data: [1.45]
        }]
    },
    options: {
  		legend:{
  			position:'right',
  		},
		tooltips: {
			callbacks: {
				title: function() {}
			}
	   },
  		scales: {
            xAxes: [{
                stacked: true
            }],
            yAxes: [{
                stacked: true,
                scaleLabel:{
  					display:true,
  					labelString:'Procenten'
  				}
            }]
    	}
	}
});
//data afgelegde afstand
var data=44.606405;
var positieRuimteschip= (data*80)/55.758006;
document.getElementById('schip').style.marginLeft= positieRuimteschip+'%';

//afgelegde afstand tekst
afstandTekst.innerHTML=data;