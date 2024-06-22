// Generate random color


 
let changer

const startChangingClolor = function() {

  const randomColor = function() { 
    const hex = "0123456789ABCDEF";
    let color = '#';
    for (let i = 0; i < 6; i++) { 
      color += hex[Math.floor(Math.random() * 16)];
    } 
    return color;
  }

if (!changer) {
  changer = setInterval(channgeBgColor, 1000)
}
    
    function channgeBgColor () { 
     document.body.style.backgroundColor = randomColor();
  }
}
const stopChangingClolor = function() {
  clearInterval(changer)
  changer = null;
}
 
document.querySelector("#start").addEventListener('click', startChangingClolor)
document.querySelector("#stop").addEventListener('click', stopChangingClolor)