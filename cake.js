function makeWishes() {
    document.getElementById("wish-container").style.display = "block";
    document.getElementById("wish").style.display = "none";
    document.getElementById("blow-out").style.display = "block";
}

function blowOutCandle() {
    document.querySelector('.flame').style.display='none'; 
    document.querySelector('.wish').style.display='none';
    document.getElementById("wish-container").style.display = "none";
}