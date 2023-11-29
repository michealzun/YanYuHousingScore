//scrolling
var sounds = false;
var musicBtn = document.querySelectorAll(".musicbutton");
musicBtn.forEach(e => {
    e.addEventListener("click",function(){
        setMusic(e.dataset.musicsetting);});
});
function setMusic(mSetting){
    if(mSetting=="on")music();
    document.querySelector("#landing").style.top="-100%";
}


var menuanchors = document.querySelectorAll(".topnav_listitem");
menuanchors.forEach(e => {
    e.addEventListener("click",function(){smoothScroll(e.dataset.menuanchor);});
});
function smoothScroll(target){
    document.querySelector(target).scrollIntoView({behavior:'smooth'});
}
/*
//mouse position
var position
document.addEventListener('mousemove', e => {
    document.elementFromPoint(e.clientX, e.clientY) 
}, {passive: true})

//scroll
window.onscroll = scrollFunction;
function scrollFunction() {
    console.log("aaa");
}*/


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
    document.querySelector("#topnav").style.top = "calc(-100px)";
}
function navBarShow(){
    document.querySelector("#topnav").style.top = "0px";
}
*/

function localChange(src) {
  switch(src.value){
    case "江南":
          document.querySelector("#landSpaceInput").value=421;
          document.querySelector("#waterSpaceInput").value=188;
        break;
    case "巴蜀":
          document.querySelector("#landSpaceInput").value=457;
          document.querySelector("#waterSpaceInput").value=0;
        break;
    case "南洋":
          document.querySelector("#landSpaceInput").value=460;
          document.querySelector("#waterSpaceInput").value=118;
        break;
    default:
        document.querySelector("#landSpaceInput").value=368;
        document.querySelector("#waterSpaceInput").value=0;
  }
      
}

function plan(){
    
    furniturePlan();
}


//得分系统
const sO1 = [20,-1];               //structure Orange max number 1
const sO2 = [20,1,-1];                //连续放加两个0分就停止继续放,遇到-1就是完成了
const sO4 = [17,3,0,1,-1]              
const sO5 = [16,3,1,-1]
const sO10= [12,4,2,1,1,0,1,-1]
const sO100=[2,2,1,2,1,1,1,1,1,0,1,0,1,0,1,-1]
const sP1 = [20,-1];               //purple
const sP2 = [19,3,-1];
const sP5 = [15,3,2,-1];
const sP10= [12,4,2,1,1,-1];
const sP80= [2,2,2,2,1,1,1,1,0,1,0,1,0,1,-1];
const sB1 = [15,-1];               //blue
const sB2 = [13,2,-1];
const sB4 = [8,2,-1]
const sB5 = [11,2,2,-1];
const sB10= [9,3,1,1,1,-1];
const sB20= [6,3,1,2,0,1,1,-1];
const sB30= [4,3,2,1,1,1,0,1,-1];
const sB50= [3,2,1,2,1,0,1,1,0,1,-1];
const sB60= [2,2,2,1,1,1,0,1,0,1,0,1,-1];
const sB80= [1,3,1,1,0,1,1,1,0,1,-1];
const sB100=[1,2,1,1,1,0,1,1,0,1,-1];
const sG1 = [10,-1];              //green
const sG5 = [7,2,1,-1];
const sG10= [6,2,1,0,1,-1];
const sG20= [4,2,1,1,0,1,-1];
const sG30= [3,1,2,0,1,1,-1];
const sG40= [2,2,1,1,0,1,0,1,-1];
const sG50= [2,1,1,1,1,0,1,-1];
const sG60= [1,2,1,0,1,1,-1];
const sG80= [1,1,1,1,0,1,0,1,-1];
const sG100=[1,1,0,1,1,-1];
const sW1 = [10,-1];                //white
const sW3 = [8,2,-1]; 
const sW10= [6,2,1,0,1,-1]; 
const sW15= [4,2,2,0,1,-1]; 
const sW20= [4,2,1,1,0,1,-1]; 
const sW30= [3,1,2,0,1,1,-1]; 
const sW60= [1,2,1,0,1,1,-1]; 

//structure data
//家具
var furnatures = [//name,pointer, scoring class,space occupide
    //休息
    ["棕木桌",0,sO10,1], 
    ["棕木椅",0,sO10,1],
    ["松木软榻",0,sO10,1],
    ["太阴石",0,sO4,1],
    ["翠竹摇椅",0,sO5,1],
    ["紫玉八仙桌",0,sP5,4],
    ["太师椅",0,sP5,1],
    ["虎皮椅",0,sP5,1],
    ["翅木架子床",0,sP5,1],
    ["雕花八仙桌",0,sB5,4],
    ["镶玉圈椅",0,sB5,1],
    ["罗汉床",0,sB5,1],
    ["撑尘架子床",0,sB5,1],
    ["硬木镶石桌",0,sG5,1],
    ["银纹交椅",0,sG5,1],
    ["圆凳",0,sG5,1],
    ["贵妃榻",0,sG5,1],
    //木几
    ["宗木柜",0,sO10,1],
    ["仲秋长案",0,sO4,1],
    ["翡玉架",0,sP1,1],
    ["宝鼎架",0,sP1,1],
    ["宝币架",0,sP1,1],
    ["雕凤翅木柜",0,sP2,1],
    ["嵌鎏长案",0,sP5,1],
    ["青花大陶",0,sP5,1],
    ["龙凤彩瓶",0,sP5,1],
    ["泰山石敢当",0,sP5,1],
    ["白釉侍女像",0,sP5,1],
    ["狮子滚绣雕",0,sP5,1],
    ["网背书架",0,sB10,1],
    ["花纹梳妆台",0,sB10,1],
    ["竹编博古架",0,sB10,1],
    ["烷衣纱",0,sB10,1],
    ["银质盘匜",0,sB10,1],
    ["紫檀衣架",0,sB2,1],
    ["清墨书案",0,sB10,1],
    ["文心雕案",0,sB10,1],
    ["园屏楠木",0,sB5,1],
    ["门书柜",0,sG10,1],
    ["经书柜",0,sG10,1],
    ["典籍柜",0,sG10,1],
    ["多宝柜",0,sG10,1],
    ["梳妆台",0,sG10,1],
    ["内甲架",0,sG10,1],
    ["宝剑架",0,sG10,1],
    ["宝刀架",0,sG10,1],
    ["长兵架",0,sG10,1],
    ["拳套架",0,sG10,1],
    ["博古架",0,sG10,1],
    ["便衣架",0,sG10,1],
    ["木制盘匜",0,sG10,1],
    ["松木案",0,sG10,1],
    //墙围
    ["千里江山屏",0,sP5,1],
    ["紫竹雪屏",0,sB20,1],
    ["金丝依柳屏",0,sB20,1],
    ["雪梅单屏",0,sB10,1],
    ["松木屏风",0,sG30,1],
    //光
    ["棕木烛台",0,sO10,1],
    ["金锣长明灯",0,sB10,1],
    ["砂笼烛台",0,sG10,1],
    ["铜鹤烛台",0,sG10,1]
];


//地板
var floorings = [//name,pointer, scoring class,space occupide
    ["棕木地板",0,sO100,1],
    ["秋竹编席",0,sO100,1], 
    ["青石方砖",0,sB100,1],
    ["红木地板",0,sG100,1],
    ["灰岩方砖",0,sG100,1]
]

//地毯
var carpets = [//name,pointer, scoring class,space occupide
    ["天华锦纹毯",0,sP5,9], 
    ["蜀褥毯",0,sB5,9],
    ["粗制地席",0,sG5,4],
    ["青鸾毛席",0,sG5,9]
]

//地砖
var tiles = [//name,pointer, scoring class,space occupide
    ["绿苔石板",0,sP80,1], 
    ["落叶石板",0,sP80,1],
    ["灰石板",0,sB80,1],
    ["青石路",0,sG80,1],
    ["石子路",0,sG80,1],
    ["青石板",0,sG80,1]
]

//水域
var water = [//name,pointer, scoring class,space occupide
    ["红漆木桥",0,sO10,1], 
    ["祈福河灯",0,sP10,1],
    ["潜龙浮雕",0,sP5,4],
    ["映月石灯",0,sB20,1],
    ["花岗岩桥",0,sB10,1],
    ["大浮萍群",0,sB10,4],
    ["大荷花淀",0,sB10,4],
    ["大王莲群",0,sB10,4],
    ["水象石雕",0,sB10,1],
    ["假山(水)",0,sG20,1],
    ["荷花水灯",0,sG20,1],
    ["浮萍群",0,sG20,1],
    ["荷花淀",0,sG20,1],
    ["王莲群",0,sG20,1],
    ["跳石",0,sG20,1],
    ["松木桥",0,sG20,1],
    ["碎石桥",0,sG20,1]
]


function plan(){
    maximizePoints("#furnitureSpaceInput", "#furnitureOutput",furnatures);
    maximizePoints("#flooringSpaceInput","#flooringOutput", floorings);
    maximizePoints("#furnitureSpaceInput","#carpetOutput", carpets);
    maximizePoints("#landSpaceInput","#tileOutput", tiles);
    maximizePoints("#waterSpaceInput","#waterOutput", water);
}

function maximizePoints(spaceInput,textOutput, structureList){
        document.querySelector(textOutput).innerHTML="";
    
    var space = document.querySelector(spaceInput).value;
    structureList.forEach(e => e[1]=0);
    while(space>0){
        structureList.sort(function(a,b){ return (a[2][a[1]]/parseFloat(a[3])) < (b[2][b[1]]/parseFloat(b[3])) ? 1 : -1; });
        if(structureList[0][2][structureList[0][1]]==-1)break; //遇到-1了也就是该放的都放了
        structureList[0][1]++;
        space-=structureList[0][3];  
    }

    structureList.forEach(e => {
        if(e[1]>0){
            document.querySelector(textOutput).innerHTML+= e[0] + " x " + e[1] + "<br>";}
        });
}


