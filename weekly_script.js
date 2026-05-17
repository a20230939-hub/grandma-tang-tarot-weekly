
const LINE = 'https://lin.ee/Z5rIjNT';

const WEEKLY = [
  {
    id:'a', tag:'A｜星幣一 · 正位', period:'5/18 – 5/24 週間指引',
    title:'這週的能量：新機會醞釀中，先接住它',
    body:`<p>這週有什麼事情一直在你心裡轉，但你一直在等「更好的時機」才開始？</p><p>星幣一說的是：那個時機，就是現在。不是因為你準備好了，而是因為繼續等下去，你只是在消耗自己。</p><p>你不需要把所有事情想清楚才能動。先動，後面才會慢慢清楚。</p><p>💕 感情：如果這週有個人讓你多想了兩秒，不要太快說服自己「算了」。有時候緣分就差那一個開口。</p>`,
    tip:'本週建議：不是還沒準備好，是你還沒決定要開始。'
  },
  {
    id:'b', tag:'B｜聖杯皇后 · 正位', period:'5/18 – 5/24 週間指引',
    title:'這週的能量：先把自己填滿，再往外給',
    body:`<p>你有沒有發現，你很擅長照顧別人的感受，但輪到自己的時候，你說的第一句話通常是「沒關係」。</p><p>這週的牌在說：先照顧自己。不是叫你自私，是因為你一直在給，卻沒有人在問你還剩多少。</p><p>如果最近覺得莫名的累，可能不是你做得不夠，是你把自己排在最後太久了。</p><p>💕 感情：你很容易感受到對方的情緒，但他的焦慮不是你的責任。感受他，但不要替他扛。</p>`,
    tip:'本週建議：你值得被照顧，不只是照顧別人。'
  },
  {
    id:'c', tag:'C｜聖杯四 · 正位', period:'5/18 – 5/24 週間指引',
    title:'這週的能量：停下來也是一種整理',
    body:`<p>最近是不是有點提不起勁？看什麼都覺得好像還好，對什麼都有點興趣缺缺？</p><p>不是你出了什麼問題，是這張牌在提醒妳：停下來。</p><p>你可能已經跑太久了，身體在叫你停，但你還在逼自己「應該要有動力」。這週不需要想下一步，先把現在這一步站穩就好。</p><p>💕 感情：如果對這段關係有點倦怠，不要急著下結論。有時候不是感情出問題，是你自己的電快沒了。先充電，再判斷。</p>`,
    tip:'本週建議：停下來不是放棄，是讓自己有力氣繼續走。'
  }
];

const TESTI = [
  {hl:'<mark>上次的有說到的都中了！！</mark>他誠實跟我說感情淡了～謝謝妳的建議。',body:'跟他表達我內心想法，我們聊很久，很和平分手。雖然還是難過，但很莫名突然覺得心中有個石頭放下來。',who:'匿名｜感情課題',stars:'★★★★★'},
  {hl:'婆婆說我太習慣在關係裡委屈自己，<mark>要我試著說出自己的需求</mark>。',body:'我真的去說了——沒想到他的反應比我預期的好很多。我們反而因為這樣聊開了，現在比之前更有安全感。',who:'匿名｜感情課題',stars:'★★★★★'},
  {hl:'婆婆說我一直在等他主動，<mark>但其實他也在等我</mark>。',body:'我後來鼓起勇氣傳了訊息，現在已經在交往了。當時如果沒有那次占卜，我可能還在等。',who:'匿名｜感情課題',stars:'★★★★★'},
  {hl:'這次的分析讓我能<mark>看清楚實際的情況</mark>和自己內心真正的感受。',body:'謝謝婆婆，接下來我會努力把重心放回自己身上，讓自己慢慢變得更好，為了我自己。',who:'匿名｜感情課題',stars:'★★★★★'},
  {hl:'原本那些糾結<mark>好像被解開了</mark>。',body:'謝謝妳幫我分析，這就是我內心狀況。說完之後，心裡輕了很多。',who:'匿名｜職場關係',stars:'★★★★★'},
  {hl:'沒想到<mark>一張牌就說出了我最近一直在迴避的事情</mark>。',body:'說完之後有一種說不出的輕鬆感。不是因為事情解決了，而是因為終於有人幫我說清楚了。',who:'Lily｜32歲，行銷主管',stars:'★★★★★'}
];

let selected = null;

function pickCard(id){
  if(selected===id){ resetCard(); return; }
  selected = id;
  document.querySelectorAll('.pick-btn').forEach(b=>b.classList.toggle('active', b.dataset.id===id));
  // Show flip card
  const reveal = document.getElementById('flip-reveal');
  const inner = document.getElementById('flip-inner');
  const front = document.getElementById('flip-front-img');
  reveal.classList.add('show');
  inner.classList.remove('flipped');
  front.src = 'weekly_' + id + '.jpg';
  setTimeout(()=>inner.classList.add('flipped'), 200);
  // Show result
  const card = WEEKLY.find(c=>c.id===id);
  document.getElementById('r-tag').textContent = card.tag;
  document.getElementById('r-period').textContent = card.period;
  document.getElementById('r-title').textContent = card.title;
  document.getElementById('r-body').innerHTML = card.body;
  document.getElementById('r-tip').innerHTML = '<strong>✦ </strong>' + card.tip;
  setTimeout(()=>{
    document.getElementById('week-result-box').classList.add('show');
    document.getElementById('weekly-cta-card').classList.add('show');
    document.getElementById('week-result-box').scrollIntoView({behavior:'smooth',block:'start'});
  }, 600);
}

function resetCard(){
  selected = null;
  document.querySelectorAll('.pick-btn').forEach(b=>b.classList.remove('active'));
  document.getElementById('flip-reveal').classList.remove('show');
  document.getElementById('flip-inner').classList.remove('flipped');
  document.getElementById('week-result-box').classList.remove('show');
  document.getElementById('weekly-cta-card').classList.remove('show');
}

function renderTesti(){
  const grid=document.getElementById('testi-grid');
  TESTI.forEach(t=>{
    const c=document.createElement('div');
    c.className='testi-card fade-in';
    c.innerHTML=`<div class="testi-stars">${t.stars}</div><div class="testi-hl">${t.hl}</div><div class="testi-body">${t.body}</div><div class="testi-who">${t.who}</div>`;
    grid.appendChild(c);
  });
}

function initFAQ(){
  document.querySelectorAll('.faq-item').forEach(item=>{
    item.querySelector('.faq-q').addEventListener('click',()=>{
      const o=item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i=>i.classList.remove('open'));
      if(!o)item.classList.add('open');
    });
  });
}

function initStars(){
  const layer=document.querySelector('.star-layer');
  if(!layer)return;
  const colors=['rgba(255,255,255,0.7)','rgba(232,160,180,0.8)','rgba(180,160,230,0.7)','rgba(201,168,76,0.75)'];
  const frag=document.createDocumentFragment();
  for(let i=0;i<150;i++){
    const s=document.createElement('div');
    const sz=Math.random()<0.12?2:1;
    const col=colors[Math.floor(Math.random()*colors.length)];
    const dur=2+Math.random()*4,delay=Math.random()*7;
    s.style.cssText=`position:absolute;left:${Math.random()*100}%;top:${Math.random()*100}%;width:${sz}px;height:${sz}px;border-radius:50%;background:${col};animation:twinkle ${dur}s ${delay}s ease-in-out infinite;`;
    frag.appendChild(s);
  }
  layer.appendChild(frag);
}

function initScroll(){
  const obs=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target);}});},{threshold:.1});
  document.querySelectorAll('.fade-in').forEach(el=>obs.observe(el));
}

document.addEventListener('DOMContentLoaded',()=>{
  initStars(); renderTesti(); initFAQ(); initScroll();
  document.getElementById('r-week-reset')?.addEventListener('click', resetCard);
});
