const obj1 = {airId:"EJA363", dest:"FLL", type:"E55P", altd:090, speed:27, class:"E E"};
const obj2 = {airId:"FFT2378", dest:"PHL", type:"A321", altd:091, speed:28, class:"F"};
const obj3 = {airId:"N300GB", dest:"MIA", type:"BE40", altd:011, speed:16, class:"C"};
const obj4 = {airId:"AAL2189", dest:"PHL", type:"A319", altd:090, speed:27, class:"C"};

//const obj5 = {airId:"FFT108", dest:"SJU", type:"A321", altd:"090", speed:"27", class:"F E"};

// const obj6 = {airId:"N536SP", dest:"LUK", type:"C172", altd:"090", speed:"11", class:"D"};

// const obj7 = {airId:"N536SP", dest:"LUK", type:"C172", altd:"090", speed:"11", class:"D"};

//const obj8 = {airId:"DAL8839", dest:"BOS", type:"B752", altd:"090", speed:"27", class:"E F"};

// const obj9 = {airId:"N536SP", dest:"LUK", type:"C172", altd:"090", speed:"11", class:"D"};

//const obj10 = {airId:"DAL2942", dest:"PHL", type:"B739", altd:"090", speed:"11", class:"D"};

var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");
var multiplier = document.getElementById("multiplier");
var m = multiplier.value;
var count = 0;
var timer = 0
    
var x1=0; var y1 =100;
var x2=0; var y2 =500;
var x3=301; var y3 =303;

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    c.fillStyle = "white" ;
    c.fillText(Math.round(timer), 500, 100);
    
    count += .015;
    timer += .01*m;
    
    // #1 Flight enroute
    draw(x1, y1);
    flight(obj1, x1, y1);
    x1 += .017*m;
    y1 += .012*m;
    
    // #2 Flight arrival
    if(timer > 35 && timer<236){
        draw(x2, y2);
        flight(obj2, x2, y2);
        x2 += .014*m;
        y2 -= .01*m;
        obj2.speed -= (.004*m/6);
        obj2.altd -= .004*m;
    }
    
    // #3 Flight departure
    if(timer > 55){
        draw(x3, y3);
        flight(obj3, x3, y3);
        x3 += .01*m;
        y3 -= .014*m;
        obj3.speed += (.004*m/7);
        obj3.altd += .004*m;
    }
}


function draw(inputX, inputY) {
    c.beginPath();
    c.lineWidth = "1.5";
    c.strokeStyle = "white";
    c.rect(inputX,inputY, 5, 5);  
    c.stroke();
}

function flight(obj, x, y) {
    c.fillStyle = "white" ;
    c.fillText(obj.airId, x+15, y-15);
    if (count%2 < 1){
        c.fillText(obj.dest, x+12, y-5);
        c.fillText(obj.type, x+38, y-5)
    } else {
        c.fillText("0".concat(Math.round(obj.altd)), x+12, y-5);
        c.fillText(Math.round(obj.speed), x+38, y-5);
        c.fillText(obj.class, x+50, y-5);
    } 
}

animate();
