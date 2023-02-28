
// Mobin Malek Jari (C) - A Kharazmi Project 
// Script Time !

    //Select all we needs
    const topRight = document.getElementById('topRight');
    const topLeft = document.getElementById('topLeft');
    const bottomRight = document.getElementById('bottomRight');
    const bottomLeft = document.getElementById('bottomLeft');

    const shape = document.getElementById('shape');

    


    //changing the shape + edit result code
function change()
{
    shape.style.borderRadius = topRight.value + '%' + ' ' + topLeft.value + '%' + ' ' + bottomRight.value + '%' + ' ' + bottomLeft.value + '%';
    code.innerHTML = '.patra-div{\n' + '    ' + 'border-radius: ' + topRight.value + '%' + ' ' + topLeft.value + '%' + ' ' + bottomRight.value + '%' + ' ' + bottomLeft.value + '%' + '; \n' + '}' 
}




    //showing the code result By clicking on bottom tab

    const codeArea = document.getElementById('codeArea');
    const code = document.getElementById('code'); // textarea
var swipe;
    codeArea.addEventListener('click', () => {
        swipe = !swipe;
        show_code(swipe)
      });
      
      function show_code(mode){
        if(mode = swipe){
            const codeAreaArrow = document.getElementById('codeAreaArrow');
            const codeArea = document.getElementById('codeArea');
            codeArea.style.bottom = '-1.2rem';
            codeAreaArrow.style.rotate = '180deg';
            codeAreaArrow.style.marginTop = '-10.7rem';
        }
        else{
            
            const codeAreaArrow = document.getElementById('codeAreaArrow');
            const codeArea = document.getElementById('codeArea');
            codeArea.style.bottom = '-28.2rem';
            codeAreaArrow.style.rotate = '0deg';
            codeAreaArrow.style.marginTop = '-8.7rem';
            

      
      }
      }


// Copy btn
function copy() { 
    const code = document.getElementById('code'); //textarea
    code.select();
    code.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(code.value);
    const btn = document.getElementById('copy'); // btn
    btn.innerHTML = '!کپی شد';
}

// Back buttton hover effect
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