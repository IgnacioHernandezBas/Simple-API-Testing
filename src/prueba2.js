//Acceder a elementos del html desde java.
/*
let group1 = document.getElementById("group-1")
console.log(group1)

let parrafo1 = document.getElementById("parrafo-1")
console.log(parrafo1)

let parrafo2=$("#parrafo-2");
console.log(parrafo2)


// Promesas -------------------------------------------
//Hacer que haga print al resolverse

//1º forma:then
let promesa= new Promise((resolve,reject) => {
  setTimeout(()=>{ //set Timeout(id,tiempo de espera),en este caso le metemos una funcón anónima que iindica el valor de resolve y luego le asignamos el tiempo de espera
    resolve(5)
  },5000)
}).then((value)=>{ // un poco chueco esto.
  console.log(value)
})

// 2º forma:funcion async----------------------------------------

 let esperarPromesa = async()=>{
  let promesa= await new Promise((resolve,reject) => { // la funcion no actuúa hasta que llega el resolve 
    setTimeout(()=>{ //set Timeout(id,tiempo de espera),en este caso le metemos una funcón anónima que iindica el valor de resolve y luego le asignamos el tiempo de espera
      resolve(5)
    },5000)
  })
    console.log(promesa)
  }
 
  esperarPromesa()
  */

// Llamadas a APIS(por medio de verbos http y fetch)
//GET,POST,DELETE,PUT(metodos)
//---Status indicator-------
//200-Todo 0k
//404->Not found
//500->Fallo del server
//400-> Fallos del usuario
/*
let llamarGit= async ()=>{
  let peticion= await fetch("https://api.github.com/users/IgnacioHernandezBas",{
    method:"GET"
  })
  if (peticion.status=200)
  {
    let datos= await peticion.json();
    console.log(datos)// Acceder a los datos con la.json()
    console.log("Nombre: "+datos.name)
    console.log("Repos publicos: "+datos.public_repos)
  }
  
}
llamarGit()*/