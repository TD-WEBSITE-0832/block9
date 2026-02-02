
// aler da bosganda salom text koshiladi ok bosganda 

// document.getElementById("salom").textContent = "Salom, Toshkent! 🌙";
//     document.getElementById("salom").style.color = "yellow";
//     document.getElementById("salom").style.fontSize = "3rem";
    
//     alert("VS Code + JS = zo‘r kombinatsiya 😎");






// button sumbit da color bilan text almashasdi 

// const btn = document.getElementById("myButton");

//     btn.addEventListener("click", () => {
//       // Har safar bosilganda rang o‘zgaradi
//       const colors = ["#ff6b6b", "#4ecdc4", "#45b7d1", "#96ceb4", "#ffeead"];
//       const randomColor = colors[Math.floor(Math.random() * colors.length)];
      
//       document.body.style.background = randomColor;
//       btn.textContent = "Yana bos! 😎";
//     });






// sumbit bosganda sonlar kopayib ketar ekan

// let count = 0;
//     const display = document.getElementById("count");
//     const button = document.getElementById("btn");

//     button.addEventListener("click", () => {
//       count++;
//       display.textContent = count;
      
//       // 10 tadan ko‘p bo‘lsa effekt
//       if (count % 10 === 0) {
//         display.style.color = "#ffeb3b";
//         display.style.transform = "scale(1.3)";
//         setTimeout(() => {
//           display.style.transform = "scale(1)";
//           display.style.color = "#e0e0ff";
//         }, 400);
//       }
//     });



























// Oddiy interaktivlik — syurpriz tugmasi
    const surpriseBtn = document.getElementById('surpriseBtn');
    
    surpriseBtn.addEventListener('click', () => {
      const messages = [
        "Senga omad tilayman! 🌟",
        "Bugun super kun bo'ladi! 😎",
        "Sen zo'rsan, Saidxon! 🔥",
        "Keling, yana bir loyiha qilamiz! 🚀",
        "Kofe ichdingmi hali? ☕"
      ];
      
      const randomMsg = messages[Math.floor(Math.random() * messages.length)];
      
      surpriseBtn.textContent = randomMsg;
      surpriseBtn.style.background = '#ec4899';
      surpriseBtn.style.transform = 'scale(1.1)';
      
      setTimeout(() => {
        surpriseBtn.textContent = 'Yana syurpriz? 🎉';
        surpriseBtn.style.background = '#0ea5e9';
        surpriseBtn.style.transform = 'scale(1)';
      }, 2500);
    });
// finish//




    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });

    // finish//