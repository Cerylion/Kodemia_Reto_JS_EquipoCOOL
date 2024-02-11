document.addEventListener('DOMContentLoaded', () => {
  let imagenCampeon = localStorage.getItem('imagenCampeon');
  async function obtenerImagenAzar(campeon) {
    try {
      const respuesta = await fetch(
        `https://ddragon.leagueoflegends.com/cdn/14.3.1/data/en_US/champion/${campeon}.json`
      )
      if (!respuesta.ok) {
        throw new Error(`Error al obtener los datos del campeón ${campeon}`)
      }
      const datos = await respuesta.json()
      const campeonData = datos.data[campeon]
      if (!campeonData || !campeonData.skins) {
        throw new Error(`Datos de skins del campeón ${campeon} no encontrados`)
      }
      const skins = campeonData.skins
      const skinAzar = skins[Math.floor(Math.random() * skins.length)] // para seleccionar una al azar
      return `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${campeon}_${skinAzar.num}.jpg`
    } catch (error) {
      console.error('Error:', error)
      return null
    }
  }

  

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

    if (titulo && articulo) {
      const newPost = { titulo, articulo }
      data.push(newPost)
      saveDataLocalStorage()
      generarTabla()
      form.reset()
    }
  })

  function saveDataLocalStorage() {
    localStorage.setItem('formData', JSON.stringify(data))
  }

  async function generarTabla() {
    bodyTabla.innerHTML = ''
  
    for (let index = 0; index < data.length; index++) {
      const item = data[index];
      const divGranContenedor = document.createElement('div')
      divGranContenedor.className = 'juniorDevSectionPadding'
  
      // Mostrar imagen
      const divImagen = document.createElement('div')
      divImagen.className = 'imagenDeUsuario'
      const creaImagen = document.createElement('img')
      creaImagen.className = 'profileImage'
      creaImagen.type = 'img'
  
      // Obtener imagen al azar y asignarla a la variable imagenCampeon y a la propiedad src de creaImagen
      imagenCampeon = await obtenerImagenAzar('Yuumi');
      creaImagen.src = imagenCampeon;
  
      bodyTabla.appendChild(divImagen)
      divImagen.appendChild(creaImagen)
      // creaImagen.src = 

      async function mostrarImagen() {
        if (!imagenCampeon) {
          const imagenURL = await obtenerImagenAzar('Yuumi')
          if (imagenURL) {
            imagenCampeon = imagenURL; 
            localStorage.setItem('imagenCampeon', imagenCampeon); 
            document.getElementById('insertIMG').src = imagenCampeon; 
          } else {
            console.log('No se pudo obtener la imagen.')
          }
        } else {
          
          document.getElementById('insertIMG').src = imagenCampeon;
        }
        const imagenElement = document.getElementById('imagenCampeon');
          imagenElement.src = imagenCampeon;
      }
    
      mostrarImagen()

      //nombre
      const divNombre = document.createElement('div')
      divNombre.className = 'nombreUsuario'
      const divNombreH3 = document.createElement('H3')
      divNombreH3.textContent = '🦄 Nombre del usuario'
      divNombre.appendChild(divNombreH3)
      bodyTabla.appendChild(divNombre)

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
      emo6.textContent = '💬 97'

      emojisContenedor.appendChild(emo1)
      emojisContenedor.appendChild(emo2)
      emojisContenedor.appendChild(emo3)
      emojisContenedor.appendChild(emo4)
      emojisContenedor.appendChild(emo5)
      emojisContenedor.appendChild(emo6)

      const tiempoContenedor = document.createElement('div')
      tiempoContenedor.className = 'tiempoContenedor'
      const tiempo = document.createElement('p')
      tiempo.type = ''
      tiempo.textContent = ' 4 min read'
      tiempo.className = 'tiempo'

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
      })

      deleteBoton.addEventListener('click', function () {
        deleteInfo(index)
      })

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
      //fila.appendChild (tagsSection)
      // fila.appendChild (emojisContenedor)
      fila.appendChild(contenedorReaccionesMas)

      bodyTabla.appendChild(fila)
    }}

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
