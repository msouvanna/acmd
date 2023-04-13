async function displayHeight() {
    var myURL = "https://waterservices.usgs.gov/nwis/iv/?format=json&indent=on&sites=07055646,07055660, 07055680,07055780&period=P7D&parameterCd=00065&siteStatus=all";

    var msgObject = await fetch(myURL);
    var msgJSONText = await msgObject.text();
    var msg = JSON.parse(msgJSONText);
   // document.getElementById("test").innerHTML = msgJSONText;

    /* Site 1 */
var dates = [];
var values = [];
/* fLen contains the length of the array (number of values) */
fLen = msg.value.timeSeries[0].values[0].value.length;
for (i = 0; i < fLen; i++) {
    values[i] = msg.value.timeSeries[0].values[0].value[i].value;
	dates[i] = msg.value.timeSeries[0].values[0].value[i].dateTime;
}
var sitename = msg.value.timeSeries[0].sourceInfo.siteName;
var sitecode = msg.value.timeSeries[0].sourceInfo.siteCode[0].value;
var siteDescription = msg.value.timeSeries[0].variable.variableDescription;



/* Put your code here to display a graph of values and dates for Site 1*/
var ctx0 = document.getElementById("chartjs-0");

var myChart = new Chart(ctx0, {
    "type": "line",
    "data": {
        "labels": dates, 
        "datasets":[{
            "label": sitename,
            "data": values,
            "fill": false,
            "borderColor":"rgb(75, 192, 192)",
            "lineTension":0.1
        }]},
        "options":{
        "responsive": false,
        "maintainAspectRatio":true,
        }
});

/* Site 2 */
var dates = [];
var valuess = [];
/* fLen contains the length of the array (number of values) */
fLen = msg.value.timeSeries[1].values[0].value.length
for (i = 0; i < fLen; i++) {
    valuess[i] = msg.value.timeSeries[1].values[0].value[i].value
	dates[i] = msg.value.timeSeries[1].values[0].value[i].dateTime
}
var sitenamee = msg.value.timeSeries[1].sourceInfo.siteName
var sitecode = msg.value.timeSeries[1].sourceInfo.siteCode[0].value
var siteDescription = msg.value.timeSeries[1].variable.variableDescription

var ctx1 = document.getElementById("chartjs-1");

var myChart = new Chart(ctx1, {
    "type": "line",
    "data": {
        "labels": dates, 
        "datasets":[{
            "label": sitenamee,
            "data": valuess,
            "fill": false,
            "borderColor":"rgb(75, 192, 192)",
            "lineTension":0.1
        }]},
        "options":{
        "responsive": false,
        "maintainAspectRatio":true,
        }
});

/* Site 3 */
var dates = [];
var valuesss = [];
/* fLen contains the length of the array (number of values) */
fLen = msg.value.timeSeries[2].values[0].value.length
for (i = 0; i < fLen; i++) {
    valuesss[i] = msg.value.timeSeries[2].values[0].value[i].value
	dates[i] = msg.value.timeSeries[2].values[0].value[i].dateTime
}
var sitenameee = msg.value.timeSeries[2].sourceInfo.siteName
var sitecode = msg.value.timeSeries[2].sourceInfo.siteCode[0].value
var siteDescription = msg.value.timeSeries[2].variable.variableDescription

var ctx2 = document.getElementById("chartjs-2");

var myChart = new Chart(ctx2, {
    "type": "line",
    "data": {
        "labels": dates, 
        "datasets":[{
            "label": sitenameee,
            "data": valuesss,
            "fill": false,
            "borderColor":"rgb(75, 192, 192)",
            "lineTension":0.1
        }]},
        "options":{
        "responsive": false,
        "maintainAspectRatio":true,
        }
});

/* Site 4 */
var dates = [];
var valuessss = [];
/* fLen contains the length of the array (number of values) */
fLen = msg.value.timeSeries[3].values[0].value.length
for (i = 0; i < fLen; i++) {
    valuessss[i] = msg.value.timeSeries[3].values[0].value[i].value
	dates[i] = msg.value.timeSeries[3].values[0].value[i].dateTime
}
var sitenameeee = msg.value.timeSeries[3].sourceInfo.siteName
var sitecode = msg.value.timeSeries[3].sourceInfo.siteCode[0].value
var siteDescription = msg.value.timeSeries[3].variable.variableDescription

var ctx3 = document.getElementById("chartjs-3");

var myChart = new Chart(ctx3, {
    "type": "line",
    "data": {
        "labels": dates, 
        "datasets":[{
            "label": sitenameeee,
            "data": valuessss,
            "fill": false,
            "borderColor":"rgb(75, 192, 192)",
            "lineTension":0.1
        }]},
        "options":{
        "responsive": false,
        "maintainAspectRatio":true,
        }
});

var ctx4 = document.getElementById("chartjs-4");

var myChart = new Chart(ctx4, {
    "type": "line",
    "data": {
        "labels": dates, 
        "datasets":[{
            "label": sitename, //site 1
            "data": values,
            "fill": false,
            "borderColor":"red",
            "lineTension":0.1
        },{
            "label":sitenamee, //site 2
            "data":valuess,
            "fill":false,
            "borderColor":"blue",
            "lineTension":0.1
        },{
            "label":sitenameee, //site 3
            "data":valuesss,
            "fill":false,
            "borderColor":"green",
            "lineTension":0.1
        }, {
            "label":sitenameeee, //site 4
            "data":valuessss,
            "fill":false,
            "borderColor":"purple",
            "lineTension":0.1
        }]},

        "options":{
        "responsive": false,
        "maintainAspectRatio":true,
        }
});

      



}