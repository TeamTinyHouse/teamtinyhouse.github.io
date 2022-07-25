document.getElementById("close_icon").style.display = "none";
var close = false;
document.getElementById('burger_icon').addEventListener('mouseover', () => {
    if (!close) {
        document.getElementById('burgerLinks').style.right = "5px"
        setTimeout(() => {
            document.getElementById("close_icon").style.display = "flex";
            document.getElementById("burger_icon").style.display = "none";
            close = true
        }, 510)
    }

})
document.getElementById('close_icon').addEventListener('click', () => {
    if (close) {
        document.getElementById('burgerLinks').style.right = "-170px"
        setTimeout(() => {
            document.getElementById("close_icon").style.display = "none";
            document.getElementById("burger_icon").style.display = "flex";
            close = false;
        }, 510)
    }
})