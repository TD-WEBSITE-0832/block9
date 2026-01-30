let sekund = 1000000;

let minut = sekund / 60;
let soat  = minut / 60;
let day   = soat / 24;
let moth    = day / 30;   
let year   = moth / 12;

console.log("Sekund:", sekund);
console.log("Minut:", minut);
console.log("Soat:", soat);
console.log("Kun:", day);
console.log("Oy:", moth);
console.log("Yil:", year);





function add(el){
  let n = Number(el.innerText);

  if(n < 10000000000000000){
    el.innerText = n + 1;

    el.classList.add("anim");
    setTimeout(() => {
      el.classList.remove("anim");
    }, 200);
  }
}


// let done = false;

// document.querySelector(".card").addEventListener("mouseenter", () => {
//   if(!done){
//     alert("Nimaga Teginasan savol da");
//     done = true;
//   }
// });



// onmouseover="alert('Sababi bormi teginishing?')"




function add(btn){
  let p = btn.parentElement.querySelector(".tx");
  let n = Number(p.innerText);

  if(n < 10000000000000000){
    p.innerText = n + 1;
  }
}

function sub(btn){
  let p = btn.parentElement.querySelector(".tx");
  let n = Number(p.innerText);

  if(n > 0){
    p.innerText = n - 1;
  }
}