const inputDiv = document.getElementById("inputs");
const tbody = document.getElementById("tbody");
const blocks = [];
let inputs = localStorage.getItem("inputs");

if(inputs){
    inputs = inputs.split(",");
}else{
    inputs = [];
}

for(let i = 0; i < 25; i++){
    const input = document.createElement("input");
    input.type = "text";
    if(inputs[i]) input.value = inputs[i];
    inputDiv.appendChild(input);
}

for(let i = 0; i < 5; i++){
    const tr = document.createElement("tr");
    for(let j = 0; j < 5; j++){
        const td = document.createElement("td");
        if(i === 2 && j == 2) td.textContent = "Free";
        tr.appendChild(td);
        blocks.push(td);
    }
    tbody.appendChild(tr);
}

const shuffle = (arr)=>{
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
};

document.getElementById("saveInputs").addEventListener("click", ()=>{
    const inputs = document.querySelectorAll("#inputs input");
    let inputString = "";
    for(let i = 0; i < inputs.length; i++){
        if(inputs[i].value === "") continue;
        inputString += `${inputs[i].value},`;
    }
    if(inputString[inputString.length-1] === ",") inputString = inputString.slice(0, -1);
    localStorage.setItem("inputs", inputString);
});

document.getElementById("start").addEventListener("click", ()=>{
    const inputElems = document.querySelectorAll("#inputs input");
    const inputs = [];
    for(let i = 0; i < inputElems.length; i++){
        inputs.push(inputElems[i].value);
    }
    shuffle(inputs);
    const tds = document.querySelectorAll("#tbody td");
    for(let i = 0; i < tds.length; i++){
        tds[i].textContent = inputs[i];
    }
});

for(let i = 0; i < blocks.length; i++){
    blocks[i].addEventListener("click", ()=>{
        let svg = blocks[i].querySelector("svg");
        if(svg){
            blocks[i].removeChild(svg);
        }else{
            let cross = document.getElementById("cross");
            cross = cross.cloneNode(true);
            cross.removeAttribute("id");
            cross.style.display = "block";
            blocks[i].appendChild(cross);
        }
    });
}
