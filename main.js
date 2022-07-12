$(document).ready(function () {
  $('#sidebarCollapse').on('click', function () {
	  $('#sidebar').toggleClass('active');
	  $('#content').toggleClass('margy');
		
	  
  });
});

$(document).ready(function () {
  $('#threedot-01').on('click', function () {
	  $('#menudot-1').toggleClass('showmenudot');
	 
  });
});


$(document).ready(function () {
  $('#threedot-2').on('click', function () {
	  $('#menudot-2').toggleClass('showmenudot');
	 
  });
});
$(document).ready(function () {
  $('#threedot-3').on('click', function () {
	  $('#menudot-3').toggleClass('showmenudot');
	 
  });
});




changecolor:{}

//$(document).ready(function () {
//	$('#sidebarCollapse').on('click', function () {
////		$('#content').toggleClass('margy');
		
//	});
 // });

 



//function changemargin() {
//	if (document.getElementById('sidebarCollapse').style.visibility=="active"){
//	document.getElementById("content").style.marginLeft="0";
//}else{
	



var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
      //  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: '',
            backgroundColor: '#ff8306',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },

    // Configuration options go here
    options: {}
});

var ctx = document.getElementById('myChart-2').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
      //  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: '',
                     backgroundColor: '#ff8306',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },

    // Configuration options go here
    options: {}
});

var ctx = document.getElementById('myChart-3').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
      //  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: '',
            backgroundColor: '#ff8306',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },

    // Configuration options go here
    options: {}
});

var ctx = document.getElementById('myChart-4').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
      //  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: '',
            backgroundColor: '#ff8306',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },

    // Configuration options go here
    options: {}
});


//bar graph
/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 * 
 * For more information visit:
 * https://www.amcharts.com/
 * 
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);

// Add data
chart.data = [{
  "country": "USA",
  "visits": 998
}, {
  "country": "China",
  "visits": -882
}, {
  "country": "Japan",
  "visits": -809
}, {
  "country": "Germany",
  "visits": 322
}, {
  "country": "UK",
  "visits": 422
}, {
  "country": "France",
  "visits": -314
}, {
  "country": "India",
  "visits": -984
}, {
  "country": "Spain",
  "visits": -711
}, {
  "country": "Netherlands",
  "visits": 665
},   {
  "country": "Brazil",
  "visits": -395
}];

// Create axes

var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "country";
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.labels.template.rotation = 0;
categoryAxis.renderer.labels.template.verticalCenter = "middle";
categoryAxis.renderer.labels.template.horizontalCenter = "middle";
categoryAxis.renderer.minGridDistance = 20;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

// Create series
var series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.valueY = "visits";
series.dataFields.categoryX = "country";
series.name = "Visits";

var columnTemplate = series.columns.template;
columnTemplate.tooltipText = "{categoryX}: [bold]{valueY}[/]";
columnTemplate.fillOpacity = .8;
columnTemplate.strokeOpacity = 0;
columnTemplate.fill = am4core.color("#f50014");