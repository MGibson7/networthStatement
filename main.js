const addItem = document.getElementById("addItem");

addItem.addEventListener('click', event =>{
    console.log("CLICKED"); 
    document.getElementById("overlay").style.display = "grid";
});

const updateAge = document.getElementById("currentAge");

updateAge.addEventListener('click', event =>{
    console.log("CLICKED"); 
    document.getElementById("overlay2").style.display = "grid";
});

let agerange = "24";

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

            let assetDisplay = document.getElementById("assets")
            let existing = assetDisplay.innerHTML
            assetDisplay.innerHTML = `${existing} <div><h3>$</h3><h4>${asset.names}</h4 <h4>${asset.number}</h4></div>`




        }
        else{
            let liability = new Liabilities(`${names.value}`, `${number.value}`, `${type.value}`)
            liabAdded.push(liability)
            liabAmount = liabAmount + parseInt(liability.number)
            console.log(liabAmount)
            total = assetAmount - liabAmount;
            worth.innerText = formatMoney(total);

            let liabDisplay = document.getElementById("liabilities")
            let existing = liabDisplay.innerHTML
            liabDisplay.innerHTML = `${existing} <div><h3>X</h3><h4>${liability.names}</h4 <h4>${liability.number}</h4></div>`
        }
        
        let percent = document.getElementById("percent")
        
            if(agerange == "24"){
                if(total>=435000){
                    percent.innerText = "99%"
                }
                else if(total>=94000){
                    percent.innerText = "90-98%"
                }
                else if(total >= 25000){
                    percent.innerText = "75-89%"
                }
                else if(total >= 8000){
                    percent.innerText = "50-74%"
                }
                else if(total >= -1400){
                    percent.innerText = "25-49%"
                }
                else{
                    percent.innerText = "<25%"
                }
            }
            else if(agerange == "29"){
                if(total>=606000){
                    percent.innerText = "99%"
                }
                else if(total>=152000){
                    percent.innerText = "90-98%"
                }
                else if(total >= 61000){
                    percent.innerText = "75-89%"
                }
                else if(total >= 7500){
                    percent.innerText = "50-74%"
                }
                else if(total >= -3600){
                    percent.innerText = "25-49%"
                }
                else{
                    percent.innerText = "<25%"
                }
            }
            else if(agerange == "34"){
                if(total>=956000){
                    percent.innerText ="99%"
                }
                else if(total>=258000){
                    percent.innerText = "90-98%"
                }
                else if(total >= 117000){
                    percent.innerText = "75-89%"
                }
                else if(total >= 35000){
                    percent.innerText = "50-74%"
                }
                else if(total >= 2700){
                    percent.innerText = "25-49%"
                }
                else{
                    percent.innerText = "<25%"
                }
            }
            else if(agerange == "39"){
                if(total>=4000000){
                    percent.innerText = "99%"
                }
                else if(total>=601000){
                    percent.innerText = "90-98%"
                }
                else if(total >= 228000){
                    percent.innerText = "75-89%"
                }
                else if(total >= 55000){
                    percent.innerText = "50-74%"
                }
                else if(total >= 5100){
                    percent.innerText = "25-49%"
                }
                else{
                    percent.innerText = "<25%"
                }
            }
            else if(agerange == "44"){
                if(total>=7900000){
                    percent.innerText = "99%"
                }
                else if(total>=848000){
                    percent.innerText = "90-98%"
                }
                else if(total >= 351000){
                    percent.innerText = "75-89%"
                }
                else if(total >= 127000){
                    percent.innerText = "50-74%"
                }
                else if(total >= 18000){
                    percent.innerText = "25-49%"
                }
                else{
                    percent.innerText = "<25%"
                }
            }
            else if(agerange == "49"){
                if(total>=11000000){
                    percent.innerText = "99%"
                }
                else if(total>=1300000){
                    percent.innerText = "90-98%"
                }
                else if(total >= 452000){
                    percent.innerText = "75-89%"
                }
                else if(total >= 164000){
                    percent.innerText = "50-74%"
                }
                else if(total >= 19000){
                    percent.innerText = "25-49%"
                }
                else{
                    percent.innerText = "<25%"
                }
            }
            else if(agerange == "54"){
                if(total>=11000000){
                    percent.innerText = "99%"
                }
                else if(total>=1400000){
                    percent.innerText = "90-98%"
                }
                else if(total >= 493000){
                    percent.innerText = "75-89%"
                }
                else if(total >= 171000){
                    percent.innerText = "50-74%"
                }
                else if(total >= 38900){
                    percent.innerText = "25-49%"
                }
                else{
                    percent.innerText= "<25%"
                }
            }
            else if(agerange == "59"){
                if(total>=11000000){
                    percent.innerText = "99%"
                }
                else if(total>=2500000){
                    percent.innerText = "90-98%"
                }
                else if(total >= 644000){
                    percent.innerText = "75-89%"
                }
                else if(total >= 193000){
                    percent.innerText = "50-74%"
                }
                else if(total >= 38800){
                    percent.innerText = "25-49%"
                }
                else{
                    percent.innerText = "<25%"
                }
            }
            else{
                if(total>=11000000){
                    percent.innerText = "99%"
                }
                else if(total>=1900000){
                    percent.innerText ="90-98%"
                }
                else if(total >= 735000){
                    percent.innerText = "75-89%"
                }
                else if(total >= 228000){
                    percent.innerText = "50-74%"
                }
                else if(total >= 48800){
                    percent.innerText = "25-49%"
                }
                else{
                    percent.innerText = "<25%"
                }
            }
        document.getElementById("overlay").style.display = "none";

        


})

const form2 = document.getElementById("agerange");
form2.addEventListener('submit', event =>{
    let form2 = document.getElementById("agerange");
        let agerangeele = form2.elements['age'];
        agerange = agerangeele.value
        let percent = document.getElementById("percent")
        let displayage = document.getElementById("displayAge")
        
            if(agerange == "24"){
                displayage.innerText= "Age 18-24";
                if(total>=435000){
                    percent.innerText = "99%"
                }
                else if(total>=94000){
                    percent.innerText = "90-98%"
                }
                else if(total >= 25000){
                    percent.innerText = "75-89%"
                }
                else if(total >= 8000){
                    percent.innerText = "50-74%"
                }
                else if(total >= -1400){
                    percent.innerText = "25-49%"
                }
                else{
                    percent.innerText = "<25%"
                }
            }
            else if(agerange == "29"){
                displayage.innerText ="Age 25-29";
                if(total>=606000){
                    percent.innerText = "99%"
                }
                else if(total>=152000){
                    percent.innerText = "90-98%"
                }
                else if(total >= 61000){
                    percent.innerText = "75-89%"
                }
                else if(total >= 7500){
                    percent.innerText = "50-74%"
                }
                else if(total >= -3600){
                    percent.innerText = "25-49%"
                }
                else{
                    percent.innerText = "<25%"
                }
            }
            else if(agerange == "34"){
                displayage.innerText = "Age 30-34";
                if(total>=956000){
                    percent.innerText ="99%"
                }
                else if(total>=258000){
                    percent.innerText = "90-98%"
                }
                else if(total >= 117000){
                    percent.innerText = "75-89%"
                }
                else if(total >= 35000){
                    percent.innerText = "50-74%"
                }
                else if(total >= 2700){
                    percent.innerText = "25-49%"
                }
                else{
                    percent.innerText = "<25%"
                }
            }
            else if(agerange == "39"){
                displayage.innerText = "Age 35-39";
                if(total>=4000000){
                    percent.innerText = "99%"
                }
                else if(total>=601000){
                    percent.innerText = "90-98%"
                }
                else if(total >= 228000){
                    percent.innerText = "75-89%"
                }
                else if(total >= 55000){
                    percent.innerText = "50-74%"
                }
                else if(total >= 5100){
                    percent.innerText = "25-49%"
                }
                else{
                    percent.innerText = "<25%"
                }
            }
            else if(agerange == "44"){
                displayage.innerText = "Age 40-44";
                if(total>=7900000){
                    percent.innerText = "99%"
                }
                else if(total>=848000){
                    percent.innerText = "90-98%"
                }
                else if(total >= 351000){
                    percent.innerText = "75-89%"
                }
                else if(total >= 127000){
                    percent.innerText = "50-74%"
                }
                else if(total >= 18000){
                    percent.innerText = "25-49%"
                }
                else{
                    percent.innerText = "<25%"
                }
            }
            else if(agerange == "49"){
                displayage.innerText = "Age 44-49";
                if(total>=11000000){
                    percent.innerText = "99%"
                }
                else if(total>=1300000){
                    percent.innerText = "90-98%"
                }
                else if(total >= 452000){
                    percent.innerText = "75-89%"
                }
                else if(total >= 164000){
                    percent.innerText = "50-74%"
                }
                else if(total >= 19000){
                    percent.innerText = "25-49%"
                }
                else{
                    percent.innerText = "<25%"
                }
            }
            else if(agerange == "54"){
                displayage.innerText = "Age 50-54";
                if(total>=11000000){
                    percent.innerText = "99%"
                }
                else if(total>=1400000){
                    percent.innerText = "90-98%"
                }
                else if(total >= 493000){
                    percent.innerText = "75-89%"
                }
                else if(total >= 171000){
                    percent.innerText = "50-74%"
                }
                else if(total >= 38900){
                    percent.innerText = "25-49%"
                }
                else{
                    percent.innerText= "<25%"
                }
            }
            else if(agerange == "59"){
                displayage.innerText = "Age 55-59";
                if(total>=11000000){
                    percent.innerText = "99%"
                }
                else if(total>=2500000){
                    percent.innerText = "90-98%"
                }
                else if(total >= 644000){
                    percent.innerText = "75-89%"
                }
                else if(total >= 193000){
                    percent.innerText = "50-74%"
                }
                else if(total >= 38800){
                    percent.innerText = "25-49%"
                }
                else{
                    percent.innerText = "<25%"
                }
            }
            else{
                displayage.innerText = "Age 60+";
                if(total>=11000000){
                    percent.innerText = "99%"
                }
                else if(total>=1900000){
                    percent.innerText ="90-98%"
                }
                else if(total >= 735000){
                    percent.innerText = "75-89%"
                }
                else if(total >= 228000){
                    percent.innerText = "50-74%"
                }
                else if(total >= 48800){
                    percent.innerText = "25-49%"
                }
                else{
                    percent.innerText = "<25%"
                }
            }
        document.getElementById("overlay2").style.display = "none";


})
