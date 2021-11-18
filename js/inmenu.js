var menuList = [
    {
        "menuImage":"/image/product/menuimg01.jpg",
        "menuTitle":"슈가크림도넛"
    },
    {
        "menuImage":"/image/product/menuimg02.jpg",
        "menuTitle":"단팥도넛"
    }
]
var menuDiv = document.querySelector(".menu-cards");
function menuFunc(menu){
    var menuTemp = "";
    menuTemp += "<div class='flex-col menu-card'>";
    menuTemp += "<img src='"+menu["menuImage"]+"' alt="+menu["menuTitle"]+">";
    menuTemp += "<div class='flex-row'><span>"+menu["menuTitle"]+"</spa n></div>";
    menuTemp += "</div>";
    menuDiv.innerHTML +=menuTemp;
}
menuList.forEach((menu)=>{menuFunc(menu)})