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

    document.getElementById("btnAddContent").onclick = function(){
        //alert("click btnAddContent");
        var txtInput = document.getElementById("txtValue");
        var divContent = document.getElementById("content");
        divContent.innerHTML =
            `<a href="#">
                <img src="${txtInput.value}"/>
            </a>`;
        alert(txtInput.value);
    }
}