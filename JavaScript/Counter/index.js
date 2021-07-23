
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
    count += 1;
    countEl.textContent = count;
    console.log(count);
}

function save() {
    let saveValue = count + " - ";
    let saveEl = document.getElementById("save-el");
    saveEl.textContent += saveValue;
    console.log("count reset"); 
    countEl.textContent = 0;
    count = 0;
}