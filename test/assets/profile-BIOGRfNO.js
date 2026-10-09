const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/my-district-3d-DMygJR_5.js","assets/three.core-C0FBa6VY.js","assets/three.module-B1Ubwju4.js","assets/sites-BT5Wt74L.js","assets/boot-BfxKW_TK.js","assets/preload-W_x1c0X2.js","assets/index-C8YO4rYD.js","assets/index-CHW1ZLP-.css","assets/rules-u1azzkuo.js","assets/game-DkdUJ_Ph.js","assets/celebs-Cn0ChM7T.js","assets/cosmetics-Q-YsOtg4.js","assets/defis-DrR2dkrJ.js","assets/ui-icons-Z9FDqZbC.js","assets/crews-B2Krcfpa.js","assets/dom-BMMavyDU.js","assets/referral-BcjxgsHt.js","assets/SkeletonUtils-CHxfGqZJ.js","assets/meshopt_decoder.module-DRctnmfj.js","assets/BufferGeometryUtils-BSmIi3WG.js","assets/app-Cji9ok-p.js","assets/rolldown-runtime-DK3Fl9T5.js","assets/RoundedBoxGeometry-BM5gtpPd.js","assets/icons-Cd1fStTg.js","assets/companion-7ebzT73t.js","assets/format-CjuF2q7h.js","assets/crew-tags-CjIkoXdw.js","assets/site-media-C53tmlo-.js","assets/app-B-A8hkez.css"])))=>i.map(i=>d[i]);
import{t as e}from"./preload-W_x1c0X2.js";import{i as t}from"./rules-u1azzkuo.js";import{i as n,n as r}from"./sites-BT5Wt74L.js";import{At as i,C as a,Cn as o,En as s,Pn as c,Tn as l,_t as u,b as d,bt as f,ft as p,y as m}from"./game-DkdUJ_Ph.js";import{r as h}from"./cosmetics-Q-YsOtg4.js";import{_ as g}from"./defis-DrR2dkrJ.js";import{E as _,i as v,r as y}from"./ui-icons-Z9FDqZbC.js";import{h as b}from"./crews-B2Krcfpa.js";import{a as x,i as S,n as C,r as w}from"./dom-BMMavyDU.js";import{K as ee,q as te}from"./boot-BfxKW_TK.js";import{t as T}from"./icons-Cd1fStTg.js";import{a as E,i as ne,r as D}from"./format-CjuF2q7h.js";import{n as O,t as re}from"./crew-tags-CjIkoXdw.js";import{t as k}from"./site-media-C53tmlo-.js";import{E as A,b as j,x as M,y as N}from"./app-Cji9ok-p.js";import{t as P}from"./district-icons-BqEbMPUd.js";var F=[`svg`,_,[[`path`,{d:`m11 17 2 2a1 1 0 1 0 3-3`}],[`path`,{d:`m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4`}],[`path`,{d:`m21 3 1 11h-2`}],[`path`,{d:`M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3`}],[`path`,{d:`M3 4h8`}]]],I=class{root;onOpenSite=()=>{};playerId=null;sceneHost=C(`div`,{class:`pc-3d-canvas`});charViewer=null;scene=null;constructor(e){this.root=C(`section`,{class:`profile-card-wrap`,role:`dialog`,"aria-label":`Profil du joueur`,"aria-hidden":`true`}),e.appendChild(this.root),this.root.addEventListener(`click`,e=>{let t=e.target;if(t===this.root||t.closest(`[data-close]`))return this.close();let n=t.closest(`[data-site]`);n&&(this.close(),this.onOpenSite(n.dataset.site))}),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&this.playerId&&this.close()})}sceneP=null;ensureScene(){return this.sceneP??=e(()=>import(`./my-district-3d-DMygJR_5.js`).then(e=>e.MyDistrict3D.create(this.sceneHost)),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28])).then(e=>{this.scene=e,e.onTap=e=>{this.close(),this.onOpenSite(e)}}).catch(()=>{this.sceneP=null}),this.sceneP.then(()=>new Promise(e=>requestAnimationFrame(()=>e())))}open(e,t,n,r,i){this.playerId=e,this.render(t,n,r,i),this.root.classList.add(`open`),this.root.setAttribute(`aria-hidden`,`false`)}close(){this.playerId=null,this.scene?.setActive(!1),this.root.classList.remove(`open`),this.root.setAttribute(`aria-hidden`,`true`)}render(e,_,C,I){let L=this.playerId,R=e.players[L];if(!R)return this.close();let z=A(e,_),B=z.findIndex(e=>e.playerId===L),V=c(e,L).filter(e=>n[e.id]).map(e=>({s:e,cfg:n[e.id],price:o(e,_,t)})).sort((e,t)=>t.price-e.price),H=V[0],U=new Map;for(let e of V){let t=U.get(e.cfg.district)??{value:0,n:0};U.set(e.cfg.district,{value:t.value+e.price,n:t.n+1})}let W=[...U.entries()].sort((e,t)=>t[1].value-e[1].value)[0],G=W?r[W[0]]:null,K=R.isBot?`<span class="tag">ordi</span>`:L===C?`<span class="tag">toi</span>`:``,q=p(e,L),J=q?b(q.division):null,Y=q?`<span class="pc-crew" style="--c:${q.color}">${re(q,20)}<b>${w(q.name)}</b><small>[${w(q.tag)}]</small>${J?`<em style="--d:${J.color}">${J.badge} ${w(J.name)}</em>`:``}<em style="--d:#7fe3ff" title="XP de crew : les objectifs réussis, la fidélité au crew">${y(`sparkles`)} ${u(q,L)} XP</em></span>`:`<span class="pc-crew none">Sans crew</span>`,X=g(R),Z=R.stats.longestReign,Q=L!==C&&f(e,C,L)?p(e,C):null;this.root.innerHTML=`
      <div class="profile-card" style="--c:${R.color}">
        <button class="sheet-close pc-close" data-close aria-label="Fermer"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg></button>
        <div class="pc-head">
          ${S(R,84)}
          <div class="pc-id">
            <strong>${O(e,R.id)}${N(R)}</strong>
            ${x(R)?`<span class="p-title">${w(x(R))}</span>`:``}
            ${Y}
            <span class="pc-rankname">${y(`medal`)} Rang ${X.rank} · <b>${w(X.name)}</b></span>
            ${K?`<span>${K}</span>`:``}
            <span class="pc-rank">${j(e,C,`ranking`)?M(`ranking`):`${y(`trophy`)} ${B>=0?`${B+1}<sup>${B===0?`er`:`e`}</sup> sur ${z.length}`:`-`}`}</span>
          </div>
          ${te(i(R,`char`))?`<span class="pc-char" data-char title="${w(h[i(R,`char`)]?.name??``)}"></span>`:``}
        </div>
        <div class="pc-stats">
          ${L===C?`<div><span>Fortune</span><b class="num">${D(z[B]?.fortune??R.wallet)}</b></div>
                 <div><span>Gains</span><b class="num green">+${E(l(e,L,t))}<small>/min</small></b></div>
                 <div><span>En poche</span><b class="num">${D(R.wallet)}</b></div>`:``}
          <div><span>Sites</span><b class="num">${V.length}<small>/${m(R,t)}</small></b></div>
          <div title="${w(g(R).name)}"><span>Rang</span><b class="num">${g(R).rank}<small> ${w(g(R).name)}</small></b></div>
        </div>
        ${L===C?``:`<p class="pc-secret">${y(`lock`)} Sa fortune, ses gains et ses octets en poche restent secrets.</p>`}
        ${Q?`<p class="pc-crewmate" style="--c:${Q.color}">${v(F)} Membre de ton crew <b>[${w(Q.tag)}]</b> : ses sites sont protégés, impossible de les voler.</p>`:``}
        <div class="pc-label">Son quartier${L===C?``:Q?` · touche un immeuble pour voir son nom`:` · touche un immeuble pour voir son nom, touche encore pour aller le voler`}</div>
        <div class="pc-3d" data-3d-slot>${V.length?``:`<p class="pc-3d-empty">Quartier vide : aucun immeuble pour l’instant.</p>`}</div>
        ${H?`<div class="pc-best">
                <div class="pc-label">Meilleur immeuble</div>
                <button class="pc-best-row" data-site="${H.cfg.id}">
                  ${k(H.cfg.domain,T(H.cfg.icon,18,H.cfg.color),40)}
                  <span class="pc-best-main"><strong>${w(H.cfg.name)}</strong><small>${w(r[H.cfg.district].name)}${L===C?` · +${E(s(H.s,t))}/min`:``}</small></span>
                  <b class="num gold">${D(H.price)}</b>
                </button>
              </div>`:``}
        ${G?`<div class="pc-fav" style="--d:${G.color}">
                <span class="map-theme">${T(P[G.id],15)}</span>
                <span>Secteur favori : <b>${w(G.name)}</b> · ${W[1].n} site${W[1].n>1?`s`:``}, ${D(W[1].value)} octets</span>
              </div>`:``}
        <div class="pc-label">${V.length?`Ses sites${V.length>6?` (6 sur ${V.length})`:``}`:`Ses sites`}</div>
        ${V.length?`<div class="pc-sites">${V.slice(0,6).map(e=>`<button class="pc-site" data-site="${e.cfg.id}" style="--d:${e.cfg.color}">
                    ${k(e.cfg.domain,T(e.cfg.icon,14,e.cfg.color),26)}
                    <span>${w(e.cfg.name)}</span><b class="num">${D(e.price)}</b></button>`).join(``)}</div>`:`<p class="rp-empty">Aucun site pour le moment.</p>`}
        <p class="pc-foot">${R.stats.bought??0} site${(R.stats.bought??0)>1?`s`:``} acheté${(R.stats.bought??0)>1?`s`:``} · ${R.stats.steals} vol${R.stats.steals>1?`s`:``} réussi${R.stats.steals>1?`s`:``} · volé ${R.stats.timesRobbed} fois${Z&&n[Z.siteId]?` · plus long règne : ${w(n[Z.siteId].name)}, ${ne(Z.value)}`:``}</p>
      </div>`;let $=this.root.querySelector(`[data-char]`);$&&(this.charViewer??=new ee,this.charViewer.show(i(R,`char`)),this.charViewer.mount($));let ie=this.root.querySelector(`[data-3d-slot]`);V.length?(ie.appendChild(this.sceneHost),this.ensureScene().then(()=>{this.playerId===L&&(this.scene?.sync(V.map(e=>({id:e.cfg.id,price:e.price})),R.color,R.name,a(R),d(R)),this.scene?.setActive(!0))})):this.scene?.setActive(!1)}};export{I as ProfileCard};