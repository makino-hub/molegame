//imageの要素を生成してimage1の表示
let circle = document.getElementsByClassName('circle');


//divの生成
let div_element;
function createDiv(){
    for(let i = 0 ; i < 10; i++){
        div_element = document.createElement('div');
        div_element.classList.add('display-image');
        circle[i].appendChild(div_element);
        createImage(i);

    }
}

//モグラの生成
let  imgarry = [];
let  img_element;
let  getimage;
function createImage(k){
        getimage = document.getElementsByClassName('display-image');
        img_element = document.createElement('img');
        imgarry[k] = img_element;
        img_element.src = 'image1.png'; // 画像パス
        img_element.alt = 'image1'; // 代替テキスト
        img_element.classList.add('image1');
        getimage[k].appendChild(img_element); 
        img_element.onclick = click;    
}

createDiv();

//ランダムにモグラ(Mole)を出す。ランダムにモグラ(Mole)をなおす
let getdisnumber;
let gethidenumver;
function displayMole(){
    var min = 0 ;
    var max = 9 ;
    var randomnum_dis = Math.floor( Math.random() * (max + 1 - min) ) + min ;
    var randomnum_hide = Math.floor( Math.random() * (max + 1 - min) ) + min ;
    if(randomnum_dis == randomnum_hide){
        
        return;
    }else{
        if(imgarry[randomnum_dis].className == 'image2' || imgarry[randomnum_hide].className == 'image2'){
            getdisnumber = randomnum_dis;
            gethidenumver = randomnum_hide;
            setTimeout(settimechange, 100);
        }else{
            imgarry[randomnum_hide].className = 'image1';
            imgarry[randomnum_dis].className = 'move'; 

        }
    }
}

function settimechange(){
    imgarry[gethidenumver].className = 'image1';
    imgarry[getdisnumber].className = 'move'; 
}


let startbutton = document.getElementById('start-button');

function repeatfunction(number){
    if(number == 1){
        //1000ミリ秒（1秒）毎に関数「showNowDate()」を呼び出す
        setID = setInterval("displayMole()", 400);
        PassageID = setInterval('timerCount()',1000); 
     }else{
         
         return;
     }
}

//スタートボタンを押すとはじまり
let startjuge = 0 ;
 startbutton.onclick =  function(){
     if(startjuge == 0){
        startjuge = 1;
        repeatfunction(startjuge);
     }else{
         return ;
     }

}



//モグラを叩いたら画像を変更
let score = 0;
let elm;

function click(e){
    elm = e.target;
    if(elm.className == "move" ){
        elm.className = 'image2';
        elm.src = 'image2.png';
        //imgをimage1に直す作業
        setTimeout(returnImg, 100);

        //ポイントをカウントする
        score ++;
        diplayScore();

    }else{
        return;
    }
}

//imgをimage1に直す作業
function returnImg(){
    elm.className = 'image1';
    elm.src = 'image1.png';
}


//スコアを表示
let display_Score = document.getElementById('score');

function diplayScore(){
    display_Score.innerHTML = score + " Point";
}

diplayScore();



//時間の経過の表示
let displayTime = document.getElementById('time');
let timercount = 0;


function timerCount(){
    if(startjuge == 0){
        displayTime.innerHTML = timercount + ' / 30s';
    }else{
        if(timercount < 30){
            timercount ++;
            displayTime.innerHTML = timercount + ' / 30s';
        }else{
            clearInterval( PassageID );
            clearInterval(setID);
            window.alert("Finish!! ポイントは" + score + "点です。");
            //スコアをリセット 
            score = 0 ;
            diplayScore();
            //moveモグラをimage1モグラにリセットする必要がある
            for(let i = 0 ; i < 10; i++){
                imgarry[i].className = 'image1';
            }
            timercount = 0;
            displayTime.innerHTML = timercount + ' /30s'
            startjuge = 0 ;
            repeatfunction(startjuge);
        }

    }
} 

timerCount();


let back_button =  document.getElementById('back-button');

back_button.onclick = function(){
    let confirmback = window.confirm('メニューに戻りますか？'); 
    if(confirmback){
        window.location.href = 'index.html'; 
    }else{
        return;
    }
}



