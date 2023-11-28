//scrolling
var sounds = false;
var menuanchors = document.querySelectorAll(".topnav_listitem");
menuanchors.forEach(e => {
    e.addEventListener("click",function(){smoothScroll(e.dataset.menuanchor);});
});
function smoothScroll(target){
    console.log(target) 
    document.querySelector(target).scrollIntoView({behavior:'smooth'});
}

//mouse position
var position
document.addEventListener('mousemove', e => {
    document.elementFromPoint(e.clientX, e.clientY) 
}, {passive: true})

//scroll
window.onscroll = scrollFunction;
function scrollFunction() {
    console.log("aaa");
}



var musicAudio = document.querySelector("#music");
function music() {
    sounds = !sounds;
    if(sounds){
        document.querySelector("#music_switch").src= "./images/unmute.png";
        musicAudio.play();
    }else{
        document.querySelector("#music_switch").src= "./images/mute.png";
        musicAudio.pause();
    }
}
/*
function navBarHide(){
    document.querySelector("#topnav").style.top = "100px";
}

function navBarShow(){
    document.querySelector("#topnav").style.top = "0px";
}
*/
//得分系统
const sO1 = [20,0];               //structure Orange max number 1
const sO2 = [20,1,0];
const sO4 = [17,3,0]              //keep going untill we hit a 0
const sO5 = [16,3,1,0]
const sO10= [12,4,2,1,1,0]
const sO100=[2,2,1,2,1,1,1,1,1,1,0]
const sP1 = [20,0];               //purple
const sP2 = [19,3,0];
const sP5 = [15,3,2,0];
const sP10= [12,4,2,0];
const sP80= [2,2,2,2,1,1,1,1,0];
const sB1 = [15,0];               //blue
const sB2 = [13,2,0];
const sB4 = [8,2,0]
const sB5 = [11,2,2,0];
const sB10= [9,3,1,1,1,0];
const sB20= [6,3,1,2,0];
const sB30= [4,3,2,1,1,1,0];
const sB50= [3,2,1,1,1,0];
const sB60= [2,2,2,1,1,1,0];
const sB80= [1,3,1,0];
const sB100=[1,2,1,1,1,0];
const sG1 = [10,0];              //green
const sG5 = [7,2,1,0];
const sG10= [6,2,1,0];
const sG20= [4,2,1,1,0];
const sG30= [3,1,2,0];
const sG40= [2,2,1,1,0];
const sG50= [2,1,1,1,1,0];
const sG60= [1,2,1,0];
const sG80= [1,1,1,1,0];
const sG100=[1,1,0];
const sW1 = [10,0];                //white
const sW3 = [8,2,0]; 
const sW10= [6,2,1,0]; 
const sW15= [4,2,2,0]; 
const sW20= [4,2,1,1,0]; 
const sW30= [3,1,2,0]; 
const sW60= [1,2,1,0]; 
//家具
var furnatures = [
    ["棕木桌",0,sO10], //name,pointer, scoring class
    ["棕木椅",0,sO10],
    ["松木软榻",0,sO10],
    ["太阴石",0,sO4],
    ["翠竹摇椅",0,sO5],
    ["宗木柜",0,sO10],
    ["仲秋长案",0,sO4],
    ["棕木桌",0,sO1],
    ["棕木烛台",0,sO10],
    //["紫玉八仙桌",0, sP5] 占4空间
    ["太师椅",0, sP5],
    ["虎皮椅",0, sP5],
    ["翅木架子床",0, sP5],
    ["翡玉架",0, sP1],
    ["宝鼎架",0, sP1],
    ["宝币架",0, sP1],
    ["雕凤翅木柜",0, sP2],
    ["嵌鎏长案",0, sP5],
    ["青花大陶",0, sP5],
    ["龙凤彩瓶",0, sP5],
    ["泰山石敢当",0, sP5],
    ["白釉侍女像",0, sP5],
    ["狮子滚绣雕",0, sP5],
    //["千里江山屏", sP?],
    //["雕花八仙桌", sB5],占4空间
    ["镶玉圈椅",0, sB5],
    ["罗汉床",0, sB5],
    ["撑尘架子床",0, sB5],
    ["网背书架",0, sB10],
    ["花纹梳妆台",0, sB10],
    ["竹编博古架",0, sB10],
    ["烷衣纱",0, sB10],
    ["银质盘匜",0, sB10],
    ["紫檀衣架",0, sB2],
    ["清墨书案",0, sB10],
    ["文心雕案",0, sB10],
    ["园屏楠木",0, sB5],
    ["紫竹雪屏",0, sB20],
    ["金丝依柳屏",0, sB20],
    ["雪梅单屏",0, sB10],
    ["金锣长明灯",0, sB10],
    ["硬木镶石桌",0, sG5],
    ["银纹交椅",0, sG5],
    ["圆凳",0, sG5],
    ["贵妃榻",0, sG5],
    ["门书柜",0, sG10],
    ["经书柜",0, sG10],
    ["典籍柜",0, sG10],
    ["多宝柜",0, sG10],
    ["梳妆台",0, sG10],
    ["内甲架",0, sG10],
    ["宝剑架",0, sG10],
    ["宝刀架",0, sG10],
    ["长兵架",0, sG10],
    ["拳套架",0, sG10],
    ["博古架",0, sG10],
    ["便衣架",0, sG10],
    ["木制盘匜",0, sG10],
    ["松木案",0, sG10],
    ["松木屏风",0, sG30],
    ["砂笼烛台",0, sG10],
    ["铜鹤烛台",0, sG10]
];
function furnitureCalc(){
    document.querySelector("#furnitureOutput").innerHTML="";
    
    var space = document.querySelector("#furnitureSpaceInput").value;
    furnatures.forEach(e => e[1]=0);
    while(space>0){
        furnatures.sort(function(a,b){ return a[2][a[1]] < b[2][b[1]] ? 1 : -1; });
        furnatures[0][1]++;
        space--;
    }

    furnatures.forEach(e => {
        if(e[1]>0){
            document.querySelector("#furnitureOutput").innerHTML+= e[0] + " x " + e[1] + "<br>";}
        });
}

