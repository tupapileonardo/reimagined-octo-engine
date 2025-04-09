let count = 0;
let previousCounts =[];

function updateDisplay(){
    document.getElementById('clickCount').textContent =  `Has hecho ${count} clicks.`;
    if (count == 10){
        alert("Haz alcanzado 10 clicks");
    }
}