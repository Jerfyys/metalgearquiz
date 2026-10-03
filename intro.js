(() => {
  const key = 'kojima-tribute-intro-seen';
  try { if (sessionStorage.getItem(key)) return; sessionStorage.setItem(key, '1'); } catch {}
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const style = document.createElement('style');
  style.textContent = `.kojima-intro{position:fixed;inset:0;z-index:10000;background:#000;color:#fff;display:grid;place-items:center;cursor:pointer;animation:kojima-intro-out .9s ease 2.6s forwards}.kojima-intro-credit{text-align:center;font-family:Arial,Helvetica,sans-serif;font-weight:400;line-height:1.3;animation:kojima-credit-in .65s ease both}.kojima-intro-credit span{display:block;font-size:14px}.kojima-intro-credit strong{display:block;font-size:23px;font-weight:400}.kojima-intro-note{position:absolute;bottom:24px;left:20px;right:20px;text-align:center;font:10px Arial,sans-serif;letter-spacing:1px;color:#777}@keyframes kojima-credit-in{from{opacity:0}to{opacity:1}}@keyframes kojima-intro-out{to{opacity:0;visibility:hidden}}`;
  document.head.append(style);
  const intro = document.createElement('div');
  intro.className = 'kojima-intro';
  intro.setAttribute('aria-label', 'Opening tribute to Hideo Kojima. Click or press Escape to skip.');
  const credit = document.createElement('div'); credit.className = 'kojima-intro-credit';
  const label = document.createElement('span'); label.textContent = 'Created and Directed by';
  const name = document.createElement('strong'); name.textContent = 'Hideo Kojima'; credit.append(label, name);
  const note = document.createElement('small'); note.className = 'kojima-intro-note'; note.textContent = 'A TRIBUTE TO THE GAMES · UNOFFICIAL FAN QUIZ';
  intro.append(credit, note); document.body.append(intro);
  function dismiss(){ intro.remove(); style.remove(); document.removeEventListener('keydown', onKey); clearTimeout(timer); }
  function onKey(event){ if(event.key === 'Escape'){ event.preventDefault(); dismiss(); } }
  intro.addEventListener('click', dismiss); document.addEventListener('keydown', onKey);
  const timer = setTimeout(dismiss, 3600);
})();