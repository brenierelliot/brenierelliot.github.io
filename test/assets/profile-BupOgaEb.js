const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/my-district-3d-CVcdcx3W.js","assets/three.core-BWyCN5GJ.js","assets/three.module-B48Brfrc.js","assets/sites-J0fE0xGs.js","assets/ui-icons-BsGtyUfV.js","assets/boot-BHwPk6aR.js","assets/preload-W_x1c0X2.js","assets/index-B5-L5z_z.js","assets/index-Dy0YA5lu.css","assets/players-0MYm2ETc.js","assets/rules-MJ0aIP5r.js","assets/game-OCowV5ND.js","assets/celebs-BEjiIsoY.js","assets/cosmetics-SCtL2j0B.js","assets/defis-CvOp_Szp.js","assets/crews-CRkSLJTy.js","assets/diamond-C4IZ7geI.js","assets/home-CyJs0LS3.js","assets/dom-CqnPVGza.js","assets/referral-3fl-TxAL.js","assets/meshopt_decoder.module-4nJZPRVN.js","assets/SkeletonUtils-CHxfGqZJ.js","assets/monuments-C5hZq0VL.js","assets/tiers-oUUsl_Xa.js","assets/app-m6oJa-Fh.js","assets/rolldown-runtime-hePW80VL.js","assets/home-CqfP1w3j.js","assets/home-DCOR0PQd.css","assets/format-CjuF2q7h.js","assets/icons-COPS7guR.js","assets/RoundedBoxGeometry-BeOxtNNb.js","assets/logos-Ba0L_JdF.js","assets/crew-tags-BoTp8Dm8.js","assets/city-lock-DWljOorZ.js","assets/heist-reasons-CwnAywZs.js","assets/app-CJNqRySh.css"])))=>i.map(i=>d[i]);
import{t as e}from"./preload-W_x1c0X2.js";import{i as t,n}from"./sites-J0fE0xGs.js";import{i as r}from"./rules-MJ0aIP5r.js";import{Bn as i,C as a,Dn as o,Mn as s,O as c,dt as l,gt as u,jn as ee,kt as d,w as f,x as p,yt as m}from"./game-OCowV5ND.js";import{r as h}from"./cosmetics-SCtL2j0B.js";import{_ as g}from"./defis-CvOp_Szp.js";import{E as _,i as v,r as y}from"./ui-icons-BsGtyUfV.js";import{h as b}from"./crews-CRkSLJTy.js";import{a as x,i as S,n as C,r as w}from"./dom-CqnPVGza.js";import{R as T,z as E}from"./boot-BHwPk6aR.js";import{a as D,i as O,r as k}from"./format-CjuF2q7h.js";import{n as A}from"./icons-COPS7guR.js";import{n as te,t as ne}from"./crew-tags-BoTp8Dm8.js";import{n as re,t as j}from"./city-lock-DWljOorZ.js";import{C as M,g as N,p as P,w as F}from"./app-m6oJa-Fh.js";var I=[`svg`,_,[[`path`,{d:`m11 17 2 2a1 1 0 1 0 3-3`}],[`path`,{d:`m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4`}],[`path`,{d:`m21 3 1 11h-2`}],[`path`,{d:`M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3`}],[`path`,{d:`M3 4h8`}]]],L=class{root;onOpenSite=()=>{};playerId=null;sceneHost=C(`div`,{class:`pc-3d-canvas`});charViewer=null;scene=null;constructor(e){this.root=C(`section`,{class:`profile-card-wrap`,role:`dialog`,"aria-label":`Profil du joueur`,"aria-hidden":`true`}),e.appendChild(this.root),this.root.addEventListener(`click`,e=>{let t=e.target;if(t===this.root||t.closest(`[data-close]`))return this.close();let n=t.closest(`[data-site]`);n&&(this.close(),this.onOpenSite(n.dataset.site))}),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&this.playerId&&this.close()})}sceneP=null;ensureScene(){return this.sceneP??=e(()=>import(`./my-district-3d-CVcdcx3W.js`).then(e=>e.MyDistrict3D.create(this.sceneHost)),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35])).then(e=>{this.scene=e,e.onTap=e=>{this.close(),this.onOpenSite(e)}}).catch(()=>{this.sceneP=null}),this.sceneP.then(()=>new Promise(e=>requestAnimationFrame(()=>e())))}open(e,t,n,r,i){this.playerId=e,this.render(t,n,r,i),this.root.classList.add(`open`),this.root.setAttribute(`aria-hidden`,`false`)}close(){this.playerId=null,this.scene?.setActive(!1),this.root.classList.remove(`open`),this.root.setAttribute(`aria-hidden`,`true`)}render(e,_,C,L){let R=this.playerId,z=e.players[R];if(!z)return this.close();let B=M(e,_),V=B.findIndex(e=>e.playerId===R),H=i(e,R).filter(e=>t[e.id]).map(e=>({s:e,cfg:t[e.id],price:o(e,_,r)})).sort((e,t)=>t.price-e.price),U=H[0],W=new Map;for(let e of H){let t=W.get(e.cfg.district)??{value:0,n:0};W.set(e.cfg.district,{value:t.value+e.price,n:t.n+1})}let G=[...W.entries()].sort((e,t)=>t[1].value-e[1].value)[0],K=G?n[G[0]]:null,q=z.isBot?`<span class="tag">ordi</span>`:R===C?`<span class="tag">toi</span>`:``,J=l(e,R),Y=J?b(J.division):null,ie=J?`<span class="pc-crew" style="--c:${J.color}">${ne(J,20)}<b>${w(J.name)}</b><small>[${w(J.tag)}]</small>${Y?`<em style="--d:${Y.color}">${Y.badge} ${w(Y.name)}</em>`:``}<em style="--d:#7fe3ff" title="XP de crew : les objectifs réussis, la fidélité au crew">${y(`sparkles`)} ${u(J,R)} XP</em></span>`:`<span class="pc-crew none">Sans crew</span>`,X=g(z),Z=z.stats.longestReign,Q=R!==C&&m(e,C,R)?l(e,C):null;this.root.innerHTML=`
      <div class="profile-card" style="--c:${z.color}">
        <button class="sheet-close pc-close" data-close aria-label="Fermer"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg></button>
        <div class="pc-head">
          ${S(z,84)}
          <div class="pc-id">
            <strong>${te(e,z.id)}${P(z)}</strong>
            ${x(z)?`<span class="p-title">${w(x(z))}</span>`:``}
            ${ie}
            <span class="pc-rankname">${y(`medal`)} Rang ${X.rank} · <b>${w(X.name)}</b></span>
            ${q?`<span>${q}</span>`:``}
            <span class="pc-rank">${j(e,C,`ranking`)?re(`ranking`):`${y(`trophy`)} ${V>=0?`${V+1}<sup>${V===0?`er`:`e`}</sup> sur ${B.length}`:`-`}`}</span>
          </div>
          ${E(d(z,`char`))?`<span class="pc-char" data-char title="${w(h[d(z,`char`)]?.name??``)}"></span>`:``}
        </div>
        <div class="pc-stats">
          ${R===C?`<div><span>Fortune</span><b class="num">${k(B[V]?.fortune??z.wallet)}</b></div>
                 <div><span>Gains</span><b class="num green">+${D(ee(e,R,r))}<small>/min</small></b></div>
                 <div><span>En poche</span><b class="num">${k(z.wallet)}</b></div>`:``}
          <div><span>Sites</span><b class="num">${H.length}<small>/${a(z,r)}</small></b></div>
          <div title="${w(g(z).name)}"><span>Rang</span><b class="num">${g(z).rank}<small> ${w(g(z).name)}</small></b></div>
          <div><span>Amélioration</span><b class="num">${f(z)}<small>${p(z,r)?` +${Math.round(p(z,r)*100)} %`:``}</small></b></div>
        </div>
        ${R===C?``:`<p class="pc-secret">${y(`lock`)} Sa fortune, ses gains et ses octets en poche restent secrets.</p>`}
        ${Q?`<p class="pc-crewmate" style="--c:${Q.color}">${v(I)} Membre de ton crew <b>[${w(Q.tag)}]</b> : ses sites sont protégés, impossible de les voler.</p>`:``}
        <div class="pc-label">Son quartier${R===C?``:Q?` · touche un immeuble pour voir son nom`:` · touche un immeuble pour voir son nom, touche encore pour aller le voler`}</div>
        <div class="pc-3d" data-3d-slot>${H.length?``:`<p class="pc-3d-empty">Quartier vide : aucun immeuble pour l’instant.</p>`}</div>
        ${U?`<div class="pc-best">
                <div class="pc-label">Meilleur immeuble</div>
                <button class="pc-best-row" data-site="${U.cfg.id}">
                  ${N(U.cfg.domain,A(U.cfg.icon,18,U.cfg.color),40)}
                  <span class="pc-best-main"><strong>${w(U.cfg.name)}</strong><small>${w(n[U.cfg.district].name)}${R===C?` · +${D(s(U.s,r))}/min`:``}</small></span>
                  <b class="num gold">${k(U.price)}</b>
                </button>
              </div>`:``}
        ${K?`<div class="pc-fav" style="--d:${K.color}">
                <span class="map-theme">${A(F[K.id],15)}</span>
                <span>Secteur favori : <b>${w(K.name)}</b> · ${G[1].n} site${G[1].n>1?`s`:``}, ${k(G[1].value)} octets</span>
              </div>`:``}
        <div class="pc-label">${H.length?`Ses sites${H.length>6?` (6 sur ${H.length})`:``}`:`Ses sites`}</div>
        ${H.length?`<div class="pc-sites">${H.slice(0,6).map(e=>`<button class="pc-site" data-site="${e.cfg.id}" style="--d:${e.cfg.color}">
                    ${N(e.cfg.domain,A(e.cfg.icon,14,e.cfg.color),26)}
                    <span>${w(e.cfg.name)}</span><b class="num">${k(e.price)}</b></button>`).join(``)}</div>`:`<p class="rp-empty">Aucun site pour le moment.</p>`}
        <p class="pc-foot">${z.stats.bought??0} site${(z.stats.bought??0)>1?`s`:``} acheté${(z.stats.bought??0)>1?`s`:``} · ${z.stats.steals} vol${z.stats.steals>1?`s`:``} réussi${z.stats.steals>1?`s`:``} · volé ${z.stats.timesRobbed} fois${Z&&t[Z.siteId]?` · plus long règne : ${w(t[Z.siteId].name)}, ${O(Z.value)}`:``}</p>
      </div>`;let $=this.root.querySelector(`[data-char]`);$&&(this.charViewer??=new T,this.charViewer.show(d(z,`char`)),this.charViewer.mount($));let ae=this.root.querySelector(`[data-3d-slot]`);H.length?(ae.appendChild(this.sceneHost),this.ensureScene().then(()=>{this.playerId===R&&(this.scene?.sync(H.map(e=>({id:e.cfg.id,price:e.price})),z.color,z.name,c(z),f(z),z.home?{name:z.home.name,style:z.home.style,level:z.home.level}:null),this.scene?.setActive(!0))})):this.scene?.setActive(!1)}};export{L as ProfileCard};