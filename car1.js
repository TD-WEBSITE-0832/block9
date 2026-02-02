

// color change //

function colorBlack() {
    document.body.style.background = "linear-gradient(to right, red , black 50%)";

    document.querySelectorAll('#bt').forEach(e => e.style.color = "red");
    document.querySelectorAll('.txt').forEach(e => e.style.color = "black");
    document.querySelectorAll('.txt1').forEach(e => e.style.color = "red");


}




function colorBlac() {
    document.body.style.background = "linear-gradient(to right, black 50%, red)";

    document.querySelectorAll('#bt1').forEach(e => e.style.color = "red");
     document.querySelectorAll('.txt').forEach(e => e.style.color = "white");
    document.querySelectorAll('.txt1').forEach(e => e.style.color = "white");
}











// text change //

function changeText(btn) {
    if (btn.innerText === "Loading...") {
        btn.innerText = "Error...";
    } else {
        btn.innerText = "Loading...";
    }
}






function changeTex(btn) {
     if (btn.innerText === "Loading...") {
        btn.innerText = "Error...";
    } else {
        btn.innerText = "Loading...";
    }
}










