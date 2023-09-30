
const displayElement = document.getElementById("display");

function writeCharacterInDisplay(element){
  if(displayElement.innerHTML == 0){
    displayElement.innerHTML = '';
  }
  displayElement.innerHTML += element.textContent;
}

function clearDisplay(){
  displayElement.innerHTML = 0;
}

function calculateResult(){
  try{
    displayElement.innerHTML = eval(displayElement.innerHTML);
  } catch(e){
    displayElement.innerHTML = "Error!";
  }
}