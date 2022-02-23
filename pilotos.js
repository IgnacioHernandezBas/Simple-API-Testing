// Logica tabla
let array=[];
let arrayHeader=["|Nombre|","|Nº Piloto|","|Nacionalidad|","|F.Nacimiento|"];

let table = document.createElement('table');
const pilotosDiv = document.querySelector('#pilotos-2021');
pilotosDiv.appendChild(table);

let titulo= document.getElementById("title");
let h1 = document.createElement("h1");
let textNode = document.createTextNode("Elija el año de la temporada que desee visualizar");

h1.appendChild(textNode);
titulo.appendChild(h1);



let getUrl=async()=>
{
  pilotosDiv.removeChild(table);
  h1.removeChild(textNode);
  titulo.removeChild(h1);
  let year= document.getElementById("searchbar").value
  console.log(year);
  let url='https://ergast.com/api/f1/'+year+'/drivers.json';
 
  textNode = document.createTextNode("Listado de pilotos temporada "+year);
  h1.appendChild(textNode);
  titulo.appendChild(h1); 
  console.log(url);
  getPilotos(url);
}



let getPilotos= async (url)=>{
  let peticion= await fetch(url,{
    method:"GET"

  });
  if (peticion.status=200)
  {
    let datos= await peticion.json();
    let tablaPilotos= datos.MRData.DriverTable.Drivers;
   // console.log(datos);
    console.log(tablaPilotos);

       table = document.createElement('table');
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
  }
  pilotosDiv.appendChild(table);
}

elementBoton=document.getElementById('buscar');

elementBoton.addEventListener("click", getUrl);


