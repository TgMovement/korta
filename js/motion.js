/* Якорь из адреса. Браузер прыгает к #join ещё на середине загрузки, а
   scroll-behavior: smooth и доезжающие шрифты сбивают прокрутку на верх —
   человек по QR попадал не на «Запишитесь парой», а на первый экран.
   Досылаем прокрутку после load, по финальной раскладке. Если человек уже
   тронул страницу сам — не мешаем. */
(function () {
  if (!location.hash || location.hash.length < 2) return;

  var touched = false;
  ['wheel', 'touchstart', 'keydown'].forEach(function (type) {
    window.addEventListener(type, function () { touched = true; }, { passive: true, once: true });
  });

  function jump() {
    if (touched) return;
    var el;
    try { el = document.querySelector(location.hash); } catch (e) { return; }
    if (!el) return;
    var root = document.documentElement;
    var prev = root.style.scrollBehavior;
    root.style.scrollBehavior = 'auto';
    el.scrollIntoView();
    root.style.scrollBehavior = prev;
  }

  window.addEventListener('load', function () {
    jump();
    setTimeout(jump, 150);
  });
})();

/* Появление блоков при прокрутке и липкая кнопка на телефоне.
   Класс js-motion ставится отсюда: без JS страница остаётся полностью видимой. */
(function () {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) return;

  document.documentElement.classList.add('js-motion');

  function ready(fn) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn);
    else fn();
  }

  ready(function () {
    var targets = document.querySelectorAll('main > section');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.classList.add('is-in');
        io.unobserve(e.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.04 });

    targets.forEach(function (el, i) {
      // первый экран показываем сразу — он должен быть виден без прокрутки
      if (i === 0) { el.classList.add('is-in'); return; }
      el.classList.add('k-reveal');
      io.observe(el);
    });

    var cta = document.querySelector('.k-sticky-cta');
    if (cta) {
      var anchor = document.querySelector('main > section');
      var io2 = new IntersectionObserver(function (entries) {
        cta.classList.toggle('is-in', !entries[0].isIntersecting);
      }, { threshold: 0 });
      io2.observe(anchor);
    }
  });
})();
