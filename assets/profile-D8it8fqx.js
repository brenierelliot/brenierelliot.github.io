const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/my-district-3d-DqobCPSv.js","assets/three.core-LsrNYD9a.js","assets/three.module-vlLjGp1l.js","assets/sites-BT5Wt74L.js","assets/boot-C2NPxifK.js","assets/preload-BKrSQD1R.js","assets/index-B5Ayjz1C.js","assets/index-YlYbvMTO.css","assets/rules-ByeV84zo.js","assets/game-CRxW4Fb4.js","assets/celebs-DcOC6YsV.js","assets/cosmetics-DD5hQNzs.js","assets/defis-B4c_xwMQ.js","assets/ui-icons-e20H8bDF.js","assets/crews-Hb6-R8hl.js","assets/diamond-yd4Ba0py.js","assets/dom-ByiPDPSp.js","assets/referral-WWb4u71B.js","assets/SkeletonUtils-CHxfGqZJ.js","assets/meshopt_decoder.module-kB5rRS0g.js","assets/BufferGeometryUtils-CAEzvHqP.js","assets/app-BbJHToPe.js","assets/rolldown-runtime-DK3Fl9T5.js","assets/RoundedBoxGeometry-D5OyaQ_9.js","assets/icons-Cd1fStTg.js","assets/companion-3cfc8Bnu.js","assets/format-CjuF2q7h.js","assets/crew-tags-tb4zBkqn.js","assets/site-media-C53tmlo-.js","assets/app-DL-giR_N.css"])))=>i.map(i=>d[i]);
import{t as e}from"./preload-BKrSQD1R.js";import{i as t}from"./rules-ByeV84zo.js";import{i as n,n as r}from"./sites-BT5Wt74L.js";import{Et as i,Fn as ee,In as a,Mn as o,S as s,T as c,Wn as l,ct as u,gt as d,pt as f,x as p}from"./game-CRxW4Fb4.js";import{r as te}from"./cosmetics-DD5hQNzs.js";import{_ as m}from"./defis-B4c_xwMQ.js";import{D as h,i as g,r as _}from"./ui-icons-e20H8bDF.js";import{h as v}from"./crews-Hb6-R8hl.js";import{a as y,i as b,n as x,r as S}from"./dom-ByiPDPSp.js";import{H as C,U as w}from"./boot-C2NPxifK.js";import{t as T}from"./icons-Cd1fStTg.js";import{a as E,i as D,r as O}from"./format-CjuF2q7h.js";import{n as ne,t as re}from"./crew-tags-tb4zBkqn.js";import{t as k}from"./site-media-C53tmlo-.js";import{E as A,_ as j,g as M,o as N,v as P}from"./app-BbJHToPe.js";var F=[`svg`,h,[[`path`,{d:`m11 17 2 2a1 1 0 1 0 3-3`}],[`path`,{d:`m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4`}],[`path`,{d:`m21 3 1 11h-2`}],[`path`,{d:`M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3`}],[`path`,{d:`M3 4h8`}]]],I=class{root;onOpenSite=()=>{};playerId=null;sceneHost=x(`div`,{class:`pc-3d-canvas`});charViewer=null;scene=null;constructor(e){this.root=x(`section`,{class:`profile-card-wrap`,role:`dialog`,"aria-label":`Profil du joueur`,"aria-hidden":`true`}),e.appendChild(this.root),this.root.addEventListener(`click`,e=>{let t=e.target;if(t===this.root||t.closest(`[data-close]`))return this.close();let n=t.closest(`[data-site]`);n&&(this.close(),this.onOpenSite(n.dataset.site))}),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&this.playerId&&this.close()})}sceneP=null;ensureScene(){return this.sceneP??=e(()=>import(`./my-district-3d-DqobCPSv.js`).then(e=>e.MyDistrict3D.create(this.sceneHost)),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29])).then(e=>{this.scene=e,e.onTap=e=>{this.close(),this.onOpenSite(e)}}).catch(()=>{this.sceneP=null}),this.sceneP.then(()=>new Promise(e=>requestAnimationFrame(()=>e())))}open(e,t,n,r,i){this.playerId=e,this.render(t,n,r,i),this.root.classList.add(`open`),this.root.setAttribute(`aria-hidden`,`false`)}close(){this.playerId=null,this.scene?.setActive(!1),this.root.classList.remove(`open`),this.root.setAttribute(`aria-hidden`,`true`)}render(e,h,x,I){let L=this.playerId,R=e.players[L];if(!R)return this.close();let z=A(e,h),B=z.findIndex(e=>e.playerId===L),V=l(e,L).filter(e=>n[e.id]).map(e=>({s:e,cfg:n[e.id],price:o(e,h,t)})).sort((e,t)=>t.price-e.price),H=V[0],U=new Map;for(let e of V){let t=U.get(e.cfg.district)??{value:0,n:0};U.set(e.cfg.district,{value:t.value+e.price,n:t.n+1})}let W=[...U.entries()].sort((e,t)=>t[1].value-e[1].value)[0],G=W?r[W[0]]:null,K=R.isBot?`<span class="tag">ordi</span>`:L===x?`<span class="tag">toi</span>`:``,q=u(e,L),J=q?v(q.division):null,Y=q?`<span class="pc-crew" style="--c:${q.color}">${re(q,20)}<b>${S(q.name)}</b><small>[${S(q.tag)}]</small>${J?`<em style="--d:${J.color}">${J.badge} ${S(J.name)}</em>`:``}<em style="--d:#7fe3ff" title="XP de crew : les objectifs réussis, la fidélité au crew">${_(`sparkles`)} ${f(q,L)} XP</em></span>`:`<span class="pc-crew none">Sans crew</span>`,X=m(R),Z=R.stats.longestReign,Q=L!==x&&d(e,x,L)?u(e,x):null;this.root.innerHTML=`
      <div class="profile-card" style="--c:${R.color}">
        <button class="sheet-close pc-close" data-close aria-label="Fermer"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg></button>
        <div class="pc-head">
          ${b(R,84)}
          <div class="pc-id">
            <strong>${ne(e,R.id)}${M(R)}</strong>
            ${y(R)?`<span class="p-title">${S(y(R))}</span>`:``}
            ${Y}
            <span class="pc-rankname">${_(`medal`)} Rang ${X.rank} · <b>${S(X.name)}</b></span>
            ${K?`<span>${K}</span>`:``}
            <span class="pc-rank">${j(e,x,`ranking`)?P(`ranking`):`${_(`trophy`)} ${B>=0?`${B+1}<sup>${B===0?`er`:`e`}</sup> sur ${z.length}`:`-`}`}</span>
          </div>
          ${w(i(R,`char`))?`<span class="pc-char" data-char title="${S(te[i(R,`char`)]?.name??``)}"></span>`:``}
        </div>
        <div class="pc-stats">
          ${L===x?`<div><span>Fortune</span><b class="num">${O(z[B]?.fortune??R.wallet)}</b></div>
                 <div><span>Gains</span><b class="num green">+${E(ee(e,L,t))}<small>/min</small></b></div>
                 <div><span>En poche</span><b class="num">${O(R.wallet)}</b></div>`:``}
          <div><span>Sites</span><b class="num">${V.length}<small>/${p(R,t)}</small></b></div>
          <div title="${S(m(R).name)}"><span>Rang</span><b class="num">${m(R).rank}<small> ${S(m(R).name)}</small></b></div>
        </div>
        ${L===x?``:`<p class="pc-secret">${_(`lock`)} Sa fortune, ses gains et ses octets en poche restent secrets.</p>`}
        ${Q?`<p class="pc-crewmate" style="--c:${Q.color}">${g(F)} Membre de ton crew <b>[${S(Q.tag)}]</b> : ses sites sont protégés, impossible de les voler.</p>`:``}
        <div class="pc-label">Son quartier${L===x?``:Q?` · touche un immeuble pour voir son nom`:` · touche un immeuble pour voir son nom, touche encore pour aller le voler`}</div>
        <div class="pc-3d" data-3d-slot>${V.length?``:`<p class="pc-3d-empty">Quartier vide : aucun immeuble pour l’instant.</p>`}</div>
        ${H?`<div class="pc-best">
                <div class="pc-label">Meilleur immeuble</div>
                <button class="pc-best-row" data-site="${H.cfg.id}">
                  ${k(H.cfg.domain,T(H.cfg.icon,18,H.cfg.color),40)}
                  <span class="pc-best-main"><strong>${S(H.cfg.name)}</strong><small>${S(r[H.cfg.district].name)}${L===x?` · +${E(a(H.s,t))}/min`:``}</small></span>
                  <b class="num gold">${O(H.price)}</b>
                </button>
              </div>`:``}
        ${G?`<div class="pc-fav" style="--d:${G.color}">
                <span class="map-theme">${T(N[G.id],15)}</span>
                <span>Secteur favori : <b>${S(G.name)}</b> · ${W[1].n} site${W[1].n>1?`s`:``}, ${O(W[1].value)} octets</span>
              </div>`:``}
        <div class="pc-label">${V.length?`Ses sites${V.length>6?` (6 sur ${V.length})`:``}`:`Ses sites`}</div>
        ${V.length?`<div class="pc-sites">${V.slice(0,6).map(e=>`<button class="pc-site" data-site="${e.cfg.id}" style="--d:${e.cfg.color}">
                    ${k(e.cfg.domain,T(e.cfg.icon,14,e.cfg.color),26)}
                    <span>${S(e.cfg.name)}</span><b class="num">${O(e.price)}</b></button>`).join(``)}</div>`:`<p class="rp-empty">Aucun site pour le moment.</p>`}
        <p class="pc-foot">${R.stats.bought??0} site${(R.stats.bought??0)>1?`s`:``} acheté${(R.stats.bought??0)>1?`s`:``} · ${R.stats.steals} vol${R.stats.steals>1?`s`:``} réussi${R.stats.steals>1?`s`:``} · volé ${R.stats.timesRobbed} fois${Z&&n[Z.siteId]?` · plus long règne : ${S(n[Z.siteId].name)}, ${D(Z.value)}`:``}</p>
      </div>`;let $=this.root.querySelector(`[data-char]`);$&&(this.charViewer??=new C,this.charViewer.show(i(R,`char`)),this.charViewer.mount($));let ie=this.root.querySelector(`[data-3d-slot]`);V.length?(ie.appendChild(this.sceneHost),this.ensureScene().then(()=>{this.playerId===L&&(this.scene?.sync(V.map(e=>({id:e.cfg.id,price:e.price})),R.color,R.name,c(R),s(R)),this.scene?.setActive(!0))})):this.scene?.setActive(!1)}};export{I as ProfileCard};