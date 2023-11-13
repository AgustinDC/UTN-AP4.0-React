function mostrar(){

    switch (document.getElementById("select").value) {
        case 'basico':
            document.getElementById("resultado").innerHTML = 'Basico $500';
            break;
        case 'inter':
            document.getElementById("resultado").innerHTML = 'Intermedio: $1000';
            break;
        case 'full':
            document.getElementById("resultado").innerHTML = 'Premium: $1500';
            break;
        }
        
}