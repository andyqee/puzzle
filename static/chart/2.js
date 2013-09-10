        Highcharts.theme = {            colors: ['#4572a7', '#c0c0c0', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],            title: {                style: {                    color: '#000',                    font: 'bold 16px "Trebuchet MS", Verdana, sans-serif'                }            },            subtitle: {                style: {                    color: '#666666',                    font: 'bold 12px "Trebuchet MS", Verdana, sans-serif'                }            },            legend: {                itemStyle: {                    font: '9pt Trebuchet MS, Verdana, sans-serif',                    color: 'black'                },                itemHoverStyle: {                    color: 'gray'                }            }        };        Highcharts.setOptions(Highcharts.theme);        var options = {            chart: {                type: 'spline',                renderTo: 'container'            },            credits: {                enabled: false            },            title: {                text: 'Crash Count'            },            xAxis: {                type: 'datetime',                dateTimeLabelFormats: {                     second: '%H:%M:%S',                    minute: '%H:%M',                    hour: '%H:%M',                    day: '%m-%d',                    week: '%m-%d',                    month: '%Y-%m',                    year: '%Y'                }            },            yAxis: {                title: {                    text: 'Count'                },                min: 0            },            tooltip: {                crosshairs: true,                formatter: function () {                    if (this.series.name == 'lastweek') {                        this.x = this.x / 1000 - 7*24*60*60;                        this.x = this.x*1000;                    }                    html = Highcharts.dateFormat('%Y-%m-%d %H:%M', this.x);                    html += '<br>' + this.series.name + '：' +                        '<span style="font-weight:bold;color:' + this.series.color + '">' +                        this.y + '</span>';                    return html;                },                valueSuffix: '个'            },            plotOptions: {                spline: {                    lineWidth: 2,                    states: {                        hover: {                            lineWidth: 3                        }                    },                    marker: {                        enabled: false,                        states: {                            hover: {                                enabled: true,                                radius: 4                            }                        }                    },                    pointInterval: 3600000                }            },            series: [                {                    name: 'today',                    data:[[1378742400000,0],[1378743000000,1],[1378743600000,1],[1378744200000,0],[1378744800000,0],[1378745400000,1],[1378746000000,0],[1378746600000,1],[1378747200000,0],[1378747800000,0],[1378748400000,1],[1378749000000,0],[1378749600000,0],[1378750200000,1],[1378750800000,0],[1378751400000,0],[1378752000000,0],[1378752600000,0],[1378753200000,0],[1378753800000,3],[1378754400000,0],[1378755000000,0],[1378755600000,1],[1378756200000,0],[1378756800000,1],[1378757400000,0],[1378758000000,0],[1378758600000,0],[1378759200000,0],[1378759800000,0],[1378760400000,0],[1378761000000,0],[1378761600000,0],[1378762200000,0],[1378762800000,0],[1378763400000,0],[1378764000000,0],[1378764600000,0],[1378765200000,0],[1378765800000,1],[1378766400000,0],[1378767000000,0],[1378767600000,0],[1378768200000,0],[1378768800000,0],[1378769400000,1],[1378770000000,2],[1378770600000,0],[1378771200000,1],[1378771800000,0],[1378772400000,0],[1378773000000,0],[1378773600000,0],[1378774200000,0],[1378774800000,2],[1378775400000,1],[1378776000000,0],[1378776600000,0],[1378777200000,0],[1378777800000,0],[1378778400000,1],[1378779000000,0],[1378779600000,0],[1378780200000,1],[1378780800000,0],[1378781400000,2],[1378782000000,0],]                },                {                    name: 'lastweek',                    data:[]                }            ]        };        Highcharts.setOptions({            global: {                useUTC: false            }        });