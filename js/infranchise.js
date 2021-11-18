

var inputText = document.querySelectorAll('.table-tr input, .table-tr textarea');
var inputHolder = document.querySelectorAll('.table-tr');

function focusFuns(input, index){
    input.addEventListener('focus',()=>{inputHolder[index].classList.add('show')})
    input.addEventListener('blur',()=>{input.value.length < 1? inputHolder[index].classList.remove('show'):'';})
}
inputText.forEach((input,index)=>{focusFuns(input,index)})
/* ====================================================== */
var privacyBtn = document.querySelector('.privacy-check span');
var privacyModal = document.querySelector('.privacy-modal');
var privacyCencel = document.querySelector('.privacy-cencel span');
privacyBtn.addEventListener('click',()=>{
    privacyModal.classList.add('show');
})
privacyModal.addEventListener('click',(e)=>{
    if(e.target.classList.contains('show')){
        privacyModal.classList.remove('show');
    } 
})
privacyCencel.addEventListener('click',()=>{
    privacyModal.classList.remove('show');
})