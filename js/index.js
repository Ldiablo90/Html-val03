
/* ================================================= */


var firstImages =[
    {
        "imgWeb":"/image/banner/slider01.jpg",
        "imgMobile":"/image/banner/slider01.jpg"
    },
    {
        "imgWeb":"/image/banner/slider02.jpg",
        "imgMobile":"/image/banner/slider02.jpg"
    },
    {
        "imgWeb":"/image/banner/slider03.jpg",
        "imgMobile":"/image/banner/slider03.jpg"
    },
    {
        "imgWeb":"/image/banner/slider04.jpg",
        "imgMobile":"/image/banner/slider04.jpg"
    }
]

var ovarlapDiv = document.querySelector('.ovarlap');
function ovarlapFunc(imgs,index){
    var imgTemp = "";
    index == 0?imgTemp +="<picture class='ovarlap-image show' id='ovarlap"+index+"'>":imgTemp+="<picture class='ovarlap-image' id='ovarlap"+index+"'>";
    imgTemp += "<source media='(min-width: 431px)' srcset='"+imgs["imgWeb"]+"'>";
    imgTemp += "<img src='"+imgs["imgMobile"]+"'alt='main_slider0"+index+"_m'>";
    imgTemp +="</picture>";
    ovarlapDiv.innerHTML += imgTemp;

}
firstImages.forEach((imgs,index)=>{ovarlapFunc(imgs,index)})

/* ================================================= */

var images = document.querySelectorAll('.ovarlap-image');
var index = 1
setInterval(()=>{
    images.forEach((imgTag)=>{imgTag.classList.remove('show')})
    images[index].classList.add('show')
    index > 2?index=0:index++;
},5000)
/* ================================================= */
var secondText = [
    {
        "kText":"오사카오지상치즈케이크는 일본 오사카의 디저트로 유명한 '오지상 치즈케이크'를 한국 특성에 맞춰 탄생 시켰습니다.",
        "eText":'Osaka ground cheesecake has created "Oji ground cheesecake," famous for dessert in Osaka, Japan, according to Korean characteristics.',
    },
    {
        "kText":"미국산 크림치즈, 뉴질랜드산 버터, 국산 1등급우유 엄선한 재료들로 매장에서 직접 구워내어 저렴한 가격에 남녀노소 즐길수있는특별한 디저트로 탄생됩니다.",
        "eText":'It is made with American cream cheese, New Zealand butter, and carefully selected ingredients for Korean first-class milk, and is made as a special dessert for men and women of all ages to enjoy at an affordable price.'
    },
    {
        "kText":"국내에서는 자주 접할수 없었던 일본식 수플레 치즈케이크를오사카 현지의 레시피 그대로 구현하여저렴한 가격에 남녀노소 누구나 즐길수 있는담백하고 부드러운 맛으로 새로운 디저트 트랜드를 이끌어 가고 있습니다.",
        "eText":'Japanese souffle cheesecake, which was not frequently found in Korea, is being implemented as the local recipe of Osaka, leading the new dessert trend with a light and soft taste that can be enjoyed by men and women of all ages at an affordable price.'
    }
]

var secondCards = document.querySelectorAll('.second-card');
secondCards.forEach((card,index)=>{
    card.innerHTML = "<span class='k-text'>"+secondText[index]["kText"]+"</span><br><span>"+secondText[index]["eText"]+"</span>";
});
/* ================================================= */



