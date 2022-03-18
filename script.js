const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let isJumping = false;

function handleKeyUp(event) {
    if (event.keyCode === 32) {
       if (!isJumping) {
        jump(); 
       } 
    }
}

function jump() {
    let position = 0;
    isJumping = true;
    let upInterval = setInterval(()=> {
        if (position >=150) {
            clearInterval(upInterval);
            let downInterval = setInterval(() => {
                if (position <=0) {
                    clearInterval(downInterval);
                } else{
                    position += 20;
                    dino.style.botton = position + 'px';
                }
                position -= 20;
                dino.style.botton = position + 'px';
            },20);
        } else{
            position += 20;
            dino.style.botton = position + 'px';
        }
        
    },20);
}

function createCactus(params) {
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let ramdonTime = Math.random() * 6000;

    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);

    let leftInterval = setInterval(() => {
        

        if (cactusPosition < -60) {
            clearInterval(leftInterval);
            background.removeChild(cactus);
        } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class=`Game Over`>Fim de Jogo</h1>';
        }else {
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }
    },20);
    setTimeout(createCactus, ramdonTime);
}

document.addEventListener('keyup', handleKeyUp);