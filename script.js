const nums = [1, 2, 3, 4];
const contador = document.getElementById("count");
let numRandom = nums[(Math.random() * nums.length | 0)];
let numCaring = 1;

function showCountScreen() {
    const animação = document.getElementById("animação");
    animação.style.top = "0";
    animação.style.opacity = "1";
    animação.classList.remove("hidden");
    
    setTimeout(() => {
        animação.style.top = "-30px";
        animação.style.opacity = "0";
    }, 1000);


}
function showMessage(value) {
    if (numRandom > 1) {
        document.getElementById('textCaring').innerHTML = `Mel está triste, ela precisa de ${value} carinhos para ficar feliz :(`;
    } else {
        document.getElementById('textCaring').innerHTML = `Mel está triste, ela precisa de ${value} carinho para ficar feliz :(`;
    }
};

window.onload = function() {    
    showMessage(numRandom);
};

let number = 0;
function getCaring() {

    if (numCaring != numRandom) {
        numRandom --;  
        showMessage(numRandom);
        showCountScreen();
    } else {
        var text = document.getElementById('textCaring');
        var img = document.getElementById('imgSad');
        text.innerHTML = "Agora Mel está feliz!!!"
        img.src = 'feliz.png';
        var button = document.getElementById('bu');
        button.remove();

    }
}