function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        // file = elmnt.dataset.includeHTML;
        file = elmnt.dataset.includ;

        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    this.status == 200 ? elmnt.innerHTML = this.responseText :
                        this.status == 404 ? elmnt.innerHTML = "Page not found." : None;
                    /* Remove the attribute, and call this function once more: */
                    // delete elmnt.elmnt.dataset.include;
                    delete elmnt.dataset.includ;
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
    }
    headerJS();
}
/* ============================================ */
function headerJS(){
    console.log('Start HeaderJS');
    var manuOut_v2 = ['브랜드','메뉴','프렌차이즈','매장정보']
    var manuOut_v1 = ['ブランド','メニュー','フランチャイズ','店舗情報']
    var hrefList = ["brand", "menu", "franchise", "stores"]
    var manuOut_j = document.querySelectorAll('.out-a');
    var manuOut_j_m = document.querySelectorAll('.out-a-m');
    var testdiv = document.querySelector('#index');

    manuOut_j.forEach((atag,index)=>{
        atag.scrollIntoView({behavior:'smooth'});
        if(testdiv===null){
            atag.href = '/index.html#'+hrefList[index]
            manuOut_j_m[index].href = '/index.html#'+hrefList[index]
        }else{
            atag.href = '#'+hrefList[index]
            manuOut_j_m[index].href = '#'+hrefList[index]
        }
        
        mouseOver(atag, manuOut_v1[index]);
        mouseOut(atag, manuOut_v2[index]);
        click(atag);
    })

    topBtnClickEvent();
    navClickMobileEvent();

    console.log('End headerJS');
}

function mouseOver(tag, value){
    tag.addEventListener('mouseover',()=>{
        tag.classList.add('hover')
        tag.innerHTML = value;
    })
}
function mouseOut(tag, value){
    tag.addEventListener('mouseout',()=>{
        tag.classList.remove('hover')
        tag.innerHTML = value;
    })
}
function offsetAnchor(){
    location.hash.length > -1?window.scrollTo(window.scrollX,window.scrollY -50):'';
}

function click(btn){
    btn.addEventListener('click',offsetAnchor);
}

window.addEventListener('hashchange',()=>{offsetAnchor();});

window.setTimeout(offsetAnchor,1);

/* ============================================ */

function topBtnClickEvent(){
    var topBtn = document.querySelector('.topmove');
    topBtn.addEventListener('click',()=>{
        window.scrollTo(0,0);
    })
}
/* ============================================ */

function navClickMobileEvent(){
    var navBtn = document.querySelector('.header-nav-m');
    navBtn.addEventListener('click',()=>{
        !navBtn.classList.contains('show')?
        navBtn.classList.add('show'):navBtn.classList.remove('show');
    })
}


/* ============================================ */
function transManu(){
    var scroll = document.documentElement.scrollTop;
    var header = document.querySelector('.header-warpper');
    var topBtn = document.querySelector('.topmove');
    
    if(scroll > 80){
        header.classList.add('down');
        topBtn.classList.add('show');
    }else{
        header.classList.remove('down');
        topBtn.classList.remove('show');
    }
    
}

/* ============================================ */

/* ============================================ */
window.addEventListener('scroll',()=>{transManu()});
