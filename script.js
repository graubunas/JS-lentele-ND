var vardas = document.getElementById("vardas")
var pavarde = document.getElementById("pavarde")
var amzius = document.getElementById("amzius")
var add = document.getElementById("add")
var removeF = document.getElementById("removeF")
var removeL = document.getElementById("removeL")
var table = document.getElementById("table")

add.addEventListener("click", function(){
    if(vardas.value, pavarde.value, amzius.value > 0) {
        var row = table.insertRow(table.length)
        var cell1 = row.insertCell(0)
        var cell2 = row.insertCell(1)
        var cell3 = row.insertCell(2)           
    } else {
        alert("įveskite duomenis")
    } 
        cell1.innerHTML = vardas.value   
        cell2.innerHTML = pavarde.value
        cell3.innerHTML = amzius.value
        vardas.value = ""
        pavarde.value = ""
        amzius.value = "" 
})

removeF.addEventListener("click", function(){
    if(table){
    document.getElementById("table").deleteRow(1) 
    } else {
        alert("Nebėra ką trinti.")
    } 
})

removeL.addEventListener("click", function(){
    if(table){
        document.getElementById("table").deleteRow(-1)
    } else {
        alert("Nebėra ką trinti.")
    } 
})