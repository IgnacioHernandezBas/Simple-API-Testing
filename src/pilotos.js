let array=[];
let arrayHeader=["|Nombre|","|Nº Piloto|","|Nacionalidad|","|F.Nacimiento|"];


let getPilotos= async ()=>{
  let peticion= await fetch("http://ergast.com/api/f1/2021/drivers.json",{
    method:"GET"

  });
  if (peticion.status=200)
  {
    let datos= await peticion.json();
    let tablaPilotos= datos.MRData.DriverTable.Drivers;
   // console.log(datos);
    console.log(tablaPilotos);
    const pilotosDiv = document.querySelector('#pilotos-2021');
    let table = document.createElement('table');
    let tableBody=document.createElement('tbody');
    let header = document.createElement('tr');
    for(let h in arrayHeader)
    {
      console.log(arrayHeader[h]);
      let  celdaH = document.createElement('td');
      celdaH.appendChild(document.createTextNode(arrayHeader[h]));
      header.appendChild(celdaH);
    }
    tableBody.appendChild(header);
    for(let i of tablaPilotos)
    {
      let fila = document.createElement('tr');
      array.push( `${i.driverId}`,` ${i.permanentNumber}`,` ${i.nationality}`,` ${i.dateOfBirth}` );
      for(let j of array)
      {
        let  celda = document.createElement('td');
        celda.appendChild(document.createTextNode(j));
        fila.appendChild(celda);
      }
        array=[]
        tableBody.appendChild(fila);
    }
    table.appendChild(tableBody);
    pilotosDiv.appendChild(table);
  }
  
}
getPilotos();

console.log(array);

