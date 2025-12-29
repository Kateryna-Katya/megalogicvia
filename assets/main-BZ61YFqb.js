(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",()=>{const r=document.querySelector(".demo-btn"),n=document.getElementById("gameIframe"),o=document.getElementById("closeIframeBtn");r&&n&&o&&(r.addEventListener("click",s=>{s.preventDefault();const e=r.getAttribute("data-game-url");n.src=e,n.style.display="block",o.style.display="flex"}),o.addEventListener("click",()=>{n.style.display="none",o.style.display="none",n.src=""}))});document.addEventListener("DOMContentLoaded",()=>{const r=document.querySelector(".menu-button"),n=r.querySelector(".icon"),o=document.querySelector(".modal"),s=document.querySelectorAll(".menu-list-item"),e=document.querySelector(".header");let t=!1;const i=`
<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M42.068 21.9879C42.068 33.0663 33.0845 42.0691 22 42.0691C10.9154 42.0691 1.93191 33.0663 1.93191 21.9879C1.93191 10.9095 10.9154 1.93085 22 1.93085C33.0845 1.93085 42.068 10.9095 42.068 21.9879Z" fill="url(#paint0_linear_36_134)" />
  <path fill-rule="evenodd" clip-rule="evenodd" d="M44 21.9879C44 34.1284 34.1229 44 22 44C9.87705 44 0 34.1284 0 21.9879C0 9.87164 9.87705 0 22 0C34.1229 0 44 9.87164 44 21.9879ZM1.93194 21.9879C1.93194 33.0664 10.9155 42.0691 22 42.0691C33.0845 42.0691 42.0681 33.0664 42.0681 21.9879C42.0681 10.9095 33.0845 1.93088 22 1.93088C10.9155 1.93088 1.93194 10.9095 1.93194 21.9879Z" fill="white" />
  <path opacity="0.1" d="M29.9692 29.3011C17.484 29.3011 6.93081 23.1947 3.28427 14.7953C2.41489 17.04 1.93191 19.4536 1.93191 21.9879C1.93191 33.0664 10.9154 42.0691 22 42.0691C31.1767 42.0691 38.8803 35.9144 41.2952 27.5151C37.8177 28.6495 34.0022 29.3011 29.9692 29.3011Z" fill="black" />
  <path d="M30.0419 12.0196H14.0068C13.3065 12.0196 12.7269 12.5747 12.7269 13.2988V15.5193C12.7269 16.2192 13.3065 16.7985 14.0068 16.7985H30.0419C30.7423 16.7985 31.3218 16.2192 31.3218 15.5193V13.2988C31.3218 12.5747 30.7423 12.0196 30.0419 12.0196Z" fill="#0386E2" />
  <path d="M30.0419 19.5984H14.0068C13.3065 19.5984 12.7269 20.1777 12.7269 20.8776V23.1223C12.7269 23.8222 13.3065 24.4015 14.0068 24.4015H30.0419C30.7423 24.4015 31.3218 23.8222 31.3218 23.1223V20.8776C31.3218 20.1777 30.7423 19.5984 30.0419 19.5984Z" fill="#0386E2" />
  <path d="M30.0419 27.2013H14.0068C13.3065 27.2013 12.7269 27.7564 12.7269 28.4805V30.701C12.7269 31.401 13.3065 31.9802 14.0068 31.9802H30.0419C30.7423 31.9802 31.3218 31.401 31.3218 30.701V28.4805C31.3218 27.7564 30.7423 27.2013 30.0419 27.2013Z" fill="#0386E2" />
  <defs>
    <linearGradient id="paint0_linear_36_134" x1="22" y1="63.7742" x2="22" y2="-8.09794" gradientUnits="userSpaceOnUse">
      <stop stop-color="#EDFAFF" />
      <stop offset="0.5335" stop-color="#44F7FF" />
      <stop offset="1" stop-color="#4472FF" />
    </linearGradient>
  </defs>
</svg>
    `,l=`
<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">

  <!-- Обводка по краю -->
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M44 21.9879C44 34.1284 34.1229 44 22 44C9.87705 44 0 34.1284 0 21.9879C0 9.87164 9.87705 0 22 0C34.1229 0 44 9.87164 44 21.9879ZM1.93194 21.9879C1.93194 33.0664 10.9155 42.0691 22 42.0691C33.0845 42.0691 42.0681 33.0664 42.0681 21.9879C42.0681 10.9095 33.0845 1.93088 22 1.93088C10.9155 1.93088 1.93194 10.9095 1.93194 21.9879Z"
    fill="white"
  />

  <!-- Внутренний круг -->
  <path
    d="M42.0681 22C42.0681 33.0784 33.0845 42.0811 22 42.0811C10.9155 42.0811 1.93194 33.0784 1.93194 22C1.93194 10.9216 10.9155 1.91895 22 1.91895C33.0845 1.91895 42.0681 10.9216 42.0681 22Z"
    fill="url(#paint0_linear)"
  />

  <!-- Иконка по центру -->
  <g transform="translate(13.5 13.5)">
    <path
      d="M12.2686 0.905037L0.930057 12.2436C0.434849 12.7388 0.434635 13.5582 0.929571 14.0532L2.51677 15.6404C3.0117 16.1353 3.83114 16.1351 4.32635 15.6399L15.6649 4.30133C16.1601 3.80612 16.1603 2.98668 15.6654 2.49175L14.0782 0.904551C13.5833 0.409615 12.7638 0.40983 12.2686 0.905037Z"
      fill="#0386E2"
    />
    <path
      d="M15.6399 12.3922L4.30133 1.05365C3.80613 0.558446 2.98669 0.558231 2.49175 1.05317L0.904558 2.64036C0.409622 3.1353 0.409836 3.95474 0.905044 4.44994L12.2436 15.7885C12.7388 16.2837 13.5582 16.2839 14.0532 15.789L15.6404 14.2018C16.1353 13.7068 16.1351 12.8874 15.6399 12.3922Z"
      fill="#0386E2"
    />
  </g>

  <defs>
    <linearGradient
      id="paint0_linear"
      x1="22"
      y1="44"
      x2="22"
      y2="0"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#EDFAFF"/>
      <stop offset="0.5335" stop-color="#44F7FF"/>
      <stop offset="1" stop-color="#4472FF"/>
    </linearGradient>
  </defs>

</svg>


    `;r.addEventListener("click",()=>{t=!t,n.innerHTML=t?l:i,t?d():c()}),s.forEach(u=>u.addEventListener("click",()=>{c(),n.innerHTML=i,t=!1})),window.addEventListener("scroll",a);function d(){o.style.display="block"}function c(){o.style.display="none"}function a(){e&&(window.scrollY>60?e.classList.add("header-scroll"):e.classList.remove("header-scroll"))}});document.addEventListener("DOMContentLoaded",()=>{function r(){const o=document.getElementById("site-header");return o?o.offsetHeight:0}function n(o){const s=document.getElementById(o);if(!s)return;const e=r(),t=s.getBoundingClientRect().top+window.pageYOffset-e;window.scrollTo({top:t,behavior:"smooth"})}if(document.querySelectorAll('a[href*="#"]').forEach(o=>{o.addEventListener("click",function(s){const e=this.getAttribute("href");if(!e)return;const[t,i]=e.split("#");if(!i)return;const l=window.location.pathname.split("/").pop();!(t===""||t==="./"||t===l||t==="./"+l)||!document.getElementById(i)||(s.preventDefault(),n(i))})}),window.location.hash){const o=window.location.hash.substring(1);setTimeout(()=>{n(o)},300)}});document.addEventListener("DOMContentLoaded",function(){const r=document.getElementById("cookie-popup"),n=document.getElementById("accept-cookies"),o=document.getElementById("decline-cookies");localStorage.getItem("cookiesAccepted")||(r.style.display="block"),n.addEventListener("click",()=>{localStorage.setItem("cookiesAccepted","yes"),r.style.display="none"}),o.addEventListener("click",()=>{localStorage.setItem("cookiesAccepted","no"),r.style.display="none"})});
//# sourceMappingURL=main-BZ61YFqb.js.map
