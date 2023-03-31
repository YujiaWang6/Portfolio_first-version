window.onload = pageLoad;

function pageLoad(){

    var scrollbtn = document.getElementById("scrolltotop");

    scrollbtn.onclick = scroll;

    function scroll(){

        window.scrollTo(0,0);

    }

}

function toggleMenu(){
    let menu=document.querySelector(".nav");
    menu.classList.toggle("show-small");
}