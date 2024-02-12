document.addEventListener('DOMContentLoaded', () => {
  
  /*
  BTNO1.addEventListener = ('click', ocultar())
  BTNO2.addEventListener = ('click', ocultar())
  BTNM.addEventListener = ('click', mostrar())
*/


  // la magia de los post

  const form = document.querySelector('form')
  const tituloImput = document.getElementById('titulo')
  const articuloImput = document.getElementById('articulo')
  const bodyTabla = document.getElementById('bodyTabla')

  let data = JSON.parse(localStorage.getItem('formData')) || []

  form.addEventListener('submit', function (e) {
    e.preventDefault()
    const titulo = tituloImput.value
    const articulo = articuloImput.value
    const tiempo = tiempoFuncion()
    const fecha = fechaFuncion()
    const numAleatorio = numRandom(1, 9)
    const nombreAleatorio= generateNombreRandom()
    const diaAleatorio= DiaRandom()
    const fechaAleatoria = FechaRandom()
    

    if (titulo && articulo) {
      const newPost = { titulo, articulo, tiempo, fecha, numAleatorio, nombreAleatorio, diaAleatorio, fechaAleatoria}
      data.push(newPost)
      saveDataLocalStorage()
      generarTabla()
      form.reset()
    }
  })

  function saveDataLocalStorage() {
    localStorage.setItem('formData', JSON.stringify(data))
  }

  function generarTabla() {
    bodyTabla.innerHTML = ''

    data.forEach(function (item, index) {
      //gran contenedor//

      const divGranContenedor = document.createElement('div')
      
      
      
        //nombre
        const divNombre = document.createElement('div')
        divNombre.className = 'nombreUsuario'
        const divNombreH3 = document.createElement('H5')
        divNombreH3.textContent = item.nombreAleatorio
        divNombre.appendChild(divNombreH3)
        bodyTabla.appendChild(divNombre)

      //imagen
      divGranContenedor.className = 'juniorDevSectionPadding'
      const divImagen = document.createElement('div')
      divImagen.className = 'imagenDeUsuario'
      const creaImagen = document.createElement('img')
      creaImagen.className = 'profileImage'
      creaImagen.type = 'img'
      divImagen.textContent= item.diaAleatorio + " " + item.fechaAleatoria
      bodyTabla.appendChild(divImagen)
      divImagen.appendChild(creaImagen)
      creaImagen.src = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_${item.numAleatorio}.jpg`


    



      //contenedorPost//
      const fila = document.createElement('div')
      fila.className = 'contenedorPost'
      fila.classname = 'juniorDevSectionPadding'

      //titulo
      const celdaTitulo = document.createElement('span')
      celdaTitulo.className = 'tituloPost'

      //articulo
      const celdaArticulo = document.createElement('span')
      celdaArticulo.className = 'articuloPost'

      //tags
      const tagsSection = document.createElement('div')
      tagsSection.className = 'tagsAside'
      const tags1 = document.createElement('p')
      tags1.className = 'tag1'
      tags1.textContent = '#JavaScrip'
      const tags2 = document.createElement('p')
      tags2.className = 'tag2'
      tags2.textContent = '#Develop'
      const tags3 = document.createElement('p')
      tags3.className = 'tag3'
      tags3.textContent = '#Soprendente!'
      tagsSection.appendChild(tags1)
      tagsSection.appendChild(tags2)
      tagsSection.appendChild(tags3)

      //botones
      const accionesBoton = document.createElement('div')
      accionesBoton.className = 'botonesContenedor'
      const editBoton = document.createElement('button')
      const deleteBoton = document.createElement('button')

      //emojis
      const emojisContenedor = document.createElement('div')
      emojisContenedor.className = 'emojisContenedor'
      const emo1 = document.createElement('p')
      emo1.className = 'emoticon1'
      emo1.textContent = '💖'
      const emo2 = document.createElement('p')
      emo2.className = 'emoticon2'
      emo2.textContent = '🦄'
      const emo3 = document.createElement('p')
      emo3.className = 'emoticon3'
      emo3.textContent = '🤩'
      const emo4 = document.createElement('p')
      emo4.className = 'emoticon4'
      emo4.textContent = '🙌'
      const emo5 = document.createElement('p')
      emo5.className = 'emoticon5'
      emo5.textContent = '🔥'
      const emo6 = document.createElement('p')
      emo6.className = 'emoticon6'
      emo6.textContent = '💬' + item.numAleatorio

      emojisContenedor.appendChild(emo1)
      emojisContenedor.appendChild(emo2)
      emojisContenedor.appendChild(emo3)
      emojisContenedor.appendChild(emo4)
      emojisContenedor.appendChild(emo5)
      emojisContenedor.appendChild(emo6)

      //tiempo
      const tiempoContenedor = document.createElement('div')
      tiempoContenedor.className = 'tiempoContenedor'
      const tiempo = document.createElement('p')
      tiempo.type = ''
      tiempo.className = 'tiempo'
      tiempo.textContent = item.tiempo + "  --  " + item.fecha
      tiempoContenedor.appendChild(tiempo)

      //botones

      celdaTitulo.textContent = item.titulo
      celdaArticulo.textContent = item.articulo
      editBoton.textContent = 'Edit'
      editBoton.className = 'botoncito'
      deleteBoton.textContent = 'Delete'
      deleteBoton.className = 'botoncito'

      //eventos//

      editBoton.addEventListener('click', function () {
        editInfo(index)
        top()
      })

      deleteBoton.addEventListener('click', function () {
        deleteInfo(index)
        top()
      })

      function top() {
        window.scroll({
          top: 100,
          left: 100,
          behavior: 'smooth'
        })
      }
      top()

      accionesBoton.appendChild(editBoton)
      accionesBoton.appendChild(deleteBoton)

      //contenedor
      const contenedorReaccionesMas = document.createElement('div')
      contenedorReaccionesMas.className = 'contenedorReaccionesMas'
      contenedorReaccionesMas.appendChild(emojisContenedor)
      contenedorReaccionesMas.appendChild(tiempoContenedor)
      contenedorReaccionesMas.appendChild(tagsSection)

      //meter todos al contenedor
      fila.appendChild(divImagen)
      fila.appendChild(divNombre)
      fila.appendChild(celdaTitulo)
      fila.appendChild(celdaArticulo)
      fila.appendChild(accionesBoton)
      fila.appendChild(contenedorReaccionesMas)

      //hace que el post se muestre arriba
      bodyTabla.prepend(fila)
    })
  }

  generarTabla()

  function editInfo(index) {
    const item = data[index]
    tituloImput.value = item.titulo
    articuloImput.value = item.articulo
    data.splice(index, 1)
    saveDataLocalStorage()
    generarTabla()
  }

  function deleteInfo(index) {
    data.splice(index, 1)
    saveDataLocalStorage()
    generarTabla()
  }

  /* este es el buscador */
  const d = document
  function searchFilters(input, selector) {
    d.addEventListener('keyup', (e) => {
      if (e.target.matches(input)) {
        // console.log(e.key)
        // console.log(e.target.value)

        d.querySelectorAll(selector).forEach((el) => {
          el.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ? el.classList.remove('filter')
            : el.classList.add('filter')
        })
      }
    })
  }
  searchFilters('.inputNav', '.contenedorPost')

  
})


// Mostrar y ocultar los buscadores por fechas
const mostrar = () => {
  
  const list = document.getElementById('ulu')
  
  list.style.display = 'flex'
  
}
const ocultar = () => {
  
  const list = document.getElementById('ulu')
  
  list.style.display = 'none'
}

//subir a top

// hora
function tiempoFuncion() {
  let date = new Date()
  let hours = date.getHours()
  let min = date.getMinutes()
  let seg = date.getSeconds()
  return hours + ':' + min + ':' + seg
}
tiempoFuncion()

//fecha
function fechaFuncion() {
  let date = new Date()
  let day = date.getDate()
  let month = date.getMonth() + 1
  let year = date.getFullYear()
  return day + '-' + month + '-' + year
}

//numero random
function numRandom(min, max) {
  var random = Math.floor(Math.random() * (max - min) + min)
  return random
}
numRandom()


//nombre random
function generateNombreRandom(){
	var firstname = ["Adrián", "Agustín", "Alberto", "Alejandro", "Alexander", "Alexis", "Alonso", "Andrés Felipe", "Ángel", "Anthony", "Antonio", "Bautista", "Benicio", "Benjamín", "Carlos", "Carlos Alberto", "Carlos Eduardo", "Carlos Roberto", "César", "Cristóbal", "Daniel", "David", "Diego", "Dylan", "Eduardo", "Emiliano", "Emmanuel", "Enrique", "Erik", "Ernesto", "Ethan", "Fabián", "Facundo", "Felipe", "Félix", "Félix María", "Fernando", "Francisco", "Francisco Javier", "Gabriel", "Gaspar", "Gustavo Adolfo", "Hugo", "Ian", "Iker", "Isaac", "Jacob", "Javier", "Jayden", "Jeremy", "Jerónimo", "Jesús", "Jesús Antonio", "Jesús Víctor", "Joaquín", "Jorge", "Jorge  Alberto", "Jorge Luis", "José", "José Antonio", "José Daniel", "José David", "José Francisco", "José Gregorio", "José Luis", "José Manuel", "José Pablo", "Josué", "Juan", "Juan Ángel", "Juan Carlos", "Juan David", "Juan Esteban", "Juan Ignacio", "Juan José", "Juan Manuel", "Juan Pablo", "Juan Sebastián", "Julio", "Julio Cesar", "Justin", "Kevin", "Lautaro", "Liam", "Lian", "Lorenzo", "Lucas", "Luis", "Luis Alberto", "Luis Emilio", "Luis Fernando", "Manuel", "Manuel Antonio", "Marco Antonio", "Mario", "Martín", "Mateo", "Matías", "Maximiliano", "Maykel", "Miguel", "Miguel  ngel", "Nelson", "Noah", "Oscar", "Pablo", "Pedro", "Rafael", "Ramón", "Raúl", "Ricardo", "Rigoberto", "Roberto", "Rolando", "Samuel", "Samuel David", "Santiago", "Santino", "Santos", "Sebastián", "Thiago", "Thiago Benjamín", "Tomás", "Valentino", "Vicente", "Víctor", "Víctor Hugo"];
	var lastname= ["Garcia", "Gonzalez", "Rodriguez", "Fernandez", "Lopez", "Martinez", "Sanchez", "Perez", "Gomez", "Martin", "Jimenez", "Ruiz", "Hernandez", "Diaz", "Moreno", "Alvarez", "Muñoz", "Romero", "Alonso", "Gutierrez", "Navarro", "Torres", "Dominguez",
	"Vazquez", "Ramos", "Gil", "Ramirez", "Serrano", "Blanco", "Suarez", "Molina", "Morales", "Ortega", "Delgado", "Castro", "Ortiz", "Rubio", "Marin", "Sanz", "Nuñez", "Iglesias", "Medina", "Garrido", "Santos", "Castillo", "Cortes", "Lozano", "Guerrero", "Cano", "Prieto", "Mendez", "Calvo", "Cruz", "Gallego", "Vidal", "Leon", "Herrera", "Marquez", "Peña", "Cabrera", "Flores", "Campos", "Vega", "Diez", "Fuentes", "Carrasco", "Caballero", "Nieto", "Reyes", "Aguilar", "Pascual", "Herrero", "Santana", "Lorenzo", "Hidalgo", "Montero", "Ibañez", "Gimenez", "Ferrer", "Duran", "Vicente", "Benitez", "Mora", "Santiago", "Arias", "Vargas", "Carmona", "Crespo", "Roman", "Pastor", "Soto", "Saez", "Velasco", "Soler", "Moya", "Esteban", "Parra", "Bravo", "Gallardo", "Rojas", "Pardo", "Merino", "Franco", "Espinosa", "Izquierdo", "Lara", "Rivas", "Silva", "Rivera", "Casado", "Arroyo", "Redondo", "Camacho", "Rey", "Vera", "Otero", "Luque", "Galan", "Montes", "Rios", "Sierra", "Segura", "Carrillo", "Marcos", "Marti", "Soriano", "Mendoza"];
	var rand_first = Math.floor(Math.random()*firstname.length); 
	var rand_last = Math.floor(Math.random()*lastname.length); 
	return firstname[rand_first]+" "+lastname[rand_last];
}
generateNombreRandom()



function FechaRandom () {
  var anno = 2024
  var randomDia = Math.floor(Math.random() * (29 - 1) + 1)
  var randomMes = Math.floor(Math.random() * (12 - 0) + 1) 
  return randomDia + "/" + randomMes + "/" + anno
}
FechaRandom()


function DiaRandom(){
	var fecha = ["lunes", "martes", "miercoles", "jueves", "viernes"];
	var fecha_Random = Math.floor(Math.random()*fecha.length); 
	return fecha[fecha_Random]
}
DiaRandom()



