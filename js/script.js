window.onload=function(){
    alert("документ готовий");

    var btnClickMe = document.getElementById("btnClickMe");
    btnClickMe.onclick = function(){
        alert("press btn");
    }

    var listBtnClassBtn = document.getElementsByClassName("btn");

    for(var i=0;i<listBtnClassBtn.length;i++){
        listBtnClassBtn[i].onclick = clickBtn;
    }


    function clickBtn(){
        alert("click btn");
    }
}