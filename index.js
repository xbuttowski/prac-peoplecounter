let count = 0; //intialize the count as 0
let countEl = document.getElementById("count-el"); //for the count
let saveEl = document.getElementById("save-el"); //for the save
let totalInput = []; //empty array
let totalEl = document.getElementById("total-el"); //for the total

function increment(){
    count += 1;
    countEl.innerText = count;
}

function remove(){
    count -= 1;
    countEl.innerText = count;
}

function save(){
    let countStr = count;
    let totalNum = 0;
    saveEl.textContent += countStr + " ~ ";
    totalInput.push(countStr); //push the count into the array
    for(let i = 0; i < totalInput.length; i++){
        totalNum += totalInput[i]; //for loop to add up the total
    }
    totalEl.textContent = `People entered in total: ${totalNum}`;
    count = 0;
    countEl.textContent = count;
}

function reset(){
    count = 0; //reset the count to zero
    countEl.textContent = count;
    saveEl.textContent = "Previous entries: ";
    totalNum = 0; //reset the totalNum to zero
    totalInput = []; //empty the array
    totalEl.textContent = `People entered in total: ${totalNum}`;
}

