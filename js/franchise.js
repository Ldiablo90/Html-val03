var steps = [
    {
        "number":"STEP 1",
        "step":"가맹상담"
    },
    {
        "number":"STEP 2",
        "step":"접수 및 담당자 선정"
    },
    {
        "number":"STEP 3",
        "step":"상권 분석 의뢰"
    },
    {
        "number":"STEP 4",
        "step":"가맹 계약 체결"
    },
    {
        "number":"STEP 5",
        "step":"가맹 계약 체결"
    },
    {
        "number":"STEP 6",
        "step":"매장 실측 및 도면 설계"
    },
    {
        "number":"STEP 7",
        "step":"시공, 교육, 인허가 사항"
    },
    {
        "number":"STEP 8",
        "step":"운용 시스템 준비"
    },
    {
        "number":"STEP 9",
        "step":"매장 준공"
    },
    {
        "number":"STEP 10",
        "step":"매장 그랜드 오픈"
    },
]
var stepDiv = document.querySelector('.franchise-steps');
function stepMakeFunc(step,index){
    var content = '';
    if(index % 2 == 0){
        content = "<div class='flex-col step vol1'>"
                +"<div class='step-title'><span>"+step['number']+"</span></div>"
                +"<div class='step-sub-title'>"+step['number']+"</div>"
                +"<div class='step-sub-content'><span>"+step['step']+"</span></div>"
                +"</div>"
    }else{
        content = "<div class='flex-col step vol2'>"
                +"<div class='step-title'><span>"+step['number']+"</span></div>"
                +"<div class='step-sub-title'>"+step['number']+"</div>"
                +"<div class='step-sub-content'><span>"+step['step']+"</span></div>"
                +"</div>"
    }
    stepDiv.innerHTML += content;
}
steps.forEach((step,index)=>{stepMakeFunc(step,index)});

/* ====================================================== */

var costOenData = [
    {
        "costTitle":"가맹비",
        "costContent":"가맹비내역 설명문",
        "costPrice":1000
    },
    {
        "costTitle":"교육비",
        "costContent":"교육비내역 설명문",
        "costPrice":1000
    },
    {
        "costTitle":"인테리어",
        "costContent":"인테리어내역 설명문",
        "costPrice":1000
    },
    {
        "costTitle":"주방기기",
        "costContent":"주방기기내역 설명문",
        "costPrice":1000
    },
]

var costOenBody = document.querySelector(".cost-table-oen-body");
var costSum = 0;
function costOenFunc(data){
    var costOenTemp = "<tr>"
                        +"<td>"+data["costTitle"]+"</td>"
                        +"<td>"+data["costContent"]+"</td>"
                        +"<td>"+data["costPrice"]+"</td></tr>";
    costOenBody.innerHTML += costOenTemp;
    costSum += data["costPrice"];
}
costOenData.forEach((data)=>{costOenFunc(data)});
costOenBody.innerHTML += "<tr><td>합계</td><td></td><td>"+costSum+"</td></tr>";