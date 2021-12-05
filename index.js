let circle = document.getElementsByClassName('menu_circle');

//divの生成
let div_element;
function createDiv(){
    for(let i = 0 ; i < 2; i++){
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
        img_element.classList.add('menu_image1');
        getimage[k].appendChild(img_element);    
}

createDiv();


//ランダムにモグラ(Mole)を出す。ランダムにモグラ(Mole)をなおす
function displayMole(){
    var min = 0 ;
    var max = 1 ;
    var randomnum_dis = Math.floor( Math.random() * (max + 1 - min) ) + min ;
    var randomnum_hide = Math.floor( Math.random() * (max + 1 - min) ) + min ;
    if(randomnum_dis == randomnum_hide){
        return;
    }else{
        imgarry[randomnum_dis].className = 'menu_move';
        imgarry[randomnum_hide].className = 'menu_image1';
        
    } 
}

window.onload =  function repeatfunction(){
        setID = setInterval("displayMole()", 300);
}



let begi_mode = document.getElementById('beginner-mode');

begi_mode.onclick = function(){
    window.location.href = 'initial.html'; 
}

let inter_mode = document.getElementById('intermediate-mode');

inter_mode.onclick = function(){
    window.location.href = 'second.html'; 
}

let senior_mode = document.getElementById('senior-mode');

senior_mode.onclick = function(){
    window.location.href = 'third.html'; 
}
