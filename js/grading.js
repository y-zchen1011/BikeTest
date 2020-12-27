const testsend = document.querySelector('.btn_send');

testsend.addEventListener('click',function (e){
    e.preventDefault();
    score(this.form);
},false);


function score(form) {
    let list = 0;
    if (form.one.value != null && form.one.value === "MHWfAnZhXHY") {
        list = list + 1;
        if (form.two.value != null && form.two.value === "GV9wH0nTSHN") {
            list += 1;
        }
        if (form.three.value != null && form.three.value === "kP7VNhoYZxY") {
            list += 1;
        }
        if (form.four.value != null && form.four.value === "F2rbzLyIPru") {
            list += 1;
        }
        if (form.five.value != null && form.five.value === "rdN1I3azVec") {
            list += 1;
        }
        if (form.six.value != null && form.six.value === "SzCM1PTOVwz") {
            list += 1;
        }
        if (form.seven.value != null && form.seven.value === "XQWNvmyLtlc") {
            list += 1;
        }
        if (form.eight.value != null && form.eight.value === "JnEgwpxUY95") {
            list += 1;
        }
        if (form.nine.value != null && form.nine.value === "Zy91RPiMWUU") {
            list += 1;
        }
        if (form.ten.value != null && form.ten.value === "aMRmZMfOWyq") {
            list += 1;
        }
        if (form.eleven.value != null && form.eleven.value === "PGWjoITyJwK") {
            list += 1;
        }
        if (form.twelve.value != null && form.twelve.value === "AxR06uNK5Bv") {
            list += 1;
        }

    } else if (form.one.value != null && form.one.value === "nZPFYBfJVp2") {
        list = 0;
        alert("You must agree to the terms and conditions!");
    }
    localStorage.setItem('Pass', list);
    nextPage();
}

function nextPage(){
    window.location.href='Registration_ST.html';
}











