let hearts = 0;
let coins = 100; 
let copies = 0;

function increaseHeart (){
    hearts++;
    document.getElementById("heartCount")
    .innerText =hearts
}


function copyNumber (num){
    navigator.clipboard.writeText(num);
    alert("Number Copied:" + num);

    copies++
    document.getElementById("copyCount")
    .innerText = copies;
}
function makeCall (name, number){
    if (coins <20){
        alert("Not enough coins! You need 20 coins to call.");
        return;
    }

    coins -= 20;
    document.getElementById("coinCount")
    .innerText = coins;

    alert(`Calling ${name} (${number})`);

        const now = new Date();
        const date = now.toLocaleDateString();        
        const time = now.toLocaleTimeString();        
        const li = document.createElement("li");
        li.innerHTML =
            name + " — <b>" + number + "</b><br>" +
            "<span class='text-xs text-gray-400'>" + date + " • " + time + "</span>";
    document.getElementById("historyList")
    .appendChild(li);
}
function clearHistory (){
    document.getElementById("historyList")
    .innerHTML ="";
}