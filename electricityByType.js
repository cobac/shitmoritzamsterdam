google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(function() {
  setTimeout(drawChart, 500);
});

function drawChart() {

  // actual area chart data
  var data = google.visualization.arrayToDataTable([
      ['Number of stations', '0-5 min service area', '0-10 min service area ', '0-15 min service area'],
      ['1257 stations',89212,116949,127441],
      ['+25 stations', 90333, 121118, 129676],
      [' +50 stations', 91470, 122067, 130057],
      [ '+100 stations', 96734, 124800, 130623]
      ]);

var formatter = new google.visualization.NumberFormat({
  suffix: "",
  fractionDigits: 0
});

formatter.format(data, 1);
formatter.format(data, 2);
formatter.format(data, 3);


  // set chart options
  var options = {
    title: '',

    backgroundColor: 'transparent',
     //        5min      10min        15min
    colors: ['#4CE600', '#FFAA00', '#E60000', '#365884', '#AAC38A', '#4C0073'],
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
      duration: 3000,
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
      
      ['Number of stations', '0-5 min service area', '5-10 min service area ', '10-15 min service area'],
      ['1257 stations',89212,27737,10492],
      ['+25 stations', 90333, 30785, 8588],
      [' +50 stations', 91470, 30597, 7990],
      [ '+100 stations', 96734, 28066, 5823]
      ]);
 

var formatter = new google.visualization.NumberFormat({
  suffix: "",
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
      ['Number of stations', '0-5 min service area', '0-10 min service area ', '0-15 min service area'],
      ['1257 stations',89212,116949,127441],
      ['+25 stations', 90333, 121118, 129676],
      [' +50 stations', 91470, 122067, 130057],
      [ '+100 stations', 96734, 124800, 130623]
      ]);

var formatter = new google.visualization.NumberFormat({
  suffix: "",
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
