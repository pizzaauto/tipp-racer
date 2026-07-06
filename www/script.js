'use strict';

const SKINS = [
  { emoji:'🚗', name:'Flitzer',   price: 0,    flip:true },
  { emoji:'🏎️', name:'Rennwagen', price: 150,  flip:true },
  { emoji:'🛵', name:'Ninebot',   price: 300,  flip:true },
  { emoji:'🛴', name:'Ausom',     price: 500,  flip:true },
  { emoji:'🚓', name:'Polizei',   price: 750,  flip:true },
  { emoji:'🐧', name:'CachyOS',   price: 1000, flip:true },
  { emoji:'🦖', name:'Dino',      price: 1500, flip:true },
  { emoji:'🚀', name:'Rakete',    price: 2500, flip:false, rot:45 }
];

const BOT_SKINS = ['🚙','🚕','🚌','🛻','🚜','🚓','🏎️'];
const BOT_NAMES = [ {n:'SQUID', f:'🇨🇦'}, {n:'NOVA', f:'🇧🇷'}, {n:'TURBO', f:'🇯🇵'}, {n:'BLITZ', f:'🇫🇷'}, {n:'PIXEL', f:'🇰🇷'} ];

const LEVELS = [
  { name: 'Grüne Wiese', bots: 2, cps: [1.8, 2.2], c: { c1:'4caf50', c2:'81c784', c3:'388e3c', plank:'795548', side:'5d4037', rib:'1b5e20' }, texts: ['die blumen bluehen auf der wiese', 'ein kleiner schmetterling fliegt', 'das gras ist heute sehr schoen gruen', 'die sonne scheint hell vom himmel', 'wir machen ein picknick im freien'] },
  { name: 'Blauer See', bots: 3, cps: [2.0, 2.4], c: { c1:'2244dc', c2:'2e5ae9', c3:'1c3bce', plank:'4b555f', side:'31373d', rib:'13216d' }, texts: ['das blaue wasser glitzert in der morgensonne', 'ein kleines boot schaukelt auf den wellen', 'wir schwimmen heute bis zur insel', 'der sand am strand ist warm und weich', 'die fische tauchen tief auf den grund'] },
  { name: 'Heisse Wüste', bots: 3, cps: [2.2, 2.6], c: { c1:'ff9800', c2:'ffb74d', c3:'f57c00', plank:'8d6e63', side:'5d4037', rib:'e65100' }, texts: ['die hitze der wueste brennt auf deinen schultern', 'weit und breit gibt es nur noch sand', 'ein kamel laeuft langsam ueber die duene', 'das wasser in der flasche reicht kaum', 'die sonne steht senkrecht am himmel'] },
  { name: 'Dunkler Wald', bots: 4, cps: [2.4, 2.8], c: { c1:'2e7d32', c2:'43a047', c3:'1b5e20', plank:'3e2723', side:'261410', rib:'000000' }, texts: ['das blaetterdach laesst kaum licht hindurch', 'alte baeume stehen wie stille waechter', 'ein reh verschwindet blitzschnell im dickicht', 'das moos federt jeden schritt sanft ab', 'ein fuchs beobachtet dich aus der ferne'] },
  { name: 'Graue Stadt', bots: 4, cps: [2.6, 3.0], c: { c1:'607d8b', c2:'78909c', c3:'455a64', plank:'424242', side:'212121', rib:'263238' }, texts: ['die hochhaeuser werfen gigantische schatten', 'die ampeln blinken und der verkehr staut sich', 'die sirenen heulen durch die schluchten', 'menschen hasten schnell ueber die gehwege', 'ein fahrer schlaengelt sich durch das chaos'] },
  { name: 'Eisige Tundra', bots: 4, cps: [2.8, 3.2], c: { c1:'00bcd4', c2:'4dd0e1', c3:'0097a7', plank:'cfd8dc', side:'90a4ae', rib:'006064' }, texts: ['der schneesturm peitscht dir eis ins gesicht', 'die gefrorene strasse erfordert konzentration', 'die landschaft erstrahlt in blendendem weiss', 'starkes bremsen fuehrt zu einem unfall', 'die reifen suchen nach halt auf dem eis'] },
  { name: 'Kristallhöhle', bots: 5, cps: [3.0, 3.4], c: { c1:'9c27b0', c2:'ab47bc', c3:'7b1fa2', plank:'4a148c', side:'311b92', rib:'ce93d8' }, texts: ['die kristalle erhellen die tiefe finsternis', 'jeder schritt hallt laut in der kammer', 'scharfe kanten ragen aus dem harten gestein', 'ein see reflektiert das magische licht', 'die luft hier unten ist extrem kuehl'] },
  { name: 'Geisterstadt', bots: 5, cps: [3.2, 3.6], c: { c1:'546e7a', c2:'78909c', c3:'37474f', plank:'263238', side:'000000', rib:'8d6e63' }, texts: ['verlassene hauser saeumen den staubigen pfad', 'der wind heult durch zerbrochene fenster', 'ein altes holzschild quietscht im zugwind', 'niemand weiss warum alle ploetzlich flohen', 'schatten tanzen an den bruchfaelligen mauern'] },
  { name: 'Neon Tokio', bots: 5, cps: [3.4, 3.8], c: { c1:'e91e63', c2:'f06292', c3:'c2185b', plank:'1a237e', side:'000000', rib:'00e5ff' }, texts: ['die leuchtreklamen spiegeln sich auf dem asphalt', 'die hochbahn rast durch die bunte metropole', 'menschen draengen sich auf den kreuzungen', 'die stadt schlaeft nie und blinkt hell', 'ein nieselregen faellt auf die strassen'] },
  { name: 'Tiefer Ozean', bots: 5, cps: [3.6, 4.0], c: { c1:'01579b', c2:'0277bd', c3:'004d40', plank:'006064', side:'00363a', rib:'00bfa5' }, texts: ['der druck der massen lastet auf der kapsel', 'ein gigantischer wal zieht ueber dir hinweg', 'leuchtende fische blinken im dunkeln', 'ein altes wrack liegt am sandigen grund', 'die stroemung wird hier unten gefaehrlich'] },
  { name: 'Steampunk Fabrik', bots: 5, cps: [3.8, 4.2], c: { c1:'bf360c', c2:'d84315', c3:'870000', plank:'3e2723', side:'1b0000', rib:'ffb300' }, texts: ['riesige zahnraeder drehen sich im takt', 'zischende rohre blasen heissen dampf aus', 'der geruch von oel haengt in der dicken luft', 'mechanische arme sortieren die schweren kisten', 'die manometer zeigen hohen druck an'] },
  { name: 'Wolkenstadt', bots: 5, cps: [4.0, 4.4], c: { c1:'bbdefb', c2:'e3f2fd', c3:'90caf9', plank:'ffffff', side:'e0e0e0', rib:'1976d2' }, texts: ['schwebende inseln werden in der luft gehalten', 'bruecken aus glas bieten einen tiefen blick', 'der wind ist hier oben extrem stark und frisch', 'fliegende haendler preisen ihre waren an', 'die stadt ist ein wunder der architektur'] },
  { name: 'Dschungel Ruinen', bots: 5, cps: [4.2, 4.6], c: { c1:'33691e', c2:'558b2f', c3:'1b5e20', plank:'5d4037', side:'3e2723', rib:'cddc39' }, texts: ['uralte tempel sind von lianen ueberwuchert', 'das bruellen durchbricht die stille', 'versteckte fallen lauern auf abenteurer', 'ein goldener schatz liegt tief verborgen', 'die feuchtigkeit macht jeden schritt schwer'] },
  { name: 'Verlassene Mine', bots: 5, cps: [4.4, 4.8], c: { c1:'4e342e', c2:'5d4037', c3:'3e2723', plank:'212121', side:'000000', rib:'ffc107' }, texts: ['klapprige loren rattern ueber rostige schienen', 'das licht der fackel wirft flackernde schatten', 'tiefe schaechte fuehren in die finstere unterwelt', 'der staub macht das atmen extrem schwer', 'ein grollen laesst die steinwaende erzittern'] },
  { name: 'Dimensionstor', bots: 5, cps: [4.6, 5.0], c: { c1:'311b92', c2:'4527a0', c3:'1a237e', plank:'6200ea', side:'311b92', rib:'00e5ff' }, texts: ['die raumzeit verzehrt sich beim sprung', 'schwerkraft scheint hier nicht mehr zu gelten', 'farben verschmelzen zu einem wirbelsturm', 'eine fremde galaxie taucht am horizont auf', 'niemand weiss wohin dieser pfad fuehrt'] },
  { name: 'Cyberpunk', bots: 5, cps: [4.8, 5.2], c: { c1:'673ab7', c2:'9c27b0', c3:'512da8', plank:'212121', side:'000000', rib:'e91e63' }, texts: ['die zukunft leuchtet durch sauren regen', 'dein wagen hinterlaesst eine plasma spur', 'hacker dringen in das fahrzeugsystem ein', 'hologramme werfen licht auf die bezirke', 'drohnen der polizei verfolgen dich'] },
  { name: 'Lava Vulkan', bots: 5, cps: [5.0, 5.4], c: { c1:'d32f2f', c2:'f44336', c3:'b71c1c', plank:'212121', side:'000000', rib:'ffeb3b' }, texts: ['hitze laesst die luft ueber der strecke flimmern', 'heisse lava stroemt direkt neben der fahrbahn', 'ein fehler und dein wagen stuerzt ab', 'aschewolken verdunkeln den ganzen himmel', 'die reifen deines wagens beginnen zu schmelzen'] },
  { name: 'Weltraum', bots: 5, cps: [5.2, 5.6], c: { c1:'1a237e', c2:'3949ab', c3:'12185b', plank:'424242', side:'000000', rib:'ffeb3b' }, texts: ['die station schwebt majestaetisch im vakuum', 'sterne leuchten auf dem schwarzen sternenteppich', 'das raumschiff zuendet die starken triebwerke', 'navigationssysteme spielen total verrueckt', 'das all verzeiht keine fehler also halte dich fest'] },
  { name: 'Schwarzes Loch', bots: 5, cps: [5.4, 5.8], c: { c1:'000000', c2:'212121', c3:'000000', plank:'ffffff', side:'9e9e9e', rib:'6200ea' }, texts: ['die anziehungskraft verschlingt sogar das licht', 'am horizont bleibt die zeit scheinbar stehen', 'die materie wird vor dem sturz extrem erhitzt', 'ein rechenfehler bedeutet den sicheren untergang', 'du navigierst auf dem grat zwischen leben und nichts'] },
  { name: 'Goldener Olymp', bots: 5, cps: [5.6, 6.2], c: { c1:'ffc107', c2:'ffd54f', c3:'ffa000', plank:'ffffff', side:'e0e0e0', rib:'ff9800' }, texts: ['der weg der goetter ist nur fuer meister bestimmt', 'goldene strassen fuehren zum glorreichen sieg', 'deine finger fliegen wie ein blitz', 'elite bots fordern dich zum finalen duell heraus', 'wenn du nerven behaeltst gehoert dir der pokal'] }
];

let savedData = JSON.parse(localStorage.getItem('tippRacerData')) || {};
savedData.unlocked = parseInt(savedData.unlocked) || 0;
savedData.coins = parseInt(savedData.coins) || 0;
if(!savedData.bests) savedData.bests = {};
if(!savedData.ownedSkins) savedData.ownedSkins = [0];
if(!savedData.quests) savedData.quests = { date:'', list:[] };
if(!savedData.survivalBest) savedData.survivalBest = { wpm: 0, time: 0, typed: 0 };
if(savedData.ghostEnabled === undefined) savedData.ghostEnabled = true;

let currentLevel = savedData.unlocked;
let isSurvival = false;
let skinPref = parseInt(localStorage.getItem('tippRacerSkin')) || 0;
let G = null;

const CHAR_STEP = 34;
const START_PAD = 260;
const FINISH_GAP = 90;

const $  = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const input = $('#typeInput');

// AUDIO SYSTEM
let actx = null;
let engineOsc = null;
let engineGain = null;

function initAudio() {
  if(!actx) actx = new (window.AudioContext || window.webkitAudioContext)();
  if(actx.state === 'suspended') actx.resume();
}
document.addEventListener('pointerdown', initAudio, {once:true});
document.addEventListener('keydown', initAudio, {once:true});

function beep(freq, type, dur, vol) {
  if(!actx) return;
  const o = actx.createOscillator(), g = actx.createGain();
  o.type = type; o.frequency.setValueAtTime(freq, actx.currentTime);
  g.gain.setValueAtTime(vol, actx.currentTime);
  g.gain.exponentialRampToValueAtTime(0.00001, actx.currentTime + dur);
  o.connect(g); g.connect(actx.destination);
  o.start(); o.stop(actx.currentTime + dur);
}
function playType() { beep(800, 'sine', 0.05, 0.1); }
function playErr() { beep(150, 'sawtooth', 0.15, 0.2); }

function startEngineSound() {
  if(!actx) return;
  engineOsc = actx.createOscillator(); engineGain = actx.createGain();
  engineOsc.type = 'triangle'; engineOsc.frequency.value = 40;
  engineGain.gain.value = 0.05;
  engineOsc.connect(engineGain); engineGain.connect(actx.destination);
  engineOsc.start();
}
function updateEngineSound(wpm) {
  if(engineOsc && actx) engineOsc.frequency.setTargetAtTime(40 + wpm * 1.5, actx.currentTime, 0.1);
}
function stopEngineSound() {
  if(engineOsc) { engineOsc.stop(); engineOsc.disconnect(); engineOsc=null; }
}

function saveData() {
  localStorage.setItem('tippRacerData', JSON.stringify(savedData));
  if($('#coinCount')) $('#coinCount').textContent = savedData.coins;
}

function initQuests() {
  const today = new Date().toDateString();
  if(savedData.quests.date !== today) {
    savedData.quests = {
      date: today,
      list: [
        { id:'races', target: 5, progress: 0, reward: 50, desc: 'Spiele 5 Rennen' },
        { id:'wpm', target: 50, progress: 0, reward: 100, desc: 'Erreiche 50 WPM' },
        { id:'acc', target: 1, progress: 0, reward: 50, desc: 'Ein fehlerfreies Rennen' }
      ]
    };
    saveData();
  }
  buildQuests();
}

function buildQuests() {
  $('#questPanel').innerHTML = `<h3>📅 Tages Quests</h3>` + 
    savedData.quests.list.map(q => `
      <div class="quest ${q.progress >= q.target ? 'done' : ''}">
        <span>${q.desc} (${q.progress}/${q.target})</span>
        <b>💰 ${q.reward}</b>
      </div>
    `).join('');
}

function checkQuests(wpm, acc, finished) {
  let updated = false;
  savedData.quests.list.forEach(q => {
    if(q.progress >= q.target) return;
    if(finished && q.id === 'races') q.progress++;
    if(finished && q.id === 'wpm' && wpm >= q.target) q.progress = q.target;
    if(finished && q.id === 'acc' && acc === 100) q.progress = q.target;
    if(q.progress >= q.target) {
      savedData.coins += q.reward;
      updated = true;
    }
  });
  if(updated) { saveData(); buildQuests(); }
}

function applyTheme(lvlIndex, isSurv) {
  const l = LEVELS[lvlIndex];
  const root = document.documentElement;
  
  if(isSurv) {
    root.style.setProperty('--water', '#111'); root.style.setProperty('--water-hi', '#333'); root.style.setProperty('--water-lo', '#000');
    root.style.setProperty('--plank', '#222'); root.style.setProperty('--plank-side', '#000'); root.style.setProperty('--ribbon', '#ff0000');
  } else {
    root.style.setProperty('--water', '#'+l.c.c1); root.style.setProperty('--water-hi', '#'+l.c.c2); root.style.setProperty('--water-lo', '#'+l.c.c3);
    root.style.setProperty('--plank', '#'+l.c.plank); root.style.setProperty('--plank-side', '#'+l.c.side); root.style.setProperty('--ribbon', '#'+l.c.rib);
  }
  
  const svgColor1 = isSurv ? '111' : l.c.c1;
  const svgColor2 = isSurv ? '333' : l.c.c2;
  const svgColor3 = isSurv ? '000' : l.c.c3;

  const svg = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220' viewBox='0 0 220 220'><rect width='220' height='220' fill='%23${svgColor1}'/><g fill='%23${svgColor2}'><ellipse cx='38' cy='34' rx='34' ry='24'/><ellipse cx='118' cy='22' rx='30' ry='20'/><ellipse cx='192' cy='44' rx='30' ry='22'/><ellipse cx='24' cy='104' rx='26' ry='20'/><ellipse cx='96' cy='92' rx='36' ry='24'/><ellipse cx='176' cy='112' rx='30' ry='22'/><ellipse cx='52' cy='176' rx='34' ry='22'/><ellipse cx='138' cy='168' rx='30' ry='22'/><ellipse cx='210' cy='186' rx='26' ry='20'/></g><g fill='none' stroke='%23${svgColor3}' stroke-width='5' opacity='.55'><ellipse cx='38' cy='34' rx='34' ry='24'/><ellipse cx='118' cy='22' rx='30' ry='20'/><ellipse cx='192' cy='44' rx='30' ry='22'/><ellipse cx='24' cy='104' rx='26' ry='20'/><ellipse cx='96' cy='92' rx='36' ry='24'/><ellipse cx='176' cy='112' rx='30' ry='22'/><ellipse cx='52' cy='176' rx='34' ry='22'/><ellipse cx='138' cy='168' rx='30' ry='22'/><ellipse cx='210' cy='186' rx='26' ry='20'/></g></svg>")`;
  $('#stage').style.backgroundImage = svg;
}

function updateMenuBest() {
  let bestWpm = 0, bestTime = Infinity;
  for (const k in savedData.bests) {
    if (savedData.bests[k].wpm > bestWpm) bestWpm = savedData.bests[k].wpm;
    if (savedData.bests[k].time < bestTime) bestTime = savedData.bests[k].time;
  }
  const timeStr = bestTime === Infinity ? '-' : bestTime.toFixed(1) + 's';
  const survStr = savedData.survivalBest && savedData.survivalBest.time > 0 ? ` | 🔥 Surv: ${savedData.survivalBest.time.toFixed(1)}s` : '';
  
  $('#menuBest').textContent = `🏆 Best WPM: ${bestWpm} | ⏱️ Best Zeit: ${timeStr}${survStr}`;
  if($('#coinCount')) $('#coinCount').textContent = savedData.coins;
}

function buildLevelsMenu() {
  $('#levelGrid').innerHTML = LEVELS.map((l, i) => {
    const isLocked = i > savedData.unlocked;
    const isActive = i === currentLevel && !isSurvival;
    const best = savedData.bests[i];
    const statStr = best ? `<b>${best.wpm} WPM</b> | ${best.time.toFixed(1)}s` : '<i>-</i>';
    return `
      <div class="lvlCard ${isLocked ? 'locked' : ''} ${isActive ? 'active' : ''}" data-lvl="${i}">
        <div class="l-info">
          <span class="l-num">Level ${i+1} ${isLocked ? '🔒' : ''}</span>
          <span class="l-name">${l.name}</span>
        </div>
        <div class="l-stats">${statStr}</div>
      </div>
    `;
  }).join('');
}

$('#levelGrid').addEventListener('click', e => {
  const card = e.target.closest('.lvlCard');
  if (!card || card.classList.contains('locked')) return;
  currentLevel = parseInt(card.dataset.lvl);
  isSurvival = false;
  show('race');
});

function show(id){
  // Geld-Anzeige verstecken, wenn wir im Rennen sind!
  if ($('#menuTop')) {
    $('#menuTop').style.display = (id === 'menu' || id === 'skins' || id === 'levels') ? 'block' : 'none';
  }

  $$('.screen').forEach(sc => sc.classList.toggle('active', sc.id === id));
  
  if (id === 'race') {
    startRace();
  } else {
    stopRace();
    if(input) input.blur();
    applyTheme(currentLevel, false);
    if(id === 'menu') { updateMenuBest(); initQuests(); updateGhostBtn(); }
    if(id === 'levels') buildLevelsMenu();
    if(id === 'skins') buildSkinGrid();
  }
}

document.addEventListener('click', e => {
  const go = e.target.closest('[data-go]');
  if (go) {
    if (go.dataset.go.startsWith('race')) {
      isSurvival = go.dataset.go === 'race-survival';
      if(input) input.focus();
      show('race');
    } else {
      show(go.dataset.go);
    }
  }
});

$('#btnReset').addEventListener('click', () => {
  if(confirm("Möchtest du deinen Fortschritt wirklich komplett löschen?")) {
    savedData = { unlocked: 0, bests: {}, coins: 0, ownedSkins: [0], quests: {date:'',list:[]}, survivalBest: {wpm:0, time:0, typed:0} };
    skinPref = 0;
    saveData(); localStorage.setItem('tippRacerSkin', 0);
    currentLevel = 0; isSurvival = false;
    show('menu');
  }
});

function updateGhostBtn() {
  const b = $('#btnGhostToggle');
  if(!b) return;
  b.textContent = savedData.ghostEnabled ? '👻 Ghost-Modus: AN' : '👻 Ghost-Modus: AUS';
  b.style.opacity = savedData.ghostEnabled ? '1' : '0.55';
}
if($('#btnGhostToggle')) {
  $('#btnGhostToggle').addEventListener('click', () => {
    savedData.ghostEnabled = !savedData.ghostEnabled;
    saveData();
    updateGhostBtn();
    initAudio();
    beep(savedData.ghostEnabled ? 620 : 300, 'sine', 0.08, 0.1);
  });
}

const skinStyle = s => `display:inline-block;transform:${s.flip?'scaleX(-1) ':''}${s.rot?`rotate(${s.rot}deg)`:''}`;

function buildSkinGrid(){
  $('#skinGrid').innerHTML = SKINS.map((s,i)=>{
    const isOwned = savedData.ownedSkins.includes(i);
    const isSelected = skinPref === i;
    let btnStr = '';
    if(isSelected) btnStr = `<div class="s-btn equip equipped">Ausgewählt</div>`;
    else if(isOwned) btnStr = `<div class="s-btn equip">Auswählen</div>`;
    else btnStr = `<div class="s-btn buy">Kaufen 💰 ${s.price}</div>`;
    
    return `
    <div class="skinCard ${isSelected?'selected':''} ${!isOwned?'locked':''}" data-skin="${i}">
      <div class="mini"><span class="em" style="${skinStyle(s)}">${s.emoji}</span></div>
      <div class="nm">${s.name}</div>
      ${btnStr}
    </div>`;
  }).join('');
}

$('#skinGrid').addEventListener('click', e=>{
  const card = e.target.closest('.skinCard'); if(!card) return;
  const i = +card.dataset.skin;
  const s = SKINS[i];
  if(savedData.ownedSkins.includes(i)) {
    skinPref = i;
    localStorage.setItem('tippRacerSkin', skinPref);
  } else {
    if(savedData.coins >= s.price) {
       savedData.coins -= s.price;
       savedData.ownedSkins.push(i);
       skinPref = i;
       localStorage.setItem('tippRacerSkin', skinPref);
       saveData();
    } else {
       shake(card); return;
    }
  }
  buildSkinGrid(); updateMenuChar();
});

function updateMenuChar(){
  const s = SKINS[skinPref];
  const el = $('#menuChar');
  el.textContent = s.emoji; el.style.transform = `${s.flip?'scaleX(-1) ':''}${s.rot?`rotate(${s.rot}deg)`:''}`;
}

function resetInput() { if(input) input.value = ' '; }

function startRace(){
  if (G){ cancelAnimationFrame(G.raf); clearInterval(G.hudTimer); clearTimeout(G.cdT); stopEngineSound(); }

  applyTheme(currentLevel, isSurvival);
  
  let text = '';
  let bots = [];
  
  if(isSurvival) {
    const p = LEVELS[Math.floor(Math.random()*LEVELS.length)].texts;
    text = p[Math.floor(Math.random()*p.length)];
    $('#hudProgBox').style.display = 'none';

    // Survival Ghost
    if(savedData.ghostEnabled && savedData.survivalBest && savedData.survivalBest.time > 0) {
      bots.push({
        name: 'GHOST', flag: '👻', emoji: SKINS[skinPref].emoji, 
        isGhost: true, finishT: savedData.survivalBest.time, cps: savedData.survivalBest.typed / savedData.survivalBest.time,
        x: 0, phase: 0, finished: false, el: null
      });
    }

  } else {
    const l = LEVELS[currentLevel];
    text = l.texts[Math.floor(Math.random()*l.texts.length)];
    const [cMin,cMax] = l.cps;
    bots = Array.from({length:l.bots},(_,i)=>({
      name:BOT_NAMES[i].n, flag:BOT_NAMES[i].f, emoji:BOT_SKINS[i],
      cps:cMin + Math.random()*(cMax-cMin), phase:Math.random()*Math.PI*2,
      x:0, finished:false, finishT:null, el:null, isGhost:false
    }));
    
    // Kampagnen Ghost
    if(savedData.ghostEnabled && savedData.bests[currentLevel] && savedData.bests[currentLevel].time < Infinity) {
       bots.push({
         name: 'GHOST', flag: '👻', emoji: SKINS[skinPref].emoji, 
         isGhost: true, finishT: savedData.bests[currentLevel].time, x: 0, phase: 0, finished:false, el:null
       });
    }
    $('#hudProgBox').style.display = 'block';
  }

  G = {
    text, bots, typed:0, errors:0, keystrokes:0, time:0,
    startT:null, playerFinishT:null, running:false, over:false,
    textEnd: START_PAD + text.length*CHAR_STEP,
    raf:null, hudTimer:null, letterEls:[],
    isSurvival, policeX: -400, policeSpeed: 2.2 // Feuer startet weiter hinten
  };
  G.finishX  = G.textEnd + FINISH_GAP;
  G.worldLen = G.finishX + 620;

  buildWorld(); layoutLanes(); updateHUD(); resetInput(); runCountdown();
}

function appendSurvivalText() {
  const p = LEVELS[Math.floor(Math.random()*LEVELS.length)].texts;
  const newStr = ' ' + p[Math.floor(Math.random()*p.length)];
  
  [...newStr].forEach((ch, i) => {
      let s = document.createElement('span');
      s.textContent = ch === ' ' ? ' ' : ch;
      s.style.left = (START_PAD + (G.text.length + i) * CHAR_STEP) + 'px';
      G.lettersBox.appendChild(s);
      G.letterEls.push(s);
  });
  
  G.text += newStr;
  G.textEnd = START_PAD + G.text.length * CHAR_STEP;
  G.finishX = G.textEnd + FINISH_GAP;
  G.worldLen = Math.max(G.worldLen, G.finishX + 620);
  
  $$('.plank').forEach(p => { p.style.width = G.worldLen + 'px'; });
}

function buildWorld(){
  const w = $('#world');
  w.innerHTML = ''; w.style.transition = ''; w.style.transform  = 'translate3d(0,0,0)';

  const lanes = [{isPlayer:true}, ...G.bots.map(b=>({bot:b}))];

  lanes.forEach((lane,i)=>{
    const depth = i / Math.max(1,lanes.length-1);
    const scale = 1 - depth*0.34;
    const plankH = Math.round(46*scale);
    const emSize = Math.round(46*scale);

    const div = document.createElement('div');
    div.className = 'lane'; div.dataset.lane = i;
    div.style.cssText = `position:absolute; left:0; width:${G.worldLen}px; height:${plankH}px; z-index:${10-i};`;
    
    div.innerHTML = `<div class="plank" style="position:absolute; bottom:0; width:${isSurvival ? '100000px' : G.finishX+'px'}; height:${plankH}px;
                       ${lane.isPlayer?'':`filter:brightness(${1-depth*0.22})`}"></div>`;
    div._plankH = plankH; div._scale = scale;

    const r = document.createElement('div');
    r.className = 'racer ' + (lane.bot?.isGhost ? 'ghost' : '');
    const who = lane.isPlayer
      ? {emoji:SKINS[skinPref].emoji, name:'DU', flag:'🇩🇪', style:skinStyle(SKINS[skinPref])}
      : {emoji:lane.bot.emoji, name:lane.bot.name, flag:lane.bot.flag, style:(lane.bot.isGhost ? skinStyle(SKINS[skinPref]) : 'display:inline-block;transform:scaleX(-1)')};
    r.innerHTML = `
      <div class="tag">
        <div class="nametag pill">${who.flag} ${who.name}</div>
        ${lane.isPlayer?'<div class="nametag" style="justify-content:center"><span class="down">▼</span></div>':''}
      </div>
      <span class="crown">👑</span>
      <span class="em" style="font-size:${emSize}px;${who.style}">${who.emoji}</span>`;
    r.style.bottom = plankH+'px'; r.style.zIndex = '4';
    div.appendChild(r);
    if (lane.isPlayer) G.playerEl = r; else lane.bot.el = r;

    if (lane.isPlayer){
      const ribbon = document.createElement('div');
      ribbon.id = 'ribbon'; ribbon.style.height = Math.round(plankH*0.62)+'px'; ribbon.style.bottom = Math.round(plankH*0.19)+'px'; ribbon.style.zIndex = '2';
      div.appendChild(ribbon); G.ribbonEl = ribbon;

      const letters = document.createElement('div');
      letters.id = 'letters'; letters.style.cssText = `position:absolute; bottom:${Math.round(plankH*0.22)}px; left:0; height:${plankH}px; z-index:3;`;
      G.letterEls = [...G.text].map((ch,idx)=>{
        const s = document.createElement('span'); s.textContent = ch === ' ' ? ' ' : ch; s.style.left = (START_PAD + idx*CHAR_STEP)+'px';
        letters.appendChild(s); return s;
      });
      div.appendChild(letters); G.lettersBox = letters;
    }
    w.appendChild(div);
  });

  if(!isSurvival) {
    const fin = document.createElement('div');
    fin.id = 'finishPad'; fin.style.left = G.finishX+'px'; fin.style.width = (G.worldLen - G.finishX)+'px'; fin.style.zIndex = '1';
    fin.innerHTML = `<div class="checker"></div><div class="word">FINISH</div>`;
    w.appendChild(fin);
  } else {
    const fire = document.createElement('div');
    fire.id = 'survivalFire';
    w.appendChild(fire);
    G.fireEl = fire;
  }

  G.worldEl = w; markCurrent(); updateRibbon(); placeRacers(); updateCamera();
}

function layoutLanes(){
  const h = $('#scene').clientHeight; const lanes = $$('#world .lane'); const n = lanes.length;
  lanes.forEach((l,i)=>{
    const t = n===1 ? 0 : i/(n-1); const top = h*0.45 - t*h*0.35; l.style.top = Math.round(top - l._plankH)+'px';
  });
}
addEventListener('resize', ()=>{ if(G) layoutLanes(); });

function runCountdown(){
  const box = $('#count'); box.style.display='flex';
  const steps = ['3','2','1','LOS!']; let i = 0;
  initAudio();
  const tick = ()=>{
    box.innerHTML = `<b class="${steps[i]==='LOS!'?'go':''}">${steps[i]}</b>`;
    if(steps[i]!=='LOS!') beep(400, 'sine', 0.1, 0.1); else beep(800, 'sine', 0.3, 0.1);
    i++;
    if (i < steps.length) G.cdT = setTimeout(tick, 900);
    else G.cdT = setTimeout(()=>{ box.style.display='none'; goRace(); }, 800);
  };
  tick();
}

function goRace(){
  G.running = true; G.startT = performance.now(); G.lastT  = G.startT;
  G.hudTimer = setInterval(updateHUD, 250);
  startEngineSound();
  G.raf = requestAnimationFrame(loop);
}

function loop(t){
  if(!G || !G.running){ return; }
  const dt = Math.min(0.05,(t - G.lastT)/1000); G.lastT = t;
  const elapsed = (t - G.startT)/1000;
  G.time = elapsed;

  $('#hudTime').textContent = elapsed.toFixed(1) + 's';
  updateEngineSound(stats().wpm);

  if(G.isSurvival) {
    // Rote Zone rückt auf
    G.policeX += G.policeSpeed * dt * CHAR_STEP;
    G.policeSpeed += 0.015 * dt; // Wird langsam immer schwerer
    G.fireEl.style.transform = `translate3d(${START_PAD + G.policeX}px, 0, 0)`;

    if (G.text.length - G.typed < 30) appendSurvivalText();
    
    // Ghost Logik für Survival
    for(const b of G.bots) {
      if(b.isGhost && !b.finished) {
        b.x += b.cps * dt * CHAR_STEP;
        if(elapsed >= b.finishT) {
          b.finished = true;
          if(b.el) { b.el.style.filter = 'brightness(0.2) sepia(1) hue-rotate(-50deg) saturate(5)'; shake(b.el); }
        }
      }
    }

    if (START_PAD + G.policeX >= START_PAD + G.typed * CHAR_STEP) {
      playerFinished(true); return;
    }
  } else {
    for(const b of G.bots){
      if(b.finished) continue;
      if(b.isGhost) {
        b.x = (elapsed / b.finishT) * (G.textEnd - START_PAD);
      } else {
        const wob = 1 + 0.18*Math.sin(elapsed*0.9 + b.phase);
        b.x += b.cps*wob*CHAR_STEP*dt;
      }
      if (START_PAD + b.x >= G.textEnd){
        b.x = G.textEnd - START_PAD; b.finished = true; b.finishT = elapsed;
      }
    }
  }
  
  placeRacers(elapsed); updateCamera(); updateLeaderCrown();
  G.raf = requestAnimationFrame(loop);
}

function placeRacers(){
  const px = START_PAD + G.typed*CHAR_STEP; G.playerEl.style.left = px+'px';
  for(const b of G.bots) b.el.style.left = (START_PAD + b.x)+'px';
}

function updateCamera(){
  const anchor = $('#stage').clientWidth*0.38;
  const px = START_PAD + G.typed*CHAR_STEP;
  const cam = Math.max(0, px - anchor);
  G.worldEl.style.transform = `translate3d(${-cam}px,0,0)`;
}

function updateLeaderCrown(){
  if(G.isSurvival) return;
  let best = {prog:G.typed/G.text.length, el:G.playerEl};
  for(const b of G.bots){
    const p = b.x/(G.textEnd-START_PAD);
    if(p > best.prog) best = {prog:p, el:b.el};
  }
  $$('#world .racer.leader').forEach(r=>r.classList.remove('leader'));
  if(best.prog>0.01) best.el.classList.add('leader');
}

function handleKey(key){
  if(!G || !G.running || G.over) return;
  if (key === 'Backspace') return;
  
  initAudio();
  if (key.length !== 1) return;
  const ch = key.toLowerCase();
  
  G.keystrokes++;
  const target = G.text[G.typed];

  if (ch === target){
    playType();
    G.letterEls[G.typed].className = 'done';
    G.typed++;
    markCurrent(); updateRibbon(); placeRacers(); updateCamera();
    if (!G.isSurvival && G.typed >= G.text.length) playerFinished(false);
  } else {
    playErr();
    G.errors++;
    shake(G.playerEl);
  }
}

function markCurrent(){
  G.letterEls.forEach((el,i)=>{
    if (i < G.typed) return;
    el.className = (i===G.typed) ? 'cur' : '';
  });
}

function updateRibbon(){
  const from = START_PAD + G.typed*CHAR_STEP - CHAR_STEP*0.55;
  const to   = isSurvival ? START_PAD + G.typed*CHAR_STEP + CHAR_STEP : G.textEnd + FINISH_GAP*0.55;
  G.ribbonEl.style.left  = from+'px';
  G.ribbonEl.style.width = Math.max(0,to-from)+'px';
}

function shake(el){
  el.animate([{transform:'translateX(-50%)'},{transform:'translateX(calc(-50% - 5px))'},{transform:'translateX(calc(-50% + 5px))'},{transform:'translateX(-50%)'}], {duration:130});
}

function stats(){
  const mins = G.time ? Math.max(1/60, G.time/60) : 1;
  const wpm  = Math.round((G.typed/5)/mins);
  const acc  = G.keystrokes ? Math.round(100*(G.keystrokes-G.errors)/G.keystrokes) : 100;
  const prog = Math.round(100*G.typed/G.text.length);
  return {wpm,acc,prog};
}
function updateHUD(){
  const {wpm,acc,prog} = stats();
  $('#hudWpm').textContent  = wpm;
  $('#hudAcc').textContent  = acc+'%';
  if(!isSurvival) $('#hudProg').textContent = prog+'%';
}

function playerFinished(caughtByFire = false){
  G.over = true; G.running = false; G.playerFinishT = G.time;
  cancelAnimationFrame(G.raf); clearInterval(G.hudTimer); stopEngineSound();
  updateHUD(); if(input) input.blur();

  if(!isSurvival) {
    G.playerEl.style.transition = 'left .6s ease-out';
    G.playerEl.style.left = (G.finishX + 140)+'px';
    updateCamera();
    const camAnchor = $('#stage').clientWidth*0.38;
    G.worldEl.style.transition = 'transform .6s ease-out';
    G.worldEl.style.transform  = `translate3d(${-(G.finishX+140-camAnchor)}px,0,0)`;
    confettiBurst();
  } else {
    G.playerEl.style.filter = 'brightness(0.2) sepia(1) hue-rotate(-50deg) saturate(5)';
    shake(G.playerEl);
  }

  setTimeout(() => showResult(caughtByFire), 1000);
}

function showResult(caughtByFire){
  const {wpm,acc} = stats();
  const t = G.playerFinishT;
  
  let earnedCoins = Math.floor(wpm / 2);
  if(acc === 100) earnedCoins += 5;
  if(isSurvival) earnedCoins += Math.floor(t / 2);
  savedData.coins += earnedCoins;
  saveData();

  checkQuests(wpm, acc, true);

  if(!isSurvival) {
    let b = savedData.bests[currentLevel] || { wpm: 0, time: Infinity };
    if (wpm > b.wpm) b.wpm = wpm;
    if (t < b.time) b.time = t;
    savedData.bests[currentLevel] = b;
    saveData();

    // APPLE IOS SAFARI FIX: Wir benutzen <, >, 0 damit Safari nicht abstürzt, wenn Infinity auftaucht
    const entries = [
      {me:true, name:'DU', flag:'🇩🇪', wpm, t: t, prog:1},
      ...G.bots.filter(b=>!b.isGhost).map(b=>({
        me:false, name:b.name, flag:b.flag, wpm:Math.round(b.cps*60/5), t:b.finished ? b.finishT : Infinity, prog:b.x/(G.textEnd-START_PAD),
      })),
    ].sort((a,b)=> {
      if (a.t < b.t) return -1;
      if (a.t > b.t) return 1;
      return b.prog - a.prog;
    });

    const place = entries.findIndex(e=>e.me)+1;
    const medal = ['🥇','🥈','🥉'][place-1] || '🏁';

    $('#resPlace').textContent = `${medal} Platz ${place}`;
    $('#resWpm').textContent   = wpm;
    $('#resTime').textContent  = t.toFixed(1) + 's';
    $('#resAcc').textContent   = acc+'%';
    $('#resCoins').textContent = '+' + earnedCoins;
    $('#resTimeBox').style.display = 'block';

    const btn = $('#btnAgain');
    if (place === 1) {
      if (currentLevel === savedData.unlocked && savedData.unlocked < 19) {
        savedData.unlocked++;
        saveData();
      }
      if (currentLevel < 19) {
        $('#resSub').textContent = 'Du hast das Level geschafft!';
        btn.innerHTML = '➡️ Nächstes Level';
        btn.onclick = () => { currentLevel++; hideResult(); startRace(); };
      } else {
        $('#resSub').textContent = 'SPIEL DURCHGESPIELT! DU BIST EINE LEGENDE!';
        btn.innerHTML = '🔄 Nochmal spielen';
        btn.onclick = () => { hideResult(); startRace(); };
      }
    } else {
      $('#resSub').textContent = 'Das war nicht schnell genug.';
      btn.innerHTML = '🔄 Nochmal versuchen';
      btn.onclick = () => { hideResult(); startRace(); };
    }

    $('#board').innerHTML = entries.map((e,i)=>`
      <div class="row ${e.me?'me':''}">
        <span class="pl">${i+1}.</span><span class="fl">${e.flag}</span>
        <span class="nm">${e.name} ${i===0?'👑':''}</span>
        <span class="wp">${e.wpm} WPM${e.t===Infinity?' · unterwegs':''}</span>
      </div>`).join('');
      
  } else {
    // Speichere Survival Bestzeit
    if (t > savedData.survivalBest.time) {
      savedData.survivalBest.time = t;
      savedData.survivalBest.wpm = wpm;
      savedData.survivalBest.typed = G.typed;
      saveData();
      updateMenuBest();
    }

    $('#resPlace').textContent = `🔥 Überlebt!`;
    $('#resSub').textContent = 'Die Rote Zone hat dich erwischt.';
    $('#resWpm').textContent   = wpm;
    $('#resTime').textContent  = t.toFixed(1) + 's';
    $('#resAcc').textContent   = acc+'%';
    $('#resCoins').textContent = '+' + earnedCoins;
    $('#resTimeBox').style.display = 'block';
    
    let ghostText = '';
    if (t >= savedData.survivalBest.time && t > 1) ghostText = `<br><span style="color:var(--green)">🏆 Neuer Survival Rekord!</span>`;
    
    $('#board').innerHTML = `<div style="text-align:center; padding: 20px; font-size:18px;">Du hast <b>${t.toFixed(1)} Sekunden</b> überlebt und <b>${G.typed}</b> Zeichen getippt!${ghostText}</div>`;
    
    const btn = $('#btnAgain');
    btn.innerHTML = '🔄 Nochmal versuchen';
    btn.onclick = () => { hideResult(); startRace(); };
  }

  $('#result').classList.add('show');
}

$('#btnMenu').addEventListener('click', ()=>{ hideResult(); show('menu'); });
function hideResult(){ $('#result').classList.remove('show'); }

function stopRace(){
  if(!G) return;
  cancelAnimationFrame(G.raf); clearInterval(G.hudTimer); clearTimeout(G.cdT); stopEngineSound();
  G = null;
}

if(input) {
  input.addEventListener('input', () => {
    const v = input.value;
    if (v.length === 0) { handleKey('Backspace'); } 
    else if (v.length > 1) { const chars = v.substring(1); for (const ch of chars) { handleKey(ch); } }
    resetInput();
  });
}

$('#race').addEventListener('pointerdown', () => {
  if($('#race').classList.contains('active') && (!G || !G.over)) {
    if(input) input.focus();
  }
});

const cv = $('#confetti'), cx = cv.getContext('2d');
let pieces = [];
function sizeCanvas(){ cv.width = $('#stage').clientWidth; cv.height = $('#stage').clientHeight; }
addEventListener('resize', sizeCanvas); sizeCanvas();

function confettiBurst(){
  const colors = ['#22e63c','#ffd23e','#ff4d5e','#3ec7ff','#ff8ae0','#ffffff'];
  for(let i=0;i<130;i++){
    pieces.push({
      x:Math.random()*cv.width, y:-20-Math.random()*cv.height*0.5, w:6+Math.random()*7, h:10+Math.random()*10,
      vy:2.2+Math.random()*3.2, vx:-1.2+Math.random()*2.4, rot:Math.random()*Math.PI, vr:-0.15+Math.random()*0.3, c:colors[i%colors.length],
    });
  }
  if(!confettiBurst.running){ confettiBurst.running=true; tickConfetti(); }
}
function tickConfetti(){
  cx.clearRect(0,0,cv.width,cv.height);
  pieces = pieces.filter(p=>p.y < cv.height+30);
  for(const p of pieces){
    p.x+=p.vx; p.y+=p.vy; p.rot+=p.vr;
    cx.save(); cx.translate(p.x,p.y); cx.rotate(p.rot); cx.fillStyle=p.c; cx.fillRect(-p.w/2,-p.h/2,p.w,p.h); cx.restore();
  }
  if(pieces.length) requestAnimationFrame(tickConfetti); else confettiBurst.running=false;
}

initQuests();
buildSkinGrid();
updateMenuChar();
applyTheme(currentLevel, false);
updateMenuBest();
updateGhostBtn();
