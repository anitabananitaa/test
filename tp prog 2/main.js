let materias=[]
function escribir(materias){
	const divContenedorM = document.getElementById('contenedorM');
	limpiar();
	materias.forEach((materia, index) =>{

	
		const promedio = materia.notas.reduce((acu, calif ) => acu + calif, 0) /materia.notas.length;

		console.log(promedio) 

		const materiasHTML = `<div class="Cuadradito">
			<span onclick="eliminar(${index})" class="EliminarMateria"> x </span>
			<span>${materia.nombre}</span>
			<span>${materia.docente}, ${materia.hsCatedras}</span>
			<span>cod: ${materia.codigo} - ${materia.notas}</span>
			<span>prom: ${promedio} </span>
			</div>`

	divContenedorM.innerHTML += materiasHTML;
	} )
}

function agregarN(nota){
	const divContenedorNotas = document.getElementById('ContenedorNotas');
	const notaHTML = `<input type="number" name="nota" class="num">`

	divContenedorNotas.innerHTML += notaHTML;
}
	
function eliminar(index){
	materias.splice(index, 1);
	escribir(materias);

}
function limpiar(){
	const divContenedorM = document.getElementById('contenedorM');
	divContenedorM.innerHTML = "";

}

function eliminarTodos(){
	materias = [];
	limpiar();
}

function guardarMaterias(materia){
	const apiUrl = 'http://192.168.0.196:3010/api/materias';

	axios.post(apiUrl, materia)
	.then((response) => {
		console.log('Materia guardada:', response.data);

	})
	.catch((error) =>{
		console.error('Error al guardar la materia', error);
	});
}


function alerta(){
	const nombre = document.getElementById('materia').value;
	const docente = document.getElementById('docente').value;
	const hsCatedras = document.getElementById('horas').value;
	const codigo = document.getElementById('codigo').value;
	const notasHTML = [...document.getElementsByName('nota')];
	
	const notas = notasHTML.map(nota => parseInt(nota.value));

	const materia = {
		nombre,
		docente,
		hsCatedras,
		codigo,
		notas
		
		
	}
	guardarMaterias(materia)

}

function moverCur(event, campoSiguiente) {
	if (event.keyCode === 13 ) {
		document.getElementById(campoSiguiente).focus();
		event.preventDefault();
	}
}
