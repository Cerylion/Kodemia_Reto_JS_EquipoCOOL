const d=document
const boton = document.querySelector(".btn")
  function searchFilters(input,selector){
  d.addEventListener("keyup",(e) =>{
    if(e.target.matches(input)){
       // console.log(e.key)
       console.log(e.target.value)
    
       d.querySelectorAll(selector).forEach((el) => {
        el.textContent.toLowerCase().includes(e.target.value.toLowerCase())
        ?el.classList.remove("filter")
        :el.classList.add("filter")
       })
    }

  })
}

searchFilters(".inputNav",".juniorDevSectionPadding")