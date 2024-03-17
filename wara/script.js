
let count = 0;
let countArray = [];
let counterDisplay = document.getElementById("counterDisplay");
let counterSave = document.getElementById("counterSave");
let counterTotal = document.getElementById("counterTotal");

function increment(){
    count += 1; //increment to 1 in every add button clicked
    counterDisplay.textContent = `Count: ${count}`;

}

function save(){
    let saveCount;
    saveCount = count;
    counterSave.textContent += saveCount + " | ";
    

    let total = 0; //declaring total variable to 0 adding the total entries
    countArray.push(saveCount); //saved entries pushed to countArray
    
    for(let x = 0; x < countArray.length; x++){
        total += countArray[x]; //used for loop for countArray to get the total in every entry or after clicking save button
    }
    counterTotal.textContent = `Total of people entered: ${total}`;
    
    count = 0; //reseting back to zero
    counterDisplay.textContent = `Count: ${count}`;
}

function clearCount(){
    
    counterSave.textContent = "Previous count: " //clearing the save entries
    countArray = []; //empty the array
    counterTotal.textContent = "Total of people entered: 0" //clearing the number of total in every entry

}

