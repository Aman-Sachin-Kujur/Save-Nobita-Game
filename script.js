score = 0;
cross = true
lol = true


var audio1 = new Audio('doraemon begining song doraemon drawing song and doraemon ending song in hindi -7626520062369136833.mp3');
var audiogo = new Audio('gameover.mp3');
audio1.play()








document.onkeydown = function (e) {
    console.log("key code is: ", e.keyCode)
    if (e.keyCode == 38) {
        Nobita = document.querySelector('.Nobita img');
        Nobita.classList.add('animateNobita');
        nn = parseInt(window.getComputedStyle(Nobita, null).getPropertyValue('top'));
        Nobita.style.top = (nn - 310) + "px";
        setTimeout(() => {
            Nobita.style.top = nn + 0 + "px";
        }, 1000);
    }

    if (e.keyCode == 39) {
        Nobita = document.querySelector('.Nobita img');
        NobitaX = parseInt(window.getComputedStyle(Nobita, null).getPropertyValue('left'));
        Nobita.style.left = NobitaX + 110 + "px";
    }

    if (e.keyCode == 37) {
        Nobita = document.querySelector('.Nobita img');
        NobitaX = parseInt(window.getComputedStyle(Nobita, null).getPropertyValue('left'));
        Nobita.style.left = (NobitaX - 110) + "px";
    }
}


setInterval(() => {
    Nobita = document.querySelector('.Nobita img')
    gameOver = document.querySelector('.gameOver')
    Gian = document.querySelector('.Gian img')
    Gian2 = document.querySelector('.Gian')
    bani1 = document.querySelector('.bani1')
    bani2 = document.querySelector('.bani2')
    scoreCont = document.getElementById('scoreCont')

    nx = parseInt(window.getComputedStyle(Nobita, null).getPropertyValue('left'));
    ny = parseInt(window.getComputedStyle(Nobita, null).getPropertyValue('top'));

    gx = parseInt(window.getComputedStyle(Gian, null).getPropertyValue('left'));
    gy = parseInt(window.getComputedStyle(Gian, null).getPropertyValue('top'));


    offsetX = Math.abs(nx - gx);
    offsetY = Math.abs(ny - gy);

    if (offsetX < 73 && offsetY < 52) {
        gameOver.style.visibility = 'visible';
        Gian2.classList.remove('ObsGian');
        scoreCont.style.top = "180px";
        scoreCont.style.left = "900px";
        scoreCont.style.fontSize = "30px";
        scoreCont.style.fontFamily = "Charcoal"
        scoreCont.style.fontStyle = "oblique"
        
        audiogo.play();
        setTimeout(()=>{
            audiogo.pause();
            audio1.pause();
        }, 1000)

    }
    else if (offsetX < 160 && cross) {
        score += 1;
        updatescore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 500);
        setTimeout(()=>{
            aniDur = parseFloat(window.getComputedStyle(Gian, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            Gian.style.animationDuration = newDur + 's';
            console.log('New animation-Duration is:', newDur)

        }, 500)

    }


}, 1);

function updatescore(score) {
    scoreCont.innerHTML = "Your Score: " + score
}
