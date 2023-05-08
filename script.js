// Tarea asignada por Ricardo Sibú, hermano conocido en la iglesia bautista Jesucristo es el camino, en donde se incentiva a guardar datos dentro de objetos y renderizarlos en el DOM con JavaScript nativo. 
// Fecha de asignación: 2023-01-05
// Fecha de culminación: 2023-01-08
let user = {
	name: "Gabriel", 
	lastname: "Sifontes", 
	bornAge: "21 años (marzo 28, 2001)", 
	email: "garbellsteek@gmail.com", 
	phoneNumber: "+58 424-8199181", 
	skills: [ 
		{ name: "JavaScript",  perProg: 75, }, 
		{ name: "HTML",  perProg: 70, }, 
		{ name: "CSS",  perProg: 10, }, 
		{ name: "Word",  perProg: 80, }, 
		{ name: "Excel",  perProg: 30, }, 
	], 
	education: [
		{ 
			title: "Ingeniero en Informática", 
			status: "on course", 
			dateStart: { day: undefined, month: undefined, year: 2019, }, 
			dateEnd: { day: undefined, month: undefined, year: 2023, status: "no same than start"}, 
			date: "2019 → 2023 (en curso)", 
			description: "Cursando 8/8 semestre de PNF Ingeniería en Informática en la Universidad Politécnica Territorial José Antonio Anzoátegui (UPTJAA) - Sede Barcelona.", 
		}, 
		{ 
			title: "Bachiller en Ciencias", 
			status: "finished", 
			dateStart: { day: undefined, month: undefined, year: 2013, }, 
			dateEnd: { day: undefined, month: undefined, year: 2018, status: "no same than start"}, 
			date: "2013 → 2018", 
			description: "Graduado en la Promoción XII de la U.E. “Dr. José Bernardo Gómez” - Barcelona" 
		}, 
	], 
	experience: [
		{ 
			title: "Baterista – Iglesia Bautista Jesucristo es el camino (IBJEEC).", 
			status: "active", 
			date: "2018 → 2023 (activo)",
			description: "Creador de línea de percusión y baterista más frecuente en el equipo de músicos adoradores eclesiásticos.", 
		}, 
		{ 
			title: "Organizador, manejo y mezcla de sonido - IBJEEC.", 
			status: "active", 
			date: "2016 → 2023 (activo)", 
			description: "Encargado general de detalles técnicos en la emisión de sonido de intrumentos y voces de una iglesia cristiana evangélica.", 
		}, 
		{ 
			title: "Diseñador visual de documento – IBJEEC.", 
			status: "no active", 
			dateStart: { day: 18, month: 08, year: 2022, }, 
			dateEnd: { day: undefined, month: undefined, year: undefined, status: "same than start", }, 
			date: "2022, agosto 18", 
			description: "Rediseño de material discipulado “Sígueme Uno” (edición original), llevado de vista de libro a vista para teléfonos, en formato de archivo pdf, para una iglesia.", 
		}, 
		{ 
			title: "Vigilante nocturno – IBJEEC.", 
			status: "no active", 
			dateStart: { day: undefined, month: 12, year: 2021, }, 
			dateEnd: { day: undefined, month: undefined, year: undefined, status: "same than start", }, 
			date: "2021, diciembre", 
			description: undefined, 
		}, 
		{ 
			title: "Transcriptor de documento – IBJEEC.", 
			status: "no active", 
			dateStart: { day: undefined, month: 10, year: 2021, }, 
			dateEnd: { day: undefined, month: 11, year: 2021, status: "no same than start", }, 
			date: "2021, octubre → 2021, noviembre", 
			description: "Transcripción de material discipulado “Sígueme Uno” (edición original), llevado de 101 páginas de desarrollo a 41, en formato de archivo pdf, para una iglesia.", 
		}, 
		{ 
			title: "Vigilante nocturno – IBJEEC.", 
			status: "no active", 
			dateStart: { day: undefined, month: 08, year: 2021, }, 
			dateEnd: { day: undefined, month: undefined, year: undefined, status: "same than start", }, 
			date: "2021, agosto", 
			description: "Transcripción de material discipulado “Sígueme Uno” (edición original), llevado de 101 páginas de desarrollo a 41, en formato de archivo pdf, para una iglesia.", 
		}, 
		{ 
			title: "Grabador de sonido, vídeo, asistente de cámara y fotógrafo – TV Puerto.", 
			status: "no active", 
			dateStart: { day: undefined, month: undefined, year: 2016, }, 
			dateEnd: { day: undefined, month: 01, year: 2018, status: "same than start", }, 
			date: "2016 → 2018", 
			description: "Ayudante aprendiz en diferentes áreas audiovisuales de una televisora de la ciudad.", 
		}, 
	], 
	coursesFinished: [
		{ 
			title: "Curso de JavaScript - Sololearn.", 
			dateStart: { day: undefined, month: undefined, year: undefined, }, 
			dateEnd: { day: undefined, month: undefined, year: 2022, }, 
			date: "2022", 
			description: "", 
		}, 
		{
			title: "Curso de Excel COMPLETO y GRATIS – Dostin Hurtado.", 
			dateStart: { day: undefined, month: undefined, year: undefined, }, 
			dateEnd: { day: undefined, month: undefined, year: 2021, }, 
			date: "2021", 
			description: "", 
		}, 
		{
			title: "Curso de JAVASCRIPT desde CERO (Completo) Nivel JUNIOR – Soy Dalto.", 
			dateStart: { day: undefined, month: undefined, year: undefined, }, 
			dateEnd: { day: undefined, month: undefined, year: 2021, }, 
			date: "2021", 
			description: "", 
		}, 
		{
			title: "Escuela de Liderazgo – Unión Nacional Bautista de Jóvenes.", 
			dateStart: { day: undefined, month: undefined, year: undefined, }, 
			dateEnd: { day: undefined, month: undefined, year: 2020, }, 
			date: "2020", 
			description: "", 
		}, 
		{
			title: "JavaScript Desde Cero (gratis) – EDteam.", 
			dateStart: { day: undefined, month: undefined, year: undefined, }, 
			dateEnd: { day: undefined, month: undefined, year: 2020, }, 
			date: "2020", 
			description: "", 
		}, 
		{
			title: "HTML desde cero (gratis) – EDteam.", 
			dateStart: { day: undefined, month: undefined, year: undefined, }, 
			dateEnd: { day: undefined, month: undefined, year: 2020, }, 
			date: "2020", 
			description: "", 
		}, 
		{
			title: "Introducción a la Programación con Pseudocódigo Práctico – Héctor Costa Guzmán.", 
			dateStart: { day: undefined, month: undefined, year: undefined, }, 
			dateEnd: { day: undefined, month: undefined, year: 2019, }, 
			date: "2019", 
			description: "", 
		}, 
		{
			title: "Taller de producción audiovisual enfocado a televisión – José Serrano Bacca y Jaime García.", 
			dateStart: { day: undefined, month: undefined, year: undefined, }, 
			dateEnd: { day: undefined, month: undefined, year: 2018, }, 
			date: "2018", 
			description: "", 
		}, 
		{
			title: "Taller de producción audiovisual enfocado a televisión – José Serrano Bacca y Jaime García.", 
			dateStart: { day: 03, month: 17, year: 2017, }, 
			dateEnd: { day: 03, month: 17, year: 2017, }, 
			date: "2017-03-17", 
			description: "", 
		}, 
		{
			title: "Taller de manejo y mezcla de sonido – Víctor Coronado.", 
			dateStart: { day: undefined, month: undefined, year: undefined, }, 
			dateEnd: { day: undefined, month: undefined, year: 2016, }, 
			date: "2016", 
			description: "", 
		}, 
	], 
	social: [
		{ title: "Facebook", url: "https://facebook.com/garbellsteek", }, 
		{ title: "Twitter", url: "https://twitter.com/garbellsteek", }, 
	], 
}
let crearYagregarAlDomHabilidades = function(user, i) { 
	let component = `
		<li>
			<div class="skill_name">
				<span class="${user.skills[i].name.toLowerCase()}">${user.skills[i].name}</span>
			</div>
			<div class="skill_prog">
				<span class="skill_prog" style="width: ${user.skills[i].perProg}%"></span>
			</div>
			<div class="skill_per">${user.skills[i].perProg}%</div>
		</li>
	`
	document.getElementsByClassName("unorganized_list_skills")[0].innerHTML += component
}
let crearYagregarAlDomEducacion = function(user, i) {
	let component = `
		<li>
			<div class="eduinfo">
				<div class="date">${user.education[i].date}</div>
				<div class="edutitle">${user.education[i].title}</div>
				<div class="edudesc">${user.education[i].description}</div>
			</div>
		</li>
	`
	document.getElementsByClassName("unorganized_list_education")[0].innerHTML += component
}
let crearYagregarAlDomExperiencia = function(user, i) {
	let component = `
		<li>
			<div class="jobinfo">
				<div class="date">${user.experience[i].date}</div>
				<div class="expetitle">${user.experience[i].title}</div>
				<div class="expedesc">${user.experience[i].description}</div>
			</div>
		</li>
		
	`
	document.getElementsByClassName("unorganized_list_experience")[0].innerHTML += component
}
let crearYagregarAlDomCursosFinalizados = function(user, i) {
	let component = `
		<li>
			<div class="courinfo">
				<div class="date">${user.coursesFinished[i].date}</div>
				<div class="expetitle">${user.coursesFinished[i].title}</div>
				<div class="courdesc">${user.coursesFinished[i].description}</div>
			</div>
		</li>
	`
	document.getElementsByClassName("unorganized_list_coursesFinished")[0].innerHTML += component
}
for (let i=0; i < user.skills.length; i++) { crearYagregarAlDomHabilidades(user, i) }
for (let i=0; i < user.education.length; i++) { crearYagregarAlDomEducacion(user, i) }
for (let i=0; i < user.experience.length; i++) { crearYagregarAlDomExperiencia(user, i) }
for (let i=0; i < user.coursesFinished.length; i++) { crearYagregarAlDomCursosFinalizados(user, i) }
