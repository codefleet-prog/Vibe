(function () {
  'use strict';
  var D = document, R = D.documentElement;
  var KEPSOR = {"map":{"n":28,"map":[0,0,0,1,1,2,3,4,5,6,7,8,9,10,11,12,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27],"fps":15,"t0":1.0,"t1":4.0},"event":{"n":47,"map":[0,0,0,0,1,2,3,4,5,6,7,8,8,8,8,8,8,8,8,8,8,8,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,26,27,28,29,30,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,46,46,46,46,46,46],"fps":15,"t0":0.9,"t1":6.2},"wallet":{"n":17,"map":[0,0,0,1,2,3,4,5,6,7,8,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,12,13,14,15,15,16,16],"fps":15,"t0":1.0,"t1":3.9},"rate":{"n":66,"map":[0,0,0,1,2,3,4,5,6,6,6,6,6,6,6,6,6,6,7,8,9,10,11,12,13,13,13,13,13,13,13,13,13,14,15,16,17,18,19,19,19,20,21,22,23,24,25,25,25,26,27,28,29,30,31,31,31,32,33,34,35,36,37,38,38,38,38,38,38,38,39,40,41,42,43,44,45,45,45,45,45,45,45,45,45,46,47,48,49,50,51,52,52,52,53,54,55,56,57,58,58,58,59,60,61,62,63,64,64,64,64,64,64,65,65,65,65,65,65,65,65,65,65],"fps":15,"t0":0.8,"t1":8.9},"artist":{"n":31,"map":[0,0,0,0,1,2,3,4,5,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,30,30,30,30,30],"fps":15,"t0":0.9,"t1":4.4}};
  var MOZOG = R.classList.contains('mozog'), MOB = R.classList.contains('mob');
  function $(s, el) { return (el || D).querySelector(s); }
  function $$(s, el) { return Array.prototype.slice.call((el || D).querySelectorAll(s)); }
  function cl(v, a, b) { return v < a ? a : v > b ? b : v; }
  function sm(t) { t = cl(t, 0, 1); return t * t * (3 - 2 * t); }
  function ssm(t) { t = cl(t, 0, 1); return t * t * t * (t * (t * 6 - 15) + 10); }
  function lerp(a, b, t) { return a + (b - a) * t; }
  function sav(s, a, b) { return b <= a ? (s >= b ? 1 : 0) : cl((s - a) / (b - a), 0, 1); }
  function felso(el) { var y = 0; while (el) { y += el.offsetTop; el = el.offsetParent; } return y; }
  $$('.zaj>span').forEach(function (sp, si) {
    var t = sp.textContent; sp.textContent = '';
    for (var k = 0; k < t.length; k++) {
      var b = D.createElement('b'); b.textContent = t[k];
      b.style.setProperty('--k', k + si * 4);
      b.style.setProperty('--a', ((Math.random() * 2 - 1) * 7).toFixed(1) + 'px');
      b.style.setProperty('--b', ((Math.random() * 2 - 1) * 5).toFixed(1) + 'px');
      sp.appendChild(b);
    }
  });
  var menu = $('#menu'), mgomb = $('#mgomb'), menuZar = function (ev) { ev.preventDefault(); };
  function menuAll(nyit) {
    if (R.classList.contains('mnyit') === nyit) return;
    R.classList.toggle('mnyit', nyit);
    mgomb.setAttribute('aria-expanded', nyit ? 'true' : 'false');
    mgomb.setAttribute('aria-label', nyit ? 'Close menu' : 'Menu');
    if (nyit) menu.removeAttribute('inert'); else menu.setAttribute('inert', '');
    menu.classList.add('mozgas'); clearTimeout(menu._t); menu._t = setTimeout(function () { menu.classList.remove('mozgas'); }, 800);
    if (nyit) {
      addEventListener('wheel', menuZar, { passive: false }); addEventListener('touchmove', menuZar, { passive: false });
      setTimeout(function () { var a = menu.querySelector('a'); if (a) a.focus({ preventScroll: true }); }, 650);
    } else {
      removeEventListener('wheel', menuZar); removeEventListener('touchmove', menuZar);
    }
  }
  mgomb.addEventListener('click', function () { menuAll(!R.classList.contains('mnyit')); if (!R.classList.contains('mnyit')) mgomb.focus(); });
  addEventListener('keydown', function (ev) { if (ev.key === 'Escape' && R.classList.contains('mnyit')) { menuAll(false); mgomb.focus(); } });
  $$('a', menu).forEach(function (a) { a.addEventListener('click', function () { menuAll(false); }); });
  if (!MOZOG) {
    R.classList.remove('pre');
    return;
  }
  var tel = $('#tel'), telS = $('#telS'), telFx = $('#telFx');
  var tourSt = $('#tourSt'), tour = $('#app');
  var PH = 2.0936;
  var PW = 360;
  var H = innerHeight, W = innerWidth;
  var SMY = scrollY, utolsoSMY = -1, fut = false, elozoIdo = 0;
  var MAXS = 1;
  var retegek = {};
  $$('.sl', telS).forEach(function (el) { retegek[el.dataset.k] = el; });
  var sorok = {};
  Object.keys(KEPSOR).forEach(function (nev) {
    var m = KEPSOR[nev];
    var cv = retegek[nev];
    sorok[nev] = { nev: nev, n: m.n, map: m.map, cv: cv, ctx: cv.getContext('2d'), kep: [], betolt: false, kint: -1, kert: 0 };
  });
  function sorBetolt(nev) {
    var q = sorok[nev]; if (!q || q.betolt) return; q.betolt = true;
    for (var i = 0; i < q.n; i++) (function (i) {
      var im = new Image();
      im.decoding = 'async';
      im.onload = function () {
        if (im.decode) im.decode().catch(function () {});
        if (q.kert === i || (q.kint < 0 && i === 0)) rajzol(q, q.kert, true);
      };
      im.src = 'assets/seq/' + nev + '/' + ('00' + i).slice(-3) + '.webp';
      q.kep[i] = im;
    })(i);
  }
  function rajzol(q, fi, kenyszer) {
    q.kert = fi;
    if (fi === q.kint && !kenyszer) return;
    var im = q.kep[fi];
    if (im && im.complete && im.naturalWidth) { q.ctx.drawImage(im, 0, 0, 600, 1304); q.kint = fi; return; }
    for (var d = 1; d < q.n; d++) {
      var a = q.kep[fi - d], b = q.kep[fi + d];
      if (a && a.complete && a.naturalWidth) { if (q.kint !== fi - d) { q.ctx.drawImage(a, 0, 0, 600, 1304); q.kint = fi - d; } return; }
      if (b && b.complete && b.naturalWidth) { if (q.kint !== fi + d) { q.ctx.drawImage(b, 0, 0, 600, 1304); q.kint = fi + d; } return; }
    }
  }
  function sorLepes(nev, p) {
    var q = sorok[nev]; if (!q) return;
    var lep = q.map.length;
    rajzol(q, q.map[Math.round(cl(p, 0, 1) * (lep - 1))], false);
  }
  var FEJ = [
    { id: 'map',     be: .08, jat: 1.0,  all: .16, kep: 'map',    sor: 'map' },
    { id: 'lineup',  be: .62, jat: 1.4,  all: .16, kep: 'event',  sor: 'event' },
    { id: 'wallet',  be: .62, jat: .9,   all: .22, kep: 'wallet', sor: 'wallet' },
    { id: 'ratings', be: .62, jat: 1.5,  all: .16, kep: 'rate',   sor: 'rate' },
    { id: 'more',    be: .62, jat: 1.0,  all: .1,  kep: 'artist', sor: 'artist', fordul: .45, tovabb: .5 }
  ];
  var fejEl = {};
  $$('.ch').forEach(function (el) { fejEl[el.dataset.ch] = el; });
  var ulesek = {};
  $$('[data-seat]').forEach(function (el) { ulesek[el.dataset.seat] = el; });
  var KULCS = [];
  var T = {};
  function meres() {
    W = innerWidth; H = tourSt.offsetHeight || innerHeight;
    heroBetu();
    var max = 0;
    Object.keys(ulesek).forEach(function (k) { max = Math.max(max, ulesek[k].offsetHeight); });
    PW = Math.round(max / PH);
    tel.style.setProperty('--pw', PW + 'px');
    R.style.setProperty('--sw', ulesek.wallet.offsetWidth + 'px');
    var t0 = 0, y = 0, sh = tourSt.offsetHeight;
    FEJ.forEach(function (f, i) {
      f.T = y;
      f.a = y + f.be * sh;
      f.p0 = f.a;
      f.p1 = f.a + f.jat * sh;
      if (f.fordul) { f.fa = f.p1; f.fb = f.p1 + f.fordul * sh; f.ta = f.fb; f.tb = f.fb + f.tovabb * sh; y = f.tb + f.all * sh; }
      else y = f.p1 + f.all * sh;
      f.b = y;
    });
    var elso = FEJ[0];
    var futo = y + .05 * sh;
    tour.style.height = (futo + sh) + 'px';
    var tTop = felso(tour);
    FEJ.forEach(function (f) { ['T', 'a', 'p0', 'p1', 'b', 'fa', 'fb', 'ta', 'tb'].forEach(function (k) { if (f[k] != null) f[k] += tTop; }); });
    elso.T = tTop - .38 * H;
    T.tour = tTop; T.tourEnd = tTop + futo;
    var ven = $('#on-the-map'), sc = $('#scene'), gt = $('#get');
    T.ven = felso(ven); T.scene = felso(sc); T.get = felso(gt);
    MAXS = Math.max(1, D.documentElement.scrollHeight - H);
    var sy = scrollY, scRun = $('#sceneRun'), heroSec = $('#top'), hRun = $('#heroRun');
    T.hRa = felso(hRun); T.hRb = T.hRa + hRun.offsetHeight - heroSec.offsetHeight;
    T.scRa = felso(scRun); T.scRb = T.scRa + scRun.offsetHeight - sc.offsetHeight;
    Object.keys(ulesek).forEach(function (k) {
      var u = ulesek[k], r = u.getBoundingClientRect();
      u._x = r.left + r.width / 2;
      u._s = r.height / (PW * PH);
      var st = u.closest('#tourSt') ? tourSt : (u.closest('#scene') ? sc : (u.closest('#top') ? heroSec : null));
      u._ragad = !!st;
      if (st) {
        u._y = r.top + r.height / 2 - st.getBoundingClientRect().top;
        u._ra = st === tourSt ? T.tour : (st === sc ? T.scRa : T.hRa); u._rb = st === tourSt ? T.tourEnd : (st === sc ? T.scRb : T.hRb);
      } else u._y = r.top + r.height / 2 + sy;
    });
    var hKi = T.hRa + .3 * (T.hRb - T.hRa);
    KULCS = [
      { u: ulesek.hero, a: -1e9, b: T.hRa + .015 * H, elo: true, kep: 'hero' },
      { u: ulesek.hero, a: hKi, b: hKi + 1, kiHero: true, kep: 'hero' },
      { u: ulesek.map, a: hKi + 2, b: Math.max(hKi + 3, elso.T), kint: true, kep: 'map', rz: -16, ry: 34 }
    ];
    FEJ.forEach(function (f) {
      var k = { u: ulesek[f.id], a: f.a, b: f.fordul ? f.fa : f.b, kep: f.kep, sor: f.sor, p0: f.p0, p1: f.p1, fej: f, elo: f === elso };
      if (f.id === 'wallet') k.ut = 'kozel';
      KULCS.push(k);
      if (f.fordul) KULCS.push({ u: ulesek[f.id], a: f.fb, b: T.tourEnd, kep: 'tickets', ut: 'fordul', fej: f });
    });
    KULCS.push({ u: ulesek.scene, a: T.scRa - .12 * H, b: T.scRb, elo: true, kep: 'scene', rz: -22, rx: 30, ry: 12 });
    KULCS.push({ u: ulesek.get, a: ulesek.get._y - .42 * H, b: 1e9, elo: true, kep: 'get', rz: 19.8, ut: 'zuhan' });
    atmenetMeres();
    $$('[data-rv]').forEach(function (el) {
      el._top = felso(el) - (el._dy || 0);
      el._d = parseFloat(el.dataset.d || 0);
    });
    diszek.forEach(function (el) {
      el.style.transform = ''; el._tr = null;
      el._c = felso(el) + el.offsetHeight / 2;
      el._sc = !!el.closest('#scene');
      el._ref = el._sc ? T.scRa : (el._c < H ? 0 : el._c - H / 2);
    });
    utolsoSMY = -1;
    inditas();
  }
  var hh = $('#hh'), heroUles = ulesek.hero;
  function heroBetu() {
    $$('.hw', hh).forEach(function (el) { el.style.transform = ''; });
    if (MOB) {
      hh.style.fontSize = '100px';
      var mw = 0;
      $$('.hr', hh).forEach(function (r) { mw = Math.max(mw, r.children[0].offsetWidth + r.children[1].offsetWidth + 22); });
      var pd = parseFloat(getComputedStyle($('#top')).paddingLeft) || 20;
      hh.style.fontSize = Math.min(100 * (innerWidth - 2 * pd) / mw, H * .07, 66).toFixed(1) + 'px';
      var hT = felso($('#top')), u = heroUles.getBoundingClientRect(), yy = scrollY - hT;
      var ol0 = $('.hero .orn-l'), op0 = $('.hero .orn-p');
      ol0.style.width = '30px'; ol0.style.left = (u.right + 12) + 'px'; ol0.style.top = (u.top + yy + u.height * .08) + 'px';
      op0.style.width = '24px'; op0.style.left = (u.left - 36) + 'px'; op0.style.top = (u.top + yy + u.height * .7) + 'px';
      return;
    }
    var sw = heroUles.offsetWidth;
    var gap = Math.max(26, W * .026);
    var mid = sw + 2 * gap;
    hh.style.setProperty('--mid', mid + 'px');
    hh.style.fontSize = '100px';
    var w = 0;
    $$('.hw>span', hh).forEach(function (sp) { w = Math.max(w, sp.offsetWidth); });
    var pad = parseFloat(getComputedStyle(D.querySelector('.hero-lede')).left) || 40;
    var fel = (W - 2 * pad - mid) / 2;
    var fs = 100 * fel * .96 / w;
    fs = Math.min(fs, heroUles.offsetHeight * .72 / (4 * .92), 190);
    hh.style.fontSize = fs.toFixed(1) + 'px';
    var hTop = felso($('#top'));
    var ur = heroUles.getBoundingClientRect(), sy = scrollY - hTop;
    var hw = $$('.hw', hh), elso = hw[1].getBoundingClientRect(), utso = hw[6].getBoundingClientRect();
    var wl = Math.min(56, Math.max(34, W * .032)), hl = wl * 383 / 281;
    var wp = Math.min(42, Math.max(26, W * .024)), hp = wp * 383 / 281;
    var ol = $('.hero .orn-l'), op = $('.hero .orn-p');
    ol.style.width = wl + 'px'; ol.style.left = (ur.right + gap * .3) + 'px'; ol.style.top = (elso.top + sy - hl - H * .018) + 'px';
    op.style.width = wp + 'px'; op.style.left = (ur.left - gap * .3 - wp) + 'px'; op.style.top = (utso.bottom + sy + H * .03) + 'px';
  }
  var HA = null;
  var ovT = $$('.ov-t'), ovN = $$('.ov-n'), ovP = $$('.ov-p'), ovL = $('.ov .hl-x');
  var heroBut = [$('.hero-k'), $('.hero-lede'), $('.hero-cta')], heroBg = $('.hero-bg'), heroOrn = $$('.hero .orn');
  function atmenetMeres() {
    var hw = $$('.hw', hh);
    hw.forEach(function (el) { el.style.transform = ''; el._tr = null; });
    ovT.forEach(function (el) { el.style.opacity = ''; });
    var hr = $('#top').getBoundingClientRect();
    var fs = parseFloat(hh.style.fontSize) || 120;
    var sorok = [];
    for (var i = 0; i < 4; i++) {
      var L = hw[2 * i], Rw = hw[2 * i + 1];
      var lr = L.getBoundingClientRect(), rr = Rw.getBoundingClientRect(), tr = ovT[i].getBoundingClientRect();
      var tfs = parseFloat(getComputedStyle(ovT[i]).fontSize);
      var dx = ((rr.left - lr.right) - fs * .22) / 2;
      var k = tfs / fs;
      var ox = lr.left + dx;
      var cel = tr.top + tfs * .46 - lr.height * k / 2;
      sorok.push({ L: L, R: Rw, dx: dx, k: k,
        lx: lr.left - hr.left, ly: lr.top - hr.top, rx: rr.left - hr.left,
        tLx: tr.left - hr.left, tRx: tr.left - hr.left + (rr.left - dx - ox) * k, ty: cel - hr.top, r: i % 2 ? 3 : -3 });
    }
    HA = { sorok: sorok };
  }
  function heroAtmenet() {
    if (!HA) return;
    var hp = sav(SMY, T.hRa, T.hRb);
    if (hp === HA.p) return; HA.p = hp;
    var ki = ssm(hp / .2), gy = ssm(sav(hp, .08, .34));
    heroBut.forEach(function (el, i) { el.style.opacity = (1 - ki).toFixed(3); el.style.translate = '0 ' + (-ki * 26).toFixed(1) + 'px'; });
    heroOrn.forEach(function (el) { el.style.opacity = (1 - ssm(sav(hp, .02, .2))).toFixed(3); });
    heroBg.style.opacity = (1 - .65 * ssm(sav(hp, .1, .7))).toFixed(3);
    HA.sorok.forEach(function (q, i) {
      var kes = .34 + (3 - i) * .07, f = ssm(sav(hp, kes, kes + .32));
      var iv = Math.sin(Math.PI * f) * H * .07;
      var sc = lerp(1, q.k, f), rot = Math.sin(Math.PI * f) * q.r;
      var lx0 = q.dx * gy, lx1 = q.tLx - q.lx, y1 = q.ty - q.ly;
      var rx0 = -q.dx * gy, rx1 = q.tRx - q.rx;
      var op = 1 - sm((f - .86) / .12);
      var tL = 'translate(' + lerp(lx0, lx1, f).toFixed(1) + 'px,' + (lerp(0, y1, f) - iv).toFixed(1) + 'px) rotate(' + rot.toFixed(2) + 'deg) scale(' + sc.toFixed(4) + ')';
      var tR = 'translate(' + lerp(rx0, rx1, f).toFixed(1) + 'px,' + (lerp(0, y1, f) - iv).toFixed(1) + 'px) rotate(' + rot.toFixed(2) + 'deg) scale(' + sc.toFixed(4) + ')';
      q.L.style.transform = tL; q.R.style.transform = tR;
      q.L.style.opacity = q.R.style.opacity = op.toFixed(3);
      q.L.style.visibility = q.R.style.visibility = op <= 0 ? 'hidden' : '';
      ovT[i].style.opacity = sm((f - .85) / .15).toFixed(3);
      var reszlet = ssm(sav(hp, kes + .27, kes + .42));
      ovN[i].style.opacity = ovP[i].style.opacity = reszlet.toFixed(3);
      ovN[i].style.translate = ovP[i].style.translate = '0 ' + ((1 - reszlet) * 16).toFixed(1) + 'px';
    });
    ovL.style.opacity = 1; ovL.style.transform = 'scaleX(' + ssm(sav(hp, .52, .92)).toFixed(4) + ')';
  }
  var utolso = {}, pxIr = { tr: '', op: -1 }, telLathato = false;
  var mutat = null, eger = { x: 0, y: 0, cx: 0, cy: 0 };
  function allapot(k, s) {
    var u = k.u, y;
    if (u._ragad) y = (s < u._ra ? u._ra - s : (s > u._rb ? u._rb - s : 0)) + u._y;
    else y = u._y - s;
    return { x: u._x, y: y, s: u._s, rz: k.rz || 0, rx: k.rx || 0, ry: k.ry || 0 };
  }
  function kulcsAllapot(k, s, indul) {
    if (k.elo) return allapot(k, s);
    if (k.kint) { var o = allapot(k, s); o.x = -(PW * o.s * .85) - W * .03; return o; }
    if (k.kiHero) { var h = allapot(k, T.hRa); h.x = -(PW * h.s * .9) - W * .04; h.y += H * .08; h.rz = -14; h.ry = 30; return h; }
    return allapot(k, k.ref != null ? k.ref : T.tour);
  }
  var aktivKulcs = 0;
  function telefon() {
    var s = SMY, i = 0;
    while (i < KULCS.length - 1 && s > KULCS[i].b) i++;
    var A, B, t;
    if (i > 0 && s < KULCS[i].a) { A = KULCS[i - 1]; B = KULCS[i]; t = (s - A.b) / Math.max(1, B.a - A.b); }
    else { A = B = KULCS[i]; t = 1; }
    var e = ssm(t);
    var most = scrollY;
    var sa = kulcsAllapot(A, most, A !== B), sb = A === B ? sa : kulcsAllapot(B, most, false);
    var x = lerp(sa.x, sb.x, e), y = lerp(sa.y, sb.y, e), sc = lerp(sa.s, sb.s, e);
    var rz = lerp(sa.rz, sb.rz, e), rx = lerp(sa.rx, sb.rx, e), ry = lerp(sa.ry, sb.ry, e);
    var hull = Math.sin(Math.PI * cl(t, 0, 1));
    if (A !== B) {
      var irany = sb.x >= sa.x ? 1 : -1;
      if (B.ut === 'fordul') { ry = t < .5 ? 180 * e : -180 * (1 - e); x = sa.x; y = sa.y; sc = sa.s * (1 - .06 * hull); }
      else if (B.ut === 'zuhan') { ry += -10 * hull; rx += 12 * hull; }
      else if (B.ut === 'kozel') { sc *= 1 + .1 * hull; ry += irany * 10 * hull; }
      else { ry += irany * 18 * hull; rx += -4 * hull; y -= H * .035 * hull; }
    }
    if (i === 0 && A === B && keszen) { var bk = ssm((performance.now() - billentKezd) / 1100); rx += -eger.cy * 5 * bk; ry += eger.cx * 7 * bk; }
    var rejt = A === B && (A.kint || A.kiHero);
    if (telLathato && rejt !== pxIr.rejt) { tel.classList.toggle('on', !rejt); pxIr.rejt = rejt; }
    var tr = 'translate3d(' + x.toFixed(1) + 'px,' + y.toFixed(1) + 'px,0) perspective(1900px) rotateZ(' + rz.toFixed(2) + 'deg) rotateY(' + ry.toFixed(2) + 'deg) rotateX(' + rx.toFixed(2) + 'deg) scale(' + sc.toFixed(4) + ')';
    if (tr !== pxIr.tr) { tel.style.transform = tr; pxIr.tr = tr; }
    var gl = A === B ? (i === 0 ? .9 : .55) : .4 + .25 * hull;
    if (Math.abs(gl - pxIr.gl) > .01) { tel.style.setProperty('--gl', gl.toFixed(2)); pxIr.gl = gl; }
    var latszik = {};
    if (A === B) latszik[A.kep] = [1, 0, 1];
    else if (B.ut === 'fordul') latszik[t < .5 ? A.kep : B.kep] = [1, 0, 1];
    else {
      var f = ssm((t - .28) / .44);
      if (A.kep === B.kep) latszik[A.kep] = [1, 0, 1];
      else { latszik[A.kep] = [1 - f * .7, -f * 28, 1]; latszik[B.kep] = [f > 0 ? 1 : 0, (1 - f) * 100, 2]; }
    }
    Object.keys(retegek).forEach(function (k) {
      var v = latszik[k] || [0, 0, 1], el = retegek[k];
      var kulcs = v[0].toFixed(3) + '|' + v[1].toFixed(2) + '|' + v[2];
      if (el._k === kulcs) return; el._k = kulcs;
      el.style.opacity = v[0]; el.style.transform = v[1] ? 'translate3d(' + v[1].toFixed(2) + '%,0,0)' : ''; el.style.zIndex = v[2];
      el.classList.toggle('lat', v[0] > 0);
    });
    var fx = latszik.hero ? (latszik.hero[1] === 0 ? latszik.hero[0] : 0) : 0;
    if (telFx._o !== fx) { telFx.style.opacity = fx; telFx.classList.toggle('lat', fx > .3); telFx._o = fx; }
    [A, B].forEach(function (k) {
      if (!k.sor) return;
      sorLepes(k.sor, (s - k.p0) / (k.p1 - k.p0));
    });
    for (var j = Math.max(0, i - 1); j < Math.min(KULCS.length, i + 3); j++) if (KULCS[j].sor) sorBetolt(KULCS[j].sor);
    aktivKulcs = i;
    return A !== B;
  }
  var ceCache = {};
  FEJ.forEach(function (f) {
    var el = fejEl[f.id];
    f.ce = $$('[data-ce]', el);
    f.li = $$('[data-at]', el);
    f.gl = $('.tour-bg [data-gl="' + f.id + '"]');
  });
  var tixA = $$('#tix a');
  var mtL = $('#mtL'), mtR = $('#mtR');
  function fejezetek() {
    var s = SMY, sh = H, aktiv = -1;
    FEJ.forEach(function (f, fi) {
      var be = fi === 0 ? sav(s, T.tour - .62 * sh, T.tour - .1 * sh) : sav(s, f.T + (f.a - f.T) * .42, f.a + .05 * sh);
      var kovT = fi < FEJ.length - 1 ? FEJ[fi + 1].T : T.tourEnd + 2 * sh;
      var kovA = fi < FEJ.length - 1 ? FEJ[fi + 1].a : kovT + 1;
      var ki = sav(s, kovT, kovT + (kovA - kovT) * .45);
      var lat = be > 0 && ki < 1;
      var el = fejEl[f.id];
      if (el._lat !== lat) { el.classList.toggle('lat', lat); el._lat = lat; }
      if (be > .5 && ki < .5) aktiv = fi;
      var gl = lat ? sm(be) * (1 - sm(ki)) : 0;
      if (f.id === 'wallet') { var jp = sav(s, f.p0, f.p1); gl *= .35 + .65 * sm((jp - .05) / .25); }
      if (f.gl && Math.abs((f.gl._o || 0) - gl) > .005) { f.gl.style.opacity = gl.toFixed(3); f.gl._o = gl; }
      if (!lat) return;
      var n = f.ce.length;
      f.ce.forEach(function (c, ci) {
        var tip = c.dataset.ce;
        var pb = ssm((be - ci * .07) / (1 - (n - 1) * .07 > .35 ? 1 - (n - 1) * .07 : .35));
        var pk = ssm((ki - (n - 1 - ci) * .03) / .7);
        var tr, op;
        if (tip === 'ln') { tr = 'translate3d(0,' + ((1 - pb) * 145 - pk * 145).toFixed(1) + '%,0) rotate(' + ((1 - pb) * 4).toFixed(2) + 'deg)'; op = pb > 0 && pk < 1 ? 1 : 0; }
        else { tr = 'translate3d(0,' + ((1 - pb) * 46 - pk * 40).toFixed(1) + 'px,0)'; op = pb * (1 - pk); }
        if (c._tr !== tr) { c.style.transform = tr; c._tr = tr; }
        if (c._op !== op) { c.style.opacity = op.toFixed(3); c._op = op; }
      });
      var jp2 = sav(s, f.p0, f.p1);
      var utolsoOn = null;
      f.li.forEach(function (li) {
        var on = jp2 >= parseFloat(li.dataset.at) && ki < .3;
        if (li._on !== on) { li.classList.toggle('on', on); li._on = on; }
        if (on) utolsoOn = li;
      });
      f.li.forEach(function (li) { var a = li === utolsoOn; if (li._akt !== a) { li.classList.toggle('akt', a); li._akt = a; } });
      if (f.fordul) {
        var masik = s >= (f.fa + f.fb) / 2;
        if (mtL._m !== masik) { mtL.classList.toggle('halk', masik); mtR.classList.toggle('halk', !masik); mtL._m = masik; }
      }
    });
    tixA.forEach(function (a, ai) {
      var on = ai === aktiv;
      if (a._on !== on) { a.classList.toggle('on', on); a._on = on; }
    });
  }
  var rvEl = $$('[data-rv]');
  var diszek = $$('[data-orn]');
  var szamok = $$('[data-szam]');
  function felfedesek() {
    var s = SMY;
    rvEl.forEach(function (el) {
      var top = el._top, d = el._d || 0;
      var vege = Math.min(top + d * H - .8 * H, MAXS);
      var p = ssm((s - vege + .32 * H) / (.32 * H));
      if (el._p === p) return; el._p = p;
      var tip = el.dataset.rv, tr = '', op = 1;
      if (tip === 'up') { tr = 'translate3d(0,' + ((1 - p) * 70).toFixed(1) + 'px,0)'; op = p; }
      else if (tip === 'ln') { tr = 'translate3d(0,' + ((1 - p) * 145).toFixed(1) + '%,0) rotate(' + ((1 - p) * 5).toFixed(2) + 'deg)'; }
      else if (tip === 'vn') { tr = 'translate3d(0,' + ((1 - p) * 55).toFixed(1) + 'px,0) skewX(' + ((1 - p) * -14).toFixed(2) + 'deg)'; op = p; }
      else if (tip === 'sl') { tr = 'scaleY(' + (.2 + .8 * p).toFixed(3) + ') rotate(' + ((1 - p) * 30).toFixed(1) + 'deg)'; op = p; }
      else if (tip === 'drop') { tr = 'translate3d(0,' + ((1 - p) * -140).toFixed(1) + '%,0)'; op = cl(p * 2, 0, 1); }
      else if (tip === 'hx') { tr = 'scaleX(' + p.toFixed(4) + ')'; op = 1; }
      else if (tip === 'pop') { tr = 'scale(' + (p < .7 ? p / .7 * 1.25 : 1.25 - (p - .7) / .3 * .25).toFixed(3) + ')'; op = cl(p * 3, 0, 1); }
      else { op = p; }
      el.style.transform = tr; el.style.opacity = op.toFixed(3);
      el.style.visibility = p <= 0 ? 'hidden' : '';
    });
    szamok.forEach(function (el) {
      var p = el.parentNode._p == null ? 1 : el.parentNode._p;
      var v = Math.round(parseInt(el.dataset.szam, 10) * ssm(p));
      if (el._v !== v) { el.textContent = v + '+'; el._v = v; }
    });
    diszek.forEach(function (el) {
      var se = el._sc ? (s < T.scRa ? s : (s < T.scRb ? T.scRa : s - (T.scRb - T.scRa))) : s;
      var d = se - el._ref;
      if (Math.abs(d) > H * 1.8) return;
      var k = parseFloat(el.dataset.k || .2), r = parseFloat(el.dataset.r || 0);
      var tr = 'translate3d(0,' + (-d * k).toFixed(1) + 'px,0) rotate(' + (d / H * r).toFixed(2) + 'deg)';
      if (el._tr !== tr) { el.style.transform = tr; el._tr = tr; }
    });
  }
  function fejlec() {
    var solid = SMY > 30;
    if (R._solid !== solid) { R.classList.toggle('solid', solid); R._solid = solid; }
  }
  var keszen = false, billentKezd = 0;
  function keret(now) {
    var dt = Math.min(64, now - (elozoIdo || now)); elozoIdo = now;
    var c = scrollY;
    if (Math.abs(c - SMY) > H * 1.5) SMY = c;
    else { SMY += (c - SMY) * (1 - Math.pow(1 - .16, dt / 16.67)); if (Math.abs(c - SMY) < .05) SMY = c; }
    eger.cx += (eger.x - eger.cx) * .08; eger.cy += (eger.y - eger.cy) * .08;
    var egerMozog = keszen && (Math.abs(eger.x - eger.cx) > .002 || Math.abs(eger.y - eger.cy) > .002 || now - billentKezd < 1200);
    if (SMY !== utolsoSMY || egerMozog) {
      telefon(); heroAtmenet(); fejezetek(); felfedesek(); fejlec();
      utolsoSMY = SMY;
    }
    if (SMY !== c || egerMozog || !keszen) requestAnimationFrame(keret);
    else fut = false;
  }
  function inditas() { if (!fut) { fut = true; elozoIdo = 0; requestAnimationFrame(keret); } }
  addEventListener('scroll', inditas, { passive: true });
  addEventListener('pointermove', function (ev) {
    eger.x = ev.clientX / W - .5; eger.y = ev.clientY / H - .5; inditas();
  }, { passive: true });
  var atmeretez = 0;
  var utolsoW = innerWidth, utolsoH = innerHeight;
  addEventListener('resize', function () {
    if (R.classList.contains('valt')) return;
    var w = innerWidth, h = innerHeight;
    if (w === utolsoW && Math.abs(h - utolsoH) < 140) return;
    utolsoW = w; utolsoH = h;
    clearTimeout(atmeretez); atmeretez = setTimeout(meres, 120);
  });
  function cel(nev) {
    if (nev === 'top') return 0;
    if (nev === 'ov') return T.hRb;
    if (nev === 'scene') return T.scene - H * .02;
    for (var i = 0; i < FEJ.length; i++) if (FEJ[i].id === nev) return FEJ[i].a + H * .02;
    return 0;
  }
  $$('[data-go]').forEach(function (a) {
    a.addEventListener('click', function (ev) {
      ev.preventDefault();
      scrollTo({ top: cel(a.dataset.go), behavior: 'smooth' });
    });
  });
  var ld = $('#ld'), ldSh = $('#ldSh'), ldIn = $('#ldIn'), ldMap = $('#ldMap');
  var ldBar = $('#ldBar'), ldSt = $$('#ldSt span');
  var lkV = $('.lk-v'), lkI = $('.lk-i'), lkB = $('.lk-b'), lkE = $('.lk-e'), lkD = $('.lk-d'), lkPP = $('.lk-pp'), lkPL = $('.lk-pl');
  var gorgetZar = function (ev) { ev.preventDefault(); };
  var zarBillentyu = function (ev) { if ([32, 33, 34, 35, 36, 38, 40].indexOf(ev.keyCode) >= 0) ev.preventDefault(); };
  addEventListener('wheel', gorgetZar, { passive: false });
  addEventListener('touchmove', gorgetZar, { passive: false });
  addEventListener('keydown', zarBillentyu);
  function kepKesz(src) {
    return new Promise(function (ok) {
      var im = new Image(); im.onload = function () { (im.decode ? im.decode() : Promise.resolve()).then(ok, ok); }; im.onerror = ok; im.src = src;
    });
  }
  var kapuk = [
    (D.fonts && D.fonts.ready) ? D.fonts.ready : Promise.resolve(),
    kepKesz('assets/screens/hero-map.webp'),
    kepKesz('assets/screens/map.webp'),
    kepKesz('assets/seq/map/000.webp'),
    kepKesz('assets/glow-lime.webp'),
    kepKesz('assets/glow-purple.webp')
  ];
  var kesz = 0, start = performance.now(), haladas = 0, cel_ = 0;
  kapuk.forEach(function (p) { p.then(function () { kesz++; }); });
  setTimeout(function () { kesz = kapuk.length; }, 6000);
  function heroKepernyo() {
    var r = heroUles.getBoundingClientRect();
    var sc = r.height / (PW * PH);
    var w = PW * .932 * sc, h = PW * 2.02556 * sc;
    return { x: r.left + PW * .034 * sc, y: r.top + PW * .034 * sc, w: w, h: h, cx: r.left + r.width / 2, cy: r.top + r.height / 2 };
  }
  function osszerak() {
    [lkV, lkI, lkB, lkE].forEach(function (el, i) {
      el.animate([{ transform: 'translateY(16px)', opacity: 0 }, { transform: 'none', opacity: 1 }],
        { duration: 820, delay: 100 + i * 60, easing: 'cubic-bezier(.22,1,.36,1)', fill: 'backwards' });
    });
    lkD.animate([{ transform: 'scale(0)' }, { transform: 'scale(1.35)', offset: .6 }, { transform: 'scale(1)' }],
      { duration: 520, delay: 520, easing: 'cubic-bezier(.34,1.56,.64,1)', fill: 'backwards' });
    var ki = 'cubic-bezier(.45,0,.55,1)', le = 'cubic-bezier(.25,.7,.35,1)';
    var T0 = 260, T1 = T0 + 330, D = 1250;
    lkPP.animate([
      { transform: 'translateY(-24.9%)', opacity: 0, offset: 0, easing: 'linear' },
      { transform: 'translateY(-5.1%)', opacity: .88, offset: .08, easing: le },
      { transform: 'translateY(21.6%)', opacity: 1, offset: .34, easing: ki },
      { transform: 'translateY(13.4%)', offset: .48 },
      { transform: 'translateY(13.4%)', offset: .56, easing: ki },
      { transform: 'translateY(-12.5%)', offset: .78, easing: ki },
      { transform: 'translateY(0)', offset: .96 },
      { transform: 'translateY(0)', opacity: 1, offset: 1 }
    ], { duration: D, delay: T0, fill: 'backwards' });
    lkPL.animate([
      { transform: 'translateY(-30%)', opacity: 0, offset: 0, easing: le },
      { transform: 'translateY(-1.4%)', opacity: 1, offset: .11, easing: le },
      { transform: 'translateY(13.4%)', offset: .22 },
      { transform: 'translateY(13.4%)', offset: .3, easing: 'ease-out' },
      { transform: 'translateY(17.5%)', offset: .33, easing: ki },
      { transform: 'translateY(6%)', offset: .66, easing: ki },
      { transform: 'translateY(-12.5%)', offset: .78, easing: ki },
      { transform: 'translateY(-7.4%)', offset: .89, easing: ki },
      { transform: 'translateY(0)', offset: .96 },
      { transform: 'translateY(0)', opacity: 1, offset: 1 }
    ], { duration: D, delay: T1, fill: 'backwards' });
    $('.lk-pp .lk-gl').animate([{ opacity: 0 }, { opacity: .9 }], { duration: 520, delay: T0 + 1080, easing: 'ease-out', fill: 'both' });
    $('.lk-pl .lk-gl').animate([{ opacity: 0 }, { opacity: .9 }], { duration: 520, delay: T1 + 1120, easing: 'ease-out', fill: 'both' });
  }
  var allapotSzoveg = 0;
  function statusz(n) {
    if (n <= allapotSzoveg) return;
    ldSt[allapotSzoveg].classList.remove('on'); ldSt[allapotSzoveg].classList.add('ki');
    ldSt[n].classList.add('on'); allapotSzoveg = n;
  }
  function toltes(now) {
    var el = now - start;
    var valos = kesz / kapuk.length;
    var also = Math.min(.92, el / 2600);
    var felsoH = Math.max(0, (el - 700) / 1300);
    cel_ = Math.min(Math.max(also, valos), felsoH, 1);
    if (valos >= 1) cel_ = Math.min(1, felsoH);
    haladas += (cel_ - haladas) * .12;
    if (cel_ >= 1 && haladas > .995) haladas = 1;
    ldBar.style.transform = 'scaleX(' + haladas.toFixed(4) + ')';
    if (haladas > .34) statusz(1);
    if (haladas > .67) statusz(2);
    if (haladas >= 1 && el > 2250) { kitart(); return; }
    requestAnimationFrame(toltes);
  }
  var KITART = 420, DUR = 1900;
  function kitart() {
    meres(); lapAlap();
    tel.classList.add('on'); tel.style.opacity = .01; telLathato = true;
    R.style.setProperty('--d0', ((KITART + DUR * .6) / 1000).toFixed(2) + 's');
    R.classList.add('zajos');
    R.classList.remove('pre');
    setTimeout(function () { requestAnimationFrame(zsugorit); }, KITART);
  }
  var LAP = null;
  function lapAlap() {
    var K = heroKepernyo();
    ldSh.style.left = K.x + 'px'; ldSh.style.top = K.y + 'px';
    ldSh.style.width = K.w + 'px'; ldSh.style.height = K.h + 'px';
    var VW = innerWidth, VH = innerHeight;
    var k0 = Math.max(VW / K.w, VH / K.h) * 1.015;
    var tx = VW / 2 - (K.x + K.w / 2), ty = VH / 2 - (K.y + K.h / 2);
    var t0 = 'translate(' + tx.toFixed(2) + 'px,' + ty.toFixed(2) + 'px) scale(' + k0.toFixed(5) + ')';
    ldSh.style.transform = t0;
    void ldSh.offsetWidth;
    ldSh.style.willChange = 'transform'; ldIn.style.willChange = 'transform, opacity';
    LAP = { k0: k0, t0: t0, tx: tx, ty: ty, cx: -tx, cy: -ty };
  }
  function bezier(p1x, p1y, p2x, p2y) {
    var cx = 3 * p1x, bx = 3 * (p2x - p1x) - cx, ax = 1 - cx - bx;
    var cy = 3 * p1y, by = 3 * (p2y - p1y) - cy, ay = 1 - cy - by;
    function sx(t) { return ((ax * t + bx) * t + cx) * t; }
    function sy(t) { return ((ay * t + by) * t + cy) * t; }
    function dx(t) { return (3 * ax * t + 2 * bx) * t + cx; }
    return function (x) {
      var t = x;
      for (var i = 0; i < 8; i++) { var e = sx(t) - x; if (Math.abs(e) < 1e-6) return sy(t); var d = dx(t); if (Math.abs(d) < 1e-6) break; t -= e / d; }
      var lo = 0, hi = 1; t = x;
      for (var j = 0; j < 40; j++) { var v = sx(t); if (Math.abs(v - x) < 1e-6) break; if (x > v) lo = t; else hi = t; t = (lo + hi) / 2; }
      return sy(t);
    };
  }
  function zsugorit() {
    ld.classList.add('nyit');
    var iv = bezier(.6, 0, .2, 1), N = 44, k0 = LAP.k0, lk = Math.log(k0);
    var sh = [], ci = [], mp = [], tp = [];
    for (var i = 0; i <= N; i++) {
      var t = i / N, p = iv(t), s = Math.exp(lk * (1 - p));
      sh.push({ offset: t, transform: 'translate(' + (LAP.tx * (1 - p)).toFixed(2) + 'px,' + (LAP.ty * (1 - p)).toFixed(2) + 'px) scale(' + s.toFixed(5) + ')' });
      ci.push({ offset: t, transform: 'translate(' + (LAP.cx * p).toFixed(2) + 'px,' + (LAP.cy * p).toFixed(2) + 'px) scale(' + (s / k0).toFixed(5) + ')', opacity: +(1 - sm((2.1 - s) / .95)).toFixed(3) });
      mp.push({ offset: t, opacity: +sm((3.2 - s) / 1.9).toFixed(3) });
      tp.push({ offset: t, opacity: +Math.max(.01, sm((1.7 - s) / .62)).toFixed(3) });
    }
    var o = { duration: DUR, easing: 'linear', fill: 'forwards' };
    var a1 = ldSh.animate(sh, o);
    ldIn.animate(ci, o); ldMap.animate(mp, o); tel.animate(tp, o);
    a1.finished.then(function () {
      tel.style.opacity = 1;
      ld.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 300, easing: 'ease-out', fill: 'forwards' }).finished.then(function () {
        R.classList.add('kesz');
        keszen = true; billentKezd = performance.now();
        setTimeout(function () { R.classList.add('kesz2'); }, 900);
        removeEventListener('wheel', gorgetZar); removeEventListener('touchmove', gorgetZar); removeEventListener('keydown', zarBillentyu);
        inditas();
      });
    });
  }
  window.__vibe = { T: T, FEJ: FEJ, KULCS: function () { return KULCS; }, H: function () { return H; } };
  function rajt() {
    meres();
    lapAlap();
    keret(performance.now());
    osszerak();
    requestAnimationFrame(toltes);
  }
  if (D.readyState === 'loading') D.addEventListener('DOMContentLoaded', rajt); else rajt();
  if (D.fonts && D.fonts.ready) D.fonts.ready.then(function () { if (!keszen) heroBetu(); });
  addEventListener('load', function () { if (keszen) meres(); });
})();
