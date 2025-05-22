import{a as P,S as $,i as u}from"./assets/vendor-DqUhfJqr.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const M=15;async function m(t,r){const n=new URLSearchParams({key:"50274230-e09cffa3049f5c538182e0b60",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:M,page:r});try{return(await P.get(`https://pixabay.com/api/?${n}`)).data}catch(a){throw a}}let f;const h=document.querySelector(".loader"),B=document.querySelector(".gallery"),p=document.querySelector(".btn-load");document.querySelector(".gallery-item");function L(t){return t.map(({webformatURL:r,largeImageURL:n,tags:a,likes:e,views:o,comments:i,downloads:q})=>`<li class="gallery-item">
      <a class="gallery-link" href="${n}">
        <img
          class="gallery-image"
          src="${r}"
          alt="${a}"
          width = "360"
        />
      </a>
      <div class="gallery-content">
		<ul class="gallery-content-wrapper">
			<li>Likes<span>${e}</span></li>
			<li>Views<span>${o}</span></li>
			<li>Comments<span>${i}</span></li>
			<li>Downloads<span>${q}</span></li>
		</ul>
	</div>
    </li>`).join("")}function x(){B.innerHTML=""}function b(){h.classList.add("visible")}function s(){h.classList.remove("visible")}function H(){p.classList.add("visible")}function l(){p.classList.remove("visible")}function O(){f=new $(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250})}function v(){f&&f.refresh()}const g=document.querySelector(".form"),S=document.querySelector(".gallery"),I=document.querySelector(".form-search-input");document.querySelector(".loader");const T=document.querySelector(".btn-load");let c=1,d="";const w=15;let y=0;O();l();function C(){const t=document.querySelector(".gallery-item");t&&(y=t.getBoundingClientRect().height,window.scrollBy({top:y*2,behavior:"smooth"}))}g.addEventListener("submit",async t=>{if(t.preventDefault(),s(),d=I.value.trim(),!d){u.warning({title:"Warning",message:"Please fill in the input field!"});return}c=1,x(),l(),b();try{const r=await m(d,c);if(s(),!r.hits.length)u.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),l();else{S.innerHTML=L(r.hits),v();const n=document.querySelector(".gallery-item");n&&(y=n.getBoundingClientRect().height),r.totalHits>w?H():(u.info({title:"Info",message:"We're sorry, but you've reached the end of search results."}),l())}g.reset()}catch(r){s(),console.log(r)}});T.addEventListener("click",async()=>{c+=1,b();try{const t=await m(d,c);s(),S.insertAdjacentHTML("beforeend",L(t.hits)),v(),C(),c*w>=t.totalHits&&(l(),u.info({title:"Info",message:"We're sorry, but you've reached the end of search results."}))}catch(t){s(),console.log(t)}});
//# sourceMappingURL=index.js.map
