var historyData = [
    
    {
        "storeType":"store",
        "storeContent":"현대백화점 오픈",
        "storeDate":"2021.08"
    },
    {
        "storeType":"popup",
        "storeContent":"롯데백화점 본점",
        "storeDate":"2021.09"
    },
    {
        "storeType":"store",
        "storeContent":"현대백화점 오픈",
        "storeDate":"2021.08"
    },
    {
        "storeType":"popup",
        "storeContent":"롯데백화점 본점",
        "storeDate":"2021.09"
    },
    {
        "storeType":"store",
        "storeContent":"현대백화점 오픈",
        "storeDate":"2021.08"
    },
    {
        "storeType":"popup",
        "storeContent":"롯데백화점 본점",
        "storeDate":"2021.09"
    },
    {
        "storeType":"store",
        "storeContent":"현대백화점 오픈",
        "storeDate":"2021.08"
    },
    {
        "storeType":"popup",
        "storeContent":"롯데백화점 본점",
        "storeDate":"2021.09"
    },
    {
        "storeType":"store",
        "storeContent":"현대백화점 오픈",
        "storeDate":"2021.08"
    },
    {
        "storeType":"popup",
        "storeContent":"롯데백화점 본점",
        "storeDate":"2021.09"
    },
    {
        "storeType":"store",
        "storeContent":"현대백화점 오픈",
        "storeDate":"2021.08"
    },
    {
        "storeType":"popup",
        "storeContent":"롯데백화점 본점",
        "storeDate":"2021.09"
    },
    {
        "storeType":"store",
        "storeContent":"현대백화점 오픈",
        "storeDate":"2021.08"
    },
    {
        "storeType":"popup",
        "storeContent":"롯데백화점 본점",
        "storeDate":"2021.09"
    },
    {
        "storeType":"store",
        "storeContent":"현대백화점 오픈",
        "storeDate":"2021.08"
    },
    {
        "storeType":"popup",
        "storeContent":"롯데백화점 본점",
        "storeDate":"2021.09"
    },
    {
        "storeType":"store",
        "storeContent":"현대백화점 오픈",
        "storeDate":"2021.08"
    },
    {
        "storeType":"popup",
        "storeContent":"롯데백화점 본점",
        "storeDate":"2021.09"
    },
]


var history_row = document.querySelectorAll('.history-table tr');
historyData.forEach((data)=>{
    if(data['storeType'] == "store"){
        history_row[0].innerHTML += "<td class='table-content'><div><span>"+data['storeContent']+"</span></div></td>";
        history_row[1].innerHTML += "<td class='table-date'><div><span>"+data['storeDate']+"</span></div></td>";
        history_row[2].innerHTML += "<td></td>";
        history_row[3].innerHTML += "<td></td>";
    }else if(data['storeType'] == "popup"){
        history_row[0].innerHTML += "<td></td>";
        history_row[1].innerHTML += "<td></td>";
        history_row[2].innerHTML += "<td class='table-date'><div><span>"+data['storeDate']+"</span></div></td>";
        history_row[3].innerHTML += "<td class='table-content'><div><span>"+data['storeContent']+"</span></div></td>";
    }
});
/* ================================================= */
var rollingData = [
    {
        "rollingImg":"/image/default/default800x800img.png"
    },
    {
        "rollingImg":"/image/default/default800x800img.png"
    },
    {
        "rollingImg":"/image/default/default800x800img.png"
    },
    {
        "rollingImg":"/image/default/default800x800img.png"
    },
    {
        "rollingImg":"/image/default/default800x800img.png"
    },
    {
        "rollingImg":"/image/default/default800x800img.png"
    },
    {
        "rollingImg":"/image/default/default800x800img.png"
    },
    {
        "rollingImg":"/image/default/default800x800img.png"
    },
    
]

var branddiv = document.querySelector('.brand-rolling');

function rollinFunc(imgdata){
    var rollingTemp = "<div class='rolling-card'>"
    +"<img src='"+imgdata["rollingImg"]+"'></div>";
    branddiv.innerHTML += rollingTemp;
}

rollingData.forEach((imgdata)=>{rollinFunc(imgdata)})

var brandImgs = document.querySelectorAll('.brand-rolling div');

brandImgs.forEach((divs)=>{
    var temp = divs.cloneNode(true);
    branddiv.appendChild(temp);
})
/* ================================================= */

var historyd = document.querySelector('.history-table');
var historyT = document.querySelector('.table-warpper');
var prevBtn = document.querySelector('.history-prev');
var nextBtn = document.querySelector('.history-next');
var controllNum = 0;
var historyMaxWidth = 0;
var movewidth = 0;
prevBtn.addEventListener('click',()=>{
    historyMaxWidth = historyT.scrollWidth - document.body.clientWidth;
    movewidth = historyMaxWidth/6;
    controllNum = historyT.scrollLeft - movewidth;
    if(controllNum <= 0){controllNum=0}
    historyT.scrollTo(controllNum,0)
})
nextBtn.addEventListener('click',()=>{
    historyMaxWidth = (historyT.scrollWidth - document.body.clientWidth) -18;
    movewidth = historyMaxWidth/6;
    controllNum = historyT.scrollLeft + movewidth;
    if(controllNum >= historyMaxWidth){controllNum=historyMaxWidth}
    historyT.scrollTo(controllNum,0);
})

/* ================================================= */