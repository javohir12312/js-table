let elForm = document.querySelector(".site_form");
let elName = document.querySelector(".enter_name");
let elLastName = document.querySelector(".enter_lastName");
let elJob = document.querySelector(".enter_job");
let elNumber = document.querySelector(".enter_number");

let elResult = document.querySelector(".result");

let array = [];

let renderPerson = function() {
  elResult.innerHTML = "";

  for (let i = 0; i < array.length; i++){
    let newLi = document.createElement("li");
    let textName = document.createElement("p");
    let textSurname = document.createElement("p")
    let textJob = document.createElement("p")
    let textNumber = document.createElement("a")

    newLi.append(textName, textSurname, textJob, textNumber)

    
    textName.textContent = elName.value.trim();
    textSurname.textContent = elLastName.value.trim();
    textJob.textContent = elJob.value.trim();
    textNumber.textContent = elNumber.value.trim();
    textNumber.href = `tel: ${textNumber}`

    elResult.appendChild(newLi);
  }
}

elForm.addEventListener('submit', function(evt){
  evt.preventDefault();

  let nameVall = elName.value.trim();
  let lastNameVall = elLastName.value.trim();
  let jobVall = elJob.value.trim();
  let numberVall = elNumber.value.trim();


  let person = {
    name: nameVall,
    surname: lastNameVall,
    job: jobVall,
    number: numberVall,
  }

  array.push(person);

  renderPerson();



  elName.value = '';
  elLastName.value = '';  
  elJob.value = '';  
  elNumber.value = '';

})