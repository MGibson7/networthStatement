const addItem = document.getElementById("addItem");

addItem.addEventListener('click', event =>{
    console.log("CLICKED"); 
    document.getElementById("overlay").style.display = "grid";
});

//store user input
let assets = []
let liabilities = []

//function that takes user input and puts it into array
const form = document.getElementById("itemAdding");
form.addEventListener('submit', event =>{
        let form = document.getElementById("itemAdding");
        let item = form.elements['type'];
        if(item.value == "asset"){
            console.log("asset");
        }


})


