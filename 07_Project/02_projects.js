const form = document.querySelector("form");

form.addEventListener('submit', (e)=>{
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);

  console.log(height);
  const weight= parseInt(document.querySelector("#weight").value);
  console.log(weight)

  const result = document.querySelector("#result");

  if(height < 0 || height === '' || isNaN(height)){
    result.innerHTML = `please give a valid height ${height}`;
  }
  else if(weight < 0 || weight === '' || isNaN(weight)){
    result.innerHTML = `please give a valid weight ${weight}`;
  }
  else{
    const bmi = (weight /((height * height)/10000)).toFixed(2);
    console.log(bmi);

    //now show the result 
    result.innerHTML = `<span>${bmi}</span>`;
    
  }

})