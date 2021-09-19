var name = prompt("Adınız nedir?");
let main = document.querySelector("#body")

  function showTime() {
   var date = new Date();
   var h = date.getHours();
   var m = date.getMinutes();
   var s = date.getSeconds();
 
   h = h < 10 ? "0" + h : h;
   m = m < 10 ? "0" + m : m;
   s = s < 10 ? "0" + s : s;
 
   let time = h + ":" + m + ":" + s;

   main.innerHTML = `
   <div style="display:flex; justify-content:center; align-items:center;">
        <div style="text-align:center">
            <h1>Hoşgeldin ${(name)}</h1>
            <h2>Şu anda saat ${time}</h2>
            <h3>Front-End Development Patikası'nın JavaScript Bölümü, 1. Ödevindesin!</h3>
        </div>
   </div>
`
   setTimeout(showTime, 1000);
  }
 
showTime();
