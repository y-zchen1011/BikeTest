const testresult = document.getElementById('resultsc');
const resulttitle = document.getElementById('msg_title');
const resulttext = document.getElementById('msg_content');


(function showpage (){
    let list = localStorage.getItem('Pass');
    parseInt(list);
    console.log(typeof (list));
    console.log(list);
    if(parseInt(list) < 10){
        const startagain = document.querySelector('.btn_stagain');
        const form = document.querySelector('.registerform');
        console.log('inside fails'+list); //test
        startagain.addEventListener('click',function (){
            window.location.href='index.html';
        },false);
        testresult.innerHTML = `${((list / 12) * 100).toFixed(0)} %`;
        resulttitle.innerHTML = 'Oops!';
        resulttext.innerHTML = 'You need to try harder...';
        form.style.display = 'none';
        const banner = document.querySelector('.banner');
        banner.style.height = (window.innerHeight-155) + 'px';
        banner.style.display ='flex';
        banner.style.justifyContent ='center';
        banner.style.alignItems = 'center';
        window.onresize= function (){
            document.querySelector('.banner').style.height = (window.innerHeight-155) + 'px';
        }
    }
    else if(parseInt(list) >= 10){
        const formsend= document.querySelector('.btn_formsend');
        const startagain = document.querySelector('.btn_stagain');
        console.log('inside success'+list); //test
        formsend.addEventListener('click',function (){
            //check criteria
        },false);
        testresult.innerHTML = `${((list / 12) * 100).toFixed(0)} %`;
        resulttitle.innerHTML = 'Congrat!';
        resulttext.innerHTML = 'Please submit the following registration form.';
        startagain.style.display = 'none';
    }
}());

function changePage(){
    window.location.href='EndPage.html';
}




