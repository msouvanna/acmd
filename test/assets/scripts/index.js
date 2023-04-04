async function displayHeight(){
    var myURL = "https://waterservices.usgs.gov/nwis/iv/?format=json&indent=on&sites=07055646&period=P7D&parameterCd=00065&siteStatus=all";

    /* fetch the results */
    var heightObject = await fetch(myURL);
    if (heightObject.status>=200 && heightObject.status<=299){
        var heightObjectJSONText = await heightObject.text();

        var heightmsg = JSON.parse(heightObjectJSONText);

        document.getElementById("test").innerHTML = heightObjectJSONText;
    }
}