import{i as e,r as t}from"./ui-icons-HgoMpw99.js";import{n,t as r}from"./home-CKDvq3v5.js";import{n as i,t as a}from"./home-CyJs0LS3.js";import{n as o,r as s}from"./dom-Bao0r4d6.js";import{M as c,P as l}from"./app-DC3oYj2A.js";var u=(e,t,n)=>{let i=l(e,t,n);return i?`<img src="${i}" alt="" draggable="false" data-home-thumb="${e}|${t}|${n}">`:r(e,t,n)};function d(r,l,d,f=``,p=!0){return new Promise(m=>{let h=d?.style??`paris`,g=o(`div`,{class:`confirm home-editor`,role:`dialog`,"aria-modal":`true`,"aria-label":d?`Modifier mon site`:`Créer mon site`},`<div class="confirm-card">
        <h2>${d?`Modifier mon site`:`${t(`home`)} Créer mon site`}</h2>
        <p class="he-intro">${d?p?`Change son nom ou son style : c’est gratuit.`:`Change son nom quand tu veux. Le style, lui, est choisi pour toute la saison.`:`Ton immeuble à toi. <b>Personne ne peut te le voler</b>, il rapporte des octets dès maintenant, et il grandit à chaque amélioration.`}</p>
        <div class="he-evo" aria-live="polite"></div>
        <label class="he-label" for="he-name">Nom de ton site</label>
        <input id="he-name" class="he-name" maxlength="24" autocomplete="off" spellcheck="false" value="${s(d?.name??f)}" placeholder="ex. ${s(f||`Le QG`)}">
        ${p?`<div class="he-label">Style d’architecture <small>· de la maison au monument</small></div>
        <div class="he-styles" role="radiogroup">
          ${a.map(t=>`<button type="button" class="he-style" role="radio" data-style="${t.id}">
              <span class="he-pair"><span class="he-mini">${u(t.id,1,l)}</span><i>${e(n)}</i><span class="he-mini big">${u(t.id,7,l)}</span></span>
              <b>${s(t.name)}</b><small>${s(c[t.id].maison)} ${e(n)} ${s(c[t.id].monument)}</small>
            </button>`).join(``)}
        </div>
        <p class="he-lock">${t(`lock`)} Ton style est choisi <b>jusqu’à la fin de la saison</b>. À la saison suivante, tu pourras en changer.</p>`:`<p class="he-lock">${t(`lock`)} Style ${s(i[h].name)} jusqu’à la fin de la saison.</p>`}
        <p class="confirm-blocked he-err" hidden></p>
        <div class="confirm-actions">
          <button class="cta collect" data-yes>${d?`Enregistrer`:`Construire mon site`}</button>
          <button class="small-btn ghost" data-no>${d?`Sortir`:`Plus tard`}</button>
        </div>
      </div>`);r.appendChild(g);let _=g.querySelector(`.he-name`),v=g.querySelector(`.he-evo`),y=g.querySelector(`.he-err`),b=()=>{let t=c[h];v.innerHTML=`
        <div class="he-evo-col"><span class="he-evo-img">${u(h,1,l)}</span><b>${s(t.maison)}</b><small>au départ · niveau 1</small></div>
        <div class="he-evo-arrow">${e(n)}<small>7 niveaux</small></div>
        <div class="he-evo-col max"><span class="he-evo-img">${u(h,7,l)}</span><b>${s(t.monument)}</b><small>évolution max · niveau 7</small></div>`,g.querySelectorAll(`.he-style`).forEach(e=>{let t=e.dataset.style===h;e.classList.toggle(`on`,t),e.setAttribute(`aria-checked`,String(t))})};b(),requestAnimationFrame(()=>g.classList.add(`show`));let x=e=>{g.classList.remove(`show`),document.removeEventListener(`keydown`,C),setTimeout(()=>g.remove(),250),m(e)},S=()=>{let e=_.value.trim().replace(/\s+/g,` `);if(e.length<2){y.hidden=!1,y.textContent=`Donne-lui un nom (2 lettres au moins).`,_.focus();return}x({name:e,style:h})},C=e=>{e.key===`Escape`&&x(null),e.key===`Enter`&&document.activeElement===_&&S()};document.addEventListener(`keydown`,C),_.addEventListener(`input`,()=>y.hidden=!0),g.querySelectorAll(`.he-style`).forEach(e=>e.addEventListener(`click`,()=>{h=e.dataset.style,b()})),g.querySelector(`[data-yes]`).addEventListener(`click`,S),g.querySelector(`[data-no]`).addEventListener(`click`,()=>x(null)),g.addEventListener(`click`,e=>{e.target===g&&x(null)})})}export{d as homeEditor};