// Mobin Malek Jari (C) - A Kharazmi Project 
// Script Time !


// Changing The content  +  result 
function change() {


console.log('changed'); //Testing the function
    const div = document.getElementById('div');
    const code =document.getElementById('code');

    const opc = document.getElementById('opacity');
    const br = document.getElementById('border-rad');
    const border = document.getElementById('border');
    const borderColor = document.getElementById('border-color');
    const bgColor = document.getElementById('background');
    const yshadow = document.getElementById('yshadow');
    const xshadow = document.getElementById('xshadow');
    const blurshadow = document.getElementById('blurshadow');
    const colorshadow = document.getElementById('colorshadow');

    // Changing the content 
    div.style.opacity = opc.value + '%';
    div.style.borderRadius = br.value + 'px';
    div.style.border = border.value + 'px solid';
    div.style.borderColor = borderColor.value;
    div.style.backgroundColor = bgColor.value;
    div.style.boxShadow = yshadow.value + 'px' + ' ' + xshadow.value + 'px' + ' ' + blurshadow.value + 'px' + ' ' + colorshadow.value;

    // Result
    code.innerHTML ='/*mrmobin1387.github.io/patra - Free Css Generator*/ \n  \n' + "div { \n opacity:" + opc.value + '%' + ';' + '\n background-color:' + bgColor.value +  ';' + '\n border:' + border.value + 'px' + ' ' + 'solid' + ' ' + borderColor.value + '\n border-radius:' + br.value + 'px;' + '\n box-shadow:' + yshadow.value + 'px' + ' ' + xshadow.value + 'px' + ' ' + blurshadow.value + 'px' + ' ' + colorshadow.value + '; \n' + '}' ;                                              

}
// bg changer
const changer = document.getElementById('swipe');

// If changer Button clicked call changeBG
changer.addEventListener('click', () => {
  swipe = !swipe;
  changeBG(swipe)
});

// Func for changing the bg
function changeBG(mode){
  if(mode = swipe){
    const body = document.body;
    body.style.background = "linear-gradient(to bottom right,rgb(255, 119, 0),rgb(200, 5, 161))";
  }
  else{
    const body = document.body;
    body.style.background = "rgb(9 2 20)";

}
}

// hint open & close func
function openInfo() {
    console.log('open')
    let popup = document.getElementById("info");
    popup.classList.toggle("info-show");
    popup.classList.remove('info-hide');
    popup.style.display = "flex";
  }

  function closeInfo() {
    console.log('close')
    let popup = document.getElementById("info");
    popup.classList.toggle("info-hide");
    popup.classList.remove('info-show');
    popup.style.display = "none";
  }

  // Copy button
  function copy() {
    const copy = document.getElementById('code'); // textarea
    copy.select();
    copy.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(copy.value);
    const btn = document.getElementById('copy'); // btn
    btn.innerHTML = '!کپی شد';
  }

// Back button hover effect
  function backHover(){
    let text = document.getElementById('back_text');
    text.style.left = '69px';
    text.style.opacity = '100%';
  }
  function backNotHover(){
    let text = document.getElementById('back_text');
    text.style.left = '40px';
    text.style.opacity = '0%';
  }