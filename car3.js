
function goServer(btn) {
  btn.innerText = "Loading...";
  btn.disabled = true;

  setTimeout(() => {
    window.location.href = "car4.html"; // 2-server / sahifa
  }, 2000); // 2 soniya loading
}