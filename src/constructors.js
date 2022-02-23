let array=[];
let arrayHeader=["|N-Escudería|","|Nacionalidad|","|Link|"];

let getConstructors= async ()=>{
  let peticion= await fetch("http://ergast.com/api/f1/2021/constructors.json",{
    method:"GET"

  });
  if (peticion.status=200)
   {
    let datos= await peticion.json();
    let tablaConst= datos.MRData.ConstructorTable.Constructors;  
    const constsDiv = document.querySelector('#constructores-2021');
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
    constsDiv.appendChild(table);
  }

}
getConstructors();


