function showModal(){
    var element = document.getElementById("modal")
    element.classList.add("show-Modal");
    

}

let checkbox = document.getElementById('termos_de_contrato');

if(checkbox.checked) {
    console.log("O cliente marcou o checkbox");
} else {
    console.log("O cliente não marcou o checkbox");
}
