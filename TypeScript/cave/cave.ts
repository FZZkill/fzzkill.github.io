const CAVE = [
    "巧克力与啤酒更配哦——雪花勇闯天涯，徳福纵享丝滑",
    "你到底搜不搜啊（噘嘴）",
    "给……给我来份黄yo……黄油蟹蟹！"
];
function GetRandomNum(Min : number, Max : number) : number {
    let Range = Max - Min;
    let Rand = Math.random();
    return (Min + Math.round(Rand * Range))

}


function cave_get() : string {
    let ff : number = 0
    if (CAVE.length == 1) {
        ff = 0;
    } else {
        ff = GetRandomNum(0, CAVE.length -1); 
    }
    let fft = CAVE[ff];
    console.info("Random Cave : " + fft)
    return fft; 
}

document.getElementById("cave").innerText = cave_get()
