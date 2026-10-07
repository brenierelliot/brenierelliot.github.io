import{n as e}from"./index-DPjBRx0r.js";import{r as t}from"./sites-BT5Wt74L.js";import{i as n}from"./rules-BzNqv-9c.js";import{Vn as r,kn as i,y as a}from"./game-Fv1j0UeL.js";import{D as o,i as s,r as c}from"./ui-icons-HgoMpw99.js";import{i as l,n as u,r as d}from"./dom-Bk0mxCfW.js";import{r as f}from"./referral-BWRv7-yD.js";import{A as p,B as m,D as h,F as g,I as _,L as v,M as y,N as b,T as x,U as S,V as C,a as w,ct as T,i as E,it as D,k as O,lt as k,o as A,p as j,t as M,w as N}from"./boot-tYM6aCH3.js";import{i as P,t as F}from"./format-CjuF2q7h.js";import{W as I,a as L,d as R,f as z,i as B,m as V,r as H}from"./app-DBr7tYM5.js";var U=[`svg`,o,[[`path`,{d:`M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71`}],[`path`,{d:`M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71`}]]],W={gameName:`Steal Internet`,publisher:`Elliot Brenier`,publisherStatus:`Éditeur non professionnel`,contactEmail:`brenierelliot@gmail.com`,host:`À compléter à la mise en ligne : nom, adresse et téléphone de l’hébergeur.`,minAge:15,lastUpdate:`1er octobre 2026`},G=`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9 M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/></svg>`,K=class{host;root;onAvatar=()=>{};onRename=()=>{};onQuit=()=>{};onResetSolo=()=>{};onNotice=()=>{};onNotifs=()=>{};profile;editor;account;season;nameInput;accountKey=``;profileKey=``;constructor(r,i){this.host=i;let a=i.mode===`solo`;this.root=u(`section`,{class:`screen settings-screen`,"aria-label":`Paramètres`},`<div class="screen-inner">
        <div class="profile-head" data-profile></div>
        <div class="set-card profile-editor" data-editor hidden>
          <label class="set-label">Photo de profil</label>
          <div data-avatars></div>
          <label class="set-label" for="set-name">Pseudo</label>
          <form class="field" data-rename>
            <input id="set-name" name="name" maxlength="16" autocomplete="nickname" />
            <button class="small-btn" type="submit">Enregistrer</button>
          </form>
          <button class="small-btn ghost" data-close-editor type="button">Fermer</button>
        </div>

        <div class="section-title">Mon compte</div>
        <div class="set-card" data-account></div>

        <div class="section-title">Invite tes amis</div>
        <div class="set-card invite-card">
          <p class="set-line">${c(`gift`)} Un ami arrive avec ton lien et atteint le <b>rang 3</b> : <b>un pack de célébrités pour toi et pour lui</b>.</p>
          <div class="invite-link">
            <input data-invite-link readonly aria-label="Ton lien d'invitation" />
            <button class="small-btn" data-invite-copy type="button">${c(`copy`)} Copier</button>
          </div>
          <button class="small-btn ghost set-wide" data-invite-share type="button" hidden>${c(`share`)} Envoyer à un ami</button>
          <p class="set-note" data-invite-count></p>
          ${a?`<p class="set-note">En partie solo, les parrainages ne comptent pas : ils marchent dans la partie en ligne.</p>`:``}
        </div>

        <div class="section-title">Son et vibrations</div>
        <div class="set-card">
          <label class="set-toggle"><span>Sons du jeu</span><input type="checkbox" data-sound ${p()?`checked`:``}><i></i></label>
          <label class="set-toggle"><span>Musique d'ambiance</span><input type="checkbox" data-music ${E()?`checked`:``}><i></i></label>
          <label class="set-slider"><span>Volume de la musique</span><input type="range" min="0" max="100" step="5" value="${Math.round(w()*100)}" data-music-volume aria-label="Volume de la musique"></label>
          <button class="small-btn ghost" data-test-sound type="button">${c(`sound`)} Tester le son</button>
          <p class="set-note" data-audio-state></p>
          <label class="set-toggle"><span>Notifications (site volé, attaque)</span><input type="checkbox" data-notifs><i></i></label>
          <p class="set-note" data-notif-note>Elles arrivent quand le jeu est ouvert en arrière-plan.</p>
          <label class="set-toggle"><span>Vibrations (téléphone)</span><input type="checkbox" data-vibrate ${y()?`checked`:``}><i></i></label>
          <p class="set-note">Les animations suivent le réglage « réduire les animations » de ton appareil.</p>
        </div>

        <div class="section-title">Affichage</div>
        <div class="set-card">
          <label class="set-toggle"><span>Qualité graphique</span>
            <select data-quality aria-label="Qualité graphique">
              <option value="auto" ${T()===`auto`?`selected`:``}>Auto (${D?`légère`:`haute`})</option>
              <option value="leger" ${T()===`leger`?`selected`:``}>Légère : plus fluide</option>
              <option value="haute" ${T()===`haute`?`selected`:``}>Haute : plus belle</option>
            </select>
          </label>
          <p class="set-note">« Légère » limite à 30 images par seconde, sans ombres ni flous : idéal sur téléphone. Le jeu se recharge pour changer.</p>
          <label class="set-toggle"><span>Ville en 3D</span><input type="checkbox" data-city3d ${z()?`checked`:``}><i></i></label>
          <p class="set-note">Sur un vieux téléphone, la ville en 2D est plus fluide. Le jeu se recharge pour changer.</p>
        </div>

        <div class="section-title">La partie</div>
        <div class="set-card">
          <p class="set-line" data-season></p>
          <button class="small-btn ghost set-wide" data-quit>Quitter la partie</button>
          ${a?`<button class="small-btn ghost set-wide danger" data-reset>Recommencer ma partie solo</button>`:``}
        </div>

        <div class="section-title">Crédits</div>
        <div class="set-card">
          <p class="set-note">Immeubles et maisons de la ville 3D : <a href="https://kenney.nl" target="_blank" rel="noopener">Kenney</a> (City Kit, CC0).</p>
          <p class="set-note">QG des crews : « <a href="https://sketchfab.com/3d-models/isometric-office-d31464eed8044190911b221648aca432" target="_blank" rel="noopener">Isometric office</a> » de <a href="https://sketchfab.com/Companion_Cube" target="_blank" rel="noopener">Companion_Cube</a>, licence CC-BY 4.0. Cyberespace « Hacker room » et décors : <a href="https://kenney.nl" target="_blank" rel="noopener">Kenney</a> (Space Station Kit, Furniture Kit, CC0).</p>
          <p class="set-note">Maisons des micro-sites : TomaszCGB (TurboSquid).</p>
          <p class="set-note">Doberman : modèle 3D ADE3D Art (3dexport).</p>
          <p class="set-note">Herbe : <a href="http://www.freepik.com" target="_blank" rel="noopener">Designed by macrovector / Freepik</a>.</p>
          <p class="set-note">Logos des sites : leurs propriétaires respectifs (via Google).</p>
        </div>

        <div class="section-title">Aide et informations</div>
        <div class="set-card legal">
          <details>
            <summary>Règles du jeu</summary>
            <ul>
              <li>Chaque site d'Internet est un immeuble. Un site <b>libre</b> s'achète directement à son prix.</li>
              <li><b>Voler</b> un site qui a un propriétaire (dès le rang 3) : tu l’<b>attaques</b> pendant 3 minutes avec tes cartes de célébrités (ticket : ${Math.round(n.heist.ticketShare*100)} % de son prix). Chaque immeuble a des <b>PV</b> : à 0, il est à toi. Une attaque retire au plus 50 % des PV max ; les dégâts restent (+5 % de PV par heure ensuite). Ton IP est bannie ${P(n.heist.banMs)} de ce site après chaque attaque (VPN : ${F(n.heist.vpnCost)} octets).</li>
              <li>Tes <b>cartes</b> : 1 par célébrité, plus 1 par doublon tiré dans les packs. Une carte détruite en attaque est perdue ; une carte qui survit revient.</li>
              <li><b>Défendre</b> : achète des défenses au <b>Dark Web</b> (onglet Cyber) et pose-les sur tes sites. Les défenses détruites le restent ; si ton site est volé, elles sont perdues (tu touches une assurance de ${Math.round(n.heist.insuranceShare*100)} % de son prix).</li>
              <li>Après un vol, le prix monte de <b>+${Math.round((n.priceMultiplierOnSteal-1)*100)} %</b>. Sans vol pendant ${P(n.decayGraceMs)}, il redescend doucement. Un site volé est protégé ${P(n.heist.shieldAfterStealMs)}.</li>
              <li><b>Revenus automatiques</b> : chacun de tes sites (et ton site principal) rapporte des octets chaque minute, versés directement dans ton portefeuille, même quand tu n'es pas là. Rien à collecter.</li>
              <li><b>Prime des attaquants</b> : quand un site tombe, ${P(n.heist.bountyMinutes*6e4)} de ses revenus sont partagées entre tous ceux qui l'ont attaqué dans les ${P(n.heist.bountyWindowMs)}, selon leurs dégâts.</li>
              <li><b>Îlot complet</b> (au moins ${n.blockBonus.minSites} immeubles, tous à toi) : leurs revenus augmentent de +${Math.round(Math.min(...n.blockBonus.tiers.map(e=>e.bonus))*100)} % à +${Math.round(Math.max(...n.blockBonus.tiers.map(e=>e.bonus))*100)} %, selon la valeur de l'îlot.</li>
              <li><b>Terrains</b> (dans Mes sites) : chaque terrain donne ${n.plots.size} places pour des sites. Les <b>bonus de revenus</b> du quartier augmentent tous tes revenus.</li>
              <li>Le <b>roi</b> d'un quartier : celui dont les sites y valent le plus, avec au moins ${n.kingMinSites} sites là-bas, après ${P(n.kingHoldMs)} d'affilée en tête. Ses sites de ce quartier rapportent +${Math.round(n.kingBonus*100)} %.</li>
              <li>Une saison dure ${P(n.seasonMs)} ; ensuite tout repart de zéro (${F(n.startingWallet)} octets pour tout le monde).</li>
            </ul>
          </details>
          <details>
            <summary>Mentions légales</summary>
            <p><b>Éditeur</b> : ${d(W.publisher)} (${d(W.publisherStatus)}). Contact : <a href="mailto:${W.contactEmail}">${d(W.contactEmail)}</a>.</p>
            <p><b>Directeur de la publication</b> : ${d(W.publisher)}.</p>
            <p><b>Hébergeur</b> : ${d(W.host)}</p>
            <p><b>Marques et noms de sites</b> : les noms des sites (Google, YouTube…) appartiennent à leurs propriétaires respectifs. ${d(W.gameName)} est un jeu indépendant, sans lien avec eux ; « voler » un site est une action de jeu, fictive : personne ne devient propriétaire d'un vrai site. Les logos affichés sont les icônes publiques des sites (via Google) et servent uniquement à les reconnaître. Les captures des pages d'accueil sont réalisées automatiquement à titre d'illustration.</p>
            <p><b>Signaler un contenu</b> : pour demander le retrait d'un nom, d'un logo, d'une capture, d'une photo de profil, ou du <b>nom ou de l'image d'une personne (célébrité)</b> présente dans le jeu, écris à <a href="mailto:${W.contactEmail}">${d(W.contactEmail)}</a> ; la demande sera traitée rapidement.</p>
          </details>
          <details>
            <summary>Conditions d'utilisation</summary>
            <ul>
              <li>Le jeu est gratuit. Les « octets » sont une monnaie fictive, sans valeur réelle : ils ne s'achètent pas et ne s'échangent pas contre de l'argent.</li>
              <li>Le jeu est ouvert à tous. Les plus jeunes jouent de préférence avec l'accord de leurs parents.</li>
              <li>Ton pseudo ne doit pas être insultant, haineux ou usurper l'identité de quelqu'un. Un pseudo inadapté peut être modifié et un compte abusif supprimé.</li>
              <li>Interdit : tricher, utiliser des programmes automatiques, attaquer le serveur ou gêner les autres joueurs.</li>
              <li>Les saisons remettent la partie à zéro ; le jeu peut évoluer (règles, sites) à tout moment.</li>
            </ul>
          </details>
          <details>
            <summary>Politique de confidentialité</summary>
            <ul>
              <li><b>Ce qui est enregistré</b> : ton pseudo, ta photo de profil choisie, ta progression dans le jeu et, si tu crées un compte, ton e-mail et ton mot de passe (chiffré, jamais lisible). Avec Google, Discord, Microsoft, GitHub ou Facebook, seuls ton identifiant chez ce service, ton prénom et ton e-mail sont reçus.</li>
              <li><b>Pourquoi</b> : uniquement pour faire fonctionner le jeu et te permettre de retrouver ton joueur. Rien n'est vendu ni utilisé pour de la publicité.</li>
              <li><b>Sur ton appareil</b> : le jeu garde ta connexion et tes réglages (son, vibrations) dans la mémoire de ton navigateur. Ce sont des éléments strictement nécessaires : pas de cookie publicitaire ni de mesure d'audience.</li>
              <li><b>Services tiers</b> : les logos viennent de Google, les captures sont faites par Microlink, les polices par Google Fonts ; ces services peuvent voir ton adresse IP quand ils envoient une image.</li>
              <li><b>Durée</b> : tes données sont gardées tant que ton compte existe. Un compte invité inactif pendant un an peut être supprimé.</li>
              <li><b>Tes droits</b> : accès, correction, suppression, portabilité et opposition. Écris à <a href="mailto:${W.contactEmail}">${d(W.contactEmail)}</a>. Tu peux aussi saisir la CNIL (cnil.fr).</li>
            </ul>
            <p><a href="${e(`confidentialite.html`)}" target="_blank" rel="noopener">Lire la politique de confidentialité complète</a></p>
          </details>
          <details>
            <summary>Crédits</summary>
            <p>${d(W.gameName)} · ${F(t.length)} vrais sites, vérifiés dans le classement Tranco des sites les plus visités (tranco-list.eu, liste L5PZ4). Le prix de chaque site vient de sa popularité réelle.</p>
            <p>Moteur graphique : PixiJS et Three.js. Polices : Fredoka, Inter, JetBrains Mono (Google Fonts). Icônes : Lucide (lucide.dev, licence ISC). Avatars dessinés pour le jeu.</p>
            <p><b>Photos des célébrités</b> (Wikimedia Commons, licences libres ; recadrées pour le jeu) :</p>
            <ul class="set-credits" data-photo-credits><li>Chargement…</li></ul>
          </details>
          <p class="set-note">Dernière mise à jour : ${d(W.lastUpdate)}.</p>
        </div>
      </div>`),r.appendChild(this.root),this.profile=this.root.querySelector(`[data-profile]`),this.editor=this.root.querySelector(`[data-editor]`),this.account=this.root.querySelector(`[data-account]`),this.season=this.root.querySelector(`[data-season]`),this.nameInput=this.root.querySelector(`#set-name`),this.loadPhotoCredits(),this.wireInvite();let o=i.getState().players[i.meId],s=this.root.querySelector(`[data-avatars]`);s.innerHTML=m(o?.avatar??null),C(s,e=>{this.onAvatar(e),this.profileKey=``}),this.profile.addEventListener(`click`,e=>{e.target.closest(`[data-edit]`)&&(this.editor.hidden=!this.editor.hidden,this.editor.hidden||(this.editor.scrollIntoView({behavior:`smooth`,block:`nearest`}),e.target.closest(`[data-edit="name"]`)&&setTimeout(()=>this.nameInput.focus(),150)))}),this.root.querySelector(`[data-close-editor]`).addEventListener(`click`,()=>this.editor.hidden=!0),this.root.querySelector(`[data-rename]`).addEventListener(`submit`,e=>{e.preventDefault(),this.onRename(this.nameInput.value),this.nameInput.blur(),this.profileKey=``});let l=this.root.querySelector(`[data-sound]`),f=this.root.querySelector(`[data-music]`);l.addEventListener(`change`,()=>h(l.checked)),f.addEventListener(`change`,()=>N(f.checked));let _=this.root.querySelector(`[data-music-volume]`);_.addEventListener(`input`,()=>{x(Number(_.value)/100),!E()&&Number(_.value)>0&&N(!0)}),A(()=>{l.checked=p(),f.checked=E()});let v=this.root.querySelector(`[data-notifs]`),b=this.root.querySelector(`[data-notif-note]`),S=()=>{v.checked=H();let e=B();b.textContent=e===`unsupported`?`Ton navigateur ne gère pas les notifications.`:e===`denied`?`Les notifications sont bloquées pour ce site : autorise-les dans les réglages du navigateur (icône à gauche de l’adresse).`:`Même quand le jeu est fermé : on te prévient si on te vole un site. (En ligne : nécessite HTTPS.)`};S(),v.addEventListener(`change`,async()=>{await L(v.checked),S(),this.onNotifs(H())}),this.root.querySelector(`[data-test-sound]`).addEventListener(`click`,()=>{p()||h(!0),j();let e=this.root.querySelector(`[data-audio-state]`);setTimeout(()=>{e.textContent=M()===`running`?`Le jeu envoie bien le son. Si tu n’entends rien : monte le volume de ton appareil, vérifie que l’onglet n’est pas coupé (clic droit sur l’onglet) et, sur téléphone, que le mode silencieux est désactivé.`:`Le navigateur bloque encore le son (état : ${M()}). Touche la page une fois, puis réessaie.`},300)}),this.root.querySelector(`[data-quality]`).addEventListener(`change`,e=>{k(e.target.value),location.reload()}),this.root.querySelector(`[data-city3d]`).addEventListener(`change`,e=>{try{localStorage.setItem(R,e.target.checked?`1`:`0`)}catch{}location.reload()}),this.root.querySelector(`[data-vibrate]`).addEventListener(`change`,e=>O(e.target.checked)),this.root.querySelector(`[data-quit]`).addEventListener(`click`,()=>this.onQuit()),this.root.querySelector(`[data-reset]`)?.addEventListener(`click`,()=>this.onResetSolo());try{let e=sessionStorage.getItem(`vole-internet:auth-linked`);e&&(sessionStorage.removeItem(`vole-internet:auth-linked`),setTimeout(()=>this.onNotice(`Compte lié !`,`Tu peux maintenant te connecter avec ${g(e)}.`),800))}catch{}}update(e,t,o){let s=e.players[o];document.activeElement!==this.nameInput&&(this.nameInput.value=s.name),this.season.innerHTML=`Saison <b>${e.season.number}</b> · fin dans <b>${P(e.season.endsAt-t)}</b>`;let c=`${s.name}|${s.avatar}|${s.color}|${r(e,o).length}`;if(c!==this.profileKey){this.profileKey=c;let a=this.host instanceof S?(()=>{let e=this.host.accountInfo(),t=[e.password&&e.email?e.email:``,...e.providers.map(g)].filter(Boolean).join(` · `);return t?`Connecté : ${d(t)}`:`Invité (compte non sécurisé)`})():`Partie solo`;this.profile.innerHTML=`
        <div class="profile-pic">
          ${l(s,92)}
          <button class="pencil" data-edit="avatar" aria-label="Changer de photo de profil">${G}</button>
        </div>
        <div class="profile-text">
          <div class="profile-name"><strong>${d(s.name)}</strong><button class="pencil small" data-edit="name" aria-label="Changer de pseudo">${G}</button></div>
          <span>${a}</span>
          <span>${r(e,o).length} site${r(e,o).length>1?`s`:``} · fortune ${F(i(e,o,t,n))} octets</span>
        </div>`}this.renderAccount();let u=s.referral?.count??0,f=u===0?`Ton code ami : ${a(o)}. Aucun ami n'a encore atteint le rang 3.`:`Ton code ami : ${a(o)}. ${u} ami${u>1?`s ont`:` a`} atteint le rang 3${u>=20?` (maximum de 20 packs atteint)`:` (${u} pack${u>1?`s`:``} gagné${u>1?`s`:``})`}.`,p=this.root.querySelector(`[data-invite-count]`);p.textContent!==f&&(p.textContent=f)}wireInvite(){let e=f(this.host.meId),t=this.root.querySelector(`[data-invite-link]`);t.value=e,t.addEventListener(`focus`,()=>t.select());let n=this.root.querySelector(`[data-invite-copy]`),r=n.innerHTML;n.addEventListener(`click`,async()=>{try{await navigator.clipboard.writeText(e),n.innerHTML=`${c(`check`)} Copié`}catch{t.select(),n.textContent=`Copie : Ctrl+C`}setTimeout(()=>n.innerHTML=r,1600)});let i=this.root.querySelector(`[data-invite-share]`);typeof navigator.share==`function`&&(i.hidden=!1,i.addEventListener(`click`,()=>{navigator.share({title:`Steal Internet`,text:`Viens jouer à Steal Internet avec moi : on vole les plus grands sites du web.`,url:e}).catch(()=>{})}))}renderAccount(){let e=this.host;if(!(e instanceof S)){if(this.accountKey===`solo`)return;this.accountKey=`solo`,this.account.innerHTML=`<p class="set-line">Partie <b>solo</b> contre l'ordinateur : pas besoin de compte.</p>
        <button class="small-btn set-wide" data-online>Jouer en ligne avec d'autres joueurs</button>`,this.account.querySelector(`[data-online]`).addEventListener(`click`,()=>{let e=new URL(location.href);e.searchParams.delete(`solo`),location.href=e.toString()});return}let t=e.accountInfo(),n=`${t.email}|${t.password}|${t.providers.join(`,`)}`;if(n===this.accountKey)return;this.accountKey=n;let r=t.password||t.providers.length>0,i=[t.password?`<li>${c(`mail`)} E-mail et mot de passe · <b>${d(t.email??``)}</b></li>`:``,...t.providers.map(e=>`<li>${s(U)} ${d(g(e))}</li>`)].join(``);this.account.innerHTML=`
      <p class="set-line">${r?`${c(`shieldCheck`)} Compte sécurisé : tu retrouves ton joueur sur tous tes appareils.`:`${s(I)} Tu joues en <b>invité</b> : ton joueur n’est lié qu’à ce navigateur. Sécurise-le pour ne pas le perdre.`}</p>
      ${i?`<ul class="methods">${i}</ul>`:``}
      <div class="set-sub">${r?`Ajouter un autre moyen de connexion`:`Sécuriser mon compte`}</div>
      ${_(`Lier`,e.enabledProviders(),t.providers)}
      ${t.password?``:`<form class="set-form" data-link>
              <div class="or-line"><span>ou avec un e-mail</span></div>
              <input name="email" type="email" autocomplete="email" placeholder="toi@exemple.fr" />
              <input name="password" type="password" autocomplete="new-password" placeholder="Mot de passe (8 caractères minimum)" />
              <button class="small-btn" type="submit">Sécuriser avec mon e-mail</button>
            </form>`}
      <details class="set-details">
        <summary>Se connecter à un autre compte</summary>
        <form class="set-form" data-switch>
          <input name="email" type="email" autocomplete="email" placeholder="E-mail" />
          <input name="password" type="password" autocomplete="current-password" placeholder="Mot de passe" />
          <button class="small-btn ghost" type="submit">Me connecter</button>
        </form>
      </details>
      <button class="small-btn ghost set-wide" data-logout>Se déconnecter de cet appareil</button>
      <p class="set-error" aria-live="polite"></p>`;let a=this.account.querySelector(`.set-error`),o=e=>a.textContent=e?b[e]:``,l=this.account.querySelector(`.social`);l&&v(l,e.enabledProviders(),()=>({mode:`link`,token:e.currentToken()}),e=>a.textContent=`La connexion avec ${e} n’est pas encore activée sur ce serveur : elle le sera à la mise en ligne.`),this.account.querySelector(`[data-link]`)?.addEventListener(`submit`,async t=>{t.preventDefault();let n=t.target,r=await e.linkEmail(n.email.value,n.password.value);o(r),r||(this.accountKey=``,this.profileKey=``,this.onNotice(`Compte sécurisé !`,`Tu peux maintenant te connecter avec ton e-mail sur n’importe quel appareil.`))}),this.account.querySelector(`[data-switch]`).addEventListener(`submit`,async t=>{t.preventDefault();let n=t.target;if(!r&&!await V(`Tu joues en invité : si tu changes de compte sans sécuriser celui-ci, tu ne pourras plus le retrouver. Continuer ?`,`Continuer`))return;let i=await e.switchAccount(n.email.value,n.password.value);o(i),i||location.reload()}),this.account.querySelector(`[data-logout]`).addEventListener(`click`,async()=>{(r||await V(`Tu joues en invité : en te déconnectant, tu perdras ce joueur (il n’a ni e-mail ni compte lié). Continuer ?`,`Me déconnecter`))&&e.logout()})}async loadPhotoCredits(){let t=this.root.querySelector(`[data-photo-credits]`);if(t)try{let n=await(await fetch(e(`celebs/credits.json`))).json(),r=(e,t)=>e&&/^https:\/\//.test(e)?`<a href="${d(e)}" target="_blank" rel="noopener noreferrer">${d(t)}</a>`:d(t);t.innerHTML=Object.values(n).sort((e,t)=>e.name.localeCompare(t.name,`fr`)).map(e=>`<li>${r(e.sourceUrl,`Photo de ${e.name}`)} : ${d(e.author||`auteur inconnu`)}${e.license?`, ${r(e.licenseUrl,e.license)}`:``}</li>`).join(``)}catch{t.innerHTML=`<li>Crédits indisponibles pour le moment.</li>`}}};export{K as SettingsScreen};