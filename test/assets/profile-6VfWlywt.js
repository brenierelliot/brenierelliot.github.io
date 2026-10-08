const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/my-district-3d-aiLcRkoA.js","assets/three.core-Mu451PDX.js","assets/three.module-DnIhVZZQ.js","assets/sites-BT5Wt74L.js","assets/ui-icons-CBEKBiVn.js","assets/boot-1c3kcQiQ.js","assets/preload-W_x1c0X2.js","assets/index-DdnAl7G7.js","assets/index-BmWItpP5.css","assets/rules-NHK8zf_C.js","assets/game-ChcZlxUW.js","assets/celebs-CKIexABL.js","assets/cosmetics-g4Tc7bx-.js","assets/defis-B8XNFVM4.js","assets/crews-DFDlseM1.js","assets/diamond-C8EuHkQy.js","assets/home-CyJs0LS3.js","assets/dom-DTo2UyyR.js","assets/referral-Bhk0JGVP.js","assets/SkeletonUtils-CHxfGqZJ.js","assets/meshopt_decoder.module-CId_WM5g.js","assets/BufferGeometryUtils-B-9BH7ix.js","assets/app-BAirjfj2.js","assets/rolldown-runtime-DK3Fl9T5.js","assets/home-Djlg7-wK.js","assets/home-DCOR0PQd.css","assets/RoundedBoxGeometry-BIyeZhxC.js","assets/icons-Cd1fStTg.js","assets/companion-BXibbNZM.js","assets/format-CjuF2q7h.js","assets/crew-tags-Bs63rRLH.js","assets/site-media-C53tmlo-.js","assets/app-DF-ikQVW.css"])))=>i.map(i=>d[i]);
import{t as e}from"./preload-W_x1c0X2.js";import{i as t}from"./rules-NHK8zf_C.js";import{i as n,n as r}from"./sites-BT5Wt74L.js";import{At as i,Fn as a,In as o,S as s,T as c,Wn as l,_t as u,bt as d,ft as f,jn as p,k as m,w as h}from"./game-ChcZlxUW.js";import{r as ee}from"./cosmetics-g4Tc7bx-.js";import{_ as g}from"./defis-B8XNFVM4.js";import{D as _,i as v,r as y}from"./ui-icons-CBEKBiVn.js";import{h as te}from"./crews-DFDlseM1.js";import{a as b,i as x,n as S,r as C}from"./dom-DTo2UyyR.js";import{R as w,z as T}from"./boot-1c3kcQiQ.js";import{t as E}from"./icons-Cd1fStTg.js";import{a as D,i as O,r as k}from"./format-CjuF2q7h.js";import{n as ne,t as re}from"./crew-tags-Bs63rRLH.js";import{t as A}from"./site-media-C53tmlo-.js";import{E as j,_ as M,g as N,o as P,v as F}from"./app-BAirjfj2.js";var I=[`svg`,_,[[`path`,{d:`m11 17 2 2a1 1 0 1 0 3-3`}],[`path`,{d:`m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4`}],[`path`,{d:`m21 3 1 11h-2`}],[`path`,{d:`M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3`}],[`path`,{d:`M3 4h8`}]]],L=class{root;onOpenSite=()=>{};playerId=null;sceneHost=S(`div`,{class:`pc-3d-canvas`});charViewer=null;scene=null;constructor(e){this.root=S(`section`,{class:`profile-card-wrap`,role:`dialog`,"aria-label":`Profil du joueur`,"aria-hidden":`true`}),e.appendChild(this.root),this.root.addEventListener(`click`,e=>{let t=e.target;if(t===this.root||t.closest(`[data-close]`))return this.close();let n=t.closest(`[data-site]`);n&&(this.close(),this.onOpenSite(n.dataset.site))}),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&this.playerId&&this.close()})}sceneP=null;ensureScene(){return this.sceneP??=e(()=>import(`./my-district-3d-aiLcRkoA.js`).then(e=>e.MyDistrict3D.create(this.sceneHost)),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32])).then(e=>{this.scene=e,e.onTap=e=>{this.close(),this.onOpenSite(e)}}).catch(()=>{this.sceneP=null}),this.sceneP.then(()=>new Promise(e=>requestAnimationFrame(()=>e())))}open(e,t,n,r,i){this.playerId=e,this.render(t,n,r,i),this.root.classList.add(`open`),this.root.setAttribute(`aria-hidden`,`false`)}close(){this.playerId=null,this.scene?.setActive(!1),this.root.classList.remove(`open`),this.root.setAttribute(`aria-hidden`,`true`)}render(e,_,S,L){let R=this.playerId,z=e.players[R];if(!z)return this.close();let B=j(e,_),V=B.findIndex(e=>e.playerId===R),H=l(e,R).filter(e=>n[e.id]).map(e=>({s:e,cfg:n[e.id],price:p(e,_,t)})).sort((e,t)=>t.price-e.price),U=H[0],W=new Map;for(let e of H){let t=W.get(e.cfg.district)??{value:0,n:0};W.set(e.cfg.district,{value:t.value+e.price,n:t.n+1})}let G=[...W.entries()].sort((e,t)=>t[1].value-e[1].value)[0],K=G?r[G[0]]:null,q=z.isBot?`<span class="tag">ordi</span>`:R===S?`<span class="tag">toi</span>`:``,J=f(e,R),Y=J?te(J.division):null,ie=J?`<span class="pc-crew" style="--c:${J.color}">${re(J,20)}<b>${C(J.name)}</b><small>[${C(J.tag)}]</small>${Y?`<em style="--d:${Y.color}">${Y.badge} ${C(Y.name)}</em>`:``}<em style="--d:#7fe3ff" title="XP de crew : les objectifs réussis, la fidélité au crew">${y(`sparkles`)} ${u(J,R)} XP</em></span>`:`<span class="pc-crew none">Sans crew</span>`,X=g(z),Z=z.stats.longestReign,Q=R!==S&&d(e,S,R)?f(e,S):null;this.root.innerHTML=`
      <div class="profile-card" style="--c:${z.color}">
        <button class="sheet-close pc-close" data-close aria-label="Fermer"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg></button>
        <div class="pc-head">
          ${x(z,84)}
          <div class="pc-id">
            <strong>${ne(e,z.id)}${N(z)}</strong>
            ${b(z)?`<span class="p-title">${C(b(z))}</span>`:``}
            ${ie}
            <span class="pc-rankname">${y(`medal`)} Rang ${X.rank} · <b>${C(X.name)}</b></span>
            ${q?`<span>${q}</span>`:``}
            <span class="pc-rank">${M(e,S,`ranking`)?F(`ranking`):`${y(`trophy`)} ${V>=0?`${V+1}<sup>${V===0?`er`:`e`}</sup> sur ${B.length}`:`-`}`}</span>
          </div>
          ${T(i(z,`char`))?`<span class="pc-char" data-char title="${C(ee[i(z,`char`)]?.name??``)}"></span>`:``}
        </div>
        <div class="pc-stats">
          ${R===S?`<div><span>Fortune</span><b class="num">${k(B[V]?.fortune??z.wallet)}</b></div>
                 <div><span>Gains</span><b class="num green">+${D(a(e,R,t))}<small>/min</small></b></div>
                 <div><span>En poche</span><b class="num">${k(z.wallet)}</b></div>`:``}
          <div><span>Sites</span><b class="num">${H.length}<small>/${h(z,t)}</small></b></div>
          <div title="${C(g(z).name)}"><span>Rang</span><b class="num">${g(z).rank}<small> ${C(g(z).name)}</small></b></div>
          <div><span>Amélioration</span><b class="num">${c(z)}<small>${s(z,t)?` +${Math.round(s(z,t)*100)} %`:``}</small></b></div>
        </div>
        ${R===S?``:`<p class="pc-secret">${y(`lock`)} Sa fortune, ses gains et ses octets en poche restent secrets.</p>`}
        ${Q?`<p class="pc-crewmate" style="--c:${Q.color}">${v(I)} Membre de ton crew <b>[${C(Q.tag)}]</b> : ses sites sont protégés, impossible de les voler.</p>`:``}
        <div class="pc-label">Son quartier${R===S?``:Q?` · touche un immeuble pour voir son nom`:` · touche un immeuble pour voir son nom, touche encore pour aller le voler`}</div>
        <div class="pc-3d" data-3d-slot>${H.length?``:`<p class="pc-3d-empty">Quartier vide : aucun immeuble pour l’instant.</p>`}</div>
        ${U?`<div class="pc-best">
                <div class="pc-label">Meilleur immeuble</div>
                <button class="pc-best-row" data-site="${U.cfg.id}">
                  ${A(U.cfg.domain,E(U.cfg.icon,18,U.cfg.color),40)}
                  <span class="pc-best-main"><strong>${C(U.cfg.name)}</strong><small>${C(r[U.cfg.district].name)}${R===S?` · +${D(o(U.s,t))}/min`:``}</small></span>
                  <b class="num gold">${k(U.price)}</b>
                </button>
              </div>`:``}
        ${K?`<div class="pc-fav" style="--d:${K.color}">
                <span class="map-theme">${E(P[K.id],15)}</span>
                <span>Secteur favori : <b>${C(K.name)}</b> · ${G[1].n} site${G[1].n>1?`s`:``}, ${k(G[1].value)} octets</span>
              </div>`:``}
        <div class="pc-label">${H.length?`Ses sites${H.length>6?` (6 sur ${H.length})`:``}`:`Ses sites`}</div>
        ${H.length?`<div class="pc-sites">${H.slice(0,6).map(e=>`<button class="pc-site" data-site="${e.cfg.id}" style="--d:${e.cfg.color}">
                    ${A(e.cfg.domain,E(e.cfg.icon,14,e.cfg.color),26)}
                    <span>${C(e.cfg.name)}</span><b class="num">${k(e.price)}</b></button>`).join(``)}</div>`:`<p class="rp-empty">Aucun site pour le moment.</p>`}
        <p class="pc-foot">${z.stats.bought??0} site${(z.stats.bought??0)>1?`s`:``} acheté${(z.stats.bought??0)>1?`s`:``} · ${z.stats.steals} vol${z.stats.steals>1?`s`:``} réussi${z.stats.steals>1?`s`:``} · volé ${z.stats.timesRobbed} fois${Z&&n[Z.siteId]?` · plus long règne : ${C(n[Z.siteId].name)}, ${O(Z.value)}`:``}</p>
      </div>`;let $=this.root.querySelector(`[data-char]`);$&&(this.charViewer??=new w,this.charViewer.show(i(z,`char`)),this.charViewer.mount($));let ae=this.root.querySelector(`[data-3d-slot]`);H.length?(ae.appendChild(this.sceneHost),this.ensureScene().then(()=>{this.playerId===R&&(this.scene?.sync(H.map(e=>({id:e.cfg.id,price:e.price})),z.color,z.name,m(z),c(z),z.home?{name:z.home.name,style:z.home.style,level:z.home.level}:null),this.scene?.setActive(!0))})):this.scene?.setActive(!1)}};export{L as ProfileCard};