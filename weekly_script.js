
const LINE = 'https://lin.ee/Z5rIjNT';

const WEEKLY = [
  {
    id:'a', tag:'A｜星幣一 · 正位', period:'5/18 – 5/24 週間指引',
    title:'這週的能量：新機會醞釀中，先接住它',
    body:`<p>這週有個新的開始正在醞釀，可能是一個機會、一個想法，或一個你一直在等的時機。</p><p>不用想太多，也不用準備到完美——先接住它，讓它落地，後面才能慢慢長出來。</p><p>💕 感情：新的連結或關係有機會在這週出現，保持開放，不要因為過去的傷就把門關死。</p>`,
    tip:'這週可以做的一件事：把那個一直在心裡的想法，踏出第一步。'
  },
  {
    id:'b', tag:'B｜聖杯皇后 · 正位', period:'5/18 – 5/24 週間指引',
    title:'這週的能量：先把自己填滿，再往外給',
    body:`<p>這週你的感知力和同理心特別強，很容易感受到周圍人的情緒和需要。</p><p>但記得：照顧自己的感受跟照顧別人一樣重要。先把自己填滿，才能真的給出去。</p><p>💕 感情：你很容易感受到對方的狀態，但要有邊界——感受他，不要吸收他的情緒。</p>`,
    tip:'這週可以做的一件事：做一件純粹為自己、不需要考慮任何人的事。'
  },
  {
    id:'c', tag:'C｜聖杯四 · 正位', period:'5/18 – 5/24 週間指引',
    title:'這週的能量：停下來也是一種整理',
    body:`<p>這週可能覺得有點提不起勁，對眼前的事情興趣缺缺，或是找不到什麼讓你有動力的事。</p><p>沒關係，有時候這種「靜止」是在為下一階段積累能量。停下來，也是一種整理。</p><p>💕 感情：你可能對現在的關係狀態有些倦怠或不確定，先不要急著做決定，給自己一點空間想清楚。</p>`,
    tip:'這週可以做的一件事：允許自己休息，不要因為「沒生產力」而有罪惡感。'
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
