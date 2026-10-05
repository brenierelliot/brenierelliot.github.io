const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/my-district-3d-D-uZRzbm.js","assets/three.core-BWyCN5GJ.js","assets/three.module-B48Brfrc.js","assets/sites-BT5Wt74L.js","assets/ui-icons-BsGtyUfV.js","assets/boot-7BwASGUF.js","assets/preload-BKrSQD1R.js","assets/index-CJSy1QeU.js","assets/index-Dy0YA5lu.css","assets/cities-DBX3MDd5.js","assets/rules-DVjhKj-p.js","assets/game-B6Xynqsf.js","assets/celebs-mSZwqegj.js","assets/cosmetics-By-Ke5Tu.js","assets/players-AI0bPkPI.js","assets/defis-CvOp_Szp.js","assets/crews-BfmtqiD-.js","assets/diamond-C4IZ7geI.js","assets/home-CyJs0LS3.js","assets/dom-BdLEGZGK.js","assets/referral-8iwZG5H4.js","assets/meshopt_decoder.module-4nJZPRVN.js","assets/SkeletonUtils-CHxfGqZJ.js","assets/monuments-C5hZq0VL.js","assets/tiers-oUUsl_Xa.js","assets/app-DBCDkGYr.js","assets/rolldown-runtime-hePW80VL.js","assets/home-CqfP1w3j.js","assets/home-DCOR0PQd.css","assets/format-CjuF2q7h.js","assets/icons-COPS7guR.js","assets/RoundedBoxGeometry-BeOxtNNb.js","assets/logos-Ba0L_JdF.js","assets/crew-tags-BvNQinAv.js","assets/city-lock-UYGBDeDe.js","assets/heist-reasons-CwnAywZs.js","assets/app-CJNqRySh.css"])))=>i.map(i=>d[i]);
import{t as e}from"./preload-BKrSQD1R.js";import{i as t,n}from"./sites-BT5Wt74L.js";import{i as r}from"./rules-DVjhKj-p.js";import{At as i,Mn as a,Nn as o,On as s,S as c,T as l,Vn as u,_t as ee,bt as d,ft as f,k as p,w as m}from"./game-B6Xynqsf.js";import{r as h}from"./cosmetics-By-Ke5Tu.js";import{_ as g}from"./defis-CvOp_Szp.js";import{E as _,i as v,r as y}from"./ui-icons-BsGtyUfV.js";import{h as b}from"./crews-BfmtqiD-.js";import{a as x,i as S,n as C,r as w}from"./dom-BdLEGZGK.js";import{R as T,z as E}from"./boot-7BwASGUF.js";import{a as D,i as O,r as k}from"./format-CjuF2q7h.js";import{n as A}from"./icons-COPS7guR.js";import{n as te,t as ne}from"./crew-tags-BvNQinAv.js";import{n as re,t as j}from"./city-lock-UYGBDeDe.js";import{C as M,g as N,p as P,w as F}from"./app-DBCDkGYr.js";var I=[`svg`,_,[[`path`,{d:`m11 17 2 2a1 1 0 1 0 3-3`}],[`path`,{d:`m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4`}],[`path`,{d:`m21 3 1 11h-2`}],[`path`,{d:`M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3`}],[`path`,{d:`M3 4h8`}]]],L=class{root;onOpenSite=()=>{};playerId=null;sceneHost=C(`div`,{class:`pc-3d-canvas`});charViewer=null;scene=null;constructor(e){this.root=C(`section`,{class:`profile-card-wrap`,role:`dialog`,"aria-label":`Profil du joueur`,"aria-hidden":`true`}),e.appendChild(this.root),this.root.addEventListener(`click`,e=>{let t=e.target;if(t===this.root||t.closest(`[data-close]`))return this.close();let n=t.closest(`[data-site]`);n&&(this.close(),this.onOpenSite(n.dataset.site))}),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&this.playerId&&this.close()})}sceneP=null;ensureScene(){return this.sceneP??=e(()=>import(`./my-district-3d-D-uZRzbm.js`).then(e=>e.MyDistrict3D.create(this.sceneHost)),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36])).then(e=>{this.scene=e,e.onTap=e=>{this.close(),this.onOpenSite(e)}}).catch(()=>{this.sceneP=null}),this.sceneP.then(()=>new Promise(e=>requestAnimationFrame(()=>e())))}open(e,t,n,r,i){this.playerId=e,this.render(t,n,r,i),this.root.classList.add(`open`),this.root.setAttribute(`aria-hidden`,`false`)}close(){this.playerId=null,this.scene?.setActive(!1),this.root.classList.remove(`open`),this.root.setAttribute(`aria-hidden`,`true`)}render(e,_,C,L){let R=this.playerId,z=e.players[R];if(!z)return this.close();let B=M(e,_),V=B.findIndex(e=>e.playerId===R),H=u(e,R).filter(e=>t[e.id]).map(e=>({s:e,cfg:t[e.id],price:s(e,_,r)})).sort((e,t)=>t.price-e.price),U=H[0],W=new Map;for(let e of H){let t=W.get(e.cfg.district)??{value:0,n:0};W.set(e.cfg.district,{value:t.value+e.price,n:t.n+1})}let G=[...W.entries()].sort((e,t)=>t[1].value-e[1].value)[0],K=G?n[G[0]]:null,q=z.isBot?`<span class="tag">ordi</span>`:R===C?`<span class="tag">toi</span>`:``,J=f(e,R),Y=J?b(J.division):null,ie=J?`<span class="pc-crew" style="--c:${J.color}">${ne(J,20)}<b>${w(J.name)}</b><small>[${w(J.tag)}]</small>${Y?`<em style="--d:${Y.color}">${Y.badge} ${w(Y.name)}</em>`:``}<em style="--d:#7fe3ff" title="XP de crew : les objectifs réussis, la fidélité au crew">${y(`sparkles`)} ${ee(J,R)} XP</em></span>`:`<span class="pc-crew none">Sans crew</span>`,X=g(z),Z=z.stats.longestReign,Q=R!==C&&d(e,C,R)?f(e,C):null;this.root.innerHTML=`
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
          ${E(i(z,`char`))?`<span class="pc-char" data-char title="${w(h[i(z,`char`)]?.name??``)}"></span>`:``}
        </div>
        <div class="pc-stats">
          ${R===C?`<div><span>Fortune</span><b class="num">${k(B[V]?.fortune??z.wallet)}</b></div>
                 <div><span>Gains</span><b class="num green">+${D(a(e,R,r))}<small>/min</small></b></div>
                 <div><span>En poche</span><b class="num">${k(z.wallet)}</b></div>`:``}
          <div><span>Sites</span><b class="num">${H.length}<small>/${m(z,r)}</small></b></div>
          <div title="${w(g(z).name)}"><span>Rang</span><b class="num">${g(z).rank}<small> ${w(g(z).name)}</small></b></div>
          <div><span>Amélioration</span><b class="num">${l(z)}<small>${c(z,r)?` +${Math.round(c(z,r)*100)} %`:``}</small></b></div>
        </div>
        ${R===C?``:`<p class="pc-secret">${y(`lock`)} Sa fortune, ses gains et ses octets en poche restent secrets.</p>`}
        ${Q?`<p class="pc-crewmate" style="--c:${Q.color}">${v(I)} Membre de ton crew <b>[${w(Q.tag)}]</b> : ses sites sont protégés, impossible de les voler.</p>`:``}
        <div class="pc-label">Son quartier${R===C?``:Q?` · touche un immeuble pour voir son nom`:` · touche un immeuble pour voir son nom, touche encore pour aller le voler`}</div>
        <div class="pc-3d" data-3d-slot>${H.length?``:`<p class="pc-3d-empty">Quartier vide : aucun immeuble pour l’instant.</p>`}</div>
        ${U?`<div class="pc-best">
                <div class="pc-label">Meilleur immeuble</div>
                <button class="pc-best-row" data-site="${U.cfg.id}">
                  ${N(U.cfg.domain,A(U.cfg.icon,18,U.cfg.color),40)}
                  <span class="pc-best-main"><strong>${w(U.cfg.name)}</strong><small>${w(n[U.cfg.district].name)}${R===C?` · +${D(o(U.s,r))}/min`:``}</small></span>
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
      </div>`;let $=this.root.querySelector(`[data-char]`);$&&(this.charViewer??=new T,this.charViewer.show(i(z,`char`)),this.charViewer.mount($));let ae=this.root.querySelector(`[data-3d-slot]`);H.length?(ae.appendChild(this.sceneHost),this.ensureScene().then(()=>{this.playerId===R&&(this.scene?.sync(H.map(e=>({id:e.cfg.id,price:e.price})),z.color,z.name,p(z),l(z),z.home?{name:z.home.name,style:z.home.style,level:z.home.level}:null),this.scene?.setActive(!0))})):this.scene?.setActive(!1)}};export{L as ProfileCard};