const buttonsEl=document.querySelectorAll("button");
for(let i=0;i<buttonsEl.length;i++)
  {
    buttonsEl[i].addEventListener("click",()=>{
      const buttonValue=buttonsEl[i].textContent;
      if(buttonValue==="C")
clearResult()
      else if(buttonValue==="=")
        calculateResult()
      else
        appendValue(buttonValue)
        })
  }
function clearResult()
{
 inputFieldEl.value=""; 
}
function calculateResult(){
inputFieldEl.value=eval(inputFieldEl.value);
}
funtion appendValue(buttonValue)
{
  inputFieldEl.value+=buttonValue;
}
