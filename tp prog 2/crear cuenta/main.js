function GuardarDatos() {
    var password = document.getElementById('input6').value;
    var repeatPassword = document.getElementById('input7').value;

    if (password !== repeatPassword) {
        alert("Passwords do not match!");
    } else {
        var lastName = document.getElementById('input1').value;
        var name = document.getElementById('input2').value;
        var direction = document.getElementById('input3').value;
        var dni = document.getElementById('input4').value;
        var email = document.getElementById('input5').value;

        console.log("Last Name:", lastName);
        console.log("Name:", name);
        console.log("Direction:", direction);
        console.log("DNI:", dni);
        console.log("Email:", email);
        console.log("Password:", password);

       
    }
}

function redireccionar(){
	window.location.href ='file:///C:/Users/ibacachea/Documents/GitHub/test/tp%20prog%202/crear%20cuenta/cuenta.html';
}