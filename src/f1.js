let llamarApi= async ()=>{
  let peticion= await fetch("http://ergast.com/api/f1/constructors/mclaren/circuits/monza/drivers.json",{
    method:"GET"

  })
  if (peticion.status=200)
  {
    let pilotos= await peticion.json()
    console.log(pilotos)
  }
}
llamarApi()


