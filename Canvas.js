const obj1 = {airId:"EJA363",  dest:"FLL", type:"E55P", altd:090, speed:27, class:"E E", course:332};
const obj2 = {airId:"FFT2378", dest:"PHL", type:"A321", altd:091, speed:28, class:"F",   course:35};
const obj3 = {airId:"N300GB",  dest:"MIA", type:"BE40", altd:011, speed:16, class:"C",   course:53};
const obj4 = {airId:"AAL2189", dest:"PHL", type:"A319", altd:085, speed:27, class:"C",   course:270};
const obj5 = {airId:"FFT108",  dest:"SJU", type:"A321", altd:012, speed:16, class:"F E", course:145};
const obj6 = {airId:"GPD816",  dest:"OXC", type:"PC12", altd:088, speed:28, class:"B",   course:115};
const obj7 = {airId:"DAL2942", dest:"PHL", type:"B739", altd:090, speed:28, class:"E E", course:126};
const obj8 = {airId:"AAL646",  dest:"PHX", type:"A21N", altd:012, speed:15, class:"C",   course:154};
const obj9 = {airId:"DAL8839", dest:"BOS", type:"B752", altd:101, speed:27, class:"E F", course:22};
const obj10 = {airId:"JIA5358",dest:"MSP", type:"CRJ9", altd:011, speed:16, class:"B",   course:71};
const obj11 = {airId:"SWA893", dest:"DEN", type:"B737", altd:092, speed:29, class:"E", course:240};
const obj12 = {airId:"JIA5548",dest:"MEM", type:"CRJ7", altd:010, speed:15, class:"F", course:280};
const obj13 = {airId:"AAL551", dest:"PHL", type:"A321", altd:088, speed:26, class:"C", course:180};
const obj14 = {airId:"RPA4749",dest:"SOP", type:"E75L", altd:090, speed:28, class:"F E", course:290};
const obj15 = {airId:"AAL856", dest:"PHL", type:"LJ60", altd:089, speed:27, class:"B", course:351};

var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");
var timer = 0;
var isPause = true;
var count = 0;

$("#close").on('click',function() {
    document.getElementById("table").style.display = "none";
});
$("#info1").on('click',function() {
    document.getElementById("table").style.display = "block";
    getFLightStrip(obj1, "203", "6415", "P1340", "FXE");
});
$("#info2").on('click',function() {
    document.getElementById("table").style.display = "block";
    getFLightStrip(obj2, "311", "1511", "P1113", "LHR");
});
$("#info3").on('click',function() {
    document.getElementById("table").style.display = "block";
    getFLightStrip(obj3, "110", "4947", "P1386", "PHL");
});
$("#info4").on('click',function() {
    document.getElementById("table").style.display = "block";
    getFLightStrip(obj4, "158", "4120", "P1272", "UNV");
});
$("#info5").on('click',function() {
    document.getElementById("table").style.display = "block";
    getFLightStrip(obj5, "590", "5158", "P1016", "PHL");
});
$("#info6").on('click',function() {
    document.getElementById("table").style.display = "block";
    getFLightStrip(obj6, "662", "5275", "P1417", "SOP");
});
$("#info7").on('click',function() {
    document.getElementById("table").style.display = "block";
    getFLightStrip(obj7, "795", "1891", "P1571", "DAY");
});
$("#info8").on('click',function() {
    document.getElementById("table").style.display = "block";
    getFLightStrip(obj9, "172", "2476", "P1472", "ILM");
});
$("#info9").on('click',function() {
    document.getElementById("table").style.display = "block";
    getFLightStrip(obj8, "489", "5405", "P1148", "PHL");
});
$("#info10").on('click',function() {
    document.getElementById("table").style.display = "block";
    getFLightStrip(obj10, "789", "2579", "P1239", "PHL");
});
$("#info11").on('click',function() {
    document.getElementById("table").style.display = "block";
    getFLightStrip(obj11, "421", "8038", "P1243", "ATL");
});
$("#info12").on('click',function() {
    document.getElementById("table").style.display = "block";
    getFLightStrip(obj12, "275", "1124", "P1651", "PHL");
});
$("#info13").on('click',function() {
    document.getElementById("table").style.display = "block";
    getFLightStrip(obj13, "881", "6351", "P1282", "MIA");
});
$("#info14").on('click',function() {
    document.getElementById("table").style.display = "block";
    getFLightStrip(obj14, "919", "4816", "P1442", "MIC");
});
$("#info15").on('click',function() {
    document.getElementById("table").style.display = "block";
    getFLightStrip(obj15, "574", "4260", "P1680", "DFW");
});

// pause or continue the animation on #pause click
$("#pause").on('click',function() {
    isPause=true;
});

$("#run").on('click',function(){
    if(isPause == true) {
        isPause = false;
        animate();
    }
});

$("#restart").on('click',function(){
    if(isPause == true) {
        isPause = false;
        animate();
    }
    timer = 0; count = 0;
    resetAllFlight();
    x1=0   ; y1=100;
    x2=0   ; y2=500;
    x3=301 ; y3=303;
    x4=301 ; y4=0;
    x5=301 ; y5=303;
    x6=600 ; y6=500;
    x7=500 ; y7=600;
    x9=75  ; y9=600;
    x8=301 ; y8=303;
    x10=301; y10=303;
    x11=500; y11=0;
    x12=301; y12=303;
    x13=600; y13=303;
    x14=200; y14=0;
    x15=0  ; y15=250;
});

var x1=0   ; var y1=100;
var x2=0   ; var y2=500;
var x3=301 ; var y3=303;
var x4=301 ; var y4=0;
var x5=301 ; var y5=303;
var x6=600 ; var y6=500;
var x7=500 ; var y7=600;
var x9=75  ; var y9=600;
var x8=301 ; var y8=303;
var x10=301; var y10=303;
var x11=500; var y11=0;
var x12=301; var y12=303;
var x13=600; var y13=303;
var x14=200; var y14=0;
var x15=0  ; var y15=250;

function animate() {
    if(timer > 1550){
        isPause = true;
        location.reload();
    }
    if(isPause){return;}
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);

    var multiplier = document.getElementById("multiplier");
    var m = multiplier.value;
    document.getElementById("time").value = getTime(timer);
    displayFlightInfo();
    
    count += .015;
    timer += .0167*m;

    // #1 Flight enroute-1
    if(timer > 65) {
        draw(x1, y1);
        flight(obj1, x1, y1);
        var vx1 = getVx(obj1);
        var vy1 = getVy(obj1);
        x1 += vx1*m;
        y1 -= vy1*m;
    }

    // #2 Flight arrival-1
    if(timer > 120 && obj2.altd > 10){
        draw(x2, y2);
        flight(obj2, x2, y2);
        var vx2 = getVx(obj2);
        var vy2 = getVy(obj2);
        x2 += vx2*m;
        y2 -= vy2*m;
        obj2.speed -= .0032*m/6;
        obj2.altd -= .0033*m;
    }

    // #3 Flight departure-1
    if(timer > 152){
        draw(x3, y3);
        flight(obj3, x3, y3);
        var vx3 = getVx(obj3);
        var vy3 = getVy(obj3);
        x3 += vx3*m;
        y3 -= vy3*m;
        obj3.speed += .0032*m/6;
        obj3.altd += .0032*m;
    }

    // #4 Flight arrival-2
    if(timer > 243 && obj4.altd > 10){
        draw(x4, y4);
        flight(obj4, x4, y4);
        var vx4 = getVx(obj4);
        var vy4 = getVy(obj4);
        x4 += vx4*m;
        y4 -= vy4*m;
        obj4.speed -= .0032*m/6;
        obj4.altd -= .0035*m;
    }

    // #5 Flight departure-2
    if(timer > 288){
        draw(x5, y5);
        flight(obj5, x5, y5);
        var vx5 = getVx(obj5);
        var vy5 = getVy(obj5);
        x5 += vx5*m;
        y5 -= vy5*m;
        obj5.speed += .0032*m/6;
        obj5.altd += .0032*m;
    }

    // #6 Flight enroute-2
    if(timer > 310) {
        draw(x6, y6);
        flight(obj6, x6, y6);
        var vx6 = getVx(obj6);
        var vy6 = getVy(obj6);
        x6 += vx6*m;
        y6 -= vy6*m;
    }

    // #7 Flight arrival-3
    if(timer > 410 && obj7.altd>10){
        draw(x7, y7);
        flight(obj7, x7, y7);
        var vx7 = getVx(obj7);
        var vy7 = getVy(obj7);
        x7 += vx7*m;
        y7 -= vy7*m;
        obj7.speed -= .0031*m/6;
        obj7.altd -= .0031*m;
    }

    // #8 Flight enroute-3
    if(timer > 502) {
        draw(x9, y9);
        flight(obj9, x9, y9);
        var vx9 = getVx(obj9);
        var vy9 = getVy(obj9);
        x9 += vx9*m;
        y9 -= vy9*m;
    }

    // #9 Flight departure-3
    if(timer > 645){
        draw(x8, y8);
        flight(obj8, x8, y8);
        var vx8 = getVx(obj8);
        var vy8 = getVy(obj8);
        x8 += vx8*m;
        y8 -= vy8*m;
        obj8.speed += .0032*m/6;
        obj8.altd += .0032*m;
    }

    // #10 Flight departure-4
    if(timer > 740){
        draw(x10, y10);
        flight(obj10, x10, y10);
        var vx10 = getVx(obj10);
        var vy10 = getVy(obj10);
        x10 += vx10*m;
        y10 -= vy10*m;
        obj10.speed += .0032*m/6;
        obj10.altd += .0032*m;
    }

    // #11 Flight enroute-4
    if(timer > 808) {
        draw(x11, y11);
        flight(obj11, x11, y11);
        var vx11 = getVx(obj11);
        var vy11 = getVy(obj11);
        x11 += vx11*m;
        y11 -= vy11*m;
    }

    // #12 Flight departure-5
    if(timer > 865) {
        draw(x12, y12);
        flight(obj12, x12, y12);
        var vx12 = getVx(obj12);
        var vy12 = getVy(obj12);
        x12 += vx12*m;
        y12 -= vy12*m;
        obj12.speed += .0032*m/6;
        obj12.altd += .0032*m;
    }

    // #13 Flight arrival-4
    if(timer > 910  && obj13.altd > 10) {
        draw(x13, y13);
        flight(obj13, x13, y13);
        var vx13 = getVx(obj13);
        var vy13 = getVy(obj13);
        x13 += vx13*m;
        y13 -= vy13*m;
        obj13.speed -= .0032*m/6;
        obj13.altd -= .0034*m;
    }

    // #14 Flight enroute-5
    if(timer > 934) {
        draw(x14, y14);
        flight(obj14, x14, y14);
        var vx14 = getVx(obj14);
        var vy14 = getVy(obj14);
        x14 += vx14*m;
        y14 -= vy14*m;
    }

    // #15 Flight arrival-5
    if(timer > 1031  && obj15.altd > 12) {
        draw(x15, y15);
        flight(obj15, x15, y15);
        var vx15 = getVx(obj15);
        var vy15 = getVy(obj15);
        x15 += vx15*m;
        y15 -= vy15*m;
        obj15.speed -= .0032*m/6;
        obj15.altd -= .0036*m;
    }
}


function draw(inputX, inputY) {
    c.beginPath();
    c.lineWidth = "1.5";
    c.strokeStyle = "white";
    c.rect(inputX,inputY, 5, 5);
    c.moveTo(inputX+5, inputY)
    c.lineTo(inputX+10,inputY-15)
    c.stroke();
}

function flight(obj, x, y) {
    c.fillStyle = "white";
    c.fillText(obj.airId, x+15, y-15);
    if (count%2 < 1){
        c.fillText(obj.dest, x+12, y-5);
        c.fillText(obj.type, x+38, y-5)
    } else {
        if(Math.round(obj.altd) < 100){
        c.fillText("0".concat(Math.round(obj.altd)), x+12, y-5);
        } else{c.fillText(Math.round(obj.altd), x+12, y-5);}
        c.fillText(Math.round(obj.speed), x+38, y-5);
        c.fillText(obj.class, x+50, y-5);
    } 
}

function getTime(t) {
    var min  = parseInt(t/60);
    var sec = parseInt(t % 60);
    let time = "";
    if(min <10){
        if(sec < 10){time += "0"+min+":0"+sec;}
        else{time += "0"+min+":"+sec;}
    } else {
        if(sec < 10){time += min+":0"+sec;}
        else{time += min+":"+sec;}
    }
    return time;
}

// Return individual flight details
function getFlightInfo(obj, t, route, place) {
    time = getTime(parseInt(t))
    let info = "";
    info += time;
    info += " " + route + " " + obj.airId;
    info += "\t" + obj.type;
    info += " " + obj.dest;
    document.getElementById(place).value = info;
    if(timer > parseInt(t)){
        document.getElementById(place).style.backgroundColor = "#ACD0E8";
    }
}

// Display all flight details
function displayFlightInfo() {
    getFlightInfo(obj1, "65", "E", "info1");
    getFlightInfo(obj2, "120", "A", "info2");
    getFlightInfo(obj3, "152", "D", "info3");
    getFlightInfo(obj4, "243", "A", "info4");
    getFlightInfo(obj5, "288", "D", "info5");
    getFlightInfo(obj6, "310", "E", "info6");
    getFlightInfo(obj7, "410", "A", "info7");
    getFlightInfo(obj9, "502", "E", "info8");
    getFlightInfo(obj8, "645", "D", "info9");
    getFlightInfo(obj10, "740", "D", "info10");
    getFlightInfo(obj11, "808", "E", "info11");
    getFlightInfo(obj12, "865", "D", "info12");
    getFlightInfo(obj13, "910", "A", "info13");
    getFlightInfo(obj14, "934", "E", "info14");
    getFlightInfo(obj15, "1031", "A", "info15");
}

function getFLightStrip(obj, planId, squawk, pTime, dep) {
    document.getElementById("airId").value = obj.airId;
    document.getElementById("type").value = obj.type;
    document.getElementById("planId").value = planId;
    document.getElementById("squawk").value = squawk;
    document.getElementById("pTime").value = pTime;
    let altitude = "";
    if(parseInt(obj.altd) < 100) {
        altitude = "0" + parseInt(obj.altd);
    } else {
        altitude = parseInt(obj.altd);
    }
    document.getElementById("altd").value = altitude;
    document.getElementById("airport").value = dep;
    let route = dep + "  ";
    if(dep != "PHL" && obj.dest!= "PHL") {
        route += "PHL  ";
    }
    route += obj.dest;
    document.getElementById("route").value = route;
}

function getVx(obj) {
    var rads = obj.course * Math.PI / 180;
    var vx = Math.cos(rads)*obj.speed/60;
    return vx/25;
}

function getVy(obj) {
    var rads = obj.course * Math.PI / 180;
    var vy = Math.sin(rads)*obj.speed/60;
    return vy/25;
}

function resetFlight(obj, a, s, c) {
    obj.altd = a;
    obj.speed = s;
    obj.course = c;
}

function resetAllFlight() {
    resetFlight(obj1, 090, 27, 332);
    resetFlight(obj2, 091, 28, 35);
    resetFlight(obj3, 011, 16, 53);
    resetFlight(obj4, 085, 27, 270);
    resetFlight(obj5, 012, 16, 145);
    resetFlight(obj6, 088, 28, 115);
    resetFlight(obj7, 090, 28, 126);
    resetFlight(obj8, 012, 15, 154);
    resetFlight(obj9, 101, 27, 22);
    resetFlight(obj10, 011, 16, 71);
    resetFlight(obj11, 092, 29, 240);
    resetFlight(obj12, 010, 15, 280);
    resetFlight(obj13, 088, 26, 180);
    resetFlight(obj14, 090, 28, 290);
    resetFlight(obj15, 089, 27, 351);
    document.getElementById("info1").style.backgroundColor = "#FFEFCB";
    document.getElementById("info2").style.backgroundColor = "#FFEFCB";
    document.getElementById("info3").style.backgroundColor = "#FFEFCB";
    document.getElementById("info4").style.backgroundColor = "#FFEFCB";
    document.getElementById("info5").style.backgroundColor = "#FFEFCB";
    document.getElementById("info6").style.backgroundColor = "#FFEFCB";
    document.getElementById("info7").style.backgroundColor = "#FFEFCB";
    document.getElementById("info8").style.backgroundColor = "#FFEFCB";
    document.getElementById("info9").style.backgroundColor = "#FFEFCB";
    document.getElementById("info10").style.backgroundColor = "#FFEFCB";
    document.getElementById("info11").style.backgroundColor = "#FFEFCB";
    document.getElementById("info12").style.backgroundColor = "#FFEFCB";
    document.getElementById("info13").style.backgroundColor = "#FFEFCB";
    document.getElementById("info14").style.backgroundColor = "#FFEFCB";
    document.getElementById("info15").style.backgroundColor = "#FFEFCB";
}

animate();