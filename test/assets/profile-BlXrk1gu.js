const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/my-district-3d-NEmw1xt8.js","assets/three.core-C0FBa6VY.js","assets/three.module-B1Ubwju4.js","assets/sites-BT5Wt74L.js","assets/boot-DRCCVLmz.js","assets/preload-W_x1c0X2.js","assets/index-CsrqJ8ZY.js","assets/index-CHW1ZLP-.css","assets/rules-C_qrJEVm.js","assets/game-DeLKFOUo.js","assets/celebs-ffRPWynV.js","assets/cosmetics--GsWb_pF.js","assets/defis-DAXMUEvL.js","assets/ui-icons-Z9FDqZbC.js","assets/crews-CMqar72E.js","assets/dom-Dkp-waoj.js","assets/referral-Dt8GNoLD.js","assets/SkeletonUtils-CHxfGqZJ.js","assets/meshopt_decoder.module-C1ENFgHE.js","assets/BufferGeometryUtils-BSmIi3WG.js","assets/app-Cr1cugYM.js","assets/rolldown-runtime-DK3Fl9T5.js","assets/RoundedBoxGeometry-BM5gtpPd.js","assets/icons-Cd1fStTg.js","assets/companion-B8VH4oMg.js","assets/format-CjuF2q7h.js","assets/crew-tags-Br0Nxcs3.js","assets/site-media-C53tmlo-.js","assets/app-A4zb8hLw.css"])))=>i.map(i=>d[i]);
import{t as e}from"./preload-W_x1c0X2.js";import{i as t}from"./rules-C_qrJEVm.js";import{i as n,n as r}from"./sites-BT5Wt74L.js";import{C as i,Cn as a,Sn as o,b as s,bn as c,dt as l,gt as u,jn as d,kt as f,y as p,yt as m}from"./game-DeLKFOUo.js";import{r as ee}from"./cosmetics--GsWb_pF.js";import{_ as h}from"./defis-DAXMUEvL.js";import{E as g,i as _,r as v}from"./ui-icons-Z9FDqZbC.js";import{h as y}from"./crews-CMqar72E.js";import{a as b,i as x,n as S,r as C}from"./dom-Dkp-waoj.js";import{K as w,q as T}from"./boot-DRCCVLmz.js";import{t as E}from"./icons-Cd1fStTg.js";import{a as D,i as O,r as k}from"./format-CjuF2q7h.js";import{n as te,t as ne}from"./crew-tags-Br0Nxcs3.js";import{t as A}from"./site-media-C53tmlo-.js";import{E as re,b as j,x as M,y as N}from"./app-Cr1cugYM.js";import{t as P}from"./district-icons-BqEbMPUd.js";var F=[`svg`,g,[[`path`,{d:`m11 17 2 2a1 1 0 1 0 3-3`}],[`path`,{d:`m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4`}],[`path`,{d:`m21 3 1 11h-2`}],[`path`,{d:`M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3`}],[`path`,{d:`M3 4h8`}]]],I=class{root;onOpenSite=()=>{};playerId=null;sceneHost=S(`div`,{class:`pc-3d-canvas`});charViewer=null;scene=null;constructor(e){this.root=S(`section`,{class:`profile-card-wrap`,role:`dialog`,"aria-label":`Profil du joueur`,"aria-hidden":`true`}),e.appendChild(this.root),this.root.addEventListener(`click`,e=>{let t=e.target;if(t===this.root||t.closest(`[data-close]`))return this.close();let n=t.closest(`[data-site]`);n&&(this.close(),this.onOpenSite(n.dataset.site))}),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&this.playerId&&this.close()})}sceneP=null;ensureScene(){return this.sceneP??=e(()=>import(`./my-district-3d-NEmw1xt8.js`).then(e=>e.MyDistrict3D.create(this.sceneHost)),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28])).then(e=>{this.scene=e,e.onTap=e=>{this.close(),this.onOpenSite(e)}}).catch(()=>{this.sceneP=null}),this.sceneP.then(()=>new Promise(e=>requestAnimationFrame(()=>e())))}open(e,t,n,r,i){this.playerId=e,this.render(t,n,r,i),this.root.classList.add(`open`),this.root.setAttribute(`aria-hidden`,`false`)}close(){this.playerId=null,this.scene?.setActive(!1),this.root.classList.remove(`open`),this.root.setAttribute(`aria-hidden`,`true`)}render(e,g,S,I){let L=this.playerId,R=e.players[L];if(!R)return this.close();let z=re(e,g),B=z.findIndex(e=>e.playerId===L),V=d(e,L).filter(e=>n[e.id]).map(e=>({s:e,cfg:n[e.id],price:c(e,g,t)})).sort((e,t)=>t.price-e.price),H=V[0],U=new Map;for(let e of V){let t=U.get(e.cfg.district)??{value:0,n:0};U.set(e.cfg.district,{value:t.value+e.price,n:t.n+1})}let W=[...U.entries()].sort((e,t)=>t[1].value-e[1].value)[0],G=W?r[W[0]]:null,K=R.isBot?`<span class="tag">ordi</span>`:L===S?`<span class="tag">toi</span>`:``,q=l(e,L),J=q?y(q.division):null,Y=q?`<span class="pc-crew" style="--c:${q.color}">${ne(q,20)}<b>${C(q.name)}</b><small>[${C(q.tag)}]</small>${J?`<em style="--d:${J.color}">${J.badge} ${C(J.name)}</em>`:``}<em style="--d:#7fe3ff" title="XP de crew : les objectifs réussis, la fidélité au crew">${v(`sparkles`)} ${u(q,L)} XP</em></span>`:`<span class="pc-crew none">Sans crew</span>`,X=h(R),Z=R.stats.longestReign,Q=L!==S&&m(e,S,L)?l(e,S):null;this.root.innerHTML=`
      <div class="profile-card" style="--c:${R.color}">
        <button class="sheet-close pc-close" data-close aria-label="Fermer"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg></button>
        <div class="pc-head">
          ${x(R,84)}
          <div class="pc-id">
            <strong>${te(e,R.id)}${N(R)}</strong>
            ${b(R)?`<span class="p-title">${C(b(R))}</span>`:``}
            ${Y}
            <span class="pc-rankname">${v(`medal`)} Rang ${X.rank} · <b>${C(X.name)}</b></span>
            ${K?`<span>${K}</span>`:``}
            <span class="pc-rank">${j(e,S,`ranking`)?M(`ranking`):`${v(`trophy`)} ${B>=0?`${B+1}<sup>${B===0?`er`:`e`}</sup> sur ${z.length}`:`-`}`}</span>
          </div>
          ${T(f(R,`char`))?`<span class="pc-char" data-char title="${C(ee[f(R,`char`)]?.name??``)}"></span>`:``}
        </div>
        <div class="pc-stats">
          ${L===S?`<div><span>Fortune</span><b class="num">${k(z[B]?.fortune??R.wallet)}</b></div>
                 <div><span>Gains</span><b class="num green">+${D(o(e,L,t))}<small>/min</small></b></div>
                 <div><span>En poche</span><b class="num">${k(R.wallet)}</b></div>`:``}
          <div><span>Sites</span><b class="num">${V.length}<small>/${p(R,t)}</small></b></div>
          <div title="${C(h(R).name)}"><span>Rang</span><b class="num">${h(R).rank}<small> ${C(h(R).name)}</small></b></div>
        </div>
        ${L===S?``:`<p class="pc-secret">${v(`lock`)} Sa fortune, ses gains et ses octets en poche restent secrets.</p>`}
        ${Q?`<p class="pc-crewmate" style="--c:${Q.color}">${_(F)} Membre de ton crew <b>[${C(Q.tag)}]</b> : ses sites sont protégés, impossible de les voler.</p>`:``}
        <div class="pc-label">Son quartier${L===S?``:Q?` · touche un immeuble pour voir son nom`:` · touche un immeuble pour voir son nom, touche encore pour aller le voler`}</div>
        <div class="pc-3d" data-3d-slot>${V.length?``:`<p class="pc-3d-empty">Quartier vide : aucun immeuble pour l’instant.</p>`}</div>
        ${H?`<div class="pc-best">
                <div class="pc-label">Meilleur immeuble</div>
                <button class="pc-best-row" data-site="${H.cfg.id}">
                  ${A(H.cfg.domain,E(H.cfg.icon,18,H.cfg.color),40)}
                  <span class="pc-best-main"><strong>${C(H.cfg.name)}</strong><small>${C(r[H.cfg.district].name)}${L===S?` · +${D(a(H.s,t))}/min`:``}</small></span>
                  <b class="num gold">${k(H.price)}</b>
                </button>
              </div>`:``}
        ${G?`<div class="pc-fav" style="--d:${G.color}">
                <span class="map-theme">${E(P[G.id],15)}</span>
                <span>Secteur favori : <b>${C(G.name)}</b> · ${W[1].n} site${W[1].n>1?`s`:``}, ${k(W[1].value)} octets</span>
              </div>`:``}
        <div class="pc-label">${V.length?`Ses sites${V.length>6?` (6 sur ${V.length})`:``}`:`Ses sites`}</div>
        ${V.length?`<div class="pc-sites">${V.slice(0,6).map(e=>`<button class="pc-site" data-site="${e.cfg.id}" style="--d:${e.cfg.color}">
                    ${A(e.cfg.domain,E(e.cfg.icon,14,e.cfg.color),26)}
                    <span>${C(e.cfg.name)}</span><b class="num">${k(e.price)}</b></button>`).join(``)}</div>`:`<p class="rp-empty">Aucun site pour le moment.</p>`}
        <p class="pc-foot">${R.stats.bought??0} site${(R.stats.bought??0)>1?`s`:``} acheté${(R.stats.bought??0)>1?`s`:``} · ${R.stats.steals} vol${R.stats.steals>1?`s`:``} réussi${R.stats.steals>1?`s`:``} · volé ${R.stats.timesRobbed} fois${Z&&n[Z.siteId]?` · plus long règne : ${C(n[Z.siteId].name)}, ${O(Z.value)}`:``}</p>
      </div>`;let $=this.root.querySelector(`[data-char]`);$&&(this.charViewer??=new w,this.charViewer.show(f(R,`char`)),this.charViewer.mount($));let ie=this.root.querySelector(`[data-3d-slot]`);V.length?(ie.appendChild(this.sceneHost),this.ensureScene().then(()=>{this.playerId===L&&(this.scene?.sync(V.map(e=>({id:e.cfg.id,price:e.price})),R.color,R.name,i(R),s(R)),this.scene?.setActive(!0))})):this.scene?.setActive(!1)}};export{I as ProfileCard};