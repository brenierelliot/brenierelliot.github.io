const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/my-district-3d-DT22MZBe.js","assets/three.core-Mu451PDX.js","assets/three.module-DnIhVZZQ.js","assets/sites-BT5Wt74L.js","assets/boot-B3w8c_GU.js","assets/preload-W_x1c0X2.js","assets/index-Qk23rLm5.js","assets/index-YlYbvMTO.css","assets/rules-Dc6VR6n4.js","assets/game-CWW3L_m8.js","assets/celebs-DkBXU-8Z.js","assets/cosmetics-2jrzmQkD.js","assets/defis-B4c_xwMQ.js","assets/ui-icons-e20H8bDF.js","assets/estimate-DCl2lube.js","assets/crews-DwtfPKda.js","assets/diamond-yd4Ba0py.js","assets/bot-Bq22dJtE.js","assets/dom-2maZZax9.js","assets/referral-B3dMPyUh.js","assets/SkeletonUtils-CHxfGqZJ.js","assets/meshopt_decoder.module-CId_WM5g.js","assets/BufferGeometryUtils-B-9BH7ix.js","assets/app-NmbScR-B.js","assets/rolldown-runtime-DK3Fl9T5.js","assets/RoundedBoxGeometry-BIyeZhxC.js","assets/icons-Cd1fStTg.js","assets/companion-BvL1u7WK.js","assets/format-CjuF2q7h.js","assets/crew-tags-BEVcXFsE.js","assets/site-media-C53tmlo-.js","assets/app-M09jA7o2.css"])))=>i.map(i=>d[i]);
import{t as e}from"./preload-W_x1c0X2.js";import{i as t}from"./rules-Dc6VR6n4.js";import{i as n,n as r}from"./sites-BT5Wt74L.js";import{C as i,D as a,S as o,Sn as s,b as c,dt as l,gt as u,kt as d,mn as f,pn as p,un as ee,yt as m}from"./game-CWW3L_m8.js";import{r as h}from"./cosmetics-2jrzmQkD.js";import{_ as g}from"./defis-B4c_xwMQ.js";import{D as _,i as te,r as v}from"./ui-icons-e20H8bDF.js";import{h as y}from"./crews-DwtfPKda.js";import{a as b,i as x,n as S,r as C}from"./dom-2maZZax9.js";import{B as w,z as ne}from"./boot-B3w8c_GU.js";import{t as T}from"./icons-Cd1fStTg.js";import{a as E,i as D,r as O}from"./format-CjuF2q7h.js";import{n as k,t as A}from"./crew-tags-BEVcXFsE.js";import{t as j}from"./site-media-C53tmlo-.js";import{E as re,_ as M,g as N,o as P,v as F}from"./app-NmbScR-B.js";var I=[`svg`,_,[[`path`,{d:`m11 17 2 2a1 1 0 1 0 3-3`}],[`path`,{d:`m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4`}],[`path`,{d:`m21 3 1 11h-2`}],[`path`,{d:`M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3`}],[`path`,{d:`M3 4h8`}]]],L=class{root;onOpenSite=()=>{};playerId=null;sceneHost=S(`div`,{class:`pc-3d-canvas`});charViewer=null;scene=null;constructor(e){this.root=S(`section`,{class:`profile-card-wrap`,role:`dialog`,"aria-label":`Profil du joueur`,"aria-hidden":`true`}),e.appendChild(this.root),this.root.addEventListener(`click`,e=>{let t=e.target;if(t===this.root||t.closest(`[data-close]`))return this.close();let n=t.closest(`[data-site]`);n&&(this.close(),this.onOpenSite(n.dataset.site))}),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&this.playerId&&this.close()})}sceneP=null;ensureScene(){return this.sceneP??=e(()=>import(`./my-district-3d-DT22MZBe.js`).then(e=>e.MyDistrict3D.create(this.sceneHost)),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31])).then(e=>{this.scene=e,e.onTap=e=>{this.close(),this.onOpenSite(e)}}).catch(()=>{this.sceneP=null}),this.sceneP.then(()=>new Promise(e=>requestAnimationFrame(()=>e())))}open(e,t,n,r,i){this.playerId=e,this.render(t,n,r,i),this.root.classList.add(`open`),this.root.setAttribute(`aria-hidden`,`false`)}close(){this.playerId=null,this.scene?.setActive(!1),this.root.classList.remove(`open`),this.root.setAttribute(`aria-hidden`,`true`)}render(e,_,S,L){let R=this.playerId,z=e.players[R];if(!z)return this.close();let B=re(e,_),V=B.findIndex(e=>e.playerId===R),H=s(e,R).filter(e=>n[e.id]).map(e=>({s:e,cfg:n[e.id],price:ee(e,_,t)})).sort((e,t)=>t.price-e.price),U=H[0],W=new Map;for(let e of H){let t=W.get(e.cfg.district)??{value:0,n:0};W.set(e.cfg.district,{value:t.value+e.price,n:t.n+1})}let G=[...W.entries()].sort((e,t)=>t[1].value-e[1].value)[0],K=G?r[G[0]]:null,q=z.isBot?`<span class="tag">ordi</span>`:R===S?`<span class="tag">toi</span>`:``,J=l(e,R),Y=J?y(J.division):null,ie=J?`<span class="pc-crew" style="--c:${J.color}">${A(J,20)}<b>${C(J.name)}</b><small>[${C(J.tag)}]</small>${Y?`<em style="--d:${Y.color}">${Y.badge} ${C(Y.name)}</em>`:``}<em style="--d:#7fe3ff" title="XP de crew : les objectifs réussis, la fidélité au crew">${v(`sparkles`)} ${u(J,R)} XP</em></span>`:`<span class="pc-crew none">Sans crew</span>`,X=g(z),Z=z.stats.longestReign,Q=R!==S&&m(e,S,R)?l(e,S):null;this.root.innerHTML=`
      <div class="profile-card" style="--c:${z.color}">
        <button class="sheet-close pc-close" data-close aria-label="Fermer"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg></button>
        <div class="pc-head">
          ${x(z,84)}
          <div class="pc-id">
            <strong>${k(e,z.id)}${N(z)}</strong>
            ${b(z)?`<span class="p-title">${C(b(z))}</span>`:``}
            ${ie}
            <span class="pc-rankname">${v(`medal`)} Rang ${X.rank} · <b>${C(X.name)}</b></span>
            ${q?`<span>${q}</span>`:``}
            <span class="pc-rank">${M(e,S,`ranking`)?F(`ranking`):`${v(`trophy`)} ${V>=0?`${V+1}<sup>${V===0?`er`:`e`}</sup> sur ${B.length}`:`-`}`}</span>
          </div>
          ${w(d(z,`char`))?`<span class="pc-char" data-char title="${C(h[d(z,`char`)]?.name??``)}"></span>`:``}
        </div>
        <div class="pc-stats">
          ${R===S?`<div><span>Fortune</span><b class="num">${O(B[V]?.fortune??z.wallet)}</b></div>
                 <div><span>Gains</span><b class="num green">+${E(p(e,R,t))}<small>/min</small></b></div>
                 <div><span>En poche</span><b class="num">${O(z.wallet)}</b></div>`:``}
          <div><span>Sites</span><b class="num">${H.length}<small>/${o(z,t)}</small></b></div>
          <div title="${C(g(z).name)}"><span>Rang</span><b class="num">${g(z).rank}<small> ${C(g(z).name)}</small></b></div>
          <div><span>Amélioration</span><b class="num">${i(z)}<small>${c(z,t)?` +${Math.round(c(z,t)*100)} %`:``}</small></b></div>
        </div>
        ${R===S?``:`<p class="pc-secret">${v(`lock`)} Sa fortune, ses gains et ses octets en poche restent secrets.</p>`}
        ${Q?`<p class="pc-crewmate" style="--c:${Q.color}">${te(I)} Membre de ton crew <b>[${C(Q.tag)}]</b> : ses sites sont protégés, impossible de les voler.</p>`:``}
        <div class="pc-label">Son quartier${R===S?``:Q?` · touche un immeuble pour voir son nom`:` · touche un immeuble pour voir son nom, touche encore pour aller le voler`}</div>
        <div class="pc-3d" data-3d-slot>${H.length?``:`<p class="pc-3d-empty">Quartier vide : aucun immeuble pour l’instant.</p>`}</div>
        ${U?`<div class="pc-best">
                <div class="pc-label">Meilleur immeuble</div>
                <button class="pc-best-row" data-site="${U.cfg.id}">
                  ${j(U.cfg.domain,T(U.cfg.icon,18,U.cfg.color),40)}
                  <span class="pc-best-main"><strong>${C(U.cfg.name)}</strong><small>${C(r[U.cfg.district].name)}${R===S?` · +${E(f(U.s,t))}/min`:``}</small></span>
                  <b class="num gold">${O(U.price)}</b>
                </button>
              </div>`:``}
        ${K?`<div class="pc-fav" style="--d:${K.color}">
                <span class="map-theme">${T(P[K.id],15)}</span>
                <span>Secteur favori : <b>${C(K.name)}</b> · ${G[1].n} site${G[1].n>1?`s`:``}, ${O(G[1].value)} octets</span>
              </div>`:``}
        <div class="pc-label">${H.length?`Ses sites${H.length>6?` (6 sur ${H.length})`:``}`:`Ses sites`}</div>
        ${H.length?`<div class="pc-sites">${H.slice(0,6).map(e=>`<button class="pc-site" data-site="${e.cfg.id}" style="--d:${e.cfg.color}">
                    ${j(e.cfg.domain,T(e.cfg.icon,14,e.cfg.color),26)}
                    <span>${C(e.cfg.name)}</span><b class="num">${O(e.price)}</b></button>`).join(``)}</div>`:`<p class="rp-empty">Aucun site pour le moment.</p>`}
        <p class="pc-foot">${z.stats.bought??0} site${(z.stats.bought??0)>1?`s`:``} acheté${(z.stats.bought??0)>1?`s`:``} · ${z.stats.steals} vol${z.stats.steals>1?`s`:``} réussi${z.stats.steals>1?`s`:``} · volé ${z.stats.timesRobbed} fois${Z&&n[Z.siteId]?` · plus long règne : ${C(n[Z.siteId].name)}, ${D(Z.value)}`:``}</p>
      </div>`;let $=this.root.querySelector(`[data-char]`);$&&(this.charViewer??=new ne,this.charViewer.show(d(z,`char`)),this.charViewer.mount($));let ae=this.root.querySelector(`[data-3d-slot]`);H.length?(ae.appendChild(this.sceneHost),this.ensureScene().then(()=>{this.playerId===R&&(this.scene?.sync(H.map(e=>({id:e.cfg.id,price:e.price})),z.color,z.name,a(z),i(z)),this.scene?.setActive(!0))})):this.scene?.setActive(!1)}};export{L as ProfileCard};