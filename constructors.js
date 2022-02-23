let array=[];
let arrayHeader=["|N-Escudería|","|Nacionalidad|","|Link|"];

let table = document.createElement('table');
const constsDiv = document.querySelector('#constructores-2021');
constsDiv.appendChild(table);

let titulo= document.getElementById("title");
let h1 = document.createElement("h1");
let textNode = document.createTextNode("Elija el año de la temporada que desee visualizar");

h1.appendChild(textNode);
titulo.appendChild(h1);

let getUrl=async()=>
{
  constsDiv.removeChild(table);
  h1.removeChild(textNode);
  titulo.removeChild(h1);
  let year= document.getElementById("searchbar").value
  console.log(year);
  let url='https://ergast.com/api/f1/'+year+'/constructors.json';
 
  textNode = document.createTextNode("Listado de constructores temporada "+year);
  h1.appendChild(textNode);
  titulo.appendChild(h1); 
  console.log(url);
  getConstructors(url);
}


let getConstructors= async (url)=>{
  let peticion= await fetch(url,{
    method:"GET"
 
 });
  if (peticion.status=200)
   {
    let datos= await peticion.json();
    let tablaConst= datos.MRData.ConstructorTable.Constructors;  

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
    for(let i of tablaConst)
    {
      let fila = document.createElement('tr');
      array.push( `${i.name}`,` ${i.nationality}`,`${i.url}`);
      let url=`${i.url}`;
      for(let j of array)
      {
        //console.log(j);
        let  celda = document.createElement('td');
        if (j.includes("http")){
          celda.innerHTML='<a href="'+url+'">'+url+'</a>';
          
          console.log(url);
        }else{
          celda.appendChild(document.createTextNode(j));
        }
        fila.appendChild(celda);
      }
        array=[]
        tableBody.appendChild(fila);
    }
    table.appendChild(tableBody);
  }
  constsDiv.appendChild(table);
}

elementBoton=document.getElementById('buscar');

elementBoton.addEventListener("click", getUrl);


