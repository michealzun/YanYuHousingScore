//custom cursor
const cursor = document.querySelector(".cursor");

document.addEventListener('mousemove', e => {
    cursor.style.visibility = 'visible';
    cursor.style.left =  e.pageX  + 'px';
    cursor.style.top = e.pageY  + 'px';
}, {passive: true});

document.addEventListener('click', e => {
    cursor.style.visibility = 'visible';
    cursor.classList.add("expand");
    setTimeout(()=>{
        cursor.classList.remove("expand");
    },300)
});

document.addEventListener('scroll', e => {
    cursor.style.visibility = 'hidden';
});


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

var homeLocation="中原";
function localChange(src) {
    homeLocation=src.value;
    switch(homeLocation){
    case "江南":
          document.querySelector("#landSpaceInput").value=421;
          document.querySelector("#waterSpaceInput").value=188;
          document.querySelector("#locationSetting").style.backgroundImage = "url('./images/水.png')";
        break;
    case "巴蜀":
          document.querySelector("#landSpaceInput").value=457;
          document.querySelector("#waterSpaceInput").value=0;
          document.querySelector("#locationSetting").style.backgroundImage = "url('./images/山.png')";
        break;
    case "南洋":
          document.querySelector("#landSpaceInput").value=460;
          document.querySelector("#waterSpaceInput").value=118;
          document.querySelector("#locationSetting").style.backgroundImage = "url('./images/岛.png')";
        break;
    case "大漠":
          document.querySelector("#landSpaceInput").value=472;
          document.querySelector("#waterSpaceInput").value=116;
          document.querySelector("#locationSetting").style.backgroundImage = "url('./images/沙.png')";
        break;
    default:
        document.querySelector("#landSpaceInput").value=368;
        document.querySelector("#waterSpaceInput").value=0;
        document.querySelector("#locationSetting").style.backgroundImage = "url('./images/中原.png')";
  }
      
}


//得分系统
function scoreSelector(color,maxNum){
    switch(color){
        case "橙":
            switch(maxNum){
                case 100:   return [2,2,1,2,1,1,1,1,1,0,1,0,1,0,1,-1];
                case 10:    return [12,4,2,1,1,0,1,-1];
                case 5:     return [16,3,1,-1];
                case 4:     return [17,3,0,1,-1];
                case 2:     return [20,1,-1];
                default:    return [20,-1]; 
            }
        case "紫":
            switch(maxNum){
                case 80:    return [2,2,2,2,1,1,1,1,0,1,0,1,0,1,-1];
                case 10:    return [12,4,2,1,1,-1];
                case 5:     return [15,3,2,-1];
                case 2:     return [19,3,-1];
                default:    return [20,-1];
            }
        case "蓝":
           switch(maxNum){
                case 100:   return [1,2,1,1,1,0,1,1,0,1,-1];
                case 80:    return [1,3,1,1,0,1,1,1,0,1,-1];
                case 60:    return [2,2,2,1,1,1,0,1,0,1,0,1,-1];
                case 50:    return [3,2,1,2,1,0,1,1,0,1,-1];
                case 30:    return [4,3,2,1,1,1,0,1,-1];
                case 20:    return [6,3,1,2,0,1,1,-1];
                case 10:    return [9,3,1,1,1,-1];
                case 5:     return [11,2,2,-1];
                case 4:     return [8,2,-1];
                case 2:     return [13,2,-1];
                default:    return [15,-1]; 
            }
        case "绿":
            switch(maxNum){
                case 100:   return [1,1,0,1,1,-1];
                case 80:    return [1,1,1,1,0,1,0,1,-1];
                case 60:    return [1,2,1,0,1,1,-1];
                case 50:    return [2,1,1,1,1,0,1,-1];
                case 40:    return [2,2,1,1,0,1,0,1,-1];
                case 30:    return [3,1,2,0,1,1,-1];
                case 20:    return [4,2,1,1,0,1,-1];
                case 10:    return [6,2,1,0,1,-1];
                case 5:     return [7,2,1,-1];
                default:    return [10,-1]; 
            }
        default://白色
            switch(maxNum){
                case 60:    return [1,2,1,0,1,1,-1]; 
                case 30:    return [3,1,2,0,1,1,-1];
                case 20:    return [4,2,1,1,0,1,-1]; 
                case 15:    return [4,2,2,0,1,-1]; 
                case 10:    return [6,2,1,0,1,0,0,0,0,0,-1]; 
                case 3:     return [8,2,0,-1]; 
                default:    return [10,-1];  
            }
    }
}

//structure data
var mustBuilds=[//强制建筑
    ["主宅",0,"白",1,7],
    ["马厩",0,"白",1,9],
    ["厨房",0,"白",1,7],
    ["练武场",0,"白",1,7],
    ["池塘",0,"白",1,4],
    ["鸡窝",0,"白",3,1],
    ["羊圈",0,"白",3,1],
    ["牛棚",0,"白",3,1]
]

var mustBuildsSpecial=[//地区建筑
    ["地区特殊建筑",0,"白",10,0]
]


var landStructures=[//室外建筑: name,pointer, color, max number,space occupide
    //家宅
    ["厢房",0,"白",20,3],
    ["农田",0,"白",30,1],
    ["耳房",0,"白",20,1],
    ["凉亭",0,"白",10,3],
    //["游廊",0,sW60,1], WIP
    
    //木石
    ["文墨石碑",0,"橙",10,1],
    ["福康树",0,"橙",5,4],
    //["食铁兽石雕",0,"橙",？,？],
    //["红车木",0,"紫",？,1],
    ["粉红佳人",0,"紫",10,1],
    ["三色春",0,"紫",10,1],
    ["百年杏树",0,"紫",5,4],
    ["白莲花池",0,"紫",2,4],
    ["红车木",0,"紫",60,1],
    ["金钱树",0,"蓝",60,1],
    ["银杏",0,"蓝",60,1],
    ["楠木",0,"蓝",60,1],
    ["凤凰木",0,"蓝",60,1],
    ["八月桂",0,"蓝",60,1],
    ["八月桂盆栽",0,"蓝",10,1],
    ["山茶花盆栽",0,"蓝",10,1],
    ["香甘菊花圃",0,"蓝",30,1],
    ["双花盆栽",0,"蓝",10,1],
    ["留园假山",0,"蓝",20,1],
    ["翠竹",0,"蓝",60,1],
    ["白玉狮子",0,"蓝",10,1],
    ["古松石碑",0,"蓝",10,1],
    ["青柳树",0,"蓝",60,1],
    ["古代松树",0,"蓝",60,1],
    ["芦苇荡",0,"蓝",30,1],
    ["榕树",0,"蓝",60,1],
    ["白桦树",0,"蓝",60,1],
    ["柏树",0,"蓝",60,1],
    ["灌木丛",0,"绿",30,1],
    ["巨石",0,"绿",30,1],
    ["石桌",0,"绿",30,1],
    ["水缸",0,"绿",20,1],
    ["松木盆",0,"绿",20,1],
    ["兰花盆",0,"绿",20,1],
    ["冷杉盆",0,"绿",20,1],
    ["百榆",0,"绿",60,1],
    ["碧桃",0,"绿",60,1],
    ["云杉",0,"绿",60,1],
    ["香樟",0,"绿",60,1],
    ["牡丹",0,"绿",30,1],
    ["紫丁香",0,"绿",30,1],
    ["杜鹃",0,"绿",30,1],
    ["玉兰",0,"绿",30,1],
    ["宝剑石雕",0,"绿",10,1],
    ["青石狮子",0,"绿",10,1],
    ["假山",0,"绿",20,1],
    ["花丛一",0,"绿",20,1],
    ["花丛二",0,"绿",20,1],
    ["花丛三",0,"绿",20,1],
    ["花丛四",0,"绿",20,1],
    ["榆木盆栽",0,"绿",20,1],
    //杂设
    ["小木马",0,"橙",5,1],
    ["煤球石雕",0,"橙",5,1],
    ["蓝鲸花灯",0,"橙",2,1],
    ["桐木画架",0,"橙",1,1],
    ["星如雨",0,"橙",6,1],
    ["太乙石雕",0,"橙",2,1],
    ["天刀石雕",0,"橙",2,1],
    ["泠月石雕",0,"橙",2,1],
    ["二哈石雕",0,"橙",2,1],
    ["少林石雕",0,"橙",2,1],
    ["剑王石雕",0,"橙",2,1],
    ["极乐石雕",0,"橙",2,1],
    ["竹节灯",0,"橙",20,1],
    ["七彩琉璃",0,"橙",5,1],
    ["红珊瑚树",0,"橙",20,1],
    ["水母缸",0,"橙",10,1],
    ["浮华木塔",0,"紫",10,1],
    ["太平锣",0,"紫",2,1],
    ["青花瓷缸",0,"紫",10,1],
    //["西域毯架",0,"紫",？,1],
    //["葫芦不倒翁",0,"紫",？,1],
    //["下沉篝火",0,"紫",？,1],
    ["战斗木人",0,"蓝",5,1],
    //["珍珠毯架",0,"蓝",？,1],
    //["酒坛架子",0,"蓝",？,1],
    //["仿制地动仪",0,"蓝",？,1],
    ["草垛",0,"绿",20,1],
    ["木草铁炉",0,"绿",1,1],
    ["木架",0,"绿",10,1],
    ["树围",0,"绿",20,0.000001],
    ["招帖牌",0,"绿",1,1],
    ["松木桶",0,"绿",10,1],
    ["避暑布伞",0,"绿",10,1],
    ["机关砖",0,"白",15,1],
    //墙围
    ["朱红墙围",0,"橙",100,1],
    ["竹排墙",0,"紫",100,1],
    ["竹排门",0,"紫",20,1],
    ["文竹牌楼",0,"紫",5,1],
    ["石质牌坊",0,"蓝",10,1],
    ["灰瓦红墙",0,"蓝",100,1],
    ["灰瓦红墙门",0,"蓝",20,1],
    ["绿瓦墙",0,"蓝",100,1],
    ["绿瓦墙门",0,"蓝",20,1],
    ["竹编围栏",0,"蓝",100,1],
    ["竹编围栏门",0,"蓝",20,1],
    ["青瓦映壁",0,"蓝",5,1],
    ["木制牌坊",0,"绿",10,1],
    ["灰瓦墙",0,"绿",100,1],
    ["灰瓦墙门",0,"绿",20,1],
    ["松木围栏",0,"绿",100,1],
    ["松木围栏门",0,"绿",20,1],
    //光源
    ["红灯笼",0,"橙",20,1],
    ["鱼龙舞",0,"橙",20,1],
    ["千华树",0,"橙",20,1],
    ["文墨灯",0,"紫",10,1],
    //["宫灯綵架",0,"紫",？,1],
    ["七宝笼灯",0,"蓝",20,1],
    ["红纱灯笼",0,"蓝",20,1],
    ["青竹灯",0,"蓝",20,1],
    ["玉兔花灯",0,"蓝",4,1],
    ["青石灯",0,"绿",20,1],
    ["松木灯笼",0,"绿",20,1],
]

var tiles = [//地砖: name,pointer, color, max number,space occupide
    ["绿苔石板",0,"紫",80,1], 
    ["落叶石板",0,"紫",80,1],
    ["灰石板",0,"蓝",80,1],
    ["青石路",0,"绿",80,1],
    ["石子路",0,"绿",80,1],
    ["青石板",0,"绿",80,1]
]


var extraWater = [
    ["水域",0,"绿",100,1]
]

var waterStructures = [//水域建筑: name,pointer, color, max number,space occupide
    ["红漆木桥",0,"橙",10,1], 
    ["龙王舟",0,"橙",5,4],
    ["祈福河灯",0,"紫",10,1],
    ["潜龙浮雕",0,"紫",5,4],
    //["池杉",0,"紫",？,？],
    ["映月石灯",0,"蓝",20,1],
    ["花岗岩桥",0,"蓝",10,1],
    ["大浮萍群",0,"蓝",10,4],
    ["大荷花淀",0,"蓝",10,4],
    ["大王莲群",0,"蓝",10,4],
    ["水象石雕",0,"蓝",10,1],
    ["假山(水)",0,"绿",20,1],
    ["荷花水灯",0,"绿",20,1],
    ["浮萍群",0,"绿",20,1],
    ["荷花淀",0,"绿",20,1],
    ["王莲群",0,"绿",20,1],
    ["跳石",0,"绿",20,1],
    ["松木桥",0,"绿",20,1],
    ["碎石桥",0,"绿",20,1]
]


var furnitures = [//家具: name,pointer, color, max number,space occupide
    //休息
    ["棕木桌",0,"橙",10,1], 
    ["棕木椅",0,"橙",10,1],
    ["松木软榻",0,"橙",10,1],
    ["太阴石摇椅",0,"橙",4,1],
    ["翠竹摇椅",0,"橙",10,1],
    ["紫玉八仙桌",0,"紫",5,4],
    ["太师椅",0,"紫",5,1],
    ["虎皮椅",0,"紫",5,1],
    ["翅木架子床",0,"紫",5,1],
    //["桃木躺椅",0,"紫",？,1],
    ["雕花八仙桌",0,"蓝",5,4],
    ["镶玉圈椅",0,"蓝",5,1],
    ["罗汉床",0,"蓝",5,1],
    ["撑尘架子床",0,"蓝",5,1],
    ["硬木镶石桌",0,"绿",5,1],
    ["银纹交椅",0,"绿",5,1],
    ["圆凳",0,"绿",5,1],
    ["贵妃榻",0,"绿",5,1],
    //木几
    ["宗木柜",0,"橙",10,1], 
    ["仲秋长案",0,"橙",4,1], 
    ["翡玉架",0,"紫",1,1],
    ["宝鼎架",0,"紫",1,1],
    ["宝币架",0,"紫",1,1],
    ["嵌鎏长案",0,"紫",5,1],
    ["青花大陶",0,"紫",5,1],
    ["龙凤彩瓶",0,"紫",5,1],
    ["泰山石敢当",0,"紫",5,1],
    ["白釉侍女像",0,"紫",5,1],
    ["狮子滚绣雕",0,"紫",5,1],
    ["雕凤翅木柜",0,"紫",2,1],
    //["飞马木雕",0,"紫",？,1],
    ["网背书架",0,"蓝",10,1],
    ["花纹梳妆台",0,"蓝",10,1],
    ["竹编博古架",0,"蓝",10,1],
    ["烷衣纱",0,"蓝",10,1],
    ["银质盘匜",0,"蓝",10,1],
    ["清墨书案",0,"蓝",10,1],
    ["文心雕案",0,"蓝",10,1],
    ["园屏楠木",0,"蓝",5,1],
    ["紫檀衣架",0,"蓝",2,1],
    //["飞鹰木雕",0,"蓝",？,1],
    ["门书柜",0,"绿",10,1],
    ["经书柜",0,"绿",10,1],
    ["典籍柜",0,"绿",10,1],
    ["多宝柜",0,"绿",10,1],
    ["梳妆台",0,"绿",10,1],
    ["内甲架",0,"绿",10,1],
    ["宝剑架",0,"绿",10,1],
    ["宝刀架",0,"绿",10,1],
    ["长兵架",0,"绿",10,1],
    ["拳套架",0,"绿",10,1],
    ["博古架",0,"绿",10,1],
    ["便衣架",0,"绿",10,1],
    ["木制盘匜",0,"绿",10,1],
    ["松木案",0,"绿",10,1],
    ["金鸡木雕",0,"绿",5,1],
    //墙围
    ["千里江山屏",0,"紫",5,1],
    ["紫竹雪屏",0,"蓝",20,1],
    ["金丝依柳屏",0,"蓝",20,1],
    ["雪梅单屏",0,"蓝",10,1],
    ["松木屏风",0,"绿",30,1],
    //光
    ["棕木烛台",0,"橙",10,1],
    ["金锣长明灯",0,"蓝",10,1],
    ["砂笼烛台",0,"绿",10,1],
    ["铜鹤烛台",0,"绿",10,1]
];


var floorings = [//地板: name,pointer, color, max number,space occupide
    ["棕木地板",0,"橙",100,1],
    ["秋竹编席",0,"橙",100,1], 
    ["青石方砖",0,"蓝",100,1],
    ["红木地板",0,"绿",100,1],
    ["灰岩方砖",0,"绿",100,1]
]

//地毯
var carpets = [//name,pointer, color, max number,space occupide
    //["西域毛毯",0,"紫",？,？], 
    ["天华锦纹毯",0,"紫",5,9], 
    //["梨花绒毯",0,"蓝",？,？],
    ["蜀褥毯",0,"蓝",5,9],
    //["翎羽毛毯",0,"绿",5,？],
    ["粗制地席",0,"绿",5,4],
    ["青鸾毛席",0,"绿",5,9]
]


function resetPointers(){
    mustBuilds.forEach(e => e[1]=0);
    mustBuildsSpecial.forEach(e => e[1]=0);
    landStructures.forEach(e => e[1]=0);
    tiles.forEach(e => e[1]=0);
    extraWater.forEach(e => e[1]=0);
    waterStructures.forEach(e => e[1]=0);
    furnitures.forEach(e => e[1]=0);
    floorings.forEach(e => e[1]=0);
    carpets.forEach(e => e[1]=0);
}

function plan(){
    //先建强制建筑，像主屋，厨房什么的
    var mustbuildBuildings = (homeLocation=="中原") ? mustBuilds : mustBuilds.concat(mustBuildsSpecial);
    var results = [maximizePoints(document.querySelector("#landSpaceInput").value-100,mustbuildBuildings)];//留个100空间(可能)给自定义水域    
    results[1]=(maximizePoints(results[0][0], landStructures)); //1是陆地建筑
    results[2]=(maximizePoints(results[0][0], tiles));//2是外面地板
    results[3]=(maximizePoints(document.querySelector("#waterSpaceInput").value, waterStructures));//3是水上建筑
    results[4]=(maximizePoints(document.querySelector("#furnitureSpaceInput").value, furnitures));//4是家具
    results[5]=(maximizePoints(document.querySelector("#flooringSpaceInput").value,floorings));//5是地板
    results[6]=(maximizePoints(document.querySelector("#furnitureSpaceInput").value*0.6,carpets));//6是地毯，减一些因为无法利用上所有空间
    results=custom100Water(results);//计算剩下的100陆地空间要不要用自定义水域

    display(results);
    resetPointers();
}

function maximizePoints(spaceLeft, structureList,points=0){
    while(spaceLeft>0){
        //用分数占地cp sort
        structureList.sort(function(a,b){ return (scoreSelector(a[2],a[3])[a[1]]/parseFloat(a[4])) < (scoreSelector(b[2],b[3])[b[1]]/parseFloat(b[4])) ? 1 : -1; });
        if(scoreSelector(structureList[0][2],structureList[0][3])[structureList[0][1]]==-1)break; //遇到-1了也就是放完了
        points+=scoreSelector(structureList[0][2],structureList[0][3])[structureList[0][1]];
        structureList[0][1]++;
        spaceLeft-=structureList[0][4];  
    }
    return [spaceLeft,structureList,points];
}


function custom100Water(results){
    results[1][0]+=100;//剩下的空间

    results[1][1].sort(function(a,b){ return (scoreSelector(a[2],a[3])[a[1]]/parseFloat(a[4])) < (scoreSelector(b[2],b[3])[b[1]]/parseFloat(b[4])) ? 1 : -1; });
    results[2][1].sort(function(a,b){ return (scoreSelector(a[2],a[3])[a[1]]/parseFloat(a[4])) < (scoreSelector(b[2],b[3])[b[1]]/parseFloat(b[4])) ? 1 : -1; });
    results[3][1].sort(function(a,b){ return (scoreSelector(a[2],a[3])[a[1]]/parseFloat(a[4])) < (scoreSelector(b[2],b[3])[b[1]]/parseFloat(b[4])) ? 1 : -1; });
    extraWater.sort(function(a,b){ return (scoreSelector(a[2],a[3])[a[1]]/parseFloat(a[4])) < (scoreSelector(b[2],b[3])[b[1]]/parseFloat(b[4])) ? 1 : -1; });
    var nextLandScore=scoreSelector(results[1][1][0][2],results[1][1][0][3])[results[1][1][0][1]];
    var nextTileScore=scoreSelector(results[2][1][0][2],results[2][1][0][3])[results[2][1][0][1]];
    var nextWaterScore=scoreSelector(results[3][1][0][2],results[3][1][0][3])[results[3][1][0][1]];
    var nextExWaterScore=scoreSelector(extraWater[0][2],extraWater[0][3])[extraWater[0][1]];
    
    console.log(results[1][0]);
    while(results[1][0]>0){
        //如果没建筑放了
        if(nextLandScore+nextTileScore+nextWaterScore+nextExWaterScore==-4) break;
        //计算是放陆地东西好还是水上东西好
        if(Math.min(nextLandScore, 0)+Math.min(nextTileScore, 0) > Math.min(nextWaterScore, 0)+Math.min(nextExWaterScore, 0)){//放建筑+地板
            var structSize=1;
            if(nextLandScore!=-1){//放建筑
                results[1][3]+=nextLandScore;
                results[1][1][0][1]++;//move pointer
                structSize=results[1][1][0][4]; //计算大小
                results[1][1].sort(function(a,b){ return (scoreSelector(a[2],a[3])[a[1]]/parseFloat(a[4])) < (scoreSelector(b[2],b[3])[b[1]]/parseFloat(b[4])) ? 1 : -1; });
                nextLandScore=scoreSelector(results[1][1][0][2],results[1][1][0][3])[results[1][1][0][1]];
            }
            if(nextTileScore!=-1){//放地板
                for (let i = 0; i < structSize && nextTileScore!=-1; i++) {
                    results[2][3]+=nextTileScore;
                    results[2][1][0][1]++;
                    results[2][1].sort(function(a,b){ return (scoreSelector(a[2],a[3])[a[1]]/parseFloat(a[4])) < (scoreSelector(b[2],b[3])[b[1]]/parseFloat(b[4])) ? 1 : -1; });
                    nextTileScore=scoreSelector(results[2][1][0][2],results[2][1][0][3])[results[2][1][0][1]];
                }
            }
            results[1][0]-=structSize;
        }else{//放水上建筑+水域1
            var structSize=1;
            if(nextWaterScore!=-1){
                results[3][3]+=nextWaterScore;
                results[3][1][0][1]++;
                structSize=results[3][1][0][4]; 
                results[3][1].sort(function(a,b){ return (scoreSelector(a[2],a[3])[a[1]]/parseFloat(a[4])) < (scoreSelector(b[2],b[3])[b[1]]/parseFloat(b[4])) ? 1 : -1; });
                nextWaterScore=scoreSelector(results[3][1][0][2],results[3][1][0][3])[results[3][1][0][1]];
            }
            for (let i = 0; i < structSize; i++) {
                extraWater[0][1]++;
                if(nextExWaterScore!=-1){
                    results[0][3]+=nextExWaterScore;
                    nextExWaterScore=scoreSelector(extraWater[0][2],extraWater[0][3])[extraWater[0][1]];
                }
            }
            results[1][0]-=structSize;
        }
    }
    results[1][1]=results[1][1].concat(extraWater);
    return results;
}

function colorOrdering(color){
    switch(color){
        case "橙": return 1;
        case "紫": return 2;
        case "蓝": return 3;
        case "绿": return 4;
        default: return 0;
    }
}

function display(results){

    var outputs= ['#forcedOutput',"#landStructureOutput","#tileOutput","#waterOutput","#furnitureOutput","#flooringOutput", "#carpetOutput"]
    for (let i = 0; i < 7; i++) {
        //用颜色sort
        results[i][1].sort(function(a,b){ return colorOrdering(a[2])>colorOrdering(b[2])? 1 : -1; });
        document.querySelector(outputs[i]).innerHTML="";
        results[i][1].forEach(structure => {
            if(structure[1]>0){
                var textColor;
                switch(structure[2]){
                    case "橙":
                        textColor = '<p class="orange">'
                        break;
                    case "紫":
                        textColor = '<p class="purple">'
                        break;
                    case "蓝":
                        textColor = '<p class="blue">'
                        break;
                    case "绿":
                        textColor = '<p class="green">'
                        break;
                    default:
                        textColor = '<p>'
                }
                document.querySelector(outputs[i]).innerHTML+= textColor + structure[0] + " x " + structure[1] + "</p>";}
            });
        document.querySelector(outputs[i]).innerHTML+= '<p>放置分: '+ results[i][2] + "</p>";
    }
}


//bug水域不显示，水上建筑不算分