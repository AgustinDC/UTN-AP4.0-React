function click_suma(){
    
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    document.getElementById("Resultado").innerHTML = parseInt(n1) + parseInt(n2);
}
function click_resta(){
    
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    document.getElementById("Resultado").innerHTML = parseInt(n1) - parseInt(n2);
}
function click_multi(){
    
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    document.getElementById("Resultado").innerHTML = parseInt(n1) * parseInt(n2);
}
function click_div(){
    
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    document.getElementById("Resultado").innerHTML = parseInt(n1) / parseInt(n2);
}
