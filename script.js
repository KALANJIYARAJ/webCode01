let searchdiv=document.createElement("div");
searchdiv.setAttribute("class","searchdiv");

let searchbox=document.createElement("lable");
searchbox.setAttribute("class","searchbox");
searchbox.setAttribute("for","myInput");
searchbox.innerHTML=`<i class="fa fa-search" aria-hidden="true"></i>`

let search=document.createElement("input");
search.setAttribute("type","text");
search.setAttribute("id","myInput");
search.addEventListener("keyup",foo);
search.setAttribute("placeholder","SearchName");
search.setAttribute("title","type in a name");
search.setAttribute("year","2022");

var container=document.createElement("div");
    container.setAttribute("class","container");

    var row=document.createElement("div");
    row.setAttribute("class","row");


   

container.append(row);  
searchbox.append(search);
searchdiv.append(searchbox);
document.body.append(searchdiv,container);


async function foo(){
    try{
    let name=document.getElementById("myInput").value;
    name=name.toUpperCase();
    console.log(name);
    let url=`https://api.nationalize.io/?name=${name}`;
    let res = await fetch(url);
    let res1=await res.json();
    // console.log(res1);
    let details=res1.country;

    
    row.innerHTML=`<div class="card text-white bg-warning mb-3" style="max-width: 20rem;">
    <h3 class="card-header" style="color:whide">NAME:${res1.name}</h3>
    <div class="card-body">
      <h4>Country 1:</h4><br>
      <h6 class="card-title">Country ID:${details[0].country_id}</h6>
      <h6 class="card-text">Probability:${details[0]. probability}</h6>
    </div>
  </div>

  <div class="card text-white bg-warning mb-3" style="max-width: 20rem;">
  <div class="card-body">
      <h4>Country 2:</h4><br>
      <h6 class="card-title">Country ID:${details[1].country_id}</h6>
      <h6 class="card-text">Probability:${details[1]. probability}</h6>
    </div>
  </div>`;
}
catch(error){
    console.log(error);
}

}
