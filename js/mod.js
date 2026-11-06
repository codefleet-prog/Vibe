  if (location.hash) history.replaceState(null, '', location.pathname + location.search);
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  (function () {
    var R = document.documentElement;
    function mod() {
      var w = innerWidth, h = innerHeight;
      var statik = matchMedia('(prefers-reduced-motion: reduce)').matches || h < 500 || w < 330;
      var mob = w < 1000 && (w <= h * 1.1 || w < 700);
      return (statik ? 'statik' : 'mozog') + (mob ? ' mob' : '');
    }
    var m = mod(), t = 0;
    m.split(' ').forEach(function (c) { R.classList.add(c); });
    addEventListener('resize', function () {
      clearTimeout(t);
      if (mod() === m) { R.classList.remove('valt'); return; }
      R.classList.add('valt');
      t = setTimeout(function () { if (mod() !== m) location.reload(); else R.classList.remove('valt'); }, 350);
    });
  })();
