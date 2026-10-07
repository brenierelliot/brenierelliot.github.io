import{i as e}from"./rules-BzNqv-9c.js";import{i as t,u as n,x as r}from"./cosmetics-eDfrNWo9.js";import{_ as i,f as a,h as o,n as s,o as c,p as l,r as u,s as d,t as f,v as p,x as m,y as h}from"./defis-DYEyjdXW.js";import{b as g,i as _,r as v,t as y}from"./ui-icons-HgoMpw99.js";import{n as b,r as x}from"./dom-Bk0mxCfW.js";import{i as S,t as C}from"./format-CjuF2q7h.js";import{A as w,j as T}from"./app-DBr7tYM5.js";var E=e=>w[e]?_(w[e].icon):v(`gift`),D=e=>w[e]?.name??e,O=[`commune`,`rare`,`epique`,`legendaire`];function k(e){let[i,a]=e.split(`:`),o=t[i]?.[a];return o?{icon:i===`sticker`?`<span class="rk-sticker">${r(a,o.name)}</span>`:v(y[i]??`gift`),name:o.name,kind:i===`sticker`?`Sticker`:n[i].name,about:o.about,rarity:o.rarity}:null}function A(e){let t=[];for(let n of e.packs??[])t.push({icon:E(n),label:D(n)});for(let n of e.items??[]){let e=k(n);e&&t.push({icon:e.icon,label:e.kind})}if(e.places&&t.push({icon:v(`zap`),label:`+${e.places} places`}),e.octets&&t.push({icon:`<span class="coin">o</span>`,label:C(e.octets)}),!t.length)return{icon:_(g),label:`Départ`,more:0};let n=(e.packs?.length??0)>1&&new Set(e.packs).size===1;return{...t[0],label:n?`${t[0].label} ×${e.packs.length}`:t[0].label,more:t.length-1-(n?e.packs.length-1:0)}}function j(e){return O.filter(t=>e[t]).map(t=>`<span style="color:${T[t].color}">${T[t].name} ${Math.round((e[t]??0)*100)} %</span>`).join(` · `)}function M(t){let n=[],r=new Map;for(let e of t.packs??[])r.set(e,(r.get(e)??0)+1);for(let[t,i]of r){let r=w[t],a=e.packs.find(e=>e.id===t);r&&a&&n.push(`<div class="rk-det-item">
      <span class="rk-det-icon" style="--c:${r.color}">${_(r.icon)}</span>
      <div><b>Pack ${x(r.name)}${i>1?` ×${i}`:``}</b> <small>offert, ouvert tout de suite</small>
        <p>${a.cards} objets de style (danses, stickers, sons, terminaux…), parfois un sac d’octets.</p>
        <p class="rk-odds">Chaque tirage : ${j(a.odds)}</p>
        ${a.guaranteed?`<p class="rk-odds">+ 1 garanti : ${j(a.guaranteed)}</p>`:``}
      </div>
    </div>`)}t.places&&n.push(`<div class="rk-det-item"><span class="rk-det-icon">${v(`zap`)}</span><div><b>+${t.places} places d’escouade</b>
      <p>Ton escouade d’attaque passe de ${e.heist.freePlaces} à ${e.heist.freePlaces+t.places} places. Pour toujours.</p></div></div>`);for(let e of t.items??[]){let t=k(e);t&&n.push(`<div class="rk-det-item"><span class="rk-det-icon" style="--c:${T[t.rarity].color}">${t.icon}</span><div><b>${x(t.kind)} · ${x(t.name)}</b> <small style="color:${T[t.rarity].color}">${T[t.rarity].name}</small>
      <p>${x(t.about)} À toi pour toujours, ${t.kind===`Sticker`?`à envoyer à celui que tu viens de voler`:`à équiper dans ta Garde-robe (l’ordinateur de ta chambre, onglet Cyber)`}. Si tu l’as déjà : revendu en octets.</p></div></div>`)}return t.octets&&n.push(`<div class="rk-det-item"><span class="rk-det-icon"><span class="coin">o</span></span><div><b>${C(t.octets)} octets</b>
      <p>Ajoutés tout de suite à ton porte-monnaie, pour la saison en cours.</p></div></div>`),n.length||n.push(`<p class="rk-det-empty">Le point de départ de tout hacker.</p>`),n.join(``)}var N=class{parent;root=null;selected=1;player=null;onKey=e=>{e.key===`Escape`&&this.close()};constructor(e){this.parent=e}names={player:e=>e,district:e=>e};onClaim=()=>{};get isOpen(){return!!this.root}open(e,t,n=!1){let r=n?this.root?.querySelector(`.rk-track`)?.scrollLeft:void 0,g=n?this.root?.querySelector(`.rk-card`)?.scrollTop:void 0;this.close(n),this.player=e;let y=i(e),w=p(e),T=o(e),E=m(e);this.selected=E>0?T+1:Math.min(a.length,y.rank+1);let D=d(e,t),O=f-t%f,k=D.filter(e=>e.done).length,j=D.filter(e=>e.done).reduce((e,t)=>e+t.defi.rep,0),M=[...D].sort((e,t)=>Number(e.done)-Number(t.done)),N=D.length?`<div class="rk-dbox-head">
          <span class="num"><b>${k}</b> / ${D.length} réussis</span>
          <span class="rk-dbox-bar"><i style="width:${Math.round(k/D.length*100)}%"></i></span>
          <span class="num rk-dbox-earned">+${C(j)} ${v(`star`)}</span>
        </div>
        <div class="rk-dbox-list">${M.map(({defi:e,tier:t,progress:n,done:r})=>{let i=s[e.kind],a=u.indexOf(t)+1,o=u.map((e,t)=>`<i class="${t<a?`on`:``}"></i>`).join(``);return`<div class="rk-drow ${r?`done`:``}" style="--c:${t.color};--p:${Math.round(n/e.target*100)}%">
            <span class="rk-drow-icon" aria-hidden="true">${r?v(`check`):_(i.icon)}</span>
            <span class="rk-drow-main">
              <span class="rk-drow-code"><span class="rk-drow-op">&gt; ${x(i.code)}</span><span class="rk-pips" title="${x(t.name)}" aria-label="Difficulté : ${x(t.name)}">${o}</span><span class="rk-drow-level">${x(t.name)}</span></span>
              <span class="rk-drow-text">${x(c(e,this.names))}</span>
            </span>
            <span class="rk-drow-side">
              <span class="rk-drow-rep num">+${e.rep} ${v(`star`)}</span>
              <span class="rk-drow-prog num">${r?`réussi`:`${C(n)}/${C(e.target)}`}</span>
            </span>
          </div>`}).join(``)}</div>`:`<p class="rk-note">Tes défis du jour arrivent dans un instant…</p>`,P=a.map(e=>{let t=e.rank<=T?`done`:e.rank<=y.rank?`claim`:`locked`,n=A(e.reward);return`<li class="rk-step ${t}${e.rank===y.rank?` current`:``}">
        <button class="rk-tile" data-rank="${e.rank}" aria-label="Rang ${e.rank}, ${x(e.name)} : voir la récompense">
          <span class="rk-tile-icon">${n.icon}</span>
          <span class="rk-tile-label">${x(n.label)}</span>
          ${n.more>0?`<span class="rk-tile-more">+${n.more}</span>`:``}
          ${t===`done`?`<span class="rk-tile-check" aria-hidden="true">${v(`check`)}</span>`:``}
          ${t===`locked`?`<span class="rk-tile-lock" aria-hidden="true">${v(`lock`)}</span>`:``}
          ${t===`claim`?`<span class="rk-tile-gift" aria-hidden="true">${v(`gift`)}</span>`:``}
        </button>
        ${e.rank===y.rank?`<span class="rk-here">Tu es ici</span>`:``}
        <span class="rk-step-num num">${e.rank}</span>
        <span class="rk-step-name">${x(e.name)}</span>
        ${t===`claim`?`<button class="rk-claim-btn" data-claim>Réclamer</button>`:``}
      </li>`}).join(``),F=[[`Acheter un site libre`,l.buy],[`Voler un site à un joueur`,l.steal],[`Défendre ton site`,l.defend],[`Compléter un îlot`,l.block],[`Passer un palier du quartier`,l.upgrade],[`Acheter un pack`,l.pack]];this.root=b(`div`,{class:`confirm rk`,role:`dialog`,"aria-modal":`true`,"aria-label":`Rangs`},`<div class="confirm-card rk-card">
        <button class="rk-close" data-close aria-label="Fermer">${v(`close`)}</button>
        <div class="rk-head">
          <span class="rk-badge num">${y.rank}</span>
          <div class="rk-head-txt">
            <h2>${x(y.name)}</h2>
            <div class="rk-bar"><i style="width:${w?Math.round(w.frac*100):100}%"></i></div>
            <p class="rk-sub num">${w?`${C(h(e))} ${v(`star`)} réputation · encore <b>${C(w.missing)}</b> pour <b>${x(w.next.name)}</b>`:`${C(h(e))} ${v(`star`)} réputation · rang maximal !`}</p>
          </div>
        </div>
        ${E>0?`<button class="rk-claim-cta" data-claim>${v(`gift`)} Réclamer la récompense du rang ${T+1}${E>1?` <small>(${E} en attente)</small>`:``}</button>`:``}

        <div class="rk-label"><span>Défis du jour</span><small>Nouveaux défis dans ${S(O)}</small></div>
        <div class="rk-dbox">${N}</div>

        <div class="rk-label"><span>Les 20 rangs</span><small>Touche une case pour voir ce qu’elle donne</small></div>
        <div class="rk-track-wrap">
          <button class="rk-arrow prev" data-scroll="-1" aria-label="Rangs précédents">${v(`left`)}</button>
          <ol class="rk-track">${P}</ol>
          <button class="rk-arrow next" data-scroll="1" aria-label="Rangs suivants">${v(`right`)}</button>
        </div>
        <div class="rk-detail" data-detail></div>

        <details class="rk-more">
          <summary>Autres façons de gagner de la réputation</summary>
          <ul class="rk-gains">${F.map(([e,t,n])=>`<li><span>${e}${n?` <small>(${n})</small>`:``}</span><b class="num">+${t} ${v(`star`)}</b></li>`).join(``)}</ul>
          <p class="rk-note">Ta réputation et ton rang restent d’une saison à l’autre. Chaque rang donne sa récompense une seule fois.</p>
        </details>
      </div>`),this.parent.appendChild(this.root),this.renderDetail(),n?this.root.classList.add(`show`):requestAnimationFrame(()=>this.root?.classList.add(`show`));let I=this.root.querySelector(`.rk-track`),L=this.root.querySelector(`.rk-track-wrap`),R=()=>{L.classList.toggle(`at-start`,I.scrollLeft<=4),L.classList.toggle(`at-end`,I.scrollLeft+I.clientWidth>=I.scrollWidth-4)};I.addEventListener(`scroll`,R,{passive:!0}),I.addEventListener(`wheel`,e=>{Math.abs(e.deltaY)<=Math.abs(e.deltaX)||(e.preventDefault(),I.scrollLeft+=e.deltaY)},{passive:!1});let z=!1;I.addEventListener(`pointerdown`,e=>{if(e.pointerType!==`mouse`)return;let t=e.clientX,n=I.scrollLeft;z=!1;let r=e=>{Math.abs(e.clientX-t)>5&&(z=!0),z&&(I.scrollLeft=n-(e.clientX-t))},i=()=>{window.removeEventListener(`pointermove`,r),window.removeEventListener(`pointerup`,i),setTimeout(()=>z=!1,0)};window.addEventListener(`pointermove`,r),window.addEventListener(`pointerup`,i)}),this.root.addEventListener(`click`,e=>{let t=e.target;if(t===this.root||t.closest(`[data-close]`))return this.close();let n=t.closest(`[data-scroll]`);if(n){I.scrollBy({left:Number(n.dataset.scroll)*I.clientWidth*.8,behavior:`smooth`});return}if(z)return;if(t.closest(`[data-claim]`))return this.onClaim();let r=t.closest(`[data-rank]`);r&&(this.selected=Number(r.dataset.rank),this.renderDetail())}),document.addEventListener(`keydown`,this.onKey);let B=I.querySelector(`.rk-step.claim`)??I.querySelector(`.rk-step.current`);r===void 0?B&&(I.scrollLeft=B.offsetLeft-I.clientWidth/2+B.offsetWidth/2):I.scrollLeft=r,g!==void 0&&(this.root.querySelector(`.rk-card`).scrollTop=g),R()}renderDetail(){if(!this.root||!this.player)return;let e=a[this.selected-1],t=i(this.player);for(let t of this.root.querySelectorAll(`.rk-tile`))t.classList.toggle(`selected`,Number(t.dataset.rank)===e.rank);let n=e.rank<=o(this.player)?`<span class="rk-det-status ok">${v(`check`)} Reçu</span>`:e.rank<=t.rank?`<button class="rk-claim-btn inline" data-claim>${v(`gift`)} Réclamer</button>`:`<span class="rk-det-status">${v(`lock`)} Encore ${C(Math.max(0,e.rep-h(this.player)))} ${v(`star`)}</span>`;this.root.querySelector(`[data-detail]`).innerHTML=`
      <div class="rk-det-head"><b>Rang ${e.rank} · ${x(e.name)}</b><small class="num">${C(e.rep)} ${v(`star`)}</small>${n}</div>
      ${M(e.reward)}`}close(e=!1){let t=this.root;if(t){if(this.root=null,this.player=null,document.removeEventListener(`keydown`,this.onKey),e)return t.remove();t.classList.remove(`show`),setTimeout(()=>t.remove(),250)}}};function P(e){let t=[];e.octets&&t.push({icon:`<span class="coin">o</span>`,title:`+${C(e.octets)}`,sub:`octets`,color:`#ffc94a`});for(let n of e.packs??[])t.push({icon:E(n),title:`Pack ${D(n)}`,sub:`à ouvrir`,color:w[n]?.color});for(let n of e.items??[]){let e=k(n);e&&t.push({icon:e.icon,title:e.name,sub:e.kind.toLowerCase(),color:T[e.rarity].color})}return e.places&&t.push({icon:v(`zap`),title:`+${e.places} places`,sub:`d’escouade`,color:`#c65bff`}),t}function F(e,t,n){let r=a[t-1],i=P(r.reward);return new Promise(a=>{let o=b(`div`,{class:`rk-reveal`,role:`dialog`,"aria-modal":`true`,"aria-label":`Récompense du rang ${t}`},`<div class="rv-rays" aria-hidden="true"></div>
      <div class="rv-box">
        <div class="rv-badge num">${t}</div>
        <div class="rv-kicker">Rang ${t} atteint</div>
        <h2 class="rv-title">${x(r.name)}</h2>
        <div class="rv-items">${i.map((e,t)=>`<div class="rv-item" style="--i:${t};--c:${e.color??`#ffc94a`}">
              <span class="rv-icon">${e.icon}</span><b class="num">${x(e.title)}</b><small>${x(e.sub)}</small>
            </div>`).join(``)}</div>
        <button class="cta collect rv-ok" data-ok>Récupérer</button>
      </div>
      <div class="rv-confetti" aria-hidden="true">${Array.from({length:28},(e,t)=>`<i style="--k:${t}"></i>`).join(``)}</div>`);e.appendChild(o),requestAnimationFrame(()=>o.classList.add(`show`));let s=i.map((e,t)=>window.setTimeout(()=>n.item(t),550+t*380)),c=()=>{s.forEach(clearTimeout),document.removeEventListener(`keydown`,l),n.done(),o.classList.add(`leave`),setTimeout(()=>{o.remove(),a()},300)},l=e=>{(e.key===`Escape`||e.key===`Enter`)&&c()};document.addEventListener(`keydown`,l),o.querySelector(`[data-ok]`).addEventListener(`click`,c,{once:!0}),o.querySelector(`[data-ok]`).focus()})}export{N as RanksPanel,F as showRankReward};