const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),o=document.querySelector("body");let r=null;t.addEventListener("click",(()=>{r=setInterval((()=>{const t=`#${Math.floor(16777215*Math.random()).toString(16)}`;o.style.backgroundColor=t}),1e3)})),e.addEventListener("click",(()=>{clearInterval(r)}));
//# sourceMappingURL=01-color-switcher.94bd481f.js.map
