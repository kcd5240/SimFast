const obj1 = {airId:"EJA363", dest:"FLL", type:"E55P", altd:090, speed:27, class:"E E"};
const obj2 = {airId:"FFT2378", dest:"PHL", type:"A321", altd:091, speed:28, class:"F"};
const obj3 = {airId:"N300GB", dest:"MIA", type:"BE40", altd:011, speed:16, class:"C"};
const obj4 = {airId:"AAL2189", dest:"PHL", type:"A319", altd:090, speed:27, class:"C"};
const obj5 = {airId:"FFT108", dest:"SJU", type:"A321", altd:010, speed:16, class:"F E"};
const obj6 = {airId:"GPD816", dest:"OXC", type:"PC12", altd:089, speed:28, class:"B"};
const obj7 = {airId:"DAL2942", dest:"PHL", type:"B739", altd:090, speed:28, class:"E E"};
const obj8 = {airId:"AAL646", dest:"PHX", type:"A21N", altd:010, speed:15, class:"C"};
const obj9 = {airId:"DAL8839", dest:"BOS", type:"B752", altd:101, speed:27, class:"E F"};
const obj10 = {airId:"JIA5358", dest:"MSP", type:"CRJ9", altd:011, speed:16, class:"B"};

var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");
var count = 0;
var timer = 0;
var isPause = false;

// pause or continue the animation on #pause click
$("#pause").on('click',function(){
    if(isPause == false) {
        isPause=true;
    } else {
        isPause = false;
        requestAnimationFrame(animate);
    }
});
    
var x1=0; var y1=100;
var x2=0; var y2=500;
var x3=301; var y3=303;
var x4=301; var y4=0;
var x5=301; var y5=303;
var x6=600; var y6=500;
var x7=500; var y7=600;
var x8=301; var y8=303;
var x9=75; var y9=600;
var x10=301; var y10=303;

function animate() {
    if(timer > 1000){location.reload();}
    if(isPause){return;}
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);

    var multiplier = document.getElementById("multiplier");
    var m = multiplier.value;
    getTime();
//    c.fillStyle = "white" ;
//    c.fillText(Math.round(timer), 500, 100);
    
    count += .015;
    timer += .0167*m;
    
    // #1 Flight enroute-1
    draw(x1, y1);
    flight(obj1, x1, y1);
    x1 += .017*m;
    y1 += .009*m;
    
    // #2 Flight arrival-1
    if(timer > 60 && timer<395){
        draw(x2, y2);
        flight(obj2, x2, y2);
        x2 += .014*m;
        y2 -= .01*m;
        obj2.speed -= (.004*m/6);
        obj2.altd -= .004*m;
    }
    
    // #3 Flight departure-1
    if(timer > 92){
        draw(x3, y3);
        flight(obj3, x3, y3);
        x3 += .01*m;
        y3 -= .014*m;
        obj3.speed += (.004*m/7);
        obj3.altd += .004*m;
    }
    
    // #4 Flight arrival-2
    if(timer > 183 && timer<518){
        draw(x4, y4);
        flight(obj4, x4, y4);
        y4 += .015*m;
        obj4.speed -= (.004*m/7);
        obj4.altd -= .004*m;
    }
    
    // #5 Flight departure-2
    if(timer > 228){
        draw(x5, y5);
        flight(obj5, x5, y5);
        x5 -= .016*m;
        y5 -= .012*m;
        obj5.speed += (.004*m/7);
        obj5.altd += .004*m;
    }
    
    // #6 Flight enroute-2
    if(timer > 250) {
        draw(x6, y6);
        flight(obj6, x6, y6);
        x6 -= .009*m;
        y6 -= .018*m;
    }
    
    // #7 Flight arrival-3
    if(timer > 350 && timer<683){
        draw(x7, y7);
        flight(obj7, x7, y7);
        x7 -= .01*m;
        y7 -= .015*m;
        obj7.speed -= (.004*m/7);
        obj7.altd -= .004*m;
    }
    
    // #8 Flight departure-3
    if(timer > 438){
        draw(x8, y8);
        flight(obj8, x8, y8);
        x8 -= .017*m;
        y8 -= .005*m;
        obj8.speed += (.004*m/7);
        obj8.altd += .004*m;
    }
    
    // #9 Flight enroute-3
    if(timer > 442 && timer<550) {
        draw(x9, y9);
        flight(obj9, x9, y9);
        x9 += .006*m;
        y9 -= .018*m;
    }
    if(timer > 550) {
        draw(x9, y9);
        flight(obj9, x9, y9);
        x9 += .018*m;
        y9 -= .006*m;
        obj9.altd -= .0003*m;
    }
    
    // #10 Flight departure-4
    if(timer > 555){
        draw(x10, y10);
        flight(obj10, x10, y10);
        x10 += .006*m;
        y10 -= .018*m;
        obj10.speed += (.004*m/7);
        obj10.altd += .004*m;
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

function getTime() {
    var min  = parseInt(timer/60);
    var sec = parseInt(timer % 60);
    let time = "";
    if(min <10){
        if(sec < 10){time = "0"+min+":0"+sec;}
        else{time = "0"+min+":"+sec;} 
    } else {
        if(sec < 10){time = min+":0"+sec;}
        else{time = min+":"+sec;} 
    }
    document.getElementById("time").value = time;
}
animate();