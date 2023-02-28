// Mobin Malek Jari (C) - A Kharazmi Project 
// Script Time !

// Selects All we needs
const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const color1_text = document.getElementById('color1_text');
const color2_text = document.getElementById('color2_text');
const body = document.body;
const btn = document.getElementById('copy_btn');
var dir = 'to bottom right';
const textarea = document.getElementById('codes');
// arrows
const arrowtop = document.getElementById('arrow-top');
const arrowbottom = document.getElementById('arrow-bottom');
const arrowleft = document.getElementById('arrow-left');
const arrowright = document.getElementById('arrow-right');

// Changing The Background + Code Result
function change(){
    color1_text.innerHTML = color1.value.toUpperCase();
    color2_text.innerHTML = color2.value.toUpperCase();
    body.style.background = 'linear-gradient(' +dir+ ','+ color1.value+ ',' + color2.value + ')';
    btn.style.background = 'linear-gradient(' +dir+ ','+ color1.value+ ',' + color2.value + ')';

    textarea.innerHTML = '.patra-div{ \n' + 'background:linear-gradient(' +dir+ ','+ color1.value+ ',' + color2.value + ');}';
// If both colors are white , show the err
    if (color1.value == '#ffffff' && color2.value == '#ffffff'){
        alert('نمی توان هر دو مورد را سفید قرار داد')
        color1.value = '#ff29ff';
        color2.value = '#cccfff';
        color1_text.innerHTML = color1.value.toUpperCase();
        color2_text.innerHTML = color2.value.toUpperCase();
        body.style.background = 'linear-gradient(' +dir+ ','+ color1.value+ ',' + color2.value + ')';
        btn.style.background = 'linear-gradient(' +dir+ ','+ color1.value+ ',' + color2.value + ')';
    }
}
// set dir of gradient
function dir_top(){
    dir = 'to top';
    change();
}
function dir_bottom(){
    dir = 'to bottom';
    change();
}
function dir_left(){
    dir = 'to left';
    change();
}
function dir_right(){
    dir = 'to right';
    change();
}

function dir_top_right(){
    dir = 'to top right';
    change();
}
function dir_top_left(){
    dir = 'to bottom left';
    change();
}
function dir_bottom_right(){
    dir = 'to bottom right';
    change();
}
function dir_bottom_left(){
    dir = 'to bottom left';
    change();
}

//copy 
function copy(){
    textarea.select();
    textarea.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(textarea.value);
    btn.innerHTML = '!کپی شد';
    btn.style.background = '#000000'
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