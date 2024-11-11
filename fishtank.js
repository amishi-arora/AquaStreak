var backbutton = document.getElementById("backbutton"); 

var xbutton = document.getElementById("xbutton"); 

var incrementcount = document.getElementById("counter"); 
var countnum = parseInt(document.getElementById('number'));
var tankone = document.getElementById('fishone');
var tanktwo = document.getElementById('fishtwo');
var tankthree = document.getElementById('fishthree');
var tankfour = document.getElementById('fishfour');
var tankfive = document.getElementById('fishfive');
var tanksix = document.getElementById('fishsix');
var tankseven = document.getElementById('fishseven');
var tankeight = document.getElementById('fisheight');
var tanknine = document.getElementById('fishnine');
var tankten = document.getElementById('fishten');
var tankeleven = document.getElementById('fisheleven');
var tanktwelve = document.getElementById('fishtwelve');
var tankthirteen = document.getElementById('fishthirteen');
var tankfourteen = document.getElementById('fishfourteen');

function updateDateTime() {
    const now = new Date(); 
    var format = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    var currentDate = now.toLocaleDateString('en-US', format);
    document.querySelector('#datetime').textContent = currentDate;
}
setInterval(updateDateTime(), 1000); 



xbutton.onclick = function() {
    document.getElementById("popup").style.visibility = 'hidden'; 

}

incrementcount.onclick = function() {
    countnum = isNaN(countnum) ? 0 : countnum;
    countnum++;
    document.getElementById('number').value = countnum; 
    if (countnum == 1) {   
        var fishImage = document.createElement('img'); 
        fishImage.src = "fish icon 1.png";
        tankone.appendChild(fishImage);
    } else if (countnum == 2) {
        var fishImage = document.createElement('img'); 
        fishImage.src = "fish icon 2.png";
        tanktwo.appendChild(fishImage);
    } else if (countnum == 3) {
        var fishImage = document.createElement('img'); 
        fishImage.src = "fish icon 3.png";
        tankthree.appendChild(fishImage);
    } else if (countnum == 4) {
        var fishImage = document.createElement('img'); 
        fishImage.src = "plant icon 1.png";
        tankfour.appendChild(fishImage);
    } else if (countnum == 5) {
        var fishImage = document.createElement('img'); 
        fishImage.src = "shell icon 1.png";
        tankfive.appendChild(fishImage);
    } else if (countnum == 6) {
        var fishImage = document.createElement('img'); 
        fishImage.src = "fish icon 1.png";
        tanksix.appendChild(fishImage);
    } else if (countnum == 7) {
        var fishImage = document.createElement('img'); 
        fishImage.src = "fish icon 2.png";
        tankseven.appendChild(fishImage);
    } else if (countnum == 8) {
        var fishImage = document.createElement('img'); 
        fishImage.src = "fish icon 3.png";
        tankeight.appendChild(fishImage);
    } else if (countnum == 9) {
        var fishImage = document.createElement('img'); 
        fishImage.src = "plant icon 1.png";
        tanknine.appendChild(fishImage);
    } else if (countnum == 10) {
        var fishImage = document.createElement('img'); 
        fishImage.src = "shell icon 1.png";
        tankten.appendChild(fishImage);
    } else if (countnum == 11) {
        var fishImage = document.createElement('img'); 
        fishImage.src = "fish icon 1.png";
        tankeleven.appendChild(fishImage);
    } else if (countnum == 12) {
        var fishImage = document.createElement('img'); 
        fishImage.src = "fish icon 2.png";
        tanktwelve.appendChild(fishImage);
    } else if (countnum == 13) {
        var fishImage = document.createElement('img'); 
        fishImage.src = "fish icon 3.png";
        tankthirteen.appendChild(fishImage);
    } else if (countnum == 14) {
        var fishImage = document.createElement('img'); 
        fishImage.src = "fish icon 1.png";
        tankfourteen.appendChild(fishImage);
        document.getElementById("popup").style.visibility = 'visible'; 
    } 
    
}


backbutton.onclick = function() {
    history.back(); 
    console.log("hello"); 
}