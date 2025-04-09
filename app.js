let count = 0;
let previousCounts =[];

function updateDisplay(){
    document.getElementById('clickCount').textContent =  `Has hecho ${count} clicks.`;
    if (count == 10){
        alert("Haz alcanzado 10 clicks");
    }
}

function incrementCount(){
    previousCounts.push(count);
    count++;
    updateDisplay();
}

function resetCount() {
    previousCounts.push(count);
    count = 0;
    updateDisplay();
}


//Eventos de los Botones
document.getElementById('clickButton').addEventListener('click',incrementCount);
document.getElementById('resetButton').addEventListener('click',resetCount);