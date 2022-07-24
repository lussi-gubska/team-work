var startBlock = document.querySelector("#start");
var gameBlock = document.querySelector("#game");
var audioplayer = document.querySelector("audio");
var soundButton = document.querySelector("#sound img");
    sound = "off";
    soundButton.onclick = function () {
    if (sound == "on") {
        soundButton.src = "image/notmusic.svg"
        sound = "off"
        audioplayer.pause();
    } else { 
        soundButton.src = "image/music.svg"
        sound = "on"
        audioplayer.play();
    }
    }

var startButton = document.querySelector("#startbutton");
    startButton.onclick = function () {
    startGame();
}
function startGame() {
    startBlock.style.display = "none";
    gameBlock.style.display = "block";
    xxx1.style.display = "block";
    xxx2.style.display = "block";
    xxx3.style.display = "block";

}

var gameButton = document.querySelector("#knopka");
gameButton.onclick = function () {
    LetsGo();
}

xxx1 = document.querySelector("#xxx1");
xxx2 = document.querySelector("#xxx2");
xxx3 = document.querySelector("#xxx3");
score = document.querySelector("#score span");
score.innerText = Number(score.innerText) + 3;
var oneHeight=110, // размер одного элемента
    numImage=5, // количество элементов
    speedStep=0.2; // скорость изменения скорости
function LetsGo(){
    clearInterval(LetsGo.interval);
    var x=[];
    for(var i in{xxx1:1}){
        var ob=5+Math.floor(Math.random()*6), // количество оборотов 5 минимум, 10 - максимум
         nn=Math.random()*numImage;
            num1=Math.floor(nn), // выигравший нумер
            o1={
                ob:ob,num1:num1,
            a:document.getElementById(i), // это наш контрол с классом XXX
            // время=(speedStart)/speedStep
            // расстояние=(speedStart/2)*время -арифм прогр
            // расстояние=speedStart^2/(2*speedStep)
            // speedStart=sqrt(расстояние*2*speedStep)
            speed:Math.sqrt(((ob*numImage+num1)* oneHeight)* speedStep*2), // скорость
            scr:-26 // магия, блин 
        }; // выигравший номер
        x.push(o1);
        console.dir(o1);
    }
    for(var i in{xxx2:1}){
        var ob=5+Math.floor(Math.random()*6), // количество оборотов 5 минимум, 10 - максимум
         nn=Math.random()*numImage;
            num2=Math.floor(nn), // выигравший нумер
            o2={
                ob:ob,num2:num2,
            a:document.getElementById(i), // это наш контрол с классом XXX
            // время=(speedStart)/speedStep
            // расстояние=(speedStart/2)*время -арифм прогр
            // расстояние=speedStart^2/(2*speedStep)
            // speedStart=sqrt(расстояние*2*speedStep)
            speed:Math.sqrt(((ob*numImage+num2)* oneHeight)* speedStep*2), // скорость
            scr:-26 // магия, блин 
        }; // выигравший номер
        x.push(o2);
        console.dir(o2);
    }
    for(var i in{xxx3:1}){
        var ob=5+Math.floor(Math.random()*6), // количество оборотов 5 минимум, 10 - максимум
         nn=Math.random()*numImage;
            num3=Math.floor(nn), // выигравший нумер
            o3={
                ob:ob,num3:num3,
            a:document.getElementById(i), // это наш контрол с классом XXX
            // время=(speedStart)/speedStep
            // расстояние=(speedStart/2)*время -арифм прогр
            // расстояние=speedStart^2/(2*speedStep)
            // speedStart=sqrt(расстояние*2*speedStep)
            speed:Math.sqrt(((ob*numImage+num3)* oneHeight)* speedStep*2), // скорость
            scr:-26 // магия, блин 
        }; // выигравший номер
        x.push(o3);
        console.dir(o3);
    }  
    LetsGo.interval=setInterval(
        function (){
            var i = x.length,complete=true;
            while(i--){ 
                var a=x[i];
                a.scr+=a.speed;
                if(a.speed>2*speedStep){ 
                    a.speed-=speedStep;complete=false;
                } else if(a.speed>0) { 
                    var t= Math.round(a.scr / oneHeight);
                    console.dir(t);
                    if(t>=numImage) t=0;
                    console.log(i,t,a.scr-oneHeight*t,a.ob,a.num);
                    a.scr=oneHeight*t;
                    a.speed=0;
                    complete=false;
                }
                if(a.scr>(oneHeight*numImage))
                    a.scr-=oneHeight*numImage;
                a.a.scrollTop=Math.floor(a.scr);
            }
            if(complete) clearInterval(LetsGo.interval);
        },20)
        gemeOver();
    }
//Функция начисления бонуса при совпадении двух и более элементов, при отсутствии совпадений отнимается одно очко, а при отсутствии очков вызиваеться функция окончания игры.
function gemeOver() {
    let countScore = score
    if(o1.num1 == o2.num2 || o2.num2 == o3.num3) {
        countScore.innerText = Number(countScore.innerText) + 3;
    } if(o1.num1 == o2.num2 && o1.num2 == o3.num3) {
        countScore.innerText = Number(countScore.innerText) + 10;
    } if(Number(countScore.innerText) <= 0 ) {
        endGame();
    } else {
        countScore.innerText = Number(countScore.innerText) - 1;
    }
}

function endGame() {
    let scoreBlock = document.querySelector("#end h3 span");
    
    gameBlock.innerHTML = "";
    let endBlock = document.querySelector("#end");
    endBlock.style.display = "block";

    let restartButton = document.querySelector("#end button");
    restartButton.onclick = restart;

} 
// Функция "рестарт" - перезагрузка страницы
function restart() {
    location.reload();
}




























function restart() {
    location.reload();
}