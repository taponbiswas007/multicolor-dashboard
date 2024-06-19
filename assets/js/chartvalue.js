var options = {
    series: [{
        name: 'Expenses',
        data: [11, 32, 45, 32, 34, 52, 41]
    }, {
        name: 'Income',

        data: [31, 40, 28, 51, 42, 109, 100]
    }],
    chart: {
        height: 350,
        type: 'area'
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    xaxis: {
        type: 'datetime',
        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"],
        labels: {
            format: 'yyyy-MM' // Adjusts the labels on the x-axis to show year and month
        }
    },
    tooltip: {
        x: {
            format: 'yyyy-MM' // Adjusts the tooltip to show year and month
        }
    },
    
};

var chart = new ApexCharts(document.querySelector("#statisticsChart"), options);
chart.render();