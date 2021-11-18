var stores = [
    {
        "storeType":"store",
        "storeEndDate":"2022-12-31",
        "storePoint":"OO점",
        "storeAddress":"서울특별시 OO구 OO동 000-0",
        "storeOpening":[
            "10:30",
            "22:00"],
        "sroreContact":"0507-1453-7025",
        "storeBread":[
            "00:00,",
            "00:00"],
        "storeImage":[
            "/image/default/default800x800img.png",
            "/image/default/default800x800img.png"]
    },
    {
        "storeType":"store",
        "storeEndDate":"2022-12-31",
        "storePoint":"OO점",
        "storeAddress":"서울특별시 OO구 OO동 000-0",
        "storeOpening":[
            "10:30",
            "22:00"],
        "sroreContact":"0507-1453-7025",
        "storeBread":[
            "00:00,",
            "00:00"],
        "storeImage":[
            "/image/default/default800x800img.png",
            "/image/default/default800x800img.png"]
    },
    
    
    
];

var storesCardsDiv = document.querySelector('.stores-cards');
var htmlTemp="";
var cardnum = 0;
function addStoreCard(store){
    var cardTemp = "";
    var storeOpening ='';
    var storeBread ='';
    storeOpening = store['storeOpening'][0]+" ~ "+store['storeOpening'][1];
    store['storeBread'].forEach((time)=>{storeBread+=time+" ";})

    cardTemp+='<div class="flex-col store-card">';
    cardTemp+='<div class="flex-col card-inner-warpper front">';
    cardTemp+='<div class="flex-col store-card-title"><b>'+store['storePoint']+'</b></div>';
    cardTemp+='<span class="card-turn-btn">Infomation</span>';
    cardTemp+='<div class="flex-col store-card-img">';
    cardTemp+='<img src="'+store['storeImage'][0]+'">';
    cardTemp+='<img src="'+store['storeImage'][1]+'">';
    cardTemp+='</div>';
    cardTemp+='</div>';
    
    cardTemp+='<div class="flex-col card-inner-warpper back">';
    cardTemp+='<div class="flex-col store-card-title back"><b>'+store['storePoint']+'</b></div>';
    cardTemp+='<span class="card-turn-btn back">return</span>';
    cardTemp+='<div class="store-card-info">';
    cardTemp+='<img src="/image/other/storeback.webp" alt="back-ground">';
    cardTemp+='<table><tbody>';
    cardTemp+='<tr><td>주소</td><td>:</td><td>'+store['storeAddress']+'</td></tr>';
    cardTemp+='<tr><td>영업시간</td><td>:</td><td>'+storeOpening+'</td></tr>';
    cardTemp+='<tr><td>연락처</td><td>:</td><td>'+store['sroreContact']+'</td></tr>';
    cardTemp+='<tr><td>제품나오는시간</td><td>:</td><td>'+storeBread+'</td></tr>';

    cardTemp+='</tbody></table>';
    
    cardTemp+='</div>';
    cardTemp+='</div>';
    cardTemp+='</div>';
    htmlTemp += cardTemp;
    cardnum += 1;
}

stores.forEach((store)=>{
    var storeDate = new Date(store["storeEndDate"]);
    var nowDate = new Date();
    storeDate >= nowDate?addStoreCard(store):'';
    

})
if(cardnum > 4){
    cardnum = 4-(cardnum%4);
    for(var i=0;i < cardnum; i++){
        htmlTemp +='<div class="flex-col store-card"></div>';
    }
}
storesCardsDiv.innerHTML = htmlTemp;


/* ================================================= */
var cards = document.querySelectorAll('.store-card')

cards.forEach((card,index)=>{
    var infoFront = card.querySelector('.card-inner-warpper.front .card-turn-btn');
    var infoBack = card.querySelector('.card-inner-warpper.back .card-turn-btn');
    console.log()
    infoFront.addEventListener('click',()=>{card.classList.add('turn')})
    infoBack.addEventListener('click',()=>{card.classList.remove('turn')})
})


/* ================================================= */

