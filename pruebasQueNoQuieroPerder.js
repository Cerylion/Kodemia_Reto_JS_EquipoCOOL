const form = document.querySelector('form')
const tituloImput = document.getElementById('titulo')
const articuloImput = document.getElementById('articulo')
const bodyTabla = document.getElementById('bodyTabla')

let data = JSON.parse(localStorage.getItem('formData')) || []
//El método JSON.parse() analiza una cadena de texto como JSON, transformando opcionalmente el valor producido por el análisis.
//El método getItem() de la interfaz Storage devuelve el valor de la clave cuyo nombre se le pasa por parámetro.

form.addEventListener('submit', function (e) {
  e.preventDefault()
  //Cancela el evento si este es cancelable, sin detener el resto del funcionamiento del evento, es decir, puede ser llamado de nuevo.
  const titulo = tituloImput.value
  const articulo = articuloImput.value

  if (titulo && articulo) {
    const newPost = { titulo, articulo }
    data.push(newPost)
    saveDataLocalStorage()
    generarTabla()
    form.reset()
  }
})

//aquí comienza la locura
function saveDataLocalStorage() {
  localStorage.setItem('formData', JSON.stringify(data))
}
//El método JSON.stringify() convierte un objeto o valor de JavaScript en una cadena de texto JSON,
//opcionalmente reemplaza valores si se indica una función de reemplazo, o si se especifican las propiedades mediante un array de reemplazo.
//El método setItem() de la interfaz Storage, cuando reciba una clave y un valor, añadirá estos al almacén, o actualizará el valor si la clave ya existe.

const generarTabla = () => {
  bodyTabla.innerHTML = ''
  const objeto = document.getElementById('0')

  localStorage.setItem('objeto', objeto)
  const newObject = localStorage.posts ? JSON.parse(localStorage.posts) : []
  /* const newObject = JSON.parse(localStorage.objeto) */
  console.log(newObject)

  data.forEach(function (item, index) {
    const fila = document.createElement('tr')
    const celdaTitulo = document.createElement('td')
    const celdaArticulo = document.createElement('td')
    const accionesBoton = document.createElement('td')
    const editBoton = document.createElement('button')
    const deleteBoton = document.createElement('button')

    celdaTitulo.textContent = item.titulo
    celdaArticulo.textContent = item.articulo
    editBoton.textContent = 'Edit'
    editBoton.className = 'botoncito'

    deleteBoton.textContent = 'Delete'
    deleteBoton.className = 'botoncito'

    editBoton.addEventListener('click', function () {
      editInfo(index)
    })

    deleteBoton.addEventListener('click', function () {
      deleteInfo(index)
    })

    accionesBoton.appendChild(editBoton)
    accionesBoton.appendChild(deleteBoton)

    fila.appendChild(celdaTitulo)
    fila.appendChild(celdaArticulo)
    fila.appendChild(accionesBoton)
    bodyTabla.appendChild(fila)
  })
}

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

generarTabla()
