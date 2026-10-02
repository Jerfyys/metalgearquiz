(() => {
  let context;
  function tick(control) {
    try {
      const Audio = window.AudioContext || window.webkitAudioContext;
      if (!Audio) return;
      context ||= new Audio();
      if (context.state === 'suspended') context.resume().catch(() => {});
      const stranding = document.body.classList.contains('stranding') ||
        control?.closest('.archive-card.strand') || /death-stranding/.test(location.pathname);
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      const now = context.currentTime;
      oscillator.type = stranding ? 'sine' : 'triangle';
      oscillator.frequency.setValueAtTime(stranding ? 1600 : 1050, now);
      oscillator.frequency.exponentialRampToValueAtTime(stranding ? 1100 : 780, now + 0.045);
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.025, now + 0.003);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.055);
      oscillator.connect(gain);
      gain.connect(context.destination);
      oscillator.onended = () => { oscillator.disconnect(); gain.disconnect(); };
      oscillator.start(now);
      oscillator.stop(now + 0.06);
    } catch { /* Audio feedback must never interrupt a button action. */ }
  }
  document.addEventListener('click', event => {
    const control = event.target.closest('button, .archive-card, header a');
    if (control && !control.disabled && control.getAttribute('aria-disabled') !== 'true') tick(control);
  }, true);
  document.addEventListener('keydown', event => {
    if (event.repeat || event.altKey || event.ctrlKey || event.metaKey ||
        /INPUT|TEXTAREA|SELECT/.test(event.target.tagName) || !/^[1-4]$/.test(event.key)) return;
    const choices = document.getElementById('choices');
    const control = choices?.children[Number(event.key) - 1];
    if (choices && !choices.hidden && control && !control.disabled) tick(control);
  }, true);
})();
