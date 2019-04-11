let hrefDom = document.getElementsByClassName('href');
let spanDom = document.getElementById('btn');
window.onload = function(){
    spanDom.onclick = function(){
        for (let i = 0; i < hrefDom.length; i++){
            hrefDom[i].style.display = 'block';
        }
    }
}
