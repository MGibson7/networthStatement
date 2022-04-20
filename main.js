const addItem = document.getElementById("addItem");

addItem.addEventListener('click', event =>{
    console.log("CLICKED"); 
    document.getElementById("overlay").style.display = "grid";
});

//store user input
let assetsAdded = []
let liabAdded = []

//constructor for assets and liabilities
function Assets(names, number, type){
    this.names = names;
    this.number = number;
    this.type = type;
}

function Liabilities(names, number, type){
    this.names = names;
    this.number = number;
    this.type = type;
}

let assetAmount = 0
let liabAmount = 0
let total = 0
function formatMoney(number) {
    return number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  }

//function that takes user input and puts it into array
const form = document.getElementById("itemAdding");
form.addEventListener('submit', event =>{
        let form = document.getElementById("itemAdding");
        let item = form.elements['type'];
        let names = form.elements["name"];

        if(item.value == "asset"){
            let asset = new Assets(`${names.value}`, `${number.value}`, `${type.value}`);
            assetsAdded.push(asset);
            assetAmount = assetAmount + parseInt(asset.number);
            console.log(assetAmount);
            let worth = document.getElementById("worth");
            total = assetAmount - liabAmount;

            
            worth.innerText = formatMoney(total);


        }
        else{
            let liability = new Liabilities(`${names.value}`, `${number.value}`, `${type.value}`)
            liabAdded.push(liability)
            liabAmount = liabAmount + parseInt(liability.number)
            console.log(liabAmount)
            total = assetAmount - liabAmount;
            worth.innerText = formatMoney(total);
        }
        document.getElementById("overlay").style.display = "none";

        


})


