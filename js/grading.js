const testsend = document.querySelector('.btn_send');

testsend.addEventListener('click',function (e){
    e.preventDefault();
    score(this.form);
},false);
let answerArray = [];


function score(form) {
    let list = 0;
    if (form.one.value != null && form.one.value === "MHWfAnZhXHY") {
        list = list + 1;
        answerArray.push("MHWfAnZhXHY");
        if (form.two.value != null && form.two.value === "GV9wH0nTSHN") {
            list += 1;
            answerArray.push("GV9wH0nTSHN");
        }else{
            answerArray.push(form.two.value);}
        if (form.three.value != null && form.three.value === "kP7VNhoYZxY") {
            list += 1;
            answerArray.push("kP7VNhoYZxY");
        }else{answerArray.push(form.three.value);}
        if (form.four.value != null && form.four.value === "F2rbzLyIPru") {
            list += 1;
            answerArray.push("F2rbzLyIPru");
        }else{answerArray.push(form.four.value);}
        if (form.five.value != null && form.five.value === "rdN1I3azVec") {
            list += 1;
            answerArray.push("rdN1I3azVec");
        }else{answerArray.push(form.five.value);}
        if (form.six.value != null && form.six.value === "SzCM1PTOVwz") {
            list += 1;
            answerArray.push("SzCM1PTOVwz");
        }else{answerArray.push(form.six.value);}
        if (form.seven.value != null && form.seven.value === "XQWNvmyLtlc") {
            list += 1;
            answerArray.push("XQWNvmyLtlc");
        }else{answerArray.push(form.seven.value);}
        if (form.eight.value != null && form.eight.value === "JnEgwpxUY95") {
            list += 1;
            answerArray.push("JnEgwpxUY95");
        }else{answerArray.push(form.eight.value);}
        if (form.nine.value != null && form.nine.value === "Zy91RPiMWUU") {
            list += 1;
            answerArray.push("Zy91RPiMWUU");
        }else{answerArray.push(form.nine.value);}
        if (form.ten.value != null && form.ten.value === "aMRmZMfOWyq") {
            list += 1;
            answerArray.push("aMRmZMfOWyq");
        }else{answerArray.push(form.ten.value);}
        if (form.eleven.value != null && form.eleven.value === "PGWjoITyJwK") {
            list += 1;
            answerArray.push("PGWjoITyJwK");
        }else{answerArray.push(form.eleven.value);}
        if (form.twelve.value != null && form.twelve.value === "AxR06uNK5Bv") {
            list += 1;
            answerArray.push("AxR06uNK5Bv");
        }else{answerArray.push(form.twelve.value);}
        nextPage();
    } else if (form.one.value != null && form.one.value === "nZPFYBfJVp2") {
        list = 0;
        alert("You must agree to the terms and conditions!");
    }
    localStorage.setItem('Pass', list);
    localStorage.setItem('Ans', answerArray);

}

function nextPage(){
    window.location.href='Registration_ST.html';
}














