
// document.getElementById("count-el").innerText =5;

// initialize the count as 0
// liste for clikcs on the increment button
//increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count 

let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el")

let count = 0; 
function increment() {
    count += 1; // is the same as count = count + 1
    countEl.innerText = count;// we should use .textContent
}


function save () {
    let savedEntries = count + "-"
    saveEl.innerText = saveEl.innerText + savedEntries // or saveEl.innerText += savedEntries 
    count = 0; 
    countEl.textContent = "0" ;
}


