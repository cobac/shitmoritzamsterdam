google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(function() {
  setTimeout(drawChart, 500);
});

function drawChart() {

  // actual area chart data
  var data = google.visualization.arrayToDataTable([
      ['Number of stations', '5 min service area', '10 min service area ', '15 min service area'],
      ['223 stations',100906,241700,331455],
      ['+25 stations', 114474, 291142, 385743],
      [' +50 stations', 134099, 332072, 399631],
      [ '+1000 stations', 177848, 368415, 402869]
      ]);

var formatter = new google.visualization.NumberFormat({
  suffix: " gigawatt hours (GWh)",
  fractionDigits: 0
});

formatter.format(data, 1);
formatter.format(data, 2);
formatter.format(data, 3);


  // set chart options
  var options = {
    title: '',

    backgroundColor: 'transparent',
    colors: ['#a80000', '#70A800', '#004ABA', '#365884', '#AAC38A', '#4C0073'],
    fontName: 'Questrial',

    chartArea: {
      width: "80%",
      height: "80%"
    },

    hAxis: {
      baselineColor: '#DDD',
      textStyle: {
        fontSize: 13
      },
      maxAlternation: 1,
      minTextSpacing: 104,
    },

    vAxis: {
      title: '',
      format: '#,###',
      baselineColor: '#DDD',
      gridlines: {
        color: '#DDD',
      },
      textStyle: {
        fontSize: 12
      }
    },

    tooltip: {
      textStyle: {
        color: '#333',
        fontSize: 13
      },
      showColorCode: true
    },

    crosshair : {
      trigger: 'focus',
      opacity: 0.1
    },

    legend: {
      position: 'bottom',
      textStyle: {
        fontSize: 13
      }
    },

    animation: {
      duration: 1200,
      easing: 'out',
      startup: true
    },

    lineWidth: 2.5,
    pointSize: 4,
  };


  var lineChart = new google.visualization.LineChart(document.getElementById('chart'));

  lineChart.draw(data, options);

  var button1 = document.getElementById("button1");
  var button2 = document.getElementById("button2");

  button2.onclick = function() {
    console.log("Clicked!");
    button2.classList.add("disabled");
    button1.classList.remove("disabled");
    data = google.visualization.arrayToDataTable([
      
['Number of stations', '5 min service area', '10 min service area ', '15 min service area'],
      ['223 stations',100906, 140794, 89755],
      ['+25 stations', 114474, 176668, 94601],
      [' +50 stations', 134099, 197973, 67559],
      [ '+1000 stations', 177848, 190567, 34456]
      ]);
 

var formatter = new google.visualization.NumberFormat({
  suffix: "%",
  fractionDigits: 1
});

formatter.format(data, 1);
formatter.format(data, 2);
formatter.format(data, 3);

resizeChart();
};

button1.onclick = function() {
  console.log("Clicked!");
  button1.classList.add("disabled");
  button2.classList.remove("disabled");
  data = google.visualization.arrayToDataTable([
  ['Number of stations', '5 min service area', '10 min service area ', '15 min service area'],
      ['223 stations',100906,241700,331455],
      ['+25 stations', 114474, 291142, 385743],
      [' +50 stations', 134099, 332072, 399631],
      [ '+1000 stations', 177848, 368415, 402869]
      ]);

var formatter = new google.visualization.NumberFormat({
  suffix: " gigawatt hours (GWh)",
  fractionDigits: 0
});

formatter.format(data, 1);
formatter.format(data, 2);
formatter.format(data, 3);


resizeChart();
};

function resizeChart () {
  lineChart.draw(data, options);
}

if (document.addEventListener) {
  window.addEventListener('resize', resizeChart);
}
else if (document.attachEvent) {
  window.attachEvent('onresize', resizeChart);
}
else {
  window.resize = resizeChart;
}
}
