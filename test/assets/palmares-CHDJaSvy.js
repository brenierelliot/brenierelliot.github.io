import{i as e}from"./rules-NHK8zf_C.js";import{i as t}from"./sites-BT5Wt74L.js";import{Fn as n,In as r,Mn as i,Wn as a}from"./game-wCfPxuyp.js";import{r as o}from"./ui-icons-CBEKBiVn.js";import{i as s,n as c,r as l,s as u}from"./dom-wziIWsVp.js";import{et as d}from"./boot-7CCUWSQJ.js";import{a as f,i as p,t as m}from"./format-CjuF2q7h.js";var h=`#bf8a1a`,g=`#16123d`;function _(e,t=3){if(e<=0)return[0,1];let n=e/t,r=10**Math.floor(Math.log10(n)),i=[1,2,2.5,5,10].map(e=>e*r).find(e=>e>=n)??n,a=[];for(let t=0;a.length<2||a[a.length-1]<e;t+=i)a.push(Math.round(t*100)/100);return a}function v(e,t,n){let r=Math.max(200,e.clientWidth),i=n.height;if(t.length<2){e.innerHTML=`<div class="chart-empty" style="height:${i}px">Pas encore assez d'historique : reviens dans quelques minutes de jeu.</div>`;return}let a=t[0].t,o=t[t.length-1].t,s=_(Math.max(...t.map(e=>e.v),1)),c=s[s.length-1],u=e=>44+(e-a)/Math.max(1,o-a)*(r-44-58),d=e=>12+(1-e/c)*(i-12-22),f=``;t.forEach((e,t)=>{t===0?f+=`M${u(e.t).toFixed(1)},${d(e.v).toFixed(1)}`:n.stepped?f+=`H${u(e.t).toFixed(1)}V${d(e.v).toFixed(1)}`:f+=`L${u(e.t).toFixed(1)},${d(e.v).toFixed(1)}`});let m=t[t.length-1],v=`${f}L${u(m.t).toFixed(1)},${d(0).toFixed(1)}L${u(a).toFixed(1)},${d(0).toFixed(1)}Z`,y=s.map(e=>`<line x1="44" x2="${r-58}" y1="${d(e)}" y2="${d(e)}" class="chart-grid"/>
        <text x="36" y="${d(e)+4}" class="chart-tick" text-anchor="end">${l(n.format(e))}</text>`).join(``);e.innerHTML=`
    <div class="chart-wrap">
      <svg width="${r}" height="${i}" viewBox="0 0 ${r} ${i}" role="img" aria-label="Évolution, dernière valeur ${l(n.format(m.v))}">
        ${y}
        <path d="${v}" fill="${h}" fill-opacity="0.1" class="chart-area"/>
        <path d="${f}" fill="none" stroke="${h}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" class="chart-line" pathLength="1"/>
        <circle cx="${u(m.t)}" cy="${d(m.v)}" r="4" fill="${h}" stroke="${g}" stroke-width="2" class="chart-end"/>
        <text x="${u(m.t)+9}" y="${d(m.v)+4}" class="chart-endlabel">${l(n.format(m.v))}</text>
        <text x="44" y="${i-5}" class="chart-tick">il y a ${l(p(n.now-a))}</text>
        <text x="${r-58}" y="${i-5}" class="chart-tick" text-anchor="end">maintenant</text>
        <g class="chart-hover" visibility="hidden">
          <line class="chart-cross" y1="12" y2="${i-22}"/>
          <circle r="4.5" fill="${h}" stroke="${g}" stroke-width="2"/>
        </g>
        <rect x="44" y="0" width="${r-44-58}" height="${i}" fill="transparent" class="chart-hit"/>
      </svg>
      <div class="chart-tip" hidden></div>
    </div>`;let b=e.querySelector(`svg`),x=b.querySelector(`.chart-hover`),S=x.querySelector(`line`),C=x.querySelector(`circle`),w=e.querySelector(`.chart-tip`),T=b.querySelector(`.chart-hit`),E=e=>{let i=b.getBoundingClientRect(),a=e.clientX-i.left,s=t[0];for(let e of t)Math.abs(u(e.t)-a)<Math.abs(u(s.t)-a)&&(s=e);x.setAttribute(`visibility`,`visible`),S.setAttribute(`x1`,String(u(s.t))),S.setAttribute(`x2`,String(u(s.t))),C.setAttribute(`cx`,String(u(s.t))),C.setAttribute(`cy`,String(d(s.v))),w.hidden=!1,w.innerHTML=`<b>${l(n.format(s.v))}</b>${n.unit?` ${l(n.unit)}`:``}<span>${s.t>=o?`maintenant`:`il y a ${l(p(n.now-s.t))}`}</span>`;let c=Math.min(Math.max(u(s.t)-w.offsetWidth/2,0),r-w.offsetWidth);w.style.left=`${c}px`,w.style.top=`${Math.max(0,d(s.v)-w.offsetHeight-12)}px`};T.addEventListener(`pointermove`,E),T.addEventListener(`pointerdown`,E),T.addEventListener(`pointerleave`,()=>{x.setAttribute(`visibility`,`hidden`),w.hidden=!0})}function y(e,t){if(!t.length){e.innerHTML=`<div class="chart-empty">Tu ne possèdes encore aucun site.</div>`;return}let n=Math.max(...t.map(e=>e.value),1e-9);e.innerHTML=t.map((e,t)=>`<div class="bar-row" style="--i:${t}">
        <span class="bar-label"><i style="background:${e.dot}"></i>${l(e.label)}<small>${l(e.sub)}</small></span>
        <span class="bar-track"><span class="bar-fill" style="--w:${e.value/n*100}%;background:${h}"></span></span>
        <span class="bar-value num">${l(e.valueText)}</span>
      </div>`).join(``)}var b=class{root;onProfile=()=>{};profile;body;at=0;chartsKey=``;constructor(e){this.root=c(`section`,{class:`screen palmares`,"aria-label":`Palmarès`},`<div class="screen-inner">
        <h1>Palmarès</h1>
        <div class="profile" data-profile></div>
        <div data-rival></div>
        <div class="section-title">Mon évolution</div>
        <div class="hero-card">
          <div class="hero-head"><span>Tu gagnes</span><b class="num" data-hero></b><small>octets par minute</small></div>
          <div class="chart" data-chart="income"></div>
        </div>
        <div class="mini-charts">
          <div class="mini-chart"><div class="mini-title">Taille de ma ville <small>sites possédés</small></div><div class="chart" data-chart="sites"></div></div>
          <div class="mini-chart"><div class="mini-title">Vols réussis <small>total</small></div><div class="chart" data-chart="steals"></div></div>
          <div class="mini-chart"><div class="mini-title">Fois où on m'a volé <small>total</small></div><div class="chart" data-chart="robbed"></div></div>
        </div>
        <div class="section-title">Les quartiers qui me rapportent le plus</div>
        <div class="bars" data-bars></div>
        <div data-body></div>
      </div>`),e.appendChild(this.root),this.profile=this.root.querySelector(`[data-profile]`),this.body=this.root.querySelector(`[data-body]`),this.root.addEventListener(`click`,e=>{let t=e.target.closest(`[data-rival-id]`);t&&this.onProfile(t.dataset.rivalId)})}renderRival(e,t){let n=e.players[t],r=n.stats.robbedBy??{},i=Object.keys(r).filter(t=>e.players[t]).sort((e,t)=>r[t]-r[e]||(n.stats.stoleFrom?.[t]??0)-(n.stats.stoleFrom?.[e]??0))[0],a=this.root.querySelector(`[data-rival]`);if(!i){u(a,`<div class="section-title">Mon rival</div><div class="empty">Personne ne t’a encore volé. Profites-en… ça ne durera pas.</div>`);return}let o=e.players[i],c=r[i],d=n.stats.stoleFrom?.[i]??0,f=d>c?`Tu mènes : continue !`:d===c?`Égalité parfaite.`:`Il mène : venge-toi !`;u(a,`<div class="section-title">Mon rival</div>
      <button class="rival" data-rival-id="${i}" style="--r:${o.color};--m:${n.color}">
        <span class="rival-side">${s(n,52)}<b>Toi</b></span>
        <span class="rival-score num"><span class="${d>=c?`lead`:``}">${d}</span><i>–</i><span class="${c>d?`lead`:``}">${c}</span><small>vols l'un contre l'autre</small></span>
        <span class="rival-side">${s(o,52)}<b>${l(o.name)}</b></span>
      </button>
      <p class="rival-verdict">${f} <span>Touche pour voir son profil.</span></p>`)}onShow(){this.chartsKey=``,this.at=0}renderCharts(i,o,s){let c=i.histories?.[s]??[],l={t:o,sites:a(i,s).length,income:n(i,s,e),steals:i.players[s].stats.steals,robbed:i.players[s].stats.timesRobbed},u=[...c,l];this.root.querySelector(`[data-hero]`).textContent=`+${f(l.income)}`;let p=this.root.querySelector(`[data-chart=income]`).clientWidth,h=`${c.length}|${c[c.length-1]?.t}|${p}|${l.sites}|${l.steals}|${l.robbed}|${Math.round(l.income)}`;if(h===this.chartsKey)return;let g=this.chartsKey===``;this.chartsKey=h,this.root.classList.toggle(`charts-animate`,g);let _=(e,t,n,r,i,a)=>v(this.root.querySelector(`[data-chart=${e}]`),u.map(e=>({t:e.t,v:t(e)})),{format:n,height:r,now:o,stepped:i,unit:a});_(`income`,e=>e.income,e=>f(e),190,!1,`octets/min`),_(`sites`,e=>e.sites,e=>m(e),120,!0,`sites`),_(`steals`,e=>e.steals,e=>m(e),120,!0,`vols`),_(`robbed`,e=>e.robbed,e=>m(e),120,!0,`fois`);let b=a(i,s).filter(e=>t[e.id]),x=d().map(n=>{let i=b.filter(e=>t[e.id].district===n.id),a=i.reduce((t,n)=>t+r(n,e),0);return{label:n.name,dot:n.color,value:a,valueText:`+${f(a)}/min`,sub:`${i.length} site${i.length>1?`s`:``}`}}).filter(e=>e.value>0).sort((e,t)=>t.value-e.value).slice(0,8);y(this.root.querySelector(`[data-bars]`),x)}update(n,r,c){if(performance.now()-this.at<1e3)return;this.at=performance.now();let d=n.players[c];this.renderCharts(n,r,c),this.renderRival(n,c);let f=e=>{let t=n.players[e],i=t.stats.longestReign?{playerId:e,value:t.stats.longestReign.value,siteId:t.stats.longestReign.siteId}:null;for(let t of a(n,e)){let n=r-(t.ownerSince??r);(!i||n>i.value)&&(i={playerId:e,value:n,siteId:t.id})}return i},h=f(c);u(this.profile,`${s(d,56)}
      <div><strong>${l(d.name)}</strong><span>Saison ${n.season.number} · fortune ${m(i(n,c,r,e))} octets</span></div>`);let g=(e,t)=>`<div class="record"><div class="record-label">${e}</div><div class="record-value">${t}</div></div>`,_=e=>e?l(t[e]?.name??e):``,v=`<div class="section-title">Mes records</div><div class="records">
      ${g(`Plus long règne`,h?`${_(h.siteId)}, ${p(h.value)}`:`-`)}
      ${g(`Plus gros vol`,d.stats.biggestSteal?`${_(d.stats.biggestSteal.siteId)}, ${m(d.stats.biggestSteal.value)}`:`-`)}
      ${g(`Sites achetés`,m(d.stats.bought??0))}
      ${g(`Vols réussis`,m(d.stats.steals))}
      ${g(`Fois volé`,m(d.stats.timesRobbed))}
      ${g(`Octets gagnés`,m(d.stats.collected))}
    </div>`,y=n.playerOrder,b=e=>y.map(e).reduce((e,t)=>t&&(!e||t.value>e.value)?t:e,null),x=[[`Plus gros vol`,b(e=>{let t=n.players[e].stats.biggestSteal;return t?{playerId:e,value:t.value,siteId:t.siteId}:null}),e=>`${_(e.siteId)} pour ${m(e.value)} octets`],[`Plus long règne`,b(f),e=>`${_(e.siteId)}, ${p(e.value)}`],[`Plus de vols`,b(e=>({playerId:e,value:n.players[e].stats.steals})),e=>`${m(e.value)} vols`],[`Plus d’octets gagnés`,b(e=>({playerId:e,value:n.players[e].stats.collected})),e=>`${m(e.value)} octets`],[`Plus grande fortune`,b(t=>({playerId:t,value:i(n,t,r,e)})),e=>`${m(e.value)} octets`]];v+=`<div class="section-title">Records de la ville</div><div class="hall">${x.map(([e,t,r])=>{if(!t||t.value<=0)return``;let i=n.players[t.playerId];return`<div class="hall-row${t.playerId===c?` me`:``}"><span class="hall-cup">${o(`trophy`)}</span>
          <div class="hall-main"><span class="hall-label">${e}</span><span class="hall-text">${r(t)}</span></div>
          ${s(i,30)}<span class="hall-name">${l(i.name)}</span></div>`}).join(``)}</div>`;let S=n.lastSeason;v+=`<div class="section-title">Saison précédente</div>`,v+=S?`<div class="podium">${S.ranking.slice(0,3).map((e,t)=>{let r=n.players[e.playerId];return r?`<div class="podium-step s${t+1}">${s(r,40)}<b>${l(r.name)}</b><span class="num">${m(e.points??0)} ${o(`star`)}</span><i>${t+1}</i></div>`:``}).join(``)}</div>`:`<div class="empty">Première saison en cours : fin dans ${p(n.season.endsAt-r)}.</div>`,u(this.body,v)}};export{b as PalmaresScreen};