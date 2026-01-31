// let sekund = 1000000;

// let minut = sekund / 60;
// let soat  = minut / 60;
// let day   = soat / 24;
// let moth    = day / 30;   
// let year   = moth / 12;

// console.log("Sekund:", sekund);
// console.log("Minut:", minut);
// console.log("Soat:", soat);
// console.log("Kun:", day);
// console.log("Oy:", moth);
// console.log("Yil:", year);





// function add(el){
//   let n = Number(el.innerText);

//   if(n < 10000000000000000){
//     el.innerText = n + 1;

//     el.classList.add("anim");
//     setTimeout(() => {
//       el.classList.remove("anim");
//     }, 200);
//   }
// }


// let done = false;

// document.querySelector(".card").addEventListener("mouseenter", () => {
//   if(!done){
//     alert("Nimaga Teginasan savol da");
//     done = true;
//   }
// });



// onmouseover="alert('Sababi bormi teginishing?')"




// function add(btn){
//   let p = btn.parentElement.querySelector(".tx");
//   let n = Number(p.innerText);

//   if(n < 10000000000000000){
//     p.innerText = n + 1;
//   }
// }

// function sub(btn){
//   let p = btn.parentElement.querySelector(".tx");
//   let n = Number(p.innerText);

//   if(n > 0){
//     p.innerText = n - 1;
//   }
// }




// let result = confirm("samolar yo "+(203+2))
// alert('you win'+result)




// let result=confirm("sss")+prompt('120+25=?'+(40/1))
// alert('you lose'+result)




// JavaScript Playground - Edit me!

// State
let count = 0
let totalClicks = 0
let clicksThisSecond = 0
let clickRate = 0

// Messages that show randomly
const messages = [
  'You clicked! 🎉',
  'Keep going! 🚀',
  'Awesome! 💫',
  'Nice one! ⚡',
  'On fire! 🔥',
]

// DOM Elements
const countEl = document.getElementById('count')
const subtitleEl = document.getElementById('subtitle')
const totalClicksEl = document.getElementById('total-clicks')
const clickRateEl = document.getElementById('click-rate')
const incrementBtn = document.getElementById('increment')
const decrementBtn = document.getElementById('decrement')
const actionBtn = document.getElementById('action-btn')

// Update the display
function updateDisplay() {
  countEl.textContent = count
  totalClicksEl.textContent = totalClicks
  clickRateEl.textContent = clickRate
}

// Show random message
function showRandomMessage() {
  const randomIndex = Math.floor(Math.random() * messages.length)
  subtitleEl.textContent = messages[randomIndex]
}

// Click handlers
incrementBtn.addEventListener('click', () => {
  count++
  totalClicks++
  clicksThisSecond++
  updateDisplay()
  showRandomMessage()
  console.log('Count:', count)
})

decrementBtn.addEventListener('click', () => {
  count--
  totalClicks++
  clicksThisSecond++
  updateDisplay()
  showRandomMessage()
  console.log('Count:', count)
})

actionBtn.addEventListener('click', () => {
  count += 10
  totalClicks++
  clicksThisSecond++
  updateDisplay()
  subtitleEl.textContent = '+10 Bonus! 🎁'
  console.log('Bonus! Count:', count)
})

// Calculate clicks per second
setInterval(() => {
  clickRate = clicksThisSecond
  clicksThisSecond = 0
  updateDisplay()
}, 1000)

// Initial render
updateDisplay()
console.log('JavaScript Playground loaded! Try clicking the buttons.')




