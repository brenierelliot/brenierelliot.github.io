(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=1800,t=1e3,n={petit:{maxHp:2500,floors:1,slots:3},moyen:{maxHp:5e3,floors:2,slots:4},grand:{maxHp:12800,floors:4,slots:6},geant:{maxHp:3e4,floors:6,slots:8}},r={commune:{force:1e3,places:1,recoveryMin:20},rare:{force:1500,places:2,recoveryMin:45},epique:{force:2200,places:3,recoveryMin:90},legendaire:{force:3e3,places:4,recoveryMin:180}},i=1500,a=1200,o={influenceur:{label:`Influenceur`,tag:`INF`,hp:220,dpsDefense:14,dpsBuildingTable:14,moveTicks:20,area:!0,overFirewall:!1,taunt:!1,cutOnArrival:!1,huntsDefenses:!0,rushServer:!1,reach:1},hacker:{label:`Hacker`,tag:`HCK`,hp:180,dpsDefense:55,dpsBuildingTable:6,moveTicks:20,area:!1,overFirewall:!1,taunt:!1,cutOnArrival:!0,huntsDefenses:!0,rushServer:!1,reach:2},star:{label:`Star`,tag:`STR`,hp:900,dpsDefense:8,dpsBuildingTable:18,moveTicks:30,area:!1,overFirewall:!1,taunt:!0,cutOnArrival:!1,huntsDefenses:!1,rushServer:!1,reach:1},viral:{label:`Viral`,tag:`VRL`,hp:260,dpsDefense:10,dpsBuildingTable:24,moveTicks:12,area:!1,overFirewall:!0,taunt:!1,cutOnArrival:!1,huntsDefenses:!1,rushServer:!0,reach:1}},s={reseaux:`influenceur`,video:`influenceur`,musique:`influenceur`,mode:`influenceur`,jeux:`influenceur`,tech:`hacker`,ia:`hacker`,sciences:`hacker`,forums:`hacker`,savoir:`hacker`,sport:`star`,culture:`star`,actu:`star`,auto:`star`};function c(e){return s[e]??`viral`}var l={antivirus:{label:`Antivirus`,tag:`AV`,hp:700,damage:35,range:2,slow:0},parefeu:{label:`Pare-feu`,tag:`FW`,hp:1800,damage:0,range:1,slow:0},potdemiel:{label:`Pot de miel`,tag:`HP`,hp:0,damage:300,range:1,slow:0},scanner:{label:`Scanner`,tag:`SC`,hp:500,damage:0,range:4,slow:400}},u=1150;function d(e){let t=300;for(let n=0;n<e;n++)t=Math.round(t*u/1e3);return t}var f=2e4,p=[{id:`netflix`,name:`Netflix`,district:`video`,size:`grand`,price:12e3,logo:`/logos/netflix.png`,owner:`Lina`,defenses:[{kind:`antivirus`,face:0,floor:2},{kind:`antivirus`,face:2,floor:1},{kind:`parefeu`,face:3,floor:1},{kind:`potdemiel`,face:1,floor:1},{kind:`scanner`,face:0,floor:3}]},{id:`discord`,name:`Discord`,district:`jeux`,size:`moyen`,price:4500,logo:`/logos/discord.png`,owner:`Lina`,defenses:[{kind:`antivirus`,face:0,floor:1},{kind:`parefeu`,face:2,floor:1},{kind:`scanner`,face:1,floor:2},{kind:`potdemiel`,face:3,floor:1}]},{id:`blogger-com`,name:`Blogger`,district:`reseaux`,size:`petit`,price:2e3,logo:`/logos/blogger-com.png`,owner:`Lina`,defenses:[{kind:`antivirus`,face:0,floor:1},{kind:`potdemiel`,face:2,floor:1},{kind:`parefeu`,face:1,floor:1}]},{id:`google`,name:`Google`,district:`savoir`,size:`geant`,price:15e4,logo:`/logos/google.png`,owner:`Lina`,defenses:[{kind:`antivirus`,face:0,floor:2},{kind:`antivirus`,face:1,floor:4},{kind:`antivirus`,face:2,floor:1},{kind:`parefeu`,face:3,floor:1},{kind:`parefeu`,face:1,floor:1},{kind:`potdemiel`,face:2,floor:2},{kind:`scanner`,face:0,floor:4},{kind:`scanner`,face:2,floor:5}]}];function m(e){return e.defenses.map((n,r)=>({id:`${e.id}-${n.kind}-${r}`,kind:n.kind,face:n.face,floor:n.floor,hp:l[n.kind].hp*t}))}var h=[{celebId:`ronaldo`,copies:0},{celebId:`squeezie`,copies:1},{celebId:`ishowspeed`,copies:2},{celebId:`amixem`,copies:4},{celebId:`mister-v`,copies:3},{celebId:`sam-altman`,copies:2},{celebId:`jamy`,copies:5},{celebId:`pokimane`,copies:3},{celebId:`hugo-decrypte`,copies:1},{celebId:`tibo-inshape`,copies:4},{celebId:`bear-grylls`,copies:6},{celebId:`salt-bae`,copies:4}];function g(e){let t=e>>>0,n=()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),(e^e>>>14)>>>0};return{nextU32:n,int(e,t){let r=t-e+1;return e+n()%r}}}var _=2048,v=4095,y=-1;function b(e){return Math.floor((e+2)/5)*5}function x(e,n,i){let s=c(n),u=o[s],d=r[e].force,f=n===i,p=1e3-l.scanner.slow,m=e=>f?e*a/1e3:e,h=Math.floor(u.dpsDefense*t*d/1e4),g=Math.floor(u.dpsBuildingTable*55*d/1e4),_=e=>Math.floor(e*p/1e3),v=Math.floor(1e3/u.moveTicks);return{role:s,hp:Math.floor(u.hp*t*d/1e3),dmgDefense:m(b(h)),dmgDefenseSlow:m(b(_(h))),dmgBuilding:m(b(g)),dmgBuildingSlow:m(b(_(g))),speed:v,speedSlow:Math.floor(v*p/1e3),affinity:f}}var S=class{floors;top;building;units=[];defenses=[];events=[];tick=0;hp;done=!1;endReason=null;endTick;rng;byRef=new Map;pendingPoses=[];pendingExt=[];extCounter=0;crewAccepted=0;slots;acc=new Float64Array;accTouched=[];accW=0;accDefCap=0;scannersBuf=[];active=[];faceDefs=[[],[],[],[]];aliveDeployed=0;startHp;undeployed;constructor(t){let r=t.building;this.building=r;let i=n[r.size];this.floors=i.floors,this.top=i.floors+1,this.slots=i.slots,this.hp=r.hp,this.startHp=r.hp,this.rng=g(t.seed),this.endTick=Math.min(e,t.endTick??1800),t.squad.forEach(e=>{if(this.byRef.has(e.ref))return;let t=x(e.rarity,e.district,r.district),n={idx:this.units.length,ref:e.ref,celebId:e.celebId,rarity:e.rarity,isOriginal:e.isOriginal,role:t.role,maxHp:t.hp,hp:t.hp,deployed:!1,alive:!0,face:0,level:0,moving:!1,moveTo:0,progress:0,slowed:!1,jitter:0,target:y,dealtBuilding:0,dealtDefenses:0,accB:0,cutUsed:!1,st:t,rs:o[t.role]};this.units.push(n),this.byRef.set(e.ref,n)}),this.undeployed=this.units.length,this.resizeAcc(r.defenses.length+8);for(let e of r.defenses)this.pushDefense(e.id,e.kind,e.face,e.floor,e.hp,0,`base`,r.id);for(let e of t.poses??[])this.addPose(e);for(let e of t.externals??[])this.addExternal(e);this.units.length===0&&this.finish(`wiped`)}addPose(e){if(this.done||e.tick<this.tick||!Number.isInteger(e.tick)||e.face<0||e.face>3)return!1;let t=this.byRef.get(e.unitRef);return!t||t.deployed||this.pendingPoses.some(t=>t.unitRef===e.unitRef)?!1:(C(this.pendingPoses,{tick:e.tick,unitRef:e.unitRef,face:e.face}),!0)}addExternal(e){return this.done||e.tick<this.tick||!Number.isInteger(e.tick)||e.floor<1||e.floor>this.floors?!1:(C(this.pendingExt,{...e}),!0)}get handCount(){return this.undeployed}abandon(){this.done||(this.endTick=this.tick,this.finish(`abandon`))}step(){if(this.done)return[];let e=this.events.length;return this.stepInternal(),this.events.slice(e)}stepInternal(){let e=this.tick;for(;this.pendingExt.length&&this.pendingExt[0].tick===e;)this.applyExternal(this.pendingExt.shift());for(;this.pendingPoses.length&&this.pendingPoses[0].tick===e;)this.applyPose(this.pendingPoses.shift());let t=this.defenses;for(let n=0;n<t.length;n++){let r=t[n];r.target=y,!(r.destroyed||e<r.activeFrom||e<r.cutUntil)&&r.kind===`antivirus`&&this.antivirusFire(r)}let n=this.scannersBuf,r=0;for(let i=0;i<t.length;i++){let a=t[i];a.kind===`scanner`&&!a.destroyed&&e>=a.activeFrom&&e>=a.cutUntil&&(n[r++]=a)}let i=this.active.slice(),a=l.scanner.range;for(let t=0;t<i.length;t++){let o=i[t];if(o.alive){o.target=y,o.slowed=!1;for(let e=0;e<r;e++){let t=n[e];if(this.dist(t.face,t.floor,o.face,o.level)<=a){o.slowed=!0;break}}if(this.unitAct(o,e),this.hp<=0)break}}(e+1)%10==0&&this.flush(e),this.tick=e+1,this.hp<=0?this.finish(`stolen`):this.tick>=this.endTick?this.finish(this.endTick<1800?`abandon`:`timeout`):this.undeployed===0&&this.aliveDeployed===0&&this.finish(`wiped`)}runToEnd(){for(;!this.done;)this.stepInternal()}result(){let e=[],t=[],n=[];for(let r of this.defenses){if(r.source===`crew`){r.destroyed&&n.push(r.id);continue}r.destroyed?e.push(r.id):t.push({id:r.id,kind:r.kind,face:r.face,floor:r.floor,hp:r.hp})}let r=this.units.map(e=>({ref:e.ref,celebId:e.celebId,rarity:e.rarity,isOriginal:e.isOriginal,fate:e.deployed?e.alive?`survived`:e.isOriginal?`ko`:`destroyed`:`unused`,dealtBuilding:e.dealtBuilding,dealtDefenses:e.dealtDefenses}));return{finalHp:Math.max(0,this.hp),damage:this.startHp-Math.max(0,this.hp),stolen:this.hp<=0,endTick:this.tick,endReason:this.endReason??`timeout`,destroyedDefenses:e,defensesAfter:t,crewReinforcements:this.crewAccepted,crewLost:n,units:r,events:this.events.slice()}}dist(e,t,n,r){let i=this.top;if(t===i&&r===i)return 0;if(t===i)return i-r;if(r===i)return i-t;let a=e>n?e-n:n-e;return a>2&&(a=4-a),a*2+(t>r?t-r:r-t)}pushDefense(e,n,r,i,a,o,s,c){let u=l[n].hp*t;this.defenses.length>=this.accDefCap&&this.resizeAcc(this.accDefCap*2);let d={idx:this.defenses.length,id:e,kind:n,face:r,floor:i,maxHp:u,hp:n===`potdemiel`?0:Math.min(a,u),destroyed:!1,activeFrom:o,cutUntil:0,armed:n===`potdemiel`,source:s,by:c,target:y};return this.defenses.push(d),n!==`potdemiel`&&this.faceDefs[r].push(d),d}applyExternal(e){let n=e.id??`ext${this.extCounter}`;this.extCounter++;let r=this.tick;if(e.source===`crew`&&this.crewAccepted>=3){this.events.push({t:r,k:`refused`,reason:`max-crew`,by:e.by,kind:e.kind});return}if(e.source===`owner`&&this.defenses.filter(e=>e.source!==`crew`&&!e.destroyed).length>=this.slots){this.events.push({t:r,k:`refused`,reason:`no-slot`,by:e.by,kind:e.kind});return}e.source===`crew`&&this.crewAccepted++;let i=this.pushDefense(n,e.kind,e.face,e.floor,l[e.kind].hp*t,r,e.source,e.by);this.events.push({t:r,k:`reinforce`,def:i.id,kind:i.kind,face:i.face,floor:i.floor,source:e.source,by:e.by,hp:i.hp})}applyPose(e){let t=this.byRef.get(e.unitRef);if(!t||t.deployed)return;let n=this.tick;t.deployed=!0,this.undeployed--,this.aliveDeployed++;let r=this.active.length;for(;r>0&&this.active[r-1].idx>t.idx;)r--;if(this.active.splice(r,0,t),t.face=e.face,t.level=0,t.jitter=this.rng.int(-400,400),this.events.push({t:n,k:`spawn`,unit:t.ref,face:t.face,jitter:t.jitter}),t.rs.cutOnArrival&&!t.cutUsed){let e=null,r=1e9;for(let i of this.defenses){if(i.destroyed||i.kind===`potdemiel`||n<i.activeFrom||n<i.cutUntil)continue;let a=this.dist(i.face,i.floor,t.face,t.level);a<r&&(r=a,e=i)}e&&(t.cutUsed=!0,e.cutUntil=n+40,this.events.push({t:n,k:`cut`,unit:t.ref,def:e.id,until:e.cutUntil}))}}antivirusFire(e){let n=l.antivirus.range,r=null,i=!1,a=1e9,o=this.active;for(let t=0;t<o.length;t++){let s=o[t],c=this.dist(e.face,e.floor,s.face,s.level);if(c>n)continue;let l=s.rs.taunt;(r===null||l&&!i||l===i&&c<a)&&(r=s,i=l,a=c)}if(!r)return;e.target=r.idx;let s=Math.floor(l.antivirus.damage*t/10);this.hitUnit(e,r,s)}hitUnit(e,t,n){let r=Math.min(n,t.hp);t.hp-=r,this.accumulate(_+e.idx,t.idx,r),t.hp<=0&&this.killUnit(t)}killUnit(e){e.alive=!1,e.moving=!1,this.aliveDeployed--,this.active.splice(this.active.indexOf(e),1),this.flush(this.tick),this.events.push({t:this.tick,k:`down`,unit:e.ref,fate:e.isOriginal?`ko`:`destroyed`})}hitDefense(e,t,n){if(t.destroyed)return;let r=Math.min(n,t.hp);if(t.hp-=r,e.dealtDefenses+=r,this.accumulate(e.idx,_+t.idx,r),t.hp<=0){t.destroyed=!0;let e=this.faceDefs[t.face];e.splice(e.indexOf(t),1),this.flush(this.tick),this.events.push({t:this.tick,k:`defDown`,def:t.id})}}hitBuilding(e){let t=e.slowed?e.st.dmgBuildingSlow:e.st.dmgBuilding,n=Math.min(t,this.hp);n<=0||(this.hp-=n,e.dealtBuilding+=n,e.target=v,e.accB===0&&this.accTouched.push(-1-e.idx),e.accB+=n)}startMove(e){e.moving=!0,e.moveTo=e.level+1,e.progress=0,this.events.push({t:this.tick,k:`move`,unit:e.ref,from:e.level,to:e.moveTo})}unitAct(e,t){e.moving||this.decide(e,t),e.moving&&(e.progress+=e.slowed?e.st.speedSlow:e.st.speed,e.progress>=1e3&&(e.level=e.moveTo,e.moving=!1,e.progress=0,this.events.push({t,k:`arrive`,unit:e.ref,level:e.level}),this.checkTraps(e,t)))}decide(e,t){let n=e.rs;if(n.rushServer){e.level<this.top?this.startMove(e):this.hitBuilding(e);return}let r=e.slowed?e.st.dmgDefenseSlow:e.st.dmgDefense,i=null,a=1e9,o=0,s=null,c=!1,l=e.level<=this.floors,u=this.faceDefs[e.face];for(let r=0;r<u.length;r++){let d=u[r];if(t<d.activeFrom)continue;d.kind===`parefeu`&&d.floor===e.level+1&&(s=d);let f=d.floor>e.level?d.floor-e.level:e.level-d.floor;l&&f<=n.reach?(o++,f<a&&(a=f,i=d)):d.floor>e.level+n.reach&&(c=!0)}if(n.reach>=2&&l&&e.level>=1)for(let n of[(e.face+1)%4,(e.face+3)%4]){let r=this.faceDefs[n];for(let n=0;n<r.length;n++){let s=r[n];t<s.activeFrom||s.floor!==e.level||(o++,(2<a||a===2&&i&&s.idx<i.idx&&i.face!==e.face)&&(a=2,i=s))}}if(e.level===0){s?(e.target=_+s.idx,n.area?this.hitAllInReach(e,t,r):this.hitDefense(e,n.huntsDefenses&&i?i:s,r)):this.startMove(e);return}if(!n.huntsDefenses){this.hitBuilding(e);return}if(o>0&&i){n.area?(this.hitAllInReach(e,t,r),this.hitBuilding(e)):this.hitDefense(e,i,r),e.target=_+i.idx;return}if(!s&&e.level<this.floors&&c){this.startMove(e);return}this.hitBuilding(e)}hitAllInReach(e,t,n){if(e.level>this.floors)return;let r=this.faceDefs[e.face].slice();for(let i of r)i.destroyed||t<i.activeFrom||(i.floor>e.level?i.floor-e.level:e.level-i.floor)<=1&&this.hitDefense(e,i,n)}checkTraps(e,n){if(!(e.level<1||e.level>this.floors))for(let r of this.defenses){if(r.kind!==`potdemiel`||!r.armed||r.destroyed||n<r.activeFrom||n<r.cutUntil||r.face!==e.face||r.floor!==e.level)continue;r.armed=!1,this.events.push({t:n,k:`trap`,def:r.id,face:r.face,floor:r.floor});let i=l.potdemiel.damage*t;for(let e of this.active.slice())this.dist(r.face,r.floor,e.face,e.level)<=l.potdemiel.range&&this.hitUnit(r,e,i)}}accIndex(e){let t=this.units.length;return e===v?t+this.accDefCap:e>=_?t+(e-_):e}resizeAcc(e){this.flushAccOnly(),this.accDefCap=e,this.accW=this.units.length+e+1,this.acc=new Float64Array(this.accW*this.accW)}accumulate(e,t,n){if(n<=0)return;let r=this.accIndex(e)*this.accW+this.accIndex(t);this.acc[r]===0&&this.accTouched.push(r),this.acc[r]+=n}accCode(e){let t=this.units.length;return e<t?e:e===t+this.accDefCap?v:_+(e-t)}flushAccOnly(){this.accTouched.length&&this.flush(Math.max(0,this.tick-1))}codeId(e){return e===v?`B`:e>=_?this.defenses[e-_].id:this.units[e].ref}codeHp(e){return e===v?Math.max(0,this.hp):e>=_?this.defenses[e-_].hp:this.units[e].hp}flush(e){if(this.accTouched.length===0)return;let t=this.accW;for(let n of this.accTouched){if(n<0){let t=this.units[-1-n];this.events.push({t:e,k:`dmg`,src:t.ref,tgt:`B`,amt:t.accB,hp:Math.max(0,this.hp)}),t.accB=0;continue}let r=this.acc[n];this.acc[n]=0;let i=this.accCode(Math.floor(n/t)),a=this.accCode(n%t);this.events.push({t:e,k:`dmg`,src:this.codeId(i),tgt:this.codeId(a),amt:r,hp:this.codeHp(a)})}this.accTouched.length=0}finish(e){this.done||(this.flush(Math.max(0,this.tick-1)),this.done=!0,this.endReason=e,this.events.push({t:this.tick,k:`end`,reason:e,hp:Math.max(0,this.hp)}))}};function C(e,t){let n=e.length;for(;n>0&&e[n-1].tick>t.tick;)n--;e.splice(n,0,t)}function w(e){let t=new S(e);return t.runToEnd(),t.result()}function T(e,t){if(t<=0||e.hp>=e.maxHp)return e;let n=Math.floor(e.maxHp*50*t/36e8);return{...e,hp:Math.min(e.maxHp,e.hp+n)}}function E(e,t){return t.stolen?{...e,hp:e.maxHp,defenses:[]}:{...e,hp:t.finalHp,defenses:t.defensesAfter.map(e=>({...e}))}}function D(e,t){if(t===`unused`||t===`destroyed`)return 0;let n=r[e].recoveryMin*6e4;return t===`ko`?Math.floor(n*i/1e3):n}function O(e){return e.reduce((e,t)=>e+r[t.rarity].places,0)}function k(e,t,n){let r=e.map(e=>({...e})),i=new Map(r.map(e=>[e.celebId,e]));for(let e of t){let t=i.get(e.celebId);if(t){if(e.isOriginal){let r=D(e.rarity,e.fate);r>0&&(t.recoverUntil=Math.max(t.recoverUntil,n+r))}else e.fate===`destroyed`&&(t.copies=Math.max(0,t.copies-1))}}return r}var A=12345;function j(e){let t=[0,0,0,0];for(let n of e.defenses)n.kind===`antivirus`?t[n.face]+=2:(n.kind===`scanner`||n.kind===`parefeu`&&n.floor===1)&&(t[n.face]+=1);let n=0;for(let e=1;e<4;e++)t[e]<t[n]&&(n=e);return n}function ee(e,t,n){if(!t&&n===void 0)return e.map((e,t)=>({tick:0,unitRef:e.ref,face:t%4}));let r=n??j(t),i=e=>{let t=c(e.district);return t===`star`||t===`hacker`};return[...e.filter(i),...e.filter(e=>!i(e))].map(e=>({tick:i(e)?0:30,unitRef:e.ref,face:r}))}function M(e,n){if(n.length===0)return{damage:0,hpAfter:Math.ceil(e.hp/t),wouldSteal:!1,defensesDestroyed:0,unitsLost:0};let r=0,i=0,a=0,o=0;for(let t=0;t<4;t++){let s=w({building:e,squad:n,poses:ee(n,e,t),externals:[],seed:A});r+=s.damage,i+=s.destroyedDefenses.length,a+=s.units.filter(e=>e.fate===`ko`||e.fate===`destroyed`).length,s.stolen&&o++}let s=Math.floor(r/4);return{damage:Math.floor(s/t),hpAfter:Math.ceil((e.hp-s)/t),wouldSteal:o>=2,defensesDestroyed:Math.round(i/4),unitsLost:Math.round(a/4)}}var N=(e,t,n,r,i)=>({id:e,name:t,district:n,rarity:r,img:`/celebs/${e}.jpg`,...i?{wiki:i}:{}}),te=[N(`ronaldo`,`Cristiano Ronaldo`,`sport`,`legendaire`),N(`messi`,`Lionel Messi`,`sport`,`legendaire`),N(`beyonce`,`Beyoncé`,`musique`,`legendaire`),N(`taylor-swift`,`Taylor Swift`,`musique`,`legendaire`),N(`elon-musk`,`Elon Musk`,`tech`,`legendaire`),N(`mrbeast`,`MrBeast`,`video`,`legendaire`),N(`the-weeknd`,`The Weeknd`,`musique`,`legendaire`),N(`usain-bolt`,`Usain Bolt`,`sport`,`legendaire`),N(`dwayne-johnson`,`Dwayne Johnson`,`culture`,`legendaire`),N(`mbappe`,`Kylian Mbappé`,`sport`,`epique`),N(`lebron`,`LeBron James`,`sport`,`epique`),N(`rihanna`,`Rihanna`,`musique`,`epique`),N(`drake`,`Drake`,`musique`,`epique`,`Drake (rappeur)`),N(`billie-eilish`,`Billie Eilish`,`musique`,`epique`),N(`ariana-grande`,`Ariana Grande`,`musique`,`epique`),N(`ed-sheeran`,`Ed Sheeran`,`musique`,`epique`),N(`shakira`,`Shakira`,`musique`,`epique`),N(`bad-bunny`,`Bad Bunny`,`musique`,`epique`),N(`zuckerberg`,`Mark Zuckerberg`,`reseaux`,`epique`),N(`bill-gates`,`Bill Gates`,`tech`,`epique`),N(`khaby-lame`,`Khaby Lame`,`reseaux`,`epique`),N(`squeezie`,`Squeezie`,`video`,`epique`),N(`kim-kardashian`,`Kim Kardashian`,`mode`,`epique`),N(`dicaprio`,`Leonardo DiCaprio`,`culture`,`epique`),N(`tom-cruise`,`Tom Cruise`,`culture`,`epique`),N(`jackie-chan`,`Jackie Chan`,`culture`,`epique`),N(`serena-williams`,`Serena Williams`,`sport`,`epique`),N(`gordon-ramsay`,`Gordon Ramsay`,`cuisine`,`epique`),N(`hamilton`,`Lewis Hamilton`,`auto`,`epique`),N(`oprah`,`Oprah Winfrey`,`actu`,`epique`),N(`warren-buffett`,`Warren Buffett`,`finance`,`epique`),N(`sundar-pichai`,`Sundar Pichai`,`tech`,`epique`),N(`steve-jobs`,`Steve Jobs`,`tech`,`epique`),N(`einstein`,`Albert Einstein`,`sciences`,`epique`),N(`stephen-hawking`,`Stephen Hawking`,`sciences`,`epique`),N(`marie-curie`,`Marie Curie`,`sciences`,`epique`),N(`newton`,`Isaac Newton`,`sciences`,`epique`),N(`schumacher`,`Michael Schumacher`,`auto`,`epique`),N(`karl-lagerfeld`,`Karl Lagerfeld`,`mode`,`epique`),N(`coco-chanel`,`Coco Chanel`,`mode`,`epique`),N(`kylie-jenner`,`Kylie Jenner`,`shopping`,`epique`),N(`pewdiepie`,`PewDiePie`,`jeux`,`epique`),N(`paris-hilton`,`Paris Hilton`,`vie`,`epique`),N(`neymar`,`Neymar`,`sport`,`rare`),N(`benzema`,`Karim Benzema`,`sport`,`rare`),N(`djokovic`,`Novak Djokovic`,`sport`,`rare`),N(`haaland`,`Erling Haaland`,`sport`,`rare`),N(`lewandowski`,`Robert Lewandowski`,`sport`,`rare`),N(`zlatan`,`Zlatan Ibrahimović`,`sport`,`rare`),N(`gims`,`Gims`,`musique`,`rare`),N(`aya-nakamura`,`Aya Nakamura`,`musique`,`rare`),N(`dua-lipa`,`Dua Lipa`,`musique`,`rare`),N(`rosalia`,`Rosalía`,`musique`,`rare`),N(`inoxtag`,`Inoxtag`,`jeux`,`rare`),N(`gotaga`,`Gotaga`,`jeux`,`rare`),N(`ninja`,`Ninja`,`jeux`,`rare`,`Tyler Blevins`),N(`ishowspeed`,`IShowSpeed`,`video`,`rare`),N(`kai-cenat`,`Kai Cenat`,`video`,`rare`),N(`charli-damelio`,`Charli D’Amelio`,`reseaux`,`rare`),N(`emma-watson`,`Emma Watson`,`culture`,`rare`),N(`scarlett-johansson`,`Scarlett Johansson`,`culture`,`rare`),N(`sam-altman`,`Sam Altman`,`ia`,`rare`),N(`jensen-huang`,`Jensen Huang`,`ia`,`rare`),N(`bernard-arnault`,`Bernard Arnault`,`finance`,`rare`),N(`cyril-lignac`,`Cyril Lignac`,`cuisine`,`rare`),N(`zendaya`,`Zendaya`,`culture`,`rare`),N(`greta-thunberg`,`Greta Thunberg`,`environnement`,`rare`),N(`neil-tyson`,`Neil deGrasse Tyson`,`sciences`,`rare`),N(`lena-situations`,`Léna Situations`,`vie`,`rare`),N(`verstappen`,`Max Verstappen`,`auto`,`rare`),N(`ayrton-senna`,`Ayrton Senna`,`auto`,`rare`),N(`feynman`,`Richard Feynman`,`sciences`,`rare`),N(`demis-hassabis`,`Demis Hassabis`,`ia`,`rare`),N(`geoffrey-hinton`,`Geoffrey Hinton`,`ia`,`rare`),N(`yann-lecun`,`Yann LeCun`,`ia`,`rare`),N(`lex-fridman`,`Lex Fridman`,`savoir`,`rare`),N(`tim-cook`,`Tim Cook`,`tech`,`rare`),N(`jack-ma`,`Jack Ma`,`shopping`,`rare`),N(`christine-lagarde`,`Christine Lagarde`,`finance`,`rare`),N(`hugo-decrypte`,`HugoDécrypte`,`actu`,`rare`,`Hugo Travers`),N(`anthony-bourdain`,`Anthony Bourdain`,`voyage`,`rare`),N(`xqc`,`xQc`,`forums`,`rare`,`XQc`),N(`emma-chamberlain`,`Emma Chamberlain`,`vie`,`rare`),N(`chiara-ferragni`,`Chiara Ferragni`,`vie`,`rare`),N(`jane-goodall`,`Jane Goodall`,`environnement`,`rare`),N(`jamie-oliver`,`Jamie Oliver`,`cuisine`,`rare`),N(`martha-stewart`,`Martha Stewart`,`maison`,`rare`),N(`steve-irwin`,`Steve Irwin`,`animaux`,`rare`),N(`anna-wintour`,`Anna Wintour`,`mode`,`rare`),N(`gigi-hadid`,`Gigi Hadid`,`mode`,`rare`),N(`naomi-campbell`,`Naomi Campbell`,`mode`,`rare`),N(`kendall-jenner`,`Kendall Jenner`,`famille`,`rare`),N(`darwin`,`Charles Darwin`,`sciences`,`rare`),N(`tesla`,`Nikola Tesla`,`sciences`,`rare`),N(`valentino-rossi`,`Valentino Rossi`,`auto`,`rare`),N(`grumpy-cat`,`Grumpy Cat`,`animaux`,`rare`),N(`kate-moss`,`Kate Moss`,`mode`,`rare`),N(`cousteau`,`Jacques-Yves Cousteau`,`environnement`,`rare`),N(`hachiko`,`Hachikō`,`animaux`,`rare`),N(`alain-prost`,`Alain Prost`,`auto`,`rare`),N(`julia-child`,`Julia Child`,`cuisine`,`rare`),N(`robuchon`,`Joël Robuchon`,`cuisine`,`rare`),N(`jim-henson`,`Jim Henson`,`famille`,`rare`),N(`fred-rogers`,`Fred Rogers`,`famille`,`rare`),N(`dr-oz`,`Mehmet Oz`,`sante`,`rare`),N(`casey-neistat`,`Casey Neistat`,`vie`,`rare`),N(`ibai`,`Ibai Llanos`,`forums`,`rare`),N(`philippe-starck`,`Philippe Starck`,`maison`,`rare`),N(`jul`,`Jul`,`musique`,`commune`,`Jul (rappeur)`),N(`orelsan`,`Orelsan`,`musique`,`commune`),N(`tibo-inshape`,`Tibo InShape`,`sport`,`commune`),N(`amixem`,`Amixem`,`video`,`commune`),N(`michou`,`Michou`,`jeux`,`commune`,`Michou (vidéaste)`),N(`mister-v`,`Mister V`,`video`,`commune`),N(`bear-grylls`,`Bear Grylls`,`voyage`,`commune`),N(`david-attenborough`,`David Attenborough`,`animaux`,`commune`),N(`marie-kondo`,`Marie Kondo`,`maison`,`commune`),N(`bill-nye`,`Bill Nye`,`savoir`,`commune`),N(`andrew-huberman`,`Andrew Huberman`,`sante`,`commune`),N(`pokimane`,`Pokimane`,`forums`,`commune`),N(`kris-jenner`,`Kris Jenner`,`famille`,`commune`),N(`jeff-bezos`,`Jeff Bezos`,`shopping`,`commune`),N(`jamy`,`Jamy Gourmaud`,`savoir`,`commune`,`Jamy Gourmaud`),N(`hank-green`,`Hank Green`,`savoir`,`commune`),N(`dr-nozman`,`Dr Nozman`,`savoir`,`commune`,`Dr Nozman`),N(`addison-rae`,`Addison Rae`,`reseaux`,`commune`),N(`bella-poarch`,`Bella Poarch`,`reseaux`,`commune`),N(`tobias-lutke`,`Tobias Lütke`,`shopping`,`commune`),N(`mukesh-ambani`,`Mukesh Ambani`,`shopping`,`commune`),N(`anderson-cooper`,`Anderson Cooper`,`actu`,`commune`),N(`trevor-noah`,`Trevor Noah`,`actu`,`commune`),N(`jean-pierre-pernaut`,`Jean-Pierre Pernaut`,`actu`,`commune`),N(`george-soros`,`George Soros`,`finance`,`commune`),N(`ray-dalio`,`Ray Dalio`,`finance`,`commune`),N(`nas-daily`,`Nas Daily`,`voyage`,`commune`,`Nuseir Yassin`),N(`rick-steves`,`Rick Steves`,`voyage`,`commune`),N(`mike-horn`,`Mike Horn`,`voyage`,`commune`),N(`amouranth`,`Amouranth`,`forums`,`commune`),N(`valkyrae`,`Valkyrae`,`forums`,`commune`),N(`disguised-toast`,`Disguised Toast`,`forums`,`commune`),N(`zoella`,`Zoe Sugg`,`vie`,`commune`,`Zoe Sugg`),N(`enjoyphoenix`,`EnjoyPhoenix`,`vie`,`commune`,`EnjoyPhoenix`),N(`al-gore`,`Al Gore`,`environnement`,`commune`),N(`yann-arthus-bertrand`,`Yann Arthus-Bertrand`,`environnement`,`commune`),N(`hugo-clement`,`Hugo Clément`,`environnement`,`commune`,`Hugo Clément`),N(`michel-cymes`,`Michel Cymes`,`sante`,`commune`),N(`deepak-chopra`,`Deepak Chopra`,`sante`,`commune`),N(`anthony-fauci`,`Anthony Fauci`,`sante`,`commune`),N(`jillian-michaels`,`Jillian Michaels`,`sante`,`commune`),N(`paul-bocuse`,`Paul Bocuse`,`cuisine`,`commune`),N(`philippe-etchebest`,`Philippe Etchebest`,`cuisine`,`commune`),N(`sebastien-loeb`,`Sébastien Loeb`,`auto`,`commune`,`Sébastien Loeb`),N(`joanna-gaines`,`Joanna Gaines`,`maison`,`commune`),N(`stephane-plaza`,`Stéphane Plaza`,`maison`,`commune`,`Stéphane Plaza`),N(`valerie-damidot`,`Valérie Damidot`,`maison`,`commune`,`Valérie Damidot`),N(`cesar-millan`,`Cesar Millan`,`animaux`,`commune`),N(`jack-hanna`,`Jack Hanna`,`animaux`,`commune`),N(`bindi-irwin`,`Bindi Irwin`,`animaux`,`commune`),N(`kourtney-kardashian`,`Kourtney Kardashian`,`famille`,`commune`),N(`khloe-kardashian`,`Khloé Kardashian`,`famille`,`commune`),N(`caitlyn-jenner`,`Caitlyn Jenner`,`famille`,`commune`),N(`alonso`,`Fernando Alonso`,`auto`,`commune`),N(`carl-sagan`,`Carl Sagan`,`sciences`,`commune`),N(`dolly`,`Dolly la brebis`,`animaux`,`commune`,`Dolly (brebis)`),N(`giorgio-armani`,`Giorgio Armani`,`mode`,`commune`),N(`donatella-versace`,`Donatella Versace`,`mode`,`commune`),N(`kabosu`,`Kabosu`,`animaux`,`commune`,`Kabosu (dog)`),N(`leclerc`,`Charles Leclerc`,`auto`,`commune`),N(`jeremy-clarkson`,`Jeremy Clarkson`,`auto`,`commune`),N(`virgil-abloh`,`Virgil Abloh`,`mode`,`commune`),N(`thomas-pesquet`,`Thomas Pesquet`,`sciences`,`commune`),N(`salt-bae`,`Salt Bae`,`cuisine`,`commune`,`Nusret Gökçe`),N(`nigella-lawson`,`Nigella Lawson`,`cuisine`,`commune`),N(`jojo-siwa`,`JoJo Siwa`,`famille`,`commune`),N(`like-nastya`,`Like Nastya`,`famille`,`commune`),N(`moo-deng`,`Moo Deng`,`animaux`,`commune`),N(`shroud`,`Shroud`,`forums`,`commune`,`Shroud (streamer)`),N(`hasan-piker`,`Hasan Piker`,`forums`,`commune`),N(`huda-kattan`,`Huda Kattan`,`vie`,`commune`),N(`nikkie-tutorials`,`NikkieTutorials`,`vie`,`commune`),N(`nabilla`,`Nabilla`,`vie`,`commune`,`Nabilla Benattia`),N(`richard-simmons`,`Richard Simmons`,`sante`,`commune`),N(`wim-hof`,`Wim Hof`,`sante`,`commune`),N(`nicolas-hulot`,`Nicolas Hulot`,`environnement`,`commune`),N(`wangari-maathai`,`Wangari Maathai`,`environnement`,`commune`),N(`boyan-slat`,`Boyan Slat`,`environnement`,`commune`),N(`jancovici`,`Jean-Marc Jancovici`,`environnement`,`commune`),N(`thierry-marx`,`Thierry Marx`,`cuisine`,`commune`),N(`boris-cyrulnik`,`Boris Cyrulnik`,`sante`,`commune`),N(`juju-fitcats`,`Juju Fitcats`,`sante`,`commune`),N(`ty-pennington`,`Ty Pennington`,`maison`,`commune`),N(`chip-gaines`,`Chip Gaines`,`maison`,`commune`),N(`monty-don`,`Monty Don`,`maison`,`commune`),N(`andree-putman`,`Andrée Putman`,`maison`,`commune`),N(`zerator`,`ZeratoR`,`forums`,`commune`),N(`kameto`,`Kameto`,`forums`,`commune`),N(`dorothee`,`Dorothée`,`famille`,`commune`,`Dorothée (chanteuse)`)],P=Object.fromEntries(te.map(e=>[e.id,e]));Object.fromEntries(te.map((e,t)=>[e.id,te.length-t]));var ne={google:1,wikipedia:30,bing:31,baidu:86,yahoo:59,yandex:96,duolingo:455,duckduckgo:463,pronote:162367,quizlet:3248,coursera:1211,khan:2225,wolfram:5847,wiktionnaire:1227,babbel:14150,larousse:18532,ecosia:1024,qwant:7149,openclassrooms:36859,lerobert:40564,kartable:420693,maxicours:315997,wikipokemon:56780,facebook:3,whatsapp:55,instagram:11,wechat:2005,x:50,messenger:2217,snapchat:127,telegram:255,linkedin:18,vk:131,threads:1780,tinder:5157,pinterest:11670,signal:2265,bluesky:398,tumblr:158,bereal:19862,bumble:2857,meetic:26449,mastodon:6504,yubo:380475,youtube:9,tiktok:53,netflix:42,disneyplus:805,primevideo:673,imdb:270,twitch:226,max:2909,crunchyroll:2399,appletv:400,canalplus:12832,francetv:8125,dailymotion:434,tf1plus:7415,vimeo:88,paramount:1875,arte:4992,kick:699,plex:1588,letterboxd:1051,allocine:5310,molotov:60762,senscritique:28461,chatgpt:77,gemini:40,claude:427,copilot:240,perplexity:680,deepl:826,midjourney:5071,characterai:956,lechat:294880,huggingface:1113,gmail:40,microsoft:6,apple:10,googlemaps:40,outlook:120,drive:40,github:29,canva:242,zoom:76,wordpress:99,stackoverflow:514,adobe:67,slack:352,notion:2047,dropbox:135,waze:1587,figma:864,wix:631,speedtest:472,trello:1832,ovh:1259,doodle:8402,framasoft:34642,amazon:622,walmart:444,temu:429,aliexpress:411,shein:503,ebay:5237,vinted:2009,etsy:341,ikea:632,zalando:7034,cdiscount:1295,nike:636,leboncoin:1193,fnac:4249,decathlon:6464,carrefour:6188,leroymerlin:1375,darty:6702,rakuten:32560,sephora:27318,boulanger:7529,backmarket:40394,veepee:37231,vestiaire:8574,wish:12736,steam:12120,fortnite:6833,minecraft:2862,roblox:61,discord:169,playstation:611,xbox:811,epicgames:134,nintendo:630,riot:1100,chesscom:872,supercell:435,hoyoverse:2246,poki:1021,nytgames:6280,lichess:1221,crazygames:1093,geoguessr:13766,itchio:725,agario:63109,spotify:63,applemusic:400,youtubemusic:360,amazonmusic:24880,soundcloud:193,shazam:2808,genius:934,deezer:1679,radiofrance:4396,nrj:68775,bandcamp:738,tidal:2418,qobuz:5789,lastfm:2420,skyrock:14896,bbc:220,cnn:202,nytimes:157,guardian:204,reuters:288,lemonde:704,lefigaro:832,bfmtv:1086,franceinfo:5668,ouestfrance:1067,leparisien:2103,"20minutes":4498,brut:113808,huffpost:10929,liberation:4480,konbini:62677,frandroid:27626,mediapart:14529,"01net":20121,numerama:21208,courrierinter:18602,legorafi:231393,paypal:174,binance:997,coinbase:2393,stripe:238,revolut:5358,tradingview:364,yahoofinance:2360,klarna:2301,creditagricole:5713,bnp:45574,boursorama:6233,labanquepostale:7751,societegenerale:75947,n26:20063,lydia:329447,booking:276,airbnb:8843,uber:727,tripadvisor:5050,expedia:50686,sncf:11718,skyscanner:19062,ryanair:827,airfrance:15394,blablacar:36671,trainline:4694,abritel:28298,opodo:66924,lonelyplanet:133282,gites:30286,espn:401,nba:2427,flashscore:1652,lequipe:1205,fifa:1382,strava:1978,uefa:3756,transfermarkt:16831,eurosport:7451,sofascore:986,rmcsport:43440,winamax:29650,betclic:55462,psg:21417,footmercato:2914,om:90608,reddit:109,quora:498,fourchan:5807,jeuxvideo:6122,ccm:31437,futura:8864,hardware:1513680,forumauto:609320,indeed:321413,impots:8577,caf:6184,francetravail:10108,servicepublic:4927,meteofrance:1325,seloger:6546,laposte:5112,pagesjaunes:5707,wttj:20638,legifrance:9021,mappy:11312,ornikar:144968,greenpeace:91751,toogoodtogo:579611,wwf:96721,nasaclimate:15480,ademe:13191,ecologiegouv:304887,"350org":25149,reporterre:33201,lpo:43939,surfrider:272894,enercoop:237407,colibris:326022,vert:145662,webmd:963,mayoclinic:901,oms:269,ameli:4769,doctolib:638,doctissimo:17113,msdmanuals:6620,alan:129278,santefr:11658,passeportsante:29649,jdfsante:432040,livi:326986,qare:130789,vidal:30474,pharmalafayette:285368,ubereats:3021,allrecipes:3286,deliveroo:28531,tasty:43199,justeat:195645,hellofresh:102788,thefork:48018,yummly:23535,chefclub:161708,cuisineactuelle:32933,jow:105214,ptitchef:69705,marmiton:7536,"750g":52988,cuisineaz:8432,zara:3342,hm:961,asos:3438,vogue:22868,uniqlo:3823,elle:16577,farfetch:3906,gq:37026,marieclaire:25501,kiabi:7332,balenciaga:26047,sezane:18320,madmoizelle:98458,slipfrancais:208262,tesla:1176,toyota:61809,renault:30133,bmw:98072,peugeot:48506,lacentrale:17606,caradisiac:15233,michelin:88185,norauto:52873,autoplus:41577,aramis:65451,oscaro:18292,autohero:7803,carglass:378970,autopropre:46554,houzz:125187,castorama:17137,maisonsdumonde:13846,manomano:9088,laredoute:11385,conforama:7912,but:7581,bricodepot:19686,westwing:290858,habitat:136628,decofr:96270,cotemaison:95538,truffaut:51502,jardiland:56583,natgeo:39935,zooplus:48436,petfinder:11957,spa:119575,rover:15117,wamiz:123950,"30millions":182524,maxizoo:156313,animalis:74745,santevet:201253,chiensdefrance:90017,ornitho:421296,nasa:387,nature:300,arxiv:475,esa:3230,kurzgesagt:339195,spacecom:4002,cnrs:3227,cern:16862,hubble:21583,scienceetvie:24688,sciencesavenir:32554,citesciences:44977,pourlascience:128130,palaisdecouverte:395512,webtoon:5205,wattpad:791,ticketmaster:40868,goodreads:459,louvre:6182,cultura:15988,billetreduc:56757,orsay:21213,gallica:191760,operaparis:40578,babelio:21665,culturegouv:244953,gallimard:44323,radioclassique:126225,actessud:84932,disney:179340,lego:2257,pbskids:10679,aufeminin:30882,gulli:406790,lumni:46457,vertbaudet:13300,okoo:325e3,magicmaman:90481,parentsfr:63914,hugo:984295,cyrillus:116739,momes:175925,"britannica-com":668,"wikihow-com":1917,"reverso-net":3535,"wordreference-com":4050,"linguee-fr":49813,"lalanguefrancaise-com":165169,"cnrtl-fr":32587,"bescherelle-com":406063,"le-conjugueur-lefigaro-fr":33280,"udemy-com":1883,"edx-org":3564,"futurelearn-com":10444,"skillshare-com":11050,"masterclass-com":11273,"codecademy-com":5699,"brilliant-org":29835,"memrise-com":22346,"busuu-com":16152,"rosettastone-com":25295,"italki-com":18134,"superprof-fr":77428,"acadomia-fr":442627,"schoolmouv-fr":315837,"digischool-fr":233419,"etudier-com":300041,"parcoursup-fr":57239,"onisep-fr":33405,"education-gouv-fr":26884,"ecoledirecte-com":82295,"monlycee-net":308596,"sorbonne-universite-fr":21841,"harvard-edu":320,"mit-edu":231,"stanford-edu":380,"ox-ac-uk":1016,"cam-ac-uk":1506,"polytechnique-edu":69934,"ens-psl-eu":681800,"sciencespo-fr":24212,"wikisource-org":2698,"wikibooks-org":3314,"archive-org":147,"scholar-google-com":40,"researchgate-net":228,"academia-edu":842,"jstor-org":1331,"persee-fr":15690,"cairn-info":8448,"hal-science":7276,"geogebra-org":12182,"desmos-com":7048,"mathway-com":27455,"symbolab-com":39587,"photomath-com":247361,"chegg-com":10331,"coursehero-com":17945,"brainly-com":24132,"nosdevoirs-fr":675552,"ted-com":801,"bigthink-com":9749,"howstuffworks-com":2841,"thoughtco-com":6200,"merriam-webster-com":823,"dictionary-com":3391,"cambridge-org":683,"collinsdictionary-com":6526,"urbandictionary-com":3635,"thesaurus-com":6768,"startpage-com":10528,"brave-com":421,"lilo-org":55298,"skype-com":49,"viber-com":684,"line-me":420,"kakaocorp-com":71772,"weibo-com":305,"qq-com":72,"douyin-com":1381,"xiaohongshu-com":1107,"ok-ru":314,"lemon8-app-com":11215,"nextdoor-com":2823,"meetup-com":1973,"hinge-co":62612,"happn-com":105914,"okcupid-com":14947,"grindr-com":2928,"badoo-com":1784,"match-com":2089,"flickr-com":191,"500px-com":3566,"vsco-co":8635,"deviantart-com":578,"behance-net":515,"dribbble-com":1258,"artstation-com":3647,"medium-com":201,"substack-com":447,"patreon-com":707,"ko-fi-com":2717,"onlyfans-com":851,"linktr-ee":272,"about-me":3140,"gravatar-com":155,"mewe-com":15703,"truthsocial-com":6050,"gab-com":13840,"parler-com":37631,"clubhouse-com":21692,"periscope-tv":27645,"ask-fm":31931,"tellonym-me":42294,"jodel-com":224275,"hulu-com":1908,"peacocktv-com":2530,"sling-com":6772,"fubo-tv":5805,"pluto-tv":1830,"tubitv-com":4374,"rakuten-tv":12691,"mubi-com":12082,"6play-fr":78916,"m6-fr":25319,"mycanal-fr":281783,"lcp-fr":104958,"rmc-bfmtv-com":43440,"rumble-com":2709,"odysee-com":10265,"bilibili-com":345,"nicovideo-jp":3326,"iqiyi-com":1913,"youku-com":942,"viki-com":9229,"animationdigitalnetwork-fr":112214,"wakanim-tv":429590,"rottentomatoes-com":2942,"metacritic-com":8357,"themoviedb-org":1210,"justwatch-com":4615,"betaseries-com":40757,"premiere-fr":57833,"ecranlarge-com":58476,"telerama-fr":20359,"programme-tv-net":1517,"ugc-fr":60259,"pathe-fr":42059,"cgrcinemas-fr":60722,"fandango-com":5585,"amc-com":27056,"hbo-com":4245,"starz-com":21605,"showtime-com":212989,"cbs-com":5889,"nbc-com":4681,"abc-com":5466,"fox-com":3857,"bbc-co-uk":234,"itv-com":2611,"channel4-com":4864,"giphy-com":1099,"tenor-com":2997,"imgur-com":717,"9gag-com":6087,"openai-com":83,"anthropic-com":608,"mistral-ai":7372,"deepmind-google":7039,"meta-ai":10738,"grok-com":2746,"x-ai":4743,"deepseek-com":1254,"qwen-ai":9972,"poe-com":15972,"you-com":22426,"phind-com":109575,"cursor-com":3467,"replit-com":3529,"v0-dev":55008,"lovable-dev":3107,"bolt-new":27935,"runwayml-com":6762,"pika-art":27544,"lumalabs-ai":24044,"synthesia-io":9764,"heygen-com":13995,"elevenlabs-io":3821,"suno-com":2814,"udio-com":40255,"stability-ai":18293,"leonardo-ai":14117,"ideogram-ai":25592,"krea-ai":26607,"playground-com":171015,"civitai-com":11543,"remove-bg":1216,"photoroom-com":9213,"jasper-ai":12175,"copy-ai":18314,"grammarly-com":563,"quillbot-com":3829,"otter-ai":8656,"fireflies-ai":20592,"gamma-app":3982,"tome-app":63766,"beautiful-ai":38873,"janitorai-com":1204,"chai-ml":73684,"replika-com":90711,"pi-ai":109410,"kaggle-com":4622,"paperswithcode-com":43509,"ollama-com":4224,"langchain-com":14913,"mozilla-org":101,"opera-com":91,"vivaldi-com":6849,"icloud-com":52,"onedrive-live-com":920,"box-com":772,"mega-nz":1881,"wetransfer-com":2510,"pcloud-com":4239,"proton-me":2898,"tutanota-com":20231,"orange-fr":1066,"free-fr":585,"sfr-fr":2594,"bouyguestelecom-fr":16354,"sosh-fr":39134,"red-by-sfr-fr":63550,"laposte-net":11817,"gitlab-com":378,"bitbucket-org":2041,"npmjs-com":2033,"pypi-org":2431,"docker-com":512,"kubernetes-io":5153,"python-org":750,"developer-mozilla-org":4040,"w3schools-com":1816,"freecodecamp-org":6492,"leetcode-com":4470,"codepen-io":4009,"jsfiddle-net":11845,"vercel-com":3102,"netlify-com":4227,"heroku-com":5410,"digitalocean-com":550,"aws-amazon-com":960,"azure-microsoft-com":240,"cloud-google-com":40,"godaddy-com":151,"namecheap-com":283,"squarespace-com":549,"shopify-com":176,"webflow-com":2764,"atlassian-com":620,"asana-com":2237,"monday-com":3307,"clickup-com":2708,"airtable-com":2959,"miro-com":2375,"teams-microsoft-com":240,"meet-google-com":40,"webex-com":170,"calendly-com":386,"docusign-com":3300,"typeform-com":1150,"surveymonkey-com":679,"mailchimp-com":734,"hubspot-com":264,"salesforce-com":295,"zendesk-com":370,"intercom-com":1799,"1password-com":1958,"bitwarden-com":4299,"lastpass-com":2511,"nordvpn-com":2472,"expressvpn-com":4786,"protonvpn-com":6466,"avast-com":318,"kaspersky-com":140,"malwarebytes-com":3105,"virustotal-com":3790,"haveibeenpwned-com":6571,"samsung-com":94,"xiaomi-com":153,"huawei-com":437,"sony-com":2098,"lg-com":893,"dell-com":312,"hp-com":298,"lenovo-com":792,"asus-com":721,"nvidia-com":371,"amd-com":1120,"intel-com":438,"logitech-com":1983,"ldlc-com":32147,"materiel-net":99262,"topachat-com":208474,"lesnumeriques-com":14335,"clubic-com":20101,"journaldugeek-com":29775,"korben-info":43772,"theverge-com":846,"techcrunch-com":651,"wired-com":558,"arstechnica-com":1844,"engadget-com":2129,"gsmarena-com":1122,"androidauthority-com":6778,"macrumors-com":4070,"igen-fr":166672,"downdetector-fr":313334,"alibaba-com":316,"target-com":603,"bestbuy-com":784,"costco-com":1007,"homedepot-com":760,"lowes-com":941,"wayfair-com":2532,"newegg-com":5036,"auchan-fr":7352,"e-leclerc":7326,"intermarche-com":17012,"coursesu-com":16248,"lidl-fr":19920,"aldi-fr":151641,"monoprix-fr":37672,"picard-fr":62512,"grandfrais-com":165357,"action-com":1417,"gifi-fr":21707,"lafoirfouille-fr":74239,"joueclub-fr":58707,"smythstoys-com":6902,"electrodepot-fr":9177,"ubaldi-com":97536,"showroomprive-com":8296,"bazarchic-com":251485,"groupon-fr":63028,"dealabs-com":34239,"idealo-fr":17238,"ledenicheur-fr":56354,"igraal-com":53271,"poulpeo-com":201041,"trustpilot-com":353,"avis-verifies-com":35609,"rakuten-com":814,"mercari-com":3881,"depop-com":5960,"poshmark-com":4093,"craigslist-org":788,"gumtree-com":7104,"marktplaats-nl":1225,"kleinanzeigen-de":878,"selency-fr":132540,"label-emmaus-co":106098,"ebay-com":205,"amazon-com":24,"amazon-co-uk":339,"amazon-de":395,"otto-de":972,"bol-com":993,"allegro-pl":675,"mercadolibre-com":1932,"flipkart-com":1005,"jd-com":954,"taobao-com":441,"tmall-com":2524,"rakuten-co-jp":574,"redbubble-com":2961,"teepublic-com":3554,"vistaprint-fr":64697,"photoweb-fr":161992,"cheerz-com":251055,"nespresso-com":4773,"adidas-fr":39844,"puma-com":6283,"intersport-fr":8016,"go-sport-com":410956,"steamcommunity-com":425,"gog-com":3319,"ea-com":336,"ubisoft-com":2922,"blizzard-com":1861,"battle-net":1335,"activision-com":4812,"rockstargames-com":2535,"bethesda-net":7843,"square-enix-com":8770,"bandainamcoent-com":51044,"capcom-com":18241,"sega-com":20677,"konami-com":5779,"valvesoftware-com":17005,"leagueoflegends-com":3588,"playvalorant-com":15950,"worldofwarcraft-com":21039,"pokemon-com":3543,"pokemongo-com":11536,"clashroyale-com":15033,"brawlstars-com":17092,"candycrush-com":65033,"king-com":5021,"mojang-com":2739,"curseforge-com":766,"nexusmods-com":974,"moddb-com":10610,"speedrun-com":12897,"howlongtobeat-com":34045,"ign-com":2017,"gamespot-com":2726,"polygon-com":5302,"kotaku-com":5255,"pcgamer-com":5500,"eurogamer-net":7443,"gamekult-com":41509,"millenium-org":100019,"gamergen-com":106416,"dexerto-com":19110,"liquipedia-net":2180,"hltv-org":1132,"op-gg":4265,"tracker-gg":5772,"fandom-com":527,"instant-gaming-com":7001,"g2a-com":5394,"humblebundle-com":8367,"greenmangaming-com":33732,"micromania-fr":49953,"gamestop-com":5001,"coolmathgames-com":8079,"miniclip-com":6302,"friv-com":8301,"kongregate-com":11468,"armorgames-com":26726,"jeux-fr":327513,"slither-io":80218,"krunker-io":38645,"skribbl-io":18221,"jklm-fun":237139,"boardgamearena-com":6962,"boardgamegeek-com":4238,"trictrac-net":161836,"chess24-com":158044,"wizards-com":9967,"dndbeyond-com":5429,"roll20-net":13688,"nintendo-fr":24013,"pandora-com":1207,"iheart-com":2461,"tunein-com":4946,"radio-fr":171749,"franceinter-fr":25190,"franceculture-fr":24608,"fip-fr":747927,"francemusique-fr":154436,"mouv-fr":675777,"rtl-fr":5574,"europe1-fr":15367,"funradio-fr":235365,"rtl2-fr":124785,"cheriefm-fr":184730,"nostalgie-fr":110887,"rireetchansons-fr":271603,"ouifm-fr":311597,"tsfjazz-com":617071,"beatport-com":9053,"mixcloud-com":2381,"audiomack-com":5421,"musixmatch-com":6667,"azlyrics-com":11338,"paroles-net":51309,"songkick-com":14171,"bandsintown-com":8655,"setlist-fm":5366,"discogs-com":855,"allmusic-com":6918,"pitchfork-com":8101,"rollingstone-com":2442,"billboard-com":3305,"lesinrocks-com":42547,"booska-p-com":414955,"generations-fr":355373,"ultimate-guitar-com":1137,"songsterr-com":13280,"musescore-com":5015,"imslp-org":16370,"yousician-com":37961,"flat-io":48659,"splice-com":14287,"landr-com":37199,"distrokid-com":10382,"bandlab-com":7144,"fnacspectacles-com":31125,"seetickets-com":16356,"lepoint-fr":10254,"lexpress-fr":11275,"nouvelobs-com":7334,"marianne-net":32406,"lesechos-fr":5214,"latribune-fr":13368,"challenges-fr":19768,"capital-fr":17634,"lci-fr":41972,"cnews-fr":6895,"rfi-fr":4090,"france24-com":2976,"tv5monde-com":15534,"euronews-com":1955,"lavoixdunord-fr":6279,"ledauphine-com":6118,"leprogres-fr":6555,"sudouest-fr":5438,"laprovence-com":14016,"nicematin-com":6929,"ladepeche-fr":1281,"lamontagne-fr":16160,"dna-fr":28786,"midilibre-fr":6617,"letelegramme-fr":6259,"actu-fr":1300,"lindependant-fr":7493,"courrier-picard-fr":41475,"charentelibre-fr":18812,"lejdd-fr":20682,"la-croix-com":14625,"valeursactuelles-com":42689,"slate-fr":19553,"blast-info-fr":225462,"washingtonpost-com":365,"wsj-com":384,"nbcnews-com":888,"cbsnews-com":703,"foxnews-com":518,"apnews-com":799,"afp-com":9422,"bloomberg-com":379,"ft-com":553,"economist-com":1162,"forbes-com":219,"businessinsider-com":454,"time-com":570,"newyorker-com":1825,"theatlantic-com":1032,"politico-eu":3645,"aljazeera-com":1430,"dw-com":1414,"spiegel-de":1057,"elpais-com":672,"corriere-it":970,"lesoir-be":6e3,"rtbf-be":6303,"rts-ch":13080,"lapresse-ca":5173,"radio-canada-ca":6234,"news-google-com":40,"msn-com":69,"flipboard-com":3341,"visa-com":2552,"mastercard-com":2059,"americanexpress-com":2126,"wise-com":1068,"westernunion-com":4430,"sumup-com":4495,"creditmutuel-fr":7512,"cic-fr":8289,"lcl-fr":44836,"caisse-epargne-fr":28318,"banquepopulaire-fr":16452,"hellobank-fr":66431,"fortuneo-fr":56292,"monabanq-com":75520,"bforbank-com":242121,"shine-fr":247943,"qonto-com":31155,"nickel-eu":58802,"chase-com":3251,"bankofamerica-com":906,"wellsfargo-com":3104,"hsbc-com":8206,"barclays-co-uk":13154,"ing-com":12627,"kraken-com":1879,"bitpanda-com":32427,"crypto-com":4455,"coinmarketcap-com":2315,"coingecko-com":3660,"ledger-com":7797,"metamask-io":2078,"etoro-com":7545,"degiro-fr":709616,"traderepublic-com":16960,"robinhood-com":3011,"investing-com":1859,"zonebourse-com":22210,"abcbourse-com":58838,"marketwatch-com":1868,"cnbc-com":485,"lafinancepourtous-com":96975,"moneyvox-fr":73332,"meilleurtaux-com":54862,"pretto-fr":278291,"cafpi-fr":273104,"lesfurets-com":55634,"lelynx-fr":156049,"axa-fr":37599,"maif-fr":42563,"macif-fr":48416,"matmut-fr":49149,"groupama-fr":60011,"allianz-fr":56541,"urssaf-fr":18155,"economie-gouv-fr":74655,"banque-france-fr":19191,"ecb-europa-eu":4600,"kayak-fr":44848,"google-com-travel":40,"momondo-fr":184770,"liligo-fr":132912,"edreams-fr":68589,"lastminute-com":17244,"voyage-prive-com":63278,"promovacances-com":42607,"leclercvoyages-com":436379,"clubmed-fr":97889,"pierreetvacances-com":49770,"campings-com":33224,"hotels-com":2003,"trivago-fr":41338,"accor-com":2720,"all-accor-com":108800,"marriott-com":744,"hilton-com":996,"ibis-com":50464,"hostelworld-com":12065,"vrbo-com":3042,"easyjet-com":4195,"vueling-com":12908,"transavia-com":12866,"volotea-com":20812,"lufthansa-com":5170,"britishairways-com":4127,"emirates-com":5114,"qatarairways-com":6896,"turkishairlines-com":6547,"klm-fr":447358,"flightradar24-com":995,"seatguru-com":44379,"aeroportsdeparis-fr":243277,"sncf-com":15432,"ouigo-com":46398,"eurostar-com":18599,"db-com":4317,"flixbus-fr":63879,"ratp-fr":21990,"citymapper-com":22633,"bolt-eu":7143,"heetch-com":391662,"getaround-com":41097,"rentalcars-com":4935,"europcar-fr":156946,"hertz-fr":143673,"sixt-fr":124588,"routard-com":29885,"petitfute-com":30086,"lonelyplanet-com":3867,"atlasobscura-com":4897,"geo-fr":30150,"getyourguide-fr":227897,"viator-com":4879,"civitatis-com":12296,"france-fr":30203,"parisjetaime-com":27031,"visitlondon-com":25686,"diplomatie-gouv-fr":54827,"esta-cbp-dhs-gov":103840,"fff-fr":25221,"ligue1-fr":256899,"ligue1-com":55012,"premierleague-com":4225,"laliga-com":20103,"bundesliga-com":14412,"legaseriea-it":41035,"realmadrid-com":11540,"fcbarcelona-com":14035,"manutd-com":15266,"liverpoolfc-com":15514,"ol-fr":56893,"losc-fr":180736,"asse-fr":152831,"girondins-com":309792,"maxifoot-fr":8686,"onzemondial-com":126637,"sofoot-com":43285,"whoscored-com":21757,"fotmob-com":2608,"livescore-com":1273,"besoccer-com":5849,"ffr-fr":36987,"lnr-fr":253527,"rugbyrama-fr":33258,"world-rugby":42040,"rolandgarros-com":43977,"fft-fr":35601,"atptour-com":5627,"wtatennis-com":15093,"tennistemple-com":26790,"formula1-com":3989,"motogp-com":14149,"letour-fr":3279,"velo101-com":258142,"ffbb-com":102465,"euroleague-net":141289,"basketusa-com":59536,"nfl-com":3351,"mlb-com":753,"nhl-com":4977,"olympics-com":2576,"paris2024-org":51048,"ufc-com":11068,"sports-fr":13802,"eurosport-com":14664,"dazn-com":4230,"beinsports-com":10674,"unibet-fr":46491,"pmu-fr":17349,"parionssport-fdj-fr":312840,"fdj-fr":7821,"zeturf-fr":9275,"geny-com":8555,"basic-fit-com":37406,"fitnesspark-fr":65784,"garmin-com":1048,"polar-com":18547,"komoot-com":4103,"alltrails-com":4390,"visorando-com":42002,"skiinfo-fr":339940,"ffs-fr":645754,"surf-report-com":401791,"stackexchange-com":1544,"superuser-com":7242,"serverfault-com":13687,"askubuntu-com":7793,"answers-microsoft-com":240,"discussions-apple-com":400,"community-spotify-com":2520,"forums-macg-co":3337640,"forum-frandroid-com":1105040,"forum-doctissimo-fr":684520,"forum-aufeminin-com":1235280,"forum-futura-sciences-com":354560,"forums-jeuxonline-info":3413440,"forum-ubuntu-fr-org":2499800,"developpez-com":21539,"forum-leboncoin-fr":47720,"forum-xda-developers-com":190400,"xda-developers-com":4760,"forums-somethingawful-com":802560,"resetera-com":6852,"neogaf-com":24788,"gamefaqs-gamespot-com":109040,"news-ycombinator-com":89040,"slashdot-org":2581,"lobste-rs":44145,"linuxfr-org":61784,"dev-to":3796,"hashnode-com":20914,"indiehackers-com":38515,"producthunt-com":4491,"lemmy-world":30188,"tildes-net":287589,"kbin-social":426270,"mumsnet-com":6763,"netmums-com":42131,"forum-pcastuces-com":3566920,"forum-macbidouille-com":5741720,"franceconnect-gouv-fr":9904,"ants-gouv-fr":79459,"info-gouv-fr":213680,"gouvernement-fr":15647,"elysee-fr":18224,"assemblee-nationale-fr":13103,"senat-fr":7758,"interieur-gouv-fr":17302,"justice-fr":46672,"mesdroitssociaux-gouv-fr":219262,"info-retraite-fr":54411,"lassuranceretraite-fr":18833,"agirc-arrco-fr":43813,"msa-fr":16897,"monparcourshandicap-gouv-fr":366298,"cnil-fr":2693,"colissimo-fr":156085,"chronopost-fr":7806,"mondialrelay-fr":18297,"dhl-com":1981,"ups-com":653,"fedex-com":1809,"edf-fr":16597,"engie-fr":17053,"totalenergies-fr":42799,"veolia-fr":127802,"suez-fr":875060,"pap-fr":42123,"bienici-com":18206,"logic-immo-com":43710,"meilleursagents-com":56353,"century21-fr":53134,"orpi-com":48388,"laforet-com":117493,"foncia-com":124902,"lacartedescolocs-fr":156440,"apec-fr":46080,"hellowork-com":16021,"monster-fr":196615,"jobteaser-com":51008,"studentjob-fr":114031,"glassdoor-fr":58710,"malt-fr":75446,"fiverr-com":794,"upwork-com":2447,"yoopies-fr":348050,"stuart-com":440692,"lemonway-com":505342,"yelp-fr":171009,"google-com-maps":40,"bison-fute-gouv-fr":137809,"prix-carburants-gouv-fr":90881,"geev-com":230469,"greenpeace-org":3442,"wwf-org":131809,"amisdelaterre-org":248439,"reseauactionclimat-org":358202,"ipcc-ch":3572,"unep-org":3324,"copernicus-eu":8810,"climate-copernicus-eu":352400,"meteo-paris-com":71394,"meteociel-fr":1578,"lachainemeteo-com":8119,"meteo-fr":50448,"accuweather-com":628,"weather-com":321,"windy-com":2356,"infoclimat-fr":45539,"vigilance-meteofrance-fr":1020320,"atmo-france-org":292655,"airparif-fr":678141,"iqair-com":12635,"electricitymap-org":142309,"rte-france-com":67030,"ekwateur-fr":353727,"hellowatt-fr":110602,"effy-fr":302127,"france-renov-gouv-fr":291501,"agirpourlatransition-ademe-fr":527640,"nosgestesclimat-fr":424483,"carbone4-com":294305,"theshiftproject-org":87315,"bonpote-com":205111,"novethic-fr":117761,"lareleveetlapeste-fr":393503,"consoglobe-com":110605,"lafourche-fr":117662,"laruchequiditoui-fr":197178,"yuka-io":115194,"openfoodfacts-org":24276,"citeo-com":129323,"tela-botanica-org":124446,"inaturalist-org":5183,"plantnet-org":42027,"onf-fr":60982,"parcsnationaux-fr":684579,"iucn-org":8521,"seashepherd-fr":632825,"oceana-org":33883,"bloomassociation-org":374532,"cdc-gov":361,"nih-gov":141,"medlineplus-gov":2728,"healthline-com":999,"medicalnewstoday-com":2131,"drugs-com":5135,"base-donnees-publique-medicaments-gouv-fr":13751360,"ansm-sante-fr":466320,"has-sante-fr":18585,"pasteur-fr":20240,"inserm-fr":13771,"e-cancer-fr":111879,"ligue-cancer-net":74121,"croix-rouge-fr":46861,"dondesang-efs-sante-fr":466320,"mangerbouger-fr":54673,"tabac-info-service-fr":115268,"drogues-info-service-fr":158529,"filsantejeunes-com":213645,"psycom-org":291994,"headspace-com":10352,"calm-com":8203,"petitbambou-com":287834,"myfitnesspal-com":4519,"yazio-com":33556,"freeletics-com":113425,"fitbit-com":4526,"withings-com":17071,"flo-health":18793,"maiia-com":58319,"keldoc-com":352964,"medecindirect-fr":393659,"mgen-fr":50332,"harmonie-mutuelle-fr":58245,"malakoffhumanis-com":78990,"aphp-fr":38933,"chu-lyon-fr":96583,"santemagazine-fr":40319,"topsante-com":18553,"medisite-fr":108025,"journaldesfemmes-fr":10801,"quechoisir-org":25297,"optical-center-fr":231089,"afflelou-com":134649,"krys-com":87014,"atol-fr":215773,"seriouseats-com":6771,"bonappetit-com":10963,"epicurious-com":12928,"foodnetwork-com":3176,"bbcgoodfood-com":6446,"delish-com":5670,"simplyrecipes-com":17390,"food-com":14328,"cookpad-com":1128,"jamieoliver-com":18806,"cuisine-journaldesfemmes-fr":432040,"femmeactuelle-fr":32458,"papillesetpupilles-fr":64712,"chefsimon-com":112314,"meilleurduchef-com":125675,"hervecuisine-com":177987,"lafourchette-com":73778,"michelin-com":5225,"zomato-com":4702,"opentable-com":4375,"dominos-fr":154531,"pizzahut-fr":701450,"mcdonalds-fr":45398,"burgerking-fr":137580,"kfc-fr":400733,"subway-com":8330,"starbucks-fr":57163,"quitoque-fr":418337,"lescommis-com":563312,"getir-com":53461,"leclercdrive-fr":43638,"chronodrive-com":262914,"cookidoo-fr":75096,"moulinex-fr":165045,"nicolas-com":282131,"vivino-com":12769,"larvf-com":196483,"kitchenaid-fr":550199,"tefal-fr":339067,"mango-com":5024,"pullandbear-com":21237,"bershka-com":25067,"stradivarius-com":7095,"primark-com":14397,"celio-com":54039,"jules-com":68758,"promod-fr":73468,"cache-cache-fr":76507,"etam-com":48938,"undiz-com":64614,"levi-com":11753,"lacoste-com":12238,"ralphlauren-fr":78439,"tommy-com":15460,"calvinklein-fr":164874,"converse-com":16095,"vans-fr":600419,"newbalance-fr":68547,"sarenza-com":41445,"spartoo-com":33843,"courir-com":20972,"jdsports-fr":28352,"snipes-com":42787,"stockx-com":7985,"goat-com":16900,"laboutiqueofficielle-com":40374,"louisvuitton-com":5317,"chanel-com":6862,"dior-com":7435,"hermes-com":10712,"gucci-com":10744,"prada-com":17525,"ysl-com":26902,"cartier-com":15072,"pandora-net":15487,"swarovski-com":5646,"rolex-com":15294,"swatch-com":10855,"nocibe-fr":44727,"marionnaud-fr":45755,"yves-rocher-fr":46903,"loreal-paris-fr":233213,"lookfantastic-fr":347547,"notino-fr":48499,"aroma-zone-com":46488,"cosmopolitan-fr":60324,"grazia-fr":46624,"lofficiel-com":575472,"highsnobiety-com":18e3,"hypebeast-com":11947,"citroen-fr":90979,"dacia-fr":145743,"volkswagen-fr":64043,"audi-fr":129428,"mercedes-benz-fr":73131,"ford-fr":143262,"fiat-fr":240785,"kia-com":4274,"hyundai-com":4393,"nissan-fr":119802,"skoda-fr":355033,"seat-fr":434489,"volvocars-com":4064,"porsche-com":3809,"ferrari-com":12366,"lamborghini-com":24877,"mini-fr":357061,"alpinecars-com":195598,"byd-com":5367,"yamaha-motor-eu":23896,"honda-fr":260383,"kawasaki-fr":508153,"ducati-com":28377,"harley-davidson-com":14765,"autoscout24-fr":47340,"leparking-fr":55696,"largus-fr":35033,"autojournal-fr":58729,"turbo-fr":58708,"automobile-magazine-fr":55713,"motorsport-com":11434,"topgear-com":16527,"moto-station-com":79761,"moto-net-com":269598,"feuvert-fr":61553,"speedy-fr":248272,"midas-fr":381774,"allopneus-com":51340,"1001pneus-fr":117153,"mister-auto-com":43674,"autodistribution-fr":399444,"securite-routiere-gouv-fr":197788,"permisapoints-fr":409328,"stych-fr":73903,"enpc-fr":127533,"chargemap-com":40708,"ulys-vinci-autoroutes-com":3586440,"vinci-autoroutes-com":89661,"sanef-com":82910,"onepark-fr":300894,"alinea-com":389436,"made-com":61118,"lapeyre-fr":132763,"dyson-fr":50891,"philips-fr":126843,"rowenta-fr":247219,"seb-fr":478517,"irobot-fr":341131,"nest-com":2769,"somfy-fr":188464,"netatmo-com":12537,"ring-com":714,"verisure-fr":321795,"bricorama-fr":101451,"mr-bricolage-fr":45176,"weldom-fr":64894,"bricomarche-com":31732,"rustica-fr":122404,"gammvert-fr":55698,"botanic-com":147113,"interflora-fr":125130,"aquarelle-com":390548,"marieclairemaison-com":718361,"maison-travaux-fr":54310,"systemed-fr":265501,"travaux-com":117769,"habitatpresto-com":302280,"hellopro-fr":246238,"starofservice-com":108683,"mesdepanneurs-fr":406044,"sweethome3d-com":60474,"apartmenttherapy-com":10275,"architecturaldigest-com":5734,"dezeen-com":6123,"akc-org":6812,"i-cad-fr":68509,"chien-com":136948,"chat-com":148912,"woopets-fr":72725,"purina-fr":362336,"royalcanin-com":19839,"ultrapremiumdirect-com":302945,"wanimo-com":248719,"chewy-com":3991,"petco-com":8017,"petsmart-com":10193,"aspca-org":12013,"peta-org":11922,"fondationbrigittebardot-fr":235009,"l214-com":158414,"one-voice-fr":896857,"worldanimalprotection-org":128513,"parczoologiquedeparis-fr":520524,"pairidaiza-eu":61935,"sandiegozoo-org":21129,"marineland-fr":698453,"nausicaa-fr":132993,"ffe-com":83667,"birdlife-org":31501,"oiseaux-net":101330,"ebird-org":11438,"allaboutbirds-org":17650,"catster-com":64861,"dogster-com":42920,"holidog-com":208880,"animaute-fr":129042,"zoomalia-com":54241,"sciencemag-org":1910,"science-org":1996,"newscientist-com":2760,"scientificamerican-com":1886,"nationalgeographic-com":988,"smithsonianmag-com":2740,"phys-org":2940,"sciencedaily-com":1840,"livescience-com":2707,"quantamagazine-org":15521,"larecherche-fr":239937,"cea-fr":15383,"inrae-fr":12681,"ird-fr":23312,"ifremer-fr":32318,"cnes-fr":32407,"spacex-com":4904,"blueorigin-com":36249,"jpl-nasa-gov":15480,"webb-nasa-gov":15480,"stellarium-org":35552,"heavens-above-com":26230,"cieletespace-fr":329143,"cite-espace-com":182708,"mnhn-fr":18321,"museedelhomme-fr":424510,"universcience-fr":632895,"eso-org":12954,"noaa-gov":530,"usgs-gov":1928,"emsc-csem-org":51361,"nobelprize-org":3553,"pubmed-ncbi-nlm-nih-gov":5640,"ncbi-nlm-nih-gov":5640,"elsevier-com":1442,"springer-com":291,"wiley-com":325,"plos-org":1166,"mathworld-wolfram-com":211920,"numberphile-com":675937,"theconversation-com":1135,"zooniverse-org":31850,"openstreetmap-org":582,"geoportail-gouv-fr":171164,"ign-fr":23871,"bnf-fr":4794,"livraddict-com":54336,"lecteurs-com":649655,"decitre-fr":42877,"leslibraires-fr":64075,"placedeslibraires-fr":106481,"librairie-gallimard-com":131131,"furet-com":123741,"kobo-com":4791,"audible-fr":28591,"bdfugue-com":205450,"bedetheque-com":71987,"manga-news-com":87409,"glenat-com":129103,"casterman-com":240781,"dargaud-com":173906,"lisez-com":65377,"centrepompidou-fr":20793,"quaibranly-fr":82185,"chateauversailles-fr":25885,"monuments-nationaux-fr":48398,"parismusees-paris-fr":228200,"moma-org":5329,"metmuseum-org":3800,"britishmuseum-org":6722,"rijksmuseum-nl":15959,"uffizi-it":38880,"artsandculture-google-com":40,"wikiart-org":19078,"comedie-francaise-fr":165094,"theatreonline-com":293370,"offi-fr":126860,"sortiraparis-com":25746,"lebonbon-fr":74539,"timeout-fr":225005,"lemonde-fr-culture":28160,"philharmoniedeparis-fr":57266,"festival-cannes-com":18867,"festival-avignon-com":119886,"fetedelamusique-culture-gouv-fr":9798120,"journeesdupatrimoine-culture-gouv-fr":9798120,"ina-fr":17708,"youtube-com-arte":360,"bebe-doctissimo-fr":684520,"enfant-com":644577,"mamanpourlavie-com":735620,"mpedia-fr":367766,"bebe9-com":85821,"okaidi-fr":75168,"jacadi-fr":234486,"petit-bateau-fr":104698,"lagranderecre-fr":161264,"fisher-price-com":82346,"playmobil-com":13246,"vtech-fr":89727,"hasbro-com":14025,"mattel-com":9020,"nickelodeon-fr":95275,"cartoonnetwork-fr":166101,"lalilo-com":231451,"ecoledesloisirs-fr":161403,"bayard-jeunesse-com":116419,"1jour1actu-com":205390,"cbeebies-com":232095,"scratch-mit-edu":9240,"code-org":3917,"coloriage-info":334062,"teteamodeler-com":430057,"disneylandparis-com":11228,"parcasterix-fr":52746,"futuroscope-com":53180,"puydufou-com":50006,"europapark-de":28570,"universalis-fr":50635,"vikidia-org":63097,"wikimedia-org":252,"wikidata-org":4042,"wikiquote-org":4845,"wikivoyage-org":12052,"wikiversity-org":14958,"linternaute-fr":56274,"u-paris-fr":33263,"univ-lyon1-fr":17744,"univ-amu-fr":27254,"u-bordeaux-fr":18390,"unistra-fr":11361,"univ-grenoble-alpes-fr":30063,"universite-paris-saclay-fr":30402,"univ-lille-fr":25057,"univ-rennes-fr":60456,"umontpellier-fr":36708,"pantheonsorbonne-fr":90692,"dauphine-psl-eu":681800,"hec-edu":55265,"essec-edu":95532,"insead-edu":20193,"epfl-ch":5284,"ucl-ac-uk":2592,"imperial-ac-uk":5454,"berkeley-edu":612,"yale-edu":1153,"princeton-edu":910,"columbia-edu":1045,"caltech-edu":3297,"uchicago-edu":1872,"cornell-edu":579,"umontreal-ca":6738,"ulaval-ca":11078,"mcgill-ca":3189,"utoronto-ca":2373,"uclouvain-be":13315,"ulb-be":31483,"campusfrance-org":24501,"letudiant-fr":23009,"studyrama-com":49700,"cned-fr":102931,"reseau-canope-fr":29340,"fun-mooc-fr":66908,"alloprof-qc-ca":345520,"dcode-fr":82480,"projet-voltaire-fr":200129,"leconjugueur-com":492002,"dictionnaire-academie-fr":156980,"academie-francaise-fr":72490,"synonymo-fr":76991,"lexilogos-com":37442,"etymonline-com":13483,"vocabulary-com":12387,"thefreedictionary-com":3671,"dict-cc":11844,"leo-org":11877,"linguee-com":12168,"bab-la":12858,"ssrn-com":1979,"biorxiv-org":4746,"openedition-org":6494,"theses-fr":40507,"worldcat-org":3355,"gutenberg-org":2696,"openlibrary-org":5168,"sparknotes-com":18468,"litcharts-com":36584,"scribd-com":511,"slideshare-net":535,"annabac-com":372658,"sujetdebac-fr":871335,"edpuzzle-com":26096,"quizizz-com":13916,"genial-ly":11794,"padlet-com":2731,"moodle-org":1836,"blackboard-com":5395,"instructure-com":1059,"wolfram-com":5298,"mathsisfun-com":19478,"calculator-net":1334,"omnicalculator-com":19023,"history-com":2935,"herodote-net":125838,"histoire-pour-tous-fr":396692,"larousse-com":311264,"sciencedirect-com":222,"tandfonline-com":565,"frontiersin-org":879,"pnas-org":1951,"cell-com":2751,"thelancet-com":1922,"nejm-org":2443,"orcid-org":1905,"zotero-org":5184,"twitter-com":15,"fb-com":712,"pinterest-com":56,"mastodon-social":2827,"threads-com":606,"t-me":100,"kik-com":19517,"wire-com":31676,"element-io":13733,"matrix-org":7307,"olvid-io":76582,"zoom-com":849,"teamspeak-com":13824,"guilded-gg":96433,"revolt-chat":193624,"naver-com":351,"xing-com":1030,"viadeo-com":21284,"lovoo-com":60450,"tagged-com":17195,"pof-com":8244,"eharmony-com":29495,"elitesingles-com":125262,"parship-fr":876844,"adopteunmec-com":371209,"feeld-co":145703,"hily-com":36907,"coffeemeetsbagel-com":349239,"zoosk-com":61359,"plentyoffish-com":383273,"pixelfed-org":99443,"lemmy-ml":63589,"blogger-com":560,"blogspot-com":107,"over-blog-com":3851,"canalblog-com":8617,"livejournal-com":863,"myspace-com":890,"hi5-com":32650,"ngl-link":8503,"buymeacoffee-com":4136,"tipeee-com":97222,"ulule-com":18389,"kisskissbankbank-com":54666,"kickstarter-com":1131,"indiegogo-com":2803,"gofundme-com":1115,"leetchi-com":31580,"gumroad-com":2845,"carrd-co":4420,"cameo-com":25990,"change-org":971,"mesopinions-com":126302,"avaaz-org":11905,"couchsurfing-com":13312,"eventbrite-com":520,"eventbrite-fr":26504,"vk-ru":177,"mail-ru":12,"douban-com":2492,"zhihu-com":1039,"kuaishou-com":2654,"unsplash-com":415,"pexels-com":858,"pixabay-com":461,"weheartit-com":33772,"picsart-com":4634,"untappd-com":12967,"foursquare-com":3437,"swarmapp-com":314688,"life360-com":875,"discord-gg":142,"imo-im":6203,"beehiiv-com":5968,"ghost-org":4212,"typepad-com":2004,"disqus-com":882,"archiveofourown-org":1063,"fanfiction-net":1279,"kwai-com":984,"sharechat-com":7975,"gettr-com":18834,"plurk-com":11588,"mixi-jp":6327,"ameba-jp":1078,"note-com":953,"tistory-com":5720,"band-us":5163,"jaumo-com":74381,"edarling-fr":566237,"youtu-be":46,"youtubekids-com":26019,"tf1info-fr":6153,"francetelevisions-fr":38174,"programme-tv":64705,"telestar-fr":57517,"toutelatele-com":407104,"kinepolis-fr":16534,"mk2-com":191119,"unifrance-org":53691,"cnc-fr":70530,"jpbox-office-com":275449,"cinetrafic-fr":539782,"filmaffinity-com":5571,"tvtime-com":74399,"tvmaze-com":30023,"thetvdb-com":15658,"crackle-com":28585,"roku-com":258,"britbox-com":19854,"acorn-tv":82668,"shudder-com":123534,"kanopy-com":31881,"hidive-com":137273,"myanimelist-net":3235,"anilist-co":16479,"kitsu-app":70558,"anime-planet-com":14621,"channel5-com":25959,"sky-com":1926,"skyshowtime-com":29505,"zdf-de":3257,"ardmediathek-de":3794,"rai-it":10611,"rtve-es":2034,"atresplayer-com":33127,"tou-tv":166626,"crave-ca":23382,"noovo-ca":355180,"telequebec-tv":130872,"nfb-ca":29115,"publicsenat-fr":54832,"ocs-fr":691461,"lacinetek-com":607576,"trovo-live":59437,"streamlabs-com":7077,"obsproject-com":6157,"twitchtracker-com":39162,"streamscharts-com":79756,"joinpeertube-org":31390,"vidyard-com":8168,"wistia-com":3545,"streamable-com":5853,"coub-com":7037,"veoh-com":20831,"curiositystream-com":63178,"nebula-tv":95200,"viu-com":25091,"wetv-vip":27243,"iq-com":4385,"sonyliv-com":7335,"jiocinema-com":86308,"vix-com":5449,"showmax-com":39444,"svtplay-se":23892,"dr-dk":4949,"npo-nl":16338,"srf-ch":4481,"playsuisse-ch":651892,"tvnz-co-nz":26528,"cbc-ca":1169,"pbs-org":1053,"cwtv-com":32474,"tntdrama-com":66926,"fxnetworks-com":37648,"usanetwork-com":46514,"comedycentral-com":37603,"mtv-com":5408,"adultswim-com":23279,"discovery-com":2816,"aetv-com":33274,"mylifetime-com":53270,"hgtv-com":5090,"bravotv-com":21137,"a24films-com":35422,"paramount-com":11005,"sonypictures-com":13776,"lionsgate-com":44626,"marvel-com":6653,"starwars-com":9413,"sora-com":99983,"labs-google":1304,"kimi-com":6403,"manus-im":6240,"genspark-ai":20755,"replicate-com":28491,"together-ai":45128,"cohere-com":10883,"ai21-com":168422,"llama-com":35787,"lmarena-ai":68927,"theresanaiforthat-com":28433,"futurepedia-io":129859,"hailuoai-video":25203,"pixverse-ai":24627,"invideo-io":13407,"pictory-ai":37785,"captions-ai":107310,"opus-pro":27194,"veed-io":10381,"capcut-com":540,"clipchamp-com":18953,"nightcafe-studio":20355,"tensor-art":29016,"seaart-ai":4747,"craiyon-com":27212,"deepai-org":19916,"freepik-com":1046,"magnific-ai":192536,"fal-ai":44402,"blackforestlabs-ai":211351,"cleanup-pictures":87350,"letsenhance-io":88449,"fotor-com":14095,"pixlr-com":7256,"murf-ai":35078,"play-ht":66240,"naturalreaders-com":43066,"lovo-ai":107879,"voicemod-net":18471,"vocalremover-org":42298,"aiva-ai":85622,"soundraw-io":65951,"riffusion-com":167411,"tldv-io":45928,"read-ai":17527,"krisp-ai":10878,"sonix-ai":131485,"happyscribe-com":39821,"writesonic-com":20387,"rytr-me":47649,"wordtune-com":53866,"scribbr-fr":370965,"zerogpt-com":10753,"copyleaks-com":40821,"originality-ai":44446,"chatpdf-com":85167,"consensus-app":18967,"scite-ai":9796,"pitch-com":30495,"slidesgo-com":24382,"napkin-ai":60766,"uizard-io":61731,"framer-com":5363,"10web-io":68345,"windsurf-com":14420,"tabnine-com":20488,"sourcegraph-com":31010,"cognition-ai":154870,"blackbox-ai":52332,"lmstudio-ai":15341,"jan-ai":129501,"llamaindex-ai":58641,"pinecone-io":41267,"wandb-ai":27538,"scale-com":39647,"roboflow-com":28041,"runpod-io":21221,"coreweave-com":22163,"cerebras-ai":43154,"lighton-ai":974911,"kyutai-org":663445,"kindroid-ai":83243,"inworld-ai":109845,"novelai-net":25385,"sudowrite-com":59808,"exa-ai":32619,"felo-ai":64077,"arc-net":38132,"diabrowser-com":150788,"make-com":8769,"n8n-io":5998,"lindy-ai":101769,"crewai-com":87085,"botpress-com":112505,"tidio-com":24861,"photoai-com":304171,"headshotpro-com":479078,"hedra-com":99951,"higgsfield-ai":4581,"office-com":21,"live-com":23,"android-com":239,"libreoffice-org":4776,"wps-com":698,"7-zip-org":5238,"notepad-plus-plus-org":7598,"inkscape-org":6584,"audacityteam-org":10954,"ccleaner-com":11713,"anydesk-com":677,"softonic-com":2962,"sourceforge-net":245,"apkmirror-com":5588,"ubuntu-com":230,"fedoraproject-org":1479,"linuxmint-com":10840,"redhat-com":664,"arduino-cc":3894,"prixtel-com":274425,"lebara-fr":384455,"coriolis-com":318430,"degrouptest-com":307395,"nperf-com":14972,"arcep-fr":47790,"swisscom-ch":4392,"t-mobile-com":1125,"att-com":1187,"telekom-de":4474,"ee-co-uk":12792,"movistar-es":17731,"videotron-com":37590,"rogers-com":5094,"starlink-com":919,"qualcomm-com":3860,"tsmc-com":27591,"westerndigital-com":10561,"kingston-com":14219,"razer-com":4040,"gigabyte-com":8832,"oneplus-com":13511,"vivo-com":1136,"realme-com":5167,"sonos-com":2950,"jbl-com":6626,"nikon-fr":362493,"gopro-com":7050,"epson-fr":334575,"tp-link-com":397,"ui-com":111,"cisco-com":256,"oracle-com":207,"vmware-com":1807,"akamai-com":1894,"scaleway-com":16645,"o2switch-fr":128299,"gandi-net":44,"hetzner-com":1956,"vultr-com":5240,"fly-io":27741,"mongodb-com":1850,"mysql-com":521,"elastic-co":2244,"datadoghq-com":369,"postman-com":3396,"visualstudio-com":548,"react-dev":7925,"vuejs-org":5485,"svelte-dev":36809,"typescriptlang-org":12888,"go-dev":3268,"java-com":2317,"tailwindcss-com":5200,"unity-com":2142,"godotengine-org":15567,"regex101-com":21887,"css-tricks-com":10484,"geeksforgeeks-org":3311,"hackerrank-com":10793,"norton-com":1903,"bitdefender-fr":67384,"avg-com":3658,"surfshark-com":2336,"privateinternetaccess-com":7840,"dashlane-com":3835,"crowdstrike-com":2261,"torproject-org":4083,"lemondeinformatique-fr":58359,"siecledigital-fr":109096,"journaldunet-com":14489,"tomsguide-fr":123336,"phonandroid-com":50075,"macg-co":83441,"zdnet-com":1853,"9to5google-com":11579,"mashable-com":2069,"techradar-com":2235,"howtogeek-com":4569,"bleepingcomputer-com":5080,"notebookcheck-net":7564,"amazon-es":718,"amazon-it":732,"amazon-ca":647,"amazon-in":692,"ebay-de":853,"lidl-de":6568,"netto-fr":425533,"magasins-u-com":39292,"lagrandeepicerie-com":227250,"biocoop-fr":117721,"greenweez-com":126730,"promocash-com":392181,"tesco-com":3321,"sainsburys-co-uk":8702,"ocado-com":23065,"kroger-com":4594,"traderjoes-com":26934,"instacart-com":2738,"rewe-de":12546,"edeka-de":22304,"migros-ch":18133,"coop-ch":28228,"colruyt-be":40703,"iga-net":167737,"kohls-com":1044,"macys-com":3476,"nordstrom-com":4707,"samsclub-com":3492,"dollargeneral-com":16321,"cvs-com":3977,"walgreens-com":3353,"johnlewis-com":4740,"marksandspencer-com":4962,"currys-co-uk":6086,"mediamarkt-de":5706,"coolblue-nl":13262,"galaxus-ch":15566,"aboutyou-de":15952,"bonprix-fr":76846,"3suisses-fr":122675,"damart-fr":76381,"galerieslafayette-com":28927,"lebonmarche-com":177753,"bhv-fr":242973,"stokomani-fr":69842,"noz-fr":595028,"flyingtiger-com":39747,"sostrenegrene-com":43833,"rueducommerce-fr":47412,"grosbill-com":208855,"kelkoo-fr":358620,"idealo-de":3121,"pricerunner-com":40591,"keepa-com":16508,"joinhoney-com":4580,"widilo-fr":319892,"joko-com":369989,"ma-reduc-com":264400,"retailmenot-com":11219,"hotukdeals-com":24260,"mydealz-de":15198,"bonial-fr":60645,"tiendeo-fr":223311,"vente-unique-com":40690,"certideal-com":138928,"easycash-fr":68641,"momox-shop-fr":109025,"recyclivre-com":119542,"subito-it":1340,"2ememain-be":17020,"olx-pl":1084,"avito-ru":604,"wildberries-ru":497,"trendyol-com":943,"hepsiburada-com":3672,"noon-com":4323,"takealot-com":5833,"lazada-co-th":5474,"tokopedia-com":3255,"gmarket-co-kr":4141,"pinduoduo-com":3519,"dhgate-com":4192,"banggood-com":11073,"joom-com":4861,"mercadolivre-com-br":915,"magazineluiza-com-br":3343,"myntra-com":1208,"meesho-com":1222,"yoox-com":16519,"ssense-com":13472,"net-a-porter-com":14809,"revolve-com":4878,"prettylittlething-com":35333,"fashionnova-com":11813,"overstock-com":14614,"qvc-com":5268,"costco-fr":502938,"nintendo-co-jp":15133,"steamdb-info":5561,"steampowered-com":303,"ubisoftconnect-com":239387,"2k-com":12045,"take2games-com":20310,"cdprojektred-com":24404,"cyberpunk-net":54593,"thewitcher-com":58831,"fromsoftware-jp":185787,"paradoxinteractive-com":51594,"focus-entmt-com":102446,"quanticdream-com":251696,"bungie-net":9476,"warframe-com":10893,"pathofexile-com":7248,"eveonline-com":13474,"finalfantasyxiv-com":6791,"guildwars2-com":12059,"runescape-com":4440,"dofus-com":77619,"ankama-com":27266,"worldoftanks-eu":13490,"wargaming-net":3322,"playoverwatch-com":90444,"callofduty-com":6836,"rocketleague-com":51499,"pubg-com":16271,"terraria-org":78045,"stardewvalley-net":74965,"thesims-com":117533,"habbo-fr":510886,"geforce-com":4011,"logitechg-com":6169,"steelseries-com":12215,"corsair-com":10394,"hyperx-com":62830,"alienware-com":161564,"meta-com":843,"fanatical-com":39501,"cdkeys-com":126276,"eneba-com":11490,"gamesplanet-com":105364,"isthereanydeal-com":38602,"dlcompare-fr":418761,"opencritic-com":68094,"gamesradar-com":6415,"rockpapershotgun-com":14942,"vg247-com":22827,"thegamer-com":17978,"gamerant-com":5472,"destructoid-com":18594,"videogameschronicle-com":22289,"jeuxactu-com":157362,"jeuxvideo-live-com":527098,"gameblog-fr":49745,"actugaming-net":248068,"nintendo-town-fr":357393,"nintendolife-com":14557,"pushsquare-com":25817,"purexbox-com":44066,"gamesindustry-biz":15488,"lolesports-com":10824,"esl-com":48660,"faceit-com":3716,"start-gg":28942,"battlefy-com":64425,"vitality-gg":314412,"vlr-gg":2231,"dotabuff-com":11870,"u-gg":16674,"mobalytics-gg":5869,"leagueofgraphs-com":11450,"fortnitetracker-com":7221,"minecraft-wiki":11241,"serebii-net":10728,"gamefaqs-com":40054,"neoseeker-com":24752,"powerpyx-com":54763,"wowhead-com":4842,"icy-veins-com":16622,"game8-co":5749,"namemc-com":6002,"planetminecraft-com":5359,"hypixel-net":14204,"modrinth-com":3213,"retroachievements-org":39189,"backloggd-com":30598,"igdb-com":14281,"mobygames-com":13731,"protondb-com":62682,"geforcenow-com":20815,"shadow-tech":33922,"chesstempo-com":153220,"ffechecs-org":681309,"jeuxdemots-org":186651,"sudoku-com":7544,"jigsawplanet-com":6246,"solitaired-com":6311,"seterra-com":251824,"sporcle-com":6007,"kahoot-com":11975,"gartic-io":54768,"tetr-io":26569,"diep-io":151174,"zombsroyale-io":297733,"shellshock-io":136556,"y8-com":11507,"addictinggames-com":34134,"newgrounds-com":4609,"zylom-com":157326,"philibertnet-com":42540,"asmodee-fr":382454,"catan-com":253921,"cardmarket-com":1445,"tcgplayer-com":3859,"yugioh-card-com":45880,"games-workshop-com":59306,"warhammer-com":29917,"tabletopia-com":181345,"playingcards-io":360345,"napster-com":23524,"anghami-com":20720,"boomplay-com":10340,"jiosaavn-com":6156,"gaana-com":6585,"radio-garden":24034,"nrj-be":605246,"virginradio-fr":332324,"europe2-fr":392482,"rfm-fr":229015,"radiomeuh-com":669969,"kexp-org":64287,"npr-org":502,"somafm-com":56743,"lyricstranslate-com":19406,"songlyrics-com":44149,"lyrics-com":43108,"paroles-musique-com":152889,"greatsong-net":516775,"lacoccinelle-net":66669,"songfacts-com":40651,"whosampled-com":28906,"rateyourmusic-com":6483,"albumoftheyear-org":7223,"musicbrainz-org":13109,"tunebat-com":46698,"chosic-com":43935,"everynoise-com":81392,"nme-com":7247,"stereogum-com":21926,"consequence-net":25835,"loudwire-com":35095,"kerrang-com":69844,"spin-com":27602,"hotnewhiphop-com":29512,"xxlmag-com":49643,"complex-com":8220,"thefader-com":35596,"residentadvisor-net":37187,"mixmag-net":60176,"tsugi-fr":468515,"rollingstone-fr":235146,"chartsinfrance-net":120936,"snepmusique-com":491746,"kworb-net":54404,"officialcharts-com":42326,"livenation-fr":237169,"stubhub-com":7433,"viagogo-com":21353,"dice-fm":18802,"shotgun-live":43760,"infoconcert-com":74778,"digitick-com":79482,"olympiahall-com":309430,"accorarena-com":211515,"coachella-com":41432,"tomorrowland-com":11752,"glastonburyfestivals-co-uk":58300,"hellfest-fr":142095,"solidays-org":708368,"eurovision-tv":34407,"grammy-com":14572,"thomann-de":10901,"woodbrass-com":57448,"musicstore-com":39980,"guitarcenter-com":12181,"sweetwater-com":5580,"reverb-com":12894,"fender-com":16269,"gibson-com":24488,"yamaha-com":6330,"roland-com":18495,"ableton-com":18522,"image-line-com":16351,"native-instruments-com":17463,"steinberg-net":21487,"izotope-com":46232,"waves-com":24840,"kvraudio-com":45987,"audiofanzine-com":40063,"gearspace-com":26060,"justinguitar-com":97927,"flowkey-com":244031,"guitartuna-com":54553,"noteflight-com":34853,"8notes-com":71789,"boiteachansons-net":170206,"tunecore-com":44916,"cdbaby-com":10759,"believe-com":345649,"universalmusic-com":35637,"sonymusic-com":39692,"wmg-com":63454,"sacem-fr":95874,"epidemicsound-com":20296,"artlist-io":14576,"freemusicarchive-org":18733,"jamendo-com":17653,"lalal-ai":43182,"aa-com-tr":5300,"abc-net-au":1271,"lopinion-fr":50066,"lecanardenchaine-fr":165145,"charliehebdo-fr":116161,"parismatch-com":6378,"alternatives-economiques-fr":71604,"franceinfo-fr":2193,"contexte-com":284861,"arretsurimages-net":137267,"lesjours-fr":323916,"atlantico-fr":55975,"causeur-fr":153310,"lanouvellerepublique-fr":6952,"leberry-fr":58944,"lyonne-fr":60951,"larep-fr":53214,"lejsl-com":27520,"estrepublicain-fr":15300,"vosgesmatin-fr":41905,"republicain-lorrain-fr":33680,"lalsace-fr":33090,"lamarseillaise-fr":180858,"varmatin-com":141874,"corsematin-com":47041,"paris-normandie-fr":40630,"lunion-fr":44562,"lamanchelibre-fr":63472,"courrierdelouest-fr":684419,"presseocean-fr":575624,"lepopulaire-fr":57181,"centrepresseaveyron-fr":61873,"larepubliquedespyrenees-fr":19615,"clicanoo-re":253019,"linfo-re":58104,"franceantilles-fr":103315,"bienpublic-com":41676,"lyonmag-com":81454,"lyoncapitale-fr":65748,"madeinmarseille-net":251562,"rue89strasbourg-com":235928,"rue89lyon-fr":342688,"actu17-fr":307664,"lalibre-be":12686,"dhnet-be":6498,"sudinfo-be":6840,"7sur7-be":16710,"rtl-be":15644,"letemps-ch":17320,"24heures-ch":29802,"tdg-ch":34190,"20min-ch":4975,"ledevoir-com":21569,"journaldemontreal-com":6623,"tvanouvelles-ca":17054,"jeuneafrique-com":25674,"lematin-ma":45162,"hespress-com":17465,"tsa-algerie-com":59227,"usatoday-com":590,"latimes-com":913,"nypost-com":1140,"axios-com":2572,"politico-com":2167,"thehill-com":2681,"vox-com":2249,"huffpost-com":1094,"newsweek-com":1820,"thedailybeast-com":3366,"abcnews-go-com":17320,"independent-co-uk":731,"telegraph-co-uk":617,"dailymail-co-uk":696,"thetimes-co-uk":3013,"mirror-co-uk":2159,"thesun-co-uk":2083,"standard-co-uk":3676,"bild-de":765,"zeit-de":2563,"faz-net":2884,"sueddeutsche-de":2849,"tagesschau-de":3167,"elmundo-es":994,"abc-es":3578,"lavanguardia-com":3404,"repubblica-it":962,"ansa-it":3582,"theglobeandmail-com":2724,"smh-com-au":2575,"scmp-com":2538,"japantimes-co-jp":4312,"hindustantimes-com":2727,"efe-com":14474,"dpa-com":58573,"upi-com":5448,"kyodonews-net":24611,"xinhuanet-com":1900,"tass-com":14283,"newsnow-co-uk":7054,"allsides-com":59741,"snopes-com":4424,"factcheck-org":23176,"politifact-com":12969,"propublica-org":4310,"theintercept-com":6780,"bellingcat-com":27195,"monde-diplomatique-fr":31666,"bnpparibas-com":20493,"credit-agricole-com":75663,"banquepopulaire-com":912304,"cmb-fr":126972,"arkea-com":62685,"cmso-com":404328,"credit-cooperatif-coop":103251,"helios-do":929782,"vivid-money":121169,"bunq-com":22348,"monzo-com":17591,"chime-com":9089,"sofi-com":7012,"boursedirect-fr":45341,"saxo-com":50743,"interactivebrokers-com":16678,"xtb-com":15387,"scalable-capital":28520,"yomoni-fr":380082,"nalo-fr":683373,"linxea-com":374894,"finary-com":44031,"toutsurmesfinances-com":316012,"assurland-com":228301,"leblogpatrimoine-com":999358,"investopedia-com":981,"nerdwallet-com":4909,"bankrate-com":4788,"fool-com":3284,"seekingalpha-com":4193,"nasdaq-com":3126,"nyse-com":14402,"euronext-com":18324,"amf-france-org":38017,"boursier-com":40888,"cryptoast-fr":137724,"journalducoin-com":128622,"coindesk-com":4104,"cointelegraph-com":5459,"bybit-com":3185,"okx-com":2422,"kucoin-com":5777,"bitstamp-net":15377,"gemini-com":16315,"blockchain-com":11442,"bitcoin-org":7284,"ethereum-org":7647,"etherscan-io":5539,"paymium-com":473574,"coinhouse-com":379618,"trezor-io":7705,"payplug-com":113085,"lyra-com":222404,"adyen-com":4332,"squareup-com":1964,"oney-fr":118286,"cofidis-fr":21835,"sofinco-fr":125184,"cetelem-fr":60238,"younited-credit-com":234570,"franfinance-fr":464712,"empruntis-com":197354,"ag2rlamondiale-fr":117892,"generali-fr":82483,"mma-fr":118439,"gmf-fr":76263,"maaf-fr":52818,"direct-assurance-fr":63605,"leocare-eu":307274,"luko-eu":232255,"april-fr":159186,"swisslife-fr":173349,"cnp-fr":119180,"remitly-com":5222,"worldremit-com":30911,"moneygram-com":22817,"xe-com":3997,"wero-wallet-eu":191354,"agoda-com":845,"ihg-com":2074,"hyatt-com":2294,"bestwestern-fr":125153,"radissonhotels-com":5893,"choicehotels-com":9368,"wyndhamhotels-com":5794,"logishotels-com":61478,"campanile-com":72924,"novotel-com":53831,"mercure-com":55856,"relaischateaux-com":60940,"hotel-info":156731,"homeexchange-com":27658,"belambra-fr":60138,"vvf-fr":348632,"odalys-vacances-com":102375,"mmv-fr":393831,"huttopia-com":96322,"yellohvillage-fr":59035,"tohapi-fr":266122,"siblu-fr":113306,"camping-and-co-com":360198,"tui-fr":62880,"fram-fr":41931,"selectour-com":329606,"havas-voyages-fr":412793,"ebookers-fr":414091,"kiwi-com":11393,"govoyages-com":62956,"hopper-com":34649,"flightaware-com":3452,"airbus-com":7702,"corsair-fr":687723,"airtahitinui-com":118242,"aircaraibes-com":108404,"frenchbee-com":154041,"aircorsica-com":183253,"flytap-com":22368,"iberia-com":11409,"ita-airways-com":21323,"swiss-com":10446,"brusselsairlines-com":28276,"aircanada-com":5866,"airtransat-com":32958,"delta-com":3364,"united-com":3752,"aa-com":3395,"royalairmaroc-com":35700,"airalgerie-dz":58264,"etihad-com":12658,"singaporeair-com":9151,"cathaypacific-com":10832,"wizzair-com":5005,"norwegian-com":20049,"eurowings-com":15588,"lyonaeroports-com":154246,"parisaeroport-fr":42356,"heathrow-com":26763,"sbb-ch":3254,"bahn-de":3487,"renfe-com":12690,"trenitalia-com":7142,"italotreno-com":38557,"raileurope-com":26005,"interrail-eu":64596,"eurail-com":55826,"transilien-com":71087,"iledefrance-mobilites-fr":29718,"tcl-fr":64529,"rtm-fr":128045,"flixbus-com":11969,"omio-fr":152046,"rome2rio-com":4331,"moovitapp-com":5065,"g7-fr":325066,"avis-fr":253692,"enterprise-fr":252116,"ada-fr":303087,"ucar-fr":943865,"turo-com":17351,"directferries-fr":170570,"brittany-ferries-fr":345139,"corsica-ferries-fr":150577,"lameridionale-fr":453373,"msccroisieres-fr":350617,"costacroisieres-fr":161134,"royalcaribbean-com":5636,"ponant-com":108752,"tourmag-com":131108,"voyageforum-com":168731,"thepointsguy-com":15262,"nomadicmatt-com":58633,"wanderlust-co-uk":180732,"cntraveler-com":7792,"travelandleisure-com":5125,"visitparisregion-com":238860,"provence-alpes-cotedazur-com":111874,"bretagne-com":955466,"normandie-tourisme-fr":47970,"visitbritain-com":33785,"spain-info":18601,"italia-it":16746,"visitportugal-com":16027,"visitmorocco-com":97200,"japan-travel":17267,"toureiffel-paris":29363,"tiqets-com":10891,"musement-com":32515,"ivisa-com":84258,"airhelp-com":55251,"seatmaps-com":63411,"sport-fr":54066,"skysports-com":1111,"theathletic-com":13718,"bleacherreport-com":5693,"cbssports-com":3164,"foxsports-com":4155,"si-com":3742,"marca-com":1092,"as-com":1082,"mundodeportivo-com":1264,"gazzetta-it":1229,"kicker-de":4218,"goal-com":1081,"90min-com":50755,"foot01-com":20950,"le10sport-com":27866,"footballdatabase-eu":68542,"fbref-com":31426,"understat-com":261938,"soccerway-com":6967,"flashscore-com":1001,"livescore-in":6924,"futbin-com":2752,"mpg-football":672563,"lfp-fr":205075,"mlssoccer-com":19568,"chelseafc-com":19128,"arsenal-com":16594,"mancity-com":19080,"tottenhamhotspur-com":27355,"juventus-com":26830,"acmilan-com":32642,"inter-it":33774,"fcbayern-com":19151,"bvb-de":30736,"atleticodemadrid-com":48997,"asmonaco-com":125270,"ogcnice-com":152862,"staderennais-com":139730,"rclens-fr":147602,"fcnantes-com":116337,"stadetoulousain-fr":317498,"sixnationsrugby-com":141077,"rugbyworldcup-com":54595,"allrugby-com":208056,"ausopen-com":51130,"wimbledon-com":17738,"usopen-org":17629,"tennisactu-net":600149,"ultimatetennisstatistics-com":988023,"pgatour-com":10705,"ffgolf-org":184826,"worldathletics-org":17700,"athle-fr":56950,"ffhandball-fr":135531,"lnh-fr":963181,"ffvolley-org":975312,"lnb-fr":498841,"wnba-com":16858,"basketball-reference-com":12409,"pro-football-reference-com":25642,"procyclingstats-com":6760,"cyclingnews-com":21838,"directvelo-com":60273,"uci-org":37679,"autosport-com":29673,"nextgen-auto-com":112739,"fia-com":23949,"lemans-org":99395,"dakar-com":60283,"nascar-com":13741,"wwe-com":14930,"sherdog-com":20425,"tapology-com":10720,"ffjudo-com":140814,"fina-org":101747,"ffnatation-fr":296814,"franceolympique-com":203603,"sport2000-fr":61624,"underarmour-com":6608,"asics-com":10257,"newbalance-com":22902,"hoka-com":14114,"i-run-fr":56128,"alltricks-fr":55272,"probikeshop-fr":131905,"wiggle-com":377509,"snowleader-com":140197,"auvieuxcampeur-fr":108971,"ekosport-fr":318109,"patagonia-com":8743,"salomon-com":24128,"nutrimuscle-com":162990,"fitnessboutique-fr":320172,"onair-fitness-fr":561614,"keepcool-fr":420531,"lesmills-com":70416,"peloton-com":255092,"zwift-com":20597,"suunto-com":24389,"coros-com":28213,"runnersworld-com":11710,"jogging-international-net":991217,"u-trail-com":181255,"utmb-world":31087,"finishers-com":114505,"njuko-com":127596,"klikego-com":73750,"ffrandonnee-fr":110318,"mongr-fr":374772,"gr-infos-com":392548,"wikiloc-com":9753,"camptocamp-org":133673,"ffcam-fr":161051,"chamonix-com":95392,"skipass-com":159997,"france-montagnes-com":303227,"windguru-cz":7078,"surfline-com":19576,"redbull-com":3685,"mathoverflow-net":34595,"answers-com":4500,"ilemaths-net":301967,"les-mathematiques-net":367775,"digitalspy-com":11471,"boards-ie":37384,"tomshardware-com":3340,"tomshardware-fr":153699,"linustechtips-com":41797,"overclockers-co-uk":32880,"anandtech-com":11183,"androidcentral-com":14250,"sevenforums-com":57969,"tenforums-com":48308,"kialo-com":342188,"metafilter-com":20684,"fark-com":23952,"digg-com":2476,"nautiljon-com":45784,"bitcointalk-org":15456,"bogleheads-org":47984,"wallstreetoasis-com":62888,"teamblind-com":33203,"codeproject-com":13553,"sitepoint-com":11643,"experts-exchange-com":47367,"spiceworks-com":9310,"instructables-com":3039,"hackaday-com":3872,"thingiverse-com":3241,"ravelry-com":5503,"houzz-com":3507,"forumconstruire-com":121080,"forum-photovoltaique-fr":620591,"dpreview-com":6548,"atoute-org":564016,"babycenter-com":11167,"whattoexpect-com":17256,"zebulon-fr":253448,"avforums-com":36211,"head-fi-org":36155,"allovoisins-com":44841,"flyertalk-com":29556,"cruisecritic-com":17911,"2ch-net":46567,"5ch-net":33041,"v2ex-com":16744,"habr-com":3961,"pikabu-ru":868,"ifunny-co":34784,"knowyourmeme-com":5316,"tvtropes-org":4360,"scribophile-com":194397,"hinative-com":25199,"tandem-net":22284,"physicsforums-com":38363,"chemicalforums-com":169112,"cafepharma-com":124466,"studentdoctor-net":30005,"collegeconfidential-com":71740,"thestudentroom-co-uk":39235,"legavox-fr":388716,"avvo-com":14078,"justanswer-com":11140,"discourse-org":10997,"phpbb-com":4372,"invisioncommunity-com":47487,"xenforo-com":29714,"vbulletin-com":42417,"forumactif-com":31179,"forumotion-com":29778,"proboards-com":11454,"guru3d-com":24339,"techpowerup-com":11991,"hardforum-com":61543,"eevblog-com":36881,"raspberrypi-com":5653,"home-assistant-io":2449,"jeuxonline-info":85336,"mmo-champion-com":39727,"bladeforums-com":56104,"pistonheads-com":14996,"rennlist-com":55402,"bimmerpost-com":15309,"teslamotorsclub-com":51168,"motomag-com":324201,"bikeradar-com":35480,"mtbr-com":58430,"aquaportail-com":239035,"aujardin-info":179818,"pole-emploi-fr":28061,"travail-emploi-gouv-fr":442729,"etudiant-gouv-fr":23236,"monmaster-gouv-fr":366296,"cadastre-gouv-fr":88534,"data-gouv-fr":95972,"insee-fr":10524,"infogreffe-fr":46337,"societe-com":13355,"pappers-fr":14262,"118712-fr":132032,"viamichelin-fr":16909,"paruvendu-fr":38770,"superimmo-com":190192,"avendrealouer-fr":580730,"notaires-fr":28555,"studapart-com":159791,"lokaviz-fr":105686,"nexity-fr":198482,"guy-hoquet-com":192874,"stephaneplazaimmobilier-com":195214,"iadfrance-fr":78196,"safti-fr":72949,"efficity-com":247750,"indeed-com":410,"cadremploi-fr":90543,"regionsjob-com":350940,"meteojob-com":56479,"keljob-com":728927,"jobijoba-com":57737,"optioncarriere-com":327124,"adecco-fr":235683,"randstad-fr":116072,"manpower-fr":128427,"side-co":999285,"qapa-fr":392468,"moncompteformation-gouv-fr":65593,"ariase-com":200737,"selectra-info":40525,"energie-info-fr":201715,"grdf-fr":129139,"enedis-fr":28391,"eaudeparis-fr":552041,"dpd-com":12605,"dpd-fr":123071,"gls-group-eu":27493,"relaiscolis-com":501872,"colisprive-com":73637,"17track-net":3705,"parcelsapp-com":18621,"tnt-com":20386,"meteoconsult-fr":26673,"lettre-resiliation-com":944487,"cartegrise-com":444416,"antai-gouv-fr":211388,"amendes-gouv-fr":214144,"papernest-com":178669,"justice-gouv-fr":80719,"defenseurdesdroits-fr":31749,"inc-conso-fr":154794,"60millions-mag-com":102717,"dossierfamilial-com":457962,"pratique-fr":260703,"juritravail-com":141825,"legalstart-fr":137886,"legalplace-fr":121421,"captaincontrat-com":437076,"service-civique-gouv-fr":721760,"jeveuxaider-gouv-fr":796902,"francebenevolat-org":382841,"guichet-entreprises-fr":665688,"anil-org":69144,"actionlogement-fr":39972,"visale-fr":117444,"jechange-fr":245850,"kelwatt-fr":374078,"monpetitforfait-com":266805,"annuaire-mairie-fr":99670,"meteoblue-com":4782,"wunderground-com":2020,"yr-no":2450,"windfinder-com":16753,"ventusky-com":11871,"zoom-earth":11316,"lightningmaps-org":26996,"keraunos-org":77638,"meteo60-fr":25054,"timeanddate-com":2039,"weather-gov":2227,"climate-gov":19625,"berkeleyearth-org":165935,"carbonbrief-org":15287,"insideclimatenews-org":22626,"grist-org":13310,"treehugger-com":7267,"ecowatch-com":23287,"mongabay-com":10361,"socialter-fr":715637,"wedemain-fr":241123,"natura-sciences-com":703580,"actu-environnement-com":66812,"notre-planete-info":149118,"terrevivante-org":230506,"georisques-gouv-fr":345289,"vigicrues-gouv-fr":847002,"eaufrance-fr":95187,"impactco2-fr":331472,"ecosystem-eco":147652,"refashion-fr":194459,"emmaus-france-org":194371,"toogoodtogo-com":28266,"nousantigaspi-com":646503,"naturalia-fr":186499,"lavieclaire-com":329607,"agencebio-org":166800,"bioalaune-com":573586,"kokopelli-semences-fr":317356,"terredeliens-org":259191,"alternatiba-eu":440968,"rebellion-global":238163,"fridaysforfuture-org":86108,"nature-org":10784,"sierraclub-org":14899,"nrdc-org":8798,"conservation-org":35285,"worldwildlife-org":7473,"surfrider-org":60856,"goodplanet-info":477669,"ilek-fr":512263,"octopusenergy-fr":134528,"mint-energie-com":592007,"edf-oa-fr":84190,"photovoltaique-info":400287,"quelleenergie-fr":228155,"maprimerenov-gouv-fr":807105,"windy-app":76385,"ourworldindata-org":3884,"climateactiontracker-org":45470,"globalforestwatch-org":49597,"wri-org":9803,"unfccc-int":4258,"iea-org":2944,"irena-org":15380,"lowtechlab-org":252153,"zerowastefrance-org":318737,"donnons-org":281257,"ressourcerie-fr":478944,"repaircafe-org":72742,"spareka-fr":304219,"ifixit-com":6189,"planetoscope-com":270891,"wwf-ch":114495,"wwf-org-uk":25173,"generations-futures-fr":421410,"foodwatch-org":62300,"aspas-nature-org":973554,"robindesbois-org":892475,"negawatt-org":415791,"jancovici-com":275486,"jardiner-malin-fr":274337,"graines-baumaux-fr":488718,"wetlands-org":135495,"gbif-org":17516,"faune-france-org":607296,"clevelandclinic-org":1892,"hopkinsmedicine-org":3586,"merckmanuals-com":20775,"santepubliquefrance-fr":23256,"sante-gouv-fr":255606,"monespacesante-fr":49128,"pourquoidocteur-fr":132379,"allodocteurs-fr":77219,"e-sante-fr":190107,"destinationsante-com":655861,"psychologies-com":17323,"lamutuellegenerale-fr":593375,"apivia-fr":684884,"mnh-fr":422223,"pharma-gdd-com":63032,"cocooncenter-com":190799,"pharmashopdiscount-com":501797,"doctolib-de":11266,"zocdoc-com":14060,"goodrx-com":5381,"rxlist-com":23648,"everydayhealth-com":5424,"verywellhealth-com":4441,"verywellmind-com":4579,"verywellfit-com":19814,"health-com":7090,"prevention-com":14177,"menshealth-com":4084,"womenshealthmag-com":5949,"psychologytoday-com":1268,"betterhelp-com":5854,"talkspace-com":32669,"mentalhealth-org-uk":16857,"mind-org-uk":13070,"3114-fr":419895,"sida-info-service-org":280871,"aides-org":284008,"francealzheimer-org":193770,"fondation-arc-org":262849,"gustaveroussy-fr":164208,"curie-fr":62398,"afm-telethon-fr":146459,"fondationdefrance-org":73954,"fedecardio-org":310056,"lanutrition-fr":243720,"myprotein-com":26139,"bodybuilding-com":16722,"lorangebleue-fr":331087,"runtastic-com":24812,"kiprun-com":532775,"cronometer-com":36372,"noom-com":32546,"weightwatchers-com":11198,"ww-com":47057,"fooducate-com":109354,"nutritionix-com":85196,"fatsecret-fr":403863,"fatsecret-com":13163,"anses-fr":21263,"sleepfoundation-org":5775,"yogajournal-com":29039,"downdogapp-com":112835,"insighttimer-com":25264,"dentaly-org":258943,"generale-optique-com":367998,"audika-fr":441711,"amplifon-com":48215,"medscape-com":2960,"bmj-com":1316,"ricardocuisine-com":52831,"supertoinette-com":152883,"lesfoodies-com":307006,"recettes-de":261131,"giallozafferano-it":7472,"chefkoch-de":6014,"thekitchn-com":6775,"tasteofhome-com":12493,"eatingwell-com":4815,"foodandwine-com":6854,"budgetbytes-com":34235,"minimalistbaker-com":38937,"sallysbakingaddiction-com":25772,"kingarthurbaking-com":20547,"taste-com-au":32734,"recipetineats-com":15646,"pinchofyum-com":46489,"cookieandkate-com":39172,"halfbakedharvest-com":47917,"thepioneerwoman-com":12612,"marthastewart-com":5150,"kitchenstories-com":142042,"hellofresh-com":15964,"doordash-com":2291,"grubhub-com":11347,"thefork-com":25085,"lefooding-com":238884,"quick-fr":190816,"pizzahut-com":13728,"dominos-com":5356,"mcdonalds-com":3410,"kfc-com":28722,"burgerking-com":196436,"tacobell-com":6514,"chipotle-com":11988,"wendys-com":18199,"popeyes-com":43025,"starbucks-com":2937,"dunkindonuts-com":19029,"o-tacos-com":385333,"flunch-fr":167017,"buffalo-grill-fr":76546,"hippopotamus-fr":444215,"courtepaille-com":918778,"paul-fr":392717,"laduree-fr":209828,"lenotre-com":328721,"pierreherme-com":154304,"franprix-fr":376528,"casino-fr":233473,"wholefoodsmarket-com":10899,"vinatis-com":161211,"wine-searcher-com":20265,"hachette-vins-com":289159,"millesima-fr":349088,"idealwine-com":162894,"wine-com":48603,"decanter-com":41430,"winefolly-com":64398,"saveur-biere-com":970978,"maxicoffee-com":107268,"lepetitballon-com":400159,"mathon-fr":181067,"cuisineaddict-com":387268,"lecreuset-fr":451788,"magimix-fr":548564,"kenwoodworld-com":100725,"williams-sonoma-com":14073,"surlatable-com":27384,"opinel-com":162464,"scrapcooking-fr":412343,"atelierdeschefs-fr":66928,"cordonbleu-edu":69666,"gordonramsay-com":177307,"gap-com":3425,"oldnavy-com":53537,"cos-com":22130,"arket-com":50652,"massimodutti-com":28714,"oysho-com":45403,"sandro-paris-com":104139,"maje-com":101961,"claudiepierlot-com":213057,"thekooples-com":207593,"ba-sh-com":45345,"rouje-com":163515,"apc-fr":264870,"jacquemus-com":68853,"isabelmarant-com":81954,"comptoirdescotonniers-com":60571,"printemps-com":41089,"dpam-com":127927,"gemo-fr":21370,"lahalle-com":20120,"devred-com":171428,"armandthiery-fr":122103,"pimkie-fr":110260,"morgandetoi-fr":77079,"kookai-fr":545323,"lululemon-com":6084,"adidas-com":3068,"reebok-com":25964,"columbia-com":24959,"quiksilver-fr":257364,"drmartens-com":29348,"birkenstock-com":6692,"crocs-com":14156,"veja-store-com":36116,"clarks-com":32743,"geox-com":43839,"eram-fr":37897,"andre-fr":503412,"bocage-fr":73271,"jonak-fr":183758,"chaussea-com":35237,"footlocker-fr":69706,"footlocker-com":21395,"sneakersnstuff-com":103377,"mytheresa-com":16595,"matchesfashion-com":61533,"24s-com":85541,"therealreal-com":10377,"collectorsquare-com":107383,"thredup-com":7228,"givenchy-com":59384,"celine-com":29875,"loewe-com":36779,"valentino-com":39457,"versace-com":27267,"burberry-com":19810,"fendi-com":27600,"bottegaveneta-com":31137,"miumiu-com":45760,"moncler-com":65413,"balmain-com":107723,"kenzo-com":122495,"longchamp-com":20224,"michaelkors-com":13323,"coach-com":10244,"lancel-com":239491,"tiffany-com":17710,"vancleefarpels-com":37828,"boucheron-com":115742,"chaumet-com":146822,"bulgari-com":22677,"histoiredor-com":65274,"maty-com":110005,"marc-orian-com":421064,"omegawatches-com":28285,"tagheuer-com":27580,"fossil-com":28601,"danielwellington-com":39552,"chrono24-fr":149650,"chrono24-com":18130,"ray-ban-com":10848,"esteelauder-com":41191,"lancome-fr":226146,"clarins-fr":236531,"guerlain-com":36323,"diptyqueparis-com":75038,"lush-com":15848,"kikocosmetics-com":34638,"maccosmetics-fr":423462,"maccosmetics-com":34658,"nyxcosmetics-com":82784,"fentybeauty-com":42755,"narscosmetics-com":100721,"benefitcosmetics-com":56201,"thebodyshop-com":34969,"loccitane-com":15400,"caudalie-com":62785,"nuxe-com":113103,"laroche-posay-fr":229191,"eau-thermale-avene-fr":347724,"bioderma-fr":386497,"vichy-fr":447884,"cerave-fr":555676,"theordinary-com":41261,"typology-com":99016,"sephora-com":4647,"ulta-com":5462,"feelunique-com":67839,"beautylish-com":106659,"douglas-de":25162,"vogue-com":3168,"elle-com":3249,"harpersbazaar-com":5028,"gq-com":5257,"vanityfair-fr":44749,"wwd-com":6688,"businessoffashion-com":18051,"fashionnetwork-com":26365,"refinery29-com":8537,"whowhatwear-com":21646,"thecut-com":8632,"allure-com":10751,"byrdie-com":18844,"opel-fr":351558,"toyota-com":3830,"honda-com":6243,"bmw-com":14694,"mercedes-benz-com":4262,"audi-com":17328,"volkswagen-com":30333,"ford-com":2346,"chevrolet-com":14606,"gm-com":3885,"jeep-com":26670,"mazda-com":34399,"subaru-com":23300,"suzuki-fr":302436,"mitsubishi-motors-com":58527,"lexus-com":22532,"landrover-com":34358,"jaguar-com":29349,"astonmartin-com":32475,"bentleymotors-com":32274,"rolls-roycemotorcars-com":41369,"mclaren-com":30417,"bugatti-com":62209,"maserati-com":32864,"alfaromeo-com":143292,"cupra-com":59574,"polestar-com":21042,"rivian-com":12584,"lucidmotors-com":17471,"stellantis-com":15041,"renaultgroup-com":34108,"bmw-motorrad-com":151233,"ktm-com":28240,"triumphmotorcycles-com":204074,"royalenfield-com":17345,"vespa-com":62502,"piaggio-com":42983,"dafy-moto-com":111366,"motoblouz-com":64153,"spoticar-fr":72480,"reezocar-com":652831,"capcar-fr":404784,"autosphere-fr":134480,"autotrader-com":6551,"cars-com":4043,"carvana-com":6903,"carmax-com":5855,"mobile-de":290,"kbb-com":6477,"edmunds-com":4969,"motortrend-com":11002,"caranddriver-com":5626,"jalopnik-com":11499,"autoblog-com":11034,"carscoops-com":19499,"autocar-co-uk":18154,"whatcar-com":46286,"autonews-fr":65590,"motor1-com":11838,"leblogauto-com":197795,"insideevs-com":19193,"electrek-co":10559,"lepermislibre-fr":433332,"histovec-interieur-gouv-fr":692080,"leasys-com":290270,"vroomly-com":183906,"idgarages-com":284683,"dekra-norisko-fr":332613,"autosecurite-com":384387,"carter-cash-com":33889,"piecesauto24-com":70595,"yakarouler-com":640868,"rockauto-com":12028,"autozone-com":8966,"pneus-online-fr":344678,"go-electra-com":246837,"ionity-eu":184546,"izivia-com":929844,"carbu-com":150068,"gautier-fr":903191,"roche-bobois-com":97061,"ligne-roset-com":160588,"sklum-com":6989,"miliboo-com":137072,"camif-fr":159016,"tediber-com":309666,"zarahome-com":31091,"atmosphera-com":77243,"bouchara-com":172690,"potterybarn-com":11446,"westelm-com":20637,"crateandbarrel-com":13880,"dunelm-com":7424,"delonghi-com":27843,"bosch-home-fr":169067,"whirlpool-fr":402485,"miele-fr":399660,"electrolux-fr":263712,"kaercher-com":12230,"bosch-diy-com":63643,"makita-fr":513625,"dewalt-fr":554953,"ryobitools-eu":55312,"stihl-fr":348994,"husqvarna-com":17923,"gardena-com":33814,"weber-com":18210,"gerbeaud-com":239538,"rhs-org-uk":12696,"bakker-com":188229,"meillandrichardier-com":352975,"philips-hue-com":26065,"arlo-com":3909,"legrand-fr":129670,"tado-com":27693,"ecovacs-com":24881,"roborock-com":9232,"batiactu-com":98380,"ooreka-fr":107676,"maisonapart-com":258319,"admagazine-fr":41877,"bhg-com":7117,"thespruce-com":5391,"housebeautiful-com":13440,"elledecor-com":14421,"bricoman-fr":211630,"tollens-com":398630,"v33-fr":211714,"duluxvalentine-com":507390,"jacobdelafon-fr":909792,"mobalpa-fr":450591,"cuisines-aviva-com":478825,"ixina-fr":471329,"tempur-com":76530,"dodo-fr":493887,"linvosges-com":68451,"blancheporte-fr":19075,"zodio-fr":997204,"dyson-com":13304,"smeg-com":45709,"beko-fr":480644,"vorwerk-com":26605,"eufy-com":9827,"ecobee-com":6757,"simplisafe-com":2775,"ajax-systems":5778,"blinkforhome-com":46493,"wyze-com":6393,"obi-de":6194,"bunnings-com-au":6445,"diy-com":6103,"screwfix-com":10815,"wurth-fr":149180,"bricozor-com":284582,"123elec-com":156222,"thisoldhouse-com":16922,"familyhandyman-com":17324,"bobvila-com":16361,"comprendrechoisir-com":704520,"dwell-com":17170,"archdaily-com":3915,"designboom-com":11113,"zooplus-com":61384,"bitiba-fr":600804,"medpets-fr":865648,"vetostore-com":293160,"lacompagniedesanimaux-com":135161,"fressnapf-de":45749,"petsathome-com":37002,"hillspet-fr":339612,"whiskas-fr":849299,"pedigree-fr":820290,"orijenpetfoods-com":866138,"acana-com":428241,"edgardcooper-com":286372,"bluebuffalo-com":98673,"thefarmersdog-com":80484,"barkbox-com":129512,"tractive-com":17609,"weenect-com":113018,"veterinaire-fr":273258,"vet-alfort-fr":310224,"merckvetmanual-com":41711,"vcahospitals-com":21831,"banfield-com":63474,"petmd-com":16252,"akcpetinsurance-com":452922,"assuropoil-fr":883960,"lemonade-com":28738,"adoptapet-com":26245,"rspca-org-uk":24562,"battersea-org-uk":162288,"dogstrust-org-uk":40994,"humanesociety-org":20394,"bestfriends-org":37118,"ifaw-org":38761,"audubon-org":12357,"rspb-org-uk":21538,"xeno-canto-org":73934,"iucnredlist-org":13129,"janegoodall-org":69762,"sheldrickwildlifetrust-org":153454,"zoo-la-fleche-com":521869,"thoiry-net":428505,"bioparc-zoo-fr":497866,"zoo-amneville-com":446411,"zoo-palmyre-fr":433182,"planetesauvage-com":482446,"cerza-com":565458,"zoo-mulhouse-com":609223,"zsl-org":56680,"bronxzoo-com":123611,"nationalzoo-si-edu":73840,"oceanopolis-com":309324,"seaquarium-fr":565838,"montereybayaquarium-org":33186,"georgiaaquarium-org":61505,"seaworld-com":26672,"equidia-fr":19832,"haras-nationaux-fr":688969,"ifce-fr":127112,"equirodi-com":417194,"padd-fr":402537,"horse-com":188856,"purina-com":30090,"cats-org-uk":83034,"thesprucepets-com":32401,"dogtime-com":67201,"yummypets-com":877937,"inria-fr":5811,"brgm-fr":38069,"ipgp-fr":111790,"obspm-fr":29062,"ecmwf-int":14152,"nsf-gov":4685,"ethz-ch":2585,"college-de-france-fr":41567,"mpg-de":2380,"weizmann-ac-il":17511,"riken-jp":16408,"iter-org":43387,"ligo-org":80950,"jaxa-jp":13722,"isro-gov-in":31543,"roscosmos-ru":52822,"arianespace-com":161743,"ariane-group":182275,"rocketlabusa-com":151929,"virgingalactic-com":54505,"planetary-org":24480,"spaceflightnow-com":34639,"nasaspaceflight-com":39122,"universetoday-com":18578,"skyandtelescope-org":31051,"astronomy-com":20562,"apod-nasa-gov":15480,"earthobservatory-nasa-gov":15480,"in-the-sky-org":139406,"afastronomie-fr":380493,"nhm-ac-uk":10688,"sciencemuseum-org-uk":22917,"amnh-org":11591,"naturalhistory-si-edu":73840,"airandspace-si-edu":73840,"exploratorium-edu":15417,"deutsches-museum-de":38696,"arts-et-metiers-net":160980,"vulcania-com":284309,"acs-org":1822,"aps-org":4923,"iop-org":2888,"royalsociety-org":16333,"academie-sciences-fr":77717,"sciencenews-org":8575,"newatlas-com":6889,"popsci-com":4641,"popularmechanics-com":4797,"discovermagazine-com":7383,"sciencealert-com":5671,"iflscience-com":12830,"eurekalert-org":5477,"nautil-us":19869,"aeon-co":13380,"sciencepost-fr":8910,"trustmyscience-com":226106,"semanticscholar-org":2154,"medrxiv-org":6314,"oeis-org":39434,"phet-colorado-edu":104080,"ptable-com":74833,"earth-google-com":40,"earthquake-usgs-gov":77120,"worldview-earthdata-nasa-gov":15480,"remonterletemps-ign-fr":954840,"lightpollutionmap-info":102176,"science-nasa-gov":15480,"spotthestation-nasa-gov":15480,"physicsworld-com":26568,"chemistryworld-com":35534,"cosmosmagazine-com":42786,"lejournal-cnrs-fr":129080,"ens-lyon-fr":17447,"psl-eu":17045,"cmu-edu":1795,"nist-gov":237,"bipm-org":45169,"images-math-cnrs-fr":129080,"worldometers-info":4873,"gapminder-org":41074,"nsidc-org":32205,"mollat-com":132045,"gibert-com":123559,"chapitre-com":233992,"abebooks-fr":15660,"abebooks-com":3643,"bookdepository-com":19969,"barnesandnoble-com":2123,"waterstones-com":10931,"bookshop-org":5531,"powells-com":16185,"thriftbooks-com":5899,"thestorygraph-com":21024,"librarything-com":8178,"ebooksgratuits-com":179726,"youboox-fr":574119,"albin-michel-fr":112311,"editions-stock-fr":387275,"fayard-fr":126218,"editionspoints-com":446993,"folio-lesite-fr":426835,"seuil-com":68664,"editions-jclattes-fr":388919,"penguinrandomhouse-com":4273,"harpercollins-com":11421,"simonandschuster-com":8010,"macmillan-com":13615,"editions-delcourt-fr":154429,"dupuis-com":251370,"lelombard-com":460015,"futuropolis-fr":598862,"kana-fr":615486,"pika-fr":912127,"izneo-com":243645,"dc-com":23568,"comixology-com":100422,"mangaplus-shueisha-co-jp":747560,"bdgest-com":243206,"bdtheque-com":27515,"bdangouleme-com":235153,"asterix-com":158356,"tintin-com":140088,"grandpalais-fr":56042,"petitpalais-paris-fr":228200,"fondationlouisvuitton-fr":96819,"pinaultcollection-com":130527,"palaisdetokyo-com":106035,"mucem-org":125292,"madparis-fr":100710,"musee-armee-fr":156149,"tate-org-uk":6460,"nationalgallery-org-uk":18751,"vam-ac-uk":10393,"museodelprado-es":20725,"guggenheim-org":17814,"artic-edu":15138,"getty-edu":6983,"vangoghmuseum-nl":26973,"hermitagemuseum-org":29322,"museivaticani-va":31252,"artsy-net":10626,"saatchiart-com":13938,"christies-com":10566,"sothebys-com":11008,"drouot-com":52322,"connaissancedesarts-com":145389,"beauxarts-com":153263,"lequotidiendelart-com":643990,"artnet-com":7339,"theartnewspaper-com":18987,"theatredelaville-paris-com":416444,"theatre-odeon-eu":873977,"theatre-chaillot-fr":732146,"fondation-patrimoine-org":100757,"whc-unesco-org":25040,"unesco-org":626,"pop-culture-gouv-fr":9798120,"chambord-org":148872,"chenonceau-com":208567,"abbaye-mont-saint-michel-fr":491978,"chateaudefontainebleau-fr":270035,"pass-culture-fr":920320,"quefaire-paris-fr":228200,"thebump-com":19101,"parents-com":10772,"todaysparent-com":38526,"healthychildren-org":10392,"kidshealth-org":7189,"pampers-fr":493826,"pampers-com":58125,"huggies-com":135324,"lillydoo-com":275723,"joone-fr":725370,"mustela-fr":518222,"bledina-com":498427,"babybjorn-com":287213,"cybex-online-com":40108,"bugaboo-com":84885,"chicco-fr":85067,"beaba-com":375856,"maxi-cosi-fr":551844,"autourdebebe-com":318382,"sergent-major-com":81020,"carters-com":26209,"oxybul-com":212825,"djeco-com":588746,"janod-com":230055,"ravensburger-fr":357539,"ravensburger-com":237712,"smoby-com":400132,"hotwheels-com":281807,"lunii-com":336710,"tonies-com":30817,"yotoplay-com":20634,"funbrain-com":39817,"abcmouse-com":35627,"starfall-com":9678,"education-com":14822,"logicieleducatif-fr":72456,"soutien67-fr":681218,"ortholud-com":360261,"completude-com":683543,"disney-com":2666,"nick-com":17167,"cartoonnetwork-com":42761,"peppapig-com":889360,"sesamestreet-org":59022,"dreamworks-com":30488,"pixar-com":21362,"ghibli-jp":71723,"nigloland-fr":397339,"jardindacclimatation-fr":315858,"legoland-com":39097,"efteling-com":38e3,"portaventuraworld-com":46785,"disneyworld-disney-go-com":17320,"universalorlando-com":19302,"sixflags-com":15546,"aqualand-fr":177670,"centerparcs-fr":65677,"kidiklik-fr":560500,"nounou-top-fr":73826,"monenfant-fr":153636,"care-com":12862,"naitreetgrandir-com":121677,"supercoloring-com":38685,"crayola-com":30290,"leapfrog-com":86806,"melissaanddoug-com":122146,"schleich-s-com":160290,"sylvanianfamilies-com":227870,"aide-scrabble-fr":201524,"e-sudoku-fr":692233,"genealogies-celebres-fr":441300,"cowblog-fr":349979,"bondyblog-fr":406384,"ladepechedubassin-fr":609147,"linuxtricks-fr":742719,"forum-nas-fr":496147,"domo-blog-fr":743192,"figurinemangafrance-fr":565251,"passion-radio-fr":604855,"achat-or-et-argent-fr":363767,"tourisme-carcassonne-fr":329499,"provence-a-velo-fr":931745,"toulousebasketclub-fr":416783,"leforumdubowling-fr":239147,"ville-saint-malo-fr":879383,"mairie-quimper-fr":408366,"jardin-ecologique-fr":723995,"chant-oiseaux-fr":770337,"cuicui-lespetitsoiseaux-fr":228912,"yogajournalfrance-fr":277406,"lacuisinedegeraldine-fr":432724,"coupecouture-fr":533407,"motobecane-club-de-france-fr":703775,"meteo-centre-fr":661878,"les-zinzins-du-cinema-fr":736321,"cinemathequetoulouse-fr":640457,"cuisinez-pour-bebe-fr":601071,"bloghoptoys-fr":614650,"ville-montrouge-fr":246186,"ville-beziers-fr":375324,"mairie-vannes-fr":379423,"ville-arles-fr":408021,"ville-vichy-fr":445553,"espace-recettes-fr":424995,"amourdecuisine-fr":461449,"adeline-cuisine-fr":645156,"mesrecettesfaciles-fr":655337,"cuisine-saine-fr":456200,"7tarot-fr":644163,"scrabble-valide-fr":315600,"jeu-belote-fr":796892,"scrabble123-fr":640072,"fortboyard-leforum-fr":784619,"forum-hifi-fr":381228,"forumgaming-fr":325276,"geoforum-fr":394137,"radiosalsa-fr":733095,"piano-lille-fr":248316,"radiolor-fr":825710,"lagranderadio-fr":872822,"racingclubnantais-fr":538536,"ffvelo-fr":321726,"skitour-fr":569663,"rando-marche-fr":744643,"montagnes-du-jura-fr":313333,"loireavelo-fr":228251,"gites-de-france-calvados-fr":590206,"trainardeche-fr":604332,"chevalnouvelleaquitaine-fr":680057,"lechevalenor-fr":803086,"leurredelapeche-fr":492190,"saf-astronomie-fr":877771,"astronome-fr":341502,"meteofranccomtoise-fr":809047,"cinema-arvor-fr":575422,"theatresaucinema-fr":715671,"comicsblog-fr":450516,"lepaysdumanga-fr":893770,"solutionslinux-fr":308471,"archlinux-fr":888464,"blog-nouvelles-technologies-fr":379368,"leblog3d-fr":599437,"leclub-bricolage-fr":252419,"lepotager-demesreves-fr":271641,"jardiner-autrement-fr":922933,"parcsetjardins-fr":518026,"potagercity-fr":568991,"leparking-moto-fr":231570,"forum-bmw-fr":567999,"bmwz3club-fr":623297,"avdb-moto-fr":436444,"fkl-couture-fr":323358,"associationfamilialedebrive-fr":405535,"club-50plus-fr":771944,"rando-zen-fr":857757,"jardindesmots-fr":743946,"apprendre-la-photo-fr":713281,"overblog-fr":436560,"artblog-fr":855082,"blogidee-fr":951199,"leblogdocumentaire-fr":947574,"20minutes-blogs-fr":289292,"comptoirdesjardins-fr":772678,"campingaz-shop-fr":768606,"veocinemas-fr":557558},re={savoir:`
universalis.fr | Encyclopædia Universalis | Encyclopédie | book
vikidia.org | Vikidia | Encyclopédie | book
wikimedia.org | Wikimedia | Encyclopédie | book
wikidata.org | Wikidata | Base de savoir | book
wikiquote.org | Wikiquote | Citations | book
wikivoyage.org | Wikivoyage | Guide | book
wikiversity.org | Wikiversité | Cours | book
linternaute.fr | L'Internaute | Encyclopédie | book
u-paris.fr | Université Paris Cité | Université | book
univ-lyon1.fr | Université Lyon 1 | Université | book
univ-amu.fr | Aix-Marseille Université | Université | book
u-bordeaux.fr | Université de Bordeaux | Université | book
unistra.fr | Université de Strasbourg | Université | book
univ-grenoble-alpes.fr | Université Grenoble Alpes | Université | book
universite-paris-saclay.fr | Paris-Saclay | Université | book
univ-lille.fr | Université de Lille | Université | book
univ-rennes.fr | Université de Rennes | Université | book
umontpellier.fr | Université de Montpellier | Université | book
pantheonsorbonne.fr | Paris 1 Panthéon-Sorbonne | Université | book
dauphine.psl.eu | Paris Dauphine | Université | book
hec.edu | HEC Paris | École | briefcase
essec.edu | ESSEC | École | briefcase
insead.edu | INSEAD | École | briefcase
epfl.ch | EPFL | Université | atom
ucl.ac.uk | UCL | Université | book
imperial.ac.uk | Imperial College | Université | atom
berkeley.edu | UC Berkeley | Université | book
yale.edu | Yale | Université | book
princeton.edu | Princeton | Université | book
columbia.edu | Columbia | Université | book
caltech.edu | Caltech | Université | atom
uchicago.edu | Université de Chicago | Université | book
cornell.edu | Cornell | Université | book
umontreal.ca | Université de Montréal | Université | book
ulaval.ca | Université Laval | Université | book
mcgill.ca | McGill | Université | book
utoronto.ca | Université de Toronto | Université | book
uclouvain.be | UCLouvain | Université | book
ulb.be | ULB | Université | book
campusfrance.org | Campus France | Études | plane
letudiant.fr | L'Étudiant | Orientation | book
studyrama.com | Studyrama | Orientation | book
cned.fr | Cned | Cours | book
reseau-canope.fr | Canopé | Éducation | book
mooc-francophone.com | MOOC francophone | Cours | book
fun-mooc.fr | FUN MOOC | Cours | book
alloprof.qc.ca | Alloprof | Aide aux devoirs | book
dcode.fr | dCode | Outils | search
projet-voltaire.fr | Projet Voltaire | Orthographe | pen
leconjugueur.com | Le Conjugueur | Conjugaison | pen
dictionnaire-academie.fr | Dictionnaire de l'Académie | Dictionnaire | book
academie-francaise.fr | Académie française | Langue | book
synonymo.fr | Synonymo | Synonymes | book
lexilogos.com | Lexilogos | Dictionnaire | book
etymonline.com | Etymonline | Étymologie | book
vocabulary.com | Vocabulary.com | Vocabulaire | book
thefreedictionary.com | The Free Dictionary | Dictionnaire | book
dict.cc | dict.cc | Dictionnaire | book
leo.org | LEO | Dictionnaire | book
linguee.com | Linguee | Traduction | book
bab.la | bab.la | Dictionnaire | book
ssrn.com | SSRN | Recherche | atom
biorxiv.org | bioRxiv | Recherche | atom
openedition.org | OpenEdition | Recherche | book
theses.fr | Theses.fr | Thèses | book
worldcat.org | WorldCat | Catalogue | search
gutenberg.org | Projet Gutenberg | Livres libres | book
openlibrary.org | Open Library | Bibliothèque | book
sparknotes.com | SparkNotes | Fiches | book
litcharts.com | LitCharts | Fiches | book
scribd.com | Scribd | Documents | book
slideshare.net | SlideShare | Présentations | book
bac-facile.fr | Bac facile | Révisions | book
annabac.com | Annabac | Révisions | book
sujetdebac.fr | Sujet de bac | Révisions | book
khanacademy.fr | Khan Academy FR | Cours | book
edpuzzle.com | Edpuzzle | Éducation | play
quizizz.com | Quizizz | Quiz | dice
genial.ly | Genially | Éducation | image
padlet.com | Padlet | Éducation | pen
moodle.org | Moodle | Éducation | book
blackboard.com | Blackboard | Éducation | book
instructure.com | Canvas | Éducation | book
wolfram.com | Wolfram | Calcul | atom
mathsisfun.com | Math is Fun | Maths | book
calculator.net | Calculator.net | Calcul | book
omnicalculator.com | Omni Calculator | Calcul | book
history.com | History | Histoire | book
herodote.net | Hérodote | Histoire | book
histoire-pour-tous.fr | Histoire pour tous | Histoire | book
larousse.com | Larousse | Encyclopédie | book
sciencedirect.com | ScienceDirect | Recherche | atom
tandfonline.com | Taylor & Francis | Recherche | atom
frontiersin.org | Frontiers | Recherche | atom
pnas.org | PNAS | Recherche | atom
cell.com | Cell | Recherche | atom
thelancet.com | The Lancet | Recherche | health
nejm.org | NEJM | Recherche | health
orcid.org | ORCID | Recherche | atom
zotero.org | Zotero | Outils | book
`,reseaux:`
twitter.com | Twitter | Réseau social | chat
fb.com | Facebook | Réseau social | users
pinterest.com | Pinterest | Réseau social | image
mastodon.social | Mastodon | Réseau social | chat
threads.com | Threads | Réseau social | chat
t.me | Telegram | Messagerie | chat
kik.com | Kik | Messagerie | chat
wire.com | Wire | Messagerie | chat
element.io | Element | Messagerie | chat
matrix.org | Matrix | Messagerie | chat
olvid.io | Olvid | Messagerie | chat
zoom.com | Zoom | Visio | camera
teamspeak.com | TeamSpeak | Vocal | chat
guilded.gg | Guilded | Communauté | chat
revolt.chat | Revolt | Communauté | chat
kakaotalk.com | KakaoTalk | Messagerie | chat
naver.com | Naver | Portail | search
xing.com | Xing | Réseau pro | briefcase
viadeo.com | Viadeo | Réseau pro | briefcase
lovoo.com | Lovoo | Rencontres | heart
tagged.com | Tagged | Rencontres | heart
pof.com | Plenty of Fish | Rencontres | heart
eharmony.com | eHarmony | Rencontres | heart
elitesingles.com | EliteSingles | Rencontres | heart
parship.fr | Parship | Rencontres | heart
fruitz.io | Fruitz | Rencontres | heart
adopteunmec.com | AdopteUnMec | Rencontres | heart
once.app | Once | Rencontres | heart
feeld.co | Feeld | Rencontres | heart
hily.com | Hily | Rencontres | heart
coffeemeetsbagel.com | Coffee Meets Bagel | Rencontres | heart
zoosk.com | Zoosk | Rencontres | heart
plentyoffish.com | POF | Rencontres | heart
pixelfed.org | Pixelfed | Photo | camera
lemmy.ml | Lemmy | Forum social | forum
blogger.com | Blogger | Blog | pen
blogspot.com | Blogspot | Blog | pen
over-blog.com | Over-blog | Blog | pen
canalblog.com | Canalblog | Blog | pen
livejournal.com | LiveJournal | Blog | pen
myspace.com | Myspace | Réseau social | music
hi5.com | hi5 | Réseau social | users
ngl.link | NGL | Questions | chat
buymeacoffee.com | Buy Me a Coffee | Créateurs | coin
tipeee.com | Tipeee | Créateurs | coin
ulule.com | Ulule | Financement | coin
kisskissbankbank.com | KissKissBankBank | Financement | coin
kickstarter.com | Kickstarter | Financement | coin
indiegogo.com | Indiegogo | Financement | coin
gofundme.com | GoFundMe | Cagnotte | heart
leetchi.com | Leetchi | Cagnotte | coin
gumroad.com | Gumroad | Créateurs | coin
carrd.co | Carrd | Créateurs | users
cameo.com | Cameo | Créateurs | camera
change.org | Change.org | Pétitions | flag
mesopinions.com | MesOpinions | Pétitions | flag
avaaz.org | Avaaz | Pétitions | flag
couchsurfing.com | Couchsurfing | Communauté | home
on-va-sortir.com | OVS | Sorties | users
eventbrite.com | Eventbrite | Événements | users
eventbrite.fr | Eventbrite FR | Événements | users
vk.ru | VK | Réseau social | users
mail.ru | Mail.ru | Portail | mail
douban.com | Douban | Réseau social | users
zhihu.com | Zhihu | Questions | forum
kuaishou.com | Kuaishou | Vidéo sociale | play
unsplash.com | Unsplash | Photo | camera
pexels.com | Pexels | Photo | camera
pixabay.com | Pixabay | Photo | camera
weheartit.com | We Heart It | Photo | heart
picsart.com | Picsart | Créateurs | image
untappd.com | Untappd | Réseau social | users
foursquare.com | Foursquare | Lieux | pin
swarmapp.com | Swarm | Lieux | pin
life360.com | Life360 | Famille | pin
discord.gg | Discord invite | Communauté | chat
imo.im | imo | Messagerie | chat
beehiiv.com | beehiiv | Newsletters | mail
ghost.org | Ghost | Blog | pen
typepad.com | Typepad | Blog | pen
disqus.com | Disqus | Commentaires | chat
archiveofourown.org | AO3 | Fanfictions | pen
fanfiction.net | FanFiction.net | Fanfictions | pen
kwai.com | Kwai | Vidéo sociale | play
sharechat.com | ShareChat | Réseau social | users
gettr.com | Gettr | Réseau social | chat
plurk.com | Plurk | Microblog | chat
mixi.jp | mixi | Réseau social | users
ameba.jp | Ameba | Blog | pen
note.com | note | Blog | pen
tistory.com | Tistory | Blog | pen
band.us | BAND | Groupes | users
jaumo.com | Jaumo | Rencontres | heart
ourtime.fr | Ourtime | Rencontres | heart
edarling.fr | eDarling | Rencontres | heart
`,video:`
youtu.be | YouTube (liens) | Vidéo en ligne | play
youtubekids.com | YouTube Kids | Vidéo enfants | play
tf1info.fr | TF1 Info | Télé | news
m6plus.fr | M6+ | Replay | play
francetelevisions.fr | France Télévisions | Télé | play
w9.fr | W9 | Chaîne | play
tfx.fr | TFX | Chaîne | play
c8.fr | C8 | Chaîne | play
nrj12.fr | NRJ12 | Chaîne | play
programme.tv | Programme.tv | Programme télé | news
telestar.fr | Télé Star | Programme télé | news
tele7.fr | Télé 7 Jours | Programme télé | news
toutelatele.com | Toutelatele | Actu télé | news
puremedias.com | Puremédias | Actu télé | news
kinepolis.fr | Kinepolis | Cinéma | film
mk2.com | MK2 | Cinéma | film
unifrance.org | UniFrance | Cinéma | film
cnc.fr | CNC | Cinéma | film
jpbox-office.com | JP's Box-Office | Cinéma | film
cinetrafic.fr | Cinetrafic | Cinéma | film
filmaffinity.com | FilmAffinity | Critiques | film
tvtime.com | TV Time | Séries | film
tvmaze.com | TVmaze | Séries | film
thetvdb.com | TheTVDB | Séries | film
crackle.com | Crackle | Streaming | play
roku.com | Roku | Streaming | play
britbox.com | BritBox | Streaming | play
acorn.tv | Acorn TV | Streaming | play
shudder.com | Shudder | Streaming | film
kanopy.com | Kanopy | Streaming | film
hidive.com | HIDIVE | Anime | play
myanimelist.net | MyAnimeList | Anime | play
anilist.co | AniList | Anime | play
kitsu.app | Kitsu | Anime | play
anime-planet.com | Anime-Planet | Anime | play
toei-animation.com | Toei Animation | Anime | play
channel5.com | Channel 5 | Chaîne | play
sky.com | Sky | Télé | play
skyshowtime.com | SkyShowtime | Streaming | play
zdf.de | ZDF | Chaîne | play
ardmediathek.de | ARD Mediathek | Replay | play
rai.it | Rai | Chaîne | play
rtve.es | RTVE | Chaîne | play
atresplayer.com | Atresplayer | Replay | play
tou.tv | ICI Tou.tv | Replay | play
crave.ca | Crave | Streaming | play
noovo.ca | Noovo | Chaîne | play
telequebec.tv | Télé-Québec | Chaîne | play
nfb.ca | ONF | Cinéma | film
publicsenat.fr | Public Sénat | Chaîne | news
paris-premiere.fr | Paris Première | Chaîne | play
ocs.fr | OCS | Streaming | film
lacinetek.com | LaCinetek | Streaming | film
brut.media | Brut | Vidéo info | news
trovo.live | Trovo | Live | live
streamlabs.com | Streamlabs | Live | live
obsproject.com | OBS Studio | Live | live
twitchtracker.com | TwitchTracker | Live | live
streamscharts.com | Streams Charts | Live | live
joinpeertube.org | PeerTube | Vidéo en ligne | play
vidyard.com | Vidyard | Vidéo en ligne | play
wistia.com | Wistia | Vidéo en ligne | play
streamable.com | Streamable | Vidéo en ligne | play
coub.com | Coub | Vidéo en ligne | play
veoh.com | Veoh | Vidéo en ligne | play
curiositystream.com | CuriosityStream | Documentaires | play
nebula.tv | Nebula | Streaming | play
viu.com | Viu | Streaming | play
wetv.vip | WeTV | Streaming | play
iq.com | iQIYI | Streaming | play
sonyliv.com | SonyLIV | Streaming | play
jiocinema.com | JioCinema | Streaming | play
vix.com | ViX | Streaming | play
showmax.com | Showmax | Streaming | play
svtplay.se | SVT Play | Replay | play
dr.dk | DR | Chaîne | play
npo.nl | NPO | Chaîne | play
srf.ch | SRF | Chaîne | play
playsuisse.ch | Play Suisse | Streaming | play
tvnz.co.nz | TVNZ | Chaîne | play
cbc.ca | CBC | Chaîne | play
pbs.org | PBS | Chaîne | play
cwtv.com | The CW | Chaîne | play
tntdrama.com | TNT | Chaîne | play
fxnetworks.com | FX | Chaîne | play
usanetwork.com | USA Network | Chaîne | play
comedycentral.com | Comedy Central | Chaîne | play
mtv.com | MTV | Chaîne | music
adultswim.com | Adult Swim | Chaîne | play
discovery.com | Discovery | Chaîne | play
aetv.com | A&E | Chaîne | play
mylifetime.com | Lifetime | Chaîne | play
hgtv.com | HGTV | Chaîne | home
bravotv.com | Bravo | Chaîne | play
a24films.com | A24 | Studio | film
paramount.com | Paramount | Studio | film
sonypictures.com | Sony Pictures | Studio | film
lionsgate.com | Lionsgate | Studio | film
marvel.com | Marvel | Studio | film
starwars.com | Star Wars | Franchise | film
`,ia:`
sora.com | Sora | Vidéo IA | film
labs.google | Google Labs | Outils IA | sparkle
kimi.com | Kimi | Assistant IA | sparkle
manus.im | Manus | Agent IA | sparkle
genspark.ai | Genspark | Agent IA | sparkle
replicate.com | Replicate | Plateforme IA | code
together.ai | Together AI | Plateforme IA | code
cohere.com | Cohere | Modèles IA | sparkle
ai21.com | AI21 Labs | Modèles IA | sparkle
llama.com | Llama | Modèles IA | sparkle
lmarena.ai | LMArena | Classement IA | sparkle
theresanaiforthat.com | There's An AI For That | Annuaire IA | search
futurepedia.io | Futurepedia | Annuaire IA | search
hailuoai.video | Hailuo AI | Vidéo IA | film
pixverse.ai | PixVerse | Vidéo IA | film
invideo.io | InVideo | Vidéo IA | film
pictory.ai | Pictory | Vidéo IA | film
captions.ai | Captions | Vidéo IA | camera
opus.pro | OpusClip | Vidéo IA | play
veed.io | VEED | Montage IA | play
capcut.com | CapCut | Montage IA | play
clipchamp.com | Clipchamp | Montage IA | play
nightcafe.studio | NightCafe | Images IA | image
tensor.art | Tensor.Art | Images IA | image
seaart.ai | SeaArt | Images IA | image
craiyon.com | Craiyon | Images IA | image
deepai.org | DeepAI | Images IA | image
freepik.com | Freepik | Images IA | image
magnific.ai | Magnific | Images IA | image
fal.ai | fal | Plateforme IA | code
blackforestlabs.ai | Black Forest Labs | Images IA | image
cleanup.pictures | Cleanup.pictures | Images IA | image
letsenhance.io | Let's Enhance | Images IA | image
fotor.com | Fotor | Images IA | image
pixlr.com | Pixlr | Images IA | image
murf.ai | Murf | Voix IA | radio
play.ht | PlayHT | Voix IA | radio
naturalreaders.com | NaturalReader | Voix IA | radio
lovo.ai | LOVO | Voix IA | radio
voicemod.net | Voicemod | Voix IA | radio
vocalremover.org | Vocal Remover | Audio IA | music
aiva.ai | AIVA | Musique IA | music
soundraw.io | Soundraw | Musique IA | music
riffusion.com | Riffusion | Musique IA | music
tldv.io | tl;dv | Réunions IA | chat
read.ai | Read AI | Réunions IA | chat
krisp.ai | Krisp | Audio IA | radio
sonix.ai | Sonix | Transcription | pen
happyscribe.com | Happy Scribe | Transcription | pen
writesonic.com | Writesonic | Rédaction IA | pen
rytr.me | Rytr | Rédaction IA | pen
wordtune.com | Wordtune | Rédaction IA | pen
scribbr.fr | Scribbr | Rédaction | pen
zerogpt.com | ZeroGPT | Détecteur IA | search
copyleaks.com | Copyleaks | Détecteur IA | search
originality.ai | Originality.ai | Détecteur IA | search
chatpdf.com | ChatPDF | Assistant IA | book
consensus.app | Consensus | Recherche IA | search
scite.ai | scite | Recherche IA | search
pitch.com | Pitch | Présentations | image
slidesgo.com | Slidesgo | Présentations | image
napkin.ai | Napkin | Visuels IA | image
uizard.io | Uizard | Design IA | image
framer.com | Framer | Sites IA | code
10web.io | 10Web | Sites IA | code
windsurf.com | Windsurf | Code IA | code
tabnine.com | Tabnine | Code IA | code
sourcegraph.com | Sourcegraph | Code IA | code
cognition.ai | Cognition | Code IA | code
blackbox.ai | Blackbox AI | Code IA | code
lmstudio.ai | LM Studio | IA locale | cube
jan.ai | Jan | IA locale | cube
llamaindex.ai | LlamaIndex | Outils IA | code
pinecone.io | Pinecone | Outils IA | code
wandb.ai | Weights & Biases | Outils IA | code
scale.com | Scale AI | Données IA | cube
roboflow.com | Roboflow | Vision IA | camera
runpod.io | RunPod | Cloud IA | cloud
coreweave.com | CoreWeave | Cloud IA | cloud
cerebras.ai | Cerebras | Puces IA | cube
lighton.ai | LightOn | Modèles IA | sparkle
kyutai.org | Kyutai | Recherche IA | atom
kindroid.ai | Kindroid | Compagnon IA | heart
inworld.ai | Inworld | IA jeux | gamepad
novelai.net | NovelAI | Rédaction IA | pen
sudowrite.com | Sudowrite | Rédaction IA | pen
exa.ai | Exa | Recherche IA | search
felo.ai | Felo | Recherche IA | search
arc.net | Arc | Navigateur IA | search
diabrowser.com | Dia | Navigateur IA | search
make.com | Make | Automatisation | code
n8n.io | n8n | Automatisation | code
lindy.ai | Lindy | Agents IA | sparkle
crewai.com | CrewAI | Agents IA | sparkle
botpress.com | Botpress | Chatbot | chat
tidio.com | Tidio | Chatbot | chat
photoai.com | Photo AI | Photos IA | camera
headshotpro.com | HeadshotPro | Photos IA | camera
hedra.com | Hedra | Vidéo IA | film
higgsfield.ai | Higgsfield | Vidéo IA | film
`,tech:`
office.com | Microsoft 365 | Bureautique | briefcase
live.com | Microsoft Live | Compte | mail
android.com | Android | Système | cube
libreoffice.org | LibreOffice | Bureautique | pen
wps.com | WPS Office | Bureautique | pen
7-zip.org | 7-Zip | Logiciel | cube
notepad-plus-plus.org | Notepad++ | Logiciel | code
inkscape.org | Inkscape | Logiciel | image
audacityteam.org | Audacity | Audio | music
ccleaner.com | CCleaner | Logiciel | cube
anydesk.com | AnyDesk | Bureau à distance | cloud
softonic.com | Softonic | Téléchargement | cube
sourceforge.net | SourceForge | Développeurs | code
apkmirror.com | APKMirror | Applications | cube
ubuntu.com | Ubuntu | Linux | cube
fedoraproject.org | Fedora | Linux | cube
linuxmint.com | Linux Mint | Linux | cube
redhat.com | Red Hat | Linux | cube
arduino.cc | Arduino | Matériel | cube
prixtel.com | Prixtel | Opérateur | radio
lebara.fr | Lebara | Opérateur | radio
coriolis.com | Coriolis | Opérateur | radio
degrouptest.com | Degrouptest | Comparateur télécom | radio
nperf.com | nPerf | Test débit | radio
arcep.fr | Arcep | Télécoms | radio
swisscom.ch | Swisscom | Opérateur | radio
t-mobile.com | T-Mobile | Opérateur | radio
att.com | AT&T | Opérateur | radio
telekom.de | Telekom | Opérateur | radio
ee.co.uk | EE | Opérateur | radio
movistar.es | Movistar | Opérateur | radio
videotron.com | Vidéotron | Opérateur | radio
rogers.com | Rogers | Opérateur | radio
starlink.com | Starlink | Internet satellite | radio
qualcomm.com | Qualcomm | Puces | cube
tsmc.com | TSMC | Puces | cube
westerndigital.com | Western Digital | Stockage | cube
kingston.com | Kingston | Matériel | cube
razer.com | Razer | Matériel | gamepad
gigabyte.com | Gigabyte | Matériel | cube
oneplus.com | OnePlus | Smartphones | cube
vivo.com | vivo | Smartphones | cube
realme.com | realme | Smartphones | cube
sonos.com | Sonos | Audio | music
jbl.com | JBL | Audio | music
nikon.fr | Nikon | Photo | camera
gopro.com | GoPro | Caméras | camera
epson.fr | Epson | Imprimantes | cube
tp-link.com | TP-Link | Réseau | radio
ui.com | Ubiquiti | Réseau | radio
cisco.com | Cisco | Réseau | radio
oracle.com | Oracle | Logiciels | cube
vmware.com | VMware | Cloud | cloud
akamai.com | Akamai | Cloud | cloud
scaleway.com | Scaleway | Cloud | cloud
o2switch.fr | o2switch | Hébergement | cloud
gandi.net | Gandi | Domaines | cloud
hetzner.com | Hetzner | Cloud | cloud
vultr.com | Vultr | Cloud | cloud
fly.io | Fly.io | Cloud | cloud
mongodb.com | MongoDB | Bases de données | code
mysql.com | MySQL | Bases de données | code
elastic.co | Elastic | Développeurs | code
datadoghq.com | Datadog | Développeurs | code
postman.com | Postman | Développeurs | code
visualstudio.com | Visual Studio | Développeurs | code
react.dev | React | Développeurs | code
vuejs.org | Vue.js | Développeurs | code
svelte.dev | Svelte | Développeurs | code
typescriptlang.org | TypeScript | Développeurs | code
go.dev | Go | Développeurs | code
java.com | Java | Développeurs | code
tailwindcss.com | Tailwind CSS | Développeurs | code
unity.com | Unity | Développeurs | gamepad
godotengine.org | Godot | Développeurs | gamepad
regex101.com | regex101 | Développeurs | code
css-tricks.com | CSS-Tricks | Développeurs | code
geeksforgeeks.org | GeeksforGeeks | Développeurs | code
hackerrank.com | HackerRank | Développeurs | code
norton.com | Norton | Sécurité | ghost
bitdefender.fr | Bitdefender | Sécurité | ghost
avg.com | AVG | Sécurité | ghost
surfshark.com | Surfshark | VPN | ghost
privateinternetaccess.com | PIA | VPN | ghost
dashlane.com | Dashlane | Mots de passe | ghost
crowdstrike.com | CrowdStrike | Sécurité | ghost
torproject.org | Tor | Vie privée | ghost
lemondeinformatique.fr | Le Monde Informatique | Actu tech | news
siecledigital.fr | Siècle Digital | Actu tech | news
journaldunet.com | JDN | Actu tech | news
tomsguide.fr | Tom's Guide | Actu tech | news
phonandroid.com | Phonandroid | Actu tech | news
macg.co | MacGeneration | Actu tech | news
zdnet.com | ZDNet US | Actu tech | news
9to5google.com | 9to5Google | Actu tech | news
mashable.com | Mashable | Actu tech | news
techradar.com | TechRadar | Actu tech | news
howtogeek.com | How-To Geek | Tutoriels | news
bleepingcomputer.com | BleepingComputer | Sécurité | news
notebookcheck.net | Notebookcheck | Tests | news
`,shopping:`
amazon.es | Amazon Espagne | E-commerce | cart
amazon.it | Amazon Italie | E-commerce | cart
amazon.ca | Amazon Canada | E-commerce | cart
amazon.in | Amazon Inde | E-commerce | cart
ebay.de | eBay Allemagne | Enchères | cart
lidl.de | Lidl Allemagne | Supermarché | cart
netto.fr | Netto | Supermarché | cart
magasins-u.com | Magasins U | Supermarché | cart
lagrandeepicerie.com | La Grande Épicerie | Épicerie | cart
biocoop.fr | Biocoop | Bio | leaf
greenweez.com | Greenweez | Bio | leaf
promocash.com | Promocash | Grossiste | cart
tesco.com | Tesco | Supermarché | cart
sainsburys.co.uk | Sainsbury's | Supermarché | cart
ocado.com | Ocado | Supermarché | cart
kroger.com | Kroger | Supermarché | cart
traderjoes.com | Trader Joe's | Supermarché | cart
instacart.com | Instacart | Livraison | cart
rewe.de | REWE | Supermarché | cart
edeka.de | EDEKA | Supermarché | cart
migros.ch | Migros | Supermarché | cart
coop.ch | Coop | Supermarché | cart
colruyt.be | Colruyt | Supermarché | cart
iga.net | IGA | Supermarché | cart
kohls.com | Kohl's | Grand magasin | tag
macys.com | Macy's | Grand magasin | tag
nordstrom.com | Nordstrom | Grand magasin | tag
samsclub.com | Sam's Club | Grossiste | cart
dollargeneral.com | Dollar General | Discount | tag
cvs.com | CVS | Pharmacie | health
walgreens.com | Walgreens | Pharmacie | health
johnlewis.com | John Lewis | Grand magasin | tag
marksandspencer.com | Marks & Spencer | Grand magasin | tag
currys.co.uk | Currys | High-tech | cart
mediamarkt.de | MediaMarkt | High-tech | cart
coolblue.nl | Coolblue | High-tech | cart
galaxus.ch | Galaxus | E-commerce | cart
aboutyou.de | ABOUT YOU | Mode | tag
bonprix.fr | bonprix | Mode | tag
3suisses.fr | 3 Suisses | Vente à distance | cart
damart.fr | Damart | Vente à distance | tag
galerieslafayette.com | Galeries Lafayette | Grand magasin | tag
lebonmarche.com | Le Bon Marché | Grand magasin | tag
bhv.fr | BHV | Grand magasin | tag
stokomani.fr | Stokomani | Discount | tag
noz.fr | Noz | Déstockage | tag
flyingtiger.com | Flying Tiger | Bazar | tag
sostrenegrene.com | Søstrene Grene | Bazar | home
rueducommerce.fr | Rue du Commerce | E-commerce | cart
grosbill.com | Grosbill | High-tech | cart
kelkoo.fr | Kelkoo | Comparateur | search
idealo.de | idealo Allemagne | Comparateur | search
pricerunner.com | PriceRunner | Comparateur | search
keepa.com | Keepa | Suivi de prix | search
joinhoney.com | Honey | Bons plans | tag
widilo.fr | Widilo | Cashback | coin
joko.com | Joko | Cashback | coin
ma-reduc.com | Ma-Reduc | Codes promo | tag
retailmenot.com | RetailMeNot | Codes promo | tag
hotukdeals.com | hotukdeals | Bons plans | tag
mydealz.de | mydealz | Bons plans | tag
bonial.fr | Bonial | Catalogues | news
tiendeo.fr | Tiendeo | Catalogues | news
vente-unique.com | Vente-unique | Meubles | home
brandalley.fr | BrandAlley | Ventes privées | tag
otrium.fr | Otrium | Déstockage | tag
certideal.com | Certideal | Reconditionné | cube
easycash.fr | Easy Cash | Occasion | coin
momox-shop.fr | momox | Occasion | book
recyclivre.com | RecycLivre | Occasion | book
subito.it | Subito | Petites annonces | tag
2ememain.be | 2ememain | Petites annonces | tag
olx.pl | OLX | Petites annonces | tag
avito.ru | Avito | Petites annonces | tag
wildberries.ru | Wildberries | Marketplace | cart
trendyol.com | Trendyol | Marketplace | cart
hepsiburada.com | Hepsiburada | Marketplace | cart
noon.com | Noon | Marketplace | cart
takealot.com | Takealot | Marketplace | cart
lazada.co.th | Lazada | Marketplace | cart
tokopedia.com | Tokopedia | Marketplace | cart
gmarket.co.kr | Gmarket | Marketplace | cart
pinduoduo.com | Pinduoduo | Marketplace | cart
dhgate.com | DHgate | Marketplace | cart
banggood.com | Banggood | Marketplace | cart
joom.com | Joom | Marketplace | cart
mercadolivre.com.br | Mercado Livre | Marketplace | cart
magazineluiza.com.br | Magalu | Marketplace | cart
myntra.com | Myntra | Mode | tag
meesho.com | Meesho | Marketplace | cart
yoox.com | YOOX | Mode | tag
ssense.com | SSENSE | Mode | tag
net-a-porter.com | Net-a-Porter | Mode | tag
revolve.com | Revolve | Mode | tag
prettylittlething.com | PrettyLittleThing | Mode | tag
fashionnova.com | Fashion Nova | Mode | tag
overstock.com | Overstock | E-commerce | home
qvc.com | QVC | Téléachat | play
teleshopping.fr | Téléshopping | Téléachat | play
costco.fr | Costco France | Grossiste | cart
`,jeux:`
nintendo.co.jp | Nintendo Japon | Console | gamepad
steamdb.info | SteamDB | Base de jeux | gamepad
steampowered.com | Steam | Store | gamepad
ubisoftconnect.com | Ubisoft Connect | Launcher | gamepad
2k.com | 2K | Éditeur | gamepad
take2games.com | Take-Two | Éditeur | gamepad
cdprojektred.com | CD Projekt Red | Studio | gamepad
cyberpunk.net | Cyberpunk 2077 | Jeu vidéo | gamepad
thewitcher.com | The Witcher | Jeu vidéo | gamepad
fromsoftware.jp | FromSoftware | Studio | gamepad
paradoxinteractive.com | Paradox | Éditeur | gamepad
focus-entmt.com | Focus Entertainment | Éditeur | gamepad
nacon.com | Nacon | Éditeur | gamepad
quanticdream.com | Quantic Dream | Studio | gamepad
bungie.net | Bungie | Studio | gamepad
warframe.com | Warframe | Jeu en ligne | gamepad
pathofexile.com | Path of Exile | Jeu en ligne | gamepad
eveonline.com | EVE Online | Jeu en ligne | gamepad
finalfantasyxiv.com | Final Fantasy XIV | Jeu en ligne | gamepad
guildwars2.com | Guild Wars 2 | Jeu en ligne | gamepad
runescape.com | RuneScape | Jeu en ligne | gamepad
dofus.com | Dofus | Jeu en ligne | gamepad
ankama.com | Ankama | Studio | gamepad
worldoftanks.eu | World of Tanks | Jeu en ligne | gamepad
wargaming.net | Wargaming | Éditeur | gamepad
playoverwatch.com | Overwatch | Jeu vidéo | gamepad
callofduty.com | Call of Duty | Jeu vidéo | gamepad
rocketleague.com | Rocket League | Jeu vidéo | gamepad
apexlegends.com | Apex Legends | Jeu vidéo | gamepad
pubg.com | PUBG | Jeu vidéo | gamepad
among-us.com | Among Us | Jeu vidéo | gamepad
terraria.org | Terraria | Jeu vidéo | gamepad
stardewvalley.net | Stardew Valley | Jeu vidéo | gamepad
thesims.com | Les Sims | Jeu vidéo | gamepad
habbo.fr | Habbo | Jeu en ligne | gamepad
geforce.com | GeForce | Matériel | gamepad
logitechg.com | Logitech G | Équipement | gamepad
steelseries.com | SteelSeries | Équipement | gamepad
corsair.com | Corsair | Équipement | gamepad
hyperx.com | HyperX | Équipement | gamepad
alienware.com | Alienware | Matériel | gamepad
meta.com | Meta Quest | Réalité virtuelle | gamepad
fanatical.com | Fanatical | Store | tag
cdkeys.com | CDKeys | Store | tag
eneba.com | Eneba | Store | tag
gamesplanet.com | Gamesplanet | Store | tag
isthereanydeal.com | IsThereAnyDeal | Bons plans | tag
dlcompare.fr | DLCompare | Comparateur | tag
opencritic.com | OpenCritic | Critiques | news
gamesradar.com | GamesRadar | Actu jeux | news
rockpapershotgun.com | Rock Paper Shotgun | Actu jeux | news
vg247.com | VG247 | Actu jeux | news
thegamer.com | TheGamer | Actu jeux | news
gamerant.com | Game Rant | Actu jeux | news
destructoid.com | Destructoid | Actu jeux | news
videogameschronicle.com | VGC | Actu jeux | news
jeuxactu.com | JeuxActu | Actu jeux | news
jeuxvideo-live.com | JVL | Actu jeux | news
gameblog.fr | Gameblog | Actu jeux | news
journaldugamer.com | Journal du Gamer | Actu jeux | news
actugaming.net | ActuGaming | Actu jeux | news
nintendo-town.fr | Nintendo-Town | Actu jeux | news
nintendolife.com | Nintendo Life | Actu jeux | news
pushsquare.com | Push Square | Actu jeux | news
purexbox.com | Pure Xbox | Actu jeux | news
gamesindustry.biz | GamesIndustry.biz | Actu jeux | news
lolesports.com | LoL Esports | E-sport | live
esl.com | ESL | E-sport | live
faceit.com | FACEIT | E-sport | live
start.gg | start.gg | Tournois | live
battlefy.com | Battlefy | Tournois | live
karminecorp.fr | Karmine Corp | E-sport | live
vitality.gg | Team Vitality | E-sport | live
vlr.gg | VLR.gg | E-sport | live
dotabuff.com | Dotabuff | Statistiques | gamepad
u.gg | U.GG | Statistiques | gamepad
mobalytics.gg | Mobalytics | Statistiques | gamepad
leagueofgraphs.com | League of Graphs | Statistiques | gamepad
fortnitetracker.com | Fortnite Tracker | Statistiques | gamepad
minecraft.wiki | Minecraft Wiki | Wiki | book
serebii.net | Serebii | Pokémon | book
gamefaqs.com | GameFAQs | Astuces | book
neoseeker.com | Neoseeker | Astuces | book
powerpyx.com | PowerPyx | Guides | book
wowhead.com | Wowhead | Guides | book
icy-veins.com | Icy Veins | Guides | book
game8.co | Game8 | Guides | book
namemc.com | NameMC | Minecraft | cube
planetminecraft.com | Planet Minecraft | Minecraft | cube
hypixel.net | Hypixel | Serveur | cube
modrinth.com | Modrinth | Mods | cube
retroachievements.org | RetroAchievements | Rétro | gamepad
backloggd.com | Backloggd | Communauté | gamepad
igdb.com | IGDB | Base de jeux | gamepad
mobygames.com | MobyGames | Base de jeux | gamepad
protondb.com | ProtonDB | Compatibilité | gamepad
geforcenow.com | GeForce Now | Cloud gaming | cloud
shadow.tech | Shadow | Cloud gaming | cloud
chesstempo.com | Chess Tempo | Échecs | dice
ffechecs.org | FFE | Échecs | dice
jeuxdemots.org | JeuxDeMots | Jeu de mots | dice
sudoku.com | Sudoku.com | Casse-tête | dice
jigsawplanet.com | Jigsaw Planet | Puzzle | dice
solitaired.com | Solitaired | Cartes | dice
seterra.com | Seterra | Géographie | map
sporcle.com | Sporcle | Quiz | dice
kahoot.com | Kahoot! | Quiz | dice
gartic.io | Gartic | Jeu en ligne | pen
tetr.io | TETR.IO | Jeu en ligne | gamepad
diep.io | diep.io | Jeu en ligne | gamepad
zombsroyale.io | ZombsRoyale | Jeu en ligne | gamepad
shellshock.io | Shell Shockers | Jeu en ligne | gamepad
y8.com | Y8 | Jeux en ligne | gamepad
addictinggames.com | Addicting Games | Jeux en ligne | gamepad
newgrounds.com | Newgrounds | Jeux en ligne | gamepad
jeuxjeuxjeux.fr | JeuxJeuxJeux | Jeux en ligne | gamepad
zylom.com | Zylom | Jeux en ligne | gamepad
philibertnet.com | Philibert | Jeux de société | dice
asmodee.fr | Asmodee France | Jeux de société | dice
catan.com | Catan | Jeux de société | dice
cardmarket.com | Cardmarket | Cartes | dice
tcgplayer.com | TCGplayer | Cartes | dice
pokemontcg.com | Pokémon TCG | Jeu de cartes | dice
yugioh-card.com | Yu-Gi-Oh! | Jeu de cartes | dice
games-workshop.com | Games Workshop | Figurines | dice
warhammer.com | Warhammer | Figurines | dice
tabletopia.com | Tabletopia | Jeux de société | dice
playingcards.io | PlayingCards.io | Cartes | dice
`,musique:`
napster.com | Napster | Streaming | music
anghami.com | Anghami | Streaming | music
boomplay.com | Boomplay | Streaming | music
jiosaavn.com | JioSaavn | Streaming | music
gaana.com | Gaana | Streaming | music
radioplayer.fr | Radioplayer | Radio | radio
radio.garden | Radio Garden | Radio | radio
nrj.be | NRJ Belgique | Radio | radio
virginradio.fr | Virgin Radio | Radio | radio
europe2.fr | Europe 2 | Radio | radio
rfm.fr | RFM | Radio | radio
mfmradio.fr | MFM Radio | Radio | radio
radiomeuh.com | Radio Meuh | Radio | radio
fg.radio | Radio FG | Radio | radio
kexp.org | KEXP | Radio | radio
npr.org | NPR | Radio | radio
somafm.com | SomaFM | Radio | radio
lyricstranslate.com | LyricsTranslate | Paroles | pen
songlyrics.com | SongLyrics | Paroles | pen
lyrics.com | Lyrics.com | Paroles | pen
paroles-musique.com | Paroles Musique | Paroles | pen
greatsong.net | GreatSong | Paroles | pen
lacoccinelle.net | La Coccinelle | Paroles | pen
songfacts.com | Songfacts | Encyclopédie | book
whosampled.com | WhoSampled | Samples | music
rateyourmusic.com | Rate Your Music | Critiques | music
albumoftheyear.org | Album of the Year | Critiques | music
musicbrainz.org | MusicBrainz | Base musicale | music
tunebat.com | Tunebat | Outils | music
chosic.com | Chosic | Découverte | music
everynoise.com | Every Noise | Découverte | music
nme.com | NME | Actu musique | news
stereogum.com | Stereogum | Actu musique | news
consequence.net | Consequence | Actu musique | news
loudwire.com | Loudwire | Actu musique | news
kerrang.com | Kerrang! | Actu musique | news
spin.com | Spin | Actu musique | news
hotnewhiphop.com | HotNewHipHop | Actu musique | news
xxlmag.com | XXL | Actu musique | news
complex.com | Complex | Actu musique | news
thefader.com | The Fader | Actu musique | news
residentadvisor.net | Resident Advisor | Électro | live
mixmag.net | Mixmag | Électro | news
tsugi.fr | Tsugi | Actu musique | news
rollingstone.fr | Rolling Stone France | Actu musique | news
rapelite.com | Rap Elite | Rap | news
chartsinfrance.net | Charts in France | Classements | music
snepmusique.com | SNEP | Classements | music
kworb.net | Kworb | Classements | music
officialcharts.com | Official Charts | Classements | music
livenation.fr | Live Nation | Concerts | live
stubhub.com | StubHub | Billets | live
viagogo.com | viagogo | Billets | live
dice.fm | DICE | Concerts | live
shotgun.live | Shotgun | Soirées | live
infoconcert.com | Infoconcert | Concerts | live
digitick.com | Digitick | Billets | live
olympiahall.com | L'Olympia | Salle | live
accorarena.com | Accor Arena | Salle | live
coachella.com | Coachella | Festival | live
tomorrowland.com | Tomorrowland | Festival | live
glastonburyfestivals.co.uk | Glastonbury | Festival | live
hellfest.fr | Hellfest | Festival | live
solidays.org | Solidays | Festival | live
lesvieillescharrues.asso.fr | Vieilles Charrues | Festival | live
eurovision.tv | Eurovision | Concours | live
grammy.com | Grammy Awards | Récompenses | sparkle
thomann.de | Thomann | Instruments | music
woodbrass.com | Woodbrass | Instruments | music
laboutiquedumusicien.com | Boutique du Musicien | Instruments | music
musicstore.com | Music Store | Instruments | music
guitarcenter.com | Guitar Center | Instruments | music
sweetwater.com | Sweetwater | Instruments | music
reverb.com | Reverb | Instruments | music
fender.com | Fender | Guitares | music
gibson.com | Gibson | Guitares | music
yamaha.com | Yamaha | Instruments | music
roland.com | Roland | Instruments | music
ableton.com | Ableton | Production | music
image-line.com | FL Studio | Production | music
native-instruments.com | Native Instruments | Production | music
steinberg.net | Steinberg | Production | music
izotope.com | iZotope | Production | music
waves.com | Waves | Plugins | music
kvraudio.com | KVR Audio | Plugins | music
audiofanzine.com | Audiofanzine | Instruments | forum
gearspace.com | Gearspace | Forum | forum
justinguitar.com | JustinGuitar | Cours | music
flowkey.com | flowkey | Cours de piano | music
simplypiano.com | Simply Piano | Cours de piano | music
guitartuna.com | GuitarTuna | Accordeur | music
noteflight.com | Noteflight | Partitions | music
8notes.com | 8notes | Partitions | music
partitionsdechansons.com | Partitions de chansons | Partitions | music
boiteachansons.net | Boîte à chansons | Accords | music
tunecore.com | TuneCore | Distribution | music
cdbaby.com | CD Baby | Distribution | music
believe.com | Believe | Label | music
universalmusic.com | Universal Music | Label | music
sonymusic.com | Sony Music | Label | music
wmg.com | Warner Music | Label | music
sacem.fr | Sacem | Droits d'auteur | music
epidemicsound.com | Epidemic Sound | Musique libre | music
artlist.io | Artlist | Musique libre | music
freemusicarchive.org | Free Music Archive | Musique libre | music
jamendo.com | Jamendo | Musique libre | music
lalal.ai | LALAL.AI | Outils | music
`,actu:`
aa.com.tr | Anadolu | Agence | news
abc.net.au | ABC Australie | Australie | news
lopinion.fr | L'Opinion | Presse | news
lecanardenchaine.fr | Le Canard enchaîné | Hebdomadaire | news
charliehebdo.fr | Charlie Hebdo | Hebdomadaire | news
parismatch.com | Paris Match | Magazine | news
alternatives-economiques.fr | Alternatives Économiques | Économie | news
franceinfo.fr | franceinfo | Info en ligne | news
contexte.com | Contexte | Politique | news
arretsurimages.net | Arrêt sur images | Médias | news
lesjours.fr | Les Jours | Info en ligne | news
atlantico.fr | Atlantico | Info en ligne | news
causeur.fr | Causeur | Magazine | news
franc-tireur.fr | Franc-Tireur | Hebdomadaire | news
lanouvellerepublique.fr | La Nouvelle République | Régional | news
leberry.fr | Le Berry républicain | Régional | news
lyonne.fr | L'Yonne républicaine | Régional | news
larep.fr | La République du Centre | Régional | news
lejsl.com | Le JSL | Régional | news
estrepublicain.fr | L'Est Républicain | Régional | news
vosgesmatin.fr | Vosges Matin | Régional | news
republicain-lorrain.fr | Le Républicain lorrain | Régional | news
lalsace.fr | L'Alsace | Régional | news
lamarseillaise.fr | La Marseillaise | Régional | news
varmatin.com | Var-Matin | Régional | news
corsematin.com | Corse-Matin | Régional | news
paris-normandie.fr | Paris-Normandie | Régional | news
lunion.fr | L'Union | Régional | news
lamanchelibre.fr | La Manche Libre | Régional | news
lemainelibre.fr | Le Maine libre | Régional | news
courrierdelouest.fr | Le Courrier de l'Ouest | Régional | news
presseocean.fr | Presse Océan | Régional | news
lepopulaire.fr | Le Populaire du Centre | Régional | news
centrepresseaveyron.fr | Centre Presse | Régional | news
larepubliquedespyrenees.fr | La République des Pyrénées | Régional | news
clicanoo.re | Clicanoo | Régional | news
linfo.re | Linfo.re | Régional | news
franceantilles.fr | France-Antilles | Régional | news
bienpublic.com | Le Bien public | Régional | news
lyonmag.com | LyonMag | Régional | news
lyoncapitale.fr | Lyon Capitale | Régional | news
madeinmarseille.net | Made in Marseille | Régional | news
rue89strasbourg.com | Rue89 Strasbourg | Régional | news
rue89lyon.fr | Rue89 Lyon | Régional | news
actu17.fr | Actu17 | Faits divers | news
lalibre.be | La Libre Belgique | Belgique | news
dhnet.be | La DH | Belgique | news
sudinfo.be | Sudinfo | Belgique | news
7sur7.be | 7sur7 | Belgique | news
rtl.be | RTL Info | Belgique | news
letemps.ch | Le Temps | Suisse | news
24heures.ch | 24 heures | Suisse | news
tdg.ch | Tribune de Genève | Suisse | news
20min.ch | 20 minutes Suisse | Suisse | news
ledevoir.com | Le Devoir | Québec | news
journaldemontreal.com | Journal de Montréal | Québec | news
tvanouvelles.ca | TVA Nouvelles | Québec | news
jeuneafrique.com | Jeune Afrique | Afrique | news
lematin.ma | Le Matin | Maroc | news
hespress.com | Hespress | Maroc | news
tsa-algerie.com | TSA | Algérie | news
usatoday.com | USA Today | États-Unis | news
latimes.com | Los Angeles Times | États-Unis | news
nypost.com | New York Post | États-Unis | news
axios.com | Axios | États-Unis | news
politico.com | Politico | Politique | news
thehill.com | The Hill | Politique | news
vox.com | Vox | Info en ligne | news
huffpost.com | HuffPost | Info en ligne | news
newsweek.com | Newsweek | Magazine | news
thedailybeast.com | The Daily Beast | Info en ligne | news
abcnews.go.com | ABC News | Télévision | news
independent.co.uk | The Independent | Royaume-Uni | news
telegraph.co.uk | The Telegraph | Royaume-Uni | news
dailymail.co.uk | Daily Mail | Royaume-Uni | news
thetimes.co.uk | The Times | Royaume-Uni | news
mirror.co.uk | Daily Mirror | Royaume-Uni | news
thesun.co.uk | The Sun | Royaume-Uni | news
standard.co.uk | Evening Standard | Royaume-Uni | news
bild.de | Bild | Allemagne | news
zeit.de | Die Zeit | Allemagne | news
faz.net | FAZ | Allemagne | news
sueddeutsche.de | Süddeutsche Zeitung | Allemagne | news
tagesschau.de | Tagesschau | Allemagne | news
elmundo.es | El Mundo | Espagne | news
abc.es | ABC | Espagne | news
lavanguardia.com | La Vanguardia | Espagne | news
repubblica.it | La Repubblica | Italie | news
ansa.it | ANSA | Agence | news
theglobeandmail.com | The Globe and Mail | Canada | news
smh.com.au | Sydney Morning Herald | Australie | news
scmp.com | South China Morning Post | Asie | news
japantimes.co.jp | The Japan Times | Asie | news
hindustantimes.com | Hindustan Times | Inde | news
efe.com | EFE | Agence | news
dpa.com | dpa | Agence | news
upi.com | UPI | Agence | news
kyodonews.net | Kyodo | Agence | news
xinhuanet.com | Xinhua | Agence | news
tass.com | TASS | Agence | news
newsnow.co.uk | NewsNow | Agrégateur | news
allsides.com | AllSides | Agrégateur | news
groundnews.com | Ground News | Agrégateur | news
snopes.com | Snopes | Fact-checking | search
factcheck.org | FactCheck.org | Fact-checking | search
politifact.com | PolitiFact | Fact-checking | search
propublica.org | ProPublica | Enquête | news
theintercept.com | The Intercept | Enquête | news
bellingcat.com | Bellingcat | Enquête | search
monde-diplomatique.fr | Le Monde diplomatique | Mensuel | news
`,finance:`
bnpparibas.com | BNP Paribas Groupe | Banque | bank
credit-agricole.com | Crédit Agricole Groupe | Banque | bank
banquepopulaire.com | Banque Populaire | Banque | bank
axa-banque.fr | AXA Banque | Banque | bank
banque-casino.fr | Banque Casino | Banque | bank
cmb.fr | Crédit Mutuel de Bretagne | Banque | bank
arkea.com | Arkéa | Banque | bank
cmso.com | Crédit Mutuel Sud-Ouest | Banque | bank
credit-cooperatif.coop | Crédit Coopératif | Banque | bank
ma-french-bank.fr | Ma French Bank | Néobanque | bank
orangebank.fr | Orange Bank | Néobanque | bank
helios.do | Helios | Néobanque | bank
green-got.com | Green-Got | Néobanque | bank
vivid.money | Vivid | Néobanque | bank
bunq.com | bunq | Néobanque | bank
monzo.com | Monzo | Néobanque | bank
chime.com | Chime | Néobanque | bank
sofi.com | SoFi | Néobanque | bank
boursedirect.fr | Bourse Direct | Courtier | coin
saxo.com | Saxo | Courtier | coin
interactivebrokers.com | Interactive Brokers | Courtier | coin
xtb.com | XTB | Courtier | coin
scalable.capital | Scalable Capital | Courtier | coin
yomoni.fr | Yomoni | Épargne | coin
nalo.fr | Nalo | Épargne | coin
linxea.com | Linxea | Assurance vie | coin
placement-direct.fr | Placement-direct | Assurance vie | coin
ramify.fr | Ramify | Épargne | coin
goodvest.fr | Goodvest | Épargne | coin
finary.com | Finary | Patrimoine | coin
mieuxvivre-votreargent.fr | Mieux Vivre Votre Argent | Conseils argent | coin
toutsurmesfinances.com | Tout sur mes finances | Conseils argent | coin
panoramabanques.com | Panorama des banques | Comparateur | coin
meilleurebanque.com | Meilleure Banque | Comparateur | coin
hellosafe.fr | HelloSafe | Comparateur | coin
assurland.com | Assurland | Comparateur | coin
leblogpatrimoine.com | Le Blog Patrimoine | Conseils argent | coin
investopedia.com | Investopedia | Finance | book
nerdwallet.com | NerdWallet | Conseils argent | coin
bankrate.com | Bankrate | Conseils argent | coin
fool.com | The Motley Fool | Bourse | coin
seekingalpha.com | Seeking Alpha | Bourse | coin
nasdaq.com | Nasdaq | Bourse | coin
nyse.com | NYSE | Bourse | coin
euronext.com | Euronext | Bourse | coin
amf-france.org | AMF | Régulateur | coin
boursier.com | Boursier.com | Bourse | coin
cryptoast.fr | Cryptoast | Crypto | coin
journalducoin.com | Journal du Coin | Crypto | coin
coindesk.com | CoinDesk | Crypto | coin
cointelegraph.com | Cointelegraph | Crypto | coin
bybit.com | Bybit | Crypto | coin
okx.com | OKX | Crypto | coin
kucoin.com | KuCoin | Crypto | coin
bitstamp.net | Bitstamp | Crypto | coin
gemini.com | Gemini | Crypto | coin
blockchain.com | Blockchain.com | Crypto | coin
bitcoin.org | Bitcoin | Crypto | coin
ethereum.org | Ethereum | Crypto | coin
etherscan.io | Etherscan | Crypto | coin
paymium.com | Paymium | Crypto | coin
coinhouse.com | Coinhouse | Crypto | coin
trezor.io | Trezor | Crypto | coin
payplug.com | PayPlug | Paiement | coin
lyra.com | Lyra | Paiement | coin
adyen.com | Adyen | Paiement | coin
squareup.com | Square | Paiement | coin
oney.fr | Oney | Crédit | coin
floa.fr | Floa | Crédit | coin
cofidis.fr | Cofidis | Crédit | coin
sofinco.fr | Sofinco | Crédit | coin
cetelem.fr | Cetelem | Crédit | coin
younited-credit.com | Younited | Crédit | coin
franfinance.fr | Franfinance | Crédit | coin
empruntis.com | Empruntis | Crédit immobilier | coin
ace-credit.fr | ACE Crédit | Courtier | coin
ag2rlamondiale.fr | AG2R La Mondiale | Assurance | coin
generali.fr | Generali | Assurance | coin
mma.fr | MMA | Assurance | coin
gmf.fr | GMF | Assurance | coin
maaf.fr | MAAF | Assurance | coin
direct-assurance.fr | Direct Assurance | Assurance | coin
leocare.eu | Leocare | Assurance | coin
luko.eu | Luko | Assurance | coin
lovys.com | Lovys | Assurance | coin
april.fr | April | Assurance | coin
swisslife.fr | Swiss Life | Assurance | coin
cnp.fr | CNP Assurances | Assurance | coin
westernunion.fr | Western Union | Transfert | coin
remitly.com | Remitly | Transfert | coin
worldremit.com | WorldRemit | Transfert | coin
moneygram.com | MoneyGram | Transfert | coin
xe.com | XE | Devises | coin
cash-sans-frais.fr | Cash sans frais | Conseils argent | coin
pumpkin-app.com | Pumpkin | Paiement | coin
wero-wallet.eu | Wero | Paiement | coin
`,voyage:`
agoda.com | Agoda | Hôtels | pin
ihg.com | IHG | Hôtels | pin
hyatt.com | Hyatt | Hôtels | pin
bestwestern.fr | Best Western | Hôtels | pin
radissonhotels.com | Radisson | Hôtels | pin
choicehotels.com | Choice Hotels | Hôtels | pin
wyndhamhotels.com | Wyndham | Hôtels | pin
logishotels.com | Logis Hôtels | Hôtels | pin
bb-hotels.com | B&B Hotels | Hôtels | pin
campanile.com | Campanile | Hôtels | pin
novotel.com | Novotel | Hôtels | pin
mercure.com | Mercure | Hôtels | pin
relaischateaux.com | Relais & Châteaux | Hôtels | pin
hotel.info | hotel.info | Hôtels | pin
homeexchange.com | HomeExchange | Hébergement | home
belambra.fr | Belambra | Vacances | sun
vvf.fr | VVF | Vacances | sun
odalys-vacances.com | Odalys | Vacances | sun
mmv.fr | MMV | Vacances | sun
huttopia.com | Huttopia | Camping | leaf
yellohvillage.fr | Yelloh! Village | Camping | leaf
tohapi.fr | Tohapi | Camping | leaf
siblu.fr | Siblu | Camping | leaf
camping-and-co.com | Camping and Co | Camping | leaf
tui.fr | TUI | Voyagiste | sun
fram.fr | Fram | Voyagiste | sun
look-voyages.fr | Look Voyages | Voyagiste | sun
thomascook.fr | Thomas Cook | Voyagiste | sun
selectour.com | Selectour | Agence | plane
havas-voyages.fr | Havas Voyages | Agence | plane
carrefour-voyages.fr | Carrefour Voyages | Agence | plane
ebookers.fr | ebookers | Vols | plane
kiwi.com | Kiwi.com | Vols | plane
govoyages.com | GoVoyages | Vols | plane
lastminute.fr | lastminute.fr | Voyages | plane
bravofly.fr | Bravofly | Vols | plane
hopper.com | Hopper | Vols | plane
flightaware.com | FlightAware | Suivi de vols | plane
airbus.com | Airbus | Aéronautique | plane
corsair.fr | Corsair | Compagnie | plane
airtahitinui.com | Air Tahiti Nui | Compagnie | plane
aircaraibes.com | Air Caraïbes | Compagnie | plane
frenchbee.com | French bee | Compagnie | plane
aircorsica.com | Air Corsica | Compagnie | plane
airaustral.com | Air Austral | Compagnie | plane
flytap.com | TAP Air Portugal | Compagnie | plane
iberia.com | Iberia | Compagnie | plane
ita-airways.com | ITA Airways | Compagnie | plane
swiss.com | Swiss | Compagnie | plane
brusselsairlines.com | Brussels Airlines | Compagnie | plane
aircanada.com | Air Canada | Compagnie | plane
airtransat.com | Air Transat | Compagnie | plane
delta.com | Delta | Compagnie | plane
united.com | United | Compagnie | plane
aa.com | American Airlines | Compagnie | plane
royalairmaroc.com | Royal Air Maroc | Compagnie | plane
airalgerie.dz | Air Algérie | Compagnie | plane
etihad.com | Etihad | Compagnie | plane
singaporeair.com | Singapore Airlines | Compagnie | plane
cathaypacific.com | Cathay Pacific | Compagnie | plane
wizzair.com | Wizz Air | Compagnie | plane
norwegian.com | Norwegian | Compagnie | plane
eurowings.com | Eurowings | Compagnie | plane
pegasusairlines.com | Pegasus | Compagnie | plane
lyonaeroports.com | Aéroport de Lyon | Aéroport | plane
parisaeroport.fr | Paris Aéroport | Aéroport | plane
heathrow.com | Heathrow | Aéroport | plane
sncb.be | SNCB | Train | map
sbb.ch | CFF | Train | map
bahn.de | Deutsche Bahn | Train | map
renfe.com | Renfe | Train | map
trenitalia.com | Trenitalia | Train | map
italotreno.com | Italo | Train | map
raileurope.com | Rail Europe | Train | map
interrail.eu | Interrail | Train | map
eurail.com | Eurail | Train | map
transilien.com | Transilien | Train | map
iledefrance-mobilites.fr | Île-de-France Mobilités | Transports | map
tcl.fr | TCL Lyon | Transports | map
rtm.fr | RTM Marseille | Transports | map
flixbus.com | FlixBus | Car | car
omio.fr | Omio | Transports | map
rome2rio.com | Rome2Rio | Itinéraires | map
moovitapp.com | Moovit | Transports | map
g7.fr | G7 | Taxi | car
freenow.com | FREENOW | VTC | car
lime.me | Lime | Mobilité | bike
avis.fr | Avis | Location | car
enterprise.fr | Enterprise | Location | car
ada.fr | ADA | Location | car
ucar.fr | Ucar | Location | car
turo.com | Turo | Location | car
directferries.fr | Direct Ferries | Ferries | map
brittany-ferries.fr | Brittany Ferries | Ferries | map
corsica-ferries.fr | Corsica Ferries | Ferries | map
lameridionale.fr | La Méridionale | Ferries | map
msccroisieres.fr | MSC Croisières | Croisières | sun
costacroisieres.fr | Costa Croisières | Croisières | sun
royalcaribbean.com | Royal Caribbean | Croisières | sun
ponant.com | Ponant | Croisières | sun
tourmag.com | TourMaG | Actu voyage | news
voyageforum.com | VoyageForum | Forum | forum
thepointsguy.com | The Points Guy | Conseils | plane
nomadicmatt.com | Nomadic Matt | Blog voyage | pen
wanderlust.co.uk | Wanderlust | Magazine | pen
cntraveler.com | Condé Nast Traveler | Magazine | pen
travelandleisure.com | Travel + Leisure | Magazine | pen
visitparisregion.com | Visit Paris Region | Tourisme | map
provence-alpes-cotedazur.com | Provence-Alpes-Côte d'Azur | Tourisme | map
bretagne.com | Bretagne | Tourisme | map
tourisme-bretagne.com | Tourisme Bretagne | Tourisme | map
normandie-tourisme.fr | Normandie Tourisme | Tourisme | map
visitbritain.com | VisitBritain | Tourisme | map
spain.info | Spain.info | Tourisme | map
italia.it | Italia.it | Tourisme | map
visitportugal.com | Visit Portugal | Tourisme | map
visitmorocco.com | Visit Morocco | Tourisme | map
japan.travel | Japan Travel | Tourisme | map
newyorkcity.fr | New York City | Tourisme | map
toureiffel.paris | Tour Eiffel | Monument | map
tiqets.com | Tiqets | Billets | tag
musement.com | Musement | Activités | tag
visa-europe.fr | Visa Europe | Visas | flag
ivisa.com | iVisa | Visas | flag
chapka-assurances.fr | Chapka | Assurance voyage | flag
airhelp.com | AirHelp | Indemnisation | plane
seatmaps.com | SeatMaps | Sièges | plane
`,sport:`
sport.fr | Sport.fr | Actu sport | news
skysports.com | Sky Sports | Actu sport | news
theathletic.com | The Athletic | Actu sport | news
bleacherreport.com | Bleacher Report | Actu sport | news
cbssports.com | CBS Sports | Actu sport | news
foxsports.com | Fox Sports | Actu sport | news
si.com | Sports Illustrated | Actu sport | news
marca.com | Marca | Actu sport | news
as.com | AS | Actu sport | news
mundodeportivo.com | Mundo Deportivo | Actu sport | news
gazzetta.it | La Gazzetta dello Sport | Actu sport | news
kicker.de | Kicker | Football | ball
goal.com | Goal | Football | ball
90min.com | 90min | Football | ball
foot01.com | Foot01 | Football | ball
le10sport.com | le10sport | Football | ball
footballdatabase.eu | Football Database | Statistiques | ball
fbref.com | FBref | Statistiques | ball
understat.com | Understat | Statistiques | ball
soccerway.com | Soccerway | Résultats | ball
flashscore.com | Flashscore | Résultats | ball
livescore.in | LiveScore | Résultats | ball
futbin.com | FUTBIN | FIFA | gamepad
mpg.football | MPG | Fantasy | ball
championsleague.com | Champions League | Compétition | ball
lfp.fr | LFP | Ligue | ball
ligue2.fr | Ligue 2 | Ligue | ball
mlssoccer.com | MLS | Ligue | ball
seriea.com | Serie A | Ligue | ball
chelseafc.com | Chelsea | Club | ball
arsenal.com | Arsenal | Club | ball
mancity.com | Manchester City | Club | ball
tottenhamhotspur.com | Tottenham | Club | ball
juventus.com | Juventus | Club | ball
acmilan.com | AC Milan | Club | ball
inter.it | Inter Milan | Club | ball
fcbayern.com | Bayern Munich | Club | ball
bvb.de | Borussia Dortmund | Club | ball
atleticodemadrid.com | Atlético de Madrid | Club | ball
asmonaco.com | AS Monaco | Club | ball
ogcnice.com | OGC Nice | Club | ball
staderennais.com | Stade Rennais | Club | ball
rclens.fr | RC Lens | Club | ball
fcnantes.com | FC Nantes | Club | ball
rcsa.fr | RC Strasbourg | Club | ball
stadetoulousain.fr | Stade Toulousain | Rugby | ball
stadefrancais.com | Stade Français | Rugby | ball
racing92.fr | Racing 92 | Rugby | ball
sixnationsrugby.com | Six Nations | Rugby | ball
rugbyworldcup.com | Coupe du monde de rugby | Rugby | ball
allrugby.com | AllRugby | Rugby | ball
ausopen.com | Open d'Australie | Tennis | ball
wimbledon.com | Wimbledon | Tennis | ball
usopen.org | US Open | Tennis | ball
tennisactu.net | Tennis Actu | Tennis | ball
ultimatetennisstatistics.com | Ultimate Tennis Stats | Tennis | ball
pgatour.com | PGA Tour | Golf | ball
ffgolf.org | FFGolf | Golf | ball
worldathletics.org | World Athletics | Athlétisme | ball
athle.fr | FFA | Athlétisme | ball
ffhandball.fr | FFHandball | Handball | ball
lnh.fr | LNH | Handball | ball
ffvolley.org | FFVolley | Volley | ball
lnb.fr | LNB | Basket | ball
wnba.com | WNBA | Basket | ball
basketball-reference.com | Basketball Reference | Statistiques | ball
pro-football-reference.com | Pro Football Reference | Statistiques | ball
ffcyclisme.org | FFC | Cyclisme | bike
procyclingstats.com | ProCyclingStats | Cyclisme | bike
cyclingnews.com | Cyclingnews | Cyclisme | bike
directvelo.com | DirectVelo | Cyclisme | bike
uci.org | UCI | Cyclisme | bike
autosport.com | Autosport | Sport auto | car
nextgen-auto.com | Nextgen-Auto | Sport auto | car
fia.com | FIA | Sport auto | car
lemans.org | 24 Heures du Mans | Sport auto | car
dakar.com | Dakar | Sport auto | car
nascar.com | NASCAR | Sport auto | car
wwe.com | WWE | Catch | ball
sherdog.com | Sherdog | MMA | ball
tapology.com | Tapology | MMA | ball
ffjudo.com | FFJudo | Judo | ball
fina.org | World Aquatics | Natation | ball
ffnatation.fr | FFN | Natation | ball
franceolympique.com | CNOSF | Olympisme | flag
sport2000.fr | Sport 2000 | Équipement | cart
underarmour.com | Under Armour | Équipement | cart
asics.com | ASICS | Running | cart
newbalance.com | New Balance | Running | cart
hoka.com | HOKA | Running | cart
i-run.fr | i-Run | Running | cart
alltricks.fr | Alltricks | Vélo | bike
probikeshop.fr | Probikeshop | Vélo | bike
wiggle.com | Wiggle | Vélo | bike
snowleader.com | Snowleader | Montagne | cart
auvieuxcampeur.fr | Au Vieux Campeur | Montagne | cart
ekosport.fr | Ekosport | Ski | cart
lecomptoirdesathletes.com | Comptoir des athlètes | Running | cart
the-north-face.com | The North Face | Outdoor | cart
patagonia.com | Patagonia | Outdoor | cart
salomon.com | Salomon | Outdoor | cart
quechua.fr | Quechua | Rando | cart
myprotein.fr | Myprotein | Nutrition | health
nutrimuscle.com | Nutrimuscle | Nutrition | health
fitnessboutique.fr | Fitness Boutique | Fitness | health
onair-fitness.fr | On Air | Fitness | health
neoness.fr | Neoness | Fitness | health
keepcool.fr | Keepcool | Fitness | health
orangebleue.fr | L'Orange bleue | Fitness | health
lesmills.com | Les Mills | Fitness | health
peloton.com | Peloton | Fitness | health
zwift.com | Zwift | Cyclisme | bike
suunto.com | Suunto | Montres | health
coros.com | COROS | Montres | health
runnersworld.com | Runner's World | Running | news
jogging-international.net | Jogging International | Running | news
u-trail.com | U-Trail | Trail | news
utmb.world | UTMB World | Trail | leaf
finishers.com | Finishers | Courses | bike
njuko.com | Njuko | Inscriptions | tag
klikego.com | Klikego | Inscriptions | tag
schneiderelectricmarathondeparis.com | Marathon de Paris | Course | ball
ffrandonnee.fr | FFRandonnée | Rando | map
mongr.fr | MonGR | Rando | map
gr-infos.com | GR Infos | Rando | map
wikiloc.com | Wikiloc | Rando | map
camptocamp.org | Camptocamp | Montagne | map
ffcam.fr | FFCAM | Montagne | map
chamonix.com | Chamonix | Montagne | map
skiplanet.fr | SkiPlanet | Ski | sun
skipass.com | Skipass | Ski | sun
france-montagnes.com | France Montagnes | Ski | sun
windguru.cz | Windguru | Météo | sun
surfline.com | Surfline | Surf | sun
redbull.com | Red Bull | Sports extrêmes | sparkle
`,forums:`
mathoverflow.net | MathOverflow | Questions maths | atom
answers.com | Answers | Questions | forum
brainly.fr | Brainly France | Entraide scolaire | book
ilemaths.net | L'île des mathématiques | Forum maths | atom
les-mathematiques.net | Les-mathematiques.net | Forum maths | atom
digitalspy.com | Digital Spy | Forums | forum
boards.ie | Boards.ie | Forums | forum
tomshardware.com | Tom's Hardware | Forum tech | code
tomshardware.fr | Tom's Hardware FR | Forum tech | code
linustechtips.com | Linus Tech Tips | Forum tech | code
overclockers.co.uk | Overclockers UK | Forum tech | code
anandtech.com | AnandTech | Forum tech | code
androidcentral.com | Android Central | Forum mobile | code
sevenforums.com | Seven Forums | Entraide Windows | code
tenforums.com | Ten Forums | Entraide Windows | code
kialo.com | Kialo | Débats | chat
metafilter.com | MetaFilter | Communauté | forum
fark.com | Fark | Agrégateur | news
digg.com | Digg | Agrégateur | news
nautiljon.com | Nautiljon | Communauté manga | book
bitcointalk.org | Bitcointalk | Forum crypto | coin
bogleheads.org | Bogleheads | Forum finance | coin
wallstreetoasis.com | Wall Street Oasis | Communauté | coin
teamblind.com | Blind | Communauté pro | briefcase
codeproject.com | CodeProject | Entraide code | code
sitepoint.com | SitePoint | Communauté web | code
experts-exchange.com | Experts Exchange | Questions tech | code
spiceworks.com | Spiceworks | Communauté IT | code
instructables.com | Instructables | Tutoriels DIY | cube
hackaday.com | Hackaday | Communauté makers | code
thingiverse.com | Thingiverse | Communauté 3D | cube
ravelry.com | Ravelry | Communauté tricot | heart
houzz.com | Houzz | Communauté maison | home
forum-maison.fr | Forum Maison | Forum | home
forumconstruire.com | Forum Construire | Forum travaux | home
forum-photovoltaique.fr | Forum Photovoltaïque | Forum énergie | sun
dpreview.com | DPReview | Forum photo | camera
atoute.org | Atoute | Forum santé | health
infobebes.com | Infobébés | Forum parents | heart
babycenter.com | BabyCenter | Communauté parents | heart
whattoexpect.com | What to Expect | Communauté parents | heart
zebulon.fr | Zebulon | Entraide PC | code
avforums.com | AVForums | Forum hi-fi | music
head-fi.org | Head-Fi | Forum audio | music
nextdoor.fr | Nextdoor France | Voisinage | home
allovoisins.com | AlloVoisins | Entraide voisins | home
smiile.com | Smiile | Voisinage | home
flyertalk.com | FlyerTalk | Forum voyage | plane
cruisecritic.com | Cruise Critic | Forum croisière | plane
2ch.net | 2channel | Forum | forum
5ch.net | 5channel | Forum | forum
v2ex.com | V2EX | Forum tech | code
habr.com | Habr | Communauté tech | code
pikabu.ru | Pikabu | Agrégateur | news
ifunny.co | iFunny | Humour | image
knowyourmeme.com | Know Your Meme | Mèmes | image
tvtropes.org | TV Tropes | Wiki fans | book
scribophile.com | Scribophile | Écriture | pen
hinative.com | HiNative | Questions langues | chat
tandem.net | Tandem | Échange langues | users
physicsforums.com | Physics Forums | Forum sciences | atom
chemicalforums.com | Chemical Forums | Forum sciences | atom
cafepharma.com | Cafe Pharma | Forum pro | briefcase
studentdoctor.net | Student Doctor Network | Forum études | health
collegeconfidential.com | College Confidential | Forum études | book
thestudentroom.co.uk | The Student Room | Forum étudiants | book
net-iris.fr | Net-iris | Forum juridique | book
legavox.fr | Legavox | Forum juridique | book
avvo.com | Avvo | Questions juridiques | book
justanswer.com | JustAnswer | Questions experts | chat
justanswer.fr | JustAnswer FR | Questions experts | chat
discourse.org | Discourse | Forums | forum
phpbb.com | phpBB | Forums | forum
invisioncommunity.com | Invision Community | Forums | forum
xenforo.com | XenForo | Forums | forum
vbulletin.com | vBulletin | Forums | forum
forumactif.com | Forumactif | Forums | forum
forumotion.com | Forumotion | Forums | forum
proboards.com | ProBoards | Forums | forum
guru3d.com | Guru3D | Forum tech | code
techpowerup.com | TechPowerUp | Forum tech | code
hardforum.com | HardForum | Forum tech | code
eevblog.com | EEVblog | Forum électronique | code
raspberrypi.com | Raspberry Pi | Communauté makers | code
home-assistant.io | Home Assistant | Communauté domotique | home
jeuxonline.info | JeuxOnLine | Forums jeux | gamepad
mmo-champion.com | MMO-Champion | Forum jeux | gamepad
bladeforums.com | BladeForums | Forum | forum
pistonheads.com | PistonHeads | Forum auto | car
rennlist.com | Rennlist | Forum auto | car
bimmerpost.com | Bimmerpost | Forum auto | car
teslamotorsclub.com | Tesla Motors Club | Forum auto | car
motomag.com | Moto Magazine | Forum moto | bike
bikeradar.com | BikeRadar | Forum vélo | bike
mtbr.com | MTBR | Forum vélo | bike
lesarnaques.com | Les Arnaques | Forum conso | chat
aquaportail.com | AquaPortail | Forum aquariophilie | fish
aujardin.info | Au Jardin | Forum jardin | leaf
`,vie:`
pole-emploi.fr | Pôle emploi | Emploi | briefcase
travail-emploi.gouv.fr | Ministère du Travail | Service public | flag
etudiant.gouv.fr | Étudiant.gouv | Vie étudiante | flag
monmaster.gouv.fr | Mon Master | Orientation | book
cadastre.gouv.fr | Cadastre | Immobilier | map
data.gouv.fr | data.gouv.fr | Données publiques | flag
insee.fr | Insee | Statistiques | flag
infogreffe.fr | Infogreffe | Entreprises | briefcase
societe.com | Societe.com | Entreprises | briefcase
pappers.fr | Pappers | Entreprises | briefcase
118712.fr | 118 712 | Annuaire | pin
viamichelin.fr | ViaMichelin | Itinéraires | map
idfm.fr | Île-de-France Mobilités | Transports | map
paruvendu.fr | ParuVendu | Petites annonces | tag
superimmo.com | Superimmo | Immobilier | home
explorimmo.com | Explorimmo | Immobilier | home
avendrealouer.fr | À vendre à louer | Immobilier | home
notaires.fr | Notaires de France | Droit | book
studapart.com | Studapart | Logement étudiant | home
lokaviz.fr | Lokaviz | Logement étudiant | home
crous.fr | Crous | Vie étudiante | home
nexity.fr | Nexity | Immobilier | home
guy-hoquet.com | Guy Hoquet | Immobilier | home
era.fr | ERA Immobilier | Immobilier | home
stephaneplazaimmobilier.com | Stéphane Plaza Immobilier | Immobilier | home
iadfrance.fr | IAD | Immobilier | home
safti.fr | Safti | Immobilier | home
efficity.com | Efficity | Immobilier | home
indeed.com | Indeed | Emploi | briefcase
cadremploi.fr | Cadremploi | Emploi | briefcase
regionsjob.com | RegionsJob | Emploi | briefcase
meteojob.com | Meteojob | Emploi | briefcase
keljob.com | Keljob | Emploi | briefcase
jobijoba.com | Jobijoba | Emploi | briefcase
optioncarriere.com | Optioncarrière | Emploi | briefcase
adecco.fr | Adecco | Intérim | briefcase
randstad.fr | Randstad | Intérim | briefcase
manpower.fr | Manpower | Intérim | briefcase
staffme.fr | StaffMe | Petits boulots | briefcase
side.co | Side | Intérim | briefcase
qapa.fr | Qapa | Intérim | briefcase
1jeune1solution.gouv.fr | 1 jeune 1 solution | Emploi | briefcase
lalternance.fr | La bonne alternance | Alternance | briefcase
moncompteformation.gouv.fr | Mon Compte Formation | Formation | book
ariase.com | Ariase | Comparateur | search
selectra.info | Selectra | Énergie | sun
energie-info.fr | Énergie Info | Énergie | sun
grdf.fr | GRDF | Gaz | sun
enedis.fr | Enedis | Électricité | sun
eaudeparis.fr | Eau de Paris | Eau | home
dpd.com | DPD | Colis | cart
dpd.fr | DPD France | Colis | cart
gls-group.eu | GLS | Colis | cart
relaiscolis.com | Relais Colis | Colis | cart
colisprive.com | Colis Privé | Colis | cart
17track.net | 17TRACK | Suivi colis | search
parcelsapp.com | Parcels | Suivi colis | search
tnt.com | TNT | Colis | cart
meteo-france.com | Météo-France | Météo | sun
meteoconsult.fr | Météo Consult | Météo | sun
lettre-resiliation.com | Lettre résiliation | Démarches | pen
mon-permis.fr | Mon permis | Démarches | car
cartegrise.com | Carte grise | Démarches | car
antai.gouv.fr | ANTAI | Amendes | car
amendes.gouv.fr | Amendes.gouv | Amendes | car
mesdemarches.gouv.fr | Mes démarches | Démarches | flag
pronote.net | Pronote | Scolarité | book
papernest.com | Papernest | Déménagement | home
justice.gouv.fr | Justice | Service public | flag
defenseurdesdroits.fr | Défenseur des droits | Droits | flag
inc-conso.fr | INC | Consommation | cart
60millions-mag.com | 60 Millions | Consommation | news
dossierfamilial.com | Dossier Familial | Vie pratique | book
pratique.fr | Pratique.fr | Vie pratique | book
juritravail.com | Juritravail | Droit | book
legalstart.fr | Legalstart | Démarches | briefcase
legalplace.fr | LegalPlace | Démarches | briefcase
captaincontrat.com | Captain Contrat | Démarches | briefcase
etat-civil.gouv.fr | État civil | Démarches | flag
vote.gouv.fr | Vote | Élections | flag
service-civique.gouv.fr | Service civique | Engagement | flag
jeveuxaider.gouv.fr | JeVeuxAider | Bénévolat | heart
francebenevolat.org | France Bénévolat | Bénévolat | heart
guichet-entreprises.fr | Guichet Entreprises | Démarches | briefcase
anil.org | ANIL | Logement | home
actionlogement.fr | Action Logement | Logement | home
visale.fr | Visale | Logement | home
jechange.fr | JeChange | Comparateur | search
kelwatt.fr | Kelwatt | Énergie | sun
monpetitforfait.com | Mon Petit Forfait | Comparateur | search
annuaire-mairie.fr | Annuaire Mairie | Annuaire | pin
`,environnement:`
meteoblue.com | meteoblue | Météo | sun
wunderground.com | Weather Underground | Météo | sun
yr.no | Yr | Météo | sun
windfinder.com | Windfinder | Météo | cloud
ventusky.com | Ventusky | Météo | cloud
zoom.earth | Zoom Earth | Météo | cloud
lightningmaps.org | LightningMaps | Orages | cloud
keraunos.org | Keraunos | Orages | cloud
meteo60.fr | Météo60 | Météo | sun
timeanddate.com | Time and Date | Météo | sun
weather.gov | NWS | Météo | sun
climate.gov | Climate.gov | Climat | cloud
berkeleyearth.org | Berkeley Earth | Climat | atom
carbonbrief.org | Carbon Brief | Climat | news
insideclimatenews.org | Inside Climate News | Climat | news
grist.org | Grist | Écologie | news
treehugger.com | Treehugger | Écologie | leaf
ecowatch.com | EcoWatch | Écologie | news
mongabay.com | Mongabay | Nature | leaf
socialter.fr | Socialter | Écologie | news
wedemain.fr | We Demain | Écologie | news
natura-sciences.com | Natura Sciences | Écologie | leaf
actu-environnement.com | Actu-Environnement | Écologie | news
notre-planete.info | Notre-Planète.info | Écologie | leaf
terrevivante.org | Terre Vivante | Écologie | leaf
georisques.gouv.fr | Géorisques | Risques | map
vigicrues.gouv.fr | Vigicrues | Crues | cloud
eaufrance.fr | Eaufrance | Eau | leaf
impactco2.fr | Impact CO2 | Climat | leaf
ecologic.eco | ecologic | Recyclage | leaf
ecosystem.eco | ecosystem | Recyclage | leaf
refashion.fr | Refashion | Recyclage | leaf
emmaus-france.org | Emmaüs | Réemploi | heart
toogoodtogo.com | Too Good To Go | Anti-gaspi | leaf
optimiam.com | Optimiam | Anti-gaspi | leaf
nousantigaspi.com | Nous anti-gaspi | Anti-gaspi | cart
willyanti-gaspi.fr | Willy Anti-gaspi | Anti-gaspi | cart
naturalia.fr | Naturalia | Bio | leaf
lavieclaire.com | La Vie Claire | Bio | leaf
agencebio.org | Agence Bio | Bio | leaf
bioalaune.com | Bio à la une | Bio | leaf
kokopelli-semences.fr | Kokopelli | Semences | leaf
fermesdavenir.org | Fermes d'Avenir | Agriculture | leaf
terredeliens.org | Terre de Liens | Agriculture | leaf
alternatiba.eu | Alternatiba | Climat | leaf
rebellion.global | Extinction Rebellion | Climat | flag
fridaysforfuture.org | Fridays for Future | Climat | flag
humanite-biodiversite.fr | Humanité et Biodiversité | Nature | leaf
nature.org | The Nature Conservancy | Nature | leaf
sierraclub.org | Sierra Club | Nature | leaf
nrdc.org | NRDC | Écologie | leaf
conservation.org | Conservation International | Nature | leaf
worldwildlife.org | WWF US | Nature | paw
surfrider.org | Surfrider | Océans | fish
fondationgoodplanet.org | GoodPlanet | Écologie | leaf
goodplanet.info | GoodPlanet Mag | Écologie | news
ilek.fr | ilek | Énergie verte | sun
octopusenergy.fr | Octopus Energy | Énergie | sun
mint-energie.com | Mint Énergie | Énergie | sun
edf-oa.fr | EDF OA | Solaire | sun
photovoltaique.info | Photovoltaïque.info | Solaire | sun
quelleenergie.fr | Quelle Énergie | Rénovation | home
maprimerenov.gouv.fr | MaPrimeRénov' | Rénovation | home
windy.app | Windy.app | Météo | cloud
ourworldindata.org | Our World in Data | Données | atom
climateactiontracker.org | Climate Action Tracker | Climat | atom
globalforestwatch.org | Global Forest Watch | Forêts | leaf
wri.org | WRI | Environnement | leaf
unfccc.int | CCNUCC | Climat | flag
iea.org | AIE | Énergie | sun
irena.org | IRENA | Énergie verte | sun
lowtechlab.org | Low-tech Lab | Low-tech | leaf
zerowastefrance.org | Zero Waste France | Zéro déchet | leaf
jedonnetout.fr | Je donne tout | Don | heart
donnons.org | Donnons.org | Don | heart
ressourcerie.fr | Ressourceries | Réemploi | leaf
repaircafe.org | Repair Café | Réparation | leaf
spareka.fr | Spareka | Réparation | cube
ifixit.com | iFixit | Réparation | cube
planetoscope.com | Planetoscope | Statistiques | leaf
wwf.ch | WWF Suisse | Nature | paw
wwf.org.uk | WWF UK | Nature | paw
generations-futures.fr | Générations Futures | Pesticides | leaf
foodwatch.org | foodwatch | Alimentation | leaf
aspas-nature.org | ASPAS | Nature | leaf
robindesbois.org | Robin des Bois | Écologie | leaf
negawatt.org | négaWatt | Énergie | sun
jancovici.com | Jancovici | Climat | atom
climat.be | Climat.be | Climat | leaf
jardiner-malin.fr | Jardiner Malin | Jardin | leaf
permaculturedesign.fr | Permaculture Design | Permaculture | leaf
graines-baumaux.fr | Graines Baumaux | Semences | leaf
fondationdelamer.org | Fondation de la Mer | Océans | fish
tarafondation.org | Fondation Tara Océan | Océans | fish
wetlands.org | Wetlands International | Nature | leaf
gbif.org | GBIF | Biodiversité | leaf
faune-france.org | Faune France | Biodiversité | leaf
hespul.org | Hespul | Énergie | sun
`,sante:`
clevelandclinic.org | Cleveland Clinic | Médecine | health
hopkinsmedicine.org | Johns Hopkins | Médecine | health
merckmanuals.com | Merck Manuals | Médecine | book
santepubliquefrance.fr | Santé publique France | Service public | flag
sante.gouv.fr | Ministère de la Santé | Service public | flag
solidarites-sante.gouv.fr | Solidarités Santé | Service public | flag
monespacesante.fr | Mon espace santé | Dossier médical | health
pourquoidocteur.fr | Pourquoi Docteur | Santé | health
allodocteurs.fr | Allô Docteurs | Santé | health
e-sante.fr | E-santé | Santé | health
destinationsante.com | Destination Santé | Santé | health
psychologies.com | Psychologies | Bien-être | heart
psychomedia.qc.ca | Psychomédia | Santé | health
mutuelle-generale.fr | Mutuelle Générale | Mutuelle | health
lamutuellegenerale.fr | La Mutuelle Générale | Mutuelle | health
apivia.fr | Apivia | Mutuelle | health
mnh.fr | MNH | Mutuelle | health
smerep.fr | Smerep | Mutuelle étudiante | health
pharmacie-lafayette.com | Pharmacie Lafayette | Pharmacie | health
pharma-gdd.com | Pharma GDD | Pharmacie | health
cocooncenter.com | Cocooncenter | Parapharmacie | health
easyparapharmacie.com | Easypara | Parapharmacie | health
pharmashopdiscount.com | Pharmashopdiscount | Parapharmacie | health
1001pharmacies.com | 1001Pharmacies | Parapharmacie | health
doctolib.de | Doctolib Deutschland | Rendez-vous | health
zocdoc.com | Zocdoc | Rendez-vous | health
goodrx.com | GoodRx | Médicaments | health
rxlist.com | RxList | Médicaments | health
everydayhealth.com | Everyday Health | Santé | health
verywellhealth.com | Verywell Health | Santé | health
verywellmind.com | Verywell Mind | Bien-être | heart
verywellfit.com | Verywell Fit | Sport santé | ball
health.com | Health | Santé | health
prevention.com | Prevention | Santé | health
menshealth.com | Men's Health | Santé | health
womenshealthmag.com | Women's Health | Santé | health
psychologytoday.com | Psychology Today | Psychologie | heart
betterhelp.com | BetterHelp | Thérapie | heart
talkspace.com | Talkspace | Thérapie | heart
mentalhealth.org.uk | Mental Health Foundation | Santé mentale | heart
mind.org.uk | Mind | Santé mentale | heart
3114.fr | 3114 | Prévention suicide | heart
sosamitie.com | SOS Amitié | Écoute | heart
sida-info-service.org | Sida Info Service | Prévention | health
aides.org | AIDES | Prévention | health
francealzheimer.org | France Alzheimer | Association | health
fondation-arc.org | Fondation ARC | Cancer | health
gustaveroussy.fr | Gustave Roussy | Hôpital | health
curie.fr | Institut Curie | Hôpital | health
afm-telethon.fr | AFM-Téléthon | Association | heart
fondationdefrance.org | Fondation de France | Solidarité | heart
federationdiabete.org | Fédération Diabète | Diabète | health
fedecardio.org | Fédération de Cardiologie | Cardiologie | heart
lanutrition.fr | LaNutrition | Nutrition | chef
myprotein.com | Myprotein | Nutrition sport | ball
bodybuilding.com | Bodybuilding.com | Musculation | ball
lorangebleue.fr | L'Orange bleue | Salle de sport | ball
runtastic.com | Runtastic | Course | ball
kiprun.com | Kiprun | Course | ball
cronometer.com | Cronometer | Nutrition | chef
noom.com | Noom | Nutrition | chef
weightwatchers.com | WeightWatchers | Nutrition | chef
ww.com | WW | Nutrition | chef
fooducate.com | Fooducate | Nutrition | chef
nutritionix.com | Nutritionix | Nutrition | chef
fatsecret.fr | FatSecret | Nutrition | chef
fatsecret.com | FatSecret | Nutrition | chef
anses.fr | Anses | Sécurité sanitaire | flag
insv.fr | Institut du sommeil | Sommeil | heart
sleepfoundation.org | Sleep Foundation | Sommeil | heart
yogajournal.com | Yoga Journal | Yoga | heart
downdogapp.com | Down Dog | Yoga | heart
insighttimer.com | Insight Timer | Méditation | heart
dentaly.org | Dentaly | Dentaire | health
lensway.fr | Lensway | Lentilles | health
generale-optique.com | Générale d'Optique | Optique | health
audika.fr | Audika | Audition | health
amplifon.com | Amplifon | Audition | health
medscape.com | Medscape | Médecine | health
bmj.com | The BMJ | Revue médicale | book
`,cuisine:`
ricardocuisine.com | Ricardo | Recettes | chef
supertoinette.com | Supertoinette | Recettes | chef
lesfoodies.com | Les Foodies | Recettes | chef
recettes.de | Recettes.de | Recettes | chef
cuisine-libre.org | Cuisine libre | Recettes | chef
giallozafferano.it | GialloZafferano | Recettes | chef
chefkoch.de | Chefkoch | Recettes | chef
thekitchn.com | The Kitchn | Recettes | chef
tasteofhome.com | Taste of Home | Recettes | chef
eatingwell.com | EatingWell | Recettes | chef
foodandwine.com | Food & Wine | Recettes | chef
budgetbytes.com | Budget Bytes | Recettes | chef
minimalistbaker.com | Minimalist Baker | Recettes | chef
sallysbakingaddiction.com | Sally's Baking | Pâtisserie | chef
kingarthurbaking.com | King Arthur | Pâtisserie | chef
taste.com.au | taste.com.au | Recettes | chef
recipetineats.com | RecipeTin Eats | Recettes | chef
pinchofyum.com | Pinch of Yum | Recettes | chef
cookieandkate.com | Cookie and Kate | Recettes | chef
halfbakedharvest.com | Half Baked Harvest | Recettes | chef
thepioneerwoman.com | The Pioneer Woman | Recettes | chef
marthastewart.com | Martha Stewart | Recettes | chef
kitchenstories.com | Kitchen Stories | Recettes | chef
hellofresh.com | HelloFresh | Box repas | chef
doordash.com | DoorDash | Livraison | cart
grubhub.com | Grubhub | Livraison | cart
thefork.com | TheFork | Réservation | chef
lefooding.com | Le Fooding | Restaurants | chef
quick.fr | Quick | Fast-food | chef
fiveguys.fr | Five Guys | Fast-food | chef
pizzahut.com | Pizza Hut | Fast-food | chef
dominos.com | Domino's | Fast-food | chef
mcdonalds.com | McDonald's | Fast-food | chef
kfc.com | KFC | Fast-food | chef
burgerking.com | Burger King | Fast-food | chef
tacobell.com | Taco Bell | Fast-food | chef
chipotle.com | Chipotle | Fast-food | chef
wendys.com | Wendy's | Fast-food | chef
popeyes.com | Popeyes | Fast-food | chef
starbucks.com | Starbucks | Café | chef
dunkindonuts.com | Dunkin' | Café | chef
subway.fr | Subway | Fast-food | chef
o-tacos.com | O'Tacos | Fast-food | chef
flunch.fr | Flunch | Restaurants | chef
buffalo-grill.fr | Buffalo Grill | Restaurants | chef
hippopotamus.fr | Hippopotamus | Restaurants | chef
courtepaille.com | Courtepaille | Restaurants | chef
paul.fr | Paul | Boulangerie | chef
brioche-doree.fr | Brioche Dorée | Boulangerie | chef
laduree.fr | Ladurée | Pâtisserie | chef
lenotre.com | Lenôtre | Pâtisserie | chef
pierreherme.com | Pierre Hermé | Pâtisserie | chef
franprix.fr | Franprix | Courses | cart
casino.fr | Casino | Courses | cart
wholefoodsmarket.com | Whole Foods | Courses | cart
vinatis.com | Vinatis | Vins | chef
wine-searcher.com | Wine-Searcher | Vins | search
hachette-vins.com | Hachette Vins | Vins | book
millesima.fr | Millésima | Vins | chef
v-and-b.fr | V and B | Vins bières | chef
idealwine.com | iDealwine | Vins | chef
wine.com | Wine.com | Vins | chef
decanter.com | Decanter | Vins | book
winefolly.com | Wine Folly | Vins | book
saveur-biere.com | Saveur Bière | Bières | chef
maxicoffee.com | MaxiCoffee | Café | chef
lepetitballon.com | Le Petit Ballon | Vins | chef
mathon.fr | Mathon | Ustensiles | chef
cuisineaddict.com | Cuisine Addict | Ustensiles | chef
alice-delice.com | Alice Délice | Ustensiles | chef
lecreuset.fr | Le Creuset | Ustensiles | chef
staub.fr | Staub | Ustensiles | chef
magimix.fr | Magimix | Robot cuisine | chef
kenwoodworld.com | Kenwood | Robot cuisine | chef
williams-sonoma.com | Williams Sonoma | Ustensiles | chef
surlatable.com | Sur La Table | Ustensiles | chef
de-buyer.com | de Buyer | Ustensiles | chef
opinel.com | Opinel | Couteaux | chef
scrapcooking.fr | ScrapCooking | Pâtisserie | chef
atelierdeschefs.fr | L'Atelier des Chefs | Cours cuisine | chef
ferrandi-paris.fr | Ferrandi | École cuisine | chef
cordonbleu.edu | Le Cordon Bleu | École cuisine | chef
institutpaulbocuse.com | Institut Paul Bocuse | École cuisine | chef
gordonramsay.com | Gordon Ramsay | Chef | chef
`,mode:`
gap.com | Gap | Vêtements | tag
oldnavy.com | Old Navy | Vêtements | tag
cos.com | COS | Vêtements | tag
arket.com | Arket | Vêtements | tag
massimodutti.com | Massimo Dutti | Vêtements | tag
oysho.com | Oysho | Lingerie | tag
sandro-paris.com | Sandro | Prêt-à-porter | tag
maje.com | Maje | Prêt-à-porter | tag
claudiepierlot.com | Claudie Pierlot | Prêt-à-porter | tag
thekooples.com | The Kooples | Prêt-à-porter | tag
ba-sh.com | ba&sh | Prêt-à-porter | tag
rouje.com | Rouje | Prêt-à-porter | tag
apc.fr | A.P.C. | Prêt-à-porter | tag
ami-paris.com | AMI Paris | Prêt-à-porter | tag
jacquemus.com | Jacquemus | Créateur | tag
isabelmarant.com | Isabel Marant | Créateur | tag
comptoirdescotonniers.com | Comptoir des Cotonniers | Prêt-à-porter | tag
printemps.com | Printemps | Grand magasin | tag
dpam.com | DPAM | Mode enfant | tag
tape-a-loeil.com | Tape à l'œil | Mode enfant | tag
gemo.fr | Gémo | Vêtements | tag
lahalle.com | La Halle | Vêtements | tag
bizzbee.com | Bizzbee | Vêtements | tag
brice.fr | Brice | Vêtements | tag
devred.com | Devred | Vêtements | tag
armandthiery.fr | Armand Thiery | Vêtements | tag
naf-naf.com | Naf Naf | Vêtements | tag
pimkie.fr | Pimkie | Vêtements | tag
morgandetoi.fr | Morgan | Vêtements | tag
kookai.fr | Kookaï | Vêtements | tag
lululemon.com | Lululemon | Sport | tag
adidas.com | adidas | Sport | tag
reebok.com | Reebok | Sport | tag
thenorthface.fr | The North Face | Outdoor | tag
columbia.com | Columbia | Outdoor | tag
quiksilver.fr | Quiksilver | Surf | tag
timberland.fr | Timberland | Chaussures | tag
drmartens.com | Dr. Martens | Chaussures | tag
birkenstock.com | Birkenstock | Chaussures | tag
crocs.com | Crocs | Chaussures | tag
veja-store.com | Veja | Chaussures | tag
clarks.com | Clarks | Chaussures | tag
geox.com | Geox | Chaussures | tag
eram.fr | Éram | Chaussures | tag
andre.fr | André | Chaussures | tag
bocage.fr | Bocage | Chaussures | tag
minelli.fr | Minelli | Chaussures | tag
jonak.fr | Jonak | Chaussures | tag
besson-chaussures.com | Besson | Chaussures | tag
chaussea.com | Chaussea | Chaussures | tag
footlocker.fr | Foot Locker | Sneakers | tag
footlocker.com | Foot Locker | Sneakers | tag
sneakersnstuff.com | Sneakersnstuff | Sneakers | tag
end.clothing | END. | Sneakers | tag
mytheresa.com | Mytheresa | Luxe | tag
matchesfashion.com | Matches | Luxe | tag
24s.com | 24S | Luxe | tag
therealreal.com | The RealReal | Luxe occasion | tag
collectorsquare.com | Collector Square | Luxe occasion | tag
thredup.com | thredUP | Seconde main | tag
givenchy.com | Givenchy | Luxe | tag
celine.com | Celine | Luxe | tag
loewe.com | Loewe | Luxe | tag
valentino.com | Valentino | Luxe | tag
versace.com | Versace | Luxe | tag
burberry.com | Burberry | Luxe | tag
fendi.com | Fendi | Luxe | tag
bottegaveneta.com | Bottega Veneta | Luxe | tag
miumiu.com | Miu Miu | Luxe | tag
moncler.com | Moncler | Luxe | tag
balmain.com | Balmain | Luxe | tag
kenzo.com | Kenzo | Luxe | tag
longchamp.com | Longchamp | Maroquinerie | tag
michaelkors.com | Michael Kors | Maroquinerie | tag
coach.com | Coach | Maroquinerie | tag
lancel.com | Lancel | Maroquinerie | tag
tiffany.com | Tiffany & Co. | Bijoux | sparkle
vancleefarpels.com | Van Cleef & Arpels | Joaillerie | sparkle
boucheron.com | Boucheron | Joaillerie | sparkle
chaumet.com | Chaumet | Joaillerie | sparkle
bulgari.com | Bulgari | Joaillerie | sparkle
histoiredor.com | Histoire d'Or | Bijoux | sparkle
maty.com | Maty | Bijoux | sparkle
marc-orian.com | Marc Orian | Bijoux | sparkle
omegawatches.com | Omega | Montres | sparkle
tagheuer.com | TAG Heuer | Montres | sparkle
fossil.com | Fossil | Montres | sparkle
danielwellington.com | Daniel Wellington | Montres | sparkle
chrono24.fr | Chrono24 | Montres | sparkle
chrono24.com | Chrono24 | Montres | sparkle
ray-ban.com | Ray-Ban | Lunettes | tag
esteelauder.com | Estée Lauder | Cosmétiques | sparkle
lancome.fr | Lancôme | Cosmétiques | sparkle
clarins.fr | Clarins | Cosmétiques | sparkle
guerlain.com | Guerlain | Parfums | sparkle
diptyqueparis.com | Diptyque | Parfums | sparkle
lush.com | Lush | Cosmétiques | sparkle
kikocosmetics.com | Kiko | Maquillage | sparkle
maccosmetics.fr | MAC | Maquillage | sparkle
maccosmetics.com | MAC | Maquillage | sparkle
nyxcosmetics.com | NYX | Maquillage | sparkle
fentybeauty.com | Fenty Beauty | Maquillage | sparkle
narscosmetics.com | NARS | Maquillage | sparkle
benefitcosmetics.com | Benefit | Maquillage | sparkle
thebodyshop.com | The Body Shop | Cosmétiques | sparkle
loccitane.com | L'Occitane | Cosmétiques | sparkle
caudalie.com | Caudalie | Cosmétiques | sparkle
nuxe.com | Nuxe | Cosmétiques | sparkle
laroche-posay.fr | La Roche-Posay | Soins | sparkle
avene.fr | Avène | Soins | sparkle
eau-thermale-avene.fr | Avène | Soins | sparkle
bioderma.fr | Bioderma | Soins | sparkle
vichy.fr | Vichy | Soins | sparkle
cerave.fr | CeraVe | Soins | sparkle
theordinary.com | The Ordinary | Soins | sparkle
typology.com | Typology | Soins | sparkle
sephora.com | Sephora | Beauté | sparkle
ulta.com | Ulta Beauty | Beauté | sparkle
feelunique.com | Feelunique | Beauté | sparkle
beautylish.com | Beautylish | Beauté | sparkle
douglas.de | Douglas | Parfumerie | sparkle
douglas.fr | Douglas | Parfumerie | sparkle
birchbox.fr | Birchbox | Box beauté | sparkle
vogue.com | Vogue | Magazine | news
elle.com | Elle | Magazine | news
harpersbazaar.com | Harper's Bazaar | Magazine | news
gq.com | GQ | Magazine | news
vanityfair.fr | Vanity Fair | Magazine | news
wwd.com | WWD | Magazine | news
businessoffashion.com | Business of Fashion | Magazine | news
fashionnetwork.com | FashionNetwork | Magazine | news
refinery29.com | Refinery29 | Magazine | news
whowhatwear.com | Who What Wear | Magazine | news
thecut.com | The Cut | Magazine | news
allure.com | Allure | Beauté | news
byrdie.com | Byrdie | Beauté | news
`,auto:`
opel.fr | Opel | Constructeur | car
toyota.com | Toyota | Constructeur | car
honda.com | Honda | Constructeur | car
bmw.com | BMW | Constructeur | car
mercedes-benz.com | Mercedes-Benz | Constructeur | car
audi.com | Audi | Constructeur | car
volkswagen.com | Volkswagen | Constructeur | car
ford.com | Ford | Constructeur | car
chevrolet.com | Chevrolet | Constructeur | car
gm.com | General Motors | Constructeur | car
jeep.com | Jeep | Constructeur | car
mazda.com | Mazda | Constructeur | car
subaru.com | Subaru | Constructeur | car
suzuki.fr | Suzuki | Constructeur | car
mitsubishi-motors.com | Mitsubishi | Constructeur | car
lexus.com | Lexus | Constructeur | car
landrover.com | Land Rover | Constructeur | car
jaguar.com | Jaguar | Constructeur | car
astonmartin.com | Aston Martin | Constructeur | car
bentleymotors.com | Bentley | Constructeur | car
rolls-roycemotorcars.com | Rolls-Royce | Constructeur | car
mclaren.com | McLaren | Constructeur | car
bugatti.com | Bugatti | Constructeur | car
maserati.com | Maserati | Constructeur | car
alfaromeo.com | Alfa Romeo | Constructeur | car
cupra.com | Cupra | Constructeur | car
polestar.com | Polestar | Constructeur | car
rivian.com | Rivian | Constructeur | car
lucidmotors.com | Lucid | Constructeur | car
ds-automobiles.com | DS Automobiles | Constructeur | car
stellantis.com | Stellantis | Constructeur | car
renaultgroup.com | Renault Group | Constructeur | car
bmw-motorrad.com | BMW Motorrad | Moto | bike
ktm.com | KTM | Moto | bike
triumphmotorcycles.com | Triumph | Moto | bike
suzuki-moto.com | Suzuki Moto | Moto | bike
royalenfield.com | Royal Enfield | Moto | bike
vespa.com | Vespa | Scooter | bike
piaggio.com | Piaggio | Scooter | bike
dafy-moto.com | Dafy Moto | Équipement moto | bike
motoblouz.com | Motoblouz | Équipement moto | bike
cardoen.fr | Cardoen | Occasion | car
spoticar.fr | Spoticar | Occasion | car
reezocar.com | Reezocar | Occasion | car
capcar.fr | Capcar | Occasion | car
autosphere.fr | Autosphere | Occasion | car
autotrader.com | Autotrader | Occasion | car
cars.com | Cars.com | Occasion | car
carvana.com | Carvana | Occasion | car
carmax.com | CarMax | Occasion | car
mobile.de | mobile.de | Occasion | car
kbb.com | Kelley Blue Book | Cote auto | car
edmunds.com | Edmunds | Actu auto | news
motortrend.com | MotorTrend | Actu auto | news
caranddriver.com | Car and Driver | Actu auto | news
jalopnik.com | Jalopnik | Actu auto | news
autoblog.com | Autoblog | Actu auto | news
carscoops.com | Carscoops | Actu auto | news
autocar.co.uk | Autocar | Actu auto | news
whatcar.com | What Car? | Actu auto | news
autonews.fr | Autonews | Actu auto | news
motor1.com | Motor1 | Actu auto | news
autoplanete.fr | Autoplanète | Actu auto | news
leblogauto.com | Le Blog Auto | Actu auto | news
insideevs.com | InsideEVs | Électrique | leaf
electrek.co | Electrek | Électrique | leaf
lepermislibre.fr | Le Permis Libre | Permis | flag
auto-ecole.net | Auto-école.net | Permis | flag
histovec.interieur.gouv.fr | HistoVec | Historique véhicule | flag
leasys.com | Leasys | Leasing | car
vroomly.com | Vroomly | Entretien | car
idgarages.com | iDGARAGES | Entretien | car
dekra-norisko.fr | Dekra | Contrôle technique | car
autosecurite.com | Autosécurité | Contrôle technique | car
eurorepar.fr | Eurorepar | Entretien | car
carter-cash.com | Carter-Cash | Pièces auto | car
piecesauto24.com | Pièces Auto 24 | Pièces auto | car
yakarouler.com | Yakarouler | Pièces auto | car
rockauto.com | RockAuto | Pièces auto | car
autozone.com | AutoZone | Pièces auto | car
pneus-online.fr | Pneus Online | Pneus | car
go-electra.com | Electra | Recharge | leaf
ionity.eu | Ionity | Recharge | leaf
izivia.com | Izivia | Recharge | leaf
carbu.com | Carbu.com | Carburant | coin
`,maison:`
ikea.fr | IKEA France | Meubles | home
fly.fr | Fly | Meubles | home
gautier.fr | Gautier | Meubles | home
roche-bobois.com | Roche Bobois | Meubles | home
ligne-roset.com | Ligne Roset | Meubles | home
cinna.fr | Cinna | Meubles | home
sklum.com | Sklum | Meubles | home
miliboo.com | Miliboo | Meubles | home
camif.fr | Camif | Meubles | home
lamaisondelaliterie.com | La Maison de la Literie | Literie | home
emma-matelas.fr | Emma | Literie | home
tediber.com | Tediber | Literie | home
hema.fr | HEMA | Déco | home
zarahome.com | Zara Home | Déco | home
casa.fr | Casa | Déco | home
atmosphera.com | Atmosphera | Déco | home
bouchara.com | Bouchara | Déco | home
tapis-chic.com | Tapis Chic | Déco | home
potterybarn.com | Pottery Barn | Meubles | home
westelm.com | West Elm | Meubles | home
crateandbarrel.com | Crate & Barrel | Meubles | home
dunelm.com | Dunelm | Déco | home
mistergooddeal.com | Mistergooddeal | Électroménager | cart
krups.fr | Krups | Électroménager | chef
delonghi.com | De'Longhi | Électroménager | chef
bosch-home.fr | Bosch Électroménager | Électroménager | home
whirlpool.fr | Whirlpool | Électroménager | home
miele.fr | Miele | Électroménager | home
electrolux.fr | Electrolux | Électroménager | home
kaercher.com | Kärcher | Nettoyage | home
bosch-diy.com | Bosch Bricolage | Outillage | home
makita.fr | Makita | Outillage | home
dewalt.fr | DeWalt | Outillage | home
ryobitools.eu | Ryobi | Outillage | home
stihl.fr | Stihl | Jardin | leaf
husqvarna.com | Husqvarna | Jardin | leaf
gardena.com | Gardena | Jardin | leaf
weber.com | Weber | Barbecue | chef
gerbeaud.com | Gerbeaud | Jardinage | leaf
detente-jardin.com | Détente Jardin | Jardinage | leaf
mon-jardin-ideal.fr | Mon jardin idéal | Jardinage | leaf
rhs.org.uk | RHS | Jardinage | leaf
bakker.com | Bakker | Jardinerie | leaf
meillandrichardier.com | Meilland Richardier | Jardinerie | leaf
philips-hue.com | Philips Hue | Maison connectée | home
arlo.com | Arlo | Sécurité | home
legrand.fr | Legrand | Électricité | home
schneider-electric.fr | Schneider Electric | Électricité | home
tado.com | tado° | Chauffage | home
ecovacs.com | Ecovacs | Robot | home
roborock.com | Roborock | Robot | home
batiactu.com | Batiactu | Bâtiment | news
ooreka.fr | Ooreka | Conseils | home
maisonapart.com | Maison à part | Magazine déco | home
ideal-habitat.fr | Idéal Habitat | Magazine déco | home
elledecoration.fr | Elle Décoration | Magazine déco | home
admagazine.fr | AD France | Magazine déco | home
bhg.com | Better Homes & Gardens | Magazine déco | home
thespruce.com | The Spruce | Conseils | home
housebeautiful.com | House Beautiful | Magazine déco | home
elledecor.com | Elle Decor | Magazine déco | home
bricoman.fr | Bricoman | Bricolage | home
tollens.com | Tollens | Peinture | home
v33.fr | V33 | Peinture | home
dulux.fr | Dulux Valentine | Peinture | home
duluxvalentine.com | Dulux Valentine | Peinture | home
grohe.fr | Grohe | Salle de bain | home
jacobdelafon.fr | Jacob Delafon | Salle de bain | home
schmidt.fr | Schmidt | Cuisines | home
cuisinella.com | Cuisinella | Cuisines | home
mobalpa.fr | Mobalpa | Cuisines | home
cuisines-aviva.com | Cuisines Aviva | Cuisines | home
ixina.fr | Ixina | Cuisines | home
tempur.com | Tempur | Literie | home
bultex.com | Bultex | Literie | home
dodo.fr | Dodo | Literie | home
linvosges.com | Linvosges | Linge de maison | home
blancheporte.fr | Blancheporte | Linge de maison | home
zodio.fr | Zodio | Arts de la table | chef
dyson.com | Dyson | Électroménager | home
smeg.com | Smeg | Électroménager | home
beko.fr | Beko | Électroménager | home
vorwerk.com | Vorwerk | Électroménager | home
sharkclean.fr | Shark | Aspirateurs | home
eufy.com | eufy | Maison connectée | home
ecobee.com | ecobee | Thermostat | home
simplisafe.com | SimpliSafe | Sécurité | home
ajax.systems | Ajax | Sécurité | home
blinkforhome.com | Blink | Sécurité | home
wyze.com | Wyze | Maison connectée | home
hornbach.fr | Hornbach | Bricolage | home
obi.de | OBI | Bricolage | home
bunnings.com.au | Bunnings | Bricolage | home
diy.com | B&Q | Bricolage | home
screwfix.com | Screwfix | Outillage | home
wurth.fr | Würth | Outillage | home
bricozor.com | Bricozor | Quincaillerie | home
123elec.com | 123elec | Électricité | home
thisoldhouse.com | This Old House | Rénovation | home
familyhandyman.com | Family Handyman | Bricolage | home
bobvila.com | Bob Vila | Bricolage | home
comprendrechoisir.com | Comprendre Choisir | Conseils | home
dwell.com | Dwell | Architecture | home
archdaily.com | ArchDaily | Architecture | home
designboom.com | Designboom | Design | image
plantes-et-jardins.com | Plantes & Jardins | Jardinerie | leaf
`,animaux:`
tomandco.fr | Tom&Co | Animalerie | paw
zooplus.com | Zooplus | Animalerie | paw
bitiba.fr | Bitiba | Animalerie | paw
medpets.fr | Medpets | Pharmacie animale | paw
vetostore.com | Vétostore | Pharmacie animale | health
pharma-veto.fr | Pharma Veto | Pharmacie animale | health
lacompagniedesanimaux.com | La Compagnie des Animaux | Animalerie | paw
fressnapf.de | Fressnapf | Animalerie | paw
petsathome.com | Pets at Home | Animalerie | paw
hillspet.fr | Hill's | Alimentation | paw
proplan.fr | Pro Plan | Alimentation | paw
whiskas.fr | Whiskas | Alimentation | paw
pedigree.fr | Pedigree | Alimentation | paw
friskies.fr | Friskies | Alimentation | paw
felix.fr | Felix | Alimentation | paw
gourmet.fr | Gourmet | Alimentation | paw
orijenpetfoods.com | Orijen | Alimentation | paw
acana.com | Acana | Alimentation | paw
edgardcooper.com | Edgard & Cooper | Alimentation | paw
bluebuffalo.com | Blue Buffalo | Alimentation | paw
thefarmersdog.com | The Farmer's Dog | Alimentation | paw
barkbox.com | BarkBox | Jouets chiens | paw
kong.com | KONG | Jouets chiens | paw
tractive.com | Tractive | Traceur GPS | pin
weenect.com | Weenect | Traceur GPS | pin
vetcompanion.fr | Vetcompanion | Vétérinaire | health
veterinaire.fr | Ordre des vétérinaires | Vétérinaire | health
vetsdirect.fr | Vetsdirect | Pharmacie animale | health
vet-alfort.fr | École vétérinaire d'Alfort | Vétérinaire | health
merckvetmanual.com | Merck Vet Manual | Vétérinaire | health
vcahospitals.com | VCA | Vétérinaire | health
banfield.com | Banfield | Vétérinaire | health
petmd.com | PetMD | Santé animale | health
akcpetinsurance.com | AKC Pet Insurance | Assurance | paw
assuropoil.fr | Assur O'Poil | Assurance | paw
bulle-bleue.fr | Bulle Bleue | Assurance | paw
kozoo.eu | Kozoo | Assurance | paw
dalma.co | Dalma | Assurance | paw
lemonade.com | Lemonade | Assurance | paw
adoptapet.com | Adopt-a-Pet | Adoption | heart
rspca.org.uk | RSPCA | Protection animale | heart
battersea.org.uk | Battersea | Adoption | heart
dogstrust.org.uk | Dogs Trust | Adoption | heart
humanesociety.org | Humane Society | Protection animale | heart
bestfriends.org | Best Friends | Adoption | heart
ifaw.org | IFAW | Protection animale | heart
audubon.org | Audubon | Oiseaux | leaf
rspb.org.uk | RSPB | Oiseaux | leaf
xeno-canto.org | Xeno-canto | Chants d'oiseaux | music
iucnredlist.org | Liste rouge UICN | Espèces menacées | leaf
janegoodall.org | Jane Goodall Institute | Primates | leaf
sheldrickwildlifetrust.org | Sheldrick Trust | Éléphants | heart
zoo-la-fleche.com | Zoo de La Flèche | Zoo | paw
thoiry.net | Thoiry | Zoo | paw
bioparc-zoo.fr | Bioparc de Doué | Zoo | paw
zoo-amneville.com | Zoo d'Amnéville | Zoo | paw
zoo-palmyre.fr | Zoo de La Palmyre | Zoo | paw
planetesauvage.com | Planète Sauvage | Zoo | paw
cerza.com | Cerza | Zoo | paw
zoo-mulhouse.com | Zoo de Mulhouse | Zoo | paw
zsl.org | ZSL London Zoo | Zoo | paw
bronxzoo.com | Bronx Zoo | Zoo | paw
nationalzoo.si.edu | Smithsonian Zoo | Zoo | paw
aquarium-paris.fr | Aquarium de Paris | Aquarium | fish
oceanopolis.com | Océanopolis | Aquarium | fish
seaquarium.fr | Seaquarium | Aquarium | fish
aquarium-lyon.fr | Aquarium de Lyon | Aquarium | fish
montereybayaquarium.org | Monterey Bay Aquarium | Aquarium | fish
georgiaaquarium.org | Georgia Aquarium | Aquarium | fish
seaworld.com | SeaWorld | Parc marin | fish
equidia.fr | Equidia | Chevaux | flag
haras-nationaux.fr | Haras nationaux | Chevaux | flag
ifce.fr | IFCE | Chevaux | flag
equirodi.com | Equirodi | Chevaux | flag
padd.fr | Padd | Équitation | tag
horse.com | Horse.com | Équitation | tag
purina.com | Purina | Alimentation | paw
royalcanin.fr | Royal Canin France | Alimentation | paw
cats.org.uk | Cats Protection | Adoption | heart
thesprucepets.com | The Spruce Pets | Conseils | paw
dogtime.com | Dogtime | Races de chiens | paw
yummypets.com | Yummypets | Communauté | paw
petsonic.com | Petsonic | Animalerie | paw
ciwf.fr | CIWF France | Protection animale | heart
fourpaws.org | Quatre Pattes | Protection animale | heart
`,sciences:`
inria.fr | Inria | Recherche | code
brgm.fr | BRGM | Géologie | atom
ipgp.fr | IPGP | Géophysique | atom
obspm.fr | Observatoire de Paris | Astronomie | atom
ecmwf.int | ECMWF | Météo | sun
nsf.gov | NSF | Recherche | atom
ethz.ch | ETH Zurich | Université | atom
college-de-france.fr | Collège de France | Enseignement | atom
mpg.de | Max Planck | Recherche | atom
weizmann.ac.il | Weizmann | Recherche | atom
riken.jp | RIKEN | Recherche | atom
fermilab.gov | Fermilab | Physique | atom
iter.org | ITER | Fusion | atom
ligo.org | LIGO | Physique | atom
jaxa.jp | JAXA | Espace | plane
isro.gov.in | ISRO | Espace | plane
roscosmos.ru | Roscosmos | Espace | plane
arianespace.com | Arianespace | Espace | plane
ariane.group | ArianeGroup | Espace | plane
rocketlabusa.com | Rocket Lab | Espace | plane
virgingalactic.com | Virgin Galactic | Espace | plane
planetary.org | Planetary Society | Espace | plane
spaceflightnow.com | Spaceflight Now | Espace | news
nasaspaceflight.com | NASASpaceflight | Espace | news
universetoday.com | Universe Today | Espace | news
skyandtelescope.org | Sky & Telescope | Astronomie | atom
astronomy.com | Astronomy | Astronomie | atom
apod.nasa.gov | APOD | Astronomie | image
earthobservatory.nasa.gov | Earth Observatory | Terre | image
in-the-sky.org | In-The-Sky | Astronomie | sun
afastronomie.fr | AFA | Astronomie | atom
nhm.ac.uk | Natural History Museum | Musée | atom
sciencemuseum.org.uk | Science Museum | Musée | atom
amnh.org | AMNH | Musée | atom
naturalhistory.si.edu | Smithsonian Nature | Musée | atom
airandspace.si.edu | Air and Space | Musée | plane
exploratorium.edu | Exploratorium | Musée | atom
deutsches-museum.de | Deutsches Museum | Musée | atom
arts-et-metiers.net | Musée des Arts et Métiers | Musée | atom
vulcania.com | Vulcania | Parc scientifique | atom
acs.org | ACS | Chimie | atom
aps.org | APS | Physique | atom
iop.org | IOP | Physique | atom
royalsociety.org | Royal Society | Académie | atom
academie-sciences.fr | Académie des sciences | Académie | atom
sciencenews.org | Science News | Actualité | news
newatlas.com | New Atlas | Actualité | news
popsci.com | Popular Science | Vulgarisation | news
popularmechanics.com | Popular Mechanics | Vulgarisation | news
discovermagazine.com | Discover | Vulgarisation | news
sciencealert.com | ScienceAlert | Actualité | news
iflscience.com | IFLScience | Vulgarisation | news
eurekalert.org | EurekAlert | Actualité | news
nautil.us | Nautilus | Vulgarisation | news
aeon.co | Aeon | Idées | pen
epsiloon.com | Epsiloon | Magazine | news
sciencepost.fr | Sciencepost | Actualité | news
trustmyscience.com | Trust My Science | Vulgarisation | news
semanticscholar.org | Semantic Scholar | Recherche | search
medrxiv.org | medRxiv | Prépublications | book
oeis.org | OEIS | Maths | atom
phet.colorado.edu | PhET | Simulations | atom
ptable.com | Ptable | Chimie | atom
earth.google.com | Google Earth | Cartes | map
earthquake.usgs.gov | Séismes USGS | Géologie | map
worldview.earthdata.nasa.gov | Worldview | Cartes | map
remonterletemps.ign.fr | Remonter le temps | Cartes | map
lightpollutionmap.info | Light Pollution Map | Cartes | map
science.nasa.gov | NASA Science | Espace | atom
spotthestation.nasa.gov | Spot the Station | Espace | plane
physicsworld.com | Physics World | Physique | atom
chemistryworld.com | Chemistry World | Chimie | atom
cosmosmagazine.com | Cosmos | Vulgarisation | news
lejournal.cnrs.fr | CNRS Le journal | Recherche | news
ens-lyon.fr | ENS de Lyon | Université | atom
psl.eu | PSL | Université | atom
cmu.edu | Carnegie Mellon | Université | code
nist.gov | NIST | Métrologie | atom
bipm.org | BIPM | Métrologie | atom
images.math.cnrs.fr | Images des maths | Maths | atom
worldometers.info | Worldometer | Statistiques | atom
gapminder.org | Gapminder | Données | atom
nsidc.org | NSIDC | Climat | leaf
`,culture:`
librairie-mollat.com | Mollat | Librairie | book
mollat.com | Mollat | Librairie | book
gibert.com | Gibert | Librairie | book
chapitre.com | Chapitre | Librairie | book
abebooks.fr | AbeBooks | Livres anciens | book
abebooks.com | AbeBooks | Livres anciens | book
bookdepository.com | Book Depository | Livres | book
barnesandnoble.com | Barnes & Noble | Livres | book
waterstones.com | Waterstones | Librairie | book
bookshop.org | Bookshop.org | Librairie | book
powells.com | Powell's | Librairie | book
thriftbooks.com | ThriftBooks | Livres d'occasion | book
thestorygraph.com | The StoryGraph | Lecture | book
librarything.com | LibraryThing | Lecture | book
ebooksgratuits.com | Ebooks libres et gratuits | Livres libres | book
youboox.fr | Youboox | Lecture | book
albin-michel.fr | Albin Michel | Éditeur | book
editions-grasset.fr | Grasset | Éditeur | book
editions-stock.fr | Stock | Éditeur | book
fayard.fr | Fayard | Éditeur | book
editionspoints.com | Points | Éditeur | book
lelivredepoche.com | Le Livre de Poche | Éditeur | book
folio-lesite.fr | Folio | Éditeur | book
seuil.com | Seuil | Éditeur | book
editions-jclattes.fr | JC Lattès | Éditeur | book
pocket.fr | Pocket | Éditeur | book
editions-minuit.fr | Éditions de Minuit | Éditeur | book
penguinrandomhouse.com | Penguin Random House | Éditeur | book
harpercollins.com | HarperCollins | Éditeur | book
simonandschuster.com | Simon & Schuster | Éditeur | book
macmillan.com | Macmillan | Éditeur | book
editions-delcourt.fr | Delcourt | BD | pen
dupuis.com | Dupuis | BD | pen
lelombard.com | Le Lombard | BD | pen
futuropolis.fr | Futuropolis | BD | pen
kana.fr | Kana | Manga | pen
ki-oon.com | Ki-oon | Manga | pen
pika.fr | Pika | Manga | pen
kurokawa.fr | Kurokawa | Manga | pen
mangacollec.com | Mangacollec | Manga | pen
izneo.com | izneo | BD numérique | pen
dc.com | DC | Comics | pen
comixology.com | ComiXology | Comics | pen
mangaplus.shueisha.co.jp | Manga Plus | Manga | pen
bdgest.com | BDGest | BD | pen
bdtheque.com | BDthèque | BD | pen
bdangouleme.com | Festival d'Angoulême | BD | pen
asterix.com | Astérix | BD | pen
tintin.com | Tintin | BD | pen
spirou.com | Spirou | BD | pen
grandpalais.fr | Grand Palais | Musée | image
petitpalais.paris.fr | Petit Palais | Musée | image
museeorangerie.fr | Musée de l'Orangerie | Musée | image
museerodinparis.fr | Musée Rodin | Musée | image
fondationlouisvuitton.fr | Fondation Louis Vuitton | Art | image
pinaultcollection.com | Pinault Collection | Art | image
palaisdetokyo.com | Palais de Tokyo | Art | image
mucem.org | Mucem | Musée | image
madparis.fr | MAD Paris | Musée | image
musee-armee.fr | Musée de l'Armée | Musée | flag
louvre-lens.fr | Louvre-Lens | Musée | image
tate.org.uk | Tate | Musée | image
nationalgallery.org.uk | National Gallery | Musée | image
vam.ac.uk | V&A | Musée | image
museodelprado.es | Prado | Musée | image
guggenheim.org | Guggenheim | Musée | image
artic.edu | Art Institute of Chicago | Musée | image
getty.edu | Getty | Musée | image
vangoghmuseum.nl | Van Gogh Museum | Musée | image
hermitagemuseum.org | Ermitage | Musée | image
museivaticani.va | Musées du Vatican | Musée | image
artsy.net | Artsy | Art | image
saatchiart.com | Saatchi Art | Art | image
christies.com | Christie's | Enchères | coin
sothebys.com | Sotheby's | Enchères | coin
drouot.com | Drouot | Enchères | coin
connaissancedesarts.com | Connaissance des Arts | Magazine | news
beauxarts.com | Beaux Arts | Magazine | news
lequotidiendelart.com | Le Quotidien de l'Art | Magazine | news
artnet.com | Artnet | Art | news
theartnewspaper.com | The Art Newspaper | Art | news
theatre-chatelet.com | Théâtre du Châtelet | Théâtre | live
theatredelaville-paris.com | Théâtre de la Ville | Théâtre | live
colline.fr | La Colline | Théâtre | live
theatre-odeon.eu | Odéon | Théâtre | live
theatre-chaillot.fr | Chaillot | Danse | live
fondation-patrimoine.org | Fondation du patrimoine | Patrimoine | flag
missionpatrimoine.fr | Mission Patrimoine | Patrimoine | flag
whc.unesco.org | Patrimoine mondial UNESCO | Patrimoine | flag
unesco.org | UNESCO | Patrimoine | flag
pop.culture.gouv.fr | POP | Patrimoine | flag
chambord.org | Chambord | Château | flag
chenonceau.com | Chenonceau | Château | flag
abbaye-mont-saint-michel.fr | Mont-Saint-Michel | Patrimoine | flag
chateaudefontainebleau.fr | Château de Fontainebleau | Château | flag
chantilly-domaine.fr | Domaine de Chantilly | Château | flag
pass.culture.fr | pass Culture | Sorties | tag
quefaire.paris.fr | Que faire à Paris | Sorties | pin
`,famille:`
thebump.com | The Bump | Grossesse | users
parents.com | Parents.com | Parents | users
todaysparent.com | Today's Parent | Parents | users
healthychildren.org | HealthyChildren | Santé enfants | health
kidshealth.org | KidsHealth | Santé enfants | health
pampers.fr | Pampers | Bébés | users
pampers.com | Pampers | Bébés | users
huggies.com | Huggies | Bébés | users
lillydoo.com | Lillydoo | Bébés | users
joone.fr | Joone | Bébés | users
mustela.fr | Mustela | Bébés | users
gallia.fr | Gallia | Alimentation bébé | users
bledina.com | Blédina | Alimentation bébé | users
babybjorn.fr | BabyBjörn | Puériculture | users
babybjorn.com | BabyBjörn | Puériculture | users
cybex-online.com | Cybex | Puériculture | users
bugaboo.com | Bugaboo | Puériculture | users
chicco.fr | Chicco | Puériculture | users
beaba.com | Béaba | Puériculture | users
bebeconfort.com | Bébé Confort | Puériculture | users
maxi-cosi.fr | Maxi-Cosi | Puériculture | users
natalys.com | Natalys | Puériculture | users
autourdebebe.com | Autour de Bébé | Puériculture | users
sergent-major.com | Sergent Major | Vêtements enfants | tag
carters.com | Carter's | Vêtements enfants | tag
oxybul.com | Oxybul | Jouets éducatifs | cube
nature-et-decouvertes.com | Nature & Découvertes | Jouets | cube
djeco.com | Djeco | Jouets | cube
janod.com | Janod | Jouets | cube
ravensburger.fr | Ravensburger | Puzzles | cube
ravensburger.com | Ravensburger | Puzzles | cube
smoby.com | Smoby | Jouets | cube
hotwheels.com | Hot Wheels | Jouets | car
lunii.com | Lunii | Histoires audio | music
tonies.com | Tonies | Histoires audio | music
yotoplay.com | Yoto | Histoires audio | music
funbrain.com | Funbrain | Jeux éducatifs | gamepad
abcmouse.com | ABCmouse | Éducation | book
starfall.com | Starfall | Lecture | book
education.com | Education.com | Éducation | book
logicieleducatif.fr | Logiciel Éducatif | Jeux éducatifs | gamepad
jeuxpedago.com | JeuxPédago | Jeux éducatifs | gamepad
soutien67.fr | Soutien 67 | Éducation | book
ortholud.com | Ortholud | Orthographe | book
completude.com | Complétude | Soutien scolaire | book
disney.com | Disney | Jeunesse | sparkle
nick.com | Nickelodeon | Programmes jeunesse | play
cartoonnetwork.com | Cartoon Network | Programmes jeunesse | play
peppapig.com | Peppa Pig | Programmes jeunesse | play
sesamestreet.org | Sesame Street | Programmes jeunesse | play
dreamworks.com | DreamWorks | Animation | film
pixar.com | Pixar | Animation | film
ghibli.jp | Studio Ghibli | Animation | film
parcdelamerdesable.fr | La Mer de Sable | Parc d'attractions | sparkle
nigloland.fr | Nigloland | Parc d'attractions | sparkle
parc-saint-paul.fr | Parc Saint-Paul | Parc d'attractions | sparkle
parcspirou.com | Parc Spirou | Parc d'attractions | sparkle
jardindacclimatation.fr | Jardin d'Acclimatation | Parc d'attractions | sparkle
france-miniature.fr | France Miniature | Parc d'attractions | sparkle
legoland.com | Legoland | Parc d'attractions | sparkle
efteling.com | Efteling | Parc d'attractions | sparkle
portaventuraworld.com | PortAventura | Parc d'attractions | sparkle
disneyworld.disney.go.com | Walt Disney World | Parc d'attractions | sparkle
universalorlando.com | Universal Orlando | Parc d'attractions | sparkle
sixflags.com | Six Flags | Parc d'attractions | sparkle
aqualand.fr | Aqualand | Parc aquatique | sun
centerparcs.fr | Center Parcs | Vacances famille | sun
kidiklik.fr | Kidiklik | Sorties enfants | pin
babysits.fr | Babysits | Baby-sitting | users
nounou-top.fr | Nounou-Top | Garde d'enfants | users
monenfant.fr | Mon Enfant | Garde d'enfants | users
care.com | Care.com | Garde d'enfants | users
naitreetgrandir.com | Naître et grandir | Parents | users
supercoloring.com | Super Coloring | Coloriages | pen
crayola.com | Crayola | Loisirs créatifs | pen
leapfrog.com | LeapFrog | Jouets éducatifs | cube
melissaanddoug.com | Melissa & Doug | Jouets | cube
schleich-s.com | Schleich | Figurines | cube
sylvanianfamilies.com | Sylvanian Families | Jouets | cube
`},ie={savoir:`book`,reseaux:`users`,video:`play`,ia:`sparkle`,tech:`code`,shopping:`cart`,jeux:`gamepad`,musique:`music`,actu:`news`,finance:`coin`,voyage:`plane`,sport:`ball`,forums:`forum`,vie:`flag`,environnement:`leaf`,sante:`health`,cuisine:`chef`,mode:`tag`,auto:`car`,maison:`home`,animaux:`paw`,sciences:`atom`,culture:`image`,famille:`users`},ae={savoir:`
britannica.com | Britannica | Encyclopédie
wikihow.com | wikiHow | Tutoriels
reverso.net | Reverso | Traduction
wordreference.com | WordReference | Dictionnaire
linguee.fr | Linguee | Traduction
lalanguefrancaise.com | La langue française | Dictionnaire
cnrtl.fr | CNRTL | Dictionnaire
bescherelle.com | Bescherelle | Conjugaison
le-conjugueur.lefigaro.fr | Le Conjugueur | Conjugaison
udemy.com | Udemy | Cours
edx.org | edX | Cours
futurelearn.com | FutureLearn | Cours
skillshare.com | Skillshare | Cours
masterclass.com | MasterClass | Cours
codecademy.com | Codecademy | Code | code
brilliant.org | Brilliant | Maths
memrise.com | Memrise | Langues
busuu.com | Busuu | Langues
rosettastone.com | Rosetta Stone | Langues
italki.com | italki | Langues
superprof.fr | Superprof | Soutien scolaire
acadomia.fr | Acadomia | Soutien scolaire
schoolmouv.fr | SchoolMouv | Révisions
digischool.fr | Digischool | Révisions
etudier.com | Etudier.com | Révisions
parcoursup.fr | Parcoursup | Orientation | flag
onisep.fr | Onisep | Orientation
education.gouv.fr | Éducation nationale | École | flag
ecoledirecte.com | École Directe | École
monlycee.net | Mon Lycée | École
sorbonne-universite.fr | Sorbonne Université | Université
harvard.edu | Harvard | Université
mit.edu | MIT | Université
stanford.edu | Stanford | Université
ox.ac.uk | Oxford | Université
cam.ac.uk | Cambridge | Université
polytechnique.edu | Polytechnique | Université
ens.psl.eu | ENS | Université
sciencespo.fr | Sciences Po | Université
wikisource.org | Wikisource | Bibliothèque
wikibooks.org | Wikibooks | Livres
archive.org | Internet Archive | Archives
scholar.google.com | Google Scholar | Recherche | search
researchgate.net | ResearchGate | Recherche
academia.edu | Academia | Recherche
jstor.org | JSTOR | Recherche
persee.fr | Persée | Recherche
cairn.info | Cairn | Recherche
hal.science | HAL | Recherche
geogebra.org | GeoGebra | Maths
desmos.com | Desmos | Maths
mathway.com | Mathway | Maths
symbolab.com | Symbolab | Maths
photomath.com | Photomath | Maths
chegg.com | Chegg | Devoirs
coursehero.com | Course Hero | Devoirs
brainly.com | Brainly | Devoirs
nosdevoirs.fr | Nosdevoirs | Devoirs
kartable.fr | Kartable | Révisions
ted.com | TED | Conférences | play
bigthink.com | Big Think | Idées
howstuffworks.com | HowStuffWorks | Savoir
thoughtco.com | ThoughtCo | Savoir
merriam-webster.com | Merriam-Webster | Dictionnaire
dictionary.com | Dictionary.com | Dictionnaire
cambridge.org | Cambridge Dictionary | Dictionnaire
collinsdictionary.com | Collins | Dictionnaire
urbandictionary.com | Urban Dictionary | Dictionnaire
thesaurus.com | Thesaurus | Dictionnaire
startpage.com | Startpage | Recherche | search
brave.com | Brave Search | Recherche | search
lilo.org | Lilo | Recherche | search
`,reseaux:`
reddit.com | Reddit | Forums | forum
discord.com | Discord | Messagerie | chat
twitch.tv | Twitch | Live | live
skype.com | Skype | Visio | chat
viber.com | Viber | Messagerie | chat
line.me | LINE | Messagerie | chat
kakaocorp.com | Kakao | Messagerie | chat
weibo.com | Weibo | Réseaux
qq.com | QQ | Messagerie | chat
douyin.com | Douyin | Vidéo | play
xiaohongshu.com | Xiaohongshu | Réseaux
ok.ru | Odnoklassniki | Réseaux
tiktok.com | TikTok | Vidéo | play
lemon8-app.com | Lemon8 | Réseaux
nextdoor.com | Nextdoor | Voisins
meetup.com | Meetup | Rencontres
hinge.co | Hinge | Rencontres | heart
happn.com | Happn | Rencontres | heart
okcupid.com | OkCupid | Rencontres | heart
grindr.com | Grindr | Rencontres | heart
badoo.com | Badoo | Rencontres | heart
match.com | Match | Rencontres | heart
flickr.com | Flickr | Photos | camera
500px.com | 500px | Photos | camera
vsco.co | VSCO | Photos | camera
deviantart.com | DeviantArt | Art | image
behance.net | Behance | Création | image
dribbble.com | Dribbble | Création | image
artstation.com | ArtStation | Art | image
medium.com | Medium | Blogs | pen
substack.com | Substack | Newsletters | pen
patreon.com | Patreon | Créateurs
ko-fi.com | Ko-fi | Créateurs
onlyfans.com | OnlyFans | Créateurs
linktr.ee | Linktree | Liens
about.me | About.me | Profils
gravatar.com | Gravatar | Profils
mewe.com | MeWe | Réseaux
truthsocial.com | Truth Social | Réseaux | chat
gab.com | Gab | Réseaux | chat
parler.com | Parler | Réseaux | chat
clubhouse.com | Clubhouse | Audio
periscope.tv | Periscope | Live | live
ask.fm | ASKfm | Questions | forum
tellonym.me | Tellonym | Questions | forum
jodel.com | Jodel | Réseaux | chat
wattpad.com | Wattpad | Lecture | book
goodreads.com | Goodreads | Lecture | book
strava.com | Strava | Sport | bike
letterboxd.com | Letterboxd | Cinéma | film
`,video:`
hulu.com | Hulu | Vidéo | film
peacocktv.com | Peacock | Vidéo | film
sling.com | Sling TV | Télé
fubo.tv | Fubo | Télé
pluto.tv | Pluto TV | Télé
tubitv.com | Tubi | Vidéo | film
rakuten.tv | Rakuten TV | Vidéo | film
mubi.com | MUBI | Cinéma | film
salto.fr | Salto | Télé
6play.fr | 6play | Télé
m6.fr | M6 | Télé
tf1.fr | TF1 | Télé
arte.tv | Arte | Télé
france.tv | france.tv | Télé
mycanal.fr | myCANAL | Télé
bfmtv.com | BFMTV | Info | news
lcp.fr | LCP | Télé
rmc.bfmtv.com | RMC | Info | radio
twitch.tv | Twitch | Live | live
rumble.com | Rumble | Vidéo
odysee.com | Odysee | Vidéo
bilibili.com | Bilibili | Vidéo
nicovideo.jp | Niconico | Vidéo
iqiyi.com | iQIYI | Vidéo
youku.com | Youku | Vidéo
viki.com | Viki | Séries | film
adn.fr | ADN | Anime
animationdigitalnetwork.fr | ADN | Anime
wakanim.tv | Wakanim | Anime
imdb.com | IMDb | Cinéma | film
rottentomatoes.com | Rotten Tomatoes | Cinéma | film
metacritic.com | Metacritic | Critiques | film
themoviedb.org | TMDB | Cinéma | film
justwatch.com | JustWatch | Guide | film
betaseries.com | BetaSeries | Séries | film
premiere.fr | Première | Cinéma | film
ecranlarge.com | Écran Large | Cinéma | film
telerama.fr | Télérama | Culture | news
programme-tv.net | Programme TV | Télé
ugc.fr | UGC | Cinémas | film
pathe.fr | Pathé | Cinémas | film
cgrcinemas.fr | CGR | Cinémas | film
fandango.com | Fandango | Cinémas | film
amc.com | AMC | Télé
hbo.com | HBO | Télé
starz.com | Starz | Télé
showtime.com | Showtime | Télé
cbs.com | CBS | Télé
nbc.com | NBC | Télé
abc.com | ABC | Télé
fox.com | FOX | Télé
bbc.co.uk | BBC iPlayer | Télé
itv.com | ITVX | Télé
channel4.com | Channel 4 | Télé
giphy.com | GIPHY | GIF | image
tenor.com | Tenor | GIF | image
imgur.com | Imgur | Images | image
9gag.com | 9GAG | Humour | image
`,ia:`
openai.com | OpenAI | IA
anthropic.com | Anthropic | IA
mistral.ai | Mistral AI | IA
deepmind.google | Google DeepMind | IA
meta.ai | Meta AI | IA
grok.com | Grok | IA
x.ai | xAI | IA
deepseek.com | DeepSeek | IA
qwen.ai | Qwen | IA
poe.com | Poe | IA
you.com | You.com | IA | search
phind.com | Phind | IA | code
cursor.com | Cursor | Code | code
replit.com | Replit | Code | code
v0.dev | v0 | Code | code
lovable.dev | Lovable | Code | code
bolt.new | Bolt | Code | code
github.com | GitHub Copilot | Code | code
runwayml.com | Runway | Vidéo IA | play
pika.art | Pika | Vidéo IA | play
lumalabs.ai | Luma | Vidéo IA | play
synthesia.io | Synthesia | Vidéo IA | play
heygen.com | HeyGen | Vidéo IA | play
elevenlabs.io | ElevenLabs | Voix IA | music
suno.com | Suno | Musique IA | music
udio.com | Udio | Musique IA | music
stability.ai | Stability AI | Images IA | image
leonardo.ai | Leonardo | Images IA | image
ideogram.ai | Ideogram | Images IA | image
krea.ai | Krea | Images IA | image
playground.com | Playground | Images IA | image
civitai.com | Civitai | Images IA | image
remove.bg | remove.bg | Images IA | image
photoroom.com | Photoroom | Images IA | image
jasper.ai | Jasper | Rédaction IA | pen
copy.ai | Copy.ai | Rédaction IA | pen
grammarly.com | Grammarly | Écriture | pen
quillbot.com | QuillBot | Écriture | pen
notion.so | Notion AI | Travail | pen
otter.ai | Otter | Transcription
fireflies.ai | Fireflies | Transcription
gamma.app | Gamma | Présentations
tome.app | Tome | Présentations
beautiful.ai | Beautiful.ai | Présentations
perplexity.ai | Perplexity | IA | search
janitorai.com | JanitorAI | IA | chat
chai.ml | Chai | IA | chat
replika.com | Replika | IA | chat
pi.ai | Pi | IA | chat
kaggle.com | Kaggle | Données
paperswithcode.com | Papers with Code | Recherche
ollama.com | Ollama | IA locale | code
langchain.com | LangChain | Code | code
`,tech:`
google.com | Google Chrome | Navigateur
mozilla.org | Mozilla Firefox | Navigateur
opera.com | Opera | Navigateur
vivaldi.com | Vivaldi | Navigateur
duckduckgo.com | DuckDuckGo Browser | Navigateur
icloud.com | iCloud | Stockage | cloud
onedrive.live.com | OneDrive | Stockage | cloud
box.com | Box | Stockage | cloud
mega.nz | MEGA | Stockage | cloud
wetransfer.com | WeTransfer | Envoi | cloud
pcloud.com | pCloud | Stockage | cloud
proton.me | Proton | Mail | mail
tutanota.com | Tuta | Mail | mail
yahoo.com | Yahoo Mail | Mail | mail
orange.fr | Orange | Opérateur
free.fr | Free | Opérateur
sfr.fr | SFR | Opérateur
bouyguestelecom.fr | Bouygues Telecom | Opérateur
sosh.fr | Sosh | Opérateur
red-by-sfr.fr | RED by SFR | Opérateur
laposte.net | La Poste Mail | Mail | mail
gitlab.com | GitLab | Code
bitbucket.org | Bitbucket | Code
npmjs.com | npm | Code
pypi.org | PyPI | Code
docker.com | Docker | Code
kubernetes.io | Kubernetes | Code
python.org | Python | Code
developer.mozilla.org | MDN | Code
w3schools.com | W3Schools | Code
freecodecamp.org | freeCodeCamp | Code
leetcode.com | LeetCode | Code
codepen.io | CodePen | Code
jsfiddle.net | JSFiddle | Code
vercel.com | Vercel | Hébergement | cloud
netlify.com | Netlify | Hébergement | cloud
heroku.com | Heroku | Hébergement | cloud
digitalocean.com | DigitalOcean | Hébergement | cloud
aws.amazon.com | Amazon Web Services | Cloud | cloud
azure.microsoft.com | Microsoft Azure | Cloud | cloud
cloud.google.com | Google Cloud | Cloud | cloud
godaddy.com | GoDaddy | Domaines
namecheap.com | Namecheap | Domaines
squarespace.com | Squarespace | Sites web | pen
shopify.com | Shopify | Boutiques | cart
webflow.com | Webflow | Sites web | pen
atlassian.com | Atlassian | Travail | briefcase
asana.com | Asana | Travail | briefcase
monday.com | monday.com | Travail | briefcase
clickup.com | ClickUp | Travail | briefcase
airtable.com | Airtable | Travail | briefcase
miro.com | Miro | Travail | briefcase
teams.microsoft.com | Microsoft Teams | Visio | live
meet.google.com | Google Meet | Visio | live
webex.com | Webex | Visio | live
calendly.com | Calendly | Agenda
docusign.com | DocuSign | Signature | pen
typeform.com | Typeform | Formulaires
surveymonkey.com | SurveyMonkey | Sondages
mailchimp.com | Mailchimp | Newsletters | mail
hubspot.com | HubSpot | Marketing
salesforce.com | Salesforce | Entreprises
zendesk.com | Zendesk | Support
intercom.com | Intercom | Support
1password.com | 1Password | Sécurité
bitwarden.com | Bitwarden | Sécurité
lastpass.com | LastPass | Sécurité
nordvpn.com | NordVPN | VPN
expressvpn.com | ExpressVPN | VPN
protonvpn.com | Proton VPN | VPN
avast.com | Avast | Antivirus
kaspersky.com | Kaspersky | Antivirus
malwarebytes.com | Malwarebytes | Antivirus
virustotal.com | VirusTotal | Sécurité
haveibeenpwned.com | Have I Been Pwned | Sécurité
samsung.com | Samsung | Tech | cube
xiaomi.com | Xiaomi | Tech | cube
huawei.com | Huawei | Tech | cube
sony.com | Sony | Tech | cube
lg.com | LG | Tech | cube
dell.com | Dell | Ordinateurs | cube
hp.com | HP | Ordinateurs | cube
lenovo.com | Lenovo | Ordinateurs | cube
asus.com | ASUS | Ordinateurs | cube
nvidia.com | NVIDIA | Tech | cube
amd.com | AMD | Tech | cube
intel.com | Intel | Tech | cube
logitech.com | Logitech | Accessoires | cube
ldlc.com | LDLC | High-tech | cart
materiel.net | Materiel.net | High-tech | cart
topachat.com | TopAchat | High-tech | cart
lesnumeriques.com | Les Numériques | Tests | news
clubic.com | Clubic | Tech | news
journaldugeek.com | Journal du Geek | Tech | news
korben.info | Korben | Tech | news
theverge.com | The Verge | Tech | news
techcrunch.com | TechCrunch | Tech | news
wired.com | Wired | Tech | news
arstechnica.com | Ars Technica | Tech | news
engadget.com | Engadget | Tech | news
gsmarena.com | GSMArena | Smartphones | news
androidauthority.com | Android Authority | Smartphones | news
macrumors.com | MacRumors | Apple | news
igen.fr | iGeneration | Apple | news
downdetector.fr | Downdetector | Pannes
`,shopping:`
aliexpress.com | AliExpress | Shopping
alibaba.com | Alibaba | Commerce
target.com | Target | Shopping
bestbuy.com | Best Buy | High-tech
costco.com | Costco | Shopping
homedepot.com | The Home Depot | Bricolage | home
lowes.com | Lowe's | Bricolage | home
wayfair.com | Wayfair | Maison | home
newegg.com | Newegg | High-tech
auchan.fr | Auchan | Courses
leclerc | E.Leclerc | Courses
e.leclerc | E.Leclerc | Courses
intermarche.com | Intermarché | Courses
coursesu.com | Courses U | Courses
lidl.fr | Lidl | Courses
aldi.fr | Aldi | Courses
monoprix.fr | Monoprix | Courses
picard.fr | Picard | Courses
grandfrais.com | Grand Frais | Courses
action.com | Action | Discount
gifi.fr | GiFi | Discount
lafoirfouille.fr | La Foir'Fouille | Maison
cultura.com | Cultura | Culture | book
lego.com | LEGO | Jouets | cube
kingjouet.com | King Jouet | Jouets | cube
joueclub.fr | JouéClub | Jouets | cube
smythstoys.com | Smyths Toys | Jouets | cube
apple.com | Apple Store | High-tech | cube
fnac.com | Fnac | Culture
darty.com | Darty | Électroménager
electrodepot.fr | Electro Dépôt | Électroménager
ubaldi.com | Ubaldi | Électroménager
showroomprive.com | Showroomprivé | Ventes privées | tag
bazarchic.com | BazarChic | Ventes privées | tag
groupon.fr | Groupon | Bons plans | tag
dealabs.com | Dealabs | Bons plans | tag
idealo.fr | idealo | Comparateur | search
ledenicheur.fr | LeDénicheur | Comparateur | search
igraal.com | iGraal | Cashback | coin
poulpeo.com | Poulpeo | Cashback | coin
trustpilot.com | Trustpilot | Avis
avis-verifies.com | Avis Vérifiés | Avis
rakuten.com | Rakuten | Shopping
mercari.com | Mercari | Occasion | tag
depop.com | Depop | Occasion | tag
poshmark.com | Poshmark | Occasion | tag
craigslist.org | Craigslist | Annonces | tag
gumtree.com | Gumtree | Annonces | tag
marktplaats.nl | Marktplaats | Annonces | tag
kleinanzeigen.de | Kleinanzeigen | Annonces | tag
selency.fr | Selency | Brocante | tag
label-emmaus.co | Label Emmaüs | Seconde main | tag
ebay.com | eBay US | Enchères | tag
amazon.com | Amazon US | Shopping
amazon.co.uk | Amazon UK | Shopping
amazon.de | Amazon Allemagne | Shopping
otto.de | Otto | Shopping
bol.com | bol.com | Shopping
allegro.pl | Allegro | Shopping
mercadolibre.com | Mercado Libre | Shopping
flipkart.com | Flipkart | Shopping
jd.com | JD.com | Shopping
taobao.com | Taobao | Shopping
tmall.com | Tmall | Shopping
rakuten.co.jp | Rakuten Japon | Shopping
etsy.com | Etsy | Artisanat | tag
redbubble.com | Redbubble | Créations | tag
teepublic.com | TeePublic | Créations | tag
vistaprint.fr | Vistaprint | Impression
photoweb.fr | Photoweb | Photos | camera
cheerz.com | Cheerz | Photos | camera
nespresso.com | Nespresso | Café
nike.com | Nike | Sport | tag
adidas.fr | Adidas | Sport | tag
puma.com | Puma | Sport | tag
intersport.fr | Intersport | Sport | tag
go-sport.com | Go Sport | Sport | tag
`,jeux:`
store.steampowered.com | Steam | Jeux
steamcommunity.com | Steam Communauté | Jeux | users
gog.com | GOG | Jeux
ea.com | EA | Jeux
ubisoft.com | Ubisoft | Jeux
blizzard.com | Blizzard | Jeux
battle.net | Battle.net | Jeux
activision.com | Activision | Jeux
rockstargames.com | Rockstar Games | Jeux
bethesda.net | Bethesda | Jeux
square-enix.com | Square Enix | Jeux
bandainamcoent.com | Bandai Namco | Jeux
capcom.com | Capcom | Jeux
sega.com | SEGA | Jeux
konami.com | Konami | Jeux
valvesoftware.com | Valve | Jeux
leagueoflegends.com | League of Legends | Jeux
playvalorant.com | Valorant | Jeux
worldofwarcraft.com | World of Warcraft | Jeux
pokemon.com | Pokémon | Jeux | sparkle
pokemongo.com | Pokémon GO | Jeux mobiles | map
clashroyale.com | Clash Royale | Jeux mobiles
brawlstars.com | Brawl Stars | Jeux mobiles
candycrush.com | Candy Crush | Jeux mobiles
king.com | King | Jeux mobiles
supercell.com | Supercell | Jeux mobiles
mojang.com | Mojang | Jeux | cube
curseforge.com | CurseForge | Mods
nexusmods.com | Nexus Mods | Mods
moddb.com | ModDB | Mods
speedrun.com | Speedrun.com | Jeux
howlongtobeat.com | HowLongToBeat | Jeux
ign.com | IGN | Actu jeux | news
gamespot.com | GameSpot | Actu jeux | news
polygon.com | Polygon | Actu jeux | news
kotaku.com | Kotaku | Actu jeux | news
pcgamer.com | PC Gamer | Actu jeux | news
eurogamer.net | Eurogamer | Actu jeux | news
gamekult.com | Gamekult | Actu jeux | news
jeuxvideo.com | jeuxvideo.com | Actu jeux | forum
millenium.org | Millenium | Actu jeux | news
gamergen.com | GamerGen | Actu jeux | news
dexerto.com | Dexerto | E-sport | news
liquipedia.net | Liquipedia | E-sport | book
hltv.org | HLTV | E-sport | news
op.gg | OP.GG | Statistiques
tracker.gg | Tracker.gg | Statistiques
fandom.com | Fandom | Wikis | book
instant-gaming.com | Instant Gaming | Clés de jeux | cart
g2a.com | G2A | Clés de jeux | cart
humblebundle.com | Humble Bundle | Jeux | cart
greenmangaming.com | Green Man Gaming | Jeux | cart
micromania.fr | Micromania | Magasin | cart
gamestop.com | GameStop | Magasin | cart
coolmathgames.com | Coolmath Games | Jeux en ligne
miniclip.com | Miniclip | Jeux en ligne
friv.com | Friv | Jeux en ligne
kongregate.com | Kongregate | Jeux en ligne
armorgames.com | Armor Games | Jeux en ligne
jeux.fr | Jeux.fr | Jeux en ligne
slither.io | Slither.io | Jeux en ligne
krunker.io | Krunker | Jeux en ligne
skribbl.io | Skribbl | Jeux en ligne | pen
jklm.fun | JKLM | Jeux en ligne
boardgamearena.com | Board Game Arena | Jeux de société | dice
boardgamegeek.com | BoardGameGeek | Jeux de société | dice
trictrac.net | Tric Trac | Jeux de société | dice
chess24.com | Chess24 | Échecs | dice
wizards.com | Wizards of the Coast | Jeux de cartes | dice
dndbeyond.com | D&D Beyond | Jeux de rôle | dice
roll20.net | Roll20 | Jeux de rôle | dice
playstation.com | PlayStation Store | Consoles
nintendo.fr | Nintendo France | Consoles
`,musique:`
music.apple.com | Apple Music | Musique
tidal.com | Tidal | Musique
pandora.com | Pandora | Radio | radio
iheart.com | iHeartRadio | Radio | radio
tunein.com | TuneIn | Radio | radio
radio.fr | radio.fr | Radio | radio
franceinter.fr | France Inter | Radio | radio
franceculture.fr | France Culture | Radio | radio
fip.fr | FIP | Radio | radio
francemusique.fr | France Musique | Radio | radio
mouv.fr | Mouv' | Radio | radio
rtl.fr | RTL | Radio | radio
europe1.fr | Europe 1 | Radio | radio
funradio.fr | Fun Radio | Radio | radio
rtl2.fr | RTL2 | Radio | radio
cheriefm.fr | Chérie FM | Radio | radio
nostalgie.fr | Nostalgie | Radio | radio
rireetchansons.fr | Rire & Chansons | Radio | radio
ouifm.fr | Oüi FM | Radio | radio
radionova.com | Radio Nova | Radio | radio
tsfjazz.com | TSF Jazz | Radio | radio
beatport.com | Beatport | Électro
mixcloud.com | Mixcloud | DJ
audiomack.com | Audiomack | Musique
musixmatch.com | Musixmatch | Paroles
azlyrics.com | AZLyrics | Paroles
paroles.net | Paroles.net | Paroles
songkick.com | Songkick | Concerts
bandsintown.com | Bandsintown | Concerts
setlist.fm | Setlist.fm | Concerts
discogs.com | Discogs | Vinyles
allmusic.com | AllMusic | Critiques
pitchfork.com | Pitchfork | Critiques | news
rollingstone.com | Rolling Stone | Magazine | news
billboard.com | Billboard | Classements | news
lesinrocks.com | Les Inrocks | Magazine | news
booska-p.com | Booska-P | Rap | news
generations.fr | Générations | Rap | radio
ultimate-guitar.com | Ultimate Guitar | Tablatures
songsterr.com | Songsterr | Tablatures
musescore.com | MuseScore | Partitions
imslp.org | IMSLP | Partitions
yousician.com | Yousician | Cours
flat.io | Flat | Partitions
splice.com | Splice | Production
landr.com | LANDR | Production
distrokid.com | DistroKid | Artistes
bandlab.com | BandLab | Production
fnacspectacles.com | Fnac Spectacles | Concerts | tag
seetickets.com | See Tickets | Concerts | tag
`,actu:`
lepoint.fr | Le Point | Actu
lexpress.fr | L'Express | Actu
nouvelobs.com | L'Obs | Actu
marianne.net | Marianne | Actu
lesechos.fr | Les Échos | Économie
latribune.fr | La Tribune | Économie
challenges.fr | Challenges | Économie
capital.fr | Capital | Économie
lci.fr | TF1 Info | Actu
europe1.fr | Europe 1 | Actu | radio
cnews.fr | CNews | Actu
franceinter.fr | France Inter Info | Actu | radio
rfi.fr | RFI | International | radio
france24.com | France 24 | International
tv5monde.com | TV5Monde | International
euronews.com | Euronews | International
lavoixdunord.fr | La Voix du Nord | Presse régionale
ledauphine.com | Le Dauphiné | Presse régionale
leprogres.fr | Le Progrès | Presse régionale
sudouest.fr | Sud Ouest | Presse régionale
laprovence.com | La Provence | Presse régionale
nicematin.com | Nice-Matin | Presse régionale
ladepeche.fr | La Dépêche | Presse régionale
lamontagne.fr | La Montagne | Presse régionale
dna.fr | DNA | Presse régionale
lest-republicain.fr | L'Est Républicain | Presse régionale
midilibre.fr | Midi Libre | Presse régionale
letelegramme.fr | Le Télégramme | Presse régionale
actu.fr | Actu.fr | Presse locale
lindependant.fr | L'Indépendant | Presse régionale
ouest-france.fr | Ouest-France | Presse régionale
courrier-picard.fr | Courrier picard | Presse régionale
charentelibre.fr | Charente Libre | Presse régionale
lejdd.fr | Le JDD | Actu
lhumanite.fr | L'Humanité | Actu
la-croix.com | La Croix | Actu
valeursactuelles.com | Valeurs actuelles | Actu
slate.fr | Slate | Actu
lemonde.fr | Le Monde | Actu
liberation.fr | Libération | Actu
francetvinfo.fr | Franceinfo | Actu
huffingtonpost.fr | HuffPost France | Actu
hugodecrypte.com | HugoDécrypte | Actu | play
lesjoursdelamontagne.fr | Les Jours | Actu
blast-info.fr | Blast | Actu | play
washingtonpost.com | Washington Post | International
wsj.com | Wall Street Journal | International
nbcnews.com | NBC News | International
cbsnews.com | CBS News | International
foxnews.com | Fox News | International
apnews.com | AP News | Agence
afp.com | AFP | Agence
bloomberg.com | Bloomberg | Économie
ft.com | Financial Times | Économie
economist.com | The Economist | Économie
forbes.com | Forbes | Économie
businessinsider.com | Business Insider | Économie
time.com | TIME | Magazine
newyorker.com | The New Yorker | Magazine
theatlantic.com | The Atlantic | Magazine
politico.eu | Politico | Politique
aljazeera.com | Al Jazeera | International
dw.com | DW | International
spiegel.de | Der Spiegel | International
elpais.com | El País | International
corriere.it | Corriere della Sera | International
lesoir.be | Le Soir | Belgique
rtbf.be | RTBF | Belgique
rts.ch | RTS | Suisse
lapresse.ca | La Presse | Canada
radio-canada.ca | Radio-Canada | Canada
news.google.com | Google Actualités | Agrégateur | search
msn.com | MSN | Portail
flipboard.com | Flipboard | Agrégateur
`,finance:`
visa.com | Visa | Paiement
mastercard.com | Mastercard | Paiement
americanexpress.com | American Express | Paiement
wise.com | Wise | Transferts
westernunion.com | Western Union | Transferts
paylib.fr | Paylib | Paiement
sumup.com | SumUp | Paiement
creditmutuel.fr | Crédit Mutuel | Banque | bank
cic.fr | CIC | Banque | bank
lcl.fr | LCL | Banque | bank
caisse-epargne.fr | Caisse d'Épargne | Banque | bank
banquepopulaire.fr | Banque Populaire | Banque | bank
hellobank.fr | Hello bank! | Banque | bank
fortuneo.fr | Fortuneo | Banque | bank
monabanq.com | Monabanq | Banque | bank
bforbank.com | BforBank | Banque | bank
shine.fr | Shine | Banque pro | bank
qonto.com | Qonto | Banque pro | bank
nickel.eu | Nickel | Banque | bank
paypal.com | PayPal | Paiement
chase.com | Chase | Banque | bank
bankofamerica.com | Bank of America | Banque | bank
wellsfargo.com | Wells Fargo | Banque | bank
hsbc.com | HSBC | Banque | bank
barclays.co.uk | Barclays | Banque | bank
ing.com | ING | Banque | bank
kraken.com | Kraken | Crypto
bitpanda.com | Bitpanda | Crypto
crypto.com | Crypto.com | Crypto
coinmarketcap.com | CoinMarketCap | Crypto
coingecko.com | CoinGecko | Crypto
ledger.com | Ledger | Crypto
metamask.io | MetaMask | Crypto
etoro.com | eToro | Bourse
degiro.fr | DEGIRO | Bourse
tradere.com | Trade Republic | Bourse
traderepublic.com | Trade Republic | Bourse
robinhood.com | Robinhood | Bourse
investing.com | Investing.com | Bourse
zonebourse.com | Zonebourse | Bourse
abcbourse.com | ABC Bourse | Bourse
morningstar.fr | Morningstar | Placements
finance.yahoo.com | Yahoo Finance | Bourse
marketwatch.com | MarketWatch | Bourse | news
cnbc.com | CNBC | Économie | news
lafinancepourtous.com | La finance pour tous | Conseils
moneyvox.fr | MoneyVox | Conseils
meilleurtaux.com | Meilleurtaux | Crédit
pretto.fr | Pretto | Crédit
cafpi.fr | Cafpi | Crédit
lesfurets.com | LesFurets | Assurance
lelynx.fr | LeLynx | Assurance
axa.fr | AXA | Assurance
maif.fr | MAIF | Assurance
macif.fr | MACIF | Assurance
matmut.fr | Matmut | Assurance
groupama.fr | Groupama | Assurance
allianz.fr | Allianz | Assurance
urssaf.fr | Urssaf | Service public | flag
economie.gouv.fr | Économie.gouv | Service public | flag
banque-france.fr | Banque de France | Institution | bank
ecb.europa.eu | BCE | Institution | bank
`,voyage:`
kayak.fr | Kayak | Vols
google.com/travel | Google Voyages | Voyages | search
momondo.fr | Momondo | Vols
liligo.fr | Liligo | Vols
edreams.fr | eDreams | Voyages
lastminute.com | lastminute.com | Voyages
voyage-prive.com | Voyage Privé | Ventes privées
promovacances.com | Promovacances | Séjours
leclercvoyages.com | Leclerc Voyages | Séjours
clubmed.fr | Club Med | Séjours
pierreetvacances.com | Pierre & Vacances | Séjours | home
center-parcs.fr | Center Parcs | Séjours | home
campings.com | Campings.com | Camping | home
hotels.com | Hotels.com | Hôtels | home
trivago.fr | trivago | Hôtels | home
accor.com | Accor | Hôtels | home
all.accor.com | ALL Accor | Hôtels | home
marriott.com | Marriott | Hôtels | home
hilton.com | Hilton | Hôtels | home
ibis.com | ibis | Hôtels | home
hostelworld.com | Hostelworld | Auberges | home
vrbo.com | Vrbo | Locations | home
easyjet.com | easyJet | Vols
vueling.com | Vueling | Vols
transavia.com | Transavia | Vols
volotea.com | Volotea | Vols
lufthansa.com | Lufthansa | Vols
britishairways.com | British Airways | Vols
emirates.com | Emirates | Vols
qatarairways.com | Qatar Airways | Vols
turkishairlines.com | Turkish Airlines | Vols
klm.fr | KLM | Vols
flightradar24.com | Flightradar24 | Vols | map
seatguru.com | SeatGuru | Vols
aeroportsdeparis.fr | Paris Aéroport | Aéroports
sncf.com | SNCF | Train | map
ouigo.com | OUIGO | Train | map
eurostar.com | Eurostar | Train | map
db.com | Deutsche Bahn | Train | map
flixbus.fr | FlixBus | Bus | car
blablacar.fr | BlaBlaCar Bus | Bus | car
ratp.fr | RATP | Transports | map
citymapper.com | Citymapper | Transports | map
bolt.eu | Bolt | VTC | car
heetch.com | Heetch | VTC | car
getaround.com | Getaround | Location | car
rentalcars.com | Rentalcars | Location | car
europcar.fr | Europcar | Location | car
hertz.fr | Hertz | Location | car
sixt.fr | Sixt | Location | car
routard.com | Le Routard | Guides | map
petitfute.com | Petit Futé | Guides | map
lonelyplanet.com | Lonely Planet | Guides | map
atlasobscura.com | Atlas Obscura | Guides | map
geo.fr | GEO | Magazine | news
getyourguide.fr | GetYourGuide | Activités | map
viator.com | Viator | Activités | map
civitatis.com | Civitatis | Activités | map
france.fr | France.fr | Tourisme | flag
parisjetaime.com | Paris je t'aime | Tourisme | map
visitlondon.com | Visit London | Tourisme | map
diplomatie.gouv.fr | Conseils aux voyageurs | Service public | flag
esta.cbp.dhs.gov | ESTA | Visa | flag
`,sport:`
fff.fr | FFF | Foot
ligue1.fr | Ligue 1 | Foot
ligue1.com | Ligue 1 | Foot
premierleague.com | Premier League | Foot
laliga.com | LaLiga | Foot
bundesliga.com | Bundesliga | Foot
legaseriea.it | Serie A | Foot
realmadrid.com | Real Madrid | Foot
fcbarcelona.com | FC Barcelone | Foot
manutd.com | Manchester United | Foot
liverpoolfc.com | Liverpool | Foot
ol.fr | OL | Foot
losc.fr | LOSC | Foot
asse.fr | ASSE | Foot
girondins.com | Girondins | Foot
maxifoot.fr | Maxifoot | Foot | news
footmercato.net | Foot Mercato | Foot | news
onzemondial.com | Onze Mondial | Foot | news
sofoot.com | So Foot | Foot | news
whoscored.com | WhoScored | Statistiques
fotmob.com | FotMob | Résultats
livescore.com | LiveScore | Résultats
besoccer.com | BeSoccer | Résultats
ffr.fr | FFR | Rugby
lnr.fr | LNR | Rugby
rugbyrama.fr | Rugbyrama | Rugby | news
world.rugby | World Rugby | Rugby
rolandgarros.com | Roland-Garros | Tennis
fft.fr | FFT | Tennis
atptour.com | ATP | Tennis
wtatennis.com | WTA | Tennis
tennistemple.com | Tennis Temple | Tennis | news
formula1.com | Formule 1 | F1 | car
motogp.com | MotoGP | Moto | car
letour.fr | Tour de France | Cyclisme | bike
velo101.com | Vélo 101 | Cyclisme | bike
ffbb.com | FFBB | Basket
euroleague.net | EuroLeague | Basket
basketusa.com | BasketUSA | Basket | news
nfl.com | NFL | Football US
mlb.com | MLB | Baseball
nhl.com | NHL | Hockey
olympics.com | Jeux olympiques | Olympisme
paris2024.org | Paris 2024 | Olympisme
ufc.com | UFC | Combat
sports.fr | Sports.fr | Sport | news
lequipe.fr | L'Équipe | Sport | news
eurosport.com | Eurosport | Sport | play
dazn.com | DAZN | Sport | play
beinsports.com | beIN Sports | Sport | play
canalplus.com | Canal+ Sport | Sport | play
unibet.fr | Unibet | Paris | dice
pmu.fr | PMU | Paris | dice
parionssport.fdj.fr | Parions Sport | Paris | dice
fdj.fr | FDJ | Jeux d'argent | dice
zeturf.fr | ZEturf | Paris | dice
geny.com | Geny | Turf | dice
basic-fit.com | Basic-Fit | Salles | ball
fitnesspark.fr | Fitness Park | Salles | ball
nike.com | Nike Running | Running | ball
garmin.com | Garmin | Montres | ball
polar.com | Polar | Montres | ball
komoot.com | Komoot | Randonnée | map
alltrails.com | AllTrails | Randonnée | map
visorando.com | Visorando | Randonnée | map
skiinfo.fr | Skiinfo | Ski
ffs.fr | FFS | Ski
surf-report.com | Surf Report | Surf
`,forums:`
stackexchange.com | Stack Exchange | Questions
superuser.com | Super User | Entraide
serverfault.com | Server Fault | Entraide
askubuntu.com | Ask Ubuntu | Entraide
quora.com | Quora | Questions
answers.microsoft.com | Microsoft Community | Entraide
discussions.apple.com | Apple Community | Entraide
community.spotify.com | Spotify Community | Entraide
forum.hardware.fr | HardWare.fr | High-tech
forums.macg.co | MacGeneration Forums | Apple
forum.frandroid.com | Forum Frandroid | Android
forum.doctissimo.fr | Doctissimo Forums | Santé
forum.aufeminin.com | Aufeminin Forums | Famille
forum.futura-sciences.com | Futura Forums | Sciences
forums.jeuxonline.info | JeuxOnline | Jeux
forum.ubuntu-fr.org | Ubuntu-fr | Linux
developpez.com | Developpez.com | Code | code
openclassrooms.com | OpenClassrooms Forum | Code | code
forum.lesarnaques.com | Les Arnaques | Consommation
forum.hardware.fr | Hardware.fr | High-tech
forum-auto.caradisiac.com | Forum Auto | Auto | car
forum.leboncoin.fr | Leboncoin Forum | Annonces
routard.com | Forum du Routard | Voyage | map
forum.xda-developers.com | XDA | Android
xda-developers.com | XDA Developers | Android
forums.somethingawful.com | Something Awful | Humour
resetera.com | ResetEra | Jeux
neogaf.com | NeoGAF | Jeux
gamefaqs.gamespot.com | GameFAQs | Jeux
4chan.org | 4chan | Imageboard
hackernews.com | The Hacker News | Tech
news.ycombinator.com | Hacker News | Tech
slashdot.org | Slashdot | Tech
lobste.rs | Lobsters | Tech
linuxfr.org | LinuxFr | Linux
dev.to | DEV | Code | code
hashnode.com | Hashnode | Code | code
indiehackers.com | Indie Hackers | Entrepreneurs
producthunt.com | Product Hunt | Nouveautés
lemmy.world | Lemmy | Forums
tildes.net | Tildes | Forums
kbin.social | Kbin | Forums
mumsnet.com | Mumsnet | Parents
netmums.com | Netmums | Parents
tripadvisor.fr | Forum Tripadvisor | Voyage | map
commentcamarche.net | CommentÇaMarche | Entraide
forum.pcastuces.com | PC Astuces | Informatique
forum.macbidouille.com | MacBidouille | Apple
touslesforums.com | Tous les forums | Annuaire
`,vie:`
franceconnect.gouv.fr | FranceConnect | Service public
ants.gouv.fr | ANTS | Service public
info.gouv.fr | Info.gouv | Service public
gouvernement.fr | Gouvernement | Service public
elysee.fr | Élysée | Service public
assemblee-nationale.fr | Assemblée nationale | Service public
senat.fr | Sénat | Service public
interieur.gouv.fr | Ministère de l'Intérieur | Service public
justice.fr | Justice.fr | Service public
mesdroitssociaux.gouv.fr | Mes droits sociaux | Service public
info-retraite.fr | Info Retraite | Retraite
lassuranceretraite.fr | L'Assurance retraite | Retraite
agirc-arrco.fr | Agirc-Arrco | Retraite
msa.fr | MSA | Service public
mesaides.gouv.fr | Mes aides | Service public
monparcourshandicap.gouv.fr | Mon parcours handicap | Service public
cnil.fr | CNIL | Service public
laposte.fr | La Poste | Courrier | mail
colissimo.fr | Colissimo | Colis | mail
chronopost.fr | Chronopost | Colis | mail
mondialrelay.fr | Mondial Relay | Colis | mail
dhl.com | DHL | Colis | mail
ups.com | UPS | Colis | mail
fedex.com | FedEx | Colis | mail
edf.fr | EDF | Énergie
engie.fr | Engie | Énergie
totalenergies.fr | TotalEnergies | Énergie
veolia.fr | Veolia | Eau
suez.fr | Suez | Eau
leboncoin.fr | Leboncoin Immobilier | Immobilier | home
pap.fr | PAP | Immobilier | home
bienici.com | Bien'ici | Immobilier | home
logic-immo.com | Logic-Immo | Immobilier | home
meilleursagents.com | MeilleursAgents | Immobilier | home
century21.fr | Century 21 | Immobilier | home
orpi.com | Orpi | Immobilier | home
laforet.com | Laforêt | Immobilier | home
foncia.com | Foncia | Immobilier | home
lacartedescolocs.fr | La Carte des Colocs | Colocation | home
leboncoin.fr | Leboncoin Emploi | Emploi | briefcase
apec.fr | Apec | Emploi | briefcase
hellowork.com | HelloWork | Emploi | briefcase
monster.fr | Monster | Emploi | briefcase
jobteaser.com | JobTeaser | Emploi | briefcase
studentjob.fr | StudentJob | Emploi | briefcase
glassdoor.fr | Glassdoor | Emploi | briefcase
malt.fr | Malt | Freelance | briefcase
fiverr.com | Fiverr | Freelance | briefcase
upwork.com | Upwork | Freelance | briefcase
yoopies.fr | Yoopies | Garde d'enfants | users
superprof.fr | Superprof | Cours | book
stuart.com | Stuart | Livraison
lemonway.com | Lemonway | Paiement
yelp.fr | Yelp | Avis | map
google.com/maps | Google Avis | Avis | map
waze.com | Waze Trafic | Trafic | car
bison-fute.gouv.fr | Bison Futé | Trafic | car
prix-carburants.gouv.fr | Prix des carburants | Carburant | car
vinted.fr | Vinted | Seconde main | tag
geev.com | Geev | Dons | heart
leboncoin.fr | Leboncoin | Annonces | tag
`,environnement:`
greenpeace.org | Greenpeace International | Environnement
wwf.org | WWF International | Environnement
fondation-nature-homme.org | Fondation pour la Nature et l'Homme | Environnement
ligue-ligue.fr | Ligue ROC | Nature
fne.asso.fr | France Nature Environnement | Environnement
amisdelaterre.org | Les Amis de la Terre | Environnement
reseauactionclimat.org | Réseau Action Climat | Climat | sun
ipcc.ch | GIEC | Climat | sun
unep.org | Programme de l'ONU pour l'environnement | Environnement
copernicus.eu | Copernicus | Climat | sun
climate.copernicus.eu | Copernicus Climat | Climat | sun
meteo-paris.com | Météo Paris | Météo | sun
meteociel.fr | Météociel | Météo | sun
lachainemeteo.com | La Chaîne Météo | Météo | sun
meteo.fr | Météo | Météo | sun
accuweather.com | AccuWeather | Météo | sun
weather.com | The Weather Channel | Météo | sun
windy.com | Windy | Météo | sun
infoclimat.fr | Infoclimat | Météo | sun
vigilance.meteofrance.fr | Vigilance Météo | Météo | sun
atmo-france.org | Atmo France | Air | cloud
airparif.fr | Airparif | Air | cloud
iqair.com | IQAir | Air | cloud
electricitymap.org | Electricity Maps | Énergie | sun
rte-france.com | RTE | Énergie | sun
ekwateur.fr | ekWateur | Énergie | sun
planete-oui.fr | Planète OUI | Énergie | sun
hellowatt.fr | Hellowatt | Énergie | sun
effy.fr | Effy | Rénovation | home
france-renov.gouv.fr | France Rénov' | Rénovation | home
agirpourlatransition.ademe.fr | Agir pour la transition | Environnement
nosgestesclimat.fr | Nos Gestes Climat | Climat | sun
carbone4.com | Carbone 4 | Climat | sun
theshiftproject.org | The Shift Project | Climat | sun
bonpote.com | Bon Pote | Climat | news
novethic.fr | Novethic | Actu | news
lareleveetlapeste.fr | La Relève et la Peste | Actu | news
consoglobe.com | ConsoGlobe | Conso | leaf
lafourche.fr | La Fourche | Bio | cart
kelbongoo.com | Kelbongoo | Circuit court | cart
laruchequiditoui.fr | La Ruche qui dit Oui | Circuit court | cart
phenix.fr | Phenix | Anti-gaspi | leaf
yuka.io | Yuka | Conso | leaf
openfoodfacts.org | Open Food Facts | Conso | leaf
backmarket.fr | Back Market | Reconditionné | cart
recyclage.gouv.fr | Recyclage | Tri | leaf
citeo.com | Citeo | Tri | leaf
beeldi.com | Beeldi | Environnement | leaf
tela-botanica.org | Tela Botanica | Botanique | leaf
inaturalist.org | iNaturalist | Nature | leaf
plantnet.org | Pl@ntNet | Botanique | leaf
onf.fr | ONF | Forêts | leaf
parcsnationaux.fr | Parcs nationaux | Nature | leaf
ofb.gouv.fr | OFB | Biodiversité | leaf
iucn.org | UICN | Biodiversité | leaf
seashepherd.fr | Sea Shepherd | Océans | fish
oceana.org | Oceana | Océans | fish
bloomassociation.org | Bloom | Océans | fish
`,sante:`
nhs.uk | NHS | Santé
cdc.gov | CDC | Santé
nih.gov | NIH | Santé
medlineplus.gov | MedlinePlus | Santé
healthline.com | Healthline | Santé
medicalnewstoday.com | Medical News Today | Santé | news
drugs.com | Drugs.com | Médicaments
base-donnees-publique.medicaments.gouv.fr | Base des médicaments | Médicaments
ansm.sante.fr | ANSM | Médicaments
has-sante.fr | HAS | Santé
pasteur.fr | Institut Pasteur | Recherche | atom
inserm.fr | Inserm | Recherche | atom
e-cancer.fr | INCa | Cancer
ligue-cancer.net | Ligue contre le cancer | Cancer
croix-rouge.fr | Croix-Rouge | Secours
dondesang.efs.sante.fr | Don de sang | Don
mangerbouger.fr | Manger Bouger | Nutrition | chef
tabac-info-service.fr | Tabac Info Service | Prévention
drogues-info-service.fr | Drogues Info Service | Prévention
filsantejeunes.com | Fil Santé Jeunes | Jeunes
psycom.org | Psycom | Santé mentale
headspace.com | Headspace | Méditation
calm.com | Calm | Méditation
petitbambou.com | Petit BamBou | Méditation
myfitnesspal.com | MyFitnessPal | Nutrition | chef
yazio.com | YAZIO | Nutrition | chef
freeletics.com | Freeletics | Fitness | ball
fitbit.com | Fitbit | Fitness | ball
withings.com | Withings | Santé connectée
flo.health | Flo | Santé des femmes
clue.com | Clue | Santé des femmes
maiia.com | Maiia | Rendez-vous
keldoc.com | Keldoc | Rendez-vous
mondocteur.fr | MonDocteur | Rendez-vous
medecindirect.fr | MédecinDirect | Téléconsultation
hellocare.com | Hellocare | Téléconsultation
mgen.fr | MGEN | Mutuelle
harmonie-mutuelle.fr | Harmonie Mutuelle | Mutuelle
malakoffhumanis.com | Malakoff Humanis | Mutuelle
aphp.fr | AP-HP | Hôpitaux
chu-lyon.fr | Hospices Civils de Lyon | Hôpitaux
santemagazine.fr | Santé Magazine | Magazine | news
topsante.com | Top Santé | Magazine | news
medisite.fr | Medisite | Santé | news
journaldesfemmes.fr | Journal des Femmes | Magazine | news
quechoisir.org | UFC-Que Choisir | Conso
optical-center.fr | Optical Center | Optique
afflelou.com | Afflelou | Optique
krys.com | Krys | Optique
atol.fr | Atol | Optique
`,cuisine:`
seriouseats.com | Serious Eats | Recettes
bonappetit.com | Bon Appétit | Recettes
epicurious.com | Epicurious | Recettes
foodnetwork.com | Food Network | Recettes
bbcgoodfood.com | BBC Good Food | Recettes
delish.com | Delish | Recettes
simplyrecipes.com | Simply Recipes | Recettes
food.com | Food.com | Recettes
cookpad.com | Cookpad | Recettes
jamieoliver.com | Jamie Oliver | Chefs
cuisine.journaldesfemmes.fr | Journal des Femmes Cuisine | Recettes
elle.fr | Elle à table | Recettes
femmeactuelle.fr | Femme Actuelle Cuisine | Recettes
papillesetpupilles.fr | Papilles et Pupilles | Blog | pen
chefsimon.com | Chef Simon | Recettes
meilleurduchef.com | Meilleur du Chef | Boutique | cart
cuisinez.fr | Cuisinez | Recettes
hervecuisine.com | Hervé Cuisine | Recettes | play
cyrilignac.fr | Cyril Lignac | Chefs
lafourchette.com | LaFourchette | Restaurants
michelin.com | Guide Michelin | Restaurants
gaultmillau.fr | Gault&Millau | Restaurants
zomato.com | Zomato | Restaurants
opentable.com | OpenTable | Restaurants
dominos.fr | Domino's | Pizza
pizzahut.fr | Pizza Hut | Pizza
mcdonalds.fr | McDonald's | Fast-food
burgerking.fr | Burger King | Fast-food
kfc.fr | KFC | Fast-food
subway.com | Subway | Fast-food
starbucks.fr | Starbucks | Café
quitoque.fr | Quitoque | Box repas
lescommis.com | Les Commis | Box repas
frichti.co | Frichti | Livraison
getir.com | Getir | Livraison
carrefour.fr | Carrefour Drive | Courses | cart
leclercdrive.fr | Leclerc Drive | Courses | cart
chronodrive.com | Chronodrive | Courses | cart
thermomix.fr | Thermomix | Robots
cookidoo.fr | Cookidoo | Recettes
moulinex.fr | Moulinex | Électroménager
nicolas.com | Nicolas | Vins
vivino.com | Vivino | Vins
lavinia.fr | Lavinia | Vins
larvf.com | La Revue du vin de France | Vins | news
kitchenaid.fr | KitchenAid | Électroménager
tefal.fr | Tefal | Ustensiles
`,mode:`
mango.com | Mango | Mode
pullandbear.com | Pull&Bear | Mode
bershka.com | Bershka | Mode
stradivarius.com | Stradivarius | Mode
primark.com | Primark | Mode
celio.com | Celio | Mode
jules.com | Jules | Mode
promod.fr | Promod | Mode
cache-cache.fr | Cache Cache | Mode
camaieu.fr | Camaïeu | Mode
etam.com | Etam | Lingerie
undiz.com | Undiz | Lingerie
decathlon.fr | Decathlon Mode | Sport
levi.com | Levi's | Jean
lacoste.com | Lacoste | Mode
ralphlauren.fr | Ralph Lauren | Mode
tommy.com | Tommy Hilfiger | Mode
calvinklein.fr | Calvin Klein | Mode
converse.com | Converse | Chaussures
vans.fr | Vans | Chaussures
newbalance.fr | New Balance | Chaussures
sarenza.com | Sarenza | Chaussures
spartoo.com | Spartoo | Chaussures
courir.com | Courir | Chaussures
jdsports.fr | JD Sports | Sport
snipes.com | Snipes | Streetwear
stockx.com | StockX | Sneakers
goat.com | GOAT | Sneakers
laboutiqueofficielle.com | La Boutique Officielle | Streetwear
louisvuitton.com | Louis Vuitton | Luxe
chanel.com | Chanel | Luxe
dior.com | Dior | Luxe
hermes.com | Hermès | Luxe
gucci.com | Gucci | Luxe
prada.com | Prada | Luxe
ysl.com | Saint Laurent | Luxe
cartier.com | Cartier | Joaillerie
pandora.net | Pandora | Bijoux
swarovski.com | Swarovski | Bijoux
rolex.com | Rolex | Montres
swatch.com | Swatch | Montres
sephora.fr | Sephora | Beauté
nocibe.fr | Nocibé | Beauté
marionnaud.fr | Marionnaud | Beauté
yves-rocher.fr | Yves Rocher | Beauté
loreal-paris.fr | L'Oréal Paris | Beauté
lookfantastic.fr | Lookfantastic | Beauté
notino.fr | Notino | Parfums
aroma-zone.com | Aroma-Zone | Beauté
glossybox.fr | Glossybox | Beauté
cosmopolitan.fr | Cosmopolitan | Magazine | news
grazia.fr | Grazia | Magazine | news
glamour.fr | Glamour | Magazine | news
lofficiel.com | L'Officiel | Magazine | news
highsnobiety.com | Highsnobiety | Magazine | news
hypebeast.com | Hypebeast | Magazine | news
`,auto:`
citroen.fr | Citroën | Voitures
dacia.fr | Dacia | Voitures
volkswagen.fr | Volkswagen | Voitures
audi.fr | Audi | Voitures
mercedes-benz.fr | Mercedes-Benz | Voitures
ford.fr | Ford | Voitures
fiat.fr | Fiat | Voitures
kia.com | Kia | Voitures
hyundai.com | Hyundai | Voitures
nissan.fr | Nissan | Voitures
skoda.fr | Škoda | Voitures
seat.fr | SEAT | Voitures
volvocars.com | Volvo | Voitures
porsche.com | Porsche | Voitures
ferrari.com | Ferrari | Voitures
lamborghini.com | Lamborghini | Voitures
mini.fr | MINI | Voitures
alpinecars.com | Alpine | Voitures
byd.com | BYD | Électrique
yamaha-motor.eu | Yamaha Motor | Moto
honda.fr | Honda | Moto
kawasaki.fr | Kawasaki | Moto
ducati.com | Ducati | Moto
harley-davidson.com | Harley-Davidson | Moto
autoscout24.fr | AutoScout24 | Occasion
leparking.fr | LeParking | Occasion
largus.fr | L'argus | Cote
autojournal.fr | Auto Journal | Actu | news
turbo.fr | Turbo | Actu | news
automobile-magazine.fr | Automobile Magazine | Actu | news
motorsport.com | Motorsport.com | Sport auto | news
topgear.com | Top Gear | Magazine | news
moto-station.com | Moto-Station | Moto | news
moto-net.com | Moto-Net | Moto | news
feuvert.fr | Feu Vert | Entretien
speedy.fr | Speedy | Entretien
midas.fr | Midas | Entretien
point-s.fr | Point S | Pneus
allopneus.com | Allopneus | Pneus
1001pneus.fr | 1001pneus | Pneus
mister-auto.com | Mister Auto | Pièces
leroymerlin.fr | Leroy Merlin Garage | Pièces
autodistribution.fr | Autodistribution | Pièces
securite-routiere.gouv.fr | Sécurité routière | Service public | flag
permisapoints.fr | Permis à points | Permis
codedelaroute.fr | Code de la route | Permis
stych.fr | Stych | Permis
enpc.fr | En Voiture Simone | Permis
chargemap.com | Chargemap | Recharge | leaf
tesla.com | Tesla Superchargeurs | Recharge | leaf
ulys.vinci-autoroutes.com | Ulys | Péage
vinci-autoroutes.com | Vinci Autoroutes | Autoroutes
sanef.com | Sanef | Autoroutes
indigo.com | Indigo | Parkings
onepark.fr | Onepark | Parkings
`,maison:`
leroymerlin.fr | Leroy Merlin | Bricolage
ikea.com | IKEA | Meubles
alinea.com | Alinéa | Meubles
maisonsdumonde.com | Maisons du Monde | Déco
laredoute.fr | La Redoute Intérieurs | Déco
kave-home.com | Kave Home | Meubles
made.com | Made | Meubles
lapeyre.fr | Lapeyre | Menuiserie
monbeaumeuble.com | Mon Beau Meuble | Meubles
cdiscount.com | Cdiscount Maison | Maison | cart
boulanger.com | Boulanger Maison | Électroménager | cart
dyson.fr | Dyson | Électroménager
philips.fr | Philips | Électroménager
rowenta.fr | Rowenta | Électroménager
seb.fr | SEB | Électroménager
irobot.fr | iRobot | Robots
nest.com | Google Nest | Maison connectée
somfy.fr | Somfy | Maison connectée
netatmo.com | Netatmo | Maison connectée
ring.com | Ring | Sécurité
verisure.fr | Verisure | Sécurité
bricorama.fr | Bricorama | Bricolage
mr-bricolage.fr | Mr.Bricolage | Bricolage
weldom.fr | Weldom | Bricolage
bricomarche.com | Bricomarché | Bricolage
point-p.fr | Point.P | Matériaux
brico-depot.fr | Brico Dépôt | Bricolage
rustica.fr | Rustica | Jardin | leaf
gammvert.fr | Gamm Vert | Jardin | leaf
botanic.com | Botanic | Jardin | leaf
promesse-de-fleurs.com | Promesse de Fleurs | Jardin | leaf
willemse.fr | Willemse | Jardin | leaf
interflora.fr | Interflora | Fleurs | leaf
aquarelle.com | Aquarelle | Fleurs | leaf
marieclairemaison.com | Marie Claire Maison | Déco | news
maison-travaux.fr | Maison & Travaux | Travaux | news
systemed.fr | Système D | Bricolage | news
travaux.com | Travaux.com | Artisans
habitatpresto.com | Habitatpresto | Artisans
hellopro.fr | Hellopro | Artisans
pagesjaunes.fr | PagesJaunes Artisans | Artisans | search
starofservice.com | StarOfService | Artisans
mesdepanneurs.fr | Mes Dépanneurs | Dépannage
homebyme.com | HomeByMe | Plans
sweethome3d.com | Sweet Home 3D | Plans
elle.fr | Elle Décoration | Déco | news
apartmenttherapy.com | Apartment Therapy | Déco | news
architecturaldigest.com | Architectural Digest | Déco | news
dezeen.com | Dezeen | Design | news
`,animaux:`
akc.org | American Kennel Club | Chiens
scc.asso.fr | Société Centrale Canine | Chiens
loof.asso.fr | LOOF | Chats
i-cad.fr | I-CAD | Identification
seconde-chance.org | Seconde Chance | Adoption
petalertfrance.com | Pet Alert | Animaux perdus
chien.com | Chien.com | Chiens
chat.com | Chat.com | Chats
chiens.com | Chiens.com | Chiens
toutoupourlechien.com | Toutou pour le chien | Chiens
woopets.fr | Woopets | Animaux
animalaxy.fr | Animalaxy | Animaux
purina.fr | Purina | Alimentation
royalcanin.com | Royal Canin | Alimentation
ultrapremiumdirect.com | Ultra Premium Direct | Alimentation
croquetteland.com | Croquetteland | Alimentation
wanimo.com | Wanimo | Animalerie
jardiland.com | Jardiland Animalerie | Animalerie
truffaut.com | Truffaut Animalerie | Animalerie
chewy.com | Chewy | Animalerie
petco.com | Petco | Animalerie
petsmart.com | PetSmart | Animalerie
aspca.org | ASPCA | Protection
peta.org | PETA | Protection
fondationbrigittebardot.fr | Fondation Brigitte Bardot | Protection
l214.com | L214 | Protection
one-voice.fr | One Voice | Protection
worldanimalprotection.org | World Animal Protection | Protection
zoodebeauval.fr | ZooParc de Beauval | Zoos
parczoologiquedeparis.fr | Parc zoologique de Paris | Zoos
pairidaiza.eu | Pairi Daiza | Zoos
sandiegozoo.org | San Diego Zoo | Zoos
marineland.fr | Marineland | Parcs
nausicaa.fr | Nausicaá | Aquariums | fish
aquariumlarochelle.com | Aquarium La Rochelle | Aquariums | fish
cheval-annonce.com | Cheval Annonce | Chevaux
cheval-magazine.com | Cheval Magazine | Chevaux | news
ffe.com | FFE | Équitation
birdlife.org | BirdLife | Oiseaux
oiseaux.net | Oiseaux.net | Oiseaux
ebird.org | eBird | Oiseaux
allaboutbirds.org | All About Birds | Oiseaux
wamiz.com | Wamiz Chats | Chats
catster.com | Catster | Chats
dogster.com | Dogster | Chiens
rover.com | Rover Garde | Garde
holidog.com | Holidog | Garde
animaute.fr | Animaute | Garde
zoomalia.com | Zoomalia | Animalerie
`,sciences:`
sciencemag.org | Science | Recherche
science.org | Science | Recherche
newscientist.com | New Scientist | Magazine | news
scientificamerican.com | Scientific American | Magazine | news
nationalgeographic.com | National Geographic | Nature
smithsonianmag.com | Smithsonian | Magazine | news
phys.org | Phys.org | Actu | news
sciencedaily.com | ScienceDaily | Actu | news
livescience.com | Live Science | Actu | news
quantamagazine.org | Quanta Magazine | Magazine | news
futura-sciences.com | Futura | Actu | news
numerama.com | Numerama Sciences | Actu | news
larecherche.fr | La Recherche | Magazine | news
cea.fr | CEA | Recherche
inrae.fr | INRAE | Recherche
ird.fr | IRD | Recherche
ifremer.fr | Ifremer | Océans | fish
cnes.fr | CNES | Espace | sparkle
spacex.com | SpaceX | Espace | sparkle
blueorigin.com | Blue Origin | Espace | sparkle
jpl.nasa.gov | NASA JPL | Espace | sparkle
webb.nasa.gov | James Webb | Espace | sparkle
stellarium.org | Stellarium | Astronomie | sparkle
heavens-above.com | Heavens-Above | Astronomie | sparkle
cieletespace.fr | Ciel & Espace | Astronomie | news
cite-espace.com | Cité de l'espace | Musée | sparkle
mnhn.fr | Muséum national d'histoire naturelle | Musée
museedelhomme.fr | Musée de l'Homme | Musée
universcience.fr | Universcience | Musée
eso.org | ESO | Astronomie | sparkle
noaa.gov | NOAA | Climat | sun
usgs.gov | USGS | Géologie
emsc-csem.org | EMSC | Séismes
nobelprize.org | Prix Nobel | Recherche
pubmed.ncbi.nlm.nih.gov | PubMed | Médecine
ncbi.nlm.nih.gov | NCBI | Biologie
elsevier.com | Elsevier | Édition
springer.com | Springer | Édition
wiley.com | Wiley | Édition
plos.org | PLOS | Édition
mathworld.wolfram.com | MathWorld | Maths
numberphile.com | Numberphile | Vulgarisation | play
veritasium.com | Veritasium | Vulgarisation | play
e-penser.com | e-penser | Vulgarisation | play
lascienceinfuse.fr | La Science Infuse | Vulgarisation
theconversation.com | The Conversation | Recherche | news
zooniverse.org | Zooniverse | Sciences participatives
openstreetmap.org | OpenStreetMap | Cartes | map
geoportail.gouv.fr | Géoportail | Cartes | map
ign.fr | IGN | Cartes | map
`,culture:`
bnf.fr | BnF | Bibliothèque
babelio.com | Babelio | Lecture
livraddict.com | Livraddict | Lecture
lecteurs.com | Lecteurs.com | Lecture
decitre.fr | Decitre | Librairie
leslibraires.fr | Les Libraires | Librairie
placedeslibraires.fr | Place des Libraires | Librairie
librairie-gallimard.com | Librairie Gallimard | Librairie
furet.com | Furet du Nord | Librairie
kobo.com | Kobo | Livres numériques
audible.fr | Audible | Livres audio
babbel.com | Babbel Culture | Langues
bdfugue.com | BDfugue | BD
bedetheque.com | Bedetheque | BD
mangasanctuary.com | Manga Sanctuary | Mangas
manga-news.com | Manga-News | Mangas | news
glenat.com | Glénat | Édition
casterman.com | Casterman | Édition
dargaud.com | Dargaud | Édition
flammarion.fr | Flammarion | Édition
editions-hachette.fr | Hachette | Édition
lisez.com | Lisez | Édition
larousse.fr | Larousse Culture | Encyclopédie
centrepompidou.fr | Centre Pompidou | Musée | image
quaibranly.fr | Musée du quai Branly | Musée | image
chateauversailles.fr | Château de Versailles | Patrimoine | image
monuments-nationaux.fr | Monuments nationaux | Patrimoine | image
parismusees.paris.fr | Paris Musées | Musée | image
moma.org | MoMA | Musée | image
metmuseum.org | The Met | Musée | image
britishmuseum.org | British Museum | Musée | image
rijksmuseum.nl | Rijksmuseum | Musée | image
uffizi.it | Offices | Musée | image
artsandculture.google.com | Google Arts & Culture | Art | image
wikiart.org | WikiArt | Art | image
comedie-francaise.fr | Comédie-Française | Théâtre
theatreonline.com | Théâtre Online | Théâtre
offi.fr | Offi | Sorties
sortiraparis.com | Sortir à Paris | Sorties
lebonbon.fr | Le Bonbon | Sorties
timeout.fr | Time Out | Sorties
lemonde.fr/culture | Le Monde Culture | Actu | news
franceculture.fr | France Culture | Radio | radio
philharmoniedeparis.fr | Philharmonie de Paris | Concerts | music
festival-cannes.com | Festival de Cannes | Cinéma | film
avignonleoff.com | Festival Off d'Avignon | Théâtre
festival-avignon.com | Festival d'Avignon | Théâtre
fetedelamusique.culture.gouv.fr | Fête de la musique | Concerts | music
journeesdupatrimoine.culture.gouv.fr | Journées du patrimoine | Patrimoine | image
ina.fr | INA | Archives | play
youtube.com/@arte | ARTE Culture | Vidéo | play
`,famille:`
caf.fr | Caf Famille | Service public | flag
1001-bebes.com | 1001 Bébés | Grossesse
bebe.doctissimo.fr | Doctissimo Bébé | Grossesse
enfant.com | Enfant.com | Parents
mamanpourlavie.com | Maman pour la vie | Parents
famili.fr | Famili | Parents
neufmois.fr | Neuf Mois | Grossesse
ameli.fr | Ameli Famille | Santé | health
mpedia.fr | Mpedia | Pédiatrie | health
babymoov.fr | Babymoov | Puériculture | tag
aubert.fr | Aubert | Puériculture | tag
bebe9.com | Bébé 9 | Puériculture | tag
orchestra.fr | Orchestra | Enfants | tag
okaidi.fr | Okaïdi | Enfants | tag
jacadi.fr | Jacadi | Enfants | tag
petit-bateau.fr | Petit Bateau | Enfants | tag
toysrus.fr | Toys"R"Us | Jouets | cube
lagranderecre.fr | La Grande Récré | Jouets | cube
fisher-price.com | Fisher-Price | Jouets | cube
playmobil.com | Playmobil | Jouets | cube
vtech.fr | VTech | Jouets | cube
hasbro.com | Hasbro | Jouets | cube
mattel.com | Mattel | Jouets | cube
nickelodeon.fr | Nickelodeon | Enfants | play
cartoonnetwork.fr | Cartoon Network | Enfants | play
disneyjunior.fr | Disney Junior | Enfants | play
tfou.fr | TFOU | Enfants | play
tiji.fr | Tiji | Enfants | play
bayam.tv | Bayam | Enfants | play
lalilo.com | Lalilo | Lecture | book
lumni.fr | Lumni Éducation | Éducation | book
maxicours.com | Maxicours Primaire | Révisions | book
ecoledesloisirs.fr | L'école des loisirs | Livres | book
milan-presse.com | Milan Presse | Magazines | book
bayard-jeunesse.com | Bayard Jeunesse | Magazines | book
jdje.fr | Le Journal des Enfants | Actu | news
1jour1actu.com | 1jour1actu | Actu | news
okapi.fr | Okapi | Magazine | news
cbeebies.com | CBeebies | Enfants | play
scratch.mit.edu | Scratch | Code | code
code.org | Code.org | Code | code
khanacademy.org | Khan Academy Kids | Éducation | book
coloriage.info | Coloriage.info | Coloriages | image
hugolescargot.com | Hugo l'escargot | Coloriages | image
teteamodeler.com | Tête à modeler | Activités | image
disneylandparis.com | Disneyland Paris | Parcs | sparkle
parcasterix.fr | Parc Astérix | Parcs | sparkle
futuroscope.com | Futuroscope | Parcs | sparkle
puydufou.com | Puy du Fou | Parcs | sparkle
europapark.de | Europa-Park | Parcs | sparkle
walibi.com | Walibi | Parcs | sparkle
`};function F(e){return e.toLowerCase().replace(/^www\./,``).replace(/[^a-z0-9]+/g,`-`).replace(/^-|-$/g,``)}var oe=[...Object.entries(ae),...Object.entries(re)].flatMap(([e,t])=>t.split(`
`).map(e=>e.trim()).filter(e=>e&&e.includes(`|`)).map(t=>{let[n,r,i,a]=t.split(`|`).map(e=>e.trim());return{id:F(n),name:r,domain:n,category:i||r,price:100,icon:a||ie[e],district:e}})),I=`
aide-scrabble.fr | Aide Scrabble | Scrabble | dice | jeux
e-sudoku.fr | e-Sudoku | Sudoku | dice | jeux
genealogies-celebres.fr | Généalogies célèbres | Généalogie | book | savoir
cowblog.fr | Cowblog | Blogs | pen | reseaux
bondyblog.fr | Bondy Blog | Blog d'actu | news | actu
ladepechedubassin.fr | La Dépêche du Bassin | Actu locale | news | actu
linuxtricks.fr | Linuxtricks | Linux | code | tech
forum-nas.fr | Forum NAS | Forum | cloud | tech
domo-blog.fr | Domo-blog | Domotique | home | maison
figurinemangafrance.fr | Figurine Manga France | Figurines | tag | shopping
passion-radio.fr | Passion Radio | Radios | radio | musique
achat-or-et-argent.fr | Achat Or et Argent | Métaux précieux | coin | finance
tourisme-carcassonne.fr | Tourisme Carcassonne | Office de tourisme | map | voyage
provence-a-velo.fr | La Provence à vélo | Balades | bike | voyage
toulousebasketclub.fr | Toulouse Basket Club | Club | ball | sport
leforumdubowling.fr | Le forum du bowling | Forum | forum | forums
ville-saint-malo.fr | Ville de Saint-Malo | Mairie | pin | vie
mairie-quimper.fr | Mairie de Quimper | Mairie | pin | vie
jardin-ecologique.fr | Jardin écologique | Jardinage | leaf | environnement
chant-oiseaux.fr | Chants d'oiseaux | Oiseaux | paw | animaux
cuicui-lespetitsoiseaux.fr | Cui-cui les petits oiseaux | Oiseaux | paw | animaux
yogajournalfrance.fr | Yoga Journal France | Yoga | health | sante
lacuisinedegeraldine.fr | La cuisine de Géraldine | Blog cuisine | chef | cuisine
coupecouture.fr | Coupe Couture | Couture | tag | mode
motobecane-club-de-france.fr | Motobécane Club de France | Club | car | auto
meteo-centre.fr | Météo Centre | Météo | cloud | sciences
les-zinzins-du-cinema.fr | Les Zinzins du cinéma | Critiques | film | culture
cinemathequetoulouse.fr | Cinémathèque de Toulouse | Cinéma | film | culture
cuisinez-pour-bebe.fr | Cuisinez pour bébé | Recettes bébé | heart | famille
bloghoptoys.fr | Le blog Hop'Toys | Blog | users | famille
ville-montrouge.fr | Ville de Montrouge | Mairie | pin | vie
ville-beziers.fr | Ville de Béziers | Mairie | pin | vie
mairie-vannes.fr | Mairie de Vannes | Mairie | pin | vie
ville-arles.fr | Ville d'Arles | Mairie | pin | vie
ville-vichy.fr | Ville de Vichy | Mairie | pin | vie
espace-recettes.fr | Espace Recettes | Recettes | chef | cuisine
amourdecuisine.fr | Amour de cuisine | Blog cuisine | chef | cuisine
adeline-cuisine.fr | Adeline Cuisine | Blog cuisine | chef | cuisine
mesrecettesfaciles.fr | Mes recettes faciles | Recettes | chef | cuisine
cuisine-saine.fr | Cuisine saine | Manger sain | health | sante
7tarot.fr | 7 Tarot | Tarot en ligne | dice | jeux
scrabble-valide.fr | Scrabble valide | Scrabble | dice | jeux
jeu-belote.fr | Jeu de belote | Belote | dice | jeux
scrabble123.fr | Scrabble 123 | Scrabble | dice | jeux
fortboyard-leforum.fr | Fort Boyard, le forum | Forum | forum | forums
forum-hifi.fr | Forum Hi-Fi | Forum | forum | forums
forumgaming.fr | Forum Gaming | Forum | forum | forums
geoforum.fr | Géoforum | Forum | forum | forums
radiosalsa.fr | Radio Salsa | Radio | radio | musique
piano-lille.fr | Piano Lille | Pianos | music | musique
radiolor.fr | Radio Lor | Radio | radio | musique
lagranderadio.fr | La Grande Radio | Radios | radio | musique
racingclubnantais.fr | Racing Club Nantais | Club | ball | sport
ffvelo.fr | FF Vélo | Cyclotourisme | bike | sport
skitour.fr | Skitour | Ski de rando | sun | sport
rando-marche.fr | Rando Marche | Randonnée | map | sport
montagnes-du-jura.fr | Montagnes du Jura | Tourisme | map | voyage
loireavelo.fr | La Loire à vélo | Balades | bike | voyage
gites-de-france-calvados.fr | Gîtes de France Calvados | Gîtes | home | voyage
trainardeche.fr | Train de l'Ardèche | Train touristique | plane | voyage
chevalnouvelleaquitaine.fr | Cheval Nouvelle-Aquitaine | Équitation | paw | animaux
lechevalenor.fr | Le cheval en or | Chevaux | paw | animaux
leurredelapeche.fr | Leurre de la pêche | Pêche | fish | animaux
saf-astronomie.fr | Société astronomique de France | Astronomie | atom | sciences
astronome.fr | Astronome | Astronomie | atom | sciences
meteofranccomtoise.fr | Météo franc-comtoise | Météo | cloud | sciences
cinema-arvor.fr | Cinéma Arvor | Cinéma | film | culture
theatresaucinema.fr | Théâtres au cinéma | Théâtre | film | culture
comicsblog.fr | Comicsblog | BD | book | culture
lepaysdumanga.fr | Le pays du manga | Manga | book | culture
solutionslinux.fr | Solutions Linux | Linux | code | tech
archlinux.fr | Arch Linux France | Linux | code | tech
blog-nouvelles-technologies.fr | Blog nouvelles technologies | Blog tech | code | tech
leblog3d.fr | Le blog 3D | 3D | cube | tech
leclub-bricolage.fr | Le club bricolage | Bricolage | home | maison
lepotager-demesreves.fr | Le potager de mes rêves | Potager | leaf | maison
jardiner-autrement.fr | Jardiner autrement | Jardinage | leaf | environnement
parcsetjardins.fr | Parcs et jardins | Jardins | leaf | environnement
potagercity.fr | Potager City | Potager | leaf | environnement
leparking-moto.fr | Le parking moto | Motos | car | auto
forum-bmw.fr | Forum BMW | Forum | car | auto
bmwz3club.fr | BMW Z3 Club | Club | car | auto
avdb-moto.fr | AVDB Moto | Motos | car | auto
fkl-couture.fr | FKL Couture | Couture | tag | mode
associationfamilialedebrive.fr | Association familiale de Brive | Association | users | famille
club-50plus.fr | Club 50 plus | Club | users | famille
rando-zen.fr | Rando zen | Bien-être | health | sante
jardindesmots.fr | Le jardin des mots | Poésie | book | savoir
apprendre-la-photo.fr | Apprendre la photo | Photo | camera | savoir
overblog.fr | Overblog | Blogs | pen | reseaux
artblog.fr | Artblog | Blogs | pen | reseaux
blogidee.fr | Blog idée | Blog | pen | reseaux
leblogdocumentaire.fr | Le blog documentaire | Documentaires | news | actu
20minutes-blogs.fr | Blogs 20 Minutes | Blogs | news | actu
comptoirdesjardins.fr | Comptoir des jardins | Boutique | cart | shopping
campingaz-shop.fr | Campingaz Shop | Boutique | cart | shopping
veocinemas.fr | Véo Cinémas | Cinémas | film | video
`.split(`
`).map(e=>e.trim()).filter(e=>e.includes(`|`)).map(e=>{let[t,n,r,i,a]=e.split(`|`).map(e=>e.trim());return{id:t.replace(/[^a-z0-9]+/g,`-`).replace(/^-|-$/g,``),name:n,domain:t,category:r,price:60,icon:i,district:a,micro:!0}}),se=[{district:{id:`savoir`,name:`Savoir`,color:`#6a7bff`},sites:[[`google`,`Google`,`google.com`,`Recherche`,15e4,`search`],[`wikipedia`,`Wikipédia`,`wikipedia.org`,`Savoir`,3e4,`book`],[`bing`,`Bing`,`bing.com`,`Recherche`,2e4,`search`],[`baidu`,`Baidu`,`baidu.com`,`Recherche`,15e3,`search`],[`yahoo`,`Yahoo`,`yahoo.com`,`Recherche`,12e3,`search`],[`yandex`,`Yandex`,`yandex.ru`,`Recherche`,8e3,`search`],[`duolingo`,`Duolingo`,`duolingo.com`,`Langues`,6e3,`book`],[`duckduckgo`,`DuckDuckGo`,`duckduckgo.com`,`Recherche`,4e3,`search`],[`pronote`,`Pronote`,`index-education.com`,`École`,3e3,`book`],[`quizlet`,`Quizlet`,`quizlet.com`,`Révisions`,2500,`book`],[`coursera`,`Coursera`,`coursera.org`,`Cours`,2e3,`book`],[`khan`,`Khan Academy`,`khanacademy.org`,`Cours`,1200,`book`],[`wolfram`,`WolframAlpha`,`wolframalpha.com`,`Calcul`,1e3,`search`],[`wiktionnaire`,`Wiktionnaire`,`wiktionary.org`,`Dictionnaire`,900,`book`],[`babbel`,`Babbel`,`babbel.com`,`Langues`,900,`book`],[`larousse`,`Larousse`,`larousse.fr`,`Dictionnaire`,700,`book`],[`ecosia`,`Ecosia`,`ecosia.org`,`Recherche`,700,`search`],[`qwant`,`Qwant`,`qwant.com`,`Recherche`,600,`search`],[`openclassrooms`,`OpenClassrooms`,`openclassrooms.com`,`Cours`,500,`code`],[`lerobert`,`Le Robert`,`lerobert.com`,`Dictionnaire`,400,`book`],[`kartable`,`Kartable`,`kartable.fr`,`École`,300,`book`],[`maxicours`,`Maxicours`,`maxicours.com`,`École`,250,`book`],[`wikipokemon`,`Wiki Pokémon`,`pokepedia.fr`,`Savoir`,150,`book`]]},{district:{id:`reseaux`,name:`Réseaux`,color:`#c65bff`},sites:[[`facebook`,`Facebook`,`facebook.com`,`Réseaux`,8e4,`users`],[`whatsapp`,`WhatsApp`,`whatsapp.com`,`Messagerie`,7e4,`chat`],[`instagram`,`Instagram`,`instagram.com`,`Réseaux`,5e4,`camera`],[`wechat`,`WeChat`,`wechat.com`,`Messagerie`,4e4,`chat`],[`x`,`X`,`x.com`,`Réseaux`,2e4,`chat`],[`messenger`,`Messenger`,`messenger.com`,`Messagerie`,2e4,`chat`],[`snapchat`,`Snapchat`,`snapchat.com`,`Réseaux`,15e3,`ghost`],[`telegram`,`Telegram`,`telegram.org`,`Messagerie`,15e3,`chat`],[`linkedin`,`LinkedIn`,`linkedin.com`,`Réseaux pro`,14e3,`briefcase`],[`vk`,`VK`,`vk.com`,`Réseaux`,6e3,`users`],[`threads`,`Threads`,`threads.net`,`Réseaux`,5e3,`chat`],[`tinder`,`Tinder`,`tinder.com`,`Rencontres`,5e3,`heart`],[`pinterest`,`Pinterest`,`pinterest.fr`,`Réseaux`,3e3,`pin`],[`signal`,`Signal`,`signal.org`,`Messagerie`,3e3,`chat`],[`bluesky`,`Bluesky`,`bsky.app`,`Réseaux`,2500,`cloud`],[`tumblr`,`Tumblr`,`tumblr.com`,`Blogs`,2e3,`pen`],[`bereal`,`BeReal`,`bereal.com`,`Réseaux`,1500,`camera`],[`bumble`,`Bumble`,`bumble.com`,`Rencontres`,1500,`heart`],[`meetic`,`Meetic`,`meetic.fr`,`Rencontres`,700,`heart`],[`mastodon`,`Mastodon`,`joinmastodon.org`,`Réseaux`,600,`users`],[`yubo`,`Yubo`,`yubo.live`,`Réseaux`,300,`users`]]},{district:{id:`video`,name:`Vidéo`,color:`#ff4d5e`},sites:[[`youtube`,`YouTube`,`youtube.com`,`Vidéo`,1e5,`play`],[`tiktok`,`TikTok`,`tiktok.com`,`Vidéo`,6e4,`play`],[`netflix`,`Netflix`,`netflix.com`,`Vidéo`,25e3,`film`],[`disneyplus`,`Disney+`,`disneyplus.com`,`Vidéo`,18e3,`film`],[`primevideo`,`Prime Video`,`primevideo.com`,`Vidéo`,15e3,`film`],[`imdb`,`IMDb`,`imdb.com`,`Cinéma`,6e3,`film`],[`twitch`,`Twitch`,`twitch.tv`,`Vidéo`,5e3,`live`],[`max`,`Max`,`max.com`,`Vidéo`,5e3,`film`],[`crunchyroll`,`Crunchyroll`,`crunchyroll.com`,`Anime`,4e3,`play`],[`appletv`,`Apple TV+`,`tv.apple.com`,`Vidéo`,4e3,`film`],[`canalplus`,`Canal+`,`canalplus.com`,`Télé`,3500,`play`],[`francetv`,`france.tv`,`france.tv`,`Télé`,3e3,`play`],[`dailymotion`,`Dailymotion`,`dailymotion.com`,`Vidéo`,2500,`play`],[`tf1plus`,`TF1+`,`tf1.fr`,`Télé`,2500,`play`],[`vimeo`,`Vimeo`,`vimeo.com`,`Vidéo`,2e3,`play`],[`paramount`,`Paramount+`,`paramountplus.com`,`Vidéo`,2e3,`film`],[`arte`,`Arte`,`arte.tv`,`Télé`,1500,`play`],[`kick`,`Kick`,`kick.com`,`Vidéo`,1200,`live`],[`plex`,`Plex`,`plex.tv`,`Vidéo`,800,`play`],[`letterboxd`,`Letterboxd`,`letterboxd.com`,`Cinéma`,700,`film`],[`allocine`,`Allociné`,`allocine.fr`,`Cinéma`,600,`film`],[`molotov`,`Molotov`,`molotov.tv`,`Télé`,400,`play`],[`senscritique`,`SensCritique`,`senscritique.com`,`Cinéma`,350,`film`]]},{district:{id:`ia`,name:`IA`,color:`#3dd9ff`},sites:[[`chatgpt`,`ChatGPT`,`chatgpt.com`,`IA`,9e4,`sparkle`],[`gemini`,`Gemini`,`gemini.google.com`,`IA`,3e4,`sparkle`],[`claude`,`Claude`,`claude.ai`,`IA`,25e3,`sparkle`],[`copilot`,`Copilot`,`copilot.microsoft.com`,`IA`,12e3,`sparkle`],[`perplexity`,`Perplexity`,`perplexity.ai`,`IA`,8e3,`sparkle`],[`deepl`,`DeepL`,`deepl.com`,`Traduction`,7e3,`chat`],[`midjourney`,`Midjourney`,`midjourney.com`,`Images IA`,6e3,`image`],[`characterai`,`Character.AI`,`character.ai`,`IA`,5e3,`chat`],[`lechat`,`Le Chat`,`chat.mistral.ai`,`IA`,3e3,`sparkle`],[`huggingface`,`Hugging Face`,`huggingface.co`,`IA`,2e3,`sparkle`]]},{district:{id:`tech`,name:`Tech & outils`,color:`#9a6bff`},sites:[[`gmail`,`Gmail`,`mail.google.com`,`Mail`,4e4,`mail`],[`microsoft`,`Microsoft`,`microsoft.com`,`Tech`,35e3,`cube`],[`apple`,`Apple`,`apple.com`,`Tech`,3e4,`cube`],[`googlemaps`,`Google Maps`,`maps.google.com`,`Cartes`,25e3,`map`],[`outlook`,`Outlook`,`outlook.com`,`Mail`,2e4,`mail`],[`drive`,`Google Drive`,`drive.google.com`,`Stockage`,15e3,`cloud`],[`github`,`GitHub`,`github.com`,`Code`,8e3,`code`],[`canva`,`Canva`,`canva.com`,`Création`,7e3,`image`],[`zoom`,`Zoom`,`zoom.us`,`Visio`,6e3,`live`],[`wordpress`,`WordPress`,`wordpress.com`,`Sites web`,6e3,`pen`],[`stackoverflow`,`Stack Overflow`,`stackoverflow.com`,`Code`,5e3,`code`],[`adobe`,`Adobe`,`adobe.com`,`Création`,5e3,`image`],[`slack`,`Slack`,`slack.com`,`Travail`,4e3,`chat`],[`notion`,`Notion`,`notion.so`,`Travail`,3500,`pen`],[`dropbox`,`Dropbox`,`dropbox.com`,`Stockage`,3e3,`cloud`],[`waze`,`Waze`,`waze.com`,`Cartes`,3e3,`car`],[`figma`,`Figma`,`figma.com`,`Création`,2500,`image`],[`wix`,`Wix`,`wix.com`,`Sites web`,2e3,`pen`],[`speedtest`,`Speedtest`,`speedtest.net`,`Web`,1500,`sun`],[`trello`,`Trello`,`trello.com`,`Travail`,1200,`briefcase`],[`ovh`,`OVHcloud`,`ovhcloud.com`,`Hébergement`,900,`cloud`],[`doodle`,`Doodle`,`doodle.com`,`Agenda`,400,`users`],[`framasoft`,`Framasoft`,`framasoft.org`,`Libre`,150,`code`]]},{district:{id:`shopping`,name:`Shopping`,color:`#ffa630`},sites:[[`amazon`,`Amazon`,`amazon.fr`,`Shopping`,4e4,`cart`],[`walmart`,`Walmart`,`walmart.com`,`Shopping`,2e4,`cart`],[`temu`,`Temu`,`temu.com`,`Shopping`,16e3,`cart`],[`aliexpress`,`AliExpress`,`aliexpress.com`,`Shopping`,14e3,`cart`],[`shein`,`Shein`,`shein.com`,`Mode`,13e3,`tag`],[`ebay`,`eBay`,`ebay.fr`,`Enchères`,12e3,`tag`],[`vinted`,`Vinted`,`vinted.fr`,`Seconde main`,9e3,`tag`],[`etsy`,`Etsy`,`etsy.com`,`Artisanat`,5e3,`tag`],[`ikea`,`IKEA`,`ikea.com`,`Maison`,4e3,`home`],[`zalando`,`Zalando`,`zalando.fr`,`Mode`,3500,`tag`],[`cdiscount`,`Cdiscount`,`cdiscount.com`,`Shopping`,3e3,`cart`],[`nike`,`Nike`,`nike.com`,`Mode`,3e3,`tag`],[`leboncoin`,`Leboncoin`,`leboncoin.fr`,`Petites annonces`,2500,`tag`],[`fnac`,`Fnac`,`fnac.com`,`Culture`,2500,`cart`],[`decathlon`,`Decathlon`,`decathlon.fr`,`Sport`,2500,`bike`],[`carrefour`,`Carrefour`,`carrefour.fr`,`Courses`,1800,`cart`],[`leroymerlin`,`Leroy Merlin`,`leroymerlin.fr`,`Bricolage`,1600,`home`],[`darty`,`Darty`,`darty.com`,`High-tech`,1500,`cart`],[`rakuten`,`Rakuten`,`fr.shopping.rakuten.com`,`Shopping`,1500,`cart`],[`sephora`,`Sephora`,`sephora.fr`,`Beauté`,1400,`tag`],[`boulanger`,`Boulanger`,`boulanger.com`,`High-tech`,1200,`cart`],[`backmarket`,`Back Market`,`backmarket.fr`,`Reconditionné`,1e3,`cart`],[`veepee`,`Veepee`,`veepee.fr`,`Ventes privées`,900,`tag`],[`vestiaire`,`Vestiaire Collective`,`vestiairecollective.com`,`Mode`,600,`tag`],[`wish`,`Wish`,`wish.com`,`Shopping`,500,`cart`]]},{district:{id:`jeux`,name:`Jeux`,color:`#3dff8a`},sites:[[`steam`,`Steam`,`store.steampowered.com`,`Jeux`,2e4,`gamepad`],[`fortnite`,`Fortnite`,`fortnite.com`,`Jeux`,15e3,`gamepad`],[`minecraft`,`Minecraft`,`minecraft.net`,`Jeux`,12e3,`cube`],[`roblox`,`Roblox`,`roblox.com`,`Jeux`,9e3,`cube`],[`discord`,`Discord`,`discord.com`,`Jeux`,8e3,`gamepad`],[`playstation`,`PlayStation`,`playstation.com`,`Consoles`,8e3,`gamepad`],[`xbox`,`Xbox`,`xbox.com`,`Consoles`,7e3,`gamepad`],[`epicgames`,`Epic Games`,`epicgames.com`,`Jeux`,6e3,`gamepad`],[`nintendo`,`Nintendo`,`nintendo.com`,`Consoles`,6e3,`gamepad`],[`riot`,`Riot Games`,`riotgames.com`,`Jeux`,5e3,`gamepad`],[`chesscom`,`Chess.com`,`chess.com`,`Échecs`,4e3,`dice`],[`supercell`,`Supercell`,`supercell.com`,`Jeux mobiles`,4e3,`gamepad`],[`hoyoverse`,`HoYoverse`,`hoyoverse.com`,`Jeux`,3e3,`sparkle`],[`poki`,`Poki`,`poki.com`,`Jeux en ligne`,2500,`gamepad`],[`nytgames`,`NYT Jeux`,`nytimes.com/games`,`Énigmes`,2e3,`dice`],[`lichess`,`Lichess`,`lichess.org`,`Échecs`,1500,`dice`],[`crazygames`,`CrazyGames`,`crazygames.com`,`Jeux en ligne`,1200,`gamepad`],[`geoguessr`,`GeoGuessr`,`geoguessr.com`,`Jeux`,1200,`map`],[`itchio`,`itch.io`,`itch.io`,`Jeux indé`,900,`gamepad`],[`agario`,`Agar.io`,`agar.io`,`Jeux en ligne`,300,`gamepad`]]},{district:{id:`musique`,name:`Musique`,color:`#2ff0c8`},sites:[[`spotify`,`Spotify`,`spotify.com`,`Musique`,12e3,`music`],[`applemusic`,`Apple Music`,`music.apple.com`,`Musique`,1e4,`music`],[`youtubemusic`,`YouTube Music`,`music.youtube.com`,`Musique`,9e3,`music`],[`amazonmusic`,`Amazon Music`,`music.amazon.fr`,`Musique`,5e3,`music`],[`soundcloud`,`SoundCloud`,`soundcloud.com`,`Musique`,4e3,`music`],[`shazam`,`Shazam`,`shazam.com`,`Musique`,3500,`music`],[`genius`,`Genius`,`genius.com`,`Paroles`,2500,`music`],[`deezer`,`Deezer`,`deezer.com`,`Musique`,1500,`music`],[`radiofrance`,`Radio France`,`radiofrance.fr`,`Radio`,1200,`radio`],[`nrj`,`NRJ`,`nrj.fr`,`Radio`,900,`radio`],[`bandcamp`,`Bandcamp`,`bandcamp.com`,`Musique`,800,`music`],[`tidal`,`Tidal`,`tidal.com`,`Musique`,700,`music`],[`qobuz`,`Qobuz`,`qobuz.com`,`Musique`,400,`music`],[`lastfm`,`Last.fm`,`last.fm`,`Musique`,300,`music`],[`skyrock`,`Skyrock`,`skyrock.com`,`Radio`,250,`radio`]]},{district:{id:`actu`,name:`Actu`,color:`#ff7a3d`},sites:[[`bbc`,`BBC`,`bbc.com`,`Actu`,9e3,`news`],[`cnn`,`CNN`,`cnn.com`,`Actu`,8e3,`news`],[`nytimes`,`New York Times`,`nytimes.com`,`Actu`,7e3,`news`],[`guardian`,`The Guardian`,`theguardian.com`,`Actu`,5e3,`news`],[`reuters`,`Reuters`,`reuters.com`,`Actu`,4e3,`news`],[`lemonde`,`Le Monde`,`lemonde.fr`,`Actu`,3e3,`news`],[`lefigaro`,`Le Figaro`,`lefigaro.fr`,`Actu`,2500,`news`],[`bfmtv`,`BFMTV`,`bfmtv.com`,`Actu`,2200,`news`],[`franceinfo`,`Franceinfo`,`francetvinfo.fr`,`Actu`,2e3,`news`],[`ouestfrance`,`Ouest-France`,`ouest-france.fr`,`Actu`,1800,`news`],[`leparisien`,`Le Parisien`,`leparisien.fr`,`Actu`,1600,`news`],[`20minutes`,`20 Minutes`,`20minutes.fr`,`Actu`,1500,`news`],[`brut`,`Brut`,`brut.media`,`Actu`,1200,`play`],[`huffpost`,`HuffPost`,`huffingtonpost.fr`,`Actu`,1e3,`news`],[`liberation`,`Libération`,`liberation.fr`,`Actu`,900,`news`],[`konbini`,`Konbini`,`konbini.com`,`Pop culture`,800,`news`],[`frandroid`,`Frandroid`,`frandroid.com`,`Tech`,600,`news`],[`mediapart`,`Mediapart`,`mediapart.fr`,`Actu`,500,`news`],[`01net`,`01net`,`01net.com`,`Tech`,500,`news`],[`numerama`,`Numerama`,`numerama.com`,`Tech`,400,`news`],[`courrierinter`,`Courrier international`,`courrierinternational.com`,`Actu`,300,`news`],[`legorafi`,`Le Gorafi`,`legorafi.fr`,`Humour`,150,`news`]]},{district:{id:`finance`,name:`Finance`,color:`#ffd23d`},sites:[[`paypal`,`PayPal`,`paypal.com`,`Paiement`,12e3,`coin`],[`binance`,`Binance`,`binance.com`,`Crypto`,8e3,`coin`],[`coinbase`,`Coinbase`,`coinbase.com`,`Crypto`,5e3,`coin`],[`stripe`,`Stripe`,`stripe.com`,`Paiement`,4e3,`coin`],[`revolut`,`Revolut`,`revolut.com`,`Banque`,3500,`bank`],[`tradingview`,`TradingView`,`tradingview.com`,`Bourse`,3e3,`coin`],[`yahoofinance`,`Yahoo Finance`,`finance.yahoo.com`,`Bourse`,2500,`coin`],[`klarna`,`Klarna`,`klarna.com`,`Paiement`,2e3,`coin`],[`creditagricole`,`Crédit Agricole`,`credit-agricole.fr`,`Banque`,1800,`bank`],[`bnp`,`BNP Paribas`,`mabanque.bnpparibas`,`Banque`,1600,`bank`],[`boursorama`,`Boursorama`,`boursorama.com`,`Banque`,1500,`bank`],[`labanquepostale`,`La Banque Postale`,`labanquepostale.fr`,`Banque`,1400,`bank`],[`societegenerale`,`Société Générale`,`societegenerale.fr`,`Banque`,1200,`bank`],[`n26`,`N26`,`n26.com`,`Banque`,900,`bank`],[`lydia`,`Lydia`,`lydia-app.com`,`Paiement`,800,`coin`]]},{district:{id:`voyage`,name:`Voyage`,color:`#4da6ff`},sites:[[`booking`,`Booking`,`booking.com`,`Hôtels`,14e3,`home`],[`airbnb`,`Airbnb`,`airbnb.fr`,`Logements`,12e3,`home`],[`uber`,`Uber`,`uber.com`,`Transport`,9e3,`car`],[`tripadvisor`,`Tripadvisor`,`tripadvisor.fr`,`Avis`,6e3,`map`],[`expedia`,`Expedia`,`expedia.fr`,`Voyages`,5e3,`plane`],[`sncf`,`SNCF Connect`,`sncf-connect.com`,`Train`,4e3,`map`],[`skyscanner`,`Skyscanner`,`skyscanner.fr`,`Vols`,3e3,`plane`],[`ryanair`,`Ryanair`,`ryanair.com`,`Vols`,2500,`plane`],[`airfrance`,`Air France`,`airfrance.fr`,`Vols`,2e3,`plane`],[`blablacar`,`BlaBlaCar`,`blablacar.fr`,`Covoiturage`,2e3,`car`],[`trainline`,`Trainline`,`thetrainline.com`,`Train`,1500,`map`],[`abritel`,`Abritel`,`abritel.fr`,`Locations`,700,`home`],[`opodo`,`Opodo`,`opodo.fr`,`Voyages`,500,`plane`],[`lonelyplanet`,`Lonely Planet`,`lonelyplanet.fr`,`Guides`,400,`map`],[`gites`,`Gîtes de France`,`gites-de-france.com`,`Locations`,300,`home`]]},{district:{id:`sport`,name:`Sport`,color:`#a6ff4d`},sites:[[`espn`,`ESPN`,`espn.com`,`Sport`,6e3,`ball`],[`nba`,`NBA`,`nba.com`,`Basket`,5e3,`ball`],[`flashscore`,`Flashscore`,`flashscore.fr`,`Résultats`,3500,`ball`],[`lequipe`,`L'Équipe`,`lequipe.fr`,`Sport`,3e3,`news`],[`fifa`,`FIFA`,`fifa.com`,`Foot`,2500,`ball`],[`strava`,`Strava`,`strava.com`,`Course & vélo`,2e3,`bike`],[`uefa`,`UEFA`,`uefa.com`,`Foot`,2e3,`ball`],[`transfermarkt`,`Transfermarkt`,`transfermarkt.fr`,`Foot`,1800,`ball`],[`eurosport`,`Eurosport`,`eurosport.fr`,`Sport`,1500,`play`],[`sofascore`,`Sofascore`,`sofascore.com`,`Résultats`,1500,`ball`],[`rmcsport`,`RMC Sport`,`rmcsport.bfmtv.com`,`Sport`,1200,`play`],[`winamax`,`Winamax`,`winamax.fr`,`Paris`,1e3,`dice`],[`betclic`,`Betclic`,`betclic.fr`,`Paris`,900,`dice`],[`psg`,`PSG`,`psg.fr`,`Foot`,900,`ball`],[`footmercato`,`Foot Mercato`,`footmercato.net`,`Foot`,500,`ball`],[`om`,`OM`,`om.fr`,`Foot`,400,`ball`]]},{district:{id:`forums`,name:`Forums`,color:`#e8e65a`},sites:[[`reddit`,`Reddit`,`reddit.com`,`Forums`,1e4,`forum`],[`quora`,`Quora`,`quora.com`,`Questions`,6e3,`forum`],[`fourchan`,`4chan`,`4chan.org`,`Forums`,1500,`forum`],[`jeuxvideo`,`jeuxvideo.com`,`jeuxvideo.com`,`Forums`,800,`forum`],[`ccm`,`CommentÇaMarche`,`commentcamarche.net`,`Entraide`,800,`forum`],[`futura`,`Futura`,`futura-sciences.com`,`Sciences`,500,`forum`],[`hardware`,`Hardware.fr`,`forum.hardware.fr`,`Forums`,300,`forum`],[`forumauto`,`Forum Auto`,`forum-auto.caradisiac.com`,`Forums`,150,`car`]]},{district:{id:`vie`,name:`Vie pratique`,color:`#ff5bd6`},sites:[[`indeed`,`Indeed`,`indeed.fr`,`Emploi`,5e3,`briefcase`],[`impots`,`impots.gouv`,`impots.gouv.fr`,`Service public`,4e3,`flag`],[`caf`,`CAF`,`caf.fr`,`Service public`,2500,`flag`],[`francetravail`,`France Travail`,`francetravail.fr`,`Emploi`,2500,`briefcase`],[`servicepublic`,`Service-Public`,`service-public.fr`,`Service public`,2e3,`flag`],[`meteofrance`,`Météo-France`,`meteofrance.com`,`Météo`,2e3,`sun`],[`seloger`,`SeLoger`,`seloger.com`,`Immobilier`,1500,`home`],[`laposte`,`La Poste`,`laposte.fr`,`Courrier`,1500,`mail`],[`pagesjaunes`,`PagesJaunes`,`pagesjaunes.fr`,`Annuaire`,900,`search`],[`wttj`,`Welcome to the Jungle`,`welcometothejungle.com`,`Emploi`,800,`briefcase`],[`legifrance`,`Légifrance`,`legifrance.gouv.fr`,`Droit`,400,`flag`],[`mappy`,`Mappy`,`mappy.com`,`Cartes`,350,`map`],[`ornikar`,`Ornikar`,`ornikar.com`,`Permis`,250,`car`]]},{district:{id:`environnement`,name:`Environnement`,color:`#2fd07a`},sites:[[`greenpeace`,`Greenpeace`,`greenpeace.fr`,`Environnement`,3e3,`leaf`],[`toogoodtogo`,`Too Good To Go`,`toogoodtogo.fr`,`Anti-gaspi`,2500,`leaf`],[`wwf`,`WWF`,`wwf.fr`,`Environnement`,2500,`leaf`],[`nasaclimate`,`NASA Climat`,`climate.nasa.gov`,`Climat`,1500,`sun`],[`ademe`,`ADEME`,`ademe.fr`,`Environnement`,900,`leaf`],[`ecologiegouv`,`Écologie.gouv`,`ecologie.gouv.fr`,`Service public`,800,`flag`],[`xr`,`Extinction Rebellion`,`extinctionrebellion.fr`,`Militantisme`,800,`leaf`],[`350org`,`350.org`,`350.org`,`Climat`,700,`sun`],[`reporterre`,`Reporterre`,`reporterre.net`,`Actu écolo`,600,`news`],[`lpo`,`LPO`,`lpo.fr`,`Oiseaux`,500,`leaf`],[`surfrider`,`Surfrider`,`surfrider.eu`,`Océans`,400,`fish`],[`enercoop`,`Enercoop`,`enercoop.fr`,`Énergie`,400,`sun`],[`colibris`,`Colibris`,`colibris-lemouvement.org`,`Association`,300,`leaf`],[`vert`,`Vert`,`vert.eco`,`Actu écolo`,250,`news`],[`affairetous`,`Notre Affaire à Tous`,`notreaffaireatous.org`,`Justice climatique`,150,`flag`]]},{district:{id:`sante`,name:`Santé`,color:`#ff5c8a`},sites:[[`webmd`,`WebMD`,`webmd.com`,`Santé`,5e3,`health`],[`mayoclinic`,`Mayo Clinic`,`mayoclinic.org`,`Santé`,4e3,`health`],[`oms`,`OMS`,`who.int`,`Santé`,3e3,`health`],[`ameli`,`Ameli`,`ameli.fr`,`Santé`,3e3,`health`],[`doctolib`,`Doctolib`,`doctolib.fr`,`Santé`,1200,`health`],[`doctissimo`,`Doctissimo`,`doctissimo.fr`,`Santé`,1100,`health`],[`msdmanuals`,`Manuels MSD`,`msdmanuals.com`,`Médecine`,1e3,`book`],[`alan`,`Alan`,`alan.com`,`Mutuelle`,900,`health`],[`santefr`,`Santé.fr`,`sante.fr`,`Service public`,800,`flag`],[`passeportsante`,`PasseportSanté`,`passeportsante.net`,`Santé`,700,`health`],[`jdfsante`,`Journal des Femmes Santé`,`sante.journaldesfemmes.fr`,`Santé`,600,`health`],[`livi`,`Livi`,`livi.fr`,`Téléconsultation`,500,`health`],[`qare`,`Qare`,`qare.fr`,`Téléconsultation`,400,`health`],[`vidal`,`Vidal`,`vidal.fr`,`Santé`,300,`health`],[`pharmalafayette`,`Pharmacie Lafayette`,`pharmacielafayette.com`,`Pharmacie`,300,`health`]]},{district:{id:`cuisine`,name:`Cuisine`,color:`#ffb347`},sites:[[`ubereats`,`Uber Eats`,`ubereats.com`,`Livraison`,9e3,`chef`],[`allrecipes`,`Allrecipes`,`allrecipes.com`,`Recettes`,5e3,`chef`],[`deliveroo`,`Deliveroo`,`deliveroo.fr`,`Livraison`,5e3,`chef`],[`tasty`,`Tasty`,`tasty.co`,`Recettes`,4e3,`chef`],[`justeat`,`Just Eat`,`just-eat.fr`,`Livraison`,3500,`chef`],[`hellofresh`,`HelloFresh`,`hellofresh.fr`,`Box repas`,2500,`chef`],[`thefork`,`TheFork`,`thefork.fr`,`Restaurants`,2e3,`chef`],[`yummly`,`Yummly`,`yummly.com`,`Recettes`,1500,`chef`],[`chefclub`,`Chefclub`,`chefclub.tv`,`Recettes`,1200,`play`],[`cuisineactuelle`,`Cuisine Actuelle`,`cuisineactuelle.fr`,`Recettes`,800,`chef`],[`jow`,`Jow`,`jow.fr`,`Courses`,600,`cart`],[`ptitchef`,`Ptitchef`,`ptitchef.com`,`Recettes`,500,`chef`],[`marmiton`,`Marmiton`,`marmiton.org`,`Cuisine`,400,`chef`],[`750g`,`750g`,`750g.com`,`Cuisine`,250,`chef`],[`cuisineaz`,`Cuisine AZ`,`cuisineaz.com`,`Cuisine`,200,`chef`]]},{district:{id:`mode`,name:`Mode`,color:`#e879f9`},sites:[[`zara`,`Zara`,`zara.com`,`Mode`,7e3,`tag`],[`hm`,`H&M`,`hm.com`,`Mode`,6e3,`tag`],[`asos`,`ASOS`,`asos.com`,`Mode`,5e3,`tag`],[`vogue`,`Vogue`,`vogue.fr`,`Magazine`,4e3,`news`],[`uniqlo`,`Uniqlo`,`uniqlo.com`,`Mode`,4e3,`tag`],[`elle`,`Elle`,`elle.fr`,`Magazine`,3e3,`news`],[`farfetch`,`Farfetch`,`farfetch.com`,`Luxe`,2e3,`tag`],[`gq`,`GQ`,`gqmagazine.fr`,`Magazine`,1800,`news`],[`marieclaire`,`Marie Claire`,`marieclaire.fr`,`Magazine`,1500,`news`],[`kiabi`,`Kiabi`,`kiabi.com`,`Mode`,1500,`tag`],[`balenciaga`,`Balenciaga`,`balenciaga.com`,`Luxe`,1200,`tag`],[`sezane`,`Sézane`,`sezane.com`,`Mode`,700,`tag`],[`madmoizelle`,`Madmoizelle`,`madmoizelle.com`,`Magazine`,400,`news`],[`slipfrancais`,`Le Slip Français`,`leslipfrancais.fr`,`Mode`,300,`tag`]]},{district:{id:`auto`,name:`Auto & moto`,color:`#9fb4d0`},sites:[[`tesla`,`Tesla`,`tesla.com`,`Voitures`,9e3,`car`],[`toyota`,`Toyota`,`toyota.fr`,`Voitures`,3500,`car`],[`renault`,`Renault`,`renault.fr`,`Voitures`,3e3,`car`],[`bmw`,`BMW`,`bmw.fr`,`Voitures`,3e3,`car`],[`peugeot`,`Peugeot`,`peugeot.fr`,`Voitures`,2500,`car`],[`lacentrale`,`La Centrale`,`lacentrale.fr`,`Occasion`,1800,`car`],[`caradisiac`,`Caradisiac`,`caradisiac.com`,`Actu auto`,1200,`news`],[`michelin`,`Michelin`,`michelin.fr`,`Pneus`,1200,`car`],[`norauto`,`Norauto`,`norauto.fr`,`Entretien`,800,`car`],[`autoplus`,`Auto Plus`,`autoplus.fr`,`Actu auto`,700,`news`],[`aramis`,`Aramis Auto`,`aramisauto.com`,`Occasion`,700,`car`],[`oscaro`,`Oscaro`,`oscaro.com`,`Pièces`,600,`car`],[`autohero`,`Autohero`,`autohero.com`,`Occasion`,500,`car`],[`carglass`,`Carglass`,`carglass.fr`,`Entretien`,400,`car`],[`autopropre`,`Automobile Propre`,`automobile-propre.com`,`Électrique`,300,`leaf`]]},{district:{id:`maison`,name:`Maison & jardin`,color:`#d9a066`},sites:[[`houzz`,`Houzz`,`houzz.fr`,`Déco`,2500,`home`],[`castorama`,`Castorama`,`castorama.fr`,`Bricolage`,2200,`home`],[`maisonsdumonde`,`Maisons du Monde`,`maisonsdumonde.com`,`Déco`,2e3,`home`],[`manomano`,`ManoMano`,`manomano.fr`,`Bricolage`,2e3,`home`],[`laredoute`,`La Redoute`,`laredoute.fr`,`Maison`,1800,`home`],[`conforama`,`Conforama`,`conforama.fr`,`Meubles`,1200,`home`],[`but`,`BUT`,`but.fr`,`Meubles`,1100,`home`],[`bricodepot`,`Brico Dépôt`,`bricodepot.fr`,`Bricolage`,900,`home`],[`westwing`,`Westwing`,`westwing.fr`,`Déco`,700,`home`],[`habitat`,`Habitat`,`habitat.fr`,`Meubles`,600,`home`],[`decofr`,`Deco.fr`,`deco.fr`,`Déco`,500,`home`],[`cotemaison`,`Côté Maison`,`cotemaison.fr`,`Déco`,400,`home`],[`truffaut`,`Truffaut`,`truffaut.com`,`Jardin`,400,`leaf`],[`jardiland`,`Jardiland`,`jardiland.com`,`Jardin`,400,`leaf`]]},{district:{id:`animaux`,name:`Animaux`,color:`#f7c948`},sites:[[`natgeo`,`National Geographic`,`nationalgeographic.fr`,`Nature`,5e3,`paw`],[`zooplus`,`Zooplus`,`zooplus.fr`,`Animalerie`,1500,`paw`],[`petfinder`,`Petfinder`,`petfinder.com`,`Adoption`,1200,`paw`],[`spa`,`SPA`,`la-spa.fr`,`Refuges`,900,`paw`],[`rover`,`Rover`,`rover.com`,`Garde`,900,`paw`],[`wamiz`,`Wamiz`,`wamiz.com`,`Animaux`,800,`paw`],[`30millions`,`30 Millions d’Amis`,`30millionsdamis.fr`,`Protection`,700,`paw`],[`maxizoo`,`Maxi Zoo`,`maxizoo.fr`,`Animalerie`,500,`paw`],[`animalis`,`Animalis`,`animalis.com`,`Animalerie`,400,`paw`],[`santevet`,`SantéVet`,`santevet.com`,`Assurance`,300,`health`],[`chiensdefrance`,`Chiens de France`,`chiens-de-france.com`,`Annuaire`,200,`paw`],[`ornitho`,`Ornithomedia`,`ornithomedia.com`,`Oiseaux`,150,`paw`]]},{district:{id:`sciences`,name:`Sciences`,color:`#7c9cff`},sites:[[`nasa`,`NASA`,`nasa.gov`,`Espace`,12e3,`atom`],[`nature`,`Nature`,`nature.com`,`Recherche`,4e3,`atom`],[`arxiv`,`arXiv`,`arxiv.org`,`Recherche`,3500,`book`],[`esa`,`ESA`,`esa.int`,`Espace`,3e3,`atom`],[`kurzgesagt`,`Kurzgesagt`,`kurzgesagt.org`,`Vulgarisation`,2500,`play`],[`spacecom`,`Space.com`,`space.com`,`Espace`,2e3,`sparkle`],[`cnrs`,`CNRS`,`cnrs.fr`,`Recherche`,1500,`atom`],[`cern`,`CERN`,`home.cern`,`Physique`,1500,`atom`],[`hubble`,`Hubble`,`hubblesite.org`,`Espace`,1e3,`sparkle`],[`scienceetvie`,`Science & Vie`,`science-et-vie.com`,`Magazine`,900,`news`],[`sciencesavenir`,`Sciences et Avenir`,`sciencesetavenir.fr`,`Magazine`,800,`news`],[`citesciences`,`Cité des sciences`,`cite-sciences.fr`,`Musée`,600,`atom`],[`pourlascience`,`Pour la Science`,`pourlascience.fr`,`Magazine`,500,`news`],[`palaisdecouverte`,`Palais de la découverte`,`palais-decouverte.fr`,`Musée`,300,`atom`]]},{district:{id:`culture`,name:`Culture`,color:`#c9a2ff`},sites:[[`webtoon`,`Webtoon`,`webtoons.com`,`BD en ligne`,6e3,`image`],[`wattpad`,`Wattpad`,`wattpad.com`,`Lecture`,4e3,`book`],[`ticketmaster`,`Ticketmaster`,`ticketmaster.fr`,`Spectacles`,3500,`tag`],[`goodreads`,`Goodreads`,`goodreads.com`,`Lecture`,3e3,`book`],[`louvre`,`Louvre`,`louvre.fr`,`Musée`,2500,`image`],[`cultura`,`Cultura`,`cultura.com`,`Culture`,1500,`book`],[`billetreduc`,`BilletRéduc`,`billetreduc.com`,`Spectacles`,900,`tag`],[`orsay`,`Musée d’Orsay`,`musee-orsay.fr`,`Musée`,900,`image`],[`gallica`,`Gallica`,`gallica.bnf.fr`,`Bibliothèque`,800,`book`],[`operaparis`,`Opéra de Paris`,`operadeparis.fr`,`Spectacles`,800,`music`],[`babelio`,`Babelio`,`babelio.com`,`Lecture`,700,`book`],[`culturegouv`,`Culture.gouv`,`culture.gouv.fr`,`Service public`,700,`flag`],[`gallimard`,`Gallimard`,`gallimard.fr`,`Édition`,500,`book`],[`radioclassique`,`Radio Classique`,`radioclassique.fr`,`Radio`,300,`radio`],[`actessud`,`Actes Sud`,`actes-sud.fr`,`Édition`,200,`book`]]},{district:{id:`famille`,name:`Famille & enfants`,color:`#7fe3ff`},sites:[[`disney`,`Disney`,`disney.fr`,`Enfants`,6e3,`sparkle`],[`lego`,`LEGO`,`lego.com`,`Jouets`,5e3,`cube`],[`pbskids`,`PBS Kids`,`pbskids.org`,`Enfants`,2e3,`play`],[`aufeminin`,`Aufeminin`,`aufeminin.com`,`Famille`,1500,`users`],[`gulli`,`Gulli`,`gulli.fr`,`Enfants`,1200,`play`],[`lumni`,`Lumni`,`lumni.fr`,`Éducation`,900,`book`],[`vertbaudet`,`Vertbaudet`,`vertbaudet.fr`,`Enfants`,900,`tag`],[`okoo`,`Okoo`,`france.tv/okoo`,`Enfants`,800,`play`],[`magicmaman`,`Magicmaman`,`magicmaman.com`,`Parents`,600,`users`],[`parentsfr`,`Parents.fr`,`parents.fr`,`Parents`,500,`users`],[`hugo`,`Hugo l’escargot`,`hugolescargot.com`,`Coloriages`,400,`image`],[`cyrillus`,`Cyrillus`,`cyrillus.fr`,`Enfants`,400,`tag`],[`momes`,`Momes.net`,`momes.net`,`Activités`,300,`image`]]}],ce=se.map(e=>e.district),le=(()=>{let e=se.flatMap(({district:e,sites:t})=>t.map(([t,n,r,i,a,o])=>({id:t,name:n,domain:r,category:i,price:a,icon:o,district:e.id}))),t=new Set(e.map(e=>e.domain.replace(/^www\./,``))),n=new Set(e.map(e=>e.id));for(let r of[...oe,...I]){let i=r.domain.replace(/^www\./,``);t.has(i)||n.has(r.id)||(t.add(i),n.add(r.id),e.push(r))}return e})(),L=ne,ue=15e4,de=80;function fe(e){let t=e<100?5:e<1e3?10:e<1e4?100:1e3;return Math.max(de,Math.round(e/t)*t)}function pe(e,t,n){let r=(Math.log(e)-Math.log(t))/Math.max(1e-9,Math.log(n)-Math.log(t));return fe(Math.exp(Math.log(ue)+(Math.log(de)-Math.log(ue))*Math.min(1,Math.max(0,r))))}var me=le.some(e=>L[e.id]),he=(()=>{let e=le.filter(e=>(!me||L[e.id])&&!e.micro).sort((e,t)=>(L[e.id]??1e9)-(L[t.id]??1e9)),t=new Set;for(let n of ce)for(let r of e.filter(e=>e.district===n.id).slice(0,40))t.add(r.id);for(let n of e){if(t.size>=1e3)break;t.add(n.id)}for(let e of le)e.micro&&(!me||L[e.id])&&t.add(e.id);return t})(),ge=le.filter(e=>L[e.id]&&!e.micro&&he.has(e.id)),_e=le.filter(e=>L[e.id]&&e.micro),ve=_e.map(e=>L[e.id]),ye=ve.length?Math.min(...ve):1,R=ve.length?Math.max(...ve):2,be=new Set(_e.map(e=>e.id)),xe=Math.min(...ge.map(e=>L[e.id]),1),Se=Math.max(...ge.map(e=>L[e.id]),2),z=new Map([...ge].sort((e,t)=>L[t.id]-L[e.id]).map((e,t,n)=>[e.id,t/Math.max(1,n.length-1)]));function Ce(e){if(be.has(e)){let t=(Math.log(L[e])-Math.log(ye))/Math.max(1e-9,Math.log(R)-Math.log(ye));return Math.round((60+-40*t)/5)*5}let t=pe(L[e],xe,Se),n=z.get(e)??0,r=fe(Math.exp(Math.log(de)+(Math.log(ue)-Math.log(de))*n**1.6));return Math.min(t,r)}var B=me,V=le.filter(e=>he.has(e.id)).map(e=>({id:e.id,name:e.name,domain:e.domain,category:e.category,district:e.district,basePrice:B?Ce(e.id):e.price,icon:e.icon,color:se.find(t=>t.district.id===e.district).district.color,...e.micro?{micro:!0}:{}}));Object.fromEntries(V.map(e=>[e.id,e]));var we=Object.fromEntries(ce.map(e=>[e.id,e]));if(new Set(V.map(e=>e.id)).size!==V.length)throw Error(`Deux sites ont le même identifiant dans src/config/sites.ts`);V.reduce((e,t)=>t.basePrice<e.basePrice?t:e,V[0]).district;var Te=1e3,Ee=1001,De=1002,Oe=1003,ke=1004,Ae=1005,je=1006,Me=1007,Ne=1008,Pe=1009,Fe=1010,Ie=1011,Le=1012,Re=1013,ze=1014,Be=1015,Ve=1016,He=1017,Ue=1018,We=1020,Ge=35902,Ke=35899,qe=1021,Je=1022,Ye=1023,Xe=1026,Ze=1027,Qe=1028,$e=1029,et=1030,tt=1031,nt=1033,rt=33776,it=33777,at=33778,ot=33779,st=35840,ct=35841,lt=35842,ut=35843,dt=36196,ft=37492,pt=37496,mt=37488,ht=37489,gt=37490,_t=37491,vt=37808,yt=37809,bt=37810,xt=37811,St=37812,Ct=37813,wt=37814,Tt=37815,Et=37816,Dt=37817,Ot=37818,kt=37819,At=37820,jt=37821,Mt=36492,Nt=36494,Pt=36495,Ft=36283,It=36284,Lt=36285,Rt=36286,zt=2300,Bt=2301,Vt=2302,Ht=2303,Ut=2400,Wt=2401,Gt=2402,Kt=3200,qt=`srgb`,Jt=`srgb-linear`,Yt=`linear`,Xt=`srgb`,Zt=7680,Qt=35044,$t=2e3;function en(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function tn(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function nn(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function rn(){let e=nn(`canvas`);return e.style.display=`block`,e}var an={};function on(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function sn(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function H(...e){e=sn(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function U(...e){e=sn(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function cn(...e){let t=e.join(` `);t in an||(an[t]=!0,H(...e))}function ln(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var un={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},dn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},fn=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),pn=Math.PI/180,mn=180/Math.PI;function hn(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(fn[e&255]+fn[e>>8&255]+fn[e>>16&255]+fn[e>>24&255]+`-`+fn[t&255]+fn[t>>8&255]+`-`+fn[t>>16&15|64]+fn[t>>24&255]+`-`+fn[n&63|128]+fn[n>>8&255]+`-`+fn[n>>16&255]+fn[n>>24&255]+fn[r&255]+fn[r>>8&255]+fn[r>>16&255]+fn[r>>24&255]).toLowerCase()}function W(e,t,n){return Math.max(t,Math.min(n,e))}function gn(e,t){return(e%t+t)%t}function _n(e,t,n){return(1-n)*e+n*t}function vn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function yn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var G=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=W(this.x,e.x,t.x),this.y=W(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=W(this.x,e,t),this.y=W(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(W(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(W(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},bn=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:H(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(W(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},K=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Sn.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Sn.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=W(this.x,e.x,t.x),this.y=W(this.y,e.y,t.y),this.z=W(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=W(this.x,e,t),this.y=W(this.y,e,t),this.z=W(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(W(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return xn.copy(this).projectOnVector(e),this.sub(xn)}reflect(e){return this.sub(xn.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(W(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},xn=new K,Sn=new bn,q=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return cn(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Cn.makeScale(e,t)),this}rotate(e){return cn(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Cn.makeRotation(-e)),this}translate(e,t){return cn(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Cn.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Cn=new q,wn=new q().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tn=new q().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function En(){let e={enabled:!0,workingColorSpace:Jt,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=Dn(e.r),e.g=Dn(e.g),e.b=Dn(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=On(e.r),e.g=On(e.g),e.b=On(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Yt:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return cn(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return cn(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Jt]:{primaries:t,whitePoint:r,transfer:Yt,toXYZ:wn,fromXYZ:Tn,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:qt},outputColorSpaceConfig:{drawingBufferColorSpace:qt}},[qt]:{primaries:t,whitePoint:r,transfer:Xt,toXYZ:wn,fromXYZ:Tn,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:qt}}}),e}var J=En();function Dn(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function On(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var kn,An=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{kn===void 0&&(kn=nn(`canvas`)),kn.width=e.width,kn.height=e.height;let t=kn.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=kn}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=nn(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Dn(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Dn(t[e]/255)*255):t[e]=Dn(t[e]);return{data:t,width:e.width,height:e.height}}return H(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},jn=0,Mn=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:jn++}),this.uuid=hn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Nn(r[t].image)):e.push(Nn(r[t]))}else e=Nn(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Nn(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?An.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(H(`Texture: Unable to serialize Texture.`),{})}var Pn=0,Fn=new K,In=class e extends dn{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=Ee,i=Ee,a=je,o=Ne,s=Ye,c=Pe,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pn++}),this.uuid=hn(),this.name=``,this.source=new Mn(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new G(0,0),this.repeat=new G(1,1),this.center=new G(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new q,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Fn).x}get height(){return this.source.getSize(Fn).y}get depth(){return this.source.getSize(Fn).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){H(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){H(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Te:e.x-=Math.floor(e.x);break;case Ee:e.x=e.x<0?0:1;break;case De:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Te:e.y-=Math.floor(e.y);break;case Ee:e.y=e.y<0?0:1;break;case De:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};In.DEFAULT_IMAGE=null,In.DEFAULT_MAPPING=300,In.DEFAULT_ANISOTROPY=1;var Ln=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=W(this.x,e.x,t.x),this.y=W(this.y,e.y,t.y),this.z=W(this.z,e.z,t.z),this.w=W(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=W(this.x,e,t),this.y=W(this.y,e,t),this.z=W(this.z,e,t),this.w=W(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(W(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Rn=class extends dn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:je,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ln(0,0,e,t),this.scissorTest=!1,this.viewport=new Ln(0,0,e,t),this.textures=[];let r=new In({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:je,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Mn(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},zn=class extends Rn{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Bn=class extends In{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=Ee,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Vn=class extends In{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=Ee,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Hn=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Un.setFromMatrixColumn(e,0).length(),i=1/Un.setFromMatrixColumn(e,1).length(),a=1/Un.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Gn,e,Kn)}lookAt(e,t,n){let r=this.elements;return Yn.subVectors(e,t),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),qn.crossVectors(n,Yn),qn.lengthSq()===0&&(Math.abs(n.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),qn.crossVectors(n,Yn)),qn.normalize(),Jn.crossVectors(Yn,qn),r[0]=qn.x,r[4]=Jn.x,r[8]=Yn.x,r[1]=qn.y,r[5]=Jn.y,r[9]=Yn.y,r[2]=qn.z,r[6]=Jn.z,r[10]=Yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],ee=r[14],M=r[3],N=r[7],te=r[11],P=r[15];return i[0]=a*x+o*T+s*k+c*M,i[4]=a*S+o*E+s*A+c*N,i[8]=a*C+o*D+s*j+c*te,i[12]=a*w+o*O+s*ee+c*P,i[1]=l*x+u*T+d*k+f*M,i[5]=l*S+u*E+d*A+f*N,i[9]=l*C+u*D+d*j+f*te,i[13]=l*w+u*O+d*ee+f*P,i[2]=p*x+m*T+h*k+g*M,i[6]=p*S+m*E+h*A+g*N,i[10]=p*C+m*D+h*j+g*te,i[14]=p*w+m*O+h*ee+g*P,i[3]=_*x+v*T+y*k+b*M,i[7]=_*S+v*E+y*A+b*N,i[11]=_*C+v*D+y*j+b*te,i[15]=_*w+v*O+y*ee+b*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=Un.set(r[0],r[1],r[2]).length(),o=Un.set(r[4],r[5],r[6]).length(),s=Un.set(r[8],r[9],r[10]).length();i<0&&(a=-a),Wn.copy(this);let c=1/a,l=1/o,u=1/s;return Wn.elements[0]*=c,Wn.elements[1]*=c,Wn.elements[2]*=c,Wn.elements[4]*=l,Wn.elements[5]*=l,Wn.elements[6]*=l,Wn.elements[8]*=u,Wn.elements[9]*=u,Wn.elements[10]*=u,t.setFromRotationMatrix(Wn),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=$t,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=$t,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Un=new K,Wn=new Hn,Gn=new K(0,0,0),Kn=new K(1,1,1),qn=new K,Jn=new K,Yn=new K,Xn=new Hn,Zn=new bn,Qn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(W(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-W(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(W(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-W(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(W(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-W(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:H(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Xn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Zn.setFromEuler(this),this.setFromQuaternion(Zn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Qn.DEFAULT_ORDER=`XYZ`;var $n=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&(1<<e|0))}},er=0,tr=new K,nr=new bn,rr=new Hn,ir=new K,ar=new K,or=new K,sr=new bn,cr=new K(1,0,0),lr=new K(0,1,0),ur=new K(0,0,1),dr={type:`added`},fr={type:`removed`},pr={type:`childadded`,child:null},mr={type:`childremoved`,child:null},hr=class e extends dn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:er++}),this.uuid=hn(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new K,n=new Qn,r=new bn,i=new K(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Hn},normalMatrix:{value:new q}}),this.matrix=new Hn,this.matrixWorld=new Hn,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $n,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return nr.setFromAxisAngle(e,t),this.quaternion.multiply(nr),this}rotateOnWorldAxis(e,t){return nr.setFromAxisAngle(e,t),this.quaternion.premultiply(nr),this}rotateX(e){return this.rotateOnAxis(cr,e)}rotateY(e){return this.rotateOnAxis(lr,e)}rotateZ(e){return this.rotateOnAxis(ur,e)}translateOnAxis(e,t){return tr.copy(e).applyQuaternion(this.quaternion),this.position.add(tr.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(cr,e)}translateY(e){return this.translateOnAxis(lr,e)}translateZ(e){return this.translateOnAxis(ur,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(rr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ir.copy(e):ir.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rr.lookAt(ar,ir,this.up):rr.lookAt(ir,ar,this.up),this.quaternion.setFromRotationMatrix(rr),r&&(rr.extractRotation(r.matrixWorld),nr.setFromRotationMatrix(rr),this.quaternion.premultiply(nr.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(U(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(dr),pr.child=e,this.dispatchEvent(pr),pr.child=null):U(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fr),mr.child=e,this.dispatchEvent(mr),mr.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),rr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),rr.multiply(e.parent.matrixWorld)),e.applyMatrix4(rr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(dr),pr.child=e,this.dispatchEvent(pr),pr.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,e,or),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,sr,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};hr.DEFAULT_UP=new K(0,1,0),hr.DEFAULT_MATRIX_AUTO_UPDATE=!0,hr.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var gr=class extends hr{constructor(){super(),this.isGroup=!0,this.type=`Group`}},_r={type:`move`},vr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(_r)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new gr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},yr={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},br={h:0,s:0,l:0},xr={h:0,s:0,l:0};function Sr(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Y=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,J.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=J.workingColorSpace){return this.r=e,this.g=t,this.b=n,J.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=J.workingColorSpace){if(e=gn(e,1),t=W(t,0,1),n=W(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Sr(i,r,e+1/3),this.g=Sr(i,r,e),this.b=Sr(i,r,e-1/3)}return J.colorSpaceToWorking(this,r),this}setStyle(e,t=qt){function n(t){t!==void 0&&parseFloat(t)<1&&H(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:H(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);H(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qt){let n=yr[e.toLowerCase()];return n===void 0?H(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Dn(e.r),this.g=Dn(e.g),this.b=Dn(e.b),this}copyLinearToSRGB(e){return this.r=On(e.r),this.g=On(e.g),this.b=On(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qt){return J.workingToColorSpace(Cr.copy(this),e),Math.round(W(Cr.r*255,0,255))*65536+Math.round(W(Cr.g*255,0,255))*256+Math.round(W(Cr.b*255,0,255))}getHexString(e=qt){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=J.workingColorSpace){J.workingToColorSpace(Cr.copy(this),t);let n=Cr.r,r=Cr.g,i=Cr.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=J.workingColorSpace){return J.workingToColorSpace(Cr.copy(this),t),e.r=Cr.r,e.g=Cr.g,e.b=Cr.b,e}getStyle(e=qt){J.workingToColorSpace(Cr.copy(this),e);let t=Cr.r,n=Cr.g,r=Cr.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(br),this.setHSL(br.h+e,br.s+t,br.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(br),e.getHSL(xr);let n=_n(br.h,xr.h,t),r=_n(br.s,xr.s,t),i=_n(br.l,xr.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Cr=new Y;Y.NAMES=yr;var wr=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new Y(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Tr=class extends hr{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qn,this.environmentIntensity=1,this.environmentRotation=new Qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Er=new K,Dr=new K,Or=new K,kr=new K,Ar=new K,jr=new K,Mr=new K,Nr=new K,Pr=new K,Fr=new K,Ir=new Ln,Lr=new Ln,Rr=new Ln,zr=class e{constructor(e=new K,t=new K,n=new K){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Er.subVectors(e,t),r.cross(Er);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Er.subVectors(r,t),Dr.subVectors(n,t),Or.subVectors(e,t);let a=Er.dot(Er),o=Er.dot(Dr),s=Er.dot(Or),c=Dr.dot(Dr),l=Dr.dot(Or),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,kr)!==null&&kr.x>=0&&kr.y>=0&&kr.x+kr.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,kr)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,kr.x),s.addScaledVector(a,kr.y),s.addScaledVector(o,kr.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Ir.setScalar(0),Lr.setScalar(0),Rr.setScalar(0),Ir.fromBufferAttribute(e,t),Lr.fromBufferAttribute(e,n),Rr.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Ir,i.x),a.addScaledVector(Lr,i.y),a.addScaledVector(Rr,i.z),a}static isFrontFacing(e,t,n,r){return Er.subVectors(n,t),Dr.subVectors(e,t),Er.cross(Dr).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Er.subVectors(this.c,this.b),Dr.subVectors(this.a,this.b),Er.cross(Dr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Ar.subVectors(r,n),jr.subVectors(i,n),Nr.subVectors(e,n);let s=Ar.dot(Nr),c=jr.dot(Nr);if(s<=0&&c<=0)return t.copy(n);Pr.subVectors(e,r);let l=Ar.dot(Pr),u=jr.dot(Pr);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Ar,a);Fr.subVectors(e,i);let f=Ar.dot(Fr),p=jr.dot(Fr);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(jr,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Mr.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Mr,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Ar,a).addScaledVector(jr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Br=class{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Hr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Hr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Hr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Hr):Hr.fromBufferAttribute(r,t),Hr.applyMatrix4(e.matrixWorld),this.expandByPoint(Hr);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Ur.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Ur.copy(e.boundingBox)),Ur.applyMatrix4(e.matrixWorld),this.union(Ur)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hr),Hr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xr),Zr.subVectors(this.max,Xr),Wr.subVectors(e.a,Xr),Gr.subVectors(e.b,Xr),Kr.subVectors(e.c,Xr),qr.subVectors(Gr,Wr),Jr.subVectors(Kr,Gr),Yr.subVectors(Wr,Kr);let t=[0,-qr.z,qr.y,0,-Jr.z,Jr.y,0,-Yr.z,Yr.y,qr.z,0,-qr.x,Jr.z,0,-Jr.x,Yr.z,0,-Yr.x,-qr.y,qr.x,0,-Jr.y,Jr.x,0,-Yr.y,Yr.x,0];return!ei(t,Wr,Gr,Kr,Zr)||(t=[1,0,0,0,1,0,0,0,1],!ei(t,Wr,Gr,Kr,Zr))?!1:(Qr.crossVectors(qr,Jr),t=[Qr.x,Qr.y,Qr.z],ei(t,Wr,Gr,Kr,Zr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Vr=[new K,new K,new K,new K,new K,new K,new K,new K],Hr=new K,Ur=new Br,Wr=new K,Gr=new K,Kr=new K,qr=new K,Jr=new K,Yr=new K,Xr=new K,Zr=new K,Qr=new K,$r=new K;function ei(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){$r.fromArray(e,a);let o=i.x*Math.abs($r.x)+i.y*Math.abs($r.y)+i.z*Math.abs($r.z),s=t.dot($r),c=n.dot($r),l=r.dot($r);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var ti=new K,ni=new G,ri=0,ii=class extends dn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ri++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Qt,this.updateRanges=[],this.gpuType=Be,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ni.fromBufferAttribute(this,t),ni.applyMatrix3(e),this.setXY(t,ni.x,ni.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ti.fromBufferAttribute(this,t),ti.applyMatrix3(e),this.setXYZ(t,ti.x,ti.y,ti.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ti.fromBufferAttribute(this,t),ti.applyMatrix4(e),this.setXYZ(t,ti.x,ti.y,ti.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ti.fromBufferAttribute(this,t),ti.applyNormalMatrix(e),this.setXYZ(t,ti.x,ti.y,ti.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ti.fromBufferAttribute(this,t),ti.transformDirection(e),this.setXYZ(t,ti.x,ti.y,ti.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=vn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vn(t,this.array)),t}setX(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vn(t,this.array)),t}setY(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vn(t,this.array)),t}setW(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),n=yn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),n=yn(n,this.array),r=yn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),n=yn(n,this.array),r=yn(r,this.array),i=yn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},ai=class extends ii{constructor(e,t,n){super(new Uint16Array(e),t,n)}},oi=class extends ii{constructor(e,t,n){super(new Uint32Array(e),t,n)}},X=class extends ii{constructor(e,t,n){super(new Float32Array(e),t,n)}},si=new Br,ci=new K,li=new K,ui=class{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?si.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ci.subVectors(e,this.center);let t=ci.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(ci,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(li.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ci.copy(e.center).add(li)),this.expandByPoint(ci.copy(e.center).sub(li))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},di=0,fi=new Hn,pi=new hr,mi=new K,hi=new Br,gi=new Br,_i=new K,vi=class e extends dn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:di++}),this.uuid=hn(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(en(e)?oi:ai)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new q().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return fi.makeRotationFromQuaternion(e),this.applyMatrix4(fi),this}rotateX(e){return fi.makeRotationX(e),this.applyMatrix4(fi),this}rotateY(e){return fi.makeRotationY(e),this.applyMatrix4(fi),this}rotateZ(e){return fi.makeRotationZ(e),this.applyMatrix4(fi),this}translate(e,t,n){return fi.makeTranslation(e,t,n),this.applyMatrix4(fi),this}scale(e,t,n){return fi.makeScale(e,t,n),this.applyMatrix4(fi),this}lookAt(e){return pi.lookAt(e),pi.updateMatrix(),this.applyMatrix4(pi.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mi).negate(),this.translate(mi.x,mi.y,mi.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new X(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&H(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Br);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){U(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];hi.setFromBufferAttribute(n),this.morphTargetsRelative?(_i.addVectors(this.boundingBox.min,hi.min),this.boundingBox.expandByPoint(_i),_i.addVectors(this.boundingBox.max,hi.max),this.boundingBox.expandByPoint(_i)):(this.boundingBox.expandByPoint(hi.min),this.boundingBox.expandByPoint(hi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&U(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ui);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){U(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new K,1/0);return}if(e){let n=this.boundingSphere.center;if(hi.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];gi.setFromBufferAttribute(n),this.morphTargetsRelative?(_i.addVectors(hi.min,gi.min),hi.expandByPoint(_i),_i.addVectors(hi.max,gi.max),hi.expandByPoint(_i)):(hi.expandByPoint(gi.min),hi.expandByPoint(gi.max))}hi.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)_i.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(_i));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)_i.fromBufferAttribute(a,t),o&&(mi.fromBufferAttribute(e,t),_i.add(mi)),r=Math.max(r,n.distanceToSquared(_i))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&U(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){U(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new ii(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new K,s[e]=new K;let c=new K,l=new K,u=new K,d=new G,f=new G,p=new G,m=new K,h=new K;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new K,y=new K,b=new K,x=new K;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new ii(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new K,i=new K,a=new K,o=new K,s=new K,c=new K,l=new K,u=new K;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_i.fromBufferAttribute(e,t),_i.normalize(),e.setXYZ(t,_i.x,_i.y,_i.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new ii(a,r,i)}if(this.index===null)return H(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},yi=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=Qt,this.updateRanges=[],this.version=0,this.uuid=hn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},bi=new K,xi=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)bi.fromBufferAttribute(this,t),bi.applyMatrix4(e),this.setXYZ(t,bi.x,bi.y,bi.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bi.fromBufferAttribute(this,t),bi.applyNormalMatrix(e),this.setXYZ(t,bi.x,bi.y,bi.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bi.fromBufferAttribute(this,t),bi.transformDirection(e),this.setXYZ(t,bi.x,bi.y,bi.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=vn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yn(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=yn(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=yn(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=yn(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=yn(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=vn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=vn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=vn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=vn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=yn(t,this.array),n=yn(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=yn(t,this.array),n=yn(n,this.array),r=yn(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=yn(t,this.array),n=yn(n,this.array),r=yn(r,this.array),i=yn(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){on(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new ii(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){on(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Si=new K,Ci=new K,wi=new q,Ti=class{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Si.subVectors(n,t).cross(Ci.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Si),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||wi.getNormalMatrix(e),r=this.coplanarPoint(Si).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Ei=0,Di=class extends dn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ei++}),this.uuid=hn(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Y(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zt,this.stencilZFail=Zt,this.stencilZPass=Zt,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){H(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){H(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Y().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Ti().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new G().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new G().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Oi=class extends Di{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new Y(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ki,Ai=new K,ji=new K,Mi=new K,Ni=new G,Pi=new G,Fi=new Hn,Ii=new K,Li=new K,Ri=new K,zi=new G,Bi=new G,Vi=new G,Hi=class extends hr{constructor(e=new Oi){if(super(),this.isSprite=!0,this.type=`Sprite`,ki===void 0){ki=new vi;let e=new yi(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);ki.setIndex([0,1,2,0,2,3]),ki.setAttribute(`position`,new xi(e,3,0,!1)),ki.setAttribute(`uv`,new xi(e,2,3,!1))}this.geometry=ki,this.material=e,this.center=new G(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&U(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),ji.setFromMatrixScale(this.matrixWorld),Fi.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Mi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ji.multiplyScalar(-Mi.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;Ui(Ii.set(-.5,-.5,0),Mi,a,ji,r,i),Ui(Li.set(.5,-.5,0),Mi,a,ji,r,i),Ui(Ri.set(.5,.5,0),Mi,a,ji,r,i),zi.set(0,0),Bi.set(1,0),Vi.set(1,1);let o=e.ray.intersectTriangle(Ii,Li,Ri,!1,Ai);if(o===null&&(Ui(Li.set(-.5,.5,0),Mi,a,ji,r,i),Bi.set(0,1),o=e.ray.intersectTriangle(Ii,Ri,Li,!1,Ai),o===null))return;let s=e.ray.origin.distanceTo(Ai);s<e.near||s>e.far||t.push({distance:s,point:Ai.clone(),uv:zr.getInterpolation(Ai,Ii,Li,Ri,zi,Bi,Vi,new G),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ui(e,t,n,r,i,a){Ni.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?Pi.copy(Ni):(Pi.x=a*Ni.x-i*Ni.y,Pi.y=i*Ni.x+a*Ni.y),e.copy(t),e.x+=Pi.x,e.y+=Pi.y,e.applyMatrix4(Fi)}var Wi=new K,Gi=new K,Ki=new K,qi=new K,Ji=class{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Wi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wi.copy(this.origin).addScaledVector(this.direction,t),Wi.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Gi.copy(e).add(t).multiplyScalar(.5),Ki.copy(t).sub(e).normalize(),qi.copy(this.origin).sub(Gi);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Ki),o=qi.dot(this.direction),s=-qi.dot(Ki),c=qi.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Gi).addScaledVector(Ki,d),f}intersectSphere(e,t){if(e.radius<0)return null;Wi.subVectors(e.center,this.origin);let n=Wi.dot(this.direction),r=Wi.dot(Wi)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Wi)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,ee,M;if(y>=b&&y>=x?(w=s,D=u,A=p,M=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,ee=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,ee=_)):b>=x?(w=c,D=d,A=m,M=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,ee=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,ee=v)):(w=l,D=f,A=h,M=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,ee=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,ee=g)),w===0)return null;let N=S/w,te=C/w,P=1/w,ne=T-N*D,re=E-te*D,ie=O-N*A,ae=k-te*A,F=j-N*M,oe=ee-te*M,I=F*ae-oe*ie,se=ne*oe-re*F,ce=ie*re-ae*ne;if(r){if(I<0||se<0||ce<0)return null}else if((I<0||se<0||ce<0)&&(I>0||se>0||ce>0))return null;let le=I+se+ce;if(le===0)return null;let L=P*(I*D+se*A+ce*M);return(le>0?L<0:L>0)?null:this.at(L/le,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Yi=class extends Di{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new Y(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Xi=new Hn,Zi=new Ji,Qi=new ui,$i=new K,ea=new K,ta=new K,na=new K,ra=new K,ia=new K,aa=new K,oa=new K,sa=class extends hr{constructor(e=new vi,t=new Yi){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){ia.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(ra.fromBufferAttribute(s,e),a?ia.addScaledVector(ra,r):ia.addScaledVector(ra.sub(t),r))}t.add(ia)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qi.copy(n.boundingSphere),Qi.applyMatrix4(i),Zi.copy(e.ray).recast(e.near),!(Qi.containsPoint(Zi.origin)===!1&&(Zi.intersectSphere(Qi,$i)===null||Zi.origin.distanceToSquared($i)>(e.far-e.near)**2))&&(Xi.copy(i).invert(),Zi.copy(e.ray).applyMatrix4(Xi),(n.boundingBox===null||Zi.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Zi)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=la(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=la(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=la(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=la(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function ca(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;oa.copy(s),oa.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(oa);return l<n.near||l>n.far?null:{distance:l,point:oa.clone(),object:e}}function la(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,ea),e.getVertexPosition(c,ta),e.getVertexPosition(l,na);let u=ca(e,t,n,r,ea,ta,na,aa);if(u){let e=new K;zr.getBarycoord(aa,ea,ta,na,e),i&&(u.uv=zr.getInterpolatedAttribute(i,s,c,l,e,new G)),a&&(u.uv1=zr.getInterpolatedAttribute(a,s,c,l,e,new G)),o&&(u.normal=zr.getInterpolatedAttribute(o,s,c,l,e,new K),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new K,materialIndex:0};zr.getNormal(ea,ta,na,t.normal),u.face=t,u.barycoord=e}return u}var ua=class extends In{constructor(e=null,t=1,n=1,r,i,a,o,s,c=Oe,l=Oe,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},da=new ui,fa=new G(.5,.5),pa=new K,ma=class{constructor(e=new Ti,t=new Ti,n=new Ti,r=new Ti,i=new Ti,a=new Ti){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=$t,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),da.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),da.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(da)}intersectsSprite(e){return da.center.set(0,0,0),da.radius=.7071067811865476+fa.distanceTo(e.center),da.applyMatrix4(e.matrixWorld),this.intersectsSphere(da)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(pa.x=r.normal.x>0?e.max.x:e.min.x,pa.y=r.normal.y>0?e.max.y:e.min.y,pa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(pa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ha=class extends Di{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new Y(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ga=new K,_a=new K,va=new Hn,ya=new Ji,ba=new ui,xa=new K,Sa=new K,Ca=class extends hr{constructor(e=new vi,t=new ha){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)ga.fromBufferAttribute(t,e-1),_a.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=ga.distanceTo(_a);e.setAttribute(`lineDistance`,new X(n,1))}else H(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ba.copy(n.boundingSphere),ba.applyMatrix4(r),ba.radius+=i,e.ray.intersectsSphere(ba)===!1)return;va.copy(r).invert(),ya.copy(e.ray).applyMatrix4(va);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=wa(this,e,ya,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=wa(this,e,ya,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=wa(this,e,ya,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=wa(this,e,ya,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function wa(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(ga.fromBufferAttribute(s,i),_a.fromBufferAttribute(s,a),n.distanceSqToSegment(ga,_a,xa,Sa)>r)return;xa.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(xa);if(!(c<t.near||c>t.far))return{distance:c,point:Sa.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var Ta=new K,Ea=new K,Da=class extends Ca{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)Ta.fromBufferAttribute(t,e),Ea.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+Ta.distanceTo(Ea);e.setAttribute(`lineDistance`,new X(n,1))}else H(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},Oa=class extends In{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ka=class extends In{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Aa=class extends In{constructor(e,t,n=ze,r,i,a,o=Oe,s=Oe,c,l=Xe,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Mn(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ja=class extends Aa{constructor(e,t=ze,n=301,r,i,a=Oe,o=Oe,s,c=Xe){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ma=class extends In{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Na=class e extends vi{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new X(c,3)),this.setAttribute(`normal`,new X(l,3)),this.setAttribute(`uv`,new X(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new K;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Pa=class e extends vi{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new X(u,3)),this.setAttribute(`normal`,new X(d,3)),this.setAttribute(`uv`,new X(f,2));function _(){let a=new K,_=new K,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new G,m=new K,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Fa=class e extends Pa{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ia=class e extends vi{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new X(i,3)),this.setAttribute(`normal`,new X(i.slice(),3)),this.setAttribute(`uv`,new X(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new K,r=new K,i=new K;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new K;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new K;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new K,t=new K,n=new K,r=new K,o=new G,s=new G,c=new G;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},La=new K,Ra=new K,za=new K,Ba=new zr,Va=class extends vi{constructor(e=null,t=1){if(super(),this.type=`EdgesGeometry`,this.parameters={geometry:e,thresholdAngle:t},e!==null){let n=1e4,r=Math.cos(pn*t),i=e.getIndex(),a=e.getAttribute(`position`),o=i?i.count:a.count,s=[0,0,0],c=[`a`,`b`,`c`],l=[,,,],u={},d=[];for(let e=0;e<o;e+=3){i?(s[0]=i.getX(e),s[1]=i.getX(e+1),s[2]=i.getX(e+2)):(s[0]=e,s[1]=e+1,s[2]=e+2);let{a:t,b:o,c:f}=Ba;if(t.fromBufferAttribute(a,s[0]),o.fromBufferAttribute(a,s[1]),f.fromBufferAttribute(a,s[2]),Ba.getNormal(za),l[0]=`${Math.round(t.x*n)},${Math.round(t.y*n)},${Math.round(t.z*n)}`,l[1]=`${Math.round(o.x*n)},${Math.round(o.y*n)},${Math.round(o.z*n)}`,l[2]=`${Math.round(f.x*n)},${Math.round(f.y*n)},${Math.round(f.z*n)}`,l[0]!==l[1]&&l[1]!==l[2]&&l[2]!==l[0])for(let e=0;e<3;e++){let t=(e+1)%3,n=l[e],i=l[t],a=Ba[c[e]],o=Ba[c[t]],f=`${n}_${i}`,p=`${i}_${n}`;p in u&&u[p]?(za.dot(u[p].normal)<=r&&(d.push(a.x,a.y,a.z),d.push(o.x,o.y,o.z)),u[p]=null):f in u||(u[f]={index0:s[e],index1:s[t],normal:za.clone()})}}for(let e in u)if(u[e]){let{index0:t,index1:n}=u[e];La.fromBufferAttribute(a,t),Ra.fromBufferAttribute(a,n),d.push(La.x,La.y,La.z),d.push(Ra.x,Ra.y,Ra.z)}this.setAttribute(`position`,new X(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Ha=class e extends Ia{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type=`OctahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Ua=class e extends vi{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new X(p,3)),this.setAttribute(`normal`,new X(m,3)),this.setAttribute(`uv`,new X(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Wa=class e extends vi{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new K,p=new G;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new X(s,3)),this.setAttribute(`normal`,new X(c,3)),this.setAttribute(`uv`,new X(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Ga=class e extends vi{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new K,d=new K,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new X(p,3)),this.setAttribute(`normal`,new X(m,3)),this.setAttribute(`uv`,new X(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Ka=class e extends vi{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new K,f=new K,p=new K;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new X(c,3)),this.setAttribute(`normal`,new X(l,3)),this.setAttribute(`uv`,new X(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function qa(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Ya(i))i.isRenderTargetTexture?(H(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(Ya(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function Ja(e){let t={};for(let n=0;n<e.length;n++){let r=qa(e[n]);for(let e in r)t[e]=r[e]}return t}function Ya(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Xa(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Za(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:J.workingColorSpace}var Qa={clone:qa,merge:Ja},$a=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,eo=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,to=class extends Di{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$a,this.fragmentShader=eo,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qa(e.uniforms),this.uniformsGroups=Xa(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new Y().setHex(r.value);break;case`v2`:this.uniforms[n].value=new G().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new K().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Ln().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new q().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new Hn().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},no=class extends to{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},ro=class extends Di{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Kt,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},io=class extends Di{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ao(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function oo(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var so=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},co=class extends so{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ut,endingEnd:Ut}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Wt:i=e,o=2*t-n;break;case Gt:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Wt:a=e,s=2*n-t;break;case Gt:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},lo=class extends so{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},uo=class extends so{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},fo=class extends so{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=ho(n,t,g,y,r);i[p]=po(x,o,_,b,m)}return i}};function po(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function mo(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function ho(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=po(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=mo(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var go=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=ao(t,this.TimeBufferType),this.values=ao(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ao(e.times,Array),values:ao(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),oo(e.settings)&&(n.settings={inTangents:ao(e.settings.inTangents,Array),outTangents:ao(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new uo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new lo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new co(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new fo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case zt:t=this.InterpolantFactoryMethodDiscrete;break;case Bt:t=this.InterpolantFactoryMethodLinear;break;case Vt:t=this.InterpolantFactoryMethodSmooth;break;case Ht:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return H(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return zt;case this.InterpolantFactoryMethodLinear:return Bt;case this.InterpolantFactoryMethodSmooth:return Vt;case this.InterpolantFactoryMethodBezier:return Ht}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;oo(this.settings)&&(_o(this.settings.inTangents,e),_o(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(U(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(U(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){U(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){U(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&tn(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){U(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Vt,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,oo(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function _o(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}go.prototype.ValueTypeName=``,go.prototype.TimeBufferType=Float32Array,go.prototype.ValueBufferType=Float32Array,go.prototype.DefaultInterpolation=Bt;var vo=class extends go{constructor(e,t,n){super(e,t,n)}};vo.prototype.ValueTypeName=`bool`,vo.prototype.ValueBufferType=Array,vo.prototype.DefaultInterpolation=zt,vo.prototype.InterpolantFactoryMethodLinear=void 0,vo.prototype.InterpolantFactoryMethodSmooth=void 0;var yo=class extends go{constructor(e,t,n,r){super(e,t,n,r)}};yo.prototype.ValueTypeName=`color`;var bo=class extends go{constructor(e,t,n,r){super(e,t,n,r)}};bo.prototype.ValueTypeName=`number`;var xo=class extends so{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)bn.slerpFlat(i,0,a,c-o,a,c,s);return i}},So=class extends go{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new xo(this.times,this.values,this.getValueSize(),e)}};So.prototype.ValueTypeName=`quaternion`,So.prototype.InterpolantFactoryMethodSmooth=void 0;var Co=class extends go{constructor(e,t,n){super(e,t,n)}};Co.prototype.ValueTypeName=`string`,Co.prototype.ValueBufferType=Array,Co.prototype.DefaultInterpolation=zt,Co.prototype.InterpolantFactoryMethodLinear=void 0,Co.prototype.InterpolantFactoryMethodSmooth=void 0;var wo=class extends go{constructor(e,t,n,r){super(e,t,n,r)}};wo.prototype.ValueTypeName=`vector`;var To=new K,Eo=new bn,Do=new K,Oo=class extends hr{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Hn,this.projectionMatrix=new Hn,this.projectionMatrixInverse=new Hn,this.coordinateSystem=$t,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(To,Eo,Do),Do.x===1&&Do.y===1&&Do.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(To,Eo,Do.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(To,Eo,Do),Do.x===1&&Do.y===1&&Do.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(To,Eo,Do.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ko=new K,Ao=new G,jo=new G,Mo=class extends Oo{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=mn*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(pn*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return mn*2*Math.atan(Math.tan(pn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ko.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ko.x,ko.y).multiplyScalar(-e/ko.z),ko.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ko.x,ko.y).multiplyScalar(-e/ko.z)}getViewSize(e,t){return this.getViewBounds(e,Ao,jo),t.subVectors(jo,Ao)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(pn*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},No=class extends Oo{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Po=-90,Fo=1,Io=class extends hr{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Mo(Po,Fo,e,t);r.layers=this.layers,this.add(r);let i=new Mo(Po,Fo,e,t);i.layers=this.layers,this.add(i);let a=new Mo(Po,Fo,e,t);a.layers=this.layers,this.add(a);let o=new Mo(Po,Fo,e,t);o.layers=this.layers,this.add(o);let s=new Mo(Po,Fo,e,t);s.layers=this.layers,this.add(s);let c=new Mo(Po,Fo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Lo=class extends Mo{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Ro=`\\[\\]\\.:\\/`,zo=RegExp(`[\\[\\]\\.:\\/]`,`g`),Bo=`[^\\[\\]\\.:\\/]`,Vo=`[^`+Ro.replace(`\\.`,``)+`]`,Ho=`((?:WC+[\\/:])*)`.replace(`WC`,Bo),Uo=`(WCOD+)?`.replace(`WCOD`,Vo),Wo=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Bo),Go=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Bo),Ko=RegExp(`^`+Ho+Uo+Wo+Go+`$`),qo=[`material`,`materials`,`bones`,`map`],Jo=class{constructor(e,t,n){let r=n||Yo.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Yo=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(zo,``)}static parseTrackName(e){let t=Ko.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);qo.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){H(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){U(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){U(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){U(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){U(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){U(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){U(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){U(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;U(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){U(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){U(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Yo.Composite=Jo,Yo.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Yo.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Yo.prototype.GetterByBindingType=[Yo.prototype._getValue_direct,Yo.prototype._getValue_array,Yo.prototype._getValue_arrayElement,Yo.prototype._getValue_toArray],Yo.prototype.SetterByBindingTypeAndVersioning=[[Yo.prototype._setValue_direct,Yo.prototype._setValue_direct_setNeedsUpdate,Yo.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Yo.prototype._setValue_array,Yo.prototype._setValue_array_setNeedsUpdate,Yo.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Yo.prototype._setValue_arrayElement,Yo.prototype._setValue_arrayElement_setNeedsUpdate,Yo.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Yo.prototype._setValue_fromArray,Yo.prototype._setValue_fromArray_setNeedsUpdate,Yo.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Xo=new Hn,Zo=class{constructor(e,t,n=0,r=1/0){this.ray=new Ji(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new $n,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):U(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return Xo.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Xo),this}intersectObject(e,t=!0,n=[]){return $o(e,this,n,t),n.sort(Qo),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)$o(e[r],this,n,t);return n.sort(Qo),n}};function Qo(e,t){return e.distance-t.distance}function $o(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)$o(r[e],t,n,!0)}}(class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});var es=class extends Da{constructor(e=10,t=10,n=4473924,r=8947848){n=new Y(n),r=new Y(r);let i=t/2,a=e/t,o=e/2,s=[],c=[];for(let e=0,l=0,u=-o;e<=t;e++,u+=a){s.push(-o,0,u,o,0,u),s.push(u,0,-o,u,0,o);let t=e===i?n:r;t.toArray(c,l),l+=3,t.toArray(c,l),l+=3,t.toArray(c,l),l+=3,t.toArray(c,l),l+=3}let l=new vi;l.setAttribute(`position`,new X(s,3)),l.setAttribute(`color`,new X(c,3));let u=new ha({vertexColors:!0,toneMapped:!1});super(l,u),this.type=`GridHelper`}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};function ts(e,t,n,r){let i=ns(r);switch(n){case qe:return e*t;case Qe:return e*t/i.components*i.byteLength;case $e:return e*t/i.components*i.byteLength;case et:return e*t*2/i.components*i.byteLength;case tt:return e*t*2/i.components*i.byteLength;case Je:return e*t*3/i.components*i.byteLength;case Ye:return e*t*4/i.components*i.byteLength;case nt:return e*t*4/i.components*i.byteLength;case rt:case it:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case at:case ot:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ct:case ut:return Math.max(e,16)*Math.max(t,8)/4;case st:case lt:return Math.max(e,8)*Math.max(t,8)/2;case dt:case ft:case mt:case ht:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case pt:case gt:case _t:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case vt:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case yt:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case bt:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case xt:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case St:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Ct:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case wt:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Tt:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Et:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Dt:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Ot:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case kt:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case At:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case jt:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Mt:case Nt:case Pt:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Ft:case It:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Lt:case Rt:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function ns(e){switch(e){case Pe:case Fe:return{byteLength:1,components:1};case Le:case Ie:case Ve:return{byteLength:2,components:1};case He:case Ue:return{byteLength:2,components:4};case ze:case Re:case Be:return{byteLength:4,components:1};case Ge:case Ke:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?H(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function rs(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function is(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Z={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},Q={common:{diffuse:{value:new Y(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new q},alphaMap:{value:null},alphaMapTransform:{value:new q},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new q}},envmap:{envMap:{value:null},envMapRotation:{value:new q},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new q}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new q}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new q},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new q},normalScale:{value:new G(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new q},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new q}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new q}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new q}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Y(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new K},probesMax:{value:new K},probesResolution:{value:new K}},points:{diffuse:{value:new Y(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new q},alphaTest:{value:0},uvTransform:{value:new q}},sprite:{diffuse:{value:new Y(16777215)},opacity:{value:1},center:{value:new G(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new q},alphaMap:{value:null},alphaMapTransform:{value:new q},alphaTest:{value:0}}},as={basic:{uniforms:Ja([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.fog]),vertexShader:Z.meshbasic_vert,fragmentShader:Z.meshbasic_frag},lambert:{uniforms:Ja([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,Q.lights,{emissive:{value:new Y(0)},envMapIntensity:{value:1}}]),vertexShader:Z.meshlambert_vert,fragmentShader:Z.meshlambert_frag},phong:{uniforms:Ja([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,Q.lights,{emissive:{value:new Y(0)},specular:{value:new Y(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Z.meshphong_vert,fragmentShader:Z.meshphong_frag},standard:{uniforms:Ja([Q.common,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.roughnessmap,Q.metalnessmap,Q.fog,Q.lights,{emissive:{value:new Y(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Z.meshphysical_vert,fragmentShader:Z.meshphysical_frag},toon:{uniforms:Ja([Q.common,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.gradientmap,Q.fog,Q.lights,{emissive:{value:new Y(0)}}]),vertexShader:Z.meshtoon_vert,fragmentShader:Z.meshtoon_frag},matcap:{uniforms:Ja([Q.common,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,{matcap:{value:null}}]),vertexShader:Z.meshmatcap_vert,fragmentShader:Z.meshmatcap_frag},points:{uniforms:Ja([Q.points,Q.fog]),vertexShader:Z.points_vert,fragmentShader:Z.points_frag},dashed:{uniforms:Ja([Q.common,Q.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Z.linedashed_vert,fragmentShader:Z.linedashed_frag},depth:{uniforms:Ja([Q.common,Q.displacementmap]),vertexShader:Z.depth_vert,fragmentShader:Z.depth_frag},normal:{uniforms:Ja([Q.common,Q.bumpmap,Q.normalmap,Q.displacementmap,{opacity:{value:1}}]),vertexShader:Z.meshnormal_vert,fragmentShader:Z.meshnormal_frag},sprite:{uniforms:Ja([Q.sprite,Q.fog]),vertexShader:Z.sprite_vert,fragmentShader:Z.sprite_frag},background:{uniforms:{uvTransform:{value:new q},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Z.background_vert,fragmentShader:Z.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new q}},vertexShader:Z.backgroundCube_vert,fragmentShader:Z.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Z.cube_vert,fragmentShader:Z.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Z.equirect_vert,fragmentShader:Z.equirect_frag},distance:{uniforms:Ja([Q.common,Q.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Z.distance_vert,fragmentShader:Z.distance_frag},shadow:{uniforms:Ja([Q.lights,Q.fog,{color:{value:new Y(0)},opacity:{value:1}}]),vertexShader:Z.shadow_vert,fragmentShader:Z.shadow_frag}};as.physical={uniforms:Ja([as.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new q},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new q},clearcoatNormalScale:{value:new G(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new q},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new q},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new q},sheen:{value:0},sheenColor:{value:new Y(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new q},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new q},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new q},transmissionSamplerSize:{value:new G},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new q},attenuationDistance:{value:0},attenuationColor:{value:new Y(0)},specularColor:{value:new Y(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new q},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new q},anisotropyVector:{value:new G},anisotropyMap:{value:null},anisotropyMapTransform:{value:new q}}]),vertexShader:Z.meshphysical_vert,fragmentShader:Z.meshphysical_frag};var os={r:0,b:0,g:0},ss=new Hn,cs=new q;cs.set(-1,0,0,0,1,0,0,0,1);function ls(e,t,n,r,i,a){let o=new Y(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new sa(new Na(1,1,1),new to({name:`BackgroundCubeMaterial`,uniforms:qa(as.backgroundCube.uniforms),vertexShader:as.backgroundCube.vertexShader,fragmentShader:as.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(ss.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(cs),l.material.toneMapped=J.getTransfer(i.colorSpace)!==Xt,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new sa(new Ua(2,2),new to({name:`BackgroundMaterial`,uniforms:qa(as.background.uniforms),vertexShader:as.background.vertexShader,fragmentShader:as.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=J.getTransfer(i.colorSpace)!==Xt,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(os,Za(e)),n.buffers.color.setClear(os.r,os.g,os.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function us(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function ds(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function fs(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(H(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&H(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function ps(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Ti,s=new q,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var ms=4,hs=6,gs=20,_s=256,vs=new No,ys=new Y,bs=null,xs=0,Ss=0,Cs=!1,ws=new K,Ts=new K,Es=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=ws}=i;bs=this._renderer.getRenderTarget(),xs=this._renderer.getActiveCubeFace(),Ss=this._renderer.getActiveMipmapLevel(),Cs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ns(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ms(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(bs,xs,Ss),this._renderer.xr.enabled=Cs,e.scissorTest=!1,ks(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bs=this._renderer.getRenderTarget(),xs=this._renderer.getActiveCubeFace(),Ss=this._renderer.getActiveMipmapLevel(),Cs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:je,minFilter:je,generateMipmaps:!1,type:Ve,format:Ye,colorSpace:Jt,depthBuffer:!1},r=Os(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Os(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Ds(r)),this._blurMaterial=js(r,e,t),this._ggxMaterial=As(r,e,t)}return r}_compileMaterial(e){let t=new sa(new vi,e);this._renderer.compile(t,vs)}_sceneToCubeUV(e,t,n,r,i){let a=new Mo(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(ys),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new sa(new Na,new Yi({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(ys),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;ks(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ns()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ms());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;ks(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,vs)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-ms?n-d+ms:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,ks(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,vs),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,ks(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,vs)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];ks(t,3*l*(r>this._lodMax-ms?r-this._lodMax+ms:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,vs)}};function Ds(e){let t=[],n=[],r=e,i=e-ms+1+hs;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?Ts.set(1,r,n):e===1?Ts.set(-n,1,-r):e===2?Ts.set(-n,r,1):e===3?Ts.set(-1,r,-n):e===4?Ts.set(-n,-1,r):Ts.set(n,r,-1),Ts.toArray(l,(e*6+t)*3)}}let u=new vi;u.setAttribute(`position`,new ii(c,3)),u.setAttribute(`outputDirection`,new ii(l,3)),n.push(new sa(u,null)),r>ms&&r--}return{lodMeshes:n,sizeLods:t}}function Os(e,t,n){let r=new zn(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function ks(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function As(e,t,n){return new to({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:_s,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ps(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function js(e,t,n){return new to({name:`SphericalGaussianBlur`,defines:{SAMPLES:gs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ps(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ms(){return new to({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Ps(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ns(){return new to({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ps(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ps(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Fs=class extends zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Oa(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Na(5,5,5),i=new to({name:`CubemapFromEquirect`,uniforms:qa(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new sa(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=je),new Io(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function Is(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Fs(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Es(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Es(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Ls(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&cn(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Rs(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?oi:ai)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function zs(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Bs(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:U(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Vs(e,t,n){let r=new WeakMap,i=new Ln;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new Bn(h,p,m,u);g.type=Be,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new G(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Hs(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Us={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Ws(e,t,n,r,i,a){let o=new zn(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new vi;l.setAttribute(`position`,new X([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new X([0,2,0,0,2,0],2));let u=new no({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new sa(l,u),f=new No(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,_=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;v.length>0&&s===null&&(s=new zn(t,n,{type:Ve,depthBuffer:!1,stencilBuffer:!1}),c=new zn(t,n,{type:Ve,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},J.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=Us[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(d,f),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Gs=new In,Ks=new Aa(1,1),qs=new Bn,Js=new Vn,Ys=new Oa,Xs=[],Zs=[],Qs=new Float32Array(16),$s=new Float32Array(9),ec=new Float32Array(4);function tc(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Xs[i];if(a===void 0&&(a=new Float32Array(i),Xs[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function nc(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function rc(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function ic(e,t){let n=Zs[t];n===void 0&&(n=new Int32Array(t),Zs[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function ac(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function oc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(nc(n,t))return;e.uniform2fv(this.addr,t),rc(n,t)}}function sc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(nc(n,t))return;e.uniform3fv(this.addr,t),rc(n,t)}}function cc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(nc(n,t))return;e.uniform4fv(this.addr,t),rc(n,t)}}function lc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(nc(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),rc(n,t)}else{if(nc(n,r))return;ec.set(r),e.uniformMatrix2fv(this.addr,!1,ec),rc(n,r)}}function uc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(nc(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),rc(n,t)}else{if(nc(n,r))return;$s.set(r),e.uniformMatrix3fv(this.addr,!1,$s),rc(n,r)}}function dc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(nc(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),rc(n,t)}else{if(nc(n,r))return;Qs.set(r),e.uniformMatrix4fv(this.addr,!1,Qs),rc(n,r)}}function fc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function pc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(nc(n,t))return;e.uniform2iv(this.addr,t),rc(n,t)}}function mc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(nc(n,t))return;e.uniform3iv(this.addr,t),rc(n,t)}}function hc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(nc(n,t))return;e.uniform4iv(this.addr,t),rc(n,t)}}function gc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function _c(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(nc(n,t))return;e.uniform2uiv(this.addr,t),rc(n,t)}}function vc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(nc(n,t))return;e.uniform3uiv(this.addr,t),rc(n,t)}}function yc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(nc(n,t))return;e.uniform4uiv(this.addr,t),rc(n,t)}}function bc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Ks.compareFunction=n.isReversedDepthBuffer()?518:515,a=Ks):a=Gs,n.setTexture2D(t||a,i)}function xc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Js,i)}function Sc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Ys,i)}function Cc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||qs,i)}function wc(e){switch(e){case 5126:return ac;case 35664:return oc;case 35665:return sc;case 35666:return cc;case 35674:return lc;case 35675:return uc;case 35676:return dc;case 5124:case 35670:return fc;case 35667:case 35671:return pc;case 35668:case 35672:return mc;case 35669:case 35673:return hc;case 5125:return gc;case 36294:return _c;case 36295:return vc;case 36296:return yc;case 35678:case 36198:case 36298:case 36306:case 35682:return bc;case 35679:case 36299:case 36307:return xc;case 35680:case 36300:case 36308:case 36293:return Sc;case 36289:case 36303:case 36311:case 36292:return Cc}}function Tc(e,t){e.uniform1fv(this.addr,t)}function Ec(e,t){let n=tc(t,this.size,2);e.uniform2fv(this.addr,n)}function Dc(e,t){let n=tc(t,this.size,3);e.uniform3fv(this.addr,n)}function Oc(e,t){let n=tc(t,this.size,4);e.uniform4fv(this.addr,n)}function kc(e,t){let n=tc(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Ac(e,t){let n=tc(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function jc(e,t){let n=tc(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Mc(e,t){e.uniform1iv(this.addr,t)}function Nc(e,t){e.uniform2iv(this.addr,t)}function Pc(e,t){e.uniform3iv(this.addr,t)}function Fc(e,t){e.uniform4iv(this.addr,t)}function Ic(e,t){e.uniform1uiv(this.addr,t)}function Lc(e,t){e.uniform2uiv(this.addr,t)}function Rc(e,t){e.uniform3uiv(this.addr,t)}function zc(e,t){e.uniform4uiv(this.addr,t)}function Bc(e,t,n){let r=this.cache,i=t.length,a=ic(n,i);nc(r,a)||(e.uniform1iv(this.addr,a),rc(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Ks:Gs;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Vc(e,t,n){let r=this.cache,i=t.length,a=ic(n,i);nc(r,a)||(e.uniform1iv(this.addr,a),rc(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Js,a[e])}function Hc(e,t,n){let r=this.cache,i=t.length,a=ic(n,i);nc(r,a)||(e.uniform1iv(this.addr,a),rc(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Ys,a[e])}function Uc(e,t,n){let r=this.cache,i=t.length,a=ic(n,i);nc(r,a)||(e.uniform1iv(this.addr,a),rc(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||qs,a[e])}function Wc(e){switch(e){case 5126:return Tc;case 35664:return Ec;case 35665:return Dc;case 35666:return Oc;case 35674:return kc;case 35675:return Ac;case 35676:return jc;case 5124:case 35670:return Mc;case 35667:case 35671:return Nc;case 35668:case 35672:return Pc;case 35669:case 35673:return Fc;case 5125:return Ic;case 36294:return Lc;case 36295:return Rc;case 36296:return zc;case 35678:case 36198:case 36298:case 36306:case 35682:return Bc;case 35679:case 36299:case 36307:return Vc;case 35680:case 36300:case 36308:case 36293:return Hc;case 36289:case 36303:case 36311:case 36292:return Uc}}var Gc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=wc(t.type)}},Kc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Wc(t.type)}},qc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Jc=/(\w+)(\])?(\[|\.)?/g;function Yc(e,t){e.seq.push(t),e.map[t.id]=t}function Xc(e,t,n){let r=e.name,i=r.length;for(Jc.lastIndex=0;;){let a=Jc.exec(r),o=Jc.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Yc(n,l===void 0?new Gc(s,e,t):new Kc(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new qc(s),Yc(n,e)),n=e}}}var Zc=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Xc(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Qc(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var $c=37297,el=0;function tl(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var nl=new q;function rl(e){J._getMatrix(nl,J.workingColorSpace,e);let t=`mat3( ${nl.elements.map(e=>e.toFixed(4))} )`;switch(J.getTransfer(e)){case Yt:return[t,`LinearTransferOETF`];case Xt:return[t,`sRGBTransferOETF`];default:return H(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function il(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+tl(e.getShaderSource(t),r)}return i}function al(e,t){let n=rl(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var ol={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function sl(e,t){let n=ol[t];return n===void 0?(H(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var cl=new K;function ll(){return J.getLuminanceCoefficients(cl),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${cl.x.toFixed(4)}, ${cl.y.toFixed(4)}, ${cl.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function ul(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(pl).join(`
`)}function dl(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function fl(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function pl(e){return e!==``}function ml(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hl(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var gl=/^[ \t]*#include +<([\w\d./]+)>/gm;function _l(e){return e.replace(gl,yl)}var vl=new Map;function yl(e,t){let n=Z[t];if(n===void 0){let e=vl.get(t);if(e!==void 0)n=Z[e],H(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return _l(n)}var bl=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xl(e){return e.replace(bl,Sl)}function Sl(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Cl(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var wl={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Tl(e){return wl[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var El={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function Dl(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:El[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var Ol={302:`ENVMAP_MODE_REFRACTION`};function kl(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Ol[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Al={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function jl(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Al[e.combine]||`ENVMAP_BLENDING_NONE`}function Ml(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Nl(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Tl(n),l=Dl(n),u=kl(n),d=jl(n),f=Ml(n),p=ul(n),m=dl(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(pl).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(pl).join(`
`),_.length>0&&(_+=`
`)):(g=[Cl(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(pl).join(`
`),_=[Cl(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Z.tonemapping_pars_fragment,n.toneMapping===0?``:sl(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Z.colorspace_pars_fragment,al(`linearToOutputTexel`,n.outputColorSpace),ll(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(pl).join(`
`)),o=_l(o),o=ml(o,n),o=hl(o,n),s=_l(s),s=ml(s,n),s=hl(s,n),o=xl(o),s=xl(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Qc(i,i.VERTEX_SHADER,y),S=Qc(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=il(i,x,`vertex`),n=il(i,S,`fragment`);U(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):H(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Zc(i,h),T=fl(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,$c)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=el++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Pl=0,Fl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Il(e),t.set(e,n)),n}},Il=class{constructor(e){this.id=Pl++,this.code=e,this.usedTimes=0}};function Ll(e){return e===1030||e===37490||e===36285}function Rl(e,t,n,r,i,a){let o=new $n,s=new Fl,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&H(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=as[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let j=e.getRenderTarget(),ee=e.state.buffers.depth.getReversed(),M=h.isInstancedMesh===!0,N=h.isBatchedMesh===!0,te=!!i.map,P=!!i.matcap,ne=!!x,re=!!i.aoMap,ie=!!i.lightMap,ae=!!i.bumpMap&&i.wireframe===!1,F=!!i.normalMap,oe=!!i.displacementMap,I=!!i.emissiveMap,se=!!i.metalnessMap,ce=!!i.roughnessMap,le=i.anisotropy>0,L=i.clearcoat>0,ue=i.dispersion>0,de=i.retroreflectivity>0,fe=i.iridescence>0,pe=i.sheen>0,me=i.transmission>0,he=le&&!!i.anisotropyMap,ge=L&&!!i.clearcoatMap,_e=L&&!!i.clearcoatNormalMap,ve=L&&!!i.clearcoatRoughnessMap,ye=fe&&!!i.iridescenceMap,R=fe&&!!i.iridescenceThicknessMap,be=pe&&!!i.sheenColorMap,xe=pe&&!!i.sheenRoughnessMap,Se=!!i.specularMap,z=!!i.specularColorMap,Ce=!!i.specularIntensityMap,B=me&&!!i.transmissionMap,V=me&&!!i.thicknessMap,we=!!i.gradientMap,Te=!!i.alphaMap,Ee=i.alphaTest>0,De=!!i.alphaHash,Oe=!!i.extensions,ke=0;i.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(ke=e.toneMapping);let Ae={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:N,batchingColor:N&&h._colorsTexture!==null,instancing:M,instancingColor:M&&h.instanceColor!==null,instancingMorph:M&&h.morphTexture!==null,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:J.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:te,matcap:P,envMap:ne,envMapMode:ne&&x.mapping,envMapCubeUVHeight:S,aoMap:re,lightMap:ie,bumpMap:ae,normalMap:F,displacementMap:oe,emissiveMap:I,normalMapObjectSpace:F&&i.normalMapType===1,normalMapTangentSpace:F&&i.normalMapType===0,packedNormalMap:F&&i.normalMapType===0&&Ll(i.normalMap.format),metalnessMap:se,roughnessMap:ce,anisotropy:le,anisotropyMap:he,clearcoat:L,clearcoatMap:ge,clearcoatNormalMap:_e,clearcoatRoughnessMap:ve,dispersion:ue,retroreflection:de,iridescence:fe,iridescenceMap:ye,iridescenceThicknessMap:R,sheen:pe,sheenColorMap:be,sheenRoughnessMap:xe,specularMap:Se,specularColorMap:z,specularIntensityMap:Ce,transmission:me,transmissionMap:B,thicknessMap:V,gradientMap:we,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Te,alphaTest:Ee,alphaHash:De,combine:i.combine,mapUv:te&&m(i.map.channel),aoMapUv:re&&m(i.aoMap.channel),lightMapUv:ie&&m(i.lightMap.channel),bumpMapUv:ae&&m(i.bumpMap.channel),normalMapUv:F&&m(i.normalMap.channel),displacementMapUv:oe&&m(i.displacementMap.channel),emissiveMapUv:I&&m(i.emissiveMap.channel),metalnessMapUv:se&&m(i.metalnessMap.channel),roughnessMapUv:ce&&m(i.roughnessMap.channel),anisotropyMapUv:he&&m(i.anisotropyMap.channel),clearcoatMapUv:ge&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:_e&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:R&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:be&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:xe&&m(i.sheenRoughnessMap.channel),specularMapUv:Se&&m(i.specularMap.channel),specularColorMapUv:z&&m(i.specularColorMap.channel),specularIntensityMapUv:Ce&&m(i.specularIntensityMap.channel),transmissionMapUv:B&&m(i.transmissionMap.channel),thicknessMapUv:V&&m(i.thicknessMap.channel),alphaMapUv:Te&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(F||le),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(te||Te),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&F===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ee,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:ke,decodeVideoTexture:te&&i.map.isVideoTexture===!0&&J.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:I&&i.emissiveMap.isVideoTexture===!0&&J.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Oe&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Oe&&i.extensions.multiDraw===!0||N)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Ae.vertexUv1s=c.has(1),Ae.vertexUv2s=c.has(2),Ae.vertexUv3s=c.has(3),c.clear(),Ae}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=as[t];n=Qa.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new Nl(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function zl(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Bl(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Vl(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Hl(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Bl),r.length>1&&r.sort(t||Vl),i.length>1&&i.sort(t||Vl)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Ul(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Hl,e.set(t,[i])):n>=r.length?(i=new Hl,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Wl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new K,color:new Y};break;case`SpotLight`:n={position:new K,direction:new K,color:new Y,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new K,color:new Y,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new K,skyColor:new Y,groundColor:new Y};break;case`RectAreaLight`:n={color:new Y,position:new K,halfWidth:new K,halfHeight:new K}}return e[t.id]=n,n}}}function Gl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new G};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new G};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new G,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Kl=0;function ql(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Jl(e){let t=new Wl,n=Gl(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new K);let i=new K,a=new Hn,o=new Hn;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(ql);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=Q.LTC_FLOAT_1,r.rectAreaLTC2=Q.LTC_FLOAT_2):(r.rectAreaLTC1=Q.LTC_HALF_1,r.rectAreaLTC2=Q.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Kl++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Yl(e){let t=new Jl(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function Xl(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Yl(e),t.set(n,[a])):r>=i.length?(a=new Yl(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Zl=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ql=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,$l=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],eu=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],tu=new Hn,nu=new K,ru=new K;function iu(e,t,n){let r=new ma,i=new G,a=new G,o=new Ln,s=new ro,c=new io,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new to({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new G},radius:{value:4}},vertexShader:Zl,fragmentShader:Ql}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new vi;m.setAttribute(`position`,new ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new sa(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(H(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){H(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){H(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new zn(i.x,i.y,{format:et,type:Ve,minFilter:je,magFilter:je,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new Aa(i.x,i.y,Be),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=Xe,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=Oe,d.map.depthTexture.magFilter=Oe}else l.isPointLight?(d.map=new Fs(i.x),d.map.depthTexture=new ja(i.x,ze)):(d.map=new zn(i.x,i.y),d.map.depthTexture=new Aa(i.x,i.y,ze)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=Xe,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=je,d.map.depthTexture.magFilter=je):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=Oe,d.map.depthTexture.magFilter=Oe);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let g=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);for(let t=0;t<g;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),nu.setFromMatrixPosition(l.matrixWorld),e.position.copy(nu),ru.copy(e.position),ru.add($l[t]),e.up.copy(eu[t]),e.lookAt(ru),e.updateMatrixWorld(),n.makeTranslation(-nu.x,-nu.y,-nu.z),tu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(tu,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),b(n,s,i,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null?n.mapPass=new zn(i.x,i.y,{format:et,type:Ve}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=y(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)b(c[e],i,a,o,s)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function au(e,t){function n(){let t=!1,n=new Ln,r=null,i=new Ln(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?se(e.DEPTH_TEST):ce(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=un[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?se(e.STENCIL_TEST):ce(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new Y(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,ee=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),M=!1,N=0,te=e.getParameter(e.VERSION);te.indexOf(`WebGL`)===-1?te.indexOf(`OpenGL ES`)!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),M=N>=2):(N=parseFloat(/^WebGL (\d)/.exec(te)[1]),M=N>=1);let P=null,ne={},re=e.getParameter(e.SCISSOR_BOX),ie=e.getParameter(e.VIEWPORT),ae=new Ln().fromArray(re),F=new Ln().fromArray(ie);function oe(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let I={};I[e.TEXTURE_2D]=oe(e.TEXTURE_2D,e.TEXTURE_2D,1),I[e.TEXTURE_CUBE_MAP]=oe(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),I[e.TEXTURE_2D_ARRAY]=oe(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),I[e.TEXTURE_3D]=oe(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),se(e.DEPTH_TEST),o.setFunc(3),he(!1),ge(1),se(e.CULL_FACE),pe(0);function se(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function ce(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function le(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function L(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function ue(t){return h!==t&&(e.useProgram(t),h=t,!0)}let de={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};de[103]=e.MIN,de[104]=e.MAX;let fe={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function pe(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(ce(e.BLEND),g=!1);return}if(g===!1&&(se(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:U(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:U(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:U(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:U(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(de[n],de[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(fe[r],fe[i],fe[o],fe[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function me(t,n){t.side===2?ce(e.CULL_FACE):se(e.CULL_FACE);let r=t.side===1;n&&(r=!r),he(r),t.blending===1&&t.transparent===!1?pe(0):pe(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),ve(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?se(e.SAMPLE_ALPHA_TO_COVERAGE):ce(e.SAMPLE_ALPHA_TO_COVERAGE)}function he(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function ge(t){t===0?ce(e.CULL_FACE):(se(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function _e(t){t!==k&&(M&&e.lineWidth(t),k=t)}function ve(t,n,r){t?(se(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):ce(e.POLYGON_OFFSET_FILL)}function ye(t){t?se(e.SCISSOR_TEST):ce(e.SCISSOR_TEST)}function R(t){t===void 0&&(t=e.TEXTURE0+ee-1),P!==t&&(e.activeTexture(t),P=t)}function be(t,n,r){r===void 0&&(r=P===null?e.TEXTURE0+ee-1:P);let i=ne[r];i===void 0&&(i={type:void 0,texture:void 0},ne[r]=i),(i.type!==t||i.texture!==n)&&(P!==r&&(e.activeTexture(r),P=r),e.bindTexture(t,n||I[t]),i.type=t,i.texture=n)}function xe(){let t=ne[P];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Se(){try{e.compressedTexImage2D(...arguments)}catch(e){U(`WebGLState:`,e)}}function z(){try{e.compressedTexImage3D(...arguments)}catch(e){U(`WebGLState:`,e)}}function Ce(){try{e.texSubImage2D(...arguments)}catch(e){U(`WebGLState:`,e)}}function B(){try{e.texSubImage3D(...arguments)}catch(e){U(`WebGLState:`,e)}}function V(){try{e.compressedTexSubImage2D(...arguments)}catch(e){U(`WebGLState:`,e)}}function we(){try{e.compressedTexSubImage3D(...arguments)}catch(e){U(`WebGLState:`,e)}}function Te(){try{e.texStorage2D(...arguments)}catch(e){U(`WebGLState:`,e)}}function Ee(){try{e.texStorage3D(...arguments)}catch(e){U(`WebGLState:`,e)}}function De(){try{e.texImage2D(...arguments)}catch(e){U(`WebGLState:`,e)}}function Oe(){try{e.texImage3D(...arguments)}catch(e){U(`WebGLState:`,e)}}function ke(t){return d[t]===void 0?e.getParameter(t):d[t]}function Ae(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function je(t){ae.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ae.copy(t))}function Me(t){F.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),F.copy(t))}function Ne(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Pe(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Fe(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},P=null,ne={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new Y(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,ae.set(0,0,e.canvas.width,e.canvas.height),F.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:se,disable:ce,bindFramebuffer:le,drawBuffers:L,useProgram:ue,setBlending:pe,setMaterial:me,setFlipSided:he,setCullFace:ge,setLineWidth:_e,setPolygonOffset:ve,setScissorTest:ye,activeTexture:R,bindTexture:be,unbindTexture:xe,compressedTexImage2D:Se,compressedTexImage3D:z,texImage2D:De,texImage3D:Oe,pixelStorei:Ae,getParameter:ke,updateUBOMapping:Ne,uniformBlockBinding:Pe,texStorage2D:Te,texStorage3D:Ee,texSubImage2D:Ce,texSubImage3D:B,compressedTexSubImage2D:V,compressedTexSubImage3D:we,scissor:je,viewport:Me,reset:Fe}}function ou(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new G,u=new WeakMap,d=new Set,f,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function h(e,t){return m?new OffscreenCanvas(e,t):nn(`canvas`)}function g(e,t,n){let r=1,i=Se(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=h(n,a));let o=t?h(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),H(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&H(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function _(e){return e.generateMipmaps}function v(t){e.generateMipmap(t)}function y(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function b(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];H(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||H(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?Yt:J.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function x(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,H(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function S(e,t){return _(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function C(e){let t=e.target;t.removeEventListener(`dispose`,C),T(t),t.isVideoTexture&&u.delete(t),t.isHTMLTexture&&d.delete(t)}function w(e){let t=e.target;t.removeEventListener(`dispose`,w),D(t)}function T(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&E(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function E(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function D(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let O=0;function k(){O=0}function A(){return O}function j(e){O=e}function ee(){let e=O;return e>=i.maxTextures&&H(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),O+=1,e}function M(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function N(t,i){let a=r.get(t);if(t.isVideoTexture&&be(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)H(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)H(`WebGLRenderer: Texture marked for update but image is incomplete`);else{ce(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function te(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){ce(a,t,i);return}t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i)}function P(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){ce(a,t,i);return}n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function ne(t,i){let a=r.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version){le(a,t,i);return}n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let re={[Te]:e.REPEAT,[Ee]:e.CLAMP_TO_EDGE,[De]:e.MIRRORED_REPEAT},ie={[Oe]:e.NEAREST,[ke]:e.NEAREST_MIPMAP_NEAREST,[Ae]:e.NEAREST_MIPMAP_LINEAR,[je]:e.LINEAR,[Me]:e.LINEAR_MIPMAP_NEAREST,[Ne]:e.LINEAR_MIPMAP_LINEAR},ae={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function F(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&H(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,re[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,re[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,re[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,ie[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,ie[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,ae[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function oe(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,C));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=M(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&E(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function I(e,t,n){return Math.floor(Math.floor(e/n)/t)}function se(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=I(n.start,r.width,4),c=I(t.start,r.width,4);n.start<=i+1&&a===c&&I(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function ce(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=oe(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=J.getPrimaries(J.workingColorSpace),r=o.colorSpace===``?null:J.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=g(o.image,!1,i.maxTextureSize);t=xe(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=b(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);F(c,o);let h,y=o.mipmaps,C=o.isVideoTexture!==!0,w=f.__version===void 0||l===!0,T=u.dataReady,E=S(o,t);if(o.isDepthTexture)m=x(o.format===Ze,o.type),w&&(C?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(y.length>0){C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else C?(w&&n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height),T&&se(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){C&&w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,y[0].width,y[0].height,t.depth);for(let i=0,a=y.length;i<a;i++)if(h=y[i],o.format!==1023){if(r!==null){if(C){if(T){if(o.layerUpdates.size>0){let t=ts(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else H(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else C?T&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],o.format===1023?C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?H(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):C?T&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(C){if(w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,t.width,t.height,t.depth),T){if(o.layerUpdates.size>0){let i=ts(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)C?(w&&n.texStorage3D(e.TEXTURE_3D,E,m,t.width,t.height,t.depth),T&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(w){if(C)n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<E;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(y.length>0){if(C&&w){let t=Se(y[0]);n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height)}for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(C){if(w){let r=Se(t);n.texStorage2D(e.TEXTURE_2D,E,m,r.width,r.height)}T&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);_(o)&&v(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function le(t,o,s){if(o.image.length!==6)return;let c=oe(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=J.getPrimaries(J.workingColorSpace),r=o.colorSpace===``?null:J.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=g(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=xe(o,m[e]);let h=m[0],y=a.convert(o.format,o.colorSpace),x=a.convert(o.type),C=b(o.internalFormat,y,x,o.normalized,o.colorSpace),w=o.isVideoTexture!==!0,T=u.__version===void 0||c===!0,E=l.dataReady,D=S(o,h);F(e.TEXTURE_CUBE_MAP,o);let O;if(f){w&&T&&n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,h.width,h.height);for(let t=0;t<6;t++){O=m[t].mipmaps;for(let r=0;r<O.length;r++){let i=O[r];o.format===1023?w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,y,x,i.data):y===null?H(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):w?E&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,i.data)}}}else{if(O=o.mipmaps,w&&T){O.length>0&&D++;let t=Se(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,t.width,t.height)}for(let t=0;t<6;t++)if(p){w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,y,x,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,m[t].width,m[t].height,0,y,x,m[t].data);for(let r=0;r<O.length;r++){let i=O[r].image[t].image;w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,i.width,i.height,0,y,x,i.data)}}else{w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,y,x,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,y,x,m[t]);for(let r=0;r<O.length;r++){let i=O[r];w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,y,x,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,y,x,i.image[t])}}}_(o)&&v(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function L(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=b(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),R(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,ye(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function ue(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=x(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;R(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ye(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,ye(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=b(o.internalFormat,c,l,o.normalized,o.colorSpace);R(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ye(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,ye(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function de(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,C)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),F(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else N(i.depthTexture,0);let u=l.__webglTexture,d=ye(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)R(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)R(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function fe(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)de(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?de(i.__webglFramebuffer[0],t,0):de(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),ue(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),ue(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function pe(t,n,i){let a=r.get(t);n!==void 0&&L(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&fe(t)}function me(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,w);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&R(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=b(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=ye(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),ue(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),F(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)L(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else L(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);_(i)&&v(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),F(c,a),L(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),_(a)&&v(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),F(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)L(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else L(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);_(i)&&v(r),n.unbindTexture()}t.depthBuffer&&fe(t)}function he(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(_(a)){let t=y(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),v(t),n.unbindTexture()}}}let ge=[],_e=[];function ve(t){if(t.samples>0){if(R(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(ge.length=0,_e.length=0,ge.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(ge.push(l),_e.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,_e)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,ge))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function ye(e){return Math.min(i.maxSamples,e.samples)}function R(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function be(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function xe(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(J.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&H(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):U(`WebGLTextures: Unsupported texture color space:`,n)),t}function Se(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=ee,this.resetTextureUnits=k,this.getTextureUnits=A,this.setTextureUnits=j,this.setTexture2D=N,this.setTexture2DArray=te,this.setTexture3D=P,this.setTextureCube=ne,this.rebindTextures=pe,this.setupRenderTarget=me,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=L,this.useMultisampledRTT=R,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function su(e,t){function n(n,r=``){let i,a=J.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var cu=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lu=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,uu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ma(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new to({vertexShader:cu,fragmentShader:lu,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new sa(new Ua(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},du=class extends dn{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new uu,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new G,C=null,w=null,T=new Mo;T.viewport=new Ln;let E=new Mo;E.viewport=new Ln;let D=[T,E],O=new Lo,k=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new vr,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new vr,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new vr,b[e]=t),t.getHandSpace()};function j(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ee(){r.removeEventListener(`select`,j),r.removeEventListener(`selectstart`,j),r.removeEventListener(`selectend`,j),r.removeEventListener(`squeeze`,j),r.removeEventListener(`squeezestart`,j),r.removeEventListener(`squeezeend`,j),r.removeEventListener(`end`,ee),r.removeEventListener(`inputsourceschange`,M);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}k=null,A=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,F.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),w!==null){let e=w.camera;e.fov=w.fov,e.zoom=w.zoom,e.updateProjectionMatrix(),w=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&H(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&H(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,j),r.addEventListener(`selectstart`,j),r.addEventListener(`selectend`,j),r.addEventListener(`squeeze`,j),r.addEventListener(`squeezestart`,j),r.addEventListener(`squeezeend`,j),r.addEventListener(`end`,ee),r.addEventListener(`inputsourceschange`,M),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?Ze:Xe,a=_.stencil?We:ze);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new zn(d.textureWidth,d.textureHeight,{format:Ye,type:Pe,depthTexture:new Aa(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new zn(f.framebufferWidth,f.framebufferHeight,{format:Ye,type:Pe,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),F.setContext(r),F.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function M(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}let N=new K,te=new K;function P(e,t,n){N.setFromMatrixPosition(t.matrixWorld),te.setFromMatrixPosition(n.matrixWorld);let r=N.distanceTo(te),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ne(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),O.near=E.near=T.near=t,O.far=E.far=T.far=n,(k!==O.near||A!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),k=O.near,A=O.far),O.layers.mask=e.layers.mask|6,T.layers.mask=O.layers.mask&-5,E.layers.mask=O.layers.mask&-3;let i=e.parent,a=O.cameras;ne(O,i);for(let e=0;e<a.length;e++)ne(a[e],i);a.length===2?P(O,T,E):O.projectionMatrix.copy(T.projectionMatrix),w===null&&e.isPerspectiveCamera&&(w={camera:e,fov:e.fov,zoom:e.zoom}),re(e,O,i)};function re(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=mn*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(O)},this.getCameraTexture=function(e){return g[e]};let ie=null;function ae(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==O.cameras.length&&(O.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=D[n];o===void 0&&(o=new Mo,o.layers.enable(n),o.viewport=new Ln,D[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(O.matrix.copy(o.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),i===!0&&O.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new Ma,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ie&&ie(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let F=new rs;F.setAnimationLoop(ae),this.setAnimationLoop=function(e){ie=e},this.dispose=function(){}}},fu=new Hn,pu=new q;pu.set(-1,0,0,0,1,0,0,0,1);function mu(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Za(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(fu.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(pu),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function hu(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return U(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?H(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):H(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var gu=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),_u=null;function vu(){return _u===null&&(_u=new ua(gu,16,16,et,Ve),_u.name=`DFG_LUT`,_u.minFilter=je,_u.magFilter=je,_u.wrapS=Ee,_u.wrapT=Ee,_u.generateMipmaps=!1,_u.needsUpdate=!0),_u}var yu=class{constructor(e={}){let{canvas:t=rn(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Pe}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([nt,tt,$e]),g=new Set([Pe,ze,Le,We,He,Ue]),_=new Uint32Array(4),v=new Int32Array(4),y=new K,b=null,x=null,S=[],C=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,E=!1,D=null,O=null,k=null,A=null;this._outputColorSpace=qt;let j=0,ee=0,M=null,N=-1,te=null,P=new Ln,ne=new Ln,re=null,ie=new Y(0),ae=0,F=t.width,oe=t.height,I=1,se=null,ce=null,le=new Ln(0,0,F,oe),L=new Ln(0,0,F,oe),ue=!1,de=new ma,fe=!1,pe=!1,me=new Hn,he=new K,ge=new Ln,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ve=!1;function ye(){return M===null?I:1}let R=n;function be(e,n){return t.getContext(e,n)}let xe,Se,z,Ce,B,V,we,Te,Ee,De,Oe,ke,Ae,je,Me,Fe,Ie,Re,Be,Ge,Ke,qe,Je;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,Ze,!1),t.addEventListener(`webglcontextrestored`,Qe,!1),t.addEventListener(`webglcontextcreationerror`,et,!1),R===null){let t=`webgl2`;if(R=be(t,e),R===null)throw be(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}Ye()}catch(e){throw t.removeEventListener(`webglcontextlost`,Ze,!1),t.removeEventListener(`webglcontextrestored`,Qe,!1),t.removeEventListener(`webglcontextcreationerror`,et,!1),U(`WebGLRenderer: `+e.message),e}function Ye(){xe=new Ls(R),xe.init(),Ke=new su(R,xe),Se=new fs(R,xe,e,Ke),z=new au(R,xe),Se.reversedDepthBuffer&&d&&z.buffers.depth.setReversed(!0),O=R.createFramebuffer(),k=R.createFramebuffer(),A=R.createFramebuffer(),Ce=new Bs(R),B=new zl,V=new ou(R,xe,z,B,Se,Ke,Ce),we=new Is(T),Te=new is(R),qe=new us(R,Te),Ee=new Rs(R,Te,Ce,qe),De=new Hs(R,Ee,Te,qe,Ce),Re=new Vs(R,Se,V),Me=new ps(B),Oe=new Rl(T,we,xe,Se,qe,Me),ke=new mu(T,B),Ae=new Ul,je=new Xl(xe),Ie=new ls(T,we,z,De,p,s),Fe=new iu(T,De,Se),Je=new hu(R,Ce,Se,z),Be=new ds(R,xe,Ce),Ge=new zs(R,xe,Ce),Ce.programs=Oe.programs,T.capabilities=Se,T.extensions=xe,T.properties=B,T.renderLists=Ae,T.shadowMap=Fe,T.state=z,T.info=Ce}m!==1009&&(w=new Ws(m,t.width,t.height,o,r,i));let Xe=new du(T,R);this.xr=Xe,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let e=xe.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=xe.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(e){e!==void 0&&(I=e,this.setSize(F,oe,!1))},this.getSize=function(e){return e.set(F,oe)},this.setSize=function(e,n,r=!0){if(Xe.isPresenting){H(`WebGLRenderer: Can't change size while VR device is presenting.`);return}F=e,oe=n,t.width=Math.floor(e*I),t.height=Math.floor(n*I),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(F*I,oe*I).floor()},this.setDrawingBufferSize=function(e,n,r){F=e,oe=n,I=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009){U(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){H(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}w.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(P)},this.getViewport=function(e){return e.copy(le)},this.setViewport=function(e,t,n,r){e.isVector4?le.set(e.x,e.y,e.z,e.w):le.set(e,t,n,r),z.viewport(P.copy(le).multiplyScalar(I).round())},this.getScissor=function(e){return e.copy(L)},this.setScissor=function(e,t,n,r){e.isVector4?L.set(e.x,e.y,e.z,e.w):L.set(e,t,n,r),z.scissor(ne.copy(L).multiplyScalar(I).round())},this.getScissorTest=function(){return ue},this.setScissorTest=function(e){z.setScissorTest(ue=e)},this.setOpaqueSort=function(e){se=e},this.setTransparentSort=function(e){ce=e},this.getClearColor=function(e){return e.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor(...arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(M!==null){let t=M.texture.format;e=h.has(t)}if(e){let e=M.texture.type,t=g.has(e),n=Ie.getClearColor(),r=Ie.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,R.clearBufferuiv(R.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,R.clearBufferiv(R.COLOR,0,v))}else r|=R.COLOR_BUFFER_BIT}t&&(r|=R.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&R.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),D=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,Ze,!1),t.removeEventListener(`webglcontextrestored`,Qe,!1),t.removeEventListener(`webglcontextcreationerror`,et,!1),Ie.dispose(),Ae.dispose(),je.dispose(),B.dispose(),we.dispose(),De.dispose(),qe.dispose(),Je.dispose(),Oe.dispose(),Xe.dispose(),Xe.removeEventListener(`sessionstart`,lt),Xe.removeEventListener(`sessionend`,ut),dt.stop()};function Ze(e){e.preventDefault(),on(`WebGLRenderer: Context Lost.`),E=!0}function Qe(){on(`WebGLRenderer: Context Restored.`),E=!1;let e=Ce.autoReset,t=Fe.enabled,n=Fe.autoUpdate,r=Fe.needsUpdate,i=Fe.type;Ye(),Ce.autoReset=e,Fe.enabled=t,Fe.autoUpdate=n,Fe.needsUpdate=r,Fe.type=i}function et(e){U(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function rt(e){let t=e.target;t.removeEventListener(`dispose`,rt),it(t)}function it(e){at(e),B.remove(e)}function at(e){let t=B.get(e).programs;t!==void 0&&(t.forEach(function(e){Oe.releaseProgram(e)}),e.isShaderMaterial&&Oe.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=_e);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=xt(e,t,n,r,i);z.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ee.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;qe.setup(i,r,s,n,c);let h,g=Be;if(c!==null&&(h=Te.get(c),g=Ge,g.setIndex(h)),i.isMesh)r.wireframe===!0?(z.setLineWidth(r.wireframeLinewidth*ye()),g.setMode(R.LINES)):g.setMode(R.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),z.setLineWidth(e*ye()),i.isLineSegments?g.setMode(R.LINES):i.isLineLoop?g.setMode(R.LINE_LOOP):g.setMode(R.LINE_STRIP)}else i.isPoints?g.setMode(R.POINTS):i.isSprite&&g.setMode(R.TRIANGLES);if(i.isBatchedMesh){if(xe.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Te.get(c).bytesPerElement:1,o=B.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(R,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function ot(e,t,n,r){D!==null&&e.isNodeMaterial&&D.setObject(r,e),fe===!0&&Me.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,_t(e,t,r),e.side=0,e.needsUpdate=!0,_t(e,t,r),e.side=2):_t(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),D!==null&&D.renderStart(e,t,n),x=je.get(n),x.init(t),C.push(x),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),x.setupLights(),D!==null&&D.updateLights(x.state.lightsArray),pe=this.localClippingEnabled,fe=Me.init(this.clippingPlanes,pe),fe===!0&&Me.setGlobalState(this.clippingPlanes,t),D!==null&&Fe.render(x.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];ot(o,n,t,e),r.add(o)}else ot(i,n,t,e),r.add(i)}}),x=C.pop(),D!==null&&D.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){let t=B.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}xe.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let st=null;function ct(e){st&&st(e)}function lt(){dt.stop()}function ut(){dt.start()}let dt=new rs;dt.setAnimationLoop(ct),typeof self<`u`&&dt.setContext(self),this.setAnimationLoop=function(e){st=e,Xe.setAnimationLoop(e),e===null?dt.stop():dt.start()},Xe.addEventListener(`sessionstart`,lt),Xe.addEventListener(`sessionend`,ut),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){U(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(E===!0)return;D!==null&&D.renderStart(e,t);let n=Xe.enabled===!0&&Xe.isPresenting===!0,r=w!==null&&(M===null||n)&&w.begin(T,M);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Xe.enabled===!0&&Xe.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Xe.cameraAutoUpdate===!0&&Xe.updateCamera(t),t=Xe.getCamera()),e.isScene===!0&&e.onBeforeRender(T,e,t,M),x=je.get(e,C.length),x.init(t),x.state.textureUnits=V.getTextureUnits(),C.push(x),me.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),de.setFromProjectionMatrix(me,$t,t.reversedDepth),pe=this.localClippingEnabled,fe=Me.init(this.clippingPlanes,pe),b=Ae.get(e,S.length),b.init(),S.push(b),Xe.enabled===!0&&Xe.isPresenting===!0){let e=T.xr.getDepthSensingMesh();e!==null&&ft(e,t,-1/0,T.sortObjects)}ft(e,t,0,T.sortObjects),b.finish(),D!==null&&D.updateLights(x.state.lightsArray),T.sortObjects===!0&&b.sort(se,ce),ve=Xe.enabled===!1||Xe.isPresenting===!1||Xe.hasDepthSensing()===!1,ve&&Ie.addToRenderList(b,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),fe===!0&&Me.beginShadows();let i=x.state.shadowsArray;if(Fe.render(i,e,t),fe===!0&&Me.endShadows(),(r&&w.hasRenderPass())===!1){let n=b.opaque,r=b.transmissive;if(x.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];mt(n,r,e,a)}ve&&Ie.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];pt(b,e,n,n.viewport)}}else r.length>0&&mt(n,r,e,t),ve&&Ie.render(e),pt(b,e,t)}M!==null&&ee===0&&(V.updateMultisampleRenderTarget(M),V.updateRenderTargetMipmap(M)),r&&w.end(T),e.isScene===!0&&e.onAfterRender(T,e,t),qe.resetDefaultState(),N=-1,te=null,C.pop(),C.length>0?(x=C[C.length-1],V.setTextureUnits(x.state.textureUnits),fe===!0&&Me.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,S.pop(),b=S.length>0?S[S.length-1]:null,D!==null&&D.renderEnd()};function ft(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)x.pushLightProbeGrid(e);else if(e.isLight)x.pushLight(e),e.castShadow&&x.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(de)){r&&ge.setFromMatrixPosition(e.matrixWorld).applyMatrix4(me);let i=De.update(e),a=e.material;a.visible&&b.push(e,i,a,n,ge.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(de))){let i=De.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),ge.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),ge.copy(e.boundingSphere.center)),ge.applyMatrix4(e.matrixWorld).applyMatrix4(me)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&b.push(e,i,c,n,ge.z,s,t)}}else a.visible&&b.push(e,i,a,n,ge.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)ft(i[e],t,n,r)}function pt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;x.setupLightsView(n),fe===!0&&Me.setGlobalState(T.clippingPlanes,n),r&&z.viewport(P.copy(r)),i.length>0&&ht(i,t,n),a.length>0&&ht(a,t,n),o.length>0&&ht(o,t,n),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function mt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[r.id]===void 0){let e=xe.has(`EXT_color_buffer_half_float`)||xe.has(`EXT_color_buffer_float`);x.state.transmissionRenderTarget[r.id]=new zn(1,1,{generateMipmaps:!0,type:e?Ve:Pe,minFilter:Ne,samples:Math.max(4,Se.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:J.workingColorSpace})}let a=x.state.transmissionRenderTarget[r.id],o=r.viewport||P;a.setSize(o.z*T.transmissionResolutionScale,o.w*T.transmissionResolutionScale);let s=T.getRenderTarget(),c=T.getActiveCubeFace(),l=T.getActiveMipmapLevel();T.setRenderTarget(a),T.getClearColor(ie),ae=T.getClearAlpha(),ae<1&&T.setClearColor(16777215,.5),T.clear(),ve&&Ie.render(n);let u=T.toneMapping;T.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),x.setupLightsView(r),fe===!0&&Me.setGlobalState(T.clippingPlanes,r),ht(e,n,r),V.updateMultisampleRenderTarget(a),V.updateRenderTargetMipmap(a),xe.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,gt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(V.updateMultisampleRenderTarget(a),V.updateRenderTargetMipmap(a))}T.setRenderTarget(s,c,l),T.setClearColor(ie,ae),d!==void 0&&(r.viewport=d),T.toneMapping=u}function ht(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&gt(o,t,n,s,l,c)}}function gt(e,t,n,r,i,a){D!==null&&i.isNodeMaterial&&D.setObject(e,i),e.onBeforeRender(T,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(T,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=2):T.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(T,t,n,r,i,a)}function _t(e,t,n){t.isScene!==!0&&(t=_e);let r=B.get(e),i=x.state.lights,a=x.state.shadowsArray,o=i.state.version,s=Oe.getParameters(e,i.state,a,t,n,x.state.lightProbeGridArray),c=Oe.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=we.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,rt),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return yt(e,s),d}else s.uniforms=Oe.getUniforms(e),D!==null&&e.isNodeMaterial&&D.build(e,n,s),e.onBeforeCompile(s,T),d=Oe.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Me.uniform),yt(e,s),r.needsLights=Ct(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=x.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function vt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Zc.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function yt(e,t){let n=B.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function bt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];y.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(y))return n}return null}function xt(e,t,n,r,i){t.isScene!==!0&&(t=_e),V.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=M===null?T.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:J.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=we.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(h=T.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=B.get(r),y=x.state.lights;if(fe===!0&&(pe===!0||e!==te)){let t=e===te&&r.id===N;Me.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Me.numPlanes||v.numIntersection!==Me.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=x.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;b===!0&&(S=_t(r,t,i),D&&r.isNodeMaterial&&D.onUpdateProgram(r,S,v));let C=!1,w=!1,E=!1,O=S.getUniforms(),k=v.uniforms;if(z.useProgram(S.program)&&(C=!0,w=!0,E=!0),r.id!==N&&(N=r.id,w=!0),v.needsLights){let e=bt(x.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,w=!0)}if(C||te!==e){z.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),O.setValue(R,`projectionMatrix`,e.projectionMatrix),O.setValue(R,`viewMatrix`,e.matrixWorldInverse);let t=O.map.cameraPosition;t!==void 0&&t.setValue(R,he.setFromMatrixPosition(e.matrixWorld)),Se.logarithmicDepthBuffer&&O.setValue(R,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&O.setValue(R,`isOrthographic`,e.isOrthographicCamera===!0),te!==e&&(te=e,w=!0,E=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&O.setValue(R,`sunShadowMap`,y.state.sunShadowMap,V),y.state.directionalShadowMap.length>0&&O.setValue(R,`directionalShadowMap`,y.state.directionalShadowMap,V),y.state.spotShadowMap.length>0&&O.setValue(R,`spotShadowMap`,y.state.spotShadowMap,V),y.state.pointShadowMap.length>0&&O.setValue(R,`pointShadowMap`,y.state.pointShadowMap,V)),i.isSkinnedMesh){O.setOptional(R,i,`bindMatrix`),O.setOptional(R,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),O.setValue(R,`boneTexture`,e.boneTexture,V))}i.isBatchedMesh&&(O.setOptional(R,i,`batchingTexture`),O.setValue(R,`batchingTexture`,i._matricesTexture,V),O.setOptional(R,i,`batchingIdTexture`),O.setValue(R,`batchingIdTexture`,i._indirectTexture,V),O.setOptional(R,i,`batchingColorTexture`),i._colorsTexture!==null&&O.setValue(R,`batchingColorTexture`,i._colorsTexture,V));let A=n.morphAttributes;if((A.position!==void 0||A.normal!==void 0||A.color!==void 0)&&Re.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,O.setValue(R,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(k.envMapIntensity.value=t.environmentIntensity),k.dfgLUT!==void 0&&(k.dfgLUT.value=vu()),w){if(O.setValue(R,`toneMappingExposure`,T.toneMappingExposure),v.needsLights&&St(k,E),a&&r.fog===!0&&ke.refreshFogUniforms(k,a),ke.refreshMaterialUniforms(k,r,I,oe,x.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;k.probesSH.value=e.texture,k.probesMin.value.copy(e.boundingBox.min),k.probesMax.value.copy(e.boundingBox.max),k.probesResolution.value.copy(e.resolution)}Zc.upload(R,vt(v),k,V)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Zc.upload(R,vt(v),k,V),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&O.setValue(R,`center`,i.center),O.setValue(R,`modelViewMatrix`,i.modelViewMatrix),O.setValue(R,`normalMatrix`,i.normalMatrix),O.setValue(R,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Je.update(n,S),Je.bind(n,S)}}return S}function St(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Ct(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return ee},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(e,t,n){let r=B.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),B.get(e.texture).__webglTexture=t,B.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=B.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){M=e,j=t,ee=n;let r=null,i=!1,a=!1;if(e){let o=B.get(e);if(o.__useDefaultFramebuffer!==void 0){z.bindFramebuffer(R.FRAMEBUFFER,o.__webglFramebuffer),P.copy(e.viewport),ne.copy(e.scissor),re=e.scissorTest,z.viewport(P),z.scissor(ne),z.setScissorTest(re),N=-1;return}if(o.__webglFramebuffer===void 0)V.setupRenderTarget(e);else if(o.__hasExternalTextures)V.rebindTextures(e,B.get(e.texture).__webglTexture,B.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&B.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);V.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=B.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&V.useMultisampledRTT(e)===!1?B.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,P.copy(e.viewport),ne.copy(e.scissor),re=e.scissorTest}else P.copy(le).multiplyScalar(I).floor(),ne.copy(L).multiplyScalar(I).floor(),re=ue;if(n!==0&&(r=O),z.bindFramebuffer(R.FRAMEBUFFER,r)&&z.drawBuffers(e,r),z.viewport(P),z.scissor(ne),z.setScissorTest(re),i){let r=B.get(e.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=B.get(e.textures[t]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=B.get(e.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,t.__webglTexture,n)}N=-1};function wt(e){let t=B.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Se.textureFormatReadable(e.format),t.__typeReadable=Se.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){U(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=B.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){z.bindFramebuffer(R.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+s);let u=wt(o);if(u.__formatReadable===!1){U(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){U(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&R.readPixels(t,n,r,i,Ke.convert(c),Ke.convert(l),a)}finally{let e=M===null?null:B.get(M).__webglFramebuffer;z.bindFramebuffer(R.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=B.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){z.bindFramebuffer(R.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+s);let d=wt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,f),R.bufferData(R.PIXEL_PACK_BUFFER,a.byteLength,R.STREAM_READ),R.readPixels(t,n,r,i,Ke.convert(l),Ke.convert(u),0),R.bindBuffer(R.PIXEL_PACK_BUFFER,null);let p=M===null?null:B.get(M).__webglFramebuffer;z.bindFramebuffer(R.FRAMEBUFFER,p);let m=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await ln(R,m,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,f),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,a),R.bindBuffer(R.PIXEL_PACK_BUFFER,null),R.deleteBuffer(f),R.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;V.setTexture2D(e,0),R.copyTexSubImage2D(R.TEXTURE_2D,n,0,0,o,s,i,a),z.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Ke.convert(t.format),_=Ke.convert(t.type),v;t.isData3DTexture?(V.setTexture3D(t,0),v=R.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(V.setTexture2DArray(t,0),v=R.TEXTURE_2D_ARRAY):(V.setTexture2D(t,0),v=R.TEXTURE_2D),z.activeTexture(R.TEXTURE0),z.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,t.flipY),z.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),z.pixelStorei(R.UNPACK_ALIGNMENT,t.unpackAlignment);let y=z.getParameter(R.UNPACK_ROW_LENGTH),b=z.getParameter(R.UNPACK_IMAGE_HEIGHT),x=z.getParameter(R.UNPACK_SKIP_PIXELS),S=z.getParameter(R.UNPACK_SKIP_ROWS),C=z.getParameter(R.UNPACK_SKIP_IMAGES);z.pixelStorei(R.UNPACK_ROW_LENGTH,h.width),z.pixelStorei(R.UNPACK_IMAGE_HEIGHT,h.height),z.pixelStorei(R.UNPACK_SKIP_PIXELS,l),z.pixelStorei(R.UNPACK_SKIP_ROWS,u),z.pixelStorei(R.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=B.get(e),r=B.get(t),h=B.get(n.__renderTarget),g=B.get(r.__renderTarget);z.bindFramebuffer(R.READ_FRAMEBUFFER,h.__webglFramebuffer),z.bindFramebuffer(R.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,B.get(e).__webglTexture,i,d+n),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,B.get(t).__webglTexture,a,m+n)),R.blitFramebuffer(l,u,o,s,f,p,o,s,R.DEPTH_BUFFER_BIT,R.NEAREST);z.bindFramebuffer(R.READ_FRAMEBUFFER,null),z.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||B.has(e)){let n=B.get(e),r=B.get(t);z.bindFramebuffer(R.READ_FRAMEBUFFER,k),z.bindFramebuffer(R.DRAW_FRAMEBUFFER,A);for(let e=0;e<c;e++)w?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,n.__webglTexture,i),T?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,r.__webglTexture,a),i===0?T?R.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):R.copyTexSubImage2D(v,a,f,p,l,u,o,s):R.blitFramebuffer(l,u,o,s,f,p,o,s,R.COLOR_BUFFER_BIT,R.NEAREST);z.bindFramebuffer(R.READ_FRAMEBUFFER,null),z.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?R.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?R.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):R.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):R.texSubImage2D(R.TEXTURE_2D,a,f,p,o,s,g,_,h);z.pixelStorei(R.UNPACK_ROW_LENGTH,y),z.pixelStorei(R.UNPACK_IMAGE_HEIGHT,b),z.pixelStorei(R.UNPACK_SKIP_PIXELS,x),z.pixelStorei(R.UNPACK_SKIP_ROWS,S),z.pixelStorei(R.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&R.generateMipmap(v),z.unbindTexture()},this.initRenderTarget=function(e){B.get(e).__webglFramebuffer===void 0&&V.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?V.setTextureCube(e,0):e.isData3DTexture?V.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?V.setTexture2DArray(e,0):V.setTexture2D(e,0),z.unbindTexture()},this.resetState=function(){j=0,ee=0,M=null,z.reset(),qe.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return $t}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=J._getDrawingBufferColorSpace(e),t.unpackColorSpace=J._getUnpackColorSpace()}},bu={bg:198659,holo:3407718,unit:383464,defense:16722541,damage:16763210,alert:16726843,gold:16763210},xu=1.35,Su=1.6,Cu=[[0,-1],[1,0],[0,1],[-1,0]],wu=[[1,0],[0,1],[-1,0],[0,-1]],Tu=[`N`,`E`,`S`,`O`],Eu=new Map;function Du(e){let t=Eu.get(e);if(t)return t;let n=[];for(let t=0;t<=10;t++){let r=document.createElement(`canvas`);r.width=256,r.height=40;let i=new ka(r);i.colorSpace=qt;let a=()=>{let n=r.getContext(`2d`);n.clearRect(0,0,256,40),n.fillStyle=`rgba(0,10,3,0.78)`,n.fillRect(0,4,256,32),n.font=`800 26px "JetBrains Mono", ui-monospace, monospace`,n.textBaseline=`middle`,n.fillStyle=e,n.shadowColor=e,n.shadowBlur=6;let a=`█`.repeat(t),o=`░`.repeat(10-t),s=n.measureText(`[`+a+o+`]`).width;n.fillText(`[`+a,(256-s)/2,21);let c=n.measureText(`[`+a).width;n.globalAlpha=.45,n.fillText(o,(256-s)/2+c,21),n.globalAlpha=1,n.fillText(`]`,(256-s)/2+n.measureText(`[`+a+o).width,21),i.needsUpdate=!0};a(),document.fonts?.ready.then(a),n.push(i)}return Eu.set(e,n),n}var Ou=class{w;sprite;texs;level=-1;constructor(e,t,n){this.w=e,this.texs=Du(t),this.sprite=new Hi(new Oi({map:this.texs[10],transparent:!0,depthTest:!1,depthWrite:!1})),this.sprite.scale.set(e,e*.156,1),this.sprite.renderOrder=11,n.add(this.sprite)}set(e,t,n){if(this.sprite.visible=n,!n)return;this.sprite.position.copy(e);let r=t<=0?0:Math.max(1,Math.min(10,Math.ceil(t*10)));r!==this.level&&(this.level=r,this.sprite.material.map=this.texs[r])}dispose(e){e.remove(this.sprite),this.sprite.material.dispose()}},ku=new Map;function Au(e,t,n){let r=`${e}:${t?`o`:`c`}:${n}`,i=ku.get(r);if(i)return i;let a=document.createElement(`canvas`);a.width=128,a.height=96;let o=new ka(a);o.colorSpace=qt;let s=()=>{let r=a.getContext(`2d`),i=t?`#ffc94a`:`#05d9e8`;r.clearRect(0,0,128,96),r.fillStyle=`rgba(0,16,18,0.92)`,r.fillRect(8,10,112,76),r.strokeStyle=i,r.shadowColor=i,r.shadowBlur=10,r.lineWidth=n===`legendaire`?9:n===`epique`?7:n===`rare`?5:4,r.strokeRect(8,10,112,76),t&&(r.lineWidth=2,r.strokeRect(16,18,96,60)),r.fillStyle=i,r.font=`800 44px "JetBrains Mono", ui-monospace, monospace`,r.textAlign=`center`,r.textBaseline=`middle`,r.fillText(e,64,50),o.needsUpdate=!0};return s(),document.fonts?.ready.then(s),ku.set(r,o),o}var ju={antivirus:`[AV]`,parefeu:`[FW]`,potdemiel:`[HP]`,scanner:`[SC]`},Mu=new Map;function Nu(e,t){let n=`${e}:${t?`o`:`c`}`,r=Mu.get(n);if(r)return r;let i=document.createElement(`canvas`);i.width=i.height=128;let a=i.getContext(`2d`),o=t?`#ffc94a`:`#05d9e8`,s=e=>{if(a.clearRect(0,0,128,128),a.save(),a.beginPath(),a.arc(64,64,54,0,Math.PI*2),a.clip(),a.fillStyle=`#062a2e`,a.fillRect(0,0,128,128),e){let t=Math.min(e.width,e.height);a.drawImage(e,(e.width-t)/2,(e.height-t)/2*.6,t,t,10,10,108,108),a.fillStyle=`rgba(5,217,232,0.14)`,a.fillRect(0,0,128,128)}a.restore(),a.lineWidth=t?10:7,a.strokeStyle=o,a.beginPath(),a.arc(64,64,56,0,Math.PI*2),a.stroke(),c.needsUpdate=!0},c=new ka(i);c.colorSpace=qt,s();let l=new Image;return l.onload=()=>s(l),l.src=`/celebs/${e}.jpg`,Mu.set(n,c),c}function Pu(e,t,n=64,r=128){let i=document.createElement(`canvas`);i.width=r,i.height=128;let a=new ka(i);a.colorSpace=qt;let o=()=>{let o=i.getContext(`2d`);o.clearRect(0,0,r,128),o.font=`800 ${n}px "JetBrains Mono", ui-monospace, monospace`,o.textAlign=`center`,o.textBaseline=`middle`,o.fillStyle=t,o.shadowColor=t,o.shadowBlur=8,o.fillText(e,r/2,68),a.needsUpdate=!0};return o(),document.fonts?.ready.then(o),new Hi(new Oi({map:a,transparent:!0,depthWrite:!1,depthTest:!1}))}var Fu=` .:-=+*#%@`;function Iu(){let e=document.createElement(`canvas`);e.width=320,e.height=52;let t=new ka(e);t.minFilter=je,t.magFilter=je,t.generateMipmaps=!1;let n=()=>{let n=e.getContext(`2d`);n.fillStyle=`#000`,n.fillRect(0,0,e.width,52),n.fillStyle=`#fff`,n.font=`700 40px "JetBrains Mono", ui-monospace, monospace`,n.textAlign=`center`,n.textBaseline=`middle`;for(let e=0;e<10;e++)n.fillText(Fu[e],e*32+16,28);t.needsUpdate=!0};return n(),document.fonts?.ready.then(n),t}var Lu=`varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,Ru=`
uniform sampler2D tScene; uniform vec2 grid;
varying vec2 vUv;
void main() {
  vec2 cell = floor(vUv * grid);
  vec3 best = vec3(0.0); float bl = -1.0; vec3 sum = vec3(0.0);
  for (int i = 0; i < 3; i++) for (int j = 0; j < 3; j++) {
    vec2 uv = (cell + (vec2(float(i), float(j)) + 0.5) / 3.0) / grid;
    vec3 c = texture2D(tScene, uv).rgb;
    float l = max(c.r, max(c.g, c.b));
    sum += c;
    if (l > bl) { bl = l; best = c; }
  }
  gl_FragColor = vec4(mix(sum / 9.0, best, 0.55), 1.0);
}`,zu=`
uniform sampler2D tCells; uniform sampler2D tGlyphs; uniform vec2 grid; uniform vec2 cellPx; uniform float nGlyphs; uniform float time;
void main() {
  vec2 px = gl_FragCoord.xy;
  vec2 cell = floor(px / cellPx);
  vec2 inCell = fract(px / cellPx);
  vec3 c = texture2D(tCells, (cell + 0.5) / grid).rgb;
  float l = max(c.r, max(c.g, c.b));
  float idx = floor(clamp(l * 1.1, 0.0, 0.999) * nGlyphs);
  float m = texture2D(tGlyphs, vec2((idx + inCell.x) / nGlyphs, inCell.y)).r;
  vec3 hue = c / max(l, 0.0001);
  float glow = 0.55 + 0.9 * l;
  vec3 col = hue * glow * m + c * 0.12;
  // léger scintillement de phosphore
  col *= 0.94 + 0.06 * sin(time * 9.0 + cell.y * 0.7);
  gl_FragColor = vec4(col, 1.0);
}`,Bu=class{canvas;renderer;scene=new Tr;overlay3d=new Tr;camera;ascii=!0;labelOf=e=>e.slice(0,2).toUpperCase();rtScene;rtCells;quadCam=new No(-1,1,1,-1,0,1);reduceScene=new Tr;asciiScene=new Tr;reduceMat;asciiMat;cellCss={w:7,h:12};floors=4;idle=!0;panelShift=!1;shiftNow=0;shiftY=0;onTap=null;tower=new gr;units=new Map;defs=new Map;floorLines=[];floorFills=[];cracks=[];server;serverCore;serverFlash=0;zones=[];zoneOn=!1;beams;beamPos;beamCol;maxBeams=160;theta=.6;phi=.5;radius=14;rMin=7;rMax=22;target=new K(0,2,0);introT=-1;shakeT=0;time=0;hpFrac=1;glitchT=0;pointers=new Map;downAt={x:0,y:0,t:0,moved:0};pinchD=0;overlay;numbers=[];constructor(e,t){this.canvas=e,this.overlay=t,this.renderer=new yu({canvas:e,antialias:!0,powerPreference:`high-performance`}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setClearColor(bu.bg,1),this.camera=new Mo(50,1,.1,200),this.scene.fog=new wr(bu.bg,18,48),this.scene.add(this.tower),this.buildGround();let n={minFilter:je,magFilter:je,depthBuffer:!0};this.rtScene=new zn(4,4,n),this.rtCells=new zn(4,4,{minFilter:Oe,magFilter:Oe,depthBuffer:!1}),this.reduceMat=new to({vertexShader:Lu,fragmentShader:Ru,uniforms:{tScene:{value:this.rtScene.texture},grid:{value:new G(1,1)}},depthTest:!1,depthWrite:!1}),this.asciiMat=new to({vertexShader:Lu,fragmentShader:zu,depthTest:!1,depthWrite:!1,uniforms:{tCells:{value:this.rtCells.texture},tGlyphs:{value:Iu()},grid:{value:new G(1,1)},cellPx:{value:new G(7,12)},nGlyphs:{value:10},time:{value:0}}}),this.reduceScene.add(new sa(new Ua(2,2),this.reduceMat)),this.asciiScene.add(new sa(new Ua(2,2),this.asciiMat));let r=new vi;this.beamPos=new Float32Array(this.maxBeams*6),this.beamCol=new Float32Array(this.maxBeams*6),r.setAttribute(`position`,new ii(this.beamPos,3)),r.setAttribute(`color`,new ii(this.beamCol,3)),this.beams=new Da(r,new ha({vertexColors:!0,transparent:!0,opacity:.85,blending:2,depthWrite:!1})),this.beams.frustumCulled=!1,this.scene.add(this.beams),this.setBuilding(4),this.bindInput(),this.resize(),window.addEventListener(`resize`,()=>this.resize())}buildGround(){let e=new sa(new Na(9.4,.12,9.4),new Yi({color:134148,transparent:!0,opacity:.9}));e.position.y=-.07,this.scene.add(e);let t=new es(9.4,12,bu.holo,bu.holo);t.material.transparent=!0,t.material.opacity=.07,t.position.y=0,this.scene.add(t);let n=new Da(new Va(new Na(9.4,.12,9.4)),new ha({color:bu.holo,transparent:!0,opacity:.55}));n.position.y=-.07,this.scene.add(n);for(let e=0;e<4;e++){let[t,n]=Cu[e],r=new sa(new Ua(3.2,2.2),new Yi({color:bu.unit,transparent:!0,opacity:.05,depthWrite:!1,side:2}));r.rotation.x=-Math.PI/2,r.rotation.z=e%2==0?0:Math.PI/2,r.position.set(t*3.25,.02,n*3.25),this.scene.add(r),this.zones.push(r);let i=Pu(Tu[e],`#33ff66`,70);i.scale.set(.9,.9,1),i.position.set(t*4.95,.35,n*4.95),i.material.opacity=.8,this.overlay3d.add(i)}}setBuilding(e){this.floors=e;for(let e of[...this.tower.children])this.tower.remove(e);this.floorLines=[],this.floorFills=[],this.cracks=[];let t=()=>new ha({color:bu.holo,transparent:!0,opacity:.9,blending:2,depthWrite:!1});for(let n=0;n<e;n++){let e=new gr;e.position.y=n*xu+xu/2;let r=new Na(Su*2,xu*.96,Su*2),i=new Da(new Va(r),t()),a=new sa(r,new Yi({color:bu.holo,transparent:!0,opacity:.025,depthWrite:!1,side:2})),o=[];for(let e=0;e<4;e++){let[t,n]=Cu[e],[r,i]=wu[e];for(let e of[-1,0,1]){let a=t*Su*1.001+r*e*.8,s=n*Su*1.001+i*e*.8;o.push(a,-1.35*.28,s,a,xu*.24,s)}}let s=new vi;s.setAttribute(`position`,new X(o,3));let c=new Da(s,new ha({color:bu.holo,transparent:!0,opacity:.16,depthWrite:!1}));e.add(i,a,c);let l=[];for(let e=0;e<3;e++){let e=Math.floor(Math.random()*4),[t,n]=Cu[e],[r,i]=wu[e],a=(Math.random()-.5)*Su*1.4,o=xu*.45;for(let e=0;e<4;e++){let e=a+(Math.random()-.5)*.7,s=o-xu*.22;l.push(t*Su*1.01+r*a,o,n*Su*1.01+i*a,t*Su*1.01+r*e,s,n*Su*1.01+i*e),a=e,o=s}}let u=new vi;u.setAttribute(`position`,new X(l,3));let d=new Da(u,new ha({color:bu.damage,transparent:!0,opacity:.95}));d.visible=!1,e.add(d),this.tower.add(e),this.floorLines.push(i),this.floorFills.push(a),this.cracks.push(d)}this.server=new gr,this.server.position.y=e*xu+.65;let n=new Na(.9,.9,.9);this.server.add(new Da(new Va(n),t())),this.serverCore=new sa(new Na(.5,.5,.5),new Yi({color:bu.holo,transparent:!0,opacity:.7})),this.server.add(this.serverCore);let r=new vi;r.setAttribute(`position`,new X([0,-.65,0,0,-.45,0],3)),this.server.add(new Da(r,t())),this.tower.add(this.server);let i=e*xu;this.target.set(0,Math.max(1,i*.38),0),this.radius=13+e*1.35,this.rMin=this.radius*.5,this.rMax=this.radius*1.5;for(let e of[...this.units.keys()])this.removeUnit(e);for(let e of[...this.defs.keys()])this.removeDef(e)}nodePos(e,t,n,r=new K){let[i,a]=Cu[e],[o,s]=wu[e];return t<=0?r.set(i*3.35+o*n,.35,a*3.35+s*n):t>this.floors?r.set(i*.75+o*n*.35,this.floors*xu+.45,a*.75+s*n*.35):r.set(i*1.9200000000000002+o*n,(t-.5)*xu,a*1.9200000000000002+s*n)}sync(e,t){this.hpFrac=e.maxHp>0?e.hp/e.maxHp:1;for(let e of this.units.values())e.seen=!1;for(let e of this.defs.values())e.seen=!1;let n=new K,r=new K,i=1-Math.exp(-t*12);for(let r of e.defs){let e=this.defs.get(r.key);if(!e){if(r.destroyed)continue;e=this.createDef(r)}e.seen=!0;let i=!r.hidden;e.group.visible=i&&e.dying!==0,r.destroyed&&e.dying<0&&(e.dying=.6,this.burst(e.pos,bu.damage));let a=r.cut?Math.floor(this.time*10)%2==0?.25:.7:1;for(let t of e.mats)t.opacity=(t.userData.baseOpacity??1)*a;e.spin&&!r.cut&&(e.spin.rotation.y+=t*(r.kind===`scanner`?1.6:2.2));let o=0;e.arrive>0?(e.arrive-=t,o=Math.max(0,e.arrive)*6,e.group.scale.setScalar(1+Math.max(0,e.arrive)*.8)):e.group.scale.setScalar(1),e.group.position.set(e.pos.x,e.pos.y+o,e.pos.z),e.bar&&(n.copy(e.group.position),n.y+=r.kind===`parefeu`?xu*.55:.55,e.bar.set(n,r.hp/r.maxHp,i&&!r.destroyed),e.label&&(e.label.visible=i&&!r.destroyed,e.label.position.set(n.x,n.y+.24,n.z),e.label.material.opacity=r.cut?a:1))}for(let a of e.units){let e=this.units.get(a.key);if(!e){if(!a.alive)continue;e=this.createUnit(a)}e.seen=!0;let o=a.jitter/400*1.15;this.nodePos(a.face,a.level,o,n),a.toLevel!==a.level&&a.progress>0&&(this.nodePos(a.face,a.toLevel,o,r),n.lerp(r,Math.min(1,a.progress/1e3))),e.pos.lerp(n,i),!a.alive&&e.dying<0&&(e.dying=.7),e.sprite.position.copy(e.pos);let s=a.rarity===`legendaire`?.82:a.rarity===`epique`?.72:a.rarity===`rare`?.64:.56,c=this.ascii?s*.75:s;if(e.dying>=0){e.dying-=t;let n=Math.floor(this.time*30)%2==0;e.sprite.visible=n&&e.dying>0,e.sprite.position.x+=(Math.random()-.5)*.25,e.sprite.scale.set(s*(1+(Math.random()-.5)*.6),s*.6,1),e.sprite.material.color.setHex(n?bu.alert:16777215),e.bar.set(e.pos,0,!1)}else e.sprite.visible=!0,e.sprite.scale.set(s,c,1),e.sprite.material.color.setHex(16777215),r.copy(e.pos),r.y+=c*.5+.1,e.bar.set(r,a.hp/a.maxHp,!0)}for(let[e,t]of this.units)(!t.seen||t.dying!==-1&&t.dying<=0)&&this.removeUnit(e);for(let[e,n]of this.defs){if(n.dying>=0){n.dying-=t,n.group.scale.setScalar(1+(.6-n.dying)*1.5);for(let e of n.mats)e.opacity=Math.max(0,n.dying)}(!n.seen||n.dying!==-1&&n.dying<=0)&&this.removeDef(e)}this.updateBeams(e)}createUnit(e){let t=new Hi(new Oi({map:this.ascii?Au(this.labelOf(e.celebId),e.original,e.rarity):Nu(e.celebId,e.original),transparent:!0,depthWrite:!1,depthTest:!1}));t.renderOrder=5,this.overlay3d.add(t);let n=new Ou(.8,e.original?`#ffc94a`:`#05d9e8`,this.overlay3d),r=this.nodePos(e.face,e.level,e.jitter/400*1.15);r.y+=1.2;let i={sprite:t,bar:n,pos:r,dying:-1,seen:!0};return this.units.set(e.key,i),i}removeUnit(e){let t=this.units.get(e);t&&(this.overlay3d.remove(t.sprite),t.sprite.material.dispose(),t.bar.dispose(this.overlay3d),this.units.delete(e))}createDef(e){let t=new gr,n=[],r=(e,t=!1)=>{let r=new Yi({color:bu.defense,transparent:!0,opacity:e,wireframe:t,depthWrite:!1,side:2});return r.userData.baseOpacity=e,n.push(r),r},i=null,a=0;for(let t of this.defs.values())t.kind!==`parefeu`&&t.face===e.face&&t.floor===e.floor&&a++;let o=e.kind===`parefeu`?0:[0,-.95,.95,-.5,.5][a%5],s=this.nodePos(e.face,e.floor,o);if(e.kind===`antivirus`){let e=new sa(new Ha(.28),r(.85)),n=new sa(new Ha(.4),r(.9,!0));t.add(e,n),i=n}else if(e.kind===`scanner`){let e=new sa(new Ka(.32,.05,6,20),r(.9));e.rotation.x=Math.PI/2;let n=new sa(new Fa(.22,.3,8,1,!0),r(.6,!0)),a=new sa(new Wa(2.2,2.35,48),r(.18));a.rotation.x=-Math.PI/2;let o=new gr;o.add(e,n),t.add(o,a),i=o}else if(e.kind===`parefeu`){let[n,i]=Cu[e.face],a=new sa(new Ua(Su*2.1,xu*.92,6,3),r(.22)),o=new sa(new Ua(Su*2.1,xu*.92,6,3),r(.75,!0));for(let e of[a,o])e.rotation.y=Math.atan2(n,i),t.add(e);s.x-=n*.12,s.z-=i*.12}else{let e=new sa(new Ga(.2,8,6),r(.3,!0));t.add(e)}this.scene.add(t);let c=e.kind===`potdemiel`?null:new Ou(e.kind===`parefeu`?1.5:1,`#ff2a6d`,this.overlay3d),l=e.kind===`potdemiel`?null:Pu(ju[e.kind],`#ff2a6d`,54,192);l&&(l.scale.set(.75,.5,1),l.renderOrder=12,this.overlay3d.add(l));let u={group:t,bar:c,label:l,mats:n,pos:s,lateral:o,arrive:e.live?1.1:0,dying:-1,seen:!0,kind:e.kind,face:e.face,floor:e.floor,spin:i};return e.live&&this.column(s),this.defs.set(e.key,u),u}removeDef(e){let t=this.defs.get(e);if(t){this.scene.remove(t.group),t.group.traverse(e=>{e.geometry&&e.geometry.dispose()});for(let e of t.mats)e.dispose();t.bar?.dispose(this.overlay3d),t.label&&(this.overlay3d.remove(t.label),t.label.material.map?.dispose(),t.label.material.dispose()),this.defs.delete(e)}}updateBeams(e){let t=0,n=new Y(bu.unit),r=new Y(bu.defense),i=new K(0,this.floors*xu+.65,0),a=(e,n,r)=>{t>=this.maxBeams||(this.beamPos.set([e.x,e.y,e.z,n.x,n.y,n.z],t*6),this.beamCol.set([r.r,r.g,r.b,r.r*.4,r.g*.4,r.b*.4],t*6),t++)},o=(e,t)=>e.pos.y>this.floors*xu?t.copy(i):(t.copy(e.pos),Math.abs(t.x)>Math.abs(t.z)?t.x=Math.sign(t.x)*Su:t.z=Math.sign(t.z)*Su,t),s=new K;for(let t of e.units){if(!t.alive||!t.targetKey)continue;let e=this.units.get(t.key);if(e){if(t.targetKey===`B`){if(Math.floor(this.time*8+t.jitter)%3!=0)continue;a(e.pos,o(e,s),n)}else{let r=this.defs.get(t.targetKey);r&&a(e.pos,r.group.position,n)}}}for(let t of e.defs){if(!t.targetKey||t.destroyed)continue;let e=this.defs.get(t.key),n=this.units.get(t.targetKey);e&&n&&a(e.group.position,n.pos,r)}this.beamPos.fill(0,t*6),this.beams.geometry.attributes.position.needsUpdate=!0,this.beams.geometry.attributes.color.needsUpdate=!0,this.beams.geometry.setDrawRange(0,t*2)}entityPos(e){if(e===`B`)return new K(0,this.floors*xu+.65,0);let t=this.units.get(e);if(t)return t.pos.clone();let n=this.defs.get(e);return n?n.group.position.clone():null}damageNumber(e,t,n,r){let i=n===`building`&&r?this.entityPos(r):this.entityPos(e);if(!i)return;n===`building`?(i=i.clone(),i.y+=.5,this.serverFlash=.25):i.y+=.7;let a=i.project(this.camera);if(a.z>1)return;let o=this.canvas.getBoundingClientRect(),s=(a.x*.5+.5)*o.width,c=(-a.y*.5+.5)*o.height;this.numbers.length>36&&this.numbers.shift()?.remove();let l=document.createElement(`div`);l.className=`dmg dmg-${n}`,l.textContent=`-${t}`,l.style.left=`${s+(Math.random()-.5)*18}px`,l.style.top=`${c}px`,this.overlay.appendChild(l),this.numbers.push(l),setTimeout(()=>{l.remove();let e=this.numbers.indexOf(l);e>=0&&this.numbers.splice(e,1)},1e3)}shake(e=.35){this.shakeT=e}glitch(){this.glitchT=.18}trap(e,t){let n=this.nodePos(e,t,0);this.ring(n,bu.alert,2.6),this.shake(.45)}ring(e,t,n){let r=new sa(new Wa(.2,.32,40),new Yi({color:t,transparent:!0,opacity:1,side:2,depthWrite:!1}));r.position.copy(e),r.lookAt(this.camera.position),this.scene.add(r);let i=performance.now(),a=()=>{let e=(performance.now()-i)/600;if(e>=1){this.scene.remove(r),r.geometry.dispose(),r.material.dispose();return}r.scale.setScalar(1+e*n*4),r.material.opacity=1-e,requestAnimationFrame(a)};requestAnimationFrame(a)}burst(e,t){this.ring(e.clone(),t,1.2)}column(e){let t=new sa(new Pa(.12,.35,12,10,1,!0),new Yi({color:bu.defense,transparent:!0,opacity:.5,blending:2,depthWrite:!1,side:2}));t.position.set(e.x,e.y+6,e.z),this.scene.add(t);let n=performance.now(),r=()=>{let e=(performance.now()-n)/1300;if(e>=1){this.scene.remove(t),t.geometry.dispose(),t.material.dispose();return}t.material.opacity=.55*(1-e),t.scale.x=t.scale.z=1+e,requestAnimationFrame(r)};requestAnimationFrame(r)}setDeployHighlight(e){this.zoneOn=e}intro(){this.introT=0}bindInput(){let e=this.canvas;e.addEventListener(`pointerdown`,t=>{if(e.setPointerCapture(t.pointerId),this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY}),this.pointers.size===1&&(this.downAt={x:t.clientX,y:t.clientY,t:performance.now(),moved:0}),this.pointers.size===2){let[e,t]=[...this.pointers.values()];this.pinchD=Math.hypot(e.x-t.x,e.y-t.y),this.downAt.moved=999}}),e.addEventListener(`pointermove`,e=>{let t=this.pointers.get(e.pointerId);if(!t)return;let n=e.clientX-t.x,r=e.clientY-t.y;if(t.x=e.clientX,t.y=e.clientY,this.pointers.size===1)this.downAt.moved+=Math.abs(n)+Math.abs(r),this.theta-=n*.008,this.phi=Math.max(.1,Math.min(1.15,this.phi+r*.005)),this.introT=-1;else if(this.pointers.size===2){let[e,t]=[...this.pointers.values()],n=Math.hypot(e.x-t.x,e.y-t.y);this.pinchD>0&&(this.radius=Math.max(this.rMin,Math.min(this.rMax,this.radius*(this.pinchD/n)))),this.pinchD=n}});let t=e=>{this.pointers.has(e.pointerId)&&(this.pointers.delete(e.pointerId),this.pointers.size===0&&this.downAt.moved<12&&performance.now()-this.downAt.t<600&&this.onTap?.(this.pickFace(e.clientX,e.clientY)),this.pointers.size<2&&(this.pinchD=0))};e.addEventListener(`pointerup`,t),e.addEventListener(`pointercancel`,t),e.addEventListener(`wheel`,e=>{e.preventDefault(),this.radius=Math.max(this.rMin,Math.min(this.rMax,this.radius*(1+Math.sign(e.deltaY)*.08)))},{passive:!1})}pickFace(e,t){let n=this.canvas.getBoundingClientRect(),r=new G((e-n.left)/n.width*2-1,-((t-n.top)/n.height)*2+1),i=new Zo;i.setFromCamera(r,this.camera);let a=new Ti(new K(0,1,0),0),o=new K;return!i.ray.intersectPlane(a,o)||Math.abs(o.x)>9||Math.abs(o.z)>9?null:Math.abs(o.x)>Math.abs(o.z)?o.x>0?1:3:o.z>0?2:0}resize(){let e=this.canvas.clientWidth||window.innerWidth,t=this.canvas.clientHeight||window.innerHeight;this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.fov=e<t?62:48,this.camera.updateProjectionMatrix(),this.cellCss=e<640?{w:6,h:10}:{w:7,h:12};let n=this.renderer.getPixelRatio(),r=Math.ceil(e/this.cellCss.w),i=Math.ceil(t/this.cellCss.h);this.rtScene.setSize(Math.min(Math.ceil(e*n*.5),r*3),Math.min(Math.ceil(t*n*.5),i*3)),this.rtCells.setSize(r,i),this.reduceMat.uniforms.grid.value.set(r,i),this.asciiMat.uniforms.grid.value.set(r,i),this.asciiMat.uniforms.cellPx.value.set(this.cellCss.w*n,this.cellCss.h*n)}setAscii(e){if(this.ascii!==e){this.ascii=e;for(let e of[...this.units.keys()])this.removeUnit(e)}}render(e){if(this.time+=e,this.introT>=0){this.introT+=e;let t=Math.min(1,this.introT/1.5),n=1-(1-t)**3;this.theta+=e*2.4*(1-n)+e*.1,t>=1&&(this.introT=-1)}else this.idle&&this.pointers.size===0&&(this.theta+=e*.12);let t=this.introT>=0?1+.5*(1-Math.min(1,this.introT/1.5)):1,n=this.radius*t,r=this.target.x+n*Math.cos(this.phi)*Math.sin(this.theta),i=this.target.z+n*Math.cos(this.phi)*Math.cos(this.theta),a=this.target.y+n*Math.sin(this.phi);if(this.camera.position.set(r,a,i),this.shakeT>0){this.shakeT=Math.max(0,this.shakeT-e);let t=this.shakeT*.6;this.camera.position.x+=(Math.random()-.5)*t,this.camera.position.y+=(Math.random()-.5)*t}this.camera.lookAt(this.target);let o=this.canvas.clientWidth||window.innerWidth,s=this.canvas.clientHeight||window.innerHeight,c=this.panelShift&&o>900?-Math.min(.22*o,(o-560)/2-40):0,l=this.panelShift&&o<=900?s*.3:0,u=Math.min(1,e*6);this.shiftNow+=(c-this.shiftNow)*u,this.shiftY+=(l-this.shiftY)*u,Math.abs(this.shiftNow)>.5||Math.abs(this.shiftY)>.5?this.camera.setViewOffset(o,s,this.shiftNow,this.shiftY,o,s):this.camera.view&&this.camera.clearViewOffset();let d=1+Math.sin(this.time*3)*.12;this.serverCore.scale.setScalar(d),this.serverCore.rotation.y+=e*.8,this.server.rotation.y-=e*.3,this.serverFlash=Math.max(0,this.serverFlash-e),this.serverCore.material.color.setHex(this.serverFlash>0?bu.damage:bu.holo);let f=this.hpFrac<=.25?3:this.hpFrac<=.5?2:+(this.hpFrac<=.75);this.cracks.forEach((e,t)=>{let n=this.floors-1-t;e.visible=f>0&&n<Math.ceil(f/3*this.floors)}),this.floorLines.forEach((e,t)=>{let n=e.material,r=f>0&&Math.random()<.01*f*f;n.opacity=r?.15:.9,n.color.setHex(f>=3&&Math.floor(this.time*4+t)%7==0?bu.damage:bu.holo);let i=e.parent;i.position.x=r?(Math.random()-.5)*.12*f:0}),this.zones.forEach((e,t)=>{let n=e.material;n.opacity=this.zoneOn?.16+.1*Math.sin(this.time*6+t):.04}),this.glitchT>0&&(this.glitchT-=e,this.canvas.style.transform=this.glitchT>0?`translateX(${(Math.random()-.5)*8}px)`:``,this.canvas.style.filter=this.glitchT>0?`hue-rotate(90deg) saturate(1.6)`:``),this.ascii?(this.asciiMat.uniforms.time.value=this.time,this.renderer.setRenderTarget(this.rtScene),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(this.rtCells),this.renderer.render(this.reduceScene,this.quadCam),this.renderer.setRenderTarget(null),this.renderer.render(this.asciiScene,this.quadCam)):(this.renderer.setRenderTarget(null),this.renderer.render(this.scene,this.camera)),this.renderer.autoClear=!1,this.renderer.render(this.overlay3d,this.camera),this.renderer.autoClear=!0}};function Vu(e){let t=[];for(let n of e.units){if(!n.deployed)continue;let r=null;n.target===4095?r=`B`:n.target>=2048&&(r=e.defenses[n.target-2048]?.id??null),t.push({key:n.ref,celebId:n.celebId,role:n.role,rarity:n.rarity,original:n.isOriginal,face:n.face,level:n.level,toLevel:n.moving?n.moveTo:n.level,progress:n.moving?n.progress:0,hp:n.hp,maxHp:n.maxHp,alive:n.alive,jitter:n.jitter,targetKey:r})}let n=e.defenses.map(t=>({key:t.id,kind:t.kind,face:t.face,floor:t.floor,hp:t.hp,maxHp:t.maxHp||1,destroyed:t.destroyed,cut:e.tick<t.cutUntil,hidden:t.kind===`potdemiel`,live:t.source!==`base`,targetKey:t.target>=0&&t.target<2048?e.units[t.target]?.ref??null:null}));return{floors:e.floors,hp:e.hp,maxHp:e.building.maxHp,units:t,defs:n}}function Hu(e){let t=[];for(let n of e){let e=`${n.celebId}:${n.isOriginal?`o`:`c`}`,r=t.find(t=>t.key===e);r||(r={key:e,celebId:n.celebId,original:n.isOriginal,refs:[],rarity:n.rarity,district:n.district},t.push(r)),r.refs.push(n.ref)}return t}var Uu=[{tick:820,by:`Max`,kind:`parefeu`},{tick:900,by:`Zoé`,kind:`antivirus`}],Wu={antivirus:`un Antivirus`,parefeu:`un Pare-feu`,potdemiel:`un Pot de miel`,scanner:`un Scanner`};function Gu(e){return Wu[e]}function Ku(e,t){let n=[0,0,0,0];for(let r of e.units)r.deployed&&r.alive&&(!t||r.level===0)&&n[r.face]++;let r=0;for(let e=1;e<4;e++)n[e]>n[r]&&(r=e);return r}function qu(e,t,n){let r=n=>e.defenses.some(e=>!e.destroyed&&e.face===t&&e.floor===n&&e.kind!==`potdemiel`);for(let t=n;t<=e.floors;t++)if(!r(t))return t;for(let e=1;e<n;e++)if(!r(e))return e;return Math.min(n,e.floors)}var Ju=class{input;opts;onEvents;onNote;sim;poses=[];externals=[];hand;startHp;acc=0;constructor(e,t,n,r){this.input=e,this.opts=t,this.onEvents=n,this.onNote=r,this.sim=new S({...e}),this.hand=Hu(e.squad),this.startHp=e.building.hp}get done(){return this.sim.done}deploy(e,t){if(this.sim.done||e.refs.length===0)return null;let n=e.refs[0],r={tick:this.sim.tick,unitRef:n,face:t};return this.sim.addPose(r)?(e.refs.shift(),this.poses.push(r),n):null}abandon(){this.sim.abandon()}update(e){if(this.sim.done)return;this.acc+=Math.min(e,.25);let t=0;for(;this.acc>=.1&&!this.sim.done&&t<4;){this.acc-=.1,t++,this.script();let e=this.sim.step();e.length&&this.onEvents(e)}}addExternal(e){let t={...e,tick:this.sim.tick};this.sim.addExternal(t)&&this.externals.push(t)}script(){let n=this.sim.tick;if(this.opts.linaOnline&&n===400){let e=Ku(this.sim,!1);this.addExternal({kind:`antivirus`,face:e,floor:qu(this.sim,e,1),source:`owner`,by:this.opts.owner}),this.onNote({k:`notify`,text:`${this.opts.owner} ajoute un Antivirus !`,tone:`alert`})}if(this.opts.crew){if(n===750){let r=Math.ceil((e-n)/10),i=Math.ceil(this.sim.hp/t).toLocaleString(`fr-FR`),a=Math.ceil(this.sim.building.maxHp/t).toLocaleString(`fr-FR`);this.onNote({k:`chat`,who:this.opts.owner,text:`${this.opts.buildingName} attaqué ! ${i} / ${a} PV · ${Math.floor(r/60)}:${String(r%60).padStart(2,`0`)}`,ask:!0})}for(let e of Uu){if(n!==e.tick)continue;let t=e.kind===`parefeu`?Ku(this.sim,!0):Ku(this.sim,!1),r=e.kind===`parefeu`?this.sim.defenses.some(e=>e.kind===`parefeu`&&!e.destroyed&&e.face===t&&e.floor===1)?Math.min(2,this.sim.floors):1:qu(this.sim,t,2);this.addExternal({kind:e.kind,face:t,floor:r,source:`crew`,by:e.by}),this.onNote({k:`chat`,who:e.by,text:`${e.by} envoie ${Gu(e.kind)}`})}}}fullInput(){return{...this.input,poses:this.poses.slice(),externals:this.externals.slice(),endTick:this.sim.endReason===`abandon`?this.sim.result().endTick:void 0}}result(){return this.sim.result()}},Yu=class{input;result;units=new Map;defs=new Map;squad=new Map;i=0;arrive=new Map;hp;maxHp;floors;endTick;constructor(e,t,n){this.input=e,this.result=t,this.floors=n,this.maxHp=e.building.maxHp,this.hp=e.building.hp,this.endTick=t.endTick;for(let t of e.squad)this.squad.set(t.ref,t);for(let t of e.building.defenses)this.defs.set(t.id,{key:t.id,kind:t.kind,face:t.face,floor:t.floor,hp:t.hp,maxHp:l[t.kind].hp*1e3||1,destroyed:!1,cut:!1,hidden:t.kind===`potdemiel`,targetKey:null,live:!1,cutUntil:0,targetUntil:0});let r=t.events,i=new Map;r.forEach((e,t)=>{if(e.k===`move`)i.set(e.unit,t);else if(e.k===`arrive`){let t=i.get(e.unit);t!==void 0&&(this.arrive.set(t,e.t),i.delete(e.unit))}})}advanceTo(e){let t=[],n=this.result.events;for(;this.i<n.length&&n[this.i].t<=e;){let e=n[this.i];this.apply(e,this.i),t.push(e),this.i++}return t}apply(e,t){switch(e.k){case`spawn`:{let t=this.squad.get(e.unit);if(!t)return;let n=c(t.district),r=x(t.rarity,t.district,this.input.building.district).hp;this.units.set(e.unit,{key:e.unit,celebId:t.celebId,role:n,rarity:t.rarity,original:t.isOriginal,face:e.face,level:0,toLevel:0,progress:0,hp:r,maxHp:r,alive:!0,jitter:e.jitter,targetKey:null,moveStart:0,moveEnd:0,targetUntil:0});break}case`move`:{let n=this.units.get(e.unit);if(!n)return;n.toLevel=e.to,n.moveStart=e.t,n.moveEnd=this.arrive.get(t)??e.t+20;break}case`arrive`:{let t=this.units.get(e.unit);if(!t)return;t.level=e.level,t.toLevel=e.level,t.progress=0;break}case`dmg`:{e.tgt===`B`&&(this.hp=e.hp);let t=this.units.get(e.tgt);t&&(t.hp=e.hp);let n=this.defs.get(e.tgt);n&&(n.hp=e.hp);let r=this.units.get(e.src);r&&(r.targetKey=e.tgt,r.targetUntil=e.t+10);let i=this.defs.get(e.src);i&&this.units.has(e.tgt)&&(i.targetKey=e.tgt,i.targetUntil=e.t+10);break}case`down`:{let t=this.units.get(e.unit);t&&(t.alive=!1,t.hp=0);break}case`defDown`:{let t=this.defs.get(e.def);t&&(t.destroyed=!0,t.hp=0);break}case`cut`:{let t=this.defs.get(e.def);t&&(t.cutUntil=e.until);break}case`reinforce`:this.defs.set(e.def,{key:e.def,kind:e.kind,face:e.face,floor:e.floor,hp:e.hp,maxHp:l[e.kind].hp*1e3||1,destroyed:!1,cut:!1,hidden:e.kind===`potdemiel`,targetKey:null,live:!0,cutUntil:0,targetUntil:0});break;case`end`:this.hp=e.hp}}frame(e){let t=[];for(let n of this.units.values())n.toLevel!==n.level&&n.moveEnd>n.moveStart&&(n.progress=Math.max(0,Math.min(999,Math.round((e-n.moveStart)/(n.moveEnd-n.moveStart)*1e3)))),e>n.targetUntil&&(n.targetKey=null),t.push(n);let n=[];for(let t of this.defs.values())t.cut=e<t.cutUntil,e>t.targetUntil&&(t.targetKey=null),n.push(t);return{floors:this.floors,hp:this.hp,maxHp:this.maxHp,units:t,defs:n}}},Xu=`steal-internet:proto-vol:v1`;function Zu(){let e=Date.now(),r={};for(let i of p)r[i.id]={hp:n[i.size].maxHp*t,at:e,defenses:m(i),owner:i.owner};return{v:1,wallet:f,extraPlaces:0,clockOffset:0,selected:`netflix`,collection:h.map(e=>({celebId:e.celebId,copies:e.copies,recoverUntil:0})),buildings:r,bans:{},dev:{linaOnline:!1,crew:!1,open:!1,ascii:!0},muted:!1}}function Qu(){try{let e=localStorage.getItem(Xu);if(e){let t=JSON.parse(e);if(t&&t.v===1&&t.buildings&&t.collection){let e=Zu();for(let n of p)t.buildings[n.id]||(t.buildings[n.id]=e.buildings[n.id]);return{...e,...t,dev:{...e.dev,...t.dev}}}}}catch{}return Zu()}var $=Qu();function $u(){try{localStorage.setItem(Xu,JSON.stringify($))}catch{}}function ed(){let e={...$.dev},t=$.muted;Object.assign($,Zu()),$.dev=e,$.muted=t,$u()}function td(){return Date.now()+$.clockOffset}function nd(e){$.clockOffset+=e,$u()}function rd(e=$.selected){return p.find(t=>t.id===e)??p[0]}function id(e=$.selected){let r=rd(e),i=$.buildings[r.id],a=n[r.size].maxHp*t;return T({id:r.id,name:r.name,district:r.district,size:r.size,maxHp:a,hp:i.hp,defenses:i.defenses.map(e=>({...e}))},td()-i.at)}function ad(e,t){let n=$.buildings[e.id];n.hp=e.hp,n.at=td(),n.defenses=e.defenses.map(e=>({...e})),t&&(n.owner=t),$u()}function od(e=$.selected){let t=id(e);t.defenses=m(rd(e)),ad(t)}function sd(e=$.selected){return Math.floor(rd(e).price*100/1e3)}function cd(e=$.selected){return Math.max(0,($.bans[e]??0)-td())}function ld(e=$.selected){$.bans[e]=td()+18e5,$u()}function ud(e=$.selected){return $.wallet<500||cd(e)<=0?!1:($.wallet-=500,delete $.bans[e],$u(),!0)}function dd(){return 10+$.extraPlaces}function fd(){return dd()>=40?null:d($.extraPlaces)}function pd(){let e=fd();return e===null||$.wallet<e?!1:($.wallet-=e,$.extraPlaces++,$u(),!0)}function md(e){return $.collection.find(t=>t.celebId===e)??{celebId:e,copies:0,recoverUntil:0}}function hd(e){return Math.max(0,md(e).recoverUntil-td())}function gd(e){return Math.round(e).toLocaleString(`fr-FR`).replace(/ | /g,` `)}function _d(e){return gd(Math.ceil(e/t))}function vd(e){let t=Math.ceil(e/1e3),n=Math.floor(t/3600),r=Math.floor(t%3600/60),i=t%60;return n>0?`${n} h ${String(r).padStart(2,`0`)}`:r>=10?`${r} min`:`${r}:${String(i).padStart(2,`0`)}`}function yd(e){let t=Math.max(0,Math.ceil(e/10));return`${Math.floor(t/60)}:${String(t%60).padStart(2,`0`)}`}var bd=null,xd=null,Sd=new Map,Cd=new Map,wd=new Set([`elon-musk`,`gotaga`,`inoxtag`,`messi`,`michou`,`mrbeast`,`ronaldo`,`squeezie`,`the-weeknd`]);function Td(){if(bd){bd.state===`suspended`&&bd.resume();return}try{let e=window.AudioContext??window.webkitAudioContext;if(!e)return;bd=new e,xd=bd.createGain(),xd.gain.value=$.muted?0:.5,xd.connect(bd.destination)}catch{bd=null}}function Ed(){return $.muted}function Dd(e){if($.muted=e,$u(),xd&&(xd.gain.value=e?0:.5),e)for(let e of Cd.values())e.pause()}function Od(e,t){let n=performance.now();return(Sd.get(e)??-1e9)+t>n?!1:(Sd.set(e,n),!0)}function kd(e,t,n,r,i){if(!bd||!xd||$.muted)return;let a=bd.currentTime,o=bd.createOscillator(),s=bd.createGain();o.type=n,o.frequency.setValueAtTime(e,a),i&&o.frequency.exponentialRampToValueAtTime(i,a+t),s.gain.setValueAtTime(r,a),s.gain.exponentialRampToValueAtTime(1e-4,a+t),o.connect(s).connect(xd),o.start(a),o.stop(a+t+.02)}function Ad(e,t,n=2e3){if(!bd||!xd||$.muted)return;let r=Math.floor(bd.sampleRate*e),i=bd.createBuffer(1,r,bd.sampleRate),a=i.getChannelData(0);for(let e=0;e<r;e++)a[e]=(Math.random()*2-1)*(1-e/r);let o=bd.createBufferSource();o.buffer=i;let s=bd.createBiquadFilter();s.type=`lowpass`,s.frequency.value=n;let c=bd.createGain();c.gain.value=t,o.connect(s).connect(c).connect(xd),o.start()}function jd(e,t){if(!$.muted)try{let n=Cd.get(e);n||(n=new Audio(e),Cd.set(e,n)),n.volume=t,n.currentTime=0,n.play().catch(()=>void 0)}catch{}}var Md={tap(){kd(880,.05,`square`,.05)},deploy(){Od(`deploy`,60)&&kd(420,.12,`triangle`,.12,840)},voice(e){wd.has(e)&&Od(`voice`,4e3)&&jd(`/sons/celebs/${e}.mp3`,.45)},shot(){Od(`shot`,180)&&kd(1500,.06,`sawtooth`,.025,600)},hitBuilding(){Od(`hitB`,250)&&kd(140,.08,`square`,.04,90)},defDown(){kd(600,.35,`sawtooth`,.09,80),Ad(.25,.12,1200)},ko(){Od(`ko`,120)&&(kd(300,.18,`square`,.06,60),Ad(.12,.08,4e3))},trap(){jd(`/sons/boom.mp3`,.5),Ad(.5,.25,900)},cut(){kd(2200,.15,`sine`,.06,300)},alert(){kd(988,.12,`square`,.08),setTimeout(()=>kd(740,.18,`square`,.08),140)},reinforce(){kd(200,.4,`sine`,.1,900)},chat(){kd(1320,.07,`sine`,.06)},stolen(){jd(`/sons/rire.wav`,.5)},end(){kd(330,.3,`triangle`,.1,165)}},Nd=(e,t=!1)=>`<svg class="ic" viewBox="0 0 24 24" width="1em" height="1em" fill="${t?`currentColor`:`none`}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${e}</svg>`,Pd={influenceur:Nd(`<path d="M3 10v4h3l6 4V6L6 10H3z"/><path d="M16 9a4 4 0 0 1 0 6M19 6a8 8 0 0 1 0 12"/>`),hacker:Nd(`<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 9l3 3-3 3M12 15h5"/>`),star:Nd(`<path d="M12 3l2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3 6.5 20.2l1-6.2L3 9.6l6.2-.9z"/>`),viral:Nd(`<path d="M12 3c1 4 5 5.5 5 10a5 5 0 0 1-10 0c0-2.5 1.5-3.5 2.5-5 .5 1.5 1.5 2 2.5 2-1-2.5-.5-5 0-7z"/>`),antivirus:Nd(`<path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z"/><path d="M9 12l2 2 4-4"/>`),parefeu:Nd(`<rect x="3" y="5" width="18" height="14"/><path d="M3 10h18M3 14.5h18M9 5v5M15 5v5M6 10v4.5M12 10v4.5M18 10v4.5M9 14.5V19M15 14.5V19"/>`),potdemiel:Nd(`<path d="M12 3l7.8 4.5v9L12 21l-7.8-4.5v-9z"/><path d="M12 8v5M12 16h.01"/>`),scanner:Nd(`<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><path d="M12 12l6-6"/>`),hidden:Nd(`<path d="M12 3l7.8 4.5v9L12 21l-7.8-4.5v-9z"/><path d="M10 9.5a2 2 0 1 1 2.8 1.8c-.5.3-.8.7-.8 1.2V13M12 16h.01"/>`),heart:Nd(`<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/>`),target:Nd(`<circle cx="12" cy="12" r="7"/><path d="M12 2v5M12 17v5M2 12h5M17 12h5"/>`),building:Nd(`<rect x="6" y="3" width="12" height="18"/><path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2"/>`),sound:Nd(`<path d="M4 10v4h4l5 4V6L8 10z"/><path d="M16 9a4 4 0 0 1 0 6M18.5 6.5a7.5 7.5 0 0 1 0 11"/>`),mute:Nd(`<path d="M4 10v4h4l5 4V6L8 10z"/><path d="M17 9l5 6M22 9l-5 6"/>`),play:Nd(`<path d="M7 5l12 7-12 7z"/>`,!0),replay:Nd(`<path d="M4 12a8 8 0 1 0 2.3-5.6"/><path d="M4 4v4h4"/>`),ban:Nd(`<circle cx="12" cy="12" r="9"/><path d="M5.6 5.6l12.8 12.8"/>`),chat:Nd(`<path d="M4 5h16v11H9l-5 4z"/>`),check:Nd(`<path d="M5 12l5 5 9-10"/>`),plus:Nd(`<path d="M12 5v14M5 12h14"/>`),back:Nd(`<path d="M15 5l-7 7 7 7"/>`)};function Fd(e){return Pd[e]}function Id(e){return Pd[e]}var Ld={commune:{name:`Commune`,color:`#9aa4c0`},rare:{name:`Rare`,color:`#4da6ff`},epique:{name:`Épique`,color:`#c65bff`},legendaire:{name:`Légendaire`,color:`#ffc94a`}},Rd={petit:`petit`,moyen:`moyen`,grand:`grand`,geant:`géant`},zd=(e,t=document)=>t.querySelector(e),Bd=e=>e.replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]),Vd=zd(`#view`),Hd=zd(`#ui`),Ud=zd(`#dev`),Wd=zd(`#toasts`),Gd=new Bu(Vd,zd(`#fx`)),Kd=zd(`#log`);Gd.ascii=$.dev.ascii,Gd.labelOf=e=>{let t=ef(e).normalize(`NFD`).replace(/[\u0300-\u036f]/g,``).split(/[\s-]+/).filter(Boolean);return(t.length>1?t[0][0]+t[t.length-1][0]:t[0].slice(0,2)).toUpperCase()};function qd(e){zd(`#term-title`).textContent=`root@steal-internet:~# ${e}`}function Jd(e=$.selected){return{netflix:`netflix.com`,discord:`discord.com`,"blogger-com":`blogger.com`,google:`google.com`}[e]??`${e}.com`}function Yd(e,t=``){let n=document.createElement(`div`);for(n.className=t?`l lg-${t}`:`l`,n.textContent=e,Kd.appendChild(n);Kd.childElementCount>14;)Kd.firstElementChild.remove()}function Xd(){Kd.innerHTML=``}function Zd(e){let t=hf.get(e),n=/-(\d+)$/.exec(e)??/(\d+)$/.exec(e),r=String(Number(n?.[1]??0)+1).padStart(2,`0`),i=t===`potdemiel`?`honeypot`:t===`parefeu`?`firewall`:t??`def`;return e.startsWith(`ext`)?`${i}_r${r}`:`${i}_${r}`}function Qd(e){let[t,n]=e.split(`:`);return n===`o`?t:`${t}#${n.slice(1)}`}var $d=`sheet`;function ef(e){return P[e]?.name??e}function tf(e){return we[e]?.name??e}function nf(e){return we[e]?.color??`#33ff66`}function rf(e){return l[e].label}function af(e){let n=e*10/t;return n>=10?gd(n):n.toFixed(1).replace(`.`,`,`)}var of=new Map;function sf(){let e=0;for(let t of $.collection){let n=of.get(t.celebId);if(!n)continue;let i=r[P[t.celebId].rarity].places;n.orig&&(hd(t.celebId)>0||e+i>dd())&&(n.orig=!1),n.orig&&(e+=i),n.copies=Math.max(0,Math.min(n.copies,t.copies,Math.floor((dd()-e)/i))),e+=n.copies*i}}function cf(){let e=[];for(let t of $.collection){let n=of.get(t.celebId);if(!n)continue;let r=P[t.celebId];n.orig&&e.push({ref:`${t.celebId}:o`,celebId:t.celebId,district:r.district,rarity:r.rarity,isOriginal:!0});for(let i=0;i<n.copies;i++)e.push({ref:`${t.celebId}:c${i+1}`,celebId:t.celebId,district:r.district,rarity:r.rarity,isOriginal:!1})}return e}function lf(){let e=rd();qd(`./inspect ${Jd()}`);let r=id(),i=$.buildings[e.id],a=Math.round(r.hp/r.maxHp*100),o=cd(),s=sd(),c=i.owner===`Toi`,u=r.defenses.filter(e=>e.kind!==`potdemiel`),d=r.defenses.length-u.length,f=n[e.size].slots;Hd.innerHTML=`
  <section class="panel sheet">
    <header class="sheet-head">
      <img class="logo" src="${e.logo}" alt="" onerror="this.style.visibility='hidden'">
      <div>
        <h1>${Bd(e.name)}</h1>
        <p class="muted">Quartier <b>${Bd(tf(e.district))}</b> · immeuble ${Rd[e.size]} · ${n[e.size].floors} étage${n[e.size].floors>1?`s`:``}</p>
        <p class="muted">Propriétaire : <b class="${c?`cy`:`rd`}">${c?`toi`:Bd(i.owner)}</b></p>
      </div>
    </header>
    <div class="hpbar big"><div class="fill" style="width:${a}%"></div><span>${_d(r.hp)} / ${_d(r.maxHp)} PV</span></div>
    <p class="muted small">${a<100?`Il se répare tout seul : +5 % par heure (+${gd(n[e.size].maxHp/20)} PV/h).`:`PV au maximum.`}</p>
    <h2>Défenses posées <small class="muted">${r.defenses.length} / ${f} emplacements</small></h2>
    <ul class="defs">
      ${u.map(e=>`<li><span class="ico">${Id(e.kind)}</span><span class="nm">${rf(e.kind)} <small class="muted">${`NESO`[e.face]}·ét.${e.floor}</small></span><span class="minibar"><i style="width:${Math.round(e.hp/(l[e.kind].hp*t)*100)}%"></i></span><b>${_d(e.hp)} PV</b></li>`).join(``)}
      ${d?`<li><span class="ico">${Pd.hidden}</span><span class="nm">${d} défense${d>1?`s`:``} cachée${d>1?`s`:``} <small class="muted">où ?</small></span><b class="muted">?</b></li>`:``}
      ${r.defenses.length===0?`<li class="muted">Aucune défense debout.</li>`:``}
    </ul>
    <div class="row between">
      <span>Ticket d'attaque</span><b class="yl">${gd(s)} octets</b>
    </div>
    <p class="muted small">10 % du prix du site (${gd(e.price)}), payé à chaque attaque, même ratée. Portefeuille : <b>${gd($.wallet)} octets</b></p>
    ${o>0?`<div class="ban"><span>${Pd.ban} ${Bd(e.name)} a bloqué ton IP : <b data-until="${$.bans[e.id]}">${vd(o)}</b></span><button class="btn small" data-act="vpn" ${$.wallet<500?`disabled`:``}>VPN · 500 octets</button></div>`:``}
    ${c?`<p class="ok">${Bd(e.name)} est à toi ! Choisis un autre immeuble dans le panneau DEV, ou réinitialise.</p>`:``}
    <button class="btn primary wide" data-act="prepare" ${o>0||c?`disabled`:``}>Préparer l'attaque</button>
  </section>`}var uf=0;function df(){sf();let e=rd();qd(`./squad --build --target ${Jd()}`);let n=$.collection.map(n=>{let i=P[n.celebId],a=c(i.district),s=o[a],l=x(i.rarity,i.district,e.district),u=Ld[i.rarity],d=of.get(n.celebId)??{orig:!1,copies:0},f=hd(n.celebId),p=r[i.rarity].places;return`
    <article class="ccard ${d.orig||d.copies?`picked`:``}" style="--rc:${u.color}">
      <div class="ph"><img src="/celebs/${n.celebId}.jpg" alt="" loading="lazy">${l.affinity?`<span class="aff">+20 % ici</span>`:``}<span class="pl">${p} pl.</span></div>
      <div class="bd">
        <b class="nm">${Bd(i.name)}</b>
        <small style="color:${u.color}">${u.name}</small>
        <small class="role">${Fd(a)} ${s.label} · <span style="color:${nf(i.district)}">${Bd(tf(i.district))}</span></small>
        <small class="stats" title="PV · dégâts aux défenses · dégâts au bâtiment"><span>${Pd.heart}${gd(l.hp/t)}</span><span>${Pd.target}${af(l.dmgDefense)}/s</span><span>${Pd.building}${af(l.dmgBuilding)}/s</span></small>
        <div class="line orig">
          ${f>0?`<span class="rec">Original : récupère <b data-until="${n.recoverUntil}">${vd(f)}</b></span>`:`<button class="tog ${d.orig?`on`:``}" data-orig="${n.celebId}">${d.orig?`${Pd.check} Original`:`${Pd.plus} Original`}</button>`}
        </div>
        <div class="line">
          <span class="muted">${n.copies} en stock</span>
          <span class="step"><button data-cp="${n.celebId}" data-d="-1" ${d.copies<=0?`disabled`:``}>−</button><b>${d.copies}</b><button data-cp="${n.celebId}" data-d="1" ${d.copies>=n.copies?`disabled`:``}>+</button></span>
        </div>
      </div>
    </article>`}).join(``),i=fd();Hd.innerHTML=`
  <section class="panel squad">
    <div class="sq-top">
      <header class="sq-head">
        <button class="btn ghost small" data-act="back">${Pd.back} Fiche</button>
        <div class="ttl">Escouade contre <b>${Bd(e.name)}</b></div>
        <span class="wallet">${gd($.wallet)} o</span>
      </header>
      <div class="places">
        <div class="gauge"><div class="fill" id="pl-fill"></div><span id="pl-txt"></span></div>
        <button class="btn small" data-act="place" ${i===null||$.wallet<i?`disabled`:``}>${i===null?`max 40`:`+ place · ${gd(i)} o`}</button>
      </div>
    </div>
    <p class="muted small legend">Commune 1 place · rare 2 · épique 3 · légendaire 4. Un exemplaire vaincu est perdu ; un original vaincu est K.O. (récupération ×1,5).</p>
    <div class="grid">${n}</div>
    <footer class="sq-foot">
      <div class="est" id="est">…</div>
      <button class="btn primary" data-act="launch" id="launch">Lancer · ${gd(sd())} octets</button>
    </footer>
  </section>`,ff()}function ff(){let e=cf(),n=O(e),r=dd(),i=zd(`#pl-fill`);if(!i)return;i.style.width=`${Math.min(100,n/r*100)}%`,zd(`#pl-txt`).textContent=`${n} / ${r} places`;let a=zd(`#launch`),o=sd();if(a.disabled=e.length===0||$.wallet<o||cd()>0,$.wallet<o&&(zd(`#est`).textContent=`Pas assez d'octets pour le ticket (${gd(o)}).`),clearTimeout(uf),e.length===0){zd(`#est`).innerHTML=`Choisis des célébrités : touche « + Original » ou « + ».`;return}zd(`#est`).innerHTML=`<span class="muted">Estimation…</span>`,uf=window.setTimeout(()=>{let n=id(),r=M(n,e),i=Math.round(r.damage/100)*100,a=zd(`#est`);a&&(a.innerHTML=r.wouldSteal?`<b class="cy">Ton escouade peut voler ${Bd(n.name)} !</b> <span class="muted">(il lui reste ${_d(n.hp)} PV · ${r.unitsLost} perte${r.unitsLost>1?`s`:``} prévue${r.unitsLost>1?`s`:``})</span>`:`Ton escouade peut faire environ <b class="yl">${gd(i)} PV</b> <span class="muted">(${Math.round(r.damage*t/n.hp*100)} % des PV restants · ${r.defensesDestroyed} défense${r.defensesDestroyed>1?`s`:``} cassée${r.defensesDestroyed>1?`s`:``} · ${r.unitsLost} perte${r.unitsLost>1?`s`:``})</span>`)},120)}var pf=null,mf=null,hf=new Map,gf=0,_f=null;function vf(){let e=cf(),t=sd();if(!e.length||$.wallet<t||cd()>0)return;$.wallet-=t,$u();let r=rd(),i=id();hf=new Map(i.defenses.map(e=>[e.id,e.kind]));let a=td()&2147483647^24301;pf=new Ju({building:i,squad:e,seed:a},{linaOnline:$.dev.linaOnline,crew:$.dev.crew,owner:$.buildings[r.id].owner,buildingName:r.name},e=>Of(e,!1),Cf),mf=null,gf=0,$d=`combat`,Gd.idle=!1,Gd.panelShift=!1,Gd.setBuilding(n[r.size].floors),Gd.intro(),yf(!1),If(),qd(`./heist --target ${Jd()} --seed ${a.toString(16)}`),Xd(),Yd(`[..] connexion à ${Jd()} … OK`,`ok`),Yd(`[..] ${i.defenses.filter(e=>e.kind!==`potdemiel`).length} défenses détectées · ${_d(i.hp)} / ${_d(i.maxHp)} PV`),Yd(`[..] escouade : ${e.length} unités, ${O(e)} places`),$.dev.linaOnline&&Yd(`[?] ${$.buildings[r.id].owner} est en ligne`,`yl`)}function yf(e){let t=rd(),n=e&&_f?_f.name:t.name,r=e&&_f?_f.logo:t.logo;Hd.innerHTML=`
  <div class="hud ${e?`replay`:``}">
    <div class="hud-top">
      <div class="r1">
        <img class="logo sm" src="${r}" alt="" onerror="this.style.visibility='hidden'">
        <b class="bn">${Bd(n)}</b>${e?`<span class="tag blink">REPLAY</span>`:``}
        <span class="timer" id="timer">T-03:00</span>
        <button class="btn icon" data-act="mute" title="Son">${Ed()?Pd.mute:Pd.sound}</button>
        ${e?`<button class="btn small ghost" data-act="quit-replay">Quitter</button>`:`<button class="btn small danger" data-act="abandon" id="abandon">Abandonner</button>`}
      </div>
      <div class="txtbar"><span class="bar" id="hp-bar"></span><span class="pv" id="hp-txt"></span><span class="pct" id="hp-pct"></span></div>
    </div>
    <div id="notif"></div>
    <div id="banner"></div>
    <div id="chat"></div>
    <div id="hint">${e?``:`Touche une carte, puis le sol autour de l’immeuble (N, E, S, O)`}</div>
    ${e?`<div class="rp-ctl"><button class="btn small" data-speed="1">×1</button><button class="btn small" data-speed="2">×2</button><button class="btn small" data-act="restart-replay">${Pd.replay} Rejouer</button></div>`:`<div class="strip" id="strip"></div>`}
  </div>`,e||bf()}function bf(){let e=zd(`#strip`);if(!e||!pf)return;e.innerHTML=pf.hand.map(e=>{let t=Ld[e.rarity];return`<button class="hcard ${e.original?`orig`:``} ${mf===e?`sel`:``}" data-card="${e.key}" ${e.refs.length?``:`disabled`} style="--rc:${t.color}">
      <img src="/celebs/${e.celebId}.jpg" alt="">
      <span class="cnt">${e.original?`ORIG.`:`×${e.refs.length}`}</span>
      <span class="rl">${Fd(c(e.district))}</span>
      <span class="nm">${Bd(ef(e.celebId).split(` `).slice(-1)[0])}</span>
    </button>`}).join(``),Gd.setDeployHighlight(!!mf);let t=zd(`#hint`);if(t){let e=pf.hand.reduce((e,t)=>e+t.refs.length,0);t.textContent=mf?`${ef(mf.celebId)} : touche le sol sur une face (N, E, S, O)`:e?`Touche une carte, puis le sol autour de l’immeuble`:`Toute ton escouade est sur le terrain`,t.classList.toggle(`on`,!!mf)}}var xf=``;function Sf(t,n,r,i){let a=zd(`#timer`);if(!a)return;let o=`${t}|${n}`;if(o===xf)return;xf=o;let s=yd(e-t);a.textContent=`T-${s.length<5?`0`:``}${s}`,a.classList.toggle(`low`,e-t<=300);let c=window.innerWidth<640?16:24,l=Math.ceil(n/r*c),u=Math.ceil(i/r*c);zd(`#hp-bar`).innerHTML=`[${`█`.repeat(l)}<span class="dl">${`▓`.repeat(Math.max(0,u-l))}</span><span class="em">${`░`.repeat(Math.max(0,c-Math.max(u,l)))}</span>] ${Math.round(n/r*100)}%`,zd(`#hp-txt`).textContent=`${_d(n)}/${_d(r)} PV`;let d=i-n;zd(`#hp-pct`).textContent=d>0?`−${(d/r*100).toFixed(+(d/r<.1)).replace(`.`,`,`)} % infligés`:`0 % infligé`}function Cf(e){e.k===`notify`?wf(e.text,e.tone):Tf(e.who,e.text,e.ask)}function wf(e,t=`info`){let n=zd(`#notif`);if(!n)return;let r=document.createElement(`div`);r.className=`nt ${t}`,r.textContent=e,n.appendChild(r),t===`alert`&&Md.alert(),setTimeout(()=>r.remove(),3200)}function Tf(e,t,n=!1){let r=zd(`#chat`);if(!r)return;r.childElementCount||(r.innerHTML=`<div class="ch-h">${Pd.chat} Crew de ${Bd(_f?.owner??$.buildings[rd().id].owner)}</div>`);let i=document.createElement(`div`);for(i.className=`msg`,i.innerHTML=`<b>${Bd(e)} :</b> ${Bd(t)}${n?` <span class="send">[Envoyer]</span>`:``}`,r.appendChild(i);r.childElementCount>4;)r.children[1].remove();setTimeout(()=>i.classList.add(`old`),14e3),Md.chat()}function Ef(e){let t=document.createElement(`div`);for(t.className=`toast`,t.textContent=e,Wd.appendChild(t);Wd.childElementCount>3;)Wd.firstElementChild.remove();setTimeout(()=>t.remove(),2200)}function Df(){let e=zd(`#flash`);e.classList.remove(`on`),e.offsetWidth,e.classList.add(`on`)}function Of(e,n){let r=new Map;for(let t of e)switch(t.k){case`spawn`:Md.deploy(),t.unit.endsWith(`:o`)&&Md.voice(t.unit.slice(0,-2)),Yd(`>> deploy ${Qd(t.unit)} face=${`NESO`[t.face]}`,`cy`);break;case`dmg`:r.set(t.tgt,(r.get(t.tgt)??0)+t.amt),hf.get(t.src)===`antivirus`&&Md.shot(),t.tgt===`B`&&Md.hitBuilding();break;case`down`:Md.ko(),Gd.glitch(),t.unit.endsWith(`:o`)&&Ef(`${ef(t.unit.slice(0,-2))} est K.O. !`),Yd(t.fate===`ko`?`[x] ${Qd(t.unit)} K.O.`:`[x] ${Qd(t.unit)} détruit (exemplaire perdu)`,`al`);break;case`defDown`:Md.defDown(),Ef(`${rf(hf.get(t.def)??`antivirus`)} détruit !`),Yd(`[OK] ${Zd(t.def)} détruit`,`ok`);break;case`cut`:Md.cut(),Ef(`${rf(hf.get(t.def)??`antivirus`)} coupé 4 s`),Yd(`[~] ${Qd(t.unit)} coupe ${Zd(t.def)} (4 s)`,`cy`);break;case`trap`:Gd.trap(t.face,t.floor),Df(),Md.trap(),Ef(`Pot de miel ! −300 PV en zone`),Yd(`[!] ${Zd(t.def)} déclenché -300 (face ${`NESO`[t.face]}, étage ${t.floor})`,`al`);break;case`reinforce`:hf.set(t.def,t.kind),Md.reinforce(),Yd(`[!] ${t.source===`owner`?`${t.by} pose`:`renfort de ${t.by} :`} ${Zd(t.def)} face=${`NESO`[t.face]} étage ${t.floor}`,`al`),n&&(t.source===`owner`?wf(`${t.by} ajoute ${Gu(t.kind)} !`,`alert`):Tf(t.by,`${t.by} envoie ${Gu(t.kind)}`));break;case`refused`:n||Ef(t.reason===`max-crew`?`Renfort refusé : 3 au plus`:`${t.by} n'a plus d'emplacement libre`);break;case`end`:Yd(`[END] ${t.reason} · ${_d(t.hp)} PV restants`,`yl`)}let i=r.get(`B`);i&&e.length&&e[0].t%100==99&&Yd(`[..] serveur ${_d(n?jf?.model.hp??0:pf?.sim.hp??0)} PV · -${gd(i/t)} PV/s`,`yl`);for(let[e,n]of r){let r=Math.max(1,Math.round(n/t));Gd.damageNumber(e,r,e===`B`?`building`:hf.has(e)?`defense`:`unit`)}}function kf(){if(!pf)return;let e=pf.result(),t=pf.fullInput(),r=rd(),i=$.buildings[r.id].owner,a=w(t);JSON.stringify(a)!==JSON.stringify(e)&&console.warn(`[vol] le replay ne redonne pas le même résultat !`),ad(E(t.building,e),e.stolen?`Toi`:void 0),$.collection=k($.collection,e.units,td()),ld(),$u(),_f={input:t,result:e,floors:n[r.size].floors,name:r.name,owner:i,price:r.price,logo:r.logo,startHp:t.building.hp,maxHp:t.building.maxHp},pf=null,mf=null,Gd.setDeployHighlight(!1),Af()}function Af(){if(!_f)return;$d=`report`,Gd.panelShift=!0,Xd(),qd(`cat ./rapport-${_f.name.toLowerCase()}.log`),Gd.idle=!0;let e=_f,t=e.result,n=t.damage,r=Math.round(t.finalHp/e.maxHp*100),i=new Map;for(let e of t.units){if(e.fate===`unused`)continue;let t=i.get(e.celebId)??{lost:0,back:0,dealt:0};t.dealt+=e.dealtBuilding,e.isOriginal?(t.ko=e.fate===`ko`,t.orig=vd(D(e.rarity,e.fate))):e.fate===`destroyed`?t.lost++:t.back++,i.set(e.celebId,t)}let a=[...i.entries()].sort((e,t)=>t[1].dealt-e[1].dealt).map(([e,t])=>{let n=[];return t.orig&&n.push(t.ko?`<span class="rd">Original K.O.</span> · récupère ${t.orig}`:`Original fatigué · récupère ${t.orig}`),t.lost&&n.push(`<span class="rd">${t.lost} exemplaire${t.lost>1?`s`:``} détruit${t.lost>1?`s`:``} (perdu${t.lost>1?`s`:``})</span>`),t.back&&n.push(`<span class="cy">${t.back} exemplaire${t.back>1?`s`:``} rentré${t.back>1?`s`:``}</span>`),`<li><img src="/celebs/${e}.jpg" alt=""><div><b>${Bd(ef(e))}</b> <small class="yl">${_d(t.dealt)} PV</small><br><small>${n.join(` · `)}</small></div></li>`}).join(``),o={stolen:``,timeout:`Temps écoulé.`,wiped:`Plus aucune unité.`,abandon:`Attaque abandonnée.`}[t.endReason],s=t.crewReinforcements?`<p class="muted small">Le crew de ${Bd(e.owner)} a envoyé ${t.crewReinforcements} renfort${t.crewReinforcements>1?`s`:``}${t.crewLost.length?` (${t.crewLost.length} détruit${t.crewLost.length>1?`s`:``}, perdu${t.crewLost.length>1?`s`:``} pour eux)`:``}.</p>`:``;Hd.innerHTML=`
  <section class="panel report">
    ${t.stolen?`<h1 class="stolen">${Bd(e.name.toUpperCase())} VOLÉ !</h1><p class="big">Le site est à toi.</p><p class="muted small">${Bd(e.owner)} touche l'assurance : ${gd(e.price*200/1e3)} octets (20 % du prix).</p>`:`<h1>Bilan de l'attaque</h1><p class="big"><b class="yl">−${_d(n)} PV</b>, il reste <b>${_d(t.finalHp)} PV</b> (${r} %) · <b>${t.destroyedDefenses.length}</b> défense${t.destroyedDefenses.length>1?`s`:``} détruite${t.destroyedDefenses.length>1?`s`:``} · ton IP est bannie 30 min</p><p class="muted small">${o} Les dégâts restent : la prochaine attaque repart de là.</p>`}
    ${s}
    <h2>Tes célébrités</h2>
    <ul class="fates">${a||`<li class="muted">Personne n’a été posé.</li>`}</ul>
    <div class="row gap">
      <button class="btn" data-act="replay">${Pd.play} Revoir l'attaque</button>
      <button class="btn primary" data-act="back-sheet">Retour</button>
    </div>
  </section>`,t.stolen?Md.stolen():Md.end(),If()}var jf=null;function Mf(){_f&&($d=`replay`,Gd.idle=!1,Gd.panelShift=!1,Gd.setBuilding(_f.floors),hf=new Map(_f.input.building.defenses.map(e=>[e.id,e.kind])),jf={model:new Yu(_f.input,_f.result,_f.floors),t:0,speed:jf?.speed??1},yf(!0),Nf(),Gd.intro(),Xd(),qd(`./replay --heist ${_f.name.toLowerCase()} --speed ${jf.speed}`))}function Nf(){document.querySelectorAll(`[data-speed]`).forEach(e=>e.classList.toggle(`on`,Number(e.dataset.speed)===jf?.speed))}function Pf(){let e=rd(),t=id();return{floors:n[e.size].floors,hp:t.hp,maxHp:t.maxHp,units:[],defs:t.defenses.map(e=>({key:e.id,kind:e.kind,face:e.face,floor:e.floor,hp:e.hp,maxHp:l[e.kind].hp*1e3||1,destroyed:!1,cut:!1,hidden:e.kind===`potdemiel`,targetKey:null,live:!1}))}}function Ff(){$d=`sheet`,Xd(),Gd.panelShift=!0,Gd.idle=!0,Gd.setBuilding(n[rd().size].floors),lf(),If()}function If(){let e=$d===`combat`;Ud.innerHTML=`
  <button class="dev-tab" data-act="dev-toggle">DEV</button>
  ${$.dev.open?`<div class="dev-panel">
    <div class="dev-h">Outils de test <small class="muted">horloge +${vd($.clockOffset||0)}</small></div>
    <div class="row gap"><button class="btn small" data-dev="t10">+10 min</button><button class="btn small" data-dev="t60">+1 h</button></div>
    <label class="chk"><input type="checkbox" data-dev="lina" ${$.dev.linaOnline?`checked`:``}> Lina en ligne <small class="muted">(+1 défense à 0:40)</small></label>
    <label class="chk"><input type="checkbox" data-dev="crew" ${$.dev.crew?`checked`:``}> Crew de Lina <small class="muted">(2 renforts)</small></label>
    <label class="chk"><input type="checkbox" data-dev="ascii" ${$.dev.ascii?`checked`:``}> Rendu ASCII <small class="muted">(terminal)</small></label>
    <button class="btn small wide" data-dev="redef" ${e?`disabled`:``}>Lina repose ses défenses</button>
    <div class="dev-h">Immeuble</div>
    <div class="bld">${p.map(t=>`<button class="btn small ${$.selected===t.id?`on`:``}" data-bld="${t.id}" ${e||$d===`replay`?`disabled`:``}>${Bd(t.name)} <small>${Rd[t.size]}</small></button>`).join(``)}</div>
    <button class="btn small danger wide" data-dev="reset" ${e?`disabled`:``}>Réinitialiser tout</button>
  </div>`:``}`}function Lf(){$d===`sheet`?lf():$d===`squad`&&df()}Ud.addEventListener(`click`,e=>{let t=e.target;if(t.closest(`[data-act]`)?.dataset.act===`dev-toggle`){$.dev.open=!$.dev.open,$u(),If();return}let n=t.closest(`[data-bld]`)?.dataset.bld;if(n){$.selected=n,$u(),of.clear(),Ff();return}let r=t.closest(`[data-dev]`)?.dataset.dev;if(r&&t.type!==`checkbox`){if(r===`t10`&&nd(6e5),r===`t60`&&nd(36e5),r===`redef`&&(od(),Ef(`Lina a reposé ses défenses`)),r===`reset`){ed(),of.clear(),Ef(`Tout est réinitialisé`),Ff();return}(r===`t10`||r===`t60`)&&Ef(r===`t10`?`+10 minutes`:`+1 heure`),If(),Lf()}}),Ud.addEventListener(`change`,e=>{let t=e.target;t.dataset.dev===`lina`&&($.dev.linaOnline=t.checked),t.dataset.dev===`crew`&&($.dev.crew=t.checked),t.dataset.dev===`ascii`&&($.dev.ascii=t.checked,Gd.setAscii(t.checked)),$u()});var Rf=0;Hd.addEventListener(`click`,e=>{Td();let t=e.target,n=t.closest(`[data-act]`),i=n?.dataset.act;if(i===`prepare`){$d=`squad`,Gd.panelShift=!1,df(),If(),Md.tap();return}if(i===`back`){Ff();return}if(i===`vpn`){ud()&&Ef(`VPN activé : ton IP est débloquée`),lf();return}if(i===`place`){pd()&&Md.tap(),df();return}if(i===`launch`){vf();return}if(i===`mute`){Dd(!Ed()),n.innerHTML=Ed()?Pd.mute:Pd.sound;return}if(i===`abandon`){if(Date.now()-Rf<3e3){pf?.abandon();return}Rf=Date.now(),n.textContent=`Sûr ?`,setTimeout(()=>{let e=zd(`#abandon`);e&&(e.textContent=`Abandonner`)},3e3);return}if(i===`replay`){Mf();return}if(i===`restart-replay`){Mf();return}if(i===`quit-replay`){jf=null,Af();return}if(i===`back-sheet`){Ff();return}let a=t.closest(`[data-speed]`);if(a&&jf&&_f){jf.speed=Number(a.dataset.speed),Nf(),qd(`./replay --heist ${_f.name.toLowerCase()} --speed ${jf.speed}`);return}let o=t.closest(`[data-orig]`)?.dataset.orig;if(o){let e=of.get(o)??{orig:!1,copies:0},t=r[P[o].rarity].places;if(!e.orig&&O(cf())+t>dd()){Ef(`Plus assez de places`);return}e.orig=!e.orig,of.set(o,e),Md.tap(),zf();return}let s=t.closest(`[data-cp]`);if(s){let e=s.dataset.cp,t=Number(s.dataset.d),n=of.get(e)??{orig:!1,copies:0},i=r[P[e].rarity].places;if(t>0&&O(cf())+i>dd()){Ef(`Plus assez de places`);return}n.copies=Math.max(0,Math.min(md(e).copies,n.copies+t)),of.set(e,n),Md.tap(),zf();return}let c=t.closest(`[data-card]`)?.dataset.card;if(c&&pf){let e=pf.hand.find(e=>e.key===c)??null;mf=mf===e?null:e,Md.tap(),bf()}});function zf(){let e=zd(`.panel.squad`)?.scrollTop??0;df();let t=zd(`.panel.squad`);t&&(t.scrollTop=e)}Gd.onTap=e=>{if(Td(),$d===`combat`&&pf){if(!mf){let e=zd(`#hint`);e&&(e.classList.remove(`shake`),e.offsetWidth,e.classList.add(`shake`));return}e!==null&&pf.deploy(mf,e)&&(mf.refs.length===0&&(mf=null),bf())}},document.addEventListener(`pointerdown`,()=>Td(),{once:!0}),setInterval(()=>{let e=!1;document.querySelectorAll(`[data-until]`).forEach(t=>{let n=Number(t.dataset.until)-td();n<=0?e=!0:t.textContent=vd(n)}),e&&Lf()},1e3);var Bf=performance.now(),Vf=0,Hf=0;function Uf(e){let t=Math.min(.1,(e-Bf)/1e3);if(Bf=e,Vf+=t,Hf++,Vf>=1&&(window.__fps=Math.round(Hf/Vf),Vf=0,Hf=0),$d===`combat`&&pf){if(pf.update(t),Gd.sync(Vu(pf.sim),t),Sf(pf.sim.tick,pf.sim.hp,pf.sim.building.maxHp,pf.startHp),pf.done){if(gf)e-gf>1600&&kf();else{gf=e;let t=pf.sim.endReason,n=t===`stolen`?`SITE VOLÉ !`:t===`timeout`?`TEMPS ÉCOULÉ`:t===`wiped`?`PLUS D’UNITÉS`:`ABANDON`,r=zd(`#banner`);r&&(r.textContent=n,r.className=t===`stolen`?`on win`:`on`)}}}else if($d===`replay`&&jf){let e=jf.model.endTick;jf.t=Math.min(e+.999,jf.t+t*10*jf.speed);let n=jf.model.advanceTo(Math.floor(jf.t));n.length&&Of(n,!0),Gd.sync(jf.model.frame(jf.t),t),Sf(Math.floor(jf.t),jf.model.hp,jf.model.maxHp,_f?.startHp??jf.model.maxHp)}else Gd.sync(Pf(),t);Gd.render(t),requestAnimationFrame(Uf)}window.__vol={get screen(){return $d},get live(){return pf},get lastFight(){return _f},S:$,facePoint(e){let t=Gd.nodePos(e,0,0).project(Gd.camera),n=Vd.getBoundingClientRect();return{x:n.left+(t.x*.5+.5)*n.width,y:n.top+(-t.y*.5+.5)*n.height}}},$u(),Ff(),requestAnimationFrame(Uf);