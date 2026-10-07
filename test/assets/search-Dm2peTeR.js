import{i as e}from"./rules-NHK8zf_C.js";import{i as t,n}from"./sites-BT5Wt74L.js";import{In as r,jn as i,w as a}from"./game-CZt7NZTi.js";import{i as o,r as s}from"./ui-icons-HgoMpw99.js";import{i as c,n as l,r as u}from"./dom-BRJ8AUuW.js";import{et as d,tt as f}from"./boot-Bv6D3HT-.js";import{t as p}from"./icons-Cd1fStTg.js";import{a as m,i as h,o as g,t as _}from"./format-CjuF2q7h.js";import{i as v,n as y,r as b,t as x}from"./site-media-fIMPAPJO.js";import{c as S,et as C,o as w}from"./app-C5gnPgdT.js";var T={abordables:`À ma portée`,libres:`Libres`,tous:`Tous`};function E(e){return e.normalize(`NFD`).replace(/[̀-ͯ]/g,``).toLowerCase()}var D=class{root;onPick=()=>{};onSteal=()=>{};input;list;count;detail;filter=`abordables`;district=`all`;selected=null;ctx=null;constructor(e){this.root=l(`section`,{class:`search`,role:`dialog`,"aria-label":`Trouver un site`,"aria-hidden":`true`},`<div class="search-card">
        <div class="search-top">
          <div class="search-field">
            ${p(`search`,18)}
            <input type="search" placeholder="YouTube, Le Monde, pokemon…" aria-label="Nom du site" autocomplete="off" />
          </div>
          <button class="sheet-close" data-close aria-label="Fermer"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg></button>
        </div>
        <div class="chips" role="tablist" aria-label="Filtre">${Object.keys(T).map(e=>`<button class="chip-btn" role="tab" data-filter="${e}">${T[e]}</button>`).join(``)}</div>
        <div class="chips districts-chips" aria-label="Quartier">
          <button class="chip-btn" data-district="all">Tous les quartiers</button>
          ${d().map(e=>`<button class="chip-btn" data-district="${e.id}" style="--d:${e.color}"><i class="chip-dot"></i>${u(e.name)}</button>`).join(``)}
        </div>
        <div class="search-body">
          <div class="search-col">
            <p class="search-count" aria-live="polite"></p>
            <div class="search-list"></div>
          </div>
          <div class="search-detail" hidden></div>
        </div>
      </div>`),e.appendChild(this.root),this.input=this.root.querySelector(`input`),this.list=this.root.querySelector(`.search-list`),this.count=this.root.querySelector(`.search-count`),this.detail=this.root.querySelector(`.search-detail`),this.root.querySelectorAll(`.chips`).forEach(w),this.input.addEventListener(`input`,()=>this.render()),this.root.querySelector(`[data-close]`).addEventListener(`click`,()=>this.close()),this.root.addEventListener(`click`,e=>{let t=e.target;if(t===this.root)return this.close();let n=t.closest(`[data-filter]`);if(n)return this.filter=n.dataset.filter,this.render();let r=t.closest(`[data-district]`);if(r)return this.district=r.dataset.district,r.parentElement.reveal?.(r),this.render();if(t.closest(`[data-back]`))return this.selected=null,this.render();let i=t.closest(`[data-steal]`);if(i)return i.hasAttribute(`disabled`)?void 0:(this.close(),this.onSteal(i.dataset.steal));let a=t.closest(`[data-go]`);if(a)return this.close(),this.onPick(a.dataset.go);let o=t.closest(`[data-site]`);if(o)return this.close(),this.onPick(o.dataset.site)}),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&this.isOpen&&this.close()}),this.input.addEventListener(`keydown`,e=>{if(e.key!==`Enter`)return;let t=this.list.querySelector(`.search-row[data-site]`);t&&(this.close(),this.onPick(t.dataset.site))})}get isOpen(){return this.root.classList.contains(`open`)}open(e,t,n,r){this.ctx={state:e,now:t,meId:n},r&&(this.filter=r),this.selected=null,this.input.value=``,this.root.classList.add(`open`),this.root.setAttribute(`aria-hidden`,`false`),this.render(),window.innerWidth>=700&&setTimeout(()=>this.input.focus(),50)}close(){this.root.classList.remove(`open`),this.root.setAttribute(`aria-hidden`,`true`)}render(){if(!this.ctx)return;let{state:t,now:r,meId:a}=this.ctx,o=E(this.input.value.trim());this.root.querySelectorAll(`[data-filter]`).forEach(e=>e.setAttribute(`aria-selected`,String(e.dataset.filter===this.filter))),this.root.querySelectorAll(`[data-district]`).forEach(e=>e.setAttribute(`aria-selected`,String(e.dataset.district===this.district)));let s=f().map(n=>{let a=t.sites[n.id];return{cfg:n,s:a,price:a?i(a,r,e):n.basePrice}}).filter(({cfg:e,s:n})=>{if(!n||this.district!==`all`&&e.district!==this.district||o&&!E(`${e.name} ${e.domain} ${e.category}`).includes(o))return!1;if(this.filter===`abordables`&&!o){let n=S(t,a,e.id,r).kind;return n===`buy`||n===`steal`}return this.filter!==`libres`||n.ownerId===null}).sort((e,t)=>(this.filter===`abordables`?t.price-e.price:e.price-t.price)||e.cfg.name.localeCompare(t.cfg.name)),l=this.district===`all`?``:` dans le quartier ${n[this.district].name}`;this.count.textContent=s.length===0?this.filter===`abordables`&&!o?O(t,a)?`Plus de place pour un site : achète un terrain dans « Mes sites » (${e.plots.size} places de plus).`:`Rien à ta portée${l} pour le moment : tes revenus tombent tout seuls, reviens dans un moment ou attends que les prix baissent.`:`Aucun site trouvé${l}.`:`${s.length} site${s.length>1?`s`:``}${l}`,this.list.innerHTML=s.slice(0,120).map(({cfg:e,s:i,price:o})=>{let s=i.ownerId?t.players[i.ownerId]:null,l=S(t,a,e.id,r),d=l.kind===`buy`?`OBTENIR`:l.kind===`steal`?`ATTAQUER`:l.kind===`blocked`?l.short:``,f=l.kind===`buy`||l.kind===`steal`,m=l.kind===`steal`?l.price:o,h=i.ownerId===a?``:`<button class="search-steal${f?``:` off`}" data-steal="${e.id}" ${f?``:`disabled`} aria-label="${d} ${u(e.name)}, ${_(m)} octets">${d}<small class="num">${l.kind===`steal`?`ticket `:``}${_(m)}</small></button>`;return`<div class="search-row${e.id===this.selected?` on`:``}" data-site="${e.id}" role="button" tabindex="0">
          ${x(e.domain,p(e.icon,16,e.color),30)}
          <span class="search-row-main">
            <span class="search-row-name">${u(e.name)}</span>
            <span class="search-row-meta"><i class="chip-dot" style="--d:${e.color}"></i>${u(n[e.district].name)} · ${s?s.id===a?`à toi`:u(s.name):`libre`}</span>
          </span>
          ${s?c(s,22):``}
          ${h||`<span class="search-price num">${_(o)}</span>`}
        </div>`}).join(``),this.renderDetail()}renderDetail(){if(this.root.querySelector(`.search-body`).classList.toggle(`has-detail`,!!this.selected),this.detail.hidden=!this.selected,!this.selected||!this.ctx)return;let{state:a,now:l,meId:d}=this.ctx,f=t[this.selected],w=a.sites[this.selected];if(!f||!w)return;let T=a.players[d],E=w.ownerId?a.players[w.ownerId]:null,D=i(w,l,e),O=r(w,e),k=w.ownerId===d,A=D-T.wallet,j=Math.round((D-w.basePrice)/w.basePrice*100);this.detail.innerHTML=`
      <button class="detail-back" data-back>‹ Retour à la liste</button>
      <div class="detail-grid">
        <div class="detail-info">
          <div class="detail-head">
            ${x(f.domain,p(f.icon,22,f.color),44)}
            <div>
              <h3>${u(f.name)}</h3>
              <a class="site-link" href="${v(f.domain)}" target="_blank" rel="noopener noreferrer">${u(b(f.domain))} ${o(C)}</a>
            </div>
          </div>
          <p class="detail-owner">${E?`${c(E,22)} ${k?`À toi`:`Appartient à <b>${u(E.name)}</b>`}`:`Libre : personne ne le possède.`} · <i class="chip-dot" style="--d:${f.color}"></i> ${u(n[f.district].name)}</p>
          <dl class="detail-figures">
            <div><dt>${k?`Valeur actuelle`:`Tu dois payer`}</dt><dd class="num gold">${_(D)}</dd></div>
            <div><dt>Valeur de base</dt><dd class="num">${_(w.basePrice)}${j>0?`<small>▲ ${j} %</small>`:``}</dd></div>
            <div><dt>Il rapporte</dt><dd class="num green">+${m(O)}<small>/min · +${_(O*60)}/h</small></dd></div>
          </dl>
          ${k?`<p class="detail-note">C’est l’un de tes sites.</p>`:A>0?`<p class="detail-note warn">Il te manque ${g(A)}.</p>`:`<p class="detail-note">Rentabilisé en ${h(O>0?D/O*6e4:0)} de revenus (sans compter la revente).</p>`}
          ${(()=>{let e=S(a,d,f.id,l);return`${e.kind===`buy`||e.kind===`steal`?`<button class="cta" data-steal="${f.id}">${e.kind===`buy`?`OBTENIR · ${_(D)}`:`ATTAQUER · ticket ${_(e.price)}`}</button>`:`<button class="cta" disabled>${u(e.reason)}</button>`}<button class="detail-back detail-go" data-go="${f.id}">Voir dans la ville ›</button>`})()}
        </div>
        <figure class="detail-shot">
          ${E?`<span class="shot-flag" style="--c:${E.color}">${c(E,22)}<span>Appartient à <b>${k?`toi`:u(E.name)}</b></span></span>`:`<span class="shot-flag free"><span>${s(`flag`)} Libre : à prendre !</span></span>`}
          <img src="${y(f.id)}" alt="Page d’accueil de ${u(f.name)}" loading="lazy" referrerpolicy="no-referrer"
            onload="this.closest('figure').classList.add('ready')" onerror="this.closest('figure').remove()" />
          <figcaption>Page d’accueil de ${u(b(f.domain))} · la première capture d’un site peut mettre quelques secondes</figcaption>
        </figure>
      </div>`}};function O(t,n){let r=0;for(let e of t.siteOrder)t.sites[e].ownerId===n&&r++;return r>=a(t.players[n],e)}export{D as SearchPanel};