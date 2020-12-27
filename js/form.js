const testResult = document.getElementById('resultsc');
const resultTitle = document.getElementById('msg_title');
const resultText = document.getElementById('msg_content');
const startAgain = document.querySelector('.btn_startAgain');
const form = document.querySelector('#registerForm');
const banner = document.querySelector('#success');

(function showPage (){
    let list = localStorage.getItem('Pass') ;
    console.log(list)
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




