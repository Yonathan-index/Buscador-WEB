//crear los selectores o variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');
const resultado = document.querySelector('#resultado');

//Crear objeto 
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
}

const max = new Date().getFullYear()
const min = max-10
//new date funciona com data para fechas.
for(let i=max;i>min;i--){
   const opcion = document.createElement('option')
   //Crear elementos dentro del selector
   opcion.value = i
   opcion.textContent = i
   year.appendChild(opcion);
   //appendchil le agrega el elemento al valor de id= #year

};
//EVENTO
document.addEventListener('DOMContentLoaded', ()=>{
//mostrar todo lo que hay en el archivo DB.JS en resultados
//DOMContentLoaded se usa para cargar el contenido (en este caso db.js) a todo el html.
    mostrarAutos(autos)
})

marca.addEventListener('change', e=>{
    //con el evento change detecta y guarda las opciones seleccionadas
    //console.log(e.target.value);
    datosBusqueda.marca = e.target.value
    //console.log(datosBusqueda);
    filtrarAuto()
    
})

year.addEventListener('change', e =>{
    //console.log(e.target.value);
    //con el value se selecciona el value designado en el html.
    datosBusqueda.year = Number(e.target.value)
    console.log(datosBusqueda);
    
    filtrarAuto()
})

minimo.addEventListener('change', e =>{
    //console.log(e.target.value);
    datosBusqueda.minimo = Number(e.target.value)
    //console.log(datosBusqueda);
    filtrarAuto()
    
})

maximo.addEventListener('change', e =>{
    datosBusqueda.maximo = Number(e.target.value)
    filtrarAuto()
})

puertas.addEventListener('change', e =>{
    datosBusqueda.puertas = Number(e.target.value)
    filtrarAuto()
})

color.addEventListener('change', e =>{
    datosBusqueda.color = e.target.value
    filtrarAuto()
})

transmision.addEventListener('change', e =>{
    datosBusqueda.transmision = e.target.value
    filtrarAuto()
})



//functions**

function filtrarAuto(){
    const resultado1 = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarColor).filter(FiltrarTransmision)
    console.log(resultado1.length);

    if(resultado1.length === 0){
        //con la function .length se usa para buscar cuantos resultados hay en el array.
        //console.log('No hay resutados');
        const noResult = document.createElement('p')
        noResult.innerHTML = 'No hay resultados para su busqueda'
        noResult.classList.add('alerta', 'error')
        limpiarHTML()
        resultado.appendChild(noResult)
    }else {
        mostrarAutos(resultado1)
    }

    
}

//FUNCION PARA LIMPIAR LOS RESULTADOS Y SOLO MOSTRAR LOS RESULTADOS FILTRADOS.
function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild)
    }
}


//FUNCIONES PARA CREAR LOS FLITROS DE CADA SELECTOR.
function filtrarMarca(auto){
    if(datosBusqueda.marca){
        return auto.marca === datosBusqueda.marca
    }
    return auto
}

function filtrarYear(auto){
    if(datosBusqueda.year){
        return auto.year === datosBusqueda.year
    }
    return auto
}

function filtrarMinimo(auto){
    if(datosBusqueda.minimo){
        return auto.precio >= datosBusqueda.minimo
    }
    //se utiliza .precio porque es el campo ultilizado en el array.
    //Como es precio minimo debe utilizar mayor o igual al monto seleccionado.
    return auto
}


function filtrarMaximo(auto){
    if(datosBusqueda.maximo){
        return auto.precio <= datosBusqueda.maximo
    }
    return auto
}

function filtrarPuertas(auto){
    if(datosBusqueda.puertas){
        return auto.puertas === datosBusqueda.puertas
    }
    return auto
}

function filtrarColor(auto){
    if(datosBusqueda.color){
        return auto.color === datosBusqueda.color
    }
    return auto
}

function FiltrarTransmision(auto){
    if(datosBusqueda.transmision){
        return auto.transmision === datosBusqueda.transmision
    }
    return auto
}





function mostrarAutos(arrayAutos){
    //console.log(arrayAutos);
    limpiarHTML()
    arrayAutos.forEach(i => {
        //forEach para recorrer el array sin condicion.
        const {marca,modelo,year,precio,puertas,color,transmision} = i

        const autoHTML = document.createElement('p')
        autoHTML.textContent = `${marca} - ${modelo} - Año ${year} - Precio: $${precio} - ${puertas} Puertas - ${color} - Transmision: ${transmision} `

        resultado.appendChild(autoHTML)
        
    });
    
}
