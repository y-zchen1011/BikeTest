const testResult = document.getElementById('resultsc');
const resultTitle = document.getElementById('msg_title');
const resultText = document.getElementById('msg_content');
const startAgain = document.querySelector('.btn_startAgain');
const form = document.querySelector('#registerForm');
const banner = document.querySelector('#success');

(function showPage (){
    let list = localStorage.getItem('Pass') ;
    console.log(list);
    if(parseInt(list) < 10){
        startAgain.addEventListener('click',function (){
            window.location.href='index.html';
        },false);

        testResult.innerHTML = `${((list / 12) * 100).toFixed(0)} %`;
        resultTitle.innerHTML = 'Oops!';
        resultText.innerHTML = 'You need to try harder...';
        form.style.display = 'none';
        banner.style.height = (window.innerHeight-155) + 'px';
        window.onresize= function (){
            document.querySelector('.banner').style.height = (window.innerHeight-155) + 'px';
        }
    }
    else if(parseInt(list) >= 10){
        testResult.innerHTML = `${((list / 12) * 100).toFixed(0)} %`;
        resultTitle.innerHTML = 'Congrat!';
        resultText.innerHTML = 'Please submit the following registration form.';
        startAgain.style.display = 'none';
    }
    else{
        alert("you need to take the test first");
        window.location.href='index.html';
    }
}());

function changePage(){
    window.location.href='EndPage.html';
}

let ans = localStorage.getItem('Ans');
let userAnsArray = ans.split(",");
let compareArray = [];

function dataConvert(userAnsArray){
 let standardAns = ["MHWfAnZhXHY","GV9wH0nTSHN","kP7VNhoYZxY","F2rbzLyIPru","rdN1I3azVec","SzCM1PTOVwz","XQWNvmyLtlc","JnEgwpxUY95","Zy91RPiMWUU","aMRmZMfOWyq","PGWjoITyJwK","AxR06uNK5Bv"];
 for(let i = 0 ; i < standardAns.length ; i ++){
         if(standardAns[i] === userAnsArray[i]){
             compareArray.push(true);
         }else{
             compareArray.push(false);
         }
     }

}
dataConvert(userAnsArray);

let str = "";
const reviewTable = document.querySelector('#reviewTable');
function concatReview(compareArray){
    let content ="";
    compareArray.forEach((item)=>{
        if(item){
            str = `<td><i class="fas fa-check text-success"></i></td>`;
        }else{
            str = `<td><i class="fas fa-times text-danger"></i></td>`;
        }
        content += str;
    });
    reviewTable.innerHTML = content;
}
concatReview(compareArray);

