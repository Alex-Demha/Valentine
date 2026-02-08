let screenS = document.getElementById("screen-s");
let screenF = document.getElementById("screen-f");
let form = document.getElementById("form");

form.addEventListener('submit', function(e){
  e.preventDefault();
  let input = document.getElementById("input").value
  if(input.toLowerCase() === "fatima" || input === "فاطمة" || input === "فاطمه" || input.toLowerCase() === "fatma")
  {
    screenS.setAttribute('style','transform: scale(1); ');
    screenF.style.display = "none";
    form.setAttribute('style', 'transform: translateX(-50%) scale(0); border-radius: 100%;')
  }
  else if(input.toLowerCase() === "ahmed" || input === "احمد" || input === "أحمد" || input.toLowerCase() === "ahmad"){
        screenF.style.display = "none";
        screenS.style.display = "none";
        document.getElementById("screen-ahmed").style.display = "flex";
        
  }
  else{
        screenF.style.display = "block";
    screenS.style.display = "none";
  }
  console.log(input.toLowerCase());
})

let buttonNo = document.getElementById("no");
let tries = 0;
buttonNo.addEventListener('mouseover', function(e){
  console.log(buttonNo);
  let container = document.getElementById("screen-s")
      const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
  console.log("width: ", containerWidth);
    const elementWidth = buttonNo.offsetWidth;
    const elementHeight = buttonNo.offsetHeight;
  const newLeft = Math.floor(Math.random() * (containerWidth - elementWidth));
    const newTop = Math.floor(Math.random() * (containerHeight - elementHeight));
  buttonNo.style.position = 'absolute';
      buttonNo.style.left = `${newLeft}px`;
    buttonNo.style.top = `${newTop}px`;
  tries++;
  console.log (tries);
  console.log(document.getElementById('image').style.transform);
  if(tries > 4){
   let img =  document.getElementById("image");
   img.classList.add("img-active");
}
})

let buttonYes = document.getElementById("yes");
buttonYes.addEventListener('click', function(e){
    document.getElementById("success").style.display = "flex";
})