const addItem = document.getElementById("addItem");

addItem.addEventListener('click', event =>{
    console.log("CLICKED"); 
    document.getElementById("overlay").style.display = "block";
});

