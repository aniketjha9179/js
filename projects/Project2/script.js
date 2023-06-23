const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault()
  
    const  Height = parseInt(document.querySelector("#height").value);
    const  Weight = parseInt(document.querySelector("#weight").value);
    const  Results = document.querySelector("#results");

    if(Height===''||Height<0 ||isNaN(Height)){
        Results.innerHTML = `pls give a valid height ${Height}`
    }

    else if(Weight===''||Weight<0 ||isNaN(Weight)){
        Results.innerHTML = `pls give a valid weight ${webkitURL}`
    }
   
    else{
        const bmi = (Weight / ((Height*Height)/10000)).toFixed(2)
        //showing the result 
        Results.innerHTML =`<span>${bmi} </span`
        
    }


});
